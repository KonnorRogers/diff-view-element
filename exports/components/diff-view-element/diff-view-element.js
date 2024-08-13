import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { Token } from "prism-esm";
// import { getDiffableHTML } from '@open-wc/semantic-dom-diff/get-diffable-html.js';

import { BaseElement } from "../../../internal/base-element.js";
import { baseStyles } from "../../styles/base-styles.js";
import { componentStyles } from "./diff-view-element.styles.js";
import { theme } from "../../styles/default-theme.styles.js";

import { computeLineInformation } from "../../utils/compute-line-info.js";

import {
  createPrismInstance,
  PrismEnv,
} from "../../../internal/prism-highlight.js";
import { replaceLast } from "../../../internal/replace-functions.js";
import { LineNumberPlugin } from "../../../internal/line-number-plugin.js";
import { LineHighlightWrapPlugin } from "../../../internal/line-highlight-plugin.js";
import { elementsToString } from "../../../internal/elements-to-strings.js";
import { dedent } from "../../../internal/dedent.js";

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

/**
 * @typedef {object} LineDiffData
 * @property {number} length - length of the diff.
 * @property {import("../../utils/compute-line-info.js").DiffTypeValues} type - The type of diff
 * @property {number} offset - The offset along the X axis where the diff starts.
 * @property {string} offsetValue - The characters prior to the current char diff
 * @property {string} value - The current value from diffInfo for the line. Mainly used for debugging.
 */

/**
 * @customElement
 * @tagname diff-view-element
 * @summary Short summary of the component's intended use.
 * @documentation https://konnorrogers.github.io/diff-view-kit/components/diff-view-element
 * @status experimental
 * @since 1.0
 */
export default class DiffViewElement extends BaseElement {
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
  static properties = /** @type {const} */ ({
    view: {},
    newValue: {attribute: "new-value"},
    oldValue: {attribute: "old-value"},

    disableHighlight: { type: Boolean, attribute: "disable-highlight" },
    preserveWhitespace: { type: Boolean, attribute: "preserve-whitespace" },
    disableLineNumbers: {
      type: Boolean,
      reflect: true,
      attribute: "disable-line-numbers",
    },
    lineNumberStart: { type: Number, attribute: "line-number-start" },
    wrap: { reflect: true, attribute: "wrap" },
    language: {},
    highlighter: { attribute: false, state: true },
  });

  constructor() {
    super();

    /**
     * The value to be displayed on the right in a split view
     * @type {string}
     */
    this.newValue = "";

    /**
     * The value to be displayed on the right in a split view
     * @type {string}
     */
    this.oldValue = "";

    /**
     * Side by side comparison of the diff
     * @type {"split"}
     */
    this.view = "split";

    // Light Code properties to forward

    /**
     * The language to highlight for.
     * Supported languages out of the box are "plaintext", "html", "javascript", "markdown", "css", "js", "ts"
     * For more on how to add additional languages, check out the docs.
     *   [Adding languages for highlighting](/guides/adding-languages-for-highlighting)
     * @type {string}
     */
    this.language = "plaintext";

    /**
     * @type {Boolean}
     * Whether or not to preserve white spaces from templates and attempt to dedent and chomp new lines.
     */
    this.preserveWhitespace = false;

    /**
     * If disabled, its on you to provide `<pre><code></code></pre>`
     * @type {boolean}
     */
    this.disableHighlight = false;

    /**
     * @type {boolean} whether or not to disable line numbers
     */
    this.disableLineNumbers = false;

    /**
     * Where to start counting indexes in the gutter. Note, this is purely for display purposes.
     * @type {number}
     */
    this.lineNumberStart = 1;

    /**
     * We will take the code, wrap it in `<pre><code></code></pre>` and run it through
     * Prism.js.
     * If the element has `disableHighlight`, we will not touch their code. Instead they must pass in escapedHTML.
     * @type {string}
     */
    this.code = "";

    /**
     * Points to an instance of Prism from "prism-esm" for adjusting highlighting, adding plugins, etc.
     * @type {ReturnType<typeof createPrismInstance>}
     */
    this.highlighter = createPrismInstance();

    /**
     * @property
     * @type {"soft" | "hard"}
     * If `wrap="soft"`, lines will wrap when they reach the edge of their container. If `wrap="none"`, lines will not wrap instead all the user to scroll horizontally to see more code.
     */
    this.wrap = "hard";

    /**
     * Whether or not to transform `&lt;/script>` into `<script>`
     * If true, will run transform. If false, will leave the code as is.
     *
     * @type {"all" | "last" | "none"}
     */
    this.unescapeBehavior = "all";

    this.newLineRegex = /\r\n|\r|\n/;
  }

