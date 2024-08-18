import { css, html } from "lit";
import { LitElement } from "lit"
// import "@shoelace-style/shoelace/dist/components/button/button.js"

export class StackblitzButton extends LitElement {
  static properties = {
    dependencies: {type: Object},
    projectDescription: {},
    projectTitle: {},
    files: {type: Object},
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
    this.projectDescription = "diff view element playground",
    this.files = {
      ".gitignore": this.gitIgnore(),
      ["main.js"]: `import "diff-view-element"`,
      ["index.html"]: this.indexHTML(),
      ["package.json"]: this.packageJSON(),
    }
  }

  willUpdate(changedProperties) {
    if (changedProperties.has("dependencies")) {
      this.files["package.json"] = this.packageJSON()
      this.files = {...this.files}
    }
    super.willUpdate(changedProperties)
  }

  get isLocal () {
    return new URL(document.baseURI).host.includes("localhost")
  }

  replaceScriptTags (str) {
    return str.replaceAll(/&lt;\/script>/g, "</script>")
  }

  connectedCallback () {
    super.connectedCallback()

    customElements.whenDefined("light-preview").then(() => {
      setTimeout(async () => {
        this.files["index.html"] = this.indexHTML(this.replaceScriptTags(this.closest("light-preview").code))

        // Vendor files on localhost
        if (this.isLocal) {
          const vendored_files = await (await fetch("/diff-view-element/vendor.json")).json()

          Object.entries(vendored_files).forEach(([filename, content]) => {
            this.files[`vendor/diff-view-element/${filename}`] = content
          })
        } else {
          // Use a version number for all others.
          this.files["package.json"] = this.packageJSON()
        }

        this.files = {...this.files}
        this.requestUpdate()
      })
    })
  }

  gitIgnore () {
    return `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?`
  }

  packageJSON () {
    const version = this.isLocal ? "file:./vendor/diff-view-element" : document.querySelector("meta[name='version-number']").content
    return `{
      "name": "diff-view-element-starter",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
      },
      "dependencies": {
        "diff-view-element": "${version}"
      },
      "devDependencies": {
        "vite": "^5.4.0"
      },
      "stackblitz": {
        "startCommand": "npm run dev"
      }
    }`
  }


  indexHTML (str) {
    return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <script type="module" src="/main.js"></script>
  </head>
  <body>
    ${str || ""}
  </body>
</html>
`
  }

  renderFiles () {
    return Object.entries(this.files).map(([filename, content]) => {
      return html`<input type="hidden" name="${`project[files][${filename}]`}" value="${content}">`
    })
  }

  render () {
    return html`
      <form action="https://stackblitz.com/run"  method="POST" target="_blank" rel="nofollow noopener">
        <input type="hidden" name="project[title]" value="${this.projectTitle}">
        <input type="hidden" name="project[description]" value="${this.projectDescription}">
        <input type="hidden" name="project[template]" value="node">
        ${this.renderFiles()}
        <button><span aria-label="Create stackblitz playground">Stackblitz</span> <external-icon></external-icon></button>
      </form>
    `
  }
}

if (!customElements.get("stackblitz-button")) {
  customElements.define("stackblitz-button", StackblitzButton)
}
