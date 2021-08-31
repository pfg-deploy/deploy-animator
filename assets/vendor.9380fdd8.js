const e=Symbol("solid-proxy"),t={equals:(e,t)=>e===t};let n=null,i=S;const r={},s={owned:null,cleanups:null,context:null,owner:null};var o=null;let a=null,l=null,c=null,h=null,u=0;function d(e,t){t&&(o=t);const n=a,i=o,r=0===e.length?s:{owned:null,cleanups:null,context:null,owner:i};let l;o=r,a=null;try{T((()=>l=e((()=>N(r)))),!0)}finally{a=n,o=i}return l}function p(e,n){n=n?Object.assign({},t,n):t;const i={value:e,observers:null,observerSlots:null,pending:r,comparator:n.equals||void 0};return[b.bind(i),e=>("function"==typeof e&&(e=e(i.pending!==r?i.pending:i.value)),C(i,e))]}function f(e,t,n){I(k(e,t,!1,1))}function _(e,t,n){i=x;const r=k(e,t,!1,1);r.user=!0,h&&h.push(r)}function g(e,n,i){i=i?Object.assign({},t,i):t;const s=k(e,n,!0,0);return s.pending=r,s.observers=null,s.observerSlots=null,s.comparator=i.equals||void 0,I(s),b.bind(s)}function m(e){if(l)return e();let t;const n=l=[];try{t=e()}finally{l=null}return T((()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==r){const e=t.pending;t.pending=r,C(t,e)}}}),!1),t}function v(e){let t,n=a;return a=null,t=e(),a=n,t}function y(e){return null===o||(null===o.cleanups?o.cleanups=[e]:o.cleanups.push(e)),e}function w(){return a}function b(){if(this.state&&this.sources){const e=c;c=null,1===this.state?I(this):R(this),c=e}if(a){const e=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(e)):(a.sources=[this],a.sourceSlots=[e]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function C(e,t,n){if(e.comparator&&e.comparator(e.value,t))return t;if(l)return e.pending===r&&l.push(e),e.pending=t,t;let i=!1;return e.value=t,e.observers&&e.observers.length&&T((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];i,n.pure?c.push(n):h.push(n),n.observers&&!n.state&&P(n),n.state=1}if(c.length>1e6)throw c=[],new Error}),!1),t}function I(e){if(!e.fn)return;N(e);const t=o,n=a,i=u;a=o=e,function(e,t,n){let i;try{i=e.fn(t)}catch(r){O(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?C(e,i):e.value=i,e.updatedAt=n)}(e,e.value,i),a=n,o=t}function k(e,t,n,i=1,r){const a={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:o,context:null,pure:n};return null===o||o!==s&&(o.owned?o.owned.push(a):o.owned=[a]),a}function E(e){if(1!==e.state)return e.state=0;if(e.suspense&&v(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<u);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(1===(e=t[n]).state)I(e);else if(2===e.state){const t=c;c=null,R(e),c=t}}function T(e,t){if(c)return e();let n=!1;t||(c=[]),h?n=!0:h=[],u++;try{e()}catch(r){O(r)}finally{!function(e){c&&(S(c),c=null);if(e)return;h.length?m((()=>{i(h),h=null})):h=null}(n)}}function S(e){for(let t=0;t<e.length;t++)E(e[t])}function x(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:E(i)}const i=e.length;for(t=0;t<n;t++)E(e[t]);for(t=i;t<e.length;t++)E(e[t])}function R(e){e.state=0;for(let t=0;t<e.sources.length;t+=1){const n=e.sources[t];n.sources&&(1===n.state?E(n):2===n.state&&R(n))}}function P(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.pure?c.push(n):h.push(n),n.observers&&P(n))}}function N(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const e=i.pop(),r=t.observerSlots.pop();n<i.length&&(e.sourceSlots[r]=n,i[n]=e,t.observerSlots[n]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)N(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function O(e){const t=n&&A(o,n);if(!t)throw e;t.forEach((t=>t(e)))}function A(e,t){return e&&(e.context&&e.context[t]||e.owner&&A(e.owner,t))}const D=Symbol("fallback");function M(e){for(let t=0;t<e.length;t++)e[t]()}function L(e,t){return v((()=>e(t)))}function F(e){const t="fallback"in e&&{fallback:()=>e.fallback};return g(function(e,t,n={}){let i=[],r=[],s=[],o=0,a=t.length>1?[]:null;return y((()=>M(s))),()=>{let l,c,h=e()||[];return v((()=>{let e,t,p,f,_,g,m,v,y,w=h.length;if(0===w)0!==o&&(M(s),s=[],i=[],r=[],o=0,a&&(a=[])),n.fallback&&(i=[D],r[0]=d((e=>(s[0]=e,n.fallback()))),o=1);else if(0===o){for(r=new Array(w),c=0;c<w;c++)i[c]=h[c],r[c]=d(u);o=w}else{for(p=new Array(w),f=new Array(w),a&&(_=new Array(w)),g=0,m=Math.min(o,w);g<m&&i[g]===h[g];g++);for(m=o-1,v=w-1;m>=g&&v>=g&&i[m]===h[v];m--,v--)p[v]=r[m],f[v]=s[m],a&&(_[v]=a[m]);for(e=new Map,t=new Array(v+1),c=v;c>=g;c--)y=h[c],l=e.get(y),t[c]=void 0===l?-1:l,e.set(y,c);for(l=g;l<=m;l++)y=i[l],c=e.get(y),void 0!==c&&-1!==c?(p[c]=r[l],f[c]=s[l],a&&(_[c]=a[l]),c=t[c],e.set(y,c)):s[l]();for(c=g;c<w;c++)c in p?(r[c]=p[c],s[c]=f[c],a&&(a[c]=_[c],a[c](c))):r[c]=d(u);r=r.slice(0,o=w),i=h.slice(0)}return r}));function u(e){if(s[c]=e,a){const[e,n]=p(c);return a[c]=n,t(h[c],e)}return t(h[c])}}}((()=>e.each),e.children,t||void 0))}function U(e){const[t,i]=p();let r;return g((()=>{if(null!=(r=t())){const t=e.fallback;return"function"==typeof t&&t.length?v((()=>t(r,(()=>i(null))))):t}var s;return s=i,n||(n=Symbol("error")),null===o||(null===o.context?o.context={[n]:[s]}:o.context[n]?o.context[n].push(s):o.context[n]=[s]),e.children}))}function q(e,t,n){let i=n.length,r=t.length,s=i,o=0,a=0,l=t[r-1].nextSibling,c=null;for(;o<r||a<s;)if(t[o]!==n[a]){for(;t[r-1]===n[s-1];)r--,s--;if(r===o){const t=s<i?a?n[a-1].nextSibling:n[s-a]:l;for(;a<s;)e.insertBefore(n[a++],t)}else if(s===a)for(;o<r;)c&&c.has(t[o])||e.removeChild(t[o]),o++;else if(t[o]===n[s-1]&&n[a]===t[r-1]){const i=t[--r].nextSibling;e.insertBefore(n[a++],t[o++].nextSibling),e.insertBefore(n[--s],i),t[r]=n[s]}else{if(!c){c=new Map;let e=a;for(;e<s;)c.set(n[e],e++)}const i=c.get(t[o]);if(null!=i)if(a<i&&i<s){let l,h=o,u=1;for(;++h<r&&h<s&&null!=(l=c.get(t[h]))&&l===i+u;)u++;if(u>i-a){const r=t[o];for(;a<i;)e.insertBefore(n[a++],r)}else e.replaceChild(n[a++],t[o++])}else o++;else e.removeChild(t[o++])}}else o++,a++}function j(e,t,n){let i;return d((r=>{i=r,H(t,e(),t.firstChild?null:void 0,n)})),()=>{i(),t.textContent=""}}function W(e,t,n){const i=document.createElement("template");i.innerHTML=e;let r=i.content.firstChild;return n&&(r=r.firstChild),r}function z(e,t=window.document){const n=t._$DX_DELEGATE||(t._$DX_DELEGATE=new Set);for(let i=0,r=e.length;i<r;i++){const r=e[i];n.has(r)||(n.add(r),t.addEventListener(r,B))}}function V(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function H(e,t,n,i){if(void 0===n||i||(i=[]),"function"!=typeof t)return G(e,t,i,n);f((i=>G(e,t(),i,n)),i)}function B(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n});null!==n;){const i=n[t];if(i&&!n.disabled){const r=n[`${t}Data`];if(void 0!==r?i(r,e):i(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function G(e,t,n,i,r){for(;"function"==typeof n;)n=n();if(t===n)return n;const s=typeof t,o=void 0!==i;if(e=o&&n[0]&&n[0].parentNode||e,"string"===s||"number"===s)if("number"===s&&(t=t.toString()),o){let r=n[0];r&&3===r.nodeType?r.data=t:r=document.createTextNode(t),n=Y(e,n,i,r)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===s)n=Y(e,n,i);else{if("function"===s)return f((()=>{let r=t();for(;"function"==typeof r;)r=r();n=G(e,r,n,i)})),()=>n;if(Array.isArray(t)){const s=[];if($(s,t,r))return f((()=>n=G(e,s,n,i,!0))),()=>n;if(0===s.length){if(n=Y(e,n,i),o)return n}else Array.isArray(n)?0===n.length?K(e,s,i):q(e,n,s):null==n||""===n?K(e,s):q(e,o&&n||[e.firstChild],s);n=s}else if(t instanceof Node){if(Array.isArray(n)){if(o)return n=Y(e,n,i,t);Y(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}}return n}function $(e,t,n){let i=!1;for(let r=0,s=t.length;r<s;r++){let s,o=t[r];if(o instanceof Node)e.push(o);else if(null==o||!0===o||!1===o);else if(Array.isArray(o))i=$(e,o)||i;else if("string"==(s=typeof o))e.push(document.createTextNode(o));else if("function"===s)if(n){for(;"function"==typeof o;)o=o();i=$(e,Array.isArray(o)?o:[o])||i}else e.push(o),i=!0;else e.push(document.createTextNode(o.toString()))}return i}function K(e,t,n){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function Y(e,t,n,i){if(void 0===n)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let i=!1;for(let s=t.length-1;s>=0;s--){const o=t[s];if(r!==o){const t=o.parentNode===e;i||s?t&&e.removeChild(o):t?e.replaceChild(r,o):e.insertBefore(r,n)}else i=!0}}else e.insertBefore(r,n);return[r]}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var J=function(e,t){return(J=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function Q(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}function X(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{l(i.next(e))}catch(t){s(t)}}function a(e){try{l(i.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((i=i.apply(e,t||[])).next())}))}function Z(e,t){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,i=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1];break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s);break}r[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],i=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function ee(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function te(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,r,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(i=s.next()).done;)o.push(i.value)}catch(a){r={error:a}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}return o}function ne(e,t,n){if(n||2===arguments.length)for(var i,r=0,s=t.length;r<s;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie=!1,re="${JSCORE_VERSION}",se=function(e,t){if(!e)throw oe(t)},oe=function(e){return new Error("Firebase Database ("+re+") INTERNAL ASSERT FAILED: "+e)},ae=function(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},le={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[],r=0;r<e.length;r+=3){var s=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,c=l?e[r+2]:0,h=s>>2,u=(3&s)<<4|a>>4,d=(15&a)<<2|c>>6,p=63&c;l||(p=64,o||(d=64)),i.push(n[h],n[u],n[d],n[p])}return i.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ae(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,i=0;n<e.length;){var r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){var s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){var o=((7&r)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[],r=0;r<e.length;){var s=n[e.charAt(r++)],o=r<e.length?n[e.charAt(r)]:0,a=++r<e.length?n[e.charAt(r)]:64,l=++r<e.length?n[e.charAt(r)]:64;if(++r,null==s||null==o||null==a||null==l)throw Error();var c=s<<2|o>>4;if(i.push(c),64!==a){var h=o<<4&240|a>>2;if(i.push(h),64!==l){var u=a<<6&192|l;i.push(u)}}}return i},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ce=function(e){try{return le.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function he(e){return ue(void 0,e)}function ue(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=ue(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var de=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,i){n?t.reject(n):t.resolve(i),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,i))}},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function fe(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function _e(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function ge(){return!0===ie}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me=function(e){function t(n,i,r){var s=e.call(this,i)||this;return s.code=n,s.customData=r,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,ve.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}J(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),ve=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=t[0]||{},r=this.service+"/"+e,s=this.errors[e],o=s?ye(s,i):"Error",a=this.serviceName+": "+o+" ("+r+").",l=new me(r,a,i);return l},e}();function ye(e,t){return e.replace(we,(function(e,n){var i=t[n];return null!=i?String(i):"<"+n+"?>"}))}var we=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){return JSON.parse(e)}function Ce(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie=function(e){var t={},n={},i={},r="";try{var s=e.split(".");t=be(ce(s[0])||""),n=be(ce(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(o){}return{header:t,claims:n,data:i,signature:r}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ke(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ee(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Te(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Se(e,t,n){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function xe(e,t){if(e===t)return!0;for(var n=Object.keys(e),i=Object.keys(t),r=0,s=n;r<s.length;r++){var o=s[r];if(!i.includes(o))return!1;var a=e[o],l=t[o];if(Re(a)&&Re(l)){if(!xe(a,l))return!1}else if(a!==l)return!1}for(var c=0,h=i;c<h.length;c++){o=h[c];if(!n.includes(o))return!1}return!0}function Re(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},i=0,r=Object.entries(e);i<r.length;i++){var s=r[i];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}function Ne(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=e.split("="),i=n[0],r=n[1];t[decodeURIComponent(i)]=decodeURIComponent(r)}})),t}function Oe(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(i=16;i<80;i++){var r=n[i-3]^n[i-8]^n[i-14]^n[i-16];n[i]=4294967295&(r<<1|r>>>31)}var s,o,a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],h=this.chain_[3],u=this.chain_[4];for(i=0;i<80;i++){i<40?i<20?(s=h^l&(c^h),o=1518500249):(s=l^c^h,o=1859775393):i<60?(s=l&c|h&(l|c),o=2400959708):(s=l^c^h,o=3395469782);r=(a<<5|a>>>27)+s+u+o+n[i]&4294967295;u=h,h=c,c=4294967295&(l<<30|l>>>2),l=a,a=r}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++i,++s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++i,++s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var i=0;for(n=0;n<5;n++)for(var r=24;r>=0;r-=8)e[i]=this.chain_[n]>>r&255,++i;return e},e}();var De=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var i,r=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(i=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,i=t;n<i.length;n++){var r=i[n];if(r in e&&"function"==typeof e[r])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(i.next=Me),void 0===i.error&&(i.error=Me),void 0===i.complete&&(i.complete=Me);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{r.finalError?i.error(r.finalError):i.complete()}catch(e){}})),this.observers.push(i),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(i){"undefined"!=typeof console&&console.error&&console.error(i)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function Me(){}function Le(e,t){return e+" failed: "+t+" argument "}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe=function(e){for(var t=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ue(e){return e&&e._delegate?e._delegate:e}var qe=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),je=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new de;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch(r){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(h){}try{for(var i=ee(this.instancesDeferred.entries()),r=i.next();!r.done;r=i.next()){var s=te(r.value,2),o=s[0],a=s[1],l=this.normalizeInstanceIdentifier(o);try{var c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch(h){}}}catch(u){t={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return X(this,void 0,void 0,(function(){var e;return Z(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(ne(ne([],te(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),te(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e="[DEFAULT]"),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var i=e.options,r=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:r});try{for(var a=ee(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var c=te(l.value,2),h=c[0],u=c[1];s===this.normalizeInstanceIdentifier(h)&&u.resolve(o)}}catch(d){t={error:d}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);var s=this.instances.get(i);return s&&e(s,i),function(){r.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,r=this.onInitCallbacks.get(t);if(r)try{for(var s=ee(r),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(l){}}}catch(c){n={error:c}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,i=e.options,r=void 0===i?{}:i,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:r}),this.instances.set(n,s),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,ze,Ve,He=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new je(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function Be(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var i=Array(e),r=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,r++)i[r]=s[o];return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Ve=ze||(ze={}))[Ve.DEBUG=0]="DEBUG",Ve[Ve.VERBOSE=1]="VERBOSE",Ve[Ve.INFO=2]="INFO",Ve[Ve.WARN=3]="WARN",Ve[Ve.ERROR=4]="ERROR",Ve[Ve.SILENT=5]="SILENT";var Ge={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},$e=ze.INFO,Ke=((We={})[ze.DEBUG]="log",We[ze.VERBOSE]="log",We[ze.INFO]="info",We[ze.WARN]="warn",We[ze.ERROR]="error",We),Ye=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(t<e.logLevel)){var r=(new Date).toISOString(),s=Ke[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,Be(["["+r+"]  "+e.name+":"],n))}},Je=function(){function e(e){this.name=e,this._logLevel=$e,this._logHandler=Ye,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in ze))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?Ge[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Be([this,ze.DEBUG],e)),this._logHandler.apply(this,Be([this,ze.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Be([this,ze.VERBOSE],e)),this._logHandler.apply(this,Be([this,ze.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Be([this,ze.INFO],e)),this._logHandler.apply(this,Be([this,ze.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Be([this,ze.WARN],e)),this._logHandler.apply(this,Be([this,ze.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Be([this,ze.ERROR],e)),this._logHandler.apply(this,Be([this,ze.ERROR],e))},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Xe=new Je("@firebase/app"),Ze={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},et=new Map,tt=new Map;function nt(e,t){try{e.container.addComponent(t)}catch(n){Xe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function it(e){const t=e.name;if(tt.has(t))return Xe.debug(`There were multiple attempts to register component ${t}.`),!1;tt.set(t,e);for(const n of et.values())nt(n,e);return!0}function rt(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new ve("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new qe("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw st.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw st.create("bad-app-name",{appName:String(i)});const r=et.get(i);if(r){if(xe(e,r.options)&&xe(n,r.config))return r;throw st.create("duplicate-app",{appName:i})}const s=new He(i);for(const a of tt.values())s.addComponent(a);const o=new ot(e,n,s);return et.set(i,o),o}function lt(e="[DEFAULT]"){const t=et.get(e);if(!t)throw st.create("no-app",{appName:e});return t}function ct(e,t,n){var i;let r=null!==(i=Ze[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Xe.warn(e.join(" "))}it(new qe(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;it(new qe("platform-logger",(e=>new Qe(e)),"PRIVATE")),ct("@firebase/app","0.7.0",ht),ct("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ct("firebase","9.0.0","app");const ut=new ve("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),dt=new Je("@firebase/auth");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e,...t){dt.logLevel<=ze.ERROR&&dt.error(`Auth (9.0.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(e,...t){throw gt(e,...t)}function _t(e,...t){return gt(e,...t)}function gt(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return ut.create(e,...t)}function mt(e,t,...n){if(!e)throw gt(t,...n)}function vt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw pt(t),new Error(t)}function yt(e,t){e||vt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new Map;function bt(e){yt(e instanceof Function,"Expected a class definition");let t=wt.get(e);return t?(yt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,wt.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ct(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function It(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==It()&&"https:"!==It()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et{constructor(e,t){this.shortDelay=e,this.longDelay=t,yt(t>e,"Short delay should be less than long delay!"),this.isMobile=fe()||_e()}get(){return kt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e,t){yt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"},Rt=new Et(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Nt(e,t,n,i,r={}){return Ot(e,r,(()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=Pe(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(St.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),St.fetch()(Dt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Ot(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},xt),t);try{const t=new Mt(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Lt(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=(r.ok?s.errorMessage:s.error.message).split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw Lt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw Lt(e,"email-already-in-use",s);ft(e,i[t]||t.toLowerCase().replace(/[_\s]+/g,"-"))}}catch(r){if(r instanceof me)throw r;ft(e,"network-request-failed")}}async function At(e,t,n,i,r={}){const s=await Nt(e,t,n,i,r);return"mfaPendingCredential"in s&&ft(e,"multi-factor-auth-required",{serverResponse:s}),s}function Dt(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Tt(e.config,r):`${e.config.apiScheme}://${r}`}class Mt{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(_t(this.auth,"timeout"))),Rt.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Lt(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=_t(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ft(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Ut(e){return 1e3*Number(e)}function qt(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return pt("JWT malformed, contained fewer than 3 sections"),null;try{const e=ce(n);return e?JSON.parse(e):(pt("Failed to decode base64 JWT payload"),null)}catch(r){return pt("Caught error parsing JWT payload as JSON",r),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function jt(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof me&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}class Wt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ft(this.lastLoginAt),this.creationTime=Ft(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e){var t;const n=e.auth,i=await e.getIdToken(),r=await jt(e,async function(e,t){return Nt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));mt(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Q(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const h=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){mt(e.idToken,"internal-error"),mt(void 0!==e.idToken,"internal-error"),mt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=qt(e);return mt(t,"internal-error"),mt(void 0!==t.exp,"internal-error"),mt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return mt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Ot(e,{},(()=>{const n=Pe({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Dt(e,i,"/v1/token",`key=${r}`);return St.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Ht;return n&&(mt("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(mt("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(mt("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ht,this.toJSON())}_performRefresh(){return vt("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e,t){mt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Gt{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Q(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Wt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.metadata=new zt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await jt(this,this.stsTokenManager.getToken(this.auth,e));return mt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ue(e),i=await n.getIdToken(t),r=qt(i);mt(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Ft(Ut(r.auth_time)),issuedAtTime:Ft(Ut(r.iat)),expirationTime:Ft(Ut(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ue(e);await Vt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(mt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){mt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Vt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await jt(this,async function(e,t){return Nt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,l,c;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,_=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,m=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:y,isAnonymous:w,providerData:b,stsTokenManager:C}=t;mt(v&&C,e,"internal-error");const I=Ht.fromJSON(this.name,C);mt("string"==typeof v,e,"internal-error"),Bt(h,e.name),Bt(u,e.name),mt("boolean"==typeof y,e,"internal-error"),mt("boolean"==typeof w,e,"internal-error"),Bt(d,e.name),Bt(p,e.name),Bt(f,e.name),Bt(_,e.name),Bt(g,e.name),Bt(m,e.name);const k=new Gt({uid:v,auth:e,email:u,emailVerified:y,displayName:h,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:I,createdAt:g,lastLoginAt:m});return b&&Array.isArray(b)&&(k.providerData=b.map((e=>Object.assign({},e)))),_&&(k._redirectEventId=_),k}static async _fromIdTokenResponse(e,t,n=!1){const i=new Ht;i.updateFromServerResponse(t);const r=new Gt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Vt(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$t.type="NONE";const Kt=$t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(e,t,n){return`firebase:${e}:${t}:${n}`}class Jt{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Yt(this.userKey,i.apiKey,r),this.fullPersistenceKey=Yt("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Jt(bt(Kt),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||bt(Kt);const s=Yt(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=Gt._fromJSON(e,t);c!==r&&(o=n),r=c;break}}catch(l){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(l){}}))),new Jt(r,e,n)):new Jt(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(tn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Xt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(rn(t))return"Blackberry";if(sn(t))return"Webos";if(Zt(t))return"Safari";if((t.includes("chrome/")||en(t))&&!t.includes("edge/"))return"Chrome";if(nn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Xt(e=pe()){return/firefox\//i.test(e)}function Zt(e=pe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function en(e=pe()){return/crios\//i.test(e)}function tn(e=pe()){return/iemobile/i.test(e)}function nn(e=pe()){return/android/i.test(e)}function rn(e=pe()){return/blackberry/i.test(e)}function sn(e=pe()){return/webos/i.test(e)}function on(e=pe()){return/iphone|ipad|ipod/i.test(e)}function an(){return((e=pe()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function ln(e=pe()){return on(e)||nn(e)||sn(e)||rn(e)||/windows phone/i.test(e)||tn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(e,t=[]){let n;switch(e){case"Browser":n=Qt(pe());break;case"Worker":n=`${Qt(pe())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dn(this),this.idTokenSubscription=new dn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ut,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bt(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await Jt.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(mt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vt(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ue(e):null;return t&&mt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&mt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(bt(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ve("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bt(e)||this._popupRedirectResolver;mt(t,this,"argument-error"),this.redirectPersistenceManager=await Jt.create(this,[bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return mt(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return mt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function un(e){return Ue(e)}class dn{constructor(e){var t,n;this.auth=e,this.observer=null,this.addObserver=(n=new De((e=>this.observer=e),t)).subscribe.bind(n)}get next(){return mt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vt("not implemented")}_getIdTokenResponse(e){return vt("not implemented")}_linkToIdToken(e,t){return vt("not implemented")}_getReauthenticationResolver(e){return vt("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fn extends pn{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new fn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new fn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return At(e,"POST","/v1/accounts:signInWithPassword",Pt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return At(e,"POST","/v1/accounts:signInWithEmailLink",Pt(e,t))}(e,{email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Nt(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return At(e,"POST","/v1/accounts:signInWithEmailLink",Pt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ft(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(e,t){return At(e,"POST","/v1/accounts:signInWithIdp",Pt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends pn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ft("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Q(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new gn(n,i);return Object.assign(s,r),s}_getIdTokenResponse(e){return _n(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,_n(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_n(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pe(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){var t,n,i,r,s,o;const a=Ne(Oe(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);mt(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Ne(Oe(e)).link,n=t?Ne(Oe(t)).deep_link_id:null,i=Ne(Oe(e)).deep_link_id;return(i?Ne(Oe(i)).link:null)||i||n||t||e}(e);try{return new mn(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.providerId=vn.PROVIDER_ID}static credential(e,t){return fn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=mn.parseLink(t);return mt(n,"argument-error"),fn._fromEmailAndCode(e,n.code,n.tenantId)}}vn.PROVIDER_ID="password",vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends yn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends wn{constructor(){super("facebook.com")}static credential(e){return gn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch(t){return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com",bn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn extends wn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Cn.credential(t,n)}catch(i){return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com",Cn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In extends wn{constructor(){super("github.com")}static credential(e){return gn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch(t){return null}}}In.GITHUB_SIGN_IN_METHOD="github.com",In.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn extends wn{constructor(){super("twitter.com")}static credential(e,t){return gn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return kn.credential(t,n)}catch(i){return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com",kn.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Gt._fromIdTokenResponse(e,n,i),s=Tn(n);return new En({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Tn(n);return new En({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Tn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends me{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,Sn.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(r=e.tenantId)&&void 0!==r?r:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,i){return new Sn(e,t,n,i)}}function xn(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Sn._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rn(e,t,n=!1){const i="signIn",r=await xn(e,i,t),s=await En._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Pn(e,t,n){const i=un(e),r=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return At(e,"POST","/v1/accounts:signUp",Pt(e,t))}(i,{returnSecureToken:!0,email:t,password:n}),s=await En._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Nn(e,t,n){return async function(e,t){return Rn(un(e),t)}(Ue(e),vn.credential(t,n))}function On(e,t,n,i){return Ue(e).onAuthStateChanged(t,n,i)}function An(e){return Ue(e).signOut()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Dn{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=pe();return Zt(e)||on(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ln(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);an()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mn.type="LOCAL";const Ln=Mn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Dn{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fn.type="SESSION";const Un=Fn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new qn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jn(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn.receivers=[];class Wn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=jn("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vn(){return void 0!==zn().WorkerGlobalScope&&"function"==typeof zn().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hn="firebaseLocalStorageDb";class Bn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Gn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function $n(){const e=indexedDB.open(Hn,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Hn);return new Bn(e).toPromise()}(),t(await $n()))}))}))}async function Kn(e,t,n){const i=Gn(e,!0).put({fbase_key:t,value:n});return new Bn(i).toPromise()}function Yn(e,t){const n=Gn(e,!0).delete(t);return new Bn(n).toPromise()}class Jn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await $n()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qn._getInstance(Vn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Wn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $n();return await Kn(e,"__sak","1"),await Yn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Kn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Gn(e,!1).get(t),i=await new Bn(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Yn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Gn(e,!1).getAll();return new Bn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Jn.type="LOCAL";const Qn=Jn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(e){return new Promise(((t,n)=>{const i=document.createElement("script");var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=_t("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}new Et(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn extends pn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _n(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _n(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _n(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ei(e){return Rn(e.auth,new Zn(e),e.bypassAuthState)}function ti(e){const{auth:t,user:n}=e;return mt(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await jt(e,xn(i,r,t,e),n);mt(s.idToken,i,"internal-error");const o=qt(s.idToken);mt(o,i,"internal-error");const{sub:a}=o;return mt(e.uid===a,i,"user-mismatch"),En._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&ft(i,"user-mismatch"),s}}(n,new Zn(e),e.bypassAuthState)}async function ni(e){const{auth:t,user:n}=e;return mt(n,t,"internal-error"),async function(e,t,n=!1){const i=await jt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return En._forOperation(e,"link",i)}(n,new Zn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ei;case"linkViaPopup":case"linkViaRedirect":return ni;case"reauthViaPopup":case"reauthViaRedirect":return ti;default:ft(this.auth,"internal-error")}}resolve(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Et(2e3,1e4);class si extends ii{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return mt(e,this.auth,"internal-error"),e}async onExecution(){yt(1===this.filter.length,"Popup operations only handle one event");const e=jn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(_t(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ri.get())};e()}}si.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oi=new Map;class ai extends ii{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Yt("pendingRedirect",e.config.apiKey,e.name)}(t),i="true"===await li(e)._get(n);return await li(e)._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}oi.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function li(e){return bt(e._redirectPersistence)}async function ci(e,t,n=!1){const i=un(e),r=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?bt(t):(mt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(i,t),s=new ai(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return di(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!di(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(_t(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ui(e))}saveEventToCache(e){this.cachedEventUids.add(ui(e)),this.lastProcessedEventTime=Date.now()}}function ui(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function di({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fi=/^https?/;async function _i(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Nt(e,"GET","/v1/projects",t)}(e);for(const i of t)try{if(gi(i))return}catch(n){}ft(e,"unauthorized-domain")}function gi(e){const t=Ct(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!fi.test(n))return!1;if(pi.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new Et(3e4,6e4);function vi(){const e=zn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function yi(e){return new Promise(((t,n)=>{var i,r,s;function o(){vi(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{vi(),n(_t(e,"network-request-failed"))},timeout:mi.get()})}if(null===(r=null===(i=zn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=zn().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return zn()[t]=()=>{gapi.load?o():n(_t(e,"network-request-failed"))},Xn(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw wi=null,e}))}let wi=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bi=new Et(5e3,15e3),Ci={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Ii=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ki(e){const t=e.config;mt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Tt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.0.0"},r=Ii.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Pe(i).slice(1)}`}async function Ei(e){const t=await function(e){return wi=wi||yi(e),wi}(e),n=zn().gapi;return mt(n,e,"internal-error"),t.open({where:document.body,url:ki(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ci,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=_t(e,"network-request-failed"),s=zn().setTimeout((()=>{i(r)}),bi.get());function o(){zn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Si{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function xi(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ti),{width:i.toString(),height:r.toString(),top:s,left:o}),c=pe().toLowerCase();n&&(a=en(c)?"_blank":n),Xt(c)&&(t=t||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=pe()){var t;return on(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Si(null);const u=window.open(t||"",a,h);mt(u,e,"popup-blocked");try{u.focus()}catch(d){}return new Si(u)}function Ri(e,t,n,i,r,s){mt(e.config.authDomain,e,"auth-domain-config-required"),mt(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.0.0",eventId:r};if(t instanceof yn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Te(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof wn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))void 0===a[l]&&delete a[l];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return Tt(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Pe(a).slice(1)}`}const Pi=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Un,this._completeRedirectFn=ci}async _openPopup(e,t,n,i){var r;yt(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return xi(e,Ri(e,t,n,Ct(),i),jn())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Ri(e,t,n,Ct(),i),zn().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(yt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await Ei(e),n=new hi(e);return t.register("authEvent",(t=>{mt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),ft(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_i(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ln()||Zt()||on()}};var Ni;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){mt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ai(e=lt()){const t=rt(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=rt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(xe(n.getOptions(),null!=t?t:{}))return e;ft(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Pi,persistence:[Qn,Ln,Un]})}Ni="Browser",it(new qe("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=n.options;return(e=>{mt(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),mt(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const n={apiKey:i,authDomain:r,clientPlatform:Ni,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cn(Ni)},s=new hn(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(bt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),it(new qe("auth-internal",(e=>{const t=un(e.getProvider("auth").getImmediate());return new Oi(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ct("@firebase/auth","0.17.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ni));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Di="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mi{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:be(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ke(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Mi(t)}}catch(t){}return new Li},Ui=Fi("localStorage"),qi=Fi("sessionStorage"),ji=new Je("@firebase/database"),Wi=function(){let e=1;return function(){return e++}}(),zi=function(e){const t=function(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);if(r>=55296&&r<=56319){var s=r-55296;i++,se(i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(s<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t}(e),n=new Ae;n.update(t);const i=n.digest();return le.encodeByteArray(i)},Vi=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Vi.apply(null,i):t+="object"==typeof i?Ce(i):i,t+=" "}return t};let Hi=null,Bi=!0;const Gi=function(...e){var t,n;if(!0===Bi&&(Bi=!1,null===Hi&&!0===qi.get("logging_enabled")&&(t=!0,se(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(ji.logLevel=ze.VERBOSE,Hi=ji.log.bind(ji),n&&qi.set("logging_enabled",!0)):"function"==typeof t?Hi=t:(Hi=null,qi.remove("logging_enabled")))),Hi){const t=Vi.apply(null,e);Hi(t)}},$i=function(e){return function(...t){Gi(e,...t)}},Ki=function(...e){const t="FIREBASE INTERNAL ERROR: "+Vi(...e);ji.error(t)},Yi=function(...e){const t=`FIREBASE FATAL ERROR: ${Vi(...e)}`;throw ji.error(t),new Error(t)},Ji=function(...e){const t="FIREBASE WARNING: "+Vi(...e);ji.warn(t)},Qi=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Xi="[MIN_NAME]",Zi="[MAX_NAME]",er=function(e,t){if(e===t)return 0;if(e===Xi||t===Zi)return-1;if(t===Xi||e===Zi)return 1;{const n=lr(e),i=lr(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},tr=function(e,t){return e===t?0:e<t?-1:1},nr=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ce(t))},ir=function(e){if("object"!=typeof e||null===e)return Ce(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Ce(t[i]),n+=":",n+=ir(e[t[i]]);return n+="}",n},rr=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function sr(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const or=function(e){se(!Qi(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const ar=new RegExp("^-?(0*)\\d{1,10}$"),lr=function(e){if(ar.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},cr=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw Ji("Exception was thrown by user callback.",e),t}),Math.floor(0))}},hr=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ur{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Ji(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Gi("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ji(e)}}class pr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pr.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ui.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ui.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function gr(e,t,n){let i;if(se("string"==typeof t,"typeof type must == string"),se("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return sr(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.counters_={}}incrementCounter(e,t=1){ke(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return he(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr={},yr={};function wr(e){const t=e.toString();return vr[t]||(vr[t]=new mr),vr[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class br{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&cr((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$i(e),this.stats_=wr(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),gr(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new br(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ir(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&fr.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cr.forceAllow_=!0}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){return!!Cr.forceAllow_||!(Cr.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ce(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(i=ae(t),le.encodeByteArray(i,!0));var i;const r=rr(n,1840);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ce(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ir{constructor(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Wi(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ir.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){Gi("frame writing exception"),r.stack&&Gi(r.stack),Gi(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Gi("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Gi("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr=null;"undefined"!=typeof MozWebSocket?kr=MozWebSocket:"undefined"!=typeof WebSocket&&(kr=WebSocket);class Er{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$i(this.connId),this.stats_=wr(t),this.connURL=Er.connectionURL_(t,s,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const r={v:"5"};return"undefined"!=typeof location&&location.hostname&&fr.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),gr(e,"websocket",r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ui.set("previous_websocket_failure",!0);try{if(ge());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new kr(this.connURL,[],e)}}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Er.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==kr&&!Er.forceDisallow_}static previouslyFailed(){return Ui.isInMemoryStorage||!0===Ui.get("previous_websocket_failure")}markConnectionHealthy(){Ui.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=be(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(se(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Ce(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=rr(t,16384);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Er.responsesRequiredToBeHealthy=2,Er.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Cr,Er]}initTransports_(e){const t=Er&&Er.isAvailable();let n=t&&!Er.previouslyFailed();if(e.webSocketOnly&&(t||Ji("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Er];else{const e=this.transports_=[];for(const t of Tr.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$i("c:"+this.id+":"),this.transportManager_=new Tr(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=hr((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=nr("t",e),n=nr("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=nr("t",e),n=nr("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=nr("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Ki("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ki("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Ji("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),hr((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):hr((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ui.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.allowedEvents_=e,this.listeners_={},se(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){se(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Rr{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||fe()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Pr}getInitialEvent(e){return se("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Or(){return new Nr("")}function Ar(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Dr(e){return e.pieces_.length-e.pieceNum_}function Mr(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Nr(e.pieces_,t)}function Lr(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Fr(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ur(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Nr(t,0)}function qr(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof Nr)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Nr(n,0)}function jr(e){return e.pieceNum_>=e.pieces_.length}function Wr(e,t){const n=Ar(e),i=Ar(t);if(null===n)return t;if(n===i)return Wr(Mr(e),Mr(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function zr(e,t){if(Dr(e)!==Dr(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Vr(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Dr(e)>Dr(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Hr{constructor(e,t){this.errorPrefix_=t,this.parts_=Fr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Fe(this.parts_[n]);Br(this)}}function Br(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Gr(e))}function Gr(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Rr{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new $r}getInitialEvent(e){return se("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends xr{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Kr.nextPersistentConnectionId_++,this.log_=$i("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ge())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$r.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Pr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Ce(r)),se(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new de,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),se(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Kr.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ke(e,"w")){const n=Ee(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Ji(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){var t;(e&&40===e.length||"object"==typeof(t=Ie(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){var t=Ie(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Ki("Unrecognized action received from server: "+Ce(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){se(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Kr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(e){se(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[e,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Gi("getToken() completed but was canceled"):(Gi("getToken() completed. Creating connection."),this.authToken_=e&&e.accessToken,this.appCheckToken_=l&&l.token,a=new Sr(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,(e=>{Ji(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&Ji(e),l())}}}interrupt(e){Gi("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Gi("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Te(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>ir(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Nr(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Gi("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Gi("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+Di.replace(/\./g,"-")]=1,fe()?e["framework.cordova"]=1:_e()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pr.getInstance().currentlyOnline();return Te(this.interruptReasons_)&&e}}Kr.nextPersistentConnectionId_=0,Kr.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Yr(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Yr(Xi,e),i=new Yr(Xi,t);return 0!==this.compare(n,i)}minPost(){return Yr.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qr;class Xr extends Jr{static get __EMPTY_NODE(){return Qr}static set __EMPTY_NODE(e){Qr=e}compare(e,t){return er(e.name,t.name)}isDefinedOn(e){throw oe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Yr.MIN}maxPost(){return new Yr(Zi,Qr)}makePost(e,t){return se("string"==typeof e,"KeyIndex indexValue must always be a string."),new Yr(e,Qr)}toString(){return".key"}}const Zr=new Xr;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ts{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:ts.RED,this.left=null!=i?i:ns.EMPTY_NODE,this.right=null!=r?r:ns.EMPTY_NODE}copy(e,t,n,i,r){return new ts(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ns.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ns.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ts.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ts.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ts.RED=!0,ts.BLACK=!1;class ns{constructor(e,t=ns.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ns(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ts.BLACK,null,null))}remove(e){return new ns(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ts.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new es(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new es(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new es(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new es(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function is(e,t){return er(e.name,t.name)}function rs(e,t){return er(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss;ns.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new ts(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const os=function(e){return"number"==typeof e?"number:"+or(e):"string:"+e},as=function(e){if(e.isLeafNode()){const t=e.val();se("string"==typeof t||"number"==typeof t||"object"==typeof t&&ke(t,".sv"),"Priority must be a string or number.")}else se(e===ss||e.isEmpty(),"priority of unexpected type.");se(e===ss||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ls,cs,hs;class us{constructor(e,t=us.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,se(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),as(this.priorityNode_)}static set __childrenNodeConstructor(e){ls=e}static get __childrenNodeConstructor(){return ls}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new us(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:us.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return jr(e)?this:".priority"===Ar(e)?this.priorityNode_:us.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:us.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Ar(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(se(".priority"!==n||1===Dr(e),".priority must be the last token in a path"),this.updateImmediateChild(n,us.__childrenNodeConstructor.EMPTY_NODE.updateChild(Mr(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+os(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?or(this.value_):this.value_,this.lazyHash_=zi(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===us.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof us.__childrenNodeConstructor?-1:(se(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=us.VALUE_TYPE_ORDER.indexOf(t),r=us.VALUE_TYPE_ORDER.indexOf(n);return se(i>=0,"Unknown leaf type: "+t),se(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}us.VALUE_TYPE_ORDER=["object","boolean","number","string"];const ds=new class extends Jr{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?er(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Yr.MIN}maxPost(){return new Yr(Zi,new us("[PRIORITY-POST]",hs))}makePost(e,t){const n=cs(e);return new Yr(t,new us("[PRIORITY-POST]",n))}toString(){return".priority"}},ps=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/ps,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const _s=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new ts(a,o.node,ts.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),h=r(l+1,i);return o=e[l],a=n?n(o):o,new ts(a,o.node,ts.BLACK,c,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),h=e[s],u=n?n(h):h;l(new ts(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,ts.BLACK):(a(i,ts.BLACK),a(i,ts.RED))}return s}(new fs(e.length));return new ns(i||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs;const ms={};class vs{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return se(ms&&ds,"ChildrenNode.ts has not been loaded"),gs=gs||new vs({".priority":ms},{".priority":ds}),gs}get(e){const t=Ee(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ns?t:null}hasIndex(e){return ke(this.indexSet_,e.toString())}addIndex(e,t){se(e!==Zr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Yr.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?_s(n,e.getCompare()):ms;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new vs(c,l)}addToIndexes(e,t){const n=Se(this.indexes_,((n,i)=>{const r=Ee(this.indexSet_,i);if(se(r,"Missing index implementation for "+i),n===ms){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Yr.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),_s(n,r.getCompare())}return ms}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Yr(e.name,i))),r.insert(e,e.node)}}));return new vs(n,this.indexSet_)}removeFromIndexes(e,t){const n=Se(this.indexes_,(n=>{if(n===ms)return n;{const i=t.get(e.name);return i?n.remove(new Yr(e.name,i)):n}}));return new vs(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys;class ws{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&as(this.priorityNode_),this.children_.isEmpty()&&se(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ys||(ys=new ws(new ns(rs),null,vs.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ys}updatePriority(e){return this.children_.isEmpty()?this:new ws(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?ys:t}}getChild(e){const t=Ar(e);return null===t?this:this.getImmediateChild(t).getChild(Mr(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(se(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Yr(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?ys:this.priorityNode_;return new ws(i,s,r)}}updateChild(e,t){const n=Ar(e);if(null===n)return t;{se(".priority"!==Ar(e)||1===Dr(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Mr(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(ds,((s,o)=>{t[s]=o.val(e),n++,r&&ws.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+os(this.getPriority().val())+":"),this.forEachChild(ds,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":zi(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Yr(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Yr(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Yr(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Yr.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Yr.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bs?-1:0}withIndex(e){if(e===Zr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ws(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Zr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ds),n=t.getIterator(ds);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Zr?null:this.indexMap_.get(e.toString())}}ws.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const bs=new class extends ws{constructor(){super(new ns(rs),ws.EMPTY_NODE,vs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ws.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Yr,{MIN:{value:new Yr(Xi,ws.EMPTY_NODE)},MAX:{value:new Yr(Zi,bs)}}),Xr.__EMPTY_NODE=ws.EMPTY_NODE,us.__childrenNodeConstructor=ws,ss=bs,function(e){hs=e}(bs);function Cs(e,t=null){if(null===e)return ws.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),se(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new us(e,Cs(t))}if(e instanceof Array){let n=ws.EMPTY_NODE;return sr(e,((t,i)=>{if(ke(e,t)&&"."!==t.substring(0,1)){const e=Cs(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Cs(t))}{const n=[];let i=!1;if(sr(e,((e,t)=>{if("."!==e.substring(0,1)){const r=Cs(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Yr(e,r)))}})),0===n.length)return ws.EMPTY_NODE;const r=_s(n,is,(e=>e.name),rs);if(i){const e=_s(n,ds.getCompare());return new ws(r,Cs(t),new vs({".priority":e},{".priority":ds}))}return new ws(r,Cs(t),vs.Default)}}!function(e){cs=e}(Cs);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is extends Jr{constructor(e){super(),this.indexPath_=e,se(!jr(e)&&".priority"!==Ar(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?er(e.name,t.name):r}makePost(e,t){const n=Cs(e),i=ws.EMPTY_NODE.updateChild(this.indexPath_,n);return new Yr(t,i)}maxPost(){const e=ws.EMPTY_NODE.updateChild(this.indexPath_,bs);return new Yr(Zi,e)}toString(){return Fr(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new class extends Jr{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?er(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Yr.MIN}maxPost(){return Yr.MAX}makePost(e,t){const n=Cs(e);return new Yr(t,n)}toString(){return".value"}},Es="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ts=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const s=new Array(8);for(r=7;r>=0;r--)s[r]=Es.charAt(n%64),n=Math.floor(n/64);se(0===n,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)o+=Es.charAt(t[r]);return se(20===o.length,"nextPushId: Length should be 20."),o}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ss(e){return{type:"value",snapshotNode:e}}function xs(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Rs(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ps(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){se(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Rs(t,o)):se(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(xs(t,n)):s.trackChildChange(Ps(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(ds,((e,i)=>{t.hasChild(e)||n.trackChildChange(Rs(e,i))})),t.isLeafNode()||t.forEachChild(ds,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Ps(t,i,r))}else n.trackChildChange(xs(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ws.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.indexedFilter_=new Ns(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Os.getStartPost_(e),this.endPost_=Os.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new Yr(t,n))||(n=ws.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=ws.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(ws.EMPTY_NODE);const r=this;return t.forEachChild(ds,((e,t)=>{r.matches(new Yr(e,t))||(i=i.updateImmediateChild(e,ws.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.rangedFilter_=new Os(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Yr(t,n))||(n=ws.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=ws.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=ws.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(ws.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);a&&o<this.limit_&&r(t,n)<=0?o++:i=i.updateImmediateChild(t.name,ws.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;se(o.numChildren()===this.limit_,"");const a=new Yr(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:s(h,a);if(c&&!n.isEmpty()&&u>=0)return null!=r&&r.trackChildChange(Ps(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Rs(t,e));const n=o.updateImmediateChild(t,ws.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=r&&r.trackChildChange(xs(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=r&&(r.trackChildChange(Rs(l.name,l.node)),r.trackChildChange(xs(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,ws.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ds}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return se(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return se(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xi}hasEnd(){return this.endSet_}getIndexEndValue(){return se(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return se(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return se(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ds}copy(){const e=new Ds;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ms(e){const t={};if(e.isDefault())return t;let n;return e.index_===ds?n="$priority":e.index_===ks?n="$value":e.index_===Zr?n="$key":(se(e.index_ instanceof Is,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ce(n),e.startSet_&&(t.startAt=Ce(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+Ce(e.indexStartName_))),e.endSet_&&(t.endAt=Ce(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+Ce(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Ls(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==ds&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends xr{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=$i("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(se(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Fs.getListenId_(e,n),o={};this.listens_[s]=o;const a=Ms(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),Ee(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Fs.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ms(e._queryParams),n=e._path.toString(),i=new de;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Pe(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=be(o.responseText)}catch(e){Ji("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&Ji("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.rootNode_=ws.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(){return{value:null,children:new Map}}function js(e,t,n){if(jr(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Ar(t);e.children.has(i)||e.children.set(i,qs());js(e.children.get(i),t=Mr(t),n)}}function Ws(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Ws(i,new Nr(t.toString()+"/"+e),n)}))}class zs{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&sr(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new zs(e);const n=1e4+2e4*Math.random();hr(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;sr(e,((e,i)=>{i>0&&ke(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),hr(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hs,Bs;function Gs(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Bs=Hs||(Hs={}))[Bs.OVERWRITE=0]="OVERWRITE",Bs[Bs.MERGE=1]="MERGE",Bs[Bs.ACK_USER_WRITE=2]="ACK_USER_WRITE",Bs[Bs.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class $s{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Hs.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(jr(this.path)){if(null!=this.affectedTree.value)return se(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Nr(e));return new $s(Or(),t,this.revert)}}return se(Ar(this.path)===e,"operationForChild called for unrelated child."),new $s(Mr(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t){this.source=e,this.path=t,this.type=Hs.LISTEN_COMPLETE}operationForChild(e){return jr(this.path)?new Ks(this.source,Or()):new Ks(this.source,Mr(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Hs.OVERWRITE}operationForChild(e){return jr(this.path)?new Ys(this.source,Or(),this.snap.getImmediateChild(e)):new Ys(this.source,Mr(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Hs.MERGE}operationForChild(e){if(jr(this.path)){const t=this.children.subtree(new Nr(e));return t.isEmpty()?null:t.value?new Ys(this.source,Or(),t.value):new Js(this.source,Or(),t)}return se(Ar(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Js(this.source,Mr(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(jr(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ar(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Zs(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw oe("Should only compare child_ events.");const i=new Yr(t.childName,t.snapshotNode),r=new Yr(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function eo(e,t){return{eventCache:e,serverCache:t}}function to(e,t,n,i){return eo(new Qs(t,n,i),e.serverCache)}function no(e,t,n,i){return eo(e.eventCache,new Qs(t,n,i))}function io(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ro(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so;class oo{constructor(e,t=(()=>(so||(so=new ns(tr)),so))()){this.value=e,this.children=t}static fromObject(e){let t=new oo(null);return sr(e,((e,n)=>{t=t.set(new Nr(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Or(),value:this.value};if(jr(e))return null;{const n=Ar(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Mr(e),t);if(null!=r){return{path:qr(new Nr(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(jr(e))return this;{const t=Ar(e),n=this.children.get(t);return null!==n?n.subtree(Mr(e)):new oo(null)}}set(e,t){if(jr(e))return new oo(t,this.children);{const n=Ar(e),i=(this.children.get(n)||new oo(null)).set(Mr(e),t),r=this.children.insert(n,i);return new oo(this.value,r)}}remove(e){if(jr(e))return this.children.isEmpty()?new oo(null):new oo(null,this.children);{const t=Ar(e),n=this.children.get(t);if(n){const i=n.remove(Mr(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new oo(null):new oo(this.value,r)}return this}}get(e){if(jr(e))return this.value;{const t=Ar(e),n=this.children.get(t);return n?n.get(Mr(e)):null}}setTree(e,t){if(jr(e))return t;{const n=Ar(e),i=(this.children.get(n)||new oo(null)).setTree(Mr(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new oo(this.value,r)}}fold(e){return this.fold_(Or(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(qr(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Or(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(jr(e))return null;{const i=Ar(e),r=this.children.get(i);return r?r.findOnPath_(Mr(e),qr(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Or(),t)}foreachOnPath_(e,t,n){if(jr(e))return this;{this.value&&n(t,this.value);const i=Ar(e),r=this.children.get(i);return r?r.foreachOnPath_(Mr(e),qr(t,i),n):new oo(null)}}foreach(e){this.foreach_(Or(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(qr(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.writeTree_=e}static empty(){return new ao(new oo(null))}}function lo(e,t,n){if(jr(t))return new ao(new oo(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=Wr(r,t);return s=s.updateChild(o,n),new ao(e.writeTree_.set(r,s))}{const i=new oo(n),r=e.writeTree_.setTree(t,i);return new ao(r)}}}function co(e,t,n){let i=e;return sr(n,((e,n)=>{i=lo(i,qr(t,e),n)})),i}function ho(e,t){if(jr(t))return ao.empty();{const n=e.writeTree_.setTree(t,new oo(null));return new ao(n)}}function uo(e,t){return null!=po(e,t)}function po(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Wr(n.path,t)):null}function fo(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ds,((e,n)=>{t.push(new Yr(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Yr(e,n.value))})),t}function _o(e,t){if(jr(t))return e;{const n=po(e,t);return new ao(null!=n?new oo(n):e.writeTree_.subtree(t))}}function go(e){return e.writeTree_.isEmpty()}function mo(e,t){return vo(Or(),e.writeTree_,t)}function vo(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(se(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=vo(qr(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(qr(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(e,t){return Oo(t,e)}function wo(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));se(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&bo(t,i.path)?r=!1:Vr(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=Io(e.allWrites,Co,Or()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=ho(e.visibleWrites,i.path);else{sr(i.children,(t=>{e.visibleWrites=ho(e.visibleWrites,qr(i.path,t))}))}return!0}return!1}function bo(e,t){if(e.snap)return Vr(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Vr(qr(e.path,n),t))return!0;return!1}function Co(e){return e.visible}function Io(e,t,n){let i=ao.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Vr(n,e)?(t=Wr(n,e),i=lo(i,t,s.snap)):Vr(e,n)&&(t=Wr(e,n),i=lo(i,Or(),s.snap.getChild(t)));else{if(!s.children)throw oe("WriteRecord should have .snap or .children");if(Vr(n,e))t=Wr(n,e),i=co(i,t,s.children);else if(Vr(e,n))if(t=Wr(e,n),jr(t))i=co(i,Or(),s.children);else{const e=Ee(s.children,Ar(t));if(e){const n=e.getChild(Mr(t));i=lo(i,Or(),n)}}}}}return i}function ko(e,t,n,i,r){if(i||r){const s=_o(e.visibleWrites,t);if(!r&&go(s))return n;if(r||null!=n||uo(s,Or())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Vr(e.path,t)||Vr(t,e.path))};return mo(Io(e.allWrites,s,t),n||ws.EMPTY_NODE)}return null}{const i=po(e.visibleWrites,t);if(null!=i)return i;{const i=_o(e.visibleWrites,t);if(go(i))return n;if(null!=n||uo(i,Or())){return mo(i,n||ws.EMPTY_NODE)}return null}}}function Eo(e,t,n,i){return ko(e.writeTree,e.treePath,t,n,i)}function To(e,t){return function(e,t,n){let i=ws.EMPTY_NODE;const r=po(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(ds,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=_o(e.visibleWrites,t);return n.forEachChild(ds,((e,t)=>{const n=mo(_o(r,new Nr(e)),t);i=i.updateImmediateChild(e,n)})),fo(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return fo(_o(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function So(e,t,n,i){return function(e,t,n,i,r){se(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=qr(t,n);if(uo(e.visibleWrites,s))return null;{const t=_o(e.visibleWrites,s);return go(t)?r.getChild(n):mo(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function xo(e,t){return function(e,t){return po(e.visibleWrites,t)}(e.writeTree,qr(e.treePath,t))}function Ro(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const l=_o(e.visibleWrites,t),c=po(l,Or());if(null!=c)a=c;else{if(null==n)return[];a=mo(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function Po(e,t,n){return function(e,t,n,i){const r=qr(t,n),s=po(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return mo(_o(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function No(e,t){return Oo(qr(e.treePath,t),e.writeTree)}function Oo(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;se("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),se(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Ps(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Rs(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,xs(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw oe("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Ps(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Mo{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Qs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Po(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ro(this.viewCache_),r=Ro(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(e,t,n,i,r){const s=new Ao;let o,a;if(n.type===Hs.OVERWRITE){const l=n;l.source.fromUser?o=qo(e,t,l.path,l.snap,i,r,s):(se(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!jr(l.path),o=Uo(e,t,l.path,l.snap,i,r,a,s))}else if(n.type===Hs.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=qr(n,i);jo(t,Ar(c))&&(a=qo(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=qr(n,i);jo(t,Ar(c))||(a=qo(e,a,c,l,r,s,o))})),a}(e,t,l.path,l.children,i,r,s):(se(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=zo(e,t,l.path,l.children,i,r,a,s))}else if(n.type===Hs.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=xo(i,n))return t;{const a=new Mo(i,t,r),l=t.eventCache.getNode();let c;if(jr(n)||".priority"===Ar(n)){let n;if(t.serverCache.isFullyInitialized())n=Eo(i,ro(t));else{const e=t.serverCache.getNode();se(e instanceof ws,"serverChildren would be complete if leaf node"),n=To(i,e)}n=n,c=e.filter.updateFullNode(l,n,s)}else{const r=Ar(n);let h=Po(i,r,t.serverCache);null==h&&t.serverCache.isCompleteForChild(r)&&(h=l.getImmediateChild(r)),c=null!=h?e.filter.updateChild(l,r,h,Mr(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,ws.EMPTY_NODE,Mr(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Eo(i,ro(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=xo(i,Or()),to(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=xo(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(jr(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Uo(e,t,n,l.getNode().getChild(n),r,s,a,o);if(jr(n)){let i=new oo(null);return l.getNode().forEachChild(Zr,((e,t)=>{i=i.set(new Nr(e),t)})),zo(e,t,n,i,r,s,a,o)}return t}{let c=new oo(null);return i.foreach(((e,t)=>{const i=qr(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),zo(e,t,n,c,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Hs.LISTEN_COMPLETE)throw oe("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=no(t,s.getNode(),s.isFullyInitialized()||jr(n),s.isFiltered());return Fo(e,o,n,i,Do,r)}(e,t,n.path,i,s)}const l=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=io(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Ss(io(t)))}}(t,o,l),{viewCache:o,changes:l}}function Fo(e,t,n,i,r,s){const o=t.eventCache;if(null!=xo(i,n))return t;{let a,l;if(jr(n))if(se(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ro(t),r=To(i,n instanceof ws?n:ws.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=Eo(i,ro(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Ar(n);if(".priority"===c){se(1===Dr(n),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const s=So(i,n,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const h=Mr(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=So(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=Po(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,r,s):o.getNode()}}return to(t,a,o.isFullyInitialized()||jr(n),e.filter.filtersNodes())}}function Uo(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(jr(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=Ar(n);if(!l.isCompleteForPath(n)&&Dr(n)>1)return t;const r=Mr(n),s=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?h.updatePriority(l.getNode(),s):h.updateChild(l.getNode(),e,s,r,Do,null)}const u=no(t,c,l.isFullyInitialized()||jr(n),h.filtersNodes());return Fo(e,u,n,r,new Mo(r,u,s),a)}function qo(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const h=new Mo(r,t,s);if(jr(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=to(t,c,!0,e.filter.filtersNodes());else{const r=Ar(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=to(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=Mr(n),c=a.getNode().getImmediateChild(r);let u;if(jr(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===Lr(s)&&e.getChild(Ur(s)).isEmpty()?e:e.updateChild(s,i):ws.EMPTY_NODE}if(c.equals(u))l=t;else{l=to(t,e.filter.updateChild(a.getNode(),r,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function jo(e,t){return e.eventCache.isCompleteForChild(t)}function Wo(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function zo(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=jr(n)?i:new oo(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=Wo(0,t.serverCache.getNode().getImmediateChild(n),i);c=Uo(e,c,new Nr(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!h.hasChild(n)&&!l){const l=Wo(0,t.serverCache.getNode().getImmediateChild(n),i);c=Uo(e,c,new Nr(n),l,r,s,o,a)}})),c}class Vo{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Ns(n.getIndex()),r=(s=n).loadsAllData()?new Ns(s.getIndex()):s.hasLimit()?new As(s):new Os(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(ws.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(ws.EMPTY_NODE,a.getNode(),null),h=new Qs(l,o.isFullyInitialized(),i.filtersNodes()),u=new Qs(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=eo(u,h),this.eventGenerator_=new Xs(this.query_)}get query(){return this.query_}}function Ho(e,t){const n=ro(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!jr(t)&&!n.getImmediateChild(Ar(t)).isEmpty())?n.getChild(t):null}function Bo(e){return 0===e.eventRegistrations_.length}function Go(e,t,n){const i=[];if(n){se(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function $o(e,t,n,i){t.type===Hs.MERGE&&null!==t.source.queryId&&(se(ro(e.viewCache_),"We should always have a full cache before handling merges"),se(io(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=Lo(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,se(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),se(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),se(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Ko(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Ko(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Zs(e,r,"child_removed",t,i,n),Zs(e,r,"child_added",t,i,n),Zs(e,r,"child_moved",s,i,n),Zs(e,r,"child_changed",t,i,n),Zs(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo,Jo;class Qo{constructor(){this.views=new Map}}function Xo(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return se(null!=s,"SyncTree gave us an op for an invalid query."),$o(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat($o(s,t,n,i));return r}}function Zo(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Eo(n,r?i:null),s=!1;e?s=!0:i instanceof ws?(e=To(n,i),s=!1):(e=ws.EMPTY_NODE,s=!1);const o=eo(new Qs(e,s,!1),new Qs(i,r,!1));return new Vo(t,o)}return o}function ea(e,t,n,i,r,s){const o=Zo(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(ds,((e,t)=>{i.push(xs(e,t))}));return n.isFullyInitialized()&&i.push(Ss(n.getNode())),Ko(e,i,n.getNode(),t)}(o,n)}function ta(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=oa(e);if("default"===r)for(const[l,c]of e.views.entries())o=o.concat(Go(c,n,i)),Bo(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(r);t&&(o=o.concat(Go(t,n,i)),Bo(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!oa(e)&&s.push(new(se(Yo,"Reference.ts has not been loaded"),Yo)(t._repo,t._path)),{removed:s,events:o}}function na(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ia(e,t){let n=null;for(const i of e.views.values())n=n||Ho(i,t);return n}function ra(e,t){if(t._queryParams.loadsAllData())return aa(e);{const n=t._queryIdentifier;return e.views.get(n)}}function sa(e,t){return null!=ra(e,t)}function oa(e){return null!=aa(e)}function aa(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la=1;class ca{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oo(null),this.pendingWriteTree_={visibleWrites:ao.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ha(e,t,n,i,r){return function(e,t,n,i,r){se(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=lo(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?ma(e,new Ys({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ua(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(wo(e.pendingWriteTree_,t)){let t=new oo(null);return null!=i.snap?t=t.set(Or(),!0):sr(i.children,(e=>{t=t.set(new Nr(e),!0)})),ma(e,new $s(i.path,t,n))}return[]}function da(e,t,n){return ma(e,new Ys({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function pa(e,t,n,i){const r=t._path,s=e.syncPointTree_.get(r);let o=[];if(s&&("default"===t._queryIdentifier||sa(s,t))){const a=ta(s,t,n,i);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),h=e.syncPointTree_.findOnPath(r,((e,t)=>oa(t)));if(c&&!h){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&oa(t)){return[aa(t)]}{let e=[];return t&&(e=na(t)),sr(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=wa(e,i);e.listenProvider_.startListening(Ta(r),ba(e,r),s.hashFn,s.onComplete)}}}if(!h&&l.length>0&&!i)if(c){const n=null;e.listenProvider_.stopListening(Ta(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(Ca(t));e.listenProvider_.stopListening(Ta(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Ca(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return o}function fa(e,t,n){const i=t._path;let r=null,s=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=Wr(e,i);r=r||ia(t,n),s=s||oa(t)}));let o,a=e.syncPointTree_.get(i);if(a?(s=s||oa(a),r=r||ia(a,Or())):(a=new Qo,e.syncPointTree_=e.syncPointTree_.set(i,a)),null!=r)o=!0;else{o=!1,r=ws.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild(((e,t)=>{const n=ia(t,Or());n&&(r=r.updateImmediateChild(e,n))}))}const l=sa(a,t);if(!l&&!t._queryParams.loadsAllData()){const n=Ca(t);se(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=la++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let c=ea(a,t,n,yo(e.pendingWriteTree_,i),r,o);if(!l&&!s){const n=ra(a,t);c=c.concat(function(e,t,n){const i=t._path,r=ba(e,t),s=wa(e,n),o=e.listenProvider_.startListening(Ta(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)se(!oa(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!jr(e)&&t&&oa(t))return[aa(t).query];{let e=[];return t&&(e=e.concat(na(t).map((e=>e.query)))),sr(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Ta(i),ba(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return c}function _a(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=ia(n,Wr(e,t));if(i)return i}));return ko(i,t,r,n,!0)}function ga(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const r=Wr(e,n);i=i||ia(t,r)}));let r=e.syncPointTree_.get(n);r?i=i||ia(r,Or()):(r=new Qo,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new Qs(i,!0,!1):null;return function(e){return io(e.viewCache_)}(Zo(r,t,yo(e.pendingWriteTree_,t._path),s?o.getNode():ws.EMPTY_NODE,s))}function ma(e,t){return va(t,e.syncPointTree_,null,yo(e.pendingWriteTree_,Or()))}function va(e,t,n,i){if(jr(e.path))return ya(e,t,n,i);{const r=t.get(Or());null==n&&null!=r&&(n=ia(r,Or()));let s=[];const o=Ar(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=No(i,o);s=s.concat(va(a,l,e,t))}return r&&(s=s.concat(Xo(r,e,i,n))),s}}function ya(e,t,n,i){const r=t.get(Or());null==n&&null!=r&&(n=ia(r,Or()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=No(i,t),l=e.operationForChild(t);l&&(s=s.concat(ya(l,r,o,a)))})),r&&(s=s.concat(Xo(r,e,i,n))),s}function wa(e,t){const n=t.query,i=ba(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||ws.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=Ia(e,n);if(i){const n=ka(i),r=n.path,s=n.queryId,o=Wr(r,t);return Ea(e,r,new Ks(Gs(s),o))}return[]}(e,n._path,i):function(e,t){return ma(e,new Ks({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return pa(e,n,null,i)}}}}function ba(e,t){const n=Ca(t);return e.queryToTagMap.get(n)}function Ca(e){return e._path.toString()+"$"+e._queryIdentifier}function Ia(e,t){return e.tagToQueryMap.get(t)}function ka(e){const t=e.indexOf("$");return se(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Nr(e.substr(0,t))}}function Ea(e,t,n){const i=e.syncPointTree_.get(t);se(i,"Missing sync point for query tag that we're tracking");return Xo(i,n,yo(e.pendingWriteTree_,t),null)}function Ta(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(se(Jo,"Reference.ts has not been loaded"),Jo)(e._repo,e._path):e}class Sa{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Sa(t)}node(){return this.node_}}class xa{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=qr(this.path_,e);return new xa(this.syncTree_,t)}node(){return _a(this.syncTree_,this.path_)}}const Ra=function(e,t,n){return e&&"object"==typeof e?(se(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Pa(e[".sv"],t,n):"object"==typeof e[".sv"]?Na(e[".sv"],t):void se(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Pa=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:se(!1,"Unexpected server value: "+e)}},Na=function(e,t,n){e.hasOwnProperty("increment")||se(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&se(!1,"Unexpected increment value: "+i);const r=t.node();if(se(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},Oa=function(e,t,n){return Aa(e,new Sa(t),n)};function Aa(e,t,n){const i=e.getPriority().val(),r=Ra(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Ra(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new us(s,Cs(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new us(r))),i.forEachChild(ds,((e,i)=>{const r=Aa(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ma(e,t){let n=t instanceof Nr?t:new Nr(t),i=e,r=Ar(n);for(;null!==r;){const e=Ee(i.node.children,r)||{children:{},childCount:0};i=new Da(r,i,e),n=Mr(n),r=Ar(n)}return i}function La(e){return e.node.value}function Fa(e,t){e.node.value=t,za(e)}function Ua(e){return e.node.childCount>0}function qa(e,t){sr(e.node.children,((n,i)=>{t(new Da(n,e,i))}))}function ja(e,t,n,i){n&&!i&&t(e),qa(e,(e=>{ja(e,t,!0,i)})),n&&i&&t(e)}function Wa(e){return new Nr(null===e.parent?e.name:Wa(e.parent)+"/"+e.name)}function za(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===La(e)&&!Ua(e)}(n),r=ke(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,za(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,za(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Va=/[\[\].#$\/\u0000-\u001F\u007F]/,Ha=/[\[\].#$\u0000-\u001F\u007F]/,Ba=function(e){return"string"==typeof e&&0!==e.length&&!Va.test(e)},Ga=function(e){return"string"==typeof e&&0!==e.length&&!Ha.test(e)},$a=function(e,t,n,i){i&&void 0===t||Ka(Le(e,"value"),t,n)},Ka=function(e,t,n){const i=n instanceof Nr?new Hr(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Gr(i));if("function"==typeof t)throw new Error(e+"contains a function "+Gr(i)+" with contents = "+t.toString());if(Qi(t))throw new Error(e+"contains "+t.toString()+" "+Gr(i));if("string"==typeof t&&t.length>10485760/3&&Fe(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Gr(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(sr(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Ba(t)))throw new Error(e+" contains an invalid key ("+t+") "+Gr(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Fe(a),Br(o),Ka(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=Fe(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+Gr(i)+" in addition to actual children.")}},Ya=function(e,t,n,i){if(!(i&&void 0===n||Ga(n)))throw new Error(Le(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ja=function(e,t){if(".info"===Ar(t))throw new Error(e+" failed = Can't modify data under /.info/")},Qa=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ba(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ga(e)}(n))throw new Error(Le(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Za(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||zr(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function el(e,t,n){Za(e,n),nl(e,(e=>zr(e,t)))}function tl(e,t,n){Za(e,n),nl(e,(e=>Vr(e,t)||Vr(t,e)))}function nl(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(il(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function il(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Hi&&Gi("event: "+n.toString()),cr(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Xa,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qs(),this.transactionQueueTree_=new Da,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sl(e,t,n){if(e.stats_=wr(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Fs(e.repoInfo_,((t,n,i,r)=>{ll(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>cl(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Kr(e.repoInfo_,t,((t,n,i,r)=>{ll(e,t,n,i,r)}),(t=>{cl(e,t)}),(t=>{!function(e,t){sr(t,((t,n)=>{hl(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return yr[n]||(yr[n]=t()),yr[n]}(e.repoInfo_,(()=>new Vs(e.stats_,e.server_))),e.infoData_=new Us,e.infoSyncTree_=new ca({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=da(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),hl(e,"connected",!1),e.serverSyncTree_=new ca({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);tl(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function ol(e){const t=e.infoData_.getNode(new Nr(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function al(e){return(t=(t={timestamp:ol(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function ll(e,t,n,i,r){e.dataUpdateCount++;const s=new Nr(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=Se(n,(e=>Cs(e)));o=function(e,t,n,i){const r=Ia(e,i);if(r){const i=ka(r),s=i.path,o=i.queryId,a=Wr(s,t),l=oo.fromObject(n);return Ea(e,s,new Js(Gs(o),a,l))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=Cs(n);o=function(e,t,n,i){const r=Ia(e,i);if(null!=r){const i=ka(r),s=i.path,o=i.queryId,a=Wr(s,t);return Ea(e,s,new Ys(Gs(o),a,n))}return[]}(e.serverSyncTree_,s,t,r)}else if(i){const t=Se(n,(e=>Cs(e)));o=function(e,t,n){const i=oo.fromObject(n);return ma(e,new Js({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=Cs(n);o=da(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=ml(e,s)),tl(e.eventQueue_,a,o)}function cl(e,t){hl(e,"connected",t),!1===t&&function(e){fl(e,"onDisconnectEvents");const t=al(e),n=qs();Ws(e.onDisconnect_,Or(),((i,r)=>{const s=function(e,t,n,i){return Aa(t,new xa(n,e),i)}(i,r,e.serverSyncTree_,t);js(n,i,s)}));let i=[];Ws(n,Or(),((t,n)=>{i=i.concat(da(e.serverSyncTree_,t,n));const r=Cl(e,t);ml(e,r)})),e.onDisconnect_=qs(),tl(e.eventQueue_,Or(),i)}(e)}function hl(e,t,n){const i=new Nr("/.info/"+t),r=Cs(n);e.infoData_.updateSnapshot(i,r);const s=da(e.infoSyncTree_,i,r);tl(e.eventQueue_,i,s)}function ul(e){return e.nextWriteId_++}function dl(e,t,n,i,r){fl(e,"set",{path:t.toString(),value:n,priority:i});const s=al(e),o=Cs(n,i),a=_a(e.serverSyncTree_,t),l=Oa(o,a,s),c=ul(e),h=ha(e.serverSyncTree_,t,l,c,!0);Za(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||Ji("set at "+t+" failed: "+n);const o=ua(e.serverSyncTree_,c,!s);tl(e.eventQueue_,t,o),function(e,t,n,i){t&&cr((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}(0,r,n,i)}));const u=Cl(e,t);ml(e,u),tl(e.eventQueue_,u,[])}function pl(e,t,n){let i;i=".info"===Ar(t._path)?pa(e.infoSyncTree_,t,n):pa(e.serverSyncTree_,t,n),el(e.eventQueue_,t._path,i)}function fl(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Gi(n,...t)}function _l(e,t,n){return _a(e.serverSyncTree_,t,n)||ws.EMPTY_NODE}function gl(e,t=e.transactionQueueTree_){if(t||bl(e,t),La(t)){const n=yl(e,t);se(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=_l(e,t,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const e=n[c];se(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=Wr(t,e.path);s=s.updateChild(i,e.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{fl(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(ua(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();bl(e,Ma(e.transactionQueueTree_,t)),gl(e,e.transactionQueueTree_),tl(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)cr(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Ji("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}ml(e,t)}}),o)}(e,Wa(t),n)}else Ua(t)&&qa(t,(t=>{gl(e,t)}))}function ml(e,t){const n=vl(e,t),i=Wa(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=Wr(n,l.path);let h,u=!1;if(se(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,r=r.concat(ua(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,h="maxretry",r=r.concat(ua(e.serverSyncTree_,l.currentWriteId,!0));else{const n=_l(e,l.path,s);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Ka("transaction failed: Data returned ",i,l.path);let t=Cs(i);"object"==typeof i&&null!=i&&ke(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=al(e),c=Oa(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=ul(e),s.splice(s.indexOf(o),1),r=r.concat(ha(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(ua(e.serverSyncTree_,o,!0))}else u=!0,h="nodata",r=r.concat(ua(e.serverSyncTree_,l.currentWriteId,!0))}tl(e.eventQueue_,n,r),r=[],u&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===h?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(h),!1,null)))))}var o;bl(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)cr(i[a]);gl(e,e.transactionQueueTree_)}(e,yl(e,n),i),i}function vl(e,t){let n,i=e.transactionQueueTree_;for(n=Ar(t);null!==n&&void 0===La(i);)i=Ma(i,n),n=Ar(t=Mr(t));return i}function yl(e,t){const n=[];return wl(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function wl(e,t,n){const i=La(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);qa(t,(t=>{wl(e,t,n)}))}function bl(e,t){const n=La(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Fa(t,n.length>0?n:void 0)}qa(t,(t=>{bl(e,t)}))}function Cl(e,t){const n=Wa(vl(e,t)),i=Ma(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Il(e,t)})),Il(e,i),ja(i,(t=>{Il(e,t)})),n}function Il(e,t){const n=La(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(se(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(se(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(ua(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Fa(t,void 0):n.length=s+1,tl(e.eventQueue_,Wa(t),r);for(let e=0;e<i.length;e++)cr(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=function(e,t){const n=El(e),i=n.namespace;"firebase.com"===n.domain&&Yi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Yi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ji("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new _r(n.host,n.secure,i,t,r,"",i!==n.subdomain),path:new Nr(n.pathString)}},El=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=function(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ji(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tl{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class Sl{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return se(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return jr(this._path)?null:Lr(this._path)}get ref(){return new Pl(this._repo,this._path)}get _queryIdentifier(){const e=Ls(this._queryParams),t=ir(e);return"{}"===t?"default":t}get _queryObject(){return Ls(this._queryParams)}isEqual(e){if(!((e=Ue(e))instanceof Rl))return!1;const t=this._repo===e._repo,n=zr(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Pl extends Rl{constructor(e,t){super(e,t,new Ds,!1)}get parent(){const e=Ur(this._path);return null===e?null:new Pl(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Nl{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Nr(e),n=Al(this.ref,e);return new Nl(this._node.getChild(t),n,ds)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Nl(n,Al(this.ref,t),ds))))}hasChild(e){const t=new Nr(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ol(e,t){return(e=Ue(e))._checkNotDeleted("ref"),void 0!==t?Al(e._root,t):e._root}function Al(e,t){var n,i,r,s;return null===Ar((e=Ue(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Ya(n,i,r,s)):Ya("child","path",t,!1),new Pl(e._repo,qr(e._path,t))}function Dl(e,t){e=Ue(e),Ja("push",e._path),$a("push",t,e._path,!0);const n=ol(e._repo),i=Ts(n),r=Al(e,i),s=Al(e,i);let o;return o=null!=t?Ml(s,t).then((()=>s)):Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function Ml(e,t){e=Ue(e),Ja("set",e._path),$a("set",t,e._path,!1);const n=new de;return dl(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Ll(e){return function(e,t){const n=ga(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then((n=>{const i=Cs(n).withIndex(t._queryParams.getIndex()),r=da(e.serverSyncTree_,t._path,i);return el(e.eventQueue_,t._path,r),Promise.resolve(i)}),(n=>(fl(e,"get for query "+Ce(t)+" failed: "+n),Promise.reject(new Error(n)))))}((e=Ue(e))._repo,e).then((t=>new Nl(t,new Pl(e._repo,e._path),e._queryParams.getIndex())))}class Fl{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Tl("value",this,new Nl(e.snapshotNode,new Pl(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Sl(this,e,t):null}matches(e){return e instanceof Fl&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Ul{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Sl(this,e,t):null}createEvent(e,t){se(null!=e.childName,"Child events should have a childName.");const n=Al(new Pl(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Tl(e.type,this,new Nl(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ul&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function ql(e,t,n,i,r){let s;if("object"==typeof i&&(s=void 0,r=i),"function"==typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{pl(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new xl(n,s||void 0),a="value"===t?new Fl(o):new Ul(t,o);return function(e,t,n){let i;i=".info"===Ar(t._path)?fa(e.infoSyncTree_,t,n):fa(e.serverSyncTree_,t,n),el(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>pl(e._repo,e,a)}function jl(e,t,n,i){return ql(e,"value",t,n,i)}!function(e){se(!Yo,"__referenceConstructor has already been defined"),Yo=e}(Pl),function(e){se(!Jo,"__referenceConstructor has already been defined"),Jo=e}(Pl);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wl={};function zl(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Yi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Gi("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=kl(s,r),c=l.repoInfo;"undefined"!=typeof process&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=kl(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const h=r&&o?new pr(pr.OWNER):new dr(e.name,e.options,t);Qa("Invalid Firebase Database URL",l),jr(l.path)||Yi("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let r=Wl[t.name];r||(r={},Wl[t.name]=r);let s=r[e.toURLString()];s&&Yi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new rl(e,false,n,i),r[e.toURLString()]=s,s}(c,e,h,new ur(e.name,n));return new Vl(u,e)}class Vl{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pl(this._repo,Or())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Wl[t];n&&n[e.key]===e||Yi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Yi("Cannot call "+e+" on a deleted database.")}}function Hl(e=lt(),t){return rt(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bl={".sv":"timestamp"};function Gl(){return Bl}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $l,Kl;Kr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Kr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){Di="9.0.0",it(new qe("database",((e,{instanceIdentifier:t})=>zl(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ct("@firebase/database","0.12.0",e)}(),(Kl=$l||($l={}))[Kl.NO_ERROR=0]="NO_ERROR",Kl[Kl.NETWORK_ERROR=1]="NETWORK_ERROR",Kl[Kl.ABORT=2]="ABORT";class Yl extends me{constructor(e,t){super(Jl(e),`Firebase Storage: ${t} (${Jl(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Yl.prototype)}_codeEquals(e){return Jl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function Jl(e){return"storage/"+e}function Ql(){return new Yl("unknown","An unknown error occurred, please check the error payload for server response.")}function Xl(e){return new Yl("invalid-argument",e)}function Zl(){return new Yl("app-deleted","The Firebase app was deleted.")}function ec(e,t){return new Yl("invalid-format","String does not match format '"+e+"': "+t)}function tc(e){throw new Yl("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=$l.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=$l.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=$l.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,i){if(this.sent_)throw tc("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw tc("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw tc("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw tc("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ic{createConnection(){return new nc}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=rc.makeFromUrl(e,t)}catch(i){return new rc(e,"")}if(""===n.path)return n;throw new Yl("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";const r=new RegExp("^gs://"+i+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:r,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let l=0;l<a.length;l++){const t=a[l],i=t.regex.exec(e);if(i){const e=i[t.indices.bucket];let r=i[t.indices.path];r||(r=""),n=new rc(e,r),t.postModify(n);break}}if(null==n)throw function(e){return new Yl("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class sc{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(e){return"string"==typeof e||e instanceof String}function ac(e){return lc()&&e instanceof Blob}function lc(){return"undefined"!=typeof Blob}function cc(e,t,n,i){if(i<t)throw Xl(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw Xl(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(e,t){const n=t.match(/^(\w+):\/\/.+/);let i=t;return null==(null==n?void 0:n[1])&&(i=`https://${t}`),`${i}/v0${e}`}function uc(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){n=n+(t(i)+"="+t(e[i]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t,n,i,r,s,o,a,l,c,h){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=r.slice(),this.additionalRetryCodes_=s.slice(),this.callback_=o,this.errorCallback_=a,this.progressCallback_=c,this.timeout_=l,this.pool_=h,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=this;function t(t,n){const i=e.resolve_,r=e.reject_,s=n.connection;if(n.wasSuccessCode)try{const t=e.callback_(s,s.getResponseText());void 0!==t?i(t):i()}catch(o){r(o)}else if(null!==s){const t=Ql();t.serverResponse=s.getResponseText(),e.errorCallback_?r(e.errorCallback_(s,t)):r(t)}else if(n.canceled){r(e.appDelete_?Zl():new Yl("canceled","User canceled the upload/download."))}else{r(new Yl("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}}this.canceled_?t(0,new pc(!1,null,!0)):this.backoffId_=function(e,t,n){let i=1,r=null,s=!1,o=0;function a(){return 2===o}let l=!1;function c(...e){l||(l=!0,t.apply(null,e))}function h(t){r=setTimeout((()=>{r=null,e(u,a())}),t)}function u(e,...t){if(l)return;if(e)return void c.call(null,e,...t);if(a()||s)return void c.call(null,e,...t);let n;i<64&&(i*=2),1===o?(o=2,n=0):n=1e3*(i+Math.random()),h(n)}let d=!1;function p(e){d||(d=!0,l||(null!==r?(e||(o=2),clearTimeout(r),h(0)):e||(o=1)))}return h(0),setTimeout((()=>{s=!0,p(!0)}),n),p}((function(t,n){if(n)return void t(!1,new pc(!1,null,!0));const i=e.pool_.createConnection();function r(t){const n=t.loaded,i=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,i)}e.pendingConnection_=i,null!==e.progressCallback_&&i.addUploadProgressListener(r),i.send(e.url_,e.method_,e.body_,e.headers_).then((()=>{null!==e.progressCallback_&&i.removeUploadProgressListener(r),e.pendingConnection_=null;const n=i.getErrorCode()===$l.NO_ERROR,s=i.getStatus();if(!n||e.isRetryStatusCode_(s)){const e=i.getErrorCode()===$l.ABORT;return void t(!1,new pc(!1,null,e))}const o=-1!==e.successCodes_.indexOf(s);t(!0,new pc(o,i))}))}),t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||i}}class pc{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function fc(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(lc())return new Blob(e);throw new Yl("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _c="raw",gc="base64",mc="base64url",vc="data_url";class yc{constructor(e,t){this.data=e,this.contentType=t||null}}function wc(e,t){switch(e){case _c:return new yc(bc(t));case gc:case mc:return new yc(Cc(e,t));case vc:return new yc(function(e){const t=new Ic(e);return t.base64?Cc(gc,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(n){throw ec(vc,"Malformed data URL.")}return bc(t)}(t.rest)}(t),new Ic(t).contentType)}throw Ql()}function bc(e){const t=[];for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i<=127)t.push(i);else if(i<=2047)t.push(192|i>>6,128|63&i);else if(55296==(64512&i)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){i=65536|(1023&i)<<10|1023&e.charCodeAt(++n),t.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else t.push(239,191,189)}else 56320==(64512&i)?t.push(239,191,189):t.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(t)}function Cc(e,t){switch(e){case gc:{const n=-1!==t.indexOf("-"),i=-1!==t.indexOf("_");if(n||i){throw ec(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case mc:{const n=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(n||i){throw ec(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(r){throw ec(e,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class Ic{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw ec(vc,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class kc{constructor(e,t){let n=0,i="";ac(e)?(this.data_=e,n=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(ac(this.data_)){const s=this.data_,o=(i=e,r=t,(n=s).webkitSlice?n.webkitSlice(i,r):n.mozSlice?n.mozSlice(i,r):n.slice?n.slice(i,r):null);return null===o?null:new kc(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new kc(n,!0)}var n,i,r;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}static getBlob(...e){if(lc()){const t=e.map((e=>e instanceof kc?e.data_:e));return new kc(fc.apply(null,t))}{const t=e.map((e=>oc(e)?wc(_c,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const i=new Uint8Array(n);let r=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)i[r++]=e[t]})),new kc(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(e){let t;try{t=JSON.parse(e)}catch(i){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(e,t){return t}class xc{constructor(e,t,n,i){this.server=e,this.local=t||e,this.writable=!!n,this.xform=i||Sc}}let Rc=null;function Pc(){if(Rc)return Rc;const e=[];e.push(new xc("bucket")),e.push(new xc("generation")),e.push(new xc("metageneration")),e.push(new xc("name","fullPath",!0));const t=new xc("name");t.xform=function(e,t){return function(e){return!oc(e)||e.length<2?e:Tc(e)}(t)},e.push(t);const n=new xc("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new xc("timeCreated")),e.push(new xc("updated")),e.push(new xc("md5Hash",null,!0)),e.push(new xc("cacheControl",null,!0)),e.push(new xc("contentDisposition",null,!0)),e.push(new xc("contentEncoding",null,!0)),e.push(new xc("contentLanguage",null,!0)),e.push(new xc("contentType",null,!0)),e.push(new xc("metadata","customMetadata",!0)),Rc=e,Rc}function Nc(e,t,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const e=n[s];i[e.local]=e.xform(i,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,i=e.fullPath,r=new rc(n,i);return t._makeStorageReference(r)}})}(i,e),i}function Oc(e,t,n){const i=Ec(t);if(null===i)return null;return Nc(e,i,n)}class Ac{constructor(e,t,n,i){this.url=e,this.method=t,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(e){if(!e)throw Ql()}function Mc(e,t){return function(n,i){const r=Oc(e,i,t);return Dc(null!==r),function(e,t,n){const i=Ec(t);if(null===i)return null;if(!oc(i.downloadTokens))return null;const r=i.downloadTokens;if(0===r.length)return null;const s=encodeURIComponent;return r.split(",").map((t=>{const i=e.bucket,r=e.fullPath;return hc("/b/"+s(i)+"/o/"+s(r),n)+uc({alt:"media",token:t})}))[0]}(r,i,e.host)}}function Lc(e){return function(t,n){let i;var r,s;return 401===t.getStatus()?i=t.getResponseText().includes("Firebase App Check token is invalid")?new Yl("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new Yl("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,i=new Yl("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(r=e.path,i=new Yl("unauthorized","User does not have permission to access '"+r+"'.")):i=n,i.serverResponse=n.serverResponse,i}}function Fc(e){const t=Lc(e);return function(n,i){let r=t(n,i);var s;return 404===n.getStatus()&&(s=e.path,r=new Yl("object-not-found","Object '"+s+"' does not exist.")),r.serverResponse=i.serverResponse,r}}function Uc(e,t,n,i,r){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const l=function(e,t,n){const i=Object.assign({},n);return i.fullPath=e.path,i.size=t.size(),i.contentType||(i.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),i}(t,i,r),c="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+function(e,t){const n={},i=t.length;for(let r=0;r<i;r++){const i=t[r];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}(l,n)+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",h="\r\n--"+a+"--",u=kc.getBlob(c,i,h);if(null===u)throw new Yl("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.");const d={name:l.fullPath},p=hc(s,e.host),f=e.maxUploadRetryTime,_=new Ac(p,"POST",function(e,t){return function(n,i){const r=Oc(e,i,t);return Dc(null!==r),r}}(e,n),f);return _.urlParams=d,_.headers=o,_.body=u.uploadData(),_.errorHandler=Lc(t),_}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,t){this._service=e,this._location=t instanceof rc?t:rc.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new qc(e,t)}get root(){const e=new rc(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Tc(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new rc(this._location.bucket,e);return new qc(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new Yl("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}async function jc(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const i=hc(t.fullServerUrl(),e.host),r=e.maxOperationRetryTime,s=new Ac(i,"GET",Mc(e,n),r);return s.errorHandler=Fc(t),s}(e.storage,e._location,Pc());return(await e.storage.makeRequestWithTokens(t)).getPromise().then((e=>{if(null===e)throw new Yl("no-download-url","The given file does not have any download URLs.");return e}))}function Wc(e,t){if(e instanceof Hc){const n=e;if(null==n._bucket)throw new Yl("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const i=new qc(n,n._bucket);return null!=t?Wc(i,t):i}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),i=new rc(e._location.bucket,n);return new qc(e.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t):e}function zc(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Hc)return new qc(e,t);throw Xl("To use ref(service, url), the first argument must be a Storage instance.")}return Wc(e,t)}function Vc(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:rc.makeFromBucketSpec(n,e)}class Hc{constructor(e,t,n,i,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._pool=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host="firebasestorage.googleapis.com",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?rc.makeFromBucketSpec(r,this._host):Vc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=rc.makeFromBucketSpec(this._url,e):this._bucket=Vc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){cc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){cc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qc(this,e)}_makeRequest(e,t,n){if(this._deleted)return new sc(Zl());{const i=function(e,t,n,i,r,s){const o=uc(e.urlParams),a=e.url+o,l=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(l,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(l,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(l,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(l,i),new dc(a,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,t,n,this._pool,this._firebaseVersion);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}async makeRequestWithTokens(e){const[t,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bc(e,t,n){return function(e,t,n){e._throwIfRoot("uploadBytes");const i=Uc(e.storage,e._location,Pc(),new kc(t,!0),n);return e.storage.makeRequestWithTokens(i).then((e=>e.getPromise())).then((t=>({metadata:t,ref:e})))}(e=Ue(e),t,n)}function Gc(e){return jc(e=Ue(e))}function $c(e,t){return zc(e=Ue(e),t)}function Kc(e=lt(),t){return rt(e=Ue(e),"storage").getImmediate({identifier:t})}function Yc(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new Hc(n,i,r,new ic,t,"9.0.0")}it(new qe("storage",Yc,"PUBLIC").setMultipleInstances(!0)),ct("@firebase/storage","0.8.0");const Jc=Symbol("store-raw"),Qc=Symbol("store-node"),Xc=Symbol("store-name");function Zc(t,n){let i=t[e];if(!i){Object.defineProperty(t,e,{value:i=new Proxy(t,rh)});const n=Object.keys(t),r=Object.getOwnPropertyDescriptors(t);for(let e=0,s=n.length;e<s;e++){const s=n[e];if(r[s].get){const e=r[s].get.bind(i);Object.defineProperty(t,s,{get:e})}}}return i}function eh(e){return null!=e&&"object"==typeof e&&(!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function th(e,t=new Set){let n,i,r,s;if(n=null!=e&&e[Jc])return n;if(!eh(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let n=0,s=e.length;n<s;n++)r=e[n],(i=th(r,t))!==r&&(e[n]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const n=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let a=0,l=n.length;a<l;a++)s=n[a],o[s].get||(r=e[s],(i=th(r,t))!==r&&(e[s]=i))}return e}function nh(e){let t=e[Qc];return t||Object.defineProperty(e,Qc,{value:t={}}),t}function ih(){const[e,t]=p(void 0,{equals:!1,internal:!0});return e.$=t,e}const rh={get(t,n,i){if(n===Jc)return t;if(n===e)return i;const r=t[n];if(n===Qc||"__proto__"===n)return r;const s=eh(r);if(w()&&("function"!=typeof r||t.hasOwnProperty(n))){let e,i;s&&(e=nh(r))&&(i=e._||(e._=ih()),i()),e=nh(t),i=e[n]||(e[n]=ih()),i()}return s?Zc(r):r},set:()=>!0,deleteProperty:()=>!0,ownKeys:function(e){if(w()){const t=nh(e);(t._||(t._=ih()))()}return Reflect.ownKeys(e)},getOwnPropertyDescriptor:function(t,n){const i=Reflect.getOwnPropertyDescriptor(t,n);return!i||i.get||n===e||n===Qc||n===Xc||(delete i.value,delete i.writable,i.get=()=>t[e][n]),i}};function sh(e,t,n){if(e[t]===n)return;const i=Array.isArray(e),r=e.length,s=void 0===n,o=i||s===t in e;s?delete e[t]:e[t]=n;let a,l=nh(e);(a=l[t])&&a.$(),i&&e.length!==r&&(a=l.length)&&a.$(a,void 0),o&&(a=l._)&&a.$(a,void 0)}function oh(e,t,n=[]){let i,r=e;if(t.length>1){i=t.shift();const s=typeof i,o=Array.isArray(e);if(Array.isArray(i)){for(let r=0;r<i.length;r++)oh(e,[i[r]].concat(t),[i[r]].concat(n));return}if(o&&"function"===s){for(let r=0;r<e.length;r++)i(e[r],r)&&oh(e,[r].concat(t),[r].concat(n));return}if(o&&"object"===s){const{from:r=0,to:s=e.length-1,by:o=1}=i;for(let i=r;i<=s;i+=o)oh(e,[i].concat(t),[i].concat(n));return}if(t.length>1)return void oh(e[i],t,[i].concat(n));r=e[i],n=[i].concat(n)}let s=t[0];"function"==typeof s&&(s=s(r,n),s===r)||void 0===i&&null==s||(s=th(s),void 0===i||eh(r)&&eh(s)&&!Array.isArray(s)?function(e,t){const n=Object.keys(t);for(let i=0;i<n.length;i+=1){const r=n[i];sh(e,r,t[r])}}(r,s):sh(e,i,s))}function ah(e,t){const n=th(e||{});return[Zc(n),function(...e){m((()=>oh(n,e)))}]}function lh(e,t,n,i,r){const s=t[n];if(e===s)return;if(!eh(e)||!eh(s)||r&&e[r]!==s[r])return void(e!==s&&sh(t,n,e));if(Array.isArray(e)){if(e.length&&s.length&&(!i||r&&null!=e[0][r])){let t,n,o,a,l,c,h,u;for(o=0,a=Math.min(s.length,e.length);o<a&&(s[o]===e[o]||r&&s[o][r]===e[o][r]);o++)lh(e[o],s,o,i,r);const d=new Array(e.length),p=new Map;for(a=s.length-1,l=e.length-1;a>=o&&l>=o&&(s[a]===e[l]||r&&s[a][r]===e[l][r]);a--,l--)d[l]=s[a];if(o>l||o>a){for(n=o;n<=l;n++)sh(s,n,e[n]);for(;n<e.length;n++)sh(s,n,d[n]),lh(e[n],s,n,i,r);return void(s.length>e.length&&sh(s,"length",e.length))}for(h=new Array(l+1),n=l;n>=o;n--)c=e[n],u=r?c[r]:c,t=p.get(u),h[n]=void 0===t?-1:t,p.set(u,n);for(t=o;t<=a;t++)c=s[t],u=r?c[r]:c,n=p.get(u),void 0!==n&&-1!==n&&(d[n]=s[t],n=h[n],p.set(u,n));for(n=o;n<e.length;n++)n in d?(sh(s,n,d[n]),lh(e[n],s,n,i,r)):sh(s,n,e[n])}else for(let t=0,n=e.length;t<n;t++)lh(e[t],s,t,i,r);return void(s.length>e.length&&sh(s,"length",e.length))}const o=Object.keys(e);for(let l=0,c=o.length;l<c;l++)lh(e[o[l]],s,o[l],i,r);const a=Object.keys(s);for(let l=0,c=a.length;l<c;l++)void 0===e[a[l]]&&sh(s,a[l],void 0)}function ch(e,t={}){const{merge:n,key:i="id"}=t,r=th(e);return e=>{const t=e;return eh(t)&&eh(r)?(lh(r,{state:t},"state",n,i),t):r}}function hh(e,t){return[e[0]+t[0],e[1]+t[1]]}function uh(e,t){return[e[0]-t[0],e[1]-t[1]]}function dh(e,t){return[t[0]-e[0],t[1]-e[1]]}function ph(e,t){return[e[0]*t,e[1]*t]}function fh(e){return[e[1],-e[0]]}function _h(e,t){return e[0]*t[0]+e[1]*t[1]}function gh(e,t){return function(e){return e[0]*e[0]+e[1]*e[1]}(uh(e,t))}function mh(e){return function(e,t){return[e[0]/t,e[1]/t]}(e,function(e){return Math.hypot(e[0],e[1])}(e))}function vh(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function yh(e,t,n){let i=Math.sin(n),r=Math.cos(n),s=e[0]-t[0],o=e[1]-t[1],a=s*i+o*r;return[s*r-o*i+t[0],a+t[1]]}function wh(e,t,n){return hh(e,ph(dh(e,t),n))}function bh(e,t){return e[0]===t[0]&&e[1]===t[1]}function Ch(e,t,n){return e*(1-n)+t*n}function Ih(e,t,n){return Math.max(t,Math.min(n,e))}function kh(e,t,n,i=.5){return t?(i=Ih(n(i),0,1),(t<0?Ch(e,e+e*Ih(t,-.95,-.05),i):Ch(e-e*Ih(t,.05,.95),e,i))/2):e/2}var{min:Eh,PI:Th}=Math;function Sh(e,t={}){let{streamline:n=.5}=t,{simulatePressure:i=!0}=t;n/=i?4:2;let r=function(e){return Array.isArray(e[0])?e.map((([e,t,n=.5])=>[e,t,n])):e.map((({x:e,y:t,pressure:n=.5})=>[e,t,n]))}(e);if(0===r.length)return[];1===r.length&&r.push([...hh(r[0],[1,1]),r[0][2]]);let s=[{point:[r[0][0],r[0][1]],pressure:r[0][2],vector:[0,0],distance:0,runningLength:0}];for(let o=1,a=0,l=r[o],c=s[a];o<r.length;o++,l=r[o],c=s[a]){let e=wh(c.point,l,1-n);if(bh(c.point,e))continue;let t=mh(uh(c.point,e)),i=vh(e,c.point),r=c.runningLength+i,o={point:e,pressure:l[2],vector:t,distance:i,runningLength:r};s.push(o),a+=1}return s}function xh(e,t={}){let{size:n=8,thinning:i=.5,smoothing:r=.5,simulatePressure:s=!0,easing:o=(e=>e),start:a={},end:l={},last:c=!1}=t,{streamline:h=.5}=t;h/=2;let{cap:u=!0,taper:d=0,easing:p=(e=>e*(2-e))}=a,{cap:f=!0,taper:_=0,easing:g=(e=>--e*e*e+1)}=l,m=e.length;if(0===m)return[];let v=e[m-1].runningLength,y=[],w=[],b=e.slice(0,5).reduce(((e,t)=>(e+t.pressure)/2),e[0].pressure),C=kh(n,i,o,e[m-1].pressure),I=e[0].vector,k=e[0].point,E=k,T=k,S=E,x=!0;for(let D=0;D<m-1;D++){let{pressure:t}=e[D],{point:a,vector:l,distance:c,runningLength:u}=e[D];if(D>0&&x&&u<n/2)continue;if(x&&(x=!1),i){if(s){let e=Eh(1,1-c/n),i=Eh(1,c/n);t=Eh(1,b+i/2*(e-b))}C=kh(n,i,o,t)}else C=n/2;let f=u<d?p(u/d):1,m=v-u<_?g((v-u)/_):1;C=Math.max(.01,C*Math.min(f,m));let R=e[D+1].vector,P=_h(l,R);if(P<0){let e=ph(fh(I),C);for(let t=0;t<1;t+=.2)S=yh(hh(a,e),a,Th*-t),T=yh(uh(a,e),a,Th*t),w.push(S),y.push(T);k=T,E=S;continue}let N=ph(fh(wh(R,l,P)),C);T=uh(a,N),S=hh(a,N);let O=D<2||P<.25,A=Math.pow(Math.max((u>n?n:n/2)*r,1),2);(O||gh(k,T)>A)&&(y.push(wh(k,T,h)),k=T),(O||gh(E,S)>A)&&(w.push(wh(E,S,h)),E=S),b=t,I=l}let R=e[0],P=e[m-1],N=x||w.length<2||y.length<2;if(N&&(!d&&!_||c)){let t=0;for(let a=0;a<m;a++){let{pressure:r,runningLength:s}=e[a];if(s>n){t=kh(n,i,o,r);break}}let r=uh(R.point,ph(fh(mh(dh(P.point,R.point))),t||C)),s=[];for(let e=0,n=.1;e<=1;e+=n)s.push(yh(r,R.point,2*Th*e));return s}let O=[],A=[];if(y.length>1&&w.length>1){S=w[1];for(let t=1;t<y.length;t++)if(!bh(S,y[t])){T=y[t];break}if(u||d){if(d||_&&N)O.push(R.point,hh(R.point,[.1,.1]));else if(!bh(S,T)){let e=uh(R.point,ph(mh(dh(S,T)),vh(S,T)/2));for(let t=0,n=.1;t<=1;t+=n)O.push(yh(e,R.point,Th*t));y.shift(),w.shift()}}else if(!bh(S,T)){let e=mh(dh(S,T)),t=vh(S,T)/2;O.push(uh(R.point,ph(e,.95*t))),O.push(uh(R.point,ph(e,t))),O.push(hh(R.point,ph(e,t))),O.push(hh(R.point,ph(e,.95*t))),y.shift(),w.shift()}let e=function(e,t){return ph(hh(e,t),.5)}(y[y.length-1],w[w.length-1]),n=t.last?P.point:wh(e,P.point,.618),i=mh(uh(n,e));if(f||_)if(_||d&&N)A.push(n);else{let e=hh(n,ph(fh(i),C));for(let t=0,i=.15;t<=1;t+=i)A.push(yh(e,n,3*Th*t))}else{let t=wh(e,n,.95),r=.95*C;A.push(hh(t,ph(fh(i),r))),A.push(hh(n,ph(fh(i),r))),A.push(uh(n,ph(fh(i),r))),A.push(uh(t,ph(fh(i),r)))}}return y.concat(A,w.reverse(),O)}function Rh(e,t={}){return xh(Sh(e,t),t)}
/**
 * splaytree v3.1.0
 * Fast Splay tree for Node and browser
 *
 * @author Alexander Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 */var Ph=function(e,t){this.next=null,this.key=e,this.data=t,this.left=null,this.right=null};function Nh(e,t){return e>t?1:e<t?-1:0}function Oh(e,t,n){for(var i=new Ph(null,null),r=i,s=i;;){var o=n(e,t.key);if(o<0){if(null===t.left)break;if(n(e,t.left.key)<0){var a=t.left;if(t.left=a.right,a.right=t,null===(t=a).left)break}s.left=t,s=t,t=t.left}else{if(!(o>0))break;if(null===t.right)break;if(n(e,t.right.key)>0){a=t.right;if(t.right=a.left,a.left=t,null===(t=a).right)break}r.right=t,r=t,t=t.right}}return r.right=t.left,s.left=t.right,t.left=i.right,t.right=i.left,t}function Ah(e,t,n,i){var r=new Ph(e,t);if(null===n)return r.left=r.right=null,r;var s=i(e,(n=Oh(e,n,i)).key);return s<0?(r.left=n.left,r.right=n,n.left=null):s>=0&&(r.right=n.right,r.left=n,n.right=null),r}function Dh(e,t,n){var i=null,r=null;if(t){var s=n((t=Oh(e,t,n)).key,e);0===s?(i=t.left,r=t.right):s<0?(r=t.right,t.right=null,i=t):(i=t.left,t.left=null,r=t)}return{left:i,right:r}}function Mh(e,t,n,i,r){if(e){i(t+(n?"└── ":"├── ")+r(e)+"\n");var s=t+(n?"    ":"│   ");e.left&&Mh(e.left,s,!1,i,r),e.right&&Mh(e.right,s,!0,i,r)}}var Lh=function(){function e(e){void 0===e&&(e=Nh),this._root=null,this._size=0,this._comparator=e}return e.prototype.insert=function(e,t){return this._size++,this._root=Ah(e,t,this._root,this._comparator)},e.prototype.add=function(e,t){var n=new Ph(e,t);null===this._root&&(n.left=n.right=null,this._size++,this._root=n);var i=this._comparator,r=Oh(e,this._root,i),s=i(e,r.key);return 0===s?this._root=r:(s<0?(n.left=r.left,n.right=r,r.left=null):s>0&&(n.right=r.right,n.left=r,r.right=null),this._size++,this._root=n),this._root},e.prototype.remove=function(e){this._root=this._remove(e,this._root,this._comparator)},e.prototype._remove=function(e,t,n){var i;return null===t?null:0===n(e,(t=Oh(e,t,n)).key)?(null===t.left?i=t.right:(i=Oh(e,t.left,n)).right=t.right,this._size--,i):t},e.prototype.pop=function(){var e=this._root;if(e){for(;e.left;)e=e.left;return this._root=Oh(e.key,this._root,this._comparator),this._root=this._remove(e.key,this._root,this._comparator),{key:e.key,data:e.data}}return null},e.prototype.findStatic=function(e){for(var t=this._root,n=this._comparator;t;){var i=n(e,t.key);if(0===i)return t;t=i<0?t.left:t.right}return null},e.prototype.find=function(e){return this._root&&(this._root=Oh(e,this._root,this._comparator),0!==this._comparator(e,this._root.key))?null:this._root},e.prototype.contains=function(e){for(var t=this._root,n=this._comparator;t;){var i=n(e,t.key);if(0===i)return!0;t=i<0?t.left:t.right}return!1},e.prototype.forEach=function(e,t){for(var n=this._root,i=[],r=!1;!r;)null!==n?(i.push(n),n=n.left):0!==i.length?(n=i.pop(),e.call(t,n),n=n.right):r=!0;return this},e.prototype.range=function(e,t,n,i){for(var r=[],s=this._comparator,o=this._root;0!==r.length||o;)if(o)r.push(o),o=o.left;else{if(s((o=r.pop()).key,t)>0)break;if(s(o.key,e)>=0&&n.call(i,o))return this;o=o.right}return this},e.prototype.keys=function(){var e=[];return this.forEach((function(t){var n=t.key;return e.push(n)})),e},e.prototype.values=function(){var e=[];return this.forEach((function(t){var n=t.data;return e.push(n)})),e},e.prototype.min=function(){return this._root?this.minNode(this._root).key:null},e.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},e.prototype.minNode=function(e){if(void 0===e&&(e=this._root),e)for(;e.left;)e=e.left;return e},e.prototype.maxNode=function(e){if(void 0===e&&(e=this._root),e)for(;e.right;)e=e.right;return e},e.prototype.at=function(e){for(var t=this._root,n=!1,i=0,r=[];!n;)if(t)r.push(t),t=t.left;else if(r.length>0){if(t=r.pop(),i===e)return t;i++,t=t.right}else n=!0;return null},e.prototype.next=function(e){var t=this._root,n=null;if(e.right){for(n=e.right;n.left;)n=n.left;return n}for(var i=this._comparator;t;){var r=i(e.key,t.key);if(0===r)break;r<0?(n=t,t=t.left):t=t.right}return n},e.prototype.prev=function(e){var t=this._root,n=null;if(null!==e.left){for(n=e.left;n.right;)n=n.right;return n}for(var i=this._comparator;t;){var r=i(e.key,t.key);if(0===r)break;r<0?t=t.left:(n=t,t=t.right)}return n},e.prototype.clear=function(){return this._root=null,this._size=0,this},e.prototype.toList=function(){return function(e){var t=e,n=[],i=!1,r=new Ph(null,null),s=r;for(;!i;)t?(n.push(t),t=t.left):n.length>0?t=(t=s=s.next=n.pop()).right:i=!0;return s.next=null,r.next}(this._root)},e.prototype.load=function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=!1);var i=e.length,r=this._comparator;if(n&&qh(e,t,0,i-1,r),null===this._root)this._root=Fh(e,t,0,i),this._size=i;else{var s=function(e,t,n){var i=new Ph(null,null),r=i,s=e,o=t;for(;null!==s&&null!==o;)n(s.key,o.key)<0?(r.next=s,s=s.next):(r.next=o,o=o.next),r=r.next;null!==s?r.next=s:null!==o&&(r.next=o);return i.next}(this.toList(),function(e,t){for(var n=new Ph(null,null),i=n,r=0;r<e.length;r++)i=i.next=new Ph(e[r],t[r]);return i.next=null,n.next}(e,t),r);i=this._size+i,this._root=Uh({head:s},0,i)}return this},e.prototype.isEmpty=function(){return null===this._root},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),e.prototype.toString=function(e){void 0===e&&(e=function(e){return String(e.key)});var t=[];return Mh(this._root,"",!0,(function(e){return t.push(e)}),e),t.join("")},e.prototype.update=function(e,t,n){var i=this._comparator,r=Dh(e,this._root,i),s=r.left,o=r.right;i(e,t)<0?o=Ah(t,n,o,i):s=Ah(t,n,s,i),this._root=function(e,t,n){return null===t?e:(null===e||((t=Oh(e.key,t,n)).left=e),t)}(s,o,i)},e.prototype.split=function(e){return Dh(e,this._root,this._comparator)},e}();function Fh(e,t,n,i){var r=i-n;if(r>0){var s=n+Math.floor(r/2),o=e[s],a=t[s],l=new Ph(o,a);return l.left=Fh(e,t,n,s),l.right=Fh(e,t,s+1,i),l}return null}function Uh(e,t,n){var i=n-t;if(i>0){var r=t+Math.floor(i/2),s=Uh(e,t,r),o=e.head;return o.left=s,e.head=e.head.next,o.right=Uh(e,r+1,n),o}return null}function qh(e,t,n,i,r){if(!(n>=i)){for(var s=e[n+i>>1],o=n-1,a=i+1;;){do{o++}while(r(e[o],s)<0);do{a--}while(r(e[a],s)>0);if(o>=a)break;var l=e[o];e[o]=e[a],e[a]=l,l=t[o],t[o]=t[a],t[a]=l}qh(e,t,n,a,r),qh(e,t,a+1,i,r)}}function jh(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wh(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function zh(e,t,n){return t&&Wh(e.prototype,t),n&&Wh(e,n),e}var Vh=function(e,t){return e.ll.x<=t.x&&t.x<=e.ur.x&&e.ll.y<=t.y&&t.y<=e.ur.y},Hh=function(e,t){if(t.ur.x<e.ll.x||e.ur.x<t.ll.x||t.ur.y<e.ll.y||e.ur.y<t.ll.y)return null;var n=e.ll.x<t.ll.x?t.ll.x:e.ll.x,i=e.ur.x<t.ur.x?e.ur.x:t.ur.x;return{ll:{x:n,y:e.ll.y<t.ll.y?t.ll.y:e.ll.y},ur:{x:i,y:e.ur.y<t.ur.y?e.ur.y:t.ur.y}}},Bh=Number.EPSILON;void 0===Bh&&(Bh=Math.pow(2,-52));var Gh=Bh*Bh,$h=function(e,t){if(-Bh<e&&e<Bh&&-Bh<t&&t<Bh)return 0;var n=e-t;return n*n<Gh*e*t?0:e<t?-1:1},Kh=function(){function e(){jh(this,e),this.reset()}return zh(e,[{key:"reset",value:function(){this.xRounder=new Yh,this.yRounder=new Yh}},{key:"round",value:function(e,t){return{x:this.xRounder.round(e),y:this.yRounder.round(t)}}}]),e}(),Yh=function(){function e(){jh(this,e),this.tree=new Lh,this.round(0)}return zh(e,[{key:"round",value:function(e){var t=this.tree.add(e),n=this.tree.prev(t);if(null!==n&&0===$h(t.key,n.key))return this.tree.remove(e),n.key;var i=this.tree.next(t);return null!==i&&0===$h(t.key,i.key)?(this.tree.remove(e),i.key):e}}]),e}(),Jh=new Kh,Qh=function(e,t){return e.x*t.y-e.y*t.x},Xh=function(e,t){return e.x*t.x+e.y*t.y},Zh=function(e,t,n){var i={x:t.x-e.x,y:t.y-e.y},r={x:n.x-e.x,y:n.y-e.y},s=Qh(i,r);return $h(s,0)},eu=function(e){return Math.sqrt(Xh(e,e))},tu=function(e,t,n){var i={x:t.x-e.x,y:t.y-e.y},r={x:n.x-e.x,y:n.y-e.y};return Xh(r,i)/eu(r)/eu(i)},nu=function(e,t,n){return 0===t.y?null:{x:e.x+t.x/t.y*(n-e.y),y:n}},iu=function(e,t,n){return 0===t.x?null:{x:n,y:e.y+t.y/t.x*(n-e.x)}},ru=function(){function e(t,n){jh(this,e),void 0===t.events?t.events=[this]:t.events.push(this),this.point=t,this.isLeft=n}return zh(e,null,[{key:"compare",value:function(t,n){var i=e.comparePoints(t.point,n.point);return 0!==i?i:(t.point!==n.point&&t.link(n),t.isLeft!==n.isLeft?t.isLeft?1:-1:ou.compare(t.segment,n.segment))}},{key:"comparePoints",value:function(e,t){return e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0}}]),zh(e,[{key:"link",value:function(e){if(e.point===this.point)throw new Error("Tried to link already linked events");for(var t=e.point.events,n=0,i=t.length;n<i;n++){var r=t[n];this.point.events.push(r),r.point=this.point}this.checkForConsuming()}},{key:"checkForConsuming",value:function(){for(var e=this.point.events.length,t=0;t<e;t++){var n=this.point.events[t];if(void 0===n.segment.consumedBy)for(var i=t+1;i<e;i++){var r=this.point.events[i];void 0===r.consumedBy&&(n.otherSE.point.events===r.otherSE.point.events&&n.segment.consume(r.segment))}}}},{key:"getAvailableLinkedEvents",value:function(){for(var e=[],t=0,n=this.point.events.length;t<n;t++){var i=this.point.events[t];i!==this&&!i.segment.ringOut&&i.segment.isInResult()&&e.push(i)}return e}},{key:"getLeftmostComparator",value:function(e){var t=this,n=new Map,i=function(i){var r,s,o,a,l,c=i.otherSE;n.set(i,{sine:(r=t.point,s=e.point,o=c.point,a={x:s.x-r.x,y:s.y-r.y},l={x:o.x-r.x,y:o.y-r.y},Qh(l,a)/eu(l)/eu(a)),cosine:tu(t.point,e.point,c.point)})};return function(e,t){n.has(e)||i(e),n.has(t)||i(t);var r=n.get(e),s=r.sine,o=r.cosine,a=n.get(t),l=a.sine,c=a.cosine;return s>=0&&l>=0?o<c?1:o>c?-1:0:s<0&&l<0?o<c?-1:o>c?1:0:l<s?-1:l>s?1:0}}}]),e}(),su=0,ou=function(){function e(t,n,i,r){jh(this,e),this.id=++su,this.leftSE=t,t.segment=this,t.otherSE=n,this.rightSE=n,n.segment=this,n.otherSE=t,this.rings=i,this.windings=r}return zh(e,null,[{key:"compare",value:function(e,t){var n=e.leftSE.point.x,i=t.leftSE.point.x,r=e.rightSE.point.x,s=t.rightSE.point.x;if(s<n)return 1;if(r<i)return-1;var o=e.leftSE.point.y,a=t.leftSE.point.y,l=e.rightSE.point.y,c=t.rightSE.point.y;if(n<i){if(a<o&&a<l)return 1;if(a>o&&a>l)return-1;var h=e.comparePoint(t.leftSE.point);if(h<0)return 1;if(h>0)return-1;var u=t.comparePoint(e.rightSE.point);return 0!==u?u:-1}if(n>i){if(o<a&&o<c)return-1;if(o>a&&o>c)return 1;var d=t.comparePoint(e.leftSE.point);if(0!==d)return d;var p=e.comparePoint(t.rightSE.point);return p<0?1:p>0?-1:1}if(o<a)return-1;if(o>a)return 1;if(r<s){var f=t.comparePoint(e.rightSE.point);if(0!==f)return f}if(r>s){var _=e.comparePoint(t.rightSE.point);if(_<0)return 1;if(_>0)return-1}if(r!==s){var g=l-o,m=r-n,v=c-a,y=s-i;if(g>m&&v<y)return 1;if(g<m&&v>y)return-1}return r>s?1:r<s||l<c?-1:l>c?1:e.id<t.id?-1:e.id>t.id?1:0}}]),zh(e,[{key:"replaceRightSE",value:function(e){this.rightSE=e,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}},{key:"bbox",value:function(){var e=this.leftSE.point.y,t=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:e<t?e:t},ur:{x:this.rightSE.point.x,y:e>t?e:t}}}},{key:"vector",value:function(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}},{key:"isAnEndpoint",value:function(e){return e.x===this.leftSE.point.x&&e.y===this.leftSE.point.y||e.x===this.rightSE.point.x&&e.y===this.rightSE.point.y}},{key:"comparePoint",value:function(e){if(this.isAnEndpoint(e))return 0;var t=this.leftSE.point,n=this.rightSE.point,i=this.vector();if(t.x===n.x)return e.x===t.x?0:e.x<t.x?1:-1;var r=(e.y-t.y)/i.y,s=t.x+r*i.x;if(e.x===s)return 0;var o=(e.x-t.x)/i.x,a=t.y+o*i.y;return e.y===a?0:e.y<a?-1:1}},{key:"getIntersection",value:function(e){var t=this.bbox(),n=e.bbox(),i=Hh(t,n);if(null===i)return null;var r=this.leftSE.point,s=this.rightSE.point,o=e.leftSE.point,a=e.rightSE.point,l=Vh(t,o)&&0===this.comparePoint(o),c=Vh(n,r)&&0===e.comparePoint(r),h=Vh(t,a)&&0===this.comparePoint(a),u=Vh(n,s)&&0===e.comparePoint(s);if(c&&l)return u&&!h?s:!u&&h?a:null;if(c)return h&&r.x===a.x&&r.y===a.y?null:r;if(l)return u&&s.x===o.x&&s.y===o.y?null:o;if(u&&h)return null;if(u)return s;if(h)return a;var d=function(e,t,n,i){if(0===t.x)return iu(n,i,e.x);if(0===i.x)return iu(e,t,n.x);if(0===t.y)return nu(n,i,e.y);if(0===i.y)return nu(e,t,n.y);var r=Qh(t,i);if(0==r)return null;var s={x:n.x-e.x,y:n.y-e.y},o=Qh(s,t)/r,a=Qh(s,i)/r;return{x:(e.x+a*t.x+(n.x+o*i.x))/2,y:(e.y+a*t.y+(n.y+o*i.y))/2}}(r,this.vector(),o,e.vector());return null===d?null:Vh(i,d)?Jh.round(d.x,d.y):null}},{key:"split",value:function(t){var n=[],i=void 0!==t.events,r=new ru(t,!0),s=new ru(t,!1),o=this.rightSE;this.replaceRightSE(s),n.push(s),n.push(r);var a=new e(r,o,this.rings.slice(),this.windings.slice());return ru.comparePoints(a.leftSE.point,a.rightSE.point)>0&&a.swapEvents(),ru.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),i&&(r.checkForConsuming(),s.checkForConsuming()),n}},{key:"swapEvents",value:function(){var e=this.rightSE;this.rightSE=this.leftSE,this.leftSE=e,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(var t=0,n=this.windings.length;t<n;t++)this.windings[t]*=-1}},{key:"consume",value:function(t){for(var n=this,i=t;n.consumedBy;)n=n.consumedBy;for(;i.consumedBy;)i=i.consumedBy;var r=e.compare(n,i);if(0!==r){if(r>0){var s=n;n=i,i=s}if(n.prev===i){var o=n;n=i,i=o}for(var a=0,l=i.rings.length;a<l;a++){var c=i.rings[a],h=i.windings[a],u=n.rings.indexOf(c);-1===u?(n.rings.push(c),n.windings.push(h)):n.windings[u]+=h}i.rings=null,i.windings=null,i.consumedBy=n,i.leftSE.consumedBy=n.leftSE,i.rightSE.consumedBy=n.rightSE}}},{key:"prevInResult",value:function(){return void 0!==this._prevInResult||(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null),this._prevInResult}},{key:"beforeState",value:function(){if(void 0!==this._beforeState)return this._beforeState;if(this.prev){var e=this.prev.consumedBy||this.prev;this._beforeState=e.afterState()}else this._beforeState={rings:[],windings:[],multiPolys:[]};return this._beforeState}},{key:"afterState",value:function(){if(void 0!==this._afterState)return this._afterState;var e=this.beforeState();this._afterState={rings:e.rings.slice(0),windings:e.windings.slice(0),multiPolys:[]};for(var t=this._afterState.rings,n=this._afterState.windings,i=this._afterState.multiPolys,r=0,s=this.rings.length;r<s;r++){var o=this.rings[r],a=this.windings[r],l=t.indexOf(o);-1===l?(t.push(o),n.push(a)):n[l]+=a}for(var c=[],h=[],u=0,d=t.length;u<d;u++)if(0!==n[u]){var p=t[u],f=p.poly;if(-1===h.indexOf(f))if(p.isExterior)c.push(f);else{-1===h.indexOf(f)&&h.push(f);var _=c.indexOf(p.poly);-1!==_&&c.splice(_,1)}}for(var g=0,m=c.length;g<m;g++){var v=c[g].multiPoly;-1===i.indexOf(v)&&i.push(v)}return this._afterState}},{key:"isInResult",value:function(){if(this.consumedBy)return!1;if(void 0!==this._isInResult)return this._isInResult;var e=this.beforeState().multiPolys,t=this.afterState().multiPolys;switch(gu.type){case"union":var n=0===e.length,i=0===t.length;this._isInResult=n!==i;break;case"intersection":var r,s;e.length<t.length?(r=e.length,s=t.length):(r=t.length,s=e.length),this._isInResult=s===gu.numMultiPolys&&r<s;break;case"xor":var o=Math.abs(e.length-t.length);this._isInResult=o%2==1;break;case"difference":var a=function(e){return 1===e.length&&e[0].isSubject};this._isInResult=a(e)!==a(t);break;default:throw new Error("Unrecognized operation type found ".concat(gu.type))}return this._isInResult}}],[{key:"fromRing",value:function(t,n,i){var r,s,o,a=ru.comparePoints(t,n);if(a<0)r=t,s=n,o=1;else{if(!(a>0))throw new Error("Tried to create degenerate segment at [".concat(t.x,", ").concat(t.y,"]"));r=n,s=t,o=-1}return new e(new ru(r,!0),new ru(s,!1),[i],[o])}}]),e}(),au=function(){function e(t,n,i){if(jh(this,e),!Array.isArray(t)||0===t.length)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=n,this.isExterior=i,this.segments=[],"number"!=typeof t[0][0]||"number"!=typeof t[0][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var r=Jh.round(t[0][0],t[0][1]);this.bbox={ll:{x:r.x,y:r.y},ur:{x:r.x,y:r.y}};for(var s=r,o=1,a=t.length;o<a;o++){if("number"!=typeof t[o][0]||"number"!=typeof t[o][1])throw new Error("Input geometry is not a valid Polygon or MultiPolygon");var l=Jh.round(t[o][0],t[o][1]);l.x===s.x&&l.y===s.y||(this.segments.push(ou.fromRing(s,l,this)),l.x<this.bbox.ll.x&&(this.bbox.ll.x=l.x),l.y<this.bbox.ll.y&&(this.bbox.ll.y=l.y),l.x>this.bbox.ur.x&&(this.bbox.ur.x=l.x),l.y>this.bbox.ur.y&&(this.bbox.ur.y=l.y),s=l)}r.x===s.x&&r.y===s.y||this.segments.push(ou.fromRing(s,r,this))}return zh(e,[{key:"getSweepEvents",value:function(){for(var e=[],t=0,n=this.segments.length;t<n;t++){var i=this.segments[t];e.push(i.leftSE),e.push(i.rightSE)}return e}}]),e}(),lu=function(){function e(t,n){if(jh(this,e),!Array.isArray(t))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new au(t[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(var i=1,r=t.length;i<r;i++){var s=new au(t[i],this,!1);s.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=s.bbox.ll.x),s.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=s.bbox.ll.y),s.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=s.bbox.ur.x),s.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=s.bbox.ur.y),this.interiorRings.push(s)}this.multiPoly=n}return zh(e,[{key:"getSweepEvents",value:function(){for(var e=this.exteriorRing.getSweepEvents(),t=0,n=this.interiorRings.length;t<n;t++)for(var i=this.interiorRings[t].getSweepEvents(),r=0,s=i.length;r<s;r++)e.push(i[r]);return e}}]),e}(),cu=function(){function e(t,n){if(jh(this,e),!Array.isArray(t))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{"number"==typeof t[0][0][0]&&(t=[t])}catch(o){}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(var i=0,r=t.length;i<r;i++){var s=new lu(t[i],this);s.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=s.bbox.ll.x),s.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=s.bbox.ll.y),s.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=s.bbox.ur.x),s.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=s.bbox.ur.y),this.polys.push(s)}this.isSubject=n}return zh(e,[{key:"getSweepEvents",value:function(){for(var e=[],t=0,n=this.polys.length;t<n;t++)for(var i=this.polys[t].getSweepEvents(),r=0,s=i.length;r<s;r++)e.push(i[r]);return e}}]),e}(),hu=function(){function e(t){jh(this,e),this.events=t;for(var n=0,i=t.length;n<i;n++)t[n].segment.ringOut=this;this.poly=null}return zh(e,null,[{key:"factory",value:function(t){for(var n=[],i=0,r=t.length;i<r;i++){var s=t[i];if(s.isInResult()&&!s.ringOut){for(var o=null,a=s.leftSE,l=s.rightSE,c=[a],h=a.point,u=[];o=a,a=l,c.push(a),a.point!==h;)for(;;){var d=a.getAvailableLinkedEvents();if(0===d.length){var p=c[0].point,f=c[c.length-1].point;throw new Error("Unable to complete output ring starting at [".concat(p.x,",")+" ".concat(p.y,"]. Last matching segment found ends at")+" [".concat(f.x,", ").concat(f.y,"]."))}if(1===d.length){l=d[0].otherSE;break}for(var _=null,g=0,m=u.length;g<m;g++)if(u[g].point===a.point){_=g;break}if(null===_){u.push({index:c.length,point:a.point});var v=a.getLeftmostComparator(o);l=d.sort(v)[0].otherSE;break}var y=u.splice(_)[0],w=c.splice(y.index);w.unshift(w[0].otherSE),n.push(new e(w.reverse()))}n.push(new e(c))}}return n}}]),zh(e,[{key:"getGeom",value:function(){for(var e=this.events[0].point,t=[e],n=1,i=this.events.length-1;n<i;n++){var r=this.events[n].point,s=this.events[n+1].point;0!==Zh(r,e,s)&&(t.push(r),e=r)}if(1===t.length)return null;var o=t[0],a=t[1];0===Zh(o,e,a)&&t.shift(),t.push(t[0]);for(var l=this.isExteriorRing()?1:-1,c=this.isExteriorRing()?0:t.length-1,h=this.isExteriorRing()?t.length:-1,u=[],d=c;d!=h;d+=l)u.push([t[d].x,t[d].y]);return u}},{key:"isExteriorRing",value:function(){if(void 0===this._isExteriorRing){var e=this.enclosingRing();this._isExteriorRing=!e||!e.isExteriorRing()}return this._isExteriorRing}},{key:"enclosingRing",value:function(){return void 0===this._enclosingRing&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}},{key:"_calcEnclosingRing",value:function(){for(var e=this.events[0],t=1,n=this.events.length;t<n;t++){var i=this.events[t];ru.compare(e,i)>0&&(e=i)}for(var r=e.segment.prevInResult(),s=r?r.prevInResult():null;;){if(!r)return null;if(!s)return r.ringOut;if(s.ringOut!==r.ringOut)return s.ringOut.enclosingRing()!==r.ringOut?r.ringOut:r.ringOut.enclosingRing();r=s.prevInResult(),s=r?r.prevInResult():null}}}]),e}(),uu=function(){function e(t){jh(this,e),this.exteriorRing=t,t.poly=this,this.interiorRings=[]}return zh(e,[{key:"addInterior",value:function(e){this.interiorRings.push(e),e.poly=this}},{key:"getGeom",value:function(){var e=[this.exteriorRing.getGeom()];if(null===e[0])return null;for(var t=0,n=this.interiorRings.length;t<n;t++){var i=this.interiorRings[t].getGeom();null!==i&&e.push(i)}return e}}]),e}(),du=function(){function e(t){jh(this,e),this.rings=t,this.polys=this._composePolys(t)}return zh(e,[{key:"getGeom",value:function(){for(var e=[],t=0,n=this.polys.length;t<n;t++){var i=this.polys[t].getGeom();null!==i&&e.push(i)}return e}},{key:"_composePolys",value:function(e){for(var t=[],n=0,i=e.length;n<i;n++){var r=e[n];if(!r.poly)if(r.isExteriorRing())t.push(new uu(r));else{var s=r.enclosingRing();s.poly||t.push(new uu(s)),s.poly.addInterior(r)}}return t}}]),e}(),pu=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ou.compare;jh(this,e),this.queue=t,this.tree=new Lh(n),this.segments=[]}return zh(e,[{key:"process",value:function(e){var t=e.segment,n=[];if(e.consumedBy)return e.isLeft?this.queue.remove(e.otherSE):this.tree.remove(t),n;var i=e.isLeft?this.tree.insert(t):this.tree.find(t);if(!i)throw new Error("Unable to find segment #".concat(t.id," ")+"[".concat(t.leftSE.point.x,", ").concat(t.leftSE.point.y,"] -> ")+"[".concat(t.rightSE.point.x,", ").concat(t.rightSE.point.y,"] ")+"in SweepLine tree. Please submit a bug report.");for(var r=i,s=i,o=void 0,a=void 0;void 0===o;)null===(r=this.tree.prev(r))?o=null:void 0===r.key.consumedBy&&(o=r.key);for(;void 0===a;)null===(s=this.tree.next(s))?a=null:void 0===s.key.consumedBy&&(a=s.key);if(e.isLeft){var l=null;if(o){var c=o.getIntersection(t);if(null!==c&&(t.isAnEndpoint(c)||(l=c),!o.isAnEndpoint(c)))for(var h=this._splitSafely(o,c),u=0,d=h.length;u<d;u++)n.push(h[u])}var p=null;if(a){var f=a.getIntersection(t);if(null!==f&&(t.isAnEndpoint(f)||(p=f),!a.isAnEndpoint(f)))for(var _=this._splitSafely(a,f),g=0,m=_.length;g<m;g++)n.push(_[g])}if(null!==l||null!==p){var v=null;if(null===l)v=p;else if(null===p)v=l;else{v=ru.comparePoints(l,p)<=0?l:p}this.queue.remove(t.rightSE),n.push(t.rightSE);for(var y=t.split(v),w=0,b=y.length;w<b;w++)n.push(y[w])}n.length>0?(this.tree.remove(t),n.push(e)):(this.segments.push(t),t.prev=o)}else{if(o&&a){var C=o.getIntersection(a);if(null!==C){if(!o.isAnEndpoint(C))for(var I=this._splitSafely(o,C),k=0,E=I.length;k<E;k++)n.push(I[k]);if(!a.isAnEndpoint(C))for(var T=this._splitSafely(a,C),S=0,x=T.length;S<x;S++)n.push(T[S])}}this.tree.remove(t)}return n}},{key:"_splitSafely",value:function(e,t){this.tree.remove(e);var n=e.rightSE;this.queue.remove(n);var i=e.split(t);return i.push(n),void 0===e.consumedBy&&this.tree.insert(e),i}}]),e}(),fu="undefined"!=typeof process&&{}.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,_u="undefined"!=typeof process&&{}.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6,gu=new(function(){function e(){jh(this,e)}return zh(e,[{key:"run",value:function(e,t,n){gu.type=e,Jh.reset();for(var i=[new cu(t,!0)],r=0,s=n.length;r<s;r++)i.push(new cu(n[r],!1));if(gu.numMultiPolys=i.length,"difference"===gu.type)for(var o=i[0],a=1;a<i.length;)null!==Hh(i[a].bbox,o.bbox)?a++:i.splice(a,1);if("intersection"===gu.type)for(var l=0,c=i.length;l<c;l++)for(var h=i[l],u=l+1,d=i.length;u<d;u++)if(null===Hh(h.bbox,i[u].bbox))return[];for(var p=new Lh(ru.compare),f=0,_=i.length;f<_;f++)for(var g=i[f].getSweepEvents(),m=0,v=g.length;m<v;m++)if(p.insert(g[m]),p.size>fu)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big). Please file a bug report.");for(var y=new pu(p),w=p.size,b=p.pop();b;){var C=b.key;if(p.size===w){var I=C.segment;throw new Error("Unable to pop() ".concat(C.isLeft?"left":"right"," SweepEvent ")+"[".concat(C.point.x,", ").concat(C.point.y,"] from segment #").concat(I.id," ")+"[".concat(I.leftSE.point.x,", ").concat(I.leftSE.point.y,"] -> ")+"[".concat(I.rightSE.point.x,", ").concat(I.rightSE.point.y,"] from queue. ")+"Please file a bug report.")}if(p.size>fu)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big). Please file a bug report.");if(y.segments.length>_u)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments). Please file a bug report.");for(var k=y.process(C),E=0,T=k.length;E<T;E++){var S=k[E];void 0===S.consumedBy&&p.insert(S)}w=p.size,b=p.pop()}Jh.reset();var x=hu.factory(y.segments);return new du(x).getGeom()}}]),e}()),mu={union:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return gu.run("union",e,n)},intersection:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return gu.run("intersection",e,n)},xor:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return gu.run("xor",e,n)},difference:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return gu.run("difference",e,n)}},vu={exports:{}},yu=function(e,t){this.p1=e,this.p2=t};yu.prototype.rise=function(){return this.p2[1]-this.p1[1]},yu.prototype.run=function(){return this.p2[0]-this.p1[0]},yu.prototype.slope=function(){return this.rise()/this.run()},yu.prototype.yIntercept=function(){return this.p1[1]-this.p1[0]*this.slope(this.p1,this.p2)},yu.prototype.isVertical=function(){return!isFinite(this.slope())},yu.prototype.isHorizontal=function(){return this.p1[1]==this.p2[1]},yu.prototype._perpendicularDistanceHorizontal=function(e){return Math.abs(this.p1[1]-e[1])},yu.prototype._perpendicularDistanceVertical=function(e){return Math.abs(this.p1[0]-e[0])},yu.prototype._perpendicularDistanceHasSlope=function(e){var t=this.slope(),n=this.yIntercept();return Math.abs(t*e[0]-e[1]+n)/Math.sqrt(Math.pow(t,2)+1)},yu.prototype.perpendicularDistance=function(e){return this.isVertical()?this._perpendicularDistanceVertical(e):this.isHorizontal()?this._perpendicularDistanceHorizontal(e):this._perpendicularDistanceHasSlope(e)};var wu=yu,bu=function(e,t){for(var n=0,i=0,r=1;r<=e.length-2;r++){var s=new wu(e[0],e[e.length-1]).perpendicularDistance(e[r]);s>n&&(i=r,n=s)}if(n>t)var o=bu(e.slice(0,i),t),a=bu(e.slice(i,e.length),t),l=o.concat(a);else l=e.length>1?[e[0],e[e.length-1]]:[e[0]];return l},Cu=bu;!function(e){var t=Cu;function n(t,n){var i=t.geometry,r=i.type;if("LineString"===r)i.coordinates=e.exports.simplify(i.coordinates,n);else if("Polygon"===r||"MultiLineString"===r)for(var s=0;s<i.coordinates.length;s++)i.coordinates[s]=e.exports.simplify(i.coordinates[s],n);else if("MultiPolygon"===r)for(var o=0;o<i.coordinates.length;o++)for(var a=0;a<i.coordinates[o].length;a++)i.coordinates[o][a]=e.exports.simplify(i.coordinates[o][a],n);return t}e.exports=function(e,t,i){return i||(e=JSON.parse(JSON.stringify(e))),e.features?function(e,t){for(var i=0;i<e.features.length;i++)e.features[i]=n(e.features[i],t);return e}(e,t):e.type&&"Feature"===e.type?n(e,t):new Error("FeatureCollection or individual Feature required")},e.exports.simplify=function(e,n){return t(e,n)}}(vu);var Iu=vu.exports;export{On as A,An as B,ah as C,ch as D,U as E,F,Ll as G,Gc as H,jl as I,at as J,j as K,p as a,f as b,g as c,mu as d,Iu as e,L as f,_ as g,m as h,H as i,z as j,Rh as k,Hl as l,Kc as m,Ai as n,y as o,Pn as p,Nn as q,Dl as r,V as s,W as t,v as u,Ol as v,$c as w,Bc as x,Gl as y,Ml as z};
