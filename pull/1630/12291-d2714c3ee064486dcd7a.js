"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[12291],{31572:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(l(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=m(t);if(l&&l.has(e))return l.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,l&&l.set(e,n);return n}(l(67294)),o=n(l(55281)),s=n(l(34653)),u=l(56019),d=n(l(47166)),c=n(l(76790)),f=n(l(39489)),p=n(l(36757));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(m=function(e){return e?l:t})(e)}var v=d.default.bind(f.default),h=Object.freeze([{key:"SECTION_0",component:r.default.createElement(p.default,{name:"Section 0",targetId:"section0"})},{key:"SECTION_1",component:r.default.createElement(p.default,{name:"Section 1",targetId:"section1"})}]),y=Object.freeze([{key:"SECTION_2",component:r.default.createElement(p.default,{name:"Section 2",targetId:"section2"})},{key:"SECTION_3",component:r.default.createElement(p.default,{name:"Section 3",targetId:"section3"})}]),_=(0,u.withDisclosureManager)((function(e){var t=e.itemsList,l=e.disclosureManager;return r.default.createElement(c.default,{items:t,disclose:l.disclose})}));var g=function(){var e=(0,r.useState)(!1),t=(0,i.default)(e,2),l=t[0],n=t[1];return r.default.createElement("div",{id:"test-aggregator",role:"main",className:v("aggregator-with-disclosure-test")},r.default.createElement(o.default,{id:"flip-button",text:"Flip Items",onClick:function(){return n(!l)}}),r.default.createElement(s.default,null,r.default.createElement(_,{itemsList:l?y:h})))};t.default=g},34653:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.disclosureType=t.default=void 0;var i,r=n(l(10434)),o=n(l(70215)),s=n(l(56690)),u=n(l(89728)),d=n(l(66115)),c=n(l(61655)),f=n(l(94993)),p=n(l(73808)),m=n(l(38416)),v=n(l(67294)),h=n(l(45697)),y=n(l(17092)),_=n(l(10027)),g=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=C(t);if(l&&l.has(e))return l.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,l&&l.set(e,n);return n}(l(56019)),b=n(l(46829)),O=n(l(27662)),P=["children","level","disclosureAccessory","withDisclosureContainer"];function C(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(C=function(e){return e?l:t})(e)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=(0,p.default)(e);if(t){var a=(0,p.default)(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return(0,f.default)(this,l)}}var k="panel";t.disclosureType=k;var N={children:h.default.node,level:h.default.oneOf([1,2,3,4,5,6]),panelBehavior:h.default.oneOf(["overlay","squish"]),disclosureAccessory:h.default.element,withDisclosureContainer:h.default.func},E=(i={},(0,m.default)(i,g.availableDisclosureSizes.TINY,"small"),(0,m.default)(i,g.availableDisclosureSizes.SMALL,"small"),(0,m.default)(i,g.availableDisclosureSizes.MEDIUM,"large"),(0,m.default)(i,g.availableDisclosureSizes.LARGE,"large"),(0,m.default)(i,g.availableDisclosureSizes.HUGE,"large"),i),D=function(e){(0,c.default)(l,e);var t=S(l);function l(e){var n;return(0,s.default)(this,l),(n=t.call(this,e)).renderSlidePanel=n.renderSlidePanel.bind((0,d.default)(n)),n}return(0,u.default)(l,[{key:"renderSlidePanel",value:function(e){var t,l,n,a,i,s=this.props,u=(s.children,s.level),d=s.disclosureAccessory,c=(s.withDisclosureContainer,(0,o.default)(s,P));(e.disclosure.size===g.availableDisclosureSizes.FULLSCREEN||e.disclosure.isMaximized)&&(n=!0),a=e.disclosure.dimensions?(i=e.disclosure.dimensions).width>480||i.height>600?"large":"small":E[e.disclosure.size];var f=null!=e&&null!==(t=e.disclosure)&&void 0!==t&&null!==(l=t.typeConfig)&&void 0!==l&&l.panelBehavior?e.disclosure.typeConfig.panelBehavior:c.panelBehavior,p=e.disclosureComponentKeys[e.disclosureComponentKeys.length-1],m=(e.disclosureComponentData[p]||{}).headerAdapterData;return v.default.createElement(O.default,(0,r.default)({},c,{fill:!0,panelBehavior:f,isFullscreen:n,panelSize:a,isOpen:e.disclosure.isOpen,panelContent:v.default.createElement(_.default,{fill:!0,header:v.default.createElement(v.default.Fragment,null,m?v.default.createElement(y.default,{title:m.title,onClose:e.closeDisclosure,level:u,onBack:e.disclosureComponentKeys.length>1?e.dismissPresentedComponent:void 0},m.collapsibleMenuView):void 0,d)},v.default.createElement(b.default,{items:e.disclosure.components,isAnimated:!0})),mainContent:e.children.components}))}},{key:"render",value:function(){var e=this.props,t=e.withDisclosureContainer,l=e.children;return v.default.createElement(g.default,{withDisclosureContainer:t,supportedDisclosureTypes:[k],render:this.renderSlidePanel},l)}}]),l}(v.default.Component);D.propTypes=N,D.defaultProps={level:2,panelBehavior:"overlay"};var w=D;t.default=w},27662:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var a=n(l(10434)),i=n(l(70215)),r=n(l(56690)),o=n(l(89728)),s=n(l(66115)),u=n(l(61655)),d=n(l(94993)),c=n(l(73808)),f=n(l(67294)),p=n(l(45697)),m=n(l(94184)),v=n(l(47166)),h=n(l(47341)),y=n(l(1034)),_=["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"];function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return(0,d.default)(this,l)}}var b=v.default.bind(y.default),O={START:"start",END:"end"};t.SlidePanelPositions=O;var P={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool},C={panelBehavior:"overlay",panelPosition:O.END,panelSize:"small"},S=function(e){(0,u.default)(l,e);var t=g(l);function l(e){var n;return(0,r.default)(this,l),(n=t.call(this,e)).setPanelNode=n.setPanelNode.bind((0,s.default)(n)),n.mainNode=f.default.createRef(),n.setLastClicked=n.setLastClicked.bind((0,s.default)(n)),n.setDisclosingNode=n.setDisclosingNode.bind((0,s.default)(n)),n}return(0,o.default)(l,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){if(this.disclosingNode)return void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){this.disclosingNode=e}},{key:"render",value:function(){var e=this.props,t=e.panelAriaLabel,l=e.mainAriaLabel,n=e.mainContent,r=e.panelContent,o=e.panelBehavior,s=e.panelPosition,u=e.panelSize,d=e.isFullscreen,c=e.isOpen,p=e.fill,v=(0,i.default)(e,_),h=this.context,y=(0,m.default)(b("slide-panel",{"is-open":c},{"is-fullscreen":d},{fill:p},h.className),v.className),g=f.default.createElement("div",{className:b(["panel"]),key:"panel",tabIndex:"-1","aria-label":t,"aria-hidden":c?"false":"true",ref:this.setPanelNode},r),P=f.default.createElement("div",{className:b("main"),key:"main",tabIndex:"-1","aria-label":l,ref:this.mainNode,onClick:this.setLastClicked,onKeyUp:this.setLastClicked},n),C=s===O.START?f.default.createElement(f.default.Fragment,null,g,P):f.default.createElement(f.default.Fragment,null,P,g);return f.default.createElement("div",(0,a.default)({},v,{className:y,"data-slide-panel-panel-behavior":o,"data-slide-panel-panel-position":s,"data-slide-panel-panel-size":u}),C)}}]),l}(f.default.Component);S.propTypes=P,S.defaultProps=C,S.contextType=h.default;var k=S;t.default=k},39489:function(e,t,l){l.r(t),t.default={"aggregator-with-disclosure-test":"AggregatorWithDisclosure-test-module__aggregator-with-disclosure-test___SCzIs"}},1034:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);