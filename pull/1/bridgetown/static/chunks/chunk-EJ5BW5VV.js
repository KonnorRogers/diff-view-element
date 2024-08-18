import{a as l,b as m}from"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-KLYRE3T4.js";var a=new WeakMap,h=new WeakMap,n=new WeakMap,c=new WeakSet,d=new WeakMap,y=class{constructor(e,s){this.handleFormData=t=>{let i=this.options.disabled(this.host),r=this.options.name(this.host),o=this.options.value(this.host),f=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!f&&typeof r=="string"&&r.length>0&&typeof o<"u"&&(Array.isArray(o)?o.forEach(p=>{t.formData.append(r,p.toString())}):t.formData.append(r,o.toString()))},this.handleFormSubmit=t=>{var i;let r=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=a.get(this.form))==null||i.forEach(f=>{this.setUserInteracted(f,!0)})),this.form&&!this.form.noValidate&&!r&&!o(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),d.set(this.host,[])},this.handleInteraction=t=>{let i=d.get(this.host);i.includes(t.type)||i.push(t.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let t=this.form.querySelectorAll("*");for(let i of t)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let t=this.form.querySelectorAll("*");for(let i of t)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=l({form:t=>{let i=t.form;if(i){let o=t.getRootNode().querySelector(`#${i}`);if(o)return o}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var i;return(i=t.disabled)!=null?i:!1},reportValidity:t=>typeof t.reportValidity=="function"?t.reportValidity():!0,checkValidity:t=>typeof t.checkValidity=="function"?t.checkValidity():!0,setValue:(t,i)=>t.value=i,assumeInteractionOn:["sl-input"]},s)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),d.set(this.host,[]),this.options.assumeInteractionOn.forEach(s=>{this.host.addEventListener(s,this.handleInteraction)})}hostDisconnected(){this.detachForm(),d.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,a.has(this.form)?a.get(this.form).add(this.host):a.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),h.has(this.form)||(h.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),n.has(this.form)||(n.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=a.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),h.has(this.form)&&(this.form.reportValidity=h.get(this.form),h.delete(this.form)),n.has(this.form)&&(this.form.checkValidity=n.get(this.form),n.delete(this.form)),this.form=void 0))}setUserInteracted(e,s){s?c.add(e):c.delete(e),e.requestUpdate()}doAction(e,s){if(this.form){let t=document.createElement("button");t.type=e,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",s&&(t.name=s.name,t.value=s.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{s.hasAttribute(i)&&t.setAttribute(i,s.getAttribute(i))})),this.form.append(t),t.click(),t.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){let s=this.host,t=!!c.has(s),i=!!s.required;s.toggleAttribute("data-required",i),s.toggleAttribute("data-optional",!i),s.toggleAttribute("data-invalid",!e),s.toggleAttribute("data-valid",e),s.toggleAttribute("data-user-invalid",!e&&t),s.toggleAttribute("data-user-valid",e&&t)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let s=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||s.preventDefault(),this.host.dispatchEvent(s)||e?.preventDefault()}},u=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),V=Object.freeze(m(l({},u),{valid:!1,valueMissing:!0})),g=Object.freeze(m(l({},u),{valid:!1,customError:!0}));export{y as a,u as b};
//# sourceMappingURL=/diff-view-element/pull/1/bridgetown/static/chunks/chunk-EJ5BW5VV.js.map
