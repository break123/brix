KISSY.add("brix/gallery/dropdown/index",function(a,b){function c(){c.superclass.constructor.apply(this,arguments)}return c.RENDERER={xx:{yy:function(a){return this.color}}},c.ATTRS={},c.METHOD={focus:function(){var a=this.get("el");a.one(".dropdown-list").css("display","block"),a.one(".dropdown-a").addClass("dropdown-aactive")},blur:function(){var a=this.get("el");a.one(".dropdown-list").css("display","none"),a.one(".dropdown-a").removeClass("dropdown-aactive")}},c.DOCATTACH={"":{click:function(a){var b=this;if(!b.__show){var c=b.get("el");c.all(".dropdown-list").css("display","none"),c.all(".dropdown-a").removeClass("dropdown-aactive")}b.__show=!1}}},c.ATTACH={".dropdown-a":{click:function(a){var b=this.get("el").one(".dropdown-list");this.__show=!0,b.css("display")=="block"?this.blur():this.focus()},mouseenter:function(b){var c=a.one(b.currentTarget);c.addClass("dropdown-ahover")},mouseleave:function(b){var c=a.one(b.currentTarget);c.removeClass("dropdown-ahover")}},".dropdown-item":{click:function(b){this.__show=!0;var c=this.get("el");c.all(".dropdown-itemselected").removeClass("dropdown-itemselected");var d=a.one(b.currentTarget);d.addClass("dropdown-itemselected");var e=c.one(".dropdown-span"),f={value:d.attr("value"),text:d.text()};e.attr("value",f.value),e.text(f.text),this.blur(),this.fire("selected",f)},mouseenter:function(b){var c=a.one(b.currentTarget);c.addClass("dropdown-itemover")},mouseleave:function(b){var c=a.one(b.currentTarget);c.removeClass("dropdown-itemover")}}},a.extend(c,b,{events:{click:{xxClick:function(){}}}}),a.augment(c,c.METHOD),c},{requires:["brix/core/brick","./dropdown.css"]});