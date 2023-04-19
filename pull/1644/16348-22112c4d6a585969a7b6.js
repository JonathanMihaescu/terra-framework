"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[16348],{40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),l=c(n(45697)),r=c(n(47166)),o=c(n(47341)),u=c(n(66983)),i=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.default.bind(u.default),_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:l.default.string},h=function(e){var t=e.children,n=f(e,i),l=a.default.useContext(o.default),u=(0,r.default)(s(["button",l.className]),n.className);return a.default.createElement("button",d({},n,{type:"button",className:u,onBlur:_,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};h.propTypes=p;var b=h;t.default=b},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),l=i(n(45697)),r=i(n(47166)),o=i(n(47341)),u=i(n(30866));function i(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(u.default),d={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},f=function(e){var t=e.ariaLevel,n=e.variant,l=e.children,r=a.default.useContext(o.default);return a.default.createElement("div",{className:c("notice",n,r.className)},a.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:c("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(l,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};f.propTypes=d,f.defaultProps={ariaLevel:"2",variant:"important"};var s=f;t.default=s},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),l=d(n(45697)),r=d(n(94184)),o=d(n(47166)),u=d(n(47341)),i=d(n(42620)),c=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var _=o.default.bind(i.default),m={title:l.default.string},p=function(e){var t=e.title,n=s(e,c),l=a.default.useContext(u.default),o=(0,r.default)(_(["placeholder",l.className]),n.className),i=_(["inner"]);return a.default.createElement("div",f({},n,{className:o}),a.default.createElement("div",{className:i},a.default.createElement("p",{className:_("title")},t)))};p.propTypes=m,p.defaultProps={title:""};var h=p;t.default=h},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var a=o(n(59278)),l=o(n(47306)),r=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},27152:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),r=a(n(62307)),o=n(34261),u=l.default.createElement(o.Placeholder,{title:"Test Hero"}),i={name:"Test Name",initials:"TN",detail:"Test Detail"},c=function(){return l.default.createElement(r.default,{hero:u,userConfig:i})};t.default=c},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);