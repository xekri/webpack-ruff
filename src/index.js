!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e,n){"use strict";var r=n(14),o=r.a.Symbol;e.a=o},function(t,e,n){"use strict";function r(t){if(!n.i(i.a)(t)||n.i(o.a)(t)!=c)return!1;var e=n.i(u.a)(t);if(null===e)return!0;var r=l.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&s.call(r)==d}var o=n(8),u=n(10),i=n(15),c="[object Object]",f=Function.prototype,a=Object.prototype,s=f.toString,l=a.hasOwnProperty,d=s.call(Object);e.a=r},function(t,e,n){"use strict";function r(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};if(1===e.length)return e[0];var r=e[e.length-1],o=e.slice(0,-1);return function(){return o.reduceRight(function(t,e){return e(t)},r.apply(void 0,arguments))}}e.a=r},function(t,e,n){"use strict";function r(t,e,u){function f(){g===h&&(g=h.slice())}function a(){return y}function s(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return f(),g.push(t),function(){if(e){e=!1,f();var n=g.indexOf(t);g.splice(n,1)}}}function l(t){if(!n.i(o.a)(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(O)throw new Error("Reducers may not dispatch actions.");try{O=!0,y=v(y,t)}finally{O=!1}for(var e=h=g,r=0;r<e.length;r++)e[r]();return t}function d(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");v=t,l({type:c.INIT})}function b(){var t,e=s;return t={subscribe:function(t){function n(){t.next&&t.next(a())}if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:e(n)}}},t[i.a]=function(){return this},t}var p;if("function"==typeof e&&void 0===u&&(u=e,e=void 0),void 0!==u){if("function"!=typeof u)throw new Error("Expected the enhancer to be a function.");return u(r)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var v=t,y=e,h=[],g=h,O=!1;return l({type:c.INIT}),p={dispatch:l,subscribe:s,getState:a,replaceReducer:d},p[i.a]=b,p}var o=n(1),u=n(19),i=n.n(u);n.d(e,"b",function(){return c}),e.a=r;var c={INIT:"@@redux/INIT"}},function(t,e,n){"use strict"},function(t,e,n){"use strict";function r(t){"r"!==t&&$("#led-r").turnOff(),"g"!==t&&$("#led-g").turnOff(),"b"!==t&&$("#led-b").turnOff()}e.a=r},function(t,e,n){"use strict";var r=n(3);n(18),n(17),n(16),n(2),n(4);n.d(e,"a",function(){return r.a})},function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch(arguments[1].type){case"INCREMENT":return t+1;case"DECREMENT":return t-1;default:return t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),u=n(6),i=n.i(u.a)(r),c=function(){i.dispatch({type:"INCREMENT"})},f=function(){i.dispatch({type:"DECREMENT"})},a=i.subscribe(function(){var t=i.getState();console.log(t),t>0&&(n.i(o.a)("g"),$("#led-g").turnOn()),0===t&&(n.i(o.a)("b"),$("#led-b").turnOn()),t<0&&(n.i(o.a)("r"),$("#led-r").turnOn())});$.ready(function(t){if(t)return void console.log(t);$("#button-k2").on("push",function(){c()}),$("#button-k3").on("push",function(){f()})}),$.end(function(){a()})},function(t,e,n){"use strict";function r(t){return null==t?void 0===t?f:c:a&&a in Object(t)?n.i(u.a)(t):n.i(i.a)(t)}var o=n(0),u=n(11),i=n(12),c="[object Null]",f="[object Undefined]",a=o.a?o.a.toStringTag:void 0;e.a=r},function(t,e,n){"use strict";var r="object"==typeof global&&global&&global.Object===Object&&global;e.a=r},function(t,e,n){"use strict";var r=n(13),o=n.i(r.a)(Object.getPrototypeOf,Object);e.a=o},function(t,e,n){"use strict";function r(t){var e=i.call(t,f),n=t[f];try{t[f]=void 0}catch(t){}var r=c.call(t);return e?t[f]=n:delete t[f],r}var o=n(0),u=Object.prototype,i=u.hasOwnProperty,c=u.toString,f=o.a?o.a.toStringTag:void 0;e.a=r},function(t,e,n){"use strict";function r(t){return u.call(t)}var o=Object.prototype,u=o.toString;e.a=r},function(t,e,n){"use strict";function r(t,e){return function(n){return t(e(n))}}e.a=r},function(t,e,n){"use strict";var r=n(9),o="object"==typeof self&&self&&self.Object===Object&&self,u=r.a||o||Function("return this")();e.a=u},function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t}e.a=r},function(t,e,n){"use strict";n(2),Object.assign},function(t,e,n){"use strict"},function(t,e,n){"use strict";n(3),n(1),n(4)},function(t,e,n){t.exports=n(20)},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r,o=n(21),u=function(t){return t&&t.__esModule?t:{default:t}}(o);r="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:t;var i=(0,u.default)(r);e.default=i}).call(e,n(22)(t))},function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}]);