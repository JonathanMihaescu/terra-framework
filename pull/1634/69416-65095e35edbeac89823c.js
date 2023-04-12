"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[69416],{32484:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(56690)),a=n(r(89728)),u=n(r(61655)),i=n(r(94993)),o=n(r(73808)),c=n(r(67294)),f=n(r(45697)),s=n(r(93670)),d=n(r(70419));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,o.default)(e);if(t){var l=(0,o.default)(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return(0,i.default)(this,r)}}var b={isSelectableMenu:f.default.bool},p=function(e){(0,u.default)(r,e);var t=m(r);function r(){return(0,l.default)(this,r),t.apply(this,arguments)}return(0,a.default)(r,[{key:"getChildContext",value:function(){return{isSelectableMenu:!0}}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:"isSelected"},c.default.createElement("p",null,"Menu Items with eIFU Icon")),c.default.createElement(s.default,{role:"menu"},c.default.createElement(d.default.Item,{text:"eIFU Icon Menu Item",key:"1",className:"TestMenuItem",isInstructionsForUse:!0}),c.default.createElement(d.default.Item,{isSelectable:!0,text:"eIFU Icon Nested Menu",key:"2",className:"TestMenuItem",isInstructionsForUse:!0,subMenuItems:[c.default.createElement(d.default.Item,{text:"Default 2.1",key:"2.1",className:"TestNestedMenuContent"})]}),c.default.createElement(d.default.Item,{text:"Selectable+Selected eIFU Icon Menu Item",key:"3",className:"TestMenuItem",isSelectable:!0,isSelected:!0,isInstructionsForUse:!0})))}}]),r}(c.default.Component);p.childContextTypes=b;var v=p;t.default=v},66633:function(e,t,r){r.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},78490:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=c(r(67294)),a=c(r(45697)),u=c(r(47166)),i=c(r(66633)),o=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!==n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=u.default.bind(i.default),v={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},y=function(e){var t=e.fitStart,r=e.fill,n=e.fitEnd,a=e.align,u=e.alignFitStart,i=e.alignFill,c=e.alignFitEnd,s=e.fitStartAttributes,m=e.fillAttributes,v=e.fitEndAttributes,y=b(e,o),g=d({},s),h=d({},m),_=d({},v);return l.default.createElement("div",f({},y,{className:p("arrange",y.className)}),l.default.createElement("div",f({},g,{className:p("fit",a||u,g.className)}),t),l.default.createElement("div",f({},h,{className:p("fill",a||i,h.className)}),r),l.default.createElement("div",f({},_,{className:p("fit",a||c,_.className)}),n))};y.propTypes=v;var g=y;t.default=g},46379:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(67294)),l=u(r(99139)),a=r(25387);function u(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return n.default.createElement(a.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return n.default.createElement("span",{"aria-label":e,title:e},n.default.createElement(l.default,t,n.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 00-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 00-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 015.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 015.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 013.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 00-5.195-1.07 13.13 13.13 0 00-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 00-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 014.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 113.999-.001A2 2 0 0133 17z"})))}))};o.displayName="IconConsultInstructionsForUse",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=o;t.default=c}}]);