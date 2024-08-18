import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { Token } from "prism-esm";

import { baseStyles } from "../../styles/base-styles.js";
import { componentStyles } from "./diff-view-element.styles.js";
import { theme } from "../../styles/default-theme.styles.js";

import {
  createPrismInstance,
  PrismEnv,
} from "../../../internal/prism-highlight.js";
import { LineNumberPlugin } from "../../../internal/line-number-plugin.js";
import { LineHighlightWrapPlugin } from "../../../internal/line-highlight-plugin.js";
import BasicDiffViewElement from "../basic-diff-view-element/basic-diff-view-element-register.js";

/**
 * @typedef {import("../basic-diff-view-element/basic-diff-view-element.js").LineDiffData} LineDiffData
 */

class CustomToken extends Token {
  /**
   * @param {ConstructorParameters<typeof Token>} args
   */
  constructor(...args) {
    super(...args);

    /**
     * @type {null | number}
     */
    this.lineNumber = null;
  }
}

const DIFF_CONVERTER = /** @const */ ({
  added: "inserted",
  removed: "deleted",
})

/**
 * A diff viewer complete with PrismJS for syntax highlighting.
 * @customElement
 * @tagname diff-view-element
 * @documentation https://konnorrogers.github.io/diff-view-elements/components/diff-view-element
 * @status experimental
 * @since 1.0
 */
export default class DiffViewElement extends BasicDiffViewElement {
  /**
   * @override
   */
  static baseName = "diff-view-element";

  /**
   * @override
   */
  static styles = [baseStyles, theme, componentStyles];

  /**
   * @override
   */
  static get properties () {
    return /** @type {const} */ ({
      ...super.properties,
      language: {},
      highlighter: { attribute: false, state: true },
    });
  }

  constructor() {
    super();

    /**
     * The language to highlight for.
     * Supported languages out of the box are "plaintext", "html", "javascript", "markdown", "css", "js", "ts"
     * For more on how to add additional languages, check out the docs.
     *   [Adding languages for highlighting](/guides/adding-languages-for-highlighting)
     * @type {string}
     */
    this.language = "plaintext";

    /**
     * Points to an instance of Prism from "prism-esm" for adjusting highlighting, adding plugins, etc.
     * @type {ReturnType<typeof createPrismInstance>}
     */
    this.highlighter = createPrismInstance();
  }

  /**
   * Transform line info via side effects.
   * @override
   * @type {BasicDiffViewElement["transformLineInformation"]}
   */
  transformLineInformation (lineInfo) {
    super.transformLineInformation(lineInfo)
    this.syntaxHighlight(lineInfo)
  }

  /**
   * @override
   * @param {import("../../utils/compute-line-info.js").DiffInformation} diffInfo
   */
  renderLine(diffInfo) {
    return html`${unsafeHTML(/** @type {string} */ (diffInfo.value))}`;
  }

  /**
   * A plugin for Prism to add line numbers.
   * @param {import("../../utils/compute-line-info.js").LineInformation[]} lineInfo
   * @param {"right" | "left"} side
   */
  lineNumberPlugin(lineInfo, side) {
    return LineNumberPlugin({
      lineNumberStart: this.lineNumberStart,
      callback: (ary, index, tokens) => {
        // This token won't get used, but makes it easy to render things based on array index.
        const row = new Token("row", []);
        tokens.push(row);

        const lineData = lineInfo[index]
        if (!lineData) { return }

        const lineNumber = lineData[side]?.lineNumber
        const lineExists = lineNumber != null

        const lineTokens = [
          new CustomToken("gutter-cell",
            [new CustomToken("line-number", lineExists ? (lineNumber + this.lineNumberStart - 1).toString() : "")],
          ),
          new CustomToken("diff-marker", ""),
          new CustomToken("diff-line", ary),
        ];

        // Add line numbers so we can easily add diffs.
        lineTokens.forEach((token) => {
          token.lineNumber = lineExists ? lineNumber : null;

          if (Array.isArray(row.content)) {
            row.content.push(token);
          }
        });
      },
    });
  }
  /**
    * a "wrap" plugin for Prism to add parts to ever token.
    * @param {any} env
    */
  diffPartPlugin (env) {
    const cells = ["diff-line", "diff-marker", "gutter-cell"];

    const isTableCell = cells.some((str) => env.type.match(str))

    if (isTableCell) {
      env.tag = "td";
    }

    // Add wrap for `light-character-diff--${"removed" | "added"}`

    if (env.type.startsWith("character-diff")) {
      const [base, diffType] = env.type.split(/--/);

      const type = DIFF_CONVERTER[/** @type {keyof typeof DIFF_CONVERTER} */ (diffType)] || ""

      // part="character-diff character-diff--{inserted|deleted}"
      env.attributes["part"] = `${base} ${base}--${type}`;
    }

    // We dont need to add parts for our own custom tokens.
    if (env.type.startsWith("character-diff") || isTableCell) { return }

    // These are all tokens from Prism. Map their class name to a part for easy theming.
    env.attributes["part"] = `token ${env.type}`;
  }

