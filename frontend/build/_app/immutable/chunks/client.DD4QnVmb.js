var j=Object.defineProperty;var E=(r,e,n)=>e in r?j(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var h=(r,e,n)=>E(r,typeof e!="symbol"?e+"":e,n);import{A as d,D as g,d as v,m as _,l as C,g as D,f as F,c as m,a as S}from"./query.CI6b4pqN.js";import"./index.j9I05b9W.js";import"./session.BncEhU1K.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="602a7c3b-ea6c-4994-8725-73e182536622",r._sentryDebugIdIdentifier="sentry-dbid-602a7c3b-ea6c-4994-8725-73e182536622")}catch{}})();const I=r=>()=>({async network(e,{client:n,initialValue:t,resolve:a,marshalVariables:s}){if(e.artifact.kind===d.Fragment)return a(e,t);const i=e.fetch??globalThis.fetch,o={name:e.name,text:e.text,hash:e.hash,variables:s(e)},l=await N(n.url,e.fetchParams)({fetch:(f,u)=>{const p=T(o,u)??u;return i(f,p)},metadata:e.metadata,session:e.session||{},...o});a(e,{fetching:!1,variables:e.variables??{},data:l.data,errors:!l.errors||l.errors.length===0?null:l.errors,partial:!1,stale:!1,source:g.Network})}}),N=(r,e)=>{if(!r)throw new Error("Could not find configured client url. Please specify one in your HoudiniClient constructor.");return async({fetch:n,name:t,text:a,variables:s})=>await(await n(r,{method:"POST",body:JSON.stringify({operationName:t,query:a,variables:s}),...e,headers:{Accept:"application/graphql+json, application/json","Content-Type":"application/json",...e==null?void 0:e.headers}})).json()};function T(r,e){const{files:n}=L({variables:r.variables});if(n.size){const t=e;let a={};if(t!=null&&t.headers){const c=Object.entries(t==null?void 0:t.headers).filter(([l,f])=>!(l.toLowerCase()=="content-type"&&f.toLowerCase()=="application/json"));a=Object.fromEntries(c)}const s=new FormData;e&&(e!=null&&e.body)?s.set("operations",e==null?void 0:e.body):s.set("operations",JSON.stringify({operationName:r.name,query:r.text,variables:r.variables}));const i={};let o=0;return n.forEach(c=>{i[++o]=c}),s.set("map",JSON.stringify(i)),o=0,n.forEach((c,l)=>{s.set(`${++o}`,l,l.name)}),{...t,headers:a,body:s}}}function A(r){return typeof File<"u"&&r instanceof File||typeof Blob<"u"&&r instanceof Blob}function L(r){if(!arguments.length)throw new TypeError("Argument 1 `value` is required.");const e=new Map,n=new Map;function t(a,s,i){if(A(a)){const l=n.get(a);return l?l.push(s):n.set(a,[s]),null}const o=Array.isArray(a)||typeof FileList<"u"&&a instanceof FileList,c=k(a);if(o||c){let l=e.get(a);const f=!l;if(f&&(l=o?[]:a instanceof Object?{}:Object.create(null),e.set(a,l)),!i.has(a)){const u=s?`${s}.`:"",p=new Set(i).add(a);if(o){let y=0;for(const b of a){const O=t(b,u+y++,p);f&&l.push(O)}}else for(const y in a){const b=t(a[y],u+y,p);f&&(l[y]=b)}}return l}return a}return{clone:t(r,"",new Set),files:n}}function k(r){if(typeof r!="object"||r===null)return!1;const e=Object.getPrototypeOf(r);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)}const w=(r,e)=>()=>{const n=e(),t=s=>s?(i,o)=>i.artifact.kind!==r?o.next(i):s(i,o):void 0,a=s=>s?(i,o)=>i.artifact.kind!==r?o.resolve(i):s(i,o):void 0;return{start:t(n.start),network:t(n.network),afterNetwork:a(n.afterNetwork),end:a(n.end),catch:n.catch?(s,i)=>n.catch(s,i):void 0,cleanup:(...s)=>{var i;return(i=n.cleanup)==null?void 0:i.call(n,...s)}}},q=r=>w(d.Query,function(){let e=null,n=null;return{start(t,{next:a}){var i;const s={session:t.session};t.variables={...n,...Object.fromEntries(Object.entries(((i=t.artifact.input)==null?void 0:i.runtimeScalars)??{}).map(([o,c])=>{var f,u;const l=(u=(f=t.config.features)==null?void 0:f.runtimeScalars)==null?void 0:u[c];return l?[o,l.resolve(s)]:[o,c]})),...t.variables},a(t)},end(t,{resolve:a,marshalVariables:s,variablesChanged:i}){var o,c;if(i(t)&&!((o=t.cacheParams)!=null&&o.disableSubscriptions)){e&&r.unsubscribe(e,((c=e.variables)==null?void 0:c.call(e))||{}),n={...s(t)};const l=n;e={rootType:t.artifact.rootType,selection:t.artifact.selection,variables:()=>l,set:f=>{a(t,{data:f,errors:null,fetching:!1,partial:!1,stale:!1,source:g.Cache,variables:t.variables??{}})}},r.subscribe(e,n)}a(t)},cleanup(){var t;e&&(r.unsubscribe(e,(t=e.variables)==null?void 0:t.call(e)),n=null)}}}),M=r=>w(d.Fragment,function(){let e=null,n=null;return{start(t,{next:a,resolve:s,variablesChanged:i,marshalVariables:o}){var l,f;if(!t.stuff.parentID)return a(t);const c={parent:t.stuff.parentID,variables:o(t)};if(!((l=t.cacheParams)!=null&&l.disableSubscriptions)&&(!v(n,c)||i(t))){e&&r.unsubscribe(e,((f=e.variables)==null?void 0:f.call(e))||{});const u=o(t);e={rootType:t.artifact.rootType,selection:t.artifact.selection,variables:()=>u,parentID:t.stuff.parentID,set:p=>{s(t,{data:p,errors:null,fetching:!1,partial:!1,stale:!1,source:g.Cache,variables:u})}},r.subscribe(e,u),n=c}a(t)},cleanup(){var t;e&&r.unsubscribe(e,(t=e.variables)==null?void 0:t.call(e))}}}),R=r=>w(d.Mutation,()=>({async start(e,{next:n,marshalVariables:t}){const a=r._internal_unstable.storage.createLayer(!0),s=e.stuff.optimisticResponse;let i=[];s&&(i=r.write({selection:e.artifact.selection,data:await _({selection:e.artifact.selection,data:s}),variables:t(e),layer:a.id})),e.cacheParams={...e.cacheParams,layer:a,notifySubscribers:i,forceNotify:!0},n(e)},afterNetwork(e,{resolve:n}){var t;(t=e.cacheParams)!=null&&t.layer&&r.clearLayer(e.cacheParams.layer.id),n(e)},end(e,{resolve:n,value:t}){var s,i;t.errors&&t.errors.length>0&&(s=e.cacheParams)!=null&&s.layer&&r.clearLayer(e.cacheParams.layer.id),(i=e.cacheParams)!=null&&i.layer&&r._internal_unstable.storage.resolveLayer(e.cacheParams.layer.id),n(e)},catch(e,{error:n}){var t;if((t=e.cacheParams)!=null&&t.layer){const{layer:a}=e.cacheParams;r.clearLayer(a.id),r._internal_unstable.storage.resolveLayer(a.id)}throw n}})),H=({operations:r,error:e})=>()=>{const n=r.includes("all"),t=a=>n||{[d.Query]:r.includes("query"),[d.Mutation]:r.includes("mutation"),[d.Fragment]:!1,[d.Subscription]:r.includes("subscription")}[a];return{async end(a,{value:s,resolve:i}){if(s.errors&&s.errors.length>0&&t(a.artifact.kind))throw await(e??J)(s.errors,a);i(a)}}},J=async r=>new Error(r.map(e=>e.message).join(". ")+"."),$=(r=()=>({}))=>()=>({start(e,{next:n,marshalVariables:t}){n({...e,fetchParams:r({config:e.config,policy:e.policy,metadata:e.metadata,session:e.session,stuff:e.stuff,document:e.artifact,variables:t(e),text:e.text,hash:e.hash})})}}),B=[];var K=B;class Q{constructor({url:e,fetchParams:n,plugins:t,pipeline:a,throwOnError:s}={}){h(this,"url");h(this,"throwOnError_operations");h(this,"cache",null);h(this,"throwOnError");h(this,"fetchParams");h(this,"pipeline");h(this,"extraPlugins");h(this,"proxies",{});h(this,"componentCache",{});var o,c;if(t&&a)throw new Error("A client cannot be given a pipeline and a list of plugins at the same time.");this.throwOnError_operations=(s==null?void 0:s.operations)??[];let i=((c=(o=globalThis.process)==null?void 0:o.env)==null?void 0:c.HOUDINI_PORT)??"5173";this.url=e??(globalThis.window?"":`https://localhost:${i}`)+C(D()),this.throwOnError=s,this.fetchParams=n,this.pipeline=a,this.extraPlugins=t}setCache(e){this.cache=e}get plugins(){return F([].concat(this.throwOnError?[H(this.throwOnError)]:[],$(this.fetchParams),this.pipeline??[q(this.cache??m),R(this.cache??m),M(this.cache??m)].concat(this.extraPlugins??[],K,I())))}observe({enableCache:e=!0,fetching:n=!1,...t}){return new S({client:this,plugins:P(this.plugins),fetching:n,enableCache:e,cache:this.cache??void 0,...t})}registerProxy(e,n){this.proxies[e]=n}}function P(r){return r.reduce((e,n)=>{if(typeof n!="function")throw new Error("Encountered client plugin that's not a function");const t=n();if(!t)return e;if(!Array.isArray(t))return e.concat(t);for(const a of t)if(a){if(typeof a=="function")return e.concat(P([a]));e.push(a)}return e},[])}const V=new Q({url:"http://localhost:1337/graphql"});export{V as default};
