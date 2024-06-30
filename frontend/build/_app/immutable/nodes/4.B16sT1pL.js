import{i as N,Q as O,g as Q}from"../chunks/query.B9bIrE3C.js";import{S as R,i as C,e as m,c as _,a as p,d,m as h,g as f,h as D,k as g,l as y,A as q,B as T,r as z,s as I,z as v,v as A,f as E,w as B,y as x,H as V,C as M}from"../chunks/index.DwJpHIoi.js";import{R as F}from"../chunks/session.D97LH9JM.js";import{s as j,a as G,u as J,g as K,b as L,c as U,n as b,h as W}from"../chunks/scheduler.DRUCtv95.js";import{m as w}from"../chunks/marked.esm.Bm4yzFXD.js";import{n as X}from"../chunks/stores.kLsn-qq6.js";import"../chunks/entry.BbRfHpj5.js";import"../chunks/store.CduFRsiV.js";(function(){try{var l=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(l._sentryDebugIds=l._sentryDebugIds||{},l._sentryDebugIds[e]="d8309085-759e-467e-b81c-d6889f34d532",l._sentryDebugIdIdentifier="sentry-dbid-d8309085-759e-467e-b81c-d6889f34d532")}catch{}})();function Y(l){let e,t,a,i;const o=l[1].default,r=G(o,l,l[0],null);return{c(){e=m("div"),t=m("div"),a=m("div"),r&&r.c(),this.h()},l(n){e=_(n,"DIV",{class:!0});var s=p(e);t=_(s,"DIV",{class:!0});var c=p(t);a=_(c,"DIV",{class:!0});var u=p(a);r&&r.l(u),u.forEach(d),c.forEach(d),s.forEach(d),this.h()},h(){h(a,"class","prose max-w-md"),h(t,"class","hero-content text-neutral-content text-center"),h(e,"class","hero min-h-96")},m(n,s){f(n,e,s),D(e,t),D(t,a),r&&r.m(a,null),i=!0},p(n,[s]){r&&r.p&&(!i||s&1)&&J(r,o,n,n[0],i?L(o,n[0],s,null):K(n[0]),null)},i(n){i||(g(r,n),i=!0)},o(n){y(r,n),i=!1},d(n){n&&d(e),r&&r.d(n)}}}function Z(l,e,t){let{$$slots:a={},$$scope:i}=e;return l.$$set=o=>{"$$scope"in o&&t(0,i=o.$$scope)},[i,a]}class ee extends R{constructor(e){super(),C(this,e,Z,Y,j,{})}}const te={name:"HomePage",kind:"HoudiniQuery",hash:"82a126bfae3a435c991c0ee7f98e86f7db97108ed9b3da2a76996883b21a55d4",raw:`query HomePage {
  homePage {
    data {
      attributes {
        welcomeMessage
        body
      }
      id
    }
  }
}
`,rootType:"Query",selection:{fields:{homePage:{type:"HomePageEntityResponse",keyRaw:"homePage",nullable:!0,selection:{fields:{data:{type:"HomePageEntity",keyRaw:"data",nullable:!0,selection:{fields:{attributes:{type:"HomePage",keyRaw:"attributes",nullable:!0,selection:{fields:{welcomeMessage:{type:"String",keyRaw:"welcomeMessage",visible:!0},body:{type:"String",keyRaw:"body",nullable:!0,visible:!0}}},visible:!0},id:{type:"ID",keyRaw:"id",visible:!0,nullable:!0}}},visible:!0}}},visible:!0}}},pluginData:{"houdini-svelte":{}},policy:"CacheOrNetwork",partial:!1};class ae extends O{constructor(){super({artifact:te,storeName:"HomePageStore",variables:!1})}}async function se(l){await N();const e=new ae;return await e.fetch(l),{HomePage:e}}async function ie(l){const e=new F(l);Q();const t=[],a={};a.HomePage={},t.push(se({variables:a.HomePage,event:l,blocking:void 0}));let i={};try{i=Object.assign({},...await Promise.all(t))}catch(o){throw o}return{...e.returnValue,...i}}const ge=Object.freeze(Object.defineProperty({__proto__:null,load:ie},Symbol.toStringTag,{value:"Module"}));function le(l){let e,t,a,i,o,r;e=new ee({props:{$$slots:{default:[ne]},$$scope:{ctx:l}}});let n=l[1].body!=null&&S(l);return{c(){z(e.$$.fragment),t=I(),a=m("div"),i=I(),n&&n.c(),o=v(),this.h()},l(s){A(e.$$.fragment,s),t=E(s),a=_(s,"DIV",{class:!0}),p(a).forEach(d),i=E(s),n&&n.l(s),o=v(),this.h()},h(){h(a,"class","divider")},m(s,c){B(e,s,c),f(s,t,c),f(s,a,c),f(s,i,c),n&&n.m(s,c),f(s,o,c),r=!0},p(s,c){const u={};c&34&&(u.$$scope={dirty:c,ctx:s}),e.$set(u),s[1].body!=null?n?n.p(s,c):(n=S(s),n.c(),n.m(o.parentNode,o)):n&&(n.d(1),n=null)},i(s){r||(g(e.$$.fragment,s),r=!0)},o(s){y(e.$$.fragment,s),r=!1},d(s){s&&(d(t),d(a),d(i),d(o)),x(e,s),n&&n.d(s)}}}function oe(l){let e;return{c(){e=m("span"),this.h()},l(t){e=_(t,"SPAN",{class:!0}),p(e).forEach(d),this.h()},h(){h(e,"class","loading loading-ball loading-lg")},m(t,a){f(t,e,a)},p:b,i:b,o:b,d(t){t&&d(e)}}}function ne(l){let e,t=w(l[1].welcomeMessage)+"",a;return{c(){e=new V(!1),a=v(),this.h()},l(i){e=M(i,!1),a=v(),this.h()},h(){e.a=a},m(i,o){e.m(t,i,o),f(i,a,o)},p(i,o){o&2&&t!==(t=w(i[1].welcomeMessage)+"")&&e.p(t)},d(i){i&&(d(a),e.d())}}}function S(l){let e,t,a=w(l[1].body)+"";return{c(){e=m("div"),t=new V(!1),this.h()},l(i){e=_(i,"DIV",{class:!0});var o=p(e);t=M(o,!1),o.forEach(d),this.h()},h(){t.a=null,h(e,"class","prose text-center")},m(i,o){f(i,e,o),t.m(a,e)},p(i,o){o&2&&a!==(a=w(i[1].body)+"")&&t.p(a)},d(i){i&&d(e)}}}function re(l){let e,t,a,i;const o=[oe,le],r=[];function n(s,c){return s[3]||s[0].fetching?0:s[1]!=null?1:-1}return~(t=n(l))&&(a=r[t]=o[t](l)),{c(){e=m("div"),a&&a.c(),this.h()},l(s){e=_(s,"DIV",{class:!0});var c=p(e);a&&a.l(c),c.forEach(d),this.h()},h(){h(e,"class","rounded-badge bg-base-100 flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-16")},m(s,c){f(s,e,c),~t&&r[t].m(e,null),i=!0},p(s,[c]){let u=t;t=n(s),t===u?~t&&r[t].p(s,c):(a&&(T(),y(r[u],1,1,()=>{r[u]=null}),q()),~t?(a=r[t],a?a.p(s,c):(a=r[t]=o[t](s),a.c()),g(a,1),a.m(e,null)):a=null)},i(s){i||(g(a),i=!0)},o(s){y(a),i=!1},d(s){s&&d(e),~t&&r[t].d()}}}function ce(l,e,t){let a,i,o,r=b,n=()=>(r(),r=W(a,u=>t(0,o=u)),a),s;U(l,X,u=>t(3,s=u)),l.$$.on_destroy.push(()=>r());let{data:c}=e;return l.$$set=u=>{"data"in u&&t(4,c=u.data)},l.$$.update=()=>{var u,k,P,$,H;l.$$.dirty&16&&n(t(2,{HomePage:a}=c,a)),l.$$.dirty&1&&console.log((k=(u=o.data)==null?void 0:u.homePage)==null?void 0:k.data),l.$$.dirty&1&&t(1,i=(H=($=(P=o==null?void 0:o.data)==null?void 0:P.homePage)==null?void 0:$.data)==null?void 0:H.attributes)},[o,i,a,s,c]}class ye extends R{constructor(e){super(),C(this,e,ce,re,j,{data:4})}}export{ye as component,ge as universal};
