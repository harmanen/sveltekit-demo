import{H as G}from"../chunks/control.f5b05b5f.js";import{m as V,B as q}from"../chunks/LinkToWiki.20b61aff.js";import{s as A,e as F}from"../chunks/scheduler.6d75d094.js";import{S as J,i as K,r as D,s as O,g as $,u as N,c as S,h as v,j as b,f as u,k as h,v as w,a as _,y as j,d as m,t as d,b as B,w as E,m as z,n as C,p as H}from"../chunks/index.99f55aea.js";import{O as L}from"../chunks/ObjectsGrid.5eb746ff.js";import{p as Q}from"../chunks/stores.4da788b8.js";import{b as k}from"../chunks/paths.612d8abc.js";function R(r,e){return new G(r,e)}new TextEncoder;const U=({params:r})=>{const t=Math.round(V.length/5),s=Number(r.id);if(s>t)throw R(404,"Page not found");return{mockData:V.slice((s-1)*5,s*5),lastPage:t}},oe=Object.freeze(Object.defineProperty({__proto__:null,load:U},Symbol.toStringTag,{value:"Module"}));function M(r){let e,t,s;return t=new q({props:{element:"a",variant:"navigation",href:`${k}/objects/page/${Number(r[1].params.id)-1}`,$$slots:{default:[W]},$$scope:{ctx:r}}}),{c(){e=$("div"),D(t.$$.fragment),this.h()},l(a){e=v(a,"DIV",{class:!0});var n=b(e);N(t.$$.fragment,n),n.forEach(u),this.h()},h(){h(e,"class","navigation-button-container svelte-1o58dek")},m(a,n){_(a,e,n),w(t,e,null),s=!0},p(a,n){const f={};n&2&&(f.href=`${k}/objects/page/${Number(a[1].params.id)-1}`),n&4&&(f.$$scope={dirty:n,ctx:a}),t.$set(f)},i(a){s||(m(t.$$.fragment,a),s=!0)},o(a){d(t.$$.fragment,a),s=!1},d(a){a&&u(e),E(t)}}}function W(r){let e;return{c(){e=z("Previous page")},l(t){e=C(t,"Previous page")},m(t,s){_(t,e,s)},d(t){t&&u(e)}}}function T(r){let e,t,s;return t=new q({props:{element:"a",variant:"navigation",href:`${k}/objects/page/${Number(r[1].params.id)+1}`,$$slots:{default:[X]},$$scope:{ctx:r}}}),{c(){e=$("div"),D(t.$$.fragment),this.h()},l(a){e=v(a,"DIV",{class:!0});var n=b(e);N(t.$$.fragment,n),n.forEach(u),this.h()},h(){h(e,"class","navigation-button-container svelte-1o58dek")},m(a,n){_(a,e,n),w(t,e,null),s=!0},p(a,n){const f={};n&2&&(f.href=`${k}/objects/page/${Number(a[1].params.id)+1}`),n&4&&(f.$$scope={dirty:n,ctx:a}),t.$set(f)},i(a){s||(m(t.$$.fragment,a),s=!0)},o(a){d(t.$$.fragment,a),s=!1},d(a){a&&u(e),E(t)}}}function X(r){let e;return{c(){e=z("Next page")},l(t){e=C(t,"Next page")},m(t,s){_(t,e,s)},d(t){t&&u(e)}}}function Y(r){let e,t,s,a,n=Number(r[1].params.id)-1>0,f,p,P;e=new L({props:{data:r[0].mockData}});let i=n&&M(r),l=r[1].params.id<r[1].data.lastPage&&T(r);return{c(){D(e.$$.fragment),t=O(),s=$("div"),a=$("div"),i&&i.c(),f=O(),p=$("div"),l&&l.c(),this.h()},l(o){N(e.$$.fragment,o),t=S(o),s=v(o,"DIV",{class:!0});var c=b(s);a=v(c,"DIV",{class:!0});var g=b(a);i&&i.l(g),g.forEach(u),f=S(c),p=v(c,"DIV",{class:!0});var I=b(p);l&&l.l(I),I.forEach(u),c.forEach(u),this.h()},h(){h(a,"class","previous-button svelte-1o58dek"),h(p,"class","next-button svelte-1o58dek"),h(s,"class","page-navigation-buttons svelte-1o58dek")},m(o,c){w(e,o,c),_(o,t,c),_(o,s,c),j(s,a),i&&i.m(a,null),j(s,f),j(s,p),l&&l.m(p,null),P=!0},p(o,[c]){const g={};c&1&&(g.data=o[0].mockData),e.$set(g),c&2&&(n=Number(o[1].params.id)-1>0),n?i?(i.p(o,c),c&2&&m(i,1)):(i=M(o),i.c(),m(i,1),i.m(a,null)):i&&(H(),d(i,1,1,()=>{i=null}),B()),o[1].params.id<o[1].data.lastPage?l?(l.p(o,c),c&2&&m(l,1)):(l=T(o),l.c(),m(l,1),l.m(p,null)):l&&(H(),d(l,1,1,()=>{l=null}),B())},i(o){P||(m(e.$$.fragment,o),m(i),m(l),P=!0)},o(o){d(e.$$.fragment,o),d(i),d(l),P=!1},d(o){o&&(u(t),u(s)),E(e,o),i&&i.d(),l&&l.d()}}}function Z(r,e,t){let s;F(r,Q,n=>t(1,s=n));let{data:a}=e;return r.$$set=n=>{"data"in n&&t(0,a=n.data)},[a,s]}class re extends J{constructor(e){super(),K(this,e,Z,Y,A,{data:0})}}export{re as component,oe as universal};