  /**
    * @override
   * @param {import("lit").PropertyValues<typeof DiffViewElement["properties"]>} changedProperties
   */
  willUpdate(changedProperties) {
    if (!this.preserveWhitespace) {
      if (this.oldValue && changedProperties.has("oldValue")) {
        this.oldValue = dedent(this.oldValue.trim());
      }

      if (this.newValue && changedProperties.has("newValue")) {
        this.newValue = dedent(this.newValue.trim());
      }
    }

    return super.willUpdate(changedProperties)
  }

  /**
   * @param {Event} e
   */
  handleSlottedValues (e) {
    const slot = e.target
    if (!(slot instanceof HTMLSlotElement)) { return }

    let elements = slot.assignedElements({ flatten: true });
    let value = this.unescapeTags(elementsToString(...elements));

    if (slot.name === "old-value") {
      this.oldValue = value
    }

    if (slot.name === "new-value") {
      this.newValue = value
    }
  }

  /**
   * @override
   */
  render() {
    const computedLines = computeLineInformation(this.oldValue, this.newValue);

    return html`
      <div part="base">
        <pre
          part="pre pre-${this.language}"
          class="diff-highlight language-${this.language}"
          style="overflow: auto; max-width: 100%; min-width: 100%; overflow-wrap: break-word; word-break: break-word; white-space: pre-wrap;"
        ><code
            part="code code-${this.language}"
            class="language-${this.language}"
	    style="white-space: inherit;"><table><tbody>${
	      this.renderDiff(computedLines)
	    }</tbody></table></code></pre>
      </div>

      <slot name="old-value" hidden @slotchange=${this.handleSlottedValues}></slot>
      <slot name="new-value" hidden @slotchange=${this.handleSlottedValues}></slot>
    `;
  }

  /**
   * @param {ReturnType<typeof computeLineInformation>} data
   */
  renderDiff(data) {
    /**
     * @type {import("lit").TemplateResult[]}
     */
    const finalHTML = [];

    this.transformLineInformation(data.lineInformation);
    this.syntaxHighlight(data.lineInformation);

    data.lineInformation.forEach((lineInfo, index) => {
      finalHTML.push(html`
        <tr>
          ${this.renderLine(lineInfo.left)} ${this.renderLine(lineInfo.right)}
        </tr>
      `);
    });

    return finalHTML;
  }

  /**
   * @param {import("../../utils/compute-line-info.js").DiffInformation} diffInfo
   */
  renderLine(diffInfo) {
    return html`${unsafeHTML(/** @type {string} */ (diffInfo.value))}`;
  }

  /**
   * @param {import("../../utils/compute-line-info.js").DiffInformation} obj
   */
  renderWord(obj) {
    return obj.value;
  }

