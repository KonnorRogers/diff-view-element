import{a as o,b as a,c as h}from"/diff-view-element/pull/3/bridgetown/static/chunks/chunk-72B2A34G.js";import{g as n}from"/diff-view-element/pull/3/bridgetown/static/chunks/chunk-IAX4ORIT.js";var l=a(class extends h{constructor(s){if(super(s),s.type!==o.ATTRIBUTE||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(t=>t!=="")));for(let t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}let r=s.element.classList;for(let t of this.st)t in e||(r.remove(t),this.st.delete(t));for(let t in e){let i=!!e[t];i===this.st.has(t)||this.nt?.has(t)||(i?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return n}});export{l as a};
/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/diff-view-element/pull/3/bridgetown/static/chunks/chunk-4DTKL3IJ.js.map
