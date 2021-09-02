import{t as e,c as t,u as n,a as o,o as r,i,b as a,s,d as l,e as c,f as d,g as u,k as g,h as f,E as p,j as h,F as m,l as w,m as v,n as y,q as b,p as _,r as x,v as k,w as N,x as A,y as S,z as j,A as E,B as P,C as T,D as $,G as C,H as D,I as L,J as M,K as I,L as z,M as R,N as F,O,P as U}from"./vendor.95db164c.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function B(e){throw console.log("not never:",e),new Error("Expected never")}function V(e,t){var n,o;const r=null!=(o=null!=(n=t[e.kind])?n:t.unsupported)?o:()=>{throw new Error("condition "+e.kind+" was not handled and no unsupported branch")};return()=>r(e)}const q=e("<time></time>");function H(e){return t((()=>V(e.item,e.children)()))}function W(e){const n=t((()=>e.when),void 0,{equals:(e,t)=>!e==!t});return t((()=>n()?e.children:e.fallback))}function K(e){return t((()=>{var t,o;if((null==(o=null==(t=e.if)?void 0:t[0])||o)&&null!=e.when){const t=e.children;return n((()=>t(e.when)))}return e.fallback}))}function Y(e,t){const n=document.getSelection();if(!1===(null==n?void 0:n.isCollapsed))return!1;let o=e;for(;o&&o!==t;){if(o instanceof HTMLElement&&("A"===o.nodeName||"BUTTON"===o.nodeName||"VIDEO"===o.nodeName||"AUDIO"===o.nodeName||"INPUT"===o.nodeName||"TEXTAREA"===o.nodeName||"IFRAME"===o.nodeName||o.classList.contains("resizable-iframe")||o.classList.contains("handles-clicks")))return!1;o=o.parentNode}return!0}function G(e,t){if(!t.endsWith("s"))throw new Error("!s");return 1===e?e+t.substring(0,t.length-1):e+t}function J(e){const[n,l]=o(Date.now()),c=t((()=>{const t=function(e,t){const n=t-e;if(n<0)return["in the future "+new Date(e).toISOString(),-n];if(n<6e4)return["just now",6e4-n];let o=6e4,r=60;if(n<r*o){const e=n/o|0;return[G(e," minutes")+" ago",o-(n-e*o)]}if(o*=r,r=24,n<r*o){const e=n/o|0;return[G(e," hours")+" ago",o-(n-e*o)]}if(o*=r,r=30,n<r*o){const e=n/o|0;return[G(e," days")+" ago",o-(n-e*o)]}return[new Date(e).toISOString(),-1]}(e.start,n());if(t[1]>0){const e=setTimeout((()=>l(Date.now())),Math.min(t[1]+10,2147483647));r((()=>clearTimeout(e)))}return t[0]}));return(()=>{const t=q.cloneNode(!0);return i(t,c),a((n=>{const o=new Date(e.start).toString(),r=""+new Date(e.start);return o!==n._v$&&s(t,"datetime",n._v$=o),r!==n._v$2&&s(t,"title",n._v$2=r),n}),{_v$:void 0,_v$2:void 0}),t})()}let X=function(e,t){for(const n of Object.keys(t.frames).reverse()){const t=+n;if(e>=t)return t}throw new Error("requested frame "+e+" not found. note: the zero frame is required to exist.")},Q=function(e,t,n,o,r){var i,a,s;let c=t,d=[];const u=new Set,g=new Set;for(const{touch:l,actionSet:w}of[{touch:!0,actionSet:()=>e},{touch:!1,actionSet:()=>o},{touch:!1,actionSet:()=>d}])for(const e of[...w()].reverse())if(!g.has(e.id)){if(l)u.add(e.frame);else if(!u.has(e.frame))continue;"invalidate_action"===e.kind&&(g.add(e.invalidate.id),e.invalidate.time<=c.last_action_time&&(c={last_action_time:0,frames:{0:{merged_polygons:[],thumbnail:[]}}},d=n))}const f={};for(const l of u)f[l]||(f[l]={...null!=(i=c.frames[l])?i:{merged_polygons:[],thumbnail:[]}});let p=0;for(const w of[...d,...e,...o]){if(g.has(w.id))continue;if(!u.has(w.frame))continue;p+=1;const e=f[w.frame];"add_polygon"===w.kind?e.merged_polygons=l.union(e.merged_polygons,[w.polygon]):"erase_polygon"===w.kind?e.merged_polygons=l.difference(e.merged_polygons,[w.polygon]):"invalidate_action"===w.kind||B(w)}for(const l of u){const e=f[l];e.thumbnail=Z(e.merged_polygons,r)}const h=[...d,...e,...o],m=null!=(s=null==(a=h[h.length-1])?void 0:a.insert_time)?s:0;return console.log("regenerated frames:",u,"in",p,"ignoring",g),{...c,frames:{...c.frames,...t.frames,...f},last_action_time:m}};function Z(e,t){return c({type:"Feature",geometry:{type:"MultiPolygon",coordinates:e}},Math.min(t.width,t.height)/40).geometry.coordinates}const ee=e('<div class="h-full"></div>'),te=e('<canvas class="w-full h-full fixed top-0 left-0 bottom-0 right-0"></canvas>');function ne(e){return(()=>{const t=ee.cloneNode(!0);return i(t,d(ie,{get state(){return e.state},get applyAction(){return e.applyAction}}),null),i(t,d(ue,{get state(){return e.state},get applyAction(){return e.applyAction}}),null),t})()}function oe(e){const t={width:window.innerWidth,height:window.innerHeight},n=t.width,o=t.height-200,r=e.width,i=e.height,a=Math.min((n-100)/r,(o-100)/i);return{scale:a,translate:{x:n/a/2-r/2,y:o/a/2-i/2}}}function re(e,t){const{scale:n,translate:o}=oe(t);e.scale(n,n),e.translate(o.x,o.y)}function ie(e){return d(pe,{render:(t,n)=>{const o=Date.now(),r=se();t.fillStyle="#ccc",t.fillRect(0,0,n.width,n.height),t.save(),re(t,e.state.config),t.save(),t.fillStyle="#fff",t.fillRect(0,0,e.state.config.width,e.state.config.height),t.restore(),t.strokeRect(0,0,e.state.config.width,e.state.config.height),t.save(),t.strokeStyle="rgba(0, 0, 0, 0.5)",null==r&&(t.beginPath(),t.moveTo(e.state.config.width/2,0),t.lineTo(e.state.config.width/2,e.state.config.height),t.moveTo(0,e.state.config.height/2),t.lineTo(e.state.config.width,e.state.config.height/2),t.stroke()),t.restore();let i=e.state.frame;null!=r&&(i=r);const a=X(i,e.state.cached_state),s=e.state.cached_state.frames[a];if(null==r&&a-1>=0){const n=X(a-1,e.state.cached_state),o=e.state.cached_state.frames[n];t.fillStyle="rgba(0, 255, 0, 0.5)",ge(t,o.merged_polygons)}if(null==r){const n=i+1;if(X(n,e.state.cached_state)!==a){const o=e.state.cached_state.frames[n];t.fillStyle="rgba(255, 0, 0, 0.5)",ge(t,o.merged_polygons)}}const l=a===i||null!=r;t.fillStyle=l?"#000000":"#aaa",ge(t,s.merged_polygons),t.restore();const c=Date.now();t.fillStyle="#000000",t.fillText("Last Update ms: "+e.state.update_time,10,20),t.fillText("Draw ms: "+(c-o),10,30),t.fillText("Vertices: "+s.merged_polygons.reduce(((e,t)=>e+t.reduce(((e,t)=>e+t.length),0)),0),10,40),t.fillText("Frame: "+i+" / "+e.state.max_frame,10,50),t.fillText("Actions: "+e.state.actions.length,10,60),t.fillText("Project: "+e.state.config.title,10,70)}})}let ae=null;const[se,le]=o(null);function ce(e,t){e.source.addEventListener("ended",(()=>{}));const n=()=>ae?(le((ae.offset+ae.context.currentTime)*t|0),!0):(le(null),!1);n(),function(e){const t=()=>requestAnimationFrame((()=>{e()&&t()}));t()}(n)}function de(){ae&&(ae.source.stop(),ae=null)}function ue(e){const[n,i]=o(new Map),a=e=>g(e.points,{simulatePressure:e.points.every((e=>.5===e[2])),size:"erase"===e.mode?100:8}),s=t=>{const{scale:n,translate:o}=oe(e.state.config);return[t[0]/n-o.x,t[1]/n-o.y,t[2]]},l=t=>{let n=t/e.state.config.framerate;n<0&&(n=0),n>e.state.audio.duration&&(n=e.state.audio.duration);const o=e.state.audio_ctx.createBufferSource();o.buffer=e.state.audio,o.connect(e.state.audio_ctx.destination),o.playbackRate.setValueAtTime(1,0),o.start(0,n,e.state.audio.duration-n),function(e,t){de(),ae={...e,offset:e.offset-e.context.currentTime},ce(e,t)}({source:o,offset:n,context:e.state.audio_ctx},e.state.config.framerate)},[c,u]=o(null),[f,p]=o(0),h=t((()=>[...n().values()].map(a)));return r(function(e){const t=[],n=new Map,o=e=>{const t=n.get(e);if(!t||0===t.points.size){const t={points:new Map};return n.set(e,t),t}return t},r=e=>[...e.points.values()].map((e=>e[0].time)).reduce(((e,t)=>Math.min(e,t)),1/0),i=e=>[e.pageX,e.pageY,e.pressure],a=e=>{let t=e[0].point[0],n=e[0].point[0],o=e[0].point[1],r=e[0].point[1];for(const{point:i}of e)i[0]<t&&(t=i[0]),i[0]>n&&(n=i[0]),i[1]<o&&(o=i[1]),i[1]>r&&(r=i[1]);return n-t+(r-o)},s=(e,t)=>{if(0===e.points.size)return{kind:"none"};const n=r(e),o=[...e.points.values()],i=o.reduce(((e,t)=>Math.max(e,t[0].time)),0);if(t.commit&&n>Date.now()-200&&o.length>1&&!o.map(a).some((e=>e>10)))return{kind:"tap",points:o.map((e=>e[0].point))};if(1===o.length)return{kind:"draw",points:o[0].map((e=>e.point)),...t};const s=o.map((e=>{const t=e.findIndex((e=>e.time>=i));return-1===t?e[e.length-1]:e[t]}));return 2===o.length?{kind:"touchzoom",start:s.map((e=>e.point)),end:o.map((e=>e[e.length-1].point)),...t}:{kind:"none"}};document.documentElement.classList.add("no-interact"),t.push((()=>document.documentElement.classList.remove("no-interact")));const l=t=>{t.preventDefault();const n=o(t.pointerType),a=r(n);Date.now()>a+200||(n.points.set(t.pointerId,[{time:Date.now(),point:i(t)}]),e(t.pointerType,s(n,{commit:!1})))};document.addEventListener("pointerdown",l),t.push((()=>document.removeEventListener("pointerdown",l)));const c=t=>{const n=o(t.pointerType),r=n.points.get(t.pointerId);r&&(t.preventDefault(),r.push({time:Date.now(),point:i(t)}),e(t.pointerType,s(n,{commit:!1})))};document.addEventListener("pointermove",c),t.push((()=>document.removeEventListener("pointermove",c)));const d=t=>{t.preventDefault();const r=o(t.pointerType);if(!r.points.has(t.pointerId))return;const i=s(r,{commit:!0});n.delete(t.pointerType),e(t.pointerType,i)};document.addEventListener("pointerup",d),t.push((()=>document.removeEventListener("pointerup",d)));const u=t=>{const n=o(t.pointerType);n.points.has(t.pointerId)&&(n.points.delete(t.pointerId),e(t.pointerType,s(n,{commit:!1})))};document.addEventListener("pointercancel",u),t.push((()=>document.removeEventListener("pointercancel",u)));const g=e=>{e.preventDefault()};return document.addEventListener("contextmenu",g),t.push((()=>document.removeEventListener("pointercancel",g))),()=>t.forEach((e=>e()))}(((t,o)=>{let r=!1;let d=!1;V(o,{draw:n=>{const o=n.points[0];if(o[1]>window.innerHeight-200){const t=n.points[n.points.length-1][0]-o[0],r=-Math.round(t/250);return void(n.commit?e.applyAction({kind:"set_frame",frame:e.state.frame+r}):(r!==c()&&l(e.state.frame+r),u(r),d=!0,p(t+250*r)))}const g={points:n.points.map(s),mode:"draw"};var f;n.commit?e.applyAction({kind:"add_polygon",polygon:a(g),frame:e.state.frame}):(f=g,r=!0,i((e=>{const n=new Map(e);return n.set(t,f),n})))},touchzoom:()=>{},tap:t=>{2===t.points.length?e.applyAction({kind:"undo"}):3===t.points.length&&e.applyAction({kind:"redo"})},none:()=>{}})();e:if(!r){const e=n();if(!e.has(t))break e;const o=new Map(e);o.delete(t),i(o)}d||(p(0),u(null),de())}))),d(pe,{render:(t,n)=>{var o,r;t.save(),re(t,e.state.config);const i=Date.now();t.fillStyle="#000";for(const e of h()){t.beginPath();let n=!0;for(const[o,r]of e)n?(t.moveTo(o,r),n=!1):t.lineTo(o,r);t.fill()}t.restore(),t.fillStyle="#aaa",t.fillRect(0,n.height-200,n.width,200);const a=e.state.frame+(null!=(o=c())?o:0);{t.save(),t.translate(n.width/2-90+0,n.height-200+45),t.scale(.1,.1),t.fillStyle="#999";const o=100,r=440;t.fillRect(-o,-r,e.state.config.width+2*o,e.state.config.height+2*r),t.restore()}for(let c=-5;c<5;c++){const o=c+a;if(o<0)continue;const r=X(o,e.state.cached_state),i=r===o,s=e.state.cached_state.frames[r].thumbnail;t.save(),t.translate(n.width/2-90+250*c,n.height-200+45),t.scale(.1,.1),t.translate(f()/.1,0),i?t.fillStyle="#fff":(t.fillStyle="rgba(255, 255, 255, 0.4)",t.fillRect(-580,0,580,e.state.config.height),t.fillStyle="#ddd"),t.fillRect(0,0,e.state.config.width,e.state.config.height),t.fillStyle=i?"#000":"#888",ge(t,s),t.restore()}t.fillStyle="#000";const s=e.state.audio_data,l=e.state.frame/e.state.config.framerate*e.state.audio.sampleRate|0;for(let e=0;e<15;e++)t.fillText(""+Math.abs(null!=(r=s[l+e])?r:0),10,n.height-200+10*(e+5));const d=Date.now();t.fillText("Draw ms: "+(d-i),10,n.height-200+20),t.fillText("Frame: "+a+" / "+e.state.max_frame,10,n.height-200+30)}})}function ge(e,t){for(const n of t)fe(e,n)}function fe(e,t){e.beginPath();for(const n of t){let t=!0;for(const[o,r]of n)t?(e.moveTo(o,r),t=!1):e.lineTo(o,r)}e.fill()}function pe(e){const t=()=>({width:window.innerWidth,height:window.innerHeight}),[n,i]=o(t()),a=()=>{i(t())};return window.addEventListener("resize",a),r((()=>window.removeEventListener("resize",a))),(()=>{const t=te.cloneNode(!0);return(t=>{const o=t.getContext("2d");u((()=>{const r=n(),i=window.devicePixelRatio;t.width!==r.width*i&&(t.width=r.width*i),t.height!==r.height*i&&(t.height=r.height*i),o.setTransform((new DOMMatrixReadOnly).scale(i)),null==o||o.clearRect(0,0,r.width,r.height),e.render(o,r)}))})(t),t})()}const he=e('<div class="min-h-full p-4 bg-red-900 text-white"><button class="border px-2">Code</button> / <button class="border px-2">Retry</button><pre class="whitespace-pre-wrap"><code> </code></pre></div>');function me(e){const[t,n]=o(!0);return d(p,{fallback:(t,o)=>(console.log(t),(()=>{const r=he.cloneNode(!0),i=r.firstChild,s=i.nextSibling.nextSibling,l=s.nextSibling.firstChild.firstChild;return i.$$click=()=>console.log(t,e.data),s.$$click=()=>{n(!1),setTimeout((()=>n(!0)),200),o()},a((()=>l.data=t instanceof Error?t.toString()+"\n\n"+t.stack:"Something went wrong")),r})()),get children(){return d(W,{get when(){return t()},get fallback(){return"Retrying..."},get children(){return e.children}})}})}f(["click"]);const we=e('<label><div class="text-sm text-gray-800">:</div></label>'),ve=e("<input>"),ye=e("<div></div>"),be=e('<div role="heading" class="text-3xl font-black"></div>'),_e=e("<hr>"),xe=e('<div class="pb-4"></div>'),ke=e('<div class="pb-2"></div>'),Ne=e('<div class="flex flex-row flex-wrap gap-4 <sm:flex-col"></div>'),Ae=e('<p class="text-sm text-gray-700"><span class="text-red-600">Error! </span></p>'),Se=e('<input type="file">'),je=e('<ul class="text-red-600"></ul>'),Ee=e("<li></li>"),Pe=e("<button></button>"),Te=e('<button class="text-blue-600 bg-blue-100 hover:bg-blue-200 transition px-1">&lt; Back</button>'),$e=e('<div class="flex flex-col gap-2"></div>'),Ce=e('<p class="text-sm text-gray-700">You don\'t have any projects.</p>'),De=e('<p class="text-sm text-red-600">Error: </p>'),Le=e('<div tabindex="0"><div></div><div class="text-sm font-light">Updated </div></div>'),Me=e('<div class="flex flex-row justify-center"></div>'),Ie=e('<div class="pb-1"></div>'),ze=e('<p class="text-sm text-gray-700">Note: In demo mode, you cannot save your animations.</p>'),Re=e("<div>You are signed in as </div>"),Fe=e('<div class="w-full max-w-md py-50"><div class="p-4 shadow-md bg-white border"></div></div>'),Oe=e('<p class="text-red-600"></p>'),Ue=e('<p class="text-base text-red-600">Your work will not be saved.</p>'),Be=e('<ul class="flex flex-col gap-2"></ul>'),Ve=e('<li tabindex="0"> - <!> / </li>'),qe=e("<div> <!>…</div>"),He=e('<p class="text-sm text-red-600">Error while <!>: </p>'),We=e('<a class="underline underline-dotted hover:underline-solid" target="_blank" rel="noopener noreferrer"></a>'),Ke=e('<button class="w-full h-full flex flex-col flex-wrap items-center justify-center bg-gray-100"><span></span></button>'),Ye=e('<svg class="animate-spin mr-1 h-5 w-5 text-black inline-block align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><title>Loading…</title><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor"></path></svg>'),Ge=(()=>{const e=new Uint8Array(16);return crypto.getRandomValues(e),[...e].map((e=>e.toString(16).padStart(2,"0"))).join("")})();function Je(e){return(()=>{const t=we.cloneNode(!0),n=t.firstChild,o=n.firstChild;return i(n,(()=>e.text),o),i(t,(()=>e.children),null),t})()}function Xe(e){return(()=>{const t=ye.cloneNode(!0);return i(t,d(Je,{get text(){return e.label},get children(){const t=ve.cloneNode(!0);return t.$$keydown=t=>{"Enter"===t.code&&(e.disabled||(t.preventDefault(),e.onenter()))},t.$$input=t=>{e.setValue(t.currentTarget.value)},a((n=>{const o=e.type,r="border px-3 py-2 block w-full "+(e.disabled?"text-gray-700 bg-gray-100 cursor-not-allowed":""),i=e.disabled,a=e.placeholder,l=e.value;return o!==n._v$&&s(t,"type",n._v$=o),r!==n._v$2&&(t.className=n._v$2=r),i!==n._v$3&&(t.disabled=n._v$3=i),a!==n._v$4&&s(t,"placeholder",n._v$4=a),l!==n._v$5&&(t.value=n._v$5=l),n}),{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),t}})),t})()}function Qe(e){return[(()=>{const t=be.cloneNode(!0);return i(t,(()=>e.children)),t})(),_e.cloneNode(!0)]}function Ze(e){const[t,n]=o(""),[r,a]=o(""),[s,l]=o(!1),[c,u]=o(void 0),g=()=>e.loading||!1!==s(),f=y(),p=w();async function h(e){const t={created:E(),projects:{}},n=x(p,"/users/"+e);null==(await C(n)).val()&&await P(n,t)}function m(t){t.then((()=>{e.popPage()})).catch((e=>{l(!1),console.log(e),u(""+e.toString())}))}return[d(ot,{get popPage(){return e.popPage}}),d(Qe,{children:"Email Account"}),xe.cloneNode(!0),d(Xe,{type:"email",label:"Email",placeholder:"name@example.com",get disabled(){return g()},get value(){return t()},setValue:n,onenter:()=>{}}),ke.cloneNode(!0),d(Xe,{type:"password",label:"Password",get disabled(){return g()},get value(){return r()},setValue:a,onenter:()=>{}}),xe.cloneNode(!0),(()=>{const e=Ne.cloneNode(!0);return i(e,d(nt,{style:"gray",class:"flex-1",get disabled(){return g()},onClick:()=>{l("create_account"),m((async()=>{const e=await k(f,t(),r());await h(e.user.uid)})())},get children(){return d(W,{get when(){return"create_account"===s()},get fallback(){return"Create Account"},get children(){return d(ht,{})}})}}),null),i(e,d(nt,{style:"green",class:"sm:min-w-max sm:w-30",get disabled(){return g()},onClick:()=>{l("log_in"),m((async()=>{const e=await N(f,t(),r());await h(e.user.uid)})())},get children(){return d(W,{get when(){return"log_in"===s()},get fallback(){return"Log In"},get children(){return d(ht,{})}})}}),null),e})(),d(K,{get when(){return c()},children:e=>[ke.cloneNode(!0),(()=>{const t=Ae.cloneNode(!0),n=t.firstChild;return n.firstChild,i(n,e,null),t})()]})]}function et(){const e=w();return A(x(e,"/_")).key}function tt(e){const[t,n]=o(!1),[r,s]=o(""),[l,c]=o(null),[u,g]=o(""),[f,p]=o(""),h=w(),b=y(),_=v(),k=A(x(h,"/projects")),N=k.key,T=x(h,"/users/"+b.currentUser.uid+"/projects/"+N),$=S(_,"/user/"+b.currentUser.uid+"/"+et()),C=()=>+u(),D=()=>{const e=f().split("x");return 2!==e.length?[0,0]:[+e[0],+e[1]]},L=()=>{const e=[];return r().trim()||e.push("Name required"),l()?1!==l().length?e.push("Max one audio file"):l().item(0).name.endsWith(".mp3")||e.push("Audio file must be .mp3"):e.push("Audio required"),C()||e.push("FPS required"),D().some((e=>!e))&&e.push("Size required"),e};return[d(ot,{get popPage(){return e.popPage}}),d(Qe,{children:"Create Project"}),xe.cloneNode(!0),d(Xe,{type:"text",label:"Project Name",get disabled(){return!1!==t()},get value(){return r()},setValue:s,onenter:()=>{}}),ke.cloneNode(!0),d(Je,{text:"Audio",get children(){const e=Se.cloneNode(!0);return e.$$input=e=>{c(e.currentTarget.files)},a((()=>e.disabled=!1!==t())),e}}),ke.cloneNode(!0),d(Xe,{type:"text",label:"Frames per Second",placeholder:"15",get disabled(){return!1!==t()},get value(){return u()},setValue:g,onenter:()=>{}}),ke.cloneNode(!0),d(Xe,{type:"text",label:"Size",placeholder:"1920x1080",get disabled(){return!1!==t()},get value(){return f()},setValue:p,onenter:()=>{}}),xe.cloneNode(!0),d(nt,{class:"w-full",style:"green",get disabled(){return 0!==L().length||"create_project"===t()},onClick:()=>{if(0!==L().length)return alert("unresolved errors");n("create_project");const t=l().item(0);(async()=>{const e=S($,"/"+t.name),n=await j(e,await t.arrayBuffer());console.log(n.metadata.fullPath);const o={created:E(),owner:b.currentUser.uid,config:{title:r(),audio:n.metadata.fullPath,framerate:C(),width:D()[0],height:D()[1]}},i={updated:E()};console.log("creating project",o),await P(k,o),await P(T,i)})().then((t=>{n(!1),e.replacePage({kind:"animator_loader",project_id:N})})).catch((e=>{n(!1),console.log(e),alert("error creating project: "+e.toString())}))},get children(){return d(W,{get when(){return"create_project"!==t()},get fallback(){return d(ht,{})},children:"Create Project"})}}),(()=>{const e=je.cloneNode(!0);return i(e,d(m,{get each(){return L()},children:e=>(()=>{const t=Ee.cloneNode(!0);return i(t,e),t})()})),e})()]}function nt(e){return(()=>{const t=Pe.cloneNode(!0);return t.$$click=()=>e.onClick(),i(t,(()=>e.children)),a((()=>t.className="border px-4 py-2 block "+e.class+" "+{gray:()=>{var t;return"transition "+(null!=(t=e.disabled)&&t?"text-gray-700 bg-gray-100 cursor-not-allowed":"bg-gray-200 hover:shadow-md hover:bg-white")},green:()=>{var t;return null!=(t=e.disabled)&&t?"text-gray-700 bg-gray-100 cursor-not-allowed":"border-green-400 bg-gradient-to-r from-green-400 to-green-500 text-white font-bold hover:shadow-md"}}[e.style]())),t})()}function ot(e){return(()=>{const t=Te.cloneNode(!0);return t.$$click=()=>{e.popPage()},t})()}function rt(e){const t=w(),n=y(),o=x(t,"/users/"+n.currentUser.uid),[r]=wt(o);return[d(nt,{class:"w-full",style:"gray",onClick:()=>{e.pushPage({kind:"create_project"})},children:"+ Create Project"}),xe.cloneNode(!0),d(H,{item:r,children:{loading:()=>d(ht,{}),error:e=>(()=>{const t=Ae.cloneNode(!0),n=t.firstChild;return n.firstChild,i(n,(()=>e.message),null),t})(),loaded:t=>(()=>{const n=$e.cloneNode(!0);return i(n,d(m,{get each(){var e;return Object.entries(null!=(e=t.value.projects)?e:{})},get fallback(){return Ce.cloneNode(!0)},children:t=>d(it,{get pushPage(){return e.pushPage},project:t})})),n})()}})]}function it(e){const t=w(),n=x(t,"/projects/"+e.project[0]),[o]=wt(n),r=()=>{e.pushPage({kind:"animator_loader",project_id:e.project[0]})};return d(H,{item:o,children:{loading:()=>d(ht,{}),error:e=>(()=>{const t=De.cloneNode(!0);return t.firstChild,i(t,(()=>e.message),null),t})(),loaded:t=>(()=>{const n=Le.cloneNode(!0),o=n.firstChild,a=o.nextSibling;return a.firstChild,n.$$keydown=e=>{if("Enter"===e.key){if(!Y(e.target,e.currentTarget))return;r()}},n.$$click=e=>{Y(e.target,e.currentTarget)&&r()},n.className="bg-gray-100 border p-4 focus:bg-white focus:shadow-md cursor-pointer hover:bg-white hover:shadow-md outline-default transition handles-clicks",i(o,(()=>t.value.config.title)),i(a,d(J,{get start(){return e.project[1].updated}}),null),n})()}})}function at(e){const t=y(),[n,a]=o("account"),s=()=>!1!==n(),[l,c]=o(t.currentUser),[u,g]=o(),f=T(t,(e=>{a(!1),console.log("auth_state_changed",e),c(e)}));return r((()=>f())),d(W,{get when(){return"account"!==n()},get fallback(){return(()=>{const e=Me.cloneNode(!0);return i(e,d(ht,{})),e})()},get children(){return[d(K,{get when(){return l()},get fallback(){return[d(Qe,{children:"Animator"}),xe.cloneNode(!0),d(nt,{get disabled(){return s()},class:"w-full",style:"gray",onClick:()=>{e.pushPage({kind:"email_account"})},children:"Email Account"}),xe.cloneNode(!0),d(nt,{get disabled(){return s()},class:"w-full",style:"gray",onClick:()=>{e.pushPage({kind:"sample_projects"})},children:"Demo Mode"}),Ie.cloneNode(!0),ze.cloneNode(!0)]},children:o=>[(()=>{const e=Re.cloneNode(!0);return e.firstChild,i(e,(()=>o.uid),null),e})(),xe.cloneNode(!0),d(rt,{get pushPage(){return e.pushPage}}),xe.cloneNode(!0),d(nt,{get disabled(){return s()},class:"w-full",style:"gray",onClick:()=>{a("log_out"),$(t).then((()=>{a(!1)})).catch((e=>{a(!1),g(""+e.toString())}))},get children(){return d(W,{get when(){return"log_out"!==n()},get fallback(){return d(ht,{})},children:"Log Out"})}})]}),d(K,{get when(){return u()},children:e=>[ke.cloneNode(!0),(()=>{const t=Ae.cloneNode(!0),n=t.firstChild;return n.firstChild,i(n,e,null),t})()]})]}})}function st(e){const[t,n]=o([]),a=()=>{var e;const n=t();return null!=(e=n[n.length-1])?e:{kind:"main"}},s=e=>{n((t=>[...t,e]))},l=()=>{n((e=>e.slice(0,e.length-1)))},c=e=>{n((t=>[...t.slice(0,t.length-1),e]))};return d(K,{get when(){return e=a(),t="animator",e.kind===t?e:null;var e,t},get fallback(){return d(pt,{horizontal:!0,get children(){const e=Fe.cloneNode(!0),t=e.firstChild;return i(t,d(H,{get item(){return a()},children:{main:()=>d(at,{pushPage:s,popPage:l}),create_project:()=>d(tt,{replacePage:c,popPage:l}),email_account:()=>d(Ze,{pushPage:s,popPage:l,loading:!1}),animator_loader:e=>d(ut,{replacePage:c,popPage:l,get project_id(){return e.project_id}}),sample_projects:()=>d(lt,{popPage:l,pushPage:c}),animator:()=>{throw new Error("never.")}}})),e}})},children:e=>(r((()=>e.cleanup())),d(me,{get data(){return e.state},get children(){return d(ft,{get state(){return e.state},get children(){return d(ne,{get state(){return e.state},get applyAction(){return e.applyAction}})}})}}))})}function lt(e){const[t,n]=o({kind:"loading"});let a=!0;r((()=>a=!1));return(async()=>{const e=await fetch("/sample-projects/list.json").then((e=>e.json())),t=await Promise.all(e.map((async e=>({config:await fetch("/sample-projects/"+e+"/config.json").then((e=>e.json())),name:e}))));n({kind:"ready",demos:t})})().catch((e=>{h((()=>{n({kind:"error",message:"Failed to load demo mode. Message: "+e.toString()})}))})),[d(ot,{get popPage(){return e.popPage}}),d(Qe,{children:"Demo Projects"}),xe.cloneNode(!0),d(H,{get item(){return t()},children:{loading:()=>d(ht,{}),error:e=>(()=>{const t=Oe.cloneNode(!0);return i(t,(()=>e.message)),t})(),ready:t=>[Ue.cloneNode(!0),ke.cloneNode(!0),(()=>{const o=Be.cloneNode(!0);return i(o,d(m,{get each(){return t.demos},children:t=>(()=>{const o=Ve.cloneNode(!0),r=o.firstChild,s=r.nextSibling;return s.nextSibling,o.$$keydown=e=>{"Enter"!==e.key||Y(e.target,e.currentTarget)},o.$$click=o=>{var r;Y(o.target,o.currentTarget)&&(r=t,n({kind:"loading"}),(async()=>{const[t,n]=await Promise.all([fetch("/sample-projects/"+r.name+"/actions.json").then((e=>e.json())),fetch("/sample-projects/"+r.name+"/audio.mp3").then((e=>e.arrayBuffer()))]),o=await dt.decodeAudioData(n);if(a){const n=ct(o,r.config,t.actions.map(((e,t)=>({...e,id:""+t,session_id:Ge,insert_time:Date.now()}))),{onAddAction:e=>{n.replaceActions(n.state.actions.length,0,[{...e,insert_time:Date.now()}])}});e.pushPage({kind:"animator",state:n.state,applyAction:n.applyAction,cleanup:()=>{}})}})().catch((e=>{h((()=>{n({kind:"error",message:"Failed to load demo project. Message: "+e.toString()})}))})))},o.className="bg-gray-100 border p-4 focus:bg-white focus:shadow-md cursor-pointer hover:bg-white hover:shadow-md outline-default transition handles-clicks",i(o,d(gt,{get attribution(){return t.config.attribution.author}}),r),i(o,d(gt,{get attribution(){return t.config.attribution.title}}),s),i(o,d(gt,{get attribution(){return t.config.attribution.license}}),null),o})()})),o})()]}})]}function ct(e,t,n,r){const[i,a]=o(n),[s,l]=o(Q(n,{last_action_time:0,frames:{0:{merged_polygons:[],thumbnail:[]}}},[],[],t)),[c,d]=o(0),[u,g]=o(0),f=Math.ceil(e.duration*t.framerate),p=new Float32Array(e.getChannelData(0)),m={get actions(){return i()},get cached_state(){return s()},get update_time(){return c()},get frame(){return u()},get max_frame(){return f},get config(){return t},get audio(){return e},audio_ctx:dt,get audio_data(){return p}},w=(e,n,o)=>{const r=Date.now(),c=i(),u=c.filter(((t,n)=>n<e)),g=c.filter(((t,o)=>o>=e+n)),f=c.filter(((t,o)=>o>=e&&o<e+n)),p=Q([...o,...f.map((e=>({id:et(),session_id:Ge,insert_time:1/0,kind:"invalidate_action",frame:e.frame,invalidate:{id:e.id,time:e.insert_time}})))],s(),u,g,t);h((()=>{a([...u,...o,...g]),l(p);const e=Date.now();d(e-r)}))};let v=[];const y=e=>{h((()=>{if("undo"===e.kind){const e=new Set;let t;for(const n of[...m.actions].reverse())if(!e.has(n.id))if("invalidate_action"!==n.kind){if(n.session_id===Ge){t=n;break}}else e.add(n.invalidate.id);t&&(v.push(t),g(t.frame),r.onAddAction({id:et(),session_id:Ge,kind:"invalidate_action",frame:t.frame,invalidate:{id:t.id,time:t.insert_time}}))}else if("redo"===e.kind){const e=v.pop();e&&r.onAddAction({...e,id:et(),session_id:Ge})}else if("set_frame"===e.kind)g(Math.min(m.max_frame,Math.max(0,e.frame)));else{v=[];const t={...e,id:et(),session_id:Ge};r.onAddAction(t)}}))};return window.animator={state:m,applyAction:y,replaceActions:w},{state:m,applyAction:y,replaceActions:w}}const dt=new AudioContext;function ut(e){const t=w(),n=v(),a=y();let s=!0;r((()=>s=!1));const[l,c]=o(),[u,g]=o("Starting"),f=b(x(t,"/actions/"+e.project_id),_("created")),p=[];return async function(){g("Fetching Project");const o=x(t,"/projects/"+e.project_id),r=(await C(o)).val();if(!s)throw new Error("canceled");g("Fetching Audio");const i=S(n,r.config.audio),l=await D(i),c=await fetch(l).then((e=>e.arrayBuffer()));if(!s)throw new Error("canceled");g("Initializing Audio");const d=await dt.decodeAudioData(c);if(!s)throw new Error("canceled");g("Initializing App");const u=ct(d,r.config,[],{onAddAction:n=>{console.log("adding action",n);const o=x(t,"/actions/"+e.project_id+"/"+n.id);P(o,{created:E(),author:a.currentUser.uid,value:n}).then((e=>{console.log("action set ✓")})).catch((e=>{console.log("failed to save action",n,e),alert("error saving action")}))}});if(!s)throw new Error("canceled");g("Initializing Actions");let h=!0;if(p.push(L(f,(e=>{if(h)return;const t=e.val(),n=t.value;console.log("\\!/ added action",t);let o=u.state.actions.findIndex((e=>t.created<e.insert_time));-1===o&&(o=u.state.actions.length),console.log("NEW ACTION ADDED AT INDEX,",o,t),u.replaceActions(o,0,[{...n,id:e.key,insert_time:t.created}])}))),p.push(M(f,(e=>{console.log("changed action",e)}))),p.push(I(f,(e=>{const t=e.val(),n=t.value;console.log("firebase noted action removal ",e.key,t,"; patching local data");const o=u.state.actions.findIndex((t=>t.id===e.key));if(-1===o)return console.error("attempting to remove nonexistent action",e.key,n);u.replaceActions(o,1,[])}))),await new Promise((e=>{const t=z(f,(n=>{t(),h=!1;const o=[];n.exists()&&n.forEach((e=>{const t=e.val(),n=t.value;o.push({...n,id:e.key,insert_time:t.created})})),u.replaceActions(0,u.state.actions.length,o),e()}))})),!s)throw new Error("canceled");if(g("Starting"),!s)throw new Error("canceled");e.replacePage({kind:"animator",state:u.state,applyAction:u.applyAction,cleanup:()=>p.forEach((e=>e()))})}().catch((e=>{console.log(e),c(e.toString()),p.forEach((e=>e()))})),[d(ot,{get popPage(){return e.popPage}}),d(K,{get when(){return l()},get fallback(){return(()=>{const e=qe.cloneNode(!0),t=e.firstChild,n=t.nextSibling;return n.nextSibling,i(e,d(ht,{}),t),i(e,u,n),e})()},children:e=>(()=>{const t=He.cloneNode(!0),n=t.firstChild.nextSibling;return n.nextSibling,i(t,u,n),i(t,e,null),t})()})]}function gt(e){return(()=>{const t=We.cloneNode(!0);return i(t,(()=>e.attribution.text)),a((()=>s(t,"href",e.attribution.url))),t})()}function ft(e){const[t,n]=o(window.__audio_initialized),[r,s]=o(!1);return d(W,{get when(){return t()},get fallback(){return(()=>{const t=Ke.cloneNode(!0),o=t.firstChild;return t.$$click=()=>{const t=e.state.audio_ctx.createBufferSource();t.buffer=e.state.audio,t.connect(e.state.audio_ctx.destination),t.start(0,0,.2),s(!0),t.addEventListener("ended",(()=>{window.__audio_initialized=!0,s(!1),n(!0)}))},o.className="border px-4 py-2 shadow-md bg-white transform hover:scale-110 hover:shadow-lg transition sm:min-w-max sm:w-30 ",i(o,d(W,{get when(){return!r()},get fallback(){return d(ht,{})},children:"Start"})),a((()=>t.disabled=r())),t})()},get children(){return e.children}})}function pt(e){return(()=>{const t=ye.cloneNode(!0);return i(t,(()=>e.children)),a((()=>t.className="min-h-full flex flex-col flex-wrap items-center bg-gray-100"+(!0===e.horizontal?"":" justify-center"))),t})()}function ht(){return(()=>{const e=Ye.cloneNode(!0),t=e.firstChild.nextSibling.nextSibling;return s(t,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),e})()}function mt(){return d(st,{})}function wt(e){const[t,n]=R({kind:"loading"});console.log("waiting for",e);const o=z(e,(e=>{console.log("got value",e);const t=e.val();n(F({kind:"loaded",value:t},{merge:!0}))}),(e=>{console.log(e),n(F({kind:"error",message:e.toString()},{merge:!0}))}));return r((()=>o())),[t]}console.log("hmr reload"),f(["input","keydown","click"]),O({apiKey:"AIzaSyAJ3J40bR4cGKRrhQdsGE5W-aRSc6RbFBc",authDomain:"animator-9443f.firebaseapp.com",databaseURL:"https://animator-9443f-default-rtdb.firebaseio.com",storageBucket:"animator-9443f.appspot.com"}),U((()=>d(me,{data:0,get children(){return d(mt,{})}})),document.getElementById("app"));
