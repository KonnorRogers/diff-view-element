import{a as s}from"/diff-view-element/bridgetown/static/chunks/chunk-3Y2C3T3Z.js";import{a as i}from"/diff-view-element/bridgetown/static/chunks/chunk-MJ2WU6HA.js";import{a as l,b as a,e as p}from"/diff-view-element/bridgetown/static/chunks/chunk-N2NJ4525.js";import{c as e}from"/diff-view-element/bridgetown/static/chunks/chunk-MNI632AM.js";import"/diff-view-element/bridgetown/static/chunks/chunk-WHYJXEJD.js";import{a as r,d as o}from"/diff-view-element/bridgetown/static/chunks/chunk-Q6BALMEJ.js";import"/diff-view-element/bridgetown/static/chunks/chunk-LYQAZIFY.js";var n=r`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;var m=0,t=class extends p{constructor(){super(...arguments),this.attrId=++m,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return o`
      <slot
        part="base"
        class=${s({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};t.styles=[l,n];e([a({reflect:!0})],t.prototype,"name",2);e([a({type:Boolean,reflect:!0})],t.prototype,"active",2);e([i("active")],t.prototype,"handleActiveChange",1);var d=t;t.define("sl-tab-panel");export{d as default};
//# sourceMappingURL=/diff-view-element/bridgetown/static/chunks/tab-panel-ELF5DVGC.js.map
