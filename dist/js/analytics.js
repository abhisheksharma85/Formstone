/*! formstone v0.6.12 [analytics.js] 2015-07-17 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){q=b.$body}function d(){n.scrollDepth&&j()}function e(){return arguments.length&&"object"!==a.type(arguments[0])?"destroy"===arguments[0]?g.apply(this):l.apply(this,arguments):f.apply(this,arguments),null}function f(b){!t&&q.length&&(t=!0,z="function"===a.type(o.ga),A="undefined"!==a.type(o.dataLayer)&&"function"===a.type(o.dataLayer.push),n=a.extend(n,b||{}),n.scrollDepth&&(j(),p.on(s.scroll,h)),q.on(s.click,"*["+v+"]",k))}function g(){t&&q.length&&(p.off(s.namespace),q.off(s.namespace))}function h(){r.startTimer(y,250,i)}function i(){for(var c,d=b.$window.scrollTop()+b.windowHeight,e=0,f=1/w,g=f,h=1;w>=h;h++){if(c=Math.round(100*g).toString(),x[c].passed)e++;else if(d>x[c].edge){x[c].passed=!0;var i=a.mediaquery("state");l("ScrollDepth","Depth","MinWidth:"+i.minWidth+"px",c)}g+=f}e>=w&&p.off(s.scroll)}function j(){var a,b=q.outerHeight(),c=1/w,d=c;x={};for(var e=1;w>=e;e++)a=Math.round(100*d).toString(),x[a]={edge:parseInt(b*d),passsed:!1},d+=c}function k(b){if(z||A){b.preventDefault();var c=a(this),d=c.attr("href"),e=c.data(u).split(",");for(var f in e)e.hasOwnProperty(f)&&(e[f]=a.trim(e[f]));l(e[0],e[1],e[2]||d,e[3],e[4],c)}}function l(b,c,d,e,f,g){if("function"===a.type(o.ga)){var h={hitType:"event",location:o.location,title:o.document.title};if(b&&(h.eventCategory=b),c&&(h.eventAction=c),d&&(h.eventLabel=d),e&&(h.eventValue=e),f&&(h.nonInteraction=f),"undefined"!==a.type(g)&&!g.attr("data-analytics-stop")){var i="undefined"!==a.type(g[0].href)?g[0].href:"",j=!i.match(/^mailto\:/i)&&!i.match(/^tel\:/i)&&i.indexOf(":")<0?o.location.protocol+"//"+o.location.hostname+"/"+i:i;""!==i&&(g.attr("target")?o.open(j,g.attr("target")):h.hitCallback=function(){document.location=j})}z?o.ga("send",h):A&&o.dataLayer.push(h)}}var m=b.Plugin("analytics",{methods:{_setup:c,_resize:d},utilities:{_delegate:e}}),n={filetypes:/\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|txt|rar|wma|mov|avi|wmv|flv|wav)$/i,scrollDepth:!1},o=b.window,p=b.$window,q=null,r=m.functions,s=m.events,t=!1,u="analytics-event",v="data-"+u,w=5,x={},y=null,z=!1,A=!1}(jQuery,Formstone);