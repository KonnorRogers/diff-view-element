import { html } from "lit";
import { LitElement } from "lit"
// import "@shoelace-style/shoelace/dist/components/button/button.js"

export class CodepenButton extends LitElement {
  static properties = {
    preamble: {},
    postamble: {},
    codepenTitle: {},
    description: {},
  }

  constructor () {
    super()
    /**
     * Any HTML to inject before the HTML code
     */
    this.preamble = ""

    /**
     * Any HTML to inject after the HTML code
     */
    this.postamble = ""

    this.data = {
      title              : "diff view pen",
      description        : "a codepen for <diff-view-element>",
      html               : "",
      html_pre_processor : "none",
      css                : "",
      css_pre_processor  : "none",
      css_starter        : "neither",
      css_prefix_free    : false,
      js                 : "",
      js_pre_processor   : "none",
      js_modernizr       : false,
      js_library         : "",
      html_classes       : "",
      css_external       : "",
      js_external        : "",
      template           : false
    };

  }

  get jsonString () {
    return JSON.stringify(this.data)
      // Quotes will screw up the JSON
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }

  render () {
    return html`
      <form action="https://codepen.io/pen/define" method="POST" target="_blank">
        <input type="hidden" name="data" .value=${this.jsonString}>
        <input type="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-1/cp-arrow-right.svg" width="40" height="40" value="Create New Pen with Prefilled Data" class="codepen-mover-button" @click=${(e) => {
          e.preventDefault()
          this.data.html = this.preamble + this.closest("light-preview").code + this.postamble
          this.shadowRoot.querySelector("input[type='hidden']").value = this.jsonString
          e.target.closest("form").requestSubmit(e.currentTarget)
        }}>
      </form>
    `
  }
}

if (!customElements.get("codepen-button")) {
  customElements.define("codepen-button", CodepenButton)
}
