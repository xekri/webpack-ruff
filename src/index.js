!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e,n){"use strict";var r=n(14),o=r.a.Symbol;e.a=o},function(t,e,n){"use strict";function r(t){if(!n.i(u.a)(t)||n.i(o.a)(t)!=c)return!1;var e=n.i(i.a)(t);if(null===e)return!0;var r=l.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&s.call(r)==d}var o=n(8),i=n(10),u=n(15),c="[object Object]",a=Function.prototype,f=Object.prototype,s=a.toString,l=f.hasOwnProperty,d=s.call(Object);e.a=r},function(t,e,n){"use strict";function r(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};if(1===e.length)return e[0];var r=e[e.length-1],o=e.slice(0,-1);return function(){return o.reduceRight(function(t,e){return e(t)},r.apply(void 0,arguments))}}e.a=r},function(t,e,n){"use strict";function r(t,e,i){function a(){g===h&&(g=h.slice())}function f(){return y}function s(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return a(),g.push(t),function(){if(e){e=!1,a();var n=g.indexOf(t);g.splice(n,1)}}}function l(t){if(!n.i(o.a)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(O)throw new Error("Reducers may not dispatch actions.");try{O=!0,y=v(y,t)}finally{O=!1}for(var e=h=g,r=0;r<e.length;r++)e[r]();return t}function d(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");v=t,l({type:c.INIT})}function p(){var t,e=s;return t={subscribe:function(t){function n(){t.next&&t.next(f())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:e(n)}}},t[u.a]=function(){return this},t}var b;if("function"==typeof e&&void 0===i&&(i=e,e=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(r)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var v=t,y=e,h=[],g=h,O=!1;return l({type:c.INIT}),b={dispatch:l,subscribe:s,getState:f,replaceReducer:d},b[u.a]=p,b}var o=n(1),i=n(19),u=n.n(i);n.d(e,"b",function(){return c}),e.a=r;var c={INIT:"@@redux/INIT"}},function(t,e,n){"use strict"},function(t,e,n){"use strict";function r(t){"r"!==t&&$("#led-r").turnOff(),"g"!==t&&$("#led-g").turnOff(),"b"!==t&&$("#led-b").turnOff()}Object.defineProperty(e,"__esModule",{value:!0}),e.turnOffAll=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=n(18),i=n(17),u=n(16),c=n(2);n(4);n.d(e,"createStore",function(){return r.a}),n.d(e,"combineReducers",function(){return o.a}),n.d(e,"bindActionCreators",function(){return i.a}),n.d(e,"applyMiddleware",function(){return u.a}),n.d(e,"compose",function(){return c.a})},function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch(arguments[1].type){case"INCREMENT":return t+1;case"DECREMENT":return t-1;default:return t}}var o=n(5),i=n(6),u=i.createStore(r),c=function(){u.dispatch({type:"INCREMENT"})},a=function(){u.dispatch({type:"DECREMENT"})},f=u.subscribe(function(){var t=u.getState();console.log(t),t>0&&((0,o.turnOffAll)("g"),$("#led-g").turnOn()),0===t&&((0,o.turnOffAll)("b"),$("#led-b").turnOn()),t<0&&((0,o.turnOffAll)("r"),$("#led-r").turnOn())});$.ready(function(t){if(t)return void console.log(t);$("#button-k2").on("push",function(){c()}),$("#button-k3").on("push",function(){a()})}),$.end(function(){f()})},function(t,e,n){"use strict";function r(t){return null==t?void 0===t?a:c:f&&f in Object(t)?n.i(i.a)(t):n.i(u.a)(t)}var o=n(0),i=n(11),u=n(12),c="[object Null]",a="[object Undefined]",f=o.a?o.a.toStringTag:void 0;e.a=r},function(t,e,n){"use strict";var r="object"==typeof global&&global&&global.Object===Object&&global;e.a=r},function(t,e,n){"use strict";var r=n(13),o=n.i(r.a)(Object.getPrototypeOf,Object);e.a=o},function(t,e,n){"use strict";function r(t){var e=u.call(t,a),n=t[a];try{t[a]=void 0}catch(t){}var r=c.call(t);return e?t[a]=n:delete t[a],r}var o=n(0),i=Object.prototype,u=i.hasOwnProperty,c=i.toString,a=o.a?o.a.toStringTag:void 0;e.a=r},function(t,e,n){"use strict";function r(t){return i.call(t)}var o=Object.prototype,i=o.toString;e.a=r},function(t,e,n){"use strict";function r(t,e){return function(n){return t(e(n))}}e.a=r},function(t,e,n){"use strict";var r=n(9),o="object"==typeof self&&self&&self.Object===Object&&self,i=r.a||o||Function("return this")();e.a=i},function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t}e.a=r},function(t,e,n){"use strict";function r(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(n,r,u){var c=t(n,r,u),a=c.dispatch,f=[],s={getState:c.getState,dispatch:function(t){return a(t)}};return f=e.map(function(t){return t(s)}),a=o.a.apply(void 0,f)(c.dispatch),i({},c,{dispatch:a})}}}var o=n(2);e.a=r;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){"use strict";function r(t,e){return function(){return e(t.apply(void 0,arguments))}}function o(t,e){if("function"==typeof t)return r(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),o={},i=0;i<n.length;i++){var u=n[i],c=t[u];"function"==typeof c&&(o[u]=r(c,e))}return o}e.a=o},function(t,e,n){"use strict";function r(t,e){var n=e&&e.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(t){Object.keys(t).forEach(function(e){var n=t[e];if(void 0===n(void 0,{type:u.b.INIT}))throw new Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+u.b.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}function i(t){for(var e=Object.keys(t),n={},i=0;i<e.length;i++){var u=e[i];"function"==typeof t[u]&&(n[u]=t[u])}var c,a=Object.keys(n);try{o(n)}catch(t){c=t}return function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];if(c)throw c;for(var o=!1,i={},u=0;u<a.length;u++){var f=a[u],s=n[f],l=t[f],d=s(l,e);if(void 0===d){var p=r(f,e);throw new Error(p)}i[f]=d,o=o||d!==l}return o?i:t}}var u=n(3);n(1),n(4);e.a=i},function(t,e,n){t.exports=n(20)},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(21),i=function(t){return t&&t.__esModule?t:{default:t}}(o);r="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:t;var u=(0,i.default)(r);e.default=u}).call(e,n(22)(t))},function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}]));