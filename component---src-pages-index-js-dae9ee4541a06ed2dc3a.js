webpackJsonp([35783957827783],{145:function(t,e,n){"use strict";function o(t){return t}function r(t,e,n){function r(t,e){var n=N.hasOwnProperty(e)?N[e]:null;M.hasOwnProperty(e)&&c("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&c("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function a(t,n){if(n){c("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),c(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=t.prototype,a=o.__reactAutoBindPairs;n.hasOwnProperty(u)&&D.mixins(t,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==u){var s=n[i],p=o.hasOwnProperty(i);if(r(p,i),D.hasOwnProperty(i))D[i](t,s);else{var l=N.hasOwnProperty(i),E="function"==typeof s,d=E&&!l&&!p&&n.autobind!==!1;if(d)a.push(i,s),o[i]=s;else if(p){var h=N[i];c(l&&("DEFINE_MANY_MERGED"===h||"DEFINE_MANY"===h),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",h,i),"DEFINE_MANY_MERGED"===h?o[i]=f(o[i],s):"DEFINE_MANY"===h&&(o[i]=m(o[i],s))}else o[i]=s}}}else;}function p(t,e){if(e)for(var n in e){var o=e[n];if(e.hasOwnProperty(n)){var r=n in D;c(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in t;if(a){var i=_.hasOwnProperty(n)?_[n]:null;return c("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(t[n]=f(t[n],o))}t[n]=o}}}function l(t,e){c(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(c(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function f(t,e){return function(){var n=t.apply(this,arguments),o=e.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return l(r,n),l(r,o),r}}function m(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function E(t,e){var n=e.bind(t);return n}function d(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var o=e[n],r=e[n+1];t[o]=E(t,r)}}function h(t){var e=o(function(t,o,r){this.__reactAutoBindPairs.length&&d(this),this.props=t,this.context=o,this.refs=s,this.updater=r||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;c("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=a});e.prototype=new b,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],y.forEach(a.bind(null,e)),a(e,g),a(e,t),a(e,v),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),c(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in N)e.prototype[r]||(e.prototype[r]=null);return e}var y=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},_={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},D={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)a(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=i({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=i({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=f(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=i({},t.propTypes,e)},statics:function(t,e){p(t,e)},autobind:function(){}},g={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},M={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},b=function(){};return i(b.prototype,t.prototype,M),h}var a,i=n(4),s=n(42),c=n(1),u="mixins";a={},t.exports=r},4:function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function o(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=o()?Object.assign:function(t,e){for(var o,s,c=n(t),u=1;u<arguments.length;u++){o=Object(arguments[u]);for(var p in o)a.call(o,p)&&(c[p]=o[p]);if(r){s=r(o);for(var l=0;l<s.length;l++)i.call(o,s[l])&&(c[s[l]]=o[s[l]])}}return c}},275:function(t,e){},276:function(t,e){},407:function(t,e,n){t.exports=n.p+"static/helloworld.cbde7c81.jpg"},195:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(5),a=o(r),i=n(407),s=o(i);n(275),n(276),e.default=function(){return a.default.createElement("div",{className:"content"},a.default.createElement("h1",{className:"title-area"},a.default.createElement("div",{className:"upper-title"},"Shane"),a.default.createElement("div",{className:"lower-title"},"Cummerford!")),a.default.createElement("div",{className:"image-wrapper"},a.default.createElement("img",{className:"shane-image",src:s.default,alt:"Shane Cummerford"})),a.default.createElement("h4",{className:"subtitle"},'"Your friend online"'))},t.exports=e.default}});
//# sourceMappingURL=component---src-pages-index-js-dae9ee4541a06ed2dc3a.js.map