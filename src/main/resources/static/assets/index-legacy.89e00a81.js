!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./popper-legacy.3e7fb573.js","./base-legacy.28cad0e5.js","./dropdown-legacy.b5ca9dce.js","./index-legacy.492b6ebd.js"],(function(e){"use strict";var n,o,i,p,a,l,f,s,c,u,d,b,v,g,y,w,h,m,O,j,P,S,x,k,A;return{setters:[function(e){n=e.c,o=e.a,i=e.E},function(e){p=e.b,a=e.J,l=e.a,f=e.O,s=e._,c=e.bi,u=e.w},function(e){d=e.d},function(e){b=e.d,v=e.c,g=e.r,y=e.u,w=e.a,h=e.b,m=e.e,O=e.f,j=e.g,P=e.t,S=e.k,x=e.i,k=e.O,A=e.x}],execute:function(){var C=p({trigger:n.trigger,placement:d.placement,disabled:n.disabled,visible:o.visible,transition:o.transition,popperOptions:d.popperOptions,tabindex:d.tabindex,content:o.content,popperStyle:o.popperStyle,popperClass:o.popperClass,enterable:t(t({},o.enterable),{},{default:!0}),effect:t(t({},o.effect),{},{default:"light"}),teleported:o.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),E={"update:visible":function(e){return a(e)},"before-enter":function(){return!0},"before-leave":function(){return!0},"after-enter":function(){return!0},"after-leave":function(){return!0}},N=b({name:"ElPopover"}),R=b(t(t({},N),{},{props:C,emits:E,setup:function(e,t){var n=t.expose,o=t.emit,p=e,a=v((function(){return p["onUpdate:visible"]})),s=l("popover"),c=g(),u=v((function(){var e;return null==(e=y(c))?void 0:e.popperRef})),d=v((function(){return[{width:f(p.width)},p.popperStyle]})),b=v((function(){return[s.b(),p.popperClass,r({},s.m("plain"),!!p.content)]})),C=v((function(){return p.transition==="".concat(s.namespace.value,"-fade-in-linear")})),E=function(){o("before-enter")},N=function(){o("before-leave")},R=function(){o("after-enter")},_=function(){o("update:visible",!1),o("after-leave")};return n({popperRef:u,hide:function(){var e;null==(e=c.value)||e.hide()}}),function(e,t){return w(),h(y(i),A({ref_key:"tooltipRef",ref:c},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":y(b),"popper-style":y(d),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":y(C),"onUpdate:visible":y(a),onBeforeShow:E,onBeforeHide:N,onShow:R,onHide:_}),{content:m((function(){return[e.title?(w(),O("div",{key:0,class:j(y(s).e("title")),role:"title"},P(e.title),3)):S("v-if",!0),x(e.$slots,"default",{},(function(){return[k(P(e.content),1)]}))]})),default:m((function(){return[e.$slots.reference?x(e.$slots,"reference",{key:0}):S("v-if",!0)]})),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"])}}})),_=s(R,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]),B=function(e,t){var r=t.arg||t.value,n=null==r?void 0:r.popperRef;n&&(n.triggerRef=e)},D=c({mounted:function(e,t){B(e,t)},updated:function(e,t){B(e,t)}},"popover");e("E",u(_,{directive:D}))}}}))}();