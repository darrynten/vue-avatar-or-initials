!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-avatar-or-initials",[],e):"object"==typeof exports?exports["vue-avatar-or-initials"]=e():t["vue-avatar-or-initials"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="./",r(r.s=2)}([function(t,e,r){"use strict";const n=r(9);e.a={name:"avatar-or-initials",props:{image:{required:!1,default:!1},title:{type:String,required:!0},size:{required:!1,default:40},round:{type:Boolean,required:!1,default:!1}},data:()=>({colours:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b"]}),methods:{colour(){const t=this.colours.length,e=n(this.title).replace(/[A-Za-z]/g,"")%t;return this.colours[e]},textColour(){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(this.colour());return.299*parseInt(t[1],16)+.587*parseInt(t[2],16)+.114*parseInt(t[3],16)>186?"#000000":"#FFFFFF"}},computed:{width(){return this.size+"px"},height(){return this.size+"px"},initials(){return this.title.charAt(0)},initialsStyle(){return"width: "+this.size+"px; height: "+this.size+"px; border-radius: "+this.size+"px; background-color: "+this.colour()+"; text-transform: uppercase; color: "+this.textColour()+";"},radius(){if(this.round)return"border-radius: "+this.size+"px"}}}},function(t,e){var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=r},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),o=r(12);var i=function(t){r(3)},s=r(8)(n.a,o.a,!1,i,null,null);e.default=s.exports},function(t,e,r){var n=r(4);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(6)("6c858f19",n,!0,{})},function(t,e,r){(t.exports=r(5)(!1)).push([t.i,".avatar-initials{display:flex;background:#fff;justify-content:center;align-items:center}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(i).concat([o]).join("\n")}var s;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(t,e,r){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=r(7),i={},s=n&&(document.head||document.getElementsByTagName("head")[0]),a=null,u=0,f=!1,c=function(){},l=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var r=t[e],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(g(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(g(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:s}}}}function v(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function g(t){var e,r,n=document.querySelector("style["+d+'~="'+t.id+'"]');if(n){if(f)return c;n.parentNode.removeChild(n)}if(p){var o=u++;n=a||(a=v()),e=m.bind(null,n,o,!1),r=m.bind(null,n,o,!0)}else n=v(),e=function(t,e){var r=e.css,n=e.media,o=e.sourceMap;n&&t.setAttribute("media",n);l.ssrId&&t.setAttribute(d,e.id);o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}t.exports=function(t,e,r,n){f=r,l=n||{};var s=o(t,e);return h(s),function(e){for(var r=[],n=0;n<s.length;n++){var a=s[n];(u=i[a.id]).refs--,r.push(u)}e?h(s=o(t,e)):s=[];for(n=0;n<r.length;n++){var u;if(0===(u=r[n]).refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete i[u.id]}}}};var y,b=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function m(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t,e){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],s=i[0],a={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}},function(t,e){t.exports=function(t,e,r,n,o,i){var s,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,a=t.default);var f,c="function"==typeof a?a.options:a;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId=o),i?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=f):n&&(f=n),f){var l=c.functional,d=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(t,e){return f.call(e),d(t,e)}):c.beforeCreate=d?[].concat(d,f):[f]}return{esModule:s,exports:a,options:c}}},function(t,e,r){var n,o,i,s,a;n=r(10),o=r(1).utf8,i=r(11),s=r(1).bin,(a=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?s.stringToBytes(t):o.stringToBytes(t):i(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var r=n.bytesToWords(t),u=8*t.length,f=1732584193,c=-271733879,l=-1732584194,d=271733878,p=0;p<r.length;p++)r[p]=16711935&(r[p]<<8|r[p]>>>24)|4278255360&(r[p]<<24|r[p]>>>8);r[u>>>5]|=128<<u%32,r[14+(u+64>>>9<<4)]=u;var h=a._ff,v=a._gg,g=a._hh,y=a._ii;for(p=0;p<r.length;p+=16){var b=f,m=c,x=l,_=d;c=y(c=y(c=y(c=y(c=g(c=g(c=g(c=g(c=v(c=v(c=v(c=v(c=h(c=h(c=h(c=h(c,l=h(l,d=h(d,f=h(f,c,l,d,r[p+0],7,-680876936),c,l,r[p+1],12,-389564586),f,c,r[p+2],17,606105819),d,f,r[p+3],22,-1044525330),l=h(l,d=h(d,f=h(f,c,l,d,r[p+4],7,-176418897),c,l,r[p+5],12,1200080426),f,c,r[p+6],17,-1473231341),d,f,r[p+7],22,-45705983),l=h(l,d=h(d,f=h(f,c,l,d,r[p+8],7,1770035416),c,l,r[p+9],12,-1958414417),f,c,r[p+10],17,-42063),d,f,r[p+11],22,-1990404162),l=h(l,d=h(d,f=h(f,c,l,d,r[p+12],7,1804603682),c,l,r[p+13],12,-40341101),f,c,r[p+14],17,-1502002290),d,f,r[p+15],22,1236535329),l=v(l,d=v(d,f=v(f,c,l,d,r[p+1],5,-165796510),c,l,r[p+6],9,-1069501632),f,c,r[p+11],14,643717713),d,f,r[p+0],20,-373897302),l=v(l,d=v(d,f=v(f,c,l,d,r[p+5],5,-701558691),c,l,r[p+10],9,38016083),f,c,r[p+15],14,-660478335),d,f,r[p+4],20,-405537848),l=v(l,d=v(d,f=v(f,c,l,d,r[p+9],5,568446438),c,l,r[p+14],9,-1019803690),f,c,r[p+3],14,-187363961),d,f,r[p+8],20,1163531501),l=v(l,d=v(d,f=v(f,c,l,d,r[p+13],5,-1444681467),c,l,r[p+2],9,-51403784),f,c,r[p+7],14,1735328473),d,f,r[p+12],20,-1926607734),l=g(l,d=g(d,f=g(f,c,l,d,r[p+5],4,-378558),c,l,r[p+8],11,-2022574463),f,c,r[p+11],16,1839030562),d,f,r[p+14],23,-35309556),l=g(l,d=g(d,f=g(f,c,l,d,r[p+1],4,-1530992060),c,l,r[p+4],11,1272893353),f,c,r[p+7],16,-155497632),d,f,r[p+10],23,-1094730640),l=g(l,d=g(d,f=g(f,c,l,d,r[p+13],4,681279174),c,l,r[p+0],11,-358537222),f,c,r[p+3],16,-722521979),d,f,r[p+6],23,76029189),l=g(l,d=g(d,f=g(f,c,l,d,r[p+9],4,-640364487),c,l,r[p+12],11,-421815835),f,c,r[p+15],16,530742520),d,f,r[p+2],23,-995338651),l=y(l,d=y(d,f=y(f,c,l,d,r[p+0],6,-198630844),c,l,r[p+7],10,1126891415),f,c,r[p+14],15,-1416354905),d,f,r[p+5],21,-57434055),l=y(l,d=y(d,f=y(f,c,l,d,r[p+12],6,1700485571),c,l,r[p+3],10,-1894986606),f,c,r[p+10],15,-1051523),d,f,r[p+1],21,-2054922799),l=y(l,d=y(d,f=y(f,c,l,d,r[p+8],6,1873313359),c,l,r[p+15],10,-30611744),f,c,r[p+6],15,-1560198380),d,f,r[p+13],21,1309151649),l=y(l,d=y(d,f=y(f,c,l,d,r[p+4],6,-145523070),c,l,r[p+11],10,-1120210379),f,c,r[p+2],15,718787259),d,f,r[p+9],21,-343485551),f=f+b>>>0,c=c+m>>>0,l=l+x>>>0,d=d+_>>>0}return n.endian([f,c,l,d])})._ff=function(t,e,r,n,o,i,s){var a=t+(e&r|~e&n)+(o>>>0)+s;return(a<<i|a>>>32-i)+e},a._gg=function(t,e,r,n,o,i,s){var a=t+(e&n|r&~n)+(o>>>0)+s;return(a<<i|a>>>32-i)+e},a._hh=function(t,e,r,n,o,i,s){var a=t+(e^r^n)+(o>>>0)+s;return(a<<i|a>>>32-i)+e},a._ii=function(t,e,r,n,o,i,s){var a=t+(r^(e|~n))+(o>>>0)+s;return(a<<i|a>>>32-i)+e},a._blocksize=16,a._digestsize=16,t.exports=function(t,e){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var r=n.wordsToBytes(a(t,e));return e&&e.asBytes?r:e&&e.asString?s.bytesToString(r):n.bytesToHex(r)}},function(t,e){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var e=[],n=0;n<t.length;n+=3)for(var o=t[n]<<16|t[n+1]<<8|t[n+2],i=0;i<4;i++)8*n+6*i<=8*t.length?e.push(r.charAt(o>>>6*(3-i)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],n=0,o=0;n<t.length;o=++n%4)0!=o&&e.push((r.indexOf(t.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|r.indexOf(t.charAt(n))>>>6-2*o);return e}},t.exports=n},function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}(t)||!!t._isBuffer)}},function(t,e,r){"use strict";var n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"avatar"},[t.image?r("img",{staticClass:"avatar-image",style:t.radius,attrs:{width:t.width,height:t.height,src:t.image}}):r("div",{staticClass:"avatar-initials",style:t.initialsStyle},[r("span",{staticClass:"initials strong"},[t._v("\n        "+t._s(t.initials)+"\n      ")])])])])},staticRenderFns:[]};e.a=n}])});
//# sourceMappingURL=index.js.map