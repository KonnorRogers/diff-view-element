import"/diff-view-element/pull/1/bridgetown/static/chunks/chunk-WQD5PCYL.js";(window.requestIdleCallback||window.setTimeout)(async()=>{let{BridgetownNinjaKeys:s}=await import("/diff-view-element/pull/1/bridgetown/static/chunks/ninja-keys-TKMPXQIP.js"),o=[{id:"theme-light",icon:"<sl-icon name='sun'></sl-icon>",title:"Light Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("light"),{keepOpen:!0}}},{id:"theme-dark",icon:"<sl-icon name='moon'></sl-icon>",title:"Dark Mode",section:"Theme",keywords:"theme",handler(){return window.applyTheme("dark"),{keepOpen:!0}}},{id:"theme-system",icon:"<sl-icon name='display'></sl-icon>",title:"System",section:"Theme",keywords:"theme",handler(){return window.applyTheme("system"),{keepOpen:!0}}}];(class extends s{constructor(...l){super(...l),this.staticData=o}createData(){return this.results=this.showResultsForQuery(this._search||"*").reverse(),this.results.forEach(l=>{l.icon='<sl-icon name="link-45deg"></sl-icon>'}),this.staticData.concat(this.results)}transformResult(l){let t=super.transformResult(l);if(t)return t.section=l.collection.name,t}open(){this.scrollTop=window.scrollY,document.body.classList.add("fixed-body"),document.body.scroll(0,this.scrollTop),this.nonModals.forEach(l=>{l.setAttribute("inert","")}),super.open()}close(){document.body.classList.remove("fixed-body"),window.scrollTo(0,this.scrollTop),super.close(),this.nonModals.forEach(l=>l.removeAttribute("inert"))}get nonModals(){return[...document.body.children].filter(l=>l.localName!=="bridgetown-ninja-keys")}}).define("bridgetown-ninja-keys")});
//# sourceMappingURL=/diff-view-element/pull/1/bridgetown/static/javascript/defer.ZQNUNGOD.js.map
