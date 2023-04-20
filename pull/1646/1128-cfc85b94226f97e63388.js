/*! For license information please see 1128-cfc85b94226f97e63388.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[1128,52868],{49271:function(e,t,n){"use strict";var r=n(64836),o=n(18698);t.Z=void 0;var a=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=a?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),u=r(n(47166)),c=n(21538),s=r(n(33864)),f=r(n(23399)),d=n(51051),_=r(n(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var m=u.default.bind(_.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,o=e.title,i=e.description,u=e.isExpanded,_=(0,l.useState)(u),p=(0,a.default)(_,2),b=p[0],v=p[1],g=(0,l.useState)(!1),O=(0,a.default)(g,2),x=O[0],T=O[1],E=l.default.useContext(c.ThemeContext),w=void 0!==r,j=function(){T(!x),b&&v(!b)},P=function(){v(!b),x&&T(!x)},N=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:m("template",E.className)},l.default.createElement("div",{className:m("header")},o&&l.default.createElement("h2",{className:m("title")},o)),l.default.createElement("div",{className:m("content")},i&&l.default.createElement("div",{className:m("description")},i),t),l.default.createElement("div",{className:m("footer")},n?l.default.createElement("div",{className:m("button-container")},w&&l.default.createElement("button",{type:"button",className:m("css-toggle","item",{"is-selected":x}),onClick:j,onKeyDown:function(e){return N(e,j)},onBlur:y,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(s.default,{className:m("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(f.default,{className:m("chevron")})),l.default.createElement("button",{type:"button",className:m("code-toggle","item",{"is-selected":b}),onClick:P,onKeyDown:function(e){return N(e,P)},onBlur:y,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(s.default,{className:m("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(f.default,{className:m("chevron")}))):null,l.default.createElement("div",null,x&&l.default.createElement("div",{className:m("css")},r),b&&l.default.createElement("div",{className:m("code")},n))))};v.propTypes=b,v.defaultProps={isExpanded:!1};var g=v;t.Z=g},53560:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},59865:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Text-module__clinical-lowlight-theme___mG7dV","orion-fusion-theme":"Text-module__orion-fusion-theme___s3eY+",text:"Text-module__text___pR3Hk","inherit-color":"Text-module__inherit-color___BT1c9",italic:"Text-module__italic___Ai80R","word-wrap":"Text-module__word-wrap___RWBlC","font-size-100":"Text-module__font-size-100___QjMrh","font-size-92":"Text-module__font-size-92___xffy1","font-size-72":"Text-module__font-size-72___R9WxS","font-size-64":"Text-module__font-size-64___A0fSP","font-size-56":"Text-module__font-size-56___EpTwK","font-size-50":"Text-module__font-size-50___Hy8ue","font-size-46":"Text-module__font-size-46___MU8-J","font-size-36":"Text-module__font-size-36___8M9ck","font-size-32":"Text-module__font-size-32___-m5nt","font-size-24":"Text-module__font-size-24___OOFKN","font-size-20":"Text-module__font-size-20___rJO6P","font-size-18":"Text-module__font-size-18___TCBtv","font-size-16":"Text-module__font-size-16___ovQH2","font-size-14":"Text-module__font-size-14___fYamg","font-size-12":"Text-module__font-size-12___EGKPm","font-size-10":"Text-module__font-size-10___xZOQY","font-weight-200":"Text-module__font-weight-200___NABUq","font-weight-300":"Text-module__font-weight-300___vm83w","font-weight-400":"Text-module__font-weight-400___Z-2pQ","font-weight-700":"Text-module__font-weight-700___WIUZQ","visually-hidden":"Text-module__visually-hidden___hgjcq","font-stack":"Text-module__font-stack___ydj-0"}},41241:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___lhZh0","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___Oq6Xn",toolbar:"Toolbar-module__toolbar___XowP8",item:"Toolbar-module__item___K92Xb","start-align":"Toolbar-module__start-align___Ap05A","end-align":"Toolbar-module__end-align___WLp5E","center-align":"Toolbar-module__center-align___5f+ex"}},59088:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TSAYW","orion-fusion-theme":"Button-module__orion-fusion-theme___96AL7",button:"Button-module__button___v+HKw","is-active":"Button-module__is-active___ypcX2"}},92977:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___pTExk","orion-fusion-theme":"Notice-module__orion-fusion-theme___PF+qo",notice:"Notice-module__notice___WorbQ",children:"Notice-module__children___Mtqhu",accessory:"Notice-module__accessory___1zdDg",title:"Notice-module__title___5gv-b","ux-recommendation":"Notice-module__ux-recommendation___+II9D",caution:"Notice-module__caution___048ot",deprecation:"Notice-module__deprecation___s+V2d",maintenance:"Notice-module__maintenance___TCmi1",important:"Notice-module__important___eBEgg","not-supported":"Notice-module__not-supported___W-Jcy",paragraph:"Notice-module__paragraph___YTZe3",list:"Notice-module__list___1Yd9S"}},4365:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___KIp+p","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___5tg-n",placeholder:"Placeholder-module__placeholder___a1DlK",inner:"Placeholder-module__inner___eQKWp",title:"Placeholder-module__title___-1dNV"}},8144:function(e,t,n){"use strict";n.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___fgEgE"}},33864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(99139));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var i=function(e){var t=l({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=i;t.default=u},5071:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextWeight=t.TextFontSize=void 0;var o=f(n(67294)),a=f(n(45697)),l=f(n(94184)),i=f(n(47166)),u=f(n(47341)),c=f(n(59865)),s=["children","isVisuallyHidden","isItalic","fontSize","weight","isWordWrapped","colorClass"];function f(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=i.default.bind(c.default);t.TextFontSize={10:10,12:12,14:14,16:16,18:18,20:20,24:24,32:32,36:36,46:46,50:50,56:56,64:64,72:72,92:92,100:100};t.TextWeight={200:200,300:300,400:400,700:700};var y={children:a.default.node.isRequired,isItalic:a.default.bool,isVisuallyHidden:a.default.bool,isWordWrapped:a.default.bool,fontSize:a.default.oneOf([10,12,14,16,18,20,24,32,36,46,50,56,64,72,92,100]),weight:a.default.oneOf([200,300,400,700]),colorClass:a.default.string},h=function(e){var t=e.children,n=e.isVisuallyHidden,r=e.isItalic,a=e.fontSize,i=e.weight,c=e.isWordWrapped,f=e.colorClass,y=m(e,s),h=o.default.useContext(u.default),v=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},y),g=(0,l.default)(b(["text",{"inherit-color":!f},{italic:r},{"word-wrap":c},{"visually-hidden":n},p({},"font-size-".concat(a),a),p({},"font-weight-".concat(i),i),f,h.className]),v.className);return o.default.createElement("span",d({},v,{className:g}),t)};h.propTypes=y,h.defaultProps={isItalic:!1,isVisuallyHidden:!1,isWordWrapped:!1};var v=h;t.default=v},4959:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),o=s(n(45697)),a=s(n(94184)),l=s(n(47166)),i=s(n(47341)),u=s(n(41241)),c=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function s(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=l.default.bind(u.default),p={align:o.default.oneOf(["start","end","center"]),ariaControls:o.default.string,ariaLabel:o.default.string,ariaLabelledBy:o.default.string,children:o.default.node},m=function(e){var t=e.align,n=e.ariaControls,o=e.ariaLabel,l=e.ariaLabelledBy,u=e.children,s=d(e,c),p=r.default.useContext(i.default),m=(0,a.default)(_("toolbar","".concat(t,"-align"),p.className),s.className),b=r.default.Children.map(u,(function(e){return e?r.default.createElement("div",{className:_("item")},e):e}));return r.default.createElement("div",f({},s,{"aria-controls":n,"aria-label":l?void 0:o,"aria-labelledby":l,className:m,role:"toolbar"}),b)};m.propTypes=p,m.defaultProps={align:"start"};var b=m;t.default=b},98545:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),o=c(n(14824)),a=c(n(15471)),l=c(n(47341)),i=c(n(59088)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.default.bind(i.default),_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},m={children:o.default.string},b=function(e){var t=e.children,n=f(e,u),o=r.default.useContext(l.default),i=(0,a.default)(d(["button",o.className]),n.className);return r.default.createElement("button",s({},n,{type:"button",className:i,onBlur:_,onMouseDown:p,"data-focus-styles-enabled":!0}),t)};b.propTypes=m;var y=b;t.default=y},21369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),o=u(n(14824)),a=u(n(15471)),l=u(n(47341)),i=u(n(92977));function u(e){return e&&e.__esModule?e:{default:e}}var c=a.default.bind(i.default),s={ariaLevel:o.default.oneOf(["2","3","4","5","6"]),children:o.default.node,variant:o.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},f=function(e){var t=e.ariaLevel,n=e.variant,o=e.children,a=r.default.useContext(l.default);return r.default.createElement("div",{className:c("notice",n,a.className)},r.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:c("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(o,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};f.propTypes=s,f.defaultProps={ariaLevel:"2",variant:"important"};var d=f;t.default=d},63031:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),o=s(n(14824)),a=s(n(15321)),l=s(n(15471)),i=s(n(47341)),u=s(n(4365)),c=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=l.default.bind(u.default),p={title:o.default.string},m=function(e){var t=e.title,n=d(e,c),o=r.default.useContext(i.default),l=(0,a.default)(_(["placeholder",o.className]),n.className),u=_(["inner"]);return r.default.createElement("div",f({},n,{className:l}),r.default.createElement("div",{className:u},r.default.createElement("p",{className:_("title")},t)))};m.propTypes=p,m.defaultProps={title:""};var b=m;t.default=b},75983:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return o.default}});var r=l(n(21369)),o=l(n(63031)),a=l(n(98545));function l(e){return e&&e.__esModule?e:{default:e}}},15471:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(o.apply(this,n));else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(this&&this[l]||l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},15321:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var l=o.apply(null,n);l&&e.push(l)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},95860:function(e,t,n){"use strict";var r=n(54770);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,l){if(l!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},14824:function(e,t,n){e.exports=n(95860)()},54770:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},42518:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),o=u(n(28466)),a=u(n(7037)),l=u(n(8144)),i=["refCallback","text"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=a.default.bind(l.default),d={refCallback:o.default.func,text:o.default.string},_={text:void 0,refCallback:void 0},p=function(e){var t=e.refCallback,n=e.text,o=s(e,i),a=f(["visually-hidden-text",o.className]);return r.default.createElement("span",c({ref:t},o,{className:a}),n)};p.propTypes=d,p.defaultProps=_;var m=p;t.default=m},7037:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(o.apply(this,n));else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(this&&this[l]||l)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},19349:function(e,t,n){"use strict";var r=n(34074);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,l){if(l!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},28466:function(e,t,n){e.exports=n(19349)()},34074:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);