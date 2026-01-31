(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))c(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function s(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(f){if(f.ep)return;f.ep=!0;const p=s(f);fetch(f.href,p)}})();function Ab(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var uc={exports:{}},er={};var dm;function Rb(){if(dm)return er;dm=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(c,f,p){var m=null;if(p!==void 0&&(m=""+p),f.key!==void 0&&(m=""+f.key),"key"in f){p={};for(var y in f)y!=="key"&&(p[y]=f[y])}else p=f;return f=p.ref,{$$typeof:l,type:c,key:m,ref:f!==void 0?f:null,props:p}}return er.Fragment=o,er.jsx=s,er.jsxs=s,er}var pm;function zb(){return pm||(pm=1,uc.exports=Rb()),uc.exports}var u=zb(),fc={exports:{}},ue={};var mm;function Ob(){if(mm)return ue;mm=1;var l=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),m=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),B=Symbol.iterator;function Z(x){return x===null||typeof x!="object"?null:(x=B&&x[B]||x["@@iterator"],typeof x=="function"?x:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function Y(x,z,k){this.props=x,this.context=z,this.refs=A,this.updater=k||R}Y.prototype.isReactComponent={},Y.prototype.setState=function(x,z){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,z,"setState")},Y.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function V(){}V.prototype=Y.prototype;function D(x,z,k){this.props=x,this.context=z,this.refs=A,this.updater=k||R}var J=D.prototype=new V;J.constructor=D,w(J,Y.prototype),J.isPureReactComponent=!0;var I=Array.isArray;function se(){}var F={H:null,A:null,T:null,S:null},he=Object.prototype.hasOwnProperty;function ge(x,z,k){var K=k.ref;return{$$typeof:l,type:x,key:z,ref:K!==void 0?K:null,props:k}}function qe(x,z){return ge(x.type,z,x.props)}function Ye(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function De(x){var z={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(k){return z[k]})}var ze=/\/+/g;function W(x,z){return typeof x=="object"&&x!==null&&x.key!=null?De(""+x.key):z.toString(36)}function ie(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(se,se):(x.status="pending",x.then(function(z){x.status==="pending"&&(x.status="fulfilled",x.value=z)},function(z){x.status==="pending"&&(x.status="rejected",x.reason=z)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function _(x,z,k,K,te){var re=typeof x;(re==="undefined"||re==="boolean")&&(x=null);var ce=!1;if(x===null)ce=!0;else switch(re){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(x.$$typeof){case l:case o:ce=!0;break;case S:return ce=x._init,_(ce(x._payload),z,k,K,te)}}if(ce)return te=te(x),ce=K===""?"."+W(x,0):K,I(te)?(k="",ce!=null&&(k=ce.replace(ze,"$&/")+"/"),_(te,z,k,"",function(fe){return fe})):te!=null&&(Ye(te)&&(te=qe(te,k+(te.key==null||x&&x.key===te.key?"":(""+te.key).replace(ze,"$&/")+"/")+ce)),z.push(te)),1;ce=0;var Ne=K===""?".":K+":";if(I(x))for(var ae=0;ae<x.length;ae++)K=x[ae],re=Ne+W(K,ae),ce+=_(K,z,k,re,te);else if(ae=Z(x),typeof ae=="function")for(x=ae.call(x),ae=0;!(K=x.next()).done;)K=K.value,re=Ne+W(K,ae++),ce+=_(K,z,k,re,te);else if(re==="object"){if(typeof x.then=="function")return _(ie(x),z,k,K,te);throw z=String(x),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return ce}function $(x,z,k){if(x==null)return x;var K=[],te=0;return _(x,K,"","",function(re){return z.call(k,re,te++)}),K}function P(x){if(x._status===-1){var z=x._result;z=z(),z.then(function(k){(x._status===0||x._status===-1)&&(x._status=1,x._result=k)},function(k){(x._status===0||x._status===-1)&&(x._status=2,x._result=k)}),x._status===-1&&(x._status=0,x._result=z)}if(x._status===1)return x._result.default;throw x._result}var G=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},H={map:$,forEach:function(x,z,k){$(x,function(){z.apply(this,arguments)},k)},count:function(x){var z=0;return $(x,function(){z++}),z},toArray:function(x){return $(x,function(z){return z})||[]},only:function(x){if(!Ye(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return ue.Activity=v,ue.Children=H,ue.Component=Y,ue.Fragment=s,ue.Profiler=f,ue.PureComponent=D,ue.StrictMode=c,ue.Suspense=b,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ue.__COMPILER_RUNTIME={__proto__:null,c:function(x){return F.H.useMemoCache(x)}},ue.cache=function(x){return function(){return x.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(x,z,k){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var K=w({},x.props),te=x.key;if(z!=null)for(re in z.key!==void 0&&(te=""+z.key),z)!he.call(z,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&z.ref===void 0||(K[re]=z[re]);var re=arguments.length-2;if(re===1)K.children=k;else if(1<re){for(var ce=Array(re),Ne=0;Ne<re;Ne++)ce[Ne]=arguments[Ne+2];K.children=ce}return ge(x.type,te,K)},ue.createContext=function(x){return x={$$typeof:m,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:p,_context:x},x},ue.createElement=function(x,z,k){var K,te={},re=null;if(z!=null)for(K in z.key!==void 0&&(re=""+z.key),z)he.call(z,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(te[K]=z[K]);var ce=arguments.length-2;if(ce===1)te.children=k;else if(1<ce){for(var Ne=Array(ce),ae=0;ae<ce;ae++)Ne[ae]=arguments[ae+2];te.children=Ne}if(x&&x.defaultProps)for(K in ce=x.defaultProps,ce)te[K]===void 0&&(te[K]=ce[K]);return ge(x,re,te)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(x){return{$$typeof:y,render:x}},ue.isValidElement=Ye,ue.lazy=function(x){return{$$typeof:S,_payload:{_status:-1,_result:x},_init:P}},ue.memo=function(x,z){return{$$typeof:g,type:x,compare:z===void 0?null:z}},ue.startTransition=function(x){var z=F.T,k={};F.T=k;try{var K=x(),te=F.S;te!==null&&te(k,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(se,G)}catch(re){G(re)}finally{z!==null&&k.types!==null&&(z.types=k.types),F.T=z}},ue.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ue.use=function(x){return F.H.use(x)},ue.useActionState=function(x,z,k){return F.H.useActionState(x,z,k)},ue.useCallback=function(x,z){return F.H.useCallback(x,z)},ue.useContext=function(x){return F.H.useContext(x)},ue.useDebugValue=function(){},ue.useDeferredValue=function(x,z){return F.H.useDeferredValue(x,z)},ue.useEffect=function(x,z){return F.H.useEffect(x,z)},ue.useEffectEvent=function(x){return F.H.useEffectEvent(x)},ue.useId=function(){return F.H.useId()},ue.useImperativeHandle=function(x,z,k){return F.H.useImperativeHandle(x,z,k)},ue.useInsertionEffect=function(x,z){return F.H.useInsertionEffect(x,z)},ue.useLayoutEffect=function(x,z){return F.H.useLayoutEffect(x,z)},ue.useMemo=function(x,z){return F.H.useMemo(x,z)},ue.useOptimistic=function(x,z){return F.H.useOptimistic(x,z)},ue.useReducer=function(x,z,k){return F.H.useReducer(x,z,k)},ue.useRef=function(x){return F.H.useRef(x)},ue.useState=function(x){return F.H.useState(x)},ue.useSyncExternalStore=function(x,z,k){return F.H.useSyncExternalStore(x,z,k)},ue.useTransition=function(){return F.H.useTransition()},ue.version="19.2.3",ue}var hm;function Fc(){return hm||(hm=1,fc.exports=Ob()),fc.exports}var j=Fc(),dc={exports:{}},tr={},pc={exports:{}},mc={};var gm;function Cb(){return gm||(gm=1,(function(l){function o(_,$){var P=_.length;_.push($);e:for(;0<P;){var G=P-1>>>1,H=_[G];if(0<f(H,$))_[G]=$,_[P]=H,P=G;else break e}}function s(_){return _.length===0?null:_[0]}function c(_){if(_.length===0)return null;var $=_[0],P=_.pop();if(P!==$){_[0]=P;e:for(var G=0,H=_.length,x=H>>>1;G<x;){var z=2*(G+1)-1,k=_[z],K=z+1,te=_[K];if(0>f(k,P))K<H&&0>f(te,k)?(_[G]=te,_[K]=P,G=K):(_[G]=k,_[z]=P,G=z);else if(K<H&&0>f(te,P))_[G]=te,_[K]=P,G=K;else break e}}return $}function f(_,$){var P=_.sortIndex-$.sortIndex;return P!==0?P:_.id-$.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var m=Date,y=m.now();l.unstable_now=function(){return m.now()-y}}var b=[],g=[],S=1,v=null,B=3,Z=!1,R=!1,w=!1,A=!1,Y=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function J(_){for(var $=s(g);$!==null;){if($.callback===null)c(g);else if($.startTime<=_)c(g),$.sortIndex=$.expirationTime,o(b,$);else break;$=s(g)}}function I(_){if(w=!1,J(_),!R)if(s(b)!==null)R=!0,se||(se=!0,De());else{var $=s(g);$!==null&&ie(I,$.startTime-_)}}var se=!1,F=-1,he=5,ge=-1;function qe(){return A?!0:!(l.unstable_now()-ge<he)}function Ye(){if(A=!1,se){var _=l.unstable_now();ge=_;var $=!0;try{e:{R=!1,w&&(w=!1,V(F),F=-1),Z=!0;var P=B;try{t:{for(J(_),v=s(b);v!==null&&!(v.expirationTime>_&&qe());){var G=v.callback;if(typeof G=="function"){v.callback=null,B=v.priorityLevel;var H=G(v.expirationTime<=_);if(_=l.unstable_now(),typeof H=="function"){v.callback=H,J(_),$=!0;break t}v===s(b)&&c(b),J(_)}else c(b);v=s(b)}if(v!==null)$=!0;else{var x=s(g);x!==null&&ie(I,x.startTime-_),$=!1}}break e}finally{v=null,B=P,Z=!1}$=void 0}}finally{$?De():se=!1}}}var De;if(typeof D=="function")De=function(){D(Ye)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,W=ze.port2;ze.port1.onmessage=Ye,De=function(){W.postMessage(null)}}else De=function(){Y(Ye,0)};function ie(_,$){F=Y(function(){_(l.unstable_now())},$)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(_){_.callback=null},l.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):he=0<_?Math.floor(1e3/_):5},l.unstable_getCurrentPriorityLevel=function(){return B},l.unstable_next=function(_){switch(B){case 1:case 2:case 3:var $=3;break;default:$=B}var P=B;B=$;try{return _()}finally{B=P}},l.unstable_requestPaint=function(){A=!0},l.unstable_runWithPriority=function(_,$){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var P=B;B=_;try{return $()}finally{B=P}},l.unstable_scheduleCallback=function(_,$,P){var G=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?G+P:G):P=G,_){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=P+H,_={id:S++,callback:$,priorityLevel:_,startTime:P,expirationTime:H,sortIndex:-1},P>G?(_.sortIndex=P,o(g,_),s(b)===null&&_===s(g)&&(w?(V(F),F=-1):w=!0,ie(I,P-G))):(_.sortIndex=H,o(b,_),R||Z||(R=!0,se||(se=!0,De()))),_},l.unstable_shouldYield=qe,l.unstable_wrapCallback=function(_){var $=B;return function(){var P=B;B=$;try{return _.apply(this,arguments)}finally{B=P}}}})(mc)),mc}var bm;function _b(){return bm||(bm=1,pc.exports=Cb()),pc.exports}var hc={exports:{}},it={};var ym;function Mb(){if(ym)return it;ym=1;var l=Fc();function o(b){var g="https://react.dev/errors/"+b;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)g+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+b+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(b,g,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:v==null?null:""+v,children:b,containerInfo:g,implementation:S}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(b,g){if(b==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,it.createPortal=function(b,g){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(o(299));return p(b,g,null,S)},it.flushSync=function(b){var g=m.T,S=c.p;try{if(m.T=null,c.p=2,b)return b()}finally{m.T=g,c.p=S,c.d.f()}},it.preconnect=function(b,g){typeof b=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,c.d.C(b,g))},it.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},it.preinit=function(b,g){if(typeof b=="string"&&g&&typeof g.as=="string"){var S=g.as,v=y(S,g.crossOrigin),B=typeof g.integrity=="string"?g.integrity:void 0,Z=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;S==="style"?c.d.S(b,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:B,fetchPriority:Z}):S==="script"&&c.d.X(b,{crossOrigin:v,integrity:B,fetchPriority:Z,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},it.preinitModule=function(b,g){if(typeof b=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var S=y(g.as,g.crossOrigin);c.d.M(b,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&c.d.M(b)},it.preload=function(b,g){if(typeof b=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var S=g.as,v=y(S,g.crossOrigin);c.d.L(b,S,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},it.preloadModule=function(b,g){if(typeof b=="string")if(g){var S=y(g.as,g.crossOrigin);c.d.m(b,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else c.d.m(b)},it.requestFormReset=function(b){c.d.r(b)},it.unstable_batchedUpdates=function(b,g){return b(g)},it.useFormState=function(b,g,S){return m.H.useFormState(b,g,S)},it.useFormStatus=function(){return m.H.useHostTransitionStatus()},it.version="19.2.3",it}var xm;function Db(){if(xm)return hc.exports;xm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),hc.exports=Mb(),hc.exports}var vm;function Ub(){if(vm)return tr;vm=1;var l=_b(),o=Fc(),s=Db();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(p(e)!==e)throw Error(c(188))}function g(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var r=a.return;if(r===null)break;var i=r.alternate;if(i===null){if(n=r.return,n!==null){a=n;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===a)return b(r),e;if(i===n)return b(r),t;i=i.sibling}throw Error(c(188))}if(a.return!==n.return)a=r,n=i;else{for(var d=!1,h=r.child;h;){if(h===a){d=!0,a=r,n=i;break}if(h===n){d=!0,n=r,a=i;break}h=h.sibling}if(!d){for(h=i.child;h;){if(h===a){d=!0,a=i,n=r;break}if(h===n){d=!0,n=i,a=r;break}h=h.sibling}if(!d)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function S(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=S(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,B=Symbol.for("react.element"),Z=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),D=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),qe=Symbol.for("react.memo_cache_sentinel"),Ye=Symbol.iterator;function De(e){return e===null||typeof e!="object"?null:(e=Ye&&e[Ye]||e["@@iterator"],typeof e=="function"?e:null)}var ze=Symbol.for("react.client.reference");function W(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ze?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case Y:return"Profiler";case A:return"StrictMode";case I:return"Suspense";case se:return"SuspenseList";case ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case R:return"Portal";case D:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:W(e.type)||"Memo";case he:t=e._payload,e=e._init;try{return W(e(t))}catch{}}return null}var ie=Array.isArray,_=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},G=[],H=-1;function x(e){return{current:e}}function z(e){0>H||(e.current=G[H],G[H]=null,H--)}function k(e,t){H++,G[H]=e.current,e.current=t}var K=x(null),te=x(null),re=x(null),ce=x(null);function Ne(e,t){switch(k(re,t),k(te,e),k(K,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Up(t),e=Lp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(K),k(K,e)}function ae(){z(K),z(te),z(re)}function fe(e){e.memoizedState!==null&&k(ce,e);var t=K.current,a=Lp(t,e.type);t!==a&&(k(te,e),k(K,a))}function Oe(e){te.current===e&&(z(K),z(te)),ce.current===e&&(z(ce),$l._currentValue=P)}var rt,ct;function We(e){if(rt===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);rt=t&&t[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rt+e+ct}var pr=!1;function Ja(e,t){if(!e||pr)return"";pr=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(L){var M=L}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(L){M=L}e.call(Q.prototype)}}else{try{throw Error()}catch(L){M=L}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(L){if(L&&M&&typeof L.stack=="string")return[L.stack,M.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),d=i[0],h=i[1];if(d&&h){var E=d.split(`
`),C=h.split(`
`);for(r=n=0;n<E.length&&!E[n].includes("DetermineComponentFrameRoot");)n++;for(;r<C.length&&!C[r].includes("DetermineComponentFrameRoot");)r++;if(n===E.length||r===C.length)for(n=E.length-1,r=C.length-1;1<=n&&0<=r&&E[n]!==C[r];)r--;for(;1<=n&&0<=r;n--,r--)if(E[n]!==C[r]){if(n!==1||r!==1)do if(n--,r--,0>r||E[n]!==C[r]){var q=`
`+E[n].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=n&&0<=r);break}}}finally{pr=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?We(a):""}function Ki(e,t){switch(e.tag){case 26:case 27:case 5:return We(e.type);case 16:return We("Lazy");case 13:return e.child!==t&&t!==null?We("Suspense Fallback"):We("Suspense");case 19:return We("SuspenseList");case 0:case 15:return Ja(e.type,!1);case 11:return Ja(e.type.render,!1);case 1:return Ja(e.type,!0);case 31:return We("Activity");default:return""}}function fu(e){try{var t="",a=null;do t+=Ki(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ji=Object.prototype.hasOwnProperty,Fi=l.unstable_scheduleCallback,$i=l.unstable_cancelCallback,rg=l.unstable_shouldYield,ig=l.unstable_requestPaint,St=l.unstable_now,og=l.unstable_getCurrentPriorityLevel,du=l.unstable_ImmediatePriority,pu=l.unstable_UserBlockingPriority,mr=l.unstable_NormalPriority,sg=l.unstable_LowPriority,mu=l.unstable_IdlePriority,cg=l.log,ug=l.unstable_setDisableYieldValue,sl=null,Et=null;function Ea(e){if(typeof cg=="function"&&ug(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(sl,e)}catch{}}var Nt=Math.clz32?Math.clz32:pg,fg=Math.log,dg=Math.LN2;function pg(e){return e>>>=0,e===0?32:31-(fg(e)/dg|0)|0}var hr=256,gr=262144,br=4194304;function Fa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yr(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var h=n&134217727;return h!==0?(n=h&~i,n!==0?r=Fa(n):(d&=h,d!==0?r=Fa(d):a||(a=h&~e,a!==0&&(r=Fa(a))))):(h=n&~i,h!==0?r=Fa(h):d!==0?r=Fa(d):a||(a=n&~e,a!==0&&(r=Fa(a)))),r===0?0:t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:r}function cl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hu(){var e=br;return br<<=1,(br&62914560)===0&&(br=4194304),e}function Wi(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ul(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hg(e,t,a,n,r,i){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,E=e.expirationTimes,C=e.hiddenUpdates;for(a=d&~a;0<a;){var q=31-Nt(a),Q=1<<q;h[q]=0,E[q]=-1;var M=C[q];if(M!==null)for(C[q]=null,q=0;q<M.length;q++){var L=M[q];L!==null&&(L.lane&=-536870913)}a&=~Q}n!==0&&gu(e,n,0),i!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=i&~(d&~t))}function gu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Nt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function bu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Nt(a),r=1<<n;r&t|e[n]&t&&(e[n]|=t),a&=~r}}function yu(e,t){var a=t&-t;return a=(a&42)!==0?1:Ii(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ii(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xu(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:rm(e.type))}function vu(e,t){var a=$.p;try{return $.p=e,t()}finally{$.p=a}}var Na=Math.random().toString(36).slice(2),et="__reactFiber$"+Na,dt="__reactProps$"+Na,yn="__reactContainer$"+Na,eo="__reactEvents$"+Na,gg="__reactListeners$"+Na,bg="__reactHandles$"+Na,Su="__reactResources$"+Na,fl="__reactMarker$"+Na;function to(e){delete e[et],delete e[dt],delete e[eo],delete e[gg],delete e[bg]}function xn(e){var t=e[et];if(t)return t;for(var a=e.parentNode;a;){if(t=a[yn]||a[et]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Xp(e);e!==null;){if(a=e[et])return a;e=Xp(e)}return t}e=a,a=e.parentNode}return null}function vn(e){if(e=e[et]||e[yn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function dl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Sn(e){var t=e[Su];return t||(t=e[Su]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ie(e){e[fl]=!0}var Eu=new Set,Nu={};function $a(e,t){En(e,t),En(e+"Capture",t)}function En(e,t){for(Nu[e]=t,e=0;e<t.length;e++)Eu.add(t[e])}var yg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wu={},ju={};function xg(e){return Ji.call(ju,e)?!0:Ji.call(wu,e)?!1:yg.test(e)?ju[e]=!0:(wu[e]=!0,!1)}function xr(e,t,a){if(xg(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function vr(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function aa(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vg(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){a=""+d,i.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ao(e){if(!e._valueTracker){var t=Tu(e)?"checked":"value";e._valueTracker=vg(e,t,""+e[t])}}function Au(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Tu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Sr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sg=/[\n"\\]/g;function Ut(e){return e.replace(Sg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function no(e,t,a,n,r,i,d,h){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dt(t)):e.value!==""+Dt(t)&&(e.value=""+Dt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?lo(e,d,Dt(t)):a!=null?lo(e,d,Dt(a)):n!=null&&e.removeAttribute("value"),r==null&&i!=null&&(e.defaultChecked=!!i),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Dt(h):e.removeAttribute("name")}function Ru(e,t,a,n,r,i,d,h){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ao(e);return}a=a!=null?""+Dt(a):"",t=t!=null?""+Dt(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}n=n??r,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=h?e.checked:!!n,e.defaultChecked=!!n,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),ao(e)}function lo(e,t,a){t==="number"&&Sr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Nn(e,t,a,n){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Dt(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,n&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function zu(e,t,a){if(t!=null&&(t=""+Dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Dt(a):""}function Ou(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(ie(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Dt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),ao(e)}function wn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Eg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Eg.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function _u(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var r in t)n=t[r],t.hasOwnProperty(r)&&a[r]!==n&&Cu(e,r,n)}else for(var i in t)t.hasOwnProperty(i)&&Cu(e,i,t[i])}function ro(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ng=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Er(e){return wg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function na(){}var io=null;function oo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jn=null,Tn=null;function Mu(e){var t=vn(e);if(t&&(e=t.stateNode)){var a=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(no(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ut(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var r=n[dt]||null;if(!r)throw Error(c(90));no(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Au(n)}break e;case"textarea":zu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Nn(e,!!a.multiple,t,!1)}}}var so=!1;function Du(e,t,a){if(so)return e(t,a);so=!0;try{var n=e(t);return n}finally{if(so=!1,(jn!==null||Tn!==null)&&(ci(),jn&&(t=jn,e=Tn,Tn=jn=null,Mu(t),e)))for(t=0;t<e.length;t++)Mu(e[t])}}function pl(e,t){var a=e.stateNode;if(a===null)return null;var n=a[dt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),co=!1;if(la)try{var ml={};Object.defineProperty(ml,"passive",{get:function(){co=!0}}),window.addEventListener("test",ml,ml),window.removeEventListener("test",ml,ml)}catch{co=!1}var wa=null,uo=null,Nr=null;function Uu(){if(Nr)return Nr;var e,t=uo,a=t.length,n,r="value"in wa?wa.value:wa.textContent,i=r.length;for(e=0;e<a&&t[e]===r[e];e++);var d=a-e;for(n=1;n<=d&&t[a-n]===r[i-n];n++);return Nr=r.slice(e,1<n?1-n:void 0)}function wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jr(){return!0}function Lu(){return!1}function pt(e){function t(a,n,r,i,d){this._reactName=a,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?jr:Lu,this.isPropagationStopped=Lu,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jr)},persist:function(){},isPersistent:jr}),t}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tr=pt(Wa),hl=v({},Wa,{view:0,detail:0}),jg=pt(hl),fo,po,gl,Ar=v({},hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ho,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gl&&(gl&&e.type==="mousemove"?(fo=e.screenX-gl.screenX,po=e.screenY-gl.screenY):po=fo=0,gl=e),fo)},movementY:function(e){return"movementY"in e?e.movementY:po}}),ku=pt(Ar),Tg=v({},Ar,{dataTransfer:0}),Ag=pt(Tg),Rg=v({},hl,{relatedTarget:0}),mo=pt(Rg),zg=v({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=pt(zg),Cg=v({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_g=pt(Cg),Mg=v({},Wa,{data:0}),Bu=pt(Mg),Dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lg[e])?!!t[e]:!1}function ho(){return kg}var Bg=v({},hl,{key:function(e){if(e.key){var t=Dg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ug[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ho,charCode:function(e){return e.type==="keypress"?wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hg=pt(Bg),qg=v({},Ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hu=pt(qg),Yg=v({},hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ho}),Gg=pt(Yg),Xg=v({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qg=pt(Xg),Vg=v({},Ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=pt(Vg),Kg=v({},Wa,{newState:0,oldState:0}),Jg=pt(Kg),Fg=[9,13,27,32],go=la&&"CompositionEvent"in window,bl=null;la&&"documentMode"in document&&(bl=document.documentMode);var $g=la&&"TextEvent"in window&&!bl,qu=la&&(!go||bl&&8<bl&&11>=bl),Yu=" ",Gu=!1;function Xu(e,t){switch(e){case"keyup":return Fg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function Wg(e,t){switch(e){case"compositionend":return Qu(t);case"keypress":return t.which!==32?null:(Gu=!0,Yu);case"textInput":return e=t.data,e===Yu&&Gu?null:e;default:return null}}function Ig(e,t){if(An)return e==="compositionend"||!go&&Xu(e,t)?(e=Uu(),Nr=uo=wa=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qu&&t.locale!=="ko"?null:t.data;default:return null}}var Pg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pg[e.type]:t==="textarea"}function Zu(e,t,a,n){jn?Tn?Tn.push(n):Tn=[n]:jn=n,t=gi(t,"onChange"),0<t.length&&(a=new Tr("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var yl=null,xl=null;function e0(e){zp(e,0)}function Rr(e){var t=dl(e);if(Au(t))return e}function Ku(e,t){if(e==="change")return t}var Ju=!1;if(la){var bo;if(la){var yo="oninput"in document;if(!yo){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),yo=typeof Fu.oninput=="function"}bo=yo}else bo=!1;Ju=bo&&(!document.documentMode||9<document.documentMode)}function $u(){yl&&(yl.detachEvent("onpropertychange",Wu),xl=yl=null)}function Wu(e){if(e.propertyName==="value"&&Rr(xl)){var t=[];Zu(t,xl,e,oo(e)),Du(e0,t)}}function t0(e,t,a){e==="focusin"?($u(),yl=t,xl=a,yl.attachEvent("onpropertychange",Wu)):e==="focusout"&&$u()}function a0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rr(xl)}function n0(e,t){if(e==="click")return Rr(t)}function l0(e,t){if(e==="input"||e==="change")return Rr(t)}function r0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:r0;function vl(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var r=a[n];if(!Ji.call(t,r)||!wt(e[r],t[r]))return!1}return!0}function Iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pu(e,t){var a=Iu(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Iu(a)}}function ef(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ef(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Sr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Sr(e.document)}return t}function xo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var i0=la&&"documentMode"in document&&11>=document.documentMode,Rn=null,vo=null,Sl=null,So=!1;function af(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;So||Rn==null||Rn!==Sr(n)||(n=Rn,"selectionStart"in n&&xo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Sl&&vl(Sl,n)||(Sl=n,n=gi(vo,"onSelect"),0<n.length&&(t=new Tr("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Rn)))}function Ia(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var zn={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},Eo={},nf={};la&&(nf=document.createElement("div").style,"AnimationEvent"in window||(delete zn.animationend.animation,delete zn.animationiteration.animation,delete zn.animationstart.animation),"TransitionEvent"in window||delete zn.transitionend.transition);function Pa(e){if(Eo[e])return Eo[e];if(!zn[e])return e;var t=zn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in nf)return Eo[e]=t[a];return e}var lf=Pa("animationend"),rf=Pa("animationiteration"),of=Pa("animationstart"),o0=Pa("transitionrun"),s0=Pa("transitionstart"),c0=Pa("transitioncancel"),sf=Pa("transitionend"),cf=new Map,No="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");No.push("scrollEnd");function Qt(e,t){cf.set(e,t),$a(t,[e])}var zr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Lt=[],On=0,wo=0;function Or(){for(var e=On,t=wo=On=0;t<e;){var a=Lt[t];Lt[t++]=null;var n=Lt[t];Lt[t++]=null;var r=Lt[t];Lt[t++]=null;var i=Lt[t];if(Lt[t++]=null,n!==null&&r!==null){var d=n.pending;d===null?r.next=r:(r.next=d.next,d.next=r),n.pending=r}i!==0&&uf(a,r,i)}}function Cr(e,t,a,n){Lt[On++]=e,Lt[On++]=t,Lt[On++]=a,Lt[On++]=n,wo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function jo(e,t,a,n){return Cr(e,t,a,n),_r(e)}function en(e,t){return Cr(e,null,null,t),_r(e)}function uf(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var r=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(r=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,r&&t!==null&&(r=31-Nt(a),e=i.hiddenUpdates,n=e[r],n===null?e[r]=[t]:n.push(t),t.lane=a|536870912),i):null}function _r(e){if(50<Xl)throw Xl=0,Ds=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Cn={};function u0(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,a,n){return new u0(e,t,a,n)}function To(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ra(e,t){var a=e.alternate;return a===null?(a=jt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function ff(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Mr(e,t,a,n,r,i){var d=0;if(n=e,typeof e=="function")To(e)&&(d=1);else if(typeof e=="string")d=hb(e,a,K.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ge:return e=jt(31,a,t,r),e.elementType=ge,e.lanes=i,e;case w:return tn(a.children,r,i,t);case A:d=8,r|=24;break;case Y:return e=jt(12,a,t,r|2),e.elementType=Y,e.lanes=i,e;case I:return e=jt(13,a,t,r),e.elementType=I,e.lanes=i,e;case se:return e=jt(19,a,t,r),e.elementType=se,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:d=10;break e;case V:d=9;break e;case J:d=11;break e;case F:d=14;break e;case he:d=16,n=null;break e}d=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=jt(d,a,t,r),t.elementType=e,t.type=n,t.lanes=i,t}function tn(e,t,a,n){return e=jt(7,e,n,t),e.lanes=a,e}function Ao(e,t,a){return e=jt(6,e,null,t),e.lanes=a,e}function df(e){var t=jt(18,null,null,0);return t.stateNode=e,t}function Ro(e,t,a){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pf=new WeakMap;function kt(e,t){if(typeof e=="object"&&e!==null){var a=pf.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fu(t)},pf.set(e,t),t)}return{value:e,source:t,stack:fu(t)}}var _n=[],Mn=0,Dr=null,El=0,Bt=[],Ht=0,ja=null,Wt=1,It="";function ia(e,t){_n[Mn++]=El,_n[Mn++]=Dr,Dr=e,El=t}function mf(e,t,a){Bt[Ht++]=Wt,Bt[Ht++]=It,Bt[Ht++]=ja,ja=e;var n=Wt;e=It;var r=32-Nt(n)-1;n&=~(1<<r),a+=1;var i=32-Nt(t)+r;if(30<i){var d=r-r%5;i=(n&(1<<d)-1).toString(32),n>>=d,r-=d,Wt=1<<32-Nt(t)+r|a<<r|n,It=i+e}else Wt=1<<i|a<<r|n,It=e}function zo(e){e.return!==null&&(ia(e,1),mf(e,1,0))}function Oo(e){for(;e===Dr;)Dr=_n[--Mn],_n[Mn]=null,El=_n[--Mn],_n[Mn]=null;for(;e===ja;)ja=Bt[--Ht],Bt[Ht]=null,It=Bt[--Ht],Bt[Ht]=null,Wt=Bt[--Ht],Bt[Ht]=null}function hf(e,t){Bt[Ht++]=Wt,Bt[Ht++]=It,Bt[Ht++]=ja,Wt=t.id,It=t.overflow,ja=e}var tt=null,Le=null,Se=!1,Ta=null,qt=!1,Co=Error(c(519));function Aa(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Nl(kt(t,e)),Co}function gf(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[et]=e,t[dt]=n,a){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(a=0;a<Vl.length;a++)ye(Vl[a],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),Ru(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),Ou(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Mp(t.textContent,a)?(n.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),n.onScroll!=null&&ye("scroll",t),n.onScrollEnd!=null&&ye("scrollend",t),n.onClick!=null&&(t.onclick=na),t=!0):t=!1,t||Aa(e,!0)}function bf(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 31:case 13:qt=!1;return;case 27:case 3:qt=!0;return;default:tt=tt.return}}function Dn(e){if(e!==tt)return!1;if(!Se)return bf(e),Se=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Fs(e.type,e.memoizedProps)),a=!a),a&&Le&&Aa(e),bf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Le=Gp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Le=Gp(e)}else t===27?(t=Le,Ya(e.type)?(e=ec,ec=null,Le=e):Le=t):Le=tt?Gt(e.stateNode.nextSibling):null;return!0}function an(){Le=tt=null,Se=!1}function _o(){var e=Ta;return e!==null&&(bt===null?bt=e:bt.push.apply(bt,e),Ta=null),e}function Nl(e){Ta===null?Ta=[e]:Ta.push(e)}var Mo=x(null),nn=null,oa=null;function Ra(e,t,a){k(Mo,t._currentValue),t._currentValue=a}function sa(e){e._currentValue=Mo.current,z(Mo)}function Do(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Uo(e,t,a,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var i=r.dependencies;if(i!==null){var d=r.child;i=i.firstContext;e:for(;i!==null;){var h=i;i=r;for(var E=0;E<t.length;E++)if(h.context===t[E]){i.lanes|=a,h=i.alternate,h!==null&&(h.lanes|=a),Do(i.return,a,e),n||(d=null);break e}i=h.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(c(341));d.lanes|=a,i=d.alternate,i!==null&&(i.lanes|=a),Do(d,a,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function Un(e,t,a,n){e=null;for(var r=t,i=!1;r!==null;){if(!i){if((r.flags&524288)!==0)i=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(c(387));if(d=d.memoizedProps,d!==null){var h=r.type;wt(r.pendingProps.value,d.value)||(e!==null?e.push(h):e=[h])}}else if(r===ce.current){if(d=r.alternate,d===null)throw Error(c(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push($l):e=[$l])}r=r.return}e!==null&&Uo(t,e,a,n),t.flags|=262144}function Ur(e){for(e=e.firstContext;e!==null;){if(!wt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ln(e){nn=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return yf(nn,e)}function Lr(e,t){return nn===null&&ln(e),yf(e,t)}function yf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},oa===null){if(e===null)throw Error(c(308));oa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else oa=oa.next=t;return a}var f0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},d0=l.unstable_scheduleCallback,p0=l.unstable_NormalPriority,Ze={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lo(){return{controller:new f0,data:new Map,refCount:0}}function wl(e){e.refCount--,e.refCount===0&&d0(p0,function(){e.controller.abort()})}var jl=null,ko=0,Ln=0,kn=null;function m0(e,t){if(jl===null){var a=jl=[];ko=0,Ln=qs(),kn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ko++,t.then(xf,xf),t}function xf(){if(--ko===0&&jl!==null){kn!==null&&(kn.status="fulfilled");var e=jl;jl=null,Ln=0,kn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function h0(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(n.status="rejected",n.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),n}var vf=_.S;_.S=function(e,t){np=St(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&m0(e,t),vf!==null&&vf(e,t)};var rn=x(null);function Bo(){var e=rn.current;return e!==null?e:Ue.pooledCache}function kr(e,t){t===null?k(rn,rn.current):k(rn,t.pool)}function Sf(){var e=Bo();return e===null?null:{parent:Ze._currentValue,pool:e}}var Bn=Error(c(460)),Ho=Error(c(474)),Br=Error(c(542)),Hr={then:function(){}};function Ef(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Nf(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(na,na),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jf(e),e;default:if(typeof t.status=="string")t.then(na,na);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=n}},function(n){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,jf(e),e}throw sn=t,Bn}}function on(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(sn=a,Bn):a}}var sn=null;function wf(){if(sn===null)throw Error(c(459));var e=sn;return sn=null,e}function jf(e){if(e===Bn||e===Br)throw Error(c(483))}var Hn=null,Tl=0;function qr(e){var t=Tl;return Tl+=1,Hn===null&&(Hn=[]),Nf(Hn,e,t)}function Al(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Yr(e,t){throw t.$$typeof===B?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Tf(e){function t(T,N){if(e){var O=T.deletions;O===null?(T.deletions=[N],T.flags|=16):O.push(N)}}function a(T,N){if(!e)return null;for(;N!==null;)t(T,N),N=N.sibling;return null}function n(T){for(var N=new Map;T!==null;)T.key!==null?N.set(T.key,T):N.set(T.index,T),T=T.sibling;return N}function r(T,N){return T=ra(T,N),T.index=0,T.sibling=null,T}function i(T,N,O){return T.index=O,e?(O=T.alternate,O!==null?(O=O.index,O<N?(T.flags|=67108866,N):O):(T.flags|=67108866,N)):(T.flags|=1048576,N)}function d(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function h(T,N,O,X){return N===null||N.tag!==6?(N=Ao(O,T.mode,X),N.return=T,N):(N=r(N,O),N.return=T,N)}function E(T,N,O,X){var le=O.type;return le===w?q(T,N,O.props.children,X,O.key):N!==null&&(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===he&&on(le)===N.type)?(N=r(N,O.props),Al(N,O),N.return=T,N):(N=Mr(O.type,O.key,O.props,null,T.mode,X),Al(N,O),N.return=T,N)}function C(T,N,O,X){return N===null||N.tag!==4||N.stateNode.containerInfo!==O.containerInfo||N.stateNode.implementation!==O.implementation?(N=Ro(O,T.mode,X),N.return=T,N):(N=r(N,O.children||[]),N.return=T,N)}function q(T,N,O,X,le){return N===null||N.tag!==7?(N=tn(O,T.mode,X,le),N.return=T,N):(N=r(N,O),N.return=T,N)}function Q(T,N,O){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=Ao(""+N,T.mode,O),N.return=T,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Z:return O=Mr(N.type,N.key,N.props,null,T.mode,O),Al(O,N),O.return=T,O;case R:return N=Ro(N,T.mode,O),N.return=T,N;case he:return N=on(N),Q(T,N,O)}if(ie(N)||De(N))return N=tn(N,T.mode,O,null),N.return=T,N;if(typeof N.then=="function")return Q(T,qr(N),O);if(N.$$typeof===D)return Q(T,Lr(T,N),O);Yr(T,N)}return null}function M(T,N,O,X){var le=N!==null?N.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return le!==null?null:h(T,N,""+O,X);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Z:return O.key===le?E(T,N,O,X):null;case R:return O.key===le?C(T,N,O,X):null;case he:return O=on(O),M(T,N,O,X)}if(ie(O)||De(O))return le!==null?null:q(T,N,O,X,null);if(typeof O.then=="function")return M(T,N,qr(O),X);if(O.$$typeof===D)return M(T,N,Lr(T,O),X);Yr(T,O)}return null}function L(T,N,O,X,le){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return T=T.get(O)||null,h(N,T,""+X,le);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Z:return T=T.get(X.key===null?O:X.key)||null,E(N,T,X,le);case R:return T=T.get(X.key===null?O:X.key)||null,C(N,T,X,le);case he:return X=on(X),L(T,N,O,X,le)}if(ie(X)||De(X))return T=T.get(O)||null,q(N,T,X,le,null);if(typeof X.then=="function")return L(T,N,O,qr(X),le);if(X.$$typeof===D)return L(T,N,O,Lr(N,X),le);Yr(N,X)}return null}function ee(T,N,O,X){for(var le=null,we=null,ne=N,me=N=0,ve=null;ne!==null&&me<O.length;me++){ne.index>me?(ve=ne,ne=null):ve=ne.sibling;var je=M(T,ne,O[me],X);if(je===null){ne===null&&(ne=ve);break}e&&ne&&je.alternate===null&&t(T,ne),N=i(je,N,me),we===null?le=je:we.sibling=je,we=je,ne=ve}if(me===O.length)return a(T,ne),Se&&ia(T,me),le;if(ne===null){for(;me<O.length;me++)ne=Q(T,O[me],X),ne!==null&&(N=i(ne,N,me),we===null?le=ne:we.sibling=ne,we=ne);return Se&&ia(T,me),le}for(ne=n(ne);me<O.length;me++)ve=L(ne,T,me,O[me],X),ve!==null&&(e&&ve.alternate!==null&&ne.delete(ve.key===null?me:ve.key),N=i(ve,N,me),we===null?le=ve:we.sibling=ve,we=ve);return e&&ne.forEach(function(Za){return t(T,Za)}),Se&&ia(T,me),le}function oe(T,N,O,X){if(O==null)throw Error(c(151));for(var le=null,we=null,ne=N,me=N=0,ve=null,je=O.next();ne!==null&&!je.done;me++,je=O.next()){ne.index>me?(ve=ne,ne=null):ve=ne.sibling;var Za=M(T,ne,je.value,X);if(Za===null){ne===null&&(ne=ve);break}e&&ne&&Za.alternate===null&&t(T,ne),N=i(Za,N,me),we===null?le=Za:we.sibling=Za,we=Za,ne=ve}if(je.done)return a(T,ne),Se&&ia(T,me),le;if(ne===null){for(;!je.done;me++,je=O.next())je=Q(T,je.value,X),je!==null&&(N=i(je,N,me),we===null?le=je:we.sibling=je,we=je);return Se&&ia(T,me),le}for(ne=n(ne);!je.done;me++,je=O.next())je=L(ne,T,me,je.value,X),je!==null&&(e&&je.alternate!==null&&ne.delete(je.key===null?me:je.key),N=i(je,N,me),we===null?le=je:we.sibling=je,we=je);return e&&ne.forEach(function(Tb){return t(T,Tb)}),Se&&ia(T,me),le}function Me(T,N,O,X){if(typeof O=="object"&&O!==null&&O.type===w&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case Z:e:{for(var le=O.key;N!==null;){if(N.key===le){if(le=O.type,le===w){if(N.tag===7){a(T,N.sibling),X=r(N,O.props.children),X.return=T,T=X;break e}}else if(N.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===he&&on(le)===N.type){a(T,N.sibling),X=r(N,O.props),Al(X,O),X.return=T,T=X;break e}a(T,N);break}else t(T,N);N=N.sibling}O.type===w?(X=tn(O.props.children,T.mode,X,O.key),X.return=T,T=X):(X=Mr(O.type,O.key,O.props,null,T.mode,X),Al(X,O),X.return=T,T=X)}return d(T);case R:e:{for(le=O.key;N!==null;){if(N.key===le)if(N.tag===4&&N.stateNode.containerInfo===O.containerInfo&&N.stateNode.implementation===O.implementation){a(T,N.sibling),X=r(N,O.children||[]),X.return=T,T=X;break e}else{a(T,N);break}else t(T,N);N=N.sibling}X=Ro(O,T.mode,X),X.return=T,T=X}return d(T);case he:return O=on(O),Me(T,N,O,X)}if(ie(O))return ee(T,N,O,X);if(De(O)){if(le=De(O),typeof le!="function")throw Error(c(150));return O=le.call(O),oe(T,N,O,X)}if(typeof O.then=="function")return Me(T,N,qr(O),X);if(O.$$typeof===D)return Me(T,N,Lr(T,O),X);Yr(T,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,N!==null&&N.tag===6?(a(T,N.sibling),X=r(N,O),X.return=T,T=X):(a(T,N),X=Ao(O,T.mode,X),X.return=T,T=X),d(T)):a(T,N)}return function(T,N,O,X){try{Tl=0;var le=Me(T,N,O,X);return Hn=null,le}catch(ne){if(ne===Bn||ne===Br)throw ne;var we=jt(29,ne,null,T.mode);return we.lanes=X,we.return=T,we}}}var cn=Tf(!0),Af=Tf(!1),za=!1;function qo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ca(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Te&2)!==0){var r=n.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),n.pending=t,t=_r(e),uf(e,null,a),t}return Cr(e,n,t,a),_r(e)}function Rl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,bu(e,a)}}function Go(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var r=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?r=i=d:i=i.next=d,a=a.next}while(a!==null);i===null?r=i=t:i=i.next=t}else r=i=t;a={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Xo=!1;function zl(){if(Xo){var e=kn;if(e!==null)throw e}}function Ol(e,t,a,n){Xo=!1;var r=e.updateQueue;za=!1;var i=r.firstBaseUpdate,d=r.lastBaseUpdate,h=r.shared.pending;if(h!==null){r.shared.pending=null;var E=h,C=E.next;E.next=null,d===null?i=C:d.next=C,d=E;var q=e.alternate;q!==null&&(q=q.updateQueue,h=q.lastBaseUpdate,h!==d&&(h===null?q.firstBaseUpdate=C:h.next=C,q.lastBaseUpdate=E))}if(i!==null){var Q=r.baseState;d=0,q=C=E=null,h=i;do{var M=h.lane&-536870913,L=M!==h.lane;if(L?(xe&M)===M:(n&M)===M){M!==0&&M===Ln&&(Xo=!0),q!==null&&(q=q.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var ee=e,oe=h;M=t;var Me=a;switch(oe.tag){case 1:if(ee=oe.payload,typeof ee=="function"){Q=ee.call(Me,Q,M);break e}Q=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=oe.payload,M=typeof ee=="function"?ee.call(Me,Q,M):ee,M==null)break e;Q=v({},Q,M);break e;case 2:za=!0}}M=h.callback,M!==null&&(e.flags|=64,L&&(e.flags|=8192),L=r.callbacks,L===null?r.callbacks=[M]:L.push(M))}else L={lane:M,tag:h.tag,payload:h.payload,callback:h.callback,next:null},q===null?(C=q=L,E=Q):q=q.next=L,d|=M;if(h=h.next,h===null){if(h=r.shared.pending,h===null)break;L=h,h=L.next,L.next=null,r.lastBaseUpdate=L,r.shared.pending=null}}while(!0);q===null&&(E=Q),r.baseState=E,r.firstBaseUpdate=C,r.lastBaseUpdate=q,i===null&&(r.shared.lanes=0),La|=d,e.lanes=d,e.memoizedState=Q}}function Rf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function zf(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Rf(a[e],t)}var qn=x(null),Gr=x(0);function Of(e,t){e=ba,k(Gr,e),k(qn,t),ba=e|t.baseLanes}function Qo(){k(Gr,ba),k(qn,qn.current)}function Vo(){ba=Gr.current,z(qn),z(Gr)}var Tt=x(null),Yt=null;function _a(e){var t=e.alternate;k(Qe,Qe.current&1),k(Tt,e),Yt===null&&(t===null||qn.current!==null||t.memoizedState!==null)&&(Yt=e)}function Zo(e){k(Qe,Qe.current),k(Tt,e),Yt===null&&(Yt=e)}function Cf(e){e.tag===22?(k(Qe,Qe.current),k(Tt,e),Yt===null&&(Yt=e)):Ma()}function Ma(){k(Qe,Qe.current),k(Tt,Tt.current)}function At(e){z(Tt),Yt===e&&(Yt=null),z(Qe)}var Qe=x(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Is(a)||Ps(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=0,de=null,Ce=null,Ke=null,Qr=!1,Yn=!1,un=!1,Vr=0,Cl=0,Gn=null,g0=0;function Ge(){throw Error(c(321))}function Ko(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!wt(e[a],t[a]))return!1;return!0}function Jo(e,t,a,n,r,i){return ca=i,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?md:cs,un=!1,i=a(n,r),un=!1,Yn&&(i=Mf(t,a,n,r)),_f(e),i}function _f(e){_.H=Dl;var t=Ce!==null&&Ce.next!==null;if(ca=0,Ke=Ce=de=null,Qr=!1,Cl=0,Gn=null,t)throw Error(c(300));e===null||Je||(e=e.dependencies,e!==null&&Ur(e)&&(Je=!0))}function Mf(e,t,a,n){de=e;var r=0;do{if(Yn&&(Gn=null),Cl=0,Yn=!1,25<=r)throw Error(c(301));if(r+=1,Ke=Ce=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}_.H=hd,i=t(a,n)}while(Yn);return i}function b0(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?_l(t):t,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(de.flags|=1024),t}function Fo(){var e=Vr!==0;return Vr=0,e}function $o(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Wo(e){if(Qr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Qr=!1}ca=0,Ke=Ce=de=null,Yn=!1,Cl=Vr=0,Gn=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?de.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Ve(){if(Ce===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Ke===null?de.memoizedState:Ke.next;if(t!==null)Ke=t,Ce=e;else{if(e===null)throw de.alternate===null?Error(c(467)):Error(c(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ke===null?de.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function Zr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _l(e){var t=Cl;return Cl+=1,Gn===null&&(Gn=[]),e=Nf(Gn,e,t),t=de,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?md:cs),e}function Kr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return _l(e);if(e.$$typeof===D)return at(e)}throw Error(c(438,String(e)))}function Io(e){var t=null,a=de.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=de.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Zr(),de.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=qe;return t.index++,a}function ua(e,t){return typeof t=="function"?t(e):t}function Jr(e){var t=Ve();return Po(t,Ce,e)}function Po(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var r=e.baseQueue,i=n.pending;if(i!==null){if(r!==null){var d=r.next;r.next=i.next,i.next=d}t.baseQueue=r=i,n.pending=null}if(i=e.baseState,r===null)e.memoizedState=i;else{t=r.next;var h=d=null,E=null,C=t,q=!1;do{var Q=C.lane&-536870913;if(Q!==C.lane?(xe&Q)===Q:(ca&Q)===Q){var M=C.revertLane;if(M===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),Q===Ln&&(q=!0);else if((ca&M)===M){C=C.next,M===Ln&&(q=!0);continue}else Q={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},E===null?(h=E=Q,d=i):E=E.next=Q,de.lanes|=M,La|=M;Q=C.action,un&&a(i,Q),i=C.hasEagerState?C.eagerState:a(i,Q)}else M={lane:Q,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},E===null?(h=E=M,d=i):E=E.next=M,de.lanes|=Q,La|=Q;C=C.next}while(C!==null&&C!==t);if(E===null?d=i:E.next=h,!wt(i,e.memoizedState)&&(Je=!0,q&&(a=kn,a!==null)))throw a;e.memoizedState=i,e.baseState=d,e.baseQueue=E,n.lastRenderedState=i}return r===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function es(e){var t=Ve(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,r=a.pending,i=t.memoizedState;if(r!==null){a.pending=null;var d=r=r.next;do i=e(i,d.action),d=d.next;while(d!==r);wt(i,t.memoizedState)||(Je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function Df(e,t,a){var n=de,r=Ve(),i=Se;if(i){if(a===void 0)throw Error(c(407));a=a()}else a=t();var d=!wt((Ce||r).memoizedState,a);if(d&&(r.memoizedState=a,Je=!0),r=r.queue,ns(kf.bind(null,n,r,e),[e]),r.getSnapshot!==t||d||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,Xn(9,{destroy:void 0},Lf.bind(null,n,r,a,t),null),Ue===null)throw Error(c(349));i||(ca&127)!==0||Uf(n,t,a)}return a}function Uf(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=de.updateQueue,t===null?(t=Zr(),de.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Lf(e,t,a,n){t.value=a,t.getSnapshot=n,Bf(t)&&Hf(e)}function kf(e,t,a){return a(function(){Bf(t)&&Hf(e)})}function Bf(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!wt(e,a)}catch{return!0}}function Hf(e){var t=en(e,2);t!==null&&yt(t,e,2)}function ts(e){var t=ut();if(typeof e=="function"){var a=e;if(e=a(),un){Ea(!0);try{a()}finally{Ea(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t}function qf(e,t,a,n){return e.baseState=a,Po(e,Ce,typeof n=="function"?n:ua)}function y0(e,t,a,n,r){if(Wr(e))throw Error(c(485));if(e=t.action,e!==null){var i={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){i.listeners.push(d)}};_.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,Yf(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Yf(e,t){var a=t.action,n=t.payload,r=e.state;if(t.isTransition){var i=_.T,d={};_.T=d;try{var h=a(r,n),E=_.S;E!==null&&E(d,h),Gf(e,t,h)}catch(C){as(e,t,C)}finally{i!==null&&d.types!==null&&(i.types=d.types),_.T=i}}else try{i=a(r,n),Gf(e,t,i)}catch(C){as(e,t,C)}}function Gf(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Xf(e,t,n)},function(n){return as(e,t,n)}):Xf(e,t,a)}function Xf(e,t,a){t.status="fulfilled",t.value=a,Qf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Yf(e,a)))}function as(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Qf(t),t=t.next;while(t!==n)}e.action=null}function Qf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vf(e,t){return t}function Zf(e,t){if(Se){var a=Ue.formState;if(a!==null){e:{var n=de;if(Se){if(Le){t:{for(var r=Le,i=qt;r.nodeType!==8;){if(!i){r=null;break t}if(r=Gt(r.nextSibling),r===null){r=null;break t}}i=r.data,r=i==="F!"||i==="F"?r:null}if(r){Le=Gt(r.nextSibling),n=r.data==="F!";break e}}Aa(n)}n=!1}n&&(t=a[0])}}return a=ut(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vf,lastRenderedState:t},a.queue=n,a=fd.bind(null,de,n),n.dispatch=a,n=ts(!1),i=ss.bind(null,de,!1,n.queue),n=ut(),r={state:t,dispatch:null,action:e,pending:null},n.queue=r,a=y0.bind(null,de,r,i,a),r.dispatch=a,n.memoizedState=e,[t,a,!1]}function Kf(e){var t=Ve();return Jf(t,Ce,e)}function Jf(e,t,a){if(t=Po(e,t,Vf)[0],e=Jr(ua)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=_l(t)}catch(d){throw d===Bn?Br:d}else n=t;t=Ve();var r=t.queue,i=r.dispatch;return a!==t.memoizedState&&(de.flags|=2048,Xn(9,{destroy:void 0},x0.bind(null,r,a),null)),[n,i,e]}function x0(e,t){e.action=t}function Ff(e){var t=Ve(),a=Ce;if(a!==null)return Jf(t,a,e);Ve(),t=t.memoizedState,a=Ve();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Xn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=de.updateQueue,t===null&&(t=Zr(),de.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function $f(){return Ve().memoizedState}function Fr(e,t,a,n){var r=ut();de.flags|=e,r.memoizedState=Xn(1|t,{destroy:void 0},a,n===void 0?null:n)}function $r(e,t,a,n){var r=Ve();n=n===void 0?null:n;var i=r.memoizedState.inst;Ce!==null&&n!==null&&Ko(n,Ce.memoizedState.deps)?r.memoizedState=Xn(t,i,a,n):(de.flags|=e,r.memoizedState=Xn(1|t,i,a,n))}function Wf(e,t){Fr(8390656,8,e,t)}function ns(e,t){$r(2048,8,e,t)}function v0(e){de.flags|=4;var t=de.updateQueue;if(t===null)t=Zr(),de.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function If(e){var t=Ve().memoizedState;return v0({ref:t,nextImpl:e}),function(){if((Te&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function Pf(e,t){return $r(4,2,e,t)}function ed(e,t){return $r(4,4,e,t)}function td(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ad(e,t,a){a=a!=null?a.concat([e]):null,$r(4,4,td.bind(null,t,e),a)}function ls(){}function nd(e,t){var a=Ve();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Ko(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function ld(e,t){var a=Ve();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Ko(t,n[1]))return n[0];if(n=e(),un){Ea(!0);try{e()}finally{Ea(!1)}}return a.memoizedState=[n,t],n}function rs(e,t,a){return a===void 0||(ca&1073741824)!==0&&(xe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=rp(),de.lanes|=e,La|=e,a)}function rd(e,t,a,n){return wt(a,t)?a:qn.current!==null?(e=rs(e,a,n),wt(e,t)||(Je=!0),e):(ca&42)===0||(ca&1073741824)!==0&&(xe&261930)===0?(Je=!0,e.memoizedState=a):(e=rp(),de.lanes|=e,La|=e,t)}function id(e,t,a,n,r){var i=$.p;$.p=i!==0&&8>i?i:8;var d=_.T,h={};_.T=h,ss(e,!1,t,a);try{var E=r(),C=_.S;if(C!==null&&C(h,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var q=h0(E,n);Ml(e,t,q,Ot(e))}else Ml(e,t,n,Ot(e))}catch(Q){Ml(e,t,{then:function(){},status:"rejected",reason:Q},Ot())}finally{$.p=i,d!==null&&h.types!==null&&(d.types=h.types),_.T=d}}function S0(){}function is(e,t,a,n){if(e.tag!==5)throw Error(c(476));var r=od(e).queue;id(e,r,t,P,a===null?S0:function(){return sd(e),a(n)})}function od(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:P},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function sd(e){var t=od(e);t.next===null&&(t=e.alternate.memoizedState),Ml(e,t.next.queue,{},Ot())}function os(){return at($l)}function cd(){return Ve().memoizedState}function ud(){return Ve().memoizedState}function E0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ot();e=Oa(a);var n=Ca(t,e,a);n!==null&&(yt(n,t,a),Rl(n,t,a)),t={cache:Lo()},e.payload=t;return}t=t.return}}function N0(e,t,a){var n=Ot();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Wr(e)?dd(t,a):(a=jo(e,t,a,n),a!==null&&(yt(a,e,n),pd(a,t,n)))}function fd(e,t,a){var n=Ot();Ml(e,t,a,n)}function Ml(e,t,a,n){var r={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wr(e))dd(t,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,h=i(d,a);if(r.hasEagerState=!0,r.eagerState=h,wt(h,d))return Cr(e,t,r,0),Ue===null&&Or(),!1}catch{}if(a=jo(e,t,r,n),a!==null)return yt(a,e,n),pd(a,t,n),!0}return!1}function ss(e,t,a,n){if(n={lane:2,revertLane:qs(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Wr(e)){if(t)throw Error(c(479))}else t=jo(e,a,n,2),t!==null&&yt(t,e,2)}function Wr(e){var t=e.alternate;return e===de||t!==null&&t===de}function dd(e,t){Yn=Qr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function pd(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,bu(e,a)}}var Dl={readContext:at,use:Kr,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge};Dl.useEffectEvent=Ge;var md={readContext:at,use:Kr,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Wf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Fr(4194308,4,td.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Fr(4194308,4,e,t)},useInsertionEffect:function(e,t){Fr(4,2,e,t)},useMemo:function(e,t){var a=ut();t=t===void 0?null:t;var n=e();if(un){Ea(!0);try{e()}finally{Ea(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=ut();if(a!==void 0){var r=a(t);if(un){Ea(!0);try{a(t)}finally{Ea(!1)}}}else r=t;return n.memoizedState=n.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=N0.bind(null,de,e),[n.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=ts(e);var t=e.queue,a=fd.bind(null,de,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ls,useDeferredValue:function(e,t){var a=ut();return rs(a,e,t)},useTransition:function(){var e=ts(!1);return e=id.bind(null,de,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=de,r=ut();if(Se){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Ue===null)throw Error(c(349));(xe&127)!==0||Uf(n,t,a)}r.memoizedState=a;var i={value:a,getSnapshot:t};return r.queue=i,Wf(kf.bind(null,n,i,e),[e]),n.flags|=2048,Xn(9,{destroy:void 0},Lf.bind(null,n,i,a,t),null),a},useId:function(){var e=ut(),t=Ue.identifierPrefix;if(Se){var a=It,n=Wt;a=(n&~(1<<32-Nt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Vr++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=g0++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:os,useFormState:Zf,useActionState:Zf,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ss.bind(null,de,!0,a),a.dispatch=t,[e,t]},useMemoCache:Io,useCacheRefresh:function(){return ut().memoizedState=E0.bind(null,de)},useEffectEvent:function(e){var t=ut(),a={impl:e};return t.memoizedState=a,function(){if((Te&2)!==0)throw Error(c(440));return a.impl.apply(void 0,arguments)}}},cs={readContext:at,use:Kr,useCallback:nd,useContext:at,useEffect:ns,useImperativeHandle:ad,useInsertionEffect:Pf,useLayoutEffect:ed,useMemo:ld,useReducer:Jr,useRef:$f,useState:function(){return Jr(ua)},useDebugValue:ls,useDeferredValue:function(e,t){var a=Ve();return rd(a,Ce.memoizedState,e,t)},useTransition:function(){var e=Jr(ua)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:_l(e),t]},useSyncExternalStore:Df,useId:cd,useHostTransitionStatus:os,useFormState:Kf,useActionState:Kf,useOptimistic:function(e,t){var a=Ve();return qf(a,Ce,e,t)},useMemoCache:Io,useCacheRefresh:ud};cs.useEffectEvent=If;var hd={readContext:at,use:Kr,useCallback:nd,useContext:at,useEffect:ns,useImperativeHandle:ad,useInsertionEffect:Pf,useLayoutEffect:ed,useMemo:ld,useReducer:es,useRef:$f,useState:function(){return es(ua)},useDebugValue:ls,useDeferredValue:function(e,t){var a=Ve();return Ce===null?rs(a,e,t):rd(a,Ce.memoizedState,e,t)},useTransition:function(){var e=es(ua)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:_l(e),t]},useSyncExternalStore:Df,useId:cd,useHostTransitionStatus:os,useFormState:Ff,useActionState:Ff,useOptimistic:function(e,t){var a=Ve();return Ce!==null?qf(a,Ce,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Io,useCacheRefresh:ud};hd.useEffectEvent=If;function us(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:v({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var fs={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Ot(),r=Oa(n);r.payload=t,a!=null&&(r.callback=a),t=Ca(e,r,n),t!==null&&(yt(t,e,n),Rl(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Ot(),r=Oa(n);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=Ca(e,r,n),t!==null&&(yt(t,e,n),Rl(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ot(),n=Oa(a);n.tag=2,t!=null&&(n.callback=t),t=Ca(e,n,a),t!==null&&(yt(t,e,a),Rl(t,e,a))}};function gd(e,t,a,n,r,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,d):t.prototype&&t.prototype.isPureReactComponent?!vl(a,n)||!vl(r,i):!0}function bd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&fs.enqueueReplaceState(t,t.state,null)}function fn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=v({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function yd(e){zr(e)}function xd(e){console.error(e)}function vd(e){zr(e)}function Ir(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Sd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ds(e,t,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ir(e,t)},a}function Ed(e){return e=Oa(e),e.tag=3,e}function Nd(e,t,a,n){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;e.payload=function(){return r(i)},e.callback=function(){Sd(t,a,n)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Sd(t,a,n),typeof r!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function w0(e,t,a,n,r){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Un(t,a,r,!0),a=Tt.current,a!==null){switch(a.tag){case 31:case 13:return Yt===null?ui():a.alternate===null&&Xe===0&&(Xe=3),a.flags&=-257,a.flags|=65536,a.lanes=r,n===Hr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),ks(e,n,r)),!1;case 22:return a.flags|=65536,n===Hr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),ks(e,n,r)),!1}throw Error(c(435,a.tag))}return ks(e,n,r),ui(),!1}if(Se)return t=Tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,n!==Co&&(e=Error(c(422),{cause:n}),Nl(kt(e,a)))):(n!==Co&&(t=Error(c(423),{cause:n}),Nl(kt(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,n=kt(n,a),r=ds(e.stateNode,n,r),Go(e,r),Xe!==4&&(Xe=2)),!1;var i=Error(c(520),{cause:n});if(i=kt(i,a),Gl===null?Gl=[i]:Gl.push(i),Xe!==4&&(Xe=2),t===null)return!0;n=kt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=ds(a.stateNode,n,e),Go(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ka===null||!ka.has(i))))return a.flags|=65536,r&=-r,a.lanes|=r,r=Ed(r),Nd(r,e,a,n),Go(a,r),!1}a=a.return}while(a!==null);return!1}var ps=Error(c(461)),Je=!1;function nt(e,t,a,n){t.child=e===null?Af(t,null,a,n):cn(t,e.child,a,n)}function wd(e,t,a,n,r){a=a.render;var i=t.ref;if("ref"in n){var d={};for(var h in n)h!=="ref"&&(d[h]=n[h])}else d=n;return ln(t),n=Jo(e,t,a,d,i,r),h=Fo(),e!==null&&!Je?($o(e,t,r),fa(e,t,r)):(Se&&h&&zo(t),t.flags|=1,nt(e,t,n,r),t.child)}function jd(e,t,a,n,r){if(e===null){var i=a.type;return typeof i=="function"&&!To(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Td(e,t,i,n,r)):(e=Mr(a.type,null,n,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Ss(e,r)){var d=i.memoizedProps;if(a=a.compare,a=a!==null?a:vl,a(d,n)&&e.ref===t.ref)return fa(e,t,r)}return t.flags|=1,e=ra(i,n),e.ref=t.ref,e.return=t,t.child=e}function Td(e,t,a,n,r){if(e!==null){var i=e.memoizedProps;if(vl(i,n)&&e.ref===t.ref)if(Je=!1,t.pendingProps=n=i,Ss(e,r))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,fa(e,t,r)}return ms(e,t,a,n,r)}function Ad(e,t,a,n){var r=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,r=0;n!==null;)r=r|n.lanes|n.childLanes,n=n.sibling;n=r&~i}else n=0,t.child=null;return Rd(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kr(t,i!==null?i.cachePool:null),i!==null?Of(t,i):Qo(),Cf(t);else return n=t.lanes=536870912,Rd(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(kr(t,i.cachePool),Of(t,i),Ma(),t.memoizedState=null):(e!==null&&kr(t,null),Qo(),Ma());return nt(e,t,r,a),t.child}function Ul(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rd(e,t,a,n,r){var i=Bo();return i=i===null?null:{parent:Ze._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&kr(t,null),Qo(),Cf(t),e!==null&&Un(e,t,n,!0),t.childLanes=r,null}function Pr(e,t){return t=ti({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function zd(e,t,a){return cn(t,e.child,null,a),e=Pr(t,t.pendingProps),e.flags|=2,At(t),t.memoizedState=null,e}function j0(e,t,a){var n=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Se){if(n.mode==="hidden")return e=Pr(t,n),t.lanes=536870912,Ul(null,e);if(Zo(t),(e=Le)?(e=Yp(e,qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:Wt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=df(e),a.return=t,t.child=a,tt=t,Le=null)):e=null,e===null)throw Aa(t);return t.lanes=536870912,null}return Pr(t,n)}var i=e.memoizedState;if(i!==null){var d=i.dehydrated;if(Zo(t),r)if(t.flags&256)t.flags&=-257,t=zd(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Je||Un(e,t,a,!1),r=(a&e.childLanes)!==0,Je||r){if(n=Ue,n!==null&&(d=yu(n,a),d!==0&&d!==i.retryLane))throw i.retryLane=d,en(e,d),yt(n,e,d),ps;ui(),t=zd(e,t,a)}else e=i.treeContext,Le=Gt(d.nextSibling),tt=t,Se=!0,Ta=null,qt=!1,e!==null&&hf(t,e),t=Pr(t,n),t.flags|=4096;return t}return e=ra(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ei(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ms(e,t,a,n,r){return ln(t),a=Jo(e,t,a,n,void 0,r),n=Fo(),e!==null&&!Je?($o(e,t,r),fa(e,t,r)):(Se&&n&&zo(t),t.flags|=1,nt(e,t,a,r),t.child)}function Od(e,t,a,n,r,i){return ln(t),t.updateQueue=null,a=Mf(t,n,a,r),_f(e),n=Fo(),e!==null&&!Je?($o(e,t,i),fa(e,t,i)):(Se&&n&&zo(t),t.flags|=1,nt(e,t,a,i),t.child)}function Cd(e,t,a,n,r){if(ln(t),t.stateNode===null){var i=Cn,d=a.contextType;typeof d=="object"&&d!==null&&(i=at(d)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=fs,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},qo(t),d=a.contextType,i.context=typeof d=="object"&&d!==null?at(d):Cn,i.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(us(t,a,d,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(d=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),d!==i.state&&fs.enqueueReplaceState(i,i.state,null),Ol(t,n,i,r),zl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var h=t.memoizedProps,E=fn(a,h);i.props=E;var C=i.context,q=a.contextType;d=Cn,typeof q=="object"&&q!==null&&(d=at(q));var Q=a.getDerivedStateFromProps;q=typeof Q=="function"||typeof i.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,q||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h||C!==d)&&bd(t,i,n,d),za=!1;var M=t.memoizedState;i.state=M,Ol(t,n,i,r),zl(),C=t.memoizedState,h||M!==C||za?(typeof Q=="function"&&(us(t,a,Q,n),C=t.memoizedState),(E=za||gd(t,a,E,n,M,C,d))?(q||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=C),i.props=n,i.state=C,i.context=d,n=E):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Yo(e,t),d=t.memoizedProps,q=fn(a,d),i.props=q,Q=t.pendingProps,M=i.context,C=a.contextType,E=Cn,typeof C=="object"&&C!==null&&(E=at(C)),h=a.getDerivedStateFromProps,(C=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==Q||M!==E)&&bd(t,i,n,E),za=!1,M=t.memoizedState,i.state=M,Ol(t,n,i,r),zl();var L=t.memoizedState;d!==Q||M!==L||za||e!==null&&e.dependencies!==null&&Ur(e.dependencies)?(typeof h=="function"&&(us(t,a,h,n),L=t.memoizedState),(q=za||gd(t,a,q,n,M,L,E)||e!==null&&e.dependencies!==null&&Ur(e.dependencies))?(C||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,L,E),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,L,E)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=L),i.props=n,i.state=L,i.context=E,n=q):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,ei(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=cn(t,e.child,null,r),t.child=cn(t,null,a,r)):nt(e,t,a,r),t.memoizedState=i.state,e=t.child):e=fa(e,t,r),e}function _d(e,t,a,n){return an(),t.flags|=256,nt(e,t,a,n),t.child}var hs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gs(e){return{baseLanes:e,cachePool:Sf()}}function bs(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=zt),e}function Md(e,t,a){var n=t.pendingProps,r=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(Qe.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Se){if(r?_a(t):Ma(),(e=Le)?(e=Yp(e,qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ja!==null?{id:Wt,overflow:It}:null,retryLane:536870912,hydrationErrors:null},a=df(e),a.return=t,t.child=a,tt=t,Le=null)):e=null,e===null)throw Aa(t);return Ps(e)?t.lanes=32:t.lanes=536870912,null}var h=n.children;return n=n.fallback,r?(Ma(),r=t.mode,h=ti({mode:"hidden",children:h},r),n=tn(n,r,a,null),h.return=t,n.return=t,h.sibling=n,t.child=h,n=t.child,n.memoizedState=gs(a),n.childLanes=bs(e,d,a),t.memoizedState=hs,Ul(null,n)):(_a(t),ys(t,h))}var E=e.memoizedState;if(E!==null&&(h=E.dehydrated,h!==null)){if(i)t.flags&256?(_a(t),t.flags&=-257,t=xs(e,t,a)):t.memoizedState!==null?(Ma(),t.child=e.child,t.flags|=128,t=null):(Ma(),h=n.fallback,r=t.mode,n=ti({mode:"visible",children:n.children},r),h=tn(h,r,a,null),h.flags|=2,n.return=t,h.return=t,n.sibling=h,t.child=n,cn(t,e.child,null,a),n=t.child,n.memoizedState=gs(a),n.childLanes=bs(e,d,a),t.memoizedState=hs,t=Ul(null,n));else if(_a(t),Ps(h)){if(d=h.nextSibling&&h.nextSibling.dataset,d)var C=d.dgst;d=C,n=Error(c(419)),n.stack="",n.digest=d,Nl({value:n,source:null,stack:null}),t=xs(e,t,a)}else if(Je||Un(e,t,a,!1),d=(a&e.childLanes)!==0,Je||d){if(d=Ue,d!==null&&(n=yu(d,a),n!==0&&n!==E.retryLane))throw E.retryLane=n,en(e,n),yt(d,e,n),ps;Is(h)||ui(),t=xs(e,t,a)}else Is(h)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Le=Gt(h.nextSibling),tt=t,Se=!0,Ta=null,qt=!1,e!==null&&hf(t,e),t=ys(t,n.children),t.flags|=4096);return t}return r?(Ma(),h=n.fallback,r=t.mode,E=e.child,C=E.sibling,n=ra(E,{mode:"hidden",children:n.children}),n.subtreeFlags=E.subtreeFlags&65011712,C!==null?h=ra(C,h):(h=tn(h,r,a,null),h.flags|=2),h.return=t,n.return=t,n.sibling=h,t.child=n,Ul(null,n),n=t.child,h=e.child.memoizedState,h===null?h=gs(a):(r=h.cachePool,r!==null?(E=Ze._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=Sf(),h={baseLanes:h.baseLanes|a,cachePool:r}),n.memoizedState=h,n.childLanes=bs(e,d,a),t.memoizedState=hs,Ul(e.child,n)):(_a(t),a=e.child,e=a.sibling,a=ra(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function ys(e,t){return t=ti({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ti(e,t){return e=jt(22,e,null,t),e.lanes=0,e}function xs(e,t,a){return cn(t,e.child,null,a),e=ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Dd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Do(e.return,t,a)}function vs(e,t,a,n,r,i){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:r,treeForkCount:i}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=n,d.tail=a,d.tailMode=r,d.treeForkCount=i)}function Ud(e,t,a){var n=t.pendingProps,r=n.revealOrder,i=n.tail;n=n.children;var d=Qe.current,h=(d&2)!==0;if(h?(d=d&1|2,t.flags|=128):d&=1,k(Qe,d),nt(e,t,n,a),n=Se?El:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Dd(e,a,t);else if(e.tag===19)Dd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&Xr(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),vs(t,!1,r,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Xr(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}vs(t,!0,a,null,i,n);break;case"together":vs(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function fa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),La|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Un(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=ra(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ra(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ss(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ur(e)))}function T0(e,t,a){switch(t.tag){case 3:Ne(t,t.stateNode.containerInfo),Ra(t,Ze,e.memoizedState.cache),an();break;case 27:case 5:fe(t);break;case 4:Ne(t,t.stateNode.containerInfo);break;case 10:Ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zo(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(_a(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Md(e,t,a):(_a(t),e=fa(e,t,a),e!==null?e.sibling:null);_a(t);break;case 19:var r=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Un(e,t,a,!1),n=(a&t.childLanes)!==0),r){if(n)return Ud(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),k(Qe,Qe.current),n)break;return null;case 22:return t.lanes=0,Ad(e,t,a,t.pendingProps);case 24:Ra(t,Ze,e.memoizedState.cache)}return fa(e,t,a)}function Ld(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Ss(e,a)&&(t.flags&128)===0)return Je=!1,T0(e,t,a);Je=(e.flags&131072)!==0}else Je=!1,Se&&(t.flags&1048576)!==0&&mf(t,El,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=on(t.elementType),t.type=e,typeof e=="function")To(e)?(n=fn(e,n),t.tag=1,t=Cd(null,t,e,n,a)):(t.tag=0,t=ms(null,t,e,n,a));else{if(e!=null){var r=e.$$typeof;if(r===J){t.tag=11,t=wd(null,t,e,n,a);break e}else if(r===F){t.tag=14,t=jd(null,t,e,n,a);break e}}throw t=W(e)||e,Error(c(306,t,""))}}return t;case 0:return ms(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,r=fn(n,t.pendingProps),Cd(e,t,n,r,a);case 3:e:{if(Ne(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var i=t.memoizedState;r=i.element,Yo(e,t),Ol(t,n,null,a);var d=t.memoizedState;if(n=d.cache,Ra(t,Ze,n),n!==i.cache&&Uo(t,[Ze],a,!0),zl(),n=d.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=_d(e,t,n,a);break e}else if(n!==r){r=kt(Error(c(424)),t),Nl(r),t=_d(e,t,n,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Le=Gt(e.firstChild),tt=t,Se=!0,Ta=null,qt=!0,a=Af(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(an(),n===r){t=fa(e,t,a);break e}nt(e,t,n,a)}t=t.child}return t;case 26:return ei(e,t),e===null?(a=Kp(t.type,null,t.pendingProps,null))?t.memoizedState=a:Se||(a=t.type,e=t.pendingProps,n=bi(re.current).createElement(a),n[et]=t,n[dt]=e,lt(n,a,e),Ie(n),t.stateNode=n):t.memoizedState=Kp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fe(t),e===null&&Se&&(n=t.stateNode=Qp(t.type,t.pendingProps,re.current),tt=t,qt=!0,r=Le,Ya(t.type)?(ec=r,Le=Gt(n.firstChild)):Le=r),nt(e,t,t.pendingProps.children,a),ei(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Se&&((r=n=Le)&&(n=ab(n,t.type,t.pendingProps,qt),n!==null?(t.stateNode=n,tt=t,Le=Gt(n.firstChild),qt=!1,r=!0):r=!1),r||Aa(t)),fe(t),r=t.type,i=t.pendingProps,d=e!==null?e.memoizedProps:null,n=i.children,Fs(r,i)?n=null:d!==null&&Fs(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=Jo(e,t,b0,null,null,a),$l._currentValue=r),ei(e,t),nt(e,t,n,a),t.child;case 6:return e===null&&Se&&((e=a=Le)&&(a=nb(a,t.pendingProps,qt),a!==null?(t.stateNode=a,tt=t,Le=null,e=!0):e=!1),e||Aa(t)),null;case 13:return Md(e,t,a);case 4:return Ne(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=cn(t,null,n,a):nt(e,t,n,a),t.child;case 11:return wd(e,t,t.type,t.pendingProps,a);case 7:return nt(e,t,t.pendingProps,a),t.child;case 8:return nt(e,t,t.pendingProps.children,a),t.child;case 12:return nt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ra(t,t.type,n.value),nt(e,t,n.children,a),t.child;case 9:return r=t.type._context,n=t.pendingProps.children,ln(t),r=at(r),n=n(r),t.flags|=1,nt(e,t,n,a),t.child;case 14:return jd(e,t,t.type,t.pendingProps,a);case 15:return Td(e,t,t.type,t.pendingProps,a);case 19:return Ud(e,t,a);case 31:return j0(e,t,a);case 22:return Ad(e,t,a,t.pendingProps);case 24:return ln(t),n=at(Ze),e===null?(r=Bo(),r===null&&(r=Ue,i=Lo(),r.pooledCache=i,i.refCount++,i!==null&&(r.pooledCacheLanes|=a),r=i),t.memoizedState={parent:n,cache:r},qo(t),Ra(t,Ze,r)):((e.lanes&a)!==0&&(Yo(e,t),Ol(t,null,null,a),zl()),r=e.memoizedState,i=t.memoizedState,r.parent!==n?(r={parent:n,cache:n},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Ra(t,Ze,n)):(n=i.cache,Ra(t,Ze,n),n!==r.cache&&Uo(t,[Ze],a,!0))),nt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function da(e){e.flags|=4}function Es(e,t,a,n,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(cp())e.flags|=8192;else throw sn=Hr,Ho}else e.flags&=-16777217}function kd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ip(t))if(cp())e.flags|=8192;else throw sn=Hr,Ho}function ai(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?hu():536870912,e.lanes|=t,Kn|=t)}function Ll(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags&65011712,n|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function A0(e,t,a){var n=t.pendingProps;switch(Oo(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return ke(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),sa(Ze),ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Dn(t)?da(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,_o())),ke(t),null;case 26:var r=t.type,i=t.memoizedState;return e===null?(da(t),i!==null?(ke(t),kd(t,i)):(ke(t),Es(t,r,null,n,a))):i?i!==e.memoizedState?(da(t),ke(t),kd(t,i)):(ke(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&da(t),ke(t),Es(t,r,e,n,a)),null;case 27:if(Oe(t),a=re.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&da(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return ke(t),null}e=K.current,Dn(t)?gf(t):(e=Qp(r,n,a),t.stateNode=e,da(t))}return ke(t),null;case 5:if(Oe(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&da(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return ke(t),null}if(i=K.current,Dn(t))gf(t);else{var d=bi(re.current);switch(i){case 1:i=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:i=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":i=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":i=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?d.createElement("select",{is:n.is}):d.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?d.createElement(r,{is:n.is}):d.createElement(r)}}i[et]=t,i[dt]=n;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=i;e:switch(lt(i,r,n),r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&da(t)}}return ke(t),Es(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&da(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=re.current,Dn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,r=tt,r!==null)switch(r.tag){case 27:case 5:n=r.memoizedProps}e[et]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Mp(e.nodeValue,a)),e||Aa(t,!0)}else e=bi(e).createTextNode(n),e[et]=t,t.stateNode=e}return ke(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Dn(t),a!==null){if(e===null){if(!n)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[et]=t}else an(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ke(t),e=!1}else a=_o(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(At(t),t):(At(t),null);if((t.flags&128)!==0)throw Error(c(558))}return ke(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Dn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!r)throw Error(c(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(c(317));r[et]=t}else an(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ke(t),r=!1}else r=_o(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(At(t),t):(At(t),null)}return At(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,r=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(r=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==r&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ai(t,t.updateQueue),ke(t),null);case 4:return ae(),e===null&&Qs(t.stateNode.containerInfo),ke(t),null;case 10:return sa(t.type),ke(t),null;case 19:if(z(Qe),n=t.memoizedState,n===null)return ke(t),null;if(r=(t.flags&128)!==0,i=n.rendering,i===null)if(r)Ll(n,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Xr(e),i!==null){for(t.flags|=128,Ll(n,!1),e=i.updateQueue,t.updateQueue=e,ai(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)ff(a,e),a=a.sibling;return k(Qe,Qe.current&1|2),Se&&ia(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&St()>oi&&(t.flags|=128,r=!0,Ll(n,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(i),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,ai(t,e),Ll(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!Se)return ke(t),null}else 2*St()-n.renderingStartTime>oi&&a!==536870912&&(t.flags|=128,r=!0,Ll(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=St(),e.sibling=null,a=Qe.current,k(Qe,r?a&1|2:a&1),Se&&ia(t,n.treeForkCount),e):(ke(t),null);case 22:case 23:return At(t),Vo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),a=t.updateQueue,a!==null&&ai(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&z(rn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),sa(Ze),ke(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function R0(e,t){switch(Oo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sa(Ze),ae(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Oe(t),null;case 31:if(t.memoizedState!==null){if(At(t),t.alternate===null)throw Error(c(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(At(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));an()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(Qe),null;case 4:return ae(),null;case 10:return sa(t.type),null;case 22:case 23:return At(t),Vo(),e!==null&&z(rn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return sa(Ze),null;case 25:return null;default:return null}}function Bd(e,t){switch(Oo(t),t.tag){case 3:sa(Ze),ae();break;case 26:case 27:case 5:Oe(t);break;case 4:ae();break;case 31:t.memoizedState!==null&&At(t);break;case 13:At(t);break;case 19:z(Qe);break;case 10:sa(t.type);break;case 22:case 23:At(t),Vo(),e!==null&&z(rn);break;case 24:sa(Ze)}}function kl(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var r=n.next;a=r;do{if((a.tag&e)===e){n=void 0;var i=a.create,d=a.inst;n=i(),d.destroy=n}a=a.next}while(a!==r)}}catch(h){Re(t,t.return,h)}}function Da(e,t,a){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){var d=n.inst,h=d.destroy;if(h!==void 0){d.destroy=void 0,r=t;var E=a,C=h;try{C()}catch(q){Re(r,E,q)}}}n=n.next}while(n!==i)}}catch(q){Re(t,t.return,q)}}function Hd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{zf(t,a)}catch(n){Re(e,e.return,n)}}}function qd(e,t,a){a.props=fn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Re(e,t,n)}}function Bl(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(r){Re(e,t,r)}}function Pt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(r){Re(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){Re(e,t,r)}else a.current=null}function Yd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(r){Re(e,e.return,r)}}function Ns(e,t,a){try{var n=e.stateNode;$0(n,e.type,a,t),n[dt]=t}catch(r){Re(e,e.return,r)}}function Gd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function ws(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function js(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=na));else if(n!==4&&(n===27&&Ya(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(js(e,t,a),e=e.sibling;e!==null;)js(e,t,a),e=e.sibling}function ni(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ni(e,t,a),e=e.sibling;e!==null;)ni(e,t,a),e=e.sibling}function Xd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);lt(t,n,a),t[et]=e,t[dt]=a}catch(i){Re(e,e.return,i)}}var pa=!1,Fe=!1,Ts=!1,Qd=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function z0(e,t){if(e=e.containerInfo,Ks=wi,e=tf(e),xo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var r=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var d=0,h=-1,E=-1,C=0,q=0,Q=e,M=null;t:for(;;){for(var L;Q!==a||r!==0&&Q.nodeType!==3||(h=d+r),Q!==i||n!==0&&Q.nodeType!==3||(E=d+n),Q.nodeType===3&&(d+=Q.nodeValue.length),(L=Q.firstChild)!==null;)M=Q,Q=L;for(;;){if(Q===e)break t;if(M===a&&++C===r&&(h=d),M===i&&++q===n&&(E=d),(L=Q.nextSibling)!==null)break;Q=M,M=Q.parentNode}Q=L}a=h===-1||E===-1?null:{start:h,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(Js={focusedElem:e,selectionRange:a},wi=!1,Pe=t;Pe!==null;)if(t=Pe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Pe=e;else for(;Pe!==null;){switch(t=Pe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,r=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var ee=fn(a.type,r);e=n.getSnapshotBeforeUpdate(ee,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Re(a,a.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Ws(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ws(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Pe=e;break}Pe=t.return}}function Vd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),n&4&&kl(5,a);break;case 1:if(ha(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){Re(a,a.return,d)}else{var r=fn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Re(a,a.return,d)}}n&64&&Hd(a),n&512&&Bl(a,a.return);break;case 3:if(ha(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{zf(e,t)}catch(d){Re(a,a.return,d)}}break;case 27:t===null&&n&4&&Xd(a);case 26:case 5:ha(e,a),t===null&&n&4&&Yd(a),n&512&&Bl(a,a.return);break;case 12:ha(e,a);break;case 31:ha(e,a),n&4&&Jd(e,a);break;case 13:ha(e,a),n&4&&Fd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=B0.bind(null,a),lb(e,a))));break;case 22:if(n=a.memoizedState!==null||pa,!n){t=t!==null&&t.memoizedState!==null||Fe,r=pa;var i=Fe;pa=n,(Fe=t)&&!i?ga(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),pa=r,Fe=i}break;case 30:break;default:ha(e,a)}}function Zd(e){var t=e.alternate;t!==null&&(e.alternate=null,Zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&to(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,mt=!1;function ma(e,t,a){for(a=a.child;a!==null;)Kd(e,t,a),a=a.sibling}function Kd(e,t,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(sl,a)}catch{}switch(a.tag){case 26:Fe||Pt(a,t),ma(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Fe||Pt(a,t);var n=Be,r=mt;Ya(a.type)&&(Be=a.stateNode,mt=!1),ma(e,t,a),Kl(a.stateNode),Be=n,mt=r;break;case 5:Fe||Pt(a,t);case 6:if(n=Be,r=mt,Be=null,ma(e,t,a),Be=n,mt=r,Be!==null)if(mt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(a.stateNode)}catch(i){Re(a,t,i)}else try{Be.removeChild(a.stateNode)}catch(i){Re(a,t,i)}break;case 18:Be!==null&&(mt?(e=Be,Hp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),tl(e)):Hp(Be,a.stateNode));break;case 4:n=Be,r=mt,Be=a.stateNode.containerInfo,mt=!0,ma(e,t,a),Be=n,mt=r;break;case 0:case 11:case 14:case 15:Da(2,a,t),Fe||Da(4,a,t),ma(e,t,a);break;case 1:Fe||(Pt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&qd(a,t,n)),ma(e,t,a);break;case 21:ma(e,t,a);break;case 22:Fe=(n=Fe)||a.memoizedState!==null,ma(e,t,a),Fe=n;break;default:ma(e,t,a)}}function Jd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{tl(e)}catch(a){Re(t,t.return,a)}}}function Fd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{tl(e)}catch(a){Re(t,t.return,a)}}function O0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qd),t;default:throw Error(c(435,e.tag))}}function li(e,t){var a=O0(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var r=H0.bind(null,e,n);n.then(r,r)}})}function ht(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var r=a[n],i=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 27:if(Ya(h.type)){Be=h.stateNode,mt=!1;break e}break;case 5:Be=h.stateNode,mt=!1;break e;case 3:case 4:Be=h.stateNode.containerInfo,mt=!0;break e}h=h.return}if(Be===null)throw Error(c(160));Kd(i,d,r),Be=null,mt=!1,i=r.alternate,i!==null&&(i.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$d(t,e),t=t.sibling}var Vt=null;function $d(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ht(t,e),gt(e),n&4&&(Da(3,e,e.return),kl(3,e),Da(5,e,e.return));break;case 1:ht(t,e),gt(e),n&512&&(Fe||a===null||Pt(a,a.return)),n&64&&pa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var r=Vt;if(ht(t,e),gt(e),n&512&&(Fe||a===null||Pt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(n){case"title":i=r.getElementsByTagName("title")[0],(!i||i[fl]||i[et]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=r.createElement(n),r.head.insertBefore(i,r.querySelector("head > title"))),lt(i,n,a),i[et]=e,Ie(i),n=i;break e;case"link":var d=$p("link","href",r).get(n+(a.href||""));if(d){for(var h=0;h<d.length;h++)if(i=d[h],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(h,1);break t}}i=r.createElement(n),lt(i,n,a),r.head.appendChild(i);break;case"meta":if(d=$p("meta","content",r).get(n+(a.content||""))){for(h=0;h<d.length;h++)if(i=d[h],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(h,1);break t}}i=r.createElement(n),lt(i,n,a),r.head.appendChild(i);break;default:throw Error(c(468,n))}i[et]=e,Ie(i),n=i}e.stateNode=n}else Wp(r,e.type,e.stateNode);else e.stateNode=Fp(r,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?Wp(r,e.type,e.stateNode):Fp(r,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ns(e,e.memoizedProps,a.memoizedProps)}break;case 27:ht(t,e),gt(e),n&512&&(Fe||a===null||Pt(a,a.return)),a!==null&&n&4&&Ns(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ht(t,e),gt(e),n&512&&(Fe||a===null||Pt(a,a.return)),e.flags&32){r=e.stateNode;try{wn(r,"")}catch(ee){Re(e,e.return,ee)}}n&4&&e.stateNode!=null&&(r=e.memoizedProps,Ns(e,r,a!==null?a.memoizedProps:r)),n&1024&&(Ts=!0);break;case 6:if(ht(t,e),gt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(ee){Re(e,e.return,ee)}}break;case 3:if(vi=null,r=Vt,Vt=yi(t.containerInfo),ht(t,e),Vt=r,gt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{tl(t.containerInfo)}catch(ee){Re(e,e.return,ee)}Ts&&(Ts=!1,Wd(e));break;case 4:n=Vt,Vt=yi(e.stateNode.containerInfo),ht(t,e),gt(e),Vt=n;break;case 12:ht(t,e),gt(e);break;case 31:ht(t,e),gt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,li(e,n)));break;case 13:ht(t,e),gt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ii=St()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,li(e,n)));break;case 22:r=e.memoizedState!==null;var E=a!==null&&a.memoizedState!==null,C=pa,q=Fe;if(pa=C||r,Fe=q||E,ht(t,e),Fe=q,pa=C,gt(e),n&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(a===null||E||pa||Fe||dn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){E=a=t;try{if(i=E.stateNode,r)d=i.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{h=E.stateNode;var Q=E.memoizedProps.style,M=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;h.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(ee){Re(E,E.return,ee)}}}else if(t.tag===6){if(a===null){E=t;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(ee){Re(E,E.return,ee)}}}else if(t.tag===18){if(a===null){E=t;try{var L=E.stateNode;r?qp(L,!0):qp(E.stateNode,!1)}catch(ee){Re(E,E.return,ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,li(e,a))));break;case 19:ht(t,e),gt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,li(e,n)));break;case 30:break;case 21:break;default:ht(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Gd(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var r=a.stateNode,i=ws(e);ni(e,i,r);break;case 5:var d=a.stateNode;a.flags&32&&(wn(d,""),a.flags&=-33);var h=ws(e);ni(e,h,d);break;case 3:case 4:var E=a.stateNode.containerInfo,C=ws(e);js(e,C,E);break;default:throw Error(c(161))}}catch(q){Re(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ha(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vd(e,t.alternate,t),t=t.sibling}function dn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Da(4,t,t.return),dn(t);break;case 1:Pt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&qd(t,t.return,a),dn(t);break;case 27:Kl(t.stateNode);case 26:case 5:Pt(t,t.return),dn(t);break;case 22:t.memoizedState===null&&dn(t);break;case 30:dn(t);break;default:dn(t)}e=e.sibling}}function ga(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,r=e,i=t,d=i.flags;switch(i.tag){case 0:case 11:case 15:ga(r,i,a),kl(4,i);break;case 1:if(ga(r,i,a),n=i,r=n.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(C){Re(n,n.return,C)}if(n=i,r=n.updateQueue,r!==null){var h=n.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)Rf(E[r],h)}catch(C){Re(n,n.return,C)}}a&&d&64&&Hd(i),Bl(i,i.return);break;case 27:Xd(i);case 26:case 5:ga(r,i,a),a&&n===null&&d&4&&Yd(i),Bl(i,i.return);break;case 12:ga(r,i,a);break;case 31:ga(r,i,a),a&&d&4&&Jd(r,i);break;case 13:ga(r,i,a),a&&d&4&&Fd(r,i);break;case 22:i.memoizedState===null&&ga(r,i,a),Bl(i,i.return);break;case 30:break;default:ga(r,i,a)}t=t.sibling}}function As(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&wl(a))}function Rs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e))}function Zt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Id(e,t,a,n),t=t.sibling}function Id(e,t,a,n){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Zt(e,t,a,n),r&2048&&kl(9,t);break;case 1:Zt(e,t,a,n);break;case 3:Zt(e,t,a,n),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wl(e)));break;case 12:if(r&2048){Zt(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,d=i.id,h=i.onPostCommit;typeof h=="function"&&h(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Re(t,t.return,E)}}else Zt(e,t,a,n);break;case 31:Zt(e,t,a,n);break;case 13:Zt(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,d=t.alternate,t.memoizedState!==null?i._visibility&2?Zt(e,t,a,n):Hl(e,t):i._visibility&2?Zt(e,t,a,n):(i._visibility|=2,Qn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),r&2048&&As(d,t);break;case 24:Zt(e,t,a,n),r&2048&&Rs(t.alternate,t);break;default:Zt(e,t,a,n)}}function Qn(e,t,a,n,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,d=t,h=a,E=n,C=d.flags;switch(d.tag){case 0:case 11:case 15:Qn(i,d,h,E,r),kl(8,d);break;case 23:break;case 22:var q=d.stateNode;d.memoizedState!==null?q._visibility&2?Qn(i,d,h,E,r):Hl(i,d):(q._visibility|=2,Qn(i,d,h,E,r)),r&&C&2048&&As(d.alternate,d);break;case 24:Qn(i,d,h,E,r),r&&C&2048&&Rs(d.alternate,d);break;default:Qn(i,d,h,E,r)}t=t.sibling}}function Hl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,r=n.flags;switch(n.tag){case 22:Hl(a,n),r&2048&&As(n.alternate,n);break;case 24:Hl(a,n),r&2048&&Rs(n.alternate,n);break;default:Hl(a,n)}t=t.sibling}}var ql=8192;function Vn(e,t,a){if(e.subtreeFlags&ql)for(e=e.child;e!==null;)Pd(e,t,a),e=e.sibling}function Pd(e,t,a){switch(e.tag){case 26:Vn(e,t,a),e.flags&ql&&e.memoizedState!==null&&gb(a,Vt,e.memoizedState,e.memoizedProps);break;case 5:Vn(e,t,a);break;case 3:case 4:var n=Vt;Vt=yi(e.stateNode.containerInfo),Vn(e,t,a),Vt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ql,ql=16777216,Vn(e,t,a),ql=n):Vn(e,t,a));break;default:Vn(e,t,a)}}function ep(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Pe=n,ap(n,e)}ep(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tp(e),e=e.sibling}function tp(e){switch(e.tag){case 0:case 11:case 15:Yl(e),e.flags&2048&&Da(9,e,e.return);break;case 3:Yl(e);break;case 12:Yl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ri(e)):Yl(e);break;default:Yl(e)}}function ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Pe=n,ap(n,e)}ep(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Da(8,t,t.return),ri(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ri(t));break;default:ri(t)}e=e.sibling}}function ap(e,t){for(;Pe!==null;){var a=Pe;switch(a.tag){case 0:case 11:case 15:Da(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:wl(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Pe=n;else e:for(a=e;Pe!==null;){n=Pe;var r=n.sibling,i=n.return;if(Zd(n),n===a){Pe=null;break e}if(r!==null){r.return=i,Pe=r;break e}Pe=i}}}var C0={getCacheForType:function(e){var t=at(Ze),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return at(Ze).controller.signal}},_0=typeof WeakMap=="function"?WeakMap:Map,Te=0,Ue=null,be=null,xe=0,Ae=0,Rt=null,Ua=!1,Zn=!1,zs=!1,ba=0,Xe=0,La=0,pn=0,Os=0,zt=0,Kn=0,Gl=null,bt=null,Cs=!1,ii=0,np=0,oi=1/0,si=null,ka=null,$e=0,Ba=null,Jn=null,ya=0,_s=0,Ms=null,lp=null,Xl=0,Ds=null;function Ot(){return(Te&2)!==0&&xe!==0?xe&-xe:_.T!==null?qs():xu()}function rp(){if(zt===0)if((xe&536870912)===0||Se){var e=gr;gr<<=1,(gr&3932160)===0&&(gr=262144),zt=e}else zt=536870912;return e=Tt.current,e!==null&&(e.flags|=32),zt}function yt(e,t,a){(e===Ue&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(Fn(e,0),Ha(e,xe,zt,!1)),ul(e,a),((Te&2)===0||e!==Ue)&&(e===Ue&&((Te&2)===0&&(pn|=a),Xe===4&&Ha(e,xe,zt,!1)),ea(e))}function ip(e,t,a){if((Te&6)!==0)throw Error(c(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||cl(e,t),r=n?U0(e,t):Ls(e,t,!0),i=n;do{if(r===0){Zn&&!n&&Ha(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!M0(a)){r=Ls(e,t,!1),i=!1;continue}if(r===2){if(i=t,e.errorRecoveryDisabledLanes&i)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var h=e;r=Gl;var E=h.current.memoizedState.isDehydrated;if(E&&(Fn(h,d).flags|=256),d=Ls(h,d,!1),d!==2){if(zs&&!E){h.errorRecoveryDisabledLanes|=i,pn|=i,r=4;break e}i=bt,bt=r,i!==null&&(bt===null?bt=i:bt.push.apply(bt,i))}r=d}if(i=!1,r!==2)continue}}if(r===1){Fn(e,0),Ha(e,t,0,!0);break}e:{switch(n=e,i=r,i){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Ha(n,t,zt,!Ua);break e;case 2:bt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(r=ii+300-St(),10<r)){if(Ha(n,t,zt,!Ua),yr(n,0,!0)!==0)break e;ya=t,n.timeoutHandle=kp(op.bind(null,n,a,bt,si,Cs,t,zt,pn,Kn,Ua,i,"Throttled",-0,0),r);break e}op(n,a,bt,si,Cs,t,zt,pn,Kn,Ua,i,null,-0,0)}}break}while(!0);ea(e)}function op(e,t,a,n,r,i,d,h,E,C,q,Q,M,L){if(e.timeoutHandle=-1,Q=t.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:na},Pd(t,i,Q);var ee=(i&62914560)===i?ii-St():(i&4194048)===i?np-St():0;if(ee=bb(Q,ee),ee!==null){ya=i,e.cancelPendingCommit=ee(hp.bind(null,e,t,i,a,n,r,d,h,E,q,Q,null,M,L)),Ha(e,i,d,!C);return}}hp(e,t,i,a,n,r,d,h,E)}function M0(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var r=a[n],i=r.getSnapshot;r=r.value;try{if(!wt(i(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ha(e,t,a,n){t&=~Os,t&=~pn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var r=t;0<r;){var i=31-Nt(r),d=1<<i;n[i]=-1,r&=~d}a!==0&&gu(e,a,t)}function ci(){return(Te&6)===0?(Ql(0),!1):!0}function Us(){if(be!==null){if(Ae===0)var e=be.return;else e=be,oa=nn=null,Wo(e),Hn=null,Tl=0,e=be;for(;e!==null;)Bd(e.alternate,e),e=e.return;be=null}}function Fn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,P0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ya=0,Us(),Ue=e,be=a=ra(e.current,null),xe=t,Ae=0,Rt=null,Ua=!1,Zn=cl(e,t),zs=!1,Kn=zt=Os=pn=La=Xe=0,bt=Gl=null,Cs=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Nt(n),i=1<<r;t|=e[r],n&=~i}return ba=t,Or(),a}function sp(e,t){de=null,_.H=Dl,t===Bn||t===Br?(t=wf(),Ae=3):t===Ho?(t=wf(),Ae=4):Ae=t===ps?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Rt=t,be===null&&(Xe=1,Ir(e,kt(t,e.current)))}function cp(){var e=Tt.current;return e===null?!0:(xe&4194048)===xe?Yt===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Yt:!1}function up(){var e=_.H;return _.H=Dl,e===null?Dl:e}function fp(){var e=_.A;return _.A=C0,e}function ui(){Xe=4,Ua||(xe&4194048)!==xe&&Tt.current!==null||(Zn=!0),(La&134217727)===0&&(pn&134217727)===0||Ue===null||Ha(Ue,xe,zt,!1)}function Ls(e,t,a){var n=Te;Te|=2;var r=up(),i=fp();(Ue!==e||xe!==t)&&(si=null,Fn(e,t)),t=!1;var d=Xe;e:do try{if(Ae!==0&&be!==null){var h=be,E=Rt;switch(Ae){case 8:Us(),d=6;break e;case 3:case 2:case 9:case 6:Tt.current===null&&(t=!0);var C=Ae;if(Ae=0,Rt=null,$n(e,h,E,C),a&&Zn){d=0;break e}break;default:C=Ae,Ae=0,Rt=null,$n(e,h,E,C)}}D0(),d=Xe;break}catch(q){sp(e,q)}while(!0);return t&&e.shellSuspendCounter++,oa=nn=null,Te=n,_.H=r,_.A=i,be===null&&(Ue=null,xe=0,Or()),d}function D0(){for(;be!==null;)dp(be)}function U0(e,t){var a=Te;Te|=2;var n=up(),r=fp();Ue!==e||xe!==t?(si=null,oi=St()+500,Fn(e,t)):Zn=cl(e,t);e:do try{if(Ae!==0&&be!==null){t=be;var i=Rt;t:switch(Ae){case 1:Ae=0,Rt=null,$n(e,t,i,1);break;case 2:case 9:if(Ef(i)){Ae=0,Rt=null,pp(t);break}t=function(){Ae!==2&&Ae!==9||Ue!==e||(Ae=7),ea(e)},i.then(t,t);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:Ef(i)?(Ae=0,Rt=null,pp(t)):(Ae=0,Rt=null,$n(e,t,i,7));break;case 5:var d=null;switch(be.tag){case 26:d=be.memoizedState;case 5:case 27:var h=be;if(d?Ip(d):h.stateNode.complete){Ae=0,Rt=null;var E=h.sibling;if(E!==null)be=E;else{var C=h.return;C!==null?(be=C,fi(C)):be=null}break t}}Ae=0,Rt=null,$n(e,t,i,5);break;case 6:Ae=0,Rt=null,$n(e,t,i,6);break;case 8:Us(),Xe=6;break e;default:throw Error(c(462))}}L0();break}catch(q){sp(e,q)}while(!0);return oa=nn=null,_.H=n,_.A=r,Te=a,be!==null?0:(Ue=null,xe=0,Or(),Xe)}function L0(){for(;be!==null&&!rg();)dp(be)}function dp(e){var t=Ld(e.alternate,e,ba);e.memoizedProps=e.pendingProps,t===null?fi(e):be=t}function pp(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Od(a,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=Od(a,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:Wo(t);default:Bd(a,t),t=be=ff(t,ba),t=Ld(a,t,ba)}e.memoizedProps=e.pendingProps,t===null?fi(e):be=t}function $n(e,t,a,n){oa=nn=null,Wo(t),Hn=null,Tl=0;var r=t.return;try{if(w0(e,r,t,a,xe)){Xe=1,Ir(e,kt(a,e.current)),be=null;return}}catch(i){if(r!==null)throw be=r,i;Xe=1,Ir(e,kt(a,e.current)),be=null;return}t.flags&32768?(Se||n===1?e=!0:Zn||(xe&536870912)!==0?e=!1:(Ua=e=!0,(n===2||n===9||n===3||n===6)&&(n=Tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),mp(t,e)):fi(t)}function fi(e){var t=e;do{if((t.flags&32768)!==0){mp(t,Ua);return}e=t.return;var a=A0(t.alternate,t,ba);if(a!==null){be=a;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Xe===0&&(Xe=5)}function mp(e,t){do{var a=R0(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);Xe=6,be=null}function hp(e,t,a,n,r,i,d,h,E){e.cancelPendingCommit=null;do di();while($e!==0);if((Te&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(i=t.lanes|t.childLanes,i|=wo,hg(e,a,i,d,h,E),e===Ue&&(be=Ue=null,xe=0),Jn=t,Ba=e,ya=a,_s=i,Ms=r,lp=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,q0(mr,function(){return vp(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null,r=$.p,$.p=2,d=Te,Te|=4;try{z0(e,t,a)}finally{Te=d,$.p=r,_.T=n}}$e=1,gp(),bp(),yp()}}function gp(){if($e===1){$e=0;var e=Ba,t=Jn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=_.T,_.T=null;var n=$.p;$.p=2;var r=Te;Te|=4;try{$d(t,e);var i=Js,d=tf(e.containerInfo),h=i.focusedElem,E=i.selectionRange;if(d!==h&&h&&h.ownerDocument&&ef(h.ownerDocument.documentElement,h)){if(E!==null&&xo(h)){var C=E.start,q=E.end;if(q===void 0&&(q=C),"selectionStart"in h)h.selectionStart=C,h.selectionEnd=Math.min(q,h.value.length);else{var Q=h.ownerDocument||document,M=Q&&Q.defaultView||window;if(M.getSelection){var L=M.getSelection(),ee=h.textContent.length,oe=Math.min(E.start,ee),Me=E.end===void 0?oe:Math.min(E.end,ee);!L.extend&&oe>Me&&(d=Me,Me=oe,oe=d);var T=Pu(h,oe),N=Pu(h,Me);if(T&&N&&(L.rangeCount!==1||L.anchorNode!==T.node||L.anchorOffset!==T.offset||L.focusNode!==N.node||L.focusOffset!==N.offset)){var O=Q.createRange();O.setStart(T.node,T.offset),L.removeAllRanges(),oe>Me?(L.addRange(O),L.extend(N.node,N.offset)):(O.setEnd(N.node,N.offset),L.addRange(O))}}}}for(Q=[],L=h;L=L.parentNode;)L.nodeType===1&&Q.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<Q.length;h++){var X=Q[h];X.element.scrollLeft=X.left,X.element.scrollTop=X.top}}wi=!!Ks,Js=Ks=null}finally{Te=r,$.p=n,_.T=a}}e.current=t,$e=2}}function bp(){if($e===2){$e=0;var e=Ba,t=Jn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=_.T,_.T=null;var n=$.p;$.p=2;var r=Te;Te|=4;try{Vd(e,t.alternate,t)}finally{Te=r,$.p=n,_.T=a}}$e=3}}function yp(){if($e===4||$e===3){$e=0,ig();var e=Ba,t=Jn,a=ya,n=lp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,Jn=Ba=null,xp(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ka=null),Pi(a),t=t.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(sl,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=_.T,r=$.p,$.p=2,_.T=null;try{for(var i=e.onRecoverableError,d=0;d<n.length;d++){var h=n[d];i(h.value,{componentStack:h.stack})}}finally{_.T=t,$.p=r}}(ya&3)!==0&&di(),ea(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===Ds?Xl++:(Xl=0,Ds=e):Xl=0,Ql(0)}}function xp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wl(t)))}function di(){return gp(),bp(),yp(),vp()}function vp(){if($e!==5)return!1;var e=Ba,t=_s;_s=0;var a=Pi(ya),n=_.T,r=$.p;try{$.p=32>a?32:a,_.T=null,a=Ms,Ms=null;var i=Ba,d=ya;if($e=0,Jn=Ba=null,ya=0,(Te&6)!==0)throw Error(c(331));var h=Te;if(Te|=4,tp(i.current),Id(i,i.current,d,a),Te=h,Ql(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(sl,i)}catch{}return!0}finally{$.p=r,_.T=n,xp(e,t)}}function Sp(e,t,a){t=kt(a,t),t=ds(e.stateNode,t,2),e=Ca(e,t,2),e!==null&&(ul(e,2),ea(e))}function Re(e,t,a){if(e.tag===3)Sp(e,e,a);else for(;t!==null;){if(t.tag===3){Sp(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ka===null||!ka.has(n))){e=kt(a,e),a=Ed(2),n=Ca(t,a,2),n!==null&&(Nd(a,n,t,e),ul(n,2),ea(n));break}}t=t.return}}function ks(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new _0;var r=new Set;n.set(t,r)}else r=n.get(t),r===void 0&&(r=new Set,n.set(t,r));r.has(a)||(zs=!0,r.add(a),e=k0.bind(null,e,t,a),t.then(e,e))}function k0(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ue===e&&(xe&a)===a&&(Xe===4||Xe===3&&(xe&62914560)===xe&&300>St()-ii?(Te&2)===0&&Fn(e,0):Os|=a,Kn===xe&&(Kn=0)),ea(e)}function Ep(e,t){t===0&&(t=hu()),e=en(e,t),e!==null&&(ul(e,t),ea(e))}function B0(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ep(e,a)}function H0(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),Ep(e,a)}function q0(e,t){return Fi(e,t)}var pi=null,Wn=null,Bs=!1,mi=!1,Hs=!1,qa=0;function ea(e){e!==Wn&&e.next===null&&(Wn===null?pi=Wn=e:Wn=Wn.next=e),mi=!0,Bs||(Bs=!0,G0())}function Ql(e,t){if(!Hs&&mi){Hs=!0;do for(var a=!1,n=pi;n!==null;){if(e!==0){var r=n.pendingLanes;if(r===0)var i=0;else{var d=n.suspendedLanes,h=n.pingedLanes;i=(1<<31-Nt(42|e)+1)-1,i&=r&~(d&~h),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Tp(n,i))}else i=xe,i=yr(n,n===Ue?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||cl(n,i)||(a=!0,Tp(n,i));n=n.next}while(a);Hs=!1}}function Y0(){Np()}function Np(){mi=Bs=!1;var e=0;qa!==0&&I0()&&(e=qa);for(var t=St(),a=null,n=pi;n!==null;){var r=n.next,i=wp(n,t);i===0?(n.next=null,a===null?pi=r:a.next=r,r===null&&(Wn=a)):(a=n,(e!==0||(i&3)!==0)&&(mi=!0)),n=r}$e!==0&&$e!==5||Ql(e),qa!==0&&(qa=0)}function wp(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var d=31-Nt(i),h=1<<d,E=r[d];E===-1?((h&a)===0||(h&n)!==0)&&(r[d]=mg(h,t)):E<=t&&(e.expiredLanes|=h),i&=~h}if(t=Ue,a=xe,a=yr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&$i(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||cl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&$i(n),Pi(a)){case 2:case 8:a=pu;break;case 32:a=mr;break;case 268435456:a=mu;break;default:a=mr}return n=jp.bind(null,e),a=Fi(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&$i(n),e.callbackPriority=2,e.callbackNode=null,2}function jp(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(di()&&e.callbackNode!==a)return null;var n=xe;return n=yr(e,e===Ue?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(ip(e,n,t),wp(e,St()),e.callbackNode!=null&&e.callbackNode===a?jp.bind(null,e):null)}function Tp(e,t){if(di())return null;ip(e,t,!0)}function G0(){eb(function(){(Te&6)!==0?Fi(du,Y0):Np()})}function qs(){if(qa===0){var e=Ln;e===0&&(e=hr,hr<<=1,(hr&261888)===0&&(hr=256)),qa=e}return qa}function Ap(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Er(""+e)}function Rp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function X0(e,t,a,n,r){if(t==="submit"&&a&&a.stateNode===r){var i=Ap((r[dt]||null).action),d=n.submitter;d&&(t=(t=d[dt]||null)?Ap(t.formAction):d.getAttribute("formAction"),t!==null&&(i=t,d=null));var h=new Tr("action","action",null,n,r);e.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(qa!==0){var E=d?Rp(r,d):new FormData(r);is(a,{pending:!0,data:E,method:r.method,action:i},null,E)}}else typeof i=="function"&&(h.preventDefault(),E=d?Rp(r,d):new FormData(r),is(a,{pending:!0,data:E,method:r.method,action:i},i,E))},currentTarget:r}]})}}for(var Ys=0;Ys<No.length;Ys++){var Gs=No[Ys],Q0=Gs.toLowerCase(),V0=Gs[0].toUpperCase()+Gs.slice(1);Qt(Q0,"on"+V0)}Qt(lf,"onAnimationEnd"),Qt(rf,"onAnimationIteration"),Qt(of,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(o0,"onTransitionRun"),Qt(s0,"onTransitionStart"),Qt(c0,"onTransitionCancel"),Qt(sf,"onTransitionEnd"),En("onMouseEnter",["mouseout","mouseover"]),En("onMouseLeave",["mouseout","mouseover"]),En("onPointerEnter",["pointerout","pointerover"]),En("onPointerLeave",["pointerout","pointerover"]),$a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$a("onBeforeInput",["compositionend","keypress","textInput","paste"]),$a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vl));function zp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],r=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var d=n.length-1;0<=d;d--){var h=n[d],E=h.instance,C=h.currentTarget;if(h=h.listener,E!==i&&r.isPropagationStopped())break e;i=h,r.currentTarget=C;try{i(r)}catch(q){zr(q)}r.currentTarget=null,i=E}else for(d=0;d<n.length;d++){if(h=n[d],E=h.instance,C=h.currentTarget,h=h.listener,E!==i&&r.isPropagationStopped())break e;i=h,r.currentTarget=C;try{i(r)}catch(q){zr(q)}r.currentTarget=null,i=E}}}}function ye(e,t){var a=t[eo];a===void 0&&(a=t[eo]=new Set);var n=e+"__bubble";a.has(n)||(Op(t,e,2,!1),a.add(n))}function Xs(e,t,a){var n=0;t&&(n|=4),Op(a,e,n,t)}var hi="_reactListening"+Math.random().toString(36).slice(2);function Qs(e){if(!e[hi]){e[hi]=!0,Eu.forEach(function(a){a!=="selectionchange"&&(Z0.has(a)||Xs(a,!1,e),Xs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,Xs("selectionchange",!1,t))}}function Op(e,t,a,n){switch(rm(t)){case 2:var r=vb;break;case 8:r=Sb;break;default:r=rc}a=r.bind(null,t,a,e),r=void 0,!co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),n?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function Vs(e,t,a,n,r){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var h=n.stateNode.containerInfo;if(h===r)break;if(d===4)for(d=n.return;d!==null;){var E=d.tag;if((E===3||E===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;h!==null;){if(d=xn(h),d===null)return;if(E=d.tag,E===5||E===6||E===26||E===27){n=i=d;continue e}h=h.parentNode}}n=n.return}Du(function(){var C=i,q=oo(a),Q=[];e:{var M=cf.get(e);if(M!==void 0){var L=Tr,ee=e;switch(e){case"keypress":if(wr(a)===0)break e;case"keydown":case"keyup":L=Hg;break;case"focusin":ee="focus",L=mo;break;case"focusout":ee="blur",L=mo;break;case"beforeblur":case"afterblur":L=mo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Gg;break;case lf:case rf:case of:L=Og;break;case sf:L=Qg;break;case"scroll":case"scrollend":L=jg;break;case"wheel":L=Zg;break;case"copy":case"cut":case"paste":L=_g;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Hu;break;case"toggle":case"beforetoggle":L=Jg}var oe=(t&4)!==0,Me=!oe&&(e==="scroll"||e==="scrollend"),T=oe?M!==null?M+"Capture":null:M;oe=[];for(var N=C,O;N!==null;){var X=N;if(O=X.stateNode,X=X.tag,X!==5&&X!==26&&X!==27||O===null||T===null||(X=pl(N,T),X!=null&&oe.push(Zl(N,X,O))),Me)break;N=N.return}0<oe.length&&(M=new L(M,ee,null,a,q),Q.push({event:M,listeners:oe}))}}if((t&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",M&&a!==io&&(ee=a.relatedTarget||a.fromElement)&&(xn(ee)||ee[yn]))break e;if((L||M)&&(M=q.window===q?q:(M=q.ownerDocument)?M.defaultView||M.parentWindow:window,L?(ee=a.relatedTarget||a.toElement,L=C,ee=ee?xn(ee):null,ee!==null&&(Me=p(ee),oe=ee.tag,ee!==Me||oe!==5&&oe!==27&&oe!==6)&&(ee=null)):(L=null,ee=C),L!==ee)){if(oe=ku,X="onMouseLeave",T="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Hu,X="onPointerLeave",T="onPointerEnter",N="pointer"),Me=L==null?M:dl(L),O=ee==null?M:dl(ee),M=new oe(X,N+"leave",L,a,q),M.target=Me,M.relatedTarget=O,X=null,xn(q)===C&&(oe=new oe(T,N+"enter",ee,a,q),oe.target=O,oe.relatedTarget=Me,X=oe),Me=X,L&&ee)t:{for(oe=K0,T=L,N=ee,O=0,X=T;X;X=oe(X))O++;X=0;for(var le=N;le;le=oe(le))X++;for(;0<O-X;)T=oe(T),O--;for(;0<X-O;)N=oe(N),X--;for(;O--;){if(T===N||N!==null&&T===N.alternate){oe=T;break t}T=oe(T),N=oe(N)}oe=null}else oe=null;L!==null&&Cp(Q,M,L,oe,!1),ee!==null&&Me!==null&&Cp(Q,Me,ee,oe,!0)}}e:{if(M=C?dl(C):window,L=M.nodeName&&M.nodeName.toLowerCase(),L==="select"||L==="input"&&M.type==="file")var we=Ku;else if(Vu(M))if(Ju)we=l0;else{we=a0;var ne=t0}else L=M.nodeName,!L||L.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?C&&ro(C.elementType)&&(we=Ku):we=n0;if(we&&(we=we(e,C))){Zu(Q,we,a,q);break e}ne&&ne(e,M,C),e==="focusout"&&C&&M.type==="number"&&C.memoizedProps.value!=null&&lo(M,"number",M.value)}switch(ne=C?dl(C):window,e){case"focusin":(Vu(ne)||ne.contentEditable==="true")&&(Rn=ne,vo=C,Sl=null);break;case"focusout":Sl=vo=Rn=null;break;case"mousedown":So=!0;break;case"contextmenu":case"mouseup":case"dragend":So=!1,af(Q,a,q);break;case"selectionchange":if(i0)break;case"keydown":case"keyup":af(Q,a,q)}var me;if(go)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else An?Xu(e,a)&&(ve="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(qu&&a.locale!=="ko"&&(An||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&An&&(me=Uu()):(wa=q,uo="value"in wa?wa.value:wa.textContent,An=!0)),ne=gi(C,ve),0<ne.length&&(ve=new Bu(ve,e,null,a,q),Q.push({event:ve,listeners:ne}),me?ve.data=me:(me=Qu(a),me!==null&&(ve.data=me)))),(me=$g?Wg(e,a):Ig(e,a))&&(ve=gi(C,"onBeforeInput"),0<ve.length&&(ne=new Bu("onBeforeInput","beforeinput",null,a,q),Q.push({event:ne,listeners:ve}),ne.data=me)),X0(Q,e,C,a,q)}zp(Q,t)})}function Zl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function gi(e,t){for(var a=t+"Capture",n=[];e!==null;){var r=e,i=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||i===null||(r=pl(e,a),r!=null&&n.unshift(Zl(e,r,i)),r=pl(e,t),r!=null&&n.push(Zl(e,r,i))),e.tag===3)return n;e=e.return}return[]}function K0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cp(e,t,a,n,r){for(var i=t._reactName,d=[];a!==null&&a!==n;){var h=a,E=h.alternate,C=h.stateNode;if(h=h.tag,E!==null&&E===n)break;h!==5&&h!==26&&h!==27||C===null||(E=C,r?(C=pl(a,i),C!=null&&d.unshift(Zl(a,C,E))):r||(C=pl(a,i),C!=null&&d.push(Zl(a,C,E)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var J0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function _p(e){return(typeof e=="string"?e:""+e).replace(J0,`
`).replace(F0,"")}function Mp(e,t){return t=_p(t),_p(e)===t}function _e(e,t,a,n,r,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||wn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&wn(e,""+n);break;case"className":vr(e,"class",n);break;case"tabIndex":vr(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":vr(e,a,n);break;case"style":_u(e,n,i);break;case"data":if(t!=="object"){vr(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Er(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&_e(e,t,"name",r.name,r,null),_e(e,t,"formEncType",r.formEncType,r,null),_e(e,t,"formMethod",r.formMethod,r,null),_e(e,t,"formTarget",r.formTarget,r,null)):(_e(e,t,"encType",r.encType,r,null),_e(e,t,"method",r.method,r,null),_e(e,t,"target",r.target,r,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Er(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=na);break;case"onScroll":n!=null&&ye("scroll",e);break;case"onScrollEnd":n!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Er(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ye("beforetoggle",e),ye("toggle",e),xr(e,"popover",n);break;case"xlinkActuate":aa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":aa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":aa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":aa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":aa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":aa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":aa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":aa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":aa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":xr(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ng.get(a)||a,xr(e,a,n))}}function Zs(e,t,a,n,r,i){switch(a){case"style":_u(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(r.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?wn(e,n):(typeof n=="number"||typeof n=="bigint")&&wn(e,""+n);break;case"onScroll":n!=null&&ye("scroll",e);break;case"onScrollEnd":n!=null&&ye("scrollend",e);break;case"onClick":n!=null&&(e.onclick=na);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),t=a.slice(2,r?a.length-7:void 0),i=e[dt]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,r),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,r);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):xr(e,a,n)}}}function lt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var n=!1,r=!1,i;for(i in a)if(a.hasOwnProperty(i)){var d=a[i];if(d!=null)switch(i){case"src":n=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:_e(e,t,i,d,a,null)}}r&&_e(e,t,"srcSet",a.srcSet,a,null),n&&_e(e,t,"src",a.src,a,null);return;case"input":ye("invalid",e);var h=i=d=r=null,E=null,C=null;for(n in a)if(a.hasOwnProperty(n)){var q=a[n];if(q!=null)switch(n){case"name":r=q;break;case"type":d=q;break;case"checked":E=q;break;case"defaultChecked":C=q;break;case"value":i=q;break;case"defaultValue":h=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(c(137,t));break;default:_e(e,t,n,q,a,null)}}Ru(e,i,h,E,C,d,r,!1);return;case"select":ye("invalid",e),n=d=i=null;for(r in a)if(a.hasOwnProperty(r)&&(h=a[r],h!=null))switch(r){case"value":i=h;break;case"defaultValue":d=h;break;case"multiple":n=h;default:_e(e,t,r,h,a,null)}t=i,a=d,e.multiple=!!n,t!=null?Nn(e,!!n,t,!1):a!=null&&Nn(e,!!n,a,!0);return;case"textarea":ye("invalid",e),i=r=n=null;for(d in a)if(a.hasOwnProperty(d)&&(h=a[d],h!=null))switch(d){case"value":n=h;break;case"defaultValue":r=h;break;case"children":i=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:_e(e,t,d,h,a,null)}Ou(e,n,r,i);return;case"option":for(E in a)a.hasOwnProperty(E)&&(n=a[E],n!=null)&&(E==="selected"?e.selected=n&&typeof n!="function"&&typeof n!="symbol":_e(e,t,E,n,a,null));return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(n=0;n<Vl.length;n++)ye(Vl[n],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(n=a[C],n!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:_e(e,t,C,n,a,null)}return;default:if(ro(t)){for(q in a)a.hasOwnProperty(q)&&(n=a[q],n!==void 0&&Zs(e,t,q,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&_e(e,t,h,n,a,null))}function $0(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,i=null,d=null,h=null,E=null,C=null,q=null;for(L in a){var Q=a[L];if(a.hasOwnProperty(L)&&Q!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":E=Q;default:n.hasOwnProperty(L)||_e(e,t,L,null,n,Q)}}for(var M in n){var L=n[M];if(Q=a[M],n.hasOwnProperty(M)&&(L!=null||Q!=null))switch(M){case"type":i=L;break;case"name":r=L;break;case"checked":C=L;break;case"defaultChecked":q=L;break;case"value":d=L;break;case"defaultValue":h=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(c(137,t));break;default:L!==Q&&_e(e,t,M,L,n,Q)}}no(e,d,h,E,C,q,i,r);return;case"select":L=d=h=M=null;for(i in a)if(E=a[i],a.hasOwnProperty(i)&&E!=null)switch(i){case"value":break;case"multiple":L=E;default:n.hasOwnProperty(i)||_e(e,t,i,null,n,E)}for(r in n)if(i=n[r],E=a[r],n.hasOwnProperty(r)&&(i!=null||E!=null))switch(r){case"value":M=i;break;case"defaultValue":h=i;break;case"multiple":d=i;default:i!==E&&_e(e,t,r,i,n,E)}t=h,a=d,n=L,M!=null?Nn(e,!!a,M,!1):!!n!=!!a&&(t!=null?Nn(e,!!a,t,!0):Nn(e,!!a,a?[]:"",!1));return;case"textarea":L=M=null;for(h in a)if(r=a[h],a.hasOwnProperty(h)&&r!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:_e(e,t,h,null,n,r)}for(d in n)if(r=n[d],i=a[d],n.hasOwnProperty(d)&&(r!=null||i!=null))switch(d){case"value":M=r;break;case"defaultValue":L=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(c(91));break;default:r!==i&&_e(e,t,d,r,n,i)}zu(e,M,L);return;case"option":for(var ee in a)M=a[ee],a.hasOwnProperty(ee)&&M!=null&&!n.hasOwnProperty(ee)&&(ee==="selected"?e.selected=!1:_e(e,t,ee,null,n,M));for(E in n)M=n[E],L=a[E],n.hasOwnProperty(E)&&M!==L&&(M!=null||L!=null)&&(E==="selected"?e.selected=M&&typeof M!="function"&&typeof M!="symbol":_e(e,t,E,M,n,L));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)M=a[oe],a.hasOwnProperty(oe)&&M!=null&&!n.hasOwnProperty(oe)&&_e(e,t,oe,null,n,M);for(C in n)if(M=n[C],L=a[C],n.hasOwnProperty(C)&&M!==L&&(M!=null||L!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(c(137,t));break;default:_e(e,t,C,M,n,L)}return;default:if(ro(t)){for(var Me in a)M=a[Me],a.hasOwnProperty(Me)&&M!==void 0&&!n.hasOwnProperty(Me)&&Zs(e,t,Me,void 0,n,M);for(q in n)M=n[q],L=a[q],!n.hasOwnProperty(q)||M===L||M===void 0&&L===void 0||Zs(e,t,q,M,n,L);return}}for(var T in a)M=a[T],a.hasOwnProperty(T)&&M!=null&&!n.hasOwnProperty(T)&&_e(e,t,T,null,n,M);for(Q in n)M=n[Q],L=a[Q],!n.hasOwnProperty(Q)||M===L||M==null&&L==null||_e(e,t,Q,M,n,L)}function Dp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function W0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var r=a[n],i=r.transferSize,d=r.initiatorType,h=r.duration;if(i&&h&&Dp(d)){for(d=0,h=r.responseEnd,n+=1;n<a.length;n++){var E=a[n],C=E.startTime;if(C>h)break;var q=E.transferSize,Q=E.initiatorType;q&&Dp(Q)&&(E=E.responseEnd,d+=q*(E<h?1:(h-C)/(E-C)))}if(--n,t+=8*(i+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ks=null,Js=null;function bi(e){return e.nodeType===9?e:e.ownerDocument}function Up(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Fs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $s=null;function I0(){var e=window.event;return e&&e.type==="popstate"?e===$s?!1:($s=e,!0):($s=null,!1)}var kp=typeof setTimeout=="function"?setTimeout:void 0,P0=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,eb=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(e){return Bp.resolve(null).then(e).catch(tb)}:kp;function tb(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function Hp(e,t){var a=t,n=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(r),tl(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Kl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Kl(a);for(var i=a.firstChild;i;){var d=i.nextSibling,h=i.nodeName;i[fl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=d}}else a==="body"&&Kl(e.ownerDocument.body);a=r}while(a);tl(t)}function qp(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Ws(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ws(a),to(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ab(e,t,a,n){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[fl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function nb(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Gt(e.nextSibling),e===null))return null;return e}function Yp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gt(e.nextSibling),e===null))return null;return e}function Is(e){return e.data==="$?"||e.data==="$~"}function Ps(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function lb(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ec=null;function Gp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Gt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Xp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Qp(e,t,a){switch(t=bi(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Kl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);to(e)}var Xt=new Map,Vp=new Set;function yi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=$.d;$.d={f:rb,r:ib,D:ob,C:sb,L:cb,m:ub,X:db,S:fb,M:pb};function rb(){var e=xa.f(),t=ci();return e||t}function ib(e){var t=vn(e);t!==null&&t.tag===5&&t.type==="form"?sd(t):xa.r(e)}var In=typeof document>"u"?null:document;function Zp(e,t,a){var n=In;if(n&&typeof t=="string"&&t){var r=Ut(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),Vp.has(r)||(Vp.add(r),e={rel:e,crossOrigin:a,href:t},n.querySelector(r)===null&&(t=n.createElement("link"),lt(t,"link",e),Ie(t),n.head.appendChild(t)))}}function ob(e){xa.D(e),Zp("dns-prefetch",e,null)}function sb(e,t){xa.C(e,t),Zp("preconnect",e,t)}function cb(e,t,a){xa.L(e,t,a);var n=In;if(n&&e&&t){var r='link[rel="preload"][as="'+Ut(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Ut(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Ut(a.imageSizes)+'"]')):r+='[href="'+Ut(e)+'"]';var i=r;switch(t){case"style":i=Pn(e);break;case"script":i=el(e)}Xt.has(i)||(e=v({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Xt.set(i,e),n.querySelector(r)!==null||t==="style"&&n.querySelector(Jl(i))||t==="script"&&n.querySelector(Fl(i))||(t=n.createElement("link"),lt(t,"link",e),Ie(t),n.head.appendChild(t)))}}function ub(e,t){xa.m(e,t);var a=In;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ut(n)+'"][href="'+Ut(e)+'"]',i=r;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=el(e)}if(!Xt.has(i)&&(e=v({rel:"modulepreload",href:e},t),Xt.set(i,e),a.querySelector(r)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fl(i)))return}n=a.createElement("link"),lt(n,"link",e),Ie(n),a.head.appendChild(n)}}}function fb(e,t,a){xa.S(e,t,a);var n=In;if(n&&e){var r=Sn(n).hoistableStyles,i=Pn(e);t=t||"default";var d=r.get(i);if(!d){var h={loading:0,preload:null};if(d=n.querySelector(Jl(i)))h.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Xt.get(i))&&tc(e,a);var E=d=n.createElement("link");Ie(E),lt(E,"link",e),E._p=new Promise(function(C,q){E.onload=C,E.onerror=q}),E.addEventListener("load",function(){h.loading|=1}),E.addEventListener("error",function(){h.loading|=2}),h.loading|=4,xi(d,t,n)}d={type:"stylesheet",instance:d,count:1,state:h},r.set(i,d)}}}function db(e,t){xa.X(e,t);var a=In;if(a&&e){var n=Sn(a).hoistableScripts,r=el(e),i=n.get(r);i||(i=a.querySelector(Fl(r)),i||(e=v({src:e,async:!0},t),(t=Xt.get(r))&&ac(e,t),i=a.createElement("script"),Ie(i),lt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(r,i))}}function pb(e,t){xa.M(e,t);var a=In;if(a&&e){var n=Sn(a).hoistableScripts,r=el(e),i=n.get(r);i||(i=a.querySelector(Fl(r)),i||(e=v({src:e,async:!0,type:"module"},t),(t=Xt.get(r))&&ac(e,t),i=a.createElement("script"),Ie(i),lt(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(r,i))}}function Kp(e,t,a,n){var r=(r=re.current)?yi(r):null;if(!r)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Pn(a.href),a=Sn(r).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Pn(a.href);var i=Sn(r).hoistableStyles,d=i.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,d),(i=r.querySelector(Jl(e)))&&!i._p&&(d.instance=i,d.state.loading=5),Xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xt.set(e,a),i||mb(r,e,a,d.state))),t&&n===null)throw Error(c(528,""));return d}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=el(a),a=Sn(r).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Pn(e){return'href="'+Ut(e)+'"'}function Jl(e){return'link[rel="stylesheet"]['+e+"]"}function Jp(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function mb(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),lt(t,"link",a),Ie(t),e.head.appendChild(t))}function el(e){return'[src="'+Ut(e)+'"]'}function Fl(e){return"script[async]"+e}function Fp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Ut(a.href)+'"]');if(n)return t.instance=n,Ie(n),n;var r=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ie(n),lt(n,"style",r),xi(n,a.precedence,e),t.instance=n;case"stylesheet":r=Pn(a.href);var i=e.querySelector(Jl(r));if(i)return t.state.loading|=4,t.instance=i,Ie(i),i;n=Jp(a),(r=Xt.get(r))&&tc(n,r),i=(e.ownerDocument||e).createElement("link"),Ie(i);var d=i;return d._p=new Promise(function(h,E){d.onload=h,d.onerror=E}),lt(i,"link",n),t.state.loading|=4,xi(i,a.precedence,e),t.instance=i;case"script":return i=el(a.src),(r=e.querySelector(Fl(i)))?(t.instance=r,Ie(r),r):(n=a,(r=Xt.get(i))&&(n=v({},a),ac(n,r)),e=e.ownerDocument||e,r=e.createElement("script"),Ie(r),lt(r,"link",n),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,xi(n,a.precedence,e));return t.instance}function xi(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=n.length?n[n.length-1]:null,i=r,d=0;d<n.length;d++){var h=n[d];if(h.dataset.precedence===t)i=h;else if(i!==r)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function tc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ac(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var vi=null;function $p(e,t,a){if(vi===null){var n=new Map,r=vi=new Map;r.set(a,n)}else r=vi,n=r.get(a),n||(n=new Map,r.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var i=a[r];if(!(i[fl]||i[et]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var d=i.getAttribute(t)||"";d=e+d;var h=n.get(d);h?h.push(i):n.set(d,[i])}}return n}function Wp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function hb(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ip(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function gb(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=Pn(n.href),i=t.querySelector(Jl(r));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Si.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ie(i);return}i=t.ownerDocument||t,n=Jp(n),(r=Xt.get(r))&&tc(n,r),i=i.createElement("link"),Ie(i);var d=i;d._p=new Promise(function(h,E){d.onload=h,d.onerror=E}),lt(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Si.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var nc=0;function bb(e,t){return e.stylesheets&&e.count===0&&Ni(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Ni(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&nc===0&&(nc=62500*W0());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ni(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>nc?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(r)}}:null}function Si(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ni(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ei=null;function Ni(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ei=new Map,t.forEach(yb,e),Ei=null,Si.call(e))}function yb(e,t){if(!(t.state.loading&4)){var a=Ei.get(e);if(a)var n=a.get(null);else{a=new Map,Ei.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<r.length;i++){var d=r[i];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),n=d)}n&&a.set(null,n)}r=t.instance,d=r.getAttribute("data-precedence"),i=a.get(d)||n,i===n&&a.set(null,r),a.set(d,r),this.count++,n=Si.bind(this),r.addEventListener("load",n),r.addEventListener("error",n),i?i.parentNode.insertBefore(r,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var $l={$$typeof:D,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function xb(e,t,a,n,r,i,d,h,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=n,this.onUncaughtError=r,this.onCaughtError=i,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Pp(e,t,a,n,r,i,d,h,E,C,q,Q){return e=new xb(e,t,a,d,E,C,q,Q,h),t=1,i===!0&&(t|=24),i=jt(3,null,null,t),e.current=i,i.stateNode=e,t=Lo(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},qo(i),e}function em(e){return e?(e=Cn,e):Cn}function tm(e,t,a,n,r,i){r=em(r),n.context===null?n.context=r:n.pendingContext=r,n=Oa(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=Ca(e,n,t),a!==null&&(yt(a,e,t),Rl(a,e,t))}function am(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function lc(e,t){am(e,t),(e=e.alternate)&&am(e,t)}function nm(e){if(e.tag===13||e.tag===31){var t=en(e,67108864);t!==null&&yt(t,e,67108864),lc(e,67108864)}}function lm(e){if(e.tag===13||e.tag===31){var t=Ot();t=Ii(t);var a=en(e,t);a!==null&&yt(a,e,t),lc(e,t)}}var wi=!0;function vb(e,t,a,n){var r=_.T;_.T=null;var i=$.p;try{$.p=2,rc(e,t,a,n)}finally{$.p=i,_.T=r}}function Sb(e,t,a,n){var r=_.T;_.T=null;var i=$.p;try{$.p=8,rc(e,t,a,n)}finally{$.p=i,_.T=r}}function rc(e,t,a,n){if(wi){var r=ic(n);if(r===null)Vs(e,t,n,ji,a),im(e,n);else if(Nb(r,e,t,a,n))n.stopPropagation();else if(im(e,n),t&4&&-1<Eb.indexOf(e)){for(;r!==null;){var i=vn(r);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var d=Fa(i.pendingLanes);if(d!==0){var h=i;for(h.pendingLanes|=2,h.entangledLanes|=2;d;){var E=1<<31-Nt(d);h.entanglements[1]|=E,d&=~E}ea(i),(Te&6)===0&&(oi=St()+500,Ql(0))}}break;case 31:case 13:h=en(i,2),h!==null&&yt(h,i,2),ci(),lc(i,2)}if(i=ic(n),i===null&&Vs(e,t,n,ji,a),i===r)break;r=i}r!==null&&n.stopPropagation()}else Vs(e,t,n,null,a)}}function ic(e){return e=oo(e),oc(e)}var ji=null;function oc(e){if(ji=null,e=xn(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=m(t),e!==null)return e;e=null}else if(a===31){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ji=e,null}function rm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(og()){case du:return 2;case pu:return 8;case mr:case sg:return 32;case mu:return 268435456;default:return 32}default:return 32}}var sc=!1,Ga=null,Xa=null,Qa=null,Wl=new Map,Il=new Map,Va=[],Eb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function im(e,t){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Il.delete(t.pointerId)}}function Pl(e,t,a,n,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[r]},t!==null&&(t=vn(t),t!==null&&nm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Nb(e,t,a,n,r){switch(t){case"focusin":return Ga=Pl(Ga,e,t,a,n,r),!0;case"dragenter":return Xa=Pl(Xa,e,t,a,n,r),!0;case"mouseover":return Qa=Pl(Qa,e,t,a,n,r),!0;case"pointerover":var i=r.pointerId;return Wl.set(i,Pl(Wl.get(i)||null,e,t,a,n,r)),!0;case"gotpointercapture":return i=r.pointerId,Il.set(i,Pl(Il.get(i)||null,e,t,a,n,r)),!0}return!1}function om(e){var t=xn(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=m(a),t!==null){e.blockedOn=t,vu(e.priority,function(){lm(a)});return}}else if(t===31){if(t=y(a),t!==null){e.blockedOn=t,vu(e.priority,function(){lm(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ic(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);io=n,a.target.dispatchEvent(n),io=null}else return t=vn(a),t!==null&&nm(t),e.blockedOn=a,!1;t.shift()}return!0}function sm(e,t,a){Ti(e)&&a.delete(t)}function wb(){sc=!1,Ga!==null&&Ti(Ga)&&(Ga=null),Xa!==null&&Ti(Xa)&&(Xa=null),Qa!==null&&Ti(Qa)&&(Qa=null),Wl.forEach(sm),Il.forEach(sm)}function Ai(e,t){e.blockedOn===t&&(e.blockedOn=null,sc||(sc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,wb)))}var Ri=null;function cm(e){Ri!==e&&(Ri=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Ri===e&&(Ri=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],r=e[t+2];if(typeof n!="function"){if(oc(n||a)===null)continue;break}var i=vn(a);i!==null&&(e.splice(t,3),t-=3,is(i,{pending:!0,data:r,method:a.method,action:n},n,r))}}))}function tl(e){function t(E){return Ai(E,e)}Ga!==null&&Ai(Ga,e),Xa!==null&&Ai(Xa,e),Qa!==null&&Ai(Qa,e),Wl.forEach(t),Il.forEach(t);for(var a=0;a<Va.length;a++){var n=Va[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)om(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var r=a[n],i=a[n+1],d=r[dt]||null;if(typeof i=="function")d||cm(a);else if(d){var h=null;if(i&&i.hasAttribute("formAction")){if(r=i,d=i[dt]||null)h=d.formAction;else if(oc(r)!==null)continue}else h=d.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),cm(a)}}}function um(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function cc(e){this._internalRoot=e}zi.prototype.render=cc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=Ot();tm(a,n,e,t,null,null)},zi.prototype.unmount=cc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tm(e.current,2,null,e,null,null),ci(),t[yn]=null}};function zi(e){this._internalRoot=e}zi.prototype.unstable_scheduleHydration=function(e){if(e){var t=xu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Va.length&&t!==0&&t<Va[a].priority;a++);Va.splice(a,0,e),a===0&&om(e)}};var fm=o.version;if(fm!=="19.2.3")throw Error(c(527,fm,"19.2.3"));$.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=g(t),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var jb={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{sl=Oi.inject(jb),Et=Oi}catch{}}return tr.createRoot=function(e,t){if(!f(e))throw Error(c(299));var a=!1,n="",r=yd,i=xd,d=vd;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Pp(e,1,!1,null,null,a,n,null,r,i,d,um),e[yn]=t.current,Qs(e),new cc(t)},tr.hydrateRoot=function(e,t,a){if(!f(e))throw Error(c(299));var n=!1,r="",i=yd,d=xd,h=vd,E=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.formState!==void 0&&(E=a.formState)),t=Pp(e,1,!0,t,a??null,n,r,E,i,d,h,um),t.context=em(null),a=t.current,n=Ot(),n=Ii(n),r=Oa(n),r.callback=null,Ca(a,r,n),a=n,t.current.lanes=a,ul(t,a),ea(t),e[yn]=t.current,Qs(e),new zi(t)},tr.version="19.2.3",tr}var Sm;function Lb(){if(Sm)return dc.exports;Sm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(o){console.error(o)}}return l(),dc.exports=Ub(),dc.exports}var kb=Lb();var Em="popstate";function Bb(l={}){function o(c,f){let{pathname:p,search:m,hash:y}=c.location;return Xc("",{pathname:p,search:m,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function s(c,f){return typeof f=="string"?f:rr(f)}return qb(o,s,null,l)}function He(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function Jt(l,o){if(!l){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Hb(){return Math.random().toString(36).substring(2,10)}function Nm(l,o){return{usr:l.state,key:l.key,idx:o}}function Xc(l,o,s=null,c){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof o=="string"?nl(o):o,state:s,key:o&&o.key||c||Hb()}}function rr({pathname:l="/",search:o="",hash:s=""}){return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(l+=s.charAt(0)==="#"?s:"#"+s),l}function nl(l){let o={};if(l){let s=l.indexOf("#");s>=0&&(o.hash=l.substring(s),l=l.substring(0,s));let c=l.indexOf("?");c>=0&&(o.search=l.substring(c),l=l.substring(0,c)),l&&(o.pathname=l)}return o}function qb(l,o,s,c={}){let{window:f=document.defaultView,v5Compat:p=!1}=c,m=f.history,y="POP",b=null,g=S();g==null&&(g=0,m.replaceState({...m.state,idx:g},""));function S(){return(m.state||{idx:null}).idx}function v(){y="POP";let A=S(),Y=A==null?null:A-g;g=A,b&&b({action:y,location:w.location,delta:Y})}function B(A,Y){y="PUSH";let V=Xc(w.location,A,Y);g=S()+1;let D=Nm(V,g),J=w.createHref(V);try{m.pushState(D,"",J)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;f.location.assign(J)}p&&b&&b({action:y,location:w.location,delta:1})}function Z(A,Y){y="REPLACE";let V=Xc(w.location,A,Y);g=S();let D=Nm(V,g),J=w.createHref(V);m.replaceState(D,"",J),p&&b&&b({action:y,location:w.location,delta:0})}function R(A){return Yb(A)}let w={get action(){return y},get location(){return l(f,m)},listen(A){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(Em,v),b=A,()=>{f.removeEventListener(Em,v),b=null}},createHref(A){return o(f,A)},createURL:R,encodeLocation(A){let Y=R(A);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:B,replace:Z,go(A){return m.go(A)}};return w}function Yb(l,o=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),He(s,"No window.location.(origin|href) available to create URL");let c=typeof l=="string"?l:rr(l);return c=c.replace(/ $/,"%20"),!o&&c.startsWith("//")&&(c=s+c),new URL(c,s)}function ph(l,o,s="/"){return Gb(l,o,s,!1)}function Gb(l,o,s,c){let f=typeof o=="string"?nl(o):o,p=Sa(f.pathname||"/",s);if(p==null)return null;let m=mh(l);Xb(m);let y=null;for(let b=0;y==null&&b<m.length;++b){let g=ey(p);y=Ib(m[b],g,c)}return y}function mh(l,o=[],s=[],c="",f=!1){let p=(m,y,b=f,g)=>{let S={relativePath:g===void 0?m.path||"":g,caseSensitive:m.caseSensitive===!0,childrenIndex:y,route:m};if(S.relativePath.startsWith("/")){if(!S.relativePath.startsWith(c)&&b)return;He(S.relativePath.startsWith(c),`Absolute route path "${S.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),S.relativePath=S.relativePath.slice(c.length)}let v=va([c,S.relativePath]),B=s.concat(S);m.children&&m.children.length>0&&(He(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),mh(m.children,o,B,v,b)),!(m.path==null&&!m.index)&&o.push({path:v,score:$b(v,m.index),routesMeta:B})};return l.forEach((m,y)=>{if(m.path===""||!m.path?.includes("?"))p(m,y);else for(let b of hh(m.path))p(m,y,!0,b)}),o}function hh(l){let o=l.split("/");if(o.length===0)return[];let[s,...c]=o,f=s.endsWith("?"),p=s.replace(/\?$/,"");if(c.length===0)return f?[p,""]:[p];let m=hh(c.join("/")),y=[];return y.push(...m.map(b=>b===""?p:[p,b].join("/"))),f&&y.push(...m),y.map(b=>l.startsWith("/")&&b===""?"/":b)}function Xb(l){l.sort((o,s)=>o.score!==s.score?s.score-o.score:Wb(o.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var Qb=/^:[\w-]+$/,Vb=3,Zb=2,Kb=1,Jb=10,Fb=-2,wm=l=>l==="*";function $b(l,o){let s=l.split("/"),c=s.length;return s.some(wm)&&(c+=Fb),o&&(c+=Zb),s.filter(f=>!wm(f)).reduce((f,p)=>f+(Qb.test(p)?Vb:p===""?Kb:Jb),c)}function Wb(l,o){return l.length===o.length&&l.slice(0,-1).every((c,f)=>c===o[f])?l[l.length-1]-o[o.length-1]:0}function Ib(l,o,s=!1){let{routesMeta:c}=l,f={},p="/",m=[];for(let y=0;y<c.length;++y){let b=c[y],g=y===c.length-1,S=p==="/"?o:o.slice(p.length)||"/",v=Bi({path:b.relativePath,caseSensitive:b.caseSensitive,end:g},S),B=b.route;if(!v&&g&&s&&!c[c.length-1].route.index&&(v=Bi({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},S)),!v)return null;Object.assign(f,v.params),m.push({params:f,pathname:va([p,v.pathname]),pathnameBase:ly(va([p,v.pathnameBase])),route:B}),v.pathnameBase!=="/"&&(p=va([p,v.pathnameBase]))}return m}function Bi(l,o){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[s,c]=Pb(l.path,l.caseSensitive,l.end),f=o.match(s);if(!f)return null;let p=f[0],m=p.replace(/(.)\/+$/,"$1"),y=f.slice(1);return{params:c.reduce((g,{paramName:S,isOptional:v},B)=>{if(S==="*"){let R=y[B]||"";m=p.slice(0,p.length-R.length).replace(/(.)\/+$/,"$1")}const Z=y[B];return v&&!Z?g[S]=void 0:g[S]=(Z||"").replace(/%2F/g,"/"),g},{}),pathname:p,pathnameBase:m,pattern:l}}function Pb(l,o=!1,s=!0){Jt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let c=[],f="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,y,b)=>(c.push({paramName:y,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(c.push({paramName:"*"}),f+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?f+="\\/*$":l!==""&&l!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),c]}function ey(l){try{return l.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Jt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),l}}function Sa(l,o){if(o==="/")return l;if(!l.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,c=l.charAt(s);return c&&c!=="/"?null:l.slice(s)||"/"}var ty=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function ay(l,o="/"){let{pathname:s,search:c="",hash:f=""}=typeof l=="string"?nl(l):l,p;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?p=jm(s.substring(1),"/"):p=jm(s,o)):p=o,{pathname:p,search:ry(c),hash:iy(f)}}function jm(l,o){let s=o.replace(/\/+$/,"").split("/");return l.split("/").forEach(f=>{f===".."?s.length>1&&s.pop():f!=="."&&s.push(f)}),s.length>1?s.join("/"):"/"}function gc(l,o,s,c){return`Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ny(l){return l.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function $c(l){let o=ny(l);return o.map((s,c)=>c===o.length-1?s.pathname:s.pathnameBase)}function Wc(l,o,s,c=!1){let f;typeof l=="string"?f=nl(l):(f={...l},He(!f.pathname||!f.pathname.includes("?"),gc("?","pathname","search",f)),He(!f.pathname||!f.pathname.includes("#"),gc("#","pathname","hash",f)),He(!f.search||!f.search.includes("#"),gc("#","search","hash",f)));let p=l===""||f.pathname==="",m=p?"/":f.pathname,y;if(m==null)y=s;else{let v=o.length-1;if(!c&&m.startsWith("..")){let B=m.split("/");for(;B[0]==="..";)B.shift(),v-=1;f.pathname=B.join("/")}y=v>=0?o[v]:"/"}let b=ay(f,y),g=m&&m!=="/"&&m.endsWith("/"),S=(p||m===".")&&s.endsWith("/");return!b.pathname.endsWith("/")&&(g||S)&&(b.pathname+="/"),b}var va=l=>l.join("/").replace(/\/\/+/g,"/"),ly=l=>l.replace(/\/+$/,"").replace(/^\/*/,"/"),ry=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,iy=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,oy=class{constructor(l,o,s,c=!1){this.status=l,this.statusText=o||"",this.internal=c,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function sy(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function cy(l){return l.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var gh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function bh(l,o){let s=l;if(typeof s!="string"||!ty.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let c=s,f=!1;if(gh)try{let p=new URL(window.location.href),m=s.startsWith("//")?new URL(p.protocol+s):new URL(s),y=Sa(m.pathname,o);m.origin===p.origin&&y!=null?s=y+m.search+m.hash:f=!0}catch{Jt(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:c,isExternal:f,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yh=["POST","PUT","PATCH","DELETE"];new Set(yh);var uy=["GET",...yh];new Set(uy);var ll=j.createContext(null);ll.displayName="DataRouter";var qi=j.createContext(null);qi.displayName="DataRouterState";var fy=j.createContext(!1),xh=j.createContext({isTransitioning:!1});xh.displayName="ViewTransition";var dy=j.createContext(new Map);dy.displayName="Fetchers";var py=j.createContext(null);py.displayName="Await";var Ct=j.createContext(null);Ct.displayName="Navigation";var ir=j.createContext(null);ir.displayName="Location";var Ft=j.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var Ic=j.createContext(null);Ic.displayName="RouteError";var vh="REACT_ROUTER_ERROR",my="REDIRECT",hy="ROUTE_ERROR_RESPONSE";function gy(l){if(l.startsWith(`${vh}:${my}:{`))try{let o=JSON.parse(l.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function by(l){if(l.startsWith(`${vh}:${hy}:{`))try{let o=JSON.parse(l.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new oy(o.status,o.statusText,o.data)}catch{}}function yy(l,{relative:o}={}){He(rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=j.useContext(Ct),{hash:f,pathname:p,search:m}=sr(l,{relative:o}),y=p;return s!=="/"&&(y=p==="/"?s:va([s,p])),c.createHref({pathname:y,search:m,hash:f})}function rl(){return j.useContext(ir)!=null}function Ka(){return He(rl(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(ir).location}var Sh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Eh(l){j.useContext(Ct).static||j.useLayoutEffect(l)}function or(){let{isDataRoute:l}=j.useContext(Ft);return l?_y():xy()}function xy(){He(rl(),"useNavigate() may be used only in the context of a <Router> component.");let l=j.useContext(ll),{basename:o,navigator:s}=j.useContext(Ct),{matches:c}=j.useContext(Ft),{pathname:f}=Ka(),p=JSON.stringify($c(c)),m=j.useRef(!1);return Eh(()=>{m.current=!0}),j.useCallback((b,g={})=>{if(Jt(m.current,Sh),!m.current)return;if(typeof b=="number"){s.go(b);return}let S=Wc(b,JSON.parse(p),f,g.relative==="path");l==null&&o!=="/"&&(S.pathname=S.pathname==="/"?o:va([o,S.pathname])),(g.replace?s.replace:s.push)(S,g.state,g)},[o,s,p,f,l])}j.createContext(null);function vy(){let{matches:l}=j.useContext(Ft),o=l[l.length-1];return o?o.params:{}}function sr(l,{relative:o}={}){let{matches:s}=j.useContext(Ft),{pathname:c}=Ka(),f=JSON.stringify($c(s));return j.useMemo(()=>Wc(l,JSON.parse(f),c,o==="path"),[l,f,c,o])}function Sy(l,o){return Nh(l,o)}function Nh(l,o,s,c,f){He(rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:p}=j.useContext(Ct),{matches:m}=j.useContext(Ft),y=m[m.length-1],b=y?y.params:{},g=y?y.pathname:"/",S=y?y.pathnameBase:"/",v=y&&y.route;{let V=v&&v.path||"";jh(g,!v||V.endsWith("*")||V.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V==="/"?"*":`${V}/*`}">.`)}let B=Ka(),Z;if(o){let V=typeof o=="string"?nl(o):o;He(S==="/"||V.pathname?.startsWith(S),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${V.pathname}" was given in the \`location\` prop.`),Z=V}else Z=B;let R=Z.pathname||"/",w=R;if(S!=="/"){let V=S.replace(/^\//,"").split("/");w="/"+R.replace(/^\//,"").split("/").slice(V.length).join("/")}let A=ph(l,{pathname:w});Jt(v||A!=null,`No routes matched location "${Z.pathname}${Z.search}${Z.hash}" `),Jt(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${Z.pathname}${Z.search}${Z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=Ty(A&&A.map(V=>Object.assign({},V,{params:Object.assign({},b,V.params),pathname:va([S,p.encodeLocation?p.encodeLocation(V.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathname]),pathnameBase:V.pathnameBase==="/"?S:va([S,p.encodeLocation?p.encodeLocation(V.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:V.pathnameBase])})),m,s,c,f);return o&&Y?j.createElement(ir.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...Z},navigationType:"POP"}},Y):Y}function Ey(){let l=Cy(),o=sy(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),s=l instanceof Error?l.stack:null,c="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:c},p={padding:"2px 4px",backgroundColor:c},m=null;return console.error("Error handled by React Router default ErrorBoundary:",l),m=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:p},"ErrorBoundary")," or"," ",j.createElement("code",{style:p},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},o),s?j.createElement("pre",{style:f},s):null,m)}var Ny=j.createElement(Ey,null),wh=class extends j.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){this.props.onError?this.props.onError(l,o):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const s=by(l.digest);s&&(l=s)}let o=l!==void 0?j.createElement(Ft.Provider,{value:this.props.routeContext},j.createElement(Ic.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?j.createElement(wy,{error:l},o):o}};wh.contextType=fy;var bc=new WeakMap;function wy({children:l,error:o}){let{basename:s}=j.useContext(Ct);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let c=gy(o.digest);if(c){let f=bc.get(o);if(f)throw f;let p=bh(c.location,s);if(gh&&!bc.get(o))if(p.isExternal||c.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:c.replace}));throw bc.set(o,m),m}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return l}function jy({routeContext:l,match:o,children:s}){let c=j.useContext(ll);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),j.createElement(Ft.Provider,{value:l},s)}function Ty(l,o=[],s=null,c=null,f=null){if(l==null){if(!s)return null;if(s.errors)l=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)l=s.matches;else return null}let p=l,m=s?.errors;if(m!=null){let S=p.findIndex(v=>v.route.id&&m?.[v.route.id]!==void 0);He(S>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),p=p.slice(0,Math.min(p.length,S+1))}let y=!1,b=-1;if(s)for(let S=0;S<p.length;S++){let v=p[S];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(b=S),v.route.id){let{loaderData:B,errors:Z}=s,R=v.route.loader&&!B.hasOwnProperty(v.route.id)&&(!Z||Z[v.route.id]===void 0);if(v.route.lazy||R){y=!0,b>=0?p=p.slice(0,b+1):p=[p[0]];break}}}let g=s&&c?(S,v)=>{c(S,{location:s.location,params:s.matches?.[0]?.params??{},unstable_pattern:cy(s.matches),errorInfo:v})}:void 0;return p.reduceRight((S,v,B)=>{let Z,R=!1,w=null,A=null;s&&(Z=m&&v.route.id?m[v.route.id]:void 0,w=v.route.errorElement||Ny,y&&(b<0&&B===0?(jh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,A=null):b===B&&(R=!0,A=v.route.hydrateFallbackElement||null)));let Y=o.concat(p.slice(0,B+1)),V=()=>{let D;return Z?D=w:R?D=A:v.route.Component?D=j.createElement(v.route.Component,null):v.route.element?D=v.route.element:D=S,j.createElement(jy,{match:v,routeContext:{outlet:S,matches:Y,isDataRoute:s!=null},children:D})};return s&&(v.route.ErrorBoundary||v.route.errorElement||B===0)?j.createElement(wh,{location:s.location,revalidation:s.revalidation,component:w,error:Z,children:V(),routeContext:{outlet:null,matches:Y,isDataRoute:!0},onError:g}):V()},null)}function Pc(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ay(l){let o=j.useContext(ll);return He(o,Pc(l)),o}function Ry(l){let o=j.useContext(qi);return He(o,Pc(l)),o}function zy(l){let o=j.useContext(Ft);return He(o,Pc(l)),o}function eu(l){let o=zy(l),s=o.matches[o.matches.length-1];return He(s.route.id,`${l} can only be used on routes that contain a unique "id"`),s.route.id}function Oy(){return eu("useRouteId")}function Cy(){let l=j.useContext(Ic),o=Ry("useRouteError"),s=eu("useRouteError");return l!==void 0?l:o.errors?.[s]}function _y(){let{router:l}=Ay("useNavigate"),o=eu("useNavigate"),s=j.useRef(!1);return Eh(()=>{s.current=!0}),j.useCallback(async(f,p={})=>{Jt(s.current,Sh),s.current&&(typeof f=="number"?await l.navigate(f):await l.navigate(f,{fromRouteId:o,...p}))},[l,o])}var Tm={};function jh(l,o,s){!o&&!Tm[l]&&(Tm[l]=!0,Jt(!1,s))}j.memo(My);function My({routes:l,future:o,state:s,onError:c}){return Nh(l,void 0,s,c,o)}function Am({to:l,replace:o,state:s,relative:c}){He(rl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=j.useContext(Ct);Jt(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:p}=j.useContext(Ft),{pathname:m}=Ka(),y=or(),b=Wc(l,$c(p),m,c==="path"),g=JSON.stringify(b);return j.useEffect(()=>{y(JSON.parse(g),{replace:o,state:s,relative:c})},[y,g,c,o,s]),null}function ot(l){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Dy({basename:l="/",children:o=null,location:s,navigationType:c="POP",navigator:f,static:p=!1,unstable_useTransitions:m}){He(!rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=l.replace(/^\/*/,"/"),b=j.useMemo(()=>({basename:y,navigator:f,static:p,unstable_useTransitions:m,future:{}}),[y,f,p,m]);typeof s=="string"&&(s=nl(s));let{pathname:g="/",search:S="",hash:v="",state:B=null,key:Z="default"}=s,R=j.useMemo(()=>{let w=Sa(g,y);return w==null?null:{location:{pathname:w,search:S,hash:v,state:B,key:Z},navigationType:c}},[y,g,S,v,B,Z,c]);return Jt(R!=null,`<Router basename="${y}"> is not able to match the URL "${g}${S}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:j.createElement(Ct.Provider,{value:b},j.createElement(ir.Provider,{children:o,value:R}))}function Uy({children:l,location:o}){return Sy(Qc(l),o)}function Qc(l,o=[]){let s=[];return j.Children.forEach(l,(c,f)=>{if(!j.isValidElement(c))return;let p=[...o,f];if(c.type===j.Fragment){s.push.apply(s,Qc(c.props.children,p));return}He(c.type===ot,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!c.props.index||!c.props.children,"An index route cannot have child routes.");let m={id:c.props.id||p.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,middleware:c.props.middleware,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(m.children=Qc(c.props.children,p)),s.push(m)}),s}var Mi="get",Di="application/x-www-form-urlencoded";function Yi(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function Ly(l){return Yi(l)&&l.tagName.toLowerCase()==="button"}function ky(l){return Yi(l)&&l.tagName.toLowerCase()==="form"}function By(l){return Yi(l)&&l.tagName.toLowerCase()==="input"}function Hy(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function qy(l,o){return l.button===0&&(!o||o==="_self")&&!Hy(l)}var Ci=null;function Yy(){if(Ci===null)try{new FormData(document.createElement("form"),0),Ci=!1}catch{Ci=!0}return Ci}var Gy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yc(l){return l!=null&&!Gy.has(l)?(Jt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Di}"`),null):l}function Xy(l,o){let s,c,f,p,m;if(ky(l)){let y=l.getAttribute("action");c=y?Sa(y,o):null,s=l.getAttribute("method")||Mi,f=yc(l.getAttribute("enctype"))||Di,p=new FormData(l)}else if(Ly(l)||By(l)&&(l.type==="submit"||l.type==="image")){let y=l.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=l.getAttribute("formaction")||y.getAttribute("action");if(c=b?Sa(b,o):null,s=l.getAttribute("formmethod")||y.getAttribute("method")||Mi,f=yc(l.getAttribute("formenctype"))||yc(y.getAttribute("enctype"))||Di,p=new FormData(y,l),!Yy()){let{name:g,type:S,value:v}=l;if(S==="image"){let B=g?`${g}.`:"";p.append(`${B}x`,"0"),p.append(`${B}y`,"0")}else g&&p.append(g,v)}}else{if(Yi(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Mi,c=null,f=Di,m=l}return p&&f==="text/plain"&&(m=p,p=void 0),{action:c,method:s.toLowerCase(),encType:f,formData:p,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function tu(l,o){if(l===!1||l===null||typeof l>"u")throw new Error(o)}function Qy(l,o,s,c){let f=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return s?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${c}`:f.pathname=`${f.pathname}.${c}`:f.pathname==="/"?f.pathname=`_root.${c}`:o&&Sa(f.pathname,o)==="/"?f.pathname=`${o.replace(/\/$/,"")}/_root.${c}`:f.pathname=`${f.pathname.replace(/\/$/,"")}.${c}`,f}async function Vy(l,o){if(l.id in o)return o[l.id];try{let s=await import(l.module);return o[l.id]=s,s}catch(s){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Zy(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function Ky(l,o,s){let c=await Promise.all(l.map(async f=>{let p=o.routes[f.route.id];if(p){let m=await Vy(p,s);return m.links?m.links():[]}return[]}));return Wy(c.flat(1).filter(Zy).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Rm(l,o,s,c,f,p){let m=(b,g)=>s[g]?b.route.id!==s[g].route.id:!0,y=(b,g)=>s[g].pathname!==b.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==b.params["*"];return p==="assets"?o.filter((b,g)=>m(b,g)||y(b,g)):p==="data"?o.filter((b,g)=>{let S=c.routes[b.route.id];if(!S||!S.hasLoader)return!1;if(m(b,g)||y(b,g))return!0;if(b.route.shouldRevalidate){let v=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(l,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Jy(l,o,{includeHydrateFallback:s}={}){return Fy(l.map(c=>{let f=o.routes[c.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),s&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function Fy(l){return[...new Set(l)]}function $y(l){let o={},s=Object.keys(l).sort();for(let c of s)o[c]=l[c];return o}function Wy(l,o){let s=new Set;return new Set(o),l.reduce((c,f)=>{let p=JSON.stringify($y(f));return s.has(p)||(s.add(p),c.push({key:p,link:f})),c},[])}function Th(){let l=j.useContext(ll);return tu(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function Iy(){let l=j.useContext(qi);return tu(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var au=j.createContext(void 0);au.displayName="FrameworkContext";function Ah(){let l=j.useContext(au);return tu(l,"You must render this element inside a <HydratedRouter> element"),l}function Py(l,o){let s=j.useContext(au),[c,f]=j.useState(!1),[p,m]=j.useState(!1),{onFocus:y,onBlur:b,onMouseEnter:g,onMouseLeave:S,onTouchStart:v}=o,B=j.useRef(null);j.useEffect(()=>{if(l==="render"&&m(!0),l==="viewport"){let w=Y=>{Y.forEach(V=>{m(V.isIntersecting)})},A=new IntersectionObserver(w,{threshold:.5});return B.current&&A.observe(B.current),()=>{A.disconnect()}}},[l]),j.useEffect(()=>{if(c){let w=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(w)}}},[c]);let Z=()=>{f(!0)},R=()=>{f(!1),m(!1)};return s?l!=="intent"?[p,B,{}]:[p,B,{onFocus:ar(y,Z),onBlur:ar(b,R),onMouseEnter:ar(g,Z),onMouseLeave:ar(S,R),onTouchStart:ar(v,Z)}]:[!1,B,{}]}function ar(l,o){return s=>{l&&l(s),s.defaultPrevented||o(s)}}function ex({page:l,...o}){let{router:s}=Th(),c=j.useMemo(()=>ph(s.routes,l,s.basename),[s.routes,l,s.basename]);return c?j.createElement(ax,{page:l,matches:c,...o}):null}function tx(l){let{manifest:o,routeModules:s}=Ah(),[c,f]=j.useState([]);return j.useEffect(()=>{let p=!1;return Ky(l,o,s).then(m=>{p||f(m)}),()=>{p=!0}},[l,o,s]),c}function ax({page:l,matches:o,...s}){let c=Ka(),{future:f,manifest:p,routeModules:m}=Ah(),{basename:y}=Th(),{loaderData:b,matches:g}=Iy(),S=j.useMemo(()=>Rm(l,o,g,p,c,"data"),[l,o,g,p,c]),v=j.useMemo(()=>Rm(l,o,g,p,c,"assets"),[l,o,g,p,c]),B=j.useMemo(()=>{if(l===c.pathname+c.search+c.hash)return[];let w=new Set,A=!1;if(o.forEach(V=>{let D=p.routes[V.route.id];!D||!D.hasLoader||(!S.some(J=>J.route.id===V.route.id)&&V.route.id in b&&m[V.route.id]?.shouldRevalidate||D.hasClientLoader?A=!0:w.add(V.route.id))}),w.size===0)return[];let Y=Qy(l,y,f.unstable_trailingSlashAwareDataRequests,"data");return A&&w.size>0&&Y.searchParams.set("_routes",o.filter(V=>w.has(V.route.id)).map(V=>V.route.id).join(",")),[Y.pathname+Y.search]},[y,f.unstable_trailingSlashAwareDataRequests,b,c,p,S,o,l,m]),Z=j.useMemo(()=>Jy(v,p),[v,p]),R=tx(v);return j.createElement(j.Fragment,null,B.map(w=>j.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...s})),Z.map(w=>j.createElement("link",{key:w,rel:"modulepreload",href:w,...s})),R.map(({key:w,link:A})=>j.createElement("link",{key:w,nonce:s.nonce,...A,crossOrigin:A.crossOrigin??s.crossOrigin})))}function nx(...l){return o=>{l.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var lx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lx&&(window.__reactRouterVersion="7.13.0")}catch{}function rx({basename:l,children:o,unstable_useTransitions:s,window:c}){let f=j.useRef();f.current==null&&(f.current=Bb({window:c,v5Compat:!0}));let p=f.current,[m,y]=j.useState({action:p.action,location:p.location}),b=j.useCallback(g=>{s===!1?y(g):j.startTransition(()=>y(g))},[s]);return j.useLayoutEffect(()=>p.listen(b),[p,b]),j.createElement(Dy,{basename:l,children:o,location:m.location,navigationType:m.action,navigator:p,unstable_useTransitions:s})}var Rh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kt=j.forwardRef(function({onClick:o,discover:s="render",prefetch:c="none",relative:f,reloadDocument:p,replace:m,state:y,target:b,to:g,preventScrollReset:S,viewTransition:v,unstable_defaultShouldRevalidate:B,...Z},R){let{basename:w,unstable_useTransitions:A}=j.useContext(Ct),Y=typeof g=="string"&&Rh.test(g),V=bh(g,w);g=V.to;let D=yy(g,{relative:f}),[J,I,se]=Py(c,Z),F=cx(g,{replace:m,state:y,target:b,preventScrollReset:S,relative:f,viewTransition:v,unstable_defaultShouldRevalidate:B,unstable_useTransitions:A});function he(qe){o&&o(qe),qe.defaultPrevented||F(qe)}let ge=j.createElement("a",{...Z,...se,href:V.absoluteURL||D,onClick:V.isExternal||p?o:he,ref:nx(R,I),target:b,"data-discover":!Y&&s==="render"?"true":void 0});return J&&!Y?j.createElement(j.Fragment,null,ge,j.createElement(ex,{page:D})):ge});Kt.displayName="Link";var ix=j.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:c="",end:f=!1,style:p,to:m,viewTransition:y,children:b,...g},S){let v=sr(m,{relative:g.relative}),B=Ka(),Z=j.useContext(qi),{navigator:R,basename:w}=j.useContext(Ct),A=Z!=null&&mx(v)&&y===!0,Y=R.encodeLocation?R.encodeLocation(v).pathname:v.pathname,V=B.pathname,D=Z&&Z.navigation&&Z.navigation.location?Z.navigation.location.pathname:null;s||(V=V.toLowerCase(),D=D?D.toLowerCase():null,Y=Y.toLowerCase()),D&&w&&(D=Sa(D,w)||D);const J=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let I=V===Y||!f&&V.startsWith(Y)&&V.charAt(J)==="/",se=D!=null&&(D===Y||!f&&D.startsWith(Y)&&D.charAt(Y.length)==="/"),F={isActive:I,isPending:se,isTransitioning:A},he=I?o:void 0,ge;typeof c=="function"?ge=c(F):ge=[c,I?"active":null,se?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let qe=typeof p=="function"?p(F):p;return j.createElement(Kt,{...g,"aria-current":he,className:ge,ref:S,style:qe,to:m,viewTransition:y},typeof b=="function"?b(F):b)});ix.displayName="NavLink";var ox=j.forwardRef(({discover:l="render",fetcherKey:o,navigate:s,reloadDocument:c,replace:f,state:p,method:m=Mi,action:y,onSubmit:b,relative:g,preventScrollReset:S,viewTransition:v,unstable_defaultShouldRevalidate:B,...Z},R)=>{let{unstable_useTransitions:w}=j.useContext(Ct),A=dx(),Y=px(y,{relative:g}),V=m.toLowerCase()==="get"?"get":"post",D=typeof y=="string"&&Rh.test(y),J=I=>{if(b&&b(I),I.defaultPrevented)return;I.preventDefault();let se=I.nativeEvent.submitter,F=se?.getAttribute("formmethod")||m,he=()=>A(se||I.currentTarget,{fetcherKey:o,method:F,navigate:s,replace:f,state:p,relative:g,preventScrollReset:S,viewTransition:v,unstable_defaultShouldRevalidate:B});w&&s!==!1?j.startTransition(()=>he()):he()};return j.createElement("form",{ref:R,method:V,action:Y,onSubmit:c?b:J,...Z,"data-discover":!D&&l==="render"?"true":void 0})});ox.displayName="Form";function sx(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zh(l){let o=j.useContext(ll);return He(o,sx(l)),o}function cx(l,{target:o,replace:s,state:c,preventScrollReset:f,relative:p,viewTransition:m,unstable_defaultShouldRevalidate:y,unstable_useTransitions:b}={}){let g=or(),S=Ka(),v=sr(l,{relative:p});return j.useCallback(B=>{if(qy(B,o)){B.preventDefault();let Z=s!==void 0?s:rr(S)===rr(v),R=()=>g(l,{replace:Z,state:c,preventScrollReset:f,relative:p,viewTransition:m,unstable_defaultShouldRevalidate:y});b?j.startTransition(()=>R()):R()}},[S,g,v,s,c,o,l,f,p,m,y,b])}var ux=0,fx=()=>`__${String(++ux)}__`;function dx(){let{router:l}=zh("useSubmit"),{basename:o}=j.useContext(Ct),s=Oy(),c=l.fetch,f=l.navigate;return j.useCallback(async(p,m={})=>{let{action:y,method:b,encType:g,formData:S,body:v}=Xy(p,o);if(m.navigate===!1){let B=m.fetcherKey||fx();await c(B,s,m.action||y,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:S,body:v,formMethod:m.method||b,formEncType:m.encType||g,flushSync:m.flushSync})}else await f(m.action||y,{unstable_defaultShouldRevalidate:m.unstable_defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:S,body:v,formMethod:m.method||b,formEncType:m.encType||g,replace:m.replace,state:m.state,fromRouteId:s,flushSync:m.flushSync,viewTransition:m.viewTransition})},[c,f,o,s])}function px(l,{relative:o}={}){let{basename:s}=j.useContext(Ct),c=j.useContext(Ft);He(c,"useFormAction must be used inside a RouteContext");let[f]=c.matches.slice(-1),p={...sr(l||".",{relative:o})},m=Ka();if(l==null){p.search=m.search;let y=new URLSearchParams(p.search),b=y.getAll("index");if(b.some(S=>S==="")){y.delete("index"),b.filter(v=>v).forEach(v=>y.append("index",v));let S=y.toString();p.search=S?`?${S}`:""}}return(!l||l===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(p.pathname=p.pathname==="/"?s:va([s,p.pathname])),rr(p)}function mx(l,{relative:o}={}){let s=j.useContext(xh);He(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=zh("useViewTransitionState"),f=sr(l,{relative:o});if(!s.isTransitioning)return!1;let p=Sa(s.currentLocation.pathname,c)||s.currentLocation.pathname,m=Sa(s.nextLocation.pathname,c)||s.nextLocation.pathname;return Bi(f.pathname,m)!=null||Bi(f.pathname,p)!=null}const hx=(l,o)=>{localStorage.setItem("token",l),localStorage.setItem("user",JSON.stringify(o))},ft=()=>localStorage.getItem("token"),nu=()=>{const l=localStorage.getItem("user");return l?JSON.parse(l):null},gx=()=>{localStorage.removeItem("token"),localStorage.removeItem("user")},Oh="/assets/scamshield-logo-kn0BbHA9.png",_t="/assets/backfround-BBFinZpb.jpeg";function bx(){const l=[{title:"🚨 Report and Analyze Scam",desc:"Report scam attempts and get instant susceptibility scoring with verified contact matching.",path:"/report",btn:"Report Now"},{title:"🔍 Scam Search",desc:"Search a database of verified scam reports to stay updated and protected.",path:"/search",btn:"Search Scams"},{title:"🎯 Phishing Simulator",desc:"Train with beginner → medium → pro phishing questions and level up your awareness.",path:"/phishing",btn:"Start Training"},{title:"🧾 Blogs",desc:"Read verified scam awareness blogs written by users and admins.",path:"/blogs",btn:"Explore Blogs"},{title:"🛠 Screenshot Analyzer",desc:"Upload suspicious screenshots and extract text using OCR to detect scam signals.",path:"/screenshot-analyzer",btn:"Analyze Screenshot"},{title:"🔐 Password Tool",desc:"Check password strength and generate secure passwords instantly.",path:"/password-tool",btn:"Open Tool"}];return u.jsxs("div",{className:"home-root",style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.88)), url(${_t})`,backgroundSize:"cover",backgroundPosition:"center"},children:[u.jsxs("section",{className:"hero-section",children:[u.jsx("img",{src:Oh,alt:"ScamShield",className:"hero-logo"}),u.jsx("p",{className:"hero-text",children:"A community-powered cybersecurity platform that helps people detect, report, and protect themselves from scams, frauds, phishing attacks, and social engineering threats."})]}),u.jsx("section",{className:"cards-section",children:u.jsx("div",{className:"cards-grid",children:l.map((o,s)=>u.jsxs("div",{className:"feature-card",children:[u.jsx("h2",{children:o.title}),u.jsx("p",{children:o.desc}),u.jsxs(Kt,{to:o.path,className:"card-btn",children:[o.btn," →"]})]},s))})}),u.jsx("section",{style:{maxWidth:"900px",margin:"0 auto 40px",padding:"0 20px",textAlign:"center"},children:u.jsx("p",{style:{fontSize:"15px",lineHeight:"1.8",color:"rgba(255,255,255,0.75)"},children:"ScamShield is built to empower users with awareness, education, and practical tools to fight online fraud. By combining real scam reports, simulations, and intelligent analysis, the platform helps individuals make safer digital decisions and stay one step ahead of evolving cyber threats."})}),u.jsxs("footer",{className:"footer",children:["👨‍💻 Developed by ",u.jsx("span",{children:"Harish & Tarun (Benignants)"})]}),u.jsx("style",{children:`
        * { box-sizing: border-box; }

        .home-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          color: white;
        }

        .hero-section {
          max-width: 1200px;
          margin: auto;
          padding: 90px 20px 60px;
          text-align: center;
        }

        .hero-logo {
          height: 170px;
          margin-bottom: 28px;
          filter: drop-shadow(0 0 35px rgba(255,60,60,0.45));
        }

        .hero-text {
          font-size: 19px;
          max-width: 900px;
          margin: auto;
          line-height: 1.8;
          color: rgba(255,255,255,0.85);
        }

        .cards-section {
          width: 100%;
          padding: 40px 20px 80px;
          display: flex;
          justify-content: center;
        }

        .cards-grid {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .feature-card {
          background: linear-gradient(#fffaf0, #fff4e6);
          color: #111;
          padding: 30px 26px;
          min-height: 250px;
          border-radius: 22px;
          border-top: 4px solid #ff3b3b;
          box-shadow: 0 15px 45px rgba(0,0,0,0.55);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 22px 65px rgba(255,60,60,0.25);
        }

        .card-btn {
          margin-top: 20px;
          padding: 11px 20px;
          background: linear-gradient(90deg, #ff2a2a, #ff6a6a);
          color: white;
          border-radius: 14px;
          font-weight: 700;
          text-decoration: none;
        }

        .footer {
          margin-top: auto;
          text-align: center;
          padding: 26px 16px;
          background: #050505;
          border-top: 1px solid rgba(255,255,255,0.2);
          font-weight: 600;
        }

        .footer span {
          color: #ff3b3b;
        }

        @media (max-width: 1100px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .hero-logo { height: 110px; }
          .hero-text { font-size: 14.5px; }
          .cards-grid { grid-template-columns: 1fr; }
        }
      `})]})}function Ch(l,o){return function(){return l.apply(o,arguments)}}const{toString:yx}=Object.prototype,{getPrototypeOf:lu}=Object,{iterator:Gi,toStringTag:_h}=Symbol,Xi=(l=>o=>{const s=yx.call(o);return l[s]||(l[s]=s.slice(8,-1).toLowerCase())})(Object.create(null)),$t=l=>(l=l.toLowerCase(),o=>Xi(o)===l),Qi=l=>o=>typeof o===l,{isArray:il}=Array,al=Qi("undefined");function cr(l){return l!==null&&!al(l)&&l.constructor!==null&&!al(l.constructor)&&xt(l.constructor.isBuffer)&&l.constructor.isBuffer(l)}const Mh=$t("ArrayBuffer");function xx(l){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(l):o=l&&l.buffer&&Mh(l.buffer),o}const vx=Qi("string"),xt=Qi("function"),Dh=Qi("number"),ur=l=>l!==null&&typeof l=="object",Sx=l=>l===!0||l===!1,Ui=l=>{if(Xi(l)!=="object")return!1;const o=lu(l);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(_h in l)&&!(Gi in l)},Ex=l=>{if(!ur(l)||cr(l))return!1;try{return Object.keys(l).length===0&&Object.getPrototypeOf(l)===Object.prototype}catch{return!1}},Nx=$t("Date"),wx=$t("File"),jx=$t("Blob"),Tx=$t("FileList"),Ax=l=>ur(l)&&xt(l.pipe),Rx=l=>{let o;return l&&(typeof FormData=="function"&&l instanceof FormData||xt(l.append)&&((o=Xi(l))==="formdata"||o==="object"&&xt(l.toString)&&l.toString()==="[object FormData]"))},zx=$t("URLSearchParams"),[Ox,Cx,_x,Mx]=["ReadableStream","Request","Response","Headers"].map($t),Dx=l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fr(l,o,{allOwnKeys:s=!1}={}){if(l===null||typeof l>"u")return;let c,f;if(typeof l!="object"&&(l=[l]),il(l))for(c=0,f=l.length;c<f;c++)o.call(null,l[c],c,l);else{if(cr(l))return;const p=s?Object.getOwnPropertyNames(l):Object.keys(l),m=p.length;let y;for(c=0;c<m;c++)y=p[c],o.call(null,l[y],y,l)}}function Uh(l,o){if(cr(l))return null;o=o.toLowerCase();const s=Object.keys(l);let c=s.length,f;for(;c-- >0;)if(f=s[c],o===f.toLowerCase())return f;return null}const hn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Lh=l=>!al(l)&&l!==hn;function Vc(){const{caseless:l,skipUndefined:o}=Lh(this)&&this||{},s={},c=(f,p)=>{const m=l&&Uh(s,p)||p;Ui(s[m])&&Ui(f)?s[m]=Vc(s[m],f):Ui(f)?s[m]=Vc({},f):il(f)?s[m]=f.slice():(!o||!al(f))&&(s[m]=f)};for(let f=0,p=arguments.length;f<p;f++)arguments[f]&&fr(arguments[f],c);return s}const Ux=(l,o,s,{allOwnKeys:c}={})=>(fr(o,(f,p)=>{s&&xt(f)?l[p]=Ch(f,s):l[p]=f},{allOwnKeys:c}),l),Lx=l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),kx=(l,o,s,c)=>{l.prototype=Object.create(o.prototype,c),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:o.prototype}),s&&Object.assign(l.prototype,s)},Bx=(l,o,s,c)=>{let f,p,m;const y={};if(o=o||{},l==null)return o;do{for(f=Object.getOwnPropertyNames(l),p=f.length;p-- >0;)m=f[p],(!c||c(m,l,o))&&!y[m]&&(o[m]=l[m],y[m]=!0);l=s!==!1&&lu(l)}while(l&&(!s||s(l,o))&&l!==Object.prototype);return o},Hx=(l,o,s)=>{l=String(l),(s===void 0||s>l.length)&&(s=l.length),s-=o.length;const c=l.indexOf(o,s);return c!==-1&&c===s},qx=l=>{if(!l)return null;if(il(l))return l;let o=l.length;if(!Dh(o))return null;const s=new Array(o);for(;o-- >0;)s[o]=l[o];return s},Yx=(l=>o=>l&&o instanceof l)(typeof Uint8Array<"u"&&lu(Uint8Array)),Gx=(l,o)=>{const c=(l&&l[Gi]).call(l);let f;for(;(f=c.next())&&!f.done;){const p=f.value;o.call(l,p[0],p[1])}},Xx=(l,o)=>{let s;const c=[];for(;(s=l.exec(o))!==null;)c.push(s);return c},Qx=$t("HTMLFormElement"),Vx=l=>l.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(s,c,f){return c.toUpperCase()+f}),zm=(({hasOwnProperty:l})=>(o,s)=>l.call(o,s))(Object.prototype),Zx=$t("RegExp"),kh=(l,o)=>{const s=Object.getOwnPropertyDescriptors(l),c={};fr(s,(f,p)=>{let m;(m=o(f,p,l))!==!1&&(c[p]=m||f)}),Object.defineProperties(l,c)},Kx=l=>{kh(l,(o,s)=>{if(xt(l)&&["arguments","caller","callee"].indexOf(s)!==-1)return!1;const c=l[s];if(xt(c)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+s+"'")})}})},Jx=(l,o)=>{const s={},c=f=>{f.forEach(p=>{s[p]=!0})};return il(l)?c(l):c(String(l).split(o)),s},Fx=()=>{},$x=(l,o)=>l!=null&&Number.isFinite(l=+l)?l:o;function Wx(l){return!!(l&&xt(l.append)&&l[_h]==="FormData"&&l[Gi])}const Ix=l=>{const o=new Array(10),s=(c,f)=>{if(ur(c)){if(o.indexOf(c)>=0)return;if(cr(c))return c;if(!("toJSON"in c)){o[f]=c;const p=il(c)?[]:{};return fr(c,(m,y)=>{const b=s(m,f+1);!al(b)&&(p[y]=b)}),o[f]=void 0,p}}return c};return s(l,0)},Px=$t("AsyncFunction"),ev=l=>l&&(ur(l)||xt(l))&&xt(l.then)&&xt(l.catch),Bh=((l,o)=>l?setImmediate:o?((s,c)=>(hn.addEventListener("message",({source:f,data:p})=>{f===hn&&p===s&&c.length&&c.shift()()},!1),f=>{c.push(f),hn.postMessage(s,"*")}))(`axios@${Math.random()}`,[]):s=>setTimeout(s))(typeof setImmediate=="function",xt(hn.postMessage)),tv=typeof queueMicrotask<"u"?queueMicrotask.bind(hn):typeof process<"u"&&process.nextTick||Bh,av=l=>l!=null&&xt(l[Gi]),U={isArray:il,isArrayBuffer:Mh,isBuffer:cr,isFormData:Rx,isArrayBufferView:xx,isString:vx,isNumber:Dh,isBoolean:Sx,isObject:ur,isPlainObject:Ui,isEmptyObject:Ex,isReadableStream:Ox,isRequest:Cx,isResponse:_x,isHeaders:Mx,isUndefined:al,isDate:Nx,isFile:wx,isBlob:jx,isRegExp:Zx,isFunction:xt,isStream:Ax,isURLSearchParams:zx,isTypedArray:Yx,isFileList:Tx,forEach:fr,merge:Vc,extend:Ux,trim:Dx,stripBOM:Lx,inherits:kx,toFlatObject:Bx,kindOf:Xi,kindOfTest:$t,endsWith:Hx,toArray:qx,forEachEntry:Gx,matchAll:Xx,isHTMLForm:Qx,hasOwnProperty:zm,hasOwnProp:zm,reduceDescriptors:kh,freezeMethods:Kx,toObjectSet:Jx,toCamelCase:Vx,noop:Fx,toFiniteNumber:$x,findKey:Uh,global:hn,isContextDefined:Lh,isSpecCompliantForm:Wx,toJSONObject:Ix,isAsyncFn:Px,isThenable:ev,setImmediate:Bh,asap:tv,isIterable:av};function pe(l,o,s,c,f){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",o&&(this.code=o),s&&(this.config=s),c&&(this.request=c),f&&(this.response=f,this.status=f.status?f.status:null)}U.inherits(pe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.status}}});const Hh=pe.prototype,qh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{qh[l]={value:l}});Object.defineProperties(pe,qh);Object.defineProperty(Hh,"isAxiosError",{value:!0});pe.from=(l,o,s,c,f,p)=>{const m=Object.create(Hh);U.toFlatObject(l,m,function(S){return S!==Error.prototype},g=>g!=="isAxiosError");const y=l&&l.message?l.message:"Error",b=o==null&&l?l.code:o;return pe.call(m,y,b,s,c,f),l&&m.cause==null&&Object.defineProperty(m,"cause",{value:l,configurable:!0}),m.name=l&&l.name||"Error",p&&Object.assign(m,p),m};const nv=null;function Zc(l){return U.isPlainObject(l)||U.isArray(l)}function Yh(l){return U.endsWith(l,"[]")?l.slice(0,-2):l}function Om(l,o,s){return l?l.concat(o).map(function(f,p){return f=Yh(f),!s&&p?"["+f+"]":f}).join(s?".":""):o}function lv(l){return U.isArray(l)&&!l.some(Zc)}const rv=U.toFlatObject(U,{},null,function(o){return/^is[A-Z]/.test(o)});function Vi(l,o,s){if(!U.isObject(l))throw new TypeError("target must be an object");o=o||new FormData,s=U.toFlatObject(s,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,A){return!U.isUndefined(A[w])});const c=s.metaTokens,f=s.visitor||S,p=s.dots,m=s.indexes,b=(s.Blob||typeof Blob<"u"&&Blob)&&U.isSpecCompliantForm(o);if(!U.isFunction(f))throw new TypeError("visitor must be a function");function g(R){if(R===null)return"";if(U.isDate(R))return R.toISOString();if(U.isBoolean(R))return R.toString();if(!b&&U.isBlob(R))throw new pe("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(R)||U.isTypedArray(R)?b&&typeof Blob=="function"?new Blob([R]):Buffer.from(R):R}function S(R,w,A){let Y=R;if(R&&!A&&typeof R=="object"){if(U.endsWith(w,"{}"))w=c?w:w.slice(0,-2),R=JSON.stringify(R);else if(U.isArray(R)&&lv(R)||(U.isFileList(R)||U.endsWith(w,"[]"))&&(Y=U.toArray(R)))return w=Yh(w),Y.forEach(function(D,J){!(U.isUndefined(D)||D===null)&&o.append(m===!0?Om([w],J,p):m===null?w:w+"[]",g(D))}),!1}return Zc(R)?!0:(o.append(Om(A,w,p),g(R)),!1)}const v=[],B=Object.assign(rv,{defaultVisitor:S,convertValue:g,isVisitable:Zc});function Z(R,w){if(!U.isUndefined(R)){if(v.indexOf(R)!==-1)throw Error("Circular reference detected in "+w.join("."));v.push(R),U.forEach(R,function(Y,V){(!(U.isUndefined(Y)||Y===null)&&f.call(o,Y,U.isString(V)?V.trim():V,w,B))===!0&&Z(Y,w?w.concat(V):[V])}),v.pop()}}if(!U.isObject(l))throw new TypeError("data must be an object");return Z(l),o}function Cm(l){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(c){return o[c]})}function ru(l,o){this._pairs=[],l&&Vi(l,this,o)}const Gh=ru.prototype;Gh.append=function(o,s){this._pairs.push([o,s])};Gh.toString=function(o){const s=o?function(c){return o.call(this,c,Cm)}:Cm;return this._pairs.map(function(f){return s(f[0])+"="+s(f[1])},"").join("&")};function iv(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Xh(l,o,s){if(!o)return l;const c=s&&s.encode||iv;U.isFunction(s)&&(s={serialize:s});const f=s&&s.serialize;let p;if(f?p=f(o,s):p=U.isURLSearchParams(o)?o.toString():new ru(o,s).toString(c),p){const m=l.indexOf("#");m!==-1&&(l=l.slice(0,m)),l+=(l.indexOf("?")===-1?"?":"&")+p}return l}class _m{constructor(){this.handlers=[]}use(o,s,c){return this.handlers.push({fulfilled:o,rejected:s,synchronous:c?c.synchronous:!1,runWhen:c?c.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){U.forEach(this.handlers,function(c){c!==null&&o(c)})}}const Qh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ov=typeof URLSearchParams<"u"?URLSearchParams:ru,sv=typeof FormData<"u"?FormData:null,cv=typeof Blob<"u"?Blob:null,uv={isBrowser:!0,classes:{URLSearchParams:ov,FormData:sv,Blob:cv},protocols:["http","https","file","blob","url","data"]},iu=typeof window<"u"&&typeof document<"u",Kc=typeof navigator=="object"&&navigator||void 0,fv=iu&&(!Kc||["ReactNative","NativeScript","NS"].indexOf(Kc.product)<0),dv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",pv=iu&&window.location.href||"http://localhost",mv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:iu,hasStandardBrowserEnv:fv,hasStandardBrowserWebWorkerEnv:dv,navigator:Kc,origin:pv},Symbol.toStringTag,{value:"Module"})),st={...mv,...uv};function hv(l,o){return Vi(l,new st.classes.URLSearchParams,{visitor:function(s,c,f,p){return st.isNode&&U.isBuffer(s)?(this.append(c,s.toString("base64")),!1):p.defaultVisitor.apply(this,arguments)},...o})}function gv(l){return U.matchAll(/\w+|\[(\w*)]/g,l).map(o=>o[0]==="[]"?"":o[1]||o[0])}function bv(l){const o={},s=Object.keys(l);let c;const f=s.length;let p;for(c=0;c<f;c++)p=s[c],o[p]=l[p];return o}function Vh(l){function o(s,c,f,p){let m=s[p++];if(m==="__proto__")return!0;const y=Number.isFinite(+m),b=p>=s.length;return m=!m&&U.isArray(f)?f.length:m,b?(U.hasOwnProp(f,m)?f[m]=[f[m],c]:f[m]=c,!y):((!f[m]||!U.isObject(f[m]))&&(f[m]=[]),o(s,c,f[m],p)&&U.isArray(f[m])&&(f[m]=bv(f[m])),!y)}if(U.isFormData(l)&&U.isFunction(l.entries)){const s={};return U.forEachEntry(l,(c,f)=>{o(gv(c),f,s,0)}),s}return null}function yv(l,o,s){if(U.isString(l))try{return(o||JSON.parse)(l),U.trim(l)}catch(c){if(c.name!=="SyntaxError")throw c}return(s||JSON.stringify)(l)}const dr={transitional:Qh,adapter:["xhr","http","fetch"],transformRequest:[function(o,s){const c=s.getContentType()||"",f=c.indexOf("application/json")>-1,p=U.isObject(o);if(p&&U.isHTMLForm(o)&&(o=new FormData(o)),U.isFormData(o))return f?JSON.stringify(Vh(o)):o;if(U.isArrayBuffer(o)||U.isBuffer(o)||U.isStream(o)||U.isFile(o)||U.isBlob(o)||U.isReadableStream(o))return o;if(U.isArrayBufferView(o))return o.buffer;if(U.isURLSearchParams(o))return s.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let y;if(p){if(c.indexOf("application/x-www-form-urlencoded")>-1)return hv(o,this.formSerializer).toString();if((y=U.isFileList(o))||c.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return Vi(y?{"files[]":o}:o,b&&new b,this.formSerializer)}}return p||f?(s.setContentType("application/json",!1),yv(o)):o}],transformResponse:[function(o){const s=this.transitional||dr.transitional,c=s&&s.forcedJSONParsing,f=this.responseType==="json";if(U.isResponse(o)||U.isReadableStream(o))return o;if(o&&U.isString(o)&&(c&&!this.responseType||f)){const m=!(s&&s.silentJSONParsing)&&f;try{return JSON.parse(o,this.parseReviver)}catch(y){if(m)throw y.name==="SyntaxError"?pe.from(y,pe.ERR_BAD_RESPONSE,this,null,this.response):y}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:st.classes.FormData,Blob:st.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],l=>{dr.headers[l]={}});const xv=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vv=l=>{const o={};let s,c,f;return l&&l.split(`
`).forEach(function(m){f=m.indexOf(":"),s=m.substring(0,f).trim().toLowerCase(),c=m.substring(f+1).trim(),!(!s||o[s]&&xv[s])&&(s==="set-cookie"?o[s]?o[s].push(c):o[s]=[c]:o[s]=o[s]?o[s]+", "+c:c)}),o},Mm=Symbol("internals");function nr(l){return l&&String(l).trim().toLowerCase()}function Li(l){return l===!1||l==null?l:U.isArray(l)?l.map(Li):String(l)}function Sv(l){const o=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let c;for(;c=s.exec(l);)o[c[1]]=c[2];return o}const Ev=l=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());function xc(l,o,s,c,f){if(U.isFunction(c))return c.call(this,o,s);if(f&&(o=s),!!U.isString(o)){if(U.isString(c))return o.indexOf(c)!==-1;if(U.isRegExp(c))return c.test(o)}}function Nv(l){return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,s,c)=>s.toUpperCase()+c)}function wv(l,o){const s=U.toCamelCase(" "+o);["get","set","has"].forEach(c=>{Object.defineProperty(l,c+s,{value:function(f,p,m){return this[c].call(this,o,f,p,m)},configurable:!0})})}let vt=class{constructor(o){o&&this.set(o)}set(o,s,c){const f=this;function p(y,b,g){const S=nr(b);if(!S)throw new Error("header name must be a non-empty string");const v=U.findKey(f,S);(!v||f[v]===void 0||g===!0||g===void 0&&f[v]!==!1)&&(f[v||b]=Li(y))}const m=(y,b)=>U.forEach(y,(g,S)=>p(g,S,b));if(U.isPlainObject(o)||o instanceof this.constructor)m(o,s);else if(U.isString(o)&&(o=o.trim())&&!Ev(o))m(vv(o),s);else if(U.isObject(o)&&U.isIterable(o)){let y={},b,g;for(const S of o){if(!U.isArray(S))throw TypeError("Object iterator must return a key-value pair");y[g=S[0]]=(b=y[g])?U.isArray(b)?[...b,S[1]]:[b,S[1]]:S[1]}m(y,s)}else o!=null&&p(s,o,c);return this}get(o,s){if(o=nr(o),o){const c=U.findKey(this,o);if(c){const f=this[c];if(!s)return f;if(s===!0)return Sv(f);if(U.isFunction(s))return s.call(this,f,c);if(U.isRegExp(s))return s.exec(f);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,s){if(o=nr(o),o){const c=U.findKey(this,o);return!!(c&&this[c]!==void 0&&(!s||xc(this,this[c],c,s)))}return!1}delete(o,s){const c=this;let f=!1;function p(m){if(m=nr(m),m){const y=U.findKey(c,m);y&&(!s||xc(c,c[y],y,s))&&(delete c[y],f=!0)}}return U.isArray(o)?o.forEach(p):p(o),f}clear(o){const s=Object.keys(this);let c=s.length,f=!1;for(;c--;){const p=s[c];(!o||xc(this,this[p],p,o,!0))&&(delete this[p],f=!0)}return f}normalize(o){const s=this,c={};return U.forEach(this,(f,p)=>{const m=U.findKey(c,p);if(m){s[m]=Li(f),delete s[p];return}const y=o?Nv(p):String(p).trim();y!==p&&delete s[p],s[y]=Li(f),c[y]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const s=Object.create(null);return U.forEach(this,(c,f)=>{c!=null&&c!==!1&&(s[f]=o&&U.isArray(c)?c.join(", "):c)}),s}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,s])=>o+": "+s).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...s){const c=new this(o);return s.forEach(f=>c.set(f)),c}static accessor(o){const c=(this[Mm]=this[Mm]={accessors:{}}).accessors,f=this.prototype;function p(m){const y=nr(m);c[y]||(wv(f,m),c[y]=!0)}return U.isArray(o)?o.forEach(p):p(o),this}};vt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);U.reduceDescriptors(vt.prototype,({value:l},o)=>{let s=o[0].toUpperCase()+o.slice(1);return{get:()=>l,set(c){this[s]=c}}});U.freezeMethods(vt);function vc(l,o){const s=this||dr,c=o||s,f=vt.from(c.headers);let p=c.data;return U.forEach(l,function(y){p=y.call(s,p,f.normalize(),o?o.status:void 0)}),f.normalize(),p}function Zh(l){return!!(l&&l.__CANCEL__)}function ol(l,o,s){pe.call(this,l??"canceled",pe.ERR_CANCELED,o,s),this.name="CanceledError"}U.inherits(ol,pe,{__CANCEL__:!0});function Kh(l,o,s){const c=s.config.validateStatus;!s.status||!c||c(s.status)?l(s):o(new pe("Request failed with status code "+s.status,[pe.ERR_BAD_REQUEST,pe.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}function jv(l){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l);return o&&o[1]||""}function Tv(l,o){l=l||10;const s=new Array(l),c=new Array(l);let f=0,p=0,m;return o=o!==void 0?o:1e3,function(b){const g=Date.now(),S=c[p];m||(m=g),s[f]=b,c[f]=g;let v=p,B=0;for(;v!==f;)B+=s[v++],v=v%l;if(f=(f+1)%l,f===p&&(p=(p+1)%l),g-m<o)return;const Z=S&&g-S;return Z?Math.round(B*1e3/Z):void 0}}function Av(l,o){let s=0,c=1e3/o,f,p;const m=(g,S=Date.now())=>{s=S,f=null,p&&(clearTimeout(p),p=null),l(...g)};return[(...g)=>{const S=Date.now(),v=S-s;v>=c?m(g,S):(f=g,p||(p=setTimeout(()=>{p=null,m(f)},c-v)))},()=>f&&m(f)]}const Hi=(l,o,s=3)=>{let c=0;const f=Tv(50,250);return Av(p=>{const m=p.loaded,y=p.lengthComputable?p.total:void 0,b=m-c,g=f(b),S=m<=y;c=m;const v={loaded:m,total:y,progress:y?m/y:void 0,bytes:b,rate:g||void 0,estimated:g&&y&&S?(y-m)/g:void 0,event:p,lengthComputable:y!=null,[o?"download":"upload"]:!0};l(v)},s)},Dm=(l,o)=>{const s=l!=null;return[c=>o[0]({lengthComputable:s,total:l,loaded:c}),o[1]]},Um=l=>(...o)=>U.asap(()=>l(...o)),Rv=st.hasStandardBrowserEnv?((l,o)=>s=>(s=new URL(s,st.origin),l.protocol===s.protocol&&l.host===s.host&&(o||l.port===s.port)))(new URL(st.origin),st.navigator&&/(msie|trident)/i.test(st.navigator.userAgent)):()=>!0,zv=st.hasStandardBrowserEnv?{write(l,o,s,c,f,p,m){if(typeof document>"u")return;const y=[`${l}=${encodeURIComponent(o)}`];U.isNumber(s)&&y.push(`expires=${new Date(s).toUTCString()}`),U.isString(c)&&y.push(`path=${c}`),U.isString(f)&&y.push(`domain=${f}`),p===!0&&y.push("secure"),U.isString(m)&&y.push(`SameSite=${m}`),document.cookie=y.join("; ")},read(l){if(typeof document>"u")return null;const o=document.cookie.match(new RegExp("(?:^|; )"+l+"=([^;]*)"));return o?decodeURIComponent(o[1]):null},remove(l){this.write(l,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Ov(l){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(l)}function Cv(l,o){return o?l.replace(/\/?\/$/,"")+"/"+o.replace(/^\/+/,""):l}function Jh(l,o,s){let c=!Ov(o);return l&&(c||s==!1)?Cv(l,o):o}const Lm=l=>l instanceof vt?{...l}:l;function bn(l,o){o=o||{};const s={};function c(g,S,v,B){return U.isPlainObject(g)&&U.isPlainObject(S)?U.merge.call({caseless:B},g,S):U.isPlainObject(S)?U.merge({},S):U.isArray(S)?S.slice():S}function f(g,S,v,B){if(U.isUndefined(S)){if(!U.isUndefined(g))return c(void 0,g,v,B)}else return c(g,S,v,B)}function p(g,S){if(!U.isUndefined(S))return c(void 0,S)}function m(g,S){if(U.isUndefined(S)){if(!U.isUndefined(g))return c(void 0,g)}else return c(void 0,S)}function y(g,S,v){if(v in o)return c(g,S);if(v in l)return c(void 0,g)}const b={url:p,method:p,data:p,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,withXSRFToken:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:y,headers:(g,S,v)=>f(Lm(g),Lm(S),v,!0)};return U.forEach(Object.keys({...l,...o}),function(S){const v=b[S]||f,B=v(l[S],o[S],S);U.isUndefined(B)&&v!==y||(s[S]=B)}),s}const Fh=l=>{const o=bn({},l);let{data:s,withXSRFToken:c,xsrfHeaderName:f,xsrfCookieName:p,headers:m,auth:y}=o;if(o.headers=m=vt.from(m),o.url=Xh(Jh(o.baseURL,o.url,o.allowAbsoluteUrls),l.params,l.paramsSerializer),y&&m.set("Authorization","Basic "+btoa((y.username||"")+":"+(y.password?unescape(encodeURIComponent(y.password)):""))),U.isFormData(s)){if(st.hasStandardBrowserEnv||st.hasStandardBrowserWebWorkerEnv)m.setContentType(void 0);else if(U.isFunction(s.getHeaders)){const b=s.getHeaders(),g=["content-type","content-length"];Object.entries(b).forEach(([S,v])=>{g.includes(S.toLowerCase())&&m.set(S,v)})}}if(st.hasStandardBrowserEnv&&(c&&U.isFunction(c)&&(c=c(o)),c||c!==!1&&Rv(o.url))){const b=f&&p&&zv.read(p);b&&m.set(f,b)}return o},_v=typeof XMLHttpRequest<"u",Mv=_v&&function(l){return new Promise(function(s,c){const f=Fh(l);let p=f.data;const m=vt.from(f.headers).normalize();let{responseType:y,onUploadProgress:b,onDownloadProgress:g}=f,S,v,B,Z,R;function w(){Z&&Z(),R&&R(),f.cancelToken&&f.cancelToken.unsubscribe(S),f.signal&&f.signal.removeEventListener("abort",S)}let A=new XMLHttpRequest;A.open(f.method.toUpperCase(),f.url,!0),A.timeout=f.timeout;function Y(){if(!A)return;const D=vt.from("getAllResponseHeaders"in A&&A.getAllResponseHeaders()),I={data:!y||y==="text"||y==="json"?A.responseText:A.response,status:A.status,statusText:A.statusText,headers:D,config:l,request:A};Kh(function(F){s(F),w()},function(F){c(F),w()},I),A=null}"onloadend"in A?A.onloadend=Y:A.onreadystatechange=function(){!A||A.readyState!==4||A.status===0&&!(A.responseURL&&A.responseURL.indexOf("file:")===0)||setTimeout(Y)},A.onabort=function(){A&&(c(new pe("Request aborted",pe.ECONNABORTED,l,A)),A=null)},A.onerror=function(J){const I=J&&J.message?J.message:"Network Error",se=new pe(I,pe.ERR_NETWORK,l,A);se.event=J||null,c(se),A=null},A.ontimeout=function(){let J=f.timeout?"timeout of "+f.timeout+"ms exceeded":"timeout exceeded";const I=f.transitional||Qh;f.timeoutErrorMessage&&(J=f.timeoutErrorMessage),c(new pe(J,I.clarifyTimeoutError?pe.ETIMEDOUT:pe.ECONNABORTED,l,A)),A=null},p===void 0&&m.setContentType(null),"setRequestHeader"in A&&U.forEach(m.toJSON(),function(J,I){A.setRequestHeader(I,J)}),U.isUndefined(f.withCredentials)||(A.withCredentials=!!f.withCredentials),y&&y!=="json"&&(A.responseType=f.responseType),g&&([B,R]=Hi(g,!0),A.addEventListener("progress",B)),b&&A.upload&&([v,Z]=Hi(b),A.upload.addEventListener("progress",v),A.upload.addEventListener("loadend",Z)),(f.cancelToken||f.signal)&&(S=D=>{A&&(c(!D||D.type?new ol(null,l,A):D),A.abort(),A=null)},f.cancelToken&&f.cancelToken.subscribe(S),f.signal&&(f.signal.aborted?S():f.signal.addEventListener("abort",S)));const V=jv(f.url);if(V&&st.protocols.indexOf(V)===-1){c(new pe("Unsupported protocol "+V+":",pe.ERR_BAD_REQUEST,l));return}A.send(p||null)})},Dv=(l,o)=>{const{length:s}=l=l?l.filter(Boolean):[];if(o||s){let c=new AbortController,f;const p=function(g){if(!f){f=!0,y();const S=g instanceof Error?g:this.reason;c.abort(S instanceof pe?S:new ol(S instanceof Error?S.message:S))}};let m=o&&setTimeout(()=>{m=null,p(new pe(`timeout ${o} of ms exceeded`,pe.ETIMEDOUT))},o);const y=()=>{l&&(m&&clearTimeout(m),m=null,l.forEach(g=>{g.unsubscribe?g.unsubscribe(p):g.removeEventListener("abort",p)}),l=null)};l.forEach(g=>g.addEventListener("abort",p));const{signal:b}=c;return b.unsubscribe=()=>U.asap(y),b}},Uv=function*(l,o){let s=l.byteLength;if(s<o){yield l;return}let c=0,f;for(;c<s;)f=c+o,yield l.slice(c,f),c=f},Lv=async function*(l,o){for await(const s of kv(l))yield*Uv(s,o)},kv=async function*(l){if(l[Symbol.asyncIterator]){yield*l;return}const o=l.getReader();try{for(;;){const{done:s,value:c}=await o.read();if(s)break;yield c}}finally{await o.cancel()}},km=(l,o,s,c)=>{const f=Lv(l,o);let p=0,m,y=b=>{m||(m=!0,c&&c(b))};return new ReadableStream({async pull(b){try{const{done:g,value:S}=await f.next();if(g){y(),b.close();return}let v=S.byteLength;if(s){let B=p+=v;s(B)}b.enqueue(new Uint8Array(S))}catch(g){throw y(g),g}},cancel(b){return y(b),f.return()}},{highWaterMark:2})},Bm=64*1024,{isFunction:_i}=U,Bv=(({Request:l,Response:o})=>({Request:l,Response:o}))(U.global),{ReadableStream:Hm,TextEncoder:qm}=U.global,Ym=(l,...o)=>{try{return!!l(...o)}catch{return!1}},Hv=l=>{l=U.merge.call({skipUndefined:!0},Bv,l);const{fetch:o,Request:s,Response:c}=l,f=o?_i(o):typeof fetch=="function",p=_i(s),m=_i(c);if(!f)return!1;const y=f&&_i(Hm),b=f&&(typeof qm=="function"?(R=>w=>R.encode(w))(new qm):async R=>new Uint8Array(await new s(R).arrayBuffer())),g=p&&y&&Ym(()=>{let R=!1;const w=new s(st.origin,{body:new Hm,method:"POST",get duplex(){return R=!0,"half"}}).headers.has("Content-Type");return R&&!w}),S=m&&y&&Ym(()=>U.isReadableStream(new c("").body)),v={stream:S&&(R=>R.body)};f&&["text","arrayBuffer","blob","formData","stream"].forEach(R=>{!v[R]&&(v[R]=(w,A)=>{let Y=w&&w[R];if(Y)return Y.call(w);throw new pe(`Response type '${R}' is not supported`,pe.ERR_NOT_SUPPORT,A)})});const B=async R=>{if(R==null)return 0;if(U.isBlob(R))return R.size;if(U.isSpecCompliantForm(R))return(await new s(st.origin,{method:"POST",body:R}).arrayBuffer()).byteLength;if(U.isArrayBufferView(R)||U.isArrayBuffer(R))return R.byteLength;if(U.isURLSearchParams(R)&&(R=R+""),U.isString(R))return(await b(R)).byteLength},Z=async(R,w)=>{const A=U.toFiniteNumber(R.getContentLength());return A??B(w)};return async R=>{let{url:w,method:A,data:Y,signal:V,cancelToken:D,timeout:J,onDownloadProgress:I,onUploadProgress:se,responseType:F,headers:he,withCredentials:ge="same-origin",fetchOptions:qe}=Fh(R),Ye=o||fetch;F=F?(F+"").toLowerCase():"text";let De=Dv([V,D&&D.toAbortSignal()],J),ze=null;const W=De&&De.unsubscribe&&(()=>{De.unsubscribe()});let ie;try{if(se&&g&&A!=="get"&&A!=="head"&&(ie=await Z(he,Y))!==0){let x=new s(w,{method:"POST",body:Y,duplex:"half"}),z;if(U.isFormData(Y)&&(z=x.headers.get("content-type"))&&he.setContentType(z),x.body){const[k,K]=Dm(ie,Hi(Um(se)));Y=km(x.body,Bm,k,K)}}U.isString(ge)||(ge=ge?"include":"omit");const _=p&&"credentials"in s.prototype,$={...qe,signal:De,method:A.toUpperCase(),headers:he.normalize().toJSON(),body:Y,duplex:"half",credentials:_?ge:void 0};ze=p&&new s(w,$);let P=await(p?Ye(ze,qe):Ye(w,$));const G=S&&(F==="stream"||F==="response");if(S&&(I||G&&W)){const x={};["status","statusText","headers"].forEach(te=>{x[te]=P[te]});const z=U.toFiniteNumber(P.headers.get("content-length")),[k,K]=I&&Dm(z,Hi(Um(I),!0))||[];P=new c(km(P.body,Bm,k,()=>{K&&K(),W&&W()}),x)}F=F||"text";let H=await v[U.findKey(v,F)||"text"](P,R);return!G&&W&&W(),await new Promise((x,z)=>{Kh(x,z,{data:H,headers:vt.from(P.headers),status:P.status,statusText:P.statusText,config:R,request:ze})})}catch(_){throw W&&W(),_&&_.name==="TypeError"&&/Load failed|fetch/i.test(_.message)?Object.assign(new pe("Network Error",pe.ERR_NETWORK,R,ze),{cause:_.cause||_}):pe.from(_,_&&_.code,R,ze)}}},qv=new Map,$h=l=>{let o=l&&l.env||{};const{fetch:s,Request:c,Response:f}=o,p=[c,f,s];let m=p.length,y=m,b,g,S=qv;for(;y--;)b=p[y],g=S.get(b),g===void 0&&S.set(b,g=y?new Map:Hv(o)),S=g;return g};$h();const ou={http:nv,xhr:Mv,fetch:{get:$h}};U.forEach(ou,(l,o)=>{if(l){try{Object.defineProperty(l,"name",{value:o})}catch{}Object.defineProperty(l,"adapterName",{value:o})}});const Gm=l=>`- ${l}`,Yv=l=>U.isFunction(l)||l===null||l===!1;function Gv(l,o){l=U.isArray(l)?l:[l];const{length:s}=l;let c,f;const p={};for(let m=0;m<s;m++){c=l[m];let y;if(f=c,!Yv(c)&&(f=ou[(y=String(c)).toLowerCase()],f===void 0))throw new pe(`Unknown adapter '${y}'`);if(f&&(U.isFunction(f)||(f=f.get(o))))break;p[y||"#"+m]=f}if(!f){const m=Object.entries(p).map(([b,g])=>`adapter ${b} `+(g===!1?"is not supported by the environment":"is not available in the build"));let y=s?m.length>1?`since :
`+m.map(Gm).join(`
`):" "+Gm(m[0]):"as no adapter specified";throw new pe("There is no suitable adapter to dispatch the request "+y,"ERR_NOT_SUPPORT")}return f}const Wh={getAdapter:Gv,adapters:ou};function Sc(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new ol(null,l)}function Xm(l){return Sc(l),l.headers=vt.from(l.headers),l.data=vc.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),Wh.getAdapter(l.adapter||dr.adapter,l)(l).then(function(c){return Sc(l),c.data=vc.call(l,l.transformResponse,c),c.headers=vt.from(c.headers),c},function(c){return Zh(c)||(Sc(l),c&&c.response&&(c.response.data=vc.call(l,l.transformResponse,c.response),c.response.headers=vt.from(c.response.headers))),Promise.reject(c)})}const Ih="1.13.2",Zi={};["object","boolean","number","function","string","symbol"].forEach((l,o)=>{Zi[l]=function(c){return typeof c===l||"a"+(o<1?"n ":" ")+l}});const Qm={};Zi.transitional=function(o,s,c){function f(p,m){return"[Axios v"+Ih+"] Transitional option '"+p+"'"+m+(c?". "+c:"")}return(p,m,y)=>{if(o===!1)throw new pe(f(m," has been removed"+(s?" in "+s:"")),pe.ERR_DEPRECATED);return s&&!Qm[m]&&(Qm[m]=!0,console.warn(f(m," has been deprecated since v"+s+" and will be removed in the near future"))),o?o(p,m,y):!0}};Zi.spelling=function(o){return(s,c)=>(console.warn(`${c} is likely a misspelling of ${o}`),!0)};function Xv(l,o,s){if(typeof l!="object")throw new pe("options must be an object",pe.ERR_BAD_OPTION_VALUE);const c=Object.keys(l);let f=c.length;for(;f-- >0;){const p=c[f],m=o[p];if(m){const y=l[p],b=y===void 0||m(y,p,l);if(b!==!0)throw new pe("option "+p+" must be "+b,pe.ERR_BAD_OPTION_VALUE);continue}if(s!==!0)throw new pe("Unknown option "+p,pe.ERR_BAD_OPTION)}}const ki={assertOptions:Xv,validators:Zi},ta=ki.validators;let gn=class{constructor(o){this.defaults=o||{},this.interceptors={request:new _m,response:new _m}}async request(o,s){try{return await this._request(o,s)}catch(c){if(c instanceof Error){let f={};Error.captureStackTrace?Error.captureStackTrace(f):f=new Error;const p=f.stack?f.stack.replace(/^.+\n/,""):"";try{c.stack?p&&!String(c.stack).endsWith(p.replace(/^.+\n.+\n/,""))&&(c.stack+=`
`+p):c.stack=p}catch{}}throw c}}_request(o,s){typeof o=="string"?(s=s||{},s.url=o):s=o||{},s=bn(this.defaults,s);const{transitional:c,paramsSerializer:f,headers:p}=s;c!==void 0&&ki.assertOptions(c,{silentJSONParsing:ta.transitional(ta.boolean),forcedJSONParsing:ta.transitional(ta.boolean),clarifyTimeoutError:ta.transitional(ta.boolean)},!1),f!=null&&(U.isFunction(f)?s.paramsSerializer={serialize:f}:ki.assertOptions(f,{encode:ta.function,serialize:ta.function},!0)),s.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?s.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:s.allowAbsoluteUrls=!0),ki.assertOptions(s,{baseUrl:ta.spelling("baseURL"),withXsrfToken:ta.spelling("withXSRFToken")},!0),s.method=(s.method||this.defaults.method||"get").toLowerCase();let m=p&&U.merge(p.common,p[s.method]);p&&U.forEach(["delete","get","head","post","put","patch","common"],R=>{delete p[R]}),s.headers=vt.concat(m,p);const y=[];let b=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(s)===!1||(b=b&&w.synchronous,y.unshift(w.fulfilled,w.rejected))});const g=[];this.interceptors.response.forEach(function(w){g.push(w.fulfilled,w.rejected)});let S,v=0,B;if(!b){const R=[Xm.bind(this),void 0];for(R.unshift(...y),R.push(...g),B=R.length,S=Promise.resolve(s);v<B;)S=S.then(R[v++],R[v++]);return S}B=y.length;let Z=s;for(;v<B;){const R=y[v++],w=y[v++];try{Z=R(Z)}catch(A){w.call(this,A);break}}try{S=Xm.call(this,Z)}catch(R){return Promise.reject(R)}for(v=0,B=g.length;v<B;)S=S.then(g[v++],g[v++]);return S}getUri(o){o=bn(this.defaults,o);const s=Jh(o.baseURL,o.url,o.allowAbsoluteUrls);return Xh(s,o.params,o.paramsSerializer)}};U.forEach(["delete","get","head","options"],function(o){gn.prototype[o]=function(s,c){return this.request(bn(c||{},{method:o,url:s,data:(c||{}).data}))}});U.forEach(["post","put","patch"],function(o){function s(c){return function(p,m,y){return this.request(bn(y||{},{method:o,headers:c?{"Content-Type":"multipart/form-data"}:{},url:p,data:m}))}}gn.prototype[o]=s(),gn.prototype[o+"Form"]=s(!0)});let Qv=class Ph{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let s;this.promise=new Promise(function(p){s=p});const c=this;this.promise.then(f=>{if(!c._listeners)return;let p=c._listeners.length;for(;p-- >0;)c._listeners[p](f);c._listeners=null}),this.promise.then=f=>{let p;const m=new Promise(y=>{c.subscribe(y),p=y}).then(f);return m.cancel=function(){c.unsubscribe(p)},m},o(function(p,m,y){c.reason||(c.reason=new ol(p,m,y),s(c.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const s=this._listeners.indexOf(o);s!==-1&&this._listeners.splice(s,1)}toAbortSignal(){const o=new AbortController,s=c=>{o.abort(c)};return this.subscribe(s),o.signal.unsubscribe=()=>this.unsubscribe(s),o.signal}static source(){let o;return{token:new Ph(function(f){o=f}),cancel:o}}};function Vv(l){return function(s){return l.apply(null,s)}}function Zv(l){return U.isObject(l)&&l.isAxiosError===!0}const Jc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Jc).forEach(([l,o])=>{Jc[o]=l});function eg(l){const o=new gn(l),s=Ch(gn.prototype.request,o);return U.extend(s,gn.prototype,o,{allOwnKeys:!0}),U.extend(s,o,null,{allOwnKeys:!0}),s.create=function(f){return eg(bn(l,f))},s}const Ee=eg(dr);Ee.Axios=gn;Ee.CanceledError=ol;Ee.CancelToken=Qv;Ee.isCancel=Zh;Ee.VERSION=Ih;Ee.toFormData=Vi;Ee.AxiosError=pe;Ee.Cancel=Ee.CanceledError;Ee.all=function(o){return Promise.all(o)};Ee.spread=Vv;Ee.isAxiosError=Zv;Ee.mergeConfig=bn;Ee.AxiosHeaders=vt;Ee.formToJSON=l=>Vh(U.isHTMLForm(l)?new FormData(l):l);Ee.getAdapter=Wh.getAdapter;Ee.HttpStatusCode=Jc;Ee.default=Ee;const{Axios:K1,AxiosError:J1,CanceledError:F1,isCancel:$1,CancelToken:W1,VERSION:I1,all:P1,Cancel:e2,isAxiosError:t2,spread:a2,toFormData:n2,AxiosHeaders:l2,HttpStatusCode:r2,formToJSON:i2,getAdapter:o2,mergeConfig:s2}=Ee,Kv=()=>"https://scamshield-backend-urbi.onrender.com",Mt=Ee.create({baseURL:Kv()});Mt.interceptors.request.use(l=>{const o=localStorage.getItem("token");return o&&(l.headers.Authorization=`Bearer ${o}`),l});const su={me:"/users/me",leaderboard:"/users/leaderboard",profilePic:"/users/profile-pic"},tg=()=>Mt.get(su.me,{headers:{Authorization:`Bearer ${ft()}`}}),Jv=()=>Mt.get(su.leaderboard),Fv=l=>Mt.put(su.profilePic,{profilePic:l},{headers:{Authorization:`Bearer ${ft()}`}}),$v={myBlogs:"/blogs/my/list"},Wv=()=>Mt.get($v.myBlogs,{headers:{Authorization:`Bearer ${ft()}`}});function Iv(){const[l,o]=j.useState(null),[s,c]=j.useState([]),[f,p]=j.useState(!0),[m,y]=j.useState(""),[b,g]=j.useState(null),[S,v]=j.useState(!1),B=async()=>{try{p(!0),y("");const he=(await tg()).data?.user;if(!he){y("Please login to view profile."),p(!1);return}o(he);const ge=await Wv();c(ge.data||[])}catch(F){console.log(F),y(F?.response?.data?.message||"Failed to load profile data")}finally{p(!1)}};j.useEffect(()=>{B()},[]);const Z=async()=>{try{if(!b){alert("⚠️ Please select an image first");return}v(!0);const F=new FormData;F.append("image",b);const ge=(await Ee.post("http://localhost:5001/api/upload/image",F,{headers:{Authorization:`Bearer ${ft()}`,"Content-Type":"multipart/form-data"}})).data?.url;if(!ge){alert("❌ Upload failed"),v(!1);return}await Fv(ge),alert("✅ Profile picture updated successfully!"),g(null),B()}catch(F){console.log(F),alert(F?.response?.data?.message||"❌ Failed to update profile pic")}finally{v(!1)}},R=`
    :root {
      --bg-dark: #050505;
      --card-bg: rgba(22, 22, 22, 0.95);
      --border-color: #333;
      --primary-red: #ff2a2a;
      --text-main: #e0e0e0;
      --text-muted: #888;
      --font-tech: 'Courier New', monospace;
      --font-main: 'Inter', sans-serif;
    }

    .profile-page {
      min-height: 100vh;
      color: var(--text-main);
      font-family: var(--font-main);
      padding: 40px 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .page-title {
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: 3px;
      border-bottom: 2px solid var(--primary-red);
      padding-bottom: 10px;
      margin-bottom: 40px;
      text-shadow: 0 0 10px rgba(255, 42, 42, 0.5);
    }

    /* Layout Grid */
    .dashboard-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 25px;
      width: 100%;
      max-width: 1000px;
    }

    @media (max-width: 850px) {
      .dashboard-grid { grid-template-columns: 1fr; }
    }

    /* Cards */
    .cyber-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-left: 3px solid var(--primary-red);
      padding: 25px;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.7);
      backdrop-filter: blur(5px);
      transition: transform 0.2s;
    }
    .cyber-card:hover { border-color: #555; }

    .card-title {
      margin: 0 0 20px 0;
      font-size: 1.1rem;
      color: var(--primary-red);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    /* Identity Section */
    .identity-wrapper {
      display: flex;
      gap: 20px;
      align-items: center;
    }
    @media (max-width: 500px) {
      .identity-wrapper { flex-direction: column; text-align: center; }
    }

    .profile-pic-container {
      position: relative;
    }

    .profile-pic {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--primary-red);
      box-shadow: 0 0 20px rgba(255, 42, 42, 0.4);
    }

    .user-details h3 {
      font-size: 1.5rem;
      margin: 0 0 5px 0;
      color: #fff;
    }
    .user-details p {
      margin: 4px 0;
      color: var(--text-muted);
      font-size: 0.9rem;
    }
    .user-details .email { font-family: var(--font-tech); color: #bbb; }

    /* Upload Controls */
    .upload-section {
      margin-top: 25px;
      padding-top: 20px;
      border-top: 1px dashed #333;
    }
    
    .file-input-wrapper {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }
    @media (max-width: 500px) { .file-input-wrapper { flex-direction: column; } }

    .custom-file-label {
      background: #222;
      border: 1px solid #444;
      color: #ccc;
      padding: 10px 15px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
      flex: 1;
      text-align: center;
      transition: all 0.2s;
    }
    .custom-file-label:hover { background: #333; color: #fff; }

    .upload-btn {
      background: linear-gradient(135deg, #990000, #ff2a2a);
      border: none;
      color: white;
      padding: 10px 20px;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 0.85rem;
      letter-spacing: 1px;
      transition: all 0.3s;
    }
    .upload-btn:hover:not(:disabled) {
      box-shadow: 0 0 15px rgba(255, 42, 42, 0.6);
      transform: translateY(-2px);
    }
    .upload-btn:disabled { opacity: 0.5; cursor: not-allowed; }

    /* Stats Grid */
    .stats-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    .stat-box {
      background: #111;
      padding: 15px;
      border-radius: 6px;
      border: 1px solid #222;
      text-align: center;
    }
    .stat-label { font-size: 0.75rem; color: #888; text-transform: uppercase; margin-bottom: 5px; display: block; }
    .stat-value { font-size: 1.2rem; color: #fff; font-family: var(--font-tech); font-weight: bold; }
    .stat-value.highlight { color: var(--primary-red); text-shadow: 0 0 8px rgba(255, 42, 42, 0.3); }

    /* Progress Bars (Text based) */
    .prog-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      border-bottom: 1px solid #222;
      padding-bottom: 8px;
    }
    .prog-row:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
    .prog-lvl { color: #fff; font-weight: 600; }
    .prog-nums { font-family: var(--font-tech); color: var(--text-muted); }
    .prog-nums b { color: var(--primary-red); }

    /* Blog List */
    .full-width { grid-column: 1 / -1; }
    
    .pending-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .pending-item {
      background: #111;
      border-left: 3px solid #ffa500;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .pending-info h4 { margin: 0; color: #e0e0e0; font-size: 1rem; }
    .pending-info p { margin: 5px 0 0 0; color: #777; font-size: 0.85rem; font-style: italic; }
    .status-badge {
      background: rgba(255, 165, 0, 0.15);
      color: #ffa500;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: bold;
      border: 1px solid rgba(255, 165, 0, 0.3);
    }

    .loading-screen { height: 100vh; display: flex; justify-content: center; align-items: center; background: #000; color: var(--primary-red); font-family: var(--font-tech); }
    .error-msg { color: var(--primary-red); padding: 20px; border: 1px solid var(--primary-red); background: rgba(255, 0, 0, 0.1); }
  `;if(f)return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:R}),u.jsx("div",{className:"loading-screen",children:"INITIALIZING PROFILE..."})]});if(m)return u.jsxs("div",{className:"profile-page",style:{background:"#050505"},children:[u.jsx("style",{children:R}),u.jsx("div",{className:"error-msg",children:m})]});if(!l)return null;const w=s.length,A=s.filter(F=>F.status==="verified"),Y=s.filter(F=>F.status==="pending"),V=s.filter(F=>F.status==="rejected"),D=l.phishingProgress||{},J=D.beginner||{},I=D.medium||{},se=D.pro||{};return u.jsxs("div",{className:"profile-page",style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url(${_t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[u.jsx("style",{children:R}),u.jsxs("h1",{className:"page-title",children:["User ",u.jsx("span",{style:{color:"#ff2a2a"},children:"Identity"})]}),u.jsxs("div",{className:"dashboard-grid",children:[u.jsxs("div",{className:"cyber-card",children:[u.jsx("div",{className:"card-title",children:"👤 Personal Data"}),u.jsxs("div",{className:"identity-wrapper",children:[u.jsx("div",{className:"profile-pic-container",children:u.jsx("img",{src:l.profilePic?l.profilePic:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:"profile",className:"profile-pic"})}),u.jsxs("div",{className:"user-details",children:[u.jsx("h3",{children:l.name}),u.jsx("p",{className:"email",children:l.email}),u.jsxs("div",{style:{marginTop:"10px",display:"flex",gap:"15px"},children:[u.jsxs("div",{children:[u.jsx("span",{style:{color:"#666",fontSize:"0.8rem"},children:"POINTS"}),u.jsx("div",{style:{color:"#ff2a2a",fontWeight:"bold",fontSize:"1.1rem"},children:l.points||0})]}),u.jsxs("div",{children:[u.jsx("span",{style:{color:"#666",fontSize:"0.8rem"},children:"REPORTS"}),u.jsx("div",{style:{color:"#fff",fontWeight:"bold",fontSize:"1.1rem"},children:l.reportsCount||0})]})]})]})]}),u.jsxs("div",{className:"upload-section",children:[u.jsx("label",{style:{color:"#888",fontSize:"0.85rem",marginBottom:"8px",display:"block"},children:"Update Avatar"}),u.jsxs("div",{className:"file-input-wrapper",children:[u.jsxs("label",{className:"custom-file-label",children:[b?b.name:"📁 Select Image...",u.jsx("input",{type:"file",accept:"image/*",onChange:F=>g(F.target.files[0]),style:{display:"none"}})]}),u.jsx("button",{className:"upload-btn",onClick:Z,disabled:S,children:S?"Uploading...":"Upload"})]})]})]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"25px"},children:[u.jsxs("div",{className:"cyber-card",children:[u.jsx("div",{className:"card-title",children:"📝 Content Stats"}),u.jsxs("div",{className:"stats-container",children:[u.jsxs("div",{className:"stat-box",children:[u.jsx("span",{className:"stat-label",children:"Total Posts"}),u.jsx("span",{className:"stat-value",children:w})]}),u.jsxs("div",{className:"stat-box",children:[u.jsx("span",{className:"stat-label",children:"Verified"}),u.jsx("span",{className:"stat-value highlight",children:A.length})]}),u.jsxs("div",{className:"stat-box",children:[u.jsx("span",{className:"stat-label",children:"Pending"}),u.jsx("span",{className:"stat-value",style:{color:"orange"},children:Y.length})]}),u.jsxs("div",{className:"stat-box",children:[u.jsx("span",{className:"stat-label",children:"Rejected"}),u.jsx("span",{className:"stat-value",style:{color:"#555"},children:V.length})]})]})]}),u.jsxs("div",{className:"cyber-card",children:[u.jsx("div",{className:"card-title",children:"🎯 Simulation Metrics"}),u.jsxs("div",{style:{padding:"0 10px"},children:[u.jsxs("div",{className:"prog-row",children:[u.jsx("span",{className:"prog-lvl",children:"Beginner"}),u.jsxs("span",{className:"prog-nums",children:[u.jsx("b",{children:J.correct||0})," / ",J.total||100]})]}),u.jsxs("div",{className:"prog-row",children:[u.jsx("span",{className:"prog-lvl",children:"Medium"}),u.jsxs("span",{className:"prog-nums",children:[u.jsx("b",{children:I.correct||0})," / ",I.total||50]})]}),u.jsxs("div",{className:"prog-row",children:[u.jsx("span",{className:"prog-lvl",children:"Pro"}),u.jsxs("span",{className:"prog-nums",children:[u.jsx("b",{children:se.correct||0})," / ",se.total||50]})]})]})]})]}),u.jsxs("div",{className:"cyber-card full-width",children:[u.jsx("div",{className:"card-title",children:"⏳ Pending Approvals"}),Y.length===0?u.jsx("div",{style:{textAlign:"center",color:"#666",padding:"20px",fontStyle:"italic"},children:"No pending content in queue."}):u.jsx("div",{className:"pending-list",children:Y.map(F=>u.jsxs("div",{className:"pending-item",children:[u.jsxs("div",{className:"pending-info",children:[u.jsx("h4",{children:F.title}),F.subtitle&&u.jsx("p",{children:F.subtitle})]}),u.jsx("span",{className:"status-badge",children:F.status})]},F._id))})]})]})]})}function Pv(){const[l,o]=j.useState(""),[s,c]=j.useState(""),[f,p]=j.useState(12),[m,y]=j.useState(!0),[b,g]=j.useState(!0),[S,v]=j.useState(!0),[B,Z]=j.useState(!0),R=j.useMemo(()=>{const D=l.trim();if(!D)return{score:0,level:"WAITING FOR INPUT",color:"gray",tips:[]};let J=0;const I=[];D.length>=8?J+=20:I.push("Use at least 8 characters"),D.length>=12?J+=20:I.push("Use 12+ characters for better security"),/[a-z]/.test(D)?J+=15:I.push("Add lowercase letters (a-z)"),/[A-Z]/.test(D)?J+=15:I.push("Add uppercase letters (A-Z)"),/[0-9]/.test(D)?J+=15:I.push("Add numbers (0-9)"),/[^A-Za-z0-9]/.test(D)?J+=15:I.push("Add symbols (!@#$%)"),/password|1234|qwerty|admin|letmein/i.test(D)&&(J-=30,I.push("Avoid common passwords like '1234' or 'password'")),/^(.)\1+$/.test(D)&&(J-=25,I.push("Avoid repeating same characters")),J<0&&(J=0),J>100&&(J=100);let se="CRITICAL",F="red";return J>=70?(se="SECURE",F="green"):J>=40&&(se="MODERATE",F="orange"),{score:J,level:se,color:F,tips:I}},[l]),w=()=>{let D="";if(m&&(D+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),b&&(D+="abcdefghijklmnopqrstuvwxyz"),S&&(D+="0123456789"),B&&(D+="!@#$%^&*()_+-=[]{}|;:,.<>?"),!D){alert("Select at least 1 option (Upper/Lower/Numbers/Symbols)");return}let J="";for(let I=0;I<f;I++)J+=D[Math.floor(Math.random()*D.length)];c(J)},A=async D=>{try{await navigator.clipboard.writeText(D),alert("✅ Copied to clipboard!")}catch{alert("❌ Failed to copy")}},Y=D=>D==="green"?"var(--neon-green)":D==="orange"?"var(--neon-orange)":D==="red"?"var(--primary-red)":"#555";return u.jsxs("div",{className:"tool-page",style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url(${_t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[u.jsx("style",{children:`
    :root {
      --primary-red: #ff2a2a;
      --neon-green: #00e676;
      --neon-orange: #ff9100;
      --bg-dark: #050505;
      --card-bg: rgba(20, 20, 20, 0.95);
      --border-color: #333;
      --text-main: #e0e0e0;
      --text-muted: #888;
      --font-tech: 'Courier New', monospace;
      --font-main: 'Inter', sans-serif;
    }

    .tool-page {
      min-height: 100vh;
      color: var(--text-main);
      font-family: var(--font-main);
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .page-title {
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 10px;
      text-align: center;
      text-shadow: 0 0 15px rgba(255, 42, 42, 0.5);
    }
    .page-title span { color: var(--primary-red); }

    .page-desc {
      max-width: 600px;
      text-align: center;
      color: var(--text-muted);
      font-family: var(--font-tech);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 40px;
      border-bottom: 1px solid #333;
      padding-bottom: 20px;
    }

    .tool-container {
      width: 100%;
      max-width: 750px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    /* Cards */
    .cyber-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-left: 4px solid var(--primary-red);
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.6);
      backdrop-filter: blur(5px);
    }

    .card-header {
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 0 0 20px 0;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    /* Input Styling */
    .cyber-input {
      width: 100%;
      padding: 15px;
      background: #0a0a0a;
      border: 1px solid #333;
      color: #fff;
      border-radius: 4px;
      font-family: var(--font-tech);
      font-size: 1.1rem;
      box-sizing: border-box;
      transition: all 0.3s;
    }
    .cyber-input:focus {
      border-color: var(--primary-red);
      outline: none;
      box-shadow: 0 0 15px rgba(255, 42, 42, 0.2);
    }

    /* Strength Meter */
    .strength-box {
      margin-top: 20px;
      background: #111;
      padding: 15px;
      border-radius: 6px;
      border: 1px solid #222;
    }
    
    .strength-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      font-size: 0.9rem;
      text-transform: uppercase;
      font-weight: bold;
    }

    .progress-track {
      height: 8px;
      background: #333;
      border-radius: 4px;
      overflow: hidden;
    }
    .progress-fill {
      height: 100%;
      transition: width 0.5s ease, background-color 0.5s ease;
      box-shadow: 0 0 10px currentColor;
    }

    .tips-list {
      margin-top: 15px;
      padding-left: 0;
      list-style: none;
    }
    .tip-item {
      color: #ff5f56;
      font-size: 0.85rem;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tip-item::before { content: "⚠️"; font-size: 0.8rem; }

    /* Generator Controls */
    .controls-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }

    /* Custom Checkbox */
    .check-label {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      color: #ccc;
      font-size: 0.9rem;
      user-select: none;
    }
    .check-input { display: none; }
    .custom-check {
      width: 18px;
      height: 18px;
      border: 1px solid #555;
      border-radius: 3px;
      background: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s;
    }
    .check-input:checked + .custom-check {
      background: var(--primary-red);
      border-color: var(--primary-red);
      box-shadow: 0 0 8px rgba(255, 42, 42, 0.6);
    }
    .custom-check::after {
      content: '✓';
      color: #fff;
      font-size: 12px;
      display: none;
    }
    .check-input:checked + .custom-check::after { display: block; }

    /* Range Slider */
    .range-wrapper { margin-top: 10px; }
    .range-header { display: flex; justify-content: space-between; color: var(--text-muted); font-size: 0.9rem; margin-bottom: 5px; }
    
    input[type=range] {
      -webkit-appearance: none;
      width: 100%;
      background: transparent;
    }
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: var(--primary-red);
      cursor: pointer;
      margin-top: -6px;
      box-shadow: 0 0 10px rgba(255, 42, 42, 0.8);
    }
    input[type=range]::-webkit-slider-runnable-track {
      width: 100%;
      height: 4px;
      cursor: pointer;
      background: #333;
      border-radius: 2px;
    }

    /* Buttons */
    .action-btn {
      width: 100%;
      padding: 15px;
      background: linear-gradient(135deg, #990000, #ff2a2a);
      border: none;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 25px;
      transition: all 0.3s;
      font-size: 1rem;
    }
    .action-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 20px rgba(255, 42, 42, 0.4);
    }
    
    .copy-btn {
      background: #222;
      border: 1px solid #444;
      margin-top: 10px;
    }
    .copy-btn:hover { background: #333; border-color: #fff; box-shadow: none; }

    /* Result Box */
    .result-box {
      margin-top: 25px;
      animation: fadeIn 0.3s ease;
    }
    .result-display {
      background: #000;
      border: 1px solid var(--primary-red);
      color: var(--primary-red);
      font-family: var(--font-tech);
      padding: 20px;
      border-radius: 4px;
      font-size: 1.2rem;
      text-align: center;
      word-break: break-all;
      letter-spacing: 1px;
      box-shadow: inset 0 0 20px rgba(255, 42, 42, 0.1);
    }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

    /* Mobile */
    @media (max-width: 600px) {
      .cyber-card { padding: 20px; }
      .page-title { font-size: 1.5rem; }
      .controls-grid { grid-template-columns: 1fr 1fr; }
    }
  `}),u.jsxs("h1",{className:"page-title",children:["🔐 Security ",u.jsx("span",{children:"Mainframe"})]}),u.jsx("p",{className:"page-desc",children:"Secure your digital footprint. Analyze your current credentials for vulnerabilities or generate military-grade encryption keys instantly to protect against brute-force attacks."}),u.jsxs("div",{className:"tool-container",children:[u.jsxs("div",{className:"cyber-card",children:[u.jsx("h2",{className:"card-header",children:"🛡️ Password Diagnostic"}),u.jsx("input",{className:"cyber-input",type:"password",placeholder:"INPUT CREDENTIALS...",value:l,onChange:D=>o(D.target.value)}),u.jsxs("div",{className:"strength-box",children:[u.jsxs("div",{className:"strength-header",children:[u.jsx("span",{style:{color:"#888"},children:"INTEGRITY LEVEL:"}),u.jsxs("span",{style:{color:Y(R.color)},children:[R.level," (",R.score,"%)"]})]}),u.jsx("div",{className:"progress-track",children:u.jsx("div",{className:"progress-fill",style:{width:`${R.score}%`,backgroundColor:Y(R.color)}})}),R.tips.length>0&&u.jsx("ul",{className:"tips-list",children:R.tips.map((D,J)=>u.jsx("li",{className:"tip-item",children:D},J))})]})]}),u.jsxs("div",{className:"cyber-card",children:[u.jsx("h2",{className:"card-header",children:"⚡ Key Generator"}),u.jsxs("div",{className:"range-wrapper",children:[u.jsxs("div",{className:"range-header",children:[u.jsx("span",{children:"LENGTH"}),u.jsxs("span",{style:{color:"#fff",fontWeight:"bold"},children:[f," CHARS"]})]}),u.jsx("input",{type:"range",min:"6",max:"32",value:f,onChange:D=>p(Number(D.target.value))})]}),u.jsxs("div",{className:"controls-grid",children:[u.jsxs("label",{className:"check-label",children:[u.jsx("input",{type:"checkbox",className:"check-input",checked:m,onChange:()=>y(!m)}),u.jsx("span",{className:"custom-check"}),"Uppercase"]}),u.jsxs("label",{className:"check-label",children:[u.jsx("input",{type:"checkbox",className:"check-input",checked:b,onChange:()=>g(!b)}),u.jsx("span",{className:"custom-check"}),"Lowercase"]}),u.jsxs("label",{className:"check-label",children:[u.jsx("input",{type:"checkbox",className:"check-input",checked:S,onChange:()=>v(!S)}),u.jsx("span",{className:"custom-check"}),"Numbers"]}),u.jsxs("label",{className:"check-label",children:[u.jsx("input",{type:"checkbox",className:"check-input",checked:B,onChange:()=>Z(!B)}),u.jsx("span",{className:"custom-check"}),"Symbols"]})]}),u.jsx("button",{onClick:w,className:"action-btn",children:"Initiate Generation"}),s&&u.jsxs("div",{className:"result-box",children:[u.jsx("div",{className:"result-display",children:s}),u.jsx("button",{onClick:()=>A(s),className:"action-btn copy-btn",children:"📋 Copy to Clipboard"})]})]})]})]})}const e1=l=>Mt.get(`/phishing/questions/${l}`),t1=l=>Mt.post("/phishing/submit",l),Ec=l=>Mt.post("/phishing/save-progress",l);function a1(){const[l,o]=j.useState("beginner"),[s,c]=j.useState([]),[f,p]=j.useState(0),[m,y]=j.useState(null),[b,g]=j.useState(null),[S,v]=j.useState(!0),[B,Z]=j.useState(null),[R,w]=j.useState({}),A=async W=>{v(!0),g(null),y(null);try{const ie=await tg();if(!ie.data?.user){alert("⚠️ Please login to continue"),v(!1);return}const _=ie.data.user.phishingProgress,$=_?.[W]?.currentIndex??0,P=_?.[W]?.attemptMap??{};Z(_);const H=(await e1(W)).data||[];c(H);const x={};H.forEach(k=>{x[String(k._id)]="unattempted"});const z={...x,...P};w(z),$>=0&&$<H.length?p($):p(0)}catch(ie){console.log(ie),alert(ie?.response?.data?.message||"Failed to load simulator")}finally{v(!1)}};j.useEffect(()=>{A(l)},[l]);const Y=s[f],V=W=>B?W==="beginner"?!0:W==="medium"?B.beginner.completed:W==="pro"?B.medium.completed:!1:!1,D=W=>{if(W===0)return!0;for(let ie=0;ie<W;ie++){const _=String(s[ie]?._id);if(_&&(!R[_]||R[_]==="unattempted"))return!1}return!0},J=async W=>{if(!D(W)){alert("❌ Complete previous questions to unlock this one!");return}p(W),y(null),g(null);try{await Ec({level:l,currentIndex:W})}catch(ie){console.log("Save progress failed:",ie)}},I=async W=>{if(Y&&!m){y(W);try{const ie=await t1({questionId:Y._id,selectedAnswer:W,currentIndex:f});g({isCorrect:ie.data.isCorrect,explanation:ie.data.explanation}),ie.data.attemptMap?w(_=>({..._,...ie.data.attemptMap})):w(_=>({..._,[String(Y._id)]:ie.data.isCorrect?"correct":"wrong"})),Z(ie.data.progress)}catch(ie){console.log(ie),alert(ie?.response?.data?.message||"Submit failed")}}},se=async()=>{if(Y&&!(!R[String(Y._id)]||R[String(Y._id)]==="unattempted")&&(y(null),g(null),f<s.length-1)){const W=f+1;if(!D(W)){alert("❌ Complete previous questions first!");return}p(W);try{await Ec({level:l,currentIndex:W})}catch(ie){console.log("Save progress failed:",ie)}}},F=async()=>{if(y(null),g(null),f>0){const W=f-1;p(W);try{await Ec({level:l,currentIndex:W})}catch(ie){console.log("Save progress failed:",ie)}}},he=()=>{y(null),g(null),Y?._id&&w(W=>({...W,[String(Y._id)]:"unattempted"}))},ge=()=>Y?Y.format==="binary"?u.jsxs("div",{className:"options-grid",children:[u.jsxs("button",{className:"option-btn safe",onClick:()=>I("safe"),children:[u.jsx("span",{className:"icon",children:"🛡️"})," Safe"]}),u.jsxs("button",{className:"option-btn phishing",onClick:()=>I("phishing"),children:[u.jsx("span",{className:"icon",children:"🎣"})," Phishing"]})]}):u.jsx("div",{className:"options-list",children:Y.options?.map((W,ie)=>u.jsx("button",{onClick:()=>I(W),className:"option-btn text-option",children:W},ie))}):null,qe=()=>{if(!Y?.scenario)return null;const W=Y.scenario;return u.jsxs("div",{className:"scenario-card",children:[u.jsxs("div",{className:"card-header",children:[u.jsx("div",{className:"dot red"}),u.jsx("div",{className:"dot yellow"}),u.jsx("div",{className:"dot green"}),u.jsx("span",{className:"header-title",children:"Incoming Message"})]}),u.jsxs("div",{className:"card-body",children:[Y.category&&u.jsxs("div",{className:"meta-row",children:[u.jsx("span",{className:"meta-label",children:"Type:"})," ",u.jsx("span",{className:"meta-value tag",children:Y.category.toUpperCase()})]}),W.senderName&&u.jsxs("div",{className:"meta-row",children:[u.jsx("span",{className:"meta-label",children:"From:"})," ",u.jsx("span",{className:"meta-value",children:W.senderName})]}),W.senderEmail&&u.jsxs("div",{className:"meta-row",children:[u.jsx("span",{className:"meta-label",children:"Email:"})," ",u.jsx("span",{className:"meta-value email-text",children:W.senderEmail})]}),W.subject&&u.jsxs("div",{className:"meta-row",children:[u.jsx("span",{className:"meta-label",children:"Subject:"})," ",u.jsx("span",{className:"meta-value",children:W.subject})]}),u.jsx("hr",{className:"divider"}),W.message&&u.jsx("div",{className:"message-body",children:W.message}),W.urlPreview&&u.jsxs("div",{className:"url-preview",children:[u.jsx("span",{className:"link-icon",children:"🔗"})," ",W.urlPreview]})]})]})},Ye=()=>u.jsxs("div",{className:"navigator-panel",children:[u.jsx("h3",{className:"nav-title",children:"Mission Log"}),u.jsx("div",{className:"nav-grid",children:s.map((W,ie)=>{const _=R[String(W._id)]||"unattempted",$=D(ie);let P="nav-item unattempted";return _==="correct"&&(P="nav-item correct"),_==="wrong"&&(P="nav-item wrong"),ie===f&&(P+=" active"),$||(P+=" locked"),u.jsx("button",{onClick:()=>J(ie),disabled:!$,className:P,children:ie+1},W._id)})}),u.jsxs("div",{className:"nav-legend",children:[u.jsxs("div",{className:"legend-item",children:[u.jsx("span",{className:"dot gray"})," Pending"]}),u.jsxs("div",{className:"legend-item",children:[u.jsx("span",{className:"dot green"})," Secure"]}),u.jsxs("div",{className:"legend-item",children:[u.jsx("span",{className:"dot red"})," Breached"]})]})]}),De=`
    /* Reset & Base */
    :root {
      --bg-dark: #0a0a0a;
      --card-bg: #161616;
      --card-border: #333333;
      --text-main: #e0e0e0;
      --text-muted: #888888;
      --primary-red: #ff2a2a;
      --accent-red: #990000;
      --success-green: #00e676;
      --font-stack: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    .phishing-app {
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: var(--font-stack);
      min-height: 100vh;
      padding: 20px;
      box-sizing: border-box;
    }

    .app-title {
      font-size: 2rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #fff;
      margin-bottom: 20px;
      border-bottom: 2px solid var(--primary-red);
      display: inline-block;
      padding-bottom: 5px;
    }
    
    .app-title span { color: var(--primary-red); }

    /* Level Tabs */
    .level-tabs {
      display: flex;
      gap: 10px;
      margin-bottom: 30px;
      flex-wrap: wrap;
    }

    .level-btn {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      color: var(--text-muted);
      padding: 10px 20px;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 1px;
      transition: all 0.3s ease;
      clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    }

    .level-btn:hover { border-color: var(--primary-red); color: #fff; }
    .level-btn.active { background: var(--primary-red); color: #000; border-color: var(--primary-red); box-shadow: 0 0 15px rgba(255, 42, 42, 0.4); }
    .level-btn.locked { opacity: 0.3; cursor: not-allowed; border-color: #222; }

    /* Main Layout */
    .main-layout {
      display: flex;
      gap: 25px;
      align-items: flex-start;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .main-layout { flex-direction: column; }
      .navigator-panel { width: 100% !important; margin-bottom: 20px; }
      .nav-grid { justify-content: center; }
    }

    /* Navigator */
    .navigator-panel {
      width: 260px;
      flex-shrink: 0;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      padding: 20px;
      border-radius: 8px;
    }

    .nav-title { margin: 0 0 15px 0; font-size: 0.9rem; text-transform: uppercase; color: var(--text-muted); }

    .nav-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 8px;
      margin-bottom: 15px;
    }

    .nav-item {
      aspect-ratio: 1;
      border: none;
      background: #222;
      color: #666;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s;
    }

    .nav-item.active { border: 2px solid #fff; color: #fff; }
    .nav-item.correct { background: rgba(0, 230, 118, 0.2); color: var(--success-green); border: 1px solid var(--success-green); }
    .nav-item.wrong { background: rgba(255, 42, 42, 0.2); color: var(--primary-red); border: 1px solid var(--primary-red); }
    .nav-item.locked { opacity: 0.3; cursor: not-allowed; }
    .nav-item:hover:not(:disabled) { transform: translateY(-2px); }

    .nav-legend { font-size: 0.8rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 5px; }
    .legend-item { display: flex; align-items: center; gap: 8px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
    .dot.gray { background: #444; }
    .dot.green { background: var(--success-green); }
    .dot.red { background: var(--primary-red); }

    /* Content Area */
    .content-area { flex: 1; width: 100%; }

    /* Scenario Card */
    .scenario-card {
      background: #1e1e1e;
      border-left: 4px solid var(--primary-red);
      border-radius: 6px;
      margin-bottom: 25px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.5);
      overflow: hidden;
    }

    .card-header {
      background: #252525;
      padding: 8px 15px;
      display: flex;
      gap: 6px;
      align-items: center;
    }
    .header-title { margin-left: auto; font-size: 0.75rem; color: #555; text-transform: uppercase; letter-spacing: 1px; }
    .card-header .dot { width: 10px; height: 10px; }
    .card-header .dot.red { background: #ff5f56; }
    .card-header .dot.yellow { background: #ffbd2e; }
    .card-header .dot.green { background: #27c93f; }

    .card-body { padding: 20px; font-family: 'Courier New', monospace; font-size: 0.95rem; }
    .meta-row { margin-bottom: 8px; display: flex; }
    .meta-label { width: 70px; color: var(--text-muted); font-weight: bold; }
    .meta-value { color: #fff; flex: 1; word-break: break-all; }
    .meta-value.tag { background: #333; padding: 2px 6px; border-radius: 3px; font-size: 0.8rem; }
    .meta-value.email-text { color: #4fc3f7; }
    .divider { border: 0; border-top: 1px dashed #444; margin: 15px 0; }
    .message-body { line-height: 1.5; color: #ddd; white-space: pre-wrap; }
    .url-preview { margin-top: 15px; background: #2a1b1b; color: #ff8a80; padding: 10px; border-radius: 4px; font-size: 0.9rem; border: 1px solid #502020; }

    /* Question Box */
    .question-box {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .q-number { font-size: 0.85rem; color: var(--primary-red); text-transform: uppercase; font-weight: bold; letter-spacing: 1px; display: block; margin-bottom: 8px; }
    .q-text { font-size: 1.1rem; line-height: 1.4; margin: 0; }

    /* Options */
    .options-grid { display: flex; gap: 15px; margin-top: 20px; }
    .options-list { display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }

    .option-btn {
      background: #222;
      border: 1px solid #444;
      color: #fff;
      padding: 15px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      text-align: left;
      transition: all 0.2s;
    }
    .option-btn:hover { background: #333; border-color: #666; transform: translateX(5px); }
    .option-btn.safe:hover { border-color: var(--success-green); box-shadow: 0 0 10px rgba(0,230,118,0.2); transform: translateY(-3px); }
    .option-btn.phishing:hover { border-color: var(--primary-red); box-shadow: 0 0 10px rgba(255,42,42,0.2); transform: translateY(-3px); }
    
    .option-btn .icon { margin-right: 10px; font-size: 1.2rem; }
    .options-grid .option-btn { flex: 1; text-align: center; font-weight: bold; }

    /* Feedback */
    .feedback-box {
      margin-top: 25px;
      padding: 20px;
      border-radius: 8px;
      animation: fadeIn 0.3s ease;
    }
    .feedback-box.correct { background: rgba(0, 230, 118, 0.1); border: 1px solid var(--success-green); }
    .feedback-box.wrong { background: rgba(255, 42, 42, 0.1); border: 1px solid var(--primary-red); }
    .feedback-title { margin: 0 0 10px 0; font-size: 1.2rem; }
    .feedback-desc { margin: 0; line-height: 1.5; color: #ccc; }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

    /* Controls */
    .controls { display: flex; gap: 10px; margin-top: 30px; justify-content: flex-end; }
    .ctrl-btn {
      padding: 12px 24px;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: all 0.2s;
    }
    .ctrl-btn:disabled { opacity: 0.3; cursor: not-allowed; }
    .ctrl-btn.secondary { background: transparent; border: 1px solid #444; color: #aaa; }
    .ctrl-btn.secondary:hover:not(:disabled) { border-color: #fff; color: #fff; }
    
    .ctrl-btn.retry { background: #333; color: var(--primary-red); border: 1px solid var(--primary-red); }
    .ctrl-btn.retry:hover { background: var(--primary-red); color: #000; }

    .ctrl-btn.primary { background: #fff; color: #000; }
    .ctrl-btn.primary:hover:not(:disabled) { background: var(--primary-red); color: #fff; box-shadow: 0 0 15px rgba(255, 42, 42, 0.5); }

    /* Loader */
    .loader-container { height: 100vh; display: flex; justify-content: center; align-items: center; background: var(--bg-dark); color: var(--primary-red); font-family: monospace; font-size: 1.5rem; }
  `;if(S)return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:De}),u.jsx("div",{className:"loader-container",children:"INITIALIZING SIMULATION..."})]});const ze=Y?R[String(Y._id)]:null;return Y?u.jsxs("div",{className:"phishing-app",children:[u.jsx("style",{children:De}),u.jsx("div",{className:"header",children:u.jsxs("h1",{className:"app-title",children:["Phishing ",u.jsx("span",{children:"Simulator"})]})}),u.jsxs("div",{className:"level-tabs",children:[u.jsx("button",{className:`level-btn ${l==="beginner"?"active":""}`,onClick:()=>o("beginner"),children:"Beginner"}),u.jsx("button",{className:`level-btn ${l==="medium"?"active":""} ${V("medium")?"":"locked"}`,onClick:()=>{if(!V("medium"))return alert("⚠️ Clearance Level Denied. Complete Beginner first.");o("medium")},children:"Medium"}),u.jsx("button",{className:`level-btn ${l==="pro"?"active":""} ${V("pro")?"":"locked"}`,onClick:()=>{if(!V("pro"))return alert("⚠️ Clearance Level Denied. Complete Medium first.");o("pro")},children:"Pro"})]}),u.jsxs("div",{className:"main-layout",children:[Ye(),u.jsxs("div",{className:"content-area",children:[qe(),u.jsxs("div",{className:"question-box",children:[u.jsxs("span",{className:"q-number",children:["Target ",f+1," / ",s.length]}),u.jsx("h3",{className:"q-text",children:Y.question})]}),ge(),b&&u.jsxs("div",{className:`feedback-box ${b.isCorrect?"correct":"wrong"}`,children:[u.jsx("h3",{className:"feedback-title",children:b.isCorrect?"✅ Threat Averted":"❌ System Compromised"}),u.jsxs("p",{className:"feedback-desc",children:[u.jsx("b",{children:"Analysis:"})," ",b.explanation]})]}),u.jsxs("div",{className:"controls",children:[u.jsx("button",{className:"ctrl-btn secondary",onClick:F,disabled:f===0,children:"← Previous"}),ze==="wrong"&&u.jsx("button",{className:"ctrl-btn retry",onClick:he,children:"↻ Retry"}),u.jsx("button",{className:"ctrl-btn primary",onClick:se,disabled:!ze||ze==="unattempted",children:"Next Mission →"})]})]})]})]}):u.jsxs("div",{className:"phishing-app",children:[u.jsx("style",{children:De}),u.jsxs("div",{style:{padding:"40px",textAlign:"center",border:"1px dashed #444",borderRadius:"10px"},children:[u.jsx("h2",{children:"🚫 No Data Found"}),u.jsx("p",{style:{color:"#888"},children:"No simulation data available for this security level."})]})]})}const n1=l=>Mt.post("/scams/report",l),l1=l=>Mt.get(`/scams/search?q=${l}`),r1=l=>Mt.post("/scams/analyze-ai",{text:l});function i1(){const[l,o]=j.useState(""),[s,c]=j.useState([]),[f,p]=j.useState(!1),m=async b=>{if(b.preventDefault(),!l.trim()){alert("Enter something to search");return}p(!0);try{const g=await l1(l);c(g.data)}catch(g){console.log(g),alert("Search failed!")}finally{p(!1)}};return u.jsxs("div",{className:"search-page",style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url(${_t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[u.jsx("style",{children:`
    :root {
      --primary-red: #ff2a2a;
      --bg-dark: #050505;
      --card-bg: rgba(20, 20, 20, 0.95);
      --border-color: #333;
      --text-main: #e0e0e0;
      --text-muted: #888;
      --font-tech: 'Courier New', monospace;
      --font-main: 'Inter', sans-serif;
    }

    .search-page {
      min-height: 100vh;
      color: var(--text-main);
      font-family: var(--font-main);
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .page-title {
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 10px;
      text-align: center;
      text-shadow: 0 0 15px rgba(255, 42, 42, 0.5);
    }
    .page-title span { color: var(--primary-red); }

    .page-desc {
      text-align: center;
      color: var(--text-muted);
      font-family: var(--font-tech);
      max-width: 600px;
      margin-bottom: 30px;
      font-size: 0.9rem;
      line-height: 1.6;
    }

    /* Search Bar Container */
    .search-container {
      width: 100%;
      max-width: 700px;
      margin-bottom: 40px;
    }

    .search-form {
      display: flex;
      gap: 10px;
      background: var(--card-bg);
      padding: 10px;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    .search-input {
      flex: 1;
      background: #0a0a0a;
      border: 1px solid #333;
      color: #fff;
      padding: 12px 15px;
      font-family: var(--font-tech);
      font-size: 1rem;
      border-radius: 4px;
      transition: all 0.3s;
    }
    .search-input:focus {
      outline: none;
      border-color: var(--primary-red);
      box-shadow: 0 0 10px rgba(255, 42, 42, 0.2);
    }

    .search-btn {
      background: linear-gradient(135deg, #990000, #ff2a2a);
      color: #fff;
      border: none;
      padding: 0 25px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s;
    }
    .search-btn:hover {
      box-shadow: 0 0 15px rgba(255, 42, 42, 0.4);
      transform: translateY(-1px);
    }

    /* Results Grid */
    .results-grid {
      width: 100%;
      max-width: 800px;
      display: grid;
      gap: 20px;
    }

    .result-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-left: 3px solid var(--primary-red);
      padding: 20px;
      border-radius: 6px;
      transition: transform 0.2s;
      animation: fadeIn 0.3s ease;
    }
    .result-card:hover {
      border-color: #555;
      transform: translateX(5px);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 10px;
    }

    .scam-title {
      margin: 0;
      font-size: 1.2rem;
      color: #fff;
    }

    .risk-badge {
      background: rgba(255, 42, 42, 0.15);
      color: var(--primary-red);
      border: 1px solid var(--primary-red);
      padding: 4px 8px;
      font-size: 0.8rem;
      font-family: var(--font-tech);
      border-radius: 4px;
      font-weight: bold;
      white-space: nowrap;
    }
       .footer {
          margin-top: auto;
          text-align: center;
          padding: 26px 16px;
          background: #050505;
          border-top: 1px solid rgba(255,255,255,0.2);
          font-weight: 600;
        }

        .footer span {
          color: #ff3b3b;
        }

    .scam-desc {
      color: #bbb;
      font-size: 0.95rem;
      margin-bottom: 15px;
      line-height: 1.5;
    }

    .meta-row {
      display: flex;
      gap: 15px;
      font-size: 0.85rem;
      font-family: var(--font-tech);
      color: var(--text-muted);
      border-top: 1px dashed #333;
      padding-top: 10px;
    }
    .meta-item b { color: #e0e0e0; }

    /* Loading / Empty States */
    .status-msg {
      font-family: var(--font-tech);
      color: #666;
      margin-top: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

    /* Mobile */
    @media (max-width: 600px) {
      .search-form { flex-direction: column; }
      .search-btn { padding: 12px; }
      .card-header { flex-direction: column; gap: 8px; }
      .meta-row { flex-direction: column; gap: 5px; }
    }
  `}),u.jsxs("h1",{className:"page-title",children:["🔍 Global Threat ",u.jsx("span",{children:"Search"})]}),u.jsx("p",{className:"page-desc",children:"Access the verified scam database. Search by keywords, phone numbers, platforms (e.g., 'WhatsApp', 'OTP'), or specific fraud techniques to retrieve detailed incident reports and risk assessments."}),u.jsx("div",{className:"search-container",children:u.jsxs("form",{onSubmit:m,className:"search-form",children:[u.jsx("input",{className:"search-input",value:l,onChange:b=>o(b.target.value),placeholder:"Enter keyword (e.g., 'Bank', '+9198...', 'Job Offer')"}),u.jsx("button",{className:"search-btn",type:"submit",children:"Execute Search"})]})}),f&&u.jsx("p",{className:"status-msg",children:"Scanning Database..."}),u.jsx("div",{className:"results-grid",children:s.length===0&&!f?u.jsx("div",{style:{textAlign:"center",color:"#555",fontStyle:"italic"},children:"No records found. Try different keywords."}):s.map(b=>u.jsxs("div",{className:"result-card",children:[u.jsxs("div",{className:"card-header",children:[u.jsx("h3",{className:"scam-title",children:b.title}),u.jsxs("div",{className:"risk-badge",children:["RISK SCORE: ",b.susceptibilityScore,"/100"]})]}),u.jsx("p",{className:"scam-desc",children:b.description}),u.jsxs("div",{className:"meta-row",children:[u.jsxs("span",{className:"meta-item",children:[u.jsx("b",{children:"TYPE:"})," ",b.scamType.toUpperCase()]}),u.jsxs("span",{className:"meta-item",children:[u.jsx("b",{children:"PLATFORM:"})," ",b.platform.toUpperCase()]})]})]},b._id))}),u.jsxs("footer",{className:"footer",children:["👨‍💻 Developed by ",u.jsx("span",{children:"Harish & Tarun (Benignants)"})]})]})}function o1(){const[l,o]=j.useState({title:"",description:"",scamType:"other",platform:"other",scammerContact:"",lossAmount:0}),[s,c]=j.useState(null),[f,p]=j.useState(!1),m=g=>{o({...l,[g.target.name]:g.target.value})},y=async g=>{g.preventDefault(),p(!0),c(null);try{const S=await n1(l);c(S.data)}catch(S){alert("Something went wrong!"),console.log(S)}finally{p(!1)}};return u.jsxs("div",{className:"report-page",style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url(${_t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[u.jsx("style",{children:`
    :root {
      --primary-red: #ff2a2a;
      --bg-dark: #050505;
      --card-bg: rgba(20, 20, 20, 0.95);
      --border-color: #333;
      --text-main: #e0e0e0;
      --text-muted: #888;
      --font-tech: 'Courier New', monospace;
      --font-main: 'Inter', sans-serif;
    }

    .report-page {
      min-height: 100vh;
      color: var(--text-main);
      font-family: var(--font-main);
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .page-title {
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 10px;
      text-align: center;
      text-shadow: 0 0 15px rgba(255, 42, 42, 0.5);
    }
    .page-title span { color: var(--primary-red); }

    .page-desc {
      text-align: center;
      color: var(--text-muted);
      font-family: var(--font-tech);
      max-width: 600px;
      margin-bottom: 40px;
      font-size: 0.9rem;
    }

    /* Main Card */
    .report-card {
      background: var(--card-bg);
      width: 100%;
      max-width: 650px;
      padding: 30px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      border-top: 4px solid var(--primary-red);
      box-shadow: 0 15px 50px rgba(0,0,0,0.8);
      backdrop-filter: blur(10px);
    }

    /* Form Layout */
    .form-group {
      margin-bottom: 15px;
    }

    .input-label {
      display: block;
      color: #aaa;
      font-family: var(--font-tech);
      font-size: 0.8rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 8px;
      letter-spacing: 1px;
    }

    .grid-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    /* Inputs */
    .cyber-input, .cyber-select, .cyber-textarea {
      width: 100%;
      padding: 12px;
      background: #0a0a0a;
      border: 1px solid #333;
      color: #fff;
      border-radius: 4px;
      font-family: var(--font-tech);
      box-sizing: border-box;
      transition: all 0.3s;
      font-size: 0.95rem;
    }
    .cyber-input:focus, .cyber-select:focus, .cyber-textarea:focus {
      border-color: var(--primary-red);
      outline: none;
      box-shadow: 0 0 10px rgba(255, 42, 42, 0.2);
    }
    .cyber-textarea {
      height: 120px;
      resize: vertical;
    }
    
    /* Submit Button */
    .submit-btn {
      width: 100%;
      padding: 15px;
      background: linear-gradient(135deg, #990000, #ff2a2a);
      border: none;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
      transition: all 0.3s;
      font-size: 1rem;
    }
    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 5px 20px rgba(255, 42, 42, 0.4);
    }
    .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; background: #444; }

    /* Results Section */
    .result-container {
      margin-top: 30px;
      border-top: 1px dashed #444;
      padding-top: 25px;
      animation: fadeIn 0.5s ease;
    }
 .footer {
          margin-top: auto;
          text-align: center;
          padding: 26px 16px;
          background: #050505;
          border-top: 1px solid rgba(255,255,255,0.2);
          font-weight: 600;
        }

        .footer span {
          color: #ff3b3b;
        }
    .result-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      background: #111;
      padding: 15px;
      border-radius: 4px;
      border-left: 3px solid #fff;
    }
    .result-header h2 { margin: 0; font-size: 1.2rem; color: #fff; }
    
    .score-badge {
      font-family: var(--font-tech);
      font-size: 1.1rem;
      color: var(--primary-red);
      font-weight: bold;
    }

    /* High Risk Warning */
    .warning-box {
      background: rgba(255, 42, 42, 0.1);
      border: 1px solid var(--primary-red);
      color: var(--primary-red);
      padding: 15px;
      border-radius: 4px;
      margin-bottom: 20px;
      text-align: center;
      font-weight: bold;
      text-transform: uppercase;
      animation: pulse 2s infinite;
    }

    /* Match Box */
    .match-box {
      border: 1px solid #444;
      background: #0d0d0d;
      padding: 20px;
      border-radius: 6px;
    }
    .match-title {
      color: #00e676;
      margin: 0 0 15px 0;
      border-bottom: 1px solid #333;
      padding-bottom: 10px;
      font-size: 1rem;
      text-transform: uppercase;
    }

    .match-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .match-item {
      background: #161616;
      border: 1px solid #333;
      padding: 15px;
      border-radius: 4px;
      font-family: var(--font-tech);
      font-size: 0.85rem;
    }
    .match-item p { margin: 4px 0; color: #bbb; }
    .match-item b { color: #fff; }
    .tag {
      background: #333;
      color: #aaa;
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 0.75rem;
      margin-right: 5px;
    }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes pulse { 0% { box-shadow: 0 0 0 rgba(255, 42, 42, 0); } 50% { box-shadow: 0 0 15px rgba(255, 42, 42, 0.3); } 100% { box-shadow: 0 0 0 rgba(255, 42, 42, 0); } }

    /* Mobile */
    @media (max-width: 600px) {
      .grid-row { grid-template-columns: 1fr; }
      .report-card { padding: 20px; }
      .page-title { font-size: 1.5rem; }
    }
  `}),u.jsxs("h1",{className:"page-title",children:["🚨 Incident ",u.jsx("span",{children:"Reporting"})]}),u.jsx("p",{className:"page-desc",children:"Reporting a scam helps protect not just you, but thousands of others. When you submit a report, ScamShield analyzes the scam using verified databases and intelligent detection to identify risk patterns, flag known scam contacts, and generate actionable safety guidance. Your report strengthens our community-powered defense system, helping stop scams early and prevent future victims."}),u.jsxs("div",{className:"report-card",children:[u.jsxs("form",{onSubmit:y,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"input-label",children:"Incident Title"}),u.jsx("input",{name:"title",placeholder:"e.g. Bank KYC Fraud",value:l.title,onChange:m,required:!0,className:"cyber-input"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"input-label",children:"Description of Event"}),u.jsx("textarea",{name:"description",placeholder:"Describe what happened...",value:l.description,onChange:m,required:!0,className:"cyber-textarea"})]}),u.jsxs("div",{className:"grid-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"input-label",children:"Scam Category"}),u.jsxs("select",{name:"scamType",value:l.scamType,onChange:m,className:"cyber-select",children:[u.jsx("option",{value:"phishing",children:"Phishing"}),u.jsx("option",{value:"upi",children:"UPI Fraud"}),u.jsx("option",{value:"job",children:"Job Offer"}),u.jsx("option",{value:"investment",children:"Investment/Crypto"}),u.jsx("option",{value:"otp",children:"OTP Theft"}),u.jsx("option",{value:"crypto",children:"Crypto Scam"}),u.jsx("option",{value:"other",children:"Other"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"input-label",children:"Platform Used"}),u.jsxs("select",{name:"platform",value:l.platform,onChange:m,className:"cyber-select",children:[u.jsx("option",{value:"whatsapp",children:"WhatsApp"}),u.jsx("option",{value:"instagram",children:"Instagram"}),u.jsx("option",{value:"sms",children:"SMS"}),u.jsx("option",{value:"email",children:"Email"}),u.jsx("option",{value:"call",children:"Voice Call"}),u.jsx("option",{value:"other",children:"Other Platform"})]})]})]}),u.jsxs("div",{className:"grid-row",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"input-label",children:"Suspect Contact (ID/Phone)"}),u.jsx("input",{name:"scammerContact",placeholder:"+91 XXXXX XXXXX",value:l.scammerContact,onChange:m,className:"cyber-input"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{className:"input-label",children:"Loss Amount (₹)"}),u.jsx("input",{name:"lossAmount",type:"number",placeholder:"0",value:l.lossAmount,onChange:m,className:"cyber-input"})]})]}),u.jsx("button",{type:"submit",disabled:f,className:"submit-btn",children:f?"PROCESSING DATA...":"SUBMIT REPORT"})]}),s?.report&&u.jsxs("div",{className:"result-container",children:[u.jsxs("div",{className:"result-header",children:[u.jsx("h2",{children:"✅ REPORT FILED"}),u.jsxs("div",{className:"score-badge",children:["RISK SCORE: ",s.report.susceptibilityScore,"/100"]})]}),u.jsxs("div",{style:{marginBottom:"15px",color:"#888",textAlign:"right",fontFamily:"monospace"},children:["STATUS: ",u.jsx("span",{style:{color:"#fff",textTransform:"uppercase"},children:s.report.status})]}),s.aiAnalysis&&u.jsxs("div",{className:"ai-analysis-section",style:{marginBottom:"25px",padding:"20px",background:"#0d0d0d",border:"1px solid #333",borderRadius:"6px"},children:[u.jsx("h3",{style:{margin:"0 0 15px 0",color:"#00e676",fontSize:"1rem",textTransform:"uppercase",borderBottom:"1px solid #333",paddingBottom:"10px"},children:"🤖 AI Risk Analysis"}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"15px"},children:[u.jsx("span",{style:{color:"#888",fontFamily:"var(--font-tech)",fontSize:"0.85rem"},children:"AI ASSESSMENT:"}),u.jsxs("span",{style:{padding:"4px 12px",borderRadius:"4px",fontWeight:"bold",fontFamily:"var(--font-tech)",fontSize:"0.85rem",background:s.aiAnalysis.riskLevel==="HIGH"?"rgba(255, 42, 42, 0.2)":s.aiAnalysis.riskLevel==="MEDIUM"?"rgba(255, 165, 0, 0.2)":"rgba(0, 230, 118, 0.2)",color:s.aiAnalysis.riskLevel==="HIGH"?"#ff2a2a":s.aiAnalysis.riskLevel==="MEDIUM"?"#ffa500":"#00e676"},children:[s.aiAnalysis.riskLevel," RISK"]})]}),s.aiAnalysis.detectedTypes&&s.aiAnalysis.detectedTypes.length>0&&u.jsxs("div",{style:{marginBottom:"15px"},children:[u.jsx("p",{style:{color:"#888",fontFamily:"var(--font-tech)",fontSize:"0.8rem",marginBottom:"8px",textTransform:"uppercase"},children:"Detected Scam Type:"}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:s.aiAnalysis.detectedTypes.map((g,S)=>u.jsx("span",{style:{background:"rgba(255, 42, 42, 0.15)",color:"#ff6b6b",padding:"4px 10px",borderRadius:"3px",fontSize:"0.8rem",fontFamily:"var(--font-tech)"},children:g},S))})]}),s.aiAnalysis.redFlags&&s.aiAnalysis.redFlags.length>0&&u.jsxs("div",{children:[u.jsx("p",{style:{color:"#888",fontFamily:"var(--font-tech)",fontSize:"0.8rem",marginBottom:"8px",textTransform:"uppercase"},children:"🚩 Red Flags Detected:"}),u.jsx("ul",{style:{margin:"0",paddingLeft:"20px",color:"#ccc",fontSize:"0.85rem",fontFamily:"var(--font-tech)"},children:s.aiAnalysis.redFlags.map((g,S)=>u.jsx("li",{style:{marginBottom:"6px"},children:g},S))})]}),s.aiAnalysis.analysis&&u.jsxs("div",{style:{marginTop:"15px",paddingTop:"15px",borderTop:"1px solid #333"},children:[u.jsx("p",{style:{color:"#888",fontFamily:"var(--font-tech)",fontSize:"0.8rem",marginBottom:"5px",textTransform:"uppercase"},children:"Analysis Confidence:"}),u.jsxs("p",{style:{color:"#fff",fontFamily:"var(--font-tech)",fontSize:"0.9rem",margin:"0"},children:[s.aiAnalysis.analysis.confidence," (",s.aiAnalysis.analysis.totalIndicators," risk indicators found)"]})]})]}),s.contactMatchPercent>0&&u.jsxs("div",{className:"match-wrapper",children:[s.contactMatchPercent>=70&&s.matchedVerifiedContacts?.length>0&&u.jsx("div",{className:"warning-box",children:"🚨 CRITICAL ALERT: VERIFIED SCAM ENTITY DETECTED"}),u.jsxs("div",{className:"match-box",children:[u.jsxs("h3",{className:"match-title",children:["🔍 DATABASE CROSS-REFERENCE MATCH: ",s.contactMatchPercent,"%"]}),s.matchedVerifiedContacts?.length>0?u.jsxs(u.Fragment,{children:[u.jsx("p",{style:{color:"#aaa",marginBottom:"15px",fontSize:"0.9rem"},children:"Positive identification against known threats:"}),u.jsx("ul",{className:"match-list",children:s.matchedVerifiedContacts.map((g,S)=>u.jsxs("li",{className:"match-item",children:[u.jsxs("p",{children:[u.jsx("b",{children:"TARGET:"})," ",g.value," ",u.jsxs("span",{style:{color:"var(--primary-red)"},children:["(",g.type.toUpperCase(),")"]})]}),u.jsxs("p",{children:[u.jsx("b",{children:"CONFIDENCE:"})," ",g.similarity,"%"]}),u.jsxs("p",{children:[u.jsx("b",{children:"ORIGIN:"})," ",g.source||"UNKNOWN"]}),u.jsxs("p",{children:[u.jsx("b",{children:"INTEL:"})," ",g.notes||"No additional notes"]}),u.jsx("p",{style:{marginTop:"8px"},children:g.tags?.length>0?g.tags.map((v,B)=>u.jsx("span",{className:"tag",children:v},B)):"N/A"})]},S))})]}):u.jsx("p",{style:{color:"#888",fontStyle:"italic"},children:"ℹ️ Partial similarity detected. No definitive 70%+ match in verified database."})]})]})]})]}),u.jsxs("footer",{className:"footer",children:["👨‍💻 Developed by ",u.jsx("span",{children:"Harish & Tarun (Benignants)"})]})]})}function s1(){const[l,o]=j.useState([]),[s,c]=j.useState(""),[f,p]=j.useState(!0),[m,y]=j.useState(""),b=async()=>{try{p(!0),y("");const v=await Ee.get("http://localhost:5001/api/blogs");o(v.data||[])}catch(v){console.log(v),y(v?.response?.data?.message||"Failed to load blogs.")}finally{p(!1)}};j.useEffect(()=>{b()},[]);const g=l.filter(v=>s.trim()?v.title?.toLowerCase().includes(s.toLowerCase())||v.subtitle?.toLowerCase().includes(s.toLowerCase())||v.body?.toLowerCase().includes(s.toLowerCase()):!0);return u.jsxs("div",{className:"blog-page",style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.92)), url(${_t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[u.jsx("style",{children:`
    :root {
      --primary-red: #ff2a2a;
      --bg-dark: #050505;
      --card-bg: #111;
      --border-color: #333;
      --text-main: #e0e0e0;
      --text-muted: #888;
      --font-tech: 'Courier New', monospace;
      --font-main: 'Inter', sans-serif;
    }

    .blog-page {
      min-height: 100vh;
      color: var(--text-main);
      font-family: var(--font-main);
      padding: 30px 20px;
    }

    .page-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .page-title {
      font-size: 2.5rem;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 10px;
      text-shadow: 0 0 15px rgba(255, 42, 42, 0.6);
    }
    .page-title span { color: var(--primary-red); }

    .page-subtitle {
      color: var(--text-muted);
      font-family: var(--font-tech);
      font-size: 0.9rem;
    }

    /* Controls Bar */
    .controls-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto 30px auto;
      gap: 15px;
      flex-wrap: wrap;
    }

    .search-input {
      background: #0a0a0a;
      border: 1px solid #333;
      color: #fff;
      padding: 12px 15px;
      border-radius: 4px;
      width: 100%;
      max-width: 400px;
      font-family: var(--font-tech);
      transition: all 0.3s;
    }
    .search-input:focus {
      border-color: var(--primary-red);
      outline: none;
      box-shadow: 0 0 10px rgba(255, 42, 42, 0.2);
    }

    .write-btn {
      background: linear-gradient(135deg, #990000, #ff2a2a);
      color: white;
      text-decoration: none;
      padding: 12px 24px;
      border-radius: 4px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.9rem;
      transition: transform 0.2s, box-shadow 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .write-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(255, 42, 42, 0.4);
    }

    /* Grid Layout */
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 25px;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Blog Card */
    .blog-card {
      background: rgba(20, 20, 20, 0.95);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.3s ease;
      position: relative;
    }

    .blog-card:hover {
      border-color: #555;
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.8);
    }
    .blog-card:hover .read-more { color: var(--primary-red); }

    .card-img-container {
      height: 180px;
      overflow: hidden;
      background: #000;
      border-bottom: 1px solid #222;
    }
    .card-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }
    .blog-card:hover .card-img { transform: scale(1.05); }

    .card-content {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    /* Author Info */
    .author-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 15px;
    }
    .author-pic {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--primary-red);
    }
    .author-meta h4 { margin: 0; font-size: 0.9rem; color: #fff; }
    .author-meta span { font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-tech); }

    .blog-title {
      font-size: 1.25rem;
      margin: 0 0 5px 0;
      color: #fff;
      line-height: 1.3;
    }
    .blog-subtitle {
      color: var(--primary-red);
      font-size: 0.85rem;
      font-style: italic;
      margin-bottom: 12px;
    }
    .blog-excerpt {
      font-size: 0.9rem;
      color: #aaa;
      line-height: 1.5;
      margin-bottom: 20px;
      flex: 1; /* Pushes button down */
    }

    .read-more {
      align-self: flex-start;
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      font-size: 0.9rem;
      text-transform: uppercase;
      border-bottom: 2px solid var(--primary-red);
      padding-bottom: 2px;
      transition: color 0.2s;
    }

    /* States */
    .state-msg {
      text-align: center;
      padding: 40px;
      font-family: var(--font-tech);
      color: #666;
      border: 1px dashed #333;
      background: rgba(0,0,0,0.5);
      border-radius: 8px;
    }
    .error-msg { color: var(--primary-red); border-color: var(--primary-red); }

    /* Mobile Responsive */
    @media (max-width: 600px) {
      .controls-bar { flex-direction: column-reverse; align-items: stretch; }
      .search-input { max-width: 100%; }
      .write-btn { justify-content: center; }
      .page-title { font-size: 1.8rem; }
    }
  `}),u.jsxs("div",{className:"page-header",children:[u.jsxs("h1",{className:"page-title",children:["Scam ",u.jsx("span",{children:"Intel"})," Feed"]}),u.jsx("p",{className:"page-subtitle",children:"Verified community reports and analysis"})]}),u.jsxs("div",{className:"controls-bar",children:[u.jsx("input",{placeholder:"🔍 Search database...",value:s,onChange:v=>c(v.target.value),className:"search-input"}),u.jsxs(Kt,{to:"/create-blog",className:"write-btn",children:[u.jsx("span",{children:"✍️"})," Submit blog"]})]}),f&&u.jsx("div",{className:"state-msg",children:"LOADING ENCRYPTED DATA..."}),!f&&m&&u.jsxs("div",{className:"state-msg error-msg",children:["⚠️ ERROR: ",m]}),!f&&!m&&u.jsx(u.Fragment,{children:g.length===0?u.jsx("div",{className:"state-msg",children:"NO RECORDS FOUND MATCHING QUERY."}):u.jsx("div",{className:"blog-grid",children:g.map(v=>u.jsxs("div",{className:"blog-card",children:[v.images?.length>0&&v.images[0]&&u.jsx("div",{className:"card-img-container",children:u.jsx("img",{src:v.images[0],alt:"cover",className:"card-img"})}),u.jsxs("div",{className:"card-content",children:[u.jsxs("div",{className:"author-row",children:[u.jsx("img",{src:v.author?.profilePic&&v.author.profilePic!==""?v.author.profilePic:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:"author",className:"author-pic"}),u.jsxs("div",{className:"author-meta",children:[u.jsx("h4",{children:v.author?.name||"Unknown Agent"}),u.jsx("span",{children:v.createdAt?new Date(v.createdAt).toLocaleDateString():"Unknown Date"})]})]}),u.jsx("h2",{className:"blog-title",children:v.title}),v.subtitle&&v.subtitle.trim()!==""&&u.jsx("p",{className:"blog-subtitle",children:v.subtitle}),u.jsx("p",{className:"blog-excerpt",children:v.body?.length>120?v.body.slice(0,120)+"...":v.body}),u.jsx(Kt,{to:`/blogs/${v._id}`,className:"read-more",children:"Read Full blog →"})]})]},v._id))})})]})}function c1(){const{id:l}=vy(),[o,s]=j.useState(null),[c,f]=j.useState(!0),p=async()=>{try{f(!0);const y=await Ee.get(`http://localhost:5001/api/blogs/${l}`);s(y.data)}catch(y){console.log(y),s(null),alert(y?.response?.data?.message||"Failed to load blog")}finally{f(!1)}};j.useEffect(()=>{p()},[l]);const m=`
    :root {
      --primary-red: #ff2a2a;
      --bg-dark: #050505;
      --card-bg: rgba(20, 20, 20, 0.95);
      --border-color: #333;
      --text-main: #e0e0e0;
      --text-muted: #888;
      --font-tech: 'Courier New', monospace;
      --font-main: 'Inter', sans-serif;
    }

    .details-page {
      min-height: 100vh;
      color: var(--text-main);
      font-family: var(--font-main);
      padding: 40px 20px;
    }

    .content-container {
      max-width: 900px;
      margin: 0 auto;
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 40px;
      box-shadow: 0 0 50px rgba(0,0,0,0.8);
      backdrop-filter: blur(10px);
      position: relative;
    }

    /* Back Button */
    .back-btn {
      display: inline-block;
      margin-bottom: 25px;
      color: var(--primary-red);
      text-decoration: none;
      font-family: var(--font-tech);
      font-weight: bold;
      border: 1px solid var(--primary-red);
      padding: 8px 16px;
      border-radius: 4px;
      transition: all 0.3s;
      text-transform: uppercase;
      font-size: 0.8rem;
    }
    .back-btn:hover {
      background: var(--primary-red);
      color: #000;
      box-shadow: 0 0 15px rgba(255, 42, 42, 0.4);
    }

    /* Author Section */
    .author-header {
      display: flex;
      align-items: center;
      gap: 15px;
      padding-bottom: 25px;
      border-bottom: 1px dashed #333;
      margin-bottom: 25px;
    }

    .author-img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--primary-red);
      box-shadow: 0 0 10px rgba(255, 42, 42, 0.2);
    }

    .author-info h3 {
      margin: 0;
      font-size: 1.1rem;
      color: #fff;
    }

    .author-meta {
      margin: 4px 0 0 0;
      font-size: 0.85rem;
      color: var(--text-muted);
      font-family: var(--font-tech);
    }

    /* Typography */
    .article-title {
      font-size: 2.5rem;
      line-height: 1.2;
      margin: 0 0 10px 0;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .article-subtitle {
      font-size: 1.1rem;
      color: var(--primary-red);
      font-style: italic;
      margin: 0 0 30px 0;
      border-left: 3px solid var(--primary-red);
      padding-left: 15px;
    }

    /* Images */
    .image-gallery {
      margin: 30px 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .blog-img {
      width: 100%;
      max-width: 100%;
      border-radius: 4px;
      border: 1px solid #444;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    }

    /* Body Text */
    .article-body {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #ccc;
      white-space: pre-wrap;
      font-family: 'Georgia', serif; /* Or keep sans-serif if preferred */
    }

    /* Loaders */
    .loader-box {
      min-height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: var(--font-tech);
      color: var(--primary-red);
      text-align: center;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .details-page { padding: 20px 10px; }
      .content-container { padding: 25px; }
      .article-title { font-size: 1.8rem; }
      .author-header { flex-direction: column; align-items: flex-start; }
    }
  `;return c?u.jsxs("div",{className:"details-page",style:{background:"#050505"},children:[u.jsx("style",{children:m}),u.jsxs("div",{className:"loader-box",children:[u.jsx("h2",{children:"ACCESSING ARCHIVES..."}),u.jsx("p",{children:"DECRYPTING DATA STREAM"})]})]}):o?u.jsxs("div",{className:"details-page",style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url(${_t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[u.jsx("style",{children:m}),u.jsxs("div",{className:"content-container",children:[u.jsx(Kt,{to:"/blogs",className:"back-btn",children:"← Back to Intel Feed"}),u.jsxs("div",{className:"author-header",children:[u.jsx("img",{src:o.author?.profilePic&&o.author.profilePic!==""?o.author.profilePic:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:"author",className:"author-img"}),u.jsxs("div",{className:"author-info",children:[u.jsx("h3",{children:o.author?.name||"Unknown Agent"}),u.jsxs("p",{className:"author-meta",children:["PUBLISHED: ",o.createdAt?new Date(o.createdAt).toLocaleString():"UNKNOWN DATE"]})]})]}),u.jsx("h1",{className:"article-title",children:o.title}),o.subtitle&&o.subtitle.trim()!==""&&u.jsx("p",{className:"article-subtitle",children:o.subtitle}),o.images?.length>0&&u.jsx("div",{className:"image-gallery",children:o.images.map((y,b)=>u.jsx("img",{src:y,alt:`Evidence ${b+1}`,className:"blog-img"},b))}),u.jsx("div",{className:"article-body",children:o.body})]})]}):u.jsxs("div",{className:"details-page",style:{background:"#050505"},children:[u.jsx("style",{children:m}),u.jsxs("div",{className:"loader-box",children:[u.jsx("h2",{style:{color:"#fff"},children:"❌ 404 DATA NOT FOUND"}),u.jsx(Kt,{to:"/blogs",className:"back-btn",style:{marginTop:"20px"},children:"Return to Database"})]})]})}function u1(){const l=or(),[o,s]=j.useState({title:"",subtitle:"",body:""}),[c,f]=j.useState(null),[p,m]=j.useState(""),[y,b]=j.useState(!1),[g,S]=j.useState(!1),[v,B]=j.useState(""),[Z,R]=j.useState(""),w=D=>{s({...o,[D.target.name]:D.target.value})},A=async()=>{try{if(!c)return;S(!0),R("");const D=new FormData;D.append("image",c);const J=await Ee.post("http://localhost:5001/api/upload/image",D,{headers:{Authorization:`Bearer ${ft()}`,"Content-Type":"multipart/form-data"}});m(J.data.url)}catch(D){console.log(D),R(D?.response?.data?.message||"Image upload failed")}finally{S(!1)}},Y=async D=>{D.preventDefault();try{b(!0),B(""),R("");const J={title:o.title,subtitle:o.subtitle,body:o.body,images:p?[p]:[]};await Ee.post("http://localhost:5001/api/blogs",J,{headers:{Authorization:`Bearer ${ft()}`}}),B("✅ Report submitted! Awaiting admin verification."),setTimeout(()=>{l("/blogs")},1200)}catch(J){console.log(J),R(J?.response?.data?.message||"Failed to submit blog.")}finally{b(!1)}};return u.jsxs("div",{className:"create-page",style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url(${_t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[u.jsx("style",{children:`
    :root {
      --primary-red: #ff2a2a;
      --bg-dark: #050505;
      --card-bg: rgba(20, 20, 20, 0.95);
      --border-color: #333;
      --text-main: #e0e0e0;
      --text-muted: #888;
      --font-tech: 'Courier New', monospace;
      --font-main: 'Inter', sans-serif;
    }

    .create-page {
      min-height: 100vh;
      color: var(--text-main);
      font-family: var(--font-main);
      padding: 40px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .form-card {
      background: var(--card-bg);
      width: 100%;
      max-width: 700px;
      padding: 40px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      border-top: 4px solid var(--primary-red);
      box-shadow: 0 20px 50px rgba(0,0,0,0.8);
      backdrop-filter: blur(10px);
      animation: fadeIn 0.4s ease-out;
    }

    .page-title {
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 0 0 10px 0;
      text-align: center;
    }
    .page-title span { color: var(--primary-red); }

    .page-desc {
      text-align: center;
      color: var(--text-muted);
      margin-bottom: 30px;
      font-family: var(--font-tech);
      font-size: 0.9rem;
    }

    /* Form Fields */
    .form-group {
      margin-bottom: 20px;
    }

    .input-field, .textarea-field {
      width: 100%;
      padding: 14px;
      background: #0a0a0a;
      border: 1px solid #333;
      color: #fff;
      border-radius: 4px;
      font-family: var(--font-tech);
      box-sizing: border-box;
      transition: all 0.3s;
    }
    .input-field:focus, .textarea-field:focus {
      border-color: var(--primary-red);
      outline: none;
      box-shadow: 0 0 10px rgba(255, 42, 42, 0.2);
    }
    .textarea-field {
      height: 200px;
      resize: vertical;
      line-height: 1.5;
    }

    /* Upload Section */
    .upload-section {
      background: #111;
      padding: 20px;
      border: 1px dashed #444;
      border-radius: 6px;
      margin-top: 10px;
    }

    .upload-label {
      display: block;
      margin-bottom: 10px;
      color: #ccc;
      font-weight: bold;
      font-size: 0.9rem;
    }

    .file-input-wrapper {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }

    .upload-btn {
      background: #333;
      border: 1px solid #555;
      color: #fff;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 1px;
      transition: all 0.3s;
    }
    .upload-btn:hover:not(:disabled) {
      background: #fff;
      color: #000;
    }
    .upload-btn:disabled { opacity: 0.5; cursor: not-allowed; }

    /* Preview */
    .preview-box {
      margin-top: 15px;
      border-top: 1px solid #333;
      padding-top: 15px;
    }
    .preview-text { color: var(--text-muted); font-size: 0.8rem; margin-bottom: 10px; }
    .preview-img {
      width: 100%;
      max-width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 6px;
      border: 1px solid var(--primary-red);
    }

    /* Submit Button */
    .submit-btn {
      width: 100%;
      padding: 16px;
      background: linear-gradient(135deg, #990000, #ff2a2a);
      border: none;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 20px;
      font-size: 1rem;
      transition: all 0.3s;
    }
    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 5px 20px rgba(255, 42, 42, 0.4);
    }
    .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; background: #444; }

    /* Messages */
    .msg-box {
      text-align: center;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 4px;
      font-weight: bold;
    }
    .msg-success { background: rgba(0, 255, 0, 0.1); color: #0f0; border: 1px solid #0f0; }
    .msg-error { background: rgba(255, 0, 0, 0.1); color: #f00; border: 1px solid #f00; }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

    /* Mobile */
    @media (max-width: 600px) {
      .form-card { padding: 25px; }
      .page-title { font-size: 1.5rem; }
      .file-input-wrapper { flex-direction: column; align-items: stretch; }
      .file-input-wrapper input { margin-bottom: 10px; }
    }
  `}),u.jsxs("div",{className:"form-card",children:[u.jsxs("h1",{className:"page-title",children:["Submit ",u.jsx("span",{children:"Intel Report"})]}),u.jsx("p",{className:"page-desc",children:"SECURE UPLINK ESTABLISHED. ENTER DATA BELOW."}),v&&u.jsx("div",{className:"msg-box msg-success",children:v}),Z&&u.jsx("div",{className:"msg-box msg-error",children:Z}),u.jsxs("form",{onSubmit:Y,children:[u.jsx("div",{className:"form-group",children:u.jsx("input",{name:"title",placeholder:"REPORT TITLE / SUBJECT",value:o.title,onChange:w,required:!0,className:"input-field"})}),u.jsx("div",{className:"form-group",children:u.jsx("input",{name:"subtitle",placeholder:"SUBTITLE / CONTEXT (OPTIONAL)",value:o.subtitle,onChange:w,className:"input-field"})}),u.jsx("div",{className:"form-group",children:u.jsx("textarea",{name:"body",placeholder:"ENTER DETAILED ANALYSIS...",value:o.body,onChange:w,required:!0,className:"textarea-field"})}),u.jsxs("div",{className:"upload-section",children:[u.jsx("label",{className:"upload-label",children:"ATTACH VISUAL EVIDENCE:"}),u.jsxs("div",{className:"file-input-wrapper",children:[u.jsx("input",{type:"file",accept:"image/*",onChange:D=>f(D.target.files[0]),style:{color:"#fff"}}),u.jsx("button",{type:"button",className:"upload-btn",onClick:A,disabled:!c||g,children:g?"UPLOADING...":"UPLOAD TO SERVER"})]}),p&&u.jsxs("div",{className:"preview-box",children:[u.jsx("p",{className:"preview-text",children:"✅ ASSET SECURED:"}),u.jsx("img",{src:p,alt:"preview",className:"preview-img"})]})]}),u.jsx("button",{type:"submit",disabled:y,className:"submit-btn",children:y?"ENCRYPTING & SENDING...":"TRANSMIT REPORT"})]})]})]})}function f1(){const[l,o]=j.useState([]);return j.useEffect(()=>{Jv().then(c=>o(c.data||[])).catch(c=>{console.log(c),alert("Failed to load leaderboard")})},[]),u.jsxs("div",{className:"leaderboard-page",style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url(${_t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[u.jsx("style",{children:`
    :root {
      --bg-dark: #050505;
      --card-bg: rgba(22, 22, 22, 0.9);
      --border-color: #333;
      --primary-red: #ff2a2a;
      --gold: #ffd700;
      --silver: #c0c0c0;
      --bronze: #cd7f32;
      --text-main: #e0e0e0;
      --text-muted: #777;
      --font-tech: 'Courier New', monospace;
      --font-main: 'Inter', sans-serif;
    }

    .leaderboard-page {
      min-height: 100vh;
      color: var(--text-main);
      font-family: var(--font-main);
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .page-title {
      font-size: 2.5rem;
      text-transform: uppercase;
      letter-spacing: 4px;
      border-bottom: 2px solid var(--primary-red);
      padding-bottom: 10px;
      margin-bottom: 10px;
      text-shadow: 0 0 15px rgba(255, 42, 42, 0.6);
      text-align: center;
    }

    .legend-box {
      background: rgba(0,0,0,0.6);
      border: 1px dashed #444;
      padding: 10px 20px;
      border-radius: 4px;
      margin-bottom: 30px;
      font-size: 0.9rem;
      color: #aaa;
      font-family: var(--font-tech);
      text-align: center;
    }
    .legend-box span { color: var(--primary-red); font-weight: bold; }

    /* List Container */
    .list-container {
      width: 100%;
      max-width: 900px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    /* User Card */
    .user-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      padding: 15px 20px;
      border-radius: 8px;
      display: grid;
      grid-template-columns: 60px auto 1fr 100px; /* Rank | Profile | Stats | Points */
      align-items: center;
      gap: 20px;
      transition: transform 0.2s, box-shadow 0.2s;
      backdrop-filter: blur(5px);
    }
    
    .user-card:hover {
      transform: translateX(5px);
      border-color: #555;
      box-shadow: 0 5px 20px rgba(0,0,0,0.5);
    }

    /* Rank Styles */
    .rank-box {
      font-size: 1.5rem;
      font-weight: 800;
      color: #444;
      font-family: var(--font-tech);
      text-align: center;
    }
    
    /* Top 3 Highlighting */
    .user-card.rank-1 { border-left: 4px solid var(--gold); background: linear-gradient(90deg, rgba(255, 215, 0, 0.1), transparent); }
    .user-card.rank-1 .rank-box { color: var(--gold); text-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
    
    .user-card.rank-2 { border-left: 4px solid var(--silver); }
    .user-card.rank-2 .rank-box { color: var(--silver); }
    
    .user-card.rank-3 { border-left: 4px solid var(--bronze); }
    .user-card.rank-3 .rank-box { color: var(--bronze); }

    /* Profile Section */
    .profile-section {
      display: flex;
      align-items: center;
      gap: 15px;
      min-width: 200px;
    }
    
    .profile-pic {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #444;
    }
    .user-card.rank-1 .profile-pic { border-color: var(--gold); }

    .user-info h3 { margin: 0; font-size: 1.1rem; color: #fff; }
    .user-info p { margin: 2px 0 0 0; font-size: 0.8rem; color: var(--text-muted); max-width: 150px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

    /* Stats Breakdown (Middle) */
    .stats-breakdown {
      display: flex;
      gap: 15px;
      justify-content: center;
    }
    .stat-pill {
      background: #111;
      border: 1px solid #333;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-family: var(--font-tech);
      color: #888;
      text-align: center;
      min-width: 60px;
    }
    .stat-pill b { display: block; color: #fff; font-size: 0.9rem; }
    .stat-pill span { font-size: 0.65rem; text-transform: uppercase; }

    /* Total Points (Right) */
    .points-box {
      text-align: right;
    }
    .points-val {
      font-size: 1.4rem;
      font-weight: bold;
      color: var(--primary-red);
      font-family: var(--font-tech);
    }
    .points-lbl { font-size: 0.7rem; color: #666; text-transform: uppercase; }

    /* Responsive Mobile Design */
    @media (max-width: 768px) {
      .user-card {
        grid-template-columns: 50px 1fr auto; /* Rank | Profile | Points */
        grid-template-rows: auto auto;
        padding: 15px;
        gap: 10px;
      }
      
      .rank-box { font-size: 1.2rem; }
      
      .stats-breakdown {
        grid-column: 1 / -1; /* Span full width on row 2 */
        justify-content: space-between;
        margin-top: 5px;
        border-top: 1px solid #222;
        padding-top: 10px;
      }
      
      .stat-pill { flex: 1; }
      
      .profile-section { min-width: auto; }
      .user-info p { max-width: 120px; }
    }
  `}),u.jsx("h1",{className:"page-title",children:"🏆 Top Agents"}),u.jsxs("div",{className:"legend-box",children:["Mission Value: ",u.jsx("span",{children:"Beginner +1"})," | ",u.jsx("span",{children:"Medium +3"})," | ",u.jsx("span",{children:"Pro +6"})]}),u.jsx("div",{className:"list-container",children:l.length===0?u.jsx("div",{style:{textAlign:"center",padding:"40px",border:"1px dashed #333",color:"#666"},children:"No agents found in database."}):l.map((c,f)=>{const p=f+1;let m="";return p===1&&(m="rank-1"),p===2&&(m="rank-2"),p===3&&(m="rank-3"),u.jsxs("div",{className:`user-card ${m}`,children:[u.jsxs("div",{className:"rank-box",children:["#",p]}),u.jsxs("div",{className:"profile-section",children:[u.jsx("img",{src:c.profilePic&&c.profilePic!==""?c.profilePic:"https://cdn-icons-png.flaticon.com/512/149/149071.png",alt:"profile",className:"profile-pic"}),u.jsxs("div",{className:"user-info",children:[u.jsx("h3",{children:c.name}),u.jsx("p",{title:c.email,children:c.email})]})]}),u.jsxs("div",{className:"stats-breakdown",children:[u.jsxs("div",{className:"stat-pill",children:[u.jsx("span",{children:"Beginner"}),u.jsx("b",{children:c.phishingProgress?.beginner?.correct||0})]}),u.jsxs("div",{className:"stat-pill",children:[u.jsx("span",{children:"Medium"}),u.jsx("b",{children:c.phishingProgress?.medium?.correct||0})]}),u.jsxs("div",{className:"stat-pill",children:[u.jsx("span",{children:"Pro"}),u.jsx("b",{children:c.phishingProgress?.pro?.correct||0})]})]}),u.jsxs("div",{className:"points-box",children:[u.jsx("div",{className:"points-val",children:c.points||0}),u.jsx("div",{className:"points-lbl",children:"PTS"})]})]},c._id)})})]})}var Nc={exports:{}},Vm;function d1(){return Vm||(Vm=1,(function(l){var o=(function(s){var c=Object.prototype,f=c.hasOwnProperty,p=Object.defineProperty||function(G,H,x){G[H]=x.value},m,y=typeof Symbol=="function"?Symbol:{},b=y.iterator||"@@iterator",g=y.asyncIterator||"@@asyncIterator",S=y.toStringTag||"@@toStringTag";function v(G,H,x){return Object.defineProperty(G,H,{value:x,enumerable:!0,configurable:!0,writable:!0}),G[H]}try{v({},"")}catch{v=function(H,x,z){return H[x]=z}}function B(G,H,x,z){var k=H&&H.prototype instanceof D?H:D,K=Object.create(k.prototype),te=new _(z||[]);return p(K,"_invoke",{value:De(G,x,te)}),K}s.wrap=B;function Z(G,H,x){try{return{type:"normal",arg:G.call(H,x)}}catch(z){return{type:"throw",arg:z}}}var R="suspendedStart",w="suspendedYield",A="executing",Y="completed",V={};function D(){}function J(){}function I(){}var se={};v(se,b,function(){return this});var F=Object.getPrototypeOf,he=F&&F(F($([])));he&&he!==c&&f.call(he,b)&&(se=he);var ge=I.prototype=D.prototype=Object.create(se);J.prototype=I,p(ge,"constructor",{value:I,configurable:!0}),p(I,"constructor",{value:J,configurable:!0}),J.displayName=v(I,S,"GeneratorFunction");function qe(G){["next","throw","return"].forEach(function(H){v(G,H,function(x){return this._invoke(H,x)})})}s.isGeneratorFunction=function(G){var H=typeof G=="function"&&G.constructor;return H?H===J||(H.displayName||H.name)==="GeneratorFunction":!1},s.mark=function(G){return Object.setPrototypeOf?Object.setPrototypeOf(G,I):(G.__proto__=I,v(G,S,"GeneratorFunction")),G.prototype=Object.create(ge),G},s.awrap=function(G){return{__await:G}};function Ye(G,H){function x(K,te,re,ce){var Ne=Z(G[K],G,te);if(Ne.type==="throw")ce(Ne.arg);else{var ae=Ne.arg,fe=ae.value;return fe&&typeof fe=="object"&&f.call(fe,"__await")?H.resolve(fe.__await).then(function(Oe){x("next",Oe,re,ce)},function(Oe){x("throw",Oe,re,ce)}):H.resolve(fe).then(function(Oe){ae.value=Oe,re(ae)},function(Oe){return x("throw",Oe,re,ce)})}}var z;function k(K,te){function re(){return new H(function(ce,Ne){x(K,te,ce,Ne)})}return z=z?z.then(re,re):re()}p(this,"_invoke",{value:k})}qe(Ye.prototype),v(Ye.prototype,g,function(){return this}),s.AsyncIterator=Ye,s.async=function(G,H,x,z,k){k===void 0&&(k=Promise);var K=new Ye(B(G,H,x,z),k);return s.isGeneratorFunction(H)?K:K.next().then(function(te){return te.done?te.value:K.next()})};function De(G,H,x){var z=R;return function(K,te){if(z===A)throw new Error("Generator is already running");if(z===Y){if(K==="throw")throw te;return P()}for(x.method=K,x.arg=te;;){var re=x.delegate;if(re){var ce=ze(re,x);if(ce){if(ce===V)continue;return ce}}if(x.method==="next")x.sent=x._sent=x.arg;else if(x.method==="throw"){if(z===R)throw z=Y,x.arg;x.dispatchException(x.arg)}else x.method==="return"&&x.abrupt("return",x.arg);z=A;var Ne=Z(G,H,x);if(Ne.type==="normal"){if(z=x.done?Y:w,Ne.arg===V)continue;return{value:Ne.arg,done:x.done}}else Ne.type==="throw"&&(z=Y,x.method="throw",x.arg=Ne.arg)}}}function ze(G,H){var x=H.method,z=G.iterator[x];if(z===m)return H.delegate=null,x==="throw"&&G.iterator.return&&(H.method="return",H.arg=m,ze(G,H),H.method==="throw")||x!=="return"&&(H.method="throw",H.arg=new TypeError("The iterator does not provide a '"+x+"' method")),V;var k=Z(z,G.iterator,H.arg);if(k.type==="throw")return H.method="throw",H.arg=k.arg,H.delegate=null,V;var K=k.arg;if(!K)return H.method="throw",H.arg=new TypeError("iterator result is not an object"),H.delegate=null,V;if(K.done)H[G.resultName]=K.value,H.next=G.nextLoc,H.method!=="return"&&(H.method="next",H.arg=m);else return K;return H.delegate=null,V}qe(ge),v(ge,S,"Generator"),v(ge,b,function(){return this}),v(ge,"toString",function(){return"[object Generator]"});function W(G){var H={tryLoc:G[0]};1 in G&&(H.catchLoc=G[1]),2 in G&&(H.finallyLoc=G[2],H.afterLoc=G[3]),this.tryEntries.push(H)}function ie(G){var H=G.completion||{};H.type="normal",delete H.arg,G.completion=H}function _(G){this.tryEntries=[{tryLoc:"root"}],G.forEach(W,this),this.reset(!0)}s.keys=function(G){var H=Object(G),x=[];for(var z in H)x.push(z);return x.reverse(),function k(){for(;x.length;){var K=x.pop();if(K in H)return k.value=K,k.done=!1,k}return k.done=!0,k}};function $(G){if(G){var H=G[b];if(H)return H.call(G);if(typeof G.next=="function")return G;if(!isNaN(G.length)){var x=-1,z=function k(){for(;++x<G.length;)if(f.call(G,x))return k.value=G[x],k.done=!1,k;return k.value=m,k.done=!0,k};return z.next=z}}return{next:P}}s.values=$;function P(){return{value:m,done:!0}}return _.prototype={constructor:_,reset:function(G){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(ie),!G)for(var H in this)H.charAt(0)==="t"&&f.call(this,H)&&!isNaN(+H.slice(1))&&(this[H]=m)},stop:function(){this.done=!0;var G=this.tryEntries[0],H=G.completion;if(H.type==="throw")throw H.arg;return this.rval},dispatchException:function(G){if(this.done)throw G;var H=this;function x(ce,Ne){return K.type="throw",K.arg=G,H.next=ce,Ne&&(H.method="next",H.arg=m),!!Ne}for(var z=this.tryEntries.length-1;z>=0;--z){var k=this.tryEntries[z],K=k.completion;if(k.tryLoc==="root")return x("end");if(k.tryLoc<=this.prev){var te=f.call(k,"catchLoc"),re=f.call(k,"finallyLoc");if(te&&re){if(this.prev<k.catchLoc)return x(k.catchLoc,!0);if(this.prev<k.finallyLoc)return x(k.finallyLoc)}else if(te){if(this.prev<k.catchLoc)return x(k.catchLoc,!0)}else if(re){if(this.prev<k.finallyLoc)return x(k.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(G,H){for(var x=this.tryEntries.length-1;x>=0;--x){var z=this.tryEntries[x];if(z.tryLoc<=this.prev&&f.call(z,"finallyLoc")&&this.prev<z.finallyLoc){var k=z;break}}k&&(G==="break"||G==="continue")&&k.tryLoc<=H&&H<=k.finallyLoc&&(k=null);var K=k?k.completion:{};return K.type=G,K.arg=H,k?(this.method="next",this.next=k.finallyLoc,V):this.complete(K)},complete:function(G,H){if(G.type==="throw")throw G.arg;return G.type==="break"||G.type==="continue"?this.next=G.arg:G.type==="return"?(this.rval=this.arg=G.arg,this.method="return",this.next="end"):G.type==="normal"&&H&&(this.next=H),V},finish:function(G){for(var H=this.tryEntries.length-1;H>=0;--H){var x=this.tryEntries[H];if(x.finallyLoc===G)return this.complete(x.completion,x.afterLoc),ie(x),V}},catch:function(G){for(var H=this.tryEntries.length-1;H>=0;--H){var x=this.tryEntries[H];if(x.tryLoc===G){var z=x.completion;if(z.type==="throw"){var k=z.arg;ie(x)}return k}}throw new Error("illegal catch attempt")},delegateYield:function(G,H,x){return this.delegate={iterator:$(G),resultName:H,nextLoc:x},this.method==="next"&&(this.arg=m),V}},s})(l.exports);try{regeneratorRuntime=o}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}})(Nc)),Nc.exports}var wc,Zm;function cu(){return Zm||(Zm=1,wc=(l,o)=>`${l}-${o}-${Math.random().toString(16).slice(3,8)}`),wc}var jc,Km;function ag(){if(Km)return jc;Km=1;const l=cu();let o=0;return jc=({id:s,action:c,payload:f={}})=>{let p=s;return typeof p>"u"&&(p=l("Job",o),o+=1),{id:p,action:c,payload:f}},jc}var lr={},Jm;function uu(){if(Jm)return lr;Jm=1;let l=!1;return lr.logging=l,lr.setLogging=o=>{l=o},lr.log=(...o)=>l?console.log.apply(this,o):null,lr}var Tc,Fm;function p1(){if(Fm)return Tc;Fm=1;const l=ag(),{log:o}=uu(),s=cu();let c=0;return Tc=()=>{const f=s("Scheduler",c),p={},m={};let y=[];c+=1;const b=()=>y.length,g=()=>Object.keys(p).length,S=()=>{if(y.length!==0){const w=Object.keys(p);for(let A=0;A<w.length;A+=1)if(typeof m[w[A]]>"u"){y[0](p[w[A]]);break}}},v=(w,A)=>new Promise((Y,V)=>{const D=l({action:w,payload:A});y.push(async J=>{y.shift(),m[J.id]=D;try{Y(await J[w].apply(this,[...A,D.id]))}catch(I){V(I)}finally{delete m[J.id],S()}}),o(`[${f}]: Add ${D.id} to JobQueue`),o(`[${f}]: JobQueue length=${y.length}`),S()});return{addWorker:w=>(p[w.id]=w,o(`[${f}]: Add ${w.id}`),o(`[${f}]: Number of workers=${g()}`),S(),w.id),addJob:async(w,...A)=>{if(g()===0)throw Error(`[${f}]: You need to have at least one worker before adding jobs`);return v(w,A)},terminate:async()=>{Object.keys(p).forEach(async w=>{await p[w].terminate()}),y=[]},getQueueLen:b,getNumWorkers:g}},Tc}function m1(l){throw new Error('Could not dynamically require "'+l+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ac,$m;function h1(){return $m||($m=1,Ac=l=>{const o={};return typeof WorkerGlobalScope<"u"?o.type="webworker":typeof document=="object"?o.type="browser":typeof process=="object"&&typeof m1=="function"&&(o.type="node"),typeof l>"u"?o:o[l]}),Ac}var Rc,Wm;function g1(){if(Wm)return Rc;Wm=1;const o=h1()("type")==="browser"?s=>new URL(s,window.location.href).href:s=>s;return Rc=s=>{const c={...s};return["corePath","workerPath","langPath"].forEach(f=>{s[f]&&(c[f]=o(c[f]))}),c},Rc}var zc,Im;function ng(){return Im||(Im=1,zc={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}),zc}const b1="7.0.0",y1={version:b1};var Oc,Pm;function x1(){return Pm||(Pm=1,Oc={workerBlobURL:!0,logger:()=>{}}),Oc}var Cc,eh;function v1(){if(eh)return Cc;eh=1;const l=y1.version;return Cc={...x1(),workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${l}/dist/worker.min.js`},Cc}var _c,th;function S1(){return th||(th=1,_c=({workerPath:l,workerBlobURL:o})=>{let s;if(Blob&&URL&&o){const c=new Blob([`importScripts("${l}");`],{type:"application/javascript"});s=new Worker(URL.createObjectURL(c))}else s=new Worker(l);return s}),_c}var Mc,ah;function E1(){return ah||(ah=1,Mc=l=>{l.terminate()}),Mc}var Dc,nh;function N1(){return nh||(nh=1,Dc=(l,o)=>{l.onmessage=({data:s})=>{o(s)}}),Dc}var Uc,lh;function w1(){return lh||(lh=1,Uc=async(l,o)=>{l.postMessage(o)}),Uc}var Lc,rh;function j1(){if(rh)return Lc;rh=1;const l=s=>new Promise((c,f)=>{const p=new FileReader;p.onload=()=>{c(p.result)},p.onerror=({target:{error:{code:m}}})=>{f(Error(`File could not be read! Code=${m}`))},p.readAsArrayBuffer(s)}),o=async s=>{let c=s;if(typeof s>"u")return"undefined";if(typeof s=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(s)?c=atob(s.split(",")[1]).split("").map(f=>f.charCodeAt(0)):c=await(await fetch(s)).arrayBuffer();else if(typeof HTMLElement<"u"&&s instanceof HTMLElement)s.tagName==="IMG"&&(c=await o(s.src)),s.tagName==="VIDEO"&&(c=await o(s.poster)),s.tagName==="CANVAS"&&await new Promise(f=>{s.toBlob(async p=>{c=await l(p),f()})});else if(typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas){const f=await s.convertToBlob();c=await l(f)}else(s instanceof File||s instanceof Blob)&&(c=await l(s));return new Uint8Array(c)};return Lc=o,Lc}var kc,ih;function T1(){if(ih)return kc;ih=1;const l=v1(),o=S1(),s=E1(),c=N1(),f=w1(),p=j1();return kc={defaultOptions:l,spawnWorker:o,terminateWorker:s,onMessage:c,send:f,loadImage:p},kc}var Bc,oh;function lg(){if(oh)return Bc;oh=1;const l=g1(),o=ag(),{log:s}=uu(),c=cu(),f=ng(),{defaultOptions:p,spawnWorker:m,terminateWorker:y,onMessage:b,loadImage:g,send:S}=T1();let v=0;return Bc=async(B="eng",Z=f.LSTM_ONLY,R={},w={})=>{const A=c("Worker",v),{logger:Y,errorHandler:V,...D}=l({...p,...R}),J={},I=typeof B=="string"?B.split("+"):B;let se=Z,F=w;const he=[f.DEFAULT,f.LSTM_ONLY].includes(Z)&&!D.legacyCore;let ge,qe;const Ye=new Promise((ae,fe)=>{qe=ae,ge=fe}),De=ae=>{ge(ae.message)};let ze=m(D);ze.onerror=De,v+=1;const W=({id:ae,action:fe,payload:Oe})=>new Promise((rt,ct)=>{s(`[${A}]: Start ${ae}, action=${fe}`);const We=`${fe}-${ae}`;J[We]={resolve:rt,reject:ct},S(ze,{workerId:A,jobId:ae,action:fe,payload:Oe})}),ie=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),_=ae=>W(o({id:ae,action:"load",payload:{options:{lstmOnly:he,corePath:D.corePath,logging:D.logging}}})),$=(ae,fe,Oe)=>W(o({id:Oe,action:"FS",payload:{method:"writeFile",args:[ae,fe]}})),P=(ae,fe)=>W(o({id:fe,action:"FS",payload:{method:"readFile",args:[ae,{encoding:"utf8"}]}})),G=(ae,fe)=>W(o({id:fe,action:"FS",payload:{method:"unlink",args:[ae]}})),H=(ae,fe,Oe)=>W(o({id:Oe,action:"FS",payload:{method:ae,args:fe}})),x=(ae,fe)=>W(o({id:fe,action:"loadLanguage",payload:{langs:ae,options:{langPath:D.langPath,dataPath:D.dataPath,cachePath:D.cachePath,cacheMethod:D.cacheMethod,gzip:D.gzip,lstmOnly:[f.DEFAULT,f.LSTM_ONLY].includes(se)&&!D.legacyLang}}})),z=(ae,fe,Oe,rt)=>W(o({id:rt,action:"initialize",payload:{langs:ae,oem:fe,config:Oe}})),k=(ae="eng",fe,Oe,rt)=>{if(he&&[f.TESSERACT_ONLY,f.TESSERACT_LSTM_COMBINED].includes(fe))throw Error("Legacy model requested but code missing.");const ct=fe||se;se=ct;const We=Oe||F;F=We;const Ja=(typeof ae=="string"?ae.split("+"):ae).filter(Ki=>!I.includes(Ki));return I.push(...Ja),Ja.length>0?x(Ja,rt).then(()=>z(ae,ct,We,rt)):z(ae,ct,We,rt)},K=(ae={},fe)=>W(o({id:fe,action:"setParameters",payload:{params:ae}})),te=async(ae,fe={},Oe={text:!0},rt)=>W(o({id:rt,action:"recognize",payload:{image:await g(ae),options:fe,output:Oe}})),re=async(ae,fe)=>{if(he)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return W(o({id:fe,action:"detect",payload:{image:await g(ae)}}))},ce=async()=>(ze!==null&&(y(ze),ze=null),Promise.resolve());b(ze,({workerId:ae,jobId:fe,status:Oe,action:rt,data:ct})=>{const We=`${rt}-${fe}`;if(Oe==="resolve")s(`[${ae}]: Complete ${fe}`),J[We].resolve({jobId:fe,data:ct}),delete J[We];else if(Oe==="reject")if(J[We].reject(ct),delete J[We],rt==="load"&&ge(ct),V)V(ct);else throw Error(ct);else Oe==="progress"&&Y({...ct,userJobId:fe})});const Ne={id:A,worker:ze,load:ie,writeText:$,readText:P,removeFile:G,FS:H,reinitialize:k,setParameters:K,recognize:te,detect:re,terminate:ce};return _().then(()=>x(B)).then(()=>z(B,Z,w)).then(()=>qe(Ne)).catch(()=>{}),Ye},Bc}var Hc,sh;function A1(){if(sh)return Hc;sh=1;const l=lg();return Hc={recognize:async(c,f,p)=>{const m=await l(f,1,p);return m.recognize(c).finally(async()=>{await m.terminate()})},detect:async(c,f)=>{const p=await l("osd",0,f);return p.detect(c).finally(async()=>{await p.terminate()})}},Hc}var qc,ch;function R1(){return ch||(ch=1,qc={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"}),qc}var Yc,uh;function z1(){return uh||(uh=1,Yc={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"}),Yc}var Gc,fh;function O1(){if(fh)return Gc;fh=1,d1();const l=p1(),o=lg(),s=A1(),c=R1(),f=ng(),p=z1(),{setLogging:m}=uu();return Gc={languages:c,OEM:f,PSM:p,createScheduler:l,createWorker:o,setLogging:m,...s},Gc}var C1=O1();const _1=Ab(C1),M1={urgency:{patterns:[/\b(urgent|immediately|asap|right away|right now|hurry|limited time|expires?|deadline|act now|don't delay|only.*left)\b/i,/\b(within.*hours?|today only|hours left|minutes left|final.*call|last.*chance)\b/i],weight:25,description:"Creates artificial urgency to prevent careful thinking"},financialRequest:{patterns:[/\b(send.*money|transfer.*money|pay.*fee|processing fee|registration fee|advance.*payment|upfront|initial.*payment)\b/i,/\b(deposit.*amount|wallet.*balance|refill.*account|load.*money|add.*money|top.?up)\b/i,/\b(₹|rs\.?|rupees?|inr|dollars?|usd)\s*\d+[\d,]*\s*(now|please|urgently)?\b/i,/\b\d+[\d,]*\s*(₹|rs\.?|rupees?|inr|dollars?|usd)\b/i,/\b(give.*account|bank.*details|account.*number|upi.*id|qr.*code|payment.*link)\b/i],weight:30,description:"Requests for financial transactions or payment details"},otpScam:{patterns:[/\b(otp|one.?time.?password|verification.*code|security.*code|pin.*number|don't.*share|don't.*tell)\b/i,/\b(shared.*by.*mistake|accidentally.*sent|wrong.*transfer|refund.*otp)\b/i,/\b(bank.*official|customer.*care|support.*team).*ask.*(otp|pin|password)\b/i],weight:35,description:"Attempts to steal OTP/PIN through social engineering"},jobFraud:{patterns:[/\b(work.*from.*home|remote.*job|part.*time.*job|freelance|gig.*earning|easy.*money|earn.*daily)\b/i,/\b(registration.*fee|joining.*fee|training.*fee|material.*fee|kit.*fee|investment.*plan)\b/i,/\b(telegram.*group|whatsapp.*group|join.*channel|contact.*hr|hr.*department)\b/i,/\b(typing.*job|data.*entry|form.*filling|customer.*service.*job)\b/i,/\b(unlimited.*earning|fixed.*salary|daily.*payment|weekly.*payment)\b/i],weight:30,description:"Fake job offers requiring upfront payments"},investmentFraud:{patterns:[/\b(investment|mutual.*fund|stock.*market|trading|crypto|cryptocurrency|bitcoin|ethereum)\b/i,/\b(guaranteed.*return|fixed.*return|high.*return|double.*money|triple.*money|luck.*chance)\b/i,/\b(trading.*app|investment.*app|forex|binance|wazirx|coinDCX|groww|zerodha)\b/i,/\b(minimum.*deposit|minimum.*investment|start.*with|just.*₹|just.*rs)\b/i,/\b(100%.*safe|legitimate|government.*approved|registered.*company)\b/i],weight:28,description:"Investment opportunities promising unrealistic returns"},phishing:{patterns:[/\b(verify.*account|update.*account|confirm.*details|secure.*account|locked.*account)\b/i,/\b(click.*link|visit.*website|login.*page|bank.*website|official.*website)\b/i,/\b(amazon|paytm|phonepe|googlepay|flipkart|netbanking)\b.*(refund|update|verify)/i,/\b(your.*account.*will.*be.*(suspended|blocked|closed)|action.*required|immediate.*attention)\b/i,/\b(suspended.*account|blocked.*account|verify.*kyc|kyc.*pending|kyc.*expired)\b/i],weight:32,description:"Attempts to steal credentials through fake links/alerts"},prizeScam:{patterns:[/\b(Congratulations|winner|won|lucky.*winner|selected|chosen)\b/i,/\b(prize|lottery|jackpot|cash.*prize|gift.*voucher|free.*money|free.*gift)\b/i,/\b(claim.*prize|claim.*reward|collect.*winnings|shipping.*fee|delivery.*charge|tariff.*fee)\b/i,/\b(won.*draw|winner.*notification|you.*have.*won|congratulations.*winner)\b/i],weight:28,description:"Fake prize notifications requiring payment to claim"},identityScam:{patterns:[/\b(kyc|know.*your.*customer|identity.*verification|document.*verification)\b/i,/\b(aadhaar|pan.*card|bank.*passbook|photo.*id|selfie.*with.*id)\b/i,/\b(update.*kyc|complete.*kyc|kyc.*pending|kyc.*failed|verify.*identity)\b/i],weight:25,description:"Requests for identity documents for fraudulent purposes"},romanceScam:{patterns:[/\b(love|romance|relationship|marry|married|wedding|trust.*me|feel.*strongly)\b/i,/\b(long.*distance|overseas|military|doctor|engineer|working.*abroad)\b/i,/\b(send.*gift|send.*money|help.*family|medical.*emergency|investment.*for.*us)\b/i],weight:25,description:"Emotional manipulation to extract money"},techSupportScam:{patterns:[/\b(technical.*support|microsoft|apple|google|amazon.*support|customer.*care)\b/i,/\b(computer.*infected|virus|malware|hacked|unauthorized.*access)\b/i,/\b(remote.*access|teamviewer|anydesk|quick.*assist|give.*control)\b/i,/\b(refund.*for.*subscription|subscription.*expired|renew.*subscription)\b/i],weight:30,description:"Fake tech support or refund scams"}},D1=l=>{const o=l.toLowerCase(),s=[];return/\b(otp|one.?time.*password|verification.*code|pin|password.*shared|shared.*otp)\b/i.test(o)&&s.push("OTP Theft"),/\b(upi|payment|wallet|qr.*code|scan.*qr|send.*money|transfer)\b/i.test(o)&&s.push("UPI Fraud"),/\b(job|work.*from.*home|remote.*job|part.*time|freelance|earning|typing|registration.*fee|training.*fee)\b/i.test(o)&&s.push("Job Fraud"),/\b(investment|crypto|bitcoin|trading|stock|mutual.*fund|forex|double.*money|high.*return)\b/i.test(o)&&s.push("Investment/Crypto Scam"),/\b(click.*link|login|website|verify.*account|update.*account|bank.*website|amazon|paytm)\b/i.test(o)&&s.push("Phishing"),/\b(prize|lottery|winner|congratulations|won|claim.*prize|free.*gift)\b/i.test(o)&&s.push("Prize/Lottery Scam"),/\b(kyc|identity|document|aadhaar|pan.*card|verification)\b/i.test(o)&&s.push("KYC Fraud"),/\b(support|customer.*care|technical.*support|microsoft|amazon.*call|refund)\b/i.test(o)&&s.push("Tech Support Scam"),s.length>0?s:["Unknown Scam Type"]},U1=l=>{const o=l.toLowerCase(),s=[];return/\b(urgent|immediately|asap|hurry|limited time|act now)\b/i.test(o)&&s.push({flag:"Creates artificial urgency",explanation:"Scammers pressure you to act quickly without thinking"}),/\b(send money|transfer|pay fee|deposit|upfront|payment)\b/i.test(o)&&s.push({flag:"Requests money/payment",explanation:"Legitimate organizations don't ask for money this way"}),/\b(otp|verification code|don't share|don't tell)\b/i.test(o)&&s.push({flag:"Asks for OTP/PIN",explanation:"Banks/companies never ask for OTP - this is always a scam"}),/\b(guaranteed|double money|high return|easy money|free)\b/i.test(o)&&s.push({flag:"Too good to be true",explanation:"Promises unrealistic returns are always scams"}),/\b(bank official|customer care|support team|hr department)\b/i.test(o)&&s.push({flag:"Claims to be official",explanation:"Scammers impersonate real organizations"}),/\b(click link|visit website|login here|click here)\b/i.test(o)&&s.push({flag:"Asks to click suspicious links",explanation:"Fake links steal your login credentials"}),s},dh=(l="")=>{if(!l||l.trim()==="")return{score:0,riskLevel:"LOW",detectedTypes:[],redFlags:[],analysis:"No description provided for analysis",method:"pattern"};let o=0,s=[];for(const[w,{patterns:A,weight:Y,description:V}]of Object.entries(M1)){let D=0;for(const J of A)J.test(l)&&(D++,o+=Y,s.push({category:w,description:V,weight:Y}));if(D>1){const J=Y,I=Math.min(D-1,3)*5;o=o-D*Y+J+I}}l.length<20&&(o+=10);const f=/\b(urgent|immediately|asap|hurry)\b/i.test(l.toLowerCase()),p=/\b(money|payment|transfer|send|pay|fee|deposit)\b/i.test(l.toLowerCase()),m=/\b(whatsapp|telegram|phone|call|contact|message)\b/i.test(l.toLowerCase());f&&p&&(o+=15,s.push({category:"critical_combination",description:"URGENCY + MONEY REQUEST - Classic scam pattern",weight:15})),f&&m&&(o+=10,s.push({category:"critical_combination",description:"URGENCY + OFF-CONTACT REQUEST - High pressure to move conversation",weight:10}));const y=Math.min(Math.max(o,0),100);let b="LOW";y>=70?b="HIGH":y>=40&&(b="MEDIUM");const g=D1(l),S=U1(l),v=/(https?:\/\/[^\s]+)/gi,B=l.toLowerCase().match(v)||[],Z=/(\+?\d{10,13})/g,R=l.match(Z)||[];return{score:y,riskLevel:b,detectedTypes:g,redFlags:S,matchedPatterns:s.slice(0,10),method:"pattern",analysis:{totalIndicators:s.length,primaryRisk:g[0]||"Unknown",confidence:y>=70?"HIGH":y>=40?"MEDIUM":"LOW",detectedUrls:B,detectedPhones:R}}},L1=async(l="")=>{if(!l||l.trim()==="")return{score:0,riskLevel:"LOW",detectedTypes:[],redFlags:[],analysis:"No text provided for analysis",method:"none"};try{const o=await r1(l);if(o?.data?.success){const c=o.data,f=c.confidence||0;let p="LOW";return c.isScam&&(f>=70?p="HIGH":f>=40&&(p="MEDIUM")),{score:Math.round(f),risk:p,detectedTypes:c.scamType?[c.scamType]:[],redFlags:c.redFlags||[],reasoning:c.reasoning||"",advice:c.realWorldAdvice||"",whatHappensNext:c.whatHappensNext||"",scamType:c.scamType,isScam:c.isScam,method:"AI",analysis:{confidence:c.confidence,analyzedAt:new Date().toISOString()}}}return console.log("AI analysis not available, using pattern fallback"),{...dh(l),method:"fallback"}}catch(o){return console.error("AI analysis error, falling back to pattern matching:",o),dh(l)}};function k1(){const[l,o]=j.useState(null),[s,c]=j.useState(!1),[f,p]=j.useState(""),[m,y]=j.useState(null),[b,g]=j.useState(""),S=w=>{const A=w.target.files[0];if(!A)return;p(""),y(null),g("");const Y=URL.createObjectURL(A);o(Y)},v=async()=>{if(!l)return alert("Upload a screenshot first!");c(!0),p(""),y(null),g("");try{const A=(await _1.recognize(l,"eng",{logger:V=>console.log(V)})).data.text||"";if(p(A),!A.trim()){alert("No text could be extracted from the image!"),c(!1);return}const Y=await L1(A);y(Y),g(Y.method||"unknown")}catch(w){console.log(w),alert("Failed to analyze screenshot!")}finally{c(!1)}},B=()=>m?m.risk==="HIGH"||m.risk==="HIGH"?"🚨 HIGH RISK: Do NOT click links. Do not share OTP/UPI details. Report immediately.":m.risk==="MEDIUM"?"⚠️ MEDIUM RISK: Verify from official website/app. Avoid quick actions. Double-check sender identity.":"✅ LOW RISK: Seems safe, but still verify carefully before sharing any personal info.":null,Z=()=>!m||m.method!=="AI"?null:u.jsxs("div",{className:"ai-analysis-section",children:[m.reasoning&&u.jsxs("div",{className:"ai-section",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"ai-icon",children:"🤖"}),u.jsx("span",{children:"AI Analysis"})]}),u.jsx("div",{className:"ai-content reasoning",children:u.jsx("p",{children:m.reasoning})})]}),m.whatHappensNext&&u.jsxs("div",{className:"ai-section warning",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"ai-icon",children:"⚠️"}),u.jsx("span",{children:"What Happens If You Engage"})]}),u.jsx("div",{className:"ai-content",children:u.jsx("p",{children:m.whatHappensNext})})]}),m.advice&&u.jsxs("div",{className:"ai-section advice",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("span",{className:"ai-icon",children:"💡"}),u.jsx("span",{children:"What You Should Do"})]}),u.jsx("div",{className:"ai-content",children:u.jsx("p",{children:m.advice})})]})]});return u.jsxs("div",{className:"analyzer-page",style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url(${_t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[u.jsx("style",{children:`
    :root {
      --primary-red: #ff2a2a;
      --neon-green: #00e676;
      --neon-orange: #ff9100;
      --bg-dark: #050505;
      --card-bg: rgba(22, 22, 22, 0.95);
      --border-color: #333;
      --text-main: #e0e0e0;
      --text-muted: #888;
      --font-tech: 'Courier New', monospace;
      --font-main: 'Inter', sans-serif;
      --ai-blue: #3b82f6;
      --ai-purple: #8b5cf6;
    }

    .analyzer-page {
      min-height: 100vh;
      color: var(--text-main);
      font-family: var(--font-main);
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .page-title {
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 10px;
      text-align: center;
      text-shadow: 0 0 15px rgba(255, 42, 42, 0.5);
    }
    .page-title span { color: var(--primary-red); }

    .page-desc {
      text-align: center;
      color: var(--text-muted);
      font-family: var(--font-tech);
      max-width: 600px;
      margin-bottom: 40px;
      font-size: 0.9rem;
    }

    /* Main Container */
    .analyzer-container {
      width: 100%;
      max-width: 1000px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    /* Upload Card */
    .upload-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-top: 4px solid var(--primary-red);
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 15px 50px rgba(0,0,0,0.8);
      backdrop-filter: blur(10px);
      text-align: center;
    }

    /* Custom File Input */
    .file-drop-area {
      border: 2px dashed #444;
      border-radius: 8px;
      padding: 30px;
      cursor: pointer;
      transition: all 0.3s;
      background: rgba(0,0,0,0.2);
    }
    .file-drop-area:hover {
      border-color: var(--primary-red);
      background: rgba(255, 42, 42, 0.05);
    }
    .file-label {
      color: #aaa;
      font-family: var(--font-tech);
      font-size: 1rem;
      pointer-events: none;
    }
    input[type=file] { display: none; }

    /* Preview Section */
    .preview-section {
      margin-top: 20px;
      border-top: 1px solid #333;
      padding-top: 20px;
    }
    .preview-header {
      font-family: var(--font-tech);
      color: var(--primary-red);
      margin-bottom: 10px;
      display: block;
      text-align: left;
    }
    .img-frame {
      border: 1px solid #444;
      padding: 5px;
      background: #000;
      border-radius: 4px;
      display: inline-block;
      max-width: 100%;
    }
    .preview-img {
      max-width: 100%;
      max-height: 400px;
      display: block;
    }

    /* Action Button */
    .scan-btn {
      width: 100%;
      max-width: 400px;
      margin: 20px auto 0 auto;
      padding: 15px;
      background: linear-gradient(135deg, #990000, #ff2a2a);
      border: none;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s;
      display: block;
    }
    .scan-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 5px 20px rgba(255, 42, 42, 0.4);
    }
    .scan-btn:disabled { opacity: 0.6; cursor: not-allowed; background: #444; }

    /* Results Grid */
    .results-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      animation: fadeIn 0.5s ease;
    }

    /* OCR Terminal */
    .terminal-box {
      background: #000;
      border: 1px solid #333;
      border-radius: 6px;
      padding: 20px;
      font-family: var(--font-tech);
      height: fit-content;
    }
    .terminal-header {
      color: #888;
      border-bottom: 1px solid #333;
      padding-bottom: 10px;
      margin-bottom: 15px;
      font-size: 0.9rem;
      text-transform: uppercase;
    }
    .ocr-content {
      color: var(--neon-green);
      font-size: 0.85rem;
      white-space: pre-wrap;
      line-height: 1.5;
      max-height: 400px;
      overflow-y: auto;
    }
    .ocr-content::-webkit-scrollbar { width: 6px; }
    .ocr-content::-webkit-scrollbar-thumb { background: #333; }

    /* Analysis Report */
    .report-box {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 20px;
    }
    
    .risk-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      background: #111;
      padding: 15px;
      border-radius: 4px;
    }
    .risk-score { font-size: 1.2rem; color: #fff; }
    .risk-level { font-family: var(--font-tech); font-weight: bold; padding: 4px 8px; border-radius: 4px; }
    
    .level-high { color: var(--primary-red); border: 1px solid var(--primary-red); background: rgba(255,42,42,0.1); }
    .level-medium { color: var(--neon-orange); border: 1px solid var(--neon-orange); background: rgba(255,145,0,0.1); }
    .level-low { color: var(--neon-green); border: 1px solid var(--neon-green); background: rgba(0,230,118,0.1); }

    .recommendation-box {
      padding: 15px;
      border-left: 3px solid #fff;
      background: rgba(255,255,255,0.05);
      margin-bottom: 20px;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    /* AI Analysis Sections */
    .ai-analysis-section {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .ai-section {
      background: rgba(59, 130, 246, 0.1);
      border: 1px solid var(--ai-blue);
      border-radius: 6px;
      overflow: hidden;
    }

    .ai-section.warning {
      background: rgba(255, 42, 42, 0.1);
      border-color: var(--primary-red);
    }

    .ai-section.advice {
      background: rgba(0, 230, 118, 0.1);
      border-color: var(--neon-green);
    }

    .section-header {
      background: rgba(0,0,0,0.3);
      padding: 10px 15px;
      font-weight: bold;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .ai-icon {
      font-size: 1.1rem;
    }

    .ai-content {
      padding: 15px;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .ai-content.reasoning {
      color: #bfdbfe;
    }

    .ai-content p {
      margin: 0;
    }

    /* Scam Type Badge */
    .scam-type-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
      border: 1px solid var(--ai-purple);
      padding: 8px 16px;
      border-radius: 20px;
      margin-bottom: 15px;
      font-size: 1rem;
      color: #c4b5fd;
    }

    /* Method Badge */
    .method-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: 0.75rem;
      padding: 4px 8px;
      border-radius: 4px;
      margin-left: 10px;
      font-family: var(--font-tech);
    }

    .method-ai {
      background: rgba(59, 130, 246, 0.2);
      color: var(--ai-blue);
      border: 1px solid var(--ai-blue);
    }

    .method-fallback {
      background: rgba(255, 165, 0, 0.2);
      color: var(--neon-orange);
      border: 1px solid var(--neon-orange);
    }

    /* Data Section */
    .data-section { margin-top: 20px; }
    .data-title { color: var(--text-muted); font-size: 0.85rem; font-family: var(--font-tech); margin-bottom: 10px; text-transform: uppercase; border-bottom: 1px dashed #333; display: inline-block; }
    
    .tags-list { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
    .tag-item { background: #222; padding: 5px 10px; border-radius: 4px; font-size: 0.85rem; color: #ccc; border: 1px solid #444; }
    .tag-danger { border-color: var(--primary-red); color: var(--primary-red); }
    .tag-warning { border-color: var(--neon-orange); color: var(--neon-orange); }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

    /* Mobile */
    @media (max-width: 768px) {
      .results-grid { grid-template-columns: 1fr; }
      .page-title { font-size: 1.5rem; }
    }
  `}),u.jsxs("h1",{className:"page-title",children:["🖼️ Visual Threat ",u.jsx("span",{children:"Analyzer"})]}),u.jsx("p",{className:"page-desc",children:"Upload screenshots of suspicious emails, SMS, or chats. Our AI will analyze the content and provide intelligent scam detection."}),u.jsxs("div",{className:"analyzer-container",children:[u.jsxs("div",{className:"upload-card",children:[u.jsxs("label",{className:"file-drop-area",children:[u.jsx("span",{className:"file-label",children:l?"✅ IMAGE LOADED (CLICK TO CHANGE)":"📂 DRAG & DROP OR CLICK TO UPLOAD SCREENSHOT"}),u.jsx("input",{type:"file",accept:"image/*",onChange:S})]}),l&&u.jsxs("div",{className:"preview-section",children:[u.jsx("span",{className:"preview-header",children:"Target Acquired:"}),u.jsx("div",{className:"img-frame",children:u.jsx("img",{src:l,alt:"preview",className:"preview-img"})})]}),u.jsx("button",{onClick:v,disabled:s||!l,className:"scan-btn",children:s?"🤖 AI ANALYZING...":"🔍 SCAN FOR SCAMS"})]}),(f||m)&&u.jsxs("div",{className:"results-grid",children:[f&&u.jsxs("div",{className:"terminal-box",children:[u.jsx("div",{className:"terminal-header",children:"Raw Data Extraction"}),u.jsx("div",{className:"ocr-content",children:f})]}),m&&u.jsxs("div",{className:"report-box",children:[u.jsxs("div",{className:"terminal-header",children:["Threat Assessment",b==="AI"&&u.jsx("span",{className:"method-badge method-ai",children:"🤖 AI Powered"}),b==="fallback"&&u.jsx("span",{className:"method-badge method-fallback",children:"📋 Pattern Match"})]}),m.scamType&&u.jsx("div",{className:"scam-type-badge",children:u.jsxs("span",{children:["🎯 Detected: ",m.scamType]})}),u.jsxs("div",{className:"risk-header",children:[u.jsxs("div",{className:"risk-score",children:["RISK SCORE: ",m.score,"/100"]}),u.jsx("div",{className:`risk-level level-${m.risk?.toLowerCase()}`,children:m.risk})]}),u.jsx("div",{className:"recommendation-box",children:B()}),Z(),u.jsxs("div",{className:"data-section",children:[u.jsx("span",{className:"data-title",children:"Red Flags Detected"}),m.redFlags?.length===0?u.jsx("p",{style:{color:"#666",fontStyle:"italic",fontSize:"0.9rem"},children:"No specific red flags identified."}):u.jsx("ul",{className:"tags-list",children:m.redFlags?.map((w,A)=>u.jsxs("li",{className:"tag-item tag-danger",children:["⚠️ ",w.flag||w]},A))})]}),m.analysis?.detectedUrls?.length>0&&u.jsxs("div",{className:"data-section",children:[u.jsx("span",{className:"data-title",children:"Suspicious Links"}),u.jsx("ul",{className:"tags-list",children:m.analysis.detectedUrls.map((w,A)=>u.jsxs("li",{className:"tag-item tag-warning",children:["🔗 ",w]},A))})]}),m.analysis?.detectedPhones?.length>0&&u.jsxs("div",{className:"data-section",children:[u.jsx("span",{className:"data-title",children:"Contact Numbers"}),u.jsx("ul",{className:"tags-list",children:m.analysis.detectedPhones.map((w,A)=>u.jsxs("li",{className:"tag-item",children:["📞 ",w]},A))})]})]})]})]})]})}const B1=l=>Mt.post("/auth/register",l),H1=l=>Mt.post("/auth/login",l);function q1(){or();const[l,o]=j.useState({email:"",password:""}),[s,c]=j.useState(!1),f=y=>{o({...l,[y.target.name]:y.target.value})},p=async y=>{y.preventDefault(),c(!0);try{const b=await H1(l);alert(b.data.message),hx(b.data.token,b.data.user),b.data.user.role==="admin"?window.location.href="/admin":window.location.href="/"}catch(b){alert(b?.response?.data?.message||"Login failed"),console.log(b)}finally{c(!1)}};return u.jsxs("div",{className:"login-container",style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${_t})`},children:[u.jsx("style",{children:`
    :root {
      --primary-red: #ff2a2a;
      --bg-dark: #050505;
      --card-bg: rgba(20, 20, 20, 0.95);
      --text-main: #ffffff;
      --text-muted: #888888;
      --font-tech: 'Courier New', monospace;
      --font-main: 'Inter', sans-serif;
    }

    .login-container {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      background-size: cover;
      background-position: center;
      font-family: var(--font-main);
    }

    .login-card {
      background: var(--card-bg);
      width: 100%;
      max-width: 400px;
      padding: 40px;
      border-radius: 8px;
      border: 1px solid #333;
      border-left: 4px solid var(--primary-red);
      box-shadow: 0 10px 40px rgba(0,0,0,0.8);
      backdrop-filter: blur(5px);
      animation: fadeIn 0.5s ease-out;
    }

    .login-title {
      color: var(--text-main);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 1.8rem;
      margin-bottom: 30px;
      text-align: center;
      border-bottom: 1px solid #333;
      padding-bottom: 15px;
    }
    .login-title span { color: var(--primary-red); }

    .form-group {
      margin-bottom: 20px;
    }

    .custom-input {
      width: 100%;
      padding: 14px;
      background: #0a0a0a;
      border: 1px solid #333;
      color: #fff;
      border-radius: 4px;
      font-family: var(--font-tech);
      box-sizing: border-box; /* Important for responsive width */
      transition: all 0.3s ease;
    }

    .custom-input:focus {
      outline: none;
      border-color: var(--primary-red);
      box-shadow: 0 0 10px rgba(255, 42, 42, 0.2);
    }

    .login-btn {
      width: 100%;
      padding: 15px;
      background: linear-gradient(135deg, #cc0000 0%, #ff2a2a 100%);
      border: none;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
      transition: all 0.3s ease;
    }

    .login-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 5px 20px rgba(255, 42, 42, 0.4);
    }

    .login-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: #444;
    }

    .login-footer {
      margin-top: 25px;
      text-align: center;
      color: var(--text-muted);
      font-size: 0.9rem;
    }

    .login-link {
      color: var(--primary-red);
      text-decoration: none;
      font-weight: bold;
      transition: color 0.2s;
    }
    .login-link:hover {
      color: #fff;
      text-decoration: underline;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Mobile Tweaks */
    @media (max-width: 480px) {
      .login-card { padding: 30px 20px; }
      .login-title { font-size: 1.5rem; }
    }
  `}),u.jsxs("div",{className:"login-card",children:[u.jsxs("h1",{className:"login-title",children:["🔐 System ",u.jsx("span",{children:"Access"})]}),u.jsxs("form",{onSubmit:p,children:[u.jsx("div",{className:"form-group",children:u.jsx("input",{name:"email",type:"email",placeholder:"ENTER EMAIL",value:l.email,onChange:f,required:!0,className:"custom-input"})}),u.jsx("div",{className:"form-group",children:u.jsx("input",{name:"password",type:"password",placeholder:"ENTER PASSWORD",value:l.password,onChange:f,required:!0,className:"custom-input"})}),u.jsx("button",{type:"submit",disabled:s,className:"login-btn",children:s?"AUTHENTICATING...":"LOGIN"}),u.jsxs("p",{className:"login-footer",children:["New agent?"," ",u.jsx("a",{href:"/register",className:"login-link",children:"Create secure account"})]})]})]})]})}function Y1(){const l=or(),[o,s]=j.useState({name:"",email:"",password:""}),[c,f]=j.useState(!1),p=b=>{s({...o,[b.target.name]:b.target.value})},m=async b=>{b.preventDefault(),f(!0);try{const g=await B1(o);alert(g.data.message),l("/login",{state:{email:o.email}})}catch(g){alert(g?.response?.data?.message||"Registration failed"),console.log(g)}finally{f(!1)}};return u.jsxs("div",{className:"reg-container",style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${_t})`},children:[u.jsx("style",{children:`
    :root {
      --primary-red: #ff2a2a;
      --bg-dark: #050505;
      --card-bg: rgba(20, 20, 20, 0.95);
      --text-main: #ffffff;
      --text-muted: #888888;
      --font-tech: 'Courier New', monospace;
      --font-main: 'Inter', sans-serif;
    }

    .reg-container {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      font-family: var(--font-main);
    }

    .reg-card {
      background: var(--card-bg);
      width: 100%;
      max-width: 450px;
      padding: 40px;
      border-radius: 8px;
      border: 1px solid #333;
      border-right: 4px solid var(--primary-red);
      box-shadow: 0 15px 50px rgba(0,0,0,0.8);
      backdrop-filter: blur(5px);
      animation: slideUp 0.5s ease-out;
    }

    .reg-title {
      color: var(--text-main);
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 1.8rem;
      margin-bottom: 10px;
      text-align: center;
    }
    
    .reg-subtitle {
      color: var(--text-muted);
      text-align: center;
      margin-bottom: 30px;
      font-size: 0.9rem;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .custom-input {
      width: 100%;
      padding: 14px;
      background: #0a0a0a;
      border: 1px solid #333;
      color: #fff;
      border-radius: 4px;
      font-family: var(--font-tech);
      box-sizing: border-box;
      transition: all 0.3s ease;
    }

    .custom-input:focus {
      outline: none;
      border-color: var(--primary-red);
      background: #111;
      box-shadow: 0 0 12px rgba(255, 42, 42, 0.2);
    }

    .reg-btn {
      width: 100%;
      padding: 15px;
      background: linear-gradient(135deg, #cc0000 0%, #ff2a2a 100%);
      border: none;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;
      transition: all 0.3s ease;
    }

    .reg-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 5px 20px rgba(255, 42, 42, 0.4);
    }

    .reg-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: #444;
    }

    .reg-footer {
      margin-top: 25px;
      text-align: center;
      color: var(--text-muted);
      font-size: 0.9rem;
      border-top: 1px solid #333;
      padding-top: 20px;
    }

    .reg-link {
      color: var(--primary-red);
      text-decoration: none;
      font-weight: bold;
      transition: color 0.2s;
    }
    .reg-link:hover {
      color: #fff;
      text-decoration: underline;
    }

    @keyframes slideUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Mobile Responsiveness */
    @media (max-width: 480px) {
      .reg-card { padding: 30px 20px; border-right: none; border-top: 4px solid var(--primary-red); }
      .reg-title { font-size: 1.5rem; }
    }
  `}),u.jsxs("div",{className:"reg-card",children:[u.jsx("h1",{className:"reg-title",children:"📝 New Agent"}),u.jsx("p",{className:"reg-subtitle",children:"Join the simulation network"}),u.jsxs("form",{onSubmit:m,children:[u.jsx("div",{className:"form-group",children:u.jsx("input",{name:"name",type:"text",placeholder:"FULL NAME",value:o.name,onChange:p,required:!0,className:"custom-input"})}),u.jsx("div",{className:"form-group",children:u.jsx("input",{name:"email",type:"email",placeholder:"EMAIL ADDRESS",value:o.email,onChange:p,required:!0,className:"custom-input"})}),u.jsx("div",{className:"form-group",children:u.jsx("input",{name:"password",type:"password",placeholder:"CREATE PASSWORD",value:o.password,onChange:p,required:!0,className:"custom-input"})}),u.jsx("button",{type:"submit",disabled:c,className:"reg-btn",children:c?"INITIALIZING...":"REGISTER"})]}),u.jsxs("div",{className:"reg-footer",children:["Already have an account?"," ",u.jsx("a",{href:"/login",className:"reg-link",children:"Log In"})]})]})]})}function G1(){const[l,o]=j.useState([]),[s,c]=j.useState(!0),[f,p]=j.useState([]),[m,y]=j.useState(!0),b=async()=>{try{c(!0);const w=await Ee.get("http://localhost:5001/api/admin/pending",{headers:{Authorization:`Bearer ${ft()}`}});o(w.data||[])}catch(w){console.log("❌ Pending reports error:",w)}finally{c(!1)}},g=async w=>{try{await Ee.put(`http://localhost:5001/api/admin/verify/${w}`,{},{headers:{Authorization:`Bearer ${ft()}`}}),b()}catch(A){console.log(A),alert(A?.response?.data?.message||"Verify report failed")}},S=async w=>{try{await Ee.put(`http://localhost:5001/api/admin/reject/${w}`,{},{headers:{Authorization:`Bearer ${ft()}`}}),b()}catch(A){console.log(A),alert(A?.response?.data?.message||"Reject report failed")}},v=async()=>{try{y(!0);const w=await Ee.get("http://localhost:5001/api/blogs/admin/pending",{headers:{Authorization:`Bearer ${ft()}`}});p(w.data||[])}catch(w){console.log("❌ Pending blogs error:",w)}finally{y(!1)}},B=async w=>{try{await Ee.put(`http://localhost:5001/api/blogs/admin/verify/${w}`,{},{headers:{Authorization:`Bearer ${ft()}`}}),v()}catch(A){console.log(A),alert(A?.response?.data?.message||"Verify blog failed")}},Z=async w=>{try{const A=prompt("Enter rejection reason (optional):")||"Rejected";await Ee.put(`http://localhost:5001/api/blogs/admin/reject/${w}`,{adminNote:A},{headers:{Authorization:`Bearer ${ft()}`}}),v()}catch(A){console.log(A),alert(A?.response?.data?.message||"Reject blog failed")}};return j.useEffect(()=>{b(),v()},[]),u.jsxs("div",{className:"admin-dashboard",style:{backgroundImage:`linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.95)), url(${_t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundAttachment:"fixed"},children:[u.jsx("style",{children:`
    :root {
      --primary-red: #ff2a2a;
      --neon-green: #00e676;
      --bg-dark: #050505;
      --card-bg: rgba(22, 22, 22, 0.95);
      --border-color: #333;
      --text-main: #e0e0e0;
      --text-muted: #888;
      --font-tech: 'Courier New', monospace;
      --font-main: 'Inter', sans-serif;
    }

    .admin-dashboard {
      min-height: 100vh;
      color: var(--text-main);
      font-family: var(--font-main);
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .dashboard-header {
      text-align: center;
      margin-bottom: 50px;
      border-bottom: 2px solid var(--primary-red);
      padding-bottom: 20px;
      width: 100%;
      max-width: 1200px;
    }

    .page-title {
      font-size: 2.5rem;
      text-transform: uppercase;
      letter-spacing: 4px;
      margin: 0;
      text-shadow: 0 0 15px rgba(255, 42, 42, 0.5);
    }
    .page-title span { color: var(--primary-red); }

    /* Sections */
    .section-container {
      width: 100%;
      max-width: 1200px;
      margin-bottom: 60px;
    }

    .section-title {
      font-size: 1.5rem;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 10px;
      color: #fff;
      border-left: 5px solid;
      padding-left: 15px;
    }
    .title-scam { border-color: var(--primary-red); }
    .title-blog { border-color: var(--neon-green); }

    /* Grid Layout */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 25px;
    }

    /* Admin Card Shared Styles */
    .admin-card {
      background: var(--card-bg);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.2s, box-shadow 0.2s;
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(5px);
    }
    .admin-card:hover {
      border-color: #555;
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.8);
    }

    /* Scams Specific */
    .scam-card { border-top: 3px solid var(--primary-red); }
    
    .risk-badge {
      position: absolute;
      top: 15px;
      right: 15px;
      font-family: var(--font-tech);
      font-size: 0.8rem;
      padding: 4px 8px;
      background: rgba(255, 42, 42, 0.15);
      color: var(--primary-red);
      border: 1px solid var(--primary-red);
      border-radius: 4px;
    }

    /* Blogs Specific */
    .blog-card { border-top: 3px solid var(--neon-green); }
    
    .blog-img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 4px;
      border: 1px solid #333;
      margin: 10px 0;
      opacity: 0.8;
      transition: opacity 0.3s;
    }
    .admin-card:hover .blog-img { opacity: 1; }

    /* Typography */
    .card-title { font-size: 1.2rem; margin: 0 0 10px 0; color: #fff; padding-right: 60px; } /* padding for badge */
    .card-desc { font-size: 0.9rem; color: #aaa; line-height: 1.5; margin-bottom: 15px; flex-grow: 1; }
    
    .meta-data {
      font-family: var(--font-tech);
      font-size: 0.75rem;
      color: var(--text-muted);
      border-top: 1px dashed #333;
      padding-top: 10px;
      margin-bottom: 15px;
    }
    .meta-row { display: flex; justify-content: space-between; margin-bottom: 5px; }

    /* Actions */
    .action-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .btn {
      padding: 10px;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      font-size: 0.8rem;
      transition: all 0.3s;
    }
    .btn-verify {
      background: rgba(0, 230, 118, 0.1);
      color: var(--neon-green);
      border: 1px solid var(--neon-green);
    }
    .btn-verify:hover { background: var(--neon-green); color: #000; }

    .btn-reject {
      background: rgba(255, 42, 42, 0.1);
      color: var(--primary-red);
      border: 1px solid var(--primary-red);
    }
    .btn-reject:hover { background: var(--primary-red); color: #fff; }

    /* States */
    .empty-state {
      text-align: center;
      padding: 40px;
      border: 1px dashed #444;
      background: rgba(0,0,0,0.3);
      color: #666;
      font-family: var(--font-tech);
      border-radius: 8px;
    }
    .loading-state { color: var(--primary-red); font-family: var(--font-tech); animation: blink 1s infinite; }
    
    @keyframes blink { 50% { opacity: 0.5; } }

    /* Mobile */
    @media (max-width: 600px) {
      .cards-grid { grid-template-columns: 1fr; }
      .page-title { font-size: 1.8rem; }
      .section-title { font-size: 1.2rem; }
    }
  `}),u.jsx("header",{className:"dashboard-header",children:u.jsxs("h1",{className:"page-title",children:["🛡️ Command ",u.jsx("span",{children:"Center"})]})}),u.jsxs("div",{className:"section-container",children:[u.jsxs("h2",{className:"section-title title-scam",children:["🚨 Incoming Threats (",l.length,")"]}),s?u.jsx("p",{className:"loading-state",children:"SCANNING NETWORK FOR REPORTS..."}):l.length===0?u.jsx("div",{className:"empty-state",children:"✅ SYSTEM CLEAN: NO PENDING REPORTS"}):u.jsx("div",{className:"cards-grid",children:l.map(w=>u.jsxs("div",{className:"admin-card scam-card",children:[u.jsxs("div",{className:"risk-badge",children:["RISK: ",w.susceptibilityScore]}),u.jsx("h3",{className:"card-title",children:w.title}),u.jsx("p",{className:"card-desc",children:w.description?.length>120?w.description.slice(0,120)+"...":w.description}),u.jsxs("div",{className:"meta-data",children:[u.jsxs("div",{className:"meta-row",children:[u.jsx("span",{children:"TYPE:"})," ",u.jsx("b",{children:w.scamType.toUpperCase()})]}),u.jsxs("div",{className:"meta-row",children:[u.jsx("span",{children:"PLATFORM:"})," ",u.jsx("b",{children:w.platform.toUpperCase()})]})]}),u.jsxs("div",{className:"action-row",children:[u.jsx("button",{onClick:()=>g(w._id),className:"btn btn-verify",children:"✓ Verify"}),u.jsx("button",{onClick:()=>S(w._id),className:"btn btn-reject",children:"✕ Reject"})]})]},w._id))})]}),u.jsxs("div",{className:"section-container",children:[u.jsxs("h2",{className:"section-title title-blog",children:["📝 Intel Verification (",f.length,")"]}),m?u.jsx("p",{className:"loading-state",children:"ACCESSING ARCHIVES..."}):f.length===0?u.jsx("div",{className:"empty-state",children:"✅ QUEUE EMPTY: NO PENDING BLOGS"}):u.jsx("div",{className:"cards-grid",children:f.map(w=>u.jsxs("div",{className:"admin-card blog-card",children:[u.jsx("h3",{className:"card-title",children:w.title}),w.subtitle&&u.jsx("p",{style:{color:"var(--neon-green)",fontSize:"0.8rem",fontStyle:"italic",marginBottom:"10px"},children:w.subtitle}),w.images?.length>0&&w.images[0]&&u.jsx("img",{src:w.images[0],alt:"preview",className:"blog-img"}),u.jsx("p",{className:"card-desc",children:w.body?.length>100?w.body.slice(0,100)+"...":w.body}),u.jsxs("div",{className:"meta-data",children:[u.jsxs("div",{className:"meta-row",children:[u.jsx("span",{children:"AGENT:"})," ",u.jsx("b",{children:w.author?.name||"Unknown"})]}),u.jsxs("div",{className:"meta-row",children:[u.jsx("span",{children:"ID:"})," ",w.author?.email]})]}),u.jsxs("div",{className:"action-row",children:[u.jsx("button",{onClick:()=>B(w._id),className:"btn btn-verify",children:"✓ Publish"}),u.jsx("button",{onClick:()=>Z(w._id),className:"btn btn-reject",children:"✕ Reject"})]})]},w._id))})]})]})}function X1(){const l=nu(),[o,s]=j.useState([]),[c,f]=j.useState(!0),p=async()=>{try{f(!0);const b=await Ee.get("http://localhost:5000/api/blogs/admin/pending",{headers:{Authorization:`Bearer ${ft()}`}});s(b.data||[])}catch(b){console.log(b),alert(b?.response?.data?.message||"Failed to load pending blogs")}finally{f(!1)}};j.useEffect(()=>{p()},[]);const m=async b=>{try{await Ee.put(`http://localhost:5000/api/blogs/admin/verify/${b}`,{},{headers:{Authorization:`Bearer ${ft()}`}}),alert("✅ Blog Verified!"),p()}catch(g){console.log(g),alert(g?.response?.data?.message||"Verify failed")}},y=async b=>{try{const g=prompt("Enter rejection reason (optional):")||"Rejected";await Ee.put(`http://localhost:5001/api/blogs/admin/reject/${b}`,{adminNote:g},{headers:{Authorization:`Bearer ${ft()}`}}),alert("❌ Blog Rejected!"),p()}catch(g){console.log(g),alert(g?.response?.data?.message||"Reject failed")}};return!l||l.role!=="admin"?u.jsx("div",{style:{padding:"20px"},children:u.jsx("h2",{children:"❌ Admin access only"})}):c?u.jsx("div",{style:{padding:"20px"},children:u.jsx("h2",{children:"Loading pending blogs..."})}):u.jsxs("div",{style:{padding:"20px"},children:[u.jsx("h1",{children:"🛡️ Admin Blog Verification"}),u.jsx("p",{style:{color:"#555"},children:"Pending blogs submitted by users (verify/reject)."}),o.length===0?u.jsx("h3",{children:"✅ No pending blogs right now."}):o.map(b=>u.jsxs("div",{style:{marginTop:"15px",padding:"15px",border:"1px solid #ccc",borderRadius:"10px",background:"#fff"},children:[u.jsx("h2",{style:{marginBottom:"5px"},children:b.title}),b.subtitle&&u.jsx("p",{style:{marginTop:"5px",fontStyle:"italic",color:"#444"},children:b.subtitle}),u.jsxs("p",{style:{color:"#666",fontSize:"13px"},children:["✍️ By: ",u.jsx("b",{children:b.author?.name})," (",b.author?.email,")"]}),u.jsxs("p",{style:{marginTop:"10px"},children:[b.body?.slice(0,200),"..."]}),b.images?.length>0&&u.jsx("img",{src:b.images[0],alt:"preview",style:{marginTop:"10px",width:"100%",maxWidth:"450px",borderRadius:"10px",border:"1px solid #ddd"}}),u.jsxs("div",{style:{marginTop:"12px"},children:[u.jsx("button",{onClick:()=>m(b._id),style:{padding:"10px",cursor:"pointer",marginRight:"10px",background:"green",color:"white",border:"none"},children:"✅ Verify"}),u.jsx("button",{onClick:()=>y(b._id),style:{padding:"10px",cursor:"pointer",background:"red",color:"white",border:"none"},children:"❌ Reject"})]})]},b._id))]})}function mn({children:l,role:o}){const s=nu();return s?o&&s.role!==o?u.jsx(Am,{to:"/",replace:!0}):l:u.jsx(Am,{to:"/login",replace:!0})}function Q1(){const l=nu();return u.jsxs(rx,{children:[u.jsxs("nav",{className:"navbar",children:[u.jsx(Kt,{to:"/",children:u.jsx("img",{src:Oh,alt:"ScamShield",className:"nav-logo"})}),u.jsxs("div",{className:"nav-links",children:[u.jsx(Kt,{to:"/leaderboard",children:"🏆 Leaderboard"}),l&&u.jsx(Kt,{to:"/profile",children:"👤 Profile"}),l?u.jsx("button",{className:"nav-btn logout",onClick:()=>{gx(),window.location.href="/login"},children:"Logout"}):u.jsx(Kt,{to:"/login",className:"nav-btn",children:"Login"})]})]}),u.jsxs(Uy,{children:[u.jsx(ot,{path:"/",element:u.jsx(bx,{})}),u.jsx(ot,{path:"/login",element:u.jsx(q1,{})}),u.jsx(ot,{path:"/register",element:u.jsx(Y1,{})}),u.jsx(ot,{path:"/profile",element:u.jsx(mn,{children:u.jsx(Iv,{})})}),u.jsx(ot,{path:"/password-tool",element:u.jsx(Pv,{})}),u.jsx(ot,{path:"/phishing",element:u.jsx(mn,{children:u.jsx(a1,{})})}),u.jsx(ot,{path:"/search",element:u.jsx(mn,{children:u.jsx(i1,{})})}),u.jsx(ot,{path:"/report",element:u.jsx(mn,{children:u.jsx(o1,{})})}),u.jsx(ot,{path:"/blogs",element:u.jsx(s1,{})}),u.jsx(ot,{path:"/blogs/:id",element:u.jsx(c1,{})}),u.jsx(ot,{path:"/create-blog",element:u.jsx(u1,{})}),u.jsx(ot,{path:"/leaderboard",element:u.jsx(mn,{children:u.jsx(f1,{})})}),u.jsx(ot,{path:"/screenshot-analyzer",element:u.jsx(k1,{})}),u.jsx(ot,{path:"/admin",element:u.jsx(mn,{role:"admin",children:u.jsx(G1,{})})}),u.jsx(ot,{path:"/admin/blogs",element:u.jsx(mn,{role:"admin",children:u.jsx(X1,{})})})]}),u.jsx("style",{children:`
        .navbar {
          padding: 14px 20px;
          background: #0b0b0b;
          border-bottom: 1px solid rgba(255,255,255,0.6);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .nav-logo {
          height: 40px;
        }

        .nav-links {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
        }

        .nav-btn {
          border: 1px solid #ff3b3b;
          padding: 7px 14px;
          border-radius: 10px;
          background: transparent;
          color: #fff;
          cursor: pointer;
          font-weight: 600;
        }

        .logout {
          background: #ff3b3b;
          border: none;
        }

        @media (max-width: 600px) {
          .navbar {
            flex-direction: column;
            gap: 12px;
          }
        }
      `})]})}kb.createRoot(document.getElementById("root")).render(u.jsx(j.StrictMode,{children:u.jsx(Q1,{})}));
