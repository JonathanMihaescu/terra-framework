"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[81091],{2085:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(56690)),r=n(l(89728)),u=n(l(66115)),f=n(l(61655)),o=n(l(94993)),i=n(l(73808)),c=n(l(67294)),d=n(l(70419));function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return(0,o.default)(this,l)}}var m=function(e){(0,f.default)(l,e);var t=s(l);function l(e){var n;return(0,a.default)(this,l),(n=t.call(this,e)).handleButtonClick=n.handleButtonClick.bind((0,u.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,u.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,u.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,u.default)(n)),n.state={open:!1},n}return(0,r.default)(l,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",null,"This menu should have a medium height. And all items should be visible without scrolling."),c.default.createElement(d.default,{isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},c.default.createElement(d.default.Item,{text:"Default 1",key:"1",className:"TestFirstItem"}),c.default.createElement(d.default.Item,{text:"Default 2",key:"2"}),c.default.createElement(d.default.Item,{text:"Default 3",key:"3"}),c.default.createElement(d.default.Item,{text:"Default 4",key:"4"}),c.default.createElement(d.default.Item,{text:"Default 5",key:"5"}),c.default.createElement(d.default.ItemGroup,{key:"6"},c.default.createElement(d.default.Item,{text:"Default 61",key:"61"}),c.default.createElement(d.default.Item,{text:"Default 62",key:"62"}),c.default.createElement(d.default.Item,{text:"Default 63",key:"63"})),c.default.createElement(d.default.Item,{text:"Default 7",key:"7"}),c.default.createElement(d.default.Item,{text:"Default 8",key:"8"}),c.default.createElement(d.default.Item,{text:"Default 9",key:"9"}),c.default.createElement(d.default.Item,{text:"Default 10",key:"10"}),c.default.createElement(d.default.Item,{text:"Default 11",key:"11"}),c.default.createElement(d.default.Item,{text:"Default 12",key:"12"}),c.default.createElement(d.default.Item,{text:"Default 13",key:"13"}),c.default.createElement(d.default.Item,{text:"Default 14",key:"14"}),c.default.createElement(d.default.ItemGroup,{key:"15"},c.default.createElement(d.default.Item,{text:"Default 151",key:"151"}),c.default.createElement(d.default.Item,{text:"Default 152",key:"152"}),c.default.createElement(d.default.Item,{text:"Default 153",key:"153",className:"TestLastItem"}))),c.default.createElement("button",{type:"button",id:"medium-menu-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Menu"))}}]),l}(c.default.Component);t.default=m},66633:function(e,t,l){l.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},78490:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=i(l(67294)),r=i(l(45697)),u=i(l(47166)),f=i(l(66633)),o=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},c.apply(this,arguments)}function d(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?d(Object(l),!0).forEach((function(t){m(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):d(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function m(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var a=l.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function b(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var y=u.default.bind(f.default),p={fitStart:r.default.element,fill:r.default.element.isRequired,fitEnd:r.default.element,align:r.default.oneOf(["center","bottom","stretch"]),alignFitStart:r.default.oneOf(["center","bottom","stretch"]),alignFitEnd:r.default.oneOf(["center","bottom","stretch"]),alignFill:r.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:r.default.object,fillAttributes:r.default.object,fitEndAttributes:r.default.object},v=function(e){var t=e.fitStart,l=e.fill,n=e.fitEnd,r=e.align,u=e.alignFitStart,f=e.alignFill,i=e.alignFitEnd,d=e.fitStartAttributes,m=e.fillAttributes,p=e.fitEndAttributes,v=b(e,o),h=s({},d),g=s({},m),E=s({},p);return a.default.createElement("div",c({},v,{className:y("arrange",v.className)}),a.default.createElement("div",c({},h,{className:y("fit",r||u,h.className)}),t),a.default.createElement("div",c({},g,{className:y("fill",r||f,g.className)}),l),a.default.createElement("div",c({},E,{className:y("fit",r||i,E.className)}),n))};v.propTypes=p;var h=v;t.default=h},46379:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(l(67294)),a=u(l(99139)),r=l(25387);function u(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},f.apply(this,arguments)}var o=function(e){var t=f({},e);return n.default.createElement(r.FormattedMessage,{id:"Terra.icon.IconConsultInstructionsForUse.title"},(function(e){return n.default.createElement("span",{"aria-label":e,title:e},n.default.createElement(a.default,t,n.default.createElement("path",{d:"M42.746 9c-2.28 0-4.508-.85-6.405-2.115a10.165 10.165 0 00-5.646-1.71c-2.205 0-4.404.714-6.233 2.131L24 7.663l-.462-.357a10.17 10.17 0 00-6.233-2.131c-1.964 0-3.932.567-5.646 1.71C9.762 8.15 7.534 9 5.254 9H0v34h5.254c2.28 0 4.508-.85 6.405-2.115a10.163 10.163 0 015.646-1.71c1.826 0 3.646.498 5.257 1.471.142.548.626.916 1.159.916h.556c.534 0 1.017-.368 1.159-.916a10.172 10.172 0 015.257-1.471c1.964 0 3.932.567 5.646 1.71C38.238 42.15 40.466 43 42.746 43H48V9h-5.254zM9.995 38.389C8.893 39.124 7.175 40 5.254 40H3V12h2.254c2.709 0 5.5-.906 8.069-2.619a7.157 7.157 0 013.983-1.206c1.583 0 3.144.534 4.396 1.503l.798.618v26.95a13.237 13.237 0 00-5.195-1.07 13.13 13.13 0 00-7.31 2.213zM45 40h-2.254c-1.921 0-3.639-.876-4.741-1.611a13.138 13.138 0 00-7.31-2.214c-1.788 0-3.56.371-5.195 1.07v-26.95l.798-.618a7.219 7.219 0 014.397-1.503c1.422 0 2.799.417 3.982 1.206 2.57 1.713 5.36 2.619 8.069 2.619H45V40zm-8-11h2v2h-7v-2h2v-6h-2v-2h5v8zm-4-12a2 2 0 113.999-.001A2 2 0 0133 17z"})))}))};o.displayName="IconConsultInstructionsForUse",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i}}]);