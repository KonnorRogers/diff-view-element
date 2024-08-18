import{a as b}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-YUPBGKZA.js";import"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-VTP447U7.js";import{a as g}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-OQWISF4M.js";import"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-5XOAZLJ2.js";import{a as n,b as p,c,d,e as h}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-BI52JWBQ.js";import{a as _}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-XRVORVSO.js";import{a as y}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-Y3JL4ULN.js";import{a as l}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-R2QSXZ7Z.js";import{a as u,b as a,d as f,e as v}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-5JKG2NHI.js";import"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-GB6XP4ZM.js";import{c as e}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-KLYRE3T4.js";import"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-7P2XAJEK.js";import"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-IU244PRF.js";import"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-KME4JDIW.js";import{a as m,d as s}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-23QV2L4Y.js";import"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-WQD5PCYL.js";var w=m`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`;var r=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),t=class extends v{constructor(){super(...arguments),this.hasSlotController=new g(this,"icon","suffix"),this.localize=new _(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await h(this.base),this.base.hidden=!1;let{keyframes:o,options:i}=p(this,"alert.show",{dir:this.localize.dir()});await d(this.base,o,i),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await h(this.base);let{keyframes:o,options:i}=p(this,"alert.hide",{dir:this.localize.dir()});await d(this.base,o,i),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,c(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,c(this,"sl-after-hide")}async toast(){return new Promise(o=>{r.parentElement===null&&document.body.append(r),r.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{r.removeChild(this),o(),r.querySelector("sl-alert")===null&&r.remove()},{once:!0})})}render(){return s`
      <div
        part="base"
        class=${y({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?s`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};t.styles=[u,w];t.dependencies={"sl-icon-button":b};e([f('[part~="base"]')],t.prototype,"base",2);e([a({type:Boolean,reflect:!0})],t.prototype,"open",2);e([a({type:Boolean,reflect:!0})],t.prototype,"closable",2);e([a({reflect:!0})],t.prototype,"variant",2);e([a({type:Number})],t.prototype,"duration",2);e([l("open",{waitUntilFirstUpdate:!0})],t.prototype,"handleOpenChange",1);e([l("duration")],t.prototype,"handleDurationChange",1);n("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});n("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var C=t;t.define("sl-alert");export{C as default};
//# sourceMappingURL=/diff-view-element/pull/1/bridgetown/static/chunks/alert-X4OHYTQZ.js.map
