import{a as s}from"/diff-view-element/pull/2/bridgetown/static/chunks/chunk-UDCP6MQK.js";import{a as i}from"/diff-view-element/pull/2/bridgetown/static/chunks/chunk-DKVM2WEN.js";import{a as l,b as a,e as p}from"/diff-view-element/pull/2/bridgetown/static/chunks/chunk-NDFDLMZF.js";import{c as e}from"/diff-view-element/pull/2/bridgetown/static/chunks/chunk-EOJNL6KJ.js";import"/diff-view-element/pull/2/bridgetown/static/chunks/chunk-FPINTGQA.js";import{a as r,d as o}from"/diff-view-element/pull/2/bridgetown/static/chunks/chunk-Q57CISJS.js";import"/diff-view-element/pull/2/bridgetown/static/chunks/chunk-JLZG3RAX.js";var n=r`
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
//# sourceMappingURL=/diff-view-element/pull/2/bridgetown/static/chunks/tab-panel-2WBUJKCK.js.map
