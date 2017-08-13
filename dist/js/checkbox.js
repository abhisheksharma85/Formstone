/*! formstone v1.3.3 [checkbox.js] 2017-08-13 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(b){var c=this.closest("label"),d=c.length?c.eq(0):a("label[for="+this.attr("id")+"]"),e=[p.base,b.theme,b.customClass].join(" "),f=[p.label,b.theme,b.customClass].join(" "),g="";b.radio="radio"===this.attr("type"),b.group=this.attr("name"),g+='<div class="'+p.marker+'" aria-hidden="true">',g+='<div class="'+p.flag+'"></div>',b.toggle&&(e+=" "+p.toggle,f+=" "+p.toggle,g+='<span class="'+[p.state,p.state_on].join(" ")+'">'+b.labels.on+"</span>",g+='<span class="'+[p.state,p.state_off].join(" ")+'">'+b.labels.off+"</span>"),b.radio&&(e+=" "+p.radio,f+=" "+p.radio),g+="</div>",b.$placeholder=a('<span class="'+p.element_placeholder+'"></span>'),this.before(b.$placeholder),b.labelParent=d.find(this).length,b.labelClass=f,d.addClass(f),b.labelParent?d.wrap('<div class="'+e+'"></div>').before(g):this.before('<div class=" '+e+'">'+g+"</div>"),b.$checkbox=b.labelParent?d.parents(o.base):this.prev(o.base),b.$marker=b.$checkbox.find(o.marker),b.$states=b.$checkbox.find(o.state),b.$label=d,b.$classable=a().add(b.$checkbox).add(b.$label),this.is(":checked")&&b.$classable.addClass(p.checked),this.is(":disabled")&&b.$classable.addClass(p.disabled),this.appendTo(b.$marker),this.on(q.focus,b,l).on(q.blur,b,m).on(q.change,b,i).on(q.click,b,h).on(q.deselect,b,k),b.$checkbox.on(q.click,b,h)}function d(a){a.$checkbox.off(q.namespace),a.$marker.remove(),a.$states.remove(),a.$label.removeClass(a.labelClass),a.labelParent?a.$label.unwrap():this.unwrap(),a.$placeholder.before(this),a.$placeholder.remove(),this.off(q.namespace)}function e(a){this.prop("disabled",!1),a.$classable.removeClass(p.disabled)}function f(a){this.prop("disabled",!0),a.$classable.addClass(p.disabled)}function g(a){var b=a.$el.is(":disabled"),c=a.$el.is(":checked");b||(c?j({data:a}):k({data:a}))}function h(b){b.stopPropagation();var c=b.data;a(b.target).is(c.$el)||(b.preventDefault(),c.$el.trigger("click"))}function i(a){var b=a.data,c=b.$el.is(":disabled"),d=b.$el.is(":checked");c||(b.radio?d&&j(a):d?j(a):k(a))}function j(b){b.data.radio&&a('input[name="'+b.data.group+'"]').not(b.data.$el).trigger("deselect"),b.data.$el.trigger(q.focus),b.data.$classable.addClass(p.checked)}function k(a){a.data.$el.trigger(q.focus),a.data.$classable.removeClass(p.checked)}function l(a){a.data.$classable.addClass(p.focus)}function m(a){a.data.$classable.removeClass(p.focus)}var n=b.Plugin("checkbox",{widget:!0,defaults:{customClass:"",toggle:!1,labels:{on:"ON",off:"OFF"},theme:"fs-light"},classes:["element_placeholder","label","marker","flag","radio","focus","checked","disabled","toggle","state","state_on","state_off"],methods:{_construct:c,_destruct:d,enable:e,disable:f,update:g},events:{deselect:"deselect"}}),o=n.classes,p=o.raw,q=n.events;n.functions});