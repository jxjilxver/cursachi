(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Анимация_atlas_1", frames: [[1002,0,860,86],[1002,176,28,86],[1002,88,860,86],[1032,176,28,86],[0,1002,1286,510],[0,0,1000,1000]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Анимация_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Анимация_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Анимация_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Анимация_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Анимация_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.reostat = function() {
	this.initialize(ss["Анимация_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Стоп = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(4,1,1).p("AsfsfIY/AAIAAY/I4/AAg");
	this.shape.setTransform(-4,5.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AsfMgIAA4/IY/AAIAAY/g");
	this.shape_1.setTransform(-4,5.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(7,1,1).p("AsfsfIY/AAIAAY/I4/AAg");
	this.shape_2.setTransform(-4,5.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.5,-78.4,167,167);


(lib.Старт = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AhPifIAAE/ICfigg");
	this.shape.setTransform(0.4125,0.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AhPifICfCfIifCgg");
	this.shape_1.setTransform(0.4125,0.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(2,1,1).p("AhPifIAAE/ICfigg");
	this.shape_2.setTransform(0.4125,0.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(0.1,1,1).p("AhPifIAAE/ICfigg");
	this.shape_3.setTransform(0.4125,0.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-16.4,18.1,34);


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(1,1,1).p("AE+AAQAACEhdBdQhdBdiEAAQiDAAhdhdQhdhdAAiEQAAiDBdhcQBdheCDAAQCEAABdBeQBdBcAACDgAh/gLICCAAIAACLAADgLICPAAAADibIAACQ");
	this.shape.setTransform(-1.25,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AjfDhQhehdAAiEQAAiDBehcQBcheCDAAQCEAABdBeQBcBcABCDQgBCEhcBdQhdBdiEgBQiDABhchdgAADCAIAAiMIiCAAICCAAgACSgMIiPAAIAAiPIAACPgAADgMg");
	this.shape_1.setTransform(-1.25,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-28.9,65.5,65.5);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(1,1,1).p("AiCAAIEFAA");
	this.shape.setTransform(-0.575,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0099CC").ss(1,1,1).p("AFeAAQAACRhmBnQhnBmiRAAQiQAAhnhmQhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQg");
	this.shape_1.setTransform(-1,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("Aj2D4QhnhnAAiRQAAiQBnhmQBmhnCQAAQCRAABnBnQBmBmAACQQAACRhmBnQhnBmiRAAQiQAAhmhmgACHgJIkFAAg");
	this.shape_2.setTransform(-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-37,72,72);


(lib.Пауза = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(21,1,1).p("ADrpeIAAS4AjqpZIAAS4");
	this.shape.setTransform(-23.5,0.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-70.9,68,142.4);


(lib.Анимация2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Символ1("synched",0);
	this.instance.setTransform(11.55,57.05,0.4286,0.4286,0,0,0,-1,-1);

	this.instance_1 = new lib.Символ1("synched",0);
	this.instance_1.setTransform(-11.5,-4.05,0.4286,0.4286,0,0,0,-1,-1);

	this.instance_2 = new lib.Символ1("synched",0);
	this.instance_2.setTransform(7.55,-57.05,0.4286,0.4286,0,0,0,-1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.5,-73,55.1,146.1);


// stage content:
(lib.Анимация = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,180,950];
	this.streamSoundSymbolsList[0] = [{id:"Вступление",startFrame:0,endFrame:161,loop:1,offset:0}];
	this.streamSoundSymbolsList[180] = [{id:"СерединОчка",startFrame:180,endFrame:936,loop:1,offset:0}];
	this.streamSoundSymbolsList[950] = [{id:"КонцовОчка",startFrame:950,endFrame:1255,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("Вступление",0);
		this.InsertIntoSoundStreamData(soundInstance,0,161,1);
		this.stop();
		
		function f1(args) {
		this.play();
		}
		function f2(args) {
		this.stop();
		}
		
		function f3(args) {
		
		this.gotoAndStop(0);
		}
		
		this.PlayBtn.addEventListener("click", f1.bind(this));
		this.Pause.addEventListener("click", f2.bind(this));
		this.StopBtn.addEventListener("click", f3.bind(this));
	}
	this.frame_180 = function() {
		var soundInstance = playSound("СерединОчка",0);
		this.InsertIntoSoundStreamData(soundInstance,180,936,1);
	}
	this.frame_950 = function() {
		var soundInstance = playSound("КонцовОчка",0);
		this.InsertIntoSoundStreamData(soundInstance,950,1255,1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(180).call(this.frame_180).wait(770).call(this.frame_950).wait(305));

	// Слой_9
	this.Pause = new lib.Пауза();
	this.Pause.name = "Pause";
	this.Pause.setTransform(1090.75,618.4,0.9223,0.9223);
	new cjs.ButtonHelper(this.Pause, 0, 1, 2, false, new lib.Пауза(), 3);

	this.StopBtn = new lib.Стоп();
	this.StopBtn.name = "StopBtn";
	this.StopBtn.setTransform(943.55,614.85,0.6955,0.6955,0,0,0,0.2,0.1);
	new cjs.ButtonHelper(this.StopBtn, 0, 1, 2, false, new lib.Стоп(), 3);

	this.PlayBtn = new lib.Старт();
	this.PlayBtn.name = "PlayBtn";
	this.PlayBtn.setTransform(1188.5,615.45,4.8381,3.5243);
	new cjs.ButtonHelper(this.PlayBtn, 0, 1, 2, false, new lib.Старт(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.PlayBtn},{t:this.StopBtn},{t:this.Pause}]}).wait(1255));

	// Слой_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(1,1,1).p("APCDgInSBjAPCDgIk5lkAvBlCIeDIi");
	this.shape.setTransform(202.45,88.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1099).to({_off:false},0).wait(156));

	// Слой_6
	this.instance = new lib.reostat();
	this.instance.setTransform(140,-164);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0000FF").ss(1,1,1).p("AtjkgIbHJB");
	this.shape_1.setTransform(257.175,66.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},950).to({state:[{t:this.instance}]},37).to({state:[{t:this.shape_1},{t:this.instance}]},112).wait(156));

	// Слой_15
	this.instance_1 = new lib.Символ1("synched",0);
	this.instance_1.setTransform(921.65,341.9,0.4286,0.4286,0,0,0,-1.1,-1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({x:810.95,y:298.6},9).to({x:741.85,y:388.05},10).to({x:654.05,y:298.05},10).to({x:583.1,y:388.05},10).to({x:490,y:298.6},10).to({x:420.9,y:388.05},10).to({x:330,y:343},10).to({x:921.65,y:341.9},1).to({x:810.95,y:298.6},9).to({x:741.85,y:388.05},10).to({x:654.05,y:298.05},10).to({x:583.1,y:388.05},10).to({x:490,y:298.6},10).to({x:420.9,y:388.05},10).to({x:330,y:343},10).to({x:921.65,y:341.9},1).to({x:810.95,y:298.6},9).to({x:741.85,y:388.05},10).to({x:654.05,y:298.05},10).to({x:583.1,y:388.05},10).to({x:490,y:298.6},10).to({x:420.9,y:388.05},10).to({x:330,y:343},10).to({x:921.65,y:341.9},1).to({x:810.95,y:298.6},9).to({x:741.85,y:388.05},10).to({x:654.05,y:298.05},10).to({x:583.1,y:388.05},10).to({x:490,y:298.6},10).to({x:420.9,y:388.05},10).to({x:330,y:343},10).to({x:921.65,y:341.9},1).to({x:810.95,y:298.6},9).to({x:741.85,y:388.05},10).to({x:654.05,y:298.05},10).to({x:583.1,y:388.05},10).to({x:490,y:298.6},10).to({x:420.9,y:388.05},10).to({x:330,y:343},10).to({x:921.65,y:341.9},1).to({x:810.95,y:298.6},9).to({x:741.85,y:388.05},10).to({x:654.05,y:298.05},10).to({x:583.1,y:388.05},10).to({x:490,y:298.6},10).to({x:420.9,y:388.05},10).to({x:330,y:343},10).to({x:921.65,y:341.9},1).to({x:810.95,y:298.6},9).to({x:741.85,y:388.05},10).to({x:654.05,y:298.05},10).to({x:583.1,y:388.05},10).to({x:490,y:298.6},10).to({x:420.9,y:388.05},10).to({x:330,y:343},10).to({x:921.65,y:341.9},1).to({x:810.95,y:298.6},9).to({x:741.85,y:388.05},10).to({x:654.05,y:298.05},10).to({x:583.1,y:388.05},10).to({x:490,y:298.6},10).to({x:420.9,y:388.05},10).to({x:330,y:343},10).to({x:921.65,y:341.9},1).to({x:810.95,y:298.6},9).to({x:741.85,y:388.05},10).to({x:654.05,y:298.05},10).to({x:583.1,y:388.05},10).to({x:490,y:298.6},10).to({x:420.9,y:388.05},10).to({x:330,y:343},10).to({x:921.65,y:341.9},1).to({x:810.95,y:298.6},9).to({x:741.85,y:388.05},10).to({x:654.05,y:298.05},10).to({x:583.1,y:388.05},10).to({x:490,y:298.6},10).to({x:420.9,y:388.05},10).to({x:330,y:343},10).to({x:921.65,y:341.9},1).to({x:810.95,y:298.6},9).to({x:741.85,y:388.05},10).to({x:654.05,y:298.05},10).to({x:583.1,y:388.05},10).to({x:490,y:298.6},10).to({x:420.9,y:388.05},10).to({x:330,y:343},10).to({_off:true},1).wait(305));

	// Слой_4
	this.instance_2 = new lib.Анимация2("synched",0);
	this.instance_2.setTransform(911.5,336.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({x:805.4},30).to({x:640.2},30).to({x:487},30).to({x:341.5},30).to({_off:true},1).wait(1075));

	// Слой_3
	this.instance_3 = new lib.Анимация2("synched",0);
	this.instance_3.setTransform(911.5,336.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({x:786.35},30).to({x:665.55},30).to({x:490.35},30).to({x:341.5},30).to({_off:true},1).wait(1105));

	// Слой_2
	this.instance_4 = new lib.Анимация2("synched",0);
	this.instance_4.setTransform(917.05,336.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:775.9},29).to({x:651.65},30).to({x:520.5},30).to({x:341.5},30).to({_off:true},1).wait(1135));

	// Слой_1
	this.instance_5 = new lib.CachedBmp_3();
	this.instance_5.setTransform(427.95,74.7,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_2();
	this.instance_6.setTransform(625.15,482.9,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_4();
	this.instance_7.setTransform(314.5,247.55,0.5,0.5);

	this.instance_8 = new lib.Символ2("synched",0);
	this.instance_8.setTransform(739.4,420.6,0.5512,0.5512,0,0,0,-1.2,3.9);

	this.instance_9 = new lib.Символ2("synched",0);
	this.instance_9.setTransform(813.5,265.55,0.5512,0.5512,0,0,0,-1.2,3.8);

	this.instance_10 = new lib.Символ2("synched",0);
	this.instance_10.setTransform(580.65,420.55,0.5512,0.5512,0,0,0,-1.2,3.8);

	this.instance_11 = new lib.Символ2("synched",0);
	this.instance_11.setTransform(418.45,420.55,0.5512,0.5512,0,0,0,-1.2,3.8);

	this.instance_12 = new lib.Символ2("synched",0);
	this.instance_12.setTransform(654.75,265.6,0.5512,0.5512,0,0,0,-1.2,3.9);

	this.instance_13 = new lib.Символ2("synched",0);
	this.instance_13.setTransform(492.55,266.15,0.5512,0.5512,0,0,0,-1.2,3.9);

	this.instance_14 = new lib.CachedBmp_6();
	this.instance_14.setTransform(427.95,74.7,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_5();
	this.instance_15.setTransform(625.15,482.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.instance_7},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},180).to({state:[]},840).wait(235));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(745.3,196,488.9000000000001,640);
// library properties:
lib.properties = {
	id: '0DAD63D2A221FE4FA5A41FE66BC151D0',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Анимация_atlas_1.png?1636624651563", id:"Анимация_atlas_1"},
		{src:"sounds/Вступление_.mp3?1636624651613", id:"Вступление"},
		{src:"sounds/КонцовОчка_.mp3?1636624651613", id:"КонцовОчка"},
		{src:"sounds/СерединОчка_.mp3?1636624651613", id:"СерединОчка"}
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
an.compositions['0DAD63D2A221FE4FA5A41FE66BC151D0'] = {
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