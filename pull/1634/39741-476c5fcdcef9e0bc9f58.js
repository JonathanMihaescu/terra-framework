/*! For license information please see 39741-476c5fcdcef9e0bc9f58.js.LICENSE.txt */
(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[39741],{22199:function(e,t,l){"use strict";var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Main Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};t.default=i},46868:function(e,t,l){"use strict";var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Panel Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};t.default=i},27662:function(e,t,l){"use strict";var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var a=n(l(10434)),i=n(l(70215)),r=n(l(56690)),u=n(l(89728)),o=n(l(66115)),s=n(l(61655)),d=n(l(94993)),c=n(l(73808)),f=n(l(67294)),m=n(l(45697)),p=n(l(94184)),h=n(l(47166)),v=n(l(47341)),_=n(l(23870)),y=n(l(1034)),b=["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill","setSlidePanelRef"];function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return(0,d.default)(this,l)}}var g=h.default.bind(y.default),P={START:"start",END:"end"};t.SlidePanelPositions=P;var I={panelAriaLabel:m.default.string,mainAriaLabel:m.default.string,mainContent:m.default.node,panelContent:m.default.node,panelBehavior:m.default.oneOf(["overlay","squish"]),panelPosition:m.default.oneOf(["start","end"]),panelSize:m.default.oneOf(["small","large"]),isFullscreen:m.default.bool,isOpen:m.default.bool,fill:m.default.bool,setSlidePanelRef:m.default.func},O={panelBehavior:"overlay",panelPosition:P.END,panelSize:"small"},S=function(e){(0,s.default)(l,e);var t=E(l);function l(e){var n;return(0,r.default)(this,l),(n=t.call(this,e)).setPanelNode=n.setPanelNode.bind((0,o.default)(n)),n.mainNode=f.default.createRef(),n.setLastClicked=n.setLastClicked.bind((0,o.default)(n)),n.setDisclosingNode=n.setDisclosingNode.bind((0,o.default)(n)),n}return(0,u.default)(l,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?(this.setDisclosingNode(this.lastClicked),this.panelNode.focus()):this.props.isOpen||this.props.isOpen===e.isOpen||(this.disclosingNode.setAttribute("aria-expanded","false"),this.disclosingNode.focus())}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.panelAriaLabel,l=e.mainAriaLabel,n=e.mainContent,r=e.panelContent,u=e.panelBehavior,o=e.panelPosition,s=e.panelSize,d=e.isFullscreen,c=e.isOpen,m=e.fill,h=(e.setSlidePanelRef,(0,i.default)(e,b)),v=this.context,y=(0,p.default)(g("slide-panel",{"is-open":c},{"is-fullscreen":d},{fill:m},v.className),h.className),E=f.default.createElement("div",{className:g(["panel"]),key:"panel",tabIndex:"-1","aria-label":t,"aria-hidden":c?"false":"true",role:"region",ref:this.setPanelNode},f.default.createElement(_.default,{text:t}),r),I=f.default.createElement("div",{className:g("main"),key:"main",tabIndex:"-1","aria-label":l,ref:this.mainNode,role:"main",onClick:this.setLastClicked,onKeyUp:this.setLastClicked},n),O=o===P.START?f.default.createElement(f.default.Fragment,null,E,I):f.default.createElement(f.default.Fragment,null,I,E);return f.default.createElement("div",(0,a.default)({},h,{className:y,"data-slide-panel-panel-behavior":u,"data-slide-panel-panel-position":o,"data-slide-panel-panel-size":s}),O)}}]),l}(f.default.Component);S.propTypes=I,S.defaultProps=O,S.contextType=v.default;var C=S;t.default=C},1034:function(e,t,l){"use strict";l.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}},75346:function(e,t,l){"use strict";l.r(t),t.default={"visually-hidden-text":"VisuallyHiddenText-module__visually-hidden-text___lA9vx"}},23870:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(l(67294)),a=o(l(65218)),i=o(l(37968)),r=o(l(75346)),u=["refCallback","text"];function o(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c=i.default.bind(r.default),f={refCallback:a.default.func,text:a.default.string},m={text:void 0,refCallback:void 0},p=function(e){var t=e.refCallback,l=e.text,a=d(e,u),i=c(["visually-hidden-text",a.className]);return n.default.createElement("span",s({ref:t},a,{className:i}),l)};p.propTypes=f,p.defaultProps=m;var h=p;t.default=h},37968:function(e,t){var l;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var i=typeof l;if("string"===i||"number"===i)e.push(this&&this[l]||l);else if(Array.isArray(l))e.push(a.apply(this,l));else if("object"===i){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var r in l)n.call(l,r)&&l[r]&&e.push(this&&this[r]||r)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(t,[]))||(e.exports=l)}()},72399:function(e,t,l){"use strict";var n=l(672);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,l,a,i,r){if(r!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var l={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return l.PropTypes=l,l}},65218:function(e,t,l){e.exports=l(72399)()},672:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);