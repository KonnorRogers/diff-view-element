var l=Object.defineProperty,v=Object.defineProperties,c=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,i=(e,r)=>(r=Symbol[e])?r:Symbol.for("Symbol."+e),f=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,y=(e,r)=>{for(var t in r||(r={}))O.call(r,t)&&f(e,t,r[t]);if(p)for(var t of p(r))P.call(r,t)&&f(e,t,r[t]);return e},b=(e,r)=>v(e,u(r)),m=(e,r,t,n)=>{for(var o=n>1?void 0:n?c(r,t):r,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(n?s(r,t,o):s(o))||o);return n&&o&&l(r,t,o),o},h=function(e,r){this[0]=e,this[1]=r},j=e=>{var r=e[i("asyncIterator")],t=!1,n,o={};return r==null?(r=e[i("iterator")](),n=a=>o[a]=s=>r[a](s)):(r=r.call(e),n=a=>o[a]=s=>{if(t){if(t=!1,a==="throw")throw s;return s}return t=!0,{done:!1,value:new h(new Promise(w=>{var _=r[a](s);if(!(_ instanceof Object))throw TypeError("Object expected");w(_)}),1)}}),o[i("iterator")]=()=>o,n("next"),"throw"in r?n("throw"):o.throw=a=>{throw a},"return"in r&&n("return"),o};export{y as a,b,m as c,j as d};
//# sourceMappingURL=/diff-view-element/pull/3/bridgetown/static/chunks/chunk-LKIFJTGM.js.map
