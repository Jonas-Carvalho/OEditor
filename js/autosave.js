(function(a){a.fn.autoSave=function(d,e){return this.each(function(){var b=0,c=a(this),f=e||1E3;c.keyup(function(){clearTimeout(b);var a=c.val();localStorage&&localStorage.setItem("autoSave",a);b=setTimeout(function(){d()},f)})})}})(jQuery);