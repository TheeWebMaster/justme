"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=8)}({10:function(ae,oe,ce){var le,e,t,i,n,r,s,a,o,c;e=window,c=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(c)&&c.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(i=document.createElement("source"),n=function(e){var t,n,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=i.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},s=function(){clearTimeout(t),t=setTimeout(r,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){s(),a&&a.addListener&&a.addListener(s)},i.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),s)),function(e,s){var i,l,c;s.createElement("picture");function t(){}function n(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)}function r(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}}var E={},a=!1,o=s.createElement("img"),u=o.getAttribute,d=o.setAttribute,f=o.removeAttribute,p=s.documentElement,m={},S={algorithm:""},h=navigator.userAgent,C=/rident/.test(h)||/ecko/.test(h)&&h.match(/rv\:(\d+)/)&&35<RegExp.$1,x="currentSrc",A=/\s+\+?\d+(e\d+)?w/,g=/(\([^)]+\))?\s*(.+)/,v=e.picturefillCFG,y="font-size:100%!important;",b=!0,z={},w={},M=e.devicePixelRatio,T={px:1,in:96},L=s.createElement("a"),_=!1,R=/^[ \t\n\r\u000c]+/,P=/^[, \t\n\r\u000c]+/,B=/^[^ \t\n\r\u000c]+/,D=/[,]+$/,W=/^\d+$/,N=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;function $(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function k(e,t){return e.w?(e.cWidth=E.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e}var I,O,U,F,H,Q,j,G,q,V,K,J,X,Y,Z,ee,te,ne=(I=/^([\d\.]+)(em|vw|px)$/,O=r(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in z))if(z[e]=!1,t&&(n=e.match(I)))z[e]=n[1]*T[n[2]];else try{z[e]=new Function("e",O(e))(T)}catch(e){}return z[e]}),re=function(e){if(a){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),r=(t=i.elements||E.qsa(i.context||s,i.reevaluate||i.reselect?E.sel:E.selShort)).length){for(E.setupRun(i),_=!0,n=0;n<r;n++)E.fillImg(t[n],i);E.teardownRun(i)}}};function ie(e,t){return e.res-t.res}function se(e,t){var n,r,i;if(e&&t)for(i=E.parseSet(t),e=E.makeUrl(e),n=0;n<i.length;n++)if(e===E.makeUrl(i[n].url)){r=i[n];break}return r}e.console&&console.warn,x in o||(x="src"),m["image/jpeg"]=!0,m["image/gif"]=!0,m["image/png"]=!0,m["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),E.ns=("pf"+(new Date).getTime()).substr(0,9),E.supSrcset="srcset"in o,E.supSizes="sizes"in o,E.supPicture=!!e.HTMLPictureElement,E.supSrcset&&E.supPicture&&!E.supSizes&&(U=s.createElement("img"),o.srcset="data:,a",U.src="data:,a",E.supSrcset=o.complete===U.complete,E.supPicture=E.supSrcset&&E.supPicture),E.supSrcset&&!E.supSizes?(F="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",Q=function(){2===H.width&&(E.supSizes=!0),l=E.supSrcset&&!E.supSizes,a=!0,setTimeout(re)},(H=s.createElement("img")).onload=Q,H.onerror=Q,H.setAttribute("sizes","9px"),H.srcset=F+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",H.src=F):a=!0,E.selShort="picture>img,img[srcset]",E.sel=E.selShort,E.cfg=S,E.DPR=M||1,E.u=T,E.types=m,E.setSize=t,E.makeUrl=r(function(e){return L.href=e,L.href}),E.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},E.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?E.matchesMedia=function(e){return!e||matchMedia(e).matches}:E.matchesMedia=E.mMQ,E.matchesMedia.apply(this,arguments)},E.mMQ=function(e){return!e||ne(e)},E.calcLength=function(e){var t=ne(e,!0)||!1;return t<0&&(t=!1),t},E.supportsType=function(e){return!e||m[e]},E.parseSize=r(function(e){var t=(e||"").match(g);return{media:t&&t[1],length:t&&t[2]}}),E.parseSet=function(e){return e.cands||(e.cands=function(r,d){function e(e){var t,n=e.exec(r.substring(a));if(n)return t=n[0],a+=t.length,t}var f,p,t,n,i,s=r.length,a=0,m=[];function o(){var e,t,n,r,i,s,a,o,c,l=!1,u={};for(r=0;r<p.length;r++)s=(i=p[r])[i.length-1],a=i.substring(0,i.length-1),o=parseInt(a,10),c=parseFloat(a),W.test(a)&&"w"===s?((e||t)&&(l=!0),0===o?l=!0:e=o):N.test(a)&&"x"===s?((e||t||n)&&(l=!0),c<0?l=!0:t=c):W.test(a)&&"h"===s?((n||t)&&(l=!0),0===o?l=!0:n=o):l=!0;l||(u.url=f,e&&(u.w=e),t&&(u.d=t),n&&(u.h=n),n||t||e||(u.d=1),1===u.d&&(d.has1x=!0),u.set=d,m.push(u))}function c(){for(e(R),t="",n="in descriptor";;){if(i=r.charAt(a),"in descriptor"===n)if($(i))t&&(p.push(t),t="",n="after descriptor");else{if(","===i)return a+=1,t&&p.push(t),void o();if("("===i)t+=i,n="in parens";else{if(""===i)return t&&p.push(t),void o();t+=i}}else if("in parens"===n)if(")"===i)t+=i,n="in descriptor";else{if(""===i)return p.push(t),void o();t+=i}else if("after descriptor"===n)if($(i));else{if(""===i)return void o();n="in descriptor",a-=1}a+=1}}for(;;){if(e(P),s<=a)return m;f=e(B),p=[],","===f.slice(-1)?(f=f.replace(D,""),o()):c()}}(e.srcset,e)),e.cands},E.getEmValue=function(){var e;if(!i&&(e=s.body)){var t=s.createElement("div"),n=p.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",p.style.cssText=y,e.style.cssText=y,e.appendChild(t),i=t.offsetWidth,e.removeChild(t),i=parseFloat(i,10),p.style.cssText=n,e.style.cssText=r}return i||16},E.calcListLength=function(l){if(!(l in w)||S.uT){var e=E.calcLength(function(){var e,t,n,r,i,s,a,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,c=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=(t=function(e){var t,n="",r=[],i=[],s=0,a=0,o=!1;function c(){n&&(r.push(n),n="")}function l(){r[0]&&(i.push(r),r=[])}for(;;){if(""===(t=e.charAt(a)))return c(),l(),i;if(o){if("*"===t&&"/"===e[a+1]){o=!1,a+=2,c();continue}a+=1}else{if($(t)){if(e.charAt(a-1)&&$(e.charAt(a-1))||!n){a+=1;continue}if(0===s){c(),a+=1;continue}t=" "}else if("("===t)s+=1;else if(")"===t)s-=1;else{if(","===t){c(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){o=!0,a+=2;continue}}n+=t,a+=1}}}(l)).length,e=0;e<n;e++)if(a=i=(r=t[e])[r.length-1],o.test(a)&&0<=parseFloat(a)||c.test(a)||"0"===a||"-0"===a||"+0"===a){if(s=i,r.pop(),0===r.length)return s;if(r=r.join(" "),E.matchesMedia(r))return s}return"100vw"}());w[l]=e||T.width}return w[l]},E.setRes=function(e){var t;if(e)for(var n=0,r=(t=E.parseSet(e)).length;n<r;n++)k(t[n],e.sizes);return t},E.setRes.res=k,E.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,a,o,c,l,u,d,f,p,m,h,A,g=t[E.ns],v=E.DPR;if(o=g.curSrc||t[x],(c=g.curCan||(y=t,b=o,!(z=e[0].set)&&b&&(z=(z=y[E.ns].sets)&&z[z.length-1]),(w=se(b,z))&&(b=E.makeUrl(b),y[E.ns].curSrc=b,(y[E.ns].curCan=w).res||k(w,w.set.sizes)),w))&&c.set===e[0].set&&((u=C&&!t.complete&&c.res-.1>v)||(c.cached=!0,c.res>=v&&(a=c))),!a)for(e.sort(ie),a=e[(s=e.length)-1],r=0;r<s;r++)if((n=e[r]).res>=v){a=e[i=r-1]&&(u||o!==E.makeUrl(n.url))&&(d=e[i].res,f=n.res,p=v,m=e[i].cached,A=h=void 0,p<("saveData"===S.algorithm?2.7<d?p+1:(A=(f-p)*(h=Math.pow(d-.6,1.5)),m&&(A+=.1*h),d+A):1<p?Math.sqrt(d*f):d))?e[i]:n;break}a&&(l=E.makeUrl(a.url),g.curSrc=l,g.curCan=a,l!==o&&E.setSrc(t,a),E.setSize(t))}var y,b,z,w},E.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},E.getSet=function(e){var t,n,r,i=!1,s=e[E.ns].sets;for(t=0;t<s.length&&!i;t++)if((n=s[t]).srcset&&E.matchesMedia(n.media)&&(r=E.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},E.parseSets=function(e,t,n){var r,i,s,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[E.ns];void 0!==c.src&&!n.src||(c.src=u.call(e,"src"),c.src?d.call(e,"data-pfsrc",c.src):f.call(e,"data-pfsrc")),void 0!==c.srcset&&!n.srcset&&E.supSrcset&&!e.srcset||(r=u.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,function(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(i=a[n])[E.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}(t,c.sets)),c.srcset?(i={srcset:c.srcset,sizes:u.call(e,"sizes")},c.sets.push(i),(s=(l||c.src)&&A.test(c.srcset||""))||!c.src||se(c.src,i)||i.has1x||(i.srcset+=", "+c.src,i.cands.push({url:c.src,d:1,set:i}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||i&&!E.supSrcset||s&&!E.supSizes),a&&E.supSrcset&&!c.supported&&(r?(d.call(e,"data-pfsrcset",r),e.srcset=""):f.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==E.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},E.fillImg=function(e,t){var n,r,i,s,a,o=t.reselect||t.reevaluate;e[E.ns]||(e[E.ns]={}),n=e[E.ns],!o&&n.evaled===c||(n.parsed&&!t.reevaluate||E.parseSets(e,e.parentNode,t),n.supported?n.evaled=c:(r=e,s=E.getSet(r),a=!1,"pending"!==s&&(a=c,s&&(i=E.setRes(s),E.applySetCandidate(i,r))),r[E.ns].evaled=a))},E.setupRun=function(){_&&!b&&M===e.devicePixelRatio||(b=!1,M=e.devicePixelRatio,z={},w={},E.DPR=M||1,T.width=Math.max(e.innerWidth||0,p.clientWidth),T.height=Math.max(e.innerHeight||0,p.clientHeight),T.vw=T.width/100,T.vh=T.height/100,c=[T.height,T.width,M].join("-"),T.em=E.getEmValue(),T.rem=T.em)},E.supPicture?(re=t,E.fillImg=t):(J=e.attachEvent?/d$|^c/:/d$|^c|^i/,X=function(){var e=s.readyState||"";Y=setTimeout(X,"loading"===e?200:999),s.body&&(E.fillImgs(),(j=j||J.test(e))&&clearTimeout(Y))},Y=setTimeout(X,s.body?9:99),Z=p.clientHeight,n(e,"resize",(G=function(){b=Math.max(e.innerWidth||0,p.clientWidth)!==T.width||p.clientHeight!==Z,Z=p.clientHeight,b&&E.fillImgs()},99,K=function(){var e=new Date-V;e<99?q=setTimeout(K,99-e):(q=null,G())},function(){V=new Date,q=q||setTimeout(K,99)})),n(s,"readystatechange",X)),E.picturefill=re,E.fillImgs=re,E.teardownRun=t,re._=E,e.picturefillCFG={pf:E,push:function(e){var t=e.shift();"function"==typeof E[t]?E[t].apply(E,e):(S[t]=e[0],_&&E.fillImgs({reselect:!0}))}};for(;v&&v.length;)e.picturefillCFG.push(v.shift());e.picturefill=re,"object"==_typeof(ae.exports)?ae.exports=re:void 0===(le=function(){return re}.call(oe,ce,oe,ae))||(ae.exports=le),E.supPicture||(m["image/webp"]=(ee="image/webp",(te=new e.Image).onerror=function(){m[ee]=!1,re()},te.onload=function(){m[ee]=1===te.width,re()},te.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==","pending"))}(window,document)},8:function(e,t,n){n.r(t),n(9),n(10)},9:function(e,t,n){var r,i;r="undefined"!=typeof window?window:{},i=function(r,p){var m,h;if(function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in h=r.lazySizesConfig||r.lazysizesConfig||{},t)e in h||(h[e]=t[e])}(),!p||!p.getElementsByClassName)return{init:function(){},cfg:h,noSupport:!0};function s(e,t){return ye[t]||(ye[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),ye[t].test(e.getAttribute("class")||"")&&ye[t]}function d(e,t){s(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)}function f(e,t){var n;(n=s(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))}function A(t,n,e){var r=e?"addEventListener":"removeEventListener";e&&A(t,n),ve.forEach(function(e){t[r](e,n)})}function g(e,t,n,r,i){var s=p.createEvent("Event");return(n=n||{}).instance=m,s.initEvent(t,!r,!i),s.detail=n,e.dispatchEvent(s),s}function v(e,t){var n;!fe&&(n=r.picturefill||h.pf)?(t&&t.src&&!e.getAttribute("srcset")&&e.setAttribute("srcset",t.src),n({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)}function a(e,t){return(getComputedStyle(e,null)||{})[t]}function o(e,t,n){for(n=n||e.offsetWidth;n<h.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n}function e(n,e){return e?function(){ze(n)}:function(){var e=this,t=arguments;ze(function(){n.apply(e,t)})}}function t(e){function t(){r=null,e()}function n(){var e=de.now()-i;e<99?me(n,99-e):(Ae||t)(t)}var r,i;return function(){i=de.now(),r=r||me(n,99)}}function n(){!n.i&&p.getElementsByClassName&&(n.i=!0,Ee._(),we._())}var i,c,l,u,y,b,z,w,E,S,C,x,M,T,L,_,R,P,B,D,W,N,$,k,I,O,U,F,H,Q,j,G,q,V,K,J,X,Y,Z,ee,te,ne,re,ie,se,ae,oe,ce,le,ue=p.documentElement,de=r.Date,fe=r.HTMLPictureElement,pe=r.addEventListener,me=r.setTimeout,he=r.requestAnimationFrame||me,Ae=r.requestIdleCallback,ge=/^picture$/i,ve=["load","error","lazyincluded","_lazyloaded"],ye={},be=Array.prototype.forEach,ze=(ae=[],oe=se=[],(le=function(e,t){re&&!t?e.apply(this,arguments):(oe.push(e),ie||(ie=!0,(p.hidden?me:he)(ce)))})._lsFlush=ce=function(){var e=oe;for(oe=se.length?ae:se,ie=!(re=!0);e.length;)e.shift()();re=!1},le),we=($=/^img$/i,k=/^iframe$/i,I="onscroll"in r&&!/(gle|ing)bot/.test(navigator.userAgent),F=-1,H=function(e){U--,e&&!(U<0)&&e.target||(U=0)},Q=function(e){return null==N&&(N="hidden"==a(p.body,"visibility")),N||"hidden"!=a(e.parentNode,"visibility")&&"hidden"!=a(e,"visibility")},j=function(e,t){var n,r=e,i=Q(e);for(P-=t,W+=t,B-=t,D+=t;i&&(r=r.offsetParent)&&r!=p.body&&r!=ue;)(i=0<(a(r,"opacity")||1))&&"visible"!=a(r,"overflow")&&(n=r.getBoundingClientRect(),i=D>n.left&&B<n.right&&W>n.top-1&&P<n.bottom+1);return i},i=G=function(){var e,t,n,r,i,s,a,o,c,l,u,d,f=m.elements;if((T=h.loadMode)&&U<8&&(e=f.length)){for(t=0,F++;t<e;t++)if(f[t]&&!f[t]._lazyRace)if(!I||m.prematureUnveil&&m.prematureUnveil(f[t]))Z(f[t]);else if((o=f[t].getAttribute("data-expand"))&&(s=1*o)||(s=O),l||(l=!h.expand||h.expand<1?500<ue.clientHeight&&500<ue.clientWidth?500:370:h.expand,u=(m._defEx=l)*h.expFactor,d=h.hFac,N=null,O<u&&U<1&&2<F&&2<T&&!p.hidden?(O=u,F=0):O=1<T&&1<F&&U<6?l:0),c!==s&&(_=innerWidth+s*d,R=innerHeight+s,a=-1*s,c=s),n=f[t].getBoundingClientRect(),(W=n.bottom)>=a&&(P=n.top)<=R&&(D=n.right)>=a*d&&(B=n.left)<=_&&(W||D||B||P)&&(h.loadHidden||Q(f[t]))&&(x&&U<3&&!o&&(T<3||F<4)||j(f[t],s))){if(Z(f[t]),i=!0,9<U)break}else!i&&x&&!r&&U<4&&F<4&&2<T&&(C[0]||h.preloadAfterLoad)&&(C[0]||!o&&(W||D||B||P||"auto"!=f[t].getAttribute(h.sizesAttr)))&&(r=C[0]||f[t]);r&&!i&&Z(r)}},l=U=O=0,u=h.throttleDelay,y=h.ricTimeout,b=Ae&&49<y?function(){Ae(Se,{timeout:y}),y!==h.ricTimeout&&(y=h.ricTimeout)}:e(function(){me(Se)},!0),q=function(e){var t;(e=!0===e)&&(y=33),c||(c=!0,(t=u-(de.now()-l))<0&&(t=0),e||t<9?b():me(b,t))},K=e(V=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(H(e),d(t,h.loadedClass),f(t,h.loadingClass),A(t,J),g(t,"lazyloaded"))}),J=function(e){K({target:e.target})},X=function(e){var t,n=e.getAttribute(h.srcsetAttr);(t=h.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},Y=e(function(t,e,n,r,i){var s,a,o,c,l,u;(l=g(t,"lazybeforeunveil",e)).defaultPrevented||(r&&(n?d(t,h.autosizesClass):t.setAttribute("sizes",r)),a=t.getAttribute(h.srcsetAttr),s=t.getAttribute(h.srcAttr),i&&(c=(o=t.parentNode)&&ge.test(o.nodeName||"")),u=e.firesLoad||"src"in t&&(a||s||c),l={target:t},d(t,h.loadingClass),u&&(clearTimeout(M),M=me(H,2500),A(t,J,!0)),c&&be.call(o.getElementsByTagName("source"),X),a?t.setAttribute("srcset",a):s&&!c&&(k.test(t.nodeName)?function(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}}(t,s):t.src=s),i&&(a||c)&&v(t,{src:s})),t._lazyRace&&delete t._lazyRace,f(t,h.lazyClass),ze(function(){var e=t.complete&&1<t.naturalWidth;u&&!e||(e&&d(t,"ls-is-cached"),V(l),t._lazyCache=!0,me(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&U--},!0)}),Z=function(e){if(!e._lazyRace){var t,n=$.test(e.nodeName),r=n&&(e.getAttribute(h.sizesAttr)||e.getAttribute("sizes")),i="auto"==r;(!i&&x||!n||!e.getAttribute("src")&&!e.srcset||e.complete||s(e,h.errorClass)||!s(e,h.lazyClass))&&(t=g(e,"lazyunveilread").detail,i&&Ee.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,U++,Y(e,t,i,r,n))}},ee=t(function(){h.loadMode=3,q()}),ne=function(){x||(de.now()-L<999?me(ne,999):(x=!0,h.loadMode=3,q(),pe("scroll",te,!0)))},{_:function(){L=de.now(),m.elements=p.getElementsByClassName(h.lazyClass),C=p.getElementsByClassName(h.lazyClass+" "+h.preloadClass),pe("scroll",q,!0),pe("resize",q,!0),r.MutationObserver?new MutationObserver(q).observe(ue,{childList:!0,subtree:!0,attributes:!0}):(ue.addEventListener("DOMNodeInserted",q,!0),ue.addEventListener("DOMAttrModified",q,!0),setInterval(q,999)),pe("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){p.addEventListener(e,q,!0)}),/d$|^c/.test(p.readyState)?ne():(pe("load",ne),p.addEventListener("DOMContentLoaded",q),me(ne,2e4)),m.elements.length?(G(),ze._lsFlush()):q()},checkElems:q,unveil:Z,_aLSL:te=function(){3==h.loadMode&&(h.loadMode=2),ee()}}),Ee=(w=e(function(e,t,n,r){var i,s,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),ge.test(t.nodeName||""))for(s=0,a=(i=t.getElementsByTagName("source")).length;s<a;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||v(e,n.detail)}),E=function(e,t,n){var r,i=e.parentNode;i&&(n=o(e,i,n),(r=g(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&w(e,i,r,n))},{_:function(){z=p.getElementsByClassName(h.autosizesClass),pe("resize",S)},checkElems:S=t(function(){var e,t=z.length;if(t)for(e=0;e<t;e++)E(z[e])}),updateElem:E});function Se(){c=!1,l=de.now(),i()}return me(function(){h.init&&n()}),m={cfg:h,autoSizer:Ee,loader:we,init:n,uP:v,aC:d,rC:f,hC:s,fire:g,gW:o,rAF:ze}}(r,r.document),r.lazySizes=i,e.exports&&(e.exports=i)}});