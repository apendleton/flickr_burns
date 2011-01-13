/**
Script: Slideshow.KenBurns.js
	Slideshow.KenBurns - KenBurns extension for Slideshow, includes zooming and panning effects.

License:
	MIT-style license.

Copyright:
	Copyright (c) 2008 [Aeron Glemann](http://www.electricprism.com/aeron/).
*/

Slideshow.KenBurns=new Class({Extends:Slideshow,options:{pan:[100,100],zoom:[50,50]},initialize:function(B,C,A){A.overlap=true;A.resize=true;["pan","zoom"].each(function(D){if($chk(this[D])){if($type(this[D])!="array"){this[D]=[this[D],this[D]]}this[D].map(function(E){return(E.toInt()||0).limit(0,100)})}},A);this.parent(B,C,A)},_show:function(B){if(!this.image.retrieve("morph")){["a","b"].each(function(G){this[G].set("tween",{duration:this.options.duration,link:"cancel",onStart:this._start.bind(this),onComplete:this._complete.bind(this),property:"opacity"}).get("morph",{duration:(this.options.delay+this.options.duration*2),link:"cancel",transition:$arguments(0)})},this)}this.image.set("styles",{bottom:"auto",left:"auto",right:"auto",top:"auto"});var D=["top left","top right","bottom left","bottom right"][this.counter%4].split(" ");D.each(function(G){this.image.setStyle(G,0)},this);dh=this.height/this.preloader.height;dw=this.width/this.preloader.width;delta=(dw>dh)?dw:dh;var A={};var E=($random.run(this.options.zoom)/100)+1;var F=Math.abs(($random.run(this.options.pan)/100)-1);["height","width"].each(function(J,G){var I=Math.ceil(this.preloader[J]*delta);var H=(I*E).toInt();A[J]=[H,I];if(dw>dh||G){I=(this[J]-this.image[J]);H=(I*F).toInt();A[D[G]]=[H,I]}},this);var C=(this.firstrun&&this.options.paused);if(B||C){this._center(this.image);this.image.get("morph").cancel();if(C){this.image.get("tween").cancel().set(0).start(1)}else{this.image.get("tween").cancel().set(1)}}else{this.image.get("morph").start(A);this.image.get("tween").set(0).start(1)}}});