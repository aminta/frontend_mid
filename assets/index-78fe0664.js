(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ca(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Sa(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=de(r)?yl(r):Sa(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(de(e))return e;if(ie(e))return e}}const gl=/;(?![^(]*\))/g,vl=/:([^]+)/,bl=/\/\*.*?\*\//gs;function yl(e){const t={};return e.replace(bl,"").split(gl).forEach(n=>{if(n){const r=n.split(vl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function qt(e){let t="";if(de(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const r=qt(e[n]);r&&(t+=r+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const _l="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xl=Ca(_l);function Oo(e){return!!e||e===""}const Je=e=>de(e)?e:e==null?"":D(e)||ie(e)&&(e.toString===No||!U(e.toString))?JSON.stringify(e,To,2):String(e),To=(e,t)=>t&&t.__v_isRef?To(e,t.value):Wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Po(t)?{[`Set(${t.size})`]:[...t.values()]}:ie(t)&&!D(t)&&!Lo(t)?String(t):t,ne={},Yt=[],De=()=>{},wl=()=>!1,kl=/^on[^a-z]/,hr=e=>kl.test(e),Ea=e=>e.startsWith("onUpdate:"),_e=Object.assign,Oa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Al=Object.prototype.hasOwnProperty,V=(e,t)=>Al.call(e,t),D=Array.isArray,Wt=e=>gr(e)==="[object Map]",Po=e=>gr(e)==="[object Set]",U=e=>typeof e=="function",de=e=>typeof e=="string",Ta=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",Io=e=>ie(e)&&U(e.then)&&U(e.catch),No=Object.prototype.toString,gr=e=>No.call(e),Cl=e=>gr(e).slice(8,-1),Lo=e=>gr(e)==="[object Object]",Pa=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qn=Ca(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Sl=/-(\w)/g,Ve=vr(e=>e.replace(Sl,(t,n)=>n?n.toUpperCase():"")),El=/\B([A-Z])/g,tn=vr(e=>e.replace(El,"-$1").toLowerCase()),br=vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),jr=vr(e=>e?`on${br(e)}`:""),_n=(e,t)=>!Object.is(e,t),Gn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},rr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Xr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ol=e=>{const t=de(e)?Number(e):NaN;return isNaN(t)?e:t};let pi;const Tl=()=>pi||(pi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Oe;class Mo{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Oe,!t&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Fo(e){return new Mo(e)}function Pl(e,t=Oe){t&&t.active&&t.effects.push(e)}function jo(){return Oe}function Il(e){Oe&&Oe.cleanups.push(e)}const Ia=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ro=e=>(e.w&mt)>0,$o=e=>(e.n&mt)>0,Nl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=mt},Ll=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ro(a)&&!$o(a)?a.delete(e):t[n++]=a,a.w&=~mt,a.n&=~mt}t.length=n}},ar=new WeakMap;let fn=0,mt=1;const Jr=30;let Fe;const Nt=Symbol(""),Zr=Symbol("");class Na{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pl(this,r)}run(){if(!this.active)return this.fn();let t=Fe,n=ct;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Fe,Fe=this,ct=!0,mt=1<<++fn,fn<=Jr?Nl(this):hi(this),this.fn()}finally{fn<=Jr&&Ll(this),mt=1<<--fn,Fe=this.parent,ct=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Fe===this?this.deferStop=!0:this.active&&(hi(this),this.onStop&&this.onStop(),this.active=!1)}}function hi(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ct=!0;const Do=[];function nn(){Do.push(ct),ct=!1}function rn(){const e=Do.pop();ct=e===void 0?!0:e}function Se(e,t,n){if(ct&&Fe){let r=ar.get(e);r||ar.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ia()),zo(a)}}function zo(e,t){let n=!1;fn<=Jr?$o(e)||(e.n|=mt,n=!Ro(e)):n=!e.has(Fe),n&&(e.add(Fe),Fe.deps.push(e))}function Qe(e,t,n,r,a,i){const o=ar.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&D(e)){const l=Number(r);o.forEach((f,c)=>{(c==="length"||c>=l)&&s.push(f)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":D(e)?Pa(n)&&s.push(o.get("length")):(s.push(o.get(Nt)),Wt(e)&&s.push(o.get(Zr)));break;case"delete":D(e)||(s.push(o.get(Nt)),Wt(e)&&s.push(o.get(Zr)));break;case"set":Wt(e)&&s.push(o.get(Nt));break}if(s.length===1)s[0]&&Qr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);Qr(Ia(l))}}function Qr(e,t){const n=D(e)?e:[...e];for(const r of n)r.computed&&gi(r);for(const r of n)r.computed||gi(r)}function gi(e,t){(e!==Fe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Ml(e,t){var n;return(n=ar.get(e))===null||n===void 0?void 0:n.get(t)}const Fl=Ca("__proto__,__v_isRef,__isVue"),Bo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ta)),jl=La(),Rl=La(!1,!0),$l=La(!0),vi=Dl();function Dl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)Se(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(K)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){nn();const r=K(this)[t].apply(this,n);return rn(),r}}),e}function zl(e){const t=K(this);return Se(t,"has",e),t.hasOwnProperty(e)}function La(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?nf:Ko:t?Wo:Yo).get(r))return r;const o=D(r);if(!e){if(o&&V(vi,a))return Reflect.get(vi,a,i);if(a==="hasOwnProperty")return zl}const s=Reflect.get(r,a,i);return(Ta(a)?Bo.has(a):Fl(a))||(e||Se(r,"get",a),t)?s:le(s)?o&&Pa(a)?s:s.value:ie(s)?e?Vo(s):Xt(s):s}}const Bl=Ho(),Hl=Ho(!0);function Ho(e=!1){return function(n,r,a,i){let o=n[r];if(Jt(o)&&le(o)&&!le(a))return!1;if(!e&&(!ir(a)&&!Jt(a)&&(o=K(o),a=K(a)),!D(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=D(n)&&Pa(r)?Number(r)<n.length:V(n,r),l=Reflect.set(n,r,a,i);return n===K(i)&&(s?_n(a,o)&&Qe(n,"set",r,a):Qe(n,"add",r,a)),l}}function Ul(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Qe(e,"delete",t,void 0),r}function Yl(e,t){const n=Reflect.has(e,t);return(!Ta(t)||!Bo.has(t))&&Se(e,"has",t),n}function Wl(e){return Se(e,"iterate",D(e)?"length":Nt),Reflect.ownKeys(e)}const Uo={get:jl,set:Bl,deleteProperty:Ul,has:Yl,ownKeys:Wl},Kl={get:$l,set(e,t){return!0},deleteProperty(e,t){return!0}},Vl=_e({},Uo,{get:Rl,set:Hl}),Ma=e=>e,yr=e=>Reflect.getPrototypeOf(e);function jn(e,t,n=!1,r=!1){e=e.__v_raw;const a=K(e),i=K(t);n||(t!==i&&Se(a,"get",t),Se(a,"get",i));const{has:o}=yr(a),s=r?Ma:n?Ra:xn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Rn(e,t=!1){const n=this.__v_raw,r=K(n),a=K(e);return t||(e!==a&&Se(r,"has",e),Se(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function $n(e,t=!1){return e=e.__v_raw,!t&&Se(K(e),"iterate",Nt),Reflect.get(e,"size",e)}function bi(e){e=K(e);const t=K(this);return yr(t).has.call(t,e)||(t.add(e),Qe(t,"add",e,e)),this}function yi(e,t){t=K(t);const n=K(this),{has:r,get:a}=yr(n);let i=r.call(n,e);i||(e=K(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?_n(t,o)&&Qe(n,"set",e,t):Qe(n,"add",e,t),this}function _i(e){const t=K(this),{has:n,get:r}=yr(t);let a=n.call(t,e);a||(e=K(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Qe(t,"delete",e,void 0),i}function xi(){const e=K(this),t=e.size!==0,n=e.clear();return t&&Qe(e,"clear",void 0,void 0),n}function Dn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=K(o),l=t?Ma:e?Ra:xn;return!e&&Se(s,"iterate",Nt),o.forEach((f,c)=>r.call(a,l(f),l(c),i))}}function zn(e,t,n){return function(...r){const a=this.__v_raw,i=K(a),o=Wt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),c=n?Ma:t?Ra:xn;return!t&&Se(i,"iterate",l?Zr:Nt),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[c(m[0]),c(m[1])]:c(m),done:p}},[Symbol.iterator](){return this}}}}function at(e){return function(...t){return e==="delete"?!1:this}}function ql(){const e={get(i){return jn(this,i)},get size(){return $n(this)},has:Rn,add:bi,set:yi,delete:_i,clear:xi,forEach:Dn(!1,!1)},t={get(i){return jn(this,i,!1,!0)},get size(){return $n(this)},has:Rn,add:bi,set:yi,delete:_i,clear:xi,forEach:Dn(!1,!0)},n={get(i){return jn(this,i,!0)},get size(){return $n(this,!0)},has(i){return Rn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Dn(!0,!1)},r={get(i){return jn(this,i,!0,!0)},get size(){return $n(this,!0)},has(i){return Rn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:Dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=zn(i,!1,!1),n[i]=zn(i,!0,!1),t[i]=zn(i,!1,!0),r[i]=zn(i,!0,!0)}),[e,n,t,r]}const[Xl,Jl,Zl,Ql]=ql();function Fa(e,t){const n=t?e?Ql:Zl:e?Jl:Xl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(V(n,a)&&a in r?n:r,a,i)}const Gl={get:Fa(!1,!1)},ef={get:Fa(!1,!0)},tf={get:Fa(!0,!1)},Yo=new WeakMap,Wo=new WeakMap,Ko=new WeakMap,nf=new WeakMap;function rf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function af(e){return e.__v_skip||!Object.isExtensible(e)?0:rf(Cl(e))}function Xt(e){return Jt(e)?e:ja(e,!1,Uo,Gl,Yo)}function of(e){return ja(e,!1,Vl,ef,Wo)}function Vo(e){return ja(e,!0,Kl,tf,Ko)}function ja(e,t,n,r,a){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=af(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function ut(e){return Jt(e)?ut(e.__v_raw):!!(e&&e.__v_isReactive)}function Jt(e){return!!(e&&e.__v_isReadonly)}function ir(e){return!!(e&&e.__v_isShallow)}function qo(e){return ut(e)||Jt(e)}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function Zt(e){return rr(e,"__v_skip",!0),e}const xn=e=>ie(e)?Xt(e):e,Ra=e=>ie(e)?Vo(e):e;function Xo(e){ct&&Fe&&(e=K(e),zo(e.dep||(e.dep=Ia())))}function Jo(e,t){e=K(e);const n=e.dep;n&&Qr(n)}function le(e){return!!(e&&e.__v_isRef===!0)}function bt(e){return sf(e,!1)}function sf(e,t){return le(e)?e:new lf(e,t)}class lf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:K(t),this._value=n?t:xn(t)}get value(){return Xo(this),this._value}set value(t){const n=this.__v_isShallow||ir(t)||Jt(t);t=n?t:K(t),_n(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:xn(t),Jo(this))}}function oe(e){return le(e)?e.value:e}const ff={get:(e,t,n)=>oe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Zo(e){return ut(e)?e:new Proxy(e,ff)}function cf(e){const t=D(e)?new Array(e.length):{};for(const n in e)t[n]=df(e,n);return t}class uf{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ml(K(this._object),this._key)}}function df(e,t,n){const r=e[t];return le(r)?r:new uf(e,t,n)}var Qo;class mf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qo]=!1,this._dirty=!0,this.effect=new Na(t,()=>{this._dirty||(this._dirty=!0,Jo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=K(this);return Xo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Qo="__v_isReadonly";function pf(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=De):(r=e.get,a=e.set),new mf(r,a,i||!a,n)}function dt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){_r(i,t,n)}return a}function Ne(e,t,n,r){if(U(e)){const i=dt(e,t,n,r);return i&&Io(i)&&i.catch(o=>{_r(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ne(e[i],t,n,r));return a}function _r(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let c=0;c<f.length;c++)if(f[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){dt(l,null,10,[e,o,s]);return}}hf(e,n,a,r)}function hf(e,t,n,r=!0){console.error(e)}let wn=!1,Gr=!1;const we=[];let Ye=0;const Kt=[];let Xe=null,St=0;const Go=Promise.resolve();let $a=null;function es(e){const t=$a||Go;return e?t.then(this?e.bind(this):e):t}function gf(e){let t=Ye+1,n=we.length;for(;t<n;){const r=t+n>>>1;kn(we[r])<e?t=r+1:n=r}return t}function Da(e){(!we.length||!we.includes(e,wn&&e.allowRecurse?Ye+1:Ye))&&(e.id==null?we.push(e):we.splice(gf(e.id),0,e),ts())}function ts(){!wn&&!Gr&&(Gr=!0,$a=Go.then(rs))}function vf(e){const t=we.indexOf(e);t>Ye&&we.splice(t,1)}function bf(e){D(e)?Kt.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?St+1:St))&&Kt.push(e),ts()}function wi(e,t=wn?Ye+1:0){for(;t<we.length;t++){const n=we[t];n&&n.pre&&(we.splice(t,1),t--,n())}}function ns(e){if(Kt.length){const t=[...new Set(Kt)];if(Kt.length=0,Xe){Xe.push(...t);return}for(Xe=t,Xe.sort((n,r)=>kn(n)-kn(r)),St=0;St<Xe.length;St++)Xe[St]();Xe=null,St=0}}const kn=e=>e.id==null?1/0:e.id,yf=(e,t)=>{const n=kn(e)-kn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function rs(e){Gr=!1,wn=!0,we.sort(yf);const t=De;try{for(Ye=0;Ye<we.length;Ye++){const n=we[Ye];n&&n.active!==!1&&dt(n,null,14)}}finally{Ye=0,we.length=0,ns(),wn=!1,$a=null,(we.length||Kt.length)&&rs()}}function _f(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ne;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[c]||ne;p&&(a=n.map(b=>de(b)?b.trim():b)),m&&(a=n.map(Xr))}let s,l=r[s=jr(t)]||r[s=jr(Ve(t))];!l&&i&&(l=r[s=jr(tn(t))]),l&&Ne(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ne(f,e,6,a)}}function as(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=f=>{const c=as(f,t,!0);c&&(s=!0,_e(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ie(e)&&r.set(e,null),null):(D(i)?i.forEach(l=>o[l]=null):_e(o,i),ie(e)&&r.set(e,o),o)}function xr(e,t){return!e||!hr(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,tn(t))||V(e,t))}let ye=null,is=null;function or(e){const t=ye;return ye=e,is=e&&e.type.__scopeId||null,t}function wr(e,t=ye,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Mi(-1);const i=or(t);let o;try{o=e(...a)}finally{or(i),r._d&&Mi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:c,renderCache:m,data:p,setupState:b,ctx:T,inheritAttrs:S}=e;let H,_;const E=or(e);try{if(n.shapeFlag&4){const $=a||r;H=Ue(c.call($,$,m,i,b,p,T)),_=l}else{const $=t;H=Ue($.length>1?$(i,{attrs:l,slots:s,emit:f}):$(i,null)),_=t.props?l:xf(l)}}catch($){hn.length=0,_r($,e,1),H=Z(Le)}let A=H;if(_&&S!==!1){const $=Object.keys(_),{shapeFlag:M}=A;$.length&&M&7&&(o&&$.some(Ea)&&(_=wf(_,o)),A=pt(A,_))}return n.dirs&&(A=pt(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),H=A,or(E),H}const xf=e=>{let t;for(const n in e)(n==="class"||n==="style"||hr(n))&&((t||(t={}))[n]=e[n]);return t},wf=(e,t)=>{const n={};for(const r in e)(!Ea(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function kf(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ki(r,o,f):!!o;if(l&8){const c=t.dynamicProps;for(let m=0;m<c.length;m++){const p=c[m];if(o[p]!==r[p]&&!xr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ki(r,o,f):!0:!!o;return!1}function ki(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!xr(n,i))return!0}return!1}function Af({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Cf=e=>e.__isSuspense;function Sf(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):bf(e)}function Ef(e,t){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[e]=t}}function un(e,t,n=!1){const r=ue||ye;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const Bn={};function Ze(e,t,n){return os(e,t,n)}function os(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ne){const s=jo()===(ue==null?void 0:ue.scope)?ue:null;let l,f=!1,c=!1;if(le(e)?(l=()=>e.value,f=ir(e)):ut(e)?(l=()=>e,r=!0):D(e)?(c=!0,f=e.some(A=>ut(A)||ir(A)),l=()=>e.map(A=>{if(le(A))return A.value;if(ut(A))return Tt(A);if(U(A))return dt(A,s,2)})):U(e)?t?l=()=>dt(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ne(e,s,3,[p])}:l=De,t&&r){const A=l;l=()=>Tt(A())}let m,p=A=>{m=_.onStop=()=>{dt(A,s,4)}},b;if(Cn)if(p=De,t?n&&Ne(t,s,3,[l(),c?[]:void 0,p]):l(),a==="sync"){const A=kc();b=A.__watcherHandles||(A.__watcherHandles=[])}else return De;let T=c?new Array(e.length).fill(Bn):Bn;const S=()=>{if(_.active)if(t){const A=_.run();(r||f||(c?A.some(($,M)=>_n($,T[M])):_n(A,T)))&&(m&&m(),Ne(t,s,3,[A,T===Bn?void 0:c&&T[0]===Bn?[]:T,p]),T=A)}else _.run()};S.allowRecurse=!!t;let H;a==="sync"?H=S:a==="post"?H=()=>Ce(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),H=()=>Da(S));const _=new Na(l,H);t?n?S():T=_.run():a==="post"?Ce(_.run.bind(_),s&&s.suspense):_.run();const E=()=>{_.stop(),s&&s.scope&&Oa(s.scope.effects,_)};return b&&b.push(E),E}function Of(e,t,n){const r=this.proxy,a=de(e)?e.includes(".")?ss(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=ue;Gt(this);const s=os(a,i.bind(r),n);return o?Gt(o):Lt(),s}function ss(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Tt(e,t){if(!ie(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))Tt(e.value,t);else if(D(e))for(let n=0;n<e.length;n++)Tt(e[n],t);else if(Po(e)||Wt(e))e.forEach(n=>{Tt(n,t)});else if(Lo(e))for(const n in e)Tt(e[n],t);return e}function Tf(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ds(()=>{e.isMounted=!0}),ms(()=>{e.isUnmounting=!0}),e}const Ie=[Function,Array],Pf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ie,onEnter:Ie,onAfterEnter:Ie,onEnterCancelled:Ie,onBeforeLeave:Ie,onLeave:Ie,onAfterLeave:Ie,onLeaveCancelled:Ie,onBeforeAppear:Ie,onAppear:Ie,onAfterAppear:Ie,onAppearCancelled:Ie},setup(e,{slots:t}){const n=Wa(),r=Tf();let a;return()=>{const i=t.default&&cs(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==Le){o=S;break}}const s=K(e),{mode:l}=s;if(r.isLeaving)return $r(o);const f=Ai(o);if(!f)return $r(o);const c=ea(f,s,r,n);ta(f,c);const m=n.subTree,p=m&&Ai(m);let b=!1;const{getTransitionKey:T}=f.type;if(T){const S=T();a===void 0?a=S:S!==a&&(a=S,b=!0)}if(p&&p.type!==Le&&(!Et(f,p)||b)){const S=ea(p,s,r,n);if(ta(p,S),l==="out-in")return r.isLeaving=!0,S.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},$r(o);l==="in-out"&&f.type!==Le&&(S.delayLeave=(H,_,E)=>{const A=fs(r,p);A[String(p.key)]=p,H._leaveCb=()=>{_(),H._leaveCb=void 0,delete c.delayedLeave},c.delayedLeave=E})}return o}}},ls=Pf;function fs(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ea(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:f,onEnterCancelled:c,onBeforeLeave:m,onLeave:p,onAfterLeave:b,onLeaveCancelled:T,onBeforeAppear:S,onAppear:H,onAfterAppear:_,onAppearCancelled:E}=t,A=String(e.key),$=fs(n,e),M=(C,z)=>{C&&Ne(C,r,9,z)},X=(C,z)=>{const Y=z[1];M(C,z),D(C)?C.every(Q=>Q.length<=1)&&Y():C.length<=1&&Y()},F={mode:i,persisted:o,beforeEnter(C){let z=s;if(!n.isMounted)if(a)z=S||s;else return;C._leaveCb&&C._leaveCb(!0);const Y=$[A];Y&&Et(e,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),M(z,[C])},enter(C){let z=l,Y=f,Q=c;if(!n.isMounted)if(a)z=H||l,Y=_||f,Q=E||c;else return;let L=!1;const te=C._enterCb=pe=>{L||(L=!0,pe?M(Q,[C]):M(Y,[C]),F.delayedLeave&&F.delayedLeave(),C._enterCb=void 0)};z?X(z,[C,te]):te()},leave(C,z){const Y=String(e.key);if(C._enterCb&&C._enterCb(!0),n.isUnmounting)return z();M(m,[C]);let Q=!1;const L=C._leaveCb=te=>{Q||(Q=!0,z(),te?M(T,[C]):M(b,[C]),C._leaveCb=void 0,$[Y]===e&&delete $[Y])};$[Y]=e,p?X(p,[C,L]):L()},clone(C){return ea(C,t,n,r)}};return F}function $r(e){if(kr(e))return e=pt(e),e.children=null,e}function Ai(e){return kr(e)?e.children?e.children[0]:void 0:e}function ta(e,t){e.shapeFlag&6&&e.component?ta(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function cs(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===xe?(o.patchFlag&128&&a++,r=r.concat(cs(o.children,t,s))):(t||o.type!==Le)&&r.push(s!=null?pt(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function za(e){return U(e)?{setup:e,name:e.name}:e}const dn=e=>!!e.type.__asyncLoader,kr=e=>e.type.__isKeepAlive;function If(e,t){us(e,"a",t)}function Nf(e,t){us(e,"da",t)}function us(e,t,n=ue){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ar(t,r,n),n){let a=n.parent;for(;a&&a.parent;)kr(a.parent.vnode)&&Lf(r,t,n,a),a=a.parent}}function Lf(e,t,n,r){const a=Ar(t,e,r,!0);ps(()=>{Oa(r[t],a)},n)}function Ar(e,t,n=ue,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;nn(),Gt(n);const s=Ne(t,n,e,o);return Lt(),rn(),s});return r?a.unshift(i):a.push(i),i}}const nt=e=>(t,n=ue)=>(!Cn||e==="sp")&&Ar(e,(...r)=>t(...r),n),Mf=nt("bm"),ds=nt("m"),Ff=nt("bu"),jf=nt("u"),ms=nt("bum"),ps=nt("um"),Rf=nt("sp"),$f=nt("rtg"),Df=nt("rtc");function zf(e,t=ue){Ar("ec",e,t)}function sr(e,t){const n=ye;if(n===null)return e;const r=Or(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,f=ne]=t[i];o&&(U(o)&&(o={mounted:o,updated:o}),o.deep&&Tt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:f}))}return e}function xt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(nn(),Ne(l,n,8,[e.el,s,e,t]),rn())}}const hs="components";function Cr(e,t){return Hf(hs,e,!0,t)||e}const Bf=Symbol();function Hf(e,t,n=!0,r=!1){const a=ye||ue;if(a){const i=a.type;if(e===hs){const s=_c(i,!1);if(s&&(s===t||s===Ve(t)||s===br(Ve(t))))return i}const o=Ci(a[e]||i[e],t)||Ci(a.appContext[e],t);return!o&&r?i:o}}function Ci(e,t){return e&&(e[t]||e[Ve(t)]||e[br(Ve(t))])}function Uf(e,t,n,r){let a;const i=n&&n[r];if(D(e)||de(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ie(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}function Si(e,t,n={},r,a){if(ye.isCE||ye.parent&&dn(ye.parent)&&ye.parent.isCE)return t!=="default"&&(n.name=t),Z("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),se();const o=i&&gs(i(n)),s=Ke(xe,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function gs(e){return e.some(t=>fr(t)?!(t.type===Le||t.type===xe&&!gs(t.children)):!0)?e:null}const na=e=>e?Os(e)?Or(e)||e.proxy:na(e.parent):null,mn=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>na(e.parent),$root:e=>na(e.root),$emit:e=>e.emit,$options:e=>Ba(e),$forceUpdate:e=>e.f||(e.f=()=>Da(e.update)),$nextTick:e=>e.n||(e.n=es.bind(e.proxy)),$watch:e=>Of.bind(e)}),Dr=(e,t)=>e!==ne&&!e.__isScriptSetup&&V(e,t),Yf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const b=o[t];if(b!==void 0)switch(b){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Dr(r,t))return o[t]=1,r[t];if(a!==ne&&V(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&V(f,t))return o[t]=3,i[t];if(n!==ne&&V(n,t))return o[t]=4,n[t];ra&&(o[t]=0)}}const c=mn[t];let m,p;if(c)return t==="$attrs"&&Se(e,"get",t),c(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==ne&&V(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,V(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Dr(a,t)?(a[t]=n,!0):r!==ne&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ne&&V(e,o)||Dr(t,o)||(s=i[0])&&V(s,o)||V(r,o)||V(mn,o)||V(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ra=!0;function Wf(e){const t=Ba(e),n=e.proxy,r=e.ctx;ra=!1,t.beforeCreate&&Ei(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:c,beforeMount:m,mounted:p,beforeUpdate:b,updated:T,activated:S,deactivated:H,beforeDestroy:_,beforeUnmount:E,destroyed:A,unmounted:$,render:M,renderTracked:X,renderTriggered:F,errorCaptured:C,serverPrefetch:z,expose:Y,inheritAttrs:Q,components:L,directives:te,filters:pe}=t;if(f&&Kf(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const fe in o){const G=o[fe];U(G)&&(r[fe]=G.bind(n))}if(a){const fe=a.call(n,n);ie(fe)&&(e.data=Xt(fe))}if(ra=!0,i)for(const fe in i){const G=i[fe],yt=U(G)?G.bind(n,n):U(G.get)?G.get.bind(n,n):De,Mn=!U(G)&&U(G.set)?G.set.bind(n):De,_t=be({get:yt,set:Mn});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>_t.value,set:ze=>_t.value=ze})}if(s)for(const fe in s)vs(s[fe],r,n,fe);if(l){const fe=U(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(G=>{Ef(G,fe[G])})}c&&Ei(c,e,"c");function ve(fe,G){D(G)?G.forEach(yt=>fe(yt.bind(n))):G&&fe(G.bind(n))}if(ve(Mf,m),ve(ds,p),ve(Ff,b),ve(jf,T),ve(If,S),ve(Nf,H),ve(zf,C),ve(Df,X),ve($f,F),ve(ms,E),ve(ps,$),ve(Rf,z),D(Y))if(Y.length){const fe=e.exposed||(e.exposed={});Y.forEach(G=>{Object.defineProperty(fe,G,{get:()=>n[G],set:yt=>n[G]=yt})})}else e.exposed||(e.exposed={});M&&e.render===De&&(e.render=M),Q!=null&&(e.inheritAttrs=Q),L&&(e.components=L),te&&(e.directives=te)}function Kf(e,t,n=De,r=!1){D(e)&&(e=aa(e));for(const a in e){const i=e[a];let o;ie(i)?"default"in i?o=un(i.from||a,i.default,!0):o=un(i.from||a):o=un(i),le(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ei(e,t,n){Ne(D(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function vs(e,t,n,r){const a=r.includes(".")?ss(n,r):()=>n[r];if(de(e)){const i=t[e];U(i)&&Ze(a,i)}else if(U(e))Ze(a,e.bind(n));else if(ie(e))if(D(e))e.forEach(i=>vs(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&Ze(a,i,e)}}function Ba(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>lr(l,f,o,!0)),lr(l,t,o)),ie(t)&&i.set(t,l),l}function lr(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&lr(e,i,n,!0),a&&a.forEach(o=>lr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Vf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Vf={data:Oi,props:Ct,emits:Ct,methods:Ct,computed:Ct,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:Ct,directives:Ct,watch:Xf,provide:Oi,inject:qf};function Oi(e,t){return t?e?function(){return _e(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function qf(e,t){return Ct(aa(e),aa(t))}function aa(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ke(e,t){return e?[...new Set([].concat(e,t))]:t}function Ct(e,t){return e?_e(_e(Object.create(null),e),t):t}function Xf(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const r in t)n[r]=ke(e[r],t[r]);return n}function Jf(e,t,n,r=!1){const a={},i={};rr(i,Er,1),e.propsDefaults=Object.create(null),bs(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:of(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Zf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=K(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let m=0;m<c.length;m++){let p=c[m];if(xr(e.emitsOptions,p))continue;const b=t[p];if(l)if(V(i,p))b!==i[p]&&(i[p]=b,f=!0);else{const T=Ve(p);a[T]=ia(l,s,T,b,e,!1)}else b!==i[p]&&(i[p]=b,f=!0)}}}else{bs(e,t,a,i)&&(f=!0);let c;for(const m in s)(!t||!V(t,m)&&((c=tn(m))===m||!V(t,c)))&&(l?n&&(n[m]!==void 0||n[c]!==void 0)&&(a[m]=ia(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!V(t,m))&&(delete i[m],f=!0)}f&&Qe(e,"set","$attrs")}function bs(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Qn(l))continue;const f=t[l];let c;a&&V(a,c=Ve(l))?!i||!i.includes(c)?n[c]=f:(s||(s={}))[c]=f:xr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=K(n),f=s||ne;for(let c=0;c<i.length;c++){const m=i[c];n[m]=ia(a,l,m,f[m],e,!V(f,m))}}return o}function ia(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=V(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Gt(a),r=f[n]=l.call(null,t),Lt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===tn(n))&&(r=!0))}return r}function ys(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const c=m=>{l=!0;const[p,b]=ys(m,t,!0);_e(o,p),b&&s.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return ie(e)&&r.set(e,Yt),Yt;if(D(i))for(let c=0;c<i.length;c++){const m=Ve(i[c]);Ti(m)&&(o[m]=ne)}else if(i)for(const c in i){const m=Ve(c);if(Ti(m)){const p=i[c],b=o[m]=D(p)||U(p)?{type:p}:Object.assign({},p);if(b){const T=Ni(Boolean,b.type),S=Ni(String,b.type);b[0]=T>-1,b[1]=S<0||T<S,(T>-1||V(b,"default"))&&s.push(m)}}}const f=[o,s];return ie(e)&&r.set(e,f),f}function Ti(e){return e[0]!=="$"}function Pi(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ii(e,t){return Pi(e)===Pi(t)}function Ni(e,t){return D(t)?t.findIndex(n=>Ii(n,e)):U(t)&&Ii(t,e)?0:-1}const _s=e=>e[0]==="_"||e==="$stable",Ha=e=>D(e)?e.map(Ue):[Ue(e)],Qf=(e,t,n)=>{if(t._n)return t;const r=wr((...a)=>Ha(t(...a)),n);return r._c=!1,r},xs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(_s(a))continue;const i=e[a];if(U(i))t[a]=Qf(a,i,r);else if(i!=null){const o=Ha(i);t[a]=()=>o}}},ws=(e,t)=>{const n=Ha(t);e.slots.default=()=>n},Gf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=K(t),rr(t,"_",n)):xs(t,e.slots={})}else e.slots={},t&&ws(e,t);rr(e.slots,Er,1)},ec=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ne;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(_e(a,t),!n&&s===1&&delete a._):(i=!t.$stable,xs(t,a)),o=t}else t&&(ws(e,t),o={default:1});if(i)for(const s in a)!_s(s)&&!(s in o)&&delete a[s]};function ks(){return{app:null,config:{isNativeTag:wl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tc=0;function nc(e,t){return function(r,a=null){U(r)||(r=Object.assign({},r)),a!=null&&!ie(a)&&(a=null);const i=ks(),o=new Set;let s=!1;const l=i.app={_uid:tc++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Ac,get config(){return i.config},set config(f){},use(f,...c){return o.has(f)||(f&&U(f.install)?(o.add(f),f.install(l,...c)):U(f)&&(o.add(f),f(l,...c))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,c){return c?(i.components[f]=c,l):i.components[f]},directive(f,c){return c?(i.directives[f]=c,l):i.directives[f]},mount(f,c,m){if(!s){const p=Z(r,a);return p.appContext=i,c&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,Or(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,c){return i.provides[f]=c,l}};return l}}function oa(e,t,n,r,a=!1){if(D(e)){e.forEach((p,b)=>oa(p,t&&(D(t)?t[b]:t),n,r,a));return}if(dn(r)&&!a)return;const i=r.shapeFlag&4?Or(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,c=s.refs===ne?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(de(f)?(c[f]=null,V(m,f)&&(m[f]=null)):le(f)&&(f.value=null)),U(l))dt(l,s,12,[o,c]);else{const p=de(l),b=le(l);if(p||b){const T=()=>{if(e.f){const S=p?V(m,l)?m[l]:c[l]:l.value;a?D(S)&&Oa(S,i):D(S)?S.includes(i)||S.push(i):p?(c[l]=[i],V(m,l)&&(m[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,V(m,l)&&(m[l]=o)):b&&(l.value=o,e.k&&(c[e.k]=o))};o?(T.id=-1,Ce(T,n)):T()}}}const Ce=Sf;function rc(e){return ac(e)}function ac(e,t){const n=Tl();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:c,parentNode:m,nextSibling:p,setScopeId:b=De,insertStaticContent:T}=e,S=(u,d,h,v=null,g=null,w=null,O=!1,x=null,k=!!d.dynamicChildren)=>{if(u===d)return;u&&!Et(u,d)&&(v=Fn(u),ze(u,g,w,!0),u=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:y,ref:j,shapeFlag:I}=d;switch(y){case Sr:H(u,d,h,v);break;case Le:_(u,d,h,v);break;case zr:u==null&&E(d,h,v,O);break;case xe:L(u,d,h,v,g,w,O,x,k);break;default:I&1?M(u,d,h,v,g,w,O,x,k):I&6?te(u,d,h,v,g,w,O,x,k):(I&64||I&128)&&y.process(u,d,h,v,g,w,O,x,k,Rt)}j!=null&&g&&oa(j,u&&u.ref,w,d||u,!d)},H=(u,d,h,v)=>{if(u==null)r(d.el=s(d.children),h,v);else{const g=d.el=u.el;d.children!==u.children&&f(g,d.children)}},_=(u,d,h,v)=>{u==null?r(d.el=l(d.children||""),h,v):d.el=u.el},E=(u,d,h,v)=>{[u.el,u.anchor]=T(u.children,d,h,v,u.el,u.anchor)},A=({el:u,anchor:d},h,v)=>{let g;for(;u&&u!==d;)g=p(u),r(u,h,v),u=g;r(d,h,v)},$=({el:u,anchor:d})=>{let h;for(;u&&u!==d;)h=p(u),a(u),u=h;a(d)},M=(u,d,h,v,g,w,O,x,k)=>{O=O||d.type==="svg",u==null?X(d,h,v,g,w,O,x,k):z(u,d,g,w,O,x,k)},X=(u,d,h,v,g,w,O,x)=>{let k,y;const{type:j,props:I,shapeFlag:R,transition:B,dirs:W}=u;if(k=u.el=o(u.type,w,I&&I.is,I),R&8?c(k,u.children):R&16&&C(u.children,k,null,v,g,w&&j!=="foreignObject",O,x),W&&xt(u,null,v,"created"),F(k,u,u.scopeId,O,v),I){for(const J in I)J!=="value"&&!Qn(J)&&i(k,J,null,I[J],w,u.children,v,g,qe);"value"in I&&i(k,"value",null,I.value),(y=I.onVnodeBeforeMount)&&He(y,v,u)}W&&xt(u,null,v,"beforeMount");const ee=(!g||g&&!g.pendingBranch)&&B&&!B.persisted;ee&&B.beforeEnter(k),r(k,d,h),((y=I&&I.onVnodeMounted)||ee||W)&&Ce(()=>{y&&He(y,v,u),ee&&B.enter(k),W&&xt(u,null,v,"mounted")},g)},F=(u,d,h,v,g)=>{if(h&&b(u,h),v)for(let w=0;w<v.length;w++)b(u,v[w]);if(g){let w=g.subTree;if(d===w){const O=g.vnode;F(u,O,O.scopeId,O.slotScopeIds,g.parent)}}},C=(u,d,h,v,g,w,O,x,k=0)=>{for(let y=k;y<u.length;y++){const j=u[y]=x?lt(u[y]):Ue(u[y]);S(null,j,d,h,v,g,w,O,x)}},z=(u,d,h,v,g,w,O)=>{const x=d.el=u.el;let{patchFlag:k,dynamicChildren:y,dirs:j}=d;k|=u.patchFlag&16;const I=u.props||ne,R=d.props||ne;let B;h&&wt(h,!1),(B=R.onVnodeBeforeUpdate)&&He(B,h,d,u),j&&xt(d,u,h,"beforeUpdate"),h&&wt(h,!0);const W=g&&d.type!=="foreignObject";if(y?Y(u.dynamicChildren,y,x,h,v,W,w):O||G(u,d,x,null,h,v,W,w,!1),k>0){if(k&16)Q(x,d,I,R,h,v,g);else if(k&2&&I.class!==R.class&&i(x,"class",null,R.class,g),k&4&&i(x,"style",I.style,R.style,g),k&8){const ee=d.dynamicProps;for(let J=0;J<ee.length;J++){const me=ee[J],Me=I[me],$t=R[me];($t!==Me||me==="value")&&i(x,me,Me,$t,g,u.children,h,v,qe)}}k&1&&u.children!==d.children&&c(x,d.children)}else!O&&y==null&&Q(x,d,I,R,h,v,g);((B=R.onVnodeUpdated)||j)&&Ce(()=>{B&&He(B,h,d,u),j&&xt(d,u,h,"updated")},v)},Y=(u,d,h,v,g,w,O)=>{for(let x=0;x<d.length;x++){const k=u[x],y=d[x],j=k.el&&(k.type===xe||!Et(k,y)||k.shapeFlag&70)?m(k.el):h;S(k,y,j,null,v,g,w,O,!0)}},Q=(u,d,h,v,g,w,O)=>{if(h!==v){if(h!==ne)for(const x in h)!Qn(x)&&!(x in v)&&i(u,x,h[x],null,O,d.children,g,w,qe);for(const x in v){if(Qn(x))continue;const k=v[x],y=h[x];k!==y&&x!=="value"&&i(u,x,y,k,O,d.children,g,w,qe)}"value"in v&&i(u,"value",h.value,v.value)}},L=(u,d,h,v,g,w,O,x,k)=>{const y=d.el=u?u.el:s(""),j=d.anchor=u?u.anchor:s("");let{patchFlag:I,dynamicChildren:R,slotScopeIds:B}=d;B&&(x=x?x.concat(B):B),u==null?(r(y,h,v),r(j,h,v),C(d.children,h,j,g,w,O,x,k)):I>0&&I&64&&R&&u.dynamicChildren?(Y(u.dynamicChildren,R,h,g,w,O,x),(d.key!=null||g&&d===g.subTree)&&Ua(u,d,!0)):G(u,d,h,j,g,w,O,x,k)},te=(u,d,h,v,g,w,O,x,k)=>{d.slotScopeIds=x,u==null?d.shapeFlag&512?g.ctx.activate(d,h,v,O,k):pe(d,h,v,g,w,O,k):ge(u,d,k)},pe=(u,d,h,v,g,w,O)=>{const x=u.component=hc(u,v,g);if(kr(u)&&(x.ctx.renderer=Rt),gc(x),x.asyncDep){if(g&&g.registerDep(x,ve),!u.el){const k=x.subTree=Z(Le);_(null,k,d,h)}return}ve(x,u,d,h,g,w,O)},ge=(u,d,h)=>{const v=d.component=u.component;if(kf(u,d,h))if(v.asyncDep&&!v.asyncResolved){fe(v,d,h);return}else v.next=d,vf(v.update),v.update();else d.el=u.el,v.vnode=d},ve=(u,d,h,v,g,w,O)=>{const x=()=>{if(u.isMounted){let{next:j,bu:I,u:R,parent:B,vnode:W}=u,ee=j,J;wt(u,!1),j?(j.el=W.el,fe(u,j,O)):j=W,I&&Gn(I),(J=j.props&&j.props.onVnodeBeforeUpdate)&&He(J,B,j,W),wt(u,!0);const me=Rr(u),Me=u.subTree;u.subTree=me,S(Me,me,m(Me.el),Fn(Me),u,g,w),j.el=me.el,ee===null&&Af(u,me.el),R&&Ce(R,g),(J=j.props&&j.props.onVnodeUpdated)&&Ce(()=>He(J,B,j,W),g)}else{let j;const{el:I,props:R}=d,{bm:B,m:W,parent:ee}=u,J=dn(d);if(wt(u,!1),B&&Gn(B),!J&&(j=R&&R.onVnodeBeforeMount)&&He(j,ee,d),wt(u,!0),I&&Fr){const me=()=>{u.subTree=Rr(u),Fr(I,u.subTree,u,g,null)};J?d.type.__asyncLoader().then(()=>!u.isUnmounted&&me()):me()}else{const me=u.subTree=Rr(u);S(null,me,h,v,u,g,w),d.el=me.el}if(W&&Ce(W,g),!J&&(j=R&&R.onVnodeMounted)){const me=d;Ce(()=>He(j,ee,me),g)}(d.shapeFlag&256||ee&&dn(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&Ce(u.a,g),u.isMounted=!0,d=h=v=null}},k=u.effect=new Na(x,()=>Da(y),u.scope),y=u.update=()=>k.run();y.id=u.uid,wt(u,!0),y()},fe=(u,d,h)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,Zf(u,d.props,v,h),ec(u,d.children,h),nn(),wi(),rn()},G=(u,d,h,v,g,w,O,x,k=!1)=>{const y=u&&u.children,j=u?u.shapeFlag:0,I=d.children,{patchFlag:R,shapeFlag:B}=d;if(R>0){if(R&128){Mn(y,I,h,v,g,w,O,x,k);return}else if(R&256){yt(y,I,h,v,g,w,O,x,k);return}}B&8?(j&16&&qe(y,g,w),I!==y&&c(h,I)):j&16?B&16?Mn(y,I,h,v,g,w,O,x,k):qe(y,g,w,!0):(j&8&&c(h,""),B&16&&C(I,h,v,g,w,O,x,k))},yt=(u,d,h,v,g,w,O,x,k)=>{u=u||Yt,d=d||Yt;const y=u.length,j=d.length,I=Math.min(y,j);let R;for(R=0;R<I;R++){const B=d[R]=k?lt(d[R]):Ue(d[R]);S(u[R],B,h,null,g,w,O,x,k)}y>j?qe(u,g,w,!0,!1,I):C(d,h,v,g,w,O,x,k,I)},Mn=(u,d,h,v,g,w,O,x,k)=>{let y=0;const j=d.length;let I=u.length-1,R=j-1;for(;y<=I&&y<=R;){const B=u[y],W=d[y]=k?lt(d[y]):Ue(d[y]);if(Et(B,W))S(B,W,h,null,g,w,O,x,k);else break;y++}for(;y<=I&&y<=R;){const B=u[I],W=d[R]=k?lt(d[R]):Ue(d[R]);if(Et(B,W))S(B,W,h,null,g,w,O,x,k);else break;I--,R--}if(y>I){if(y<=R){const B=R+1,W=B<j?d[B].el:v;for(;y<=R;)S(null,d[y]=k?lt(d[y]):Ue(d[y]),h,W,g,w,O,x,k),y++}}else if(y>R)for(;y<=I;)ze(u[y],g,w,!0),y++;else{const B=y,W=y,ee=new Map;for(y=W;y<=R;y++){const Ee=d[y]=k?lt(d[y]):Ue(d[y]);Ee.key!=null&&ee.set(Ee.key,y)}let J,me=0;const Me=R-W+1;let $t=!1,ui=0;const on=new Array(Me);for(y=0;y<Me;y++)on[y]=0;for(y=B;y<=I;y++){const Ee=u[y];if(me>=Me){ze(Ee,g,w,!0);continue}let Be;if(Ee.key!=null)Be=ee.get(Ee.key);else for(J=W;J<=R;J++)if(on[J-W]===0&&Et(Ee,d[J])){Be=J;break}Be===void 0?ze(Ee,g,w,!0):(on[Be-W]=y+1,Be>=ui?ui=Be:$t=!0,S(Ee,d[Be],h,null,g,w,O,x,k),me++)}const di=$t?ic(on):Yt;for(J=di.length-1,y=Me-1;y>=0;y--){const Ee=W+y,Be=d[Ee],mi=Ee+1<j?d[Ee+1].el:v;on[y]===0?S(null,Be,h,mi,g,w,O,x,k):$t&&(J<0||y!==di[J]?_t(Be,h,mi,2):J--)}}},_t=(u,d,h,v,g=null)=>{const{el:w,type:O,transition:x,children:k,shapeFlag:y}=u;if(y&6){_t(u.component.subTree,d,h,v);return}if(y&128){u.suspense.move(d,h,v);return}if(y&64){O.move(u,d,h,Rt);return}if(O===xe){r(w,d,h);for(let I=0;I<k.length;I++)_t(k[I],d,h,v);r(u.anchor,d,h);return}if(O===zr){A(u,d,h);return}if(v!==2&&y&1&&x)if(v===0)x.beforeEnter(w),r(w,d,h),Ce(()=>x.enter(w),g);else{const{leave:I,delayLeave:R,afterLeave:B}=x,W=()=>r(w,d,h),ee=()=>{I(w,()=>{W(),B&&B()})};R?R(w,W,ee):ee()}else r(w,d,h)},ze=(u,d,h,v=!1,g=!1)=>{const{type:w,props:O,ref:x,children:k,dynamicChildren:y,shapeFlag:j,patchFlag:I,dirs:R}=u;if(x!=null&&oa(x,null,h,u,!0),j&256){d.ctx.deactivate(u);return}const B=j&1&&R,W=!dn(u);let ee;if(W&&(ee=O&&O.onVnodeBeforeUnmount)&&He(ee,d,u),j&6)hl(u.component,h,v);else{if(j&128){u.suspense.unmount(h,v);return}B&&xt(u,null,d,"beforeUnmount"),j&64?u.type.remove(u,d,h,g,Rt,v):y&&(w!==xe||I>0&&I&64)?qe(y,d,h,!1,!0):(w===xe&&I&384||!g&&j&16)&&qe(k,d,h),v&&fi(u)}(W&&(ee=O&&O.onVnodeUnmounted)||B)&&Ce(()=>{ee&&He(ee,d,u),B&&xt(u,null,d,"unmounted")},h)},fi=u=>{const{type:d,el:h,anchor:v,transition:g}=u;if(d===xe){pl(h,v);return}if(d===zr){$(u);return}const w=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(u.shapeFlag&1&&g&&!g.persisted){const{leave:O,delayLeave:x}=g,k=()=>O(h,w);x?x(u.el,w,k):k()}else w()},pl=(u,d)=>{let h;for(;u!==d;)h=p(u),a(u),u=h;a(d)},hl=(u,d,h)=>{const{bum:v,scope:g,update:w,subTree:O,um:x}=u;v&&Gn(v),g.stop(),w&&(w.active=!1,ze(O,u,d,h)),x&&Ce(x,d),Ce(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},qe=(u,d,h,v=!1,g=!1,w=0)=>{for(let O=w;O<u.length;O++)ze(u[O],d,h,v,g)},Fn=u=>u.shapeFlag&6?Fn(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),ci=(u,d,h)=>{u==null?d._vnode&&ze(d._vnode,null,null,!0):S(d._vnode||null,u,d,null,null,null,h),wi(),ns(),d._vnode=u},Rt={p:S,um:ze,m:_t,r:fi,mt:pe,mc:C,pc:G,pbc:Y,n:Fn,o:e};let Mr,Fr;return t&&([Mr,Fr]=t(Rt)),{render:ci,hydrate:Mr,createApp:nc(ci,Mr)}}function wt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ua(e,t,n=!1){const r=e.children,a=t.children;if(D(r)&&D(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=lt(a[i]),s.el=o.el),n||Ua(o,s)),s.type===Sr&&(s.el=o.el)}}function ic(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const oc=e=>e.__isTeleport,pn=e=>e&&(e.disabled||e.disabled===""),Li=e=>typeof SVGElement<"u"&&e instanceof SVGElement,sa=(e,t)=>{const n=e&&e.to;return de(n)?t?t(n):null:n},sc={__isTeleport:!0,process(e,t,n,r,a,i,o,s,l,f){const{mc:c,pc:m,pbc:p,o:{insert:b,querySelector:T,createText:S,createComment:H}}=f,_=pn(t.props);let{shapeFlag:E,children:A,dynamicChildren:$}=t;if(e==null){const M=t.el=S(""),X=t.anchor=S("");b(M,n,r),b(X,n,r);const F=t.target=sa(t.props,T),C=t.targetAnchor=S("");F&&(b(C,F),o=o||Li(F));const z=(Y,Q)=>{E&16&&c(A,Y,Q,a,i,o,s,l)};_?z(n,X):F&&z(F,C)}else{t.el=e.el;const M=t.anchor=e.anchor,X=t.target=e.target,F=t.targetAnchor=e.targetAnchor,C=pn(e.props),z=C?n:X,Y=C?M:F;if(o=o||Li(X),$?(p(e.dynamicChildren,$,z,a,i,o,s),Ua(e,t,!0)):l||m(e,t,z,Y,a,i,o,s,!1),_)C||Hn(t,n,M,f,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const Q=t.target=sa(t.props,T);Q&&Hn(t,Q,null,f,0)}else C&&Hn(t,X,F,f,1)}Cs(t)},remove(e,t,n,r,{um:a,o:{remove:i}},o){const{shapeFlag:s,children:l,anchor:f,targetAnchor:c,target:m,props:p}=e;if(m&&i(c),(o||!pn(p))&&(i(f),s&16))for(let b=0;b<l.length;b++){const T=l[b];a(T,t,n,!0,!!T.dynamicChildren)}},move:Hn,hydrate:lc};function Hn(e,t,n,{o:{insert:r},m:a},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:s,shapeFlag:l,children:f,props:c}=e,m=i===2;if(m&&r(o,t,n),(!m||pn(c))&&l&16)for(let p=0;p<f.length;p++)a(f[p],t,n,2);m&&r(s,t,n)}function lc(e,t,n,r,a,i,{o:{nextSibling:o,parentNode:s,querySelector:l}},f){const c=t.target=sa(t.props,l);if(c){const m=c._lpa||c.firstChild;if(t.shapeFlag&16)if(pn(t.props))t.anchor=f(o(e),t,s(e),n,r,a,i),t.targetAnchor=m;else{t.anchor=o(e);let p=m;for(;p;)if(p=o(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,c._lpa=t.targetAnchor&&o(t.targetAnchor);break}f(m,t,c,n,r,a,i)}Cs(t)}return t.anchor&&o(t.anchor)}const As=sc;function Cs(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const xe=Symbol(void 0),Sr=Symbol(void 0),Le=Symbol(void 0),zr=Symbol(void 0),hn=[];let Re=null;function se(e=!1){hn.push(Re=e?null:[])}function fc(){hn.pop(),Re=hn[hn.length-1]||null}let An=1;function Mi(e){An+=e}function Ss(e){return e.dynamicChildren=An>0?Re||Yt:null,fc(),An>0&&Re&&Re.push(e),e}function Te(e,t,n,r,a,i){return Ss(q(e,t,n,r,a,i,!0))}function Ke(e,t,n,r,a){return Ss(Z(e,t,n,r,a,!0))}function fr(e){return e?e.__v_isVNode===!0:!1}function Et(e,t){return e.type===t.type&&e.key===t.key}const Er="__vInternal",Es=({key:e})=>e??null,er=({ref:e,ref_key:t,ref_for:n})=>e!=null?de(e)||le(e)||U(e)?{i:ye,r:e,k:t,f:!!n}:e:null;function q(e,t=null,n=null,r=0,a=null,i=e===xe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Es(t),ref:t&&er(t),scopeId:is,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ye};return s?(Ya(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),An>0&&!o&&Re&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Re.push(l),l}const Z=cc;function cc(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Bf)&&(e=Le),fr(e)){const s=pt(e,t,!0);return n&&Ya(s,n),An>0&&!i&&Re&&(s.shapeFlag&6?Re[Re.indexOf(e)]=s:Re.push(s)),s.patchFlag|=-2,s}if(xc(e)&&(e=e.__vccOpts),t){t=uc(t);let{class:s,style:l}=t;s&&!de(s)&&(t.class=qt(s)),ie(l)&&(qo(l)&&!D(l)&&(l=_e({},l)),t.style=Sa(l))}const o=de(e)?1:Cf(e)?128:oc(e)?64:ie(e)?4:U(e)?2:0;return q(e,t,n,r,a,o,i,!0)}function uc(e){return e?qo(e)||Er in e?_e({},e):e:null}function pt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?dc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Es(s),ref:t&&t.ref?n&&a?D(a)?a.concat(er(t)):[a,er(t)]:er(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pt(e.ssContent),ssFallback:e.ssFallback&&pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Qt(e=" ",t=0){return Z(Sr,null,e,t)}function zt(e="",t=!1){return t?(se(),Ke(Le,null,e)):Z(Le,null,e)}function Ue(e){return e==null||typeof e=="boolean"?Z(Le):D(e)?Z(xe,null,e.slice()):typeof e=="object"?lt(e):Z(Sr,null,String(e))}function lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pt(e)}function Ya(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ya(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Er in t)?t._ctx=ye:a===3&&ye&&(ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:ye},n=32):(t=String(t),r&64?(n=16,t=[Qt(t)]):n=8);e.children=t,e.shapeFlag|=n}function dc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=qt([t.class,r.class]));else if(a==="style")t.style=Sa([t.style,r.style]);else if(hr(a)){const i=t[a],o=r[a];o&&i!==o&&!(D(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function He(e,t,n,r=null){Ne(e,t,7,[n,r])}const mc=ks();let pc=0;function hc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||mc,i={uid:pc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ys(r,a),emitsOptions:as(r,a),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:r.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=_f.bind(null,i),e.ce&&e.ce(i),i}let ue=null;const Wa=()=>ue||ye,Gt=e=>{ue=e,e.scope.on()},Lt=()=>{ue&&ue.scope.off(),ue=null};function Os(e){return e.vnode.shapeFlag&4}let Cn=!1;function gc(e,t=!1){Cn=t;const{props:n,children:r}=e.vnode,a=Os(e);Jf(e,n,a,t),Gf(e,r);const i=a?vc(e,t):void 0;return Cn=!1,i}function vc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Zt(new Proxy(e.ctx,Yf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?yc(e):null;Gt(e),nn();const i=dt(r,e,0,[e.props,a]);if(rn(),Lt(),Io(i)){if(i.then(Lt,Lt),t)return i.then(o=>{Fi(e,o,t)}).catch(o=>{_r(o,e,0)});e.asyncDep=i}else Fi(e,i,t)}else Ts(e,t)}function Fi(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=Zo(t)),Ts(e,n)}let ji;function Ts(e,t,n){const r=e.type;if(!e.render){if(!t&&ji&&!r.render){const a=r.template||Ba(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=_e(_e({isCustomElement:i,delimiters:s},o),l);r.render=ji(a,f)}}e.render=r.render||De}Gt(e),nn(),Wf(e),rn(),Lt()}function bc(e){return new Proxy(e.attrs,{get(t,n){return Se(e,"get","$attrs"),t[n]}})}function yc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=bc(e))},slots:e.slots,emit:e.emit,expose:t}}function Or(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Zo(Zt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mn)return mn[n](e)},has(t,n){return n in t||n in mn}}))}function _c(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function xc(e){return U(e)&&"__vccOpts"in e}const be=(e,t)=>pf(e,t,Cn);function Ka(e,t,n){const r=arguments.length;return r===2?ie(t)&&!D(t)?fr(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fr(n)&&(n=[n]),Z(e,t,n))}const wc=Symbol(""),kc=()=>un(wc),Ac="3.2.47",Cc="http://www.w3.org/2000/svg",Ot=typeof document<"u"?document:null,Ri=Ot&&Ot.createElement("template"),Sc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Ot.createElementNS(Cc,e):Ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Ot.createTextNode(e),createComment:e=>Ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ri.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ri.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ec(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Oc(e,t,n){const r=e.style,a=de(n);if(n&&!a){if(t&&!de(t))for(const i in t)n[i]==null&&la(r,i,"");for(const i in n)la(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const $i=/\s*!important$/;function la(e,t,n){if(D(n))n.forEach(r=>la(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Tc(e,t);$i.test(n)?e.setProperty(tn(r),n.replace($i,""),"important"):e[r]=n}}const Di=["Webkit","Moz","ms"],Br={};function Tc(e,t){const n=Br[t];if(n)return n;let r=Ve(t);if(r!=="filter"&&r in e)return Br[t]=r;r=br(r);for(let a=0;a<Di.length;a++){const i=Di[a]+r;if(i in e)return Br[t]=i}return t}const zi="http://www.w3.org/1999/xlink";function Pc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(zi,t.slice(6,t.length)):e.setAttributeNS(zi,t,n);else{const i=xl(t);n==null||i&&!Oo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ic(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Oo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Bt(e,t,n,r){e.addEventListener(t,n,r)}function Nc(e,t,n,r){e.removeEventListener(t,n,r)}function Lc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Mc(t);if(r){const f=i[t]=Rc(r,a);Bt(e,s,f,l)}else o&&(Nc(e,s,o,l),i[t]=void 0)}}const Bi=/(?:Once|Passive|Capture)$/;function Mc(e){let t;if(Bi.test(e)){t={};let r;for(;r=e.match(Bi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tn(e.slice(2)),t]}let Hr=0;const Fc=Promise.resolve(),jc=()=>Hr||(Fc.then(()=>Hr=0),Hr=Date.now());function Rc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ne($c(r,n.value),t,5,[r])};return n.value=e,n.attached=jc(),n}function $c(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Hi=/^on[a-z]/,Dc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Ec(e,r,a):t==="style"?Oc(e,n,r):hr(t)?Ea(t)||Lc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zc(e,t,r,a))?Ic(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Pc(e,t,r,a))};function zc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Hi.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Hi.test(t)&&de(n)?!1:t in e}const it="transition",sn="animation",Va=(e,{slots:t})=>Ka(ls,Bc(e),t);Va.displayName="Transition";const Ps={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Va.props=_e({},ls.props,Ps);const kt=(e,t=[])=>{D(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ui=e=>e?D(e)?e.some(t=>t.length>1):e.length>1:!1;function Bc(e){const t={};for(const L in e)L in Ps||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:f=o,appearToClass:c=s,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=e,T=Hc(a),S=T&&T[0],H=T&&T[1],{onBeforeEnter:_,onEnter:E,onEnterCancelled:A,onLeave:$,onLeaveCancelled:M,onBeforeAppear:X=_,onAppear:F=E,onAppearCancelled:C=A}=t,z=(L,te,pe)=>{At(L,te?c:s),At(L,te?f:o),pe&&pe()},Y=(L,te)=>{L._isLeaving=!1,At(L,m),At(L,b),At(L,p),te&&te()},Q=L=>(te,pe)=>{const ge=L?F:E,ve=()=>z(te,L,pe);kt(ge,[te,ve]),Yi(()=>{At(te,L?l:i),ot(te,L?c:s),Ui(ge)||Wi(te,r,S,ve)})};return _e(t,{onBeforeEnter(L){kt(_,[L]),ot(L,i),ot(L,o)},onBeforeAppear(L){kt(X,[L]),ot(L,l),ot(L,f)},onEnter:Q(!1),onAppear:Q(!0),onLeave(L,te){L._isLeaving=!0;const pe=()=>Y(L,te);ot(L,m),Wc(),ot(L,p),Yi(()=>{L._isLeaving&&(At(L,m),ot(L,b),Ui($)||Wi(L,r,H,pe))}),kt($,[L,pe])},onEnterCancelled(L){z(L,!1),kt(A,[L])},onAppearCancelled(L){z(L,!0),kt(C,[L])},onLeaveCancelled(L){Y(L),kt(M,[L])}})}function Hc(e){if(e==null)return null;if(ie(e))return[Ur(e.enter),Ur(e.leave)];{const t=Ur(e);return[t,t]}}function Ur(e){return Ol(e)}function ot(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function At(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Yi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Uc=0;function Wi(e,t,n,r){const a=e._endId=++Uc,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:s,propCount:l}=Yc(e,t);if(!o)return r();const f=o+"end";let c=0;const m=()=>{e.removeEventListener(f,p),i()},p=b=>{b.target===e&&++c>=l&&m()};setTimeout(()=>{c<l&&m()},s+1),e.addEventListener(f,p)}function Yc(e,t){const n=window.getComputedStyle(e),r=T=>(n[T]||"").split(", "),a=r(`${it}Delay`),i=r(`${it}Duration`),o=Ki(a,i),s=r(`${sn}Delay`),l=r(`${sn}Duration`),f=Ki(s,l);let c=null,m=0,p=0;t===it?o>0&&(c=it,m=o,p=i.length):t===sn?f>0&&(c=sn,m=f,p=l.length):(m=Math.max(o,f),c=m>0?o>f?it:sn:null,p=c?c===it?i.length:l.length:0);const b=c===it&&/\b(transform|all)(,|$)/.test(r(`${it}Property`).toString());return{type:c,timeout:m,propCount:p,hasTransform:b}}function Ki(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Vi(n)+Vi(e[r])))}function Vi(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Wc(){return document.body.offsetHeight}const qi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return D(t)?n=>Gn(t,n):t};function Kc(e){e.target.composing=!0}function Xi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const fa={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=qi(a);const i=r||a.props&&a.props.type==="number";Bt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Xr(s)),e._assign(s)}),n&&Bt(e,"change",()=>{e.value=e.value.trim()}),t||(Bt(e,"compositionstart",Kc),Bt(e,"compositionend",Xi),Bt(e,"change",Xi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=qi(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&Xr(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},Vc={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ln(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),ln(e,!0),r.enter(e)):r.leave(e,()=>{ln(e,!1)}):ln(e,t))},beforeUnmount(e,{value:t}){ln(e,t)}};function ln(e,t){e.style.display=t?e._vod:"none"}const qc=_e({patchProp:Dc},Sc);let Ji;function Xc(){return Ji||(Ji=rc(qc))}const Jc=(...e)=>{const t=Xc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Zc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Zc(e){return de(e)?document.querySelector(e):e}var Qc=!1;/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Is;const Tr=e=>Is=e,Ns=Symbol();function ca(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var gn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(gn||(gn={}));function Gc(){const e=Fo(!0),t=e.run(()=>bt({}));let n=[],r=[];const a=Zt({install(i){Tr(a),a._a=i,i.provide(Ns,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Qc?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const Ls=()=>{};function Zi(e,t,n,r=Ls){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&jo()&&Il(a),a}function Dt(e,...t){e.slice().forEach(n=>{n(...t)})}function ua(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];ca(a)&&ca(r)&&e.hasOwnProperty(n)&&!le(r)&&!ut(r)?e[n]=ua(a,r):e[n]=r}return e}const eu=Symbol();function tu(e){return!ca(e)||!e.hasOwnProperty(eu)}const{assign:ft}=Object;function nu(e){return!!(le(e)&&e.effect)}function ru(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function f(){s||(n.state.value[e]=a?a():{});const c=cf(n.state.value[e]);return ft(c,i,Object.keys(o||{}).reduce((m,p)=>(m[p]=Zt(be(()=>{Tr(n);const b=n._s.get(e);return o[p].call(b,b)})),m),{}))}return l=Ms(e,f,t,n,r,!0),l.$reset=function(){const m=a?a():{};this.$patch(p=>{ft(p,m)})},l}function Ms(e,t,n={},r,a,i){let o;const s=ft({actions:{}},n),l={deep:!0};let f,c,m=Zt([]),p=Zt([]),b;const T=r.state.value[e];!i&&!T&&(r.state.value[e]={}),bt({});let S;function H(F){let C;f=c=!1,typeof F=="function"?(F(r.state.value[e]),C={type:gn.patchFunction,storeId:e,events:b}):(ua(r.state.value[e],F),C={type:gn.patchObject,payload:F,storeId:e,events:b});const z=S=Symbol();es().then(()=>{S===z&&(f=!0)}),c=!0,Dt(m,C,r.state.value[e])}const _=Ls;function E(){o.stop(),m=[],p=[],r._s.delete(e)}function A(F,C){return function(){Tr(r);const z=Array.from(arguments),Y=[],Q=[];function L(ge){Y.push(ge)}function te(ge){Q.push(ge)}Dt(p,{args:z,name:F,store:M,after:L,onError:te});let pe;try{pe=C.apply(this&&this.$id===e?this:M,z)}catch(ge){throw Dt(Q,ge),ge}return pe instanceof Promise?pe.then(ge=>(Dt(Y,ge),ge)).catch(ge=>(Dt(Q,ge),Promise.reject(ge))):(Dt(Y,pe),pe)}}const $={_p:r,$id:e,$onAction:Zi.bind(null,p),$patch:H,$reset:_,$subscribe(F,C={}){const z=Zi(m,F,C.detached,()=>Y()),Y=o.run(()=>Ze(()=>r.state.value[e],Q=>{(C.flush==="sync"?c:f)&&F({storeId:e,type:gn.direct,events:b},Q)},ft({},l,C)));return z},$dispose:E},M=Xt($);r._s.set(e,M);const X=r._e.run(()=>(o=Fo(),o.run(()=>t())));for(const F in X){const C=X[F];if(le(C)&&!nu(C)||ut(C))i||(T&&tu(C)&&(le(C)?C.value=T[F]:ua(C,T[F])),r.state.value[e][F]=C);else if(typeof C=="function"){const z=A(F,C);X[F]=z,s.actions[F]=C}}return ft(M,X),ft(K(M),X),Object.defineProperty(M,"$state",{get:()=>r.state.value[e],set:F=>{H(C=>{ft(C,F)})}}),r._p.forEach(F=>{ft(M,o.run(()=>F({store:M,app:r._a,pinia:r,options:s})))}),T&&i&&n.hydrate&&n.hydrate(M.$state,T),f=!0,c=!0,M}function au(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const f=Wa();return s=s||f&&un(Ns,null),s&&Tr(s),s=Is,s._s.has(r)||(i?Ms(r,t,a,s):ru(r,a,s)),s._s.get(r)}return o.$id=r,o}const iu="modulepreload",ou=function(e){return"/frontend_mid/"+e},Qi={},su=function(t,n,r){if(!n||n.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=ou(i),i in Qi)return;Qi[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!r)for(let c=a.length-1;c>=0;c--){const m=a[c];if(m.href===i&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const f=document.createElement("link");if(f.rel=o?"stylesheet":iu,o||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),o)return new Promise((c,m)=>{f.addEventListener("load",c),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};function lu(e,t,n,r){function a(s,l){return s[n]<l[n]?r==="asc"?-1:1:s[n]>l[n]?r==="asc"?1:-1:0}function i(s,l){return r==="asc"?s[n]-l[n]:l[n]-s[n]}function o(s,l){return r==="asc"?new Date(s[n])-new Date(l[n]):new Date(l[n])-new Date(s[n])}switch(n){case"name":return a(e,t);case"stars":return i(e,t);case"createdAt":return o(e,t)}}function fu(e,t,n,r){return t.sort((i,o)=>o[n]-i[n]).filter((i,o)=>o<=e-1).map(i=>i[n]).includes(r)}let Gi=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,n)=>(n&=63,n<36?t+=n.toString(36):n<62?t+=(n-26).toString(36).toUpperCase():n>62?t+="-":t+="_",t),"");function cu(e){return e.charAt(0).toUpperCase()+e.slice(1)}function uu(e){const t=Date.parse(e);if(isNaN(t))return e;let n={weekday:"long",year:"numeric",month:"long",day:"numeric"};const r=new Intl.DateTimeFormat("it-IT",n).format(t);return cu(r)}function du(e){const t=e.getFullYear(),n=("0"+(e.getMonth()+1)).slice(-2),r=("0"+e.getDate()).slice(-2);return`${t}-${n}-${r}`}function Fs(e,t=!1){let n=i(e),r=bt(n);function a(s,l){const f=JSON.stringify(l);return localStorage.setItem(s,f),f}function i(s){const l=localStorage.getItem(s);return JSON.parse(l)}function o(){localStorage.removeItem(e)}return t&&Ze(t,s=>{localStorage.setItem(e,JSON.stringify(s))},{deep:!0}),{data:r.value,write:a,reset:o}}const jt=au("projects",{state:()=>({projects:[],sortOrder:"",sortBy:"",searchString:"",showOnlyTopThree:!1}),actions:{async fill(){const{data:e,write:t}=Fs("projects",this.$state);if(e)this.$patch(e);else{let n=await su(()=>import("./data-87126363.js"),[]);this.$patch({projects:n.default.map(r=>({...r,id:Gi(),starredFromCurrentUser:!1}))}),t("projects",this.$state)}},setSortOrder(e){this.sortOrder=e},setSortBy(e){this.sortBy=e},setShowOnlyTopThreProjects(e){this.showOnlyTopThree=e},toggleStarToAProject(e,t){this.projects.map(n=>{n.id===e&&(t?n.stars++:n.stars--)})},toggleStarredFromCurrentUser(e,t){this.projects.map(n=>{n.id===e&&(t?n.starredFromCurrentUser=!0:n.starredFromCurrentUser=!1)})},addNewProject(e){this.projects.unshift({...e,stars:0,id:Gi(),createdAt:du(new Date)})}},getters:{projectsSorted(){return this.sortBy?[...this.projectsFiltered].sort((e,t)=>lu(e,t,this.sortBy,this.sortOrder)):this.projectsFiltered},projectsFiltered(){return!this.searchString&&!this.showOnlyTopThree?this.projects:this.projects.filter(e=>{const t=e.name.toLowerCase().includes(this.searchString.toLowerCase()),n=fu(3,[...this.projects],"stars",e.stars);return this.showOnlyTopThree?n:t})}}});const mu={key:0,class:"modal-mask"},pu={class:"modal-container"},hu={class:"modal-footer"},gu={class:"modal-footer-buttons-container"},js={__name:"Modal",props:{show:Boolean,dismissText:String,saveText:String},emits:["dismiss","confirm"],setup(e,{emit:t}){return(n,r)=>(se(),Ke(Va,{name:"modal"},{default:wr(()=>[e.show?(se(),Te("div",mu,[q("div",pu,[q("div",null,[Si(n.$slots,"body",{},()=>[Qt("default body")])]),q("footer",hu,[Si(n.$slots,"footer",{},()=>[q("footer",gu,[q("button",{class:"bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded disabled:bg-gray-400",onClick:r[0]||(r[0]=a=>oe(t)("dismiss"))},Je(e.dismissText?e.dismissText:"Close"),1),q("button",{class:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400",onClick:r[1]||(r[1]=a=>oe(t)("confirm"))},Je(e.saveText?e.saveText:"Save"),1)])])])])])):zt("",!0)]),_:3}))}},vu={class:"mt-6"},bu={class:"flex flex-col gap-4"},yu={class:"flex gap-2"},_u=q("label",{class:"min-w-[30%]"},"Name",-1),xu={class:"flex gap-2"},wu=q("label",{class:"min-w-[30%]"},"Description",-1),ku={__name:"AddProject",setup(e){let t=jt(),n=bt(!1),r=Xt({name:"",description:""});const a=()=>{n.value=!1,r.name="",r.description=""};let i=Xt([]);const o=()=>{const s=r.name.trim()===""?"Attenzione, inserire descrizione progetto":!1,l=r.description.trim()===""?"Attenzione, inserire nome progetto":!1;s||l?(s&&!i.includes(s)&&i.push(s),l&&!i.includes(l)&&i.push(l)):(t.addNewProject(r),n.value=!1),r.name="",r.description=""};return(s,l)=>(se(),Te(xe,null,[q("button",{class:"bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400",onClick:l[0]||(l[0]=f=>le(n)?n.value=!0:n=!0)}," Add new project "),(se(),Ke(As,{to:"body"},[Z(js,{show:oe(n),onDismiss:a,onConfirm:o},{body:wr(()=>[q("form",vu,[q("div",bu,[q("div",yu,[_u,sr(q("input",{class:"flex-1 border-b border-gray-300 p-2 pl-0 pt-0 focus:outline-none focus:border-sky-500",type:"text",placeholder:"Project name...","onUpdate:modelValue":l[1]||(l[1]=f=>oe(r).name=f)},null,512),[[fa,oe(r).name]])]),q("div",xu,[wu,sr(q("textarea",{class:"flex-1 border-b border-gray-300 focus:outline-none focus:border-sky-500",type:"text",placeholder:"Project description...","onUpdate:modelValue":l[2]||(l[2]=f=>oe(r).description=f)},null,512),[[fa,oe(r).description]])])])]),Qt(" "+Je(s.validationError?s.validationError:""),1)]),_:1},8,["show"])]))],64))}},Au={__name:"FilterButton",setup(e){let t=jt(),n=bt(t.showOnlyTopThree),r=()=>n.value=!n.value;Ze(n,o=>{t.setShowOnlyTopThreProjects(o)});const a=be(()=>({"border border border-gray-300 rounded-md pl-8 p-1.5 hover:bg-gray-300":!0,"bg-gray-300":n.value})),i=be(()=>["fa-solid",n.value?"fa-circle-xmark":"fa-ranking-star"]);return(o,s)=>{const l=Cr("font-awesome-icon");return se(),Te("div",{class:"relative cursor-pointer",onClick:s[0]||(s[0]=(...f)=>oe(r)&&oe(r)(...f))},[Z(l,{icon:oe(i),class:"absolute absolute left-[10px] z-10 top-[10px]"},null,8,["icon"]),q("button",{class:qt(oe(a))},Je(oe(n)?"Show all":"Show Only Top 3 Starred"),3)])}}};const Cu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Su={class:"relative max-input-width"},Eu={__name:"FilterSearch",setup(e){let t=jt();return(n,r)=>{const a=Cr("font-awesome-icon");return se(),Te("div",Su,[Z(a,{icon:"fa-solid fa-magnifying-glass",class:"absolute left-[10px] z-10 top-[10px]"}),sr(q("input",{class:"w-full border border-gray-400 rounded-md px-8 py-1",type:"text",name:"search",placeholder:"Search","onUpdate:modelValue":r[0]||(r[0]=i=>oe(t).searchString=i)},null,512),[[fa,oe(t).searchString]]),sr(Z(a,{icon:"fa-solid fa-xmark",class:"absolute right-[10px] z-10 top-[10px] cursor-pointer",onClick:r[1]||(r[1]=i=>oe(t).searchString="")},null,512),[[Vc,oe(t).searchString]])])}}},Ou=Cu(Eu,[["__scopeId","data-v-dd6fe725"]]),Tu={class:"flex gap-5 items-center"},Pu={__name:"FilterBar",setup(e){return(t,n)=>(se(),Te("div",Tu,[Z(Ou),Z(Au)]))}},Yr={__name:"ColumnSort",props:{field:String},setup(e){const t=e;let n=jt(),r=bt(n.sortOrder==="asc"&&n.sortBy===t.field),a=be(()=>["fa-solid",r.value?"fa-sort-up":"",r.value?"":"fa-sort-down"].join(" "));const i=()=>{r.value=!r.value};return Ze(r,o=>{let s=o?"asc":"desc";n.setSortOrder(s),n.setSortBy(t.field)}),(o,s)=>{const l=Cr("font-awesome-icon");return se(),Te("i",null,[Z(l,{onClick:i,icon:oe(a)},null,8,["icon"])])}}},Iu={class:"grid grid-cols-4 gap-y-10 border-b border-gray-300 pb-2"},Nu={class:"text-lg font-bold"},Lu={key:0,class:"text-zinc-400"},Mu={class:"text-center"},Fu={class:"text-right"},ju={key:0,class:"flex justify-end items-baseline"},Ru=q("span",{class:"leading-none"},"Rate",-1),Rs={__name:"ProjectItem",props:{name:String,description:String,"created-at":String,stars:Number,isHeader:Boolean},setup(e){const t=e;let n=Wa().vnode.key,r=jt(),a={flex:t.isHeader,"flex-row":t.isHeader,"justify-between":t.isHeader},i=r.projects.find(c=>c.id===n),o=bt(i==null?void 0:i.starredFromCurrentUser),s=be(()=>o.value?"fa-solid fa-star":"fa-regular fa-star"),l=be(()=>({"flex gap-2 border  rounded-[18px] p-3 hover:bg-gray-200 hover:border-gray-400":!0,"bg-gray-200 border-gray-400":o.value,"bg-transparent border-gray-300":!o.value}));function f(){o.value=!o.value}return Ze(o,c=>{r.toggleStarToAProject(n,c),r.toggleStarredFromCurrentUser(n,c)}),(c,m)=>{const p=Cr("font-awesome-icon");return se(),Te("li",Iu,[q("header",{class:qt(oe(a))},[q("h3",Nu,Je(e.name),1),e.isHeader?zt("",!0):(se(),Te("p",Lu,Je(e.description),1)),e.isHeader?(se(),Ke(Yr,{key:1,field:"name"})):zt("",!0)],2),q("main",Mu,[Qt(Je(e.stars)+" ",1),e.isHeader?(se(),Ke(Yr,{key:0,field:"stars"})):zt("",!0)]),q("footer",Fu,[Qt(Je(oe(uu)(c.createdAt))+" ",1),e.isHeader?(se(),Ke(Yr,{key:0,field:"createdAt"})):zt("",!0)]),e.isHeader?zt("",!0):(se(),Te("aside",ju,[q("button",{class:qt(oe(l)),onClick:f},[Ru,Z(p,{icon:oe(s)},null,8,["icon"])],2)]))])}}},$u={__name:"ProjectHeader",setup(e){return(t,n)=>(se(),Ke(Rs,{"is-Header":"",name:"Nome e descrizione",stars:"Rating","created-at":"Data di creazione"}))}},Du={class:"grid auto-rows-auto gap-y-4"},zu={__name:"ProjectList",setup(e){let t=jt();return(n,r)=>(se(),Te("section",null,[q("ul",Du,[Z($u),(se(!0),Te(xe,null,Uf(oe(t).projectsSorted,a=>(se(),Ke(Rs,{key:a.id,name:a.name,description:a.description,"created-at":a.createdAt,stars:a.stars},null,8,["name","description","created-at","stars"]))),128))])]))}},Bu=q("p",null," Are you sure you want to reset the project to its initial state and reload the page? ",-1),Hu={__name:"ResetProject",setup(e){const{reset:t}=Fs("projects");function n(){t(),location.reload()}let r=bt(!1);const a=()=>{r.value=!1},i=()=>{r.value=!1,n()};return(o,s)=>(se(),Te(xe,null,[q("button",{onClick:s[0]||(s[0]=l=>le(r)?r.value=!0:r=!0),class:"bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded disabled:bg-gray-400 mt-10"}," Reset App "),(se(),Ke(As,{to:"body"},[Z(js,{show:oe(r),onDismiss:a,onConfirm:i,dismissText:"Cancel",saveText:"Confirm"},{body:wr(()=>[Bu,Qt(" "+Je(o.validationError?o.validationError:""),1)]),_:1},8,["show"])]))],64))}},Uu={class:"mb-8 flex items-center justify-between"},Yu=q("h1",{class:"text-3xl mb-2 border-b-4 border-blue-700 inline"},"Projects",-1),Wu={class:"flex gap-6"},Ku={class:"flex justify-end"},Vu={__name:"App",setup(e){return jt().fill(),(n,r)=>(se(),Te(xe,null,[q("header",Uu,[Yu,q("aside",Wu,[Z(Pu),Z(ku)])]),q("main",null,[Z(zu)]),q("footer",Ku,[Z(Hu)])],64))}};function eo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?eo(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):eo(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function cr(e){return cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cr(e)}function qu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function to(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Xu(e,t,n){return t&&to(e.prototype,t),n&&to(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qa(e,t){return Zu(e)||Gu(e,t)||$s(e,t)||td()}function In(e){return Ju(e)||Qu(e)||$s(e)||ed()}function Ju(e){if(Array.isArray(e))return da(e)}function Zu(e){if(Array.isArray(e))return e}function Qu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function $s(e,t){if(e){if(typeof e=="string")return da(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return da(e,t)}}function da(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ed(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function td(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var no=function(){},Xa={},Ds={},zs=null,Bs={mark:no,measure:no};try{typeof window<"u"&&(Xa=window),typeof document<"u"&&(Ds=document),typeof MutationObserver<"u"&&(zs=MutationObserver),typeof performance<"u"&&(Bs=performance)}catch{}var nd=Xa.navigator||{},ro=nd.userAgent,ao=ro===void 0?"":ro,ht=Xa,ae=Ds,io=zs,Un=Bs;ht.document;var rt=!!ae.documentElement&&!!ae.head&&typeof ae.addEventListener=="function"&&typeof ae.createElement=="function",Hs=~ao.indexOf("MSIE")||~ao.indexOf("Trident/"),Yn,Wn,Kn,Vn,qn,Ge="___FONT_AWESOME___",ma=16,Us="fa",Ys="svg-inline--fa",Mt="data-fa-i2svg",pa="data-fa-pseudo-element",rd="data-fa-pseudo-element-pending",Ja="data-prefix",Za="data-icon",oo="fontawesome-i2svg",ad="async",id=["HTML","HEAD","STYLE","SCRIPT"],Ws=function(){try{return!0}catch{return!1}}(),re="classic",ce="sharp",Qa=[re,ce];function Nn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[re]}})}var Sn=Nn((Yn={},he(Yn,re,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),he(Yn,ce,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),Yn)),En=Nn((Wn={},he(Wn,re,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),he(Wn,ce,{solid:"fass",regular:"fasr"}),Wn)),On=Nn((Kn={},he(Kn,re,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),he(Kn,ce,{fass:"fa-solid",fasr:"fa-regular"}),Kn)),od=Nn((Vn={},he(Vn,re,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),he(Vn,ce,{"fa-solid":"fass","fa-regular":"fasr"}),Vn)),sd=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Ks="fa-layers-text",ld=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,fd=Nn((qn={},he(qn,re,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),he(qn,ce,{900:"fass",400:"fasr"}),qn)),Vs=[1,2,3,4,5,6,7,8,9,10],cd=Vs.concat([11,12,13,14,15,16,17,18,19,20]),ud=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Tn=new Set;Object.keys(En[re]).map(Tn.add.bind(Tn));Object.keys(En[ce]).map(Tn.add.bind(Tn));var dd=[].concat(Qa,In(Tn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Pt.GROUP,Pt.SWAP_OPACITY,Pt.PRIMARY,Pt.SECONDARY]).concat(Vs.map(function(e){return"".concat(e,"x")})).concat(cd.map(function(e){return"w-".concat(e)})),vn=ht.FontAwesomeConfig||{};function md(e){var t=ae.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function pd(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ae&&typeof ae.querySelector=="function"){var hd=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];hd.forEach(function(e){var t=qa(e,2),n=t[0],r=t[1],a=pd(md(n));a!=null&&(vn[r]=a)})}var qs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Us,replacementClass:Ys,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};vn.familyPrefix&&(vn.cssPrefix=vn.familyPrefix);var en=P(P({},qs),vn);en.autoReplaceSvg||(en.observeMutations=!1);var N={};Object.keys(qs).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){en[e]=n,bn.forEach(function(r){return r(N)})},get:function(){return en[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(t){en.cssPrefix=t,bn.forEach(function(n){return n(N)})},get:function(){return en.cssPrefix}});ht.FontAwesomeConfig=N;var bn=[];function gd(e){return bn.push(e),function(){bn.splice(bn.indexOf(e),1)}}var st=ma,We={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vd(e){if(!(!e||!rt)){var t=ae.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ae.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ae.head.insertBefore(t,r),e}}var bd="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Pn(){for(var e=12,t="";e-- >0;)t+=bd[Math.random()*62|0];return t}function an(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ga(e){return e.classList?an(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Xs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Xs(e[n]),'" ')},"").trim()}function Pr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ei(e){return e.size!==We.size||e.x!==We.x||e.y!==We.y||e.rotate!==We.rotate||e.flipX||e.flipY}function _d(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function xd(e){var t=e.transform,n=e.width,r=n===void 0?ma:n,a=e.height,i=a===void 0?ma:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Hs?l+="translate(".concat(t.x/st-r/2,"em, ").concat(t.y/st-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/st,"em), calc(-50% + ").concat(t.y/st,"em)) "):l+="translate(".concat(t.x/st,"em, ").concat(t.y/st,"em) "),l+="scale(".concat(t.size/st*(t.flipX?-1:1),", ").concat(t.size/st*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var wd=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Js(){var e=Us,t=Ys,n=N.cssPrefix,r=N.replacementClass,a=wd;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var so=!1;function Wr(){N.autoAddCss&&!so&&(vd(Js()),so=!0)}var kd={mixout:function(){return{dom:{css:Js,insertCss:Wr}}},hooks:function(){return{beforeDOMElementCreation:function(){Wr()},beforeI2svg:function(){Wr()}}}},et=ht||{};et[Ge]||(et[Ge]={});et[Ge].styles||(et[Ge].styles={});et[Ge].hooks||(et[Ge].hooks={});et[Ge].shims||(et[Ge].shims=[]);var $e=et[Ge],Zs=[],Ad=function e(){ae.removeEventListener("DOMContentLoaded",e),ur=1,Zs.map(function(t){return t()})},ur=!1;rt&&(ur=(ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ae.readyState),ur||ae.addEventListener("DOMContentLoaded",Ad));function Cd(e){rt&&(ur?setTimeout(e,0):Zs.push(e))}function Ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Xs(e):"<".concat(t," ").concat(yd(r),">").concat(i.map(Ln).join(""),"</").concat(t,">")}function lo(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Sd=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Kr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Sd(n,a):n,l,f,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)f=i[l],c=s(c,t[f],f,t);return c};function Ed(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ha(e){var t=Ed(e);return t.length===1?t[0].toString(16):null}function Od(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function fo(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ga(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=fo(t);typeof $e.hooks.addPack=="function"&&!a?$e.hooks.addPack(e,fo(t)):$e.styles[e]=P(P({},$e.styles[e]||{}),i),e==="fas"&&ga("fa",t)}var Xn,Jn,Zn,Ht=$e.styles,Td=$e.shims,Pd=(Xn={},he(Xn,re,Object.values(On[re])),he(Xn,ce,Object.values(On[ce])),Xn),ti=null,Qs={},Gs={},el={},tl={},nl={},Id=(Jn={},he(Jn,re,Object.keys(Sn[re])),he(Jn,ce,Object.keys(Sn[ce])),Jn);function Nd(e){return~dd.indexOf(e)}function Ld(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Nd(a)?a:null}var rl=function(){var t=function(i){return Kr(Ht,function(o,s,l){return o[l]=Kr(s,i,{}),o},{})};Qs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Gs=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),nl=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ht||N.autoFetchSvg,r=Kr(Td,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});el=r.names,tl=r.unicodes,ti=Ir(N.styleDefault,{family:N.familyDefault})};gd(function(e){ti=Ir(e.styleDefault,{family:N.familyDefault})});rl();function ni(e,t){return(Qs[e]||{})[t]}function Md(e,t){return(Gs[e]||{})[t]}function It(e,t){return(nl[e]||{})[t]}function al(e){return el[e]||{prefix:null,iconName:null}}function Fd(e){var t=tl[e],n=ni("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return ti}var ri=function(){return{prefix:null,iconName:null,rest:[]}};function Ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?re:n,a=Sn[r][e],i=En[r][e]||En[r][a],o=e in $e.styles?e:null;return i||o||null}var co=(Zn={},he(Zn,re,Object.keys(On[re])),he(Zn,ce,Object.keys(On[ce])),Zn);function Nr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},he(t,re,"".concat(N.cssPrefix,"-").concat(re)),he(t,ce,"".concat(N.cssPrefix,"-").concat(ce)),t),o=null,s=re;(e.includes(i[re])||e.some(function(f){return co[re].includes(f)}))&&(s=re),(e.includes(i[ce])||e.some(function(f){return co[ce].includes(f)}))&&(s=ce);var l=e.reduce(function(f,c){var m=Ld(N.cssPrefix,c);if(Ht[c]?(c=Pd[s].includes(c)?od[s][c]:c,o=c,f.prefix=c):Id[s].indexOf(c)>-1?(o=c,f.prefix=Ir(c,{family:s})):m?f.iconName=m:c!==N.replacementClass&&c!==i[re]&&c!==i[ce]&&f.rest.push(c),!a&&f.prefix&&f.iconName){var p=o==="fa"?al(f.iconName):{},b=It(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||b||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Ht.far&&Ht.fas&&!N.autoFetchSvg&&(f.prefix="fas")}return f},ri());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ce&&(Ht.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=It(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=gt()||"fas"),l}var jd=function(){function e(){qu(this,e),this.definitions={}}return Xu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=P(P({},n.definitions[s]||{}),o[s]),ga(s,o[s]);var l=On[re][s];l&&ga(l,o[s]),rl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,c=f[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),uo=[],Ut={},Vt={},Rd=Object.keys(Vt);function $d(e,t){var n=t.mixoutsTo;return uo=e,Ut={},Object.keys(Vt).forEach(function(r){Rd.indexOf(r)===-1&&delete Vt[r]}),uo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),cr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ut[o]||(Ut[o]=[]),Ut[o].push(i[o])})}r.provides&&r.provides(Vt)}),n}function va(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ut[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Ft(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ut[e]||[];a.forEach(function(i){i.apply(null,n)})}function tt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Vt[e]?Vt[e].apply(null,t):void 0}function ba(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||gt();if(t)return t=It(n,t)||t,lo(il.definitions,n,t)||lo($e.styles,n,t)}var il=new jd,Dd=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,Ft("noAuto")},zd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rt?(Ft("beforeI2svg",t),tt("pseudoElements2svg",t),tt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Cd(function(){Hd({autoReplaceSvgRoot:n}),Ft("watch",t)})}},Bd={icon:function(t){if(t===null)return null;if(cr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:It(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ir(t[0]);return{prefix:r,iconName:It(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.cssPrefix,"-"))>-1||t.match(sd))){var a=Nr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||gt(),iconName:It(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=gt();return{prefix:i,iconName:It(i,t)||t}}}},Pe={noAuto:Dd,config:N,dom:zd,parse:Bd,library:il,findIconDefinition:ba,toHtml:Ln},Hd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ae:n;(Object.keys($e.styles).length>0||N.autoFetchSvg)&&rt&&N.autoReplaceSvg&&Pe.dom.i2svg({node:r})};function Lr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(rt){var r=ae.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ud(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ei(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Pr(P(P({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Yd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},a),{},{id:o}),children:r}]}]}function ai(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,c=e.titleId,m=e.extra,p=e.watchable,b=p===void 0?!1:p,T=r.found?r:n,S=T.width,H=T.height,_=a==="fak",E=[N.replacementClass,i?"".concat(N.cssPrefix,"-").concat(i):""].filter(function(z){return m.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(m.classes).join(" "),A={children:[],attributes:P(P({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(H)})},$=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/H*16*.0625,"em")}:{};b&&(A.attributes[Mt]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||Pn())},children:[l]}),delete A.attributes.title);var M=P(P({},A),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:P(P({},$),m.styles)}),X=r.found&&n.found?tt("generateAbstractMask",M)||{children:[],attributes:{}}:tt("generateAbstractIcon",M)||{children:[],attributes:{}},F=X.children,C=X.attributes;return M.children=F,M.attributes=C,s?Yd(M):Ud(M)}function mo(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=P(P(P({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Mt]="");var c=P({},o.styles);ei(a)&&(c.transform=xd({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var m=Pr(c);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Wd(e){var t=e.content,n=e.title,r=e.extra,a=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Pr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Vr=$e.styles;function ya(e){var t=e[0],n=e[1],r=e.slice(4),a=qa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Pt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Kd={found:!1,width:512,height:512};function Vd(e,t){!Ws&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function _a(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=gt()),new Promise(function(r,a){if(tt("missingIconAbstract"),n==="fa"){var i=al(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Vr[t]&&Vr[t][e]){var o=Vr[t][e];return r(ya(o))}Vd(e,t),r(P(P({},Kd),{},{icon:N.showMissingIcons&&e?tt("missingIconAbstract")||{}:{}}))})}var po=function(){},xa=N.measurePerformance&&Un&&Un.mark&&Un.measure?Un:{mark:po,measure:po},cn='FA "6.3.0"',qd=function(t){return xa.mark("".concat(cn," ").concat(t," begins")),function(){return ol(t)}},ol=function(t){xa.mark("".concat(cn," ").concat(t," ends")),xa.measure("".concat(cn," ").concat(t),"".concat(cn," ").concat(t," begins"),"".concat(cn," ").concat(t," ends"))},ii={begin:qd,end:ol},tr=function(){};function ho(e){var t=e.getAttribute?e.getAttribute(Mt):null;return typeof t=="string"}function Xd(e){var t=e.getAttribute?e.getAttribute(Ja):null,n=e.getAttribute?e.getAttribute(Za):null;return t&&n}function Jd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Zd(){if(N.autoReplaceSvg===!0)return nr.replace;var e=nr[N.autoReplaceSvg];return e||nr.replace}function Qd(e){return ae.createElementNS("http://www.w3.org/2000/svg",e)}function Gd(e){return ae.createElement(e)}function sl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Qd:Gd:n;if(typeof e=="string")return ae.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(sl(o,{ceFn:r}))}),a}function em(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var nr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(sl(a),n)}),n.getAttribute(Mt)===null&&N.keepOriginalSource){var r=ae.createComment(em(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ga(n).indexOf(N.replacementClass))return nr.replace(t);var a=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ln(s)}).join(`
`);n.setAttribute(Mt,""),n.innerHTML=o}};function go(e){e()}function ll(e,t){var n=typeof t=="function"?t:tr;if(e.length===0)n();else{var r=go;N.mutateApproach===ad&&(r=ht.requestAnimationFrame||go),r(function(){var a=Zd(),i=ii.begin("mutate");e.map(a),i(),n()})}}var oi=!1;function fl(){oi=!0}function wa(){oi=!1}var dr=null;function vo(e){if(io&&N.observeMutations){var t=e.treeCallback,n=t===void 0?tr:t,r=e.nodeCallback,a=r===void 0?tr:r,i=e.pseudoElementsCallback,o=i===void 0?tr:i,s=e.observeMutationsRoot,l=s===void 0?ae:s;dr=new io(function(f){if(!oi){var c=gt();an(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ho(m.addedNodes[0])&&(N.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&N.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ho(m.target)&&~ud.indexOf(m.attributeName))if(m.attributeName==="class"&&Xd(m.target)){var p=Nr(Ga(m.target)),b=p.prefix,T=p.iconName;m.target.setAttribute(Ja,b||c),T&&m.target.setAttribute(Za,T)}else Jd(m.target)&&a(m.target)})}}),rt&&dr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function tm(){dr&&dr.disconnect()}function nm(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function rm(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Nr(Ga(e));return a.prefix||(a.prefix=gt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Md(a.prefix,e.innerText)||ni(a.prefix,ha(e.innerText))),!a.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function am(e){var t=an(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Pn()):(t["aria-hidden"]="true",t.focusable="false")),t}function im(){return{iconName:null,title:null,titleId:null,prefix:null,transform:We,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function bo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=rm(e),r=n.iconName,a=n.prefix,i=n.rest,o=am(e),s=va("parseNodeAttributes",{},e),l=t.styleParser?nm(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:We,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var om=$e.styles;function cl(e){var t=N.autoReplaceSvg==="nest"?bo(e,{styleParser:!1}):bo(e);return~t.extra.classes.indexOf(Ks)?tt("generateLayersText",e,t):tt("generateSvgReplacementMutation",e,t)}var vt=new Set;Qa.map(function(e){vt.add("fa-".concat(e))});Object.keys(Sn[re]).map(vt.add.bind(vt));Object.keys(Sn[ce]).map(vt.add.bind(vt));vt=In(vt);function yo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rt)return Promise.resolve();var n=ae.documentElement.classList,r=function(m){return n.add("".concat(oo,"-").concat(m))},a=function(m){return n.remove("".concat(oo,"-").concat(m))},i=N.autoFetchSvg?vt:Qa.map(function(c){return"fa-".concat(c)}).concat(Object.keys(om));i.includes("fa")||i.push("fa");var o=[".".concat(Ks,":not([").concat(Mt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Mt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=an(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ii.begin("onTree"),f=s.reduce(function(c,m){try{var p=cl(m);p&&c.push(p)}catch(b){Ws||b.name==="MissingIcon"&&console.error(b)}return c},[]);return new Promise(function(c,m){Promise.all(f).then(function(p){ll(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),m(p)})})}function sm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cl(e).then(function(n){n&&ll([n],t)})}function lm(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ba(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ba(a||{})),e(r,P(P({},n),{},{mask:a}))}}var fm=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?We:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,c=f===void 0?null:f,m=n.title,p=m===void 0?null:m,b=n.titleId,T=b===void 0?null:b,S=n.classes,H=S===void 0?[]:S,_=n.attributes,E=_===void 0?{}:_,A=n.styles,$=A===void 0?{}:A;if(t){var M=t.prefix,X=t.iconName,F=t.icon;return Lr(P({type:"icon"},t),function(){return Ft("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(p?E["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(T||Pn()):(E["aria-hidden"]="true",E.focusable="false")),ai({icons:{main:ya(F),mask:l?ya(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:X,transform:P(P({},We),a),symbol:o,title:p,maskId:c,titleId:T,extra:{attributes:E,styles:$,classes:H}})})}},cm={mixout:function(){return{icon:lm(fm)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=yo,n.nodeCallback=sm,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ae:r,i=n.callback,o=i===void 0?function(){}:i;return yo(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,c=r.mask,m=r.maskId,p=r.extra;return new Promise(function(b,T){Promise.all([_a(a,s),c.iconName?_a(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var H=qa(S,2),_=H[0],E=H[1];b([n,ai({icons:{main:_,mask:E},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(T)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Pr(s);l.length>0&&(a.style=l);var f;return ei(o)&&(f=tt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},um={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Lr({type:"layer"},function(){Ft("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(In(i)).join(" ")},children:o}]})}}}},dm={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,c=r.styles,m=c===void 0?{}:c;return Lr({type:"counter",content:n},function(){return Ft("beforeDOMElementCreation",{content:n,params:r}),Wd({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(In(s))}})})}}}},mm={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?We:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,c=r.attributes,m=c===void 0?{}:c,p=r.styles,b=p===void 0?{}:p;return Lr({type:"text",content:n},function(){return Ft("beforeDOMElementCreation",{content:n,params:r}),mo({content:n,transform:P(P({},We),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(N.cssPrefix,"-layers-text")].concat(In(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Hs){var f=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/f,l=c.height/f}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,mo({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},pm=new RegExp('"',"ug"),_o=[1105920,1112319];function hm(e){var t=e.replace(pm,""),n=Od(t,0),r=n>=_o[0]&&n<=_o[1],a=t.length===2?t[0]===t[1]:!1;return{value:ha(a?t[0]:t),isSecondary:r||a}}function xo(e,t){var n="".concat(rd).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=an(e.children),o=i.filter(function(F){return F.getAttribute(pa)===t})[0],s=ht.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(ld),f=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ce:re,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?En[p][l[2].toLowerCase()]:fd[p][f],T=hm(m),S=T.value,H=T.isSecondary,_=l[0].startsWith("FontAwesome"),E=ni(b,S),A=E;if(_){var $=Fd(S);$.iconName&&$.prefix&&(E=$.iconName,b=$.prefix)}if(E&&!H&&(!o||o.getAttribute(Ja)!==b||o.getAttribute(Za)!==A)){e.setAttribute(n,A),o&&e.removeChild(o);var M=im(),X=M.extra;X.attributes[pa]=t,_a(E,b).then(function(F){var C=ai(P(P({},M),{},{icons:{main:F,mask:ri()},prefix:b,iconName:A,extra:X,watchable:!0})),z=ae.createElement("svg");t==="::before"?e.insertBefore(z,e.firstChild):e.appendChild(z),z.outerHTML=C.map(function(Y){return Ln(Y)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function gm(e){return Promise.all([xo(e,"::before"),xo(e,"::after")])}function vm(e){return e.parentNode!==document.head&&!~id.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(pa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function wo(e){if(rt)return new Promise(function(t,n){var r=an(e.querySelectorAll("*")).filter(vm).map(gm),a=ii.begin("searchPseudoElements");fl(),Promise.all(r).then(function(){a(),wa(),t()}).catch(function(){a(),wa(),n()})})}var bm={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=wo,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ae:r;N.searchPseudoElements&&wo(a)}}},ko=!1,ym={mixout:function(){return{dom:{unwatch:function(){fl(),ko=!0}}}},hooks:function(){return{bootstrap:function(){vo(va("mutationObserverCallbacks",{}))},noAuto:function(){tm()},watch:function(n){var r=n.observeMutationsRoot;ko?wa():vo(va("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ao=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},_m={mixout:function(){return{parse:{transform:function(n){return Ao(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ao(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:p};return{tag:"g",attributes:P({},b.outer),children:[{tag:"g",attributes:P({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),b.path)}]}]}}}},qr={x:0,y:0,width:"100%",height:"100%"};function Co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function xm(e){return e.tag==="g"?e.children:[e]}var wm={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Nr(a.split(" ").map(function(o){return o.trim()})):ri();return i.prefix||(i.prefix=gt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,c=i.icon,m=o.width,p=o.icon,b=_d({transform:l,containerWidth:m,iconWidth:f}),T={tag:"rect",attributes:P(P({},qr),{},{fill:"white"})},S=c.children?{children:c.children.map(Co)}:{},H={tag:"g",attributes:P({},b.inner),children:[Co(P({tag:c.tag,attributes:P(P({},c.attributes),b.path)},S))]},_={tag:"g",attributes:P({},b.outer),children:[H]},E="mask-".concat(s||Pn()),A="clip-".concat(s||Pn()),$={tag:"mask",attributes:P(P({},qr),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[T,_]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:xm(p)},$]};return r.push(M,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(E,")")},qr)}),{children:r,attributes:a}}}},km={provides:function(t){var n=!1;ht.matchMedia&&(n=ht.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:P(P({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:P(P({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Am={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Cm=[kd,cm,um,dm,mm,bm,ym,_m,wm,km,Am];$d(Cm,{mixoutsTo:Pe});Pe.noAuto;var ul=Pe.config,Sm=Pe.library;Pe.dom;var mr=Pe.parse;Pe.findIconDefinition;Pe.toHtml;var Em=Pe.icon;Pe.layer;var Om=Pe.text;Pe.counter;function So(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?So(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):So(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pr(e){return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pr(e)}function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Tm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Pm(e,t){if(e==null)return{};var n=Tm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ka(e){return Im(e)||Nm(e)||Lm(e)||Mm()}function Im(e){if(Array.isArray(e))return Aa(e)}function Nm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lm(e,t){if(e){if(typeof e=="string")return Aa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Aa(e,t)}}function Aa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Mm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dl={exports:{}};(function(e){(function(t){var n=function(_,E,A){if(!f(E)||m(E)||p(E)||b(E)||l(E))return E;var $,M=0,X=0;if(c(E))for($=[],X=E.length;M<X;M++)$.push(n(_,E[M],A));else{$={};for(var F in E)Object.prototype.hasOwnProperty.call(E,F)&&($[_(F,A)]=n(_,E[F],A))}return $},r=function(_,E){E=E||{};var A=E.separator||"_",$=E.split||/(?=[A-Z])/;return _.split($).join(A)},a=function(_){return T(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(E,A){return A?A.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var E=a(_);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(_,E){return r(_,E).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},f=function(_){return _===Object(_)},c=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},p=function(_){return s.call(_)=="[object RegExp]"},b=function(_){return s.call(_)=="[object Boolean]"},T=function(_){return _=_-0,_===_},S=function(_,E){var A=E&&"process"in E?E.process:E;return typeof A!="function"?_:function($,M){return A($,_,M)}},H={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,E){return n(S(a,E),_)},decamelizeKeys:function(_,E){return n(S(o,E),_,E)},pascalizeKeys:function(_,E){return n(S(i,E),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=H:t.humps=H})(Fm)})(dl);var jm=dl.exports,Rm=["class","style"];function $m(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=jm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Dm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return si(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var c=e.attributes[f];switch(f){case"class":l.class=Dm(c);break;case"style":l.style=$m(c);break;default:l.attrs[f]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Pm(n,Rm);return Ka(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),o)},a.attrs),s),r)}var ml=!1;try{ml=!0}catch{}function zm(){if(!ml&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function yn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ae({},e,t):{}}function Bm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ae(t,"fa-".concat(e.size),e.size!==null),Ae(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Ae(t,"fa-pull-".concat(e.pull),e.pull!==null),Ae(t,"fa-swap-opacity",e.swapOpacity),Ae(t,"fa-bounce",e.bounce),Ae(t,"fa-shake",e.shake),Ae(t,"fa-beat",e.beat),Ae(t,"fa-fade",e.fade),Ae(t,"fa-beat-fade",e.beatFade),Ae(t,"fa-flash",e.flash),Ae(t,"fa-spin-pulse",e.spinPulse),Ae(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Eo(e){if(e&&pr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(mr.icon)return mr.icon(e);if(e===null)return null;if(pr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Hm=za({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=be(function(){return Eo(t.icon)}),i=be(function(){return yn("classes",Bm(t))}),o=be(function(){return yn("transform",typeof t.transform=="string"?mr.transform(t.transform):t.transform)}),s=be(function(){return yn("mask",Eo(t.mask))}),l=be(function(){return Em(a.value,je(je(je(je({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Ze(l,function(c){if(!c)return zm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=be(function(){return l.value?si(l.value.abstract[0],{},r):null});return function(){return f.value}}});za({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ul.familyPrefix,i=be(function(){return["".concat(a,"-layers")].concat(ka(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Ka("div",{class:i.value},r.default?r.default():[])}}});za({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ul.familyPrefix,i=be(function(){return yn("classes",[].concat(ka(t.counter?["".concat(a,"-layers-counter")]:[]),ka(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=be(function(){return yn("transform",typeof t.transform=="string"?mr.transform(t.transform):t.transform)}),s=be(function(){var f=Om(t.value.toString(),je(je({},o.value),i.value)),c=f.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=be(function(){return si(s.value,{},r)});return function(){return l.value}}});var Um={prefix:"fas",iconName:"sort-down",icon:[320,512,["sort-desc"],"f0dd","M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"]},Ym={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Wm={prefix:"fas",iconName:"sort-up",icon:[320,512,["sort-asc"],"f0de","M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},Km={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},Vm={prefix:"fas",iconName:"ranking-star",icon:[640,512,[],"e561","M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"]},qm={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},Xm={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},Jm={prefix:"far",iconName:"star",icon:[576,512,[11088,61446],"f005","M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"]};Sm.add(Um,Wm,Km,Vm,Xm,qm,Jm,Ym);const li=Jc(Vu);li.use(Gc());li.component("font-awesome-icon",Hm);li.mount("#app");
