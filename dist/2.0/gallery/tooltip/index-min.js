KISSY.add("brix/gallery/tooltip/index",function(e,t,i){function a(e){var t=this;e.el&&(t.set("trigger",e.el),delete e.el),a.superclass.constructor.apply(this,arguments)}return a.ATTRS={trigger:{value:!1},triggerType:{value:"mouse"},mouseDelay:{value:1},toggle:{value:!1},width:{value:200},align:{setter:function(e){return e.offset||("tl"==e.points[0]&&"bl"==e.points[1]||"tr"==e.points[0]&&"br"==e.points[1]?e.offset=[0,-8]:"bl"==e.points[0]&&"tl"==e.points[1]||"br"==e.points[0]&&"tr"==e.points[1]?e.offset=[0,8]:"tr"==e.points[0]&&"tl"==e.points[1]||"br"==e.points[0]&&"bl"==e.points[1]?e.offset=[8,0]:("tl"==e.points[0]&&"tr"==e.points[1]||"bl"==e.points[0]&&"br"==e.points[1])&&(e.offset=[-8,0])),e},getter:function(e){return e||(e={node:!1,points:["bl","tl"],offset:[0,0]}),e}},content:{setter:function(e){var t=this,i=e||"",a=t.get("align")||{};return a.points||(a.points=["br","tl"]),i='<div class="arrow arrow-'+a.points[0]+"-"+a.points[1]+'"><div></div></div><div class="tooltip-bd">'+i+"</div>"}},elCls:{value:"tooltip"},prefixCls:{value:"tooltip-"},closable:{value:!0},mask:{value:!1},tmpl:{value:null},data:{}},e.extend(a,i,{initializer:function(){var i=this,a=i.get("align"),n=i.get("trigger");if(!a.node&&n&&(a.node=n,i.set("align",a)),i.on("hide",function(){i._clearHiddenTimer()}),n){var r=i.get("triggerType"),o="click";"mouse"==r?(o="mouseenter",e.all(n).on("mouseenter",function(e){e.preventDefault(),i._clearHiddenTimer(),i.show()})):i.get("toggle")?e.all(n).on(o,function(e){e.preventDefault(),i.toggle()}):e.all(n).on(o,function(e){e.preventDefault(),i.show()}),e.all(n).on("mouseleave",function(e){e.preventDefault(),i._setHiddenTimer()})}i.on("afterRenderUI",function(){i.get("el").on("mouseleave",i._setHiddenTimer,i).on("mouseenter",i._clearHiddenTimer,i);var e=i.get("el").one(".tooltip-ext-close");if(e.one(".tooltip-ext-close-x").html("&#223"),i.get("tmpl")){var a=i.get("contentEl");i.get("content")&&(a=a.one(".tooltip-bd")),i.pagelet=new t({container:a,tmpl:i.get("tmpl"),data:i.get("data")})}})},destructor:function(){var e=this;e.pagelet&&(e.pagelet.destroy(),e.pagelet=null)},toggle:function(){var t=this,i=t.get("el");i&&!e.isString(i)?"hidden"==i.css("visibility")?t.show():t.hide():t.show()},_setHiddenTimer:function(){var t=this,i=t.get("mouseDelay");i&&(t._clearHiddenTimer(),t._hiddenTimer=e.later(function(){t.hide()},1e3*t.get("mouseDelay")))},_clearHiddenTimer:function(){var e=this;e._hiddenTimer&&(e._hiddenTimer.cancel(),e._hiddenTimer=void 0)}}),a},{requires:["brix/core/pagelet","overlay"]});