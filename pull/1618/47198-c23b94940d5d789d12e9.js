(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[47198],{7303:function(e,t,r){"use strict";var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(67294)),i=r(39711),a=n(r(2406)),o=n(r(26659)),u=function(){return l.default.createElement(i.MemoryRouter,null,l.default.createElement(a.default,{id:"test-header",layoutConfig:{size:"large"},nameConfig:{title:"app-test-title"},utilityConfig:{title:"test-util-title",initialSelectedKey:"test-menu",onChange:function(){},menuItems:[{key:"test-menu",contentLocation:"body",title:"test-menu-title"}]},extensions:l.default.createElement(o.default,{layoutConfig:{size:"large"}}),applicationLinks:{links:[{id:"123",path:"/something1",text:"item 1"},{id:"234",path:"/something2",text:"item 2"},{id:"345",path:"/something3",text:"item 3"}]}}))};t.default=u},26659:function(e,t,r){"use strict";var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(10434)),i=n(r(13012)),a=n(r(67294)),o=n(r(47166)),u=n(r(90278)),f=o.default.bind(u.default),s=function(e){return"large"!==(0,l.default)({},((0,i.default)(e),e)).layoutConfig.size?a.default.createElement("div",{className:f("demo-extensions-small")},"Test Extensions Small"):a.default.createElement("div",{className:f(["demo-extensions"])},"Test Extensions Large")};t.default=s},66633:function(e,t,r){"use strict";r.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},90278:function(e,t,r){"use strict";r.r(t),t.default={"demo-extensions":"demoStyles-module__demo-extensions___YUK-8","demo-extensions-small":"demoStyles-module__demo-extensions-small___gY17H"}},78490:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=f(r(67294)),i=f(r(45697)),a=f(r(47166)),o=f(r(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!==n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=a.default.bind(o.default),g={fitStart:i.default.element,fill:i.default.element.isRequired,fitEnd:i.default.element,align:i.default.oneOf(["center","bottom","stretch"]),alignFitStart:i.default.oneOf(["center","bottom","stretch"]),alignFitEnd:i.default.oneOf(["center","bottom","stretch"]),alignFill:i.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:i.default.object,fillAttributes:i.default.object,fitEndAttributes:i.default.object},y=function(e){var t=e.fitStart,r=e.fill,n=e.fitEnd,i=e.align,a=e.alignFitStart,o=e.alignFill,f=e.alignFitEnd,c=e.fitStartAttributes,m=e.fillAttributes,g=e.fitEndAttributes,y=b(e,u),_=d({},c),v=d({},m),O=d({},g);return l.default.createElement("div",s({},y,{className:p("arrange",y.className)}),l.default.createElement("div",s({},_,{className:p("fit",i||a,_.className)}),t),l.default.createElement("div",s({},v,{className:p("fill",i||o,v.className)}),r),l.default.createElement("div",s({},O,{className:p("fit",i||f,O.className)}),n))};y.propTypes=g;var _=y;t.default=_},91021:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),l=i(r(99139));function i(e){return e&&e.__esModule?e:{default:e}}function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var o=function(e){var t=a({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M24 37.7L0 14.2l3.8-3.9L24 30l20.2-19.7 3.8 3.9z"}))};o.displayName="IconChevronDown",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=o;t.default=u},13012:function(e){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure "+e)},e.exports.__esModule=!0,e.exports.default=e.exports}}]);