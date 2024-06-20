import{s as le,a as Q,u as W,g as X,b as Y,r as ue,f as fe,e as ae,h as he,o as _e,n as ne}from"../chunks/scheduler.VSw_3VqK.js";import{S as oe,i as ie,e as g,s as L,t as re,c as p,a as V,f as j,b as ce,d as C,m as T,g as z,h as i,z as N,A as me,B as ge,j as pe,k as U,l as G,C as ve,u as be,y as S,v as we,w as Me,D as xe,x as Te}from"../chunks/index.C7qAkaxt.js";import{e as Z}from"../chunks/each.D6YF6ztN.js";import{c as $}from"../chunks/constants.BIY6NsxU.js";import"../chunks/store.DmpdFdfE.js";const ke=l=>({}),ee=l=>({});function De(l){let e,t,s,n,u,D,f,m,v,b,w,I,y;const c=l[6].header,d=Q(c,l,l[5],ee),E=l[6].default,h=Q(E,l,l[5],null);return{c(){e=g("dialog"),t=g("div"),d&&d.c(),s=L(),n=g("hr"),u=L(),h&&h.c(),D=L(),f=g("hr"),m=L(),v=g("button"),b=re(l[1]),this.h()},l(a){e=p(a,"DIALOG",{});var k=V(e);t=p(k,"DIV",{class:!0});var M=V(t);d&&d.l(M),s=j(M),n=p(M,"HR",{}),u=j(M),h&&h.l(M),D=j(M),f=p(M,"HR",{}),m=j(M),v=p(M,"BUTTON",{class:!0});var A=V(v);b=ce(A,l[1]),A.forEach(C),M.forEach(C),k.forEach(C),this.h()},h(){T(v,"class","btn btn-primary rounded-none"),v.autofocus=!0,T(t,"class","flex flex-col")},m(a,k){z(a,e,k),i(e,t),d&&d.m(t,null),i(t,s),i(t,n),i(t,u),h&&h.m(t,null),i(t,D),i(t,f),i(t,m),i(t,v),i(v,b),l[8](e),w=!0,v.focus(),I||(y=[N(v,"click",l[3]),N(t,"click",me(l[7])),N(e,"close",l[9]),N(e,"click",ge(l[10]))],I=!0)},p(a,[k]){d&&d.p&&(!w||k&32)&&W(d,c,a,a[5],w?Y(c,a[5],k,ke):X(a[5]),ee),h&&h.p&&(!w||k&32)&&W(h,E,a,a[5],w?Y(E,a[5],k,null):X(a[5]),null),(!w||k&2)&&pe(b,a[1])},i(a){w||(U(d,a),U(h,a),w=!0)},o(a){G(d,a),G(h,a),w=!1},d(a){a&&C(e),d&&d.d(a),h&&h.d(a),l[8](null),I=!1,ue(y)}}}function ye(l,e,t){let{$$slots:s={},$$scope:n}=e,{showModal:u}=e,{closeText:D="close"}=e,{closeDialogAction:f=()=>{}}=e,m;const v=()=>{m.close(),f()};function b(c){fe.call(this,l,c)}function w(c){ae[c?"unshift":"push"](()=>{m=c,t(2,m)})}const I=()=>t(0,u=!1),y=()=>m.close();return l.$$set=c=>{"showModal"in c&&t(0,u=c.showModal),"closeText"in c&&t(1,D=c.closeText),"closeDialogAction"in c&&t(4,f=c.closeDialogAction),"$$scope"in c&&t(5,n=c.$$scope)},l.$$.update=()=>{l.$$.dirty&5&&m&&u&&m.showModal()},[u,D,m,v,f,n,s,b,w,I,y]}class Ae extends oe{constructor(e){super(),ie(this,e,ye,De,le,{showModal:0,closeText:1,closeDialogAction:4})}}const Se=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function te(l,e,t){const s=l.slice();return s[5]=e[t][0],s[6]=e[t][1],s}function se(l){let e,t=l[5]+"",s;return{c(){e=g("a"),s=re(t),this.h()},l(n){e=p(n,"A",{class:!0,href:!0});var u=V(e);s=ce(u,t),u.forEach(C),this.h()},h(){T(e,"class","btn btn-secondary btn-wide"),T(e,"href",l[6])},m(n,u){z(n,e,u),i(e,s)},p:ne,d(n){n&&C(e)}}}function Ce(l){let e,t='<img src="/images/smallest_violin_hamster_me.png" alt="smallest violin hamster meme but me"/> <p>pls follow</p>';return{c(){e=g("div"),e.innerHTML=t,this.h()},l(s){e=p(s,"DIV",{class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1885qpn"&&(e.innerHTML=t),this.h()},h(){T(e,"class","items-center justify-center text-center")},m(s,n){z(s,e,n)},p:ne,d(s){s&&C(e)}}}function He(l){let e,t,s,n,u='<div class="w-24 rounded-full"><img src="/images/jeef.arts_logo.png" alt="Avatar"/></div>',D,f,m="Jeff Ng",v,b,w='<span class="text-sm text-gray-500">artist ·</span> <span class="text-sm text-gray-500">software engineer</span> <span class="text-sm text-gray-500">· human</span>',I,y,c,d,E='<a class="btn btn-accent" href="./">See my website</a> <a class="btn btn-outline btn-accent dark:text-white" href="mailto:50jeffng@gmail.com">Mail me</a>',h,a,k="still unsure? click me",M,A,F,q,P,J,O=Z(Object.entries($.socialMediaLinks)),_=[];for(let o=0;o<O.length;o+=1)_[o]=se(te(l,O,o));function de(o){l[3](o)}let K={closeText:"yes i will :)",closeDialogAction:l[2],$$slots:{default:[Ce]},$$scope:{ctx:l}};return l[0]!==void 0&&(K.showModal=l[0]),A=new Ae({props:K}),ae.push(()=>ve(A,"showModal",de)),{c(){e=g("div"),t=g("div"),s=g("div"),n=g("div"),n.innerHTML=u,D=L(),f=g("h1"),f.textContent=m,v=L(),b=g("div"),b.innerHTML=w,I=L(),y=g("div");for(let o=0;o<_.length;o+=1)_[o].c();c=L(),d=g("div"),d.innerHTML=E,h=L(),a=g("button"),a.textContent=k,M=L(),be(A.$$.fragment),this.h()},l(o){e=p(o,"DIV",{class:!0});var x=V(e);t=p(x,"DIV",{class:!0});var H=V(t);s=p(H,"DIV",{class:!0});var r=V(s);n=p(r,"DIV",{class:!0,"data-svelte-h":!0}),S(n)!=="svelte-1sof6co"&&(n.innerHTML=u),D=j(r),f=p(r,"H1",{class:!0,"data-svelte-h":!0}),S(f)!=="svelte-1ww8idk"&&(f.textContent=m),v=j(r),b=p(r,"DIV",{class:!0,"data-svelte-h":!0}),S(b)!=="svelte-s5leea"&&(b.innerHTML=w),I=j(r),y=p(r,"DIV",{class:!0});var B=V(y);for(let R=0;R<_.length;R+=1)_[R].l(B);B.forEach(C),c=j(r),d=p(r,"DIV",{class:!0,"data-svelte-h":!0}),S(d)!=="svelte-1ytajag"&&(d.innerHTML=E),r.forEach(C),H.forEach(C),h=j(x),a=p(x,"BUTTON",{class:!0,"data-svelte-h":!0}),S(a)!=="svelte-19lrprp"&&(a.textContent=k),M=j(x),we(A.$$.fragment,x),x.forEach(C),this.h()},h(){T(n,"class","avatar mt-4"),T(f,"class","mt-4 text-xl font-medium"),T(b,"class","mt-4 flex space-x-3 md:mt-6 rtl:space-x-reverse"),T(y,"class","mt-8 grid grid-rows-none gap-2"),T(d,"class","mt-4 flex space-x-3 md:mt-6 rtl:space-x-reverse"),T(s,"class","flex flex-col items-center pb-4"),T(t,"class","card w-72 bg-primary shadow-xl md:w-96"),T(a,"class","btn btn-outline mt-8"),T(e,"class","flex h-screen flex-col items-center justify-center")},m(o,x){z(o,e,x),i(e,t),i(t,s),i(s,n),i(s,D),i(s,f),i(s,v),i(s,b),i(s,I),i(s,y);for(let H=0;H<_.length;H+=1)_[H]&&_[H].m(y,null);i(s,c),i(s,d),i(e,h),i(e,a),i(e,M),Me(A,e,null),q=!0,P||(J=N(a,"click",l[1]),P=!0)},p(o,[x]){if(x&0){O=Z(Object.entries($.socialMediaLinks));let r;for(r=0;r<O.length;r+=1){const B=te(o,O,r);_[r]?_[r].p(B,x):(_[r]=se(B),_[r].c(),_[r].m(y,null))}for(;r<_.length;r+=1)_[r].d(1);_.length=O.length}const H={};x&512&&(H.$$scope={dirty:x,ctx:o}),!F&&x&1&&(F=!0,H.showModal=o[0],he(()=>F=!1)),A.$set(H)},i(o){q||(U(A.$$.fragment,o),q=!0)},o(o){G(A.$$.fragment,o),q=!1},d(o){o&&C(e),xe(_,o),Te(A),P=!1,J()}}}function Le(l,e,t){let s=!1,n;_e(()=>{n=new Audio("/audio/sad_hampster_violin_meme.mp3")});const u=()=>{t(0,s=!0),n.play()},D=()=>{n.pause(),n.currentTime=0};function f(m){s=m,t(0,s)}return[s,u,D,f]}class Be extends oe{constructor(e){super(),ie(this,e,Le,He,le,{})}}export{Be as component,Se as universal};
