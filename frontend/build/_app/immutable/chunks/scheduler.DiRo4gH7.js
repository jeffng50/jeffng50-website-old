function w(){}function E(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function A(){return Object.create(null)}function v(t){t.forEach(j)}function B(t){return typeof t=="function"}function C(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function D(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function F(t){return Object.keys(t).length===0}function y(t,...n){if(t==null){for(const c of n)c(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function P(t){let n;return y(t,e=>n=e)(),n}function S(t,n,e){t.$$.on_destroy.push(y(n,e))}function U(t,n,e,c){if(t){const r=m(t,n,e,c);return t[0](r)}}function m(t,n,e,c){return t[1]&&c?E(e.ctx.slice(),t[1](c(n))):e.ctx}function G(t,n,e,c){if(t[2]&&c){const r=t[2](c(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],_=Math.max(n.dirty.length,r.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|r[s];return l}return n.dirty|r}return n.dirty}function H(t,n,e,c,r,l){if(r){const _=m(n,e,c,l);t.p(_,r)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let c=0;c<e;c++)n[c]=-1;return n}return-1}function J(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let f;function h(t){f=t}function k(){if(!f)throw new Error("Function called outside component initialization");return f}function K(t){k().$$.on_mount.push(t)}function L(t){k().$$.after_update.push(t)}function N(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(c=>c.call(this,n))}const a=[],g=[];let u=[];const p=[],x=Promise.resolve();let b=!1;function q(){b||(b=!0,x.then(z))}function Q(){return q(),x}function O(t){u.push(t)}function R(t){p.push(t)}const d=new Set;let o=0;function z(){if(o!==0)return;const t=f;do{try{for(;o<a.length;){const n=a[o];o++,h(n),M(n.$$)}}catch(n){throw a.length=0,o=0,n}for(h(null),a.length=0,o=0;g.length;)g.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(a.length);for(;p.length;)p.pop()();b=!1,d.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),v(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function T(t){const n=[],e=[];u.forEach(c=>t.indexOf(c)===-1?n.push(c):e.push(c)),e.forEach(c=>c()),u=n}export{q as A,D as B,E as C,J as D,U as a,G as b,S as c,L as d,g as e,N as f,I as g,R as h,y as i,P as j,A as k,z as l,B as m,w as n,K as o,F as p,O as q,v as r,C as s,Q as t,H as u,T as v,f as w,h as x,j as y,a as z};
