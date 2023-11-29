function mR(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function gR(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hI={exports:{}},ih={},dI={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sl=Symbol.for("react.element"),_R=Symbol.for("react.portal"),yR=Symbol.for("react.fragment"),vR=Symbol.for("react.strict_mode"),wR=Symbol.for("react.profiler"),IR=Symbol.for("react.provider"),ER=Symbol.for("react.context"),TR=Symbol.for("react.forward_ref"),SR=Symbol.for("react.suspense"),AR=Symbol.for("react.memo"),RR=Symbol.for("react.lazy"),Y_=Symbol.iterator;function PR(t){return t===null||typeof t!="object"?null:(t=Y_&&t[Y_]||t["@@iterator"],typeof t=="function"?t:null)}var fI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pI=Object.assign,mI={};function co(t,e,n){this.props=t,this.context=e,this.refs=mI,this.updater=n||fI}co.prototype.isReactComponent={};co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gI(){}gI.prototype=co.prototype;function im(t,e,n){this.props=t,this.context=e,this.refs=mI,this.updater=n||fI}var sm=im.prototype=new gI;sm.constructor=im;pI(sm,co.prototype);sm.isPureReactComponent=!0;var J_=Array.isArray,_I=Object.prototype.hasOwnProperty,om={current:null},yI={key:!0,ref:!0,__self:!0,__source:!0};function vI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_I.call(e,r)&&!yI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Sl,type:t,key:s,ref:o,props:i,_owner:om.current}}function xR(t,e){return{$$typeof:Sl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function am(t){return typeof t=="object"&&t!==null&&t.$$typeof===Sl}function kR(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var X_=/\/+/g;function vd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kR(""+t.key):e.toString(36)}function Du(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Sl:case _R:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+vd(o,0):r,J_(i)?(n="",t!=null&&(n=t.replace(X_,"$&/")+"/"),Du(i,e,n,"",function(u){return u})):i!=null&&(am(i)&&(i=xR(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(X_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",J_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+vd(s,a);o+=Du(s,e,n,l,i)}else if(l=PR(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+vd(s,a++),o+=Du(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function su(t,e,n){if(t==null)return t;var r=[],i=0;return Du(t,r,"","",function(s){return e.call(n,s,i++)}),r}function CR(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},Vu={transition:null},bR={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:Vu,ReactCurrentOwner:om};J.Children={map:su,forEach:function(t,e,n){su(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return su(t,function(){e++}),e},toArray:function(t){return su(t,function(e){return e})||[]},only:function(t){if(!am(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=co;J.Fragment=yR;J.Profiler=wR;J.PureComponent=im;J.StrictMode=vR;J.Suspense=SR;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bR;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=pI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=om.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_I.call(e,l)&&!yI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Sl,type:t.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(t){return t={$$typeof:ER,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:IR,_context:t},t.Consumer=t};J.createElement=vI;J.createFactory=function(t){var e=vI.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:TR,render:t}};J.isValidElement=am;J.lazy=function(t){return{$$typeof:RR,_payload:{_status:-1,_result:t},_init:CR}};J.memo=function(t,e){return{$$typeof:AR,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=Vu.transition;Vu.transition={};try{t()}finally{Vu.transition=e}};J.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};J.useCallback=function(t,e){return Et.current.useCallback(t,e)};J.useContext=function(t){return Et.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};J.useEffect=function(t,e){return Et.current.useEffect(t,e)};J.useId=function(){return Et.current.useId()};J.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return Et.current.useMemo(t,e)};J.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};J.useRef=function(t){return Et.current.useRef(t)};J.useState=function(t){return Et.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return Et.current.useTransition()};J.version="18.2.0";dI.exports=J;var M=dI.exports;const wI=gR(M),NR=mR({__proto__:null,default:wI},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DR=M,VR=Symbol.for("react.element"),OR=Symbol.for("react.fragment"),LR=Object.prototype.hasOwnProperty,MR=DR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jR={key:!0,ref:!0,__self:!0,__source:!0};function II(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)LR.call(e,r)&&!jR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:VR,type:t,key:s,ref:o,props:i,_owner:MR.current}}ih.Fragment=OR;ih.jsx=II;ih.jsxs=II;hI.exports=ih;var c=hI.exports,gf={},EI={exports:{}},zt={},TI={exports:{}},SI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,W){var K=L.length;L.push(W);e:for(;0<K;){var ke=K-1>>>1,Ue=L[ke];if(0<i(Ue,W))L[ke]=W,L[K]=Ue,K=ke;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var W=L[0],K=L.pop();if(K!==W){L[0]=K;e:for(var ke=0,Ue=L.length,ru=Ue>>>1;ke<ru;){var ni=2*(ke+1)-1,yd=L[ni],ri=ni+1,iu=L[ri];if(0>i(yd,K))ri<Ue&&0>i(iu,yd)?(L[ke]=iu,L[ri]=K,ke=ri):(L[ke]=yd,L[ni]=K,ke=ni);else if(ri<Ue&&0>i(iu,K))L[ke]=iu,L[ri]=K,ke=ri;else break e}}return W}function i(L,W){var K=L.sortIndex-W.sortIndex;return K!==0?K:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,d=null,f=3,p=!1,y=!1,v=!1,T=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=L)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function E(L){if(v=!1,_(L),!y)if(n(l)!==null)y=!0,gd(R);else{var W=n(u);W!==null&&_d(E,W.startTime-L)}}function R(L,W){y=!1,v&&(v=!1,g(j),j=-1),p=!0;var K=f;try{for(_(W),d=n(l);d!==null&&(!(d.expirationTime>W)||L&&!en());){var ke=d.callback;if(typeof ke=="function"){d.callback=null,f=d.priorityLevel;var Ue=ke(d.expirationTime<=W);W=t.unstable_now(),typeof Ue=="function"?d.callback=Ue:d===n(l)&&r(l),_(W)}else r(l);d=n(l)}if(d!==null)var ru=!0;else{var ni=n(u);ni!==null&&_d(E,ni.startTime-W),ru=!1}return ru}finally{d=null,f=K,p=!1}}var k=!1,b=null,j=-1,oe=5,G=-1;function en(){return!(t.unstable_now()-G<oe)}function bo(){if(b!==null){var L=t.unstable_now();G=L;var W=!0;try{W=b(!0,L)}finally{W?No():(k=!1,b=null)}}else k=!1}var No;if(typeof m=="function")No=function(){m(bo)};else if(typeof MessageChannel<"u"){var Q_=new MessageChannel,pR=Q_.port2;Q_.port1.onmessage=bo,No=function(){pR.postMessage(null)}}else No=function(){T(bo,0)};function gd(L){b=L,k||(k=!0,No())}function _d(L,W){j=T(function(){L(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,gd(R))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var K=f;f=W;try{return L()}finally{f=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=f;f=L;try{return W()}finally{f=K}},t.unstable_scheduleCallback=function(L,W,K){var ke=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ke+K:ke):K=ke,L){case 1:var Ue=-1;break;case 2:Ue=250;break;case 5:Ue=1073741823;break;case 4:Ue=1e4;break;default:Ue=5e3}return Ue=K+Ue,L={id:h++,callback:W,priorityLevel:L,startTime:K,expirationTime:Ue,sortIndex:-1},K>ke?(L.sortIndex=K,e(u,L),n(l)===null&&L===n(u)&&(v?(g(j),j=-1):v=!0,_d(E,K-ke))):(L.sortIndex=Ue,e(l,L),y||p||(y=!0,gd(R))),L},t.unstable_shouldYield=en,t.unstable_wrapCallback=function(L){var W=f;return function(){var K=f;f=W;try{return L.apply(this,arguments)}finally{f=K}}}})(SI);TI.exports=SI;var FR=TI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AI=M,Ut=FR;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var RI=new Set,xa={};function Gi(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(xa[t]=e,t=0;t<e.length;t++)RI.add(e[t])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_f=Object.prototype.hasOwnProperty,UR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Z_={},ey={};function $R(t){return _f.call(ey,t)?!0:_f.call(Z_,t)?!1:UR.test(t)?ey[t]=!0:(Z_[t]=!0,!1)}function BR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zR(t,e,n,r){if(e===null||typeof e>"u"||BR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var lm=/[\-:]([a-z])/g;function um(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lm,um);it[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lm,um);it[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lm,um);it[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function cm(t,e,n,r){var i=it.hasOwnProperty(e)?it[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zR(e,n,i,r)&&(n=null),r||i===null?$R(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=AI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ou=Symbol.for("react.element"),ms=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),hm=Symbol.for("react.strict_mode"),yf=Symbol.for("react.profiler"),PI=Symbol.for("react.provider"),xI=Symbol.for("react.context"),dm=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),fm=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),kI=Symbol.for("react.offscreen"),ty=Symbol.iterator;function Do(t){return t===null||typeof t!="object"?null:(t=ty&&t[ty]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,wd;function Jo(t){if(wd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wd=e&&e[1]||""}return`
`+wd+t}var Id=!1;function Ed(t,e){if(!t||Id)return"";Id=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Id=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Jo(t):""}function qR(t){switch(t.tag){case 5:return Jo(t.type);case 16:return Jo("Lazy");case 13:return Jo("Suspense");case 19:return Jo("SuspenseList");case 0:case 2:case 15:return t=Ed(t.type,!1),t;case 11:return t=Ed(t.type.render,!1),t;case 1:return t=Ed(t.type,!0),t;default:return""}}function If(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case ms:return"Portal";case yf:return"Profiler";case hm:return"StrictMode";case vf:return"Suspense";case wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xI:return(t.displayName||"Context")+".Consumer";case PI:return(t._context.displayName||"Context")+".Provider";case dm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fm:return e=t.displayName||null,e!==null?e:If(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return If(t(e))}catch{}}return null}function WR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return If(e);case 8:return e===hm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function CI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function GR(t){var e=CI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function au(t){t._valueTracker||(t._valueTracker=GR(t))}function bI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=CI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function rc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ef(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ny(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function NI(t,e){e=e.checked,e!=null&&cm(t,"checked",e,!1)}function Tf(t,e){NI(t,e);var n=Cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sf(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ry(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sf(t,e,n){(e!=="number"||rc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Xo=Array.isArray;function ks(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Af(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function iy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Xo(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function DI(t,e){var n=Cr(e.value),r=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function sy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function VI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?VI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lu,OI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lu=lu||document.createElement("div"),lu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},KR=["Webkit","ms","Moz","O"];Object.keys(ua).forEach(function(t){KR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ua[e]=ua[t]})});function LI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ua.hasOwnProperty(t)&&ua[t]?(""+e).trim():e+"px"}function MI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=LI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var HR=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pf(t,e){if(e){if(HR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kf=null;function pm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cf=null,Cs=null,bs=null;function oy(t){if(t=Pl(t)){if(typeof Cf!="function")throw Error(P(280));var e=t.stateNode;e&&(e=uh(e),Cf(t.stateNode,t.type,e))}}function jI(t){Cs?bs?bs.push(t):bs=[t]:Cs=t}function FI(){if(Cs){var t=Cs,e=bs;if(bs=Cs=null,oy(t),e)for(t=0;t<e.length;t++)oy(e[t])}}function UI(t,e){return t(e)}function $I(){}var Td=!1;function BI(t,e,n){if(Td)return t(e,n);Td=!0;try{return UI(t,e,n)}finally{Td=!1,(Cs!==null||bs!==null)&&($I(),FI())}}function Ca(t,e){var n=t.stateNode;if(n===null)return null;var r=uh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var bf=!1;if(qn)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){bf=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{bf=!1}function QR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ca=!1,ic=null,sc=!1,Nf=null,YR={onError:function(t){ca=!0,ic=t}};function JR(t,e,n,r,i,s,o,a,l){ca=!1,ic=null,QR.apply(YR,arguments)}function XR(t,e,n,r,i,s,o,a,l){if(JR.apply(this,arguments),ca){if(ca){var u=ic;ca=!1,ic=null}else throw Error(P(198));sc||(sc=!0,Nf=u)}}function Ki(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ay(t){if(Ki(t)!==t)throw Error(P(188))}function ZR(t){var e=t.alternate;if(!e){if(e=Ki(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ay(i),t;if(s===r)return ay(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function qI(t){return t=ZR(t),t!==null?WI(t):null}function WI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=WI(t);if(e!==null)return e;t=t.sibling}return null}var GI=Ut.unstable_scheduleCallback,ly=Ut.unstable_cancelCallback,eP=Ut.unstable_shouldYield,tP=Ut.unstable_requestPaint,Ce=Ut.unstable_now,nP=Ut.unstable_getCurrentPriorityLevel,mm=Ut.unstable_ImmediatePriority,KI=Ut.unstable_UserBlockingPriority,oc=Ut.unstable_NormalPriority,rP=Ut.unstable_LowPriority,HI=Ut.unstable_IdlePriority,sh=null,Rn=null;function iP(t){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(sh,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:aP,sP=Math.log,oP=Math.LN2;function aP(t){return t>>>=0,t===0?32:31-(sP(t)/oP|0)|0}var uu=64,cu=4194304;function Zo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ac(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Zo(a):(s&=o,s!==0&&(r=Zo(s)))}else o=n&~i,o!==0?r=Zo(o):s!==0&&(r=Zo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function lP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-an(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=lP(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function QI(){var t=uu;return uu<<=1,!(uu&4194240)&&(uu=64),t}function Sd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Al(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function cP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function YI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var JI,_m,XI,ZI,eE,Vf=!1,hu=[],vr=null,wr=null,Ir=null,ba=new Map,Na=new Map,cr=[],hP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uy(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function Oo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Pl(e),e!==null&&_m(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function dP(t,e,n,r,i){switch(e){case"focusin":return vr=Oo(vr,t,e,n,r,i),!0;case"dragenter":return wr=Oo(wr,t,e,n,r,i),!0;case"mouseover":return Ir=Oo(Ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ba.set(s,Oo(ba.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Na.set(s,Oo(Na.get(s)||null,t,e,n,r,i)),!0}return!1}function tE(t){var e=pi(t.target);if(e!==null){var n=Ki(e);if(n!==null){if(e=n.tag,e===13){if(e=zI(n),e!==null){t.blockedOn=e,eE(t.priority,function(){XI(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ou(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kf=r,n.target.dispatchEvent(r),kf=null}else return e=Pl(n),e!==null&&_m(e),t.blockedOn=n,!1;e.shift()}return!0}function cy(t,e,n){Ou(t)&&n.delete(e)}function fP(){Vf=!1,vr!==null&&Ou(vr)&&(vr=null),wr!==null&&Ou(wr)&&(wr=null),Ir!==null&&Ou(Ir)&&(Ir=null),ba.forEach(cy),Na.forEach(cy)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,Vf||(Vf=!0,Ut.unstable_scheduleCallback(Ut.unstable_NormalPriority,fP)))}function Da(t){function e(i){return Lo(i,t)}if(0<hu.length){Lo(hu[0],t);for(var n=1;n<hu.length;n++){var r=hu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vr!==null&&Lo(vr,t),wr!==null&&Lo(wr,t),Ir!==null&&Lo(Ir,t),ba.forEach(e),Na.forEach(e),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)tE(n),n.blockedOn===null&&cr.shift()}var Ns=Jn.ReactCurrentBatchConfig,lc=!0;function pP(t,e,n,r){var i=re,s=Ns.transition;Ns.transition=null;try{re=1,ym(t,e,n,r)}finally{re=i,Ns.transition=s}}function mP(t,e,n,r){var i=re,s=Ns.transition;Ns.transition=null;try{re=4,ym(t,e,n,r)}finally{re=i,Ns.transition=s}}function ym(t,e,n,r){if(lc){var i=Of(t,e,n,r);if(i===null)Vd(t,e,r,uc,n),uy(t,r);else if(dP(i,t,e,n,r))r.stopPropagation();else if(uy(t,r),e&4&&-1<hP.indexOf(t)){for(;i!==null;){var s=Pl(i);if(s!==null&&JI(s),s=Of(t,e,n,r),s===null&&Vd(t,e,r,uc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vd(t,e,r,null,n)}}var uc=null;function Of(t,e,n,r){if(uc=null,t=pm(r),t=pi(t),t!==null)if(e=Ki(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return uc=t,null}function nE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nP()){case mm:return 1;case KI:return 4;case oc:case rP:return 16;case HI:return 536870912;default:return 16}default:return 16}}var pr=null,vm=null,Lu=null;function rE(){if(Lu)return Lu;var t,e=vm,n=e.length,r,i="value"in pr?pr.value:pr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Lu=i.slice(t,1<r?1-r:void 0)}function Mu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function du(){return!0}function hy(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?du:hy,this.isPropagationStopped=hy,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=du)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=du)},persist:function(){},isPersistent:du}),e}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wm=qt(ho),Rl=we({},ho,{view:0,detail:0}),gP=qt(Rl),Ad,Rd,Mo,oh=we({},Rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Im,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(Ad=t.screenX-Mo.screenX,Rd=t.screenY-Mo.screenY):Rd=Ad=0,Mo=t),Ad)},movementY:function(t){return"movementY"in t?t.movementY:Rd}}),dy=qt(oh),_P=we({},oh,{dataTransfer:0}),yP=qt(_P),vP=we({},Rl,{relatedTarget:0}),Pd=qt(vP),wP=we({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),IP=qt(wP),EP=we({},ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TP=qt(EP),SP=we({},ho,{data:0}),fy=qt(SP),AP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=PP[t])?!!e[t]:!1}function Im(){return xP}var kP=we({},Rl,{key:function(t){if(t.key){var e=AP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Im,charCode:function(t){return t.type==="keypress"?Mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CP=qt(kP),bP=we({},oh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),py=qt(bP),NP=we({},Rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Im}),DP=qt(NP),VP=we({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),OP=qt(VP),LP=we({},oh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),MP=qt(LP),jP=[9,13,27,32],Em=qn&&"CompositionEvent"in window,ha=null;qn&&"documentMode"in document&&(ha=document.documentMode);var FP=qn&&"TextEvent"in window&&!ha,iE=qn&&(!Em||ha&&8<ha&&11>=ha),my=String.fromCharCode(32),gy=!1;function sE(t,e){switch(t){case"keyup":return jP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function UP(t,e){switch(t){case"compositionend":return oE(e);case"keypress":return e.which!==32?null:(gy=!0,my);case"textInput":return t=e.data,t===my&&gy?null:t;default:return null}}function $P(t,e){if(_s)return t==="compositionend"||!Em&&sE(t,e)?(t=rE(),Lu=vm=pr=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iE&&e.locale!=="ko"?null:e.data;default:return null}}var BP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _y(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BP[t.type]:e==="textarea"}function aE(t,e,n,r){jI(r),e=cc(e,"onChange"),0<e.length&&(n=new wm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var da=null,Va=null;function zP(t){yE(t,0)}function ah(t){var e=ws(t);if(bI(e))return t}function qP(t,e){if(t==="change")return e}var lE=!1;if(qn){var xd;if(qn){var kd="oninput"in document;if(!kd){var yy=document.createElement("div");yy.setAttribute("oninput","return;"),kd=typeof yy.oninput=="function"}xd=kd}else xd=!1;lE=xd&&(!document.documentMode||9<document.documentMode)}function vy(){da&&(da.detachEvent("onpropertychange",uE),Va=da=null)}function uE(t){if(t.propertyName==="value"&&ah(Va)){var e=[];aE(e,Va,t,pm(t)),BI(zP,e)}}function WP(t,e,n){t==="focusin"?(vy(),da=e,Va=n,da.attachEvent("onpropertychange",uE)):t==="focusout"&&vy()}function GP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ah(Va)}function KP(t,e){if(t==="click")return ah(e)}function HP(t,e){if(t==="input"||t==="change")return ah(e)}function QP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var un=typeof Object.is=="function"?Object.is:QP;function Oa(t,e){if(un(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_f.call(e,i)||!un(t[i],e[i]))return!1}return!0}function wy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Iy(t,e){var n=wy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wy(n)}}function cE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hE(){for(var t=window,e=rc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=rc(t.document)}return e}function Tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function YP(t){var e=hE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cE(n.ownerDocument.documentElement,n)){if(r!==null&&Tm(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Iy(n,s);var o=Iy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JP=qn&&"documentMode"in document&&11>=document.documentMode,ys=null,Lf=null,fa=null,Mf=!1;function Ey(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mf||ys==null||ys!==rc(r)||(r=ys,"selectionStart"in r&&Tm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fa&&Oa(fa,r)||(fa=r,r=cc(Lf,"onSelect"),0<r.length&&(e=new wm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ys)))}function fu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vs={animationend:fu("Animation","AnimationEnd"),animationiteration:fu("Animation","AnimationIteration"),animationstart:fu("Animation","AnimationStart"),transitionend:fu("Transition","TransitionEnd")},Cd={},dE={};qn&&(dE=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function lh(t){if(Cd[t])return Cd[t];if(!vs[t])return t;var e=vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dE)return Cd[t]=e[n];return t}var fE=lh("animationend"),pE=lh("animationiteration"),mE=lh("animationstart"),gE=lh("transitionend"),_E=new Map,Ty="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){_E.set(t,e),Gi(e,[t])}for(var bd=0;bd<Ty.length;bd++){var Nd=Ty[bd],XP=Nd.toLowerCase(),ZP=Nd[0].toUpperCase()+Nd.slice(1);qr(XP,"on"+ZP)}qr(fE,"onAnimationEnd");qr(pE,"onAnimationIteration");qr(mE,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(gE,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);Gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ex=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function Sy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,XR(r,e,void 0,t),t.currentTarget=null}function yE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Sy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Sy(i,a,u),s=l}}}if(sc)throw t=Nf,sc=!1,Nf=null,t}function ue(t,e){var n=e[Bf];n===void 0&&(n=e[Bf]=new Set);var r=t+"__bubble";n.has(r)||(vE(e,t,2,!1),n.add(r))}function Dd(t,e,n){var r=0;e&&(r|=4),vE(n,t,r,e)}var pu="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[pu]){t[pu]=!0,RI.forEach(function(n){n!=="selectionchange"&&(ex.has(n)||Dd(n,!1,t),Dd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pu]||(e[pu]=!0,Dd("selectionchange",!1,e))}}function vE(t,e,n,r){switch(nE(e)){case 1:var i=pP;break;case 4:i=mP;break;default:i=ym}n=i.bind(null,e,n,t),i=void 0,!bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Vd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=pi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}BI(function(){var u=s,h=pm(n),d=[];e:{var f=_E.get(t);if(f!==void 0){var p=wm,y=t;switch(t){case"keypress":if(Mu(n)===0)break e;case"keydown":case"keyup":p=CP;break;case"focusin":y="focus",p=Pd;break;case"focusout":y="blur",p=Pd;break;case"beforeblur":case"afterblur":p=Pd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=dy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=yP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=DP;break;case fE:case pE:case mE:p=IP;break;case gE:p=OP;break;case"scroll":p=gP;break;case"wheel":p=MP;break;case"copy":case"cut":case"paste":p=TP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=py}var v=(e&4)!==0,T=!v&&t==="scroll",g=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,_;m!==null;){_=m;var E=_.stateNode;if(_.tag===5&&E!==null&&(_=E,g!==null&&(E=Ca(m,g),E!=null&&v.push(Ma(m,E,_)))),T)break;m=m.return}0<v.length&&(f=new p(f,y,null,n,h),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==kf&&(y=n.relatedTarget||n.fromElement)&&(pi(y)||y[Wn]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?pi(y):null,y!==null&&(T=Ki(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=dy,E="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=py,E="onPointerLeave",g="onPointerEnter",m="pointer"),T=p==null?f:ws(p),_=y==null?f:ws(y),f=new v(E,m+"leave",p,n,h),f.target=T,f.relatedTarget=_,E=null,pi(h)===u&&(v=new v(g,m+"enter",y,n,h),v.target=_,v.relatedTarget=T,E=v),T=E,p&&y)t:{for(v=p,g=y,m=0,_=v;_;_=rs(_))m++;for(_=0,E=g;E;E=rs(E))_++;for(;0<m-_;)v=rs(v),m--;for(;0<_-m;)g=rs(g),_--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=rs(v),g=rs(g)}v=null}else v=null;p!==null&&Ay(d,f,p,v,!1),y!==null&&T!==null&&Ay(d,T,y,v,!0)}}e:{if(f=u?ws(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=qP;else if(_y(f))if(lE)R=HP;else{R=GP;var k=WP}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=KP);if(R&&(R=R(t,u))){aE(d,R,n,h);break e}k&&k(t,f,u),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&Sf(f,"number",f.value)}switch(k=u?ws(u):window,t){case"focusin":(_y(k)||k.contentEditable==="true")&&(ys=k,Lf=u,fa=null);break;case"focusout":fa=Lf=ys=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,Ey(d,n,h);break;case"selectionchange":if(JP)break;case"keydown":case"keyup":Ey(d,n,h)}var b;if(Em)e:{switch(t){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else _s?sE(t,n)&&(j="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(iE&&n.locale!=="ko"&&(_s||j!=="onCompositionStart"?j==="onCompositionEnd"&&_s&&(b=rE()):(pr=h,vm="value"in pr?pr.value:pr.textContent,_s=!0)),k=cc(u,j),0<k.length&&(j=new fy(j,t,null,n,h),d.push({event:j,listeners:k}),b?j.data=b:(b=oE(n),b!==null&&(j.data=b)))),(b=FP?UP(t,n):$P(t,n))&&(u=cc(u,"onBeforeInput"),0<u.length&&(h=new fy("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=b))}yE(d,e)})}function Ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ca(t,n),s!=null&&r.unshift(Ma(t,s,i)),s=Ca(t,e),s!=null&&r.push(Ma(t,s,i))),t=t.return}return r}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ay(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ca(n,s),l!=null&&o.unshift(Ma(n,l,a))):i||(l=Ca(n,s),l!=null&&o.push(Ma(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tx=/\r\n?/g,nx=/\u0000|\uFFFD/g;function Ry(t){return(typeof t=="string"?t:""+t).replace(tx,`
`).replace(nx,"")}function mu(t,e,n){if(e=Ry(e),Ry(t)!==e&&n)throw Error(P(425))}function hc(){}var jf=null,Ff=null;function Uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $f=typeof setTimeout=="function"?setTimeout:void 0,rx=typeof clearTimeout=="function"?clearTimeout:void 0,Py=typeof Promise=="function"?Promise:void 0,ix=typeof queueMicrotask=="function"?queueMicrotask:typeof Py<"u"?function(t){return Py.resolve(null).then(t).catch(sx)}:$f;function sx(t){setTimeout(function(){throw t})}function Od(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Da(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Da(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fo=Math.random().toString(36).slice(2),mn="__reactFiber$"+fo,ja="__reactProps$"+fo,Wn="__reactContainer$"+fo,Bf="__reactEvents$"+fo,ox="__reactListeners$"+fo,ax="__reactHandles$"+fo;function pi(t){var e=t[mn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[mn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xy(t);t!==null;){if(n=t[mn])return n;t=xy(t)}return e}t=n,n=t.parentNode}return null}function Pl(t){return t=t[mn]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function uh(t){return t[ja]||null}var zf=[],Is=-1;function Wr(t){return{current:t}}function de(t){0>Is||(t.current=zf[Is],zf[Is]=null,Is--)}function ae(t,e){Is++,zf[Is]=t.current,t.current=e}var br={},dt=Wr(br),Nt=Wr(!1),xi=br;function zs(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Dt(t){return t=t.childContextTypes,t!=null}function dc(){de(Nt),de(dt)}function ky(t,e,n){if(dt.current!==br)throw Error(P(168));ae(dt,e),ae(Nt,n)}function wE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,WR(t)||"Unknown",i));return we({},n,r)}function fc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,xi=dt.current,ae(dt,t),ae(Nt,Nt.current),!0}function Cy(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=wE(t,e,xi),r.__reactInternalMemoizedMergedChildContext=t,de(Nt),de(dt),ae(dt,t)):de(Nt),ae(Nt,n)}var On=null,ch=!1,Ld=!1;function IE(t){On===null?On=[t]:On.push(t)}function lx(t){ch=!0,IE(t)}function Gr(){if(!Ld&&On!==null){Ld=!0;var t=0,e=re;try{var n=On;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}On=null,ch=!1}catch(i){throw On!==null&&(On=On.slice(t+1)),GI(mm,Gr),i}finally{re=e,Ld=!1}}return null}var Es=[],Ts=0,pc=null,mc=0,Wt=[],Gt=0,ki=null,Ln=1,Mn="";function si(t,e){Es[Ts++]=mc,Es[Ts++]=pc,pc=t,mc=e}function EE(t,e,n){Wt[Gt++]=Ln,Wt[Gt++]=Mn,Wt[Gt++]=ki,ki=t;var r=Ln;t=Mn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ln=1<<32-an(e)+i|n<<i|r,Mn=s+t}else Ln=1<<s|n<<i|r,Mn=t}function Sm(t){t.return!==null&&(si(t,1),EE(t,1,0))}function Am(t){for(;t===pc;)pc=Es[--Ts],Es[Ts]=null,mc=Es[--Ts],Es[Ts]=null;for(;t===ki;)ki=Wt[--Gt],Wt[Gt]=null,Mn=Wt[--Gt],Wt[Gt]=null,Ln=Wt[--Gt],Wt[Gt]=null}var Ft=null,Mt=null,fe=!1,sn=null;function TE(t,e){var n=Ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function by(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ki!==null?{id:Ln,overflow:Mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ft=t,Mt=null,!0):!1;default:return!1}}function qf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wf(t){if(fe){var e=Mt;if(e){var n=e;if(!by(t,e)){if(qf(t))throw Error(P(418));e=Er(n.nextSibling);var r=Ft;e&&by(t,e)?TE(r,n):(t.flags=t.flags&-4097|2,fe=!1,Ft=t)}}else{if(qf(t))throw Error(P(418));t.flags=t.flags&-4097|2,fe=!1,Ft=t}}}function Ny(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ft=t}function gu(t){if(t!==Ft)return!1;if(!fe)return Ny(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uf(t.type,t.memoizedProps)),e&&(e=Mt)){if(qf(t))throw SE(),Error(P(418));for(;e;)TE(t,e),e=Er(e.nextSibling)}if(Ny(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Ft?Er(t.stateNode.nextSibling):null;return!0}function SE(){for(var t=Mt;t;)t=Er(t.nextSibling)}function qs(){Mt=Ft=null,fe=!1}function Rm(t){sn===null?sn=[t]:sn.push(t)}var ux=Jn.ReactCurrentBatchConfig;function nn(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var gc=Wr(null),_c=null,Ss=null,Pm=null;function xm(){Pm=Ss=_c=null}function km(t){var e=gc.current;de(gc),t._currentValue=e}function Gf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){_c=t,Pm=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xt=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(Pm!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(_c===null)throw Error(P(308));Ss=t,_c.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var mi=null;function Cm(t){mi===null?mi=[t]:mi.push(t)}function AE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cm(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gn(t,r)}function Gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function bm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function RE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gn(t,n)}return i=r.interleaved,i===null?(e.next=e,Cm(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gn(t,n)}function ju(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gm(t,n)}}function Dy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yc(t,e,n,r){var i=t.updateQueue;ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(p,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(p,d,f):y,f==null)break e;d=we({},d,f);break e;case 2:ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=p,l=d):h=h.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);bi|=o,t.lanes=o,t.memoizedState=d}}function Vy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var PE=new AI.Component().refs;function Kf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hh={isMounted:function(t){return(t=t._reactInternals)?Ki(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=Ar(t),s=$n(r,i);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(ln(e,t,i,r),ju(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=Ar(t),s=$n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,i),e!==null&&(ln(e,t,i,r),ju(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=Ar(t),i=$n(n,r);i.tag=2,e!=null&&(i.callback=e),e=Tr(t,i,r),e!==null&&(ln(e,t,r,n),ju(e,t,r))}};function Oy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oa(n,r)||!Oa(i,s):!0}function xE(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(i=Dt(e)?xi:dt.current,r=e.contextTypes,s=(r=r!=null)?zs(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ly(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hh.enqueueReplaceState(e,e.state,null)}function Hf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=PE,bm(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Jt(s):(s=Dt(e)?xi:dt.current,i.context=zs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hh.enqueueReplaceState(i,i.state,null),yc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===PE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function _u(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function My(t){var e=t._init;return e(t._payload)}function kE(t){function e(g,m){if(t){var _=g.deletions;_===null?(g.deletions=[m],g.flags|=16):_.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Rr(g,m),g.index=0,g.sibling=null,g}function s(g,m,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<m?(g.flags|=2,m):_):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,_,E){return m===null||m.tag!==6?(m=zd(_,g.mode,E),m.return=g,m):(m=i(m,_),m.return=g,m)}function l(g,m,_,E){var R=_.type;return R===gs?h(g,m,_.props.children,E,_.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===lr&&My(R)===m.type)?(E=i(m,_.props),E.ref=jo(g,m,_),E.return=g,E):(E=qu(_.type,_.key,_.props,null,g.mode,E),E.ref=jo(g,m,_),E.return=g,E)}function u(g,m,_,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=qd(_,g.mode,E),m.return=g,m):(m=i(m,_.children||[]),m.return=g,m)}function h(g,m,_,E,R){return m===null||m.tag!==7?(m=Ti(_,g.mode,E,R),m.return=g,m):(m=i(m,_),m.return=g,m)}function d(g,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=zd(""+m,g.mode,_),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ou:return _=qu(m.type,m.key,m.props,null,g.mode,_),_.ref=jo(g,null,m),_.return=g,_;case ms:return m=qd(m,g.mode,_),m.return=g,m;case lr:var E=m._init;return d(g,E(m._payload),_)}if(Xo(m)||Do(m))return m=Ti(m,g.mode,_,null),m.return=g,m;_u(g,m)}return null}function f(g,m,_,E){var R=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:a(g,m,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ou:return _.key===R?l(g,m,_,E):null;case ms:return _.key===R?u(g,m,_,E):null;case lr:return R=_._init,f(g,m,R(_._payload),E)}if(Xo(_)||Do(_))return R!==null?null:h(g,m,_,E,null);_u(g,_)}return null}function p(g,m,_,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(_)||null,a(m,g,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ou:return g=g.get(E.key===null?_:E.key)||null,l(m,g,E,R);case ms:return g=g.get(E.key===null?_:E.key)||null,u(m,g,E,R);case lr:var k=E._init;return p(g,m,_,k(E._payload),R)}if(Xo(E)||Do(E))return g=g.get(_)||null,h(m,g,E,R,null);_u(m,E)}return null}function y(g,m,_,E){for(var R=null,k=null,b=m,j=m=0,oe=null;b!==null&&j<_.length;j++){b.index>j?(oe=b,b=null):oe=b.sibling;var G=f(g,b,_[j],E);if(G===null){b===null&&(b=oe);break}t&&b&&G.alternate===null&&e(g,b),m=s(G,m,j),k===null?R=G:k.sibling=G,k=G,b=oe}if(j===_.length)return n(g,b),fe&&si(g,j),R;if(b===null){for(;j<_.length;j++)b=d(g,_[j],E),b!==null&&(m=s(b,m,j),k===null?R=b:k.sibling=b,k=b);return fe&&si(g,j),R}for(b=r(g,b);j<_.length;j++)oe=p(b,g,j,_[j],E),oe!==null&&(t&&oe.alternate!==null&&b.delete(oe.key===null?j:oe.key),m=s(oe,m,j),k===null?R=oe:k.sibling=oe,k=oe);return t&&b.forEach(function(en){return e(g,en)}),fe&&si(g,j),R}function v(g,m,_,E){var R=Do(_);if(typeof R!="function")throw Error(P(150));if(_=R.call(_),_==null)throw Error(P(151));for(var k=R=null,b=m,j=m=0,oe=null,G=_.next();b!==null&&!G.done;j++,G=_.next()){b.index>j?(oe=b,b=null):oe=b.sibling;var en=f(g,b,G.value,E);if(en===null){b===null&&(b=oe);break}t&&b&&en.alternate===null&&e(g,b),m=s(en,m,j),k===null?R=en:k.sibling=en,k=en,b=oe}if(G.done)return n(g,b),fe&&si(g,j),R;if(b===null){for(;!G.done;j++,G=_.next())G=d(g,G.value,E),G!==null&&(m=s(G,m,j),k===null?R=G:k.sibling=G,k=G);return fe&&si(g,j),R}for(b=r(g,b);!G.done;j++,G=_.next())G=p(b,g,j,G.value,E),G!==null&&(t&&G.alternate!==null&&b.delete(G.key===null?j:G.key),m=s(G,m,j),k===null?R=G:k.sibling=G,k=G);return t&&b.forEach(function(bo){return e(g,bo)}),fe&&si(g,j),R}function T(g,m,_,E){if(typeof _=="object"&&_!==null&&_.type===gs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ou:e:{for(var R=_.key,k=m;k!==null;){if(k.key===R){if(R=_.type,R===gs){if(k.tag===7){n(g,k.sibling),m=i(k,_.props.children),m.return=g,g=m;break e}}else if(k.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===lr&&My(R)===k.type){n(g,k.sibling),m=i(k,_.props),m.ref=jo(g,k,_),m.return=g,g=m;break e}n(g,k);break}else e(g,k);k=k.sibling}_.type===gs?(m=Ti(_.props.children,g.mode,E,_.key),m.return=g,g=m):(E=qu(_.type,_.key,_.props,null,g.mode,E),E.ref=jo(g,m,_),E.return=g,g=E)}return o(g);case ms:e:{for(k=_.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(g,m.sibling),m=i(m,_.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=qd(_,g.mode,E),m.return=g,g=m}return o(g);case lr:return k=_._init,T(g,m,k(_._payload),E)}if(Xo(_))return y(g,m,_,E);if(Do(_))return v(g,m,_,E);_u(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,_),m.return=g,g=m):(n(g,m),m=zd(_,g.mode,E),m.return=g,g=m),o(g)):n(g,m)}return T}var Ws=kE(!0),CE=kE(!1),xl={},Pn=Wr(xl),Fa=Wr(xl),Ua=Wr(xl);function gi(t){if(t===xl)throw Error(P(174));return t}function Nm(t,e){switch(ae(Ua,e),ae(Fa,t),ae(Pn,xl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rf(e,t)}de(Pn),ae(Pn,e)}function Gs(){de(Pn),de(Fa),de(Ua)}function bE(t){gi(Ua.current);var e=gi(Pn.current),n=Rf(e,t.type);e!==n&&(ae(Fa,t),ae(Pn,n))}function Dm(t){Fa.current===t&&(de(Pn),de(Fa))}var _e=Wr(0);function vc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Md=[];function Vm(){for(var t=0;t<Md.length;t++)Md[t]._workInProgressVersionPrimary=null;Md.length=0}var Fu=Jn.ReactCurrentDispatcher,jd=Jn.ReactCurrentBatchConfig,Ci=0,ye=null,Me=null,Be=null,wc=!1,pa=!1,$a=0,cx=0;function ot(){throw Error(P(321))}function Om(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!un(t[n],e[n]))return!1;return!0}function Lm(t,e,n,r,i,s){if(Ci=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fu.current=t===null||t.memoizedState===null?px:mx,t=n(r,i),pa){s=0;do{if(pa=!1,$a=0,25<=s)throw Error(P(301));s+=1,Be=Me=null,e.updateQueue=null,Fu.current=gx,t=n(r,i)}while(pa)}if(Fu.current=Ic,e=Me!==null&&Me.next!==null,Ci=0,Be=Me=ye=null,wc=!1,e)throw Error(P(300));return t}function Mm(){var t=$a!==0;return $a=0,t}function pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?ye.memoizedState=Be=t:Be=Be.next=t,Be}function Xt(){if(Me===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=Be===null?ye.memoizedState:Be.next;if(e!==null)Be=e,Me=t;else{if(t===null)throw Error(P(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Be===null?ye.memoizedState=Be=t:Be=Be.next=t}return Be}function Ba(t,e){return typeof e=="function"?e(t):e}function Fd(t){var e=Xt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Ci&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ye.lanes|=h,bi|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,un(r,e.memoizedState)||(xt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,bi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ud(t){var e=Xt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);un(s,e.memoizedState)||(xt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function NE(){}function DE(t,e){var n=ye,r=Xt(),i=e(),s=!un(r.memoizedState,i);if(s&&(r.memoizedState=i,xt=!0),r=r.queue,jm(LE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,za(9,OE.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(P(349));Ci&30||VE(n,e,i)}return i}function VE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function OE(t,e,n,r){e.value=n,e.getSnapshot=r,ME(e)&&jE(t)}function LE(t,e,n){return n(function(){ME(e)&&jE(t)})}function ME(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!un(t,n)}catch{return!0}}function jE(t){var e=Gn(t,1);e!==null&&ln(e,t,1,-1)}function jy(t){var e=pn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=fx.bind(null,ye,t),[e.memoizedState,t]}function za(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function FE(){return Xt().memoizedState}function Uu(t,e,n,r){var i=pn();ye.flags|=t,i.memoizedState=za(1|e,n,void 0,r===void 0?null:r)}function dh(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&Om(r,o.deps)){i.memoizedState=za(e,n,s,r);return}}ye.flags|=t,i.memoizedState=za(1|e,n,s,r)}function Fy(t,e){return Uu(8390656,8,t,e)}function jm(t,e){return dh(2048,8,t,e)}function UE(t,e){return dh(4,2,t,e)}function $E(t,e){return dh(4,4,t,e)}function BE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zE(t,e,n){return n=n!=null?n.concat([t]):null,dh(4,4,BE.bind(null,e,t),n)}function Fm(){}function qE(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Om(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function WE(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Om(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function GE(t,e,n){return Ci&21?(un(n,e)||(n=QI(),ye.lanes|=n,bi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xt=!0),t.memoizedState=n)}function hx(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=jd.transition;jd.transition={};try{t(!1),e()}finally{re=n,jd.transition=r}}function KE(){return Xt().memoizedState}function dx(t,e,n){var r=Ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},HE(t))QE(e,n);else if(n=AE(t,e,n,r),n!==null){var i=_t();ln(n,t,r,i),YE(n,e,r)}}function fx(t,e,n){var r=Ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(HE(t))QE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,un(a,o)){var l=e.interleaved;l===null?(i.next=i,Cm(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=AE(t,e,i,r),n!==null&&(i=_t(),ln(n,t,r,i),YE(n,e,r))}}function HE(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function QE(t,e){pa=wc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function YE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gm(t,n)}}var Ic={readContext:Jt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},px={readContext:Jt,useCallback:function(t,e){return pn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:Fy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uu(4194308,4,BE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uu(4,2,t,e)},useMemo:function(t,e){var n=pn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=pn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dx.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=pn();return t={current:t},e.memoizedState=t},useState:jy,useDebugValue:Fm,useDeferredValue:function(t){return pn().memoizedState=t},useTransition:function(){var t=jy(!1),e=t[0];return t=hx.bind(null,t[1]),pn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=pn();if(fe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),qe===null)throw Error(P(349));Ci&30||VE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Fy(LE.bind(null,r,s,t),[t]),r.flags|=2048,za(9,OE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=pn(),e=qe.identifierPrefix;if(fe){var n=Mn,r=Ln;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mx={readContext:Jt,useCallback:qE,useContext:Jt,useEffect:jm,useImperativeHandle:zE,useInsertionEffect:UE,useLayoutEffect:$E,useMemo:WE,useReducer:Fd,useRef:FE,useState:function(){return Fd(Ba)},useDebugValue:Fm,useDeferredValue:function(t){var e=Xt();return GE(e,Me.memoizedState,t)},useTransition:function(){var t=Fd(Ba)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:NE,useSyncExternalStore:DE,useId:KE,unstable_isNewReconciler:!1},gx={readContext:Jt,useCallback:qE,useContext:Jt,useEffect:jm,useImperativeHandle:zE,useInsertionEffect:UE,useLayoutEffect:$E,useMemo:WE,useReducer:Ud,useRef:FE,useState:function(){return Ud(Ba)},useDebugValue:Fm,useDeferredValue:function(t){var e=Xt();return Me===null?e.memoizedState=t:GE(e,Me.memoizedState,t)},useTransition:function(){var t=Ud(Ba)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:NE,useSyncExternalStore:DE,useId:KE,unstable_isNewReconciler:!1};function Ks(t,e){try{var n="",r=e;do n+=qR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _x=typeof WeakMap=="function"?WeakMap:Map;function JE(t,e,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tc||(Tc=!0,sp=r),Qf(t,e)},n}function XE(t,e,n){n=$n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qf(t,e),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Uy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _x;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bx.bind(null,t,e,n),e.then(t,t))}function $y(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function By(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$n(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var yx=Jn.ReactCurrentOwner,xt=!1;function ft(t,e,n,r){e.child=t===null?CE(e,null,n,r):Ws(e,t.child,n,r)}function zy(t,e,n,r,i){n=n.render;var s=e.ref;return Ds(e,i),r=Lm(t,e,n,r,s,i),n=Mm(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(fe&&n&&Sm(e),e.flags|=1,ft(t,e,r,i),e.child)}function qy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Km(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ZE(t,e,s,r,i)):(t=qu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(o,r)&&t.ref===e.ref)return Kn(t,e,i)}return e.flags|=1,t=Rr(s,r),t.ref=e.ref,t.return=e,e.child=t}function ZE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oa(s,r)&&t.ref===e.ref)if(xt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xt=!0);else return e.lanes=t.lanes,Kn(t,e,i)}return Yf(t,e,n,r,i)}function eT(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Rs,Ot),Ot|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(Rs,Ot),Ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(Rs,Ot),Ot|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(Rs,Ot),Ot|=r;return ft(t,e,i,n),e.child}function tT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yf(t,e,n,r,i){var s=Dt(n)?xi:dt.current;return s=zs(e,s),Ds(e,i),n=Lm(t,e,n,r,s,i),r=Mm(),t!==null&&!xt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kn(t,e,i)):(fe&&r&&Sm(e),e.flags|=1,ft(t,e,n,i),e.child)}function Wy(t,e,n,r,i){if(Dt(n)){var s=!0;fc(e)}else s=!1;if(Ds(e,i),e.stateNode===null)$u(t,e),xE(e,n,r),Hf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Jt(u):(u=Dt(n)?xi:dt.current,u=zs(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ly(e,o,r,u),ur=!1;var f=e.memoizedState;o.state=f,yc(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Nt.current||ur?(typeof h=="function"&&(Kf(e,n,h,r),l=e.memoizedState),(a=ur||Oy(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,RE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:nn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jt(l):(l=Dt(n)?xi:dt.current,l=zs(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Ly(e,o,r,l),ur=!1,f=e.memoizedState,o.state=f,yc(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||Nt.current||ur?(typeof p=="function"&&(Kf(e,n,p,r),y=e.memoizedState),(u=ur||Oy(e,n,u,r,f,y,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Jf(t,e,n,r,s,i)}function Jf(t,e,n,r,i,s){tT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Cy(e,n,!1),Kn(t,e,s);r=e.stateNode,yx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ws(e,t.child,null,s),e.child=Ws(e,null,a,s)):ft(t,e,a,s),e.memoizedState=r.state,i&&Cy(e,n,!0),e.child}function nT(t){var e=t.stateNode;e.pendingContext?ky(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ky(t,e.context,!1),Nm(t,e.containerInfo)}function Gy(t,e,n,r,i){return qs(),Rm(i),e.flags|=256,ft(t,e,n,r),e.child}var Xf={dehydrated:null,treeContext:null,retryLane:0};function Zf(t){return{baseLanes:t,cachePool:null,transitions:null}}function rT(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(_e,i&1),t===null)return Wf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mh(o,r,0,null),t=Ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zf(n),e.memoizedState=Xf,t):Um(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Rr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Rr(a,s):(s=Ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xf,r}return s=t.child,t=s.sibling,r=Rr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Um(t,e){return e=mh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yu(t,e,n,r){return r!==null&&Rm(r),Ws(e,t.child,null,n),t=Um(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$d(Error(P(422))),yu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mh({mode:"visible",children:r.children},i,0,null),s=Ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ws(e,t.child,null,o),e.child.memoizedState=Zf(o),e.memoizedState=Xf,s);if(!(e.mode&1))return yu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=$d(s,r,void 0),yu(t,e,o,r)}if(a=(o&t.childLanes)!==0,xt||a){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gn(t,i),ln(r,t,i,-1))}return Gm(),r=$d(Error(P(421))),yu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Nx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=Er(i.nextSibling),Ft=e,fe=!0,sn=null,t!==null&&(Wt[Gt++]=Ln,Wt[Gt++]=Mn,Wt[Gt++]=ki,Ln=t.id,Mn=t.overflow,ki=e),e=Um(e,r.children),e.flags|=4096,e)}function Ky(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gf(t.return,e,n)}function Bd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function iT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ky(t,n,e);else if(t.tag===19)Ky(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&vc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&vc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bd(e,!0,n,null,s);break;case"together":Bd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $u(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wx(t,e,n){switch(e.tag){case 3:nT(e),qs();break;case 5:bE(e);break;case 1:Dt(e.type)&&fc(e);break;case 4:Nm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(gc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?rT(t,e,n):(ae(_e,_e.current&1),t=Kn(t,e,n),t!==null?t.sibling:null);ae(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,eT(t,e,n)}return Kn(t,e,n)}var sT,ep,oT,aT;sT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ep=function(){};oT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gi(Pn.current);var s=null;switch(n){case"input":i=Ef(t,i),r=Ef(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=Af(t,i),r=Af(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hc)}Pf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};aT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fo(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ix(t,e,n){var r=e.pendingProps;switch(Am(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return Dt(e.type)&&dc(),at(e),null;case 3:return r=e.stateNode,Gs(),de(Nt),de(dt),Vm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(lp(sn),sn=null))),ep(t,e),at(e),null;case 5:Dm(e);var i=gi(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)oT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return at(e),null}if(t=gi(Pn.current),gu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[mn]=e,r[ja]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<ea.length;i++)ue(ea[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":ny(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":iy(r,s),ue("invalid",r)}Pf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&mu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&mu(r.textContent,a,t),i=["children",""+a]):xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":au(r),ry(r,s,!0);break;case"textarea":au(r),sy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=VI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[mn]=e,t[ja]=r,sT(t,e,!1,!1),e.stateNode=t;e:{switch(o=xf(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<ea.length;i++)ue(ea[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":ny(t,r),i=Ef(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),ue("invalid",t);break;case"textarea":iy(t,r),i=Af(t,r),ue("invalid",t);break;default:i=r}Pf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?MI(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&OI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ka(t,l):typeof l=="number"&&ka(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ue("scroll",t):l!=null&&cm(t,s,l,o))}switch(n){case"input":au(t),ry(t,r,!1);break;case"textarea":au(t),sy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ks(t,!!r.multiple,s,!1):r.defaultValue!=null&&ks(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)aT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=gi(Ua.current),gi(Pn.current),gu(e)){if(r=e.stateNode,n=e.memoizedProps,r[mn]=e,(s=r.nodeValue!==n)&&(t=Ft,t!==null))switch(t.tag){case 3:mu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&mu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=e,e.stateNode=r}return at(e),null;case 13:if(de(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&Mt!==null&&e.mode&1&&!(e.flags&128))SE(),qs(),e.flags|=98560,s=!1;else if(s=gu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[mn]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),s=!1}else sn!==null&&(lp(sn),sn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?je===0&&(je=3):Gm())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return Gs(),ep(t,e),t===null&&La(e.stateNode.containerInfo),at(e),null;case 10:return km(e.type._context),at(e),null;case 17:return Dt(e.type)&&dc(),at(e),null;case 19:if(de(_e),s=e.memoizedState,s===null)return at(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fo(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vc(t),o!==null){for(e.flags|=128,Fo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>Hs&&(e.flags|=128,r=!0,Fo(s,!1),e.lanes=4194304)}else{if(!r)if(t=vc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return at(e),null}else 2*Ce()-s.renderingStartTime>Hs&&n!==1073741824&&(e.flags|=128,r=!0,Fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=_e.current,ae(_e,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return Wm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ot&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function Ex(t,e){switch(Am(e),e.tag){case 1:return Dt(e.type)&&dc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),de(Nt),de(dt),Vm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dm(e),null;case 13:if(de(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(_e),null;case 4:return Gs(),null;case 10:return km(e.type._context),null;case 22:case 23:return Wm(),null;case 24:return null;default:return null}}var vu=!1,ut=!1,Tx=typeof WeakSet=="function"?WeakSet:Set,O=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function tp(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var Hy=!1;function Sx(t,e){if(jf=lc,t=hE(),Tm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++h===r&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ff={focusedElem:t,selectionRange:n},lc=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,T=y.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?v:nn(e.type,v),T);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){Ee(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return y=Hy,Hy=!1,y}function ma(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&tp(e,n,s)}i=i.next}while(i!==r)}}function fh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function np(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lT(t){var e=t.alternate;e!==null&&(t.alternate=null,lT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mn],delete e[ja],delete e[Bf],delete e[ox],delete e[ax])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uT(t){return t.tag===5||t.tag===3||t.tag===4}function Qy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hc));else if(r!==4&&(t=t.child,t!==null))for(rp(t,e,n),t=t.sibling;t!==null;)rp(t,e,n),t=t.sibling}function ip(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ip(t,e,n),t=t.sibling;t!==null;)ip(t,e,n),t=t.sibling}var Je=null,rn=!1;function rr(t,e,n){for(n=n.child;n!==null;)cT(t,e,n),n=n.sibling}function cT(t,e,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(sh,n)}catch{}switch(n.tag){case 5:ut||As(n,e);case 6:var r=Je,i=rn;Je=null,rr(t,e,n),Je=r,rn=i,Je!==null&&(rn?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(rn?(t=Je,n=n.stateNode,t.nodeType===8?Od(t.parentNode,n):t.nodeType===1&&Od(t,n),Da(t)):Od(Je,n.stateNode));break;case 4:r=Je,i=rn,Je=n.stateNode.containerInfo,rn=!0,rr(t,e,n),Je=r,rn=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&tp(n,e,o),i=i.next}while(i!==r)}rr(t,e,n);break;case 1:if(!ut&&(As(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,e,a)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,rr(t,e,n),ut=r):rr(t,e,n);break;default:rr(t,e,n)}}function Yy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Tx),e.forEach(function(r){var i=Dx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Je=a.stateNode,rn=!1;break e;case 3:Je=a.stateNode.containerInfo,rn=!0;break e;case 4:Je=a.stateNode.containerInfo,rn=!0;break e}a=a.return}if(Je===null)throw Error(P(160));cT(s,o,i),Je=null,rn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hT(e,t),e=e.sibling}function hT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),fn(t),r&4){try{ma(3,t,t.return),fh(3,t)}catch(v){Ee(t,t.return,v)}try{ma(5,t,t.return)}catch(v){Ee(t,t.return,v)}}break;case 1:tn(e,t),fn(t),r&512&&n!==null&&As(n,n.return);break;case 5:if(tn(e,t),fn(t),r&512&&n!==null&&As(n,n.return),t.flags&32){var i=t.stateNode;try{ka(i,"")}catch(v){Ee(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&NI(i,s),xf(a,o);var u=xf(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?MI(i,d):h==="dangerouslySetInnerHTML"?OI(i,d):h==="children"?ka(i,d):cm(i,h,d,u)}switch(a){case"input":Tf(i,s);break;case"textarea":DI(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ks(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ks(i,!!s.multiple,s.defaultValue,!0):ks(i,!!s.multiple,s.multiple?[]:"",!1))}i[ja]=s}catch(v){Ee(t,t.return,v)}}break;case 6:if(tn(e,t),fn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Ee(t,t.return,v)}}break;case 3:if(tn(e,t),fn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Da(e.containerInfo)}catch(v){Ee(t,t.return,v)}break;case 4:tn(e,t),fn(t);break;case 13:tn(e,t),fn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(zm=Ce())),r&4&&Yy(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(u=ut)||h,tn(e,t),ut=u):tn(e,t),fn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(O=t,h=t.child;h!==null;){for(d=O=h;O!==null;){switch(f=O,p=f.child,f.tag){case 0:case 11:case 14:case 15:ma(4,f,f.return);break;case 1:As(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Ee(r,n,v)}}break;case 5:As(f,f.return);break;case 22:if(f.memoizedState!==null){Xy(d);continue}}p!==null?(p.return=f,O=p):Xy(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=LI("display",o))}catch(v){Ee(t,t.return,v)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Ee(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:tn(e,t),fn(t),r&4&&Yy(t);break;case 21:break;default:tn(e,t),fn(t)}}function fn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uT(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ka(i,""),r.flags&=-33);var s=Qy(t);ip(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Qy(t);rp(t,a,o);break;default:throw Error(P(161))}}catch(l){Ee(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ax(t,e,n){O=t,dT(t)}function dT(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ut;a=vu;var u=ut;if(vu=o,(ut=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?Zy(i):l!==null?(l.return=o,O=l):Zy(i);for(;s!==null;)O=s,dT(s),s=s.sibling;O=i,vu=a,ut=u}Jy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Jy(t)}}function Jy(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||fh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Da(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ut||e.flags&512&&np(e)}catch(f){Ee(e,e.return,f)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Xy(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Zy(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fh(4,e)}catch(l){Ee(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ee(e,i,l)}}var s=e.return;try{np(e)}catch(l){Ee(e,s,l)}break;case 5:var o=e.return;try{np(e)}catch(l){Ee(e,o,l)}}}catch(l){Ee(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var Rx=Math.ceil,Ec=Jn.ReactCurrentDispatcher,$m=Jn.ReactCurrentOwner,Yt=Jn.ReactCurrentBatchConfig,ee=0,qe=null,Oe=null,tt=0,Ot=0,Rs=Wr(0),je=0,qa=null,bi=0,ph=0,Bm=0,ga=null,Pt=null,zm=0,Hs=1/0,Vn=null,Tc=!1,sp=null,Sr=null,wu=!1,mr=null,Sc=0,_a=0,op=null,Bu=-1,zu=0;function _t(){return ee&6?Ce():Bu!==-1?Bu:Bu=Ce()}function Ar(t){return t.mode&1?ee&2&&tt!==0?tt&-tt:ux.transition!==null?(zu===0&&(zu=QI()),zu):(t=re,t!==0||(t=window.event,t=t===void 0?16:nE(t.type)),t):1}function ln(t,e,n,r){if(50<_a)throw _a=0,op=null,Error(P(185));Al(t,n,r),(!(ee&2)||t!==qe)&&(t===qe&&(!(ee&2)&&(ph|=n),je===4&&hr(t,tt)),Vt(t,r),n===1&&ee===0&&!(e.mode&1)&&(Hs=Ce()+500,ch&&Gr()))}function Vt(t,e){var n=t.callbackNode;uP(t,e);var r=ac(t,t===qe?tt:0);if(r===0)n!==null&&ly(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ly(n),e===1)t.tag===0?lx(ev.bind(null,t)):IE(ev.bind(null,t)),ix(function(){!(ee&6)&&Gr()}),n=null;else{switch(YI(r)){case 1:n=mm;break;case 4:n=KI;break;case 16:n=oc;break;case 536870912:n=HI;break;default:n=oc}n=wT(n,fT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fT(t,e){if(Bu=-1,zu=0,ee&6)throw Error(P(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var r=ac(t,t===qe?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ac(t,r);else{e=r;var i=ee;ee|=2;var s=mT();(qe!==t||tt!==e)&&(Vn=null,Hs=Ce()+500,Ei(t,e));do try{kx();break}catch(a){pT(t,a)}while(1);xm(),Ec.current=s,ee=i,Oe!==null?e=0:(qe=null,tt=0,e=je)}if(e!==0){if(e===2&&(i=Df(t),i!==0&&(r=i,e=ap(t,i))),e===1)throw n=qa,Ei(t,0),hr(t,r),Vt(t,Ce()),n;if(e===6)hr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Px(i)&&(e=Ac(t,r),e===2&&(s=Df(t),s!==0&&(r=s,e=ap(t,s))),e===1))throw n=qa,Ei(t,0),hr(t,r),Vt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:oi(t,Pt,Vn);break;case 3:if(hr(t,r),(r&130023424)===r&&(e=zm+500-Ce(),10<e)){if(ac(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$f(oi.bind(null,t,Pt,Vn),e);break}oi(t,Pt,Vn);break;case 4:if(hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rx(r/1960))-r,10<r){t.timeoutHandle=$f(oi.bind(null,t,Pt,Vn),r);break}oi(t,Pt,Vn);break;case 5:oi(t,Pt,Vn);break;default:throw Error(P(329))}}}return Vt(t,Ce()),t.callbackNode===n?fT.bind(null,t):null}function ap(t,e){var n=ga;return t.current.memoizedState.isDehydrated&&(Ei(t,e).flags|=256),t=Ac(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&lp(e)),t}function lp(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function Px(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!un(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~Bm,e&=~ph,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function ev(t){if(ee&6)throw Error(P(327));Vs();var e=ac(t,0);if(!(e&1))return Vt(t,Ce()),null;var n=Ac(t,e);if(t.tag!==0&&n===2){var r=Df(t);r!==0&&(e=r,n=ap(t,r))}if(n===1)throw n=qa,Ei(t,0),hr(t,e),Vt(t,Ce()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,oi(t,Pt,Vn),Vt(t,Ce()),null}function qm(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(Hs=Ce()+500,ch&&Gr())}}function Ni(t){mr!==null&&mr.tag===0&&!(ee&6)&&Vs();var e=ee;ee|=1;var n=Yt.transition,r=re;try{if(Yt.transition=null,re=1,t)return t()}finally{re=r,Yt.transition=n,ee=e,!(ee&6)&&Gr()}}function Wm(){Ot=Rs.current,de(Rs)}function Ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rx(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Am(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dc();break;case 3:Gs(),de(Nt),de(dt),Vm();break;case 5:Dm(r);break;case 4:Gs();break;case 13:de(_e);break;case 19:de(_e);break;case 10:km(r.type._context);break;case 22:case 23:Wm()}n=n.return}if(qe=t,Oe=t=Rr(t.current,null),tt=Ot=e,je=0,qa=null,Bm=ph=bi=0,Pt=ga=null,mi!==null){for(e=0;e<mi.length;e++)if(n=mi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}mi=null}return t}function pT(t,e){do{var n=Oe;try{if(xm(),Fu.current=Ic,wc){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wc=!1}if(Ci=0,Be=Me=ye=null,pa=!1,$a=0,$m.current=null,n===null||n.return===null){je=1,qa=e,Oe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=$y(o);if(p!==null){p.flags&=-257,By(p,o,a,s,e),p.mode&1&&Uy(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Uy(s,u,e),Gm();break e}l=Error(P(426))}}else if(fe&&a.mode&1){var T=$y(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),By(T,o,a,s,e),Rm(Ks(l,a));break e}}s=l=Ks(l,a),je!==4&&(je=2),ga===null?ga=[s]:ga.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=JE(s,l,e);Dy(s,g);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Sr===null||!Sr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=XE(s,a,e);Dy(s,E);break e}}s=s.return}while(s!==null)}_T(n)}catch(R){e=R,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function mT(){var t=Ec.current;return Ec.current=Ic,t===null?Ic:t}function Gm(){(je===0||je===3||je===2)&&(je=4),qe===null||!(bi&268435455)&&!(ph&268435455)||hr(qe,tt)}function Ac(t,e){var n=ee;ee|=2;var r=mT();(qe!==t||tt!==e)&&(Vn=null,Ei(t,e));do try{xx();break}catch(i){pT(t,i)}while(1);if(xm(),ee=n,Ec.current=r,Oe!==null)throw Error(P(261));return qe=null,tt=0,je}function xx(){for(;Oe!==null;)gT(Oe)}function kx(){for(;Oe!==null&&!eP();)gT(Oe)}function gT(t){var e=vT(t.alternate,t,Ot);t.memoizedProps=t.pendingProps,e===null?_T(t):Oe=e,$m.current=null}function _T(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ex(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Oe=null;return}}else if(n=Ix(n,e,Ot),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);je===0&&(je=5)}function oi(t,e,n){var r=re,i=Yt.transition;try{Yt.transition=null,re=1,Cx(t,e,n,r)}finally{Yt.transition=i,re=r}return null}function Cx(t,e,n,r){do Vs();while(mr!==null);if(ee&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cP(t,s),t===qe&&(Oe=qe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wu||(wu=!0,wT(oc,function(){return Vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=re;re=1;var a=ee;ee|=4,$m.current=null,Sx(t,n),hT(n,t),YP(Ff),lc=!!jf,Ff=jf=null,t.current=n,Ax(n),tP(),ee=a,re=o,Yt.transition=s}else t.current=n;if(wu&&(wu=!1,mr=t,Sc=i),s=t.pendingLanes,s===0&&(Sr=null),iP(n.stateNode),Vt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tc)throw Tc=!1,t=sp,sp=null,t;return Sc&1&&t.tag!==0&&Vs(),s=t.pendingLanes,s&1?t===op?_a++:(_a=0,op=t):_a=0,Gr(),null}function Vs(){if(mr!==null){var t=YI(Sc),e=Yt.transition,n=re;try{if(Yt.transition=null,re=16>t?16:t,mr===null)var r=!1;else{if(t=mr,mr=null,Sc=0,ee&6)throw Error(P(331));var i=ee;for(ee|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var h=O;switch(h.tag){case 0:case 11:case 15:ma(8,h,s)}var d=h.child;if(d!==null)d.return=h,O=d;else for(;O!==null;){h=O;var f=h.sibling,p=h.return;if(lT(h),h===u){O=null;break}if(f!==null){f.return=p,O=f;break}O=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var T=v.sibling;v.sibling=null,v=T}while(v!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ma(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,O=g;break e}O=s.return}}var m=t.current;for(O=m;O!==null;){o=O;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,O=_;else e:for(o=m;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fh(9,a)}}catch(R){Ee(a,a.return,R)}if(a===o){O=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,O=E;break e}O=a.return}}if(ee=i,Gr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(sh,t)}catch{}r=!0}return r}finally{re=n,Yt.transition=e}}return!1}function tv(t,e,n){e=Ks(n,e),e=JE(t,e,1),t=Tr(t,e,1),e=_t(),t!==null&&(Al(t,1,e),Vt(t,e))}function Ee(t,e,n){if(t.tag===3)tv(t,t,n);else for(;e!==null;){if(e.tag===3){tv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){t=Ks(n,t),t=XE(e,t,1),e=Tr(e,t,1),t=_t(),e!==null&&(Al(e,1,t),Vt(e,t));break}}e=e.return}}function bx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(tt&n)===n&&(je===4||je===3&&(tt&130023424)===tt&&500>Ce()-zm?Ei(t,0):Bm|=n),Vt(t,e)}function yT(t,e){e===0&&(t.mode&1?(e=cu,cu<<=1,!(cu&130023424)&&(cu=4194304)):e=1);var n=_t();t=Gn(t,e),t!==null&&(Al(t,e,n),Vt(t,n))}function Nx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yT(t,n)}function Dx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),yT(t,n)}var vT;vT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)xt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xt=!1,wx(t,e,n);xt=!!(t.flags&131072)}else xt=!1,fe&&e.flags&1048576&&EE(e,mc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$u(t,e),t=e.pendingProps;var i=zs(e,dt.current);Ds(e,n),i=Lm(null,e,r,t,i,n);var s=Mm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(s=!0,fc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bm(e),i.updater=hh,e.stateNode=i,i._reactInternals=e,Hf(e,r,t,n),e=Jf(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&Sm(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($u(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ox(r),t=nn(r,t),i){case 0:e=Yf(null,e,r,t,n);break e;case 1:e=Wy(null,e,r,t,n);break e;case 11:e=zy(null,e,r,t,n);break e;case 14:e=qy(null,e,r,nn(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Yf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),Wy(t,e,r,i,n);case 3:e:{if(nT(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,RE(t,e),yc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ks(Error(P(423)),e),e=Gy(t,e,r,n,i);break e}else if(r!==i){i=Ks(Error(P(424)),e),e=Gy(t,e,r,n,i);break e}else for(Mt=Er(e.stateNode.containerInfo.firstChild),Ft=e,fe=!0,sn=null,n=CE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),r===i){e=Kn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return bE(e),t===null&&Wf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Uf(r,i)?o=null:s!==null&&Uf(r,s)&&(e.flags|=32),tT(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&Wf(e),null;case 13:return rT(t,e,n);case 4:return Nm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ws(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),zy(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(gc,r._currentValue),r._currentValue=o,s!==null)if(un(s.value,o)){if(s.children===i.children&&!Nt.current){e=Kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=$n(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Gf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Gf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ds(e,n),i=Jt(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=nn(r,e.pendingProps),i=nn(r.type,i),qy(t,e,r,i,n);case 15:return ZE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nn(r,i),$u(t,e),e.tag=1,Dt(r)?(t=!0,fc(e)):t=!1,Ds(e,n),xE(e,r,i),Hf(e,r,i,n),Jf(null,e,r,!0,t,n);case 19:return iT(t,e,n);case 22:return eT(t,e,n)}throw Error(P(156,e.tag))};function wT(t,e){return GI(t,e)}function Vx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,e,n,r){return new Vx(t,e,n,r)}function Km(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ox(t){if(typeof t=="function")return Km(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dm)return 11;if(t===fm)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=Ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Km(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gs:return Ti(n.children,i,s,e);case hm:o=8,i|=8;break;case yf:return t=Ht(12,n,e,i|2),t.elementType=yf,t.lanes=s,t;case vf:return t=Ht(13,n,e,i),t.elementType=vf,t.lanes=s,t;case wf:return t=Ht(19,n,e,i),t.elementType=wf,t.lanes=s,t;case kI:return mh(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case PI:o=10;break e;case xI:o=9;break e;case dm:o=11;break e;case fm:o=14;break e;case lr:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=Ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ti(t,e,n,r){return t=Ht(7,t,r,e),t.lanes=n,t}function mh(t,e,n,r){return t=Ht(22,t,r,e),t.elementType=kI,t.lanes=n,t.stateNode={isHidden:!1},t}function zd(t,e,n){return t=Ht(6,t,null,e),t.lanes=n,t}function qd(t,e,n){return e=Ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Lx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sd(0),this.expirationTimes=Sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hm(t,e,n,r,i,s,o,a,l){return t=new Lx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bm(s),t}function Mx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ms,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function IT(t){if(!t)return br;t=t._reactInternals;e:{if(Ki(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(Dt(n))return wE(t,n,e)}return e}function ET(t,e,n,r,i,s,o,a,l){return t=Hm(n,r,!0,t,i,s,o,a,l),t.context=IT(null),n=t.current,r=_t(),i=Ar(n),s=$n(r,i),s.callback=e??null,Tr(n,s,i),t.current.lanes=i,Al(t,i,r),Vt(t,r),t}function gh(t,e,n,r){var i=e.current,s=_t(),o=Ar(i);return n=IT(n),e.context===null?e.context=n:e.pendingContext=n,e=$n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Tr(i,e,o),t!==null&&(ln(t,i,o,s),ju(t,i,o)),o}function Rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qm(t,e){nv(t,e),(t=t.alternate)&&nv(t,e)}function jx(){return null}var TT=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ym(t){this._internalRoot=t}_h.prototype.render=Ym.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));gh(t,e,null,null)};_h.prototype.unmount=Ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ni(function(){gh(null,t,null,null)}),e[Wn]=null}};function _h(t){this._internalRoot=t}_h.prototype.unstable_scheduleHydration=function(t){if(t){var e=ZI();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&tE(t)}};function Jm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rv(){}function Fx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Rc(o);s.call(u)}}var o=ET(e,r,t,0,null,!1,!1,"",rv);return t._reactRootContainer=o,t[Wn]=o.current,La(t.nodeType===8?t.parentNode:t),Ni(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Rc(l);a.call(u)}}var l=Hm(t,0,!1,null,null,!1,!1,"",rv);return t._reactRootContainer=l,t[Wn]=l.current,La(t.nodeType===8?t.parentNode:t),Ni(function(){gh(e,l,n,r)}),l}function vh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Rc(o);a.call(l)}}gh(e,o,t,i)}else o=Fx(n,e,t,i,r);return Rc(o)}JI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zo(e.pendingLanes);n!==0&&(gm(e,n|1),Vt(e,Ce()),!(ee&6)&&(Hs=Ce()+500,Gr()))}break;case 13:Ni(function(){var r=Gn(t,1);if(r!==null){var i=_t();ln(r,t,1,i)}}),Qm(t,1)}};_m=function(t){if(t.tag===13){var e=Gn(t,134217728);if(e!==null){var n=_t();ln(e,t,134217728,n)}Qm(t,134217728)}};XI=function(t){if(t.tag===13){var e=Ar(t),n=Gn(t,e);if(n!==null){var r=_t();ln(n,t,e,r)}Qm(t,e)}};ZI=function(){return re};eE=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};Cf=function(t,e,n){switch(e){case"input":if(Tf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uh(r);if(!i)throw Error(P(90));bI(r),Tf(r,i)}}}break;case"textarea":DI(t,n);break;case"select":e=n.value,e!=null&&ks(t,!!n.multiple,e,!1)}};UI=qm;$I=Ni;var Ux={usingClientEntryPoint:!1,Events:[Pl,ws,uh,jI,FI,qm]},Uo={findFiberByHostInstance:pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$x={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qI(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{sh=Iu.inject($x),Rn=Iu}catch{}}zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ux;zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jm(e))throw Error(P(200));return Mx(t,e,null,n)};zt.createRoot=function(t,e){if(!Jm(t))throw Error(P(299));var n=!1,r="",i=TT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Hm(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,La(t.nodeType===8?t.parentNode:t),new Ym(e)};zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=qI(e),t=t===null?null:t.stateNode,t};zt.flushSync=function(t){return Ni(t)};zt.hydrate=function(t,e,n){if(!yh(e))throw Error(P(200));return vh(null,t,e,!0,n)};zt.hydrateRoot=function(t,e,n){if(!Jm(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=TT;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ET(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,La(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _h(e)};zt.render=function(t,e,n){if(!yh(e))throw Error(P(200));return vh(null,t,e,!1,n)};zt.unmountComponentAtNode=function(t){if(!yh(t))throw Error(P(40));return t._reactRootContainer?(Ni(function(){vh(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};zt.unstable_batchedUpdates=qm;zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yh(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return vh(t,e,n,!1,r)};zt.version="18.2.0-next-9e3b772b8-20220608";function ST(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ST)}catch(t){console.error(t)}}ST(),EI.exports=zt;var Bx=EI.exports,iv=Bx;gf.createRoot=iv.createRoot,gf.hydrateRoot=iv.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wa(){return Wa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wa.apply(this,arguments)}var gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(gr||(gr={}));const sv="popstate";function zx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return up("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Pc(i)}return Wx(e,n,null,t)}function Le(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xm(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qx(){return Math.random().toString(36).substr(2,8)}function ov(t,e){return{usr:t.state,key:t.key,idx:e}}function up(t,e,n,r){return n===void 0&&(n=null),Wa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?po(e):e,{state:n,key:e&&e.key||r||qx()})}function Pc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function po(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Wx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=gr.Pop,l=null,u=h();u==null&&(u=0,o.replaceState(Wa({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=gr.Pop;let T=h(),g=T==null?null:T-u;u=T,l&&l({action:a,location:v.location,delta:g})}function f(T,g){a=gr.Push;let m=up(v.location,T,g);n&&n(m,T),u=h()+1;let _=ov(m,u),E=v.createHref(m);try{o.pushState(_,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function p(T,g){a=gr.Replace;let m=up(v.location,T,g);n&&n(m,T),u=h();let _=ov(m,u),E=v.createHref(m);o.replaceState(_,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function y(T){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof T=="string"?T:Pc(T);return Le(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let v={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(sv,d),l=T,()=>{i.removeEventListener(sv,d),l=null}},createHref(T){return e(i,T)},createURL:y,encodeLocation(T){let g=y(T);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(T){return o.go(T)}};return v}var av;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(av||(av={}));function Gx(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?po(e):e,i=Zm(r.pathname||"/",n);if(i==null)return null;let s=AT(t);Kx(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=nk(s[a],sk(i));return o}function AT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Pr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),AT(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:ek(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of RT(s.path))i(s,o,l)}),e}function RT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=RT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Kx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:tk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hx=/^:\w+$/,Qx=3,Yx=2,Jx=1,Xx=10,Zx=-2,lv=t=>t==="*";function ek(t,e){let n=t.split("/"),r=n.length;return n.some(lv)&&(r+=Zx),e&&(r+=Yx),n.filter(i=>!lv(i)).reduce((i,s)=>i+(Hx.test(s)?Qx:s===""?Jx:Xx),r)}function tk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function nk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",h=rk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!h)return null;Object.assign(r,h.params);let d=a.route;s.push({params:r,pathname:Pr([i,h.pathname]),pathnameBase:uk(Pr([i,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(i=Pr([i,h.pathnameBase]))}return s}function rk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ik(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,d)=>{if(h==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[h]=ok(a[d]||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ik(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Xm(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function sk(t){try{return decodeURI(t)}catch(e){return Xm(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ok(t,e){try{return decodeURIComponent(t)}catch(n){return Xm(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Zm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ak(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?po(t):t;return{pathname:n?n.startsWith("/")?n:lk(n,e):e,search:ck(r),hash:hk(i)}}function lk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Wd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function PT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function xT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=po(t):(i=Wa({},t),Le(!i.pathname||!i.pathname.includes("?"),Wd("?","pathname","search",i)),Le(!i.pathname||!i.pathname.includes("#"),Wd("#","pathname","hash",i)),Le(!i.search||!i.search.includes("#"),Wd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=ak(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const Pr=t=>t.join("/").replace(/\/\/+/g,"/"),uk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ck=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function dk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const kT=["post","put","patch","delete"];new Set(kT);const fk=["get",...kT];new Set(fk);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xc(){return xc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xc.apply(this,arguments)}const eg=M.createContext(null),pk=M.createContext(null),mo=M.createContext(null),wh=M.createContext(null),Hi=M.createContext({outlet:null,matches:[],isDataRoute:!1}),CT=M.createContext(null);function mk(t,e){let{relative:n}=e===void 0?{}:e;kl()||Le(!1);let{basename:r,navigator:i}=M.useContext(mo),{hash:s,pathname:o,search:a}=NT(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Pr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function kl(){return M.useContext(wh)!=null}function Ih(){return kl()||Le(!1),M.useContext(wh).location}function bT(t){M.useContext(mo).static||M.useLayoutEffect(t)}function gk(){let{isDataRoute:t}=M.useContext(Hi);return t?kk():_k()}function _k(){kl()||Le(!1);let t=M.useContext(eg),{basename:e,navigator:n}=M.useContext(mo),{matches:r}=M.useContext(Hi),{pathname:i}=Ih(),s=JSON.stringify(PT(r).map(l=>l.pathnameBase)),o=M.useRef(!1);return bT(()=>{o.current=!0}),M.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=xT(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Pr([e,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[e,n,s,i,t])}function NT(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=M.useContext(Hi),{pathname:i}=Ih(),s=JSON.stringify(PT(r).map(o=>o.pathnameBase));return M.useMemo(()=>xT(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function yk(t,e){return vk(t,e)}function vk(t,e,n){kl()||Le(!1);let{navigator:r}=M.useContext(mo),{matches:i}=M.useContext(Hi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ih(),u;if(e){var h;let v=typeof e=="string"?po(e):e;a==="/"||(h=v.pathname)!=null&&h.startsWith(a)||Le(!1),u=v}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",p=Gx(t,{pathname:f}),y=Sk(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Pr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:Pr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?M.createElement(wh.Provider,{value:{location:xc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:gr.Pop}},y):y}function wk(){let t=xk(),e=dk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,s)}const Ik=M.createElement(wk,null);class Ek extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?M.createElement(Hi.Provider,{value:this.props.routeContext},M.createElement(CT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tk(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(eg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Hi.Provider,{value:e},r)}function Sk(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Le(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let h=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||Ik);let f=e.concat(s.slice(0,u+1)),p=()=>{let y;return h?y=d:l.route.Component?y=M.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,M.createElement(Tk,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?M.createElement(Ek,{location:n.location,revalidation:n.revalidation,component:d,error:h,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var DT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(DT||{}),kc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(kc||{});function Ak(t){let e=M.useContext(eg);return e||Le(!1),e}function Rk(t){let e=M.useContext(pk);return e||Le(!1),e}function Pk(t){let e=M.useContext(Hi);return e||Le(!1),e}function VT(t){let e=Pk(),n=e.matches[e.matches.length-1];return n.route.id||Le(!1),n.route.id}function xk(){var t;let e=M.useContext(CT),n=Rk(kc.UseRouteError),r=VT(kc.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function kk(){let{router:t}=Ak(DT.UseNavigateStable),e=VT(kc.UseNavigateStable),n=M.useRef(!1);return bT(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,xc({fromRouteId:e},s)))},[t,e])}function Ye(t){Le(!1)}function Ck(t){let{basename:e="/",children:n=null,location:r,navigationType:i=gr.Pop,navigator:s,static:o=!1}=t;kl()&&Le(!1);let a=e.replace(/^\/*/,"/"),l=M.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=po(r));let{pathname:u="/",search:h="",hash:d="",state:f=null,key:p="default"}=r,y=M.useMemo(()=>{let v=Zm(u,a);return v==null?null:{location:{pathname:v,search:h,hash:d,state:f,key:p},navigationType:i}},[a,u,h,d,f,p,i]);return y==null?null:M.createElement(mo.Provider,{value:l},M.createElement(wh.Provider,{children:n,value:y}))}function bk(t){let{children:e,location:n}=t;return yk(cp(e),n)}new Promise(()=>{});function cp(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,cp(r.props.children,s));return}r.type!==Ye&&Le(!1),!r.props.index||!r.props.children||Le(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=cp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hp(){return hp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hp.apply(this,arguments)}function Nk(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Dk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Vk(t,e){return t.button===0&&(!e||e==="_self")&&!Dk(t)}const Ok=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],Lk="startTransition",uv=NR[Lk];function Mk(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=zx({window:i,v5Compat:!0}));let o=s.current,[a,l]=M.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=M.useCallback(d=>{u&&uv?uv(()=>l(d)):l(d)},[l,u]);return M.useLayoutEffect(()=>o.listen(h),[o,h]),M.createElement(Ck,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const jk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:h}=e,d=Nk(e,Ok),{basename:f}=M.useContext(mo),p,y=!1;if(typeof u=="string"&&Fk.test(u)&&(p=u,jk))try{let m=new URL(window.location.href),_=u.startsWith("//")?new URL(m.protocol+u):new URL(u),E=Zm(_.pathname,f);_.origin===m.origin&&E!=null?u=E+_.search+_.hash:y=!0}catch{}let v=mk(u,{relative:i}),T=Uk(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:i});function g(m){r&&r(m),m.defaultPrevented||T(m)}return M.createElement("a",hp({},d,{href:p||v,onClick:y||s?r:g,ref:n,target:l}))});var cv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(cv||(cv={}));var hv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(hv||(hv={}));function Uk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=gk(),l=Ih(),u=NT(t,{relative:o});return M.useCallback(h=>{if(Vk(h,n)){h.preventDefault();let d=r!==void 0?r:Pc(l)===Pc(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
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
 *//**
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
 */const OT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$k=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},LT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[h],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(OT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$k(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new Bk;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Bk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zk=function(t){const e=OT(t);return LT.encodeByteArray(e,!0)},Cc=function(t){return zk(t).replace(/\./g,"")},MT=function(t){try{return LT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function bc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qk(n)||(t[n]=bc(t[n],e[n]));return t}function qk(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Wk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Gk=()=>Wk().__FIREBASE_DEFAULTS__,Kk=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Hk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&MT(t[1]);return e&&JSON.parse(e)},tg=()=>{try{return Gk()||Kk()||Hk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jT=()=>{var t;return(t=tg())===null||t===void 0?void 0:t.config},Qk=t=>{var e;return(e=tg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Yk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Jk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Cc(JSON.stringify(n)),Cc(JSON.stringify(o)),a].join(".")}/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function ng(){var t;const e=(t=tg())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zk(){return typeof self=="object"&&self.self===self}function FT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UT(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eC(){return!ng()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ga(){try{return typeof indexedDB=="object"}catch{return!1}}function tC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const nC="FirebaseError";class yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nC,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yt(i,a,r)}}function rC(t,e){return t.replace(iC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iC=/\{\$([^}]+)}/g;/**
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
 */function dv(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function sC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dp(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(fv(s)&&fv(o)){if(!dp(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fv(t){return t!==null&&typeof t=="object"}/**
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
 */function go(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ps(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ta(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $T(t,e){const n=new oC(t,e);return n.subscribe.bind(n)}class oC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Gd),i.error===void 0&&(i.error=Gd),i.complete===void 0&&(i.complete=Gd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gd(){}/**
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
 */function $(t){return t&&t._delegate?t._delegate:t}class Cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ai="[DEFAULT]";/**
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
 */class lC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Yk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cC(e))try{this.getOrInitializeService({instanceIdentifier:ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ai){return this.instances.has(e)}getOptions(e=ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ai){return this.component?this.component.multipleInstances?e:ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uC(t){return t===ai?void 0:t}function cC(t){return t.instantiationMode==="EAGER"}/**
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
 */class hC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const ig=[];var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const BT={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},dC=H.INFO,fC={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},pC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Eh{constructor(e){this.name=e,this._logLevel=dC,this._logHandler=pC,this._userLogHandler=null,ig.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}function mC(t){ig.forEach(e=>{e.setLogLevel(t)})}function gC(t,e){for(const n of ig){let r=null;e&&e.level&&(r=BT[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:H[s].toLowerCase(),message:a,args:o,type:i.name})}}}const _C=(t,e)=>e.some(n=>t instanceof n);let pv,mv;function yC(){return pv||(pv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vC(){return mv||(mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zT=new WeakMap,fp=new WeakMap,qT=new WeakMap,Kd=new WeakMap,sg=new WeakMap;function wC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zT.set(n,t)}).catch(()=>{}),sg.set(e,t),e}function IC(t){if(fp.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});fp.set(t,e)}let pp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EC(t){pp=t(pp)}function TC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hd(this),e,...n);return qT.set(r,e.sort?e.sort():[e]),xr(r)}:vC().includes(t)?function(...e){return t.apply(Hd(this),e),xr(zT.get(this))}:function(...e){return xr(t.apply(Hd(this),e))}}function SC(t){return typeof t=="function"?TC(t):(t instanceof IDBTransaction&&IC(t),_C(t,yC())?new Proxy(t,pp):t)}function xr(t){if(t instanceof IDBRequest)return wC(t);if(Kd.has(t))return Kd.get(t);const e=SC(t);return e!==t&&(Kd.set(t,e),sg.set(e,t)),e}const Hd=t=>sg.get(t);function AC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xr(o.result),l.oldVersion,l.newVersion,xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const RC=["get","getKey","getAll","getAllKeys","count"],PC=["put","add","delete","clear"],Qd=new Map;function gv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qd.get(e))return Qd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=PC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Qd.set(e,s),s}EC(t=>({...t,get:(e,n,r)=>gv(e,n)||t.get(e,n,r),has:(e,n)=>!!gv(e,n)||t.has(e,n)}));/**
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
 */class xC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mp="@firebase/app",_v="0.9.23";/**
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
 */const Di=new Eh("@firebase/app"),CC="@firebase/app-compat",bC="@firebase/analytics-compat",NC="@firebase/analytics",DC="@firebase/app-check-compat",VC="@firebase/app-check",OC="@firebase/auth",LC="@firebase/auth-compat",MC="@firebase/database",jC="@firebase/database-compat",FC="@firebase/functions",UC="@firebase/functions-compat",$C="@firebase/installations",BC="@firebase/installations-compat",zC="@firebase/messaging",qC="@firebase/messaging-compat",WC="@firebase/performance",GC="@firebase/performance-compat",KC="@firebase/remote-config",HC="@firebase/remote-config-compat",QC="@firebase/storage",YC="@firebase/storage-compat",JC="@firebase/firestore",XC="@firebase/firestore-compat",ZC="firebase",eb="10.6.0";/**
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
 */const Nr="[DEFAULT]",tb={[mp]:"fire-core",[CC]:"fire-core-compat",[NC]:"fire-analytics",[bC]:"fire-analytics-compat",[VC]:"fire-app-check",[DC]:"fire-app-check-compat",[OC]:"fire-auth",[LC]:"fire-auth-compat",[MC]:"fire-rtdb",[jC]:"fire-rtdb-compat",[FC]:"fire-fn",[UC]:"fire-fn-compat",[$C]:"fire-iid",[BC]:"fire-iid-compat",[zC]:"fire-fcm",[qC]:"fire-fcm-compat",[WC]:"fire-perf",[GC]:"fire-perf-compat",[KC]:"fire-rc",[HC]:"fire-rc-compat",[QC]:"fire-gcs",[YC]:"fire-gcs-compat",[JC]:"fire-fst",[XC]:"fire-fst-compat","fire-js":"fire-js",[ZC]:"fire-js-all"};/**
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
 */const Dr=new Map,Ka=new Map;function Nc(t,e){try{t.container.addComponent(e)}catch(n){Di.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function WT(t,e){t.container.addOrOverwriteComponent(e)}function Vr(t){const e=t.name;if(Ka.has(e))return Di.debug(`There were multiple attempts to register component ${e}.`),!1;Ka.set(e,t);for(const n of Dr.values())Nc(n,t);return!0}function GT(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nb(t,e,n=Nr){GT(t,e).clearInstance(n)}function rb(){Ka.clear()}/**
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
 */const ib={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Bn=new Qi("app","Firebase",ib);/**
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
 */let sb=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}};/**
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
 */const Kr=eb;function og(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Nr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Bn.create("bad-app-name",{appName:String(i)});if(n||(n=jT()),!n)throw Bn.create("no-options");const s=Dr.get(i);if(s){if(dp(n,s.options)&&dp(r,s.config))return s;throw Bn.create("duplicate-app",{appName:i})}const o=new hC(i);for(const l of Ka.values())o.addComponent(l);const a=new sb(n,r,o);return Dr.set(i,a),a}function ob(t=Nr){const e=Dr.get(t);if(!e&&t===Nr&&jT())return og();if(!e)throw Bn.create("no-app",{appName:t});return e}function ab(){return Array.from(Dr.values())}async function KT(t){const e=t.name;Dr.has(e)&&(Dr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function xn(t,e,n){var r;let i=(r=tb[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Di.warn(a.join(" "));return}Vr(new Cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function HT(t,e){if(t!==null&&typeof t!="function")throw Bn.create("invalid-log-argument");gC(t,e)}function QT(t){mC(t)}/**
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
 */const lb="firebase-heartbeat-database",ub=1,Ha="firebase-heartbeat-store";let Yd=null;function YT(){return Yd||(Yd=AC(lb,ub,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ha)}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),Yd}async function cb(t){try{return await(await YT()).transaction(Ha).objectStore(Ha).get(JT(t))}catch(e){if(e instanceof yt)Di.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Di.warn(n.message)}}}async function yv(t,e){try{const r=(await YT()).transaction(Ha,"readwrite");await r.objectStore(Ha).put(e,JT(t)),await r.done}catch(n){if(n instanceof yt)Di.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Di.warn(r.message)}}}function JT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hb=1024,db=30*24*60*60*1e3;class fb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vv();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=db}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vv(),{heartbeatsToSend:r,unsentEntries:i}=pb(this._heartbeatsCache.heartbeats),s=Cc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function vv(){return new Date().toISOString().substring(0,10)}function pb(t,e=hb){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ga()?tC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return yv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wv(t){return Cc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gb(t){Vr(new Cn("platform-logger",e=>new xC(e),"PRIVATE")),Vr(new Cn("heartbeat",e=>new fb(e),"PRIVATE")),xn(mp,_v,t),xn(mp,_v,"esm2017"),xn("fire-js","")}gb("");const _b=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:yt,SDK_VERSION:Kr,_DEFAULT_ENTRY_NAME:Nr,_addComponent:Nc,_addOrOverwriteComponent:WT,_apps:Dr,_clearComponents:rb,_components:Ka,_getProvider:GT,_registerComponent:Vr,_removeServiceInstance:nb,deleteApp:KT,getApp:ob,getApps:ab,initializeApp:og,onLog:HT,registerVersion:xn,setLogLevel:QT},Symbol.toStringTag,{value:"Module"}));/**
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
 */class yb{constructor(e,n){this._delegate=e,this.firebase=n,Nc(e,new Cn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),KT(this._delegate)))}_getService(e,n=Nr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Nr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Nc(this._delegate,e)}_addOrOverwriteComponent(e){WT(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const vb={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Iv=new Qi("app-compat","Firebase",vb);/**
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
 */function wb(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:xn,setLogLevel:QT,onLog:HT,apps:null,SDK_VERSION:Kr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:_b}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Nr,!dv(e,u))throw Iv.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,h={}){const d=og(u,h);if(dv(e,d.name))return e[d.name];const f=new t(d,n);return e[d.name]=f,f}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const h=u.name,d=h.replace("-compat","");if(Vr(u)&&u.type==="PUBLIC"){const f=(p=i())=>{if(typeof p[d]!="function")throw Iv.create("invalid-app-argument",{appName:h});return p[d]()};u.serviceProps!==void 0&&bc(f,u.serviceProps),n[d]=f,t.prototype[d]=function(...p){return this._getService.bind(this,h).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,h){return h==="serverAuth"?null:h}return n}/**
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
 */function XT(){const t=wb(yb);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:XT,extendNamespace:e,createSubscribe:$T,ErrorFactory:Qi,deepExtend:bc});function e(n){bc(t,n)}return t}const Ib=XT();/**
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
 */const Ev=new Eh("@firebase/app-compat"),Eb="@firebase/app-compat",Tb="0.2.23";/**
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
 */function Sb(t){xn(Eb,Tb,t)}/**
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
 */if(Zk()&&self.firebase!==void 0){Ev.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Ev.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Hr=Ib;Sb();var Ab="firebase",Rb="10.6.0";/**
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
 */Hr.registerVersion(Ab,Rb,"app-compat");function ag(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const $o={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},is={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Pb(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function ZT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xb=Pb,kb=ZT,e0=new Qi("auth","Firebase",ZT());/**
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
 */const Dc=new Eh("@firebase/auth");function Cb(t,...e){Dc.logLevel<=H.WARN&&Dc.warn(`Auth (${Kr}): ${t}`,...e)}function Wu(t,...e){Dc.logLevel<=H.ERROR&&Dc.error(`Auth (${Kr}): ${t}`,...e)}/**
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
 */function st(t,...e){throw lg(t,...e)}function nt(t,...e){return lg(t,...e)}function t0(t,e,n){const r=Object.assign(Object.assign({},kb()),{[e]:n});return new Qi("auth","Firebase",r).create(e,{appName:t.name})}function _o(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&st(t,"argument-error"),t0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return e0.create(t,...e)}function x(t,e,...n){if(!t)throw lg(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wu(e),new Error(e)}function cn(t,e){t||In(e)}/**
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
 */function Qa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ug(){return Tv()==="http:"||Tv()==="https:"}function Tv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function bb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ug()||FT()||"connection"in navigator)?navigator.onLine:!0}function Nb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=Xk()||rg()}get(){return bb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cg(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class n0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Db={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Vb=new Cl(3e4,6e4);function Pe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xe(t,e,n,r,i={}){return r0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=go(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),n0.fetch()(i0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function r0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Db),e);try{const i=new Lb(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw na(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw na(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw na(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw na(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw t0(t,h,u);st(t,h)}}catch(i){if(i instanceof yt)throw i;st(t,"network-request-failed",{message:String(i)})}}async function Xn(t,e,n,r,i={}){const s=await xe(t,e,n,r,i);return"mfaPendingCredential"in s&&st(t,"multi-factor-auth-required",{_serverResponse:s}),s}function i0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?cg(t.config,i):`${t.config.apiScheme}://${i}`}function Ob(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Lb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),Vb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function na(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function Sv(t){return t!==void 0&&t.getResponse!==void 0}function Av(t){return t!==void 0&&t.enterprise!==void 0}class Mb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ob(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function jb(t){return(await xe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Fb(t,e){return xe(t,"GET","/v2/recaptchaConfig",Pe(t,e))}/**
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
 */async function Ub(t,e){return xe(t,"POST","/v1/accounts:delete",e)}async function $b(t,e){return xe(t,"POST","/v1/accounts:update",e)}async function Bb(t,e){return xe(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ya(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zb(t,e=!1){const n=$(t),r=await n.getIdToken(e),i=Th(r);x(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ya(Jd(i.auth_time)),issuedAtTime:ya(Jd(i.iat)),expirationTime:ya(Jd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jd(t){return Number(t)*1e3}function Th(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wu("JWT malformed, contained fewer than 3 sections"),null;try{const i=MT(n);return i?JSON.parse(i):(Wu("Failed to decode base64 JWT payload"),null)}catch(i){return Wu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qb(t){const e=Th(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yt&&Wb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Wb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class s0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ya(this.lastLoginAt),this.creationTime=ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ya(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hn(t,Bb(n,{idToken:r}));x(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Qb(s.providerUserInfo):[],a=Hb(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new s0(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function Kb(t){const e=$(t);await Ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hb(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Qb(t){return t.map(e=>{var{providerId:n}=e,r=ag(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Yb(t,e){const n=await r0(t,{},async()=>{const r=go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=i0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",n0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jb(t,e){return xe(t,"POST","/v2/accounts:revokeToken",Pe(t,e))}/**
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
 */class Ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Yb(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ja;return r&&(x(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(x(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ja,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
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
 */function ir(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Si{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ag(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new s0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zb(this,e)}reload(){return Kb(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Si(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ya(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Hn(this,Ub(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:_,emailVerified:E,isAnonymous:R,providerData:k,stsTokenManager:b}=n;x(_&&b,e,"internal-error");const j=Ja.fromJSON(this.name,b);x(typeof _=="string",e,"internal-error"),ir(d,e.name),ir(f,e.name),x(typeof E=="boolean",e,"internal-error"),x(typeof R=="boolean",e,"internal-error"),ir(p,e.name),ir(y,e.name),ir(v,e.name),ir(T,e.name),ir(g,e.name),ir(m,e.name);const oe=new Si({uid:_,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:R,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:j,createdAt:g,lastLoginAt:m});return k&&Array.isArray(k)&&(oe.providerData=k.map(G=>Object.assign({},G))),T&&(oe._redirectEventId=T),oe}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ja;i.updateFromServerResponse(n);const s=new Si({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ya(s),s}}/**
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
 */const Rv=new Map;function jt(t){cn(t instanceof Function,"Expected a class definition");let e=Rv.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rv.set(t,e),e)}/**
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
 */class o0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o0.type="NONE";const Qs=o0;/**
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
 */function Ai(t,e,n){return`firebase:${t}:${e}:${n}`}class Os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ai(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ai("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Si._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Os(jt(Qs),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||jt(Qs);const o=Ai(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Si._fromJSON(e,h);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Os(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Os(s,e,r))}}/**
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
 */function Pv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(u0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(c0(e))return"Blackberry";if(h0(e))return"Webos";if(hg(e))return"Safari";if((e.includes("chrome/")||l0(e))&&!e.includes("edge/"))return"Chrome";if(bl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function a0(t=Ie()){return/firefox\//i.test(t)}function hg(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function l0(t=Ie()){return/crios\//i.test(t)}function u0(t=Ie()){return/iemobile/i.test(t)}function bl(t=Ie()){return/android/i.test(t)}function c0(t=Ie()){return/blackberry/i.test(t)}function h0(t=Ie()){return/webos/i.test(t)}function yo(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xb(t=Ie()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function Zb(t=Ie()){var e;return yo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eN(){return UT()&&document.documentMode===10}function d0(t=Ie()){return yo(t)||bl(t)||h0(t)||c0(t)||/windows phone/i.test(t)||u0(t)}function tN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function f0(t,e=[]){let n;switch(t){case"Browser":n=Pv(Ie());break;case"Worker":n=`${Pv(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class nN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function rN(t,e={}){return xe(t,"GET","/v2/passwordPolicy",Pe(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const iN=6;class sN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class oN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xv(this),this.idTokenSubscription=new xv(this),this.beforeStateQueue=new nN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ya(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rN(this),n=new sN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await Os.create(this,[jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=f0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Cb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Se(t){return $(t)}class xv{constructor(e){this.auth=e,this.observer=null,this.addObserver=$T(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function aN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function dg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aN().appendChild(r)})}function p0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lN="https://www.google.com/recaptcha/enterprise.js?render=",uN="recaptcha-enterprise",cN="NO_RECAPTCHA";class hN{constructor(e){this.type=uN,this.auth=Se(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Fb(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Mb(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Av(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(cN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Av(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}dg(lN+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function kv(t,e,n,r=!1){const i=new hN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Xa(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await kv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await kv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function dN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fN(t,e,n){const r=Se(t);x(r._canInitEmulator,r,"emulator-config-failed"),x(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=m0(e),{host:o,port:a}=pN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||mN()}function m0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pN(t){const e=m0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Cv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Cv(o)}}}function Cv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}/**
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
 */async function g0(t,e){return xe(t,"POST","/v1/accounts:resetPassword",Pe(t,e))}async function gN(t,e){return xe(t,"POST","/v1/accounts:update",e)}async function _N(t,e){return xe(t,"POST","/v1/accounts:signUp",e)}async function yN(t,e){return xe(t,"POST","/v1/accounts:update",Pe(t,e))}/**
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
 */async function vN(t,e){return Xn(t,"POST","/v1/accounts:signInWithPassword",Pe(t,e))}async function Sh(t,e){return xe(t,"POST","/v1/accounts:sendOobCode",Pe(t,e))}async function wN(t,e){return Sh(t,e)}async function IN(t,e){return Sh(t,e)}async function EN(t,e){return Sh(t,e)}async function TN(t,e){return Sh(t,e)}/**
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
 */async function SN(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}async function AN(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}/**
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
 */class Za extends vo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Za(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Za(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xa(e,n,"signInWithPassword",vN);case"emailLink":return SN(e,{email:this._email,oobCode:this._password});default:st(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xa(e,r,"signUpPassword",_N);case"emailLink":return AN(e,{idToken:n,email:this._email,oobCode:this._password});default:st(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zn(t,e){return Xn(t,"POST","/v1/accounts:signInWithIdp",Pe(t,e))}/**
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
 */const RN="http://localhost";class bn extends vo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ag(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}buildRequest(){const e={requestUri:RN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=go(n)}return e}}/**
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
 */async function PN(t,e){return xe(t,"POST","/v1/accounts:sendVerificationCode",Pe(t,e))}async function xN(t,e){return Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e))}async function kN(t,e){const n=await Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e));if(n.temporaryProof)throw na(t,"account-exists-with-different-credential",n);return n}const CN={USER_NOT_FOUND:"user-not-found"};async function bN(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,n),CN)}/**
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
 */class Ri extends vo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Ri({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ri({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return xN(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return kN(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return bN(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ri({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function NN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function DN(t){const e=Ps(ta(t)).link,n=e?Ps(ta(e)).deep_link_id:null,r=Ps(ta(t)).deep_link_id;return(r?Ps(ta(r)).link:null)||r||n||e||t}class Ah{constructor(e){var n,r,i,s,o,a;const l=Ps(ta(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=NN((i=l.mode)!==null&&i!==void 0?i:null);x(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=DN(e);try{return new Ah(n)}catch{return null}}}/**
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
 */class Qr{constructor(){this.providerId=Qr.PROVIDER_ID}static credential(e,n){return Za._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ah.parseLink(n);return x(r,"argument-error"),Za._fromEmailAndCode(e,r.code,r.tenantId)}}Qr.PROVIDER_ID="password";Qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Zn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wo extends Zn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ls extends wo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return x("providerId"in n&&"signInMethod"in n,"argument-error"),bn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return x(e.idToken||e.accessToken,"argument-error"),bn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ls.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ls.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Ls(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class gn extends wo{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
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
 */class _n extends wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
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
 */class yn extends wo{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
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
 */const VN="http://localhost";class Ys extends vo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return zn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Ys(r,s)}static _create(e,n){return new Ys(e,n)}buildRequest(){return{requestUri:VN,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const ON="saml.";class Vc extends Zn{constructor(e){x(e.startsWith(ON),"argument-error"),super(e)}static credentialFromResult(e){return Vc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Vc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Ys.fromJSON(e);return x(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Ys._create(r,n)}catch{return null}}}/**
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
 */class vn extends wo{constructor(){super("twitter.com")}static credential(e,n){return bn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
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
 */async function _0(t,e){return Xn(t,"POST","/v1/accounts:signUp",Pe(t,e))}/**
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
 */class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Si._fromIdTokenResponse(e,r,i),o=bv(r);return new Zt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=bv(r);return new Zt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function bv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function LN(t){var e;const n=Se(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Zt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await _0(n,{returnSecureToken:!0}),i=await Zt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Oc extends yt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Oc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Oc(e,n,r,i)}}function y0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Oc._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function v0(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function MN(t,e){const n=$(t);await Rh(!0,n,e);const{providerUserInfo:r}=await $b(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=v0(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function fg(t,e,n=!1){const r=await Hn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zt._forOperation(t,"link",r)}async function Rh(t,e,n){await Ya(e);const r=v0(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";x(r.has(n)===t,e.auth,i)}/**
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
 */async function w0(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Hn(t,y0(r,i,e,t),n);x(s.idToken,r,"internal-error");const o=Th(s.idToken);x(o,r,"internal-error");const{sub:a}=o;return x(t.uid===a,r,"user-mismatch"),Zt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&st(r,"user-mismatch"),s}}/**
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
 */async function I0(t,e,n=!1){const r="signIn",i=await y0(t,r,e),s=await Zt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ph(t,e){return I0(Se(t),e)}async function E0(t,e){const n=$(t);return await Rh(!1,n,e.providerId),fg(n,e)}async function T0(t,e){return w0($(t),e)}/**
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
 */async function jN(t,e){return Xn(t,"POST","/v1/accounts:signInWithCustomToken",Pe(t,e))}/**
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
 */async function FN(t,e){const n=Se(t),r=await jN(n,{token:e,returnSecureToken:!0}),i=await Zt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Nl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?pg._fromServerResponse(e,n):"totpInfo"in n?mg._fromServerResponse(e,n):st(e,"internal-error")}}class pg extends Nl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new pg(n)}}class mg extends Nl{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new mg(n)}}/**
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
 */function xh(t,e,n){var r;x(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),x(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(x(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(x(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function gg(t){const e=Se(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function UN(t,e,n){const r=Se(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&xh(r,i,n),await Xa(r,i,"getOobCode",IN)}async function $N(t,e,n){await g0($(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gg(t),r})}async function BN(t,e){await yN($(t),{oobCode:e})}async function S0(t,e){const n=$(t),r=await g0(n,{oobCode:e}),i=r.requestType;switch(x(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":x(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":x(r.mfaInfo,n,"internal-error");default:x(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Nl._fromServerResponse(Se(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function zN(t,e){const{data:n}=await S0($(t),e);return n.email}async function qN(t,e,n){const r=Se(t),o=await Xa(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&gg(t),l}),a=await Zt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function WN(t,e,n){return Ph($(t),Qr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&gg(t),r})}/**
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
 */async function GN(t,e,n){const r=Se(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){x(a.handleCodeInApp,r,"argument-error"),a&&xh(r,o,a)}s(i,n),await Xa(r,i,"getOobCode",EN)}function KN(t,e){const n=Ah.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function HN(t,e,n){const r=$(t),i=Qr.credentialWithLink(e,n||Qa());return x(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ph(r,i)}/**
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
 */async function QN(t,e){return xe(t,"POST","/v1/accounts:createAuthUri",Pe(t,e))}/**
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
 */async function YN(t,e){const n=ug()?Qa():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await QN($(t),r);return i||[]}async function JN(t,e){const n=$(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&xh(n.auth,i,e);const{email:s}=await wN(n.auth,i);s!==t.email&&await t.reload()}async function XN(t,e,n){const r=$(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&xh(r.auth,s,n);const{email:o}=await TN(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function ZN(t,e){return xe(t,"POST","/v1/accounts:update",e)}/**
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
 */async function eD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Hn(r,ZN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function tD(t,e){return A0($(t),e,null)}function nD(t,e){return A0($(t),null,e)}async function A0(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Hn(t,gN(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function rD(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Th(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Ms(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new iD(s,i);case"github.com":return new sD(s,i);case"google.com":return new oD(s,i);case"twitter.com":return new aD(s,i,t.screenName||null);case"custom":case"anonymous":return new Ms(s,null);default:return new Ms(s,r,i)}}class Ms{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class R0 extends Ms{constructor(e,n,r,i){super(e,n,r),this.username=i}}class iD extends Ms{constructor(e,n){super(e,"facebook.com",n)}}class sD extends R0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class oD extends Ms{constructor(e,n){super(e,"google.com",n)}}class aD extends R0{constructor(e,n,r){super(e,"twitter.com",n,r)}}function lD(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:rD(n)}/**
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
 */class _i{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new _i("enroll",e,n)}static _fromMfaPendingCredential(e){return new _i("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return _i._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return _i._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class _g{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Se(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Nl._fromServerResponse(r,a));x(i.mfaPendingCredential,r,"internal-error");const o=_i._fromMfaPendingCredential(i.mfaPendingCredential);return new _g(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const h=await Zt._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return x(n.user,r,"internal-error"),Zt._forOperation(n.user,n.operationType,u);default:st(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function uD(t,e){var n;const r=$(t),i=e;return x(e.customData.operationType,r,"argument-error"),x((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),_g._fromError(r,i)}/**
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
 */function cD(t,e){return xe(t,"POST","/v2/accounts/mfaEnrollment:start",Pe(t,e))}function hD(t,e){return xe(t,"POST","/v2/accounts/mfaEnrollment:finalize",Pe(t,e))}function dD(t,e){return xe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Pe(t,e))}class yg{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Nl._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new yg(e)}async getSession(){return _i._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Hn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Hn(this.user,dD(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Xd=new WeakMap;function fD(t){const e=$(t);return Xd.has(e)||Xd.set(e,yg._fromUser(e)),Xd.get(e)}const Lc="__sak";/**
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
 */class P0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lc,"1"),this.storage.removeItem(Lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function pD(){const t=Ie();return hg(t)||yo(t)}const mD=1e3,gD=10;class x0 extends P0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pD()&&tN(),this.fallbackToPolling=d0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}x0.type="LOCAL";const vg=x0;/**
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
 */class k0 extends P0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}k0.type="SESSION";const Vi=k0;/**
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
 */function _D(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new kh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await _D(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kh.receivers=[];/**
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
 */function Dl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Dl("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ve(){return window}function vD(t){Ve().location.href=t}/**
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
 */function wg(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function wD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ID(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ED(){return wg()?self:null}/**
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
 */const C0="firebaseLocalStorageDb",TD=1,Mc="firebaseLocalStorage",b0="fbase_key";class Vl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ch(t,e){return t.transaction([Mc],e?"readwrite":"readonly").objectStore(Mc)}function SD(){const t=indexedDB.deleteDatabase(C0);return new Vl(t).toPromise()}function gp(){const t=indexedDB.open(C0,TD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mc,{keyPath:b0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mc)?e(r):(r.close(),await SD(),e(await gp()))})})}async function Nv(t,e,n){const r=Ch(t,!0).put({[b0]:e,value:n});return new Vl(r).toPromise()}async function AD(t,e){const n=Ch(t,!1).get(e),r=await new Vl(n).toPromise();return r===void 0?null:r.value}function Dv(t,e){const n=Ch(t,!0).delete(e);return new Vl(n).toPromise()}const RD=800,PD=3;class N0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kh._getInstance(ED()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wD(),!this.activeServiceWorker)return;this.sender=new yD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ID()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gp();return await Nv(e,Lc,"1"),await Dv(e,Lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ch(i,!1).getAll();return new Vl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}N0.type="LOCAL";const el=N0;/**
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
 */function xD(t,e){return xe(t,"POST","/v2/accounts/mfaSignIn:start",Pe(t,e))}function kD(t,e){return xe(t,"POST","/v2/accounts/mfaSignIn:finalize",Pe(t,e))}/**
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
 */const CD=500,bD=6e4,Eu=1e12;class ND{constructor(e){this.auth=e,this.counter=Eu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new DD(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Eu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Eu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Eu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class DD{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;x(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=VD(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},bD)},CD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function VD(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Zd=p0("rcb"),OD=new Cl(3e4,6e4),LD="https://www.google.com/recaptcha/api.js?";class MD{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ve().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return x(jD(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Sv(Ve().grecaptcha)?Promise.resolve(Ve().grecaptcha):new Promise((r,i)=>{const s=Ve().setTimeout(()=>{i(nt(e,"network-request-failed"))},OD.get());Ve()[Zd]=()=>{Ve().clearTimeout(s),delete Ve()[Zd];const a=Ve().grecaptcha;if(!a||!Sv(a)){i(nt(e,"internal-error"));return}const l=a.render;a.render=(u,h)=>{const d=l(u,h);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${LD}?${go({onload:Zd,render:"explicit",hl:n})}`;dg(o).catch(()=>{clearTimeout(s),i(nt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ve().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function jD(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class FD{async load(e){return new ND(e)}clearedOneInstance(){}}/**
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
 */const D0="recaptcha",UD={theme:"light",type:"image"};let $D=class{constructor(e,n,r=Object.assign({},UD)){this.parameters=r,this.type=D0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Se(e),this.isInvisible=this.parameters.size==="invisible",x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;x(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new FD:new MD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){x(!this.parameters.sitekey,this.auth,"argument-error"),x(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ve()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){x(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){x(ug()&&!wg(),this.auth,"internal-error"),await BD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await jb(this.auth);x(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return x(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function BD(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class Ig{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ri._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function zD(t,e,n){const r=Se(t),i=await bh(r,e,$(n));return new Ig(i,s=>Ph(r,s))}async function qD(t,e,n){const r=$(t);await Rh(!1,r,"phone");const i=await bh(r.auth,e,$(n));return new Ig(i,s=>E0(r,s))}async function WD(t,e,n){const r=$(t),i=await bh(r.auth,e,$(n));return new Ig(i,s=>T0(r,s))}async function bh(t,e,n){var r;const i=await n.verify();try{x(typeof i=="string",t,"argument-error"),x(n.type===D0,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return x(o.type==="enroll",t,"internal-error"),(await cD(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{x(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return x(a,t,"missing-multi-factor-info"),(await xD(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await PN(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function GD(t,e){await fg($(t),e)}/**
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
 */let Oi=class Gu{constructor(e){this.providerId=Gu.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,n){return bh(this.auth,e,$(n))}static credential(e,n){return Ri._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Gu.credentialFromTaggedObject(n)}static credentialFromError(e){return Gu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ri._fromTokenResponse(n,r):null}};Oi.PROVIDER_ID="phone";Oi.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Yi(t,e){return e?jt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Eg extends vo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KD(t){return I0(t.auth,new Eg(t),t.bypassAuthState)}function HD(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),w0(n,new Eg(t),t.bypassAuthState)}async function QD(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),fg(n,new Eg(t),t.bypassAuthState)}/**
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
 */class V0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KD;case"linkViaPopup":case"linkViaRedirect":return QD;case"reauthViaPopup":case"reauthViaRedirect":return HD;default:st(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const YD=new Cl(2e3,1e4);async function JD(t,e,n){const r=Se(t);_o(t,e,Zn);const i=Yi(r,n);return new jn(r,"signInViaPopup",e,i).executeNotNull()}async function XD(t,e,n){const r=$(t);_o(r.auth,e,Zn);const i=Yi(r.auth,n);return new jn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function ZD(t,e,n){const r=$(t);_o(r.auth,e,Zn);const i=Yi(r.auth,n);return new jn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class jn extends V0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=Dl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YD.get())};e()}}jn.currentPopupAction=null;/**
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
 */const eV="pendingRedirect",va=new Map;class tV extends V0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=va.get(this.auth._key());if(!e){try{const r=await nV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}va.set(this.auth._key(),e)}return this.bypassAuthState||va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nV(t,e){const n=L0(e),r=O0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Tg(t,e){return O0(t)._set(L0(e),"true")}function rV(){va.clear()}function Sg(t,e){va.set(t._key(),e)}function O0(t){return jt(t._redirectPersistence)}function L0(t){return Ai(eV,t.config.apiKey,t.name)}/**
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
 */function iV(t,e,n){return sV(t,e,n)}async function sV(t,e,n){const r=Se(t);_o(t,e,Zn),await r._initializationPromise;const i=Yi(r,n);return await Tg(i,r),i._openRedirect(r,e,"signInViaRedirect")}function oV(t,e,n){return aV(t,e,n)}async function aV(t,e,n){const r=$(t);_o(r.auth,e,Zn),await r.auth._initializationPromise;const i=Yi(r.auth,n);await Tg(i,r.auth);const s=await M0(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function lV(t,e,n){return uV(t,e,n)}async function uV(t,e,n){const r=$(t);_o(r.auth,e,Zn),await r.auth._initializationPromise;const i=Yi(r.auth,n);await Rh(!1,r,e.providerId),await Tg(i,r.auth);const s=await M0(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function cV(t,e){return await Se(t)._initializationPromise,Nh(t,e,!1)}async function Nh(t,e,n=!1){const r=Se(t),i=Yi(r,e),o=await new tV(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function M0(t){const e=Dl(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const hV=10*60*1e3;class j0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!F0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hV&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vv(e))}saveEventToCache(e){this.cachedEventUids.add(Vv(e)),this.lastProcessedEventTime=Date.now()}}function Vv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function F0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F0(t);default:return!1}}/**
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
 */async function U0(t,e={}){return xe(t,"GET","/v1/projects",e)}/**
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
 */const fV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pV=/^https?/;async function mV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await U0(t);for(const n of e)try{if(gV(n))return}catch{}st(t,"unauthorized-domain")}function gV(t){const e=Qa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pV.test(n))return!1;if(fV.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const _V=new Cl(3e4,6e4);function Ov(){const t=Ve().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yV(t){return new Promise((e,n)=>{var r,i,s;function o(){Ov(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ov(),n(nt(t,"network-request-failed"))},timeout:_V.get()})}if(!((i=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ve().gapi)===null||s===void 0)&&s.load)o();else{const a=p0("iframefcb");return Ve()[a]=()=>{gapi.load?o():n(nt(t,"network-request-failed"))},dg(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ku=null,e})}let Ku=null;function vV(t){return Ku=Ku||yV(t),Ku}/**
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
 */const wV=new Cl(5e3,15e3),IV="__/auth/iframe",EV="emulator/auth/iframe",TV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AV(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cg(e,EV):`https://${t.config.authDomain}/${IV}`,r={apiKey:e.apiKey,appName:t.name,v:Kr},i=SV.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${go(r).slice(1)}`}async function RV(t){const e=await vV(t),n=Ve().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:AV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=Ve().setTimeout(()=>{s(o)},wV.get());function l(){Ve().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const PV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xV=500,kV=600,CV="_blank",bV="http://localhost";class Lv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NV(t,e,n,r=xV,i=kV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},PV),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ie().toLowerCase();n&&(a=l0(u)?CV:n),a0(u)&&(e=e||bV,l.scrollbars="yes");const h=Object.entries(l).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(Zb(u)&&a!=="_self")return DV(e||"",a),new Lv(null);const d=window.open(e||"",a,h);x(d,t,"popup-blocked");try{d.focus()}catch{}return new Lv(d)}function DV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VV="__/auth/handler",OV="emulator/auth/handler",LV=encodeURIComponent("fac");async function _p(t,e,n,r,i,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kr,eventId:i};if(e instanceof Zn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(s||{}))o[h]=d}if(e instanceof wo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${LV}=${encodeURIComponent(l)}`:"";return`${MV(t)}?${go(a).slice(1)}${u}`}function MV({config:t}){return t.emulator?cg(t,OV):`https://${t.authDomain}/${VV}`}/**
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
 */const ef="webStorageSupport";class jV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vi,this._completeRedirectFn=Nh,this._overrideRedirectResult=Sg}async _openPopup(e,n,r,i){var s;cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _p(e,n,r,Qa(),i);return NV(e,o,Dl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _p(e,n,r,Qa(),i);return vD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RV(e),r=new j0(e);return n.register("authEvent",i=>(x(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ef,{type:ef},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ef];o!==void 0&&n(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return d0()||hg()||yo()}}const FV=jV;class UV{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return In("unexpected MultiFactorSessionType")}}}class Ag extends UV{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ag(e)}_finalizeEnroll(e,n,r){return hD(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return kD(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class $0{constructor(){}static assertion(e){return Ag._fromCredential(e)}}$0.FACTOR_ID="phone";var Mv="@firebase/auth",jv="1.4.0";/**
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
 */class $V{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function BV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zV(t){Vr(new Cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:f0(t)},u=new oN(r,i,s,l);return dN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new Cn("auth-internal",e=>{const n=Se(e.getProvider("auth").getImmediate());return(r=>new $V(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Mv,jv,BV(t)),xn(Mv,jv,"esm2017")}/**
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
 */const qV=5*60;Qk("authIdTokenMaxAge");zV("Browser");/**
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
 */function Li(){return window}/**
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
 */const WV=2e3;async function GV(t,e,n){var r;const{BuildInfo:i}=Li();cn(e.sessionId,"AuthEvent did not contain a session ID");const s=await JV(e.sessionId),o={};return yo()?o.ibi=i.packageName:bl()?o.apn=i.packageName:st(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,_p(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function KV(t){const{BuildInfo:e}=Li(),n={};yo()?n.iosBundleId=e.packageName:bl()?n.androidPackageName=e.packageName:st(t,"operation-not-supported-in-this-environment"),await U0(t,n)}function HV(t){const{cordova:e}=Li();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,Xb()?"_blank":"_system","location=yes"),n(i)})})}async function QV(t,e,n){const{cordova:r}=Li();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const f=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof f=="function"&&f(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(nt(t,"redirect-cancelled-by-user"))},WV))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),bl()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function YV(t){var e,n,r,i,s,o,a,l,u,h;const d=Li();x(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),x(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),x(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((h=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function JV(t){const e=XV(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function XV(t){if(cn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const ZV=20;class eO extends j0{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function tO(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:iO(),postBody:null,tenantId:t.tenantId,error:nt(t,"no-auth-event")}}function nO(t,e){return yp()._set(vp(t),e)}async function Fv(t){const e=await yp()._get(vp(t));return e&&await yp()._remove(vp(t)),e}function rO(t,e){var n,r;const i=oO(e);if(i.includes("/__/auth/callback")){const s=Hu(i),o=s.firebaseError?sO(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?nt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function iO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ZV;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function yp(){return jt(vg)}function vp(t){return Ai("authEvent",t.config.apiKey,t.name)}function sO(t){try{return JSON.parse(t)}catch{return null}}function oO(t){const e=Hu(t),n=e.link?decodeURIComponent(e.link):void 0,r=Hu(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Hu(i).link||i||r||n||t}function Hu(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Ps(n.join("?"))}/**
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
 */const aO=500;class lO{constructor(){this._redirectPersistence=Vi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Nh,this._overrideRedirectResult=Sg}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new eO(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){st(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){YV(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),rV(),await this._originValidation(e);const o=tO(e,r,i);await nO(e,o);const a=await GV(e,o,n),l=await HV(a);return QV(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KV(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Li(),o=setTimeout(async()=>{await Fv(e),n.onEvent(Uv())},aO),a=async h=>{clearTimeout(o);const d=await Fv(e);let f=null;d&&(h!=null&&h.url)&&(f=rO(d,h.url)),n.onEvent(f||Uv())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Li().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(u)&&a({url:h}),typeof l=="function")try{l(h)}catch(d){console.error(d)}}}}const uO=lO;function Uv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:nt("no-auth-event")}}/**
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
 */function cO(t,e){Se(t)._logFramework(e)}var hO="@firebase/auth-compat",dO="0.4.9";/**
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
 */const fO=1e3;function wa(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function pO(){return wa()==="http:"||wa()==="https:"}function B0(t=Ie()){return!!((wa()==="file:"||wa()==="ionic:"||wa()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function mO(){return rg()||ng()}function gO(){return UT()&&(document==null?void 0:document.documentMode)===11}function _O(t=Ie()){return/Edge\/\d+/.test(t)}function yO(t=Ie()){return gO()||_O(t)}function z0(){try{const t=self.localStorage,e=Dl();if(t)return t.setItem(e,"1"),t.removeItem(e),yO()?Ga():!0}catch{return Rg()&&Ga()}return!1}function Rg(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function tf(){return(pO()||FT()||B0())&&!mO()&&z0()&&!Rg()}function q0(){return B0()&&typeof document<"u"}async function vO(){return q0()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},fO);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function wO(){return typeof window<"u"?window:null}/**
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
 */const Lt={LOCAL:"local",NONE:"none",SESSION:"session"},Bo=x,W0="persistence";function IO(t,e){if(Bo(Object.values(Lt).includes(e),t,"invalid-persistence-type"),rg()){Bo(e!==Lt.SESSION,t,"unsupported-persistence-type");return}if(ng()){Bo(e===Lt.NONE,t,"unsupported-persistence-type");return}if(Rg()){Bo(e===Lt.NONE||e===Lt.LOCAL&&Ga(),t,"unsupported-persistence-type");return}Bo(e===Lt.NONE||z0(),t,"unsupported-persistence-type")}async function wp(t){await t._initializationPromise;const e=G0(),n=Ai(W0,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function EO(t,e){const n=G0();if(!n)return[];const r=Ai(W0,t,e);switch(n.getItem(r)){case Lt.NONE:return[Qs];case Lt.LOCAL:return[el,Vi];case Lt.SESSION:return[Vi];default:return[]}}function G0(){var t;try{return((t=wO())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const TO=x;class _r{constructor(){this.browserResolver=jt(FV),this.cordovaResolver=jt(uO),this.underlyingResolver=null,this._redirectPersistence=Vi,this._completeRedirectFn=Nh,this._overrideRedirectResult=Sg}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return q0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return TO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await vO();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function K0(t){return t.unwrap()}function SO(t){return t.wrapped()}/**
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
 */function AO(t){return H0(t)}function RO(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new PO(t,uD(t,e))}else if(r){const i=H0(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function H0(t){const{_tokenResponse:e}=t instanceof yt?t.customData:t;if(!e)return null;if(!(t instanceof yt)&&"temporaryProof"in e&&"phoneNumber"in e)return Oi.credentialFromResult(t);const n=e.providerId;if(!n||n===$o.PASSWORD)return null;let r;switch(n){case $o.GOOGLE:r=_n;break;case $o.FACEBOOK:r=gn;break;case $o.GITHUB:r=yn;break;case $o.TWITTER:r=vn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Ys._create(n,a):bn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Ls(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof yt?r.credentialFromError(t):r.credentialFromResult(t)}function At(t,e){return e.catch(n=>{throw n instanceof yt&&RO(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:AO(n),additionalUserInfo:lD(n),user:Dh.getOrCreate(i)}})}async function Ip(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>At(t,n.confirm(r))}}class PO{constructor(e,n){this.resolver=n,this.auth=SO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return At(K0(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Dh=class ra{constructor(e){this._delegate=e,this.multiFactor=fD(e)}static getOrCreate(e){return ra.USER_MAP.has(e)||ra.USER_MAP.set(e,new ra(e)),ra.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return At(this.auth,E0(this._delegate,e))}async linkWithPhoneNumber(e,n){return Ip(this.auth,qD(this._delegate,e,n))}async linkWithPopup(e){return At(this.auth,ZD(this._delegate,e,_r))}async linkWithRedirect(e){return await wp(Se(this.auth)),lV(this._delegate,e,_r)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return At(this.auth,T0(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Ip(this.auth,WD(this._delegate,e,n))}reauthenticateWithPopup(e){return At(this.auth,XD(this._delegate,e,_r))}async reauthenticateWithRedirect(e){return await wp(Se(this.auth)),oV(this._delegate,e,_r)}sendEmailVerification(e){return JN(this._delegate,e)}async unlink(e){return await MN(this._delegate,e),this}updateEmail(e){return tD(this._delegate,e)}updatePassword(e){return nD(this._delegate,e)}updatePhoneNumber(e){return GD(this._delegate,e)}updateProfile(e){return eD(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return XN(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Dh.USER_MAP=new WeakMap;/**
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
 */const zo=x;class Ep{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;zo(r,"invalid-api-key",{appName:e.name}),zo(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?_r:void 0;this._delegate=n.initialize({options:{persistence:xO(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(xb),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Dh.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){fN(this._delegate,e,n)}applyActionCode(e){return BN(this._delegate,e)}checkActionCode(e){return S0(this._delegate,e)}confirmPasswordReset(e,n){return $N(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return At(this._delegate,qN(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return YN(this._delegate,e)}isSignInWithEmailLink(e){return KN(this._delegate,e)}async getRedirectResult(){zo(tf(),this._delegate,"operation-not-supported-in-this-environment");const e=await cV(this._delegate,_r);return e?At(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){cO(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=$v(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=$v(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return GN(this._delegate,e,n)}sendPasswordResetEmail(e,n){return UN(this._delegate,e,n||void 0)}async setPersistence(e){IO(this._delegate,e);let n;switch(e){case Lt.SESSION:n=Vi;break;case Lt.LOCAL:n=await jt(el)._isAvailable()?el:vg;break;case Lt.NONE:n=Qs;break;default:return st("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return At(this._delegate,LN(this._delegate))}signInWithCredential(e){return At(this._delegate,Ph(this._delegate,e))}signInWithCustomToken(e){return At(this._delegate,FN(this._delegate,e))}signInWithEmailAndPassword(e,n){return At(this._delegate,WN(this._delegate,e,n))}signInWithEmailLink(e,n){return At(this._delegate,HN(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Ip(this._delegate,zD(this._delegate,e,n))}async signInWithPopup(e){return zo(tf(),this._delegate,"operation-not-supported-in-this-environment"),At(this._delegate,JD(this._delegate,e,_r))}async signInWithRedirect(e){return zo(tf(),this._delegate,"operation-not-supported-in-this-environment"),await wp(this._delegate),iV(this._delegate,e,_r)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return zN(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Ep.Persistence=Lt;function $v(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Dh.getOrCreate(o)),error:e,complete:n}}function xO(t,e){const n=EO(t,e);if(typeof self<"u"&&!n.includes(el)&&n.push(el),typeof window<"u")for(const r of[vg,Vi])n.includes(r)||n.push(r);return n.includes(Qs)||n.push(Qs),n}/**
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
 */class Pg{constructor(){this.providerId="phone",this._delegate=new Oi(K0(Hr.auth()))}static credential(e,n){return Oi.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Pg.PHONE_SIGN_IN_METHOD=Oi.PHONE_SIGN_IN_METHOD;Pg.PROVIDER_ID=Oi.PROVIDER_ID;/**
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
 */const kO=x;class CO{constructor(e,n,r=Hr.app()){var i;kO((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new $D(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const bO="auth-compat";function NO(t){t.INTERNAL.registerComponent(new Cn(bO,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Ep(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:is.EMAIL_SIGNIN,PASSWORD_RESET:is.PASSWORD_RESET,RECOVER_EMAIL:is.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:is.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:is.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:is.VERIFY_EMAIL}},EmailAuthProvider:Qr,FacebookAuthProvider:gn,GithubAuthProvider:yn,GoogleAuthProvider:_n,OAuthProvider:Ls,SAMLAuthProvider:Vc,PhoneAuthProvider:Pg,PhoneMultiFactorGenerator:$0,RecaptchaVerifier:CO,TwitterAuthProvider:vn,Auth:Ep,AuthCredential:vo,Error:yt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(hO,dO)}NO(Hr);var DO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,xg=xg||{},B=DO||self;function Vh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ol(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function VO(t){return Object.prototype.hasOwnProperty.call(t,nf)&&t[nf]||(t[nf]=++OO)}var nf="closure_uid_"+(1e9*Math.random()>>>0),OO=0;function LO(t,e,n){return t.call.apply(t.bind,arguments)}function MO(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=LO:ct=MO,ct.apply(null,arguments)}function Tu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Yr(){this.s=this.s,this.o=this.o}var jO=0;Yr.prototype.s=!1;Yr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),jO!=0)&&VO(this)};Yr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Q0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function kg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Bv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Vh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var FO=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",()=>{},e),B.removeEventListener("test",()=>{},e)}catch{}return t}();function tl(t){return/^[\s\xa0]*$/.test(t)}function Oh(){var t=B.navigator;return t&&(t=t.userAgent)?t:""}function wn(t){return Oh().indexOf(t)!=-1}function Cg(t){return Cg[" "](t),t}Cg[" "]=function(){};function UO(t,e){var n=NL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var $O=wn("Opera"),Js=wn("Trident")||wn("MSIE"),Y0=wn("Edge"),Tp=Y0||Js,J0=wn("Gecko")&&!(Oh().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge"))&&!(wn("Trident")||wn("MSIE"))&&!wn("Edge"),BO=Oh().toLowerCase().indexOf("webkit")!=-1&&!wn("Edge");function X0(){var t=B.document;return t?t.documentMode:void 0}var Sp;e:{var rf="",sf=function(){var t=Oh();if(J0)return/rv:([^\);]+)(\)|;)/.exec(t);if(Y0)return/Edge\/([\d\.]+)/.exec(t);if(Js)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(BO)return/WebKit\/(\S+)/.exec(t);if($O)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(sf&&(rf=sf?sf[1]:""),Js){var of=X0();if(of!=null&&of>parseFloat(rf)){Sp=String(of);break e}}Sp=rf}var Ap;if(B.document&&Js){var zv=X0();Ap=zv||parseInt(Sp,10)||void 0}else Ap=void 0;var zO=Ap;function nl(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(J0){e:{try{Cg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:qO[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nl.$.h.call(this)}}Ke(nl,ht);var qO={2:"touch",3:"pen",4:"mouse"};nl.prototype.h=function(){nl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ll="closure_listenable_"+(1e6*Math.random()|0),WO=0;function GO(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++WO,this.fa=this.ia=!1}function Lh(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function bg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function KO(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Z0(t){const e={};for(const n in t)e[n]=t[n];return e}const qv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function eS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<qv.length;s++)n=qv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Mh(t){this.src=t,this.g={},this.h=0}Mh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Pp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new GO(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Rp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Q0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Lh(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ng="closure_lm_"+(1e6*Math.random()|0),af={};function tS(t,e,n,r,i){if(r&&r.once)return rS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)tS(t,e[s],n,r,i);return null}return n=Og(n),t&&t[Ll]?t.O(e,n,Ol(r)?!!r.capture:!!r,i):nS(t,e,n,!1,r,i)}function nS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ol(i)?!!i.capture:!!i,a=Vg(t);if(a||(t[Ng]=a=new Mh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=HO(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)FO||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(sS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function HO(){function t(n){return e.call(t.src,t.listener,n)}const e=QO;return t}function rS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)rS(t,e[s],n,r,i);return null}return n=Og(n),t&&t[Ll]?t.P(e,n,Ol(r)?!!r.capture:!!r,i):nS(t,e,n,!0,r,i)}function iS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)iS(t,e[s],n,r,i);else r=Ol(r)?!!r.capture:!!r,n=Og(n),t&&t[Ll]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Pp(s,n,r,i),-1<n&&(Lh(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pp(e,n,r,i)),(n=-1<t?e[t]:null)&&Dg(n))}function Dg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ll])Rp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Vg(e))?(Rp(n,t),n.h==0&&(n.src=null,e[Ng]=null)):Lh(t)}}}function sS(t){return t in af?af[t]:af[t]="on"+t}function QO(t,e){if(t.fa)t=!0;else{e=new nl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Dg(t),t=n.call(r,e)}return t}function Vg(t){return t=t[Ng],t instanceof Mh?t:null}var lf="__closure_events_fn_"+(1e9*Math.random()>>>0);function Og(t){return typeof t=="function"?t:(t[lf]||(t[lf]=function(e){return t.handleEvent(e)}),t[lf])}function Ge(){Yr.call(this),this.i=new Mh(this),this.S=this,this.J=null}Ke(Ge,Yr);Ge.prototype[Ll]=!0;Ge.prototype.removeEventListener=function(t,e,n,r){iS(this,t,e,n,r)};function rt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var i=e;e=new ht(r,t),eS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Su(o,r,!0,e)&&i}if(o=e.g=t,i=Su(o,r,!0,e)&&i,i=Su(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Su(o,r,!1,e)&&i}Ge.prototype.N=function(){if(Ge.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Lh(n[r]);delete t.g[e],t.h--}}this.J=null};Ge.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ge.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Su(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Rp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Lg=B.JSON.stringify;class YO{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function JO(){var t=Mg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class XO{constructor(){this.h=this.g=null}add(e,n){const r=oS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var oS=new YO(()=>new ZO,t=>t.reset());class ZO{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function eL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function tL(t){B.setTimeout(()=>{throw t},0)}let rl,il=!1,Mg=new XO,aS=()=>{const t=B.Promise.resolve(void 0);rl=()=>{t.then(nL)}};var nL=()=>{for(var t;t=JO();){try{t.h.call(t.g)}catch(n){tL(n)}var e=oS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}il=!1};function jh(t,e){Ge.call(this),this.h=t||1,this.g=e||B,this.j=ct(this.qb,this),this.l=Date.now()}Ke(jh,Ge);D=jh.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),rt(this,"tick"),this.ga&&(jg(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){jh.$.N.call(this),jg(this),delete this.g};function Fg(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function lS(t){t.g=Fg(()=>{t.g=null,t.i&&(t.i=!1,lS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rL extends Yr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:lS(this)}N(){super.N(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function sl(t){Yr.call(this),this.h=t,this.g={}}Ke(sl,Yr);var Wv=[];function uS(t,e,n,r){Array.isArray(n)||(n&&(Wv[0]=n.toString()),n=Wv);for(var i=0;i<n.length;i++){var s=tS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function cS(t){bg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Dg(e)},t),t.g={}}sl.prototype.N=function(){sl.$.N.call(this),cS(this)};sl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fh(){this.g=!0}Fh.prototype.Ea=function(){this.g=!1};function iL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var d=h.split("_");o=2<=d.length&&d[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function sL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function xs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+aL(t,n)+(r?" "+r:"")})}function oL(t,e){t.info(function(){return"TIMEOUT: "+e})}Fh.prototype.info=function(){};function aL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Lg(n)}catch{return e}}var Ji={},Gv=null;function Uh(){return Gv=Gv||new Ge}Ji.Ta="serverreachability";function hS(t){ht.call(this,Ji.Ta,t)}Ke(hS,ht);function ol(t){const e=Uh();rt(e,new hS(e))}Ji.STAT_EVENT="statevent";function dS(t,e){ht.call(this,Ji.STAT_EVENT,t),this.stat=e}Ke(dS,ht);function gt(t){const e=Uh();rt(e,new dS(e,t))}Ji.Ua="timingevent";function fS(t,e){ht.call(this,Ji.Ua,t),this.size=e}Ke(fS,ht);function Ml(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){t()},e)}var $h={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ug(){}Ug.prototype.h=null;function Kv(t){return t.h||(t.h=t.i())}function mS(){}var jl={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $g(){ht.call(this,"d")}Ke($g,ht);function Bg(){ht.call(this,"c")}Ke(Bg,ht);var xp;function Bh(){}Ke(Bh,Ug);Bh.prototype.g=function(){return new XMLHttpRequest};Bh.prototype.i=function(){return{}};xp=new Bh;function Fl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new sl(this),this.P=lL,t=Tp?125:void 0,this.V=new jh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new gS}function gS(){this.i=null,this.g="",this.h=!1}var lL=45e3,kp={},jc={};D=Fl.prototype;D.setTimeout=function(t){this.P=t};function Cp(t,e,n){t.L=1,t.v=qh(Qn(e)),t.s=n,t.S=!0,_S(t,null)}function _S(t,e){t.G=Date.now(),Ul(t),t.A=Qn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),AS(n.i,"t",r),t.C=0,n=t.l.J,t.h=new gS,t.g=GS(t.l,n?e:null,!t.s),0<t.O&&(t.M=new rL(ct(t.Pa,t,t.g),t.O)),uS(t.U,t.g,"readystatechange",t.nb),e=t.I?Z0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ol(),iL(t.j,t.u,t.A,t.m,t.W,t.s)}D.nb=function(t){t=t.target;const e=this.M;e&&En(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const h=En(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>h)&&(h!=3||Tp||this.g&&(this.h.h||this.g.ja()||Jv(this.g)))){this.J||h!=4||e==7||(e==8||0>=d?ol(3):ol(2)),zh(this);var n=this.g.da();this.ca=n;t:if(yS(this)){var r=Jv(this.g);t="";var i=r.length,s=En(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yi(this),Ia(this);var o="";break t}this.h.i=new B.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,sL(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!tl(a)){var u=a;break t}}u=null}if(n=u)xs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,bp(this,n);else{this.i=!1,this.o=3,gt(12),yi(this),Ia(this);break e}}this.S?(vS(this,h,o),Tp&&this.i&&h==3&&(uS(this.U,this.V,"tick",this.mb),this.V.start())):(xs(this.j,this.m,o,null),bp(this,o)),h==4&&yi(this),this.i&&!this.J&&(h==4?BS(this.l,this):(this.i=!1,Ul(this)))}else kL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),yi(this),Ia(this)}}}catch{}finally{}};function yS(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function vS(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=uL(t,n),i==jc){e==4&&(t.o=4,gt(14),r=!1),xs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==kp){t.o=4,gt(15),xs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else xs(t.j,t.m,i,null),bp(t,i);yS(t)&&i!=jc&&i!=kp&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,gt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hg(e),e.M=!0,gt(11))):(xs(t.j,t.m,n,"[Invalid Chunked Response]"),yi(t),Ia(t))}D.mb=function(){if(this.g){var t=En(this.g),e=this.g.ja();this.C<e.length&&(zh(this),vS(this,t,e),this.i&&t!=4&&Ul(this))}};function uL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?jc:(n=Number(e.substring(n,r)),isNaN(n)?kp:(r+=1,r+n>e.length?jc:(e=e.slice(r,r+n),t.C=r+n,e)))}D.cancel=function(){this.J=!0,yi(this)};function Ul(t){t.Y=Date.now()+t.P,wS(t,t.P)}function wS(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ml(ct(t.lb,t),e)}function zh(t){t.B&&(B.clearTimeout(t.B),t.B=null)}D.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(oL(this.j,this.A),this.L!=2&&(ol(),gt(17)),yi(this),this.o=2,Ia(this)):wS(this,this.Y-t)};function Ia(t){t.l.H==0||t.J||BS(t.l,t)}function yi(t){zh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,jg(t.V),cS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function bp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Np(n.i,t))){if(!t.K&&Np(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)$c(n),Kh(n);else break e;Kg(n),gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ml(ct(n.ib,n),6e3));if(1>=xS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else vi(n,11)}else if((t.K||n.g==t)&&$c(n),!tl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(zg(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ce(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=WS(r,r.J?r.pa:null,r.Y),o.K){kS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(zh(a),Ul(a)),r.g=o}else US(r);0<n.j.length&&Hh(n)}else u[0]!="stop"&&u[0]!="close"||vi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?vi(n,7):Gg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ol(4)}catch{}}function cL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Vh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function hL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Vh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function IS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Vh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=hL(t),r=cL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var ES=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Pi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Pi){this.h=t.h,Fc(this,t.j),this.s=t.s,this.g=t.g,Uc(this,t.m),this.l=t.l;var e=t.i,n=new al;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hv(this,n),this.o=t.o}else t&&(e=String(t).match(ES))?(this.h=!1,Fc(this,e[1]||"",!0),this.s=ia(e[2]||""),this.g=ia(e[3]||"",!0),Uc(this,e[4]),this.l=ia(e[5]||"",!0),Hv(this,e[6]||"",!0),this.o=ia(e[7]||"")):(this.h=!1,this.i=new al(null,this.h))}Pi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(sa(e,Qv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(sa(e,Qv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(sa(n,n.charAt(0)=="/"?mL:pL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",sa(n,_L)),t.join("")};function Qn(t){return new Pi(t)}function Fc(t,e,n){t.j=n?ia(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Uc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hv(t,e,n){e instanceof al?(t.i=e,yL(t.i,t.h)):(n||(e=sa(e,gL)),t.i=new al(e,t.h))}function ce(t,e,n){t.i.set(e,n)}function qh(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ia(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function sa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,fL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function fL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Qv=/[#\/\?@]/g,pL=/[#\?:]/g,mL=/[#\?]/g,gL=/[#\?@]/g,_L=/#/g;function al(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Jr(t){t.g||(t.g=new Map,t.h=0,t.i&&dL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=al.prototype;D.add=function(t,e){Jr(this),this.i=null,t=Io(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function TS(t,e){Jr(t),e=Io(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function SS(t,e){return Jr(t),e=Io(t,e),t.g.has(e)}D.forEach=function(t,e){Jr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.ta=function(){Jr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.Z=function(t){Jr(this);let e=[];if(typeof t=="string")SS(this,t)&&(e=e.concat(this.g.get(Io(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Jr(this),this.i=null,t=Io(this,t),SS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function AS(t,e,n){TS(t,e),0<n.length&&(t.i=null,t.g.set(Io(t,e),kg(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Io(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yL(t,e){e&&!t.j&&(Jr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(TS(this,r),AS(this,i,n))},t)),t.j=e}var vL=class{constructor(t,e){this.g=t,this.map=e}};function RS(t){this.l=t||wL,B.PerformanceNavigationTiming?(t=B.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(B.g&&B.g.Ka&&B.g.Ka()&&B.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wL=10;function PS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xS(t){return t.h?1:t.g?t.g.size:0}function Np(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function zg(t,e){t.g?t.g.add(e):t.h=e}function kS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}RS.prototype.cancel=function(){if(this.i=CS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function CS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return kg(t.i)}var IL=class{stringify(t){return B.JSON.stringify(t,void 0)}parse(t){return B.JSON.parse(t,void 0)}};function EL(){this.g=new IL}function TL(t,e,n){const r=n||"";try{IS(t,function(i,s){let o=i;Ol(i)&&(o=Lg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function SL(t,e){const n=new Fh;if(B.Image){const r=new Image;r.onload=Tu(Au,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Tu(Au,n,r,"TestLoadImage: error",!1,e),r.onabort=Tu(Au,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Tu(Au,n,r,"TestLoadImage: timeout",!1,e),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Au(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function $l(t){this.l=t.ec||null,this.j=t.ob||!1}Ke($l,Ug);$l.prototype.g=function(){return new Wh(this.l,this.j)};$l.prototype.i=function(t){return function(){return t}}({});function Wh(t,e){Ge.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=qg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(Wh,Ge);var qg=0;D=Wh.prototype;D.open=function(t,e){if(this.readyState!=qg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ll(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||B).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bl(this)),this.readyState=qg};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ll(this)),this.g&&(this.readyState=3,ll(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function bS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bl(this):ll(this),this.readyState==3&&bS(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,Bl(this))};D.Ya=function(t){this.g&&(this.response=t,Bl(this))};D.ka=function(){this.g&&Bl(this)};function Bl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ll(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ll(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var AL=B.JSON.parse;function Ae(t){Ge.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=NS,this.L=this.M=!1}Ke(Ae,Ge);var NS="",RL=/^https?$/i,PL=["POST","PUT"];D=Ae.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():xp.g(),this.C=this.u?Kv(this.u):Kv(xp),this.g.onreadystatechange=ct(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Yv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=B.FormData&&t instanceof B.FormData,!(0<=Q0(PL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{OS(this),0<this.B&&((this.L=xL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.ua,this)):this.A=Fg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Yv(this,s)}};function xL(t){return Js&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof xg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function Yv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,DS(t),Gh(t)}function DS(t){t.F||(t.F=!0,rt(t,"complete"),rt(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,rt(this,"complete"),rt(this,"abort"),Gh(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gh(this,!0)),Ae.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?VS(this):this.kb())};D.kb=function(){VS(this)};function VS(t){if(t.h&&typeof xg<"u"&&(!t.C[1]||En(t)!=4||t.da()!=2)){if(t.v&&En(t)==4)Fg(t.La,0,t);else if(rt(t,"readystatechange"),En(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(ES)[1]||null;!i&&B.self&&B.self.location&&(i=B.self.location.protocol.slice(0,-1)),r=!RL.test(i?i.toLowerCase():"")}n=r}if(n)rt(t,"complete"),rt(t,"success");else{t.m=6;try{var s=2<En(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",DS(t)}}finally{Gh(t)}}}}function Gh(t,e){if(t.g){OS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||rt(t,"ready");try{n.onreadystatechange=r}catch{}}}function OS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function En(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<En(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),AL(e)}};function Jv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case NS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function kL(t){const e={};t=(t.g&&2<=En(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(tl(t[r]))continue;var n=eL(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}KO(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function LS(t){let e="";return bg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Wg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=LS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ce(t,e,n))}function qo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function MS(t){this.Ga=0,this.j=[],this.l=new Fh,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qo("baseRetryDelayMs",5e3,t),this.hb=qo("retryDelaySeedMs",1e4,t),this.eb=qo("forwardChannelMaxRetries",2,t),this.xa=qo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new RS(t&&t.concurrentRequestLimit),this.Ja=new EL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=MS.prototype;D.ra=8;D.H=1;function Gg(t){if(jS(t),t.H==3){var e=t.W++,n=Qn(t.I);if(ce(n,"SID",t.K),ce(n,"RID",e),ce(n,"TYPE","terminate"),zl(t,n),e=new Fl(t,t.l,e),e.L=2,e.v=qh(Qn(n)),n=!1,B.navigator&&B.navigator.sendBeacon)try{n=B.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&B.Image&&(new Image().src=e.v,n=!0),n||(e.g=GS(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ul(e)}qS(t)}function Kh(t){t.g&&(Hg(t),t.g.cancel(),t.g=null)}function jS(t){Kh(t),t.u&&(B.clearTimeout(t.u),t.u=null),$c(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&B.clearTimeout(t.m),t.m=null)}function Hh(t){if(!PS(t.i)&&!t.m){t.m=!0;var e=t.Na;rl||aS(),il||(rl(),il=!0),Mg.add(e,t),t.C=0}}function CL(t,e){return xS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ml(ct(t.Na,t,e),zS(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Fl(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Z0(s),eS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=FS(this,i,e),n=Qn(this.I),ce(n,"RID",t),ce(n,"CVER",22),this.F&&ce(n,"X-HTTP-Session-Id",this.F),zl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(LS(s)))+"&"+e:this.o&&Wg(n,this.o,s)),zg(this.i,i),this.bb&&ce(n,"TYPE","init"),this.P?(ce(n,"$req",e),ce(n,"SID","null"),i.aa=!0,Cp(i,n,null)):Cp(i,n,e),this.H=2}}else this.H==3&&(t?Xv(this,t):this.j.length==0||PS(this.i)||Xv(this))};function Xv(t,e){var n;e?n=e.m:n=t.W++;const r=Qn(t.I);ce(r,"SID",t.K),ce(r,"RID",n),ce(r,"AID",t.V),zl(t,r),t.o&&t.s&&Wg(r,t.o,t.s),n=new Fl(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=FS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),zg(t.i,n),Cp(n,r,e)}function zl(t,e){t.na&&bg(t.na,function(n,r){ce(e,r,n)}),t.h&&IS({},function(n,r){ce(e,r,n)})}function FS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ct(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const h=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{TL(h,o,"req"+u+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function US(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;rl||aS(),il||(rl(),il=!0),Mg.add(e,t),t.A=0}}function Kg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ml(ct(t.Ma,t),zS(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,$S(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ml(ct(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),Kh(this),$S(this))};function Hg(t){t.B!=null&&(B.clearTimeout(t.B),t.B=null)}function $S(t){t.g=new Fl(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qn(t.wa);ce(e,"RID","rpc"),ce(e,"SID",t.K),ce(e,"AID",t.V),ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ce(e,"TO",t.qa),ce(e,"TYPE","xmlhttp"),zl(t,e),t.o&&t.s&&Wg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=qh(Qn(e)),n.s=null,n.S=!0,_S(n,t)}D.ib=function(){this.v!=null&&(this.v=null,Kh(this),Kg(this),gt(19))};function $c(t){t.v!=null&&(B.clearTimeout(t.v),t.v=null)}function BS(t,e){var n=null;if(t.g==e){$c(t),Hg(t),t.g=null;var r=2}else if(Np(t.i,e))n=e.F,kS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Uh(),rt(r,new fS(r,n)),Hh(t)}else US(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&CL(t,e)||r==2&&Kg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:vi(t,5);break;case 4:vi(t,10);break;case 3:vi(t,6);break;default:vi(t,2)}}}function zS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function vi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ct(t.pb,t);n||(n=new Pi("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||Fc(n,"https"),qh(n)),SL(n.toString(),r)}else gt(2);t.H=0,t.h&&t.h.za(e),qS(t),jS(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function qS(t){if(t.H=0,t.ma=[],t.h){const e=CS(t.i);(e.length!=0||t.j.length!=0)&&(Bv(t.ma,e),Bv(t.ma,t.j),t.i.i.length=0,kg(t.j),t.j.length=0),t.h.ya()}}function WS(t,e,n){var r=n instanceof Pi?Qn(n):new Pi(n);if(r.g!="")e&&(r.g=e+"."+r.g),Uc(r,r.m);else{var i=B.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Pi(null);r&&Fc(s,r),e&&(s.g=e),i&&Uc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ce(r,n,e),ce(r,"VER",t.ra),zl(t,r),r}function GS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ae(new $l({ob:!0})):new Ae(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function KS(){}D=KS.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function Bc(){if(Js&&!(10<=Number(zO)))throw Error("Environmental error: no available transport.")}Bc.prototype.g=function(t,e){return new $t(t,e)};function $t(t,e){Ge.call(this),this.g=new MS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!tl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!tl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Eo(this)}Ke($t,Ge);$t.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;gt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=WS(t,null,t.Y),Hh(t)};$t.prototype.close=function(){Gg(this.g)};$t.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Lg(t),t=n);e.j.push(new vL(e.fb++,t)),e.H==3&&Hh(e)};$t.prototype.N=function(){this.g.h=null,delete this.j,Gg(this.g),delete this.g,$t.$.N.call(this)};function HS(t){$g.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(HS,$g);function QS(){Bg.call(this),this.status=1}Ke(QS,Bg);function Eo(t){this.g=t}Ke(Eo,KS);Eo.prototype.Ba=function(){rt(this.g,"a")};Eo.prototype.Aa=function(t){rt(this.g,new HS(t))};Eo.prototype.za=function(t){rt(this.g,new QS)};Eo.prototype.ya=function(){rt(this.g,"b")};function bL(){this.blockSize=-1}function hn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ke(hn,bL);hn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function uf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}hn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)uf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){uf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){uf(this,r),i=0;break}}this.h=i,this.i+=e};hn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var NL={};function Qg(t){return-128<=t&&128>t?UO(t,function(e){return new ie([e|0],0>e?-1:0)}):new ie([t|0],0>t?-1:0)}function Tn(t){if(isNaN(t)||!isFinite(t))return js;if(0>t)return Ze(Tn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Dp;return new ie(e,0)}function YS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(YS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Tn(Math.pow(e,8)),r=js,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Tn(Math.pow(e,s)),r=r.R(s).add(Tn(o))):(r=r.R(n),r=r.add(Tn(o)))}return r}var Dp=4294967296,js=Qg(0),Vp=Qg(1),Zv=Qg(16777216);D=ie.prototype;D.ea=function(){if(Kt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Dp+r)*e,e*=Dp}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Fn(this))return"0";if(Kt(this))return"-"+Ze(this).toString(t);for(var e=Tn(Math.pow(t,6)),n=this,r="";;){var i=qc(n,e).g;n=zc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Fn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Fn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Kt(t){return t.h==-1}D.X=function(t){return t=zc(this,t),Kt(t)?-1:Fn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ie(n,~t.h).add(Vp)}D.abs=function(){return Kt(this)?Ze(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ie(n,n[n.length-1]&-2147483648?-1:0)};function zc(t,e){return t.add(Ze(e))}D.R=function(t){if(Fn(this)||Fn(t))return js;if(Kt(this))return Kt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Kt(t))return Ze(this.R(Ze(t)));if(0>this.X(Zv)&&0>t.X(Zv))return Tn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ru(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ru(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ru(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ru(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ie(n,0)};function Ru(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Wo(t,e){this.g=t,this.h=e}function qc(t,e){if(Fn(e))throw Error("division by zero");if(Fn(t))return new Wo(js,js);if(Kt(t))return e=qc(Ze(t),e),new Wo(Ze(e.g),Ze(e.h));if(Kt(e))return e=qc(t,Ze(e)),new Wo(Ze(e.g),e.h);if(30<t.g.length){if(Kt(t)||Kt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Vp,r=e;0>=r.X(t);)n=ew(n),r=ew(r);var i=ss(n,1),s=ss(r,1);for(r=ss(r,2),n=ss(n,2);!Fn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ss(r,1),n=ss(n,1)}return e=zc(t,i.R(e)),new Wo(i,e)}for(i=js;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Tn(n),o=s.R(e);Kt(o)||0<o.X(t);)n-=r,s=Tn(n),o=s.R(e);Fn(s)&&(s=Vp),i=i.add(s),t=zc(t,o)}return new Wo(i,t)}D.gb=function(t){return qc(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ie(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ie(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ie(n,this.h^t.h)};function ew(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ie(n,t.h)}function ss(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ie(i,t.h)}Bc.prototype.createWebChannel=Bc.prototype.g;$t.prototype.send=$t.prototype.u;$t.prototype.open=$t.prototype.m;$t.prototype.close=$t.prototype.close;$h.NO_ERROR=0;$h.TIMEOUT=8;$h.HTTP_ERROR=6;pS.COMPLETE="complete";mS.EventType=jl;jl.OPEN="a";jl.CLOSE="b";jl.ERROR="c";jl.MESSAGE="d";Ge.prototype.listen=Ge.prototype.O;Ae.prototype.listenOnce=Ae.prototype.P;Ae.prototype.getLastError=Ae.prototype.Sa;Ae.prototype.getLastErrorCode=Ae.prototype.Ia;Ae.prototype.getStatus=Ae.prototype.da;Ae.prototype.getResponseJson=Ae.prototype.Wa;Ae.prototype.getResponseText=Ae.prototype.ja;Ae.prototype.send=Ae.prototype.ha;Ae.prototype.setWithCredentials=Ae.prototype.Oa;hn.prototype.digest=hn.prototype.l;hn.prototype.reset=hn.prototype.reset;hn.prototype.update=hn.prototype.j;ie.prototype.add=ie.prototype.add;ie.prototype.multiply=ie.prototype.R;ie.prototype.modulo=ie.prototype.gb;ie.prototype.compare=ie.prototype.X;ie.prototype.toNumber=ie.prototype.ea;ie.prototype.toString=ie.prototype.toString;ie.prototype.getBits=ie.prototype.D;ie.fromNumber=Tn;ie.fromString=YS;var DL=function(){return new Bc},VL=function(){return Uh()},cf=$h,OL=pS,LL=Ji,tw={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ML=$l,Pu=mS,jL=Ae,FL=hn,Fs=ie;const nw="@firebase/firestore";/**
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
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
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
 */let To="10.5.2";/**
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
 */const Or=new Eh("@firebase/firestore");function cs(){return Or.logLevel}function UL(t){Or.setLogLevel(t)}function A(t,...e){if(Or.logLevel<=H.DEBUG){const n=e.map(Yg);Or.debug(`Firestore (${To}): ${t}`,...n)}}function be(t,...e){if(Or.logLevel<=H.ERROR){const n=e.map(Yg);Or.error(`Firestore (${To}): ${t}`,...n)}}function dn(t,...e){if(Or.logLevel<=H.WARN){const n=e.map(Yg);Or.warn(`Firestore (${To}): ${t}`,...n)}}function Yg(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function V(t="Unexpected state"){const e=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: `+t;throw be(e),new Error(e)}function U(t,e){t||V()}function $L(t,e){t||V()}function N(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class We{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class JS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class zL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qL{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new We;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new We,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new We)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string"),new JS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return U(e===null||typeof e=="string"),new ze(e)}}class WL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class GL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new WL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(U(typeof n.token=="string"),this.R=n.token,new KL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function QL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class XS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=QL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function z(t,e){return t<e?-1:t>e?1:0}function Xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function ZS(t){return t+"\0"}/**
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
 */class ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new S(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new S(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new S(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new ge(0,0))}static max(){return new F(new ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ul{constructor(e,n,r){n===void 0?n=0:n>e.length&&V(),r===void 0?r=e.length-n:r>e.length-n&&V(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ul.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ul?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Z extends ul{construct(e,n,r){return new Z(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new S(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Z(n)}static emptyPath(){return new Z([])}}const YL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends ul{construct(e,n,r){return new pe(e,n,r)}static isValidIdentifier(e){return YL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new S(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new S(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new S(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new S(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(n)}static emptyPath(){return new pe([])}}/**
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
 */class C{constructor(e){this.path=e}static fromPath(e){return new C(Z.fromString(e))}static fromName(e){return new C(Z.fromString(e).popFirst(5))}static empty(){return new C(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Z.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new C(new Z(e.slice()))}}/**
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
 */class Wc{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Op(t){return t.fields.find(e=>e.kind===2)}function li(t){return t.fields.filter(e=>e.kind!==2)}Wc.UNKNOWN_ID=-1;class Qu{constructor(e,n){this.fieldPath=e,this.kind=n}}class cl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new cl(0,Bt.min())}}function eA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new Bt(i,C.empty(),e)}function tA(t){return new Bt(t.readTime,t.key,-1)}class Bt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Bt(F.min(),C.empty(),-1)}static max(){return new Bt(F.max(),C.empty(),-1)}}function Jg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=C.comparator(t.documentKey,e.documentKey),n!==0?n:z(t.largestBatchId,e.largestBatchId))}/**
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
 */const nA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xr(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==nA)throw t;A("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&V(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new w((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof w?n:w.resolve(n)}catch(n){return w.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):w.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):w.reject(n)}static resolve(e){return new w((n,r)=>{n(e)})}static reject(e){return new w((n,r)=>{r(e)})}static waitFor(e){return new w((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=w.resolve(!1);for(const r of e)n=n.next(i=>i?w.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new w((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new w((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Qh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new We,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Ea(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Xg(r.target.error);this.V.reject(new Ea(e,i))}}static open(e,n,r,i){try{return new Qh(n,e.transaction(i,r))}catch(s){throw new Ea(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(A("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new XL(n)}}class on{constructor(e,n,r){this.name=e,this.version=n,this.p=r,on.S(Ie())===12.2&&be("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return A("SimpleDb","Removing database:",e),ui(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Ga())return!1;if(on.C())return!0;const e=Ie(),n=on.S(e),r=0<n&&n<10,i=on.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Ea(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new S(I.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new S(I.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ea(e,o))},i.onupgradeneeded=s=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Qh.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),w.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class JL{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return ui(this.k.delete())}}class Ea extends S{constructor(e,n){super(I.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Zr(t){return t.name==="IndexedDbTransactionError"}class XL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(A("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ui(r)}add(e){return A("SimpleDb","ADD",this.store.name,e,e),ui(this.store.add(e))}get(e){return ui(this.store.get(e)).next(n=>(n===void 0&&(n=null),A("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return A("SimpleDb","DELETE",this.store.name,e),ui(this.store.delete(e))}count(){return A("SimpleDb","COUNT",this.store.name),ui(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.G(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new w((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new w((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){A("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new w((r,i)=>{n.onerror=s=>{const o=Xg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new w((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new JL(a),u=n(a.primaryKey,a.value,l);if(u instanceof w){const h=u.catch(d=>(l.done(),w.reject(d)));r.push(h)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>w.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ui(t){return new w((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Xg(r.target.error);n(i)}})}let rw=!1;function Xg(t){const e=on.S(Ie());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new S("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return rw||(rw=!0,setTimeout(()=>{throw r},0)),r}}return t}class ZL{constructor(e,n){this.asyncQueue=e,this.X=n,this.task=null}start(){this.ee(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ee(e){A("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{A("IndexBackiller",`Documents written: ${await this.X.te()}`)}catch(n){Zr(n)?A("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Xr(n)}await this.ee(6e4)})}}class eM{constructor(e,n){this.localStore=e,this.persistence=n}async te(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.ne(n,e))}ne(e,n){const r=new Set;let i=n,s=!0;return w.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return A("IndexBackiller",`Processing collection: ${o}`),this.re(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}re(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ie(i,s)).next(a=>(A("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ie(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=tA(s);Jg(o,r)>0&&(r=o)}),new Bt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class kt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}kt._e=-1;function ql(t){return t==null}function hl(t){return t===0&&1/t==-1/0}function iA(t){return typeof t=="number"&&Number.isInteger(t)&&!hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function vt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=iw(e)),e=tM(t.get(n),e);return iw(e)}function tM(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function iw(t){return t+""}function Sn(t){const e=t.length;if(U(e>=2),e===2)return U(t.charAt(0)===""&&t.charAt(1)===""),Z.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&V(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:V()}s=o+2}return new Z(r)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const sw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Yu(t,e){return[t,vt(e)]}function sA(t,e,n){return[t,vt(e),n]}const nM={},rM=["prefixPath","collectionGroup","readTime","documentId"],iM=["prefixPath","collectionGroup","documentId"],sM=["collectionGroup","readTime","prefixPath","documentId"],oM=["canonicalId","targetId"],aM=["targetId","path"],lM=["path","targetId"],uM=["collectionId","parent"],cM=["indexId","uid"],hM=["uid","sequenceNumber"],dM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],fM=["indexId","uid","orderedDocumentKey"],pM=["userId","collectionPath","documentId"],mM=["userId","collectionPath","largestBatchId"],gM=["userId","collectionGroup","largestBatchId"],oA=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_M=[...oA,"documentOverlays"],aA=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],lA=aA,yM=[...lA,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Lp extends rA{constructor(e,n){super(),this.ae=e,this.currentSequenceNumber=n}}function He(t,e){const n=N(t);return on.M(n.ae,e)}/**
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
 */function ow(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class le{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new le(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}}class xu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw V();const e=this.left.check();if(e!==this.right.check())throw V();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw V()}get value(){throw V()}get color(){throw V()}get left(){throw V()}get right(){throw V()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class se{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new aw(this.data.getIterator())}getIteratorFrom(e){return new aw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof se)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new se(this.comparator);return n.data=e,n}}class aw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function os(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class Ct{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new se(pe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class cA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function vM(){return typeof atob<"u"}/**
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
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cA("Invalid base64 string: "+s):s}}(e);return new Fe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const wM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(U(!!t),typeof t=="string"){let e=0;const n=wM.exec(t);if(U(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mr(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
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
 */function Yh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Zg(t){const e=t.mapValue.fields.__previous_value__;return Yh(e)?Zg(e):e}function dl(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new ge(e.seconds,e.nanos)}/**
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
 */class IM{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class jr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new jr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof jr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ju={nullValue:"NULL_VALUE"};function Mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yh(t)?4:hA(t)?9007199254740991:10:V()}function Nn(t,e){if(t===e)return!0;const n=Mi(t);if(n!==Mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return dl(t).isEqual(dl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Lr(i.timestampValue),a=Lr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Mr(i.bytesValue).isEqual(Mr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Te(i.geoPointValue.latitude)===Te(s.geoPointValue.latitude)&&Te(i.geoPointValue.longitude)===Te(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Te(i.integerValue)===Te(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Te(i.doubleValue),a=Te(s.doubleValue);return o===a?hl(o)===hl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Xs(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ow(o)!==ow(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Nn(o[l],a[l])))return!1;return!0}(t,e);default:return V()}}function fl(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function Fr(t,e){if(t===e)return 0;const n=Mi(t),r=Mi(e);if(n!==r)return z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Te(s.integerValue||s.doubleValue),l=Te(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return lw(t.timestampValue,e.timestampValue);case 4:return lw(dl(t),dl(e));case 5:return z(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Mr(s),l=Mr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=z(a[u],l[u]);if(h!==0)return h}return z(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=z(Te(s.latitude),Te(o.latitude));return a!==0?a:z(Te(s.longitude),Te(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const h=Fr(a[u],l[u]);if(h)return h}return z(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===yr.mapValue&&o===yr.mapValue)return 0;if(s===yr.mapValue)return 1;if(o===yr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const f=z(l[d],h[d]);if(f!==0)return f;const p=Fr(a[l[d]],u[h[d]]);if(p!==0)return p}return z(l.length,h.length)}(t.mapValue,e.mapValue);default:throw V()}}function lw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return z(t,e);const n=Lr(t),r=Lr(e),i=z(n.seconds,r.seconds);return i!==0?i:z(n.nanos,r.nanos)}function Zs(t){return Mp(t)}function Mp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return C.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Mp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Mp(n.fields[o])}`;return i+"}"}(t.mapValue):V()}function ji(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jp(t){return!!t&&"integerValue"in t}function pl(t){return!!t&&"arrayValue"in t}function uw(t){return!!t&&"nullValue"in t}function cw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xu(t){return!!t&&"mapValue"in t}function Ta(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ta(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ta(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function EM(t){return"nullValue"in t?Ju:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ji(jr.empty(),C.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:V()}function TM(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ji(jr.empty(),C.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?yr:V()}function hw(t,e){const n=Fr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function dw(t,e){const n=Fr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ta(n)}setAll(e){let n=pe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ta(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Xu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Xu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new et(Ta(this.value))}}function dA(t){const e=[];return Xi(t.fields,(n,r)=>{const i=new pe([n]);if(Xu(r)){const s=dA(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ct(e)}/**
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
 */class he{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new he(e,0,F.min(),F.min(),F.min(),et.empty(),0)}static newFoundDocument(e,n,r,i){return new he(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new he(e,2,n,F.min(),F.min(),et.empty(),0)}static newUnknownDocument(e,n){return new he(e,3,n,F.min(),F.min(),et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof he&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new he(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ur{constructor(e,n){this.position=e,this.inclusive=n}}function fw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=C.comparator(C.fromName(o.referenceValue),n.key):r=Fr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function pw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class ml{constructor(e,n="asc"){this.field=e,this.dir=n}}function SM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class fA{}class Y extends fA{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new AM(e,n,r):n==="array-contains"?new xM(e,r):n==="in"?new vA(e,r):n==="not-in"?new kM(e,r):n==="array-contains-any"?new CM(e,r):new Y(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RM(e,r):new PM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fr(n,this.value)):n!==null&&Mi(this.value)===Mi(n)&&this.matchesComparison(Fr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return V()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ne extends fA{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new ne(e,n)}matches(e){return eo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function eo(t){return t.op==="and"}function Fp(t){return t.op==="or"}function e_(t){return pA(t)&&eo(t)}function pA(t){for(const e of t.filters)if(e instanceof ne)return!1;return!0}function Up(t){if(t instanceof Y)return t.field.canonicalString()+t.op.toString()+Zs(t.value);if(e_(t))return t.filters.map(e=>Up(e)).join(",");{const e=t.filters.map(n=>Up(n)).join(",");return`${t.op}(${e})`}}function mA(t,e){return t instanceof Y?function(r,i){return i instanceof Y&&r.op===i.op&&r.field.isEqual(i.field)&&Nn(r.value,i.value)}(t,e):t instanceof ne?function(r,i){return i instanceof ne&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&mA(o,i.filters[a]),!0):!1}(t,e):void V()}function gA(t,e){const n=t.filters.concat(e);return ne.create(n,t.op)}function _A(t){return t instanceof Y?function(n){return`${n.field.canonicalString()} ${n.op} ${Zs(n.value)}`}(t):t instanceof ne?function(n){return n.op.toString()+" {"+n.getFilters().map(_A).join(" ,")+"}"}(t):"Filter"}class AM extends Y{constructor(e,n,r){super(e,n,r),this.key=C.fromName(r.referenceValue)}matches(e){const n=C.comparator(e.key,this.key);return this.matchesComparison(n)}}class RM extends Y{constructor(e,n){super(e,"in",n),this.keys=yA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class PM extends Y{constructor(e,n){super(e,"not-in",n),this.keys=yA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>C.fromName(r.referenceValue))}class xM extends Y{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pl(n)&&fl(n.arrayValue,this.value)}}class vA extends Y{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fl(this.value.arrayValue,n)}}class kM extends Y{constructor(e,n){super(e,"not-in",n)}matches(e){if(fl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!fl(this.value.arrayValue,n)}}class CM extends Y{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fl(this.value.arrayValue,r))}}/**
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
 */class bM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function $p(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bM(t,e,n,r,i,s,o)}function Fi(t){const e=N(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Up(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zs(r)).join(",")),e.ce=n}return e.ce}function Wl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!SM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pw(t.startAt,e.startAt)&&pw(t.endAt,e.endAt)}function Gc(t){return C.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Kc(t,e){return t.filters.filter(n=>n instanceof Y&&n.field.isEqual(e))}function mw(t,e,n){let r=Ju,i=!0;for(const s of Kc(t,e)){let o=Ju,a=!0;switch(s.op){case"<":case"<=":o=EM(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Ju}hw({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];hw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function gw(t,e,n){let r=yr,i=!0;for(const s of Kc(t,e)){let o=yr,a=!0;switch(s.op){case">=":case">":o=TM(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=yr}dw({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];dw({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class er{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function wA(t,e,n,r,i,s,o,a){return new er(t,e,n,r,i,s,o,a)}function So(t){return new er(t)}function _w(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function t_(t){return t.collectionGroup!==null}function Us(t){const e=N(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new se(pe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new ml(s,r))}),n.has(pe.keyField().canonicalString())||e.le.push(new ml(pe.keyField(),r))}return e.le}function wt(t){const e=N(t);return e.he||(e.he=NM(e,Us(t))),e.he}function NM(t,e){if(t.limitType==="F")return $p(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ml(i.field,s)});const n=t.endAt?new Ur(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ur(t.startAt.position,t.startAt.inclusive):null;return $p(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bp(t,e){const n=t.filters.concat([e]);return new er(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hc(t,e,n){return new er(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gl(t,e){return Wl(wt(t),wt(e))&&t.limitType===e.limitType}function IA(t){return`${Fi(wt(t))}|lt:${t.limitType}`}function hs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>_A(i)).join(", ")}]`),ql(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Zs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Zs(i)).join(",")),`Target(${r})`}(wt(t))}; limitType=${t.limitType})`}function Kl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):C.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Us(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=fw(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Us(r),i)||r.endAt&&!function(o,a,l){const u=fw(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Us(r),i))}(t,e)}function EA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function TA(t){return(e,n)=>{let r=!1;for(const i of Us(t)){const s=DM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function DM(t,e,n){const r=t.field.isKeyField()?C.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Fr(l,u):V()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return V()}}/**
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
 */class ei{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return uA(this.inner)}size(){return this.innerSize}}/**
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
 */const VM=new le(C.comparator);function bt(){return VM}const SA=new le(C.comparator);function oa(...t){let e=SA;for(const n of t)e=e.insert(n.key,n);return e}function AA(t){let e=SA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function An(){return Sa()}function RA(){return Sa()}function Sa(){return new ei(t=>t.toString(),(t,e)=>t.isEqual(e))}const OM=new le(C.comparator),LM=new se(C.comparator);function q(...t){let e=LM;for(const n of t)e=e.add(n);return e}const MM=new se(z);function n_(){return MM}/**
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
 */function PA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hl(e)?"-0":e}}function xA(t){return{integerValue:""+t}}function kA(t,e){return iA(e)?xA(e):PA(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Jh{constructor(){this._=void 0}}function jM(t,e,n){return t instanceof to?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Yh(s)&&(s=Zg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ui?bA(t,e):t instanceof $i?NA(t,e):function(i,s){const o=CA(i,s),a=yw(o)+yw(i.Ie);return jp(o)&&jp(i.Ie)?xA(a):PA(i.serializer,a)}(t,e)}function FM(t,e,n){return t instanceof Ui?bA(t,e):t instanceof $i?NA(t,e):n}function CA(t,e){return t instanceof no?function(r){return jp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class to extends Jh{}class Ui extends Jh{constructor(e){super(),this.elements=e}}function bA(t,e){const n=DA(e);for(const r of t.elements)n.some(i=>Nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class $i extends Jh{constructor(e){super(),this.elements=e}}function NA(t,e){let n=DA(e);for(const r of t.elements)n=n.filter(i=>!Nn(i,r));return{arrayValue:{values:n}}}class no extends Jh{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function yw(t){return Te(t.integerValue||t.doubleValue)}function DA(t){return pl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Hl{constructor(e,n){this.field=e,this.transform=n}}function UM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ui&&i instanceof Ui||r instanceof $i&&i instanceof $i?Xs(r.elements,i.elements,Nn):r instanceof no&&i instanceof no?Nn(r.Ie,i.Ie):r instanceof to&&i instanceof to}(t.transform,e.transform)}class $M{constructor(e,n){this.version=e,this.transformResults=n}}class me{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new me}static exists(e){return new me(void 0,e)}static updateTime(e){return new me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xh{}function VA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ro(t.key,me.none()):new Ao(t.key,t.data,me.none());{const n=t.data,r=et.empty();let i=new se(pe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new tr(t.key,r,new Ct(i.toArray()),me.none())}}function BM(t,e,n){t instanceof Ao?function(i,s,o){const a=i.value.clone(),l=ww(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof tr?function(i,s,o){if(!Zu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ww(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(OA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Aa(t,e,n,r){return t instanceof Ao?function(s,o,a,l){if(!Zu(s.precondition,o))return a;const u=s.value.clone(),h=Iw(s.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof tr?function(s,o,a,l){if(!Zu(s.precondition,o))return a;const u=Iw(s.fieldTransforms,l,o),h=o.data;return h.setAll(OA(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Zu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=CA(r.transform,i||null);s!=null&&(n===null&&(n=et.empty()),n.set(r.field,s))}return n||null}function vw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xs(r,i,(s,o)=>UM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ao extends Xh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class tr extends Xh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function OA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ww(t,e,n){const r=new Map;U(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,FM(o,a,n[i]))}return r}function Iw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jM(s,o,e))}return r}class Ro extends Xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class r_ extends Xh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class i_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&BM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Aa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Aa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=RA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=VA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&Xs(this.mutations,e.mutations,(n,r)=>vw(n,r))&&Xs(this.baseMutations,e.baseMutations,(n,r)=>vw(n,r))}}class s_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){U(e.mutations.length===r.length);let i=function(){return OM}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new s_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class o_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class qM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,X;function LA(t){switch(t){default:return V();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function MA(t){if(t===void 0)return be("GRPC error has no .code"),I.UNKNOWN;switch(t){case De.OK:return I.OK;case De.CANCELLED:return I.CANCELLED;case De.UNKNOWN:return I.UNKNOWN;case De.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case De.INTERNAL:return I.INTERNAL;case De.UNAVAILABLE:return I.UNAVAILABLE;case De.UNAUTHENTICATED:return I.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case De.NOT_FOUND:return I.NOT_FOUND;case De.ALREADY_EXISTS:return I.ALREADY_EXISTS;case De.PERMISSION_DENIED:return I.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case De.ABORTED:return I.ABORTED;case De.OUT_OF_RANGE:return I.OUT_OF_RANGE;case De.UNIMPLEMENTED:return I.UNIMPLEMENTED;case De.DATA_LOSS:return I.DATA_LOSS;default:return V()}}(X=De||(De={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function jA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const WM=new Fs([4294967295,4294967295],0);function Ew(t){const e=jA().encode(t),n=new FL;return n.update(e),new Uint8Array(n.digest())}function Tw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fs([n,r],0),new Fs([i,s],0)]}class a_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new aa(`Invalid padding: ${n}`);if(r<0)throw new aa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new aa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new aa(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Fs.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Fs.fromNumber(r)));return i.compare(WM)===1&&(i=new Fs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Ew(e),[r,i]=Tw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new a_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Ew(e),[r,i]=Tw(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ql{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Yl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ql(F.min(),i,new le(z),bt(),q())}}class Yl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Yl(r,n,q(),q(),q())}}/**
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
 */class ec{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class FA{constructor(e,n){this.targetId=e,this.fe=n}}class UA{constructor(e,n,r=Fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Sw{constructor(){this.ge=0,this.pe=Rw(),this.ye=Fe.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=q(),n=q(),r=q();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:V()}}),new Yl(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Rw()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class GM{constructor(e){this.Le=e,this.ke=new Map,this.qe=bt(),this.Qe=Aw(),this.Ke=new le(z)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:V()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Gc(s))if(r===0){const o=new C(s.path);this.We(n,o,he.newNoDocument(o,F.min()))}else U(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Mr(r).toUint8Array()}catch(l){if(l instanceof cA)return dn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new a_(o,i,s)}catch(l){return dn(l instanceof aa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Gc(a.target)){const l=new C(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,he.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=q();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Ql(e,n,this.Ke,this.qe,r);return this.qe=bt(),this.Qe=Aw(),this.Ke=new le(z),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Sw,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new se(z),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||A("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Sw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Aw(){return new le(C.comparator)}function Rw(){return new le(C.comparator)}const KM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),HM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),QM=(()=>({and:"AND",or:"OR"}))();class YM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zp(t,e){return t.useProto3Json||ql(e)?e:{value:e}}function ro(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $A(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JM(t,e){return ro(t,e.toTimestamp())}function Ne(t){return U(!!t),F.fromTimestamp(function(n){const r=Lr(n);return new ge(r.seconds,r.nanos)}(t))}function l_(t,e){return function(r){return new Z(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function BA(t){const e=Z.fromString(t);return U(JA(e)),e}function gl(t,e){return l_(t.databaseId,e.path)}function kn(t,e){const n=BA(e);if(n.get(1)!==t.databaseId.projectId)throw new S(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new S(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new C(qA(n))}function qp(t,e){return l_(t.databaseId,e)}function zA(t){const e=BA(t);return e.length===4?Z.emptyPath():qA(e)}function _l(t){return new Z(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qA(t){return U(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Pw(t,e,n){return{name:gl(t,e),fields:n.value.mapValue.fields}}function WA(t,e,n){const r=kn(t,e.name),i=Ne(e.updateTime),s=e.createTime?Ne(e.createTime):F.min(),o=new et({mapValue:{fields:e.fields}}),a=he.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function XM(t,e){return"found"in e?function(r,i){U(!!i.found),i.found.name,i.found.updateTime;const s=kn(r,i.found.name),o=Ne(i.found.updateTime),a=i.found.createTime?Ne(i.found.createTime):F.min(),l=new et({mapValue:{fields:i.found.fields}});return he.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){U(!!i.missing),U(!!i.readTime);const s=kn(r,i.missing),o=Ne(i.readTime);return he.newNoDocument(s,o)}(t,e):V()}function ZM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:V()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(U(h===void 0||typeof h=="string"),Fe.fromBase64String(h||"")):(U(h===void 0||h instanceof Uint8Array),Fe.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?I.UNKNOWN:MA(u.code);return new S(h,u.message||"")}(o);n=new UA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kn(t,r.document.name),s=Ne(r.document.updateTime),o=r.document.createTime?Ne(r.document.createTime):F.min(),a=new et({mapValue:{fields:r.document.fields}}),l=he.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new ec(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kn(t,r.document),s=r.readTime?Ne(r.readTime):F.min(),o=he.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ec([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kn(t,r.document),s=r.removedTargetIds||[];n=new ec([],s,i,null)}else{if(!("filter"in e))return V();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new qM(i,s),a=r.targetId;n=new FA(a,o)}}return n}function yl(t,e){let n;if(e instanceof Ao)n={update:Pw(t,e.key,e.value)};else if(e instanceof Ro)n={delete:gl(t,e.key)};else if(e instanceof tr)n={update:Pw(t,e.key,e.data),updateMask:s2(e.fieldMask)};else{if(!(e instanceof r_))return V();n={verify:gl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof to)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ui)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof $i)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof no)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw V()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:JM(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:V()}(t,e.precondition)),n}function Wp(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?me.updateTime(Ne(s.updateTime)):s.exists!==void 0?me.exists(s.exists):me.none()}(e.currentDocument):me.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)U(a.setToServerValue==="REQUEST_TIME"),l=new to;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new Ui(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new $i(h)}else"increment"in a?l=new no(o,a.increment):V();const u=pe.fromServerFormat(a.fieldPath);return new Hl(u,l)}(t,i)):[];if(e.update){e.update.name;const i=kn(t,e.update.name),s=new et({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Ct(u.map(h=>pe.fromServerFormat(h)))}(e.updateMask);return new tr(i,s,o,n,r)}return new Ao(i,s,n,r)}if(e.delete){const i=kn(t,e.delete);return new Ro(i,n)}if(e.verify){const i=kn(t,e.verify);return new r_(i,n)}return V()}function e2(t,e){return t&&t.length>0?(U(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ne(i.updateTime):Ne(s);return o.isEqual(F.min())&&(o=Ne(s)),new $M(o,i.transformResults||[])}(n,e))):[]}function GA(t,e){return{documents:[qp(t,e.path)]}}function KA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=qp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=qp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return YA(ne.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:ds(d.field),direction:n2(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=zp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function HA(t){let e=zA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){U(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(d){const f=QA(d);return f instanceof ne&&e_(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(f=>function(y){return new ml(fs(y.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,ql(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(d){const f=!!d.before,p=d.values||[];return new Ur(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const f=!d.before,p=d.values||[];return new Ur(p,f)}(n.endAt)),wA(e,i,o,s,a,"F",l,u)}function t2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return V()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function QA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fs(n.unaryFilter.field);return Y.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fs(n.unaryFilter.field);return Y.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fs(n.unaryFilter.field);return Y.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fs(n.unaryFilter.field);return Y.create(o,"!=",{nullValue:"NULL_VALUE"});default:return V()}}(t):t.fieldFilter!==void 0?function(n){return Y.create(fs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return V()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ne.create(n.compositeFilter.filters.map(r=>QA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return V()}}(n.compositeFilter.op))}(t):V()}function n2(t){return KM[t]}function r2(t){return HM[t]}function i2(t){return QM[t]}function ds(t){return{fieldPath:t.canonicalString()}}function fs(t){return pe.fromServerFormat(t.fieldPath)}function YA(t){return t instanceof Y?function(n){if(n.op==="=="){if(cw(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NAN"}};if(uw(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cw(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NAN"}};if(uw(n.value))return{unaryFilter:{field:ds(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ds(n.field),op:r2(n.op),value:n.value}}}(t):t instanceof ne?function(n){const r=n.getFilters().map(i=>YA(i));return r.length===1?r[0]:{compositeFilter:{op:i2(n.op),filters:r}}}(t):V()}function s2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function JA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Un{constructor(e,n,r,i,s=F.min(),o=F.min(),a=Fe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class XA{constructor(e){this.ut=e}}function o2(t,e){let n;if(e.document)n=WA(t.ut,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=C.fromSegments(e.noDocument.path),i=zi(e.noDocument.readTime);n=he.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return V();{const r=C.fromSegments(e.unknownDocument.path),i=zi(e.unknownDocument.version);n=he.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ge(i[0],i[1]);return F.fromTimestamp(s)}(e.readTime)),n}function xw(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Qc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:gl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:ro(s,o.version.toTimestamp()),createTime:ro(s,o.createTime.toTimestamp())}}(t.ut,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Bi(e.version)};else{if(!e.isUnknownDocument())return V();r.unknownDocument={path:n.path.toArray(),version:Bi(e.version)}}return r}function Qc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Bi(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function zi(t){const e=new ge(t.seconds,t.nanoseconds);return F.fromTimestamp(e)}function ci(t,e){const n=(e.baseMutations||[]).map(s=>Wp(t.ut,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Wp(t.ut,s)),i=ge.fromMillis(e.localWriteTimeMs);return new i_(e.batchId,i,n,r)}function la(t){const e=zi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?zi(t.lastLimboFreeSnapshotVersion):F.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return U(s.documents.length===1),wt(So(zA(s.documents[0])))}(t.query):function(s){return wt(HA(s))}(t.query),new Un(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Fe.fromBase64String(t.resumeToken))}function ZA(t,e){const n=Bi(e.snapshotVersion),r=Bi(e.lastLimboFreeSnapshotVersion);let i;i=Gc(e.target)?GA(t.ut,e.target):KA(t.ut,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Fi(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function u_(t){const e=HA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hc(e,e.limit,"L"):e}function hf(t,e){return new o_(e.largestBatchId,Wp(t.ut,e.overlayMutation))}function kw(t,e){const n=e.path.lastSegment();return[t,vt(e.path.popLast()),n]}function Cw(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Bi(r.readTime),documentKey:vt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class a2{getBundleMetadata(e,n){return bw(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:zi(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return bw(e).put(function(i){return{bundleId:i.id,createTime:Bi(Ne(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return Nw(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:u_(s.bundledQuery),readTime:zi(s.readTime)}}(r)})}saveNamedQuery(e,n){return Nw(e).put(function(i){return{name:i.name,readTime:Bi(Ne(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function bw(t){return He(t,"bundles")}function Nw(t){return He(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Zh{constructor(e,n){this.serializer=e,this.userId=n}static ct(e,n){const r=n.uid||"";return new Zh(e,r)}getOverlay(e,n){return Go(e).get(kw(this.userId,n)).next(r=>r?hf(this.serializer,r):null)}getOverlays(e,n){const r=An();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new o_(n,o);i.push(this.lt(e,a))}),w.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(vt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Go(e).H("collectionPathOverlayIndex",a))}),w.waitFor(s)}getOverlaysForCollection(e,n,r){const i=An(),s=vt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Go(e).W("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=hf(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=An();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Go(e).Y({index:"collectionGroupOverlayIndex",range:a},(l,u,h)=>{const d=hf(this.serializer,u);s.size()<i||d.largestBatchId===o?(s.set(d.getKey(),d),o=d.largestBatchId):h.done()}).next(()=>s)}lt(e,n){return Go(e).put(function(i,s,o){const[a,l,u]=kw(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:yl(i.ut,o.mutation)}}(this.serializer,this.userId,n))}}function Go(t){return He(t,"documentOverlays")}/**
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
 */class hi{constructor(){}ht(e,n){this.Pt(e,n),n.It()}Pt(e,n){if("nullValue"in e)this.Tt(n,5);else if("booleanValue"in e)this.Tt(n,10),n.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(n,15),n.Et(Te(e.integerValue));else if("doubleValue"in e){const r=Te(e.doubleValue);isNaN(r)?this.Tt(n,13):(this.Tt(n,15),hl(r)?n.Et(0):n.Et(r))}else if("timestampValue"in e){const r=e.timestampValue;this.Tt(n,20),typeof r=="string"?n.dt(r):(n.dt(`${r.seconds||""}`),n.Et(r.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,n),this.Rt(n);else if("bytesValue"in e)this.Tt(n,30),n.Vt(Mr(e.bytesValue)),this.Rt(n);else if("referenceValue"in e)this.ft(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Tt(n,45),n.Et(r.latitude||0),n.Et(r.longitude||0)}else"mapValue"in e?hA(e)?this.Tt(n,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,n),this.Rt(n)):"arrayValue"in e?(this.yt(e.arrayValue,n),this.Rt(n)):V()}At(e,n){this.Tt(n,25),this.wt(e,n)}wt(e,n){n.dt(e)}gt(e,n){const r=e.fields||{};this.Tt(n,55);for(const i of Object.keys(r))this.At(i,n),this.Pt(r[i],n)}yt(e,n){const r=e.values||[];this.Tt(n,50);for(const i of r)this.Pt(i,n)}ft(e,n){this.Tt(n,37),C.fromName(e).path.forEach(r=>{this.Tt(n,60),this.wt(r,n)})}Tt(e,n){e.Et(n)}Rt(e){e.Et(2)}}hi.St=new hi;function l2(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Dw(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=l2(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class u2{constructor(){this.buffer=new Uint8Array(1024),this.position=0}bt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Dt(r.value),r=n.next();this.Ct()}vt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Dt(r);else if(r<2048)this.Dt(960|r>>>6),this.Dt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Dt(480|r>>>12),this.Dt(128|63&r>>>6),this.Dt(128|63&r);else{const i=n.codePointAt(0);this.Dt(240|i>>>18),this.Dt(128|63&i>>>12),this.Dt(128|63&i>>>6),this.Dt(128|63&i)}}this.Ct()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Nt(e){const n=this.Bt(e),r=Dw(n);this.Lt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}kt(e){const n=this.Bt(e),r=Dw(n);this.Lt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}qt(){this.Qt(255),this.Qt(255)}Kt(){this.$t(255),this.$t(255)}reset(){this.position=0}seed(e){this.Lt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ut(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Dt(e){const n=255&e;n===0?(this.Qt(0),this.Qt(255)):n===255?(this.Qt(255),this.Qt(0)):this.Qt(n)}Ft(e){const n=255&e;n===0?(this.$t(0),this.$t(255)):n===255?(this.$t(255),this.$t(0)):this.$t(e)}Ct(){this.Qt(0),this.Qt(1)}Mt(){this.$t(0),this.$t(1)}Qt(e){this.Lt(1),this.buffer[this.position++]=e}$t(e){this.Lt(1),this.buffer[this.position++]=~e}Lt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class c2{constructor(e){this.Wt=e}Vt(e){this.Wt.bt(e)}dt(e){this.Wt.xt(e)}Et(e){this.Wt.Nt(e)}It(){this.Wt.qt()}}class h2{constructor(e){this.Wt=e}Vt(e){this.Wt.vt(e)}dt(e){this.Wt.Ot(e)}Et(e){this.Wt.kt(e)}It(){this.Wt.Kt()}}class Ko{constructor(){this.Wt=new u2,this.Gt=new c2(this.Wt),this.zt=new h2(this.Wt)}seed(e){this.Wt.seed(e)}jt(e){return e===0?this.Gt:this.zt}Ut(){return this.Wt.Ut()}reset(){this.Wt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class di{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Ht(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new di(this.indexId,this.documentKey,this.arrayValue,r)}}function sr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Vw(t.arrayValue,e.arrayValue),n!==0?n:(n=Vw(t.directionalValue,e.directionalValue),n!==0?n:C.comparator(t.documentKey,e.documentKey)))}function Vw(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ow{constructor(e){this.Jt=new se((n,r)=>pe.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Yt=e.orderBy,this.Zt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Jt=this.Jt.add(r):this.Zt.push(r)}}get Xt(){return this.Jt.size>1}en(e){if(U(e.collectionGroup===this.collectionId),this.Xt)return!1;const n=Op(e);if(n!==void 0&&!this.tn(n))return!1;const r=li(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.tn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Jt.size>0){const a=this.Jt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.nn(a,l)||!this.rn(this.Yt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Yt.length||!this.rn(this.Yt[o++],a))return!1}return!0}sn(){if(this.Xt)return null;let e=new se(pe.comparator);const n=[];for(const r of this.Zt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Qu(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Qu(r.field,0))}for(const r of this.Yt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Qu(r.field,r.dir==="asc"?0:1)));return new Wc(Wc.UNKNOWN_ID,this.collectionId,n,cl.empty())}tn(e){for(const n of this.Zt)if(this.nn(n,e))return!0;return!1}nn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}rn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function e1(t){var e,n;if(U(t instanceof Y||t instanceof ne),t instanceof Y){if(t instanceof vA){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>Y.create(t.field,"==",s)))||[];return ne.create(i,"or")}return t}const r=t.filters.map(i=>e1(i));return ne.create(r,t.op)}function d2(t){if(t.getFilters().length===0)return[];const e=Hp(e1(t));return U(t1(e)),Gp(e)||Kp(e)?[e]:e.getFilters()}function Gp(t){return t instanceof Y}function Kp(t){return t instanceof ne&&e_(t)}function t1(t){return Gp(t)||Kp(t)||function(n){if(n instanceof ne&&Fp(n)){for(const r of n.getFilters())if(!Gp(r)&&!Kp(r))return!1;return!0}return!1}(t)}function Hp(t){if(U(t instanceof Y||t instanceof ne),t instanceof Y)return t;if(t.filters.length===1)return Hp(t.filters[0]);const e=t.filters.map(r=>Hp(r));let n=ne.create(e,t.op);return n=Yc(n),t1(n)?n:(U(n instanceof ne),U(eo(n)),U(n.filters.length>1),n.filters.reduce((r,i)=>c_(r,i)))}function c_(t,e){let n;return U(t instanceof Y||t instanceof ne),U(e instanceof Y||e instanceof ne),n=t instanceof Y?e instanceof Y?function(i,s){return ne.create([i,s],"and")}(t,e):Lw(t,e):e instanceof Y?Lw(e,t):function(i,s){if(U(i.filters.length>0&&s.filters.length>0),eo(i)&&eo(s))return gA(i,s.getFilters());const o=Fp(i)?i:s,a=Fp(i)?s:i,l=o.filters.map(u=>c_(u,a));return ne.create(l,"or")}(t,e),Yc(n)}function Lw(t,e){if(eo(e))return gA(e,t.getFilters());{const n=e.filters.map(r=>c_(t,r));return ne.create(n,"or")}}function Yc(t){if(U(t instanceof Y||t instanceof ne),t instanceof Y)return t;const e=t.getFilters();if(e.length===1)return Yc(e[0]);if(pA(t))return t;const n=e.map(i=>Yc(i)),r=[];return n.forEach(i=>{i instanceof Y?r.push(i):i instanceof ne&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ne.create(r,t.op)}/**
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
 */class f2{constructor(){this.on=new h_}addToCollectionParentIndex(e,n){return this.on.add(n),w.resolve()}getCollectionParents(e,n){return w.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return w.resolve()}deleteFieldIndex(e,n){return w.resolve()}deleteAllFieldIndexes(e){return w.resolve()}createTargetIndexes(e,n){return w.resolve()}getDocumentsMatchingTarget(e,n){return w.resolve(null)}getIndexType(e,n){return w.resolve(0)}getFieldIndexes(e,n){return w.resolve([])}getNextCollectionGroupToUpdate(e){return w.resolve(null)}getMinOffset(e,n){return w.resolve(Bt.min())}getMinOffsetFromCollectionGroup(e,n){return w.resolve(Bt.min())}updateCollectionGroup(e,n,r){return w.resolve()}updateIndexEntries(e,n){return w.resolve()}}class h_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new se(Z.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new se(Z.comparator)).toArray()}}/**
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
 */const ku=new Uint8Array(0);class p2{constructor(e,n){this.user=e,this.databaseId=n,this._n=new h_,this.an=new ei(r=>Fi(r),(r,i)=>Wl(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this._n.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this._n.add(n)});const s={collectionId:r,parent:vt(i)};return Mw(e).put(s)}return w.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[ZS(n),""],!1,!0);return Mw(e).W(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Sn(o.parent))}return r})}addFieldIndex(e,n){const r=Ho(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=ls(e);return s.next(a=>{o.put(Cw(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ho(e),i=ls(e),s=as(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Ho(e),r=as(e),i=ls(e);return n.H().next(()=>r.H()).next(()=>i.H())}createTargetIndexes(e,n){return w.forEach(this.un(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new Ow(r).sn();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=as(e);let i=!0;const s=new Map;return w.forEach(this.un(n),o=>this.cn(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=q();const a=[];return w.forEach(s,(l,u)=>{A("IndexedDbIndexManager",`Using index ${function(_){return`id=${_.indexId}|cg=${_.collectionGroup}|f=${_.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`}(l)} to execute ${Fi(n)}`);const h=function(_,E){const R=Op(E);if(R===void 0)return null;for(const k of Kc(_,R.fieldPath))switch(k.op){case"array-contains-any":return k.value.arrayValue.values||[];case"array-contains":return[k.value]}return null}(u,l),d=function(_,E){const R=new Map;for(const k of li(E))for(const b of Kc(_,k.fieldPath))switch(b.op){case"==":case"in":R.set(k.fieldPath.canonicalString(),b.value);break;case"not-in":case"!=":return R.set(k.fieldPath.canonicalString(),b.value),Array.from(R.values())}return null}(u,l),f=function(_,E){const R=[];let k=!0;for(const b of li(E)){const j=b.kind===0?mw(_,b.fieldPath,_.startAt):gw(_,b.fieldPath,_.startAt);R.push(j.value),k&&(k=j.inclusive)}return new Ur(R,k)}(u,l),p=function(_,E){const R=[];let k=!0;for(const b of li(E)){const j=b.kind===0?gw(_,b.fieldPath,_.endAt):mw(_,b.fieldPath,_.endAt);R.push(j.value),k&&(k=j.inclusive)}return new Ur(R,k)}(u,l),y=this.ln(l,u,f),v=this.ln(l,u,p),T=this.hn(l,u,d),g=this.Pn(l.indexId,h,y,f.inclusive,v,p.inclusive,T);return w.forEach(g,m=>r.j(m,n.limit).next(_=>{_.forEach(E=>{const R=C.fromSegments(E.documentKey);o.has(R)||(o=o.add(R),a.push(R))})}))}).next(()=>a)}return w.resolve(null)})}un(e){let n=this.an.get(e);return n||(e.filters.length===0?n=[e]:n=d2(ne.create(e.filters,"and")).map(r=>$p(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.an.set(e,n),n)}Pn(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),h=[];for(let d=0;d<l;++d){const f=n?this.In(n[d/u]):ku,p=this.Tn(e,f,r[d%u],i),y=this.En(e,f,s[d%u],o),v=a.map(T=>this.Tn(e,f,T,!0));h.push(...this.createRange(p,y,v))}return h}Tn(e,n,r,i){const s=new di(e,C.empty(),n,r);return i?s:s.Ht()}En(e,n,r,i){const s=new di(e,C.empty(),n,r);return i?s.Ht():s}cn(e,n){const r=new Ow(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.en(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.un(n);return w.forEach(i,s=>this.cn(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new se(pe.comparator),h=!1;for(const d of l.filters)for(const f of d.getFlattenedFilters())f.field.isKeyField()||(f.op==="array-contains"||f.op==="array-contains-any"?h=!0:u=u.add(f.field));for(const d of l.orderBy)d.field.isKeyField()||(u=u.add(d.field));return u.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}dn(e,n){const r=new Ko;for(const i of li(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.jt(i.kind);hi.St.ht(s,o)}return r.Ut()}In(e){const n=new Ko;return hi.St.ht(e,n.jt(0)),n.Ut()}An(e,n){const r=new Ko;return hi.St.ht(ji(this.databaseId,n),r.jt(function(s){const o=li(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Ut()}hn(e,n,r){if(r===null)return[];let i=[];i.push(new Ko);let s=0;for(const o of li(e)){const a=r[s++];for(const l of i)if(this.Rn(n,o.fieldPath)&&pl(a))i=this.Vn(i,o,a);else{const u=l.jt(o.kind);hi.St.ht(a,u)}}return this.mn(i)}ln(e,n,r){return this.hn(e,n,r.position)}mn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Ut();return n}Vn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Ko;l.seed(a.Ut()),hi.St.ht(o,l.jt(n.kind)),s.push(l)}return s}Rn(e,n){return!!e.filters.find(r=>r instanceof Y&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ho(e),i=ls(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(s=>{const o=[];return w.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(h,d){const f=d?new cl(d.sequenceNumber,new Bt(zi(d.readTime),new C(Sn(d.documentKey)),d.largestBatchId)):cl.empty(),p=h.fields.map(([y,v])=>new Qu(pe.fromServerFormat(y),v));return new Wc(h.indexId,h.collectionGroup,p,f)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:z(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ho(e),s=ls(e);return this.fn(e).next(o=>i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>w.forEach(a,l=>s.put(Cw(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return w.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?w.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),w.forEach(a,l=>this.gn(e,i,l).next(u=>{const h=this.pn(s,l);return u.isEqual(h)?w.resolve():this.yn(e,s,l,u,h)}))))})}wn(e,n,r,i){return as(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.An(r,n.key),documentKey:n.key.path.toArray()})}Sn(e,n,r,i){return as(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.An(r,n.key),n.key.path.toArray()])}gn(e,n,r){const i=as(e);let s=new se(sr);return i.Y({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.An(r,n)])},(o,a)=>{s=s.add(new di(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}pn(e,n){let r=new se(sr);const i=this.dn(n,e);if(i==null)return r;const s=Op(n);if(s!=null){const o=e.data.field(s.fieldPath);if(pl(o))for(const a of o.arrayValue.values||[])r=r.add(new di(n.indexId,e.key,this.In(a),i))}else r=r.add(new di(n.indexId,e.key,ku,i));return r}yn(e,n,r,i,s){A("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,h,d,f){const p=l.getIterator(),y=u.getIterator();let v=os(p),T=os(y);for(;v||T;){let g=!1,m=!1;if(v&&T){const _=h(v,T);_<0?m=!0:_>0&&(g=!0)}else v!=null?m=!0:g=!0;g?(d(T),T=os(y)):m?(f(v),v=os(p)):(v=os(p),T=os(y))}}(i,s,sr,a=>{o.push(this.wn(e,n,r,a))},a=>{o.push(this.Sn(e,n,r,a))}),w.waitFor(o)}fn(e){let n=1;return ls(e).Y({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>sr(o,a)).filter((o,a,l)=>!a||sr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=sr(o,e),l=sr(o,n);if(a===0)i[0]=e.Ht();else if(a>0&&l<0)i.push(o),i.push(o.Ht());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.bn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,ku,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,ku,[]];s.push(IDBKeyRange.bound(a,l))}return s}bn(e,n){return sr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(jw)}getMinOffset(e,n){return w.mapArray(this.un(n),r=>this.cn(e,r).next(i=>i||V())).next(jw)}}function Mw(t){return He(t,"collectionParents")}function as(t){return He(t,"indexEntries")}function Ho(t){return He(t,"indexConfiguration")}function ls(t){return He(t,"indexState")}function jw(t){U(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Jg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Bt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Fw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Rt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Rt(e,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function n1(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Y({range:o},(h,d,f)=>(a++,f.delete()));s.push(l.next(()=>{U(a===1)}));const u=[];for(const h of n.mutations){const d=sA(e,h.key.path,n.batchId);s.push(i.delete(d)),u.push(h.key)}return w.waitFor(s).next(()=>u)}function Jc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw V();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(41943040,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);class ed{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Dn={}}static ct(e,n,r,i){U(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ed(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return or(e).Y({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=ps(e),o=or(e);return o.add({}).next(a=>{U(typeof a=="number");const l=new i_(a,n,r,i),u=function(p,y,v){const T=v.baseMutations.map(m=>yl(p.ut,m)),g=v.mutations.map(m=>yl(p.ut,m));return{userId:y,batchId:v.batchId,localWriteTimeMs:v.localWriteTime.toMillis(),baseMutations:T,mutations:g}}(this.serializer,this.userId,l),h=[];let d=new se((f,p)=>z(f.canonicalString(),p.canonicalString()));for(const f of i){const p=sA(this.userId,f.key.path,a);d=d.add(f.key.path.popLast()),h.push(o.put(u)),h.push(s.put(p,nM))}return d.forEach(f=>{h.push(this.indexManager.addToCollectionParentIndex(e,f))}),e.addOnCommittedListener(()=>{this.Dn[a]=l.keys()}),w.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return or(e).get(n).next(r=>r?(U(r.userId===this.userId),ci(this.serializer,r)):null)}Cn(e,n){return this.Dn[n]?w.resolve(this.Dn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Dn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return or(e).Y({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(U(a.batchId>=r),s=ci(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return or(e).Y({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return or(e).W("userMutationsIndex",n).next(r=>r.map(i=>ci(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Yu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return ps(e).Y({range:i},(o,a,l)=>{const[u,h,d]=o,f=Sn(h);if(u===this.userId&&n.path.isEqual(f))return or(e).get(d).next(p=>{if(!p)throw V();U(p.userId===this.userId),s.push(ci(this.serializer,p))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new se(z);const i=[];return n.forEach(s=>{const o=Yu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=ps(e).Y({range:a},(u,h,d)=>{const[f,p,y]=u,v=Sn(p);f===this.userId&&s.path.isEqual(v)?r=r.add(y):d.done()});i.push(l)}),w.waitFor(i).next(()=>this.vn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Yu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new se(z);return ps(e).Y({range:o},(l,u,h)=>{const[d,f,p]=l,y=Sn(f);d===this.userId&&r.isPrefixOf(y)?y.length===i&&(a=a.add(p)):h.done()}).next(()=>this.vn(e,a))}vn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(or(e).get(s).next(o=>{if(o===null)throw V();U(o.userId===this.userId),r.push(ci(this.serializer,o))}))}),w.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return n1(e.ae,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Fn(n.batchId)}),w.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Fn(e){delete this.Dn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return w.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return ps(e).Y({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Sn(s[1]);i.push(l)}else a.done()}).next(()=>{U(i.length===0)})})}containsKey(e,n){return r1(e,this.userId,n)}Mn(e){return i1(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function r1(t,e,n){const r=Yu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ps(t).Y({range:s,J:!0},(a,l,u)=>{const[h,d,f]=a;h===e&&d===i&&(o=!0),u.done()}).next(()=>o)}function or(t){return He(t,"mutations")}function ps(t){return He(t,"documentMutations")}function i1(t){return He(t,"mutationQueues")}/**
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
 */class qi{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new qi(0)}static Nn(){return new qi(-1)}}/**
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
 */class m2{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new qi(n.highestTargetId);return n.highestTargetId=r.next(),this.Ln(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>F.fromTimestamp(new ge(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Ln(e,i)))}addTargetData(e,n){return this.kn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.qn(n,r),this.Ln(e,r))))}updateTargetData(e,n){return this.kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>us(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(U(r.targetCount>0),r.targetCount-=1,this.Ln(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return us(e).Y((o,a)=>{const l=la(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>w.waitFor(s)).next(()=>i)}forEachTarget(e,n){return us(e).Y((r,i)=>{const s=la(i);n(s)})}Bn(e){return Uw(e).get("targetGlobalKey").next(n=>(U(n!==null),n))}Ln(e,n){return Uw(e).put("targetGlobalKey",n)}kn(e,n){return us(e).put(ZA(this.serializer,n))}qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Fi(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return us(e).Y({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=la(a);Wl(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=dr(e);return n.forEach(o=>{const a=vt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),w.waitFor(i)}removeMatchingKeys(e,n,r){const i=dr(e);return w.forEach(n,s=>{const o=vt(s.path);return w.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=dr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=dr(e);let s=q();return i.Y({range:r,J:!0},(o,a,l)=>{const u=Sn(o[1]),h=new C(u);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=vt(n.path),i=IDBKeyRange.bound([r],[ZS(r)],!1,!0);let s=0;return dr(e).Y({index:"documentTargetsIndex",J:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}_t(e,n){return us(e).get(n).next(r=>r?la(r):null)}}function us(t){return He(t,"targets")}function Uw(t){return He(t,"targetGlobal")}function dr(t){return He(t,"targetDocuments")}/**
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
 */function $w([t,e],[n,r]){const i=z(t,n);return i===0?z(e,r):i}class g2{constructor(e){this.Qn=e,this.buffer=new se($w),this.Kn=0}$n(){return++this.Kn}Un(e){const n=[e,this.$n()];if(this.buffer.size<this.Qn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();$w(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class _2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Wn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Gn(6e4)}stop(){this.Wn&&(this.Wn.cancel(),this.Wn=null)}get started(){return this.Wn!==null}Gn(e){A("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Wn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Wn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Zr(n)?A("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Xr(n)}await this.Gn(3e5)})}}class y2{constructor(e,n){this.zn=e,this.params=n}calculateTargetCount(e,n){return this.zn.jn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return w.resolve(kt._e);const r=new g2(n);return this.zn.forEachTarget(e,i=>r.Un(i.sequenceNumber)).next(()=>this.zn.Hn(e,i=>r.Un(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(A("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(Fw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fw):this.Jn(e,n))}getCacheSize(e){return this.zn.getCacheSize(e)}Jn(e,n){let r,i,s,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),i=this.params.maximumSequenceNumbersToCollect):i=d,o=Date.now(),this.nthSequenceNumber(e,i))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,n))).next(d=>(s=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),cs()<=H.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:d})))}}function v2(t,e){return new y2(t,e)}/**
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
 */class w2{constructor(e,n){this.db=e,this.garbageCollector=v2(this,n)}jn(e){const n=this.Yn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Yn(e){let n=0;return this.Hn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Hn(e,n){return this.Zn(e,(r,i)=>n(i))}addReference(e,n,r){return Cu(e,r)}removeReference(e,n,r){return Cu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Cu(e,n)}Xn(e,n){return function(i,s){let o=!1;return i1(i).Z(a=>r1(i,a,s).next(l=>(l&&(o=!0),w.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Zn(e,(o,a)=>{if(a<=n){const l=this.Xn(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,F.min()),dr(e).delete(function(d){return[0,vt(d.path)]}(o))))});i.push(l)}}).next(()=>w.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Cu(e,n)}Zn(e,n){const r=dr(e);let i,s=kt._e;return r.Y({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==kt._e&&n(new C(Sn(i)),s),s=u,i=l):s=kt._e}).next(()=>{s!==kt._e&&n(new C(Sn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Cu(t,e){return dr(t).put(function(r,i){return{targetId:0,path:vt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class s1{constructor(){this.changes=new ei(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,he.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?w.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class I2{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return ii(e).put(r)}removeEntry(e,n,r){return ii(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Qc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.er(e,r)))}getEntry(e,n){let r=he.newInvalidDocument(n);return ii(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Qo(n))},(i,s)=>{r=this.tr(n,s)}).next(()=>r)}nr(e,n){let r={size:0,document:he.newInvalidDocument(n)};return ii(e).Y({index:"documentKeyIndex",range:IDBKeyRange.only(Qo(n))},(i,s)=>{r={document:this.tr(n,s),size:Jc(s)}}).next(()=>r)}getEntries(e,n){let r=bt();return this.rr(e,n,(i,s)=>{const o=this.tr(i,s);r=r.insert(i,o)}).next(()=>r)}ir(e,n){let r=bt(),i=new le(C.comparator);return this.rr(e,n,(s,o)=>{const a=this.tr(s,o);r=r.insert(s,a),i=i.insert(s,Jc(o))}).next(()=>({documents:r,sr:i}))}rr(e,n,r){if(n.isEmpty())return w.resolve();let i=new se(qw);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Qo(i.first()),Qo(i.last())),o=i.getIterator();let a=o.getNext();return ii(e).Y({index:"documentKeyIndex",range:s},(l,u,h)=>{const d=C.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&qw(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?h.U(Qo(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Qc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ii(e).W(IDBKeyRange.bound(a,l,!0)).next(u=>{s==null||s.incrementDocumentReadCount(u.length);let h=bt();for(const d of u){const f=this.tr(C.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);f.isFoundDocument()&&(Kl(n,f)||i.has(f.key))&&(h=h.insert(f.key,f))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=bt();const o=zw(n,r),a=zw(n,Bt.max());return ii(e).Y({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,h)=>{const d=this.tr(C.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(d.key,d),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new E2(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Bw(e).get("remoteDocumentGlobalKey").next(n=>(U(!!n),n))}er(e,n){return Bw(e).put("remoteDocumentGlobalKey",n)}tr(e,n){if(n){const r=o2(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(F.min())))return r}return he.newInvalidDocument(e)}}function o1(t){return new I2(t)}class E2 extends s1{constructor(e,n){super(),this._r=e,this.trackRemovals=n,this.ar=new ei(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new se((s,o)=>z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ar.get(s);if(n.push(this._r.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=xw(this._r.serializer,o);i=i.add(s.path.popLast());const u=Jc(l);r+=u-a.size,n.push(this._r.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=xw(this._r.serializer,o.convertToNoDocument(F.min()));n.push(this._r.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this._r.indexManager.addToCollectionParentIndex(e,s))}),n.push(this._r.updateMetadata(e,r)),w.waitFor(n)}getFromCache(e,n){return this._r.nr(e,n).next(r=>(this.ar.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this._r.ir(e,n).next(({documents:r,sr:i})=>(i.forEach((s,o)=>{this.ar.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function Bw(t){return He(t,"remoteDocumentGlobal")}function ii(t){return He(t,"remoteDocumentsV14")}function Qo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function zw(t,e){const n=e.documentKey.path.toArray();return[t,Qc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function qw(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=z(n[s],r[s]),i)return i;return i=z(n.length,r.length),i||(i=z(n[n.length-2],r[r.length-2]),i||z(n[n.length-1],r[r.length-1]))}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class T2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class a1{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Aa(r.mutation,i,Ct.empty(),ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=An();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=oa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=An();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=bt();const o=Sa(),a=function(){return Sa()}();return n.forEach((l,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof tr)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Aa(h.mutation,u,h.mutation.getFieldMask(),ge.now())):o.set(u.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new T2(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Sa();let i=new le((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Ct.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=RA();h.forEach(f=>{if(!s.has(f)){const p=VA(n.get(f),r.get(f));p!==null&&d.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return w.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return C.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):t_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):w.resolve(An());let a=-1,l=s;return o.next(u=>w.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?w.resolve():this.remoteDocumentCache.getEntry(e,h).next(f=>{l=l.insert(h,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(h=>({batchId:a,changes:AA(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new C(n)).next(r=>{let i=oa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=oa();return this.indexManager.getCollectionParents(e,s).next(a=>w.forEach(a,l=>{const u=function(d,f){return new er(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(h=>{h.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,he.newInvalidDocument(h)))});let a=oa();return o.forEach((l,u)=>{const h=s.get(l);h!==void 0&&Aa(h.mutation,u,Ct.empty(),ge.now()),Kl(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class S2{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return w.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ne(i.createTime)}}(n)),w.resolve()}getNamedQuery(e,n){return w.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:u_(i.bundledQuery),readTime:Ne(i.readTime)}}(n)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class A2{constructor(){this.overlays=new le(C.comparator),this.lr=new Map}getOverlay(e,n){return w.resolve(this.overlays.get(n))}getOverlays(e,n){const r=An();return w.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),w.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),w.resolve()}getOverlaysForCollection(e,n,r){const i=An(),s=n.length+1,o=new C(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return w.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new le((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=An(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=An(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return w.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new o_(n,r));let s=this.lr.get(n);s===void 0&&(s=q(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class d_{constructor(){this.hr=new se($e.Pr),this.Ir=new se($e.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new $e(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new C(new Z([])),r=new $e(n,e),i=new $e(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new C(new Z([])),r=new $e(n,e),i=new $e(n,e+1);let s=q();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new $e(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return C.comparator(e.key,n.key)||z(e.gr,n.gr)}static Tr(e,n){return z(e.gr,n.gr)||C.comparator(e.key,n.key)}}/**
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
 */class R2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new se($e.Pr)}checkEmpty(e){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new i_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,n){return w.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return w.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),w.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new se(z);return n.forEach(i=>{const s=new $e(i,0),o=new $e(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),w.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;C.isDocumentKey(s)||(s=s.child(""));const o=new $e(new C(s),0);let a=new se(z);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),w.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){U(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return w.forEach(n.mutations,i=>{const s=new $e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new $e(n,0),i=this.yr.firstAfterOrEqual(r);return w.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,w.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class P2{constructor(e){this.Cr=e,this.docs=function(){return new le(C.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return w.resolve(r?r.document.mutableCopy():he.newInvalidDocument(n))}getEntries(e,n){let r=bt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():he.newInvalidDocument(i))}),w.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=bt();const o=n.path,a=new C(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Jg(tA(h),r)<=0||(i.has(h.key)||Kl(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return w.resolve(s)}getAllFromCollectionGroup(e,n,r,i){V()}vr(e,n){return w.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new x2(this)}getSize(e){return w.resolve(this.size)}}class x2 extends s1{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),w.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class k2{constructor(e){this.persistence=e,this.Fr=new ei(n=>Fi(n),Wl),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Mr=0,this.Or=new d_,this.targetCount=0,this.Nr=qi.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),w.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new qi(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,w.resolve()}updateTargetData(e,n){return this.kn(n),w.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),w.waitFor(s).next(()=>i)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return w.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),w.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),w.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),w.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return w.resolve(r)}containsKey(e,n){return w.resolve(this.Or.containsKey(n))}}/**
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
 */class l1{constructor(e,n){this.Br={},this.overlays={},this.Lr=new kt(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new k2(this),this.indexManager=new f2,this.remoteDocumentCache=function(i){return new P2(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new XA(n),this.Kr=new S2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new A2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new R2(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){A("MemoryPersistence","Starting transaction:",e);const i=new C2(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return w.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class C2 extends rA{constructor(e){super(),this.currentSequenceNumber=e}}class td{constructor(e){this.persistence=e,this.Gr=new d_,this.zr=null}static jr(e){return new td(e)}get Hr(){if(this.zr)return this.zr;throw V()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),w.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),w.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),w.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.Hr,r=>{const i=C.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return w.or([()=>w.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class b2{constructor(e){this.serializer=e}N(e,n,r,i){const s=new Qh("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",sw,{unique:!0}),l.createObjectStore("documentMutations")}(e),Ww(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=w.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Ww(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:F.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").W().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",sw,{unique:!0});const d=u.store("mutations"),f=h.map(p=>d.put(p));return w.waitFor(f)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Zr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.Xr(s)))),r<7&&i>=7&&(o=o.next(()=>this.ei(s))),r<8&&i>=8&&(o=o.next(()=>this.ti(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ni(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:pM});u.createIndex("collectionPathOverlayIndex",mM,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",gM,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:rM});u.createIndex("documentKeyIndex",iM),u.createIndex("collectionGroupIndex",sM)}(e)).next(()=>this.ri(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ii(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:cM}).createIndex("sequenceNumberIndex",hM,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:dM}).createIndex("documentKeyIndex",fM,{unique:!1})}(e))),o}Xr(e){let n=0;return e.store("remoteDocuments").Y((r,i)=>{n+=Jc(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Zr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(i=>w.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>w.forEach(a,l=>{U(l.userId===s.userId);const u=ci(this.serializer,l);return n1(e,s.userId,u).next(()=>{})}))}))}ei(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Y((o,a)=>{const l=new Z(o),u=function(d){return[0,vt(d)]}(l);s.push(n.get(u).next(h=>h?w.resolve():(d=>n.put({targetId:0,path:vt(d),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>w.waitFor(s))})}ti(e,n){e.createObjectStore("collectionParents",{keyPath:uM});const r=n.store("collectionParents"),i=new h_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:vt(l)})}};return n.store("remoteDocuments").Y({J:!0},(o,a)=>{const l=new Z(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Y({J:!0},([o,a,l],u)=>{const h=Sn(a);return s(h.popLast())}))}ni(e){const n=e.store("targets");return n.Y((r,i)=>{const s=la(i),o=ZA(this.serializer,s);return n.put(o)})}ri(e,n){const r=n.store("remoteDocuments"),i=[];return r.Y((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(d){return d.document?new C(Z.fromString(d.document.name).popFirst(5)):d.noDocument?C.fromSegments(d.noDocument.path):d.unknownDocument?C.fromSegments(d.unknownDocument.path):V()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>w.waitFor(i))}ii(e,n){const r=n.store("mutations"),i=o1(this.serializer),s=new l1(td.jr,this.serializer.ut);return r.W().next(o=>{const a=new Map;return o.forEach(l=>{var u;let h=(u=a.get(l.userId))!==null&&u!==void 0?u:q();ci(this.serializer,l).keys().forEach(d=>h=h.add(d)),a.set(l.userId,h)}),w.forEach(a,(l,u)=>{const h=new ze(u),d=Zh.ct(this.serializer,h),f=s.getIndexManager(h),p=ed.ct(h,this.serializer,f,s.referenceDelegate);return new a1(i,p,d,f).recalculateAndSaveOverlaysForDocumentKeys(new Lp(n,kt._e),l).next()})})}}function Ww(t){t.createObjectStore("targetDocuments",{keyPath:aM}).createIndex("documentTargetsIndex",lM,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",oM,{unique:!0}),t.createObjectStore("targetGlobal")}const df="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class f_{constructor(e,n,r,i,s,o,a,l,u,h,d=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.si=s,this.window=o,this.document=a,this.oi=u,this._i=h,this.ai=d,this.Lr=null,this.kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ui=null,this.inForeground=!1,this.ci=null,this.li=null,this.hi=Number.NEGATIVE_INFINITY,this.Pi=f=>Promise.resolve(),!f_.D())throw new S(I.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new w2(this,i),this.Ii=n+"main",this.serializer=new XA(l),this.Ti=new on(this.Ii,this.ai,new b2(this.serializer)),this.qr=new m2(this.referenceDelegate,this.serializer),this.remoteDocumentCache=o1(this.serializer),this.Kr=new a2,this.window&&this.window.localStorage?this.Ei=this.window.localStorage:(this.Ei=null,h===!1&&be("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.di().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new S(I.FAILED_PRECONDITION,df);return this.Ai(),this.Ri(),this.Vi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.qr.getHighestSequenceNumber(e))}).then(e=>{this.Lr=new kt(e,this.oi)}).then(()=>{this.kr=!0}).catch(e=>(this.Ti&&this.Ti.close(),Promise.reject(e)))}mi(e){return this.Pi=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ti.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.si.enqueueAndForget(async()=>{this.started&&await this.di()}))}di(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>bu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)))})}).next(()=>this.gi(e)).next(n=>this.isPrimary&&!n?this.pi(e).next(()=>!1):!!n&&this.yi(e).next(()=>!0))).catch(e=>{if(Zr(e))return A("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return A("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.si.enqueueRetryable(()=>this.Pi(e)),this.isPrimary=e})}fi(e){return Yo(e).get("owner").next(n=>w.resolve(this.wi(n)))}Si(e){return bu(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Di(this.hi,18e5)){this.hi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=He(n,"clientMetadata");return r.W().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return w.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ei)for(const n of e)this.Ei.removeItem(this.vi(n.clientId))}}Vi(){this.li=this.si.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.di().then(()=>this.bi()).then(()=>this.Vi()))}wi(e){return!!e&&e.ownerId===this.clientId}gi(e){return this._i?w.resolve(!0):Yo(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)){if(this.wi(n)&&this.networkEnabled)return!0;if(!this.wi(n)){if(!n.allowTabSynchronization)throw new S(I.FAILED_PRECONDITION,df);return!1}}return!(!this.networkEnabled||!this.inForeground)||bu(e).W().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&A("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.kr=!1,this.Mi(),this.li&&(this.li.cancel(),this.li=null),this.xi(),this.Oi(),await this.Ti.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Lp(e,kt._e);return this.pi(n).next(()=>this.Si(n))}),this.Ti.close(),this.Ni()}Ci(e,n){return e.filter(r=>this.Di(r.updateTimeMs,n)&&!this.Fi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>bu(e).W().next(n=>this.Ci(n,18e5).map(r=>r.clientId)))}get started(){return this.kr}getMutationQueue(e,n){return ed.ct(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new p2(e,this.serializer.ut.databaseId)}getDocumentOverlayCache(e){return Zh.ct(this.serializer,e)}getBundleCache(){return this.Kr}runTransaction(e,n,r){A("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?yM:l===14?lA:l===13?aA:l===12?_M:l===11?oA:void V()}(this.ai);let o;return this.Ti.runTransaction(e,i,s,a=>(o=new Lp(a,this.Lr?this.Lr.next():kt._e),n==="readwrite-primary"?this.fi(o).next(l=>!!l||this.gi(o)).next(l=>{if(!l)throw be(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.si.enqueueRetryable(()=>this.Pi(!1)),new S(I.FAILED_PRECONDITION,nA);return r(o)}).next(l=>this.yi(o).next(()=>l)):this.Li(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Li(e){return Yo(e).get("owner").next(n=>{if(n!==null&&this.Di(n.leaseTimestampMs,5e3)&&!this.Fi(n.ownerId)&&!this.wi(n)&&!(this._i||this.allowTabSynchronization&&n.allowTabSynchronization))throw new S(I.FAILED_PRECONDITION,df)})}yi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Yo(e).put("owner",n)}static D(){return on.D()}pi(e){const n=Yo(e);return n.get("owner").next(r=>this.wi(r)?(A("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):w.resolve())}Di(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(be(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ai(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ci=()=>{this.si.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.di()))},this.document.addEventListener("visibilitychange",this.ci),this.inForeground=this.document.visibilityState==="visible")}xi(){this.ci&&(this.document.removeEventListener("visibilitychange",this.ci),this.ci=null)}Ri(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ui=()=>{this.Mi();const n=/(?:Version|Mobile)\/1[456]/;eC()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.si.enterRestrictedMode(!0),this.si.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ui))}Oi(){this.ui&&(this.window.removeEventListener("pagehide",this.ui),this.ui=null)}Fi(e){var n;try{const r=((n=this.Ei)===null||n===void 0?void 0:n.getItem(this.vi(e)))!==null;return A("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return be("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Mi(){if(this.Ei)try{this.Ei.setItem(this.vi(this.clientId),String(Date.now()))}catch(e){be("Failed to set zombie client id.",e)}}Ni(){if(this.Ei)try{this.Ei.removeItem(this.vi(this.clientId))}catch{}}vi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Yo(t){return He(t,"owner")}function bu(t){return He(t,"clientMetadata")}function p_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class m_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new m_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class N2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class u1{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new N2;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(cs()<=H.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",hs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),w.resolve()):(cs()<=H.DEBUG&&A("QueryEngine","Query:",hs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(cs()<=H.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",hs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wt(n))):w.resolve())}zi(e,n){if(_w(n))return w.resolve(null);let r=wt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hc(n,null,"F"),r=wt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,Hc(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return _w(n)||i.isEqual(F.min())?w.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?w.resolve(null):(cs()<=H.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hs(n)),this.Xi(e,o,n,eA(i,-1)).next(a=>a))})}Yi(e,n){let r=new se(TA(e));return n.forEach((i,s)=>{Kl(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return cs()<=H.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",hs(n)),this.Gi.getDocumentsMatchingQuery(e,n,Bt.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class D2{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new le(z),this.ns=new ei(s=>Fi(s),Wl),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new a1(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function c1(t,e,n,r){return new D2(t,e,n,r)}async function h1(t,e){const n=N(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function V2(t,e){const n=N(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,f=d.keys();let p=w.resolve();return f.forEach(y=>{p=p.next(()=>h.getEntry(l,y)).next(v=>{const T=u.docVersions.get(y);U(T!==null),v.version.compareTo(T)<0&&(d.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),h.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function d1(t){const e=N(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function O2(t,e){const n=N(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((h,d)=>{const f=i.get(d);if(!f)return;a.push(n.qr.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.qr.addMatchingKeys(s,h.addedDocuments,d)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?p=p.withResumeToken(Fe.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,r)),i=i.insert(d,p),function(v,T,g){return v.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,p,h)&&a.push(n.qr.updateTargetData(s,p))});let l=bt(),u=q();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(f1(s,o,e.documentUpdates).next(h=>{l=h.us,u=h.cs})),!r.isEqual(F.min())){const h=n.qr.getLastRemoteSnapshotVersion(s).next(d=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return w.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function f1(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=bt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function L2(t,e){const n=N(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function io(t,e){const n=N(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,w.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Un(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function so(t,e,n){const r=N(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zr(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function Xc(t,e,n){const r=N(t);let i=F.min(),s=q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=N(l),f=d.ns.get(h);return f!==void 0?w.resolve(d.ts.get(f)):d.qr.getTargetData(u,h)}(r,o,wt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:q())).next(a=>(g1(r,EA(e),a),{documents:a,ls:s})))}function p1(t,e){const n=N(t),r=N(n.qr),i=n.ts.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r._t(s,e).next(o=>o?o.target:null))}function m1(t,e){const n=N(t),r=n.rs.get(e)||F.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.ss.getAllFromCollectionGroup(i,e,eA(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(g1(n,e,i),i))}function g1(t,e,n){let r=t.rs.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}async function M2(t,e,n,r){const i=N(t);let s=q(),o=bt();for(const u of n){const h=e.hs(u.metadata.name);u.document&&(s=s.add(h));const d=e.Ps(u);d.setReadTime(e.Is(u.metadata.readTime)),o=o.insert(h,d)}const a=i.ss.newChangeBuffer({trackRemovals:!0}),l=await io(i,function(h){return wt(So(Z.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>f1(u,a,o).next(h=>(a.apply(u),h)).next(h=>i.qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,h.us,h.cs)).next(()=>h.us)))}async function j2(t,e,n=q()){const r=await io(t,wt(u_(e.bundledQuery))),i=N(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ne(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Kr.saveNamedQuery(s,e);const a=r.withResumeToken(Fe.EMPTY_BYTE_STRING,o);return i.ts=i.ts.insert(a.targetId,a),i.qr.updateTargetData(s,a).next(()=>i.qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.Kr.saveNamedQuery(s,e))})}function Gw(t,e){return`firestore_clients_${t}_${e}`}function Kw(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ff(t,e){return`firestore_targets_${t}_${e}`}class Zc{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Ts(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new S(i.error.code,i.error.message))),o?new Zc(e,n,i.state,s):(be("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ra{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Ts(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new S(r.error.code,r.error.message))),s?new Ra(e,r.state,i):(be("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Es(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class eh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Ts(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=n_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=iA(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new eh(e,s):(be("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class g_{constructor(e,n){this.clientId=e,this.onlineState=n}static Ts(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new g_(n.clientId,n.onlineState):(be("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Qp{constructor(){this.activeTargetIds=n_()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pf{constructor(e,n,r,i,s){this.window=e,this.si=n,this.persistenceKey=r,this.Rs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Vs=this.fs.bind(this),this.gs=new le(z),this.started=!1,this.ps=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ys=Gw(this.persistenceKey,this.Rs),this.ws=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.gs=this.gs.insert(this.Rs,new Qp),this.Ss=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.bs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ds=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Cs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.vs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Vs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Rs)continue;const i=this.getItem(Gw(this.persistenceKey,r));if(i){const s=eh.Ts(r,i);s&&(this.gs=this.gs.insert(s.clientId,s))}}this.Fs();const n=this.storage.getItem(this.Cs);if(n){const r=this.Ms(n);r&&this.xs(r)}for(const r of this.ps)this.fs(r);this.ps=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Os(this.gs)}isActiveQueryTarget(e){let n=!1;return this.gs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ns(e,"pending")}updateMutationState(e,n,r){this.Ns(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(ff(this.persistenceKey,e));if(r){const i=Ra.Ts(e,r);i&&(n=i.state)}}return this.Ls.ds(e),this.Fs(),n}removeLocalQueryTarget(e){this.Ls.As(e),this.Fs()}isLocalQueryTarget(e){return this.Ls.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ff(this.persistenceKey,e))}updateQueryState(e,n,r){this.ks(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.qs(e)}notifyBundleLoaded(e){this.Qs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Vs),this.removeItem(this.ys),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return A("SharedClientState","READ",e,n),n}setItem(e,n){A("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){A("SharedClientState","REMOVE",e),this.storage.removeItem(e)}fs(e){const n=e;if(n.storageArea===this.storage){if(A("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ys)return void be("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.si.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ss.test(n.key)){if(n.newValue==null){const r=this.Ks(n.key);return this.$s(r,null)}{const r=this.Us(n.key,n.newValue);if(r)return this.$s(r.clientId,r)}}else if(this.bs.test(n.key)){if(n.newValue!==null){const r=this.Ws(n.key,n.newValue);if(r)return this.Gs(r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.zs(n.key,n.newValue);if(r)return this.js(r)}}else if(n.key===this.Cs){if(n.newValue!==null){const r=this.Ms(n.newValue);if(r)return this.xs(r)}}else if(n.key===this.ws){const r=function(s){let o=kt._e;if(s!=null)try{const a=JSON.parse(s);U(typeof a=="number"),o=a}catch(a){be("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==kt._e&&this.sequenceNumberHandler(r)}else if(n.key===this.vs){const r=this.Hs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Js(i)))}}}else this.ps.push(n)})}}get Ls(){return this.gs.get(this.Rs)}Fs(){this.setItem(this.ys,this.Ls.Es())}Ns(e,n,r){const i=new Zc(this.currentUser,e,n,r),s=Kw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Es())}Bs(e){const n=Kw(this.persistenceKey,this.currentUser,e);this.removeItem(n)}qs(e){const n={clientId:this.Rs,onlineState:e};this.storage.setItem(this.Cs,JSON.stringify(n))}ks(e,n,r){const i=ff(this.persistenceKey,e),s=new Ra(e,n,r);this.setItem(i,s.Es())}Qs(e){const n=JSON.stringify(Array.from(e));this.setItem(this.vs,n)}Ks(e){const n=this.Ss.exec(e);return n?n[1]:null}Us(e,n){const r=this.Ks(e);return eh.Ts(r,n)}Ws(e,n){const r=this.bs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Zc.Ts(new ze(s),i,n)}zs(e,n){const r=this.Ds.exec(e),i=Number(r[1]);return Ra.Ts(i,n)}Ms(e){return g_.Ts(e)}Hs(e){return JSON.parse(e)}async Gs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Ys(e.batchId,e.state,e.error);A("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}js(e){return this.syncEngine.Zs(e.targetId,e.state,e.error)}$s(e,n){const r=n?this.gs.insert(e,n):this.gs.remove(e),i=this.Os(this.gs),s=this.Os(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.Xs(o,a).then(()=>{this.gs=r})}xs(e){this.gs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Os(e){let n=n_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class _1{constructor(){this.eo=new Qp,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Qp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class F2{ro(e){}shutdown(){}}/**
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
 */class Hw{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Nu=null;function mf(){return Nu===null?Nu=function(){return 268435456+Math.round(2147483648*Math.random())}():Nu++,"0x"+Nu.toString(16)}/**
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
 */const U2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class $2{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const lt="WebChannelConnection";class B2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=mf(),l=this.So(n,r);A("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(h=>(A("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw dn("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+To}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=U2[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=mf();return new Promise((o,a)=>{const l=new jL;l.setWithCredentials(!0),l.listenOnce(OL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case cf.NO_ERROR:const h=l.getResponseJson();A(lt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case cf.TIMEOUT:A(lt,`RPC '${e}' ${s} timed out`),a(new S(I.DEADLINE_EXCEEDED,"Request time out"));break;case cf.HTTP_ERROR:const d=l.getStatus();if(A(lt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const y=function(T){const g=T.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(g)>=0?g:I.UNKNOWN}(p.status);a(new S(y,p.message))}else a(new S(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new S(I.UNAVAILABLE,"Connection failed."));break;default:V()}}finally{A(lt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);A(lt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=mf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=DL(),a=VL(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new ML({})),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");A(lt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const d=o.createWebChannel(h,l);let f=!1,p=!1;const y=new $2({co:T=>{p?A(lt,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(f||(A(lt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),A(lt,`RPC '${e}' stream ${i} sending:`,T),d.send(T))},lo:()=>d.close()}),v=(T,g,m)=>{T.listen(g,_=>{try{m(_)}catch(E){setTimeout(()=>{throw E},0)}})};return v(d,Pu.EventType.OPEN,()=>{p||A(lt,`RPC '${e}' stream ${i} transport opened.`)}),v(d,Pu.EventType.CLOSE,()=>{p||(p=!0,A(lt,`RPC '${e}' stream ${i} transport closed`),y.Ro())}),v(d,Pu.EventType.ERROR,T=>{p||(p=!0,dn(lt,`RPC '${e}' stream ${i} transport errored:`,T),y.Ro(new S(I.UNAVAILABLE,"The operation could not be completed")))}),v(d,Pu.EventType.MESSAGE,T=>{var g;if(!p){const m=T.data[0];U(!!m);const _=m,E=_.error||((g=_[0])===null||g===void 0?void 0:g.error);if(E){A(lt,`RPC '${e}' stream ${i} received error:`,E);const R=E.status;let k=function(oe){const G=De[oe];if(G!==void 0)return MA(G)}(R),b=E.message;k===void 0&&(k=I.INTERNAL,b="Unknown error status: "+R+" with message "+E.message),p=!0,y.Ro(new S(k,b)),d.close()}else A(lt,`RPC '${e}' stream ${i} received:`,m),y.Vo(m)}}),v(a,LL.STAT_EVENT,T=>{T.stat===tw.PROXY?A(lt,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===tw.NOPROXY&&A(lt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}/**
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
 *//**
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
 */function y1(){return typeof window<"u"?window:null}function tc(){return typeof document<"u"?document:null}/**
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
 */function Jl(t){return new YM(t,!0)}/**
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
 */class __{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&A("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class v1{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new __(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(be(n.toString()),be("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new S(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class z2 extends v1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=ZM(this.serializer,e),r=function(s){if(!("targetChange"in s))return F.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?Ne(o.readTime):F.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=_l(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Gc(l)?{documents:GA(s,l)}:{query:KA(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$A(s,o.resumeToken);const u=zp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(F.min())>0){a.readTime=ro(s,o.snapshotVersion.toTimestamp());const u=zp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=t2(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=_l(this.serializer),n.removeTarget=e,this.e_(n)}}class q2 extends v1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(U(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=e2(e.writeResults,e.commitTime),r=Ne(e.commitTime);return this.listener.I_(r,n)}return U(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=_l(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>yl(this.serializer,r))};this.e_(n)}}/**
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
 */class W2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new S(I.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(I.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new S(I.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class G2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(be(n),this.f_=!1):A("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class K2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{ti(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=N(l);u.C_.add(4),await Po(u),u.M_.set("Unknown"),u.C_.delete(4),await Xl(u)}(this))})}),this.M_=new G2(r,i)}}async function Xl(t){if(ti(t))for(const e of t.v_)await e(!0)}async function Po(t){for(const e of t.v_)await e(!1)}function nd(t,e){const n=N(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),w_(n)?v_(n):ko(n).Ho()&&y_(n,e))}function vl(t,e){const n=N(t),r=ko(n);n.D_.delete(e),r.Ho()&&w1(n,e),n.D_.size===0&&(r.Ho()?r.Zo():ti(n)&&n.M_.set("Unknown"))}function y_(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ko(t).u_(e)}function w1(t,e){t.x_.Oe(e),ko(t).c_(e)}function v_(t){t.x_=new GM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ko(t).start(),t.M_.g_()}function w_(t){return ti(t)&&!ko(t).jo()&&t.D_.size>0}function ti(t){return N(t).C_.size===0}function I1(t){t.x_=void 0}async function H2(t){t.D_.forEach((e,n)=>{y_(t,e)})}async function Q2(t,e){I1(t),w_(t)?(t.M_.w_(e),v_(t)):t.M_.set("Unknown")}async function Y2(t,e,n){if(t.M_.set("Online"),e instanceof UA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await th(t,r)}else if(e instanceof ec?t.x_.$e(e):e instanceof FA?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(F.min()))try{const r=await d1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.D_.get(u);h&&s.D_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=s.D_.get(l);if(!h)return;s.D_.set(l,h.withResumeToken(Fe.EMPTY_BYTE_STRING,h.snapshotVersion)),w1(s,l);const d=new Un(h.target,l,u,h.sequenceNumber);y_(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await th(t,r)}}async function th(t,e,n){if(!Zr(e))throw e;t.C_.add(1),await Po(t),t.M_.set("Offline"),n||(n=()=>d1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Xl(t)})}function E1(t,e){return e().catch(n=>th(t,n,e))}async function xo(t){const e=N(t),n=$r(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;J2(e);)try{const i=await L2(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,X2(e,i)}catch(i){await th(e,i)}T1(e)&&S1(e)}function J2(t){return ti(t)&&t.b_.length<10}function X2(t,e){t.b_.push(e);const n=$r(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function T1(t){return ti(t)&&!$r(t).jo()&&t.b_.length>0}function S1(t){$r(t).start()}async function Z2(t){$r(t).E_()}async function ej(t){const e=$r(t);for(const n of t.b_)e.P_(n.mutations)}async function tj(t,e,n){const r=t.b_.shift(),i=s_.from(r,e,n);await E1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xo(t)}async function nj(t,e){e&&$r(t).h_&&await async function(r,i){if(function(o){return LA(o)&&o!==I.ABORTED}(i.code)){const s=r.b_.shift();$r(r).Yo(),await E1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xo(r)}}(t,e),T1(t)&&S1(t)}async function Qw(t,e){const n=N(t);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=ti(n);n.C_.add(3),await Po(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Xl(n)}async function Yp(t,e){const n=N(t);e?(n.C_.delete(2),await Xl(n)):e||(n.C_.add(2),await Po(n),n.M_.set("Unknown"))}function ko(t){return t.O_||(t.O_=function(n,r,i){const s=N(n);return s.A_(),new z2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:H2.bind(null,t),Io:Q2.bind(null,t),a_:Y2.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),w_(t)?v_(t):t.M_.set("Unknown")):(await t.O_.stop(),I1(t))})),t.O_}function $r(t){return t.N_||(t.N_=function(n,r,i){const s=N(n);return s.A_(),new q2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:Z2.bind(null,t),Io:nj.bind(null,t),T_:ej.bind(null,t),I_:tj.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await xo(t)):(await t.N_.stop(),t.b_.length>0&&(A("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class I_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new We,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new I_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Co(t,e){if(be("AsyncQueue",`${e}: ${t}`),Zr(t))return new S(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class $s{constructor(e){this.comparator=e?(n,r)=>e(n,r)||C.comparator(n.key,r.key):(n,r)=>C.comparator(n.key,r.key),this.keyedMap=oa(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Yw{constructor(){this.B_=new le(C.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):V():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class oo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new oo(e,n,$s.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class rj{constructor(){this.k_=void 0,this.listeners=[]}}class ij{constructor(){this.queries=new ei(e=>IA(e),Gl),this.onlineState="Unknown",this.q_=new Set}}async function E_(t,e){const n=N(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new rj),i)try{s.k_=await n.onListen(r)}catch(o){const a=Co(o,`Initialization of query '${hs(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&S_(n)}async function T_(t,e){const n=N(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function sj(t,e){const n=N(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&S_(n)}function oj(t,e,n){const r=N(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function S_(t){t.q_.forEach(e=>{e.next()})}class A_{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new oo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=oo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class aj{constructor(e,n){this.Y_=e,this.byteLength=n}Z_(){return"metadata"in this.Y_}}/**
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
 */class Jw{constructor(e){this.serializer=e}hs(e){return kn(this.serializer,e)}Ps(e){return e.metadata.exists?WA(this.serializer,e.document,!1):he.newNoDocument(this.hs(e.metadata.name),this.Is(e.metadata.readTime))}Is(e){return Ne(e)}}class lj{constructor(e,n,r){this.X_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=A1(e)}ea(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.Y_.namedQuery)this.queries.push(e.Y_.namedQuery);else if(e.Y_.documentMetadata){this.documents.push({metadata:e.Y_.documentMetadata}),e.Y_.documentMetadata.exists||++n;const r=Z.fromString(e.Y_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Y_.document&&(this.documents[this.documents.length-1].document=e.Y_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ta(e){const n=new Map,r=new Jw(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.hs(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||q()).add(s);n.set(o,a)}}return n}async complete(){const e=await M2(this.localStore,new Jw(this.serializer),this.documents,this.X_.id),n=this.ta(this.documents);for(const r of this.queries)await j2(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,na:this.collectionGroups,ra:e}}}function A1(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class R1{constructor(e){this.key=e}}class P1{constructor(e){this.key=e}}class x1{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=q(),this.mutatedKeys=q(),this._a=TA(e),this.aa=new $s(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Yw,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const f=i.get(h),p=Kl(this.query,d)?d:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let T=!1;f&&p?f.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),T=!0):this.ha(f,p)||(r.track({type:2,doc:p}),T=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),T=!0):f&&!p&&(r.track({type:1,doc:f}),T=!0,(l||u)&&(a=!0)),T&&(p?(o=o.add(p),s=v?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((u,h)=>function(f,p){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return V()}};return y(f)-y(p)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,s.length!==0||l?{snapshot:new oo(this.query,e.aa,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Yw,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=q(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new P1(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new R1(r))}),n}da(e){this.ia=e.ls,this.oa=q();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return oo.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class uj{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class cj{constructor(e){this.key=e,this.Ra=!1}}class hj{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ei(a=>IA(a),Gl),this.fa=new Map,this.ga=new Set,this.pa=new le(C.comparator),this.ya=new Map,this.wa=new d_,this.Sa={},this.ba=new Map,this.Da=qi.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function dj(t,e){const n=C_(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await io(n.localStore,wt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await R_(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&nd(n.remoteStore,o)}return i}async function R_(t,e,n,r,i){t.va=(d,f,p)=>async function(v,T,g,m){let _=T.view.ca(g);_.Zi&&(_=await Xc(v.localStore,T.query,!1).then(({documents:k})=>T.view.ca(k,_)));const E=m&&m.targetChanges.get(T.targetId),R=T.view.applyChanges(_,v.isPrimaryClient,E);return Jp(v,T.targetId,R.Ta),R.snapshot}(t,d,f,p);const s=await Xc(t.localStore,e,!0),o=new x1(e,s.ls),a=o.ca(s.documents),l=Yl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Jp(t,n,u.Ta);const h=new uj(e,n,o);return t.ma.set(e,h),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function fj(t,e){const n=N(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Gl(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await so(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),vl(n.remoteStore,r.targetId),ao(n,r.targetId)}).catch(Xr)):(ao(n,r.targetId),await so(n.localStore,r.targetId,!0))}async function pj(t,e,n){const r=b_(t);try{const i=await function(o,a){const l=N(o),u=ge.now(),h=a.reduce((p,y)=>p.add(y.key),q());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=bt(),v=q();return l.ss.getEntries(p,h).next(T=>{y=T,y.forEach((g,m)=>{m.isValidDocument()||(v=v.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(T=>{d=T;const g=[];for(const m of a){const _=zM(m,d.get(m.key).overlayedDocument);_!=null&&g.push(new tr(m.key,_,dA(_.value.mapValue),me.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(T=>{f=T;const g=T.applyToLocalDocumentSet(d,v);return l.documentOverlayCache.saveOverlays(p,T.batchId,g)})}).then(()=>({batchId:f.batchId,changes:AA(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new le(z)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await nr(r,i.changes),await xo(r.remoteStore)}catch(i){const s=Co(i,"Failed to persist write");n.reject(s)}}async function k1(t,e){const n=N(t);try{const r=await O2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(U(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?U(o.Ra):i.removedDocuments.size>0&&(U(o.Ra),o.Ra=!1))}),await nr(n,r,e)}catch(r){await Xr(r)}}function Xw(t,e,n){const r=N(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=N(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const f of d.listeners)f.Q_(a)&&(u=!0)}),u&&S_(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mj(t,e,n){const r=N(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new le(C.comparator);o=o.insert(s,he.newNoDocument(s,F.min()));const a=q().add(s),l=new Ql(F.min(),new Map,new le(z),o,a);await k1(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),k_(r)}else await so(r.localStore,e,!1).then(()=>ao(r,e,n)).catch(Xr)}async function gj(t,e){const n=N(t),r=e.batch.batchId;try{const i=await V2(n.localStore,e);x_(n,r,null),P_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await nr(n,i)}catch(i){await Xr(i)}}async function _j(t,e,n){const r=N(t);try{const i=await function(o,a){const l=N(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(U(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);x_(r,e,n),P_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await nr(r,i)}catch(i){await Xr(i)}}async function yj(t,e){const n=N(t);ti(n.remoteStore)||A("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=N(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ba.get(r)||[];i.push(e),n.ba.set(r,i)}catch(r){const i=Co(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function P_(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function x_(t,e,n){const r=N(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function ao(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||C1(t,r)})}function C1(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(vl(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),k_(t))}function Jp(t,e,n){for(const r of n)r instanceof R1?(t.wa.addReference(r.key,e),vj(t,r)):r instanceof P1?(A("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||C1(t,r.key)):V()}function vj(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(A("SyncEngine","New document in limbo: "+n),t.ga.add(r),k_(t))}function k_(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new C(Z.fromString(e)),r=t.Da.next();t.ya.set(r,new cj(n)),t.pa=t.pa.insert(n,r),nd(t.remoteStore,new Un(wt(So(n.path)),r,"TargetPurposeLimboResolution",kt._e))}}async function nr(t,e,n){const r=N(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=m_.Qi(l.targetId,u);s.push(h)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const h=N(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>w.forEach(u,f=>w.forEach(f.ki,p=>h.persistence.referenceDelegate.addReference(d,f.targetId,p)).next(()=>w.forEach(f.qi,p=>h.persistence.referenceDelegate.removeReference(d,f.targetId,p)))))}catch(d){if(!Zr(d))throw d;A("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const f=d.targetId;if(!d.fromCache){const p=h.ts.get(f),y=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(y);h.ts=h.ts.insert(f,v)}}}(r.localStore,s))}async function wj(t,e){const n=N(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const r=await h1(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new S(I.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await nr(n,r._s)}}function Ij(t,e){const n=N(t),r=n.ya.get(e);if(r&&r.Ra)return q().add(r.key);{let i=q();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}async function Ej(t,e){const n=N(t),r=await Xc(n.localStore,e.query,!0),i=e.view.da(r);return n.isPrimaryClient&&Jp(n,e.targetId,i.Ta),i}async function Tj(t,e){const n=N(t);return m1(n.localStore,e).then(r=>nr(n,r))}async function Sj(t,e,n,r){const i=N(t),s=await function(a,l){const u=N(a),h=N(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",d=>h.Cn(d,l).next(f=>f?u.localDocuments.getDocuments(d,f):w.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await xo(i.remoteStore):n==="acknowledged"||n==="rejected"?(x_(i,e,r||null),P_(i,e),function(a,l){N(N(a).mutationQueue).Fn(l)}(i.localStore,e)):V(),await nr(i,s)):A("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Aj(t,e){const n=N(t);if(C_(n),b_(n),e===!0&&n.Ca!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await Zw(n,r.toArray());n.Ca=!0,await Yp(n.remoteStore,!0);for(const s of i)nd(n.remoteStore,s)}else if(e===!1&&n.Ca!==!1){const r=[];let i=Promise.resolve();n.fa.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(ao(n,o),so(n.localStore,o,!0))),vl(n.remoteStore,o)}),await i,await Zw(n,r),function(o){const a=N(o);a.ya.forEach((l,u)=>{vl(a.remoteStore,u)}),a.wa.Vr(),a.ya=new Map,a.pa=new le(C.comparator)}(n),n.Ca=!1,await Yp(n.remoteStore,!1)}}async function Zw(t,e,n){const r=N(t),i=[],s=[];for(const o of e){let a;const l=r.fa.get(o);if(l&&l.length!==0){a=await io(r.localStore,wt(l[0]));for(const u of l){const h=r.ma.get(u),d=await Ej(r,h);d.snapshot&&s.push(d.snapshot)}}else{const u=await p1(r.localStore,o);a=await io(r.localStore,u),await R_(r,b1(u),o,!1,a.resumeToken)}i.push(a)}return r.Va.a_(s),i}function b1(t){return wA(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function Rj(t){return function(n){return N(N(n).persistence).Bi()}(N(t).localStore)}async function Pj(t,e,n,r){const i=N(t);if(i.Ca)return void A("SyncEngine","Ignoring unexpected query state notification.");const s=i.fa.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await m1(i.localStore,EA(s[0])),a=Ql.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Fe.EMPTY_BYTE_STRING);await nr(i,o,a);break}case"rejected":await so(i.localStore,e,!0),ao(i,e,r);break;default:V()}}async function xj(t,e,n){const r=C_(t);if(r.Ca){for(const i of e){if(r.fa.has(i)){A("SyncEngine","Adding an already active target "+i);continue}const s=await p1(r.localStore,i),o=await io(r.localStore,s);await R_(r,b1(s),o.targetId,!1,o.resumeToken),nd(r.remoteStore,o)}for(const i of n)r.fa.has(i)&&await so(r.localStore,i,!1).then(()=>{vl(r.remoteStore,i),ao(r,i)}).catch(Xr)}}function C_(t){const e=N(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=k1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ij.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mj.bind(null,e),e.Va.a_=sj.bind(null,e.eventManager),e.Va.Fa=oj.bind(null,e.eventManager),e}function b_(t){const e=N(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_j.bind(null,e),e}function kj(t,e,n){const r=N(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(p,y){const v=N(p),T=Ne(y.createTime);return v.persistence.runTransaction("hasNewerBundle","readonly",g=>v.Kr.getBundleMetadata(g,y.id)).then(g=>!!g&&g.createTime.compareTo(T)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(p){return{taskState:"Success",documentsLoaded:p.totalDocuments,bytesLoaded:p.totalBytes,totalDocuments:p.totalDocuments,totalBytes:p.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(A1(l));const u=new lj(l,s.localStore,o.serializer);let h=await o.Ma();for(;h;){const f=await u.ea(h);f&&a._updateProgress(f),h=await o.Ma()}const d=await u.complete();return await nr(s,d.ra,void 0),await function(p,y){const v=N(p);return v.persistence.runTransaction("Save bundle","readwrite",T=>v.Kr.saveBundleMetadata(T,y))}(s.localStore,l),a._completeWith(d.progress),Promise.resolve(d.na)}catch(l){return dn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Xp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Jl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return c1(this.persistence,new u1,e.initialUser,this.serializer)}createPersistence(e){return new l1(td.jr,this.serializer)}createSharedClientState(e){return new _1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class N1 extends Xp{constructor(e,n,r){super(),this.xa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.xa.initialize(this,e),await b_(this.xa.syncEngine),await xo(this.xa.remoteStore),await this.persistence.mi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return c1(this.persistence,new u1,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new _2(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new eM(n,this.persistence);return new ZL(e.asyncQueue,r)}createPersistence(e){const n=p_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new f_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,y1(),tc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new _1}}class Cj extends N1{constructor(e,n){super(e,n,!1),this.xa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.xa.syncEngine;this.sharedClientState instanceof pf&&(this.sharedClientState.syncEngine={Ys:Sj.bind(null,n),Zs:Pj.bind(null,n),Xs:xj.bind(null,n),Bi:Rj.bind(null,n),Js:Tj.bind(null,n)},await this.sharedClientState.start()),await this.persistence.mi(async r=>{await Aj(this.xa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=y1();if(!pf.D(n))throw new S(I.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=p_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new pf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class N_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wj.bind(null,this.syncEngine),await Yp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ij}()}createDatastore(e){const n=Jl(e.databaseInfo.databaseId),r=function(s){return new B2(s)}(e.databaseInfo);return function(s,o,a,l){return new W2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new K2(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Xw(this.syncEngine,n,0),function(){return Hw.D()?new Hw:new F2}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,h){const d=new hj(i,s,o,a,l,u);return h&&(d.Ca=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=N(n);A("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Po(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */function eI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 *//**
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
 */class rd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):be("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class bj{constructor(e,n){this.Ba=e,this.serializer=n,this.metadata=new We,this.buffer=new Uint8Array,this.La=function(){return new TextDecoder("utf-8")}(),this.ka().then(r=>{r&&r.Z_()?this.metadata.resolve(r.Y_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Y_)}`))},r=>this.metadata.reject(r))}close(){return this.Ba.cancel()}async getMetadata(){return this.metadata.promise}async Ma(){return await this.getMetadata(),this.ka()}async ka(){const e=await this.qa();if(e===null)return null;const n=this.La.decode(e),r=Number(n);isNaN(r)&&this.Qa(`length string (${n}) is not valid number`);const i=await this.Ka(r);return new aj(JSON.parse(i),e.length+r)}$a(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async qa(){for(;this.$a()<0&&!await this.Ua(););if(this.buffer.length===0)return null;const e=this.$a();e<0&&this.Qa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ka(e){for(;this.buffer.length<e;)await this.Ua()&&this.Qa("Reached the end of bundle when more is expected.");const n=this.La.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Qa(e){throw this.Ba.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ua(){const e=await this.Ba.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class Nj{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new S(I.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=N(i),a=_l(o.serializer)+"/documents",l={documents:s.map(f=>gl(o.serializer,f))},u=await o.Co("BatchGetDocuments",a,l,s.length),h=new Map;u.forEach(f=>{const p=XM(o.serializer,f);h.set(p.key.toString(),p)});const d=[];return s.forEach(f=>{const p=h.get(f.toString());U(!!p),d.push(p)}),d}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ro(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=C.fromPath(r);this.mutations.push(new r_(i,this.precondition(i)))}),await async function(r,i){const s=N(r),o=_l(s.serializer)+"/documents",a={writes:i.map(l=>yl(s.serializer,l))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw V();n=F.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new S(I.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(F.min())?me.exists(!1):me.updateTime(n):me.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(F.min()))throw new S(I.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return me.updateTime(n)}return me.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class Dj{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new __(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const e=new Nj(this.datastore),n=this.za(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(e){try{const n=this.updateFunction(e);return!ql(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ja(e){this.Wa>0&&this.Ha(e)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(e)}Ha(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!LA(n)}return!1}}/**
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
 */class Vj{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=XS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{A("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(A("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new We;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Co(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nc(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await h1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await D_(t);A("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Qw(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Qw(e.remoteStore,s)),t._onlineComponents=e}function D1(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function D_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!D1(n))throw n;dn("Error using user provided cache. Falling back to memory cache: "+n),await nc(t,new Xp)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await nc(t,new Xp);return t._offlineComponents}async function id(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await Zp(t,t._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await Zp(t,new N_))),t._onlineComponents}function V1(t){return D_(t).then(e=>e.persistence)}function V_(t){return D_(t).then(e=>e.localStore)}function O1(t){return id(t).then(e=>e.remoteStore)}function O_(t){return id(t).then(e=>e.syncEngine)}function Oj(t){return id(t).then(e=>e.datastore)}async function lo(t){const e=await id(t),n=e.eventManager;return n.onListen=dj.bind(null,e.syncEngine),n.onUnlisten=fj.bind(null,e.syncEngine),n}function Lj(t){return t.asyncQueue.enqueue(async()=>{const e=await V1(t),n=await O1(t);return e.setNetworkEnabled(!0),function(i){const s=N(i);return s.C_.delete(0),Xl(s)}(n)})}function Mj(t){return t.asyncQueue.enqueue(async()=>{const e=await V1(t),n=await O1(t);return e.setNetworkEnabled(!1),async function(i){const s=N(i);s.C_.add(0),await Po(s),s.M_.set("Offline")}(n)})}function jj(t,e){const n=new We;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,h){const d=N(u);return d.persistence.runTransaction("read document","readonly",f=>d.localDocuments.getDocument(f,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new S(I.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Co(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await V_(t),e,n)),n.promise}function L1(t,e,n={}){const r=new We;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const h=new rd({next:f=>{o.enqueueAndForget(()=>T_(s,d));const p=f.docs.has(a);!p&&f.fromCache?u.reject(new S(I.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&l&&l.source==="server"?u.reject(new S(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new A_(So(a.path),h,{includeMetadataChanges:!0,J_:!0});return E_(s,d)}(await lo(t),t.asyncQueue,e,n,r)),r.promise}function Fj(t,e){const n=new We;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Xc(i,s,!0),l=new x1(s,a.ls),u=l.ca(a.documents),h=l.applyChanges(u,!1);o.resolve(h.snapshot)}catch(a){const l=Co(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await V_(t),e,n)),n.promise}function M1(t,e,n={}){const r=new We;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const h=new rd({next:f=>{o.enqueueAndForget(()=>T_(s,d)),f.fromCache&&l.source==="server"?u.reject(new S(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new A_(a,h,{includeMetadataChanges:!0,J_:!0});return E_(s,d)}(await lo(t),t.asyncQueue,e,n,r)),r.promise}function Uj(t,e){const n=new rd(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){N(i).q_.add(s),s.next()}(await lo(t),n)),()=>{n.Na(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){N(i).q_.delete(s)}(await lo(t),n))}}function $j(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?jA().encode(o):o,function(h,d){return new bj(h,d)}(function(h,d){if(h instanceof Uint8Array)return eI(h,d);if(h instanceof ArrayBuffer)return eI(new Uint8Array(h),d);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Jl(e));t.asyncQueue.enqueueAndForget(async()=>{kj(await O_(t),i,r)})}function Bj(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=N(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.Kr.getNamedQuery(o,i))}(await V_(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function j1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const tI=new Map;/**
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
 */function L_(t,e,n){if(!n)throw new S(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function F1(t,e,n,r){if(e===!0&&r===!0)throw new S(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nI(t){if(!C.isDocumentKey(t))throw new S(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rI(t){if(C.isDocumentKey(t))throw new S(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":V()}function te(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new S(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sd(t);throw new S(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function U1(t,e){if(e<=0)throw new S(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class iI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new S(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new S(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}F1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=j1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new S(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new S(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new S(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new iI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new S(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new iI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new BL;switch(r.type){case"firstParty":return new GL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new S(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tI.get(n);r&&(A("ComponentProvider","Removing Datastore"),tI.delete(n),r.terminate())}(this),Promise.resolve()}}function zj(t,e,n,r={}){var i;const s=(t=te(t,Zl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ze.MOCK_USER;else{a=Jk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new S(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ze(u)}t._authCredentials=new zL(new JS(a,l))}}/**
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
 */let It=class $1{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $1(this.firestore,e,this._query)}},ve=class B1{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new B1(this.firestore,e,this._key)}},kr=class z1 extends It{constructor(e,n,r){super(e,n,So(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new C(e))}withConverter(e){return new z1(this.firestore,e,this._path)}};function q1(t,e,...n){if(t=$(t),L_("collection","path",e),t instanceof Zl){const r=Z.fromString(e,...n);return rI(r),new kr(t,null,r)}{if(!(t instanceof ve||t instanceof kr))throw new S(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Z.fromString(e,...n));return rI(r),new kr(t.firestore,null,r)}}function qj(t,e){if(t=te(t,Zl),L_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new S(I.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new It(t,null,function(r){return new er(Z.emptyPath(),r)}(e))}function nh(t,e,...n){if(t=$(t),arguments.length===1&&(e=XS.newId()),L_("doc","path",e),t instanceof Zl){const r=Z.fromString(e,...n);return nI(r),new ve(t,null,new C(r))}{if(!(t instanceof ve||t instanceof kr))throw new S(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Z.fromString(e,...n));return nI(r),new ve(t.firestore,t instanceof kr?t.converter:null,new C(r))}}function W1(t,e){return t=$(t),e=$(e),(t instanceof ve||t instanceof kr)&&(e instanceof ve||e instanceof kr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function G1(t,e){return t=$(t),e=$(e),t instanceof It&&e instanceof It&&t.firestore===e.firestore&&Gl(t._query,e._query)&&t.converter===e.converter}/**
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
 */class Wj{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new __(this,"async_queue_retry"),this.iu=()=>{const n=tc();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=tc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new We;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Zr(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw be("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=I_.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&V()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function em(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Gj{constructor(){this._progressObserver={},this._taskCompletionResolver=new We,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const Kj=-1;let Re=class extends Zl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Wj}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||K1(this),this._firestoreClient.terminate()}};function Qe(t){return t._firestoreClient||K1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function K1(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,h){return new IM(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,j1(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Vj(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function Hj(t,e){Q1(t=te(t,Re));const n=Qe(t);if(n._uninitializedComponentsProvider)throw new S(I.FAILED_PRECONDITION,"SDK cache is already specified.");dn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new N_;return H1(n,i,new N1(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Qj(t){Q1(t=te(t,Re));const e=Qe(t);if(e._uninitializedComponentsProvider)throw new S(I.FAILED_PRECONDITION,"SDK cache is already specified.");dn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new N_;return H1(e,r,new Cj(r,n.cacheSizeBytes))}function H1(t,e,n){const r=new We;return t.asyncQueue.enqueue(async()=>{try{await nc(t,n),await Zp(t,e),r.resolve()}catch(i){const s=i;if(!D1(s))throw s;dn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function Yj(t){if(t._initialized&&!t._terminated)throw new S(I.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new We;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!on.D())return Promise.resolve();const i=r+"main";await on.delete(i)}(p_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function Jj(t){return function(n){const r=new We;return n.asyncQueue.enqueueAndForget(async()=>yj(await O_(n),r)),r.promise}(Qe(t=te(t,Re)))}function Xj(t){return Lj(Qe(t=te(t,Re)))}function Zj(t){return Mj(Qe(t=te(t,Re)))}function eF(t,e){const n=Qe(t=te(t,Re)),r=new Gj;return $j(n,t._databaseId,e,r),r}function tF(t,e){return Bj(Qe(t=te(t,Re)),e).then(n=>n?new It(t,null,n.query):null)}function Q1(t){if(t._initialized||t._terminated)throw new S(I.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dn(Fe.fromBase64String(e))}catch(n){throw new S(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Dn(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Br=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new S(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let Zi=class{constructor(e){this._methodName=e}};/**
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
 */class od{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new S(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new S(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}}/**
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
 */const nF=/^__.*__$/;class rF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ao(e,this.data,n,this.fieldTransforms)}}class Y1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new tr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function J1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw V()}}class ad{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new ad(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return rh(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(J1(this.Iu)&&nF.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class iF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Jl(e)}pu(e,n,r,i=!1){return new ad({Iu:e,methodName:n,gu:r,path:pe.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function es(t){const e=t._freezeSettings(),n=Jl(t._databaseId);return new iF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ld(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);U_("Data must be an object, but it was:",o,r);const a=eR(r,o);let l,u;if(s.merge)l=new Ct(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const f=tm(e,d,n);if(!o.contains(f))throw new S(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);nR(h,f)||h.push(f)}l=new Ct(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new rF(new et(a),l,u)}class eu extends Zi{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eu}}function X1(t,e,n){return new ad({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class M_ extends Zi{_toFieldTransform(e){return new Hl(e.path,new to)}isEqual(e){return e instanceof M_}}class sF extends Zi{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=X1(this,e,!0),r=this.yu.map(s=>ts(s,n)),i=new Ui(r);return new Hl(e.path,i)}isEqual(e){return this===e}}class oF extends Zi{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=X1(this,e,!0),r=this.yu.map(s=>ts(s,n)),i=new $i(r);return new Hl(e.path,i)}isEqual(e){return this===e}}class aF extends Zi{constructor(e,n){super(e),this.wu=n}_toFieldTransform(e){const n=new no(e.serializer,kA(e.serializer,this.wu));return new Hl(e.path,n)}isEqual(e){return this===e}}function j_(t,e,n,r){const i=t.pu(1,e,n);U_("Data must be an object, but it was:",i,r);const s=[],o=et.empty();Xi(r,(l,u)=>{const h=$_(e,l,n);u=$(u);const d=i.Ru(h);if(u instanceof eu)s.push(h);else{const f=ts(u,d);f!=null&&(s.push(h),o.set(h,f))}});const a=new Ct(s);return new Y1(o,a,i.fieldTransforms)}function F_(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[tm(e,r,n)],l=[i];if(s.length%2!=0)throw new S(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(tm(e,s[f])),l.push(s[f+1]);const u=[],h=et.empty();for(let f=a.length-1;f>=0;--f)if(!nR(u,a[f])){const p=a[f];let y=l[f];y=$(y);const v=o.Ru(p);if(y instanceof eu)u.push(p);else{const T=ts(y,v);T!=null&&(u.push(p),h.set(p,T))}}const d=new Ct(u);return new Y1(h,d,o.fieldTransforms)}function Z1(t,e,n,r=!1){return ts(n,t.pu(r?4:3,e))}function ts(t,e){if(tR(t=$(t)))return U_("Unsupported field value:",e,t),eR(t,e);if(t instanceof Zi)return function(r,i){if(!J1(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ts(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=$(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return kA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ge.fromDate(r);return{timestampValue:ro(i.serializer,s)}}if(r instanceof ge){const s=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ro(i.serializer,s)}}if(r instanceof od)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dn)return{bytesValue:$A(i.serializer,r._byteString)};if(r instanceof ve){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:l_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${sd(r)}`)}(t,e)}function eR(t,e){const n={};return uA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xi(t,(r,i)=>{const s=ts(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function tR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof od||t instanceof Dn||t instanceof ve||t instanceof Zi)}function U_(t,e,n){if(!tR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=sd(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function tm(t,e,n){if((e=$(e))instanceof Br)return e._internalPath;if(typeof e=="string")return $_(t,e);throw rh("Field path arguments must be of type string or ",t,!1,void 0,n)}const lF=new RegExp("[~\\*/\\[\\]]");function $_(t,e,n){if(e.search(lF)>=0)throw rh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Br(...e.split("."))._internalPath}catch{throw rh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new S(I.INVALID_ARGUMENT,a+t+l)}function nR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class wl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ud("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uF extends wl{data(){return super.data()}}function ud(t,e){return typeof e=="string"?$_(t,e):e instanceof Br?e._internalPath:e._delegate._internalPath}/**
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
 */function rR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new S(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class B_{}class tu extends B_{}function ar(t,e,...n){let r=[];e instanceof B_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof z_).length,a=s.filter(l=>l instanceof cd).length;if(o>1||o>0&&a>0)throw new S(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class cd extends tu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cd(e,n,r)}_apply(e){const n=this._parse(e);return sR(e._query,n),new It(e.firestore,e.converter,Bp(e._query,n))}_parse(e){const n=es(e.firestore);return function(s,o,a,l,u,h,d){let f;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new S(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){oI(d,h);const p=[];for(const y of d)p.push(sI(l,s,y));f={arrayValue:{values:p}}}else f=sI(l,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||oI(d,h),f=Z1(a,o,d,h==="in"||h==="not-in");return Y.create(u,h,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function cF(t,e,n){const r=e,i=ud("where",t);return cd._create(i,r,n)}class z_ extends B_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new z_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ne.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)sR(o,l),o=Bp(o,l)}(e._query,n),new It(e.firestore,e.converter,Bp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class q_ extends tu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new q_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new S(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new S(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ml(s,o)}(e._query,this._field,this._direction);return new It(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new er(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function hF(t,e="asc"){const n=e,r=ud("orderBy",t);return q_._create(r,n)}class hd extends tu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new hd(e,n,r)}_apply(e){return new It(e.firestore,e.converter,Hc(e._query,this._limit,this._limitType))}}function dF(t){return U1("limit",t),hd._create("limit",t,"F")}function fF(t){return U1("limitToLast",t),hd._create("limitToLast",t,"L")}class dd extends tu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new dd(e,n,r)}_apply(e){const n=iR(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(i,s){return new er(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function pF(...t){return dd._create("startAt",t,!0)}function mF(...t){return dd._create("startAfter",t,!1)}class fd extends tu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new fd(e,n,r)}_apply(e){const n=iR(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(i,s){return new er(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function gF(...t){return fd._create("endBefore",t,!1)}function _F(...t){return fd._create("endAt",t,!0)}function iR(t,e,n,r){if(n[0]=$(n[0]),n[0]instanceof wl)return function(s,o,a,l,u){if(!l)throw new S(I.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const d of Us(s))if(d.field.isKeyField())h.push(ji(o,l.key));else{const f=l.data.field(d.field);if(Yh(f))throw new S(I.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(f===null){const p=d.field.canonicalString();throw new S(I.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${p}' (used as the orderBy) does not exist.`)}h.push(f)}return new Ur(h,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=es(t.firestore);return function(o,a,l,u,h,d){const f=o.explicitOrderBy;if(h.length>f.length)throw new S(I.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const p=[];for(let y=0;y<h.length;y++){const v=h[y];if(f[y].field.isKeyField()){if(typeof v!="string")throw new S(I.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof v}`);if(!t_(o)&&v.indexOf("/")!==-1)throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${v}' contains a slash.`);const T=o.path.child(Z.fromString(v));if(!C.isDocumentKey(T))throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const g=new C(T);p.push(ji(a,g))}else{const T=Z1(l,u,v);p.push(T)}}return new Ur(p,d)}(t._query,t.firestore._databaseId,i,e,n,r)}}function sI(t,e,n){if(typeof(n=$(n))=="string"){if(n==="")throw new S(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!t_(e)&&n.indexOf("/")!==-1)throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Z.fromString(n));if(!C.isDocumentKey(r))throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ji(t,new C(r))}if(n instanceof ve)return ji(t,n._key);throw new S(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sd(n)}.`)}function oI(t,e){if(!Array.isArray(t)||t.length===0)throw new S(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function sR(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new S(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new S(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class W_{convertValue(e,n="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw V()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new od(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(dl(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Z.fromString(e);U(JA(r));const i=new jr(r.get(1),r.get(3)),s=new C(r.popFirst(5));return i.isEqual(n)||be(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function pd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class yF extends W_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,n)}}/**
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
 */class wi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Yn=class extends wl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Pa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ud("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},Pa=class extends Yn{data(e={}){return super.data(e)}},zr=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new wi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Pa(this._firestore,this._userDataWriter,r.key,r,new wi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new S(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Pa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new wi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Pa(i._firestore,i._userDataWriter,a.doc.key,a.doc,new wi(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:vF(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function vF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return V()}}function oR(t,e){return t instanceof Yn&&e instanceof Yn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof zr&&e instanceof zr&&t._firestore===e._firestore&&G1(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function wF(t){t=te(t,ve);const e=te(t.firestore,Re);return L1(Qe(e),t._key).then(n=>G_(e,t,n))}class ns extends W_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,n)}}function IF(t){t=te(t,ve);const e=te(t.firestore,Re),n=Qe(e),r=new ns(e);return jj(n,t._key).then(i=>new Yn(e,r,t._key,i,new wi(i!==null&&i.hasLocalMutations,!0),t.converter))}function EF(t){t=te(t,ve);const e=te(t.firestore,Re);return L1(Qe(e),t._key,{source:"server"}).then(n=>G_(e,t,n))}function TF(t){t=te(t,It);const e=te(t.firestore,Re),n=Qe(e),r=new ns(e);return rR(t._query),M1(n,t._query).then(i=>new zr(e,r,t,i))}function SF(t){t=te(t,It);const e=te(t.firestore,Re),n=Qe(e),r=new ns(e);return Fj(n,t._query).then(i=>new zr(e,r,t,i))}function AF(t){t=te(t,It);const e=te(t.firestore,Re),n=Qe(e),r=new ns(e);return M1(n,t._query,{source:"server"}).then(i=>new zr(e,r,t,i))}function aI(t,e,n){t=te(t,ve);const r=te(t.firestore,Re),i=pd(t.converter,e,n);return nu(r,[ld(es(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,me.none())])}function lI(t,e,n,...r){t=te(t,ve);const i=te(t.firestore,Re),s=es(i);let o;return o=typeof(e=$(e))=="string"||e instanceof Br?F_(s,"updateDoc",t._key,e,n,r):j_(s,"updateDoc",t._key,e),nu(i,[o.toMutation(t._key,me.exists(!0))])}function RF(t){return nu(te(t.firestore,Re),[new Ro(t._key,me.none())])}function PF(t,e){const n=te(t.firestore,Re),r=nh(t),i=pd(t.converter,e);return nu(n,[ld(es(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,me.exists(!1))]).then(()=>r)}function aR(t,...e){var n,r,i;t=$(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||em(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(em(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,u,h;if(t instanceof ve)u=te(t.firestore,Re),h=So(t._key.path),l={next:d=>{e[o]&&e[o](G_(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=te(t,It);u=te(d.firestore,Re),h=d._query;const f=new ns(u);l={next:p=>{e[o]&&e[o](new zr(u,f,d,p))},error:e[o+1],complete:e[o+2]},rR(t._query)}return function(f,p,y,v){const T=new rd(v),g=new A_(p,T,y);return f.asyncQueue.enqueueAndForget(async()=>E_(await lo(f),g)),()=>{T.Na(),f.asyncQueue.enqueueAndForget(async()=>T_(await lo(f),g))}}(Qe(u),h,a,l)}function xF(t,e){return Uj(Qe(t=te(t,Re)),em(e)?e:{next:e})}function nu(t,e){return function(r,i){const s=new We;return r.asyncQueue.enqueueAndForget(async()=>pj(await O_(r),i,s)),s.promise}(Qe(t),e)}function G_(t,e,n){const r=n.docs.get(e._key),i=new ns(t);return new Yn(t,i,e._key,r,new wi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const kF={maxAttempts:5};/**
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
 */let CF=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=es(e)}set(e,n,r){this._verifyNotCommitted();const i=fr(e,this._firestore),s=pd(i.converter,n,r),o=ld(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,me.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=fr(e,this._firestore);let o;return o=typeof(n=$(n))=="string"||n instanceof Br?F_(this._dataReader,"WriteBatch.update",s._key,n,r,i):j_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,me.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=fr(e,this._firestore);return this._mutations=this._mutations.concat(new Ro(n._key,me.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new S(I.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function fr(t,e){if((t=$(t)).firestore!==e)throw new S(I.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 *//**
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
 */let bF=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=es(n)}get(n){const r=fr(n,this._firestore),i=new yF(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return V();const o=s[0];if(o.isFoundDocument())return new wl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new wl(this._firestore,i,r._key,null,r.converter);throw V()})}set(n,r,i){const s=fr(n,this._firestore),o=pd(s.converter,r,i),a=ld(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=fr(n,this._firestore);let a;return a=typeof(r=$(r))=="string"||r instanceof Br?F_(this._dataReader,"Transaction.update",o._key,r,i,s):j_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=fr(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=fr(e,this._firestore),r=new ns(this._firestore);return super.get(e).then(i=>new Yn(this._firestore,r,n._key,i._document,new wi(!1,!1),n.converter))}};function NF(t,e,n){t=te(t,Re);const r=Object.assign(Object.assign({},kF),n);return function(s){if(s.maxAttempts<1)throw new S(I.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new We;return s.asyncQueue.enqueueAndForget(async()=>{const u=await Oj(s);new Dj(s.asyncQueue,u,a,o,l).run()}),l.promise}(Qe(t),i=>e(new bF(t,i)),r)}/**
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
 */function DF(){return new eu("deleteField")}function VF(){return new M_("serverTimestamp")}function OF(...t){return new sF("arrayUnion",t)}function LF(...t){return new oF("arrayRemove",t)}function MF(t){return new aF("increment",t)}(function(e,n=!0){(function(i){To=i})(Kr),Vr(new Cn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Re(new qL(r.getProvider("auth-internal")),new HL(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new S(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jr(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),xn(nw,"4.3.2",e),xn(nw,"4.3.2","esm2017")})();const jF="@firebase/firestore-compat",FF="0.3.22";/**
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
 */function K_(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new S("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function uI(){if(typeof Uint8Array>"u")throw new S("unimplemented","Uint8Arrays are not available in this environment.")}function cI(){if(!vM())throw new S("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Il{constructor(e){this._delegate=e}static fromBase64String(e){return cI(),new Il(Dn.fromBase64String(e))}static fromUint8Array(e){return uI(),new Il(Dn.fromUint8Array(e))}toBase64(){return cI(),this._delegate.toBase64()}toUint8Array(){return uI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function nm(t){return UF(t,["next","error","complete"])}function UF(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class $F{enableIndexedDbPersistence(e,n){return Hj(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return Qj(e._delegate)}clearIndexedDbPersistence(e){return Yj(e._delegate)}}class lR{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof jr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&dn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){zj(this._delegate,e,n,r)}enableNetwork(){return Xj(this._delegate)}disableNetwork(){return Zj(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,F1("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Jj(this._delegate)}onSnapshotsInSync(e){return xF(this._delegate,e)}get app(){if(!this._appCompat)throw new S("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new uo(this,q1(this._delegate,e))}catch(n){throw mt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Qt(this,nh(this._delegate,e))}catch(n){throw mt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new pt(this,qj(this._delegate,e))}catch(n){throw mt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return NF(this._delegate,n=>e(new uR(this,n)))}batch(){return Qe(this._delegate),new cR(new CF(this._delegate,e=>nu(this._delegate,e)))}loadBundle(e){return eF(this._delegate,e)}namedQuery(e){return tF(this._delegate,e).then(n=>n?new pt(this,n):null)}}class md extends W_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Il(new Dn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Qt.forKey(n,this.firestore,null)}}function BF(t){UL(t)}class uR{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new md(e)}get(e){const n=Ii(e);return this._delegate.get(n).then(r=>new El(this._firestore,new Yn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Ii(e);return r?(K_("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ii(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ii(e);return this._delegate.delete(n),this}}class cR{constructor(e){this._delegate=e}set(e,n,r){const i=Ii(e);return r?(K_("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Ii(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Ii(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Wi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Pa(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Tl(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Wi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Wi(e,new md(e),n),i.set(n,s)),s}}Wi.INSTANCES=new WeakMap;class Qt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new md(e)}static forPath(e,n,r){if(e.length%2!==0)throw new S("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Qt(n,new ve(n._delegate,r,new C(e)))}static forKey(e,n,r){return new Qt(n,new ve(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new uo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new uo(this.firestore,q1(this._delegate,e))}catch(n){throw mt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=$(e),e instanceof ve?W1(this._delegate,e):!1}set(e,n){n=K_("DocumentReference.set",n);try{return n?aI(this._delegate,e,n):aI(this._delegate,e)}catch(r){throw mt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?lI(this._delegate,e):lI(this._delegate,e,n,...r)}catch(i){throw mt(i,"updateDoc()","DocumentReference.update()")}}delete(){return RF(this._delegate)}onSnapshot(...e){const n=hR(e),r=dR(e,i=>new El(this.firestore,new Yn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return aR(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=IF(this._delegate):(e==null?void 0:e.source)==="server"?n=EF(this._delegate):n=wF(this._delegate),n.then(r=>new El(this.firestore,new Yn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Qt(this.firestore,e?this._delegate.withConverter(Wi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function mt(t,e,n){return t.message=t.message.replace(e,n),t}function hR(t){for(const e of t)if(typeof e=="object"&&!nm(e))return e;return{}}function dR(t,e){var n,r;let i;return nm(t[0])?i=t[0]:nm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class El{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Qt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return oR(this._delegate,e._delegate)}}class Tl extends El{data(e){const n=this._delegate.data(e);return this._delegate._converter||$L(n!==void 0),n}}class pt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new md(e)}where(e,n,r){try{return new pt(this.firestore,ar(this._delegate,cF(e,n,r)))}catch(i){throw mt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new pt(this.firestore,ar(this._delegate,hF(e,n)))}catch(r){throw mt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new pt(this.firestore,ar(this._delegate,dF(e)))}catch(n){throw mt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new pt(this.firestore,ar(this._delegate,fF(e)))}catch(n){throw mt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new pt(this.firestore,ar(this._delegate,pF(...e)))}catch(n){throw mt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new pt(this.firestore,ar(this._delegate,mF(...e)))}catch(n){throw mt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new pt(this.firestore,ar(this._delegate,gF(...e)))}catch(n){throw mt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new pt(this.firestore,ar(this._delegate,_F(...e)))}catch(n){throw mt(n,"endAt()","Query.endAt()")}}isEqual(e){return G1(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=SF(this._delegate):(e==null?void 0:e.source)==="server"?n=AF(this._delegate):n=TF(this._delegate),n.then(r=>new rm(this.firestore,new zr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=hR(e),r=dR(e,i=>new rm(this.firestore,new zr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return aR(this._delegate,n,r)}withConverter(e){return new pt(this.firestore,e?this._delegate.withConverter(Wi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class zF{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Tl(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class rm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new pt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Tl(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new zF(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Tl(this._firestore,r))})}isEqual(e){return oR(this._delegate,e._delegate)}}class uo extends pt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Qt(this.firestore,e):null}doc(e){try{return e===void 0?new Qt(this.firestore,nh(this._delegate)):new Qt(this.firestore,nh(this._delegate,e))}catch(n){throw mt(n,"doc()","CollectionReference.doc()")}}add(e){return PF(this._delegate,e).then(n=>new Qt(this.firestore,n))}isEqual(e){return W1(this._delegate,e._delegate)}withConverter(e){return new uo(this.firestore,e?this._delegate.withConverter(Wi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ii(t){return te(t,ve)}/**
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
 */class H_{constructor(...e){this._delegate=new Br(...e)}static documentId(){return new H_(pe.keyField().canonicalString())}isEqual(e){return e=$(e),e instanceof Br?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class fi{constructor(e){this._delegate=e}static serverTimestamp(){const e=VF();return e._methodName="FieldValue.serverTimestamp",new fi(e)}static delete(){const e=DF();return e._methodName="FieldValue.delete",new fi(e)}static arrayUnion(...e){const n=OF(...e);return n._methodName="FieldValue.arrayUnion",new fi(n)}static arrayRemove(...e){const n=LF(...e);return n._methodName="FieldValue.arrayRemove",new fi(n)}static increment(e){const n=MF(e);return n._methodName="FieldValue.increment",new fi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const qF={Firestore:lR,GeoPoint:od,Timestamp:ge,Blob:Il,Transaction:uR,WriteBatch:cR,DocumentReference:Qt,DocumentSnapshot:El,Query:pt,QueryDocumentSnapshot:Tl,QuerySnapshot:rm,CollectionReference:uo,FieldPath:H_,FieldValue:fi,setLogLevel:BF,CACHE_SIZE_UNLIMITED:Kj};function WF(t,e){t.INTERNAL.registerComponent(new Cn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},qF)))}/**
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
 */function GF(t){WF(t,(e,n)=>new lR(e,n,new $F)),t.registerVersion(jF,FF)}GF(Hr);const KF={apiKey:"AIzaSyBXTF2f_4EyKZsVJkaAgytkb1F0oMxKOns",authDomain:"bhsiai.firebaseapp.com",projectId:"bhsiai",storageBucket:"bhsiai.appspot.com",messagingSenderId:"166676658350",appId:"1:166676658350:web:ee06e3490412dcf6e0153f"};Hr.initializeApp(KF);console.log("firebase:",Hr);function HF(t){return Hr.firestore().collection(`${t}`).get()}function QF(){const[t,e]=M.useState([]);return M.useEffect(()=>{(async()=>{try{const r=await HF("News");e(r.docs)}catch(r){console.error("Error del request."),console.log(r)}})()},[]),c.jsxs("div",{children:[c.jsx("ul",{children:t.map(n=>c.jsx("div",{children:c.jsx("li",{className:"listaHorizontal",children:c.jsx("div",{children:c.jsx("a",{className:n.data().good,href:n.data().link,children:n.data().name})})})},n.id))}),c.jsx("br",{}),c.jsx("a",{href:"https://console.firebase.google.com/project/bhsiai/firestore/data/~2FNews?hl=es",target:"_blank",children:"Editar"})]})}function YF(t){return["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][t-1]}function JF(){function t(){setInterval(()=>{const e=new Date,n=e.getMonth()+1,r=e.getFullYear(),i=e.getDate(),o=new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),a=`${i} de ${YF(n)} de ${r}. ${o}hs.`;return localStorage.setItem("hora",a.toString()),a},1e3)}t()}function XF(){return setInterval(()=>{let t=document.getElementById("hora"),e=localStorage.getItem("hora");t.innerHTML=e},1e3)}function fR(){return setInterval(XF,1)}function St(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(JF,{}),c.jsx("div",{children:c.jsxs("div",{id:"header",children:[c.jsx("a",{children:c.jsx(Q,{to:"/",children:c.jsx("img",{className:"Emblema",src:"https://fedenoodt.github.io/746732_Bravo/Emblema.png"})})}),c.jsxs("div",{className:"atajos",children:[c.jsx("a",{children:c.jsx(Q,{to:"/Clock",children:c.jsx("div",{children:c.jsx("h2",{id:"hora",children:c.jsx(fR,{})})})})}),c.jsx("a",{className:"imgAtajos",href:"https://chat.openai.com/",target:"_blank",children:c.jsx("img",{className:"imgAtajos",src:"https://fedenoodt.github.io/746732_Bravo/GPT.jpg"})}),c.jsx("a",{className:"imgAtajos",href:"https://github.com/Fedenoodt/serviciosWindows",target:"_blank",children:c.jsx("img",{className:"imgAtajos",src:"https://fedenoodt.github.io/746732_Bravo/clock.png"})})," ",c.jsx("br",{}),c.jsx("a",{className:"imgAtajos",href:"https://github.com/Fedenoodt/I-Black-Hawk-Security-Informatics-Anonymous-Incorporation",target:"_blank",children:c.jsx("img",{className:"imgAtajos",src:"https://fedenoodt.github.io/746732_Bravo/Shield-PNG-Photos.png"})}),c.jsx("a",{className:"imgAtajos",href:"https://github.com/Fedenoodt/fedenoodt.github.io/tree/gh-pages",target:"_blank",children:c.jsx("img",{className:"imgAtajos",src:"https://fedenoodt.github.io/746732_Bravo/768px-Settings_(iOS).png"})}),c.jsx("a",{className:"imgAtajos",href:"https://github.com/Fedenoodt/fedenoodt.github.io/blob/gh-pages/Pagina_personal/PyC/Libreta_faltas.txt",target:"_blank",children:c.jsx("img",{className:"imgAtajos",src:"https://fedenoodt.github.io/Pagina_personal/notas.png"})}),c.jsx("script",{src:"https://fedenoodt.github.io/shelving/javascript/reloj.js"})]}),c.jsx("br",{}),c.jsx("h1",{children:"Nexo estratégico"}),c.jsx("br",{}),c.jsx("h1",{children:"Black Hawk Security Informatics Anonymous Incorporation"}),c.jsx("hr",{}),c.jsxs("h2",{children:[" ",c.jsx("span",{children:"~ Versión 46.2 ~"})," | ",c.jsx("span",{children:"~ Ahora potenciado con React JS ~"})," "]}),c.jsx("hr",{}),c.jsx("ul",{children:c.jsx(QF,{})})]})}),c.jsx("hr",{}),c.jsx("hr",{}),c.jsx("hr",{})]})})}function ZF(){return c.jsx("div",{children:c.jsxs("center",{children:[c.jsx("a",{children:c.jsx(Q,{to:"/",children:c.jsx("img",{className:"Emblema",src:"https://fedenoodt.github.io/746732_Bravo/Emblema.png"})})}),c.jsx("h2",{className:"megaReloj",id:"hora",children:c.jsx(fR,{})}),c.jsx("a",{children:c.jsx(Q,{to:"/",children:c.jsx("h2",{children:" Volver "})})})]})})}function eU(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Comunicaciones"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"https://web.telegram.org/#/im",target:"_blank",children:"Telegram ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://web.whatsapp.com/",target:"_blank",children:"Whatsapp ►"})}),c.jsx("li",{children:c.jsxs("a",{children:[" ",c.jsx(Q,{to:"/",children:"Volver ◄◄◄"})]})})]})]})]})})}function tU(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Juegos"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Media/Games/Minecraft",children:"Minecraft (Webs de información) ►"})})}),c.jsx("li",{children:c.jsx("a",{href:"https://flexboxfroggy.com/#es",target:"_blank",children:"FLEXBOX FROGGY ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://agar.io",target:"_blank",children:"Agar.io ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.geoguessr.com/trips",target:"_blank",children:"GeoGuessr ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://geotastic.net/home",target:"_blank",children:"Geotastic (Geoguessr gratuito recomendado de PolIsPol) ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://bair.es/pcu/rules",target:"_blank",children:"Normativa de GTAV bair.es Roleplay ►"})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Media",children:"Volver ◄◄◄"})})})]}),c.jsx("a",{className:"inicio",children:c.jsx(Q,{to:"/",children:c.jsx("h2",{children:" Volver al inicio "})})})]})]})})}function nU(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Accesos de emergencia"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"https://plataforma.ha.dev/enrollments",target:"_blank",children:"Hack Academy ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://cursos.utnba.centrodeelearning.com/my/courses.php",target:"_blank",children:"UTN - Aula Virtual ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://sigead.utnba.centrodeelearning.com//personas/panel",target:"_blank",children:"UTN - Centro de e-learning ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://github.com/Fedenoodt/learningReact",target:"_blank",children:"UTN - learningReact ►"})})]}),c.jsx("hr",{}),c.jsxs("ul",{children:[c.jsx("li",{className:"listaHorizontal",children:c.jsx("a",{href:"https://mail.google.com/mail/u/1/#inbox",target:"_blank",children:"Gmail ►"})}),c.jsx("li",{className:"listaHorizontal",children:c.jsx("a",{href:"https://github.com/",target:"_blank",children:"GitHub ►"})}),c.jsx("li",{className:"listaHorizontal",children:c.jsx("a",{href:"https://github.com/Fedenoodt/Trabajo",target:"_blank",children:"Trabajo ►"})}),c.jsx("li",{className:"listaHorizontal",children:c.jsx("a",{href:"https://drive.google.com/drive/u/1/my-drive",target:"_blank",children:"Drive ►"})}),c.jsx("li",{className:"listaHorizontal",children:c.jsx("a",{href:"https://app.diagrams.net/",target:"_blank",children:"Diagramas ►"})}),c.jsx("li",{className:"listaHorizontal",children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/Horario_de_Rutina.pdf",target:"_blank",children:"Horario ►"})}),c.jsx("li",{className:"listaHorizontal",children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/Esquema_Anual.png",target:"_blank",children:"Esquema Anual ►"})}),c.jsx("li",{className:"listaHorizontal",children:c.jsx("a",{href:"https://www.youtube.com/",target:"_blank",children:"Youtube ►"})}),c.jsx("li",{className:"listaHorizontal",children:c.jsx("a",{href:"https://www.smn.gob.ar/",target:"_blank",children:"Clima ►"})}),c.jsx("li",{className:"listaHorizontal",children:c.jsx("a",{children:c.jsx(Q,{to:"/Tools",children:"Más herramientas... ►"})})})]}),c.jsx("hr",{}),c.jsx("h2",{children:"Links de acceso"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"https://feedly.com/i/my",target:"_blank",children:"Noticias ►"})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Webs",children:"Páginas Especiales ►"})})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/playlist?list=PLOJvby8Q_tfGshu5XTZ23OWK8cRft5F8m",target:"_blank",children:"Jedi Order Playlist ►"})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Media",children:"Medios audiovisuales ►"})})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Comms",children:"Comunicaciones ►"})})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/SocialMedia",children:"Redes Sociales ►"})})})]}),c.jsx("br",{})]})]})})}function rU(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Medios audiovisuales"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Media/Radio",children:"Radio ►"})})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Media/Twitch",children:"Twitch ►"})})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Youtube",children:"Youtube ►"})})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Media/Streaming",children:"Streaming ►"})})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Media/Games",children:"Juegos ►"})})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/",children:"Volver ◄◄◄"})})})]})]})]})})}function iU(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(Q,{to:""}),c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Minecrafteo"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"https://docs.google.com/document/d/1b4P51y2acdchT11xjx-eywD-BodEp82eL3X0F1yKB3I/edit",target:"_blank",children:"Salvamundos ►"})}),c.jsx("hr",{}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/ocio/La_Fortaleza/IPLaFortaleza.html",target:"_blank",children:"La Fortaleza ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/ocio/odtu.html",target:"_blank",children:"Organización Dispar de Tierras Unidas ►"})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Media/Games",children:"Volver ◄◄◄"})})})]}),c.jsx("a",{className:"inicio",children:c.jsx("h2",{children:c.jsx(Q,{to:"/",children:"◄◄◄◄◄ Volver al inicio ◄◄◄◄"})})})]})]})})}function sU(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Accesos Obsoletos"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"https://plataforma.coderhouse.com/cursos",target:"_blank",children:"Coder House - Plataforma E-Learning ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://pdb.redarg.ar/home",target:"_blank",children:"Profesorado Don Bosco ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://github.com/Fedenoodt/JavaScript/tree/main",target:"_blank",children:"GitHub - JavaScript ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/javascript-es.7.pdf",target:"_blank",children:"Manual-Informatica.com - JavaScript ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=z95mZVUcJ-E&t=2756s",target:"_blank",children:"Soy Dalto - JavaScript ►"})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/",children:"Volver ◄◄◄"})})})]})]})]})})}function oU(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Radio"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"https://www.bitbox.fm/",target:"_blank",children:"Radio Bitbox 93.3 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.metro951.com/vivo/",target:"_blank",children:"Radio Metro 95.1 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=k_dcEH41OCo",target:"_blank",children:"Radio Vale 97.5 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://bluefm.com.ar/",target:"_blank",children:"Radio Blue 100.7 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fmaspen.com/category/aspen-time/",target:"_blank",children:"Radio Aspen 102.3 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.radiozoe.com.ar/",target:"_blank",children:"Radio Zoe 107.1 ►"})}),c.jsx("hr",{}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=tyVQk-BAWms",target:"_blank",children:"the bootleg boy 2 ~ Chill Radio 24/7 Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=4xDzrJKXOOY&list=TLPQMDEwOTIwMjP7aV7wyxng6g&ab_channel=LofiGirl",target:"_blank",children:"synthwave radio 🌌 - beats to chill/game to Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=ULQhvIGG27Q&ab_channel=LofiGirl",target:"_blank",children:"Halloween lofi radio 🎃 - spooky beats to get chills to Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://youtu.be/Ljm4MbCbOWY",target:"_blank",children:"Cozy Halloween Autumn Ambience 🎃🍂 with Relaxing Halloween Music and Spooky Halloween Music - Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=nSy7wpevIsY&list=PLOJvby8Q_tfG83AsSJSbxPv7-C9VUvRha&ab_channel=hiphopmusic",target:"_blank",children:"Radio Los Santos Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=wsd2xgm91nM&ab_channel=GTAFM",target:"_blank",children:"GTAV ♣ STILL SLIPPING Los Santos • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=d0hKoOw0Wuw&ab_channel=GTAFM",target:"_blank",children:"GTAV ♣ iFruit Radio • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=YYIBtojKDSc&ab_channel=GTAFM",target:"_blank",children:"GTAV ♣ Los Santos Rock Radio • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{children:"GTAV ♣ Self Radio slot ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=uZ3RFNMKcmg&ab_channel=GTAFM",target:"_blank",children:"GTAV ♣ Non Stop Pop FM • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=nxwUWlqdCFI&ab_channel=SilverAsh",target:"_blank",children:"GTAV ♣ Radio Los Santos • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=tmQqUh0xark&ab_channel=ListenToThis",target:"_blank",children:"GTAV ♣ Channel X • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=N12WWl_f3QM&ab_channel=ListenToThis",target:"_blank",children:"GTAV ♣ Rebel Radio • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=E-PFWBfRwAc&ab_channel=semmelsamu",target:"_blank",children:"GTAV ♣ Soulwax FM • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=iX2liYJZuJU&ab_channel=xcgac",target:"_blank",children:"GTAV ♣ East Los FM • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=iDFQd0AGmLs&ab_channel=GTAFM",target:"_blank",children:"GTAV ♣ West Coast Classics Radio Station • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=aaXui87cF5Y&ab_channel=GTAFM",target:"_blank",children:"GTAV ♣ Blaine County Talk Radio • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=osmrXqRuwJA&ab_channel=ListenToThis",target:"_blank",children:"GTAV ♣ The Blue Ark • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=fYi-ZoglszY&t=4308s&ab_channel=GTAFM",target:"_blank",children:"GTAV ♣ WorldWide FM • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=kEkNJRQJACI&ab_channel=videodrom83",target:"_blank",children:"GTAV ♣ FlyLo FM • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=oaNdiTLKlMA&ab_channel=ListenToThis",target:"_blank",children:"GTAV ♣ The Lowdown 91.1 • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=R9nFhKZhTJ0&ab_channel=PeterDazuk",target:"_blank",children:"GTAV ♣ The Lab Radio Station • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=AA3WjWD_hyM&ab_channel=ListenToThis",target:"_blank",children:"GTAV ♣ Radio Mirror Park • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=lCZc9y9KpY4&ab_channel=ListenToThis",target:"_blank",children:"GTAV ♣ Space 103.2 • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=y-Faj25nOhM&ab_channel=ListenToThis",target:"_blank",children:"GTAV ♣ Vinewood Boulevard Radio • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=-W6g6QUhAj0&ab_channel=Tate%27sDailySpeech",target:"_blank",children:"GTAV ♣ Blonded Los Santos 97 8 FM • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=m8HlukW1auQ&ab_channel=videodrom83",target:"_blank",children:"GTAV ♣ LSUR • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/ocio/Media/Media/Radio%20GTAV/radiogtav.html",target:"_blank",children:"GTAV ♣ Dial de radio • Youtube ►"})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Media",children:"Volver ◄◄◄"})})})]}),c.jsx("a",{className:"inicio",children:c.jsx("h2",{children:c.jsx(Q,{to:"/",children:"◄◄◄◄◄ Volver al inicio ◄◄◄◄"})})})]})]})})}function aU(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Redes Sociales"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsxs("a",{href:"https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html",children:[c.jsx("a",{href:"https://www.linkedin.com/in/federico-noodt-molins-182a30134/",target:"_blank",children:"LinkedIn Fedenoodt"})," ►"]})}),c.jsx("li",{children:c.jsxs("a",{href:"https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html",children:[c.jsx("a",{href:"https://www.facebook.com/",target:"_blank",children:"Facebook"})," ►"]})}),c.jsx("li",{children:c.jsxs("a",{href:"https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html",children:[c.jsx("a",{href:"https://www.instagram.com/?hl=es-la",target:"_blank",children:"Instagram"})," ►"]})}),c.jsx("li",{children:c.jsxs("a",{href:"https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html",children:[c.jsx("a",{href:"https://twitter.com/home",target:"_blank",children:"Twitter"})," ►"]})}),c.jsx("li",{children:c.jsxs("a",{href:"https://fedenoodt.github.io/798326_Epsilon/BHSIAI.html",children:[c.jsx("a",{href:"https://www.tiktok.com/foryou",target:"_blank",children:"TikTok"})," ►"]})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/",children:"Volver ◄◄◄"})})})]})]})]})})}function lU(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Streaming"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"https://www.primevideo.com/?ref_=dvm_pds_amz_ar_dc_s_g_mkw_sURBO2uG4-dc_pcrid_231825120471&mrntrk=slid__pgrid_42306243048_pgeo_1000073_x__ptid_kwd-45697133742",target:"_blank",children:"Amazon Prime Video ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://web.flow.com.ar/guia-de-tv?epg",target:"_blank",children:"Cablevision Flow ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.disneyplus.com/es-419/home",target:"_blank",children:"Disney+ ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://play.hbomax.com/",target:"_blank",children:"HBO Max ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://kick.com/",target:"_blank",children:"Kick ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.netflix.com/browse",target:"_blank",children:"Netflix ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.netflix.com/browse/genre/75436?bc=34399&so=yr",target:"_blank",children:"Netflix - Policiales ordenadas por año ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.starplus.com/es-419/home",target:"_blank",children:"Star+ ►"})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Media",children:"Volver ◄◄◄"})})})]}),c.jsx("a",{className:"inicio",children:c.jsx("h2",{children:c.jsx(Q,{to:"/",children:"◄◄◄◄◄ Volver al inicio ◄◄◄◄"})})})]}),c.jsxs("footer",{children:[c.jsx("hr",{}),c.jsxs("p",{className:"tip",children:[c.jsx("b",{children:"TIP:"}),' Recordar con respecto a Flow, que hay que usar directamente este acceso, e ingresar directo a "Guía de TV". Flow es muy inestable como plataforma.']})]})]})})}function uU(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Herramientas"}),c.jsx("hr",{}),c.jsxs("ul",{children:[c.jsx("h2",{children:"Generales"}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Tools/Obsolet",children:"Accesos directos obsoletos ►"})})}),c.jsx("h2",{children:"Programación"}),c.jsx("li",{children:c.jsx("a",{href:"https://rahuldkjain.github.io/gh-profile-readme-generator/",target:"_blank",children:"Github readme generator ►"})}),c.jsx("li",{children:c.jsx("a",{href:"about:blank",target:"_blank",children:"P&aacutegina en blanco ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.favicon.cc/",target:"_blank",children:"Creador de iconos web ►"})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Tools/TestArea",children:"Zona de pruebas web ►"})})}),c.jsx("h2",{children:"Multimedia"}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=gs_cochwfcY&pp=ygUKcGlwIHNvbmlkbw%3D%3D",target:"_blank",children:"Sonido para pruebas ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.ilovepdf.com/es/html-a-pdf",target:"_blank",children:"Convertor HTML a PDF ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjBh57GgsCCAxUZrJUCHQr9D7YQFnoECBkQAQ&url=https%3A%2F%2Fnotube.site%2Fes%2Fyoutube-app-v103&usg=AOvVaw3zAxVgk6KBu9ZmRovL7B56&opi=89978449",target:"_blank",children:"Convertor Youtube a MP3 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://imagen.online-convert.com/es/convertir-a-png",target:"_blank",children:"Imagen PNG transparente ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.site24x7.com/es/tools/selector-de-codigo-color.html",target:"_blank",children:"Detector RGB de imagen ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://rgbacolorpicker.com/",target:"_blank",children:"Selector paleta RGB ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://ezgif.com/webp-to-gif",target:"_blank",children:"Convertidor WEBP a GIF ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://convertio.co/es/mp4-gif/",target:"_blank",children:"Convertidor MP4 a GIF ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://convertio.co/es/webm-gif/",target:"_blank",children:"Convertidor WEBM a GIF ►"})}),c.jsx("h2",{children:"Servicios"}),c.jsx("li",{children:c.jsx("a",{href:"https://calendar.google.com/calendar/u/1/r?tab=oc",target:"_blank",children:"Calendario"})}),c.jsx("li",{children:c.jsx("a",{href:"https://translate.google.com.ar/",target:"_blank",children:"Traductor de Google ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://classroom.google.com/u/1/h",target:"_blank",children:"Classroom"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.mercadolibre.com.ar/",target:"_blank",children:"Mercado Libre ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://workspace.google.com/intl/es-419/products/forms/?utm_source=google&utm_medium=cpc&utm_campaign=latam-AR-all-es-dr-bkws-all-all-trial-e-dr-1011272-LUAC0011853&utm_content=text-ad-none-any-DEV_c-CRE_479426435746-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20Forms-KWID_43700057710499709-kwd-10647024857&utm_term=KW_google%20forms-ST_google%20forms&gclid=Cj0KCQjwkruVBhCHARIsACVIiOwoV_-s-dU6S2iarog5B7sprTXCVZSfzhnnItRt9ZoVj11ckd869ywaAk1fEALw_wcB&gclsrc=aw.ds",target:"_blank",children:"Google Formularios ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/vida/moneda/index.html",target:"_blank",children:"Convertidor de Pesos a Dólar automático ►"})}),c.jsx("h2",{children:"Servicio técnico"}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/maintenance.png",target:"_blank",children:'Imagen "En mantenimiento..." ►'})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/screenToner.png",target:"_blank",children:"Imagen para arreglar color de pantalla ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/imagenPruebaSaturacionBlancos.png",target:"_blank",children:"Imagen de tonos de blanco ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.onlinemictest.com/es/prueba-de-mouse/",target:"_blank",children:"Probador de entradas para mouse ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.onlinemictest.com/es/prueba-de-teclado/",target:"_blank",children:"Probador de entradas para teclado ►"})}),c.jsx("li",{children:c.jsx("a",{href:"http://sps.fibertel.com.ar/speedtest/",target:"_blank",children:"Speedtest Fibertel ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.speedtest.net/es",target:"_blank",children:"Speedtest Ookla ►"})}),c.jsx("h2",{children:"Transporte"}),c.jsx("li",{children:c.jsx("a",{href:"https://www.google.com.ar/maps/@-34.607613,-58.4515826,15z",target:"_blank",children:"Google Maps ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.omnilineas.com.ar/",target:"_blank",children:"OmniLíneas ►"})}),c.jsx("h2",{children:"Cine"}),c.jsx("li",{children:c.jsx("a",{href:"https://www.doesthedogdie.com/",target:"_blank",children:"Does the dog die? ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://carto.maps.arcgis.com/apps/CEWebViewer/viewer.html?3dWebScene=e87eb53174ab4ba09026e90e1d7c6557",target:"_blank",children:"Galaxia Star Wars ►"})}),c.jsx("h2",{children:"Videojuegos"}),c.jsx("li",{children:c.jsx("a",{href:"https://www.systemrequirementslab.com/cyri",target:"_blank",children:"Can YOU Run It? ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://static.wikigta.org/nl/images/8/83/V.png",target:"_blank",children:"Mapa de Grand Theft Auto V ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=xPt3oE069Xs&list=PL26y6a0sSX_B-l8ccARWgYP3nw3NKHzSF&pp=iAQB",target:"_blank",children:"GTA V ambiente ASMR ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/watch?v=hVVn1vuHKUo&list=PLOJvby8Q_tfFUBpJgolADisgj-rI-bxBL&pp=gAQBiAQB",target:"_blank",children:"Watch Dogs 2 ambiente ASMR ►"})}),c.jsx("h2",{children:"Ocio"}),c.jsx("li",{children:c.jsx("a",{href:"https://c.tenor.com/2wR9-9cmrjMAAAAC/ahora-vengo-hernan-drago.gif",target:"_blank",children:"Ahora vengo ►"})}),c.jsx("li",{children:c.jsx("a",{href:"${driverList}",target:"_blank",children:"Tour de paseos ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/playlist?list=PLOJvby8Q_tfGmVbV4xxkfLjoQF6FjybsL",target:"_blank",children:"Colección de salvapantallas ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://ayuda.ch-sistemas.com/wp-content/uploads/2018/05/cabina4.png",target:"_blank",children:"Fondo de telón ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://i.pinimg.com/originals/ae/a0/9d/aea09d635db4444475efac0b42e0ac1b.gif",target:"_blank",children:"Bandera Argentina ►"})}),c.jsx("hr",{}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/",children:"Volver ◄◄◄"})})})]})]})]})})}function cU(){return c.jsxs(c.Fragment,{children:[" ",c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Área para pruebas web en línea"}),c.jsxs("ul",{children:[c.jsx("h2",{children:"Zona 1"}),c.jsx("li",{children:c.jsx("a",{href:"https://github.com/Fedenoodt/fedenoodt.github.io/tree/gh-pages/Pagina_personal/areaPruebas/sector1",target:"_blank",children:"Repositorio ►"})}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/areaPruebas/sector1/uno.html",target:"_blank",children:"Área 1 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/areaPruebas/sector1/dos.html",target:"_blank",children:"Área 2 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/areaPruebas/sector1/tres.html",target:"_blank",children:"Área 3 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/areaPruebas/sector1/cuatro.html",target:"_blank",children:"Área 4 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/areaPruebas/sector1/cinco.html",target:"_blank",children:"Área 5 ►"})}),c.jsx("h2",{children:"Zona 2"}),c.jsx("li",{children:c.jsx("a",{href:"https://github.com/Fedenoodt/fedenoodt.github.io/tree/gh-pages/Pagina_personal/areaPruebas/sector2",target:"_blank",children:"Repositorio ►"})}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/areaPruebas/sector2/uno.html",target:"_blank",children:"Área 1 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/areaPruebas/sector2/dos.html",target:"_blank",children:"Área 2 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/areaPruebas/sector2/tres.html",target:"_blank",children:"Área 3 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/areaPruebas/sector2/cuatro.html",target:"_blank",children:"Área 4 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/areaPruebas/sector2/cinco.html",target:"_blank",children:"Área 5 ►"})}),c.jsx("br",{}),c.jsx("br",{}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/",children:"Volver ◄◄◄"})})})]})]})]})})]})}function hU(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Twitch"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"https://www.twitch.tv/",target:"_blank",children:"Twitch ►"})}),c.jsx("br",{}),c.jsx("li",{children:c.jsx("a",{href:"https://www.twitch.tv/4fungamingg",target:"_blank",children:"4fungamingg ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.twitch.tv/abyls",target:"_blank",children:"Abyls ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.twitch.tv/auronplay",target:"_blank",children:"auronplay ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.twitch.tv/elperitaafk",target:"_blank",children:"eLPeritaAFK ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.twitch.tv/elrichmc",target:"_blank",children:"ElRichMC ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.twitch.tv/ibai",target:"_blank",children:"Ibai ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.twitch.tv/nuvia_ouo",target:"_blank",children:"Nuvia_OuO ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.twitch.tv/polispol1",target:"_blank",children:"polispol1 ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.twitch.tv/tanizen",target:"_blank",children:"Tanizen ►"})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Media",children:"Volver◄◄"})})})]}),c.jsx("a",{className:"inicio",children:c.jsx("h2",{children:c.jsx(Q,{to:"/",children:"◄◄◄◄◄ Volver al inicio ◄◄◄◄"})})})]}),c.jsxs("footer",{children:[c.jsx("hr",{}),c.jsxs("p",{class:"tip",children:[c.jsx("b",{children:"TIP:"}),' Recordar el uso de el "Programador de tareas de Windows" para hacer que un stream, o lista de Youtube se encienda de manera automática.']})]})]})})}function dU(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Páginas Especiales"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/vida/inicio.html",target:"_blank",children:"Pagina Oficial de Fedenoodt ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://fedenoodt.github.io/Pagina_personal/vida/nexoGrupote.html",target:"_blank",children:"Nexo Grupote ►"})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Media",children:"Volver◄◄"})})})]})]})]})})}function fU(){return c.jsx("div",{className:"mainBox",children:c.jsxs("div",{className:"container",children:[c.jsx(St,{}),c.jsxs("div",{children:[c.jsx("h2",{children:"Youtube"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/feed/library",target:"_blank",children:"Biblioteca Youtube"})}),c.jsx("br",{}),c.jsx("li",{children:c.jsx("a",{href:"https://myactivity.google.com/u/1/product/youtube?hl=es-419&utm_medium=web&utm_source=youtube",target:"_blank",children:"Historial por reloj Youtube"})}),c.jsx("br",{}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/user/xFaRgAnx",target:"_blank",children:"xFaRgAnx YT ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/@TheBraxXter",target:"_blank",children:"BraxXter ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/user/ElRichMC",target:"_blank",children:"ElRichMC - Minecraft & Gaming a otro nivel ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/user/HiperPiece",target:"_blank",children:"Hyper ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/channel/UCSJXasOBzUlztNbpkRDA53w",target:"_blank",children:"La Sombra del Imperio ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/channel/UCFR2oaNj02WnXkOgLH0iqOA",target:"_blank",children:"Auron ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/channel/UCaY_-ksFSQtTGk0y1HA_3YQ",target:"_blank",children:"Ibai Llanos ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/@TheWildProject",target:"_blank",children:"The Wild Project ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/user/AuronPlay",target:"_blank",children:"AuronPlay ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/user/SoyFarfadox",target:"_blank",children:"Farfadox"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/c/RaiCanGTA",target:"_blank",children:"Rai Can ►"})}),c.jsx("li",{children:c.jsx("a",{href:"https://www.youtube.com/user/danilirri",target:"_blank",children:"CodigoRojoARG ►"})}),c.jsx("li",{children:c.jsx("a",{children:c.jsx(Q,{to:"/Media",children:"Volver◄◄"})})})]}),c.jsx("a",{className:"inicio",children:c.jsx("h2",{children:c.jsx(Q,{to:"/",children:"◄◄◄◄◄ Volver al inicio ◄◄◄◄"})})})]}),c.jsxs("footer",{children:[c.jsx("hr",{}),c.jsxs("p",{class:"tip",children:[c.jsx("b",{children:"TIP:"}),' Recordar el uso de "Youtube NonStop" para el cese de publicidad, y "SmartVideo For Youtube" para nivelar el mínimo gráfico automático de los videos Youtube. Ambas como extenciones de Chrome y Firefox.']})]})]})})}function pU(){return c.jsx(Mk,{children:c.jsxs(bk,{children:[c.jsx(Ye,{path:"/",element:c.jsx(nU,{})}),c.jsx(Ye,{path:"/Clock",element:c.jsx(ZF,{})}),c.jsx(Ye,{path:"/Comms",element:c.jsx(eU,{})}),c.jsx(Ye,{path:"/Media/Games",element:c.jsx(tU,{})}),c.jsx(Ye,{path:"/Header",element:c.jsx(St,{})}),c.jsx(Ye,{path:"/Media",element:c.jsx(rU,{})}),c.jsx(Ye,{path:"/Media/Games/Minecraft",element:c.jsx(iU,{})}),c.jsx(Ye,{path:"/Tools/Obsolet",element:c.jsx(sU,{})}),c.jsx(Ye,{path:"/Tools/TestArea",element:c.jsx(cU,{})}),c.jsx(Ye,{path:"/Media/Radio",element:c.jsx(oU,{})}),c.jsx(Ye,{path:"/SocialMedia",element:c.jsx(aU,{})}),c.jsx(Ye,{path:"/Media/Streaming",element:c.jsx(lU,{})}),c.jsx(Ye,{path:"/Tools",element:c.jsx(uU,{})}),c.jsx(Ye,{path:"/Media/Twitch",element:c.jsx(hU,{})}),c.jsx(Ye,{path:"/Webs",element:c.jsx(dU,{})}),c.jsx(Ye,{path:"/Media/Youtube",element:c.jsx(fU,{})})]})})}gf.createRoot(document.getElementById("root")).render(c.jsx(wI.StrictMode,{children:c.jsx(pU,{})}));
