import{a as o}from"/diff-view-element/bridgetown/static/chunks/chunk-MJ2WU6HA.js";import{a as i,b as a,e as l}from"/diff-view-element/bridgetown/static/chunks/chunk-N2NJ4525.js";import{c as t}from"/diff-view-element/bridgetown/static/chunks/chunk-MNI632AM.js";import{a as e}from"/diff-view-element/bridgetown/static/chunks/chunk-Q6BALMEJ.js";import"/diff-view-element/bridgetown/static/chunks/chunk-LYQAZIFY.js";var s=e`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;var r=class extends l{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};r.styles=[i,s];t([a({type:Boolean,reflect:!0})],r.prototype,"vertical",2);t([o("vertical")],r.prototype,"handleVerticalChange",1);var p=r;r.define("sl-divider");export{p as default};
//# sourceMappingURL=/diff-view-element/bridgetown/static/chunks/divider-4J3KWJB5.js.map
