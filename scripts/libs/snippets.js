!function e(n,r,t){function o(u,a){if(!r[u]){if(!n[u]){var s="function"==typeof require&&require;if(!a&&s)return s(u,!0);if(i)return i(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[u]={exports:{}};n[u][0].call(l.exports,function(e){var r=n[u][1][e];return o(r?r:e)},l,l.exports,e,n,r,t)}return r[u].exports}for(var i="function"==typeof require&&require,u=0;u<t.length;u++)o(t[u]);return o}({1:[function(e,n,r){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),i=function(){function e(){t(this,e),this.snippets=document.querySelectorAll("code.language-markup")}return o(e,[{key:"init",value:function(){var e=this;Array.from(this.snippets).forEach(function(n){n.addEventListener("click",e.onMouseClickHandler(n)),n.addEventListener("mouseout",e.onMouseOutHandler(n))})}},{key:"copyToClipboard",value:function(e){var n=window.getSelection(),r=document.createRange();r.selectNodeContents(e),n.removeAllRanges(),n.addRange(r);var t=!1;try{t=document.execCommand("copy")}catch(o){t=!1}return n.removeAllRanges(),t}},{key:"onMouseClickHandler",value:function(n){var r=this;return function(){if(!(window.getSelection().toString().length>0)){var t=r.copyToClipboard(n);n.classList.add(t?e.CssClasses_.COPIED:e.CssClasses_.NOT_SUPPORTED)}}}},{key:"onMouseOutHandler",value:function(n){return function(){n.classList.remove(e.CssClasses_.COPIED)}}}],[{key:"CssClasses_",get:function(){return{COPIED:"copied",NOT_SUPPORTED:"nosupport"}}}]),e}();n.exports=i},{}]},{},[1]);
//# sourceMappingURL=snippets.js.map
