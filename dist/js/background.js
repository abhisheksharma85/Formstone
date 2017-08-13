/*! formstone v1.3.3 [background.js] 2017-08-13 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){e(),G.on("scroll",e)}function d(){E.iterate.call(I,v),E.iterate.call(J,x),E.iterate.call(J,y)}function e(){H=G.scrollTop()+b.windowHeight,H<0&&(H=0),E.iterate.call(J,y)}function f(){I=a(B.base),J=a(B.lazy),E.iterate.call(J,x)}function g(b){b.youTubeGuid=0,b.$container=a('<div class="'+C.container+'"></div>').appendTo(this),b.thisClasses=[C.base,b.customClass],b.visible=!0,b.lazy&&(b.visible=!1,b.thisClasses.push(C.lazy)),this.addClass(b.thisClasses.join(" ")),f(),b.lazy?(x(b),y(b)):i(b)}function h(a){a.$container.remove(),this.removeClass(a.thisClasses.join(" ")).off(D.namespace),f()}function i(a){if(a.visible){var b=a.source;a.source=null,j(a,b,!0)}}function j(b,c,d){if(c!==b.source&&b.visible){if(b.source=c,b.responsive=!1,b.isYouTube=!1,"object"===a.type(c)&&"string"===a.type(c.video)){var e=c.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);e&&e.length>=1&&(b.isYouTube=!0,b.videoId=e[1])}var f=!b.isYouTube&&"object"===a.type(c)&&(c.hasOwnProperty("mp4")||c.hasOwnProperty("ogg")||c.hasOwnProperty("webm"));if(b.video=b.isYouTube||f,b.playing=!1,b.isYouTube)b.playerReady=!1,b.posterLoaded=!1,n(b,c,d);else if("object"===a.type(c)&&c.hasOwnProperty("poster"))m(b,c,d);else{var g=c;if("object"===a.type(c)){var h,i=[],j=[];for(h in c)c.hasOwnProperty(h)&&j.push(h);j.sort(E.sortAsc);for(h in j)j.hasOwnProperty(h)&&i.push({width:parseInt(j[h]),url:c[j[h]],mq:F.matchMedia("(min-width: "+parseInt(j[h])+"px)")});b.responsive=!0,b.sources=i,g=k(b)}l(b,g,!1,d)}}else b.$el.trigger(D.loaded)}function k(a){var c=a.source;if(a.responsive){c=a.sources[0].url;for(var d in a.sources)a.sources.hasOwnProperty(d)&&(b.support.nativeMatchMedia?a.sources[d].mq.matches&&(c=a.sources[d].url):a.sources[d].width<b.fallbackWidth&&(c=a.sources[d].url))}return c}function l(b,c,d,e){var f=[C.media,C.image,e!==!0?C.animated:""].join(" "),g=a('<div class="'+f+'" aria-hidden="true"><img alt=""></div>'),h=g.find("img"),i=c;h.one(D.load,function(){K&&g.addClass(C.native).css({backgroundImage:"url('"+i+"')"}),g.fsTransition({property:"opacity"},function(){d||o(b)}).css({opacity:1}),w(b),d&&!e||b.$el.trigger(D.loaded)}).one(D.error,b,p).attr("src",i),b.responsive&&g.addClass(C.responsive),b.$container.append(g),(h[0].complete||4===h[0].readyState)&&h.trigger(D.load),b.currentSource=i}function m(c,d,e){if(c.source&&c.source.poster&&(l(c,c.source.poster,!0,!0),e=!1),!b.isMobile){var f=[C.media,C.video,e!==!0?C.animated:""].join(" "),g='<div class="'+f+'" aria-hidden="true">';g+="<video",c.loop&&(g+=" loop"),c.mute&&(g+=" muted"),g+=">",c.source.webm&&(g+='<source src="'+c.source.webm+'" type="video/webm" />'),c.source.mp4&&(g+='<source src="'+c.source.mp4+'" type="video/mp4" />'),c.source.ogg&&(g+='<source src="'+c.source.ogg+'" type="video/ogg" />'),g+="</video>",g+="</div>";var h=a(g),i=h.find("video");i.one(D.loadedMetaData,function(a){h.fsTransition({property:"opacity"},function(){o(c)}).css({opacity:1}),w(c),c.$el.trigger(D.loaded),c.autoPlay&&s(c)}),c.$container.append(h)}}function n(c,d,e){if(!c.videoId){var f=d.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);c.videoId=f[1]}if(c.posterLoaded||(c.source.poster||(c.source.poster="//img.youtube.com/vi/"+c.videoId+"/0.jpg"),c.posterLoaded=!0,l(c,c.source.poster,!0,e),e=!1),!b.isMobile)if(a("script[src*='youtube.com/iframe_api']").length||a("head").append('<script src="//www.youtube.com/iframe_api"></script>'),L){var g=c.guid+"_"+c.youTubeGuid++,h=[C.media,C.embed,e!==!0?C.animated:""].join(" "),i='<div class="'+h+'" aria-hidden="true">';i+='<div id="'+g+'"></div>',i+="</div>";var j=a(i),k=a.extend(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:g,loop:c.loop?1:0,autoplay:1,origin:F.location.protocol+"//"+F.location.host},c.youtubeOptions);k.autoplay=1,c.$container.append(j),c.player&&(c.oldPlayer=c.player,c.player=null),c.player=new F.YT.Player(g,{videoId:c.videoId,playerVars:k,events:{onReady:function(a){c.playerReady=!0,c.mute&&c.player.mute(),c.autoPlay||c.player.pauseVideo()},onStateChange:function(a){c.playing||a.data!==F.YT.PlayerState.PLAYING?c.loop&&c.playing&&a.data===F.YT.PlayerState.ENDED&&c.player.playVideo():(c.playing=!0,j.fsTransition({property:"opacity"},function(){o(c)}).css({opacity:1}),w(c),c.$el.trigger(D.loaded)),c.$el.find(B.embed).addClass(C.ready)},onPlaybackQualityChange:function(a){},onPlaybackRateChange:function(a){},onError:function(a){p({data:c})},onApiChange:function(a){}}}),w(c)}else M.push({data:c,source:d})}function o(a){var b=a.$container.find(B.media);b.length>=1&&(b.not(":last").remove(),a.oldPlayer=null)}function p(a){var b=a.data;b.$el.trigger(D.error)}function q(a){var b=a.$container.find(B.media);b.length>=1&&b.fsTransition({property:"opacity"},function(){b.remove(),delete a.source}).css({opacity:0})}function r(a){if(a.video&&a.playing){if(a.isYouTube)a.playerReady?a.player.pauseVideo():a.autoPlay=!1;else{var b=a.$container.find("video");b.length&&b[0].pause()}a.playing=!1}}function s(a){if(a.video&&!a.playing)if(a.isYouTube)a.playerReady?a.player.playVideo():a.autoPlay=!0;else{var b=a.$container.find("video");b.length&&b[0].play(),a.playing=!0}}function t(a){if(a.video)if(a.isYouTube&&a.playerReady)a.player.mute();else{var b=a.$container.find("video");b.length&&(b[0].muted=!0)}a.mute=!0}function u(a){if(a.video){if(a.isYouTube&&a.playerReady)a.player.unMute();else{var b=a.$container.find("video");b.length&&(b[0].muted=!1)}a.playing=!0}a.mute=!1}function v(a){if(a.visible)if(a.responsive){var b=k(a);b!==a.currentSource?l(a,b,!1,!0):w(a)}else w(a)}function w(a){for(var b=a.$container.find(B.media),c=0,d=b.length;c<d;c++){var e=b.eq(c),f=a.isYouTube?"iframe":e.find("video").length?"video":"img",g=e.find(f);if(g.length&&("img"!==f||!K)){var h=a.$el.outerWidth(),i=a.$el.outerHeight(),j=z(a,g);a.width=j.width,a.height=j.height,a.left=0,a.top=0;var k=a.isYouTube?a.embedRatio:a.width/a.height;a.height=i,a.width=a.height*k,a.width<h&&(a.width=h,a.height=a.width/k),a.left=-(a.width-h)/2,a.top=-(a.height-i)/2,e.css({height:a.height,width:a.width,left:a.left,top:a.top})}}}function x(a){a.scrollTop=a.$el.offset().top}function y(a){!a.visible&&a.scrollTop<H+a.lazyEdge&&(a.visible=!0,i(a))}function z(b,c){if(b.isYouTube)return{height:500,width:500/b.embedRatio};if(c.is("img")){var d=c[0];if("undefined"!==a.type(d.naturalHeight))return{height:d.naturalHeight,width:d.naturalWidth};var e=new Image;return e.src=d.src,{height:e.height,width:e.width}}return{height:c[0].videoHeight,width:c[0].videoWidth}}var A=b.Plugin("background",{widget:!0,defaults:{autoPlay:!0,customClass:"",embedRatio:1.777777,lazy:!1,lazyEdge:100,loop:!0,mute:!0,source:null,youtubeOptions:{}},classes:["container","media","animated","responsive","native","fixed","ready","lazy"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_setup:c,_construct:g,_destruct:h,_resize:d,play:s,pause:r,mute:t,unmute:u,resize:w,load:j,unload:q}}),B=A.classes,C=B.raw,D=A.events,E=A.functions,F=b.window,G=b.$window,H=0,I=[],J=[],K="backgroundSize"in b.document.documentElement.style,L=!1,M=[];F.onYouTubeIframeAPIReady=function(){L=!0;for(var a in M)M.hasOwnProperty(a)&&n(M[a].data,M[a].source);M=[]}});