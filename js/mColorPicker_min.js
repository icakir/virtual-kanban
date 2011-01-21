﻿/*
  mColorPicker
  Version: 1.0 r32
  
  Copyright (c) 2010 Meta100 LLC.
  http://www.meta100.com/
  
  Licensed under the MIT license 
  http://www.opensource.org/licenses/mit-license.php 
*/
(function($){$.fn.mColorPicker=function(a){if($.browser.msie)$.fn.mColorPicker.attributeChangedEvent="propertychange";else if($.browser.webkit)$.fn.mColorPicker.attributeChangedEvent="DOMSubtreeModified";$o=$.extend($.fn.mColorPicker.defaults,a);if($o.swatches.length<10)$o.swatches=$.fn.mColorPicker.defaults.swatches;$("div#mColorPicker").length<1&&$.fn.mColorPicker.drawPicker();$("#css_disabled_color_picker").length<1&&$("head").prepend('<style id="css_disabled_color_picker" type="text/css">.mColorPicker[disabled] + span, .mColorPicker[disabled="disabled"] + span, .mColorPicker[disabled="true"] + span {filter:alpha(opacity=50);-moz-opacity:0.5;-webkit-opacity:0.5;-khtml-opacity: 0.5;opacity: 0.5;}</style>');return this.each(function(){$.fn.mColorPicker.drawPickerTriggers($(this)).unbind().bind("keyup",function(){try{$(this).css({"background-color":$(this).val()}).css({color:$.fn.mColorPicker.textColor($(this).css("background-color"))}).trigger("change")}catch(b){}})})};$.fn.mColorPicker.currentColor=false;$.fn.mColorPicker.currentValue=false;$.fn.mColorPicker.color=false;$.fn.mColorPicker.attributeChangedEvent="DOMAttrModified";$.fn.mColorPicker.init={replace:"[type=color]",enhancedSwatches:true,allowTransparency:true,showLogo:true};$.fn.mColorPicker.defaults={imageFolder:"http://plugins.meta100.com.s3.amazonaws.com/mcolorpicker/images/",swatches:["#ffffff","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff","#ff0000","#4c2b11","#3b3b3b","#000000"]};$.fn.mColorPicker.drawPickerTriggers=function(a){if(a[0].nodeName.toLowerCase()!="input")return false;if(a.data("mColorPicker")=="true")return false;var b=a.attr("id")||"color_"+Math.round(Math.random()*(new Date).getTime()),d=false;a.attr("id",b);if(a.attr("text")=="hidden"||a.attr("data-text")=="hidden")d=true;var c=a.val(),e=a.width()>0?a.width():parseInt(a.css("width"),10),h=a.height()?a.height():parseInt(a.css("height"),10),j=a.css("float"),f=c=="transparent"?"url('"+$o.imageFolder+"/grid.gif')":"",g="";$("body").append('<span id="color_work_area"></span>');$("span#color_work_area").append(a.clone(true));g=$("span#color_work_area").html().replace(/type=[^a-z]*color[^a-z]*/gi,d?'type="hidden"':'type="text"');$("span#color_work_area").html("").remove();a.after(d?'<span style="cursor:pointer;border:1px solid black;float:'+j+";width:"+e+"px;height:"+h+'px;" id="icp_'+b+'">&nbsp;</span>':"").after(g).remove();d?$("#icp_"+b).css({"background-color":c,"background-image":f,display:"inline-block"}).attr("class",$("#"+b).attr("class")):$("#"+b).css({"background-color":c,"background-image":f}).css({color:$.fn.mColorPicker.textColor($("#"+b).css("background-color"))}).after('<span style="cursor:pointer;" id="icp_'+b+'"><img src="'+$o.imageFolder+'color.png" style="border:0;margin:0 0 0 3px" align="absmiddle"></span>').addClass("mColorPickerInput");$("#icp_"+b).bind("click",function(){$.fn.mColorPicker.colorShow(b)}).data("mColorPicker","true");$("#"+b).addClass("mColorPicker");return $("#"+b)};$.fn.mColorPicker.drawPicker=function(){$(document.createElement("div")).attr("id","mColorPicker").css("display","none").html('<div id="mColorPickerWrapper"><div id="mColorPickerImg" class="mColor"></div><div id="mColorPickerImgGray" class="mColor"></div><div id="mColorPickerSwatches"><div class="mClear"></div></div><div id="mColorPickerFooter"><input type="text" size="8" id="mColorPickerInput"/></div></div>').appendTo("body");$(document.createElement("div")).attr("id","mColorPickerBg").css({display:"none"}).appendTo("body");for(n=9;n>-1;n--)$(document.createElement("div")).attr({id:"cell"+n,"class":"mPastColor"+(n>0?" mNoLeftBorder":"")}).html("&nbsp;").prependTo("#mColorPickerSwatches");$("#mColorPicker").css({border:"1px solid #ccc",color:"#fff","z-index":999998,width:"194px",height:"184px","font-size":"12px","font-family":"times"});$(".mPastColor").css({height:"18px",width:"18px",border:"1px solid #000","float":"left"});$("#colorPreview").css({height:"50px"});$(".mNoLeftBorder").css({"border-left":0});$(".mClear").css({clear:"both"});$("#mColorPickerWrapper").css({position:"relative",border:"solid 1px gray","z-index":999999});$("#mColorPickerImg").css({height:"128px",width:"192px",border:0,cursor:"crosshair","background-image":"url('"+$o.imageFolder+"colorpicker.png')"});$("#mColorPickerImgGray").css({height:"8px",width:"192px",border:0,cursor:"crosshair","background-image":"url('"+$o.imageFolder+"graybar.jpg')"});$("#mColorPickerInput").css({border:"solid 1px gray","font-size":"10pt",margin:"3px",width:"80px"});$("#mColorPickerImgGrid").css({border:0,height:"20px",width:"20px","vertical-align":"text-bottom"});$("#mColorPickerSwatches").css({"border-right":"1px solid #000"});$("#mColorPickerFooter").css({"background-image":"url('"+$o.imageFolder+"grid.gif')",position:"relative",height:"26px"});$.fn.mColorPicker.init.allowTransparency&&$("#mColorPickerFooter").prepend('<span id="mColorPickerTransparent" class="mColor" style="font-size:16px;color:#000;padding-right:30px;padding-top:3px;cursor:pointer;overflow:hidden;float:right;">transparent</span>');$.fn.mColorPicker.init.showLogo&&$("#mColorPickerFooter").prepend('<a href="http://meta100.com/" title="Meta100 - Designing Fun" alt="Meta100 - Designing Fun" style="float:right;" target="_blank"><img src="'+$o.imageFolder+'meta100.png" title="Meta100 - Designing Fun" alt="Meta100 - Designing Fun" style="border:0;border-left:1px solid #aaa;right:0;position:absolute;"/></a>');$("#mColorPickerBg").click($.fn.mColorPicker.closePicker);var a=$.fn.mColorPicker.getCookie("swatches"),b=0;if(typeof a=="string")a=a.split("||");if(a==null||$.fn.mColorPicker.init.enhancedSwatches||a.length<10)a=$o.swatches;$(".mPastColor").each(function(){$(this).css("background-color",a[b++].toLowerCase())})};$.fn.mColorPicker.closePicker=function(){$(".mColor, .mPastColor, #mColorPickerInput, #mColorPickerWrapper").unbind();$("#mColorPickerBg").hide();$("#mColorPicker").fadeOut()};$.fn.mColorPicker.colorShow=function(a){var b=$("#icp_"+a);pos=b.offset();$i=$("#"+a);hex=$i.attr("data-hex")||$i.attr("hex");pickerTop=pos.top+b.outerHeight();pickerLeft=pos.left;$d=$(document);$m=$("#mColorPicker");if($i.attr("disabled"))return false;if(pickerTop+$m.height()>$d.height())pickerTop=pos.top-$m.height();if(pickerLeft+$m.width()>$d.width())pickerLeft=pos.left-$m.width()+b.outerWidth();$m.css({top:pickerTop+"px",left:pickerLeft+"px",position:"absolute"}).fadeIn("fast");$("#mColorPickerBg").css({"z-index":999990,background:"black",opacity:0.01,position:"absolute",top:0,left:0,width:parseInt($d.width(),10)+"px",height:parseInt($d.height(),10)+"px"}).show();var d=$i.val();$("#colorPreview span").text(d);$("#colorPreview").css("background",d);$("#color").val(d);$.fn.mColorPicker.currentColor=$("#"+a).attr("data-text")?b.css("background-color"):$i.css("background-color");if(hex=="true")$.fn.mColorPicker.currentColor=$.fn.mColorPicker.RGBtoHex($.fn.mColorPicker.currentColor);$("#mColorPickerInput").val($.fn.mColorPicker.currentColor);$(".mColor, .mPastColor").bind("mousemove",function(c){var e=$(this).offset();$.fn.mColorPicker.color=$(this).css("background-color");if($(this).hasClass("mPastColor")&&hex=="true")$.fn.mColorPicker.color=$.fn.mColorPicker.RGBtoHex($.fn.mColorPicker.color);else if($(this).hasClass("mPastColor")&&hex!="true")$.fn.mColorPicker.color=$.fn.mColorPicker.hexToRGB($.fn.mColorPicker.color);else if($(this).attr("id")=="mColorPickerTransparent")$.fn.mColorPicker.color="transparent";else if(!$(this).hasClass("mPastColor"))$.fn.mColorPicker.color=$.fn.mColorPicker.whichColor(c.pageX-e.left,c.pageY-e.top+($(this).attr("id")=="mColorPickerImgGray"?128:0),hex);$.fn.mColorPicker.setInputColor(a,$.fn.mColorPicker.color)}).click(function(){$.fn.mColorPicker.colorPicked(a)});$("#mColorPickerInput").bind("keyup",function(c){try{$.fn.mColorPicker.color=$("#mColorPickerInput").val();$.fn.mColorPicker.setInputColor(a,$.fn.mColorPicker.color);c.which==13&&$.fn.mColorPicker.colorPicked(a)}catch(e){}}).bind("blur",function(){$.fn.mColorPicker.setInputColor(a,$.fn.mColorPicker.currentColor)});$("#mColorPickerWrapper").bind("mouseleave",function(){$.fn.mColorPicker.setInputColor(a,$.fn.mColorPicker.currentColor)})};$.fn.mColorPicker.setInputColor=function(a,b){var d=b=="transparent"?"url('"+$o.imageFolder+"grid.gif')":"",c=$.fn.mColorPicker.textColor(b);$("#"+a).attr("data-text")&&$("#icp_"+a).css({"background-color":b,"background-image":d});$("#"+a).val(b).css({"background-color":b,"background-image":d,color:c}).trigger("change");$("#mColorPickerInput").val(b)};$.fn.mColorPicker.textColor=function(a){if(typeof a=="undefined"||a=="transparent")return"black";a=$.fn.mColorPicker.RGBtoHex(a);return parseInt(a.substr(1,2),16)+parseInt(a.substr(3,2),16)+parseInt(a.substr(5,2),16)<400?"white":"black"};$.fn.mColorPicker.setCookie=function(a,b,d){a=a+"="+escape(b);b=new Date;b.setDate(b.getDate()+d);a+="; expires="+b.toGMTString();document.cookie=a};$.fn.mColorPicker.getCookie=function(a){return(a=document.cookie.match("(^|;) ?"+a+"=([^;]*)(;|$)"))?unescape(a[2]):null};$.fn.mColorPicker.colorPicked=function(a){$.fn.mColorPicker.closePicker();$.fn.mColorPicker.init.enhancedSwatches&&$.fn.mColorPicker.addToSwatch();$("#"+a).trigger("colorpicked")};$.fn.mColorPicker.addToSwatch=function(a){var b=[];i=0;if(typeof a=="string")$.fn.mColorPicker.color=a.toLowerCase();$.fn.mColorPicker.currentValue=$.fn.mColorPicker.currentColor=$.fn.mColorPicker.color;if($.fn.mColorPicker.color!="transparent")b[0]=$.fn.mColorPicker.color.toLowerCase();$(".mPastColor").each(function(){$.fn.mColorPicker.color=$(this).css("background-color").toLowerCase();if($.fn.mColorPicker.color!=b[0]&&$.fn.mColorPicker.RGBtoHex($.fn.mColorPicker.color)!=b[0]&&$.fn.mColorPicker.hexToRGB($.fn.mColorPicker.color)!=b[0]&&b.length<10)b[b.length]=$.fn.mColorPicker.color;$(this).css("background-color",b[i++])});$.fn.mColorPicker.init.enhancedSwatches&&$.fn.mColorPicker.setCookie("swatches",b.join("||"),365)};$.fn.mColorPicker.whichColor=function(a,b,d){var c=colorG=colorB=255;if(a<32){colorG=a*8;colorB=0}else if(a<64){c=256-(a-32)*8;colorB=0}else if(a<96){c=0;colorB=(a-64)*8}else if(a<128){c=0;colorG=256-(a-96)*8}else if(a<160){c=(a-128)*8;colorG=0}else{colorG=0;colorB=256-(a-160)*8}if(b<64){c+=(256-c)*(64-b)/64;colorG+=(256-colorG)*(64-b)/64;colorB+=(256-colorB)*(64-b)/64}else if(b<=128){c-=c*(b-64)/64;colorG-=colorG*(b-64)/64;colorB-=colorB*(b-64)/64}else if(b>128)c=colorG=colorB=256-a/192*256;c=Math.round(Math.min(c,255));colorG=Math.round(Math.min(colorG,255));colorB=Math.round(Math.min(colorB,255));if(d=="true"){c=c.toString(16);colorG=colorG.toString(16);colorB=colorB.toString(16);if(c.length<2)c=0+c;if(colorG.length<2)colorG=0+colorG;if(colorB.length<2)colorB=0+colorB;return"#"+c+colorG+colorB}return"rgb("+c+", "+colorG+", "+colorB+")"};$.fn.mColorPicker.RGBtoHex=function(a){a=a.toLowerCase();if(typeof a=="undefined")return"";if(a.indexOf("#")>-1&&a.length>6)return a;if(a.indexOf("rgb")<0)return a;if(a.indexOf("#")>-1)return"#"+a.substr(1,1)+a.substr(1,1)+a.substr(2,1)+a.substr(2,1)+a.substr(3,1)+a.substr(3,1);var b=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],d="#",c=0;a=a.replace(/[^0-9,]/g,"").split(",");for(var e=0;e<a.length;e++){c=Math.floor(a[e]/16);d+=b[c]+b[a[e]-c*16]}return d};$.fn.mColorPicker.hexToRGB=function(a){a=a.toLowerCase();if(typeof a=="undefined")return"";if(a.indexOf("rgb")>-1)return a;if(a.indexOf("#")<0)return a;a=a.replace("#","");if(a.length<6)a=a.substr(0,1)+a.substr(0,1)+a.substr(1,1)+a.substr(1,1)+a.substr(2,1)+a.substr(2,1);return"rgb("+parseInt(a.substr(0,2),16)+", "+parseInt(a.substr(2,2),16)+", "+parseInt(a.substr(4,2),16)+")"};$(document).ready(function(){if($.fn.mColorPicker.init.replace=="[type=color]"){$("input").filter(function(){return this.getAttribute("type")=="color"}).mColorPicker();$(document).bind("ajaxSuccess",function(){$("input").filter(function(){return this.getAttribute("type")=="color"}).mColorPicker()})}else if($.fn.mColorPicker.init.replace){$("input"+$.fn.mColorPicker.init.replace).mColorPicker();$(document).bind("ajaxSuccess",function(){$("input"+$.fn.mColorPicker.init.replace).mColorPicker()})}});})(jQuery);