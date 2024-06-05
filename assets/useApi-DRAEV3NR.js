function Te(e,t){return function(){return e.apply(t,arguments)}}const{toString:ve}=Object.prototype,{getPrototypeOf:oe}=Object,J=(e=>t=>{const n=ve.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>J(t)===e),$=e=>t=>typeof t===e,{isArray:L}=Array,k=$("undefined");function Ge(e){return e!==null&&!k(e)&&e.constructor!==null&&!k(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=A("ArrayBuffer");function Xe(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const Qe=$("string"),O=$("function"),xe=$("number"),V=e=>e!==null&&typeof e=="object",Ze=e=>e===!0||e===!1,H=e=>{if(J(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Ye=A("Date"),et=A("File"),tt=A("Blob"),nt=A("FileList"),rt=e=>V(e)&&O(e.pipe),st=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=J(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},ot=A("URLSearchParams"),[it,at,ct,ut]=["ReadableStream","Request","Response","Headers"].map(A),lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function j(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let u;for(r=0;r<i;r++)u=o[r],t.call(null,e[u],u,e)}}function Pe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Ce=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ne=e=>!k(e)&&e!==Ce;function Z(){const{caseless:e}=Ne(this)&&this||{},t={},n=(r,s)=>{const o=e&&Pe(t,s)||s;H(t[o])&&H(r)?t[o]=Z(t[o],r):H(r)?t[o]=Z({},r):L(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&j(arguments[r],n);return t}const ft=(e,t,n,{allOwnKeys:r}={})=>(j(t,(s,o)=>{n&&O(s)?e[o]=Te(s,n):e[o]=s},{allOwnKeys:r}),e),dt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),pt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ht=(e,t,n,r)=>{let s,o,i;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},mt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},yt=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},wt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),bt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Et=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Rt=A("HTMLFormElement"),St=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),fe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),gt=A("RegExp"),Fe=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};j(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Ot=e=>{Fe(e,(t,n)=>{if(O(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(O(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Tt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return L(e)?r(e):r(String(e).split(t)),n},At=()=>{},xt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,v="abcdefghijklmnopqrstuvwxyz",de="0123456789",_e={DIGIT:de,ALPHA:v,ALPHA_DIGIT:v+v.toUpperCase()+de},Pt=(e=16,t=_e.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ct(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Nt=e=>{const t=new Array(10),n=(r,s)=>{if(V(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=L(r)?[]:{};return j(r,(i,u)=>{const f=n(i,s+1);!k(f)&&(o[u]=f)}),t[s]=void 0,o}}return r};return n(e,0)},Ft=A("AsyncFunction"),_t=e=>e&&(V(e)||O(e))&&O(e.then)&&O(e.catch),a={isArray:L,isArrayBuffer:Ae,isBuffer:Ge,isFormData:st,isArrayBufferView:Xe,isString:Qe,isNumber:xe,isBoolean:Ze,isObject:V,isPlainObject:H,isReadableStream:it,isRequest:at,isResponse:ct,isHeaders:ut,isUndefined:k,isDate:Ye,isFile:et,isBlob:tt,isRegExp:gt,isFunction:O,isStream:rt,isURLSearchParams:ot,isTypedArray:wt,isFileList:nt,forEach:j,merge:Z,extend:ft,trim:lt,stripBOM:dt,inherits:pt,toFlatObject:ht,kindOf:J,kindOfTest:A,endsWith:mt,toArray:yt,forEachEntry:bt,matchAll:Et,isHTMLForm:Rt,hasOwnProperty:fe,hasOwnProp:fe,reduceDescriptors:Fe,freezeMethods:Ot,toObjectSet:Tt,toCamelCase:St,noop:At,toFiniteNumber:xt,findKey:Pe,global:Ce,isContextDefined:Ne,ALPHABET:_e,generateString:Pt,isSpecCompliantForm:Ct,toJSONObject:Nt,isAsyncFn:Ft,isThenable:_t};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Le=h.prototype,Be={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Be[e]={value:e}});Object.defineProperties(h,Be);Object.defineProperty(Le,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,o)=>{const i=Object.create(Le);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},u=>u!=="isAxiosError"),h.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Lt=null;function Y(e){return a.isPlainObject(e)||a.isArray(e)}function Ue(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ue(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Bt(e){return a.isArray(e)&&!e.some(Y)}const Ut=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,R){return!a.isUndefined(R[m])});const r=n.metaTokens,s=n.visitor||c,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function c(p,m,R){let S=p;if(p&&!R&&typeof p=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&Bt(p)||(a.isFileList(p)||a.endsWith(m,"[]"))&&(S=a.toArray(p)))return m=Ue(m),S.forEach(function(b,U){!(a.isUndefined(b)||b===null)&&t.append(i===!0?pe([m],U,o):i===null?m:m+"[]",l(b))}),!1}return Y(p)?!0:(t.append(pe(R,m,o),l(p)),!1)}const d=[],w=Object.assign(Ut,{defaultVisitor:c,convertValue:l,isVisitable:Y});function y(p,m){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+m.join("."));d.push(p),a.forEach(p,function(S,x){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(x)?x.trim():x,m,w))===!0&&y(S,m?m.concat(x):[x])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function he(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&W(e,this,t)}const De=ie.prototype;De.append=function(t,n){this._pairs.push([t,n])};De.toString=function(t){const n=t?function(r){return t.call(this,r,he)}:he;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Dt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ke(e,t,n){if(!t)return e;const r=n&&n.encode||Dt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class me{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kt=typeof URLSearchParams<"u"?URLSearchParams:ie,jt=typeof FormData<"u"?FormData:null,qt=typeof Blob<"u"?Blob:null,Ht={isBrowser:!0,classes:{URLSearchParams:kt,FormData:jt,Blob:qt},protocols:["http","https","file","blob","url","data"]},ae=typeof window<"u"&&typeof document<"u",It=(e=>ae&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Mt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",zt=ae&&window.location.href||"http://localhost",Jt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ae,hasStandardBrowserEnv:It,hasStandardBrowserWebWorkerEnv:Mt,origin:zt},Symbol.toStringTag,{value:"Module"})),T={...Jt,...Ht};function $t(e,t){return W(e,new T.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return T.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Vt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Wt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function qe(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const u=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!u):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Wt(s[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Vt(r),s,n,0)}),n}return null}function Kt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const q={transitional:je,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(qe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return $t(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return W(u?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Kt(t)):t}],transformResponse:[function(t){const n=this.transitional||q.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?h.from(u,h.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{q.headers[e]={}});const vt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Gt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&vt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ye=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function Xt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Qt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Zt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Yt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class g{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(u,f,l){const c=D(f);if(!c)throw new Error("header name must be a non-empty string");const d=a.findKey(s,c);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||f]=I(u))}const i=(u,f)=>a.forEach(u,(l,c)=>o(l,c,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!Qt(t))i(Gt(t),n);else if(a.isHeaders(t))for(const[u,f]of t.entries())o(f,u,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Xt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=D(i),i){const u=a.findKey(r,i);u&&(!n||G(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||G(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=I(s),delete n[o];return}const u=t?Zt(o):String(o).trim();u!==o&&delete n[o],n[u]=I(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ye]=this[ye]={accessors:{}}).accessors,s=this.prototype;function o(i){const u=D(i);r[u]||(Yt(s,i),r[u]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}g.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(g.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(g);function X(e,t){const n=this||q,r=t||n,s=g.from(r.headers);let o=r.data;return a.forEach(e,function(u){o=u.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function He(e){return!!(e&&e.__CANCEL__)}function B(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(B,h,{__CANCEL__:!0});function Ie(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function en(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function tn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),c=r[o];i||(i=l),n[s]=f,r[s]=l;let d=o,w=0;for(;d!==s;)w+=n[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const y=c&&l-c;return y?Math.round(w*1e3/y):void 0}}function nn(e,t){let n=0;const r=1e3/t;let s=null;return function(){const i=this===!0,u=Date.now();if(i||u-n>r)return s&&(clearTimeout(s),s=null),n=u,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),e.apply(null,arguments)),r-(u-n)))}}const M=(e,t,n=3)=>{let r=0;const s=tn(50,250);return nn(o=>{const i=o.loaded,u=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),c=i<=u;r=i;const d={loaded:i,total:u,progress:u?i/u:void 0,bytes:f,rate:l||void 0,estimated:l&&u&&c?(u-i)/l:void 0,event:o,lengthComputable:u!=null};d[t?"download":"upload"]=!0,e(d)},n)},rn=T.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const u=a.isString(i)?s(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}(),sn=T.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function on(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function an(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Me(e,t){return e&&!on(t)?an(e,t):t}const we=e=>e instanceof g?{...e}:e;function F(e,t){t=t||{};const n={};function r(l,c,d){return a.isPlainObject(l)&&a.isPlainObject(c)?a.merge.call({caseless:d},l,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(l,c,d){if(a.isUndefined(c)){if(!a.isUndefined(l))return r(void 0,l,d)}else return r(l,c,d)}function o(l,c){if(!a.isUndefined(c))return r(void 0,c)}function i(l,c){if(a.isUndefined(c)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,c)}function u(l,c,d){if(d in t)return r(l,c);if(d in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(l,c)=>s(we(l),we(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const d=f[c]||s,w=d(e[c],t[c],c);a.isUndefined(w)&&d!==u||(n[c]=w)}),n}const ze=e=>{const t=F({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:u}=t;t.headers=i=g.from(i),t.url=ke(Me(t.baseURL,t.url),e.params,e.paramsSerializer),u&&i.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):"")));let f;if(a.isFormData(n)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...c]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...c].join("; "))}}if(T.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&rn(t.url))){const l=s&&o&&sn.read(o);l&&i.set(s,l)}return t},cn=typeof XMLHttpRequest<"u",un=cn&&function(e){return new Promise(function(n,r){const s=ze(e);let o=s.data;const i=g.from(s.headers).normalize();let{responseType:u}=s,f;function l(){s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let c=new XMLHttpRequest;c.open(s.method.toUpperCase(),s.url,!0),c.timeout=s.timeout;function d(){if(!c)return;const y=g.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!u||u==="text"||u==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Ie(function(S){n(S),l()},function(S){r(S),l()},m),c=null}"onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(r(new h("Request aborted",h.ECONNABORTED,s,c)),c=null)},c.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,s,c)),c=null},c.ontimeout=function(){let p=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const m=s.transitional||je;s.timeoutErrorMessage&&(p=s.timeoutErrorMessage),r(new h(p,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,s,c)),c=null},o===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(p,m){c.setRequestHeader(m,p)}),a.isUndefined(s.withCredentials)||(c.withCredentials=!!s.withCredentials),u&&u!=="json"&&(c.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&c.addEventListener("progress",M(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",M(s.onUploadProgress)),(s.cancelToken||s.signal)&&(f=y=>{c&&(r(!y||y.type?new B(null,e,c):y),c.abort(),c=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const w=en(s.url);if(w&&T.protocols.indexOf(w)===-1){r(new h("Unsupported protocol "+w+":",h.ERR_BAD_REQUEST,e));return}c.send(o||null)})},ln=(e,t)=>{let n=new AbortController,r;const s=function(f){if(!r){r=!0,i();const l=f instanceof Error?f:this.reason;n.abort(l instanceof h?l:new B(l instanceof Error?l.message:l))}};let o=t&&setTimeout(()=>{s(new h(`timeout ${t} of ms exceeded`,h.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:u}=n;return u.unsubscribe=i,[u,()=>{o&&clearTimeout(o),o=null}]},fn=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},dn=async function*(e,t,n){for await(const r of e)yield*fn(ArrayBuffer.isView(r)?r:await n(String(r)),t)},be=(e,t,n,r,s)=>{const o=dn(e,t,s);let i=0;return new ReadableStream({type:"bytes",async pull(u){const{done:f,value:l}=await o.next();if(f){u.close(),r();return}let c=l.byteLength;n&&n(i+=c),u.enqueue(new Uint8Array(l))},cancel(u){return r(u),o.return()}},{highWaterMark:2})},Ee=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},K=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Je=K&&typeof ReadableStream=="function",ee=K&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),pn=Je&&(()=>{let e=!1;const t=new Request(T.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Re=64*1024,te=Je&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),z={stream:te&&(e=>e.body)};K&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!z[t]&&(z[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new h(`Response type '${t}' is not supported`,h.ERR_NOT_SUPPORT,r)})})})(new Response);const hn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await ee(e)).byteLength},mn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??hn(t)},yn=K&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:u,onUploadProgress:f,responseType:l,headers:c,withCredentials:d="same-origin",fetchOptions:w}=ze(e);l=l?(l+"").toLowerCase():"text";let[y,p]=s||o||i?ln([s,o],i):[],m,R;const S=()=>{!m&&setTimeout(()=>{y&&y.unsubscribe()}),m=!0};let x;try{if(f&&pn&&n!=="get"&&n!=="head"&&(x=await mn(c,r))!==0){let P=new Request(t,{method:"POST",body:r,duplex:"half"}),_;a.isFormData(r)&&(_=P.headers.get("content-type"))&&c.setContentType(_),P.body&&(r=be(P.body,Re,Ee(x,M(f)),null,ee))}a.isString(d)||(d=d?"cors":"omit"),R=new Request(t,{...w,signal:y,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:d});let b=await fetch(R);const U=te&&(l==="stream"||l==="response");if(te&&(u||U)){const P={};["status","statusText","headers"].forEach(le=>{P[le]=b[le]});const _=a.toFiniteNumber(b.headers.get("content-length"));b=new Response(be(b.body,Re,u&&Ee(_,M(u,!0)),U&&S,ee),P)}l=l||"text";let Ke=await z[a.findKey(z,l)||"text"](b,e);return!U&&S(),p&&p(),await new Promise((P,_)=>{Ie(P,_,{data:Ke,headers:g.from(b.headers),status:b.status,statusText:b.statusText,config:e,request:R})})}catch(b){throw S(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,e,R),{cause:b.cause||b}):h.from(b,b&&b.code,e,R)}}),ne={http:Lt,xhr:un,fetch:yn};a.forEach(ne,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Se=e=>`- ${e}`,wn=e=>a.isFunction(e)||e===null||e===!1,$e={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!wn(n)&&(r=ne[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([u,f])=>`adapter ${u} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Se).join(`
`):" "+Se(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:ne};function Q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new B(null,e)}function ge(e){return Q(e),e.headers=g.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),$e.getAdapter(e.adapter||q.adapter)(e).then(function(r){return Q(e),r.data=X.call(e,e.transformResponse,r),r.headers=g.from(r.headers),r},function(r){return He(r)||(Q(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=g.from(r.response.headers))),Promise.reject(r)})}const Ve="1.7.2",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Oe={};ce.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ve+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,u)=>{if(t===!1)throw new h(s(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!Oe[i]&&(Oe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,u):!0}};function bn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const u=e[o],f=u===void 0||i(u,o,e);if(f!==!0)throw new h("option "+o+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}const re={assertOptions:bn,validators:ce},C=re.validators;class N{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&re.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:re.assertOptions(s,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),n.headers=g.concat(i,o);const u=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,u.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let c,d=0,w;if(!f){const p=[ge.bind(this),void 0];for(p.unshift.apply(p,u),p.push.apply(p,l),w=p.length,c=Promise.resolve(n);d<w;)c=c.then(p[d++],p[d++]);return c}w=u.length;let y=n;for(d=0;d<w;){const p=u[d++],m=u[d++];try{y=p(y)}catch(R){m.call(this,R);break}}try{c=ge.call(this,y)}catch(p){return Promise.reject(p)}for(d=0,w=l.length;d<w;)c=c.then(l[d++],l[d++]);return c}getUri(t){t=F(this.defaults,t);const n=Me(t.baseURL,t.url);return ke(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){N.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,u){return this.request(F(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}N.prototype[t]=n(),N.prototype[t+"Form"]=n(!0)});class ue{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(u=>{r.subscribe(u),o=u}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,u){r.reason||(r.reason=new B(o,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ue(function(s){t=s}),cancel:t}}}function En(e){return function(n){return e.apply(null,n)}}function Rn(e){return a.isObject(e)&&e.isAxiosError===!0}const se={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(se).forEach(([e,t])=>{se[t]=e});function We(e){const t=new N(e),n=Te(N.prototype.request,t);return a.extend(n,N.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return We(F(e,s))},n}const E=We(q);E.Axios=N;E.CanceledError=B;E.CancelToken=ue;E.isCancel=He;E.VERSION=Ve;E.toFormData=W;E.AxiosError=h;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=En;E.isAxiosError=Rn;E.mergeConfig=F;E.AxiosHeaders=g;E.formToJSON=e=>qe(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=$e.getAdapter;E.HttpStatusCode=se;E.default=E;const Sn=e=>{const t="https://rickandmortyapi.com/api/",n=f=>{const l={...f==null?void 0:f.headers},c=E.create({...f,baseURL:t,headers:l});return c.interceptors.response.use(d=>d,async d=>{throw d}),c};function r(f,l){return new Promise((c,d)=>{n().get(f,l).then(w=>c(w)).catch(w=>d(w))})}function s(f,l){return new Promise((c,d)=>{n().delete(f,l).then(w=>c(w)).catch(w=>d(w))})}function o(f,l,c){return new Promise((d,w)=>{n().post(f,l,c).then(y=>d(y)).catch(y=>w(y))})}function i(f,l,c){return new Promise((d,w)=>{n().put(f,l,c).then(y=>d(y)).catch(y=>w(y))})}function u(f,l,c){return new Promise((d,w)=>{n().patch(f,l,c).then(y=>d(y)).catch(y=>w(y))})}return{$get:r,$delete:s,$post:o,$patch:u,$put:i}};export{Sn as u};