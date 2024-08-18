import{a as s}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-Y3JL4ULN.js";import{a as i}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-R2QSXZ7Z.js";import{a as l,b as a,e as p}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-5JKG2NHI.js";import{c as e}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-KLYRE3T4.js";import"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-KME4JDIW.js";import{a as r,d as o}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-23QV2L4Y.js";import"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-WQD5PCYL.js";var n=r`
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
//# sourceMappingURL=/diff-view-element/pull/1/bridgetown/static/chunks/tab-panel-4H6R6S7E.js.map
