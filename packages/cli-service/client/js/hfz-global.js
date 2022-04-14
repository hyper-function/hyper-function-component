// 0.1.7
(()=>{"use strict";var e={418:(e,t,n)=>{function o(e){const{h:t,ref:n,watch:o,toRef:r,reactive:i,computed:s,Teleport:a,onMounted:l,onUnmounted:c,defineComponent:d}=e;return function(e){e.propTypes=e.propTypes||{};const u=Object.keys(e.propTypes.attrs||{}),p=Object.keys(e.propTypes.events||{}),m=Object.keys(e.propTypes.slots||{}),f={};for(let e=0;e<p.length;e++){const t=p[e];f["on"+t[0].toUpperCase()+t.slice(1)]=t}const h={};for(let e=0;e<m.length;e++){const t=m[e];h[t.toLowerCase()]=t}const w=Object.keys(f);return d({props:u,setup(d,{slots:p,attrs:m}){const v=n(),y={};if(w.length)for(let e=0;e<w.length;e++){const t=w[e],n=m[t];n&&(y[f[t]]=n)}const g={},_=i({});let $;Object.keys(p).forEach((e=>{const t=h[e.replace(/-/g,"").toLowerCase()];if(!t)return;const n=p[e];g[t]=function(e,o){if(!e)return void delete _[t];const r=_[t];r?(r.container!==e&&(r.container=e),r.args=o):_[t]={name:t,container:e,slot:n,args:o}}}));const E={};if(u.length)for(let t=0;t<u.length;t++){const n=u[t];if(null==d[n])continue;let i=d[n];""===i&&"#b"===e.propTypes.attrs[n].t&&(i=!0),E[n]=i,o(r(d,n),((e,t)=>{var o;E[n]=e,null===(o=$.changed)||void 0===o||o.call($,"attr",n,t,e)}),{deep:!0})}$=new e({attrs:E,events:y,slots:g}),l((()=>{$.connected(v.value)})),c((()=>{var e;null===(e=$.disconnected)||void 0===e||e.call($)}));const b=s((()=>Object.keys(_).map((e=>{const n=_[e];return t(a,{to:n.container},n.slot(n.args))}))));return()=>[t("div",{ref:v}),b.value]}})}}n.r(t),n.d(t,{default:()=>o})}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n.S={};var e={},t={};n.I=(o,r)=>{r||(r=[]);var i=t[o];if(i||(i=t[o]={}),!(r.indexOf(i)>=0)){if(r.push(i),e[o])return e[o];n.o(n.S,o)||(n.S[o]={}),n.S[o];var s=[];return e[o]=s.length?Promise.all(s).then((()=>e[o]=1)):1}}})(),(()=>{function e(e){return new Promise(((t,n)=>{const o=document.createElement("script");o.async=!0,o.src=e,o.onload=()=>{o.onerror=o.onload=null,t(null)},o.onerror=()=>{o.onerror=o.onload=null,n(new Error(`Failed to load ${e}`))},(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}))}const t=new Promise((e=>{"complete"===document.readyState?e():window.addEventListener("load",(()=>e()))}));function o(t,o){const r=t.reactive({teleports:[]}),i=t.createApp({data:()=>r,render:()=>r.teleports.map((e=>t.h(t.Teleport,{to:e.target},e.component)))});function s(){const e=document.querySelectorAll("template[hfz]");if(!e.length)return;const n=[];e.forEach((e=>{var o,r,s,l;if(e.hasAttribute("src")){const n=e.getAttribute("name");if(!n)return;const r=e.getAttribute("src");return i.component(n,function(e){return t.defineAsyncComponent({loader:()=>new Promise(((t,n)=>{var o=new XMLHttpRequest;o.onreadystatechange=function(){if(4==this.readyState){if(200==this.status){const e=this.responseText,n=document.createElement("template");return n.innerHTML=e,void t(a(n.content.firstChild))}n(new Error("fail to load remote template: "+e))}},o.open("GET",e,!0),o.send()}))})}(r)),void(null===(o=e.parentNode)||void 0===o||o.removeChild(e))}const c=a(e);if(c.name)return i.component(c.name,c),void(null===(r=e.parentNode)||void 0===r||r.removeChild(e));let d;if(e.hasAttribute("mount")){if(d=document.querySelector(e.getAttribute("mount")),!d)return}else d=document.createElement("div"),null===(s=e.parentNode)||void 0===s||s.insertBefore(d,e);n.push({target:d,component:t.h(c)}),null===(l=e.parentNode)||void 0===l||l.removeChild(e)})),r.teleports=r.teleports.concat(n)}function a(r){let i={};const s=r.content.querySelector("script");if(s){const e=s.textContent.trim(),t=e.slice(e.indexOf("{"));i=new Function("return "+t)()}r.hasAttribute(":data")&&!i.data&&(i.data=function(e){let t;try{t=new Function("$data",`with ($data) { return (${e}) }`)({})}catch(t){console.error(`${t.message} in expression: ${e}`)}return t}(r.getAttribute(":data")));const a={};if(r.getAttributeNames().forEach((i=>{if("import:"!==i.slice(0,7))return;const s=i.split(":"),l=s[1],c=s[2];let d=r.getAttribute(i);a[c||l]=function(r,i){return t.defineAsyncComponent({loader(){let s="@hyper.fun/"+r;i&&(s=s+"@"+i);let a=window.$HFC_NPM_CDN_URL;const l=window[`$HFC_CDN_REWRITE_${s}`];return l&&(a=l),e(`${a}/${s}/wfm/entry.js`).then((()=>{var e;return e=`${a}/${s}/hfc.css`,new Promise(((t,n)=>{const o=document.createElement("link");o.type="text/css",o.rel="stylesheet",o.href=e,o.onload=()=>{o.onerror=o.onload=null,t(null)},o.onerror=()=>{o.onerror=o.onload=null,n(new Error(`Failed to load ${e}`))},(document.head||document.getElementsByTagName("head")[0]).appendChild(o)})),function(e){const t=window.$HFC_WFM_CONTAINERS[e],o=t.init(n.S.default);return(o&&o.then?o:Promise.resolve()).then((()=>t.get("./hfc"))).then((e=>e()))}("@hyper.fun/"+r)})).then((e=>o(e.default,!0))).catch((e=>(console.error(e),console.warn(`[hfz] faild to load component: ${r} ${i} `),t.defineComponent({}))))}})}(l,d)})),i.name=r.getAttribute("name"),i.components=a,i.render=t.compile(r.innerHTML,{runtimeGlobalName:"$HFZ_VUE"}),"function"!=typeof i.data){const e=i.data;i.data=()=>e}return i}i.component("block",{emits:["mounted","unmounted"],setup:(e,{slots:n,emit:o})=>(t.onMounted((()=>o("mounted"))),t.onUnmounted((()=>o("unmounted"))),()=>n.default&&n.default())}),i.mount(document.createElement("template")),s(),window.$HFZ_MOUNT_TEMPLATES=s}window.$HFC_NPM_CDN_URL=window.$HFC_NPM_CDN_URL||"https://npm.hyper.fun/npm",window.$HFC_WFM_CONTAINERS=window.$HFC_WFM_CONTAINERS||{},Promise.all([new Promise((t=>{var n;if(!window.$HFZ_VUE)return"object"==typeof(n=window.Vue)&&"3"===n.version[0]&&n.compile&&n.Teleport?(window.$HFZ_VUE=window.Vue,void t(window.$HFZ_VUE)):void e(window.$HFC_NPM_CDN_URL+"/vue@3.2.31/dist/vue.global.prod.js").then((()=>{window.$HFZ_VUE=window.Vue,t(window.$HFZ_VUE)}));t(window.$HFZ_VUE)})),Promise.resolve().then(n.bind(n,418)),t,function(){const e=n.I("default");return e.then?e:Promise.resolve()}()]).then((([e,t])=>{!function(e,t,o){const r=n.S.default.vue=n.S.default.vue||{},i=r[t];i&&i.loaded||(r[t]={get:()=>Promise.resolve((()=>o)),from:"hfc",eager:!1})}(0,window.$HFZ_VUE.version,window.$HFZ_VUE),o(e,t.default(e))})).catch((e=>{console.warn("[hfz] faild to init"),console.error(e)}))})()})();