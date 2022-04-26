var _t=Object.defineProperty,ht=Object.defineProperties;var gt=Object.getOwnPropertyDescriptors;var Ae=Object.getOwnPropertySymbols;var bt=Object.prototype.hasOwnProperty,xt=Object.prototype.propertyIsEnumerable;var Pe=(t,e,n)=>e in t?_t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,je=(t,e)=>{for(var n in e||(e={}))bt.call(e,n)&&Pe(t,n,e[n]);if(Ae)for(var n of Ae(e))xt.call(e,n)&&Pe(t,n,e[n]);return t},Re=(t,e)=>ht(t,gt(e));const kt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};kt();function w(){}function Ue(t,e){for(const n in e)t[n]=e[n];return t}function Ve(t){return t()}function Fe(){return Object.create(null)}function Q(t){t.forEach(Ve)}function Se(t){return typeof t=="function"}function z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ye;function O(t,e){return ye||(ye=document.createElement("a")),ye.href=e,t===ye.href}function yt(t){return Object.keys(t).length===0}function Qe(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function wt(t){let e;return Qe(t,n=>e=n)(),e}function f(t,e){t.appendChild(e)}function D(t,e,n){t.insertBefore(e,n||null)}function E(t){t.parentNode.removeChild(t)}function et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function $(){return q(" ")}function ae(){return q("")}function P(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return Array.from(t.childNodes)}function Be(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ie(t,e,n,l){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function $t(t,e,n=!1){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,!1,e),l}let be;function he(t){be=t}function Le(){if(!be)throw new Error("Function called outside component initialization");return be}function Nt(t){Le().$$.after_update.push(t)}function Ct(t){Le().$$.on_destroy.push(t)}function Et(){const t=Le();return(e,n)=>{const l=t.$$.callbacks[e];if(l){const s=$t(e,n);l.slice().forEach(i=>{i.call(t,s)})}}}function Oe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(l=>l.call(this,e))}const _e=[],Ie=[],ve=[],ze=[],tt=Promise.resolve();let Ee=!1;function nt(){Ee||(Ee=!0,tt.then(st))}function lt(){return nt(),tt}function De(t){ve.push(t)}const Ce=new Set;let we=0;function st(){const t=be;do{for(;we<_e.length;){const e=_e[we];we++,he(e),Dt(e.$$)}for(he(null),_e.length=0,we=0;Ie.length;)Ie.pop()();for(let e=0;e<ve.length;e+=1){const n=ve[e];Ce.has(n)||(Ce.add(n),n())}ve.length=0}while(_e.length);for(;ze.length;)ze.pop()();Ee=!1,Ce.clear(),he(t)}function Dt(t){if(t.fragment!==null){t.update(),Q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(De)}}const $e=new Set;let ne;function xe(){ne={r:0,c:[],p:ne}}function ke(){ne.r||Q(ne.c),ne=ne.p}function T(t,e){t&&t.i&&($e.delete(t),t.i(e))}function M(t,e,n,l){if(t&&t.o){if($e.has(t))return;$e.add(t),ne.c.push(()=>{$e.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}}function rt(t,e){const n={},l={},s={$$scope:1};let i=t.length;for(;i--;){const o=t[i],r=e[i];if(r){for(const a in o)a in r||(l[a]=1);for(const a in r)s[a]||(n[a]=r[a],s[a]=1);t[i]=r}else for(const a in o)s[a]=1}for(const o in l)o in n||(n[o]=void 0);return n}function it(t){return typeof t=="object"&&t!==null?t:{}}function I(t){t&&t.c()}function R(t,e,n,l){const{fragment:s,on_mount:i,on_destroy:o,after_update:r}=t.$$;s&&s.m(e,n),l||De(()=>{const a=i.map(Ve).filter(Se);o?o.push(...a):Q(a),t.$$.on_mount=[]}),r.forEach(De)}function F(t,e){const n=t.$$;n.fragment!==null&&(Q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function St(t,e){t.$$.dirty[0]===-1&&(_e.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(t,e,n,l,s,i,o,r=[-1]){const a=be;he(t);const c=t.$$={fragment:null,ctx:null,props:i,update:w,not_equal:s,bound:Fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Fe(),dirty:r,skip_bound:!1,root:e.target||a.$$.root};o&&o(c.root);let m=!1;if(c.ctx=n?n(t,e.props||{},(p,b,..._)=>{const g=_.length?_[0]:b;return c.ctx&&s(c.ctx[p],c.ctx[p]=g)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](g),m&&St(t,p)),b}):[],c.update(),m=!0,Q(c.before_update),c.fragment=l?l(c.ctx):!1,e.target){if(e.hydrate){const p=vt(e.target);c.fragment&&c.fragment.l(p),p.forEach(E)}else c.fragment&&c.fragment.c();e.intro&&T(t.$$.fragment),R(t,e.target,e.anchor,e.customElement),st()}he(a)}class G{$destroy(){F(this,1),this.$destroy=w}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const re=[];function at(t,e){return{subscribe:ct(t,e).subscribe}}function ct(t,e=w){let n;const l=new Set;function s(r){if(z(t,r)&&(t=r,n)){const a=!re.length;for(const c of l)c[1](),re.push(c,t);if(a){for(let c=0;c<re.length;c+=2)re[c][0](re[c+1]);re.length=0}}}function i(r){s(r(t))}function o(r,a=w){const c=[r,a];return l.add(c),l.size===1&&(n=e(s)||w),r(t),()=>{l.delete(c),l.size===0&&(n(),n=null)}}return{set:s,update:i,subscribe:o}}function ot(t,e,n){const l=!Array.isArray(t),s=l?[t]:t,i=e.length<2;return at(n,o=>{let r=!1;const a=[];let c=0,m=w;const p=()=>{if(c)return;m();const _=e(l?a[0]:a,o);i?o(_):m=Se(_)?_:w},b=s.map((_,g)=>Qe(_,h=>{a[g]=h,c&=~(1<<g),r&&p()},()=>{c|=1<<g}));return r=!0,p(),function(){Q(b),m()}})}function Bt(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,l,s,i,o=[],r="",a=t.split("/");for(a[0]||a.shift();s=a.shift();)n=s[0],n==="*"?(o.push("wild"),r+="/(.*)"):n===":"?(l=s.indexOf("?",1),i=s.indexOf(".",1),o.push(s.substring(1,~l?l:~i?i:s.length)),r+=!!~l&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(r+=(~l?"?":"")+"\\"+s.substring(i))):r+="/"+s;return{keys:o,pattern:new RegExp("^"+r+(e?"(?=$|/)":"/?$"),"i")}}function Lt(t){let e,n,l;const s=[t[2]];var i=t[0];function o(r){let a={};for(let c=0;c<s.length;c+=1)a=Ue(a,s[c]);return{props:a}}return i&&(e=new i(o()),e.$on("routeEvent",t[7])),{c(){e&&I(e.$$.fragment),n=ae()},m(r,a){e&&R(e,r,a),D(r,n,a),l=!0},p(r,a){const c=a&4?rt(s,[it(r[2])]):{};if(i!==(i=r[0])){if(e){xe();const m=e;M(m.$$.fragment,1,0,()=>{F(m,1)}),ke()}i?(e=new i(o()),e.$on("routeEvent",r[7]),I(e.$$.fragment),T(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(r){l||(e&&T(e.$$.fragment,r),l=!0)},o(r){e&&M(e.$$.fragment,r),l=!1},d(r){r&&E(n),e&&F(e,r)}}}function Tt(t){let e,n,l;const s=[{params:t[1]},t[2]];var i=t[0];function o(r){let a={};for(let c=0;c<s.length;c+=1)a=Ue(a,s[c]);return{props:a}}return i&&(e=new i(o()),e.$on("routeEvent",t[6])),{c(){e&&I(e.$$.fragment),n=ae()},m(r,a){e&&R(e,r,a),D(r,n,a),l=!0},p(r,a){const c=a&6?rt(s,[a&2&&{params:r[1]},a&4&&it(r[2])]):{};if(i!==(i=r[0])){if(e){xe();const m=e;M(m.$$.fragment,1,0,()=>{F(m,1)}),ke()}i?(e=new i(o()),e.$on("routeEvent",r[6]),I(e.$$.fragment),T(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else i&&e.$set(c)},i(r){l||(e&&T(e.$$.fragment,r),l=!0)},o(r){e&&M(e.$$.fragment,r),l=!1},d(r){r&&E(n),e&&F(e,r)}}}function Mt(t){let e,n,l,s;const i=[Tt,Lt],o=[];function r(a,c){return a[1]?0:1}return e=r(t),n=o[e]=i[e](t),{c(){n.c(),l=ae()},m(a,c){o[e].m(a,c),D(a,l,c),s=!0},p(a,[c]){let m=e;e=r(a),e===m?o[e].p(a,c):(xe(),M(o[m],1,1,()=>{o[m]=null}),ke(),n=o[e],n?n.p(a,c):(n=o[e]=i[e](a),n.c()),T(n,1),n.m(l.parentNode,l))},i(a){s||(T(n),s=!0)},o(a){M(n),s=!1},d(a){o[e].d(a),a&&E(l)}}}function Ke(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let l="";return n>-1&&(l=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:l}}const Te=at(null,function(e){e(Ke());const n=()=>{e(Ke())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}),At=ot(Te,t=>t.location);ot(Te,t=>t.querystring);const qe=ct(void 0);async function J(t){if(!t||t.length<1||t.charAt(0)!="/"&&t.indexOf("#/")!==0)throw Error("Invalid parameter location");await lt(),history.replaceState(Re(je({},history.state),{__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY}),void 0,void 0),window.location.hash=(t.charAt(0)=="#"?"":"#")+t}function Pt(t,e,n){let{routes:l={}}=e,{prefix:s=""}=e,{restoreScrollState:i=!1}=e;class o{constructor(v,C){if(!C||typeof C!="function"&&(typeof C!="object"||C._sveltesparouter!==!0))throw Error("Invalid component object");if(!v||typeof v=="string"&&(v.length<1||v.charAt(0)!="/"&&v.charAt(0)!="*")||typeof v=="object"&&!(v instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:A,keys:S}=Bt(v);this.path=v,typeof C=="object"&&C._sveltesparouter===!0?(this.component=C.component,this.conditions=C.conditions||[],this.userData=C.userData,this.props=C.props||{}):(this.component=()=>Promise.resolve(C),this.conditions=[],this.props={}),this._pattern=A,this._keys=S}match(v){if(s){if(typeof s=="string")if(v.startsWith(s))v=v.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const L=v.match(s);if(L&&L[0])v=v.substr(L[0].length)||"/";else return null}}const C=this._pattern.exec(v);if(C===null)return null;if(this._keys===!1)return C;const A={};let S=0;for(;S<this._keys.length;){try{A[this._keys[S]]=decodeURIComponent(C[S+1]||"")||null}catch{A[this._keys[S]]=null}S++}return A}async checkConditions(v){for(let C=0;C<this.conditions.length;C++)if(!await this.conditions[C](v))return!1;return!0}}const r=[];l instanceof Map?l.forEach((x,v)=>{r.push(new o(v,x))}):Object.keys(l).forEach(x=>{r.push(new o(x,l[x]))});let a=null,c=null,m={};const p=Et();async function b(x,v){await lt(),p(x,v)}let _=null,g=null;i&&(g=x=>{x.state&&x.state.__svelte_spa_router_scrollY?_=x.state:_=null},window.addEventListener("popstate",g),Nt(()=>{_?window.scrollTo(_.__svelte_spa_router_scrollX,_.__svelte_spa_router_scrollY):window.scrollTo(0,0)}));let h=null,k=null;const y=Te.subscribe(async x=>{h=x;let v=0;for(;v<r.length;){const C=r[v].match(x.location);if(!C){v++;continue}const A={route:r[v].path,location:x.location,querystring:x.querystring,userData:r[v].userData,params:C&&typeof C=="object"&&Object.keys(C).length?C:null};if(!await r[v].checkConditions(A)){n(0,a=null),k=null,b("conditionsFailed",A);return}b("routeLoading",Object.assign({},A));const S=r[v].component;if(k!=S){S.loading?(n(0,a=S.loading),k=S,n(1,c=S.loadingParams),n(2,m={}),b("routeLoaded",Object.assign({},A,{component:a,name:a.name,params:c}))):(n(0,a=null),k=null);const L=await S();if(x!=h)return;n(0,a=L&&L.default||L),k=S}C&&typeof C=="object"&&Object.keys(C).length?n(1,c=C):n(1,c=null),n(2,m=r[v].props),b("routeLoaded",Object.assign({},A,{component:a,name:a.name,params:c})).then(()=>{qe.set(c)});return}n(0,a=null),k=null,qe.set(void 0)});Ct(()=>{y(),g&&window.removeEventListener("popstate",g)});function N(x){Oe.call(this,t,x)}function B(x){Oe.call(this,t,x)}return t.$$set=x=>{"routes"in x&&n(3,l=x.routes),"prefix"in x&&n(4,s=x.prefix),"restoreScrollState"in x&&n(5,i=x.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=i?"manual":"auto")},[a,c,m,l,s,i,N,B]}class jt extends G{constructor(e){super(),H(this,e,Pt,Mt,z,{routes:3,prefix:4,restoreScrollState:5})}}var Ne="/z_center_frontend/assets/contacts.94d14eb9.svg",ut="/z_center_frontend/assets/deals.a66389c6.svg",ft="/z_center_frontend/assets/settings.b6d5508b.svg",dt="/z_center_frontend/assets/dashboard.2f92f56b.svg",pt="/z_center_frontend/assets/toggle.291acc3e.svg";function Rt(t){let e;function n(i,o){return i[0]?Ft:Ot}let l=n(t),s=l(t);return{c(){s.c(),e=ae()},m(i,o){s.m(i,o),D(i,e,o)},p(i,o){l===(l=n(i))&&s?s.p(i,o):(s.d(1),s=l(i),s&&(s.c(),s.m(e.parentNode,e)))},d(i){s.d(i),i&&E(e)}}}function Ft(t){let e,n,l,s,i,o,r,a,c,m,p,b,_,g,h,k,y,N,B,x,v,C,A,S,L,Y,ce,ee,te,oe,j,K,ue,fe,X,de,Z,W,U,pe,V,le;return{c(){e=d("aside"),n=d("p"),n.textContent="ZCM",l=$(),s=d("section"),i=d("div"),o=d("img"),a=$(),c=d("section"),m=d("div"),p=d("img"),_=$(),g=d("p"),h=q("\xA0"),k=$(),y=d("div"),N=d("img"),x=$(),v=d("p"),C=q("\xA0"),A=$(),S=d("div"),L=d("img"),ce=$(),ee=d("p"),te=q("\xA0"),oe=$(),j=d("div"),K=d("img"),fe=$(),X=d("p"),de=q("\xA0"),Z=$(),W=d("section"),U=d("img"),u(n,"class","text-lg font-semibold text-left text-accentBlue"),O(o.src,r=Ne)||u(o,"src",r),u(o,"class","w-[20px] h-[20px]"),u(o,"alt","Manager Icon"),u(i,"class","w-[46px] h-[46px] rounded-[23px] bg-gray p-[13px]"),u(s,"class","mt-[42px] flex "),u(s,"id","teacherInfoToggled"),O(p.src,b=dt)||u(p,"src",b),u(p,"alt","dashboard"),u(p,"class",`w-[20px] h-[20px] ${t[1]==="/"?"color-accentBlue":"color-gray"}`),u(g,"class",`ml-[14px] font-medium text-left ${t[1]==="/"?"text-accentBlue":"text-gray"}`),u(m,"class","flex"),O(N.src,B=Ne)||u(N,"src",B),u(N,"alt","students"),u(N,"class","w-[20px] h-[20px]"),u(v,"class",`ml-[14px] font-medium text-left ${t[1]==="/"?"text-accentBlue":"text-gray"}`),u(y,"class","flex mt-[20px]"),O(L.src,Y=ut)||u(L,"src",Y),u(L,"alt","records"),u(L,"class","w-[20px] h-[20px]"),u(ee,"class",`ml-[14px] font-medium text-left ${t[1]==="/"?"text-accentBlue":"text-gray"}`),u(S,"class","flex mt-[20px]"),O(K.src,ue=ft)||u(K,"src",ue),u(K,"alt","settings"),u(K,"class","w-[20px] h-[20px]"),u(X,"class",`ml-[14px] font-medium text-left ${t[1]==="/"?"text-accentBlue":"text-gray"}`),u(j,"class","flex mt-[20px]"),u(c,"class","mt-[40px] ml-[13px]"),O(U.src,pe=pt)||u(U,"src",pe),u(U,"alt","toggle"),u(U,"class","w-[14px] h-[14px]"),u(W,"class","mt-[353px] flex ml-[13px]"),u(e,"class","w-[68px] h-full bg-white px-[11px] pt-[17px] pb-[22px]"),ie(e,"box-shadow","6px 0px 18px rgba(0, 0, 0, 0.06)")},m(se,me){D(se,e,me),f(e,n),f(e,l),f(e,s),f(s,i),f(i,o),f(e,a),f(e,c),f(c,m),f(m,p),f(m,_),f(m,g),f(g,h),f(c,k),f(c,y),f(y,N),f(y,x),f(y,v),f(v,C),f(c,A),f(c,S),f(S,L),f(S,ce),f(S,ee),f(ee,te),f(c,oe),f(c,j),f(j,K),f(j,fe),f(j,X),f(X,de),f(e,Z),f(e,W),f(W,U),V||(le=[P(n,"click",t[9]),P(m,"click",t[10]),P(y,"click",t[11]),P(S,"click",t[12]),P(j,"click",t[13]),P(W,"click",t[14])],V=!0)},p:w,d(se){se&&E(e),V=!1,Q(le)}}}function Ot(t){let e,n,l,s,i,o,r,a,c,m,p,b,_,g,h,k,y,N,B,x,v,C,A,S,L,Y,ce,ee,te,oe,j,K,ue,fe,X,de,Z,W,U,pe,V,le,se;return{c(){e=d("aside"),n=d("p"),n.textContent="ZwonCenterManager",l=$(),s=d("section"),i=d("div"),o=d("img"),a=$(),c=d("p"),c.innerHTML=`<span class="w-full text-sm font-medium text-left text-black">TK</span> 
                    <span class="w-full text-[11px] font-medium text-left text-gray">example@example.com</span>`,m=$(),p=d("section"),b=d("div"),_=d("img"),h=$(),k=d("p"),y=q("Dashboard"),N=$(),B=d("div"),x=d("img"),C=$(),A=d("p"),A.textContent="Students",S=$(),L=d("div"),Y=d("img"),ee=$(),te=d("p"),te.textContent="Records",oe=$(),j=d("div"),K=d("img"),fe=$(),X=d("p"),X.textContent="Settings",de=$(),Z=d("section"),W=d("img"),pe=$(),V=d("p"),V.textContent="Toggle Sidebar",u(n,"class","text-lg font-semibold text-left text-accentBlue"),O(o.src,r=Ne)||u(o,"src",r),u(o,"class","w-[20px] h-[20px]"),u(o,"alt","ManagerIcon"),u(i,"class","w-[46px] h-[46px] rounded-[23px] bg-gray p-[13px] mr-[16px]"),u(s,"class","mt-[42px] flex "),u(s,"id","teacherInfo"),O(_.src,g=dt)||u(_,"src",g),u(_,"alt","dashboard"),u(_,"class",`w-[20px] h-[20px] ${t[1]==="/"?"color-accentBlue":"color-gray"}`),u(k,"class",`ml-[14px] font-medium text-left ${t[1]==="/"?"text-accentBlue":"text-gray"}`),u(b,"class","flex"),O(x.src,v=Ne)||u(x,"src",v),u(x,"alt","students"),u(x,"class","w-[20px] h-[20px]"),u(A,"class","ml-[14px] font-medium text-left text-gray"),u(B,"class","flex mt-[20px]"),O(Y.src,ce=ut)||u(Y,"src",ce),u(Y,"alt","records"),u(Y,"class","w-[20px] h-[20px]"),u(te,"class","ml-[14px] font-medium text-left text-gray"),u(L,"class","flex mt-[20px]"),O(K.src,ue=ft)||u(K,"src",ue),u(K,"alt","settings"),u(K,"class","w-[20px] h-[20px]"),u(X,"class","ml-[14px] font-medium text-left text-gray"),u(j,"class","flex mt-[20px]"),u(p,"class","mt-[40px]"),O(W.src,U=pt)||u(W,"src",U),u(W,"alt","toggle"),u(W,"class","w-[14px] h-[14px]"),u(V,"class","ml-[14px] text-[11px] font-medium text-left text-gray"),u(Z,"class","mt-[351px] flex"),u(e,"class","w-[256px] h-full bg-white px-[24px] pt-[17px] pb-[22px]"),ie(e,"box-shadow","6px 0px 18px rgba(0, 0, 0, 0.06)")},m(me,mt){D(me,e,mt),f(e,n),f(e,l),f(e,s),f(s,i),f(i,o),f(s,a),f(s,c),f(e,m),f(e,p),f(p,b),f(b,_),f(b,h),f(b,k),f(k,y),f(p,N),f(p,B),f(B,x),f(B,C),f(B,A),f(p,S),f(p,L),f(L,Y),f(L,ee),f(L,te),f(p,oe),f(p,j),f(j,K),f(j,fe),f(j,X),f(e,de),f(e,Z),f(Z,W),f(Z,pe),f(Z,V),le||(se=[P(n,"click",t[3]),P(b,"click",t[4]),P(B,"click",t[5]),P(L,"click",t[6]),P(j,"click",t[7]),P(Z,"click",t[8])],le=!0)},p:w,d(me){me&&E(e),le=!1,Q(se)}}}function It(t){let e=!t[2](),n,l=e&&Rt(t);return{c(){l&&l.c(),n=ae()},m(s,i){l&&l.m(s,i),D(s,n,i)},p(s,[i]){e&&l.p(s,i)},i:w,o:w,d(s){l&&l.d(s),s&&E(n)}}}function zt(t,e,n){let l=wt(At),s=!1;const i=["/login","/assign"];return[s,l,()=>i.includes(l),()=>{J("/")},()=>{J("/")},()=>{J("/student/list")},()=>{J("/record/list")},()=>{J("/settings")},()=>{n(0,s=!s)},()=>{J("/")},()=>{J("/")},()=>{J("/student/list")},()=>{J("/record/list")},()=>{J("/settings")},()=>{n(0,s=!s)}]}class Kt extends G{constructor(e){super(),H(this,e,zt,It,z,{})}}var qt="/z_center_frontend/assets/ZwonCenter.ca5f278f.svg",Ht="/z_center_frontend/assets/Manager.f0abe5e2.svg";function Gt(t){let e,n,l,s,i,o;return{c(){e=d("section"),n=d("img"),s=$(),i=d("img"),O(n.src,l=qt)||u(n,"src",l),u(n,"alt","Zwon center"),u(i,"class","mt-5"),O(i.src,o=Ht)||u(i,"src",o),u(i,"alt","Manager"),u(e,"class","flex flex-col justify-center items-center h-full py-auto bg-gradient-to-r from-cyan-500 to-blue-500")},m(r,a){D(r,e,a),f(e,n),f(e,s),f(e,i)},p:w,i:w,o:w,d(r){r&&E(e)}}}class Wt extends G{constructor(e){super(),H(this,e,null,Gt,z,{})}}function Zt(t){let e,n,l,s,i;return{c(){e=d("button"),n=q(t[2]),u(e,"class",l=`${t[4][t[0]]} ${t[3]}`)},m(o,r){D(o,e,r),f(e,n),s||(i=P(e,"click",function(){Se(t[1])&&t[1].apply(this,arguments)}),s=!0)},p(o,[r]){t=o,r&4&&Be(n,t[2]),r&9&&l!==(l=`${t[4][t[0]]} ${t[3]}`)&&u(e,"class",l)},i:w,o:w,d(o){o&&E(e),s=!1,i()}}}function Jt(t,e,n){let{buttonType:l="accent"}=e,{onClick:s=()=>{}}=e,{text:i=""}=e,{className:o=""}=e;const r={accent:"w-40 h-[42px] rounded bg-accentBlue leading-[42px] text-[13px] font-semibold text-center text-white shadow-[0px_4px_10px_rgba(16,156,241,0.24)] hover:bg-[#34AFF9] hover:shadow-[0px_8px_16px_rgba(52,175,249,0.2)] focus:bg-[#098EDF] focus:shadow-[0px_2px_6px_rgba(9,142,223,0.3)] ",secondary:"w-40 h-[42px] rounded border border-accentBlue leading-[42px] text-[13px] font-semibold text-center text-accentBluehover:border-[#34AFF9] hover:text-[#34AFF9] focus:border-[#098EDF] focus:text-[#098EDF] ",tertiary:"w-40 h-[42px] border-transparent leading-[42px] text-[13px] font-semibold text-center text-accentBlue hover:text-[#34AFF9] focus:text-[#098EDF]"};return t.$$set=a=>{"buttonType"in a&&n(0,l=a.buttonType),"onClick"in a&&n(1,s=a.onClick),"text"in a&&n(2,i=a.text),"className"in a&&n(3,o=a.className)},[l,s,i,o,r]}class Me extends G{constructor(e){super(),H(this,e,Jt,Zt,z,{buttonType:0,onClick:1,text:2,className:3})}}function He(t){let e,n;return{c(){e=d("p"),n=q(t[0]),u(e,"class","text-[11px] font-medium text-left text-accentBlue")},m(l,s){D(l,e,s),f(e,n)},p(l,s){s&1&&Be(n,l[0])},d(l){l&&E(e)}}}function Yt(t){let e,n,l,s,i,o=t[0]!==""&&He(t);return{c(){e=d("div"),o&&o.c(),n=$(),l=d("input"),u(l,"type",t[2]),l.value=t[3],u(l,"placeholder",t[4]),u(l,"class",s=`border-b border-textHelpGray ${t[0]!==""?"mt-[4px]":""} ${t[1]}`),u(e,"class",i=`flex flex-col ${t[5]}`)},m(r,a){D(r,e,a),o&&o.m(e,null),f(e,n),f(e,l)},p(r,[a]){r[0]!==""?o?o.p(r,a):(o=He(r),o.c(),o.m(e,n)):o&&(o.d(1),o=null),a&4&&u(l,"type",r[2]),a&8&&l.value!==r[3]&&(l.value=r[3]),a&16&&u(l,"placeholder",r[4]),a&3&&s!==(s=`border-b border-textHelpGray ${r[0]!==""?"mt-[4px]":""} ${r[1]}`)&&u(l,"class",s),a&32&&i!==(i=`flex flex-col ${r[5]}`)&&u(e,"class",i)},i:w,o:w,d(r){r&&E(e),o&&o.d()}}}function Xt(t,e,n){let{title:l=""}=e,{className:s=""}=e,{setType:i="text"}=e,{value:o=void 0}=e,{placeholder:r=""}=e,{divClassName:a=""}=e;return t.$$set=c=>{"title"in c&&n(0,l=c.title),"className"in c&&n(1,s=c.className),"setType"in c&&n(2,i=c.setType),"value"in c&&n(3,o=c.value),"placeholder"in c&&n(4,r=c.placeholder),"divClassName"in c&&n(5,a=c.divClassName)},[l,s,i,o,r,a]}class ge extends G{constructor(e){super(),H(this,e,Xt,Yt,z,{title:0,className:1,setType:2,value:3,placeholder:4,divClassName:5})}}function Ge(t,e,n){const l=t.slice();return l[9]=e[n],l}function We(t,e,n){const l=t.slice();return l[12]=e[n],l[14]=n,l}function Ze(t){let e,n,l,s,i,o,r,a,c,m,p,b,_,g=t[4],h=[];for(let k=0;k<g.length;k+=1)h[k]=Je(We(t,g,k));return{c(){e=d("table"),n=d("thead"),n.innerHTML=`<tr class=""><th class="opacity-50 text-[18px] font-medium text-left text-darkBlue text-center px-[24px] py-[14px]">#</th> 
                <th class="opacity-50 text-[18px] font-medium text-left text-darkBlue text-center px-[24px] py-[14px]">Name</th> 
                
                
                
                
                
                
                
                
                
                <th class="opacity-50 text-[18px] font-medium text-left text-darkBlue text-center px-[24px] py-[14px]">inCharge</th></tr>`,l=$(),s=d("tbody");for(let k=0;k<h.length;k+=1)h[k].c();i=$(),o=d("tr"),r=d("td"),a=d("span"),a.textContent="<",c=$(),m=d("span"),m.textContent="1 2 3 4 ... 10",p=$(),b=d("span"),b.textContent=">",u(n,"class","h-[48px] border-b-[0.5px] border-gray "),u(a,"class","text-accentBlue"),u(m,"class","mx-[50px]"),u(b,"class","text-accentBlue"),u(r,"class","px-[24px] py-[14px] text-center"),u(r,"colspan",_=6),u(e,"class","mt-[7%] ml-[2%] bg-white w-[20%] rounded-tl rounded-bl rounded-br h-[80%]"),ie(e,"filter","drop-shadow(0px 6px 18px rgba(0,0,0,0.06))")},m(k,y){D(k,e,y),f(e,n),f(e,l),f(e,s);for(let N=0;N<h.length;N+=1)h[N].m(s,null);f(s,i),f(s,o),f(o,r),f(r,a),f(r,c),f(r,m),f(r,p),f(r,b)},p(k,y){if(y&19){g=k[4];let N;for(N=0;N<g.length;N+=1){const B=We(k,g,N);h[N]?h[N].p(B,y):(h[N]=Je(B),h[N].c(),h[N].m(s,i))}for(;N<h.length;N+=1)h[N].d(1);h.length=g.length}},d(k){k&&E(e),et(h,k)}}}function Ut(t){let e,n,l=t[14]+1+"",s,i,o,r=t[12].name+"",a,c,m,p,b,_;function g(){return t[6](t[14])}return{c(){e=d("tr"),n=d("td"),s=q(l),i=$(),o=d("td"),a=q(r),c=$(),m=d("td"),m.textContent="TK",u(n,"class","text-[15px] font-medium text-left text-tableBlack text-center px-[24px] py-[14px]"),u(o,"class","text-[15px] font-medium text-left text-tableBlack text-center px-[24px] py-[14px]"),u(m,"class","text-[13px] text-left text-tableGray text-center px-[24px] py-[14px]"),u(e,"class",p=`border-y-[0.5px] border-gray ${t[1]===t[14]?"bg-accentBlue bg-opacity-40":"hover:bg-accentBlue hover:bg-opacity-20"}`)},m(h,k){D(h,e,k),f(e,n),f(n,s),f(e,i),f(e,o),f(o,a),f(e,c),f(e,m),b||(_=P(e,"click",g),b=!0)},p(h,k){t=h,k&2&&p!==(p=`border-y-[0.5px] border-gray ${t[1]===t[14]?"bg-accentBlue bg-opacity-40":"hover:bg-accentBlue hover:bg-opacity-20"}`)&&u(e,"class",p)},d(h){h&&E(e),b=!1,_()}}}function Je(t){let e,n=t[14]<10&&Ut(t);return{c(){n&&n.c(),e=ae()},m(l,s){n&&n.m(l,s),D(l,e,s)},p(l,s){l[14]<10&&n.p(l,s)},d(l){n&&n.d(l),l&&E(e)}}}function Ye(t){let e,n,l,s,i,o,r,a,c,m,p,b=t[5],_=[];for(let y=0;y<b.length;y+=1)_[y]=Xe(Ge(t,b,y));const g=[en,Qt,Vt],h=[];function k(y,N){return y[2]==="tabProfile"?0:y[2]==="tabWrite"?1:y[2]==="tabManageGoal"?2:-1}return~(a=k(t))&&(c=h[a]=g[a](t)),{c(){e=d("section"),n=d("div"),l=d("ul");for(let y=0;y<_.length;y+=1)_[y].c();s=$(),i=d("li"),i.innerHTML='<p class="inline-block p-4 text-gray rounded-t-lg cursor-not-allowed ">Disabled</p>',o=$(),r=d("section"),c&&c.c(),u(l,"class","flex flex-wrap -mb-px"),u(n,"id","tabs"),u(n,"class","text-sm font-medium text-black text-center border-b border-black"),u(r,"class","rounded-[4px] bg-white mt-[25px] p-[22px]"),ie(r,"box-shadow","0px 2px 10px rgba(0, 0, 0, 0.08)"),u(e,"class",m=`mt-[7%] bg-white rounded w-[60%] h-[80%] p-[20px] ${t[3]?"ml-[2%]":"ml-[5%]"}`),ie(e,"filter","drop-shadow(0px 6px 18px rgba(0,0,0,0.06))")},m(y,N){D(y,e,N),f(e,n),f(n,l);for(let B=0;B<_.length;B+=1)_[B].m(l,null);f(l,s),f(l,i),f(e,o),f(e,r),~a&&h[a].m(r,null),p=!0},p(y,N){if(N&36){b=y[5];let x;for(x=0;x<b.length;x+=1){const v=Ge(y,b,x);_[x]?_[x].p(v,N):(_[x]=Xe(v),_[x].c(),_[x].m(l,s))}for(;x<_.length;x+=1)_[x].d(1);_.length=b.length}let B=a;a=k(y),a===B?~a&&h[a].p(y,N):(c&&(xe(),M(h[B],1,1,()=>{h[B]=null}),ke()),~a?(c=h[a],c?c.p(y,N):(c=h[a]=g[a](y),c.c()),T(c,1),c.m(r,null)):c=null),(!p||N&8&&m!==(m=`mt-[7%] bg-white rounded w-[60%] h-[80%] p-[20px] ${y[3]?"ml-[2%]":"ml-[5%]"}`))&&u(e,"class",m)},i(y){p||(T(c),p=!0)},o(y){M(c),p=!1},d(y){y&&E(e),et(_,y),~a&&h[a].d()}}}function Xe(t){let e,n,l=t[9].name+"",s,i,o,r,a,c;function m(){return t[8](t[9])}return{c(){e=d("li"),n=d("p"),s=q(l),r=$(),u(n,"id",i=t[9].id),u(n,"class",o=`${t[2]===t[9].id?"text-accentBlue border-accentBlue":"hover:text-yellow hover:border-yellow border-transparent"} inline-block p-4 rounded-t-lg border-b-2 `),u(e,"class","mr-2")},m(p,b){D(p,e,b),f(e,n),f(n,s),f(e,r),a||(c=P(n,"click",m),a=!0)},p(p,b){t=p,b&4&&o!==(o=`${t[2]===t[9].id?"text-accentBlue border-accentBlue":"hover:text-yellow hover:border-yellow border-transparent"} inline-block p-4 rounded-t-lg border-b-2 `)&&u(n,"class",o)},d(p){p&&E(e),a=!1,c()}}}function Vt(t){return{c:w,m:w,p:w,i:w,o:w,d:w}}function Qt(t){let e,n,l,s,i,o,r,a;return l=new ge({props:{setType:"text",value:"TK",title:"\uC791\uC131\uB9E4\uB2C8\uC800",className:"w-[40%]",placeholder:"\uC791\uC131\uB9E4\uB2C8\uC800\uC774\uB984"}}),i=new ge({props:{setType:"date",value:"2022-04-24",title:"\uC791\uC131\uC77C\uC790",className:"w-[40%]",placeholder:"\uC774\uB984",divClassName:"mt-[16px]"}}),r=new Me({props:{type:"accent",text:"\uC218\uC815\uD558\uAE30",className:"absolute left-[80%]"}}),{c(){e=d("div"),n=d("form"),I(l.$$.fragment),s=$(),I(i.$$.fragment),o=$(),I(r.$$.fragment),u(n,"class","w-[70%]"),u(e,"class","flex relative")},m(c,m){D(c,e,m),f(e,n),R(l,n,null),f(n,s),R(i,n,null),f(e,o),R(r,e,null),a=!0},p:w,i(c){a||(T(l.$$.fragment,c),T(i.$$.fragment,c),T(r.$$.fragment,c),a=!0)},o(c){M(l.$$.fragment,c),M(i.$$.fragment,c),M(r.$$.fragment,c),a=!1},d(c){c&&E(e),F(l),F(i),F(r)}}}function en(t){let e,n,l,s,i,o,r,a,c,m;return l=new ge({props:{setType:"text",value:t[4][t[1]].name,title:"\uC774\uB984",className:"w-[40%]",placeholder:"\uC774\uB984"}}),i=new ge({props:{setType:"text",value:t[4][t[1]].phoneNumber,title:"\uC804\uD654\uBC88\uD638",className:"w-[40%]",placeholder:"\uC804\uD654\uBC88\uD638",divClassName:"mt-[16px]"}}),r=new ge({props:{setType:"date",value:"2000-01-01",title:"\uC0DD\uB144\uC6D4\uC77C",className:"w-[40%]",placeholder:"\uC774\uB984",divClassName:"mt-[16px]"}}),c=new Me({props:{type:"accent",text:"\uC218\uC815\uD558\uAE30",className:"absolute left-[80%]"}}),{c(){e=d("div"),n=d("form"),I(l.$$.fragment),s=$(),I(i.$$.fragment),o=$(),I(r.$$.fragment),a=$(),I(c.$$.fragment),u(n,"class","w-[70%]"),u(e,"class","flex relative")},m(p,b){D(p,e,b),f(e,n),R(l,n,null),f(n,s),R(i,n,null),f(n,o),R(r,n,null),f(e,a),R(c,e,null),m=!0},p(p,b){const _={};b&2&&(_.value=p[4][p[1]].name),l.$set(_);const g={};b&2&&(g.value=p[4][p[1]].phoneNumber),i.$set(g)},i(p){m||(T(l.$$.fragment,p),T(i.$$.fragment,p),T(r.$$.fragment,p),T(c.$$.fragment,p),m=!0)},o(p){M(l.$$.fragment,p),M(i.$$.fragment,p),M(r.$$.fragment,p),M(c.$$.fragment,p),m=!1},d(p){p&&E(e),F(l),F(i),F(r),F(c)}}}function tn(t){let e,n,l,s,i,o=t[3]?">":"<",r,a,c,m,p,b;e=new Me({props:{type:"accent",text:"\uD559\uC0DD \uCD94\uAC00",className:"absolute top-[5%] left-[75%]"}});let _=!t[3]&&Ze(t),g=t[0]&&Ye(t);return{c(){I(e.$$.fragment),n=$(),l=d("section"),_&&_.c(),s=$(),i=d("div"),r=q(o),c=$(),g&&g.c(),u(i,"class",a=`mt-[7%] p-[15px] bg-white h-[55px] rounded-tr rounded-br text-bold ${t[3]?"ml-[2%]":""}`),ie(i,"filter","drop-shadow(0px 6px 18px rgba(0,0,0,0.06))"),u(l,"class","flex")},m(h,k){R(e,h,k),D(h,n,k),D(h,l,k),_&&_.m(l,null),f(l,s),f(l,i),f(i,r),f(l,c),g&&g.m(l,null),m=!0,p||(b=P(i,"click",t[7]),p=!0)},p(h,[k]){h[3]?_&&(_.d(1),_=null):_?_.p(h,k):(_=Ze(h),_.c(),_.m(l,s)),(!m||k&8)&&o!==(o=h[3]?">":"<")&&Be(r,o),(!m||k&8&&a!==(a=`mt-[7%] p-[15px] bg-white h-[55px] rounded-tr rounded-br text-bold ${h[3]?"ml-[2%]":""}`))&&u(i,"class",a),h[0]?g?(g.p(h,k),k&1&&T(g,1)):(g=Ye(h),g.c(),T(g,1),g.m(l,null)):g&&(xe(),M(g,1,1,()=>{g=null}),ke())},i(h){m||(T(e.$$.fragment,h),T(g),m=!0)},o(h){M(e.$$.fragment,h),M(g),m=!1},d(h){F(e,h),h&&E(n),h&&E(l),_&&_.d(),g&&g.d(),p=!1,b()}}}function nn(t,e,n){let l=[{pk:1,name:"Conrado Emeny",phoneNumber:"8893553049",address:"Kingston",addressDetail:"2 Muir Alley"},{pk:2,name:"Nicolina Persicke",phoneNumber:"3086708979",address:"Si Racha",addressDetail:"45 Hallows Crossing"},{pk:3,name:"Dorrie Basillon",phoneNumber:"2291071404",address:"Tangkil",addressDetail:"76 Lotheville Court"},{pk:4,name:"Web Lage",phoneNumber:"7398733798",address:"Kit\u0101f",addressDetail:"613 Mayfield Parkway"},{pk:5,name:"Collie Portinari",phoneNumber:"7756711282",address:"Plandi",addressDetail:"7210 Debs Alley"},{pk:6,name:"Keriann Stuehmeier",phoneNumber:"7166364008",address:"Buffalo",addressDetail:"24 Memorial Road"},{pk:7,name:"Carlee Clampton",phoneNumber:"9924109441",address:"Cuenca",addressDetail:"09678 Redwing Plaza"},{pk:8,name:"Esteban Magnay",phoneNumber:"5848368019",address:"Shimabara",addressDetail:"4 Crescent Oaks Way"},{pk:9,name:"Lowe McGown",phoneNumber:"7545994893",address:"\xC9vreux",addressDetail:"88 Milwaukee Place"},{pk:10,name:"Emmanuel Balleine",phoneNumber:"8692382773",address:"Baoquan",addressDetail:"1 Mayer Plaza"},{pk:11,name:"April Hallmark",phoneNumber:"7187861441",address:"Pingshanhu",addressDetail:"15696 Sunnyside Way"},{pk:12,name:"Mora Cockaday",phoneNumber:"6284229005",address:"Kedungcangkring",addressDetail:"045 Kings Center"},{pk:13,name:"Matthew Ajean",phoneNumber:"9151379454",address:"Villaviciosa",addressDetail:"72 Myrtle Terrace"},{pk:14,name:"Rodney Astell",phoneNumber:"6305388326",address:"Naperville",addressDetail:"3 Springview Point"},{pk:15,name:"Dud Riach",phoneNumber:"6593626350",address:"Kuttu",addressDetail:"221 Dorton Trail"},{pk:16,name:"Glenda Leijs",phoneNumber:"8515669782",address:"Tamnag",addressDetail:"4271 East Hill"},{pk:17,name:"Morgan Hemmingway",phoneNumber:"2925189653",address:"J\xF6nk\xF6ping",addressDetail:"925 Birchwood Avenue"},{pk:18,name:"Pace Tussaine",phoneNumber:"2659386844",address:"Markaz Bil\u0101d a\u0163 \u0162a\u2018\u0101m",addressDetail:"9 Dryden Street"},{pk:19,name:"Adriano Swains",phoneNumber:"8231946433",address:"Anyar",addressDetail:"82126 John Wall Lane"},{pk:20,name:"Larisa Gurrado",phoneNumber:"3042191639",address:"Carcavelos",addressDetail:"064 Sundown Junction"},{pk:21,name:"Skipp Lindenfeld",phoneNumber:"7962502984",address:"Lanyang",addressDetail:"91199 Pawling Alley"},{pk:22,name:"Cloris Eskrigg",phoneNumber:"6876595210",address:"Th\u1ECB Tr\u1EA5n T\xE0 L\xF9ng",addressDetail:"43185 Mitchell Alley"},{pk:23,name:"Judi Flory",phoneNumber:"9169081036",address:"Kogon",addressDetail:"0 Marcy Crossing"},{pk:24,name:"Slade Kenealy",phoneNumber:"2075583590",address:"Francisco Villa",addressDetail:"79255 Merchant Parkway"},{pk:25,name:"Shea Livett",phoneNumber:"1579928656",address:"Itako",addressDetail:"9 Independence Lane"}],s=!1,i=-1,o="tabProfile",r=[{id:"tabProfile",name:"\uAE30\uBCF8\uC815\uBCF4"},{id:"tabWrite",name:"\uC791\uC131\uC815\uBCF4"},{id:"tabManageGoal",name:"\uB9E4\uB2C8\uC9D5 \uBAA9\uD45C"},{id:"tabPromise",name:"\uC57D\uC18D \uAD6C\uC870"},{id:"tabPinMoney",name:"\uC6A9\uB3C8 \uAD6C\uC870"},{id:"tabManageWay",name:"\uB9E4\uB2C8\uC9D5 \uBC29\uBC95"},{id:"tabLivingInfo",name:"\uC0DD\uD65C\uC815\uBCF4"},{id:"tabCubeBook",name:"\uD050\uBE0C\uCC45"},{id:"tabBook",name:"\uAD50\uC7AC \uC815\uBCF4"},{id:"tabProgram",name:"\uD504\uB85C\uADF8\uB7A8 \uC885\uB958"}],a=!1;return[s,i,o,a,l,r,b=>{n(0,s=!0),n(1,i=b)},()=>{n(3,a=!a)},b=>{n(2,o=b.id)}]}class ln extends G{constructor(e){super(),H(this,e,nn,tn,z,{})}}function sn(t){let e;return{c(){e=d("section"),e.textContent="StudentReg"},m(n,l){D(n,e,l)},p:w,i:w,o:w,d(n){n&&E(e)}}}class rn extends G{constructor(e){super(),H(this,e,null,sn,z,{})}}function an(t){let e;return{c(){e=d("section"),e.textContent="RecordList"},m(n,l){D(n,e,l)},p:w,i:w,o:w,d(n){n&&E(e)}}}class cn extends G{constructor(e){super(),H(this,e,null,an,z,{})}}function on(t){let e;return{c(){e=d("section"),e.textContent="RecordReg"},m(n,l){D(n,e,l)},p:w,i:w,o:w,d(n){n&&E(e)}}}class un extends G{constructor(e){super(),H(this,e,null,on,z,{})}}function fn(t){let e;return{c(){e=d("section"),e.textContent="Login"},m(n,l){D(n,e,l)},p:w,i:w,o:w,d(n){n&&E(e)}}}class dn extends G{constructor(e){super(),H(this,e,null,fn,z,{})}}function pn(t){let e;return{c(){e=d("section"),e.textContent="Assign"},m(n,l){D(n,e,l)},p:w,i:w,o:w,d(n){n&&E(e)}}}class mn extends G{constructor(e){super(),H(this,e,null,pn,z,{})}}function _n(t){let e;return{c(){e=d("section"),e.textContent="Settings"},m(n,l){D(n,e,l)},p:w,i:w,o:w,d(n){n&&E(e)}}}class hn extends G{constructor(e){super(),H(this,e,null,_n,z,{})}}function gn(t){let e,n,l,s,i,o;return n=new Kt({}),i=new jt({props:{routes:{"/":Wt,"/student/list":ln,"/student/reg":rn,"/record/list":cn,"/record/reg":un,"/login":dn,"/assign":mn,"/settings":hn},restoreScrollState:!0}}),{c(){e=d("main"),I(n.$$.fragment),l=$(),s=d("section"),I(i.$$.fragment),u(s,"class","bg-[#F5F6F8] w-full h-full"),u(e,"class","flex h-full")},m(r,a){D(r,e,a),R(n,e,null),f(e,l),f(e,s),R(i,s,null),o=!0},p:w,i(r){o||(T(n.$$.fragment,r),T(i.$$.fragment,r),o=!0)},o(r){M(n.$$.fragment,r),M(i.$$.fragment,r),o=!1},d(r){r&&E(e),F(n),F(i)}}}class bn extends G{constructor(e){super(),H(this,e,null,gn,z,{})}}new bn({target:document.body});
