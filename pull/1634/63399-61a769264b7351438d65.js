"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[63399],{63399:function(e,t,r){var n=r(64836),a=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(27424)),o=f(r(67294)),c=n(r(55281)),u=f(r(850));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=i?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}var d=function(){alert("You clicked confirm")},s=function(){var e=(0,o.useState)(!1),t=(0,i.default)(e,2),r=t[0],n=t[1];return o.default.createElement(o.default.Fragment,null,r&&o.default.createElement(u.default,{variant:"hazard-high",dialogTitle:"Make sure that the title relates directly to the choices.",startMessage:"The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim.",content:o.default.createElement(u.ContentLayoutAsList,{items:["item1","item2"]}),endMessage:"The End Message is text used to provide any other additional info.",acceptAction:{text:"accept",onClick:d},rejectAction:{text:"reject",onClick:function(){n(!1)}},buttonOrder:"acceptFirst",emphasizedAction:"accept"}),o.default.createElement(c.default,{id:"trigger-notification-dialog",text:"Trigger NotificationDialog",onClick:function(){n(!0)}}))};t.default=s}}]);