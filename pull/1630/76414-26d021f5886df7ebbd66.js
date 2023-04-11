"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[76414],{14091:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(10434)),l=a(n(38416)),r=a(n(70215)),o=a(n(67294)),s=a(n(45697)),u=a(n(94184)),c=a(n(47166)),d=a(n(47341)),f=a(n(52525)),h=["icon","label","customDisplay","children","isDisabled","isIconOnly","isActive","showIcon"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var v=c.default.bind(f.default),b={icon:s.default.element,label:s.default.string.isRequired,customDisplay:s.default.node,children:s.default.node,isDisabled:s.default.bool,isIconOnly:s.default.bool,isActive:s.default.bool,showIcon:s.default.bool},y=function(e){var t=e.icon,n=e.label,a=e.customDisplay,s=(e.children,e.isDisabled),c=e.isIconOnly,f=e.isActive,b=(e.showIcon,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,r.default)(e,h))),y=o.default.useContext(d.default),m=(0,u.default)(v("tab",{"is-disabled":s},{"is-icon-only":c},{"is-text-only":!t},y.className),b.className);return c&&(b["aria-label"]=n),b["aria-selected"]=f,o.default.createElement("div",(0,i.default)({},b,{role:"tab",className:m}),a,a?null:t,a||c?null:o.default.createElement("span",{className:v("label")},n))};y.propTypes=b,y.defaultProps={isDisabled:!1,isIconOnly:!1,isActive:!1,showIcon:!1};var m=y;t.default=m},10424:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={shouldHandleSelection:function(e,t){return t!==e},initialSelectedTabKey:function(e,t){return t||(e.length?e[0].key:e.key)}};t.default=n},76414:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(10434)),l=a(n(70215)),r=a(n(56690)),o=a(n(89728)),s=a(n(66115)),u=a(n(61655)),c=a(n(94993)),d=a(n(73808)),f=a(n(67294)),h=a(n(45697)),p=a(n(94184)),v=a(n(47166)),b=a(n(47341)),y=a(n(10027)),m=a(n(80906)),g=a(n(14091)),_=a(n(95577)),C=a(n(56880)),O=a(n(10424)),T=a(n(52525)),w=["tabFill","fill","onChange","children","activeKey","defaultActiveKey","responsiveTo"];function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var i=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var R=v.default.bind(T.default),I={tabFill:h.default.bool,fill:h.default.bool,onChange:h.default.func,children:h.default.node.isRequired,activeKey:h.default.string,defaultActiveKey:h.default.string,responsiveTo:h.default.oneOf(["window","parent","none"])},K=function(e){(0,u.default)(n,e);var t=k(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).getInitialState=a.getInitialState.bind((0,s.default)(a)),a.getActiveTabIndex=a.getActiveTabIndex.bind((0,s.default)(a)),a.handleOnChange=a.handleOnChange.bind((0,s.default)(a)),a.handleTruncationChange=a.handleTruncationChange.bind((0,s.default)(a)),a.wrapPaneOnClick=a.wrapPaneOnClick.bind((0,s.default)(a)),a.setTabs=a.setTabs.bind((0,s.default)(a)),a.state={activeKey:a.getInitialState(),isLabelTruncated:!1,showCollapsedTabs:!1},a}return(0,o.default)(n,[{key:"getInitialState",value:function(){return this.props.activeKey?null:O.default.initialSelectedTabKey(this.props.children,this.props.defaultActiveKey)}},{key:"handleOnChange",value:function(e,t){t.props.isDisabled||(this.props.onChange&&this.props.onChange(e,t.key),!this.props.activeKey&&O.default.shouldHandleSelection(this.state.activeKey,t.key)&&this.setState({activeKey:t.key}))}},{key:"handleTruncationChange",value:function(e){this.state.isLabelTruncated!==e&&this.setState({isLabelTruncated:e})}},{key:"setTabs",value:function(e){var t="tiny"===e;this.state.showCollapsedTabs!==t&&this.setState({showCollapsedTabs:t})}},{key:"getActiveTabIndex",value:function(){var e=this,t=-1;return f.default.Children.forEach(this.props.children,(function(n,a){n.key!==e.state.activeKey&&n.key!==e.props.activeKey||(t=a)})),t}},{key:"wrapPaneOnClick",value:function(e){var t=this;return function(n){t.handleOnChange(n,e),e.props.onClick&&e.props.onClick(n)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.tabFill,a=t.fill,r=(t.onChange,t.children),o=t.activeKey,s=(t.defaultActiveKey,t.responsiveTo),u=(0,l.default)(t,w),c=this.context,d="structural",h=(0,p.default)(R("tabs-container",{"tab-fill":n},d,c.className),u.className),v=null,b=!1,g=[];f.default.Children.forEach(r,(function(t){var n=!1;t.key!==e.state.activeKey&&t.key!==o||(n=!0,v=t.props.children),t.props.isIconOnly&&(b=!0),g.push(f.default.cloneElement(t,{className:R({"is-active":n},t.props.className),onClick:e.wrapPaneOnClick(t),isActive:n}))})),v=f.default.Children.map(v,(function(t){return f.default.cloneElement(t,{isLabelHidden:b||e.state.isLabelTruncated})}));var O=function(){var t=f.default.createElement(_.default,{activeKey:o||e.state.activeKey,activeIndex:e.getActiveTabIndex(),onChange:e.handleOnChange,onTruncationChange:e.handleTruncationChange,variant:d},g);if("parent"===s||"window"===s){var n=f.default.createElement(C.default,{activeKey:o||e.state.activeKey,activeIndex:e.getActiveTabIndex(),onTruncationChange:e.handleTruncationChange},g);return f.default.createElement(m.default,{onChange:e.setTabs,responsiveTo:s},e.state.showCollapsedTabs?n:t)}return t}();return f.default.createElement(y.default,(0,i.default)({},u,{className:h,fill:a,header:O}),f.default.createElement("div",{role:"tabpanel",className:R("pane-content",{"fill-parent":a})},v))}}]),n}(f.default.Component);K.propTypes=I,K.defaultProps={tabFill:!1,fill:!1,responsiveTo:"parent"},K.Pane=g.default,K.Utils=O.default,K.contextType=b.default;var x=K;t.default=x},56880:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(67294)),l=a(n(45697)),r=a(n(47166)),o=a(n(47341)),s=a(n(28996)),u=a(n(52525)),c=r.default.bind(u.default),d={activeKey:l.default.string,activeIndex:l.default.number.isRequired,children:l.default.node,onTruncationChange:l.default.func},f=function(e){e.onTruncationChange(!1);var t=i.default.useContext(o.default),n=e.children[e.activeIndex];return i.default.createElement("div",{className:c("collapsed-tabs-container",t.className)},i.default.createElement(s.default,{activeKey:e.activeKey,selectedTab:n},e.children))};f.propTypes=d;var h=f;t.default=h},95577:function(e,t,n){var a=n(64836),i=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(56690)),r=a(n(89728)),o=a(n(66115)),s=a(n(61655)),u=a(n(94993)),c=a(n(73808)),d=a(n(67294)),f=a(n(45697)),h=a(n(47166)),p=a(n(47341)),v=a(n(32018)),b=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(51051)),y=a(n(28996)),m=a(n(52525));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var C=h.default.bind(m.default),O={activeKey:f.default.string.isRequired,activeIndex:f.default.number.isRequired,children:f.default.node.isRequired,variant:f.default.oneOf(["modular-centered","modular-left-aligned","structural"]).isRequired,onChange:f.default.func.isRequired,onTruncationChange:f.default.func},T=function(e){(0,s.default)(n,e);var t=_(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).setContainer=a.setContainer.bind((0,o.default)(a)),a.setMenuRef=a.setMenuRef.bind((0,o.default)(a)),a.resetCache=a.resetCache.bind((0,o.default)(a)),a.handleResize=a.handleResize.bind((0,o.default)(a)),a.handleSelectionAnimation=a.handleSelectionAnimation.bind((0,o.default)(a)),a.handleOnKeyDown=a.handleOnKeyDown.bind((0,o.default)(a)),a.handleMenuOnKeyDown=a.handleMenuOnKeyDown.bind((0,o.default)(a)),a.handleFocusLeft=a.handleFocusLeft.bind((0,o.default)(a)),a.handleFocusRight=a.handleFocusRight.bind((0,o.default)(a)),a.resetCache(),a}return(0,r.default)(n,[{key:"componentDidMount",value:function(){var e=this;this.resizeObserver=new v.default((function(t){e.contentWidth=t[0].contentRect.width,e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.resetCache(),e.forceUpdate()})))})),this.resizeObserver.observe(this.container),this.handleResize(this.contentWidth),this.handleSelectionAnimation()}},{key:"componentDidUpdate",value:function(e){this.isCalculating?(this.isCalculating=!1,this.handleResize(this.contentWidth)):d.default.Children.count(this.props.children)!==d.default.Children.count(e.children)?(this.resetCache(),this.forceUpdate()):this.handleSelectionAnimation()}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null}},{key:"handleResize",value:function(e){for(var t=parseInt(window.getComputedStyle(this.menuRef,null).getPropertyValue("margin-left"),10),n=parseInt(window.getComputedStyle(this.menuRef,null).getPropertyValue("margin-right"),10),a=e-(this.menuRef.getBoundingClientRect().width+t+n),i=d.default.Children.count(this.props.children),l=i,r=0,o=!0,s=0;s<this.props.children.length;s+=1){var u=this.container.children[s],c=parseFloat(window.getComputedStyle(this.menuRef,null).getPropertyValue("margin-left")),f=parseFloat(window.getComputedStyle(this.menuRef,null).getPropertyValue("margin-right"));if((r+=parseFloat(window.getComputedStyle(u,null).getPropertyValue("min-width"))+c+f)>a&&!(s===i-1&&r<=e)){l=s,o=!1;break}}for(var h=!1,p=0,v=0;v<l;v+=1){if(p+=this.container.children[v].getBoundingClientRect().width,o&&p>e||!o&&p>a){h=!0;break}}this.props.onTruncationChange(h),this.menuHidden===o&&this.hiddenStartIndex===l||(this.menuHidden=o,this.hiddenStartIndex=l,this.forceUpdate())}},{key:"handleSelectionAnimation",value:function(){if(this.selectionBar&&window.getComputedStyle(this.selectionBar,null).getPropertyValue("transition-property").includes("transform")){var e=this.props.activeIndex>this.hiddenStartIndex?this.hiddenStartIndex:this.props.activeIndex,t=this.container.children[e];if(t){var n="rtl"===document.getElementsByTagName("html")[0].getAttribute("dir"),a=t.getBoundingClientRect(),i=a.width,l=a.left-this.container.getBoundingClientRect().left;n&&(l=a.right-this.container.getBoundingClientRect().right),this.selectionBar.style.width="".concat(i,"px"),this.selectionBar.style.transform="translate3d(".concat(l,"px,0,0)")}}}},{key:"handleOnKeyDown",value:function(e){if(!(d.default.Children.count(this.props.children)<2)){var t="tablist"===e.target.getAttribute("role"),n="true"===e.target.getAttribute("data-terra-tabs-menu");if(t||n){var a="rtl"===document.getElementsByTagName("html")[0].getAttribute("dir"),i=this.container.children;e.nativeEvent.keyCode===b.KEY_LEFT?a?this.handleFocusRight(i,e):this.handleFocusLeft(i,e):e.nativeEvent.keyCode===b.KEY_RIGHT&&(a?this.handleFocusLeft(i,e):this.handleFocusRight(i,e))}}}},{key:"handleFocusRight",value:function(e,t){if(!(this.props.activeIndex>=this.hiddenStartIndex))for(var n=this.props.activeIndex+1;n<e.length;n+=1)if(!this.props.children[n].props.isDisabled){if(e[n]===this.menuRef){this.menuRef.focus();break}this.props.onChange(t,this.props.children[n]);break}}},{key:"handleFocusLeft",value:function(e,t){var n=this.props.activeIndex-1;(n>=this.hiddenStartIndex||document.activeElement===this.menuRef)&&(n=this.hiddenStartIndex-1);for(var a=n;a>=0;a-=1)if(!this.props.children[a].props.isDisabled){document.activeElement===this.menuRef&&this.container.focus(),this.props.onChange(t,this.props.children[a]);break}}},{key:"handleMenuOnKeyDown",value:function(e){e.stopPropagation()}},{key:"setContainer",value:function(e){null!==e&&(this.container=e)}},{key:"setMenuRef",value:function(e){null!==e&&(this.menuRef=e)}},{key:"resetCache",value:function(){this.animationFrameID=null,this.hiddenStartIndex=-1,this.isCalculating=!0,this.menuHidden=!1}},{key:"render",value:function(){var e=this,t=[],n=[];d.default.Children.forEach(this.props.children,(function(a,i){i<e.hiddenStartIndex||e.hiddenStartIndex<0?t.push(a):n.push(a)}));var a=this.context,i=this.props.children[this.props.activeIndex],l=this.menuHidden?null:d.default.createElement(y.default,{onKeyDown:this.handleMenuOnKeyDown,refCallback:this.setMenuRef,activeKey:this.props.activeKey,selectedTab:i},n),r="modular-centered"===this.props.variant||"modular-left-aligned"===this.props.variant?d.default.createElement("div",{className:C("selection-bar"),ref:function(t){t&&(e.selectionBar=t)}}):null;return d.default.createElement("div",null,d.default.createElement("div",{className:C("collapsible-tabs-container",{"is-calculating":this.isCalculating},a.className),ref:this.setContainer,tabIndex:"0",onKeyDown:this.handleOnKeyDown,role:"tablist"},t,l),r)}}]),n}(d.default.Component);T.propTypes=O,T.contextType=p.default;var w=T;t.default=w},28996:function(e,t,n){var a=n(64836),i=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(10434)),r=a(n(70215)),o=a(n(56690)),s=a(n(89728)),u=a(n(66115)),c=a(n(61655)),d=a(n(94993)),f=a(n(73808)),h=a(n(67294)),p=a(n(45697)),v=a(n(47166)),b=a(n(47341)),y=a(n(70419)),m=a(n(51162)),g=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=T(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(51051)),_=n(25387),C=a(n(52525)),O=["label","customDisplay","icon","isIconOnly","showIcon"];function T(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(T=function(e){return e?n:t})(e)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var k=v.default.bind(C.default),R={activeKey:p.default.string,children:p.default.node,refCallback:p.default.func,selectedTab:p.default.element},I=function(e){(0,c.default)(n,e);var t=w(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).handleOnRequestClose=a.handleOnRequestClose.bind((0,u.default)(a)),a.handleOnClick=a.handleOnClick.bind((0,u.default)(a)),a.handleOnKeyDown=a.handleOnKeyDown.bind((0,u.default)(a)),a.getTargetRef=a.getTargetRef.bind((0,u.default)(a)),a.setTargetRef=a.setTargetRef.bind((0,u.default)(a)),a.wrapOnClick=a.wrapOnClick.bind((0,u.default)(a)),a.state={isOpen:!1},a}return(0,s.default)(n,[{key:"handleOnRequestClose",value:function(){this.setState({isOpen:!1})}},{key:"handleOnClick",value:function(){this.setState({isOpen:!0})}},{key:"handleOnKeyDown",value:function(e){e.nativeEvent.keyCode===g.KEY_RETURN&&this.setState({isOpen:!0})}},{key:"getTargetRef",value:function(){return this.targetRef}},{key:"setTargetRef",value:function(e){this.targetRef=e,this.props.refCallback&&this.props.refCallback(e)}},{key:"wrapOnClick",value:function(e){var t=this;return function(n){n.stopPropagation(),e.props.onClick&&e.props.onClick(n),t.setState({isOpen:!1})}}},{key:"render",value:function(){var e,t=this,n=[],a=!1;h.default.Children.forEach(this.props.children,(function(i){var o=i.props,s=o.label,u=(o.customDisplay,o.icon),c=(o.isIconOnly,o.showIcon),d=(0,r.default)(o,O),f=!1;t.props.activeKey===i.key&&(e=s,f=!0,a=!0),n.push(h.default.createElement(y.default.Item,(0,l.default)({},d,{text:s,onClick:t.wrapOnClick(i),key:i.key,icon:c?u:null,isHighlighted:f})))}));var i=this.context,o=null;return e&&this.props.selectedTab&&this.props.selectedTab.props.icon&&this.props.selectedTab.props.showIcon&&(o=h.default.createElement("div",{className:k("active-tab-icon")},this.props.selectedTab.props.icon)),h.default.createElement("div",{role:"button",tabIndex:"0",ref:this.setTargetRef,onClick:this.handleOnClick,onKeyDown:this.handleOnKeyDown,className:k("tab-menu",{"is-active":a},i.className),"data-terra-tabs-menu":!0},o,h.default.createElement(_.FormattedMessage,{id:"Terra.tabs.more"},(function(t){return h.default.createElement("span",null,e||t)})),h.default.createElement(m.default,null),h.default.createElement(y.default,{onRequestClose:this.handleOnRequestClose,targetRef:this.getTargetRef,isOpen:this.state.isOpen},n))}}]),n}(h.default.Component);I.propTypes=R,I.contextType=b.default;var K=I;t.default=K},52525:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Tabs-module__clinical-lowlight-theme___fmesT","orion-fusion-theme":"Tabs-module__orion-fusion-theme___mf0Jd","modular-centered":"Tabs-module__modular-centered___1O+uC","collapsible-tabs-container":"Tabs-module__collapsible-tabs-container___uOMb-","modular-left-aligned":"Tabs-module__modular-left-aligned___IoIA+","collapsed-tabs-container":"Tabs-module__collapsed-tabs-container___F-ha3","tab-menu":"Tabs-module__tab-menu___6Ye-4","is-active":"Tabs-module__is-active___KRywx","tab-fill":"Tabs-module__tab-fill___LZaZ5","is-calculating":"Tabs-module__is-calculating___sKTN4",tab:"Tabs-module__tab___qJ0Xv","is-disabled":"Tabs-module__is-disabled___rhSKE","selection-bar":"Tabs-module__selection-bar___estcK",structural:"Tabs-module__structural___7DxLB",label:"Tabs-module__label___t06Y+","tabs-container":"Tabs-module__tabs-container___vAd9J","is-icon-only":"Tabs-module__is-icon-only___SmNLF","is-text-only":"Tabs-module__is-text-only___EZyyW","active-tab-icon":"Tabs-module__active-tab-icon___zXM7K","pane-content":"Tabs-module__pane-content___cYs3n","fill-parent":"Tabs-module__fill-parent___Ny3IB"}}}]);