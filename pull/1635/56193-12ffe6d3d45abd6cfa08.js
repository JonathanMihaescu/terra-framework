"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[56193],{42947:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(10434)),o=l(a(70215)),n=l(a(67294)),d=l(a(45697)),u=l(a(94184)),r=l(a(47166)),s=l(a(47341)),_=a(25387),f=l(a(56583)),c=["extensions","logo","navigation","intl","toggle","utilities"],m=r.default.bind(f.default),p={extensions:d.default.element,logo:d.default.element,intl:d.default.shape({formatMessage:d.default.func}).isRequired,navigation:d.default.element,toggle:d.default.element,utilities:d.default.element},v=function(e){var t,a,l,d,r,_=e.extensions,f=e.logo,p=e.navigation,v=e.intl,g=e.toggle,y=e.utilities,h=(0,o.default)(e,c),A=n.default.useContext(s.default),b=(0,u.default)(m("header","fill",A.className),h.className);f&&(t=n.default.createElement("div",{className:m("fit","start","logo")},f)),p&&(a=n.default.createElement("nav",{role:"navigation",className:m("fill")},p)),_&&(l=n.default.createElement("div",{className:m("fit","end","extensions")},_)),y&&(d=n.default.createElement("div",{className:m("fit","end","utilities")},y)),g&&(r=n.default.createElement("div",{className:m("fit")},g));var H,L=n.default.createElement("div",{className:m("fill","header-inner")},a,l),E=n.default.createElement("button",{type:"button",onClick:function(){var e=document.querySelector(["[data-terra-layout-main]"]);e&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},className:m("skip-content")},v.formatMessage({id:"Terra.ApplicationHeaderLayout.SkipToContent"}));return(L||t||d)&&(H=n.default.createElement("div",{className:m("fill","header-body")},t,L,d)),n.default.createElement("div",(0,i.default)({},h,{className:b}),E,r,H)};v.propTypes=p;var g=(0,_.injectIntl)(v);t.default=g},56193:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(a(67294)),o=l(a(47166)),n=l(a(42947)),d=l(a(50696)),u=o.default.bind(d.default),r=function(){return i.default.createElement(n.default,{id:"test-header",className:u("test-header-layout"),logo:i.default.createElement("div",{id:"test-logo"},"Logo "),utilities:i.default.createElement("div",{id:"test-utilities"},"Utilities ")})};t.default=r},56583:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeaderLayout-module__clinical-lowlight-theme___-1bgb","orion-fusion-theme":"ApplicationHeaderLayout-module__orion-fusion-theme___ENqi+",fit:"ApplicationHeaderLayout-module__fit___KL7Uq",fill:"ApplicationHeaderLayout-module__fill___PAPf7",start:"ApplicationHeaderLayout-module__start___MX918",end:"ApplicationHeaderLayout-module__end___BgrVv","header-inner":"ApplicationHeaderLayout-module__header-inner___hLyff",logo:"ApplicationHeaderLayout-module__logo___Wzf7u",utilities:"ApplicationHeaderLayout-module__utilities___bkZso",extensions:"ApplicationHeaderLayout-module__extensions___85n-7","header-body":"ApplicationHeaderLayout-module__header-body___HLbvX","skip-content":"ApplicationHeaderLayout-module__skip-content___8eF4z"}},50696:function(e,t,a){a.r(t),t.default={"test-header-layout":"ApplicationHeaderDefault-test-module__test-header-layout___b8cvG","test-navigation":"ApplicationHeaderDefault-test-module__test-navigation___hA0d-","test-toggle":"ApplicationHeaderDefault-test-module__test-toggle___Awr4I"}}}]);