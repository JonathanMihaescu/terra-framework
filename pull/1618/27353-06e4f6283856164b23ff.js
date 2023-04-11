"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[27353],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),o=a(n(45697)),i=a(n(47166)),l=a(n(17422)),u=i.default.bind(l.default),m={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,i=r.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},r.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(o))),l=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},i,l)};c.propTypes=m;var p=c;t.Z=p},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var o=a(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(67294)),l=a(n(45697)),u=a(n(47166)),m=n(21538),c=a(n(33864)),p=a(n(23399)),s=n(51051),d=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var v=u.default.bind(d.default),g={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,l=e.description,u=e.isExpanded,d=(0,i.useState)(u),f=(0,o.default)(d,2),g=f[0],_=f[1],y=(0,i.useState)(!1),E=(0,o.default)(y,2),w=E[0],x=E[1],P=i.default.useContext(m.ThemeContext),F=void 0!==a,N=function(){x(!w),g&&_(!g)},C=function(){_(!g),w&&x(!w)},S=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:v("template",P.className)},i.default.createElement("div",{className:v("header")},r&&i.default.createElement("h2",{className:v("title")},r)),i.default.createElement("div",{className:v("content")},l&&i.default.createElement("div",{className:v("description")},l),t),i.default.createElement("div",{className:v("footer")},n?i.default.createElement("div",{className:v("button-container")},F&&i.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":w}),onClick:N,onKeyDown:function(e){return S(e,N)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(c.default,{className:v("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(p.default,{className:v("chevron")})),i.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":g}),onClick:C,onKeyDown:function(e){return S(e,C)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(c.default,{className:v("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(p.default,{className:v("chevron")}))):null,i.default.createElement("div",null,w&&i.default.createElement("div",{className:v("css")},a),g&&i.default.createElement("div",{className:v("code")},n))))};_.propTypes=g,_.defaultProps={isExpanded:!1};var y=_;t.Z=y},27353:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(87462),r=n(44925),o=n(67294),i=n(81254),l=n(42754),u=n(44339),m=["components"],c={},p="wrapper";function s(e){var t=e.components,n=(0,r.Z)(e,m);return(0,i.mdx)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title, ariaLabel }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        aria-label={ariaLabel}\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nForm.propTypes = {\n  title: PropTypes.string,\n  ariaLabel: PropTypes.string,\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n  const [activePrompts, setActivePrompts] = useState([]);\n\n  function onSwitchForm(formKey) {\n    setActiveForm(formKey);\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n      <p>Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <NavigationPromptCheckpoint\n        onPromptChange={(prompts) => {\n          setActivePrompts(prompts);\n        }}\n      >\n        <Form title={activeForm} key={activeForm} ariaLabel={activeForm} />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n\nexport default FormSwitcher;\n\n")))}s.isMDXComponent=!0;var d=n(49271),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(d.Z,{title:t||"Implementation Guide Part 2",description:n,example:o.createElement(u.Z,null),exampleSrc:o.createElement(s,null),isExpanded:a})},v=["components"],g={},h="wrapper";function b(e){var t=e.components,n=(0,r.Z)(e,v);return(0,i.mdx)(h,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(l.C,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"terra-navigation-prompt---implementation-guide"},"Terra Navigation Prompt - Implementation Guide"),(0,i.mdx)("h2",{id:"part-3---implementing-a-custom-prompt-solution"},"Part 3 - Implementing a Custom Prompt Solution"),(0,i.mdx)("p",null,"At this point, we realize that we do not want to ",(0,i.mdx)("strong",{parentName:"p"},"ever")," allow users to navigate away from a Form with unsaved state. We can do that by using the NavigationPromptCheckpoint's ",(0,i.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," prop."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"- import React, { useState, useRef } from 'react';\n+ import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n+ const [activePrompts, setActivePrompts] = useState([]);\n\n  function onSwitchForm(formKey) {\n-   formCheckpointRef.current.resolvePrompts({\n-     title: 'Descriptive Notification Prompt Title',\n-     startMessage: 'Descriptive Notification Prompt Message',\n-     rejectButtonText: `Descriptive Reject Button Action`,\n-     acceptButtonText: 'Descriptive Accept Button Action',\n-     buttonOrder: 'acceptFirst',\n-   }).then(() => {\n      setActiveForm(formKey);\n-   });\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n-     <p>The user will be prompted with the provided messaging when Forms are switched with unsaved changes present.</p>\n+     <p>Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present.</p>\n      <button\n        type=\"button\"\n-       disabled={activeForm === 'Form 1'}\n+       disabled={activeForm === 'Form 1' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n-       disabled={activeForm === 'Form 2'}\n+       disabled={activeForm === 'Form 2' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <NavigationPromptCheckpoint\n-       ref={formCheckpointRef}\n+       onPromptChange={(prompts) => {\n+         setActivePrompts(prompts);\n+       }}\n      >\n        <Form title={activeForm} key={activeForm} />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n")),(0,i.mdx)("p",null,"We remove the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ref")," from the NavigationPromptCheckpoint and instead implement ",(0,i.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," to store the currently rendered NavigationPrompt's in the FormSwitcher's state. We disable the 'Switch to' buttons altogether if a NavigationPrompt is detected. We could also use this state to control other navigation-capable components, like client-side routers."),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)(f,{title:"Part 2 - Implementing a Custom Prompt Handler",mdxType:"ImplementationGuidePart2"}))}b.isMDXComponent=!0},42754:function(e,t,n){n.d(t,{C:function(){return o}});var a=n(67294),r=n(22863),o=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-prompt",name:"terra-navigation-prompt",version:"1.66.0",url:t})}},44339:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var o=a(n(27424)),i=c(n(67294)),l=a(n(45697)),u=c(n(75923));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}var p=function(e){var t=e.title,n=e.ariaLabel,a=(0,i.useState)(""),r=(0,o.default)(a,2),l=r[0],m=r[1];return i.default.createElement("div",null,i.default.createElement("p",null,t),l.length?i.default.createElement(u.default,{description:t}):void 0,i.default.createElement("input",{type:"text","aria-label":n,onChange:function(e){m(e.target.value)},value:l}),i.default.createElement("button",{type:"button",onClick:function(){m("")}},"Submit"))};p.propTypes={title:l.default.string,ariaLabel:l.default.string};var s=function(){var e=(0,i.useState)("Form 1"),t=(0,o.default)(e,2),n=t[0],a=t[1],r=(0,i.useState)([]),l=(0,o.default)(r,2),m=l[0],c=l[1];function s(e){a(e)}return i.default.createElement("div",null,i.default.createElement("h2",null,"Form Switcher"),i.default.createElement("p",null,"Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present."),i.default.createElement("button",{type:"button",disabled:"Form 1"===n||m.length,onClick:s.bind(null,"Form 1")},"Switch to Form 1"),i.default.createElement("button",{type:"button",disabled:"Form 2"===n||m.length,onClick:s.bind(null,"Form 2")},"Switch to Form 2"),i.default.createElement(u.NavigationPromptCheckpoint,{onPromptChange:function(e){c(e)}},i.default.createElement(p,{title:n,key:n,ariaLabel:n})))};t.Z=s},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var l=function(e){var t=i({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=l;t.default=u},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})}}]);