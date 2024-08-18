import { html } from "lit";

import { BaseElement } from "../../../internal/base-element.js";
import { baseStyles } from "../../styles/base-styles.js";
import { componentStyles } from "./basic-diff-view-element.styles.js";

import { computeLineInformation } from "../../utils/compute-line-info.js";

import { replaceLast } from "../../../internal/replace-functions.js";
import { elementsToString } from "../../../internal/elements-to-strings.js";
import { dedent } from "../../../internal/dedent.js";
import { basicTheme } from "../../styles/basic-theme.styles.js";

const DIFF_CONVERTER = /** @const */ ({
  added: "inserted",
  removed: "deleted",
})

/**
 * @typedef {object} LineDiffData
 * @property {number} length - length of the diff.
 * @property {import("../../utils/compute-line-info.js").DiffTypeValues} type - The type of diff
 * @property {number} offset - The offset along the X axis where the diff starts.
 * @property {string} offsetValue - The characters prior to the current char diff
 * @property {string} value - The current characters in the diff
 * @property {string} lineValue - The current value from diffInfo for the line. Mainly used for debugging.
 */

/**
 * A minimal version of `<diff-view-element>`. It does not implement PrismJS for syntax highlighting.
 * @customElement
 * @tagname basic-diff-view-element
 * @documentation https://konnorrogers.github.io/diff-view-element/components/basic-diff-view-element
 * @status experimental
 * @since 1.0
 */
export default class BasicDiffViewElement extends BaseElement {
  /**
   * @override
   */
  static baseName = "basic-diff-view-element";

  /**
   * @override
   */
  static styles = [
    baseStyles,
    componentStyles,
    basicTheme,
  ];

  /**
   * @override
   */
  static get properties () {
    return /** @type {const} */ ({
      view: {},
      newValue: {attribute: "new-value"},
      oldValue: {attribute: "old-value"},

      preserveWhitespace: { type: Boolean, attribute: "preserve-whitespace" },
      disableLineNumbers: {
        type: Boolean,
        reflect: true,
        attribute: "disable-line-numbers",
      },
      lineNumberStart: { type: Number, attribute: "line-number-start" },
      wrap: { reflect: true, attribute: "wrap" },
    })
  }

  constructor() {
    super();

    /**
     * The value to be displayed on the right in a split view
     * @type {string}
     */
    this.newValue = "";

    /**
     * The value to be displayed on the left in a split view
     * @type {string}
     */
    this.oldValue = "";

    /**
     * Side by side comparison of the diff. Currently the only view supported is "split" view (side by side).
     * @type {"split"}
     */
    this.view = "split";

    /**
     * The language to highlight for. This won't do much for `<basic-diff-view-element>`, but makes rendering consistent.
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
     * @type {boolean} whether or not to disable line numbers
     */
    this.disableLineNumbers = false;

    /**
     * Where to start counting indexes in the gutter. Note, this is purely for display purposes.
     * @type {number}
     */
    this.lineNumberStart = 1;

    /**
     * We will take the code, wrap it in `<pre><code></code></pre>` and run it through Prism.js.
     * @type {string}
     */
    this.code = "";

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
  }

  /**
   * Remove the "active-side" from the table element
   * @param {PointerEvent} e
   */
  handleTablePointerUp (e) {
    const table = this.shadowRoot?.querySelector("table")

    if (!table) { return }

    table.removeAttribute("active-side")
  }


  /**
   * Handles "pointerdown" events on the table. This is used for determined what side is "active" so that you could only ever "select" one side of the diff.
   * @param {PointerEvent} e
   */
  handleTablePointerDown (e) {
    const table = this.shadowRoot?.querySelector("table")

    if (!table) { return }

    const composedPath = e.composedPath()

    // <td>
    const td = /** @type {Element | null} */ (composedPath.find((el) => /** @type {Element} */ (el).tagName?.toLowerCase() === "td"))

    // <tr>
    const tr = /** @type {Element | null} */ (composedPath.find((el) => /** @type {Element} */ (el).tagName?.toLowerCase() === "tr"))

    if (!tr) {
      table.removeAttribute("active-side")
      return
    }
    if (!td) {
      table.removeAttribute("active-side")
      return
    }

    const index = [...tr.querySelectorAll("td")].findIndex((el) => el === td)

    if (index < 0 ) {
      table.removeAttribute("active-side")
      return
    }

    if (index < 3) {
      table.setAttribute("active-side", "left")
      return
    }

    table.setAttribute("active-side", "right")
  }

  /**
   * @override
   * @param {import("lit").PropertyValues<typeof BasicDiffViewElement["properties"]>} changedProperties
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
   * Turns slotted elements into strings to be consumed by oldValue / newValue.
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
          tabindex="0"
        ><code
            part="code code-${this.language}"
            class="language-${this.language}"
	><table
              part="table"
              @pointerdown=${this.handleTablePointerDown}
              @pointerup=${this.handleTablePointerUp}
            ><tbody part="table-body">${
	      this.renderDiff(computedLines)
	    }</tbody></table></code></pre>
      </div>

      <slot name="old-value" hidden @slotchange=${this.handleSlottedValues}></slot>
      <slot name="new-value" hidden @slotchange=${this.handleSlottedValues}></slot>
    `;
  }

  /**
   * The base entrypoint for rendering diffs. The return value of this will be inside of a `<tbody>`
   * @param {ReturnType<typeof computeLineInformation>} data
   */
  renderDiff(data) {
    /**
     * @type {import("lit").TemplateResult[]}
     */
    const finalHTML = [];

    this.transformLineInformation(data.lineInformation);

    data.lineInformation.forEach((lineInfo, index) => {
      finalHTML.push(html`
        <tr part="table-row">
          ${this.renderLine(lineInfo.left)} ${this.renderLine(lineInfo.right)}
        </tr>
      `);
    });

    return finalHTML;
  }

  /**
   * Renders a line on 1 side of the diff in split view.
   * @param {import("../../utils/compute-line-info.js").DiffInformation} diffInfo
   */
  renderLine(diffInfo) {
    let lineNumber = ""

    if (diffInfo.lineNumber != null) {
      lineNumber = (diffInfo.lineNumber + this.lineNumberStart - 1).toString()
    }

    /**
     * @type {string}
     */
    let diffType = diffInfo.type || ""

    if (diffType === "added") {
      diffType = "inserted"
    }

    if (diffType === "removed") {
      diffType = "deleted"
    }

    return html`
      <td part=${`gutter-cell gutter-cell--${diffType} ${diffType}`}><span part="line-number">${lineNumber}</span></td>
      <td part=${`diff-marker diff-marker--${diffType} ${diffType}`}></td>
      <td part=${`line line--${diffType} ${diffType}`}>${this.renderValue(diffInfo)}</td>
    `;
  }

  /**
   * Renders a value given a DiffInformation object
   * @param {import("../../utils/compute-line-info.js").DiffInformation} obj
   */
  renderValue(obj) {
    let value = /** @type {string | import("lit").TemplateResult[]} */ (obj.value)

    if (obj.data?.length) {
      value = obj.data.map((data) => {
        if (data.type === "removed" || data.type === "added") {
          return html`<span part=${`character-diff character-diff--${DIFF_CONVERTER[data.type]}`}>${data.value}</span>`
        } else {
          return html`<span>${data.value}</span>`
        }
      })
    }

    return value;
  }

  /**
   * A helper for finding data for a particular diff. This is useful for passing data further down especially for character diffs.
   * @param {import("../../utils/compute-line-info.js").DiffInformation} diffInfo - diff info for right or light
   * @param {import("../../utils/compute-line-info.js").DiffInformation} diffInfoLine - diffInfo.value for right / left
   * @param {number} index
   * @returns {LineDiffData}
   */
  toCharacterData(diffInfo, diffInfoLine, index) {
    const offsetValue =
      /** @type {import("../../utils/compute-line-info.js").DiffInformation[]} */ (
        diffInfo.value
      )
        .slice(0, index)
        .map((obj) => obj.value || "")
        .join("") || "";

    // The value for the full line.
    const lineValue =
      /** @type {import("../../utils/compute-line-info.js").DiffInformation[]} */ (
        diffInfo.value
      )
        .map((obj) => obj.value || "")
        .join("") || "";

    // The value for the current word within the line.
    // This should always be a string?
    const value = /** @type {string} */ (diffInfoLine.value) || ""

    return {
      length: /** @type {string} */ (diffInfoLine.value).length,
      type: diffInfoLine.type || /** @type {"empty"} */ ("empty"),
      offset: offsetValue.length,
      offsetValue,
      value,
      lineValue,
    };
  }

  /**
   * In charge of altering the diffs per-line information. This will get called just before rendering all of the `<tr>`s inside of `renderDiff`.
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
            rightInfo.data.push(this.toCharacterData(rightInfo, obj, index));
            return obj.value;
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
            leftInfo.data.push(this.toCharacterData(leftInfo, obj, index));
            return obj.value;
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
}

