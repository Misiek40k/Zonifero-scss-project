!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://misiek40k.github.io/Software_Hut_1/",n(n.s=5)}([function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){var i={},r=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),o=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),a=null,m=0,d=[],_=n(0);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(h(r.parts[a],t))}else{var m=[];for(a=0;a<r.parts.length;a++)m.push(h(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:m}}}}function l(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],a=t.base?o[0]+t.base:o[0],m={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(m):n.push(i[a]={id:a,parts:[m]})}return n}function s(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=o(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function c(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),g(t,e.attrs),s(e,t),t}function g(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function h(e,t){var n,i,r,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var d=m++;n=a||(a=c(t)),i=b.bind(null,n,d,!1),r=b.bind(null,n,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),s(e,t),t}(t),i=function(e,t,n){var i=n.css,r=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=_(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),m=e.href;e.href=URL.createObjectURL(a),m&&URL.revokeObjectURL(m)}.bind(null,n,t),r=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=c(t),i=function(e,t){var n=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){f(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=r()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=l(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(m=i[a.id]).refs--,r.push(m)}e&&p(l(e,t),t);for(o=0;o<r.length;o++){var m;if(0===(m=r[o]).refs){for(var d=0;d<m.parts.length;d++)m.parts[d]();delete i[m.id]}}}};var u=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(i),o=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(o).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\'\';content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}a{color:inherit;text-decoration:none}button{border:0;background:none;padding:0}.workspace__cont__items__head,.building__cont__head{font-family:"Poppins",sans-serif;font-weight:700;color:#3146FF;font-size:4.375rem;line-height:5rem}.workspace__cont__items__txt,.building__cont__descr{font-family:"Roboto",sans-serif;font-weight:400;color:#000;font-size:1.5625rem;line-height:2rem}.main-foot__nav__lnk,.management__cont__item__txt,.problemApp__cont__item__txt,.building__cont__paragraph__txt,.form__btns,.form__main__submit__btn{font-family:"Roboto",sans-serif;font-weight:300;color:#000;font-size:1.0625rem;line-height:1.5625rem}.management__cont__item__head{font-family:"Poppins",sans-serif;font-weight:700;color:#000;font-size:1.875rem;line-height:2.5rem}.problemApp__cont__item__head,.building__cont__paragraph__head,.form__main__input,.form__main__input::placeholder,.form__main__area__txt,.form__main__area__txt::placeholder{font-family:"Poppins",sans-serif;font-weight:700;color:#000;font-size:1.1875rem;line-height:1.625rem}.main-foot__nav__cat,.problemApp__header{font-family:"Roboto",sans-serif;font-weight:400;color:#000;font-size:1.0625rem}.form__main__submit__btn{background-color:#3146FF;border:none;color:white;padding:1.25rem 3.125rem;text-align:center;text-decoration:none;display:inline-block;font-size:16px}.main-hdr{left:0;width:100%;height:5rem;z-index:20;overflow:hidden}.main-hdr .nav-wrapper{height:100%;display:flex;flex-wrap:wrap;justify-content:space-between;padding-left:1.25rem}@media (min-width: 1200px){.main-hdr{height:10rem;padding-left:5rem;overflow:visible}}.hdr-logo{order:0;margin-top:1.625rem;width:60px;flex-basis:20%}@media (min-width: 1200px){.hdr-logo{margin-top:2.5rem;transform:translateY(-20%);flex-basis:20%;left:5rem}}.main-nav{order:2;margin-top:5rem;flex-basis:20%}.main-nav__menu__item{text-align:center;padding:1.25rem 0;display:none}@media (min-width: 1200px){.main-nav{display:flex;flex-basis:80%;order:1;top:0;padding-left:6.25rem;margin-top:0;justify-content:flex-end;align-items:stretch;text-shadow:0 0 .15px #FFF, 0 0 .15px #fff}.main-nav__menu__item{font-family:"Roboto",sans-serif;font-weight:400;font-size:.8125rem;display:block;float:left;margin-left:2.5rem;margin-top:2.5rem;padding:0;border:0}.main-nav__menu__item:first-child{margin-left:0}.main-nav__menu__item:hover{text-shadow:0 0 .15px #000, 0 0 .15px #000}.main-nav__menu__item:hover::after{content:"";display:block;margin:0;width:50%;padding-top:2px;border-bottom:2px solid #00C599}}.main-nav__arrow::after{margin-left:.3125rem;font-family:\'FontAwesome\';content:\'\\F107\'}.main-nav__sign{display:none}@media (min-width: 1200px){.main-nav__sign{display:flex;justify-content:space-between;align-items:center}.main-nav__sign__item{font-family:"Roboto",sans-serif;font-weight:400;font-size:1.0625rem;display:flex;margin-left:3.75rem}.main-nav__sign__item:first-child{margin-left:2.5rem;margin-top:1.875rem}.main-nav__sign__item:nth-child(2){margin-top:1.675rem}.main-nav__sign__item:last-child{color:#F7F7F7;background-color:#3146FF;align-self:stretch}.main-nav__sign__item:last-child p{padding-left:3.75rem;padding-right:7.5rem;padding-top:2.5rem}}.secondary-nav{order:1;flex-basis:50%;margin-top:1.25rem;font-family:"Roboto",sans-serif;font-weight:400;font-size:.9375rem}.secondary-nav__menu__item{text-align:center;padding:.75rem 0 1.25rem}.secondary-nav__arrow::after{margin-left:.3125rem;font-family:\'FontAwesome\';content:\'\\F107\'}@media (min-width: 1200px){.secondary-nav__arrow::after{display:none}}@media (min-width: 1200px){.secondary-nav{font-size:1.1875rem;order:2;flex-basis:100%;top:0;padding-left:17.5rem;margin-top:3.75rem}.secondary-nav__menu__item{display:block;float:left;margin-left:3.75rem;padding:0;border:0;border-bottom:2px solid #F7F7F7;text-shadow:0 0 .15px #FFF, 0 0 .15px #fff}.secondary-nav__menu__item:first-child{margin-left:0}.secondary-nav__menu__item:not(:first-child):hover{text-shadow:0 0 .15px #000, 0 0 .15px #000;border-bottom:0;letter-spacing:0}.secondary-nav__menu__item:not(:first-child):hover::after{content:"";display:block;margin:0;width:50%;border-bottom:2px solid #00C599}.secondary-nav__menu--item{text-shadow:0 0 .15px #000, 0 0 .15px #000;border-bottom:0;letter-spacing:0}.secondary-nav__menu--item::after{content:"";display:block;margin:0;width:50%;border-bottom:2px solid #00C599}}@media (min-width: 1200px){.secondary-nav__select{display:none}}.nav-btn{position:absolute;right:0;top:0;padding:2.5rem 1.25rem;width:3.75rem;color:#000}.nav-btn:hover{cursor:pointer}.nav-btn__hamburger{position:absolute;top:50%;left:50%;margin-left:-0.625rem;display:block;width:1.25rem;height:.125rem;background-color:#3146FF}.nav-btn__hamburger:before,.nav-btn__hamburger:after{content:"";position:absolute;left:50%;margin-left:-0.625rem;width:1.25rem;height:.125rem;background-color:#3146FF}.nav-btn__hamburger::before{margin-top:-0.25rem}.nav-btn__hamburger::after{margin-top:0.25rem}@media (min-width: 1200px){.nav-btn{display:none}}.main-foot-wrapper{margin:0 auto;max-width:74.1875rem}@media (min-width: 1200px){.main-foot-wrapper{padding-right:2.5rem;padding-left:2.5rem}}.main-foot{background-color:#3146FF;margin-top:3.75rem}@media (min-width: 1200px){.main-foot{margin-top:6.25rem}}.main-foot__nav{display:flex;padding-top:6.25rem;flex-direction:column;white-space:nowrap;padding-bottom:6.25rem}@media (min-width: 768px){.main-foot__nav{flex-direction:row}}@media (min-width: 1200px){.main-foot__nav{padding-bottom:11.25rem}}.main-foot__nav__col{display:flex;flex-direction:column;padding-left:1.25rem;padding-right:1.25rem}.main-foot__nav__col:not(:first-of-type){margin-top:3.75rem}@media (min-width: 768px){.main-foot__nav__col{margin:0;padding-right:8.75rem;padding-left:0}.main-foot__nav__col:first-child{padding-left:7.5rem}.main-foot__nav__col:not(:first-of-type){margin-top:0}}@media (min-width: 1200px){.main-foot__nav__col{padding-right:11.25rem;padding-left:0}.main-foot__nav__col:first-child{padding-left:0}}.main-foot__nav__cat{padding-bottom:1.875rem;color:#F7F7F7}.main-foot__nav__lnk{color:#F7F7F7}.main-foot__btns{text-align:right;border-top:.0625rem solid rgba(247,247,247,0.2)}.main-foot__btn{padding:1.25rem 1.25rem;margin-bottom:1.25rem;width:2.5rem;height:100%}@media (min-width: 1200px){.main-foot__btn{margin-bottom:7.5rem}}.main-foot__btn:last-of-type{margin-right:.625rem}.main-foot__btn:hover{cursor:pointer}.main-foot__btn__hamburger{top:50%;left:50%;display:block;width:1.25rem;height:.125rem;background-color:#F7F7F7}.main-foot__btn__hamburger:before,.main-foot__btn__hamburger:after{content:"";position:absolute;margin-left:-0.625rem;width:1.25rem;height:.125rem;background-color:#F7F7F7}.main-foot__btn__hamburger::before{margin-top:-0.25rem}.main-foot__btn__hamburger::after{margin-top:0.25rem}.main-foot__btn__quit{position:relative;display:block;width:1.25rem;height:.625rem}.main-foot__btn__quit:before,.main-foot__btn__quit::after{content:\'\';position:absolute;height:.125rem;width:80%;top:80%;left:-100%;background:#F7F7F7}.main-foot__btn__quit::before{transform:rotate(45deg)}.main-foot__btn__quit::after{transform:rotate(-45deg)}.wrapper-workspace{margin:0 auto;max-width:74.1875rem;padding-top:5rem}@media (min-width: 1200px){.wrapper-workspace{padding-top:8.75rem;padding-right:2.5rem;padding-left:2.5rem}}.workspace{margin-top:0;left:0;width:100%;overflow:hidden;background-color:#F7F7F7;background-image:url(/assets/images/hand.png),url(/assets/images/desks.png);background-repeat:no-repeat;background-size:17.5rem,25rem;background-position:50% 12.5rem,50% 20rem}@media (min-width: 1200px){.workspace{margin:2.5rem 0 0;background-image:url(/assets/images/hand.png),url(/assets/images/first_section_bg.png);height:42.5rem;background-size:contain, cover;background-position:90% 7.5rem,right}}.workspace__cont{text-align:center}@media (min-width: 1200px){.workspace__cont{width:60%}}.workspace__cont__items{display:flex;flex-direction:column}@media (min-width: 1200px){.workspace__cont__items{margin-top:0;padding-left:0;padding-right:0;background-color:transparent}}.workspace__cont__items__head{text-align:left}@media (max-width: 1200px){.workspace__cont__items__head{align-self:center;font-size:1.875rem;line-height:2.5rem;padding-left:.625rem;padding-right:.625rem}}.workspace__cont__items__txt{text-align:left;background-color:#F7F7F7;padding-top:2.5rem;padding-left:1.25rem;padding-right:1.25rem;margin-top:20rem;align-self:center}@media (min-width: 768px){.workspace__cont__items__txt{padding-left:6.25rem;padding-right:6.25rem}}@media (min-width: 1200px){.workspace__cont__items__txt{margin-top:0;padding-top:2.5rem;text-align:left;background-color:transparent;padding-left:0;padding-right:0}}.workspace__cont__items__links{padding-top:2.5rem;display:flex;background-color:#F7F7F7;justify-content:center}@media (min-width: 1200px){.workspace__cont__items__links{background-color:transparent;justify-content:flex-start}}.workspace__cont__items__links a img{width:60%}@media (min-width: 768px){.workspace__cont__items__links a img{width:70%}}.wrapper-managment{margin:0 auto;max-width:74.1875rem;padding-top:6.25rem}@media (min-width: 1200px){.wrapper-managment{padding-top:0;padding-right:2.5rem;padding-left:2.5rem}}.management{padding:2.5rem 0 0;left:0;width:100%;overflow:hidden;background-color:#F7F7F7}.management__cont__items{display:flex;flex-direction:row;justify-content:center;width:100%}@media (min-width: 768px){.management__cont__items{justify-content:space-between;padding-left:6.25rem;padding-right:6.25rem}}@media (min-width: 1200px){.management__cont__items{padding-left:0;padding-right:0}}.management__cont__item{display:flex;flex-direction:column;max-width:20rem;margin-left:1.25rem;margin-right:1.25rem}@media (min-width: 768px){.management__cont__item{margin-left:0;margin-right:0}}.management__cont__item:not(:first-child){display:none}@media (min-width: 768px){.management__cont__item:not(:first-child){display:flex}}.management__cont__item__head{margin-bottom:2.5rem}@media (min-width: 768px){.management__cont__item__txt{max-width:10rem}}@media (min-width: 1200px){.management__cont__item__txt{max-width:20rem}}.management__cont__dots{margin-top:2.5rem;text-align:center}@media (min-width: 768px){.management__cont__dots{display:none}}.management__cont__dot{margin-right:1.25rem;height:.375rem;display:inline-block;width:.375rem;background-color:#000;border-radius:50%}.management__cont__dot:active{background-color:#3146FF}.wrapper-problemApp{margin:0 auto;max-width:74.1875rem;padding-top:5rem}@media (min-width: 1200px){.wrapper-problemApp{padding-top:8.75rem;padding-right:2.5rem;padding-left:2.5rem}}.problemApp{padding:2.5rem 0 2.5rem;left:0;width:100%;overflow:hidden;background-color:#F7F7F7}.problemApp__header{margin-bottom:.625rem;margin-left:1.25rem}@media (min-width: 1200px){.problemApp__header{margin-left:0}}.problemApp__cont{display:flex;flex-direction:row;flex-wrap:nowrap;max-width:100%;justify-content:flex-start}.problemApp__cont__item{display:flex;flex-direction:column;padding:3.75rem;background-color:#fff;margin-right:0}@media (min-width: 768px){.problemApp__cont__item{margin-right:1.25rem}}.problemApp__cont__item:not(:first-child){display:none}@media (min-width: 768px){.problemApp__cont__item:not(:first-child){display:flex;max-width:17.5rem}}.problemApp__cont__item__desk{display:inline-flex;width:100%;margin-bottom:1.875rem}.problemApp__cont__item__desk img{margin:0 auto}.problemApp__cont__item__head{margin-bottom:.625rem}.problemApp__cont__dots{margin-top:1.25rem;text-align:center}@media (min-width: 768px){.problemApp__cont__dots{display:none}}.problemApp__cont__dot{margin-right:1.25rem;height:.375rem;display:inline-block;width:.375rem;background-color:#000;border-radius:50%}.problemApp__cont__dot:active{background-color:#3146FF}.building-wrapper{margin:0 auto;max-width:74.1875rem;padding-right:1.25rem;padding-left:1.25rem}@media (min-width: 768px){.building-wrapper{padding-right:7.5rem;padding-left:7.5rem}}@media (min-width: 1200px){.building-wrapper{padding-right:2.5rem;padding-left:2.5rem}}.building{margin:2.5rem 0 0;left:0;width:100%;overflow:hidden;background-color:#fff;background-image:url(/assets/images/layer_59.png);background-repeat:no-repeat;background-size:20rem;background-position:50% 75%}@media (min-width: 1200px){.building{background-size:30%;background-position:85% 10%}}.building__cont{display:flex;flex-direction:column}.building__cont__head{color:#000;max-width:45rem;margin-top:7.5rem;margin-bottom:3.75rem}@media (min-width: 1200px){.building__cont__head{margin-top:16.25rem;margin-bottom:5rem}}@media (max-width: 1200px){.building__cont__head{align-self:center;font-size:2.5rem;line-height:3.125rem}}.building__cont__descr{margin-bottom:23.75rem}@media (min-width: 1200px){.building__cont__descr{margin-bottom:5rem;max-width:47.5rem}}.building__cont__paragraphs{display:flex}.building__cont__paragraph{display:flex;flex-direction:column}@media (min-width: 1200px){.building__cont__paragraph{max-width:32.5rem;padding-right:8.75rem}}.building__cont__paragraph:last-of-type{display:none}@media (min-width: 1200px){.building__cont__paragraph:last-of-type{display:flex}}.building__cont__paragraph__head{padding-bottom:1.25rem}.form-wrapper{margin:0 auto;max-width:74.1875rem;padding-right:1.25rem;padding-left:1.25rem}@media (min-width: 768px){.form-wrapper{padding-right:7.5rem;padding-left:7.5rem}}@media (min-width: 1200px){.form-wrapper{padding-right:2.5rem;padding-left:2.5rem}}.form{margin:6.25rem 0 0;left:0;width:100%;overflow:hidden;background-color:#fff}@media (min-width: 1200px){.form{margin:10rem 0 0}}.form__btns{display:flex;padding-bottom:5rem;justify-content:flex-start}@media (min-width: 1200px){.form__btns{padding-bottom:6.25rem;justify-content:center}}.form__btn__contact{text-shadow:0 0 .15px #000, 0 0 .15px #000;padding-right:1.25rem}.form__btn__contact::after{content:"";display:block;margin:0;width:50%;border-bottom:2px solid #00C599}.form__btn__call{padding-left:1.25rem;text-shadow:0 0 .15px #fff, 0 0 .15px #fff}.form__btn__call:hover{text-shadow:0 0 .15px #000, 0 0 .15px #000}.form__btn__call:hover::after{content:"";display:block;margin:0;width:50%;border-bottom:2px solid #00C599}.form__main{display:flex;flex-wrap:wrap;justify-content:space-between}.form__main__element{display:flex;flex-direction:column;width:100%}@media (min-width: 1200px){.form__main__element{width:45%}}.form__main__label{padding-bottom:1.25rem;font-family:"Roboto",sans-serif;font-weight:300;color:#000;font-size:.8125rem}.form__main__label::after{content:"*";color:#3146FF}.form__main__input{margin-bottom:2.5rem;border:none;height:2.5rem;background-image:linear-gradient(to right, #000 0%, #000 16.66667%, transparent 16.66667%);background-position:0 bottom;background-size:6px 1px;background-repeat:repeat-x}.form__main__input::placeholder{color:#000;opacity:1}.form__main__area{display:flex;flex-direction:column;width:100%;padding-bottom:3.75rem}.form__main__area__txt{border:none;resize:none;height:5rem;background-image:linear-gradient(to right, #000 0%, #000 16.66667%, transparent 16.66667%);background-position:0 bottom;background-size:6px 1px;background-repeat:repeat-x}@media (min-width: 1200px){.form__main__area__txt{height:2.5rem}}.form__main__area__txt::placeholder{color:#000;opacity:1}.form__main__submit{margin:0 auto}.form__main__submit__btn:hover{cursor:pointer}\n',""])},function(e,t,n){var i=n(3);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){"use strict";n.r(t);n(4)}]);