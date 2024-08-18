import{b as Ft,d as R}from"/diff-view-element/pull/2/bridgetown/static/chunks/chunk-JLZG3RAX.js";var ce=globalThis,ue=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_e=Symbol(),Be=new WeakMap,Q=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==_e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ue&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=Be.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Be.set(t,e))}return e}toString(){return this.cssText}},Je=n=>new Q(typeof n=="string"?n:n+"",void 0,_e),H=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[s+1],n[0]);return new Q(t,n,_e)},Le=(n,e)=>{if(ue)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),i=ce.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,n.appendChild(r)}},he=ue?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return Je(t)})(n):n;var{is:It,defineProperty:kt,getOwnPropertyDescriptor:zt,getOwnPropertyNames:Vt,getOwnPropertySymbols:Wt,getPrototypeOf:jt}=Object,M=globalThis,Ye=M.trustedTypes,qt=Ye?Ye.emptyScript:"",Bt=M.reactiveElementPolyfillSupport,ee=(n,e)=>n,Re={toAttribute(n,e){switch(e){case Boolean:n=n?qt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Xe=(n,e)=>!It(n,e),Ge={attribute:!0,type:String,converter:Re,reflect:!1,hasChanged:Xe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),M.litPropertyMetadata??(M.litPropertyMetadata=new WeakMap);var N=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ge){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&kt(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){let{get:i,set:s}=zt(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return i?.call(this)},set(o){let a=i?.call(this);s.call(this,o),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ge}static _$Ei(){if(this.hasOwnProperty(ee("elementProperties")))return;let e=jt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ee("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee("properties"))){let t=this.properties,r=[...Vt(t),...Wt(t)];for(let i of r)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)t.unshift(he(i))}else e!==void 0&&t.push(he(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Le(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute!==void 0?r.converter:Re).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let s=r.getPropertyOptions(i),o=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Re;this._$Em=i,this[i]=o.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Xe)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[ee("elementProperties")]=new Map,N[ee("finalized")]=new Map,Bt?.({ReactiveElement:N}),(M.reactiveElementVersions??(M.reactiveElementVersions=[])).push("2.0.4");var ne=globalThis,fe=ne.trustedTypes,Ze=fe?fe.createPolicy("lit-html",{createHTML:n=>n}):void 0,rt="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,it="?"+P,Jt=`<${it}>`,z=document,re=()=>z.createComment(""),ie=n=>n===null||typeof n!="object"&&typeof n!="function",Pe=Array.isArray,Yt=n=>Pe(n)||typeof n?.[Symbol.iterator]=="function",Te=`[ 	
\f\r]`,te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ke=/-->/g,Qe=/>/g,I=RegExp(`>|${Te}(?:([^\\s"'>=/]+)(${Te}*=${Te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,tt=/"/g,st=/^(?:script|style|textarea|title)$/i,De=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),Y=De(1),kn=De(2),zn=De(3),V=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),nt=new WeakMap,k=z.createTreeWalker(z,129);function ot(n,e){if(!Pe(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ze!==void 0?Ze.createHTML(e):e}var Gt=(n,e)=>{let t=n.length-1,r=[],i,s=e===2?"<svg>":e===3?"<math>":"",o=te;for(let a=0;a<t;a++){let l=n[a],d,u,c=-1,h=0;for(;h<l.length&&(o.lastIndex=h,u=o.exec(l),u!==null);)h=o.lastIndex,o===te?u[1]==="!--"?o=Ke:u[1]!==void 0?o=Qe:u[2]!==void 0?(st.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=I):u[3]!==void 0&&(o=I):o===I?u[0]===">"?(o=i??te,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?I:u[3]==='"'?tt:et):o===tt||o===et?o=I:o===Ke||o===Qe?o=te:(o=I,i=void 0);let m=o===I&&n[a+1].startsWith("/>")?" ":"";s+=o===te?l+Jt:c>=0?(r.push(d),l.slice(0,c)+rt+l.slice(c)+P+m):l+P+(c===-2?a:m)}return[ot(n,s+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},se=class n{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let s=0,o=0,a=e.length-1,l=this.parts,[d,u]=Gt(e,t);if(this.el=n.createElement(d,r),k.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=k.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(rt)){let h=u[o++],m=i.getAttribute(c).split(P),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?Oe:f[1]==="?"?Ce:f[1]==="@"?He:J}),i.removeAttribute(c)}else c.startsWith(P)&&(l.push({type:6,index:s}),i.removeAttribute(c));if(st.test(i.tagName)){let c=i.textContent.split(P),h=c.length-1;if(h>0){i.textContent=fe?fe.emptyScript:"";for(let m=0;m<h;m++)i.append(c[m],re()),k.nextNode(),l.push({type:2,index:++s});i.append(c[h],re())}}}else if(i.nodeType===8)if(i.data===it)l.push({type:2,index:s});else{let c=-1;for(;(c=i.data.indexOf(P,c+1))!==-1;)l.push({type:7,index:s}),c+=P.length-1}s++}}static createElement(e,t){let r=z.createElement("template");return r.innerHTML=e,r}};function B(n,e,t=n,r){if(e===V)return e;let i=r!==void 0?t.o?.[r]:t.l,s=ie(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(n),i._$AT(n,t,r)),r!==void 0?(t.o??(t.o=[]))[r]=i:t.l=i),i!==void 0&&(e=B(n,i._$AS(n,e.values),i,r)),e}var Ne=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??z).importNode(t,!0);k.currentNode=i;let s=k.nextNode(),o=0,a=0,l=r[0];for(;l!==void 0;){if(o===l.index){let d;l.type===2?d=new oe(s,s.nextSibling,this,e):l.type===1?d=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(d=new Me(s,this,e)),this._$AV.push(d),l=r[++a]}o!==l?.index&&(s=k.nextNode(),o++)}return k.currentNode=z,i}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},oe=class n{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,t,r,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),ie(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==V&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Yt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&ie(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=se.createElement(ot(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{let s=new Ne(i,this),o=s.u(this.options);s.p(t),this.T(o),this._$AH=s}}_$AC(e){let t=nt.get(e.strings);return t===void 0&&nt.set(e.strings,t=new se(e)),t}k(e){Pe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,i=0;for(let s of e)i===t.length?t.push(r=new n(this.O(re()),this.O(re()),this,this.options)):r=t[i],r._$AI(s),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this.v=e,this._$AP?.(e))}},J=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,s){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=x}_$AI(e,t=this,r,i){let s=this.strings,o=!1;if(s===void 0)e=B(this,e,t,0),o=!ie(e)||e!==this._$AH&&e!==V,o&&(this._$AH=e);else{let a=e,l,d;for(e=s[0],l=0;l<s.length-1;l++)d=B(this,a[r+l],t,l),d===V&&(d=this._$AH[l]),o||(o=!ie(d)||d!==this._$AH[l]),d===x?e=x:e!==x&&(e+=(d??"")+s[l+1]),this._$AH[l]=d}o&&!i&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Oe=class extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},Ce=class extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},He=class extends J{constructor(e,t,r,i,s){super(e,t,r,i,s),this.type=5}_$AI(e,t=this){if((e=B(this,e,t,0)??x)===V)return;let r=this._$AH,i=e===x&&r!==x||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==x&&(r===x||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Me=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}};var Xt=ne.litHtmlPolyfillSupport;Xt?.(se,oe),(ne.litHtmlVersions??(ne.litHtmlVersions=[])).push("3.2.0");var at=(n,e,t)=>{let r=t?.renderBefore??e,i=r._$litPart$;if(i===void 0){let s=t?.renderBefore??null;r._$litPart$=i=new oe(e.insertBefore(re(),s),s,void 0,t??{})}return i._$AI(n),i};var D=class extends N{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=at(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return V}};D._$litElement$=!0,D.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:D});var Zt=globalThis.litElementPolyfillSupport;Zt?.({LitElement:D});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");function pe(n){var e;return e=class extends n{static define(r,i,s){r||(r=this.baseName),i||(i=this);let o=window.customElements;this.__registry instanceof CustomElementRegistry&&(o=this.__registry);let a=!!o.get(r);a&&this.warnOnExistingElement&&console.warn(`${r} has already been registered.`),!a&&i&&o.define(r,class extends i{},s)}},R(e,"baseName",""),R(e,"warnOnExistingElement",!1),e}var Ue=class extends pe(HTMLElement){};var lt=new WeakMap;function Kt(n,e){let t=e;for(;t;){if(lt.get(t)===n)return!0;t=Object.getPrototypeOf(t)}return!1}function ae(n){return e=>{if(Kt(n,e))return e;let t=n(e);return lt.set(t,n),t}}var me=!!ShadowRoot.prototype.createElement,Qt=n=>{var e;return e=class extends n{static get scopedElements(){return{}}static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(r){this.__shadowRootOptions=r}constructor(...r){super(...r),this.renderOptions=this.renderOptions||void 0}get registry(){return this.constructor.__registry}set registry(r){let i=this.constructor;i.__registry=r}createRenderRoot(){let r=this.constructor,{scopedElements:i,shadowRootOptions:s}=r;if(!this.registry||this.registry===r.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=me?new CustomElementRegistry:customElements;for(let[d,u]of Object.entries(i))this.defineScopedElement(d,u)}let a={mode:"open",...s,customElements:this.registry},l=this.attachShadow(a);return me&&(this.renderOptions.creationScope=l),l instanceof ShadowRoot&&this.adoptStyles(l),l}createScopedElement(r){return(me?this.shadowRoot:document).createElement(r)}adoptStyles(r){}defineScopedElement(r,i){let s=this.registry.get(r);return s&&me===!1&&s!==i&&console.error([`You are trying to re-register the "${r}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join(`
`)),s?this.registry.get(r):this.registry.define(r,i)}},R(e,"__registry",window.customElements),e},en=ae(Qt);var tn=n=>class extends n{static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(t){this.__shadowRootOptions=t}get shadowRootOptions(){return this.constructor.shadowRootOptions}createRenderRoot(){return this.shadowRoot??this.attachShadow(this.shadowRootOptions||{mode:"open"})}connectedCallback(){typeof super.connectedCallback=="function"&&super.connectedCallback(),this.renderRoot==null&&(this.renderRoot=this.createRenderRoot())}},nn=ae(tn);var dt="1.0.0";var G=class extends pe(D){constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{t.define(e)})}getTextDirection(){return this.matches(":dir(rtl)")?"rtl":"ltr"}};R(G,"dependencies",{}),R(G,"version",dt);var ct=H`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  :host(:dir(rtl)) *,
  :host(:dir(rtl)) *:after,
  :host(:dir(rtl)) *:before {
    direction: rtl;
  }

  :host(:dir(ltr)) *,
  :host(:dir(ltr)) *:after,
  :host(:dir(ltr)) *:before {
    direction: ltr;
  }

  .visually-hidden:not(:focus-within) {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    white-space: nowrap;
  }

  [hidden] {
    display: none !important;
  }

  :host {
    display: block;
  }
`,Or=H`
  button {
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid gray;
    background-color: inherit;
    padding: 0.4em 0.6em;
    color: inherit;
    border-radius: 4px;
  }

  button:focus-visible {
    outline: 2px solid hsl(203, 77%, 43%);
  }

  @supports not selector(:focus-visible) {
    button:focus-within {
      outline: 2px solid hsl(203, 77%, 43%);
    }
  }

  button:is(:active, :hover, .is-active) {
    cursor: pointer;
    color: hsla(203, 77%, 43%);
    background-color: hsla(203, 77%, 93%);
  }
`;var ut=H`
  :host {
    display: block;
  }

  [part~="base"] {
    max-height: 100%;
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
  }

  td {
    vertical-align: top;
  }

  code {
    display: block;
    white-space: inherit;
    overflow-wrap: inherit;
    word-break: inherit;
    white-space: inherit;
  }

  [part~="pre"] {
    max-width: 100%;
    min-width: 100%;
    overflow: auto;

    /** Always soft wrap with diffs. Overflows get weird. */
    overflow-wrap: break-word;
    word-break: break-word;
    white-space: pre-wrap;
  }

  [part~="gutter-cell"] {
    -webkit-user-select: none;
    user-select: none;
    font-variant-numeric: tabular-nums;
    color: rgba(0, 0, 0, 0.35);
    background-color: var(--syntax-bg);
    vertical-align: top;
    border-inline-end: 1px solid gray;
    word-break: normal;
    padding-top: 2px;
    padding-bottom: 2px;
    padding-inline-end: 8px;
    padding-inline-start: 20px;
    /** This innocuous "width: 1ch;" is what saves the gutter from taking up too much space. */
    width: 1ch;
  }

  [part~="line"] {
    text-align: start;
  }

  :host([disable-line-numbers]) [part~="gutter-cell"] {
    display: none;
  }

  [part~="line-number"] {
    display: block;
    /** min-width: 100%; is needed for Safari to calculate correctly. */
    min-width: 100%;
    width: max-content;
    text-align: end;
    user-select: none;
    -webkit-user-select: none;
  }

  table {
    border: 1px solid gray;
    width: 100%;
  }

  [part~="line"] {
    border-inline-end: 1px solid gray;
    padding-inline-start: 4px;
  }

  [part~="diff-marker"],
  [part~="gutter-cell"],
  [part~="line"] {
    min-height: 1lh;
    white-space: inherit;
    word-break: inherit;
  }

  [part~="diff-marker"] {
    text-align: center;
    -webkit-user-select: none;
    user-select: none;
    font-variant-numeric: tabular-nums;
    width: calc(1ch + 8px);
    padding-inline-start: 8px;
  }

  [part~="diff-marker"]::after {
    content: " ";
    width: max-content;
    max-width: max-content;
    min-width: max-content;
  }

  [part~="diff-marker"][part~="diff-marker-deleted"]::after {
    content: "-";
  }

  [part~="diff-marker"][part~="diff-marker-inserted"]::after {
    content: "+";
  }

  [part~="character-diff"][part~="character-diff--deleted"] {
    background: hsla(353, 95%, 46%, 0.15);
  }

  [part~="character-diff"][part~="character-diff--inserted"] {
    background: hsla(137, 100%, 75%);
  }

  table tr td:nth-child(3),
  table tr td:nth-child(6) {
    -webkit-user-select: auto;
    user-select: auto;
  }

  /**
    This fancy shenanigans is what allows users to only select 1 side of a diff.
    Inspired by this hack: https://stackoverflow.com/posts/73517303/revisions
  */
  table[active-side="right"] tr td:nth-child(3),
  table[active-side="left"] tr td:nth-child(6) {
    -webkit-user-select: none;
    user-select: none;
  }

  /** I'm not quite sure why its "n+4" instead of "n+3", when <td> 1-3 is the left, and <td> 4-6 is the right */

  /** Left half */
  table:not([active-side="right"]):has(tr td:nth-child(-n + 4):hover)
    tr
    td:nth-child(3) {
    -webkit-user-select: auto;
    user-select: auto;
  }

  /** Right half */
  table:not([active-side="left"]):has(tr td:nth-child(n + 3):hover)
    tr
    td:nth-child(6) {
    -webkit-user-select: auto;
    user-select: auto;
  }
`;var je={};Ft(je,{Diff:()=>T,applyPatch:()=>Rt,applyPatches:()=>xn,canonicalize:()=>ye,convertChangesToDMP:()=>Tn,convertChangesToXML:()=>Nn,createPatch:()=>$n,createTwoFilesPatch:()=>Tt,diffArrays:()=>wn,diffChars:()=>on,diffCss:()=>un,diffJson:()=>yn,diffLines:()=>$e,diffSentences:()=>cn,diffTrimmedLines:()=>dn,diffWords:()=>an,diffWordsWithSpace:()=>ln,formatPatch:()=>Ve,merge:()=>Sn,parsePatch:()=>Ae,reversePatch:()=>Nt,structuredPatch:()=>ze});function T(){}T.prototype={diff:function(e,t){var r,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=i.callback;typeof i=="function"&&(s=i,i={}),this.options=i;var o=this;function a(p){return s?(setTimeout(function(){s(void 0,p)},0),!0):p}e=this.castInput(e),t=this.castInput(t),e=this.removeEmpty(this.tokenize(e)),t=this.removeEmpty(this.tokenize(t));var l=t.length,d=e.length,u=1,c=l+d;i.maxEditLength&&(c=Math.min(c,i.maxEditLength));var h=(r=i.timeout)!==null&&r!==void 0?r:1/0,m=Date.now()+h,f=[{oldPos:-1,lastComponent:void 0}],g=this.extractCommon(f[0],t,e,0);if(f[0].oldPos+1>=d&&g+1>=l)return a([{value:this.join(t),count:t.length}]);var A=-1/0,$=1/0;function S(){for(var p=Math.max(A,-u);p<=Math.min($,u);p+=2){var w=void 0,v=f[p-1],y=f[p+1];v&&(f[p-1]=void 0);var b=!1;if(y){var L=y.oldPos-p;b=y&&0<=L&&L<l}var _=v&&v.oldPos+1<d;if(!b&&!_){f[p]=void 0;continue}if(!_||b&&v.oldPos+1<y.oldPos?w=o.addToPath(y,!0,void 0,0):w=o.addToPath(v,void 0,!0,1),g=o.extractCommon(w,t,e,p),w.oldPos+1>=d&&g+1>=l)return a(rn(o,w.lastComponent,t,e,o.useLongestToken));f[p]=w,w.oldPos+1>=d&&($=Math.min($,p-1)),g+1>=l&&(A=Math.max(A,p+1))}u++}if(s)(function p(){setTimeout(function(){if(u>c||Date.now()>m)return s();S()||p()},0)})();else for(;u<=c&&Date.now()<=m;){var E=S();if(E)return E}},addToPath:function(e,t,r,i){var s=e.lastComponent;return s&&s.added===t&&s.removed===r?{oldPos:e.oldPos+i,lastComponent:{count:s.count+1,added:t,removed:r,previousComponent:s.previousComponent}}:{oldPos:e.oldPos+i,lastComponent:{count:1,added:t,removed:r,previousComponent:s}}},extractCommon:function(e,t,r,i){for(var s=t.length,o=r.length,a=e.oldPos,l=a-i,d=0;l+1<s&&a+1<o&&this.equals(t[l+1],r[a+1]);)l++,a++,d++;return d&&(e.lastComponent={count:d,previousComponent:e.lastComponent}),e.oldPos=a,l},equals:function(e,t){return this.options.comparator?this.options.comparator(e,t):e===t||this.options.ignoreCase&&e.toLowerCase()===t.toLowerCase()},removeEmpty:function(e){for(var t=[],r=0;r<e.length;r++)e[r]&&t.push(e[r]);return t},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};function rn(n,e,t,r,i){for(var s=[],o;e;)s.push(e),o=e.previousComponent,delete e.previousComponent,e=o;s.reverse();for(var a=0,l=s.length,d=0,u=0;a<l;a++){var c=s[a];if(c.removed){if(c.value=n.join(r.slice(u,u+c.count)),u+=c.count,a&&s[a-1].added){var m=s[a-1];s[a-1]=s[a],s[a]=m}}else{if(!c.added&&i){var h=t.slice(d,d+c.count);h=h.map(function(g,A){var $=r[u+A];return $.length>g.length?$:g}),c.value=n.join(h)}else c.value=n.join(t.slice(d,d+c.count));d+=c.count,c.added||(u+=c.count)}}var f=s[l-1];return l>1&&typeof f.value=="string"&&(f.added||f.removed)&&n.equals("",f.value)&&(s[l-2].value+=f.value,s.pop()),s}var sn=new T;function on(n,e,t){return sn.diff(n,e,t)}function St(n,e){if(typeof n=="function")e.callback=n;else if(n)for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e}var ht=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,ft=/\S/,be=new T;be.equals=function(n,e){return this.options.ignoreCase&&(n=n.toLowerCase(),e=e.toLowerCase()),n===e||this.options.ignoreWhitespace&&!ft.test(n)&&!ft.test(e)};be.tokenize=function(n){for(var e=n.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),t=0;t<e.length-1;t++)!e[t+1]&&e[t+2]&&ht.test(e[t])&&ht.test(e[t+2])&&(e[t]+=e[t+2],e.splice(t+1,2),t--);return e};function an(n,e,t){return t=St(t,{ignoreWhitespace:!0}),be.diff(n,e,t)}function ln(n,e,t){return be.diff(n,e,t)}var xe=new T;xe.tokenize=function(n){this.options.stripTrailingCr&&(n=n.replace(/\r\n/g,`
`));var e=[],t=n.split(/(\n|\r\n)/);t[t.length-1]||t.pop();for(var r=0;r<t.length;r++){var i=t[r];r%2&&!this.options.newlineIsToken?e[e.length-1]+=i:(this.options.ignoreWhitespace&&(i=i.trim()),e.push(i))}return e};function $e(n,e,t){return xe.diff(n,e,t)}function dn(n,e,t){var r=St(t,{ignoreWhitespace:!0});return xe.diff(n,e,r)}var _t=new T;_t.tokenize=function(n){return n.split(/(\S.+?[.!?])(?=\s+|$)/)};function cn(n,e,t){return _t.diff(n,e,t)}var Lt=new T;Lt.tokenize=function(n){return n.split(/([{}:;,]|\s+)/)};function un(n,e,t){return Lt.diff(n,e,t)}function ve(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ve=function(e){return typeof e}:ve=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ve(n)}function hn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function pt(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function mt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?pt(Object(t),!0).forEach(function(r){hn(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):pt(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function O(n){return fn(n)||pn(n)||mn(n)||gn()}function fn(n){if(Array.isArray(n))return Fe(n)}function pn(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function mn(n,e){if(n){if(typeof n=="string")return Fe(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Fe(n,e)}}function Fe(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function gn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vn=Object.prototype.toString,X=new T;X.useLongestToken=!0;X.tokenize=xe.tokenize;X.castInput=function(n){var e=this.options,t=e.undefinedReplacement,r=e.stringifyReplacer,i=r===void 0?function(s,o){return typeof o>"u"?t:o}:r;return typeof n=="string"?n:JSON.stringify(ye(n,null,null,i),i,"  ")};X.equals=function(n,e){return T.prototype.equals.call(X,n.replace(/,([\r\n])/g,"$1"),e.replace(/,([\r\n])/g,"$1"))};function yn(n,e,t){return X.diff(n,e,t)}function ye(n,e,t,r,i){e=e||[],t=t||[],r&&(n=r(i,n));var s;for(s=0;s<e.length;s+=1)if(e[s]===n)return t[s];var o;if(vn.call(n)==="[object Array]"){for(e.push(n),o=new Array(n.length),t.push(o),s=0;s<n.length;s+=1)o[s]=ye(n[s],e,t,r,i);return e.pop(),t.pop(),o}if(n&&n.toJSON&&(n=n.toJSON()),ve(n)==="object"&&n!==null){e.push(n),o={},t.push(o);var a=[],l;for(l in n)n.hasOwnProperty(l)&&a.push(l);for(a.sort(),s=0;s<a.length;s+=1)l=a[s],o[l]=ye(n[l],e,t,r,l);e.pop(),t.pop()}else o=n;return o}var we=new T;we.tokenize=function(n){return n.slice()};we.join=we.removeEmpty=function(n){return n};function wn(n,e,t){return we.diff(n,e,t)}function Ae(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.split(/\r\n|[\n\v\f\r\x85]/),r=n.match(/\r\n|[\n\v\f\r\x85]/g)||[],i=[],s=0;function o(){var d={};for(i.push(d);s<t.length;){var u=t[s];if(/^(\-\-\-|\+\+\+|@@)\s/.test(u))break;var c=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(u);c&&(d.index=c[1]),s++}for(a(d),a(d),d.hunks=[];s<t.length;){var h=t[s];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(h))break;if(/^@@/.test(h))d.hunks.push(l());else{if(h&&e.strict)throw new Error("Unknown line "+(s+1)+" "+JSON.stringify(h));s++}}}function a(d){var u=/^(---|\+\+\+)\s+(.*)$/.exec(t[s]);if(u){var c=u[1]==="---"?"old":"new",h=u[2].split("	",2),m=h[0].replace(/\\\\/g,"\\");/^".*"$/.test(m)&&(m=m.substr(1,m.length-2)),d[c+"FileName"]=m,d[c+"Header"]=(h[1]||"").trim(),s++}}function l(){var d=s,u=t[s++],c=u.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),h={oldStart:+c[1],oldLines:typeof c[2]>"u"?1:+c[2],newStart:+c[3],newLines:typeof c[4]>"u"?1:+c[4],lines:[],linedelimiters:[]};h.oldLines===0&&(h.oldStart+=1),h.newLines===0&&(h.newStart+=1);for(var m=0,f=0;s<t.length&&!(t[s].indexOf("--- ")===0&&s+2<t.length&&t[s+1].indexOf("+++ ")===0&&t[s+2].indexOf("@@")===0);s++){var g=t[s].length==0&&s!=t.length-1?" ":t[s][0];if(g==="+"||g==="-"||g===" "||g==="\\")h.lines.push(t[s]),h.linedelimiters.push(r[s]||`
`),g==="+"?m++:g==="-"?f++:g===" "&&(m++,f++);else break}if(!m&&h.newLines===1&&(h.newLines=0),!f&&h.oldLines===1&&(h.oldLines=0),e.strict){if(m!==h.newLines)throw new Error("Added line count did not match for hunk at line "+(d+1));if(f!==h.oldLines)throw new Error("Removed line count did not match for hunk at line "+(d+1))}return h}for(;s<t.length;)o();return i}function bn(n,e,t){var r=!0,i=!1,s=!1,o=1;return function a(){if(r&&!s){if(i?o++:r=!1,n+o<=t)return o;s=!0}if(!i)return s||(r=!0),e<=n-o?-o++:(i=!0,a())}}function Rt(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string"&&(e=Ae(e)),Array.isArray(e)){if(e.length>1)throw new Error("applyPatch only works with a single input.");e=e[0]}var r=n.split(/\r\n|[\n\v\f\r\x85]/),i=n.match(/\r\n|[\n\v\f\r\x85]/g)||[],s=e.hunks,o=t.compareLine||function(Ee,K,de,F){return K===F},a=0,l=t.fuzzFactor||0,d=0,u=0,c,h;function m(Ee,K){for(var de=0;de<Ee.lines.length;de++){var F=Ee.lines[de],Se=F.length>0?F[0]:" ",Ut=F.length>0?F.substr(1):F;if(Se===" "||Se==="-"){if(!o(K+1,r[K],Se,Ut)&&(a++,a>l))return!1;K++}}return!0}for(var f=0;f<s.length;f++){for(var g=s[f],A=r.length-g.oldLines,$=0,S=u+g.oldStart-1,E=bn(S,d,A);$!==void 0;$=E())if(m(g,S+$)){g.offset=u+=$;break}if($===void 0)return!1;d=g.offset+g.oldStart+g.oldLines}for(var p=0,w=0;w<s.length;w++){var v=s[w],y=v.oldStart+v.offset+p-1;p+=v.newLines-v.oldLines;for(var b=0;b<v.lines.length;b++){var L=v.lines[b],_=L.length>0?L[0]:" ",q=L.length>0?L.substr(1):L,Z=v.linedelimiters&&v.linedelimiters[b]||`
`;if(_===" ")y++;else if(_==="-")r.splice(y,1),i.splice(y,1);else if(_==="+")r.splice(y,0,q),i.splice(y,0,Z),y++;else if(_==="\\"){var C=v.lines[b-1]?v.lines[b-1][0]:null;C==="+"?c=!0:C==="-"&&(h=!0)}}}if(c)for(;!r[r.length-1];)r.pop(),i.pop();else h&&(r.push(""),i.push(`
`));for(var U=0;U<r.length-1;U++)r[U]=r[U]+i[U];return r.join("")}function xn(n,e){typeof n=="string"&&(n=Ae(n));var t=0;function r(){var i=n[t++];if(!i)return e.complete();e.loadFile(i,function(s,o){if(s)return e.complete(s);var a=Rt(o,i,e);e.patched(i,a,function(l){if(l)return e.complete(l);r()})})}r()}function ze(n,e,t,r,i,s,o){o||(o={}),typeof o.context>"u"&&(o.context=4);var a=$e(t,r,o);if(!a)return;a.push({value:"",lines:[]});function l($){return $.map(function(S){return" "+S})}for(var d=[],u=0,c=0,h=[],m=1,f=1,g=function(S){var E=a[S],p=E.lines||E.value.replace(/\n$/,"").split(`
`);if(E.lines=p,E.added||E.removed){var w;if(!u){var v=a[S-1];u=m,c=f,v&&(h=o.context>0?l(v.lines.slice(-o.context)):[],u-=h.length,c-=h.length)}(w=h).push.apply(w,O(p.map(function(U){return(E.added?"+":"-")+U}))),E.added?f+=p.length:m+=p.length}else{if(u)if(p.length<=o.context*2&&S<a.length-2){var y;(y=h).push.apply(y,O(l(p)))}else{var b,L=Math.min(p.length,o.context);(b=h).push.apply(b,O(l(p.slice(0,L))));var _={oldStart:u,oldLines:m-u+L,newStart:c,newLines:f-c+L,lines:h};if(S>=a.length-2&&p.length<=o.context){var q=/\n$/.test(t),Z=/\n$/.test(r),C=p.length==0&&h.length>_.oldLines;!q&&C&&t.length>0&&h.splice(_.oldLines,0,"\\ No newline at end of file"),(!q&&!C||!Z)&&h.push("\\ No newline at end of file")}d.push(_),u=0,c=0,h=[]}m+=p.length,f+=p.length}},A=0;A<a.length;A++)g(A);return{oldFileName:n,newFileName:e,oldHeader:i,newHeader:s,hunks:d}}function Ve(n){if(Array.isArray(n))return n.map(Ve).join(`
`);var e=[];n.oldFileName==n.newFileName&&e.push("Index: "+n.oldFileName),e.push("==================================================================="),e.push("--- "+n.oldFileName+(typeof n.oldHeader>"u"?"":"	"+n.oldHeader)),e.push("+++ "+n.newFileName+(typeof n.newHeader>"u"?"":"	"+n.newHeader));for(var t=0;t<n.hunks.length;t++){var r=n.hunks[t];r.oldLines===0&&(r.oldStart-=1),r.newLines===0&&(r.newStart-=1),e.push("@@ -"+r.oldStart+","+r.oldLines+" +"+r.newStart+","+r.newLines+" @@"),e.push.apply(e,r.lines)}return e.join(`
`)+`
`}function Tt(n,e,t,r,i,s,o){return Ve(ze(n,e,t,r,i,s,o))}function $n(n,e,t,r,i,s){return Tt(n,n,e,t,r,i,s)}function An(n,e){return n.length!==e.length?!1:Ie(n,e)}function Ie(n,e){if(e.length>n.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==n[t])return!1;return!0}function En(n){var e=ke(n.lines),t=e.oldLines,r=e.newLines;t!==void 0?n.oldLines=t:delete n.oldLines,r!==void 0?n.newLines=r:delete n.newLines}function Sn(n,e,t){n=gt(n,t),e=gt(e,t);var r={};(n.index||e.index)&&(r.index=n.index||e.index),(n.newFileName||e.newFileName)&&(vt(n)?vt(e)?(r.oldFileName=ge(r,n.oldFileName,e.oldFileName),r.newFileName=ge(r,n.newFileName,e.newFileName),r.oldHeader=ge(r,n.oldHeader,e.oldHeader),r.newHeader=ge(r,n.newHeader,e.newHeader)):(r.oldFileName=n.oldFileName,r.newFileName=n.newFileName,r.oldHeader=n.oldHeader,r.newHeader=n.newHeader):(r.oldFileName=e.oldFileName||n.oldFileName,r.newFileName=e.newFileName||n.newFileName,r.oldHeader=e.oldHeader||n.oldHeader,r.newHeader=e.newHeader||n.newHeader)),r.hunks=[];for(var i=0,s=0,o=0,a=0;i<n.hunks.length||s<e.hunks.length;){var l=n.hunks[i]||{oldStart:1/0},d=e.hunks[s]||{oldStart:1/0};if(yt(l,d))r.hunks.push(wt(l,o)),i++,a+=l.newLines-l.oldLines;else if(yt(d,l))r.hunks.push(wt(d,a)),s++,o+=d.newLines-d.oldLines;else{var u={oldStart:Math.min(l.oldStart,d.oldStart),oldLines:0,newStart:Math.min(l.newStart+o,d.oldStart+a),newLines:0,lines:[]};_n(u,l.oldStart,l.lines,d.oldStart,d.lines),s++,i++,r.hunks.push(u)}}return r}function gt(n,e){if(typeof n=="string"){if(/^@@/m.test(n)||/^Index:/m.test(n))return Ae(n)[0];if(!e)throw new Error("Must provide a base reference or pass in a patch");return ze(void 0,void 0,e,n)}return n}function vt(n){return n.newFileName&&n.newFileName!==n.oldFileName}function ge(n,e,t){return e===t?e:(n.conflict=!0,{mine:e,theirs:t})}function yt(n,e){return n.oldStart<e.oldStart&&n.oldStart+n.oldLines<e.oldStart}function wt(n,e){return{oldStart:n.oldStart,oldLines:n.oldLines,newStart:n.newStart+e,newLines:n.newLines,lines:n.lines}}function _n(n,e,t,r,i){var s={offset:e,lines:t,index:0},o={offset:r,lines:i,index:0};for(xt(n,s,o),xt(n,o,s);s.index<s.lines.length&&o.index<o.lines.length;){var a=s.lines[s.index],l=o.lines[o.index];if((a[0]==="-"||a[0]==="+")&&(l[0]==="-"||l[0]==="+"))Ln(n,s,o);else if(a[0]==="+"&&l[0]===" "){var d;(d=n.lines).push.apply(d,O(W(s)))}else if(l[0]==="+"&&a[0]===" "){var u;(u=n.lines).push.apply(u,O(W(o)))}else a[0]==="-"&&l[0]===" "?bt(n,s,o):l[0]==="-"&&a[0]===" "?bt(n,o,s,!0):a===l?(n.lines.push(a),s.index++,o.index++):We(n,W(s),W(o))}$t(n,s),$t(n,o),En(n)}function Ln(n,e,t){var r=W(e),i=W(t);if(At(r)&&At(i)){if(Ie(r,i)&&Et(t,r,r.length-i.length)){var s;(s=n.lines).push.apply(s,O(r));return}else if(Ie(i,r)&&Et(e,i,i.length-r.length)){var o;(o=n.lines).push.apply(o,O(i));return}}else if(An(r,i)){var a;(a=n.lines).push.apply(a,O(r));return}We(n,r,i)}function bt(n,e,t,r){var i=W(e),s=Rn(t,i);if(s.merged){var o;(o=n.lines).push.apply(o,O(s.merged))}else We(n,r?s:i,r?i:s)}function We(n,e,t){n.conflict=!0,n.lines.push({conflict:!0,mine:e,theirs:t})}function xt(n,e,t){for(;e.offset<t.offset&&e.index<e.lines.length;){var r=e.lines[e.index++];n.lines.push(r),e.offset++}}function $t(n,e){for(;e.index<e.lines.length;){var t=e.lines[e.index++];n.lines.push(t)}}function W(n){for(var e=[],t=n.lines[n.index][0];n.index<n.lines.length;){var r=n.lines[n.index];if(t==="-"&&r[0]==="+"&&(t="+"),t===r[0])e.push(r),n.index++;else break}return e}function Rn(n,e){for(var t=[],r=[],i=0,s=!1,o=!1;i<e.length&&n.index<n.lines.length;){var a=n.lines[n.index],l=e[i];if(l[0]==="+")break;if(s=s||a[0]!==" ",r.push(l),i++,a[0]==="+")for(o=!0;a[0]==="+";)t.push(a),a=n.lines[++n.index];l.substr(1)===a.substr(1)?(t.push(a),n.index++):o=!0}if((e[i]||"")[0]==="+"&&s&&(o=!0),o)return t;for(;i<e.length;)r.push(e[i++]);return{merged:r,changes:t}}function At(n){return n.reduce(function(e,t){return e&&t[0]==="-"},!0)}function Et(n,e,t){for(var r=0;r<t;r++){var i=e[e.length-t+r].substr(1);if(n.lines[n.index+r]!==" "+i)return!1}return n.index+=t,!0}function ke(n){var e=0,t=0;return n.forEach(function(r){if(typeof r!="string"){var i=ke(r.mine),s=ke(r.theirs);e!==void 0&&(i.oldLines===s.oldLines?e+=i.oldLines:e=void 0),t!==void 0&&(i.newLines===s.newLines?t+=i.newLines:t=void 0)}else t!==void 0&&(r[0]==="+"||r[0]===" ")&&t++,e!==void 0&&(r[0]==="-"||r[0]===" ")&&e++}),{oldLines:e,newLines:t}}function Nt(n){return Array.isArray(n)?n.map(Nt).reverse():mt(mt({},n),{},{oldFileName:n.newFileName,oldHeader:n.newHeader,newFileName:n.oldFileName,newHeader:n.oldHeader,hunks:n.hunks.map(function(e){return{oldLines:e.newLines,oldStart:e.newStart,newLines:e.oldLines,newStart:e.oldStart,linedelimiters:e.linedelimiters,lines:e.lines.map(function(t){return t.startsWith("-")?"+".concat(t.slice(1)):t.startsWith("+")?"-".concat(t.slice(1)):t})}})})}function Tn(n){for(var e=[],t,r,i=0;i<n.length;i++)t=n[i],t.added?r=1:t.removed?r=-1:r=0,e.push([r,t.value]);return e}function Nn(n){for(var e=[],t=0;t<n.length;t++){var r=n[t];r.added?e.push("<ins>"):r.removed&&e.push("<del>"),e.push(On(r.value)),r.added?e.push("</ins>"):r.removed&&e.push("</del>")}return e.join("")}function On(n){var e=n;return e=e.replace(/&/g,"&amp;"),e=e.replace(/</g,"&lt;"),e=e.replace(/>/g,"&gt;"),e=e.replace(/"/g,"&quot;"),e}var j={DEFAULT:"default",ADDED:"added",REMOVED:"removed",EMPTY:"empty"},Ct={CHARS:"diffChars",WORDS:"diffWords",WORDS_WITH_SPACE:"diffWordsWithSpace",LINES:"diffLines",TRIMMED_LINES:"diffTrimmedLines",SENTENCES:"diffSentences",CSS:"diffCss"},Ot=n=>{let e=n.split(`
`);if(e.every(s=>!s))return e.length===2?[]:(e.pop(),e);let r=e[e.length-1],i=e[0];return r||e.pop(),i||e.shift(),e},Cn=(n,e,t=Ct.CHARS)=>{let r=je[t](n,e),i={left:[],right:[]};return r.forEach(({added:s,removed:o,value:a})=>{let l={};return s&&(l.type=j.ADDED,l.value=a,i.right.push(l)),o&&(l.type=j.REMOVED,l.value=a,i.left.push(l)),!o&&!s&&(l.type=j.DEFAULT,l.value=a,i.right.push(l),i.left.push(l)),l}),i},Ht=(n,e,t=!1,r=Ct.CHARS,i=0)=>{let s=$e(n,e,{newlineIsToken:!0,ignoreWhitespace:!1,ignoreCase:!1}),o=i,a=i,l=[],d=0,u=[],c=[],h=(m,f,g,A,$)=>{let S=Ot(m),E=[];return S.forEach((p,w)=>{let v={},y={};if(!(c.includes(`${f}-${w}`)||$&&w!==0)){if(g||A)if(u.includes(d)||u.push(d),A){a+=1,v.lineNumber=a,v.type=j.REMOVED,v.value=p||" ";let b=s[f+1];if(b&&b.added&&Ot(b.value)[w]){let{value:_,lineNumber:q,type:Z}=h(b.value,f,!0,!1,!0)[0].right;if(c.push(`${f+1}-${w}`),y.lineNumber=q,y.type=Z,t)y.value=_;else{let C=Cn(p,_,r);y.value=C.right,v.value=C.left}}}else o+=1,y.lineNumber=o,y.type=j.ADDED,y.value=p;else a+=1,o+=1,v.lineNumber=a,v.type=j.DEFAULT,v.value=p,y.lineNumber=o,y.type=j.DEFAULT,y.value=p;d+=1,E.push({right:y,left:v})}}),E};return s.forEach(({added:m,removed:f,value:g},A)=>{l=[...l,...h(g,A,m,f)]}),{lineInformation:l,diffLines:u}};function Hn(n,e,t,r){return n.substring(0,e)+r+n.substring(t)}function Mt(n,e){let t=[...n.matchAll(e)],r=t[t.length-1];if(!r||r.index==null)return n;let{index:i}=r,s=i,o=i+r[0].length,a="</"+r[1]+">";return Hn(n,s,o,a)}function Pt(...n){let e=[],t=document.createElement("div");for(let r of n){if(r instanceof HTMLTemplateElement){let i=r.content.cloneNode(!0);t.append(i),e.push(t.innerHTML),t.innerHTML="";continue}if(r instanceof HTMLScriptElement){e.push(r.textContent);continue}if(r instanceof HTMLTextAreaElement){e.push(r.value);continue}e.push(r.innerHTML)}return e.join(`
`)}var Mn=new RegExp("(	| {2})");function qe(n,...e){let t=[],r=typeof n=="string"?[n]:n.slice(),i="";function s(){i=r[0];for(let a=0;a<e.length;a++)i+=e[a]+r[a+1];i=i.trim()}let o=!0;for(let a=0;a<r.length;a++){let l;if(r[a].trim()&&r[a].match(/\n[^\t ]/)){o=!1;break}(l=r[a].match(new RegExp(`
${Mn.source}+`,"g")))&&t.push(...l)}if(!o)return s(),i;if(t.length){let a=Math.min(...t.map(d=>d.length-1)),l=new RegExp(`
(	| ){${a}}`,"g");for(let d=0;d<r.length;d++)r[d]=r[d].replaceAll(l,`
`)}return s(),i}var Dt=H`
  :host {
    --syntax-fg: hsl(230, 8%, 24%);
    --syntax-bg: hsl(230, 1%, 98%);
    --syntax-gutter: hsl(230, 1%, 62%);
    --syntax-guide: hsla(230, 8%, 24%, 0.2);
    --syntax-accent: hsl(230, 100%, 66%);
    /** From syntax-variables.less */
    --syntax-selection-color: hsl(230, 1%, 90%);
    --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
    --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);

    /* --- additional tokens --> */
    --syntax-gutter-border: 1px solid darkgray;

    --syntax-highlight-bg: hsl(210, 9%, 95%);
    --syntax-highlight-selected-bg: hsla(230, 8%, 79%, 0.5);

    --syntax-deleted-bg: hsla(353, 95%, 92%, 0.5);
    --syntax-deleted-selected-bg: hsla(353, 95%, 66%, 0.25);

    --syntax-inserted-bg: hsla(137, 100%, 95%, 0.5);
    --syntax-inserted-selected-bg: hsla(135, 73%, 55%, 0.25);

    /** Added only for basic-diff-view-element */
    --syntax-inserted-text-color: hsl(119, 34%, 37%);
    --syntax-deleted-text-color: hsl(5, 79%, 42%);
  }

  code[class*="language-"],
  pre[class*="language-"] {
    background: var(--syntax-bg);
    color: var(--syntax-fg);
    direction: inherit;
    text-align: start;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Selection */
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] *::-moz-selection,
  pre[class*="language-"] *::-moz-selection {
    background: var(--syntax-selection-color);
    color: inherit;
  }

  code[class*="language-"]::selection,
  code[class*="language-"] *::selection,
  pre[class*="language-"] *::selection {
    background: var(--syntax-selection-color);
    color: inherit;
  }

  /* Diff stuff */
  [part~="deleted"] {
    background-color: var(--syntax-deleted-bg);
  }

  [part~="deleted"]::selection,
  [part~="deleted"] *::selection {
    background-color: var(--syntax-deleted-selected-bg);
  }

  [part~="inserted"]::selection,
  [part~="inserted"] *::selection {
    background-color: var(--syntax-inserted-selected-bg);
  }

  [part~="inserted"],
  [part~="inserted"] {
    background-color: var(--syntax-inserted-bg);
  }

  [part~="diff-marker"][part~="diff-marker-inserted"],
  [part~="gutter-cell"][part~="gutter-cell-inserted"] {
    color: var(--syntax-inserted-text-color);
  }

  [part~="diff-marker"][part~="diff-marker-deleted"],
  [part~="gutter-cell"][part~="gutter-cell-deleted"] {
    color: var(--syntax-deleted-text-color);
  }
`;var Pn={added:"inserted",removed:"deleted"},le=class extends G{static get properties(){return{view:{},newValue:{attribute:"new-value"},oldValue:{attribute:"old-value"},preserveWhitespace:{type:Boolean,attribute:"preserve-whitespace"},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},lineNumberStart:{type:Number,attribute:"line-number-start"},wrap:{reflect:!0,attribute:"wrap"},language:{reflect:!0}}}constructor(){super(),this.newValue="",this.oldValue="",this.view="split",this.language="plaintext",this.preserveWhitespace=!1,this.disableLineNumbers=!1,this.lineNumberStart=1,this.code="",this.wrap="hard",this.unescapeBehavior="all"}handleTablePointerUp(e){let t=this.shadowRoot?.querySelector("table");t&&t.removeAttribute("active-side")}handleTablePointerDown(e){let t=this.shadowRoot?.querySelector("table");if(!t)return;let r=e.composedPath(),i=r.find(a=>a.tagName?.toLowerCase()==="td"),s=r.find(a=>a.tagName?.toLowerCase()==="tr");if(!s){t.removeAttribute("active-side");return}if(!i){t.removeAttribute("active-side");return}let o=[...s.querySelectorAll("td")].findIndex(a=>a===i);if(o<0){t.removeAttribute("active-side");return}if(o<3){t.setAttribute("active-side","left");return}t.setAttribute("active-side","right")}willUpdate(e){return this.preserveWhitespace||(this.oldValue&&e.has("oldValue")&&(this.oldValue=qe(this.oldValue.trim())),this.newValue&&e.has("newValue")&&(this.newValue=qe(this.newValue.trim()))),super.willUpdate(e)}handleSlottedValues(e){let t=e.target;if(!(t instanceof HTMLSlotElement))return;let r=t.assignedElements({flatten:!0}),i=this.unescapeTags(Pt(...r));t.name==="old-value"&&(this.oldValue=i),t.name==="new-value"&&(this.newValue=i)}render(){let e=Ht(this.oldValue,this.newValue);return Y`
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
            ><tbody part="table-body">${this.renderDiff(e)}</tbody></table></code></pre>
      </div>

      <slot
        name="old-value"
        hidden
        @slotchange=${this.handleSlottedValues}
      ></slot>
      <slot
        name="new-value"
        hidden
        @slotchange=${this.handleSlottedValues}
      ></slot>
    `}renderDiff(e){let t=[];return this.transformLineInformation(e.lineInformation),e.lineInformation.forEach((r,i)=>{t.push(Y`
        <tr part="table-row">
          ${this.renderLine(r.left)} ${this.renderLine(r.right)}
        </tr>
      `)}),t}renderLine(e){let t="";e.lineNumber!=null&&(t=(e.lineNumber+this.lineNumberStart-1).toString());let r=e.type||"";return r==="added"&&(r="inserted"),r==="removed"&&(r="deleted"),Y`
      <td part=${`gutter-cell gutter-cell--${r} ${r}`}><span part="line-number">${t}</span></td>
      <td part=${`diff-marker diff-marker--${r} ${r}`}></td>
      <td part=${`line line--${r} ${r}`}>${this.renderValue(e)}</td>
    `}renderValue(e){let t=e.value;return e.data?.length&&(t=e.data.map(r=>r.type==="removed"||r.type==="added"?Y`<span
            part=${`character-diff character-diff--${Pn[r.type]}`}
            >${r.value}</span
          >`:Y`<span>${r.value}</span>`)),t}toCharacterData(e,t,r){let i=e.value.slice(0,r).map(a=>a.value||"").join("")||"",s=e.value.map(a=>a.value||"").join("")||"",o=t.value||"";return{length:t.value.length,type:t.type||"empty",offset:i.length,offsetValue:i,value:o,lineValue:s}}transformLineInformation(e){let t=[],r=[];e.forEach(i=>{let s=i.right;s.data=[],Array.isArray(s.value)?s.value=s.value.map((a,l)=>{if(s.data!=null)return s.data.push(this.toCharacterData(s,a,l)),a.value}).join(""):s.value=s.value||"",t.push(s.value);let o=i.left;o.data=[],Array.isArray(o.value)?o.value=o.value.map((a,l)=>{if(o.data!=null)return o.data.push(this.toCharacterData(o,a,l)),a.value}).join(""):o.value=o.value||"",r.push(o.value)})}unescapeTags(e){let t=/&lt;\/script>/g;return this.unescapeBehavior==="last"?Mt(e,t):this.unescapeBehavior==="all"?e.replaceAll(t,"</$1>"):e}};R(le,"baseName","basic-diff-view-element"),R(le,"styles",[ct,ut,Dt]);export{H as a,Y as b,V as c,x as d,ct as e,ut as f,le as g};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/diff-view-element/pull/2/bridgetown/static/chunks/chunk-HOTPSN6D.js.map
