/*! For license information please see main.41da50d4.chunk.js.LICENSE.txt */
(this["webpackJsonpbuild-order-builder"]=this["webpackJsonpbuild-order-builder"]||[]).push([[0],[function(t,e,n){"use strict";t.exports=n(4)},function(t,e,n){"use strict";t.exports=n(3)},function(t,e,n){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function u(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(t,e){for(var n,o,a=u(t),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))i.call(n,l)&&(a[l]=n[l]);if(r){o=r(n);for(var p=0;p<o.length;p++)s.call(n,o[p])&&(a[o[p]]=n[o[p]])}}return a}},function(t,e,n){"use strict";var r=n(2),i=60103,s=60106;e.Fragment=60107,e.StrictMode=60108,e.Profiler=60114;var u=60109,o=60110,a=60112;e.Suspense=60113;var c=60115,l=60116;if("function"===typeof Symbol&&Symbol.for){var p=Symbol.for;i=p("react.element"),s=p("react.portal"),e.Fragment=p("react.fragment"),e.StrictMode=p("react.strict_mode"),e.Profiler=p("react.profiler"),u=p("react.provider"),o=p("react.context"),a=p("react.forward_ref"),e.Suspense=p("react.suspense"),c=p("react.memo"),l=p("react.lazy")}var h="function"===typeof Symbol&&Symbol.iterator;function f(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function d(t,e,n){this.props=t,this.context=e,this.refs=j,this.updater=n||m}function b(){}function O(t,e,n){this.props=t,this.context=e,this.refs=j,this.updater=n||m}d.prototype.isReactComponent={},d.prototype.setState=function(t,e){if("object"!==typeof t&&"function"!==typeof t&&null!=t)throw Error(f(85));this.updater.enqueueSetState(this,t,e,"setState")},d.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},b.prototype=d.prototype;var S=O.prototype=new b;S.constructor=O,r(S,d.prototype),S.isPureReactComponent=!0;var g={current:null},x=Object.prototype.hasOwnProperty,y={key:!0,ref:!0,__self:!0,__source:!0};function v(t,e,n){var r,s={},u=null,o=null;if(null!=e)for(r in void 0!==e.ref&&(o=e.ref),void 0!==e.key&&(u=""+e.key),e)x.call(e,r)&&!y.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(1===a)s.children=n;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];s.children=c}if(t&&t.defaultProps)for(r in a=t.defaultProps)void 0===s[r]&&(s[r]=a[r]);return{$$typeof:i,type:t,key:u,ref:o,props:s,_owner:g.current}}function k(t){return"object"===typeof t&&null!==t&&t.$$typeof===i}var U=/\/+/g;function A(t,e){return"object"===typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function M(t,e,n,r,u){var o=typeof t;"undefined"!==o&&"boolean"!==o||(t=null);var a=!1;if(null===t)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case i:case s:a=!0}}if(a)return u=u(a=t),t=""===r?"."+A(a,0):r,Array.isArray(u)?(n="",null!=t&&(n=t.replace(U,"$&/")+"/"),M(u,e,n,"",(function(t){return t}))):null!=u&&(k(u)&&(u=function(t,e){return{$$typeof:i,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(u,n+(!u.key||a&&a.key===u.key?"":(""+u.key).replace(U,"$&/")+"/")+t)),e.push(u)),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var l=r+A(o=t[c],c);a+=M(o,e,n,l,u)}else if("function"===typeof(l=function(t){return null===t||"object"!==typeof t?null:"function"===typeof(t=h&&t[h]||t["@@iterator"])?t:null}(t)))for(t=l.call(t),c=0;!(o=t.next()).done;)a+=M(o=o.value,e,n,l=r+A(o,c++),u);else if("object"===o)throw e=""+t,Error(f(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return a}function C(t,e,n){if(null==t)return t;var r=[],i=0;return M(t,r,"","",(function(t){return e.call(n,t,i++)})),r}function w(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var P={current:null};function _(){var t=P.current;if(null===t)throw Error(f(321));return t}var K={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:r};e.Children={map:C,forEach:function(t,e,n){C(t,(function(){e.apply(this,arguments)}),n)},count:function(t){var e=0;return C(t,(function(){e++})),e},toArray:function(t){return C(t,(function(t){return t}))||[]},only:function(t){if(!k(t))throw Error(f(143));return t}},e.Component=d,e.PureComponent=O,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,e.cloneElement=function(t,e,n){if(null===t||void 0===t)throw Error(f(267,t));var s=r({},t.props),u=t.key,o=t.ref,a=t._owner;if(null!=e){if(void 0!==e.ref&&(o=e.ref,a=g.current),void 0!==e.key&&(u=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(l in e)x.call(e,l)&&!y.hasOwnProperty(l)&&(s[l]=void 0===e[l]&&void 0!==c?c[l]:e[l])}var l=arguments.length-2;if(1===l)s.children=n;else if(1<l){c=Array(l);for(var p=0;p<l;p++)c[p]=arguments[p+2];s.children=c}return{$$typeof:i,type:t.type,key:u,ref:o,props:s,_owner:a}},e.createContext=function(t,e){return void 0===e&&(e=null),(t={$$typeof:o,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:t},t.Consumer=t},e.createElement=v,e.createFactory=function(t){var e=v.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:a,render:t}},e.isValidElement=k,e.lazy=function(t){return{$$typeof:l,_payload:{_status:-1,_result:t},_init:w}},e.memo=function(t,e){return{$$typeof:c,type:t,compare:void 0===e?null:e}},e.useCallback=function(t,e){return _().useCallback(t,e)},e.useContext=function(t,e){return _().useContext(t,e)},e.useDebugValue=function(){},e.useEffect=function(t,e){return _().useEffect(t,e)},e.useImperativeHandle=function(t,e,n){return _().useImperativeHandle(t,e,n)},e.useLayoutEffect=function(t,e){return _().useLayoutEffect(t,e)},e.useMemo=function(t,e){return _().useMemo(t,e)},e.useReducer=function(t,e,n){return _().useReducer(t,e,n)},e.useRef=function(t){return _().useRef(t)},e.useState=function(t){return _().useState(t)},e.version="17.0.2"},function(t,e,n){"use strict";n(2);var r=n(1),i=60103;if(e.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var s=Symbol.for;i=s("react.element"),e.Fragment=s("react.fragment")}var u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,n){var r,s={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(l=e.ref),e)o.call(e,r)&&!a.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===s[r]&&(s[r]=e[r]);return{$$typeof:i,type:t,key:c,ref:l,props:s,_owner:u.current}}e.jsx=c,e.jsxs=c},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){return!e||"object"!==p(e)&&"function"!==typeof e?o(t):e}function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=l(t);if(e){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}n.r(e);var m=n(1),j=n.n(m),d=n(0),b=function(t){c(n,t);var e=f(n);function n(t){var r;return i(this,n),(r=e.call(this,t)).chooseArmy=r.chooseArmy.bind(o(r)),r.nextStep=r.nextStep.bind(o(r)),r.state={steps:1,UKF:0,USA:0,SU:0,OW:0,Ostheer:0,unit1:"",unit2:"",unit3:"",unit4:"",unit5:"",unit6:"",quantity1:0,quantity2:0,quantity3:0,quantity4:0,quantity5:0,quantity6:0,currentunit:"","7.5cm le.IG Infantry Support Gun":"https://i.imgur.com/jeBHdas.png",Kubelwagon:"https://i.imgur.com/ltYDgug.png","Panzer II Luchs":"https://i.imgur.com/QJ3G2fT.png",Raktenwerfer:"https://i.imgur.com/nOvrd9j.png","Sd.Kfz 221 Scout Car":"https://i.imgur.com/kkIf6Kx.png","SdKfz 234 Puma Armored Car":"https://i.imgur.com/ZdjuxbP.png","SdKfz 251 Stuka Half-track":"https://i.imgur.com/HlwNKnG.png","SdKfz 251/17 Flak Half-track":"https://i.imgur.com/1yesYtO.png","SdKfz 251/20 Infrared Half-track":"https://i.imgur.com/ywwxiUX.png",Sturmpioneers:"https://i.imgur.com/gtTBLL6.png","sWS Supply Half-track":"https://i.imgur.com/lFbyGeN.png",Volksgrenadiers:"https://i.imgur.com/0Dl4GJi.png","Combat Engineers":"https://i.imgur.com/Fsjxiog.png",Conscripts:"https://i.imgur.com/8NuaQhh.png","Guards Infantry":"https://i.imgur.com/H0oHsXv.png","M1910 Maxim Machine Gun":"https://i.imgur.com/VzofTPL.png","M3A1 Scout Car":"https://i.imgur.com/8vZKKdF.png","M5 Half-track":"https://i.imgur.com/OnPBzcO.png","Penal Battalion":"https://i.imgur.com/cp3PUl1.png","PM-41 82mm Mortar Team":"https://i.imgur.com/GRRtiIT.png","HM38 120mm Mortar Team":"https://i.imgur.com/GRRtiIT.png","Scout Sniper":"https://i.imgur.com/btjrHfX.png","Shock Infantry":"https://i.imgur.com/X5iAriA.png","SU-76M Assault Gun":"https://i.imgur.com/PpuVc9A.png","T-70 Light Tank":"https://i.imgur.com/DkFM03U.png","ZiS-3 76mm Divisional Field Gun":"https://i.imgur.com/hevO2vD.png",Grenadiers:"https://i.imgur.com/k6KOVPS.png","GrW 34 Mortar Team":"https://i.imgur.com/ok0YoC0.png","MG42 Machine Gun":"https://i.imgur.com/c0c89Hw.png","Pak 40 AT Gun":"https://i.imgur.com/PbEhVYB.png",Panzergrenadiers:"https://i.imgur.com/J2wWqh2.png",Pioneers:"https://i.imgur.com/kkiNEOT.png","SdKfz 222 Scout Car":"https://i.imgur.com/zt2av25.png","SdKfz 250/7 Mortar Half-track":"https://i.imgur.com/M24eX0s.png","SdKfz 250 Half-track":"https://i.imgur.com/M24eX0s.png","SdKfz 251 Half-track":"https://i.imgur.com/tMKK426.png","Ostheer Sniper":"https://i.imgur.com/fsCkmky.png",".55 cal Armor-Piercing Sniper":"https://i.imgur.com/DFO7raw.png",AEC:"https://i.imgur.com/2yYCDn8.png","Assault Infantry":"https://i.imgur.com/a8PPWHa.png","Assault\xa0Officer":"https://i.imgur.com/8usBLqz.png",Commandos:"https://i.imgur.com/TuFPW2E.png","Engineer\xa0Recovery\xa0Squad":"https://i.imgur.com/BENXibo.png","Royal Engineers":"https://i.imgur.com/BENXibo.png","Infantry Squad":"https://i.imgur.com/YdDmNMv.png","M1 81mm Mortar Team":"https://i.imgur.com/JgIKxw3.png","QF 6-pounder AT gun":"https://i.imgur.com/bIq2u8S.png","Tank Hunter Infantry":"https://i.imgur.com/YdDmNMv.png","Universal\xa0Carrier":"https://i.imgur.com/zj5kBmD.png","Vickers\xa0Heavy\xa0Machine\xa0Gun":"https://i.imgur.com/CCoA1kx.png",Ambulance:"https://i.imgur.com/mclegG8.png","Assault Engineers":"https://i.imgur.com/PBLdFDF.png",Captain:"https://i.imgur.com/fVpNrG9.png",Lieutenant:"https://i.imgur.com/UKnEXKE.png","M1 57mm AT gun":"https://i.imgur.com/4HmEzIJ.png","M15A1 AA Half-track":"https://i.imgur.com/65ekUma.png","M20 Utility Car":"https://i.imgur.com/VRL2kwR.png","M2HB .50 cal Machine Gun":"https://i.imgur.com/dSWDRtR.png","M5A1 Stuart":"https://i.imgur.com/jc3a1jg.png","Mortar Team":"https://i.imgur.com/idACEZY.png","Pack Howitzer":"https://i.imgur.com/qKJzCKz.png",Pathfinders:"https://i.imgur.com/65zdTdi.png",Rangers:"https://i.imgur.com/svCe38R.png","Rear Echelon":"https://i.imgur.com/jvS1t4D.png",Rifleman:"https://i.imgur.com/zRpDi6V.png"},r}return u(n,[{key:"chooseArmy",value:function(t){t.preventDefault();var e=t.target.elements.armychoice.value.toString();console.log(e),"OWInput"===e&&this.setState((function(t){return{OW:1,Ostheer:0,SU:0,UKF:0,USA:0,unit1:"",unit2:"",unit3:"",unit4:"",unit5:"",unit6:"",steps:1}})),"OstheerInput"===e&&this.setState((function(t,e){return{OW:0,Ostheer:1,SU:0,UKF:0,USA:0,unit1:"",unit2:"",unit3:"",unit4:"",unit5:"",unit6:"",steps:1}})),"SUInput"===e&&this.setState((function(t,e){return{OW:0,Ostheer:0,SU:1,UKF:0,USA:0,unit1:"",unit2:"",unit3:"",unit4:"",unit5:"",unit6:"",steps:1}})),"UKFInput"===e&&this.setState((function(t,e){return{OW:0,Ostheer:0,SU:0,UKF:1,USA:0,unit1:"",unit2:"",unit3:"",unit4:"",unit5:"",unit6:"",steps:1}})),"USAInput"===e&&this.setState((function(t,e){return{OW:0,Ostheer:0,SU:0,UKF:0,USA:1,unit1:"",unit2:"",unit3:"",unit4:"",unit5:"",unit6:"",steps:1}})),console.log(this.state.OW)}},{key:"nextStep",value:function(t){t.preventDefault();var e=t.target.elements,n="unit"+this.state.steps,i="quantity"+this.state.steps;if(e.ostheerunits){var s=t.target.elements.ostheerunits.value.toString(),u=t.target.elements.quantity.value;this.setState((function(t){var e;return r(e={OW:0,Ostheer:t.Ostheer+1,SU:0,UKF:0,USA:0,steps:t.steps+1},n,s),r(e,"currentunit",[n]),r(e,i,u),e})),console.log("The Ostheer state count is: "+this.state.Ostheer)}if(e.owunits){s=t.target.elements.owunits.value.toString(),u=t.target.elements.quantity.value;this.setState((function(t){var e;return r(e={OW:t.OW+1,Ostheer:0,SU:0,UKF:0,USA:0,steps:t.steps+1},n,s),r(e,i,u),e})),console.log("The Oberkommando West state count is: "+this.state.OW)}if(e.suunits){s=t.target.elements.suunits.value.toString(),u=t.target.elements.quantity.value;this.setState((function(t){var e;return r(e={OW:0,Ostheer:0,SU:t.SU+1,UKF:0,USA:0,steps:t.steps+1},n,s),r(e,"currentunit",[n]),r(e,i,u),e})),console.log("The Soviet Union state count is: "+this.state.SU)}if(null!=e.ukfunits){s=t.target.elements.ukfunits.value.toString(),u=t.target.elements.quantity.value;this.setState((function(t){var e;return r(e={OW:0,Ostheer:0,SU:0,UKF:t.UKF+1,USA:0,steps:t.steps+1},n,s),r(e,"currentunit",[n]),r(e,i,u),e})),console.log("The UKF state count is: "+this.state.UKF)}if(e.usaunits){s=t.target.elements.usaunits.value.toString(),u=t.target.elements.quantity.value;this.setState((function(t){var e;return r(e={OW:0,Ostheer:0,SU:0,UKF:0,USA:t.USA+1,steps:t.steps+1},n,s),r(e,"currentunit",[n]),r(e,i,u),e})),console.log("The USA state count is: "+this.state.USA)}}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"header-fixed",children:[Object(d.jsx)("h1",{children:"COMPANY "}),Object(d.jsx)("h4",{children:"OF"}),Object(d.jsx)("h1",{children:" HEROES 2"})]}),Object(d.jsxs)("form",{onSubmit:this.chooseArmy,children:[Object(d.jsxs)("select",{name:"armychoice",id:"armychoice",children:[Object(d.jsx)("option",{value:"OWInput",children:"Oberkommando West"}),Object(d.jsx)("option",{value:"OstheerInput",children:"Ostheer"}),Object(d.jsx)("option",{value:"SUInput",children:"Soviet Union"}),Object(d.jsx)("option",{value:"UKFInput",children:"UKF"}),Object(d.jsx)("option",{value:"USAInput",children:"US Forces"})]}),Object(d.jsx)("button",{children:"Choose army"})]}),Object(d.jsxs)("div",{children:[this.state.OW>0?Object(d.jsx)(y,{nextStep:this.nextStep}):null,this.state.OW>1?Object(d.jsx)(y,{nextStep:this.nextStep}):null,this.state.OW>2?Object(d.jsx)(y,{nextStep:this.nextStep}):null,this.state.OW>3?Object(d.jsx)(y,{nextStep:this.nextStep}):null,this.state.OW>4?Object(d.jsx)(y,{nextStep:this.nextStep}):null,this.state.OW>5?Object(d.jsx)(y,{nextStep:this.nextStep}):null,this.state.Ostheer>0?Object(d.jsx)(x,{nextStep:this.nextStep}):null,this.state.Ostheer>1?Object(d.jsx)(x,{nextStep:this.nextStep}):null,this.state.Ostheer>2?Object(d.jsx)(x,{nextStep:this.nextStep}):null,this.state.Ostheer>3?Object(d.jsx)(x,{nextStep:this.nextStep}):null,this.state.Ostheer>4?Object(d.jsx)(x,{nextStep:this.nextStep}):null,this.state.Ostheer>5?Object(d.jsx)(x,{nextStep:this.nextStep}):null,this.state.SU>0?Object(d.jsx)(g,{nextStep:this.nextStep}):null,this.state.SU>1?Object(d.jsx)(g,{nextStep:this.nextStep}):null,this.state.SU>2?Object(d.jsx)(g,{nextStep:this.nextStep}):null,this.state.SU>3?Object(d.jsx)(g,{nextStep:this.nextStep}):null,this.state.SU>4?Object(d.jsx)(g,{nextStep:this.nextStep}):null,this.state.SU>5?Object(d.jsx)(g,{nextStep:this.nextStep}):null,this.state.USA>0?Object(d.jsx)(S,{nextStep:this.nextStep}):null,this.state.USA>1?Object(d.jsx)(S,{nextStep:this.nextStep}):null,this.state.USA>2?Object(d.jsx)(S,{nextStep:this.nextStep}):null,this.state.USA>3?Object(d.jsx)(S,{nextStep:this.nextStep}):null,this.state.USA>4?Object(d.jsx)(S,{nextStep:this.nextStep}):null,this.state.USA>5?Object(d.jsx)(S,{nextStep:this.nextStep}):null,this.state.UKF>0?Object(d.jsx)(O,{nextStep:this.nextStep}):null,this.state.UKF>1?Object(d.jsx)(O,{nextStep:this.nextStep}):null,this.state.UKF>2?Object(d.jsx)(O,{nextStep:this.nextStep}):null,this.state.UKF>3?Object(d.jsx)(O,{nextStep:this.nextStep}):null,this.state.UKF>4?Object(d.jsx)(O,{nextStep:this.nextStep}):null,this.state.UKF>5?Object(d.jsx)(O,{nextStep:this.nextStep}):null]}),Object(d.jsxs)("div",{className:"ImgOutput-cont",children:[this.state.steps>0?Object(d.jsx)(v,{steps:this.state.steps,imgurl:this.state[this.state.unit1],unit:this.state.unit1,quant:this.state.quantity1}):null,this.state.steps>1?Object(d.jsx)(v,{steps:this.state.steps,imgurl:this.state[this.state.unit2],unit:this.state.unit2,quant:this.state.quantity2}):null,this.state.steps>2?Object(d.jsx)(v,{steps:this.state.steps,imgurl:this.state[this.state.unit3],unit:this.state.unit3,quant:this.state.quantity3}):null,this.state.steps>3?Object(d.jsx)(v,{steps:this.state.steps,imgurl:this.state[this.state.unit4],unit:this.state.unit4,quant:this.state.quantity4}):null,this.state.steps>4?Object(d.jsx)(v,{steps:this.state.steps,imgurl:this.state[this.state.unit5],unit:this.state.unit5,quant:this.state.quantity5}):null,this.state.steps>5?Object(d.jsx)(v,{steps:this.state.steps,imgurl:this.state[this.state.unit6],unit:this.state.unit6,quant:this.state.quantity6}):null]})]})}}]),n}(j.a.Component),O=function(t){c(n,t);var e=f(n);function n(t){return i(this,n),e.call(this,t)}return u(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:this.props.nextStep,children:[Object(d.jsx)("input",{type:"text",name:"quantity",placeholder:"Create how many?"}),Object(d.jsxs)("select",{name:"ukfunits",id:"ukfunits",children:[Object(d.jsx)("option",{value:".55 cal Armor-Piercing Sniper",children:".55 cal Armor-Piercing Sniper"}),Object(d.jsx)("option",{value:"AEC",children:"AEC"}),Object(d.jsx)("option",{value:"Assault Infantry",children:"Assault Infantry"}),Object(d.jsx)("option",{value:"Assault\xa0Officer",children:"Assault\xa0Officer"}),Object(d.jsx)("option",{value:"Commandos",children:"Commandos"}),Object(d.jsx)("option",{value:"Engineer\xa0Recovery\xa0Squad",children:"Engineer\xa0Recovery\xa0Squad"}),Object(d.jsx)("option",{value:"Royal Engineers",children:"Royal Engineers"}),Object(d.jsx)("option",{value:"Infantry Squad",children:"Infantry Squad"}),Object(d.jsx)("option",{value:"M1 81mm Mortar Team",children:"M1 81mm Mortar Team"}),Object(d.jsx)("option",{value:"QF 6-pounder AT gun",children:"QF 6-pounder AT gun"}),Object(d.jsx)("option",{value:"Tank Hunter Infantry",children:"Tank Hunter Infantry"}),Object(d.jsx)("option",{value:"Universal\xa0Carrier",children:"Universal\xa0Carrier"}),Object(d.jsx)("option",{value:"Vickers\xa0Heavy\xa0Machine\xa0Gun",children:"Vickers\xa0Heavy\xa0Machine\xa0Gun"})]}),Object(d.jsx)("button",{children:"Next step"})]})})}}]),n}(j.a.Component),S=function(t){c(n,t);var e=f(n);function n(){return i(this,n),e.apply(this,arguments)}return u(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:this.props.nextStep,children:[Object(d.jsx)("input",{type:"text",name:"quantity",placeholder:"Create how many?"}),Object(d.jsxs)("select",{name:"usaunits",id:"usaunits",children:[Object(d.jsx)("option",{value:"Ambulance",children:"Ambulance"}),Object(d.jsx)("option",{value:"Assault Engineers",children:"Assault Engineers"}),Object(d.jsx)("option",{value:"Captain",children:"Captain"}),Object(d.jsx)("option",{value:"Lieutenant",children:"Lieutenant"}),Object(d.jsx)("option",{value:"M1 57mm AT gun",children:"M1 57mm AT gun"}),Object(d.jsx)("option",{value:"M15A1 AA Half-track",children:"M15A1 AA Half-track"}),Object(d.jsx)("option",{value:"M20 Utility Car",children:"M20 Utility Car"}),Object(d.jsx)("option",{value:"M2HB .50 cal Machine Gun",children:"M2HB .50 cal Machine Gun"}),Object(d.jsx)("option",{value:"M5A1 Stuart",children:"M5A1 Stuart"}),Object(d.jsx)("option",{value:"Mortar Team",children:"Mortar Team"}),Object(d.jsx)("option",{value:"Pack Howitzer",children:"Pack Howitzer"}),Object(d.jsx)("option",{value:"Pathfinders",children:"Pathfinders"}),Object(d.jsx)("option",{value:"Rangers",children:"Rangers"}),Object(d.jsx)("option",{value:"Rear Echelon",children:"Rear Echelon"}),Object(d.jsx)("option",{value:"Rifleman",children:"Rifleman"})]}),Object(d.jsx)("button",{children:"Next step"})]})})}}]),n}(j.a.Component),g=function(t){c(n,t);var e=f(n);function n(){return i(this,n),e.apply(this,arguments)}return u(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:this.props.nextStep,children:[Object(d.jsx)("input",{type:"text",name:"quantity",placeholder:"Create how many?"}),Object(d.jsxs)("select",{name:"suunits",id:"suunits",children:[Object(d.jsx)("option",{value:"Combat Engineers",children:"Combat Engineers"}),Object(d.jsx)("option",{value:"Conscripts",children:"Conscripts"}),Object(d.jsx)("option",{value:"Guards Infantry",children:"Guards Infantry"}),Object(d.jsx)("option",{value:"M1910 Maxim Machine Gun",children:"M1910 Maxim Machine Gun"}),Object(d.jsx)("option",{value:"M3A1 Scout Car",children:"M3A1 Scout Car"}),Object(d.jsx)("option",{value:"M5 Half-track",children:"M5 Half-track"}),Object(d.jsx)("option",{value:"Penal Battalion",children:"Penal Battalion"}),Object(d.jsx)("option",{value:"PM-41 82mm Mortar Team",children:"PM-41 82mm Mortar Team"}),Object(d.jsx)("option",{value:"HM38 120mm Mortar Team",children:"HM38 120mm Mortar Team"}),Object(d.jsx)("option",{value:"Scout Sniper",children:"Scout Sniper"}),Object(d.jsx)("option",{value:"Shock Infantry",children:"Shock Infantry"}),Object(d.jsx)("option",{value:"SU-76M Assault Gun",children:"SU-76M Assault Gun"}),Object(d.jsx)("option",{value:"T-70 Light Tank",children:"T-70 Light Tank"}),Object(d.jsx)("option",{value:"ZiS-3 76mm Divisional Field Gun",children:"ZiS-3 76mm Divisional Field Gun"})]}),Object(d.jsx)("button",{children:"Next step"})]})})}}]),n}(j.a.Component),x=function(t){c(n,t);var e=f(n);function n(){return i(this,n),e.apply(this,arguments)}return u(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:this.props.nextStep,children:[Object(d.jsx)("input",{type:"text",name:"quantity",placeholder:"Create how many?"}),Object(d.jsxs)("select",{name:"ostheerunits",id:"ostheerunits",children:[Object(d.jsx)("option",{value:"Grenadiers",children:"Grenadiers"}),Object(d.jsx)("option",{value:"GrW 34 Mortar Team",children:"GrW 34 Mortar Team"}),Object(d.jsx)("option",{value:"MG42 Machine Gun",children:"MG42 Machine Gun"}),Object(d.jsx)("option",{value:"Pak 40 AT Gun",children:"Pak 40 AT Gun"}),Object(d.jsx)("option",{value:"Panzergrenadiers",children:"Panzergrenadiers"}),Object(d.jsx)("option",{value:"Pioneers",children:"Pioneers"}),Object(d.jsx)("option",{value:"SdKfz 222 Scout Car",children:"SdKfz 222 Scout Car"}),Object(d.jsx)("option",{value:"SdKfz 250/7 Mortar Half-track",children:"SdKfz 250/7 Mortar Half-track"}),Object(d.jsx)("option",{value:"SdKfz 250 Half-track",children:"SdKfz 250 Half-track"}),Object(d.jsx)("option",{value:"SdKfz 251 Half-track",children:"SdKfz 251 Half-track"}),Object(d.jsx)("option",{value:"Ostheer Sniper",children:"Ostheer Sniper"})]}),Object(d.jsx)("button",{children:"Next step"})]})})}}]),n}(j.a.Component),y=function(t){c(n,t);var e=f(n);function n(){return i(this,n),e.apply(this,arguments)}return u(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:this.props.nextStep,children:[Object(d.jsx)("input",{type:"text",name:"quantity",placeholder:"Create how many?"}),Object(d.jsxs)("select",{name:"owunits",id:"owunits",children:[Object(d.jsx)("option",{value:"7.5cm le.IG Infantry Support Gun",children:"7.5cm le.IG Infantry Support Gun"}),Object(d.jsx)("option",{value:"Kubelwagon",children:"Kubelwagon"}),Object(d.jsx)("option",{value:"Panzer II Luchs",children:"Panzer II Luchs"}),Object(d.jsx)("option",{value:"Raktenwerfer",children:"Raktenwerfer"}),Object(d.jsx)("option",{value:"Sd.Kfz 221 Scout Car",children:"Sd.Kfz 221 Scout Car"}),Object(d.jsx)("option",{value:"SdKfz 234 Puma Armored Car",children:"SdKfz 234 Puma Armored Car"}),Object(d.jsx)("option",{value:"SdKfz 251 Stuka Half-track",children:"SdKfz 251 Stuka Half-track"}),Object(d.jsx)("option",{value:"SdKfz 251/17 Flak Half-track",children:"SdKfz 251/17 Flak Half-track"}),Object(d.jsx)("option",{value:"SdKfz 251/20 Infrared Half-track",children:"SdKfz 251/20 Infrared Half-track"}),Object(d.jsx)("option",{value:"Sturmpioneers",children:"Sturmpioneers"}),Object(d.jsx)("option",{value:"sWS Supply Half-track",children:"sWS Supply Half-track"}),Object(d.jsx)("option",{value:"Volksgrenadiers",children:"Volksgrenadiers"})]}),Object(d.jsx)("button",{children:"Next step"})]})})}}]),n}(j.a.Component),v=function(t){c(n,t);var e=f(n);function n(t){return i(this,n),e.call(this,t)}return u(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"ImgOutput-cont",children:[Object(d.jsxs)("div",{className:"subflex",children:[Object(d.jsx)("h3",{children:this.props.unit}),Object(d.jsx)("div",{class:"break"}),Object(d.jsx)("img",{src:this.props.imgurl}),Object(d.jsx)("div",{class:"break"}),this.props.steps>1?Object(d.jsx)("h2",{children:this.props.quant}):null]}),Object(d.jsx)("div",{className:"bullet",children:this.props.steps>1?Object(d.jsx)("img",{src:"https://i.imgur.com/yESOgwU.png"}):null})]})}}]),n}(j.a.Component);ReactDOM.render(Object(d.jsx)(b,{}),document.getElementById("app"))}],[[5,1]]]);
//# sourceMappingURL=main.41da50d4.chunk.js.map