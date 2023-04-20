"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[12301],{14345:function(t,e,n){var r=n(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n(861)),u=r(n(56690)),l=r(n(89728)),o=r(n(66115)),i=r(n(61655)),f=r(n(94993)),c=r(n(73808)),s=r(n(67294)),d=r(n(70419));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=(0,c.default)(t);if(e){var a=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,f.default)(this,n)}}var b=function(t){(0,i.default)(n,t);var e=m(n);function n(t){var r;return(0,u.default)(this,n),(r=e.call(this,t)).handleButtonClick=r.handleButtonClick.bind((0,o.default)(r)),r.handleRequestClose=r.handleRequestClose.bind((0,o.default)(r)),r.setButtonNode=r.setButtonNode.bind((0,o.default)(r)),r.getButtonNode=r.getButtonNode.bind((0,o.default)(r)),r.addMenuItems=r.addMenuItems.bind((0,o.default)(r)),r.removeMenuItems=r.removeMenuItems.bind((0,o.default)(r)),r.state={open:!1,items:[0]},r}return(0,l.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"addMenuItems",value:function(){this.setState((function(t){return{items:[].concat((0,a.default)(t.items),[t.items.length])}}))}},{key:"removeMenuItems",value:function(){this.setState((function(t){var e=t.items.slice();return e.pop(),{items:e}}))}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement(d.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},this.state.items.map((function(t){return s.default.createElement(d.default.Item,{key:t,text:"Menu Item ".concat(t),id:"TestContent".concat(t)})}))),s.default.createElement("button",{type:"button",id:"default-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"),s.default.createElement("br",null),s.default.createElement("button",{type:"button",id:"add-button",onClick:this.addMenuItems},"Add Menu Item"),s.default.createElement("button",{type:"button",id:"remove-button",onClick:this.removeMenuItems},"Remove Menu Item"))}}]),n}(s.default.Component);e.default=b},66633:function(t,e,n){n.r(e),e.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},78490:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.AlignmentTypes=void 0;var a=f(n(67294)),u=f(n(45697)),l=f(n(47166)),o=f(n(66633)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(t){return t&&t.__esModule?t:{default:t}}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,e||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}e.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=l.default.bind(o.default),v={fitStart:u.default.element,fill:u.default.element.isRequired,fitEnd:u.default.element,align:u.default.oneOf(["center","bottom","stretch"]),alignFitStart:u.default.oneOf(["center","bottom","stretch"]),alignFitEnd:u.default.oneOf(["center","bottom","stretch"]),alignFill:u.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:u.default.object,fillAttributes:u.default.object,fitEndAttributes:u.default.object},h=function(t){var e=t.fitStart,n=t.fill,r=t.fitEnd,u=t.align,l=t.alignFitStart,o=t.alignFill,f=t.alignFitEnd,s=t.fitStartAttributes,m=t.fillAttributes,v=t.fitEndAttributes,h=b(t,i),y=d({},s),g=d({},m),_=d({},v);return a.default.createElement("div",c({},h,{className:p("arrange",h.className)}),a.default.createElement("div",c({},y,{className:p("fit",u||l,y.className)}),e),a.default.createElement("div",c({},g,{className:p("fill",u||o,g.className)}),n),a.default.createElement("div",c({},_,{className:p("fit",u||f,_.className)}),r))};h.propTypes=v;var y=h;e.default=y},46379:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=l(n(67294)),a=l(n(99139)),u=n(25387);function l(t){return t&&t.__esModule?t:{default:t}}function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}var i=function(t){var e=o({},t);return r.default.createElement(u.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(t){return r.default.createElement("span",{"aria-label":t,title:t},r.default.createElement(a.default,e,r.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 00-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 00-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 015.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 015.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 013.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 00-5.195-1.07 13.13 13.13 0 00-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 00-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 014.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 113.999-.001A2 2 0 0133 17z"})))}))};i.displayName="IconConsultInstructionsForUse",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var f=i;e.default=f}}]);