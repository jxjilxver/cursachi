(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Карта установки_HTML5 Canvas_atlas_1", frames: [[0,0,1085,536]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Снимокэкрана20211006215225 = function() {
	this.initialize(ss["Карта установки_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Реостат = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("реостат");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AN/AAQAACekGBvQkGBvlzAAQlyAAkGhvQkGhvAAieQAAidEGhvQEGhvFyAAQFzAAEGBvQEGBvAACdg");
	this.shape.setTransform(-45.5,-21.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ap4EMQkGhuAAieQAAidEGhvQEHhvFxAAQFzAAEFBvQEHBvAACdQAACekHBuQkFBwlzAAQlxAAkHhwg");
	this.shape_1.setTransform(-45.5,-21.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-60.9,181,78);


(lib.Лампочка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("лампочка");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AN/AAQAACekGBvQkGBvlzAAQlyAAkGhvQkGhvAAieQAAidEGhvQEGhvFyAAQFzAAEGBvQEGBvAACdg");
	this.shape.setTransform(-45.5,-21.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ap4EMQkGhuAAieQAAidEGhvQEHhvFxAAQFzAAEFBvQEHBvAACdQAACekHBuQkFBwlzAAQlxAAkHhwg");
	this.shape_1.setTransform(-45.5,-21.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-60.9,181,78);


(lib.Ключ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("ключ");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AN/AAQAACekGBvQkGBvlzAAQlyAAkGhvQkGhvAAieQAAidEGhvQEGhvFyAAQFzAAEGBvQEGBvAACdg");
	this.shape.setTransform(-45.5,-21.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ap4EMQkGhuAAieQAAidEGhvQEHhvFxAAQFzAAEFBvQEHBvAACdQAACekHBuQkFBwlzAAQlxAAkHhwg");
	this.shape_1.setTransform(-45.5,-21.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-60.9,181,78);


(lib.Источниктока = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("источниктока");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AN/AAQAACekGBvQkGBvlzAAQlyAAkGhvQkGhvAAieQAAidEGhvQEGhvFyAAQFzAAEGBvQEGBvAACdg");
	this.shape.setTransform(-45.5,-21.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ap4EMQkGhuAAieQAAidEGhvQEHhvFxAAQFzAAEFBvQEHBvAACdQAACekHBuQkFBwlzAAQlxAAkHhwg");
	this.shape_1.setTransform(-45.5,-21.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-60.9,181,78);


(lib.Вольтметр = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("вольтметр");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AN/AAQAACekGBvQkGBvlzAAQlyAAkGhvQkGhvAAieQAAidEGhvQEGhvFyAAQFzAAEGBvQEGBvAACdg");
	this.shape.setTransform(-45.5,-21.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ap4EMQkGhuAAieQAAidEGhvQEHhvFxAAQFzAAEFBvQEHBvAACdQAACekHBuQkFBwlzAAQlxAAkHhwg");
	this.shape_1.setTransform(-45.5,-21.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-60.9,181,78);


(lib.Амперметр = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("амперметр");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AN/AAQAACekGBvQkGBvlzAAQlyAAkGhvQkGhvAAieQAAidEGhvQEGhvFyAAQFzAAEGBvQEGBvAACdg");
	this.shape.setTransform(-45.5,-21.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ap4EMQkGhuAAieQAAidEGhvQEHhvFxAAQFzAAEFBvQEHBvAACdQAACekHBuQkFBwlzAAQlxAAkHhwg");
	this.shape_1.setTransform(-45.5,-21.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136,-60.9,181,78);


// stage content:
(lib.Картаустановки_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Ключ();
	this.instance.setTransform(330.45,380.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Ключ(), 3);

	this.instance_1 = new lib.Реостат();
	this.instance_1.setTransform(1132.05,631);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Реостат(), 3);

	this.instance_2 = new lib.Вольтметр();
	this.instance_2.setTransform(1185.3,227.1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.Вольтметр(), 3);

	this.instance_3 = new lib.Лампочка();
	this.instance_3.setTransform(723.45,230.2);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.Лампочка(), 3);

	this.instance_4 = new lib.Источниктока();
	this.instance_4.setTransform(360.2,148.8);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.Источниктока(), 3);

	this.instance_5 = new lib.Амперметр();
	this.instance_5.setTransform(169.2,700.2);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.Амперметр(), 3);

	this.instance_6 = new lib.Снимокэкрана20211006215225();
	this.instance_6.setTransform(-1,-7,1.1803,1.3566);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AAiANQgkADgtAAQhEAAgvgGQgwgFAAgGQAAgIAwgFQAvgFBEAAQA7AAAsAEQAIgEAKAAQAQAAALAKQAEABADABQAAAAAAgBQAAgWAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAWQAAAUgPAPQgPAPgWAAQgVAAgPgPQgGgFgDgGQAAACAAACQAAARgMAMQgLAMgRAAQgRAAgMgMQgMgMAAgRQAAgDABgEgABuACQADAGABAIABsgHQAGADAAADQAAABgEACQgKAFghADQgQACgRABAA4gPQAFAAAGABQAXACALAD");
	this.shape.setTransform(485.375,604.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAtAxQgMgMAAgRIABgHIAhgDQAhgDAKgFQgKAFghADIghADQgkADgtAAQhEAAgvgGQgwgFAAgGQAAgIAwgFQAvgFBEAAQA7AAArAEQAJgEAKAAQAQAAALALQgLgEgXgCIgMgBIAMABQAXACALAEIAHACQAGACAAADQAAABgEACQADAGABAIQgBgIgDgGQAEgCAAgBQAAgDgGgCIAAgCQAAgWAPgPQAPgPAVAAQAWAAAPAPQAPAPAAAWQAAAUgPAPQgPAPgWAAQgVAAgPgPQgGgFgDgGIAAAEQAAARgMAMQgLAMgRAAQgRAAgMgMg");
	this.shape_1.setTransform(485.375,604.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(639,353,640.7,367.1);
// library properties:
lib.properties = {
	id: '0A52EADE4BB3D4419E234258B93C0AB6',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Карта установки_HTML5 Canvas_atlas_1.png?1633592865996", id:"Карта установки_HTML5 Canvas_atlas_1"},
		{src:"sounds/амперметр_.mp3?1633592866058", id:"амперметр"},
		{src:"sounds/вольтметр_.mp3?1633592866058", id:"вольтметр"},
		{src:"sounds/источниктока_.mp3?1633592866058", id:"источниктока"},
		{src:"sounds/ключ_.mp3?1633592866058", id:"ключ"},
		{src:"sounds/лампочка_.mp3?1633592866058", id:"лампочка"},
		{src:"sounds/реостат_.mp3?1633592866058", id:"реостат"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0A52EADE4BB3D4419E234258B93C0AB6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;