import{a as ie,b as se,c as le,d as Q,e as ue,f as P,g as ee}from"/diff-view-element/bridgetown/static/chunks/chunk-25FYEXYM.js";import{d as I}from"/diff-view-element/bridgetown/static/chunks/chunk-LYQAZIFY.js";var ge={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ce=e=>(...t)=>({_$litDirective$:e,values:t}),H=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,a){this._$Ct=t,this._$AM=n,this._$Ci=a}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};var D=class extends H{constructor(t){if(super(t),this.it=Q,t.type!==ge.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Q||t==null)return this._t=void 0,this.it=t;if(t===le)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};D.directiveName="unsafeHTML",D.resultType=1;var de=ce(D);var te=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},G=te;var W=class{constructor(t={}){let n={},{disableWorkerMessageHandler:a,manual:r}=t;this.manual=r,this.manual==null&&(this.manual=!0),this.plugins={};let o=this;this.disableWorkerMessageHandler=!!a,this.Token=A,this.util=new ne(this);let i=this.util;if(this.languages={plain:n,plaintext:n,text:n,txt:n,extend:(u,d)=>{let p=this.util.clone(this.languages[u]);for(var h in d)p[h]=d[h];return p},insertBefore:(u,d,p,h)=>{h||(h=this.languages);let l=h[u],v={};for(let m in l)if(l.hasOwnProperty(m)){if(m==d)for(var f in p)p.hasOwnProperty(f)&&(v[f]=p[f]);p.hasOwnProperty(m)||(v[m]=l[m])}var b=h[u];return h[u]=v,this.languages.DFS(this.languages,function(m,k){k===b&&m!=u&&(this[m]=v)}),v},DFS(u,d,p,h){h=h||{};var l=i.objId;for(var v in u)if(u.hasOwnProperty(v)){d.call(u,v,u[v],p||v);var f=u[v],b=i.type(f);b==="Object"&&!h[l(f)]?(h[l(f)]=!0,this.DFS(f,d,null,h)):b==="Array"&&!h[l(f)]&&(h[l(f)]=!0,this.DFS(f,d,v,h))}}},this.hooks={all:{},add:function(u,d){var p=o.hooks.all;p[u]=p[u]||[],p[u].push(d)},run:function(u,d){var p=o.hooks.all[u];if(!(!p||!p.length))for(var h=0,l;l=p[h++];)l(d)}},!G.document)return G.addEventListener&&(o.disableWorkerMessageHandler||G.addEventListener("message",function(u){var d=JSON.parse(u.data),p=d.language,h=d.code,l=d.immediateClose;G.postMessage(o.highlight(h,o.languages[p],p)),l&&te.close()},!1)),o;function g(){o.manual||o.highlightAll()}let s=this.util.currentScript();if(s&&(this.filename=s.src,s.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var c=document.readyState;c==="loading"||c==="interactive"&&s&&s.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}}highlightAll(t,n){this.highlightAllUnder(document,t,n)}highlightAllUnder(t,n,a){var r={callback:a,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};this.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),this.hooks.run("before-all-elements-highlight",r);for(var o=0,i;i=r.elements[o++];)this.highlightElement(i,n===!0,r.callback)}highlightElement(t,n,a){var r=this.util.getLanguage(t),o=this.languages[r];this.util.setLanguage(t,r);var i=t.parentElement;i&&i.nodeName.toLowerCase()==="pre"&&this.util.setLanguage(i,r);var g=t.textContent,s={element:t,language:r,grammar:o,code:g};let c=d=>{s.highlightedCode=d,this.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,this.hooks.run("after-highlight",s),this.hooks.run("complete",s),a&&a.call(s.element)};if(this.hooks.run("before-sanity-check",s),i=s.element.parentElement,i&&i.nodeName.toLowerCase()==="pre"&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),!s.code){this.hooks.run("complete",s),a&&a.call(s.element);return}if(this.hooks.run("before-highlight",s),!s.grammar){c(this.util.encode(s.code));return}if(n&&te.Worker){var u=new Worker(this.filename);u.onmessage=function(d){c(d.data)},u.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else c(this.highlight(s.code,s.grammar,s.language))}highlight(t,n,a){var r={code:t,grammar:n,language:a};if(this.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=this.tokenize(r.code,r.grammar),this.hooks.run("after-tokenize",r),A.stringify(this.util.encode(r.tokens),r.language,this)}tokenize(t,n){var a=n?.rest;if(a){for(var r in a)n[r]=a[r];delete n.rest}var o=new $e;return q(o,o.head,t),fe(t,o,n,o.head,0,this),je(o)}},A=class{constructor(t,n,a,r){this.type=t,this.content=n,this.alias=a,this.length=(r||"").length|0}static stringify(t,n,a){let r=this;if(typeof t=="string")return t;if(Array.isArray(t)){var o="";return t.forEach(function(u){o+=r.stringify(u,n,a)}),o}var i={type:t.type,content:r.stringify(t.content,n,a),tag:"span",classes:["token",t.type],attributes:{},language:n},g=t.alias;g&&(Array.isArray(g)?Array.prototype.push.apply(i.classes,g):i.classes.push(g)),a.hooks.run("wrap",i);var s="";for(var c in i.attributes)s+=" "+c+'="'+(i.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"}},pe=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,Le=0,ne=class{constructor(t){I(this,"encode",t=>{if(t instanceof A){let n=t.content;return new A(t.type,this.encode(n),t.alias)}else return Array.isArray(t)?t.map(n=>this.encode(n)):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")});this.prism=t}type(t){return Object.prototype.toString.call(t).slice(8,-1)}getLanguage(t){for(;t;){var n=pe.exec(t.className);if(n)return n[1].toLowerCase();t=t.parentElement}return"none"}setLanguage(t,n){t.className=t.className.replace(RegExp(pe,"gi"),""),t.classList.add("language-"+n)}objId(t){return t.__id||Object.defineProperty(t,"__id",{value:++Le}),t.__id}clone(t){return structuredClone(t)}isActive(t,n,a){for(var r="no-"+n;t;){var o=t.classList;if(o.contains(n))return!0;if(o.contains(r))return!1;t=t.parentElement}return!!a}currentScript(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(t){var n=document.getElementsByTagName("script");for(var a in n)if(n[a].src==t)return n[a]}return null}}};function he(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){var o=r[1].length;r.index+=o,r[0]=r[0].slice(o)}return r}function fe(e,t,n,a,r,o,i){for(var g in n)if(!(!n.hasOwnProperty(g)||!n[g])){var s=n[g];s=Array.isArray(s)?s:[s];for(var c=0;c<s.length;++c){if(i&&i.cause==g+","+c)return;var u=s[c],d=u.inside,p=!!u.lookbehind,h=!!u.greedy,l=u.alias;if(h&&!u.pattern.global){var v=u.pattern.toString().match(/[imsuy]*$/)[0];u.pattern=RegExp(u.pattern.source,v+"g")}for(var f=u.pattern||u,b=a.next,m=r;b!==t.tail&&!(i&&m>=i.reach);m+=b.value.length,b=b.next){var k=b.value;if(t.length>e.length)return;if(!(k instanceof A)){var y=1,x;if(h){if(x=he(f,m,e,p),!x||x.index>=e.length)break;var E=x.index,L=x.index+x[0].length,w=m;for(w+=b.value.length;E>=w;)b=b.next,w+=b.value.length;if(w-=b.value.length,m=w,b.value instanceof A)continue;for(var F=b;F!==t.tail&&(w<L||typeof F.value=="string");F=F.next)y++,w+=F.value.length;y--,k=e.slice(m,w),x.index-=m}else if(x=he(f,0,k,p),!x)continue;var E=x.index,S=x[0],T=k.slice(0,E),R=k.slice(E+S.length),j=m+k.length;i&&j>i.reach&&(i.reach=j);var C=b.prev;T&&(C=q(t,C,T),m+=T.length),Te(t,C,y);var K=new A(g,d?o.tokenize(S,d):S,l,S);if(b=q(t,C,K),R&&q(t,b,R),y>1){var z={cause:g+","+c,reach:j};fe(e,t,n,b.prev,m,o,z),i&&z.reach>i.reach&&(i.reach=z.reach)}}}}}}function $e(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function q(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function Te(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}function je(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}function _(e,t){typeof e>"u"||t?.force!==!0&&e.languages.markup||(e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(a,r){var o={};o["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[r]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};i["language-"+r]={pattern:/[\s\S]+/,inside:e.languages[r]};var g={};g[a]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:i},e.languages.insertBefore("markup","cdata",g)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(n,a){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[a,"language-"+a],inside:e.languages[a]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml)}function M(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages.css)){_(e);var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}}function Z(e,t){typeof e>"u"||t?.force!==!0&&e.languages.clike||(e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/})}function $(e,t){typeof e>"u"||t?.force!==!0&&e.languages.javascript||(Z(e),_(e),e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript)}function be(e){if(typeof e>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t="Loading\u2026",n=function(h,l){return"\u2716 Error "+h+" while fetching file: "+l},a="\u2716 Error: File does not exist or is empty",r={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",i="loading",g="loaded",s="failed",c="pre[data-src]:not(["+o+'="'+g+'"]):not(['+o+'="'+i+'"])';function u(h,l,v){var f=new XMLHttpRequest;f.open("GET",h,!0),f.onreadystatechange=function(){f.readyState==4&&(f.status<400&&f.responseText?l(f.responseText):f.status>=400?v(n(f.status,f.statusText)):v(a))},f.send(null)}function d(h){var l=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(h||"");if(l){var v=Number(l[1]),f=l[2],b=l[3];return f?b?[v,Number(b)]:[v,void 0]:[v,v]}}e.hooks.add("before-highlightall",function(h){h.selector+=", "+c}),e.hooks.add("before-sanity-check",function(h){var l=h.element;if(l.matches(c)){h.code="",l.setAttribute(o,i);var v=l.appendChild(document.createElement("CODE"));v.textContent=t;var f=l.getAttribute("data-src"),b=h.language;if(b==="none"){var m=(/\.(\w+)$/.exec(f)||[,"none"])[1];b=r[m]||m}e.util.setLanguage(v,b),e.util.setLanguage(l,b);var k=e.plugins.autoloader;k&&k.loadLanguages(b),u(f,function(y){l.setAttribute(o,g);var x=d(l.getAttribute("data-range"));if(x){var L=y.split(/\r\n?|\n/g),w=x[0],F=x[1]==null?L.length:x[1];w<0&&(w+=L.length),w=Math.max(0,Math.min(w-1,L.length)),F<0&&(F+=L.length),F=Math.max(0,Math.min(F,L.length)),y=L.slice(w,F).join(`
`),l.hasAttribute("data-start")||l.setAttribute("data-start",String(w+1))}v.textContent=y,e.highlightElement(v)},function(y){l.setAttribute(o,s),v.textContent=y})}}),e.plugins.fileHighlight={highlight:function(l){for(var v=(l||document).querySelectorAll(c),f=0,b;b=v[f++];)e.highlightElement(b)}};var p=!1;e.fileHighlight=function(){p||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),p=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}var U=class extends W{constructor(...t){super(...t),_(this),M(this),Z(this),$(this),be(this)}};var ve=ie`
  /**
 * One Light theme for prism.js
 * Based on Atom's One Light theme: https://github.com/atom/atom/tree/master/packages/one-light-syntax
 */

  /**
 * One Light colours (accurate as of commit eb064bf on 19 Feb 2021)
 * From colors.less
 * --mono-1: hsl(230, 8%, 24%);
 * --mono-2: hsl(230, 6%, 44%);
 * --mono-3: hsl(230, 4%, 64%);
 * --hue-1: hsl(198, 99%, 37%);
 * --hue-2: hsl(221, 87%, 60%);
 * --hue-3: hsl(301, 63%, 40%);
 * --hue-4: hsl(119, 34%, 47%);
 * --hue-5: hsl(5, 74%, 59%);
 * --hue-5-2: hsl(344, 84%, 43%);
 * --hue-6: hsl(35, 99%, 36%);
 * --hue-6-2: hsl(35, 99%, 40%);
 * --syntax-fg: hsl(230, 8%, 24%);
 * --syntax-bg: hsl(230, 1%, 98%);
 * --syntax-gutter: hsl(230, 1%, 62%);
 * --syntax-guide: hsla(230, 8%, 24%, 0.2);
 * --syntax-accent: hsl(230, 100%, 66%);
 * From syntax-variables.less
 * --syntax-selection-color: hsl(230, 1%, 90%);
 * --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
 * --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);
 * <---- Additional Tokens --->
 * --syntax-gutter-border: 1px solid darkgray;
 * --syntax-highlight-bg: hsl(210, 9%, 95%);
 * --syntax-highlight-selected-bg: hsla(230, 8%, 79%, 0.5);

 *  --syntax-deleted-selected-bg: hsla(353, 95%, 66%, 0.25);
 *  --syntax-deleted-bg: hsla(353, 95%, 66%, 0.25);

 *  --syntax-inserted-bg: hsla(137, 100%, 95%);
 *  --syntax-inserted-selected-bg: hsla(135, 73%, 55%, 0.25)
 */

  :host {
    --mono-1: hsl(230, 8%, 24%);
    --mono-2: hsl(230, 6%, 44%);
    --mono-3: hsl(230, 4%, 64%);
    --hue-1: hsl(198, 99%, 37%);
    --hue-2: hsl(221, 87%, 60%);
    --hue-3: hsl(301, 63%, 40%);
    --hue-4: hsl(119, 34%, 47%);
    --hue-5: hsl(5, 74%, 59%);
    --hue-5-2: hsl(344, 84%, 43%);
    --hue-6: hsl(35, 99%, 36%);
    --hue-6-2: hsl(35, 99%, 40%);
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

    --syntax-deleted-bg: hsla(353, 95%, 86%, 0.25);
    --syntax-deleted-selected-bg: hsla(353, 95%, 66%, 0.25);

    --syntax-inserted-bg: hsla(137, 100%, 95%);
    --syntax-inserted-selected-bg: hsla(135, 73%, 55%, 0.25);
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

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: var(--mono-3);
  }

  .token.doctype,
  .token.punctuation,
  .token.entity {
    color: var(--mono-1);
  }

  .token.attr-name,
  .token.class-name,
  .token.boolean,
  .token.constant,
  .token.number,
  .token.atrule {
    color: var(--hue-6);
  }

  .token.keyword {
    color: var(--hue-3);
  }

  .token.property,
  .token.tag,
  .token.symbol,
  .token.deleted,
  .token.important {
    color: var(--hue-5);
  }

  .token.selector,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted,
  .token.regex,
  .token.attr-value,
  .token.attr-value > .token.punctuation {
    color: var(--hue-4);
  }

  .token.variable,
  .token.operator,
  .token.function {
    color: var(--hue-2);
  }

  .token.url {
    color: var(--hue-1);
  }

  /* HTML overrides */
  .token.attr-value > .token.punctuation.attr-equals,
  .token.special-attr > .token.attr-value > .token.value.css {
    color: var(--mono-1);
  }

  /* CSS overrides */
  .language-css .token.selector {
    color: var(--hue-5);
  }

  .language-css .token.property {
    color: var(--mono-1);
  }

  .language-css .token.function,
  .language-css .token.url > .token.function {
    color: var(--hue-1);
  }

  .language-css .token.url > .token.string.url {
    color: var(--hue-4);
  }

  .language-css .token.important,
  .language-css .token.atrule .token.rule {
    color: var(--hue-3);
  }

  /* JS overrides */
  .language-javascript .token.operator {
    color: var(--hue-3);
  }

  .language-javascript
    .token.template-string
    > .token.interpolation
    > .token.interpolation-punctuation.punctuation {
    color: var(--hue-5-2);
  }

  /* JSON overrides */
  .language-json .token.operator {
    color: var(--mono-1);
  }

  .language-json .token.null.keyword {
    color: var(--hue-6);
  }

  /* MD overrides */
  .language-markdown .token.url,
  .language-markdown .token.url > .token.operator,
  .language-markdown .token.url-reference.url > .token.string {
    color: var(--mono-1);
  }

  .language-markdown .token.url > .token.content {
    color: var(--hue-2);
  }

  .language-markdown .token.url > .token.url,
  .language-markdown .token.url-reference.url {
    color: var(--hue-1);
  }

  .language-markdown .token.blockquote.punctuation,
  .language-markdown .token.hr.punctuation {
    color: var(--mono-3);
    font-style: italic;
  }

  .language-markdown .token.code-snippet {
    color: var(--hue-4);
  }

  .language-markdown .token.bold .token.content {
    color: var(--hue-6);
  }

  .language-markdown .token.italic .token.content {
    color: var(--hue-3);
  }

  .language-markdown .token.strike .token.content,
  .language-markdown .token.strike .token.punctuation,
  .language-markdown .token.list.punctuation,
  .language-markdown .token.title.important > .token.punctuation {
    color: var(--hue-5);
  }

  /* General */
  .token.bold {
    font-weight: bold;
  }

  .token.comment,
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.namespace {
    opacity: 0.8;
  }

  /* Plugin overrides */
  /* Selectors should have higher specificity than those in the plugins' default stylesheets */

  /* Show Invisibles plugin overrides */
  .token.token.tab:not(:empty):before,
  .token.token.cr:before,
  .token.token.lf:before,
  .token.token.space:before {
    color: var(--syntax-guide);
  }

  /* Toolbar plugin overrides */
  /* Space out all buttons and move them away from the right edge of the code block */
  div.code-toolbar > .toolbar.toolbar > .toolbar-item {
    margin-right: 0.4em;
  }

  /* Styling the buttons */
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span {
    background: var(--syntax-selection-color);
    color: var(--mono-2);
    padding: 0.1em 0.4em;
    border-radius: 0.3em;
  }

  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus {
    background: hsl(230, 1%, 78%); /* custom: darken(--syntax-bg, 20%) */
    color: var(--mono-1);
  }

  /* Line Highlight plugin overrides */
  /* The highlighted line itself */
  .line-highlight.line-highlight {
    background: var(--syntax-highlight-bg);
  }

  /* Selection on highlighted lines */
  pre.diff-highlight
    > code
    .token.token.line-highlight:not(.prefix)::-moz-selection,
  pre.diff-highlight
    > code
    .token.token.line-highlight:not(.prefix)
    *::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.line-highlight:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.line-highlight:not(.prefix)
    *::-moz-selection {
    background-color: var(--syntax-highlight-selected-bg);
  }

  /* Selection on highlighted lines */
  pre.diff-highlight > code .token.token.line-highlight:not(.prefix)::selection,
  pre.diff-highlight
    > code
    .token.token.line-highlight:not(.prefix)
    *::selection,
  pre > code.diff-highlight .token.token.line-highlight:not(.prefix)::selection,
  pre
    > code.diff-highlight
    .token.token.line-highlight:not(.prefix)
    *::selection {
    background-color: var(--syntax-highlight-selected-bg);
  }

  /* Hovering over a linkable line number (in the gutter area) */
  /* Requires Line Numbers plugin as well */
  pre[id].linkable-line-numbers.linkable-line-numbers
    span.line-numbers-rows
    > span:hover:before {
    background-color: var(--syntax-cursor-line);
  }

  /* Line Numbers and Command Line plugins overrides */
  /* Line separating gutter from coding area */
  .line-numbers.line-numbers .line-numbers-rows,
  .command-line .command-line-prompt {
    border-right-color: var(--syntax-guide);
  }

  /* Stuff in the gutter */
  .line-numbers .line-numbers-rows > span:before,
  .command-line .command-line-prompt > span:before {
    color: var(--syntax-gutter);
  }

  /* Match Braces plugin overrides */
  /* Note: Outline colour is inherited from the braces */
  .rainbow-braces .token.token.punctuation.brace-level-1,
  .rainbow-braces .token.token.punctuation.brace-level-5,
  .rainbow-braces .token.token.punctuation.brace-level-9 {
    color: var(--hue-5);
  }

  .rainbow-braces .token.token.punctuation.brace-level-2,
  .rainbow-braces .token.token.punctuation.brace-level-6,
  .rainbow-braces .token.token.punctuation.brace-level-10 {
    color: var(--hue-4);
  }

  .rainbow-braces .token.token.punctuation.brace-level-3,
  .rainbow-braces .token.token.punctuation.brace-level-7,
  .rainbow-braces .token.token.punctuation.brace-level-11 {
    color: var(--hue-2);
  }

  .rainbow-braces .token.token.punctuation.brace-level-4,
  .rainbow-braces .token.token.punctuation.brace-level-8,
  .rainbow-braces .token.token.punctuation.brace-level-12 {
    color: var(--hue-3);
  }

  /* Diff Highlight plugin overrides */
  /* Taken from https://github.com/atom/github/blob/master/styles/variables.less */
  pre.diff-highlight > code .token.token.deleted:not(.prefix),
  pre > code.diff-highlight .token.token.deleted:not(.prefix) {
    background-color: var(--syntax-deleted-bg);
  }

  pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection,
  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.deleted:not(.prefix)
    *::-moz-selection {
    background-color: var(--syntax-deleted-selected-bg);
  }

  pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,
  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection {
    background-color: var(--syntax-deleted-selected-bg);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix),
  pre > code.diff-highlight .token.token.inserted:not(.prefix) {
    background-color: var(--syntax-inserted-bg);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection,
  pre.diff-highlight
    > code
    .token.token.inserted:not(.prefix)
    *::-moz-selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.inserted:not(.prefix)
    *::-moz-selection {
    background-color: var(--syntax-inserted-selected-bg);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,
  pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection {
    background-color: var(--syntax-inserted-selected-bg);
  }

  /* Previewers plugin overrides */
  /* Based on https://github.com/atom-community/atom-ide-datatip/blob/master/styles/atom-ide-datatips.less and https://github.com/atom/atom/blob/master/packages/one-light-ui */
  /* Border around popup */
  .prism-previewer.prism-previewer:before,
  .prism-previewer-gradient.prism-previewer-gradient div {
    border-color: hsl(0, 0, 95%);
  }

  /* Angle and time should remain as circles and are hence not included */
  .prism-previewer-color.prism-previewer-color:before,
  .prism-previewer-gradient.prism-previewer-gradient div,
  .prism-previewer-easing.prism-previewer-easing:before {
    border-radius: 0.3em;
  }

  /* Triangles pointing to the code */
  .prism-previewer.prism-previewer:after {
    border-top-color: hsl(0, 0, 95%);
  }

  .prism-previewer-flipped.prism-previewer-flipped.after {
    border-bottom-color: hsl(0, 0, 95%);
  }

  /* Background colour within the popup */
  .prism-previewer-angle.prism-previewer-angle:before,
  .prism-previewer-time.prism-previewer-time:before,
  .prism-previewer-easing.prism-previewer-easing {
    background: hsl(0, 0%, 100%);
  }

  /* For angle, this is the positive area (eg. 90deg will display one quadrant in this colour) */
  /* For time, this is the alternate colour */
  .prism-previewer-angle.prism-previewer-angle circle,
  .prism-previewer-time.prism-previewer-time circle {
    stroke: var(--mono-1);
    stroke-opacity: 1;
  }

  /* Stroke colours of the handle, direction point, and vector itself */
  .prism-previewer-easing.prism-previewer-easing circle,
  .prism-previewer-easing.prism-previewer-easing path,
  .prism-previewer-easing.prism-previewer-easing line {
    stroke: var(--mono-1);
  }

  /* Fill colour of the handle */
  .prism-previewer-easing.prism-previewer-easing circle {
    fill: transparent;
  }
`;function me(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages["markup-templating"])return;_(e);function n(a,r){return"___"+a.toUpperCase()+r+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,r,o,i){if(a.language===r){var g=a.tokenStack=[];a.code=a.code.replace(o,function(s){if(typeof i=="function"&&!i(s))return s;for(var c=g.length,u;a.code.indexOf(u=n(r,c))!==-1;)++c;return g[c]=s,u}),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,r){if(a.language!==r||!a.tokenStack)return;a.grammar=e.languages[r];var o=0,i=Object.keys(a.tokenStack);function g(s){for(var c=0;c<s.length&&!(o>=i.length);c++){var u=s[c];if(typeof u=="string"||u.content&&typeof u.content=="string"){var d=i[o],p=a.tokenStack[d],h=typeof u=="string"?u:u.content,l=n(r,d),v=h.indexOf(l);if(v>-1){++o;var f=h.substring(0,v),b=new e.Token(r,e.tokenize(p,a.grammar),"language-"+r,p),m=h.substring(v+l.length),k=[];f&&k.push.apply(k,g([f])),k.push(b),m&&k.push.apply(k,g([m])),typeof u=="string"?s.splice.apply(s,[c,1].concat(k)):u.content=k}}else u.content&&g(u.content)}return s}g(a.tokens)}}})}function ke(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages["css-extras"])){e.languages["css-extras"]={},M(e);var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,a;e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:a={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=a,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var r={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},o={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:r,number:o,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:r,number:o})}}function ye(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages["js-extras"])return;e.languages["js-extras"]={},$(e),e.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+e.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),e.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+e.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),e.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function n(s,c){return RegExp(s.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),c)}e.languages.insertBefore("javascript","keyword",{imports:{pattern:n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:e.languages.javascript},exports:{pattern:n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:e.languages.javascript}}),e.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),e.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),e.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:n(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var a=["function","function-variable","method","method-variable","property-access"],r=0;r<a.length;r++){var o=a[r],i=e.languages.javascript[o];e.util.type(i)==="RegExp"&&(i=e.languages.javascript[o]={pattern:i});var g=i.inside||{};i.inside=g,g["maybe-class-name"]=/^[A-Z][\s\S]*/}}function xe(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages["js-templates"])return;e.languages["js-templates"]={},$(e);var n=e.languages.javascript["template-string"],a=n.pattern.source,r=n.inside.interpolation,o=r.inside["interpolation-punctuation"],i=r.pattern.source;function g(l,v){if(e.languages[l])return{pattern:RegExp("((?:"+v+")\\s*)"+a),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:l}}}}e.languages.javascript["template-string"]=[g("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),g("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),g("svg",/\bsvg/.source),g("markdown",/\b(?:markdown|md)/.source),g("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),g("sql",/\bsql/.source),n].filter(Boolean);function s(l,v){return"___"+v.toUpperCase()+"_"+l+"___"}function c(l,v,f){var b={code:l,grammar:v,language:f};return e.hooks.run("before-tokenize",b),b.tokens=e.tokenize(b.code,b.grammar),e.hooks.run("after-tokenize",b),b.tokens}function u(l){var v={};v["interpolation-punctuation"]=o;var f=e.tokenize(l,v);if(f.length===3){var b=[1,1];b.push.apply(b,c(f[1],e.languages.javascript,"javascript")),f.splice.apply(f,b)}return new e.Token("interpolation",f,r.alias,l)}function d(l,v,f){var b=e.tokenize(l,{interpolation:{pattern:RegExp(i),lookbehind:!0}}),m=0,k={},y=b.map(function(F){if(typeof F=="string")return F;for(var E=F.content,S;l.indexOf(S=s(m++,f))!==-1;);return k[S]=E,S}).join(""),x=c(y,v,f),L=Object.keys(k);m=0;function w(F){for(var E=0;E<F.length;E++){if(m>=L.length)return;var S=F[E];if(typeof S=="string"||typeof S.content=="string"){var T=L[m],R=typeof S=="string"?S:S.content,j=R.indexOf(T);if(j!==-1){++m;var C=R.substring(0,j),K=u(k[T]),z=R.substring(j+T.length),B=[];if(C&&B.push(C),B.push(K),z){var oe=[z];w(oe),B.push.apply(B,oe)}typeof S=="string"?(F.splice.apply(F,[E,1].concat(B)),E+=B.length-1):S.content=B}}else{var X=S.content;Array.isArray(X)?w(X):w([X])}}}return w(x),new e.Token(f,x,"language-"+f,l)}var p={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};e.hooks.add("after-tokenize",function(l){if(!(l.language in p))return;function v(f){for(var b=0,m=f.length;b<m;b++){var k=f[b];if(typeof k!="string"){var y=k.content;if(!Array.isArray(y)){typeof y!="string"&&v([y]);continue}if(k.type==="template-string"){var x=y[1];if(y.length===3&&typeof x!="string"&&x.type==="embedded-code"){var L=h(x),w=x.alias,F=Array.isArray(w)?w[0]:w,E=e.languages[F];if(!E)continue;y[1]=d(L,E,F)}}else v(y)}}}v(l.tokens)});function h(l){return typeof l=="string"?l:Array.isArray(l)?l.map(h).join(""):h(l.content)}}function V(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages.jsx)return;e.languages.markup||_(e),e.languages.javascript||$(e);var n=e.util.clone(e.languages.javascript),a=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(c,u){return c=c.replace(/<S>/g,function(){return a}).replace(/<BRACES>/g,function(){return r}).replace(/<SPREAD>/g,function(){return o}),RegExp(c,u)}o=i(o).source,e.languages.jsx=e.languages.extend("markup",n),e.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=n.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var g=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(g).join(""):""},s=function(c){for(var u=[],d=0;d<c.length;d++){var p=c[d],h=!1;if(typeof p!="string"&&(p.type==="tag"&&p.content[0]&&p.content[0].type==="tag"?p.content[0].content[0].content==="</"?u.length>0&&u[u.length-1].tagName===g(p.content[0].content[1])&&u.pop():p.content[p.content.length-1].content==="/>"||u.push({tagName:g(p.content[0].content[1]),openedBraces:0}):u.length>0&&p.type==="punctuation"&&p.content==="{"?u[u.length-1].openedBraces++:u.length>0&&u[u.length-1].openedBraces>0&&p.type==="punctuation"&&p.content==="}"?u[u.length-1].openedBraces--:h=!0),(h||typeof p=="string")&&u.length>0&&u[u.length-1].openedBraces===0){var l=g(p);d<c.length-1&&(typeof c[d+1]=="string"||c[d+1].type==="plain-text")&&(l+=g(c[d+1]),c.splice(d+1,1)),d>0&&(typeof c[d-1]=="string"||c[d-1].type==="plain-text")&&(l=g(c[d-1])+l,c.splice(d-1,1),d--),c[d]=new e.Token("plain-text",l,null,l)}p.content&&typeof p.content!="string"&&s(p.content)}};e.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||s(c.tokens)})}function Y(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages.typescript)){e.languages.javascript||$(e),e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var n=e.languages.extend("typescript",{});delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript}}function we(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages.tsx)){e.languages.jsx||V(e),e.languages.typescript||Y(e);var n=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",n),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var a=e.languages.tsx.tag;a.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+a.pattern.source+")",a.pattern.flags),a.lookbehind=!0}}function Fe(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages.markdown)return;_(e);var n=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function a(d){return d=d.replace(/<inner>/g,function(){return n}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+d+")")}var r=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,o=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return r}),i=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+o+i+"(?:"+o+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+o+i+")(?:"+o+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(r),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+o+")"+i+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+o+"$"),inside:{"table-header":{pattern:RegExp(r),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:a(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:a(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:a(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:a(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(d){["url","bold","italic","strike","code-snippet"].forEach(function(p){d!==p&&(e.languages.markdown[d].inside.content.inside[p]=e.languages.markdown[p])})}),e.hooks.add("after-tokenize",function(d){if(d.language!=="markdown"&&d.language!=="md")return;function p(h){if(!(!h||typeof h=="string"))for(var l=0,v=h.length;l<v;l++){var f=h[l];if(f.type!=="code"){p(f.content);continue}var b=f.content[1],m=f.content[3];if(b&&m&&b.type==="code-language"&&m.type==="code-block"&&typeof b.content=="string"){var k=b.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");k=(/[a-z][\w-]*/i.exec(k)||[""])[0].toLowerCase();var y="language-"+k;m.alias?typeof m.alias=="string"?m.alias=[m.alias,y]:m.alias.push(y):m.alias=[y]}}}p(d.tokens)}),e.hooks.add("wrap",function(d){if(d.type==="code-block"){for(var p="",h=0,l=d.classes.length;h<l;h++){var v=d.classes[h],f=/language-(.+)/.exec(v);if(f){p=f[1];break}}var b=e.languages[p];if(b)d.content=e.highlight(u(d.content),b,p);else if(p&&p!=="none"&&e.plugins.autoloader){var m="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);d.attributes.id=m,e.plugins.autoloader.loadLanguages(p,function(){var k=document.getElementById(m);k&&(k.innerHTML=e.highlight(k.textContent,e.languages[p],p))})}}});var g=RegExp(e.languages.markup.tag.pattern.source,"gi"),s={amp:"&",lt:"<",gt:">",quot:'"'},c=String.fromCodePoint||String.fromCharCode;function u(d){var p=d.replace(g,"");return p=p.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(h,l){if(l=l.toLowerCase(),l[0]==="#"){var v;return l[1]==="x"?v=parseInt(l.slice(2),16):v=Number(l.slice(1)),c(v)}else{var f=s[l];return f||h}}),p}e.languages.md=e.languages.markdown}function J(){let e=new U;return _(e),me(e),M(e),ke(e),$(e),ye(e),xe(e),V(e),Y(e),we(e),Fe(e),e}var re=class{static get instance(){return this.__singleton__||(this.__singleton__=J()),this.__singleton__}};function ae(e,t,n,a,r={}){a||(a=re.instance),t||(t=a.languages.markup);var o={code:e,grammar:t,language:n,tokens:[]};if(a.hooks.run("before-tokenize",o),r.beforeTokenize?.forEach(i=>{i(o)}),!o.grammar)throw new Error('The language "'+o.language+'" has no grammar.');return o.tokens=a.tokenize(o.code,o.grammar),a.hooks.run("after-tokenize",o),r.afterTokenize?.forEach(i=>{i(o)}),o}var Ce=/\r\n|\r|\n/;function Ae(e={}){let t=e.lineNumberStart??1,n=e.callback;return typeof n!="function"&&(n=(a,r,o)=>{if(a.length<=0)return;let i=new A("line-number",(r+t).toString()),g=new A("gutter-cell",[i]),s=new A("diff-line",a);o.push(g,s)}),function(r){let o=[];Se(r.tokens).forEach((i,g)=>{n(i,g,o)}),r.tokens=o}}function Be(e){return Array.isArray(e)?e:[e]}function Re(e){return e.length===0?"":e.length===1&&typeof e[0]=="string"?e[0]:e}function Se(e){let t=[],n=[t];for(let a=0;a<e.length;a++){let r=e[a];if(typeof r=="string"){let o=r.split(Ce);for(let i=0;i<o.length;i++){i>0&&n.push(t=[]);let g=o[i];g&&t.push(g)}}else{let o=Se(Be(r.content));if(o.length>1)for(let i=0;i<o.length;i++){i>0&&n.push(t=[]);let g=o[i];if(g.length){let s=new A(r.type,Re(g),r.alias);s.length=g.reduce((c,u)=>c+u.length,0),t.push(s)}}else t.push(r)}}return n}function Ee(){let e=["inserted","line-highlight","deleted"];function t(n,a,r){n.type.includes(a)&&(n.attributes.part=r,e.forEach(o=>{n.type.includes(o)&&(n.attributes.part+=` ${r}--${o}`)}))}return function(n){t(n,"diff-line","line"),t(n,"line-number","line-number"),t(n,"gutter-cell","gutter-cell"),t(n,"diff-marker","diff-marker")}}ee.define("basic-diff-view-element");var _e=ee;var O=class extends A{constructor(...t){super(...t),this.lineNumber=null}},ze={added:"inserted",removed:"deleted"},N=class extends _e{static get properties(){return{...super.properties,highlighter:{attribute:!1,state:!0}}}constructor(){super(),this.language="plaintext",this.highlighter=J()}transformLineInformation(t){super.transformLineInformation(t),this.syntaxHighlight(t)}renderLine(t){return se`${de(t.value)}`}lineNumberPlugin(t,n){return Ae({lineNumberStart:this.lineNumberStart,callback:(a,r,o)=>{let i=new A("row",[]);o.push(i);let g=t[r];if(!g)return;let s=g[n]?.lineNumber,c=s!=null;[new O("gutter-cell",[new O("line-number",c?(s+this.lineNumberStart-1).toString():"")]),new O("diff-marker",""),new O("diff-line",a)].forEach(d=>{d.lineNumber=c?s:null,Array.isArray(i.content)&&i.content.push(d)})}})}diffPartPlugin(t){let a=["diff-line","diff-marker","gutter-cell"].some(r=>t.type.match(r));if(a&&(t.tag="td"),t.type.startsWith("character-diff")){let[r,o]=t.type.split(/--/),i=ze[o]||"";t.attributes.part=`${r} ${r}--${i}`}t.type.startsWith("character-diff")||a||(t.attributes.part=`token ${t.type}`)}syntaxHighlight(t){let n={value:[],insertedLines:new Set,deletedLines:new Set},a={value:[],insertedLines:new Set,deletedLines:new Set};t.forEach(i=>{let g=i.left.value;i.left.type==="removed"&&n.deletedLines.add(i.left.lineNumber),n.value.push(g);let s=i.right.value;i.right.type==="added"&&a.insertedLines.add(i.right.lineNumber),a.value.push(s)}),this.highlighter||(this.highlighter=J()),this.highlighter.hooks.add("wrap",this.diffPartPlugin),this.highlighter.hooks.add("wrap",Ee()),ae(n.value.join(`
`),this.highlighter.languages[this.language],this.language,this.highlighter,{afterTokenize:[this.lineNumberPlugin(t,"left"),i=>{i.tokens.forEach(g=>{g.content.forEach(s=>{typeof s!="string"&&s.lineNumber!==null&&n.deletedLines.has(s.lineNumber)&&(s.type+=" deleted")})})}]}).tokens.forEach((i,g)=>{let s=t[g]?.left?.data;if(typeof i=="string"||s==null)return;this.modifyTokens(i,s);let c=A.stringify(this.highlighter.util.encode(i.content),this.language,this.highlighter);t[g].left.value=c});let o=ae(a.value.join(`
`),this.highlighter.languages[this.language],this.language,this.highlighter,{afterTokenize:[this.lineNumberPlugin(t,"right"),i=>{i.tokens.forEach(g=>{g.content.forEach(s=>{typeof s!="string"&&s.lineNumber!==null&&a.insertedLines.has(s.lineNumber)&&(s.type+=" inserted")})})}]});this.lineInfo=t,o.tokens.forEach((i,g)=>{let s=t[g]?.right?.data;if(typeof i=="string"||s==null)return;this.modifyTokens(i,s);let c=A.stringify(this.highlighter.util.encode(i.content),this.language,this.highlighter);t[g].right.value=c})}modifyTokens(t,n){if(n.length<=0)return;let a=["removed","added"];n.forEach(r=>{a.includes(r.type)&&this.modifyToken(t,r)})}modifyToken(t,n,a={offset:0,count:0,value:"",offsetValue:""}){if(!(a.count>=n.length||["gutter-cell","diff-marker"].some(o=>t.type.match(o)))){if(typeof t.content=="string"){this.modifyTokenContent(t,null,n,a);return}if(!(t.content.length<=0))for(let o=0;o<t.content.length;o++){let i=t.content[o];typeof i=="string"?this.modifyTokenContent(t,o,n,a):this.modifyToken(i,n,a)}}}modifyTokenContent(t,n,a,r){let o=n==null?t.content:t.content[n];if(typeof o!="string")return;if(t.touchedIndexes==null&&(t.touchedIndexes=new Set),n!=null&&t.touchedIndexes.has(n)){r.offset+=o.length,r.offsetValue+=o;return}if(n==null&&t.touched){r.offset+=o.length,r.offsetValue+=o;return}n==null&&(t.touched=!0),n!=null&&t.touchedIndexes.add(n);let i=r.offset,g=r.offset+o.length;if(i>a.offset+a.length){r.offset+=o.length,r.offsetValue+=o;return}if(g<a.offset){r.offset+=o.length,r.offsetValue+=o;return}let s=Math.max(a.offset-r.offset,0),c=a.length-r.count,u=o.substring(0,s),d=o.substring(s,s+c);r.count+=d.length;let p=o.substring(s+d.length);r.value+=d,r.offset+=o.length,r.offsetValue+=o,n!=null&&(t.touchedIndexes.add(n+1),t.touchedIndexes.add(n+2));let h=new A(`character-diff--${a.type}`,d);h.touched=!0;let l=[u,h,p];n!=null?t.content.splice(n,1,...l):t.content=l}};I(N,"baseName","diff-view-element"),I(N,"styles",[ue,ve,P]);export{N as a};
/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

prism-esm/prism-core.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/
//# sourceMappingURL=/diff-view-element/bridgetown/static/chunks/chunk-EQQBEQOI.js.map
