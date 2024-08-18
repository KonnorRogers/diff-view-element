import{a as s}from"/diff-view-element/pull/3/bridgetown/static/chunks/chunk-4DTKL3IJ.js";import{a as i}from"/diff-view-element/pull/3/bridgetown/static/chunks/chunk-XNH2BAO5.js";import{a as l,b as a,e as p}from"/diff-view-element/pull/3/bridgetown/static/chunks/chunk-WSCFA5Z6.js";import{c as e}from"/diff-view-element/pull/3/bridgetown/static/chunks/chunk-LKIFJTGM.js";import"/diff-view-element/pull/3/bridgetown/static/chunks/chunk-72B2A34G.js";import{a as r,d as o}from"/diff-view-element/pull/3/bridgetown/static/chunks/chunk-IAX4ORIT.js";import"/diff-view-element/pull/3/bridgetown/static/chunks/chunk-H5MLULXR.js";var n=r`
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
//# sourceMappingURL=/diff-view-element/pull/3/bridgetown/static/chunks/tab-panel-7L2IS7RU.js.map
