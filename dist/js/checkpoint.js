/*! formstone v1.3.3 [checkpoint.js] 2017-08-13 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){r=q.height(),p.iterate.call(u,j)}function d(){s=q.scrollTop(),s<0&&(s=0),s!==t&&(i(),t=s)}function e(){u=a(m.base),c()}function f(b){var c=b.intersect.split("-");b.windowIntersect=c[0],b.elIntersect=c[1],b.visible=!1;var d=a(b.$el.data("checkpoint-container"));b.$target=d.length?d:b.$el,b.$el.addClass(n.base)}function g(a){e(),c()}function h(a){e()}function i(){p.iterate.call(u,k)}function j(a){switch(a.windowIntersect){case"top":a.windowCheck=0-a.offset;break;case"middle":a.windowCheck=r/2-a.offset;break;case"bottom":a.windowCheck=r-a.offset}switch(a.elIntersect){case"top":a.elCheck=a.$target[0].offsetTop;break;case"middle":a.elCheck=a.$target[0].offsetTop+a.$target.outerHeight()/2;break;case"bottom":a.elCheck=a.$target[0].offsetTop+a.$target.outerHeight()}k(a)}function k(a){var b=s+a.windowCheck;b>=a.elCheck?(a.active||a.$el.trigger(o.activate),a.active=!0,a.$el.addClass(n.active)):a.reverse&&(a.active&&a.$el.trigger(o.deactivate),a.active=!1,a.$el.removeClass(n.active))}var l=b.Plugin("checkpoint",{widget:!0,defaults:{intersect:"bottom-top",offset:0,reverse:!1},classes:["active"],events:{activate:"activate",deactivate:"deactivate"},methods:{_construct:f,_postConstruct:g,_destruct:h,_resize:c,_raf:d}}),m=(l.namespace,l.classes),n=m.raw,o=l.events,p=l.functions,q=(b.window,b.$window),r=0,s=0,t=0,u=[]});