  /**
   * @param {import("../../utils/compute-line-info.js").LineInformation[]} lineInfo
   */
  syntaxHighlight(lineInfo) {
    const leftObj = {
      value:
        /** @type {import("../../utils/compute-line-info.js").DiffInformation["value"]}  */ ([]),
      insertedLines: new Set(),
      deletedLines: new Set(),
    };

    const rightObj = {
      value:
        /** @type {import("../../utils/compute-line-info.js").DiffInformation["value"]}  */ ([]),
      insertedLines: new Set(),
      deletedLines: new Set(),
    };

    lineInfo.forEach((line) => {
      const leftLineInfo = /** @type {string} */ (line.left.value);
      if (line.left.type === "removed") {
        leftObj.deletedLines.add(line.left.lineNumber);
      }

      /** @type {string[]} */ (leftObj.value).push(leftLineInfo);

      const rightLineInfo = /** @type {string} */ (line.right.value);

      if (line.right.type === "added") {
        rightObj.insertedLines.add(line.right.lineNumber);
      }

      /** @type {string[]} */ (rightObj.value).push(rightLineInfo);
    });

    if (!this.highlighter) {
      this.highlighter = createPrismInstance();
    }

    this.highlighter.hooks.add(
      "wrap",
      this.diffPartPlugin,
    );
    this.highlighter.hooks.add(
      "wrap",
      /** @type {any} */ (LineHighlightWrapPlugin()),
    );

    const leftEnv = PrismEnv(
      /** @type {string[]} */ (leftObj.value).join("\n"),
      this.highlighter.languages[this.language],
      this.language,
      this.highlighter,
      {
        afterTokenize: [
          this.lineNumberPlugin(lineInfo, "left"),
          (env) => {
            env.tokens.forEach((wrapperToken) => {
              /** @type {CustomToken[]} */ (
                /** @type {Token} */ (wrapperToken).content
              ).forEach((token) => {
                if (typeof token === "string") return;

                if (token.lineNumber === null) { return }

                if (leftObj.deletedLines.has(token.lineNumber)) {
                  token.type += " deleted";
                }
              });
            });
          },
        ],
      },
    );

    leftEnv.tokens.forEach((token, index) => {
      const data = lineInfo[index]?.left?.data;

      if (typeof token === "string") {
        return;
      }

      if (data == null) {
        return;
      }

      this.modifyTokens(token, data);

      const line = Token.stringify(
        this.highlighter.util.encode(
          /** @type {import("prism-esm").Token[]} */ (token.content),
        ),
        this.language,
        this.highlighter,
      );
      lineInfo[index].left.value = line;
    });

    const rightEnv = PrismEnv(
      /** @type {string[]} */ (rightObj.value).join("\n"),
      this.highlighter.languages[this.language],
      this.language,
      this.highlighter,
      {
        afterTokenize: [
          this.lineNumberPlugin(lineInfo, "right"),
          (env) => {
            env.tokens.forEach((wrapperToken) => {
              /** @type {CustomToken[]} */ (
                /** @type {Token} */ (wrapperToken).content
              ).forEach((token) => {
                if (typeof token === "string") return;

                if (token.lineNumber === null) { return }
                if (rightObj.insertedLines.has(token.lineNumber)) {
                  token.type += " inserted";
                }
              });
            });
          },
        ],
      },
    );

    this.lineInfo = lineInfo

    rightEnv.tokens.forEach((token, index) => {
      const data = lineInfo[index]?.right?.data;

      if (typeof token === "string") {
        return;
      }

      if (data == null) {
        return;
      }

      this.modifyTokens(token, data);

      const line = Token.stringify(
        this.highlighter.util.encode(
          /** @type {import("prism-esm").Token[]} */ (token.content),
        ),
        this.language,
        this.highlighter,
      );
      lineInfo[index].right.value = line;
    });
  }