  /**
   * @param {import("../../utils/compute-line-info.js").DiffInformation} diffInfo - diff info for right or light
   * @param {import("../../utils/compute-line-info.js").DiffInformation} diffInfoLine - diffInfo.value for right / left
   * @param {number} index
   * @returns {LineDiffData}
   */
  toWordData(diffInfo, diffInfoLine, index) {
    const offsetValue =
      /** @type {import("../../utils/compute-line-info.js").DiffInformation[]} */ (
        diffInfo.value
      )
        .slice(0, index)
        .map((obj) => obj.value || "")
        .join("") || "";

    const value =
      /** @type {import("../../utils/compute-line-info.js").DiffInformation[]} */ (
        diffInfo.value
      )
        .map((obj) => obj.value || "")
        .join("") || "";

    return {
      length: /** @type {string} */ (diffInfoLine.value).length,
      type: diffInfoLine.type || /** @type {"empty"} */ ("empty"),
      offset: offsetValue.length,
      offsetValue,
      value,
    };
  }

  /**
   * A plugin for Prism to add line numbers.
   * @param {import("../../utils/compute-line-info.js").LineInformation[]} lineInfo
   * @param {"right" | "left"} side
   */
  lineNumberPlugin(lineInfo, side) {
    let lineCount = 0;

    return LineNumberPlugin({
      lineNumberStart: this.lineNumberStart,
      callback: (ary, index, tokens) => {
        // This token won't get used, but makes it easy to render things based on array index.
        const row = new Token("row", []);
        tokens.push(row);


        // console.log(ary)
        // if (ary.length <= 0) {
        //   /** @type {import("prism-esm/prism-core.js").TokenStream} */ (
        //     row.content
        //   ).push(
        //     new CustomToken("gutter-cell", ""),
        //     new CustomToken("diff-marker", ""),
        //     new CustomToken("diff-line", " "),
        //   );
        //   return;
        // }

        const lineData = lineInfo[index]
        if (!lineData) { return }

        const lineNumber = lineData[side]?.lineNumber
        const lineExists = lineNumber != null

        const lineTokens = [
          new CustomToken("gutter-cell",
            [new CustomToken("line-number", lineExists ? (lineNumber).toString() : "")],
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
      // part="character-diff character-diff--{removed|added}"
      env.attributes["part"] = `${base} ${base}--${diffType}`;
    }

    // We dont need to add parts for our own custom tokens.
    if (env.type.startsWith("character-diff") || isTableCell) { return }

    // These are all tokens from Prism. Map their class name to a part for easy themeing.
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
   * @param {import("../../utils/compute-line-info.js").LineInformation[]} lineInformation
   */
  transformLineInformation(lineInformation) {
    const finalRight = [];
    const finalLeft = [];
    lineInformation.forEach((lineInfo) => {
      const rightInfo = lineInfo.right;
      rightInfo.data = [];

      if (Array.isArray(rightInfo.value)) {
        rightInfo.value = rightInfo.value
          .map((obj, index) => {
            if (rightInfo.data == null) {
              return;
            }
            rightInfo.data.push(this.toWordData(rightInfo, obj, index));
            return this.renderWord(obj);
          })
          .join("");
      } else {
        rightInfo.value = rightInfo.value || "";
      }

      finalRight.push(rightInfo.value);

      const leftInfo = lineInfo.left;
      leftInfo.data = [];

      if (Array.isArray(leftInfo.value)) {
        leftInfo.value = leftInfo.value
          .map((obj, index) => {
            if (leftInfo.data == null) {
              return;
            }
            leftInfo.data.push(this.toWordData(leftInfo, obj, index));
            return this.renderWord(obj);
          })
          .join("");
      } else {
        leftInfo.value = leftInfo.value || "";
      }

      finalLeft.push(leftInfo.value);
    });
    // Both right and left are now arrays of strings.
  }

  /**
   * Only used to unescape `&lt;/script>` into `</script>` from slotted content.
   * @internal
   * @param {string} text
   */
  unescapeTags(text) {
    const unescapeRegex = /&lt;\/script>/g;
    if (this.unescapeBehavior === "last") {
      return replaceLast(text, unescapeRegex);
    }

    if (this.unescapeBehavior === "all") {
      return text.replaceAll(unescapeRegex, "</$1>");
    }

    return text;
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
