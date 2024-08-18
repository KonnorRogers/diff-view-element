import { css, html } from "lit";
import { LitElement } from "lit"
// import "@shoelace-style/shoelace/dist/components/button/button.js"

export class CodepenButton extends LitElement {
  static properties = {
    projectDescription: {},
    projectTitle: {},
    html: {},
    css: {},
    js: {},
  }

  static styles = [
    css`
      :host {
        display: block;
        box-sizing: border-box;
        height: 100%;
      }

      form {
        height: 100%;
        display: block;
      }

      *, *:after, *:before {
        box-sizing: border-box;
      }

      /* sometimes referred to as .sr-only */
      [visually-hidden]:not(:focus):not(:active):not(:focus-within) {
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: 1px;
      }

      button {
        font: inherit;
        appearance: none;
        -webkit-appearance: none;
        background-color: inherit;
        padding: 0.4em 0.8em;
        color: inherit;
        border: 1px solid lightgray;
        border-bottom-color: transparent;
        border-right-color: transparent;
        height: 100%;
        border-radius: 0;
        width: 100%;
      }

      button:focus-visible {
        outline: var(--sl-focus-ring);
      }

      button:hover {
        cursor: pointer;
        background-color: var(--sl-color-primary-50);
        border-color: var(--sl-color-primary-300);
        color: var(--sl-color-primary-700);
      }

      svg {
        width: 8ch;
        height: 100%;
        pointer-events: none;
      }
    `
  ]

  constructor () {
    super()
    this.projectTitle = "diff-view-element-starter",
    this.projectDescription = "diff view element playground"
    this.html = ""
    this.css = ""
    this.js = ""
  }

  get versionNumber () {
    return document.querySelector("meta[name='version-number']").content
  }

  get preamble () {
    return `<script type="module" src="https://cdn.jsdelivr.net/npm/diff-view-element@${this.versionNumber}/cdn/exports/index.js"></script>` + "\n"
  }

  get postamble () {
    return ``
  }

  connectedCallback () {
    super.connectedCallback()

    customElements.whenDefined("light-preview").then(() => {
      setTimeout(async () => {
        this.html = this.closest("light-preview").code
        this.requestUpdate()
      })
    })
  }

  escapeQuotes (str) {
    return str
    // Quotes will screw up the JSON
    .replace(/"/g, "&quot;") // careful copy and pasting, I had to use a zero-width space here to get markdown to post this.
    .replace(/'/g, "&apos;")
  }

  render () {
    const json = this.escapeQuotes(JSON.stringify({
      title: this.projectTitle,
      description: this.projectDescription,
      html: this.preamble + this.html + this.postamble,
      css: this.css,
      js: this.js,
    }))
    return html`
      <form action="https://codepen.io/pen/define" method="POST" target="_blank">
        <input type="hidden" name="data" value=${json}>

        <button><span aria-label="Open in codepen playground">Codepen</span> <external-icon></external-icon></button>
      </form>
    `
  }
}

if (!customElements.get("codepen-button")) {
  customElements.define("codepen-button", CodepenButton)
}