  /**
   * Modify tokens from Prism.
   * @param {Token} token
   * @param {LineDiffData[]} data_array
   */
  modifyTokens(token, data_array) {
    if (data_array.length <= 0) {
      return;
    }

    /**
     * @type {Array<import("../../utils/compute-line-info.js").DiffTypeValues>}
     */
    const important_types = ["removed", "added"];

    data_array.forEach((data) => {
      if (!important_types.includes(data.type)) {
        return;
      }

      // We only care about "removed" and "inserted"
      this.modifyToken(token, data);
    });
  }

  /**
   * Modifies a "TokenStreamItem" from Prism. T
   * @param {import("prism-esm/prism-core.js").TokenStreamItem} token
   * @param {LineDiffData} data
   * @param {{ offset: number, count: number, value: string, offsetValue: string }} [currentData={offset: 0, count: 0, value: "", offsetValue: ""}] - The current number of characters modified. Once this reaches data.length, terminates.
   */
  modifyToken(
    token,
    data,
    currentData = { offset: 0, count: 0, value: "", offsetValue: "" },
  ) {
    if (currentData.count >= data.length) {
      return;
    }

    const skippedTokens = ["gutter-cell", "diff-marker"];

    if (skippedTokens.some((tokenType) => token.type.match(tokenType))) {
      return;
    }

    if (typeof token.content === "string") {
      this.modifyTokenContent(
        /** @type {import("prism-esm/prism-core.js").TokenStreamItem & { touched: boolean; touchedIndexes: Set<number>}} */
        (token),
        null,
        data,
        currentData,
      );
      return;
    }

    if (token.content.length <= 0) {
      return;
    }

    for (let i = 0; i < token.content.length; i++) {
      const child_token = token.content[i];

      if (typeof child_token === "string") {
        this.modifyTokenContent(
          /** @type {import("prism-esm/prism-core.js").TokenStreamItem & { touched: boolean; touchedIndexes: Set<number>}} */
          (token),
          i,
          data,
          currentData,
        );
      } else {
        this.modifyToken(child_token, data, currentData);
      }
    }
  }

  /**
   * @param {import("prism-esm/prism-core.js").TokenStreamItem & { touched: boolean; touchedIndexes: Set<number> }} token
   * @param {null | number} index
   * @param {LineDiffData} data
   * @param {*} currentData
   */
  modifyTokenContent(token, index, data, currentData) {
    const content = index == null ? token.content : token.content[index];

    if (typeof content !== "string") {
      return;
    }

    if (token.touchedIndexes == null) {
      token.touchedIndexes = new Set();
    }

    if (index != null && token.touchedIndexes.has(index)) {
      currentData.offset += content.length;
      currentData.offsetValue += content;
      return;
    }

    if (index == null && token.touched) {
      currentData.offset += content.length;
      currentData.offsetValue += content;
      return;
    }

    if (index == null) {
      token.touched = true;
    }

    if (index != null) {
      token.touchedIndexes.add(index);
    }

    const offsetStart = currentData.offset;
    const offsetEnd = currentData.offset + content.length;

    if (offsetStart > data.offset + data.length) {
      currentData.offset += content.length;
      currentData.offsetValue += content;
      return;
    }

    if (offsetEnd < data.offset) {
      currentData.offset += content.length;
      currentData.offsetValue += content;
      return;
    }

    const localOffset = Math.max(data.offset - currentData.offset, 0);
    const length = data.length - currentData.count;

    const beforeContent = content.substring(0, localOffset);
    const currentContent = content.substring(localOffset, localOffset + length);
    currentData.count += currentContent.length;
    const afterContent = content.substring(localOffset + currentContent.length);
    currentData.value += currentContent;

    currentData.offset += content.length;
    currentData.offsetValue += content;

    if (index != null) {
      token.touchedIndexes.add(index + 1);
      token.touchedIndexes.add(index + 2);
    }

    const newToken = new Token(
      `character-diff--${data.type}`,
      currentContent,
    );

    /** @type {Token & { touched: boolean }} */ (newToken).touched = true;
    const newContent = [beforeContent, newToken, afterContent];

    if (index != null) {
      /** @type {(string | import("prism-esm/prism-core.js").TokenStreamItem)[]} */ (
        token.content
      ).splice(index, 1, ...newContent);
    } else {
      token.content = newContent;
    }
  }
}
