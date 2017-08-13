/*! formstone v1.3.3 [core.js] 2017-08-13 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){p.Plugins[a].initialized||(p.Plugins[a].methods._setup.call(document),p.Plugins[a].initialized=!0)}function c(a,b,c,d){var e,f={raw:{}};d=d||{};for(e in d)d.hasOwnProperty(e)&&("classes"===a?(f.raw[d[e]]=b+"-"+d[e],f[d[e]]="."+b+"-"+d[e]):(f.raw[e]=d[e],f[e]=d[e]+"."+b));for(e in c)c.hasOwnProperty(e)&&("classes"===a?(f.raw[e]=c[e].replace(/{ns}/g,b),f[e]=c[e].replace(/{ns}/g,"."+b)):(f.raw[e]=c[e].replace(/.{ns}/g,""),f[e]=c[e].replace(/{ns}/g,b)));return f}function d(){var a,b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"},c=["transition","-webkit-transition"],d={transform:"transform",MozTransform:"-moz-transform",OTransform:"-o-transform",msTransform:"-ms-transform",webkitTransform:"-webkit-transform"},e="transitionend",f="",g="",h=document.createElement("div");for(a in b)if(b.hasOwnProperty(a)&&a in h.style){e=b[a],p.support.transition=!0;break}s.transitionEnd=e+".{ns}";for(a in c)if(c.hasOwnProperty(a)&&c[a]in h.style){f=c[a];break}p.transition=f;for(a in d)if(d.hasOwnProperty(a)&&d[a]in h.style){p.support.transform=!0,g=d[a];break}p.transform=g}function e(){p.windowWidth=p.$window.width(),p.windowHeight=p.$window.height(),t=o.startTimer(t,u,f)}function f(){for(var a in p.ResizeHandlers)p.ResizeHandlers.hasOwnProperty(a)&&p.ResizeHandlers[a].callback.call(window,p.windowWidth,p.windowHeight)}function g(){if(p.support.raf){p.window.requestAnimationFrame(g);for(var a in p.RAFHandlers)p.RAFHandlers.hasOwnProperty(a)&&p.RAFHandlers[a].callback.call(window)}}function h(a,b){return parseInt(a.priority)-parseInt(b.priority)}var i,j,k,l="undefined"!=typeof window?window:this,m=l.document,n=function(){this.Version="1.3.3",this.Plugins={},this.DontConflict=!1,this.Conflicts={fn:{}},this.ResizeHandlers=[],this.RAFHandlers=[],this.window=l,this.$window=a(l),this.document=m,this.$document=a(m),this.$body=null,this.windowWidth=0,this.windowHeight=0,this.fallbackWidth=1024,this.fallbackHeight=768,this.userAgent=window.navigator.userAgent||window.navigator.vendor||window.opera,this.isFirefox=/Firefox/i.test(this.userAgent),this.isChrome=/Chrome/i.test(this.userAgent),this.isSafari=/Safari/i.test(this.userAgent)&&!this.isChrome,this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent),this.isIEMobile=/IEMobile/i.test(this.userAgent),this.isFirefoxMobile=this.isFirefox&&this.isMobile,this.transform=null,this.transition=null,this.support={file:!!(window.File&&window.FileList&&window.FileReader),history:!!(window.history&&window.history.pushState&&window.history.replaceState),matchMedia:!(!window.matchMedia&&!window.msMatchMedia),pointer:!!window.PointerEvent,raf:!(!window.requestAnimationFrame||!window.cancelAnimationFrame),touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),transition:!1,transform:!1}},o={killEvent:function(a,b){try{a.preventDefault(),a.stopPropagation(),b&&a.stopImmediatePropagation()}catch(a){}},killGesture:function(a){try{a.preventDefault()}catch(a){}},lockViewport:function(b){v[b]=!0,a.isEmptyObject(v)||w||(i.length?i.attr("content",k):i=a("head").append('<meta name="viewport" content="'+k+'">'),p.$body.on(s.gestureChange,o.killGesture).on(s.gestureStart,o.killGesture).on(s.gestureEnd,o.killGesture),w=!0)},unlockViewport:function(b){"undefined"!==a.type(v[b])&&delete v[b],a.isEmptyObject(v)&&w&&(i.length&&(j?i.attr("content",j):i.remove()),p.$body.off(s.gestureChange).off(s.gestureStart).off(s.gestureEnd),w=!1)},startTimer:function(a,b,c,d){return o.clearTimer(a),d?setInterval(c,b):setTimeout(c,b)},clearTimer:function(a,b){a&&(b?clearInterval(a):clearTimeout(a),a=null)},sortAsc:function(a,b){return parseInt(a,10)-parseInt(b,10)},sortDesc:function(a,b){return parseInt(b,10)-parseInt(a,10)},decodeEntities:function(a){var b=p.document.createElement("textarea");return b.innerHTML=a,b.value},parseQueryString:function(a){for(var b={},c=a.slice(a.indexOf("?")+1).split("&"),d=0;d<c.length;d++){var e=c[d].split("=");b[e[0]]=e[1]}return b}},p=new n,q=a.Deferred(),r={base:"{ns}",element:"{ns}-element"},s={namespace:".{ns}",beforeUnload:"beforeunload.{ns}",blur:"blur.{ns}",change:"change.{ns}",click:"click.{ns}",dblClick:"dblclick.{ns}",drag:"drag.{ns}",dragEnd:"dragend.{ns}",dragEnter:"dragenter.{ns}",dragLeave:"dragleave.{ns}",dragOver:"dragover.{ns}",dragStart:"dragstart.{ns}",drop:"drop.{ns}",error:"error.{ns}",focus:"focus.{ns}",focusIn:"focusin.{ns}",focusOut:"focusout.{ns}",gestureChange:"gesturechange.{ns}",gestureStart:"gesturestart.{ns}",gestureEnd:"gestureend.{ns}",input:"input.{ns}",keyDown:"keydown.{ns}",keyPress:"keypress.{ns}",keyUp:"keyup.{ns}",load:"load.{ns}",mouseDown:"mousedown.{ns}",mouseEnter:"mouseenter.{ns}",mouseLeave:"mouseleave.{ns}",mouseMove:"mousemove.{ns}",mouseOut:"mouseout.{ns}",mouseOver:"mouseover.{ns}",mouseUp:"mouseup.{ns}",panStart:"panstart.{ns}",pan:"pan.{ns}",panEnd:"panend.{ns}",resize:"resize.{ns}",scaleStart:"scalestart.{ns}",scaleEnd:"scaleend.{ns}",scale:"scale.{ns}",scroll:"scroll.{ns}",select:"select.{ns}",swipe:"swipe.{ns}",touchCancel:"touchcancel.{ns}",touchEnd:"touchend.{ns}",touchLeave:"touchleave.{ns}",touchMove:"touchmove.{ns}",touchStart:"touchstart.{ns}"},t=null,u=20,v=[],w=!1;return n.prototype.NoConflict=function(){p.DontConflict=!0;for(var b in p.Plugins)p.Plugins.hasOwnProperty(b)&&(a[b]=p.Conflicts[b],a.fn[b]=p.Conflicts.fn[b])},n.prototype.Plugin=function(d,e){return p.Plugins[d]=function(b,d){function e(c){var e,f,h,i="object"===a.type(c),j=this,k=a();for(c=a.extend(!0,{},d.defaults||{},i?c:{}),f=0,h=j.length;f<h;f++)if(e=j.eq(f),!g(e)){var l="__"+d.guid++,m=d.classes.raw.base+l,o=e.data(b+"-options"),p=a.extend(!0,{$el:e,guid:l,rawGuid:m,dotGuid:"."+m},c,"object"===a.type(o)?o:{});e.addClass(d.classes.raw.element).data(n,p),d.methods._construct.apply(e,[p].concat(Array.prototype.slice.call(arguments,i?1:0))),k=k.add(e)}for(f=0,h=k.length;f<h;f++)e=k.eq(f),d.methods._postConstruct.apply(e,[g(e)]);return j}function f(a){d.functions.iterate.apply(this,[d.methods._destruct].concat(Array.prototype.slice.call(arguments,1))),this.removeClass(d.classes.raw.element).removeData(n)}function g(a){return a.data(n)}function i(b){if(this instanceof a){var c=d.methods[b];return"object"!==a.type(b)&&b?c&&0!==b.indexOf("_")?d.functions.iterate.apply(this,[c].concat(Array.prototype.slice.call(arguments,1))):this:e.apply(this,arguments)}}function j(b){var c=d.utilities[b]||d.utilities._initialize||!1;if(c)return c.apply(window,Array.prototype.slice.call(arguments,"object"===a.type(b)?0:1))}function k(b){d.defaults=a.extend(!0,d.defaults,b||{})}function l(b){for(var c=this,d=0,e=c.length;d<e;d++){var f=c.eq(d),h=g(f)||{};"undefined"!==a.type(h.$el)&&b.apply(f,[h].concat(Array.prototype.slice.call(arguments,1)))}return c}var m="fs-"+b,n="fs"+b.replace(/(^|\s)([a-z])/g,function(a,b,c){return b+c.toUpperCase()});return d.initialized=!1,d.priority=d.priority||10,d.classes=c("classes",m,r,d.classes),d.events=c("events",b,s,d.events),d.functions=a.extend({getData:g,iterate:l},o,d.functions),d.methods=a.extend(!0,{_setup:a.noop,_construct:a.noop,_postConstruct:a.noop,_destruct:a.noop,_resize:!1,destroy:f},d.methods),d.utilities=a.extend(!0,{_initialize:!1,_delegate:!1,defaults:k},d.utilities),d.widget&&(p.Conflicts.fn[b]=a.fn[b],a.fn[n]=i,p.DontConflict||(a.fn[b]=a.fn[n])),p.Conflicts[b]=a[b],a[n]=d.utilities._delegate||j,p.DontConflict||(a[b]=a[n]),d.namespace=b,d.namespaceClean=n,d.guid=0,d.methods._resize&&(p.ResizeHandlers.push({namespace:b,priority:d.priority,callback:d.methods._resize}),p.ResizeHandlers.sort(h)),d.methods._raf&&(p.RAFHandlers.push({namespace:b,priority:d.priority,callback:d.methods._raf}),p.RAFHandlers.sort(h)),d}(d,e),q.then(function(){b(d)}),p.Plugins[d]},p.$window.on("resize.fs",e),e(),g(),a(function(){p.$body=a("body"),i=a('meta[name="viewport"]'),j=!!i.length&&i.attr("content"),k="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",q.resolve(),p.support.nativeMatchMedia=p.support.matchMedia&&!a("html").hasClass("no-matchmedia")}),s.clickTouchStart=s.click+" "+s.touchStart,d(),window.Formstone=p,p});