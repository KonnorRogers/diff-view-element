import{a as o,b as s}from"/diff-view-element/bridgetown/static/chunks/chunk-GJA54R6M.js";var a=new Map,f=new WeakMap;function m(t){return t??{keyframes:[],options:{duration:0}}}function u(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function p(t,e){a.set(t,m(e))}function g(t,e,n){let r=f.get(t);if(r?.[e])return u(r[e],n.dir);let i=a.get(e);return i?u(i,n.dir):{keyframes:[],options:{duration:0}}}function h(t,e){return new Promise(n=>{function r(i){i.target===t&&(t.removeEventListener(e,r),n())}t.addEventListener(e,r)})}function v(t,e,n){return new Promise(r=>{if(n?.duration===1/0)throw new Error("Promise-based animations must be finite.");let i=t.animate(e,s(o({},n),{duration:c()?0:n.duration}));i.addEventListener("cancel",r,{once:!0}),i.addEventListener("finish",r,{once:!0})})}function c(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function _(t){return Promise.all(t.getAnimations().map(e=>new Promise(n=>{e.cancel(),requestAnimationFrame(n)})))}export{p as a,g as b,h as c,v as d,_ as e};
//# sourceMappingURL=/diff-view-element/bridgetown/static/chunks/chunk-HL4K7RZL.js.map
