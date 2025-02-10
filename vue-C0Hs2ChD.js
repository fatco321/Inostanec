import{r as y,a as q,b}from"./@vue-6LQcNTs2.js";var s={exports:{}},a={};/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/var p;function E(){return p||(p=1,function(u){Object.defineProperty(u,"__esModule",{value:!0});var _=q,t=y,n=b;function O(e){var r=Object.create(null);if(e)for(var o in e)r[o]=e[o];return r.default=e,Object.freeze(r)}var h=O(t);const f=Object.create(null);function d(e,r){if(!n.isString(e))if(e.nodeType)e=e.innerHTML;else return n.NOOP;const o=n.genCacheKey(e,r),m=f[o];if(m)return m;if(e[0]==="#"){const i=document.querySelector(e);e=i?i.innerHTML:""}const c=n.extend({hoistStatic:!0,onError:void 0,onWarn:n.NOOP},r);!c.isCustomElement&&typeof customElements<"u"&&(c.isCustomElement=i=>!!customElements.get(i));const{code:j}=_.compile(e,c),l=new Function("Vue",j)(h);return l._rc=!0,f[o]=l}t.registerRuntimeCompiler(d),u.compile=d,Object.keys(t).forEach(function(e){e!=="default"&&!Object.prototype.hasOwnProperty.call(u,e)&&(u[e]=t[e])})}(a)),a}var v;function C(){return v||(v=1,s.exports=E()),s.exports}export{C as r};
//# sourceMappingURL=vue-C0Hs2ChD.js.map
