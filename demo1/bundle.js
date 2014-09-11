(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { 
	name: 'shape',
	controls: [
		{ name: 'text', keyframes: [
			{ time: 0.0, value: [100,160] },
			{ time: 1.1, ease: 'expoOut', value: [148,185] },
		] },
		{ name: 'text2', keyframes: [
			{ time: 0.0, value: [110,180] },
			{ time: 1.1, ease: 'expoOut', value: [149,186] },
		] },
		{ name: 'textAlpha', keyframes: [
			{ time: 1.8, value: [1] },
			{ time: 2.0, value: [0] },
		] },
		{ name: 'textSize', keyframes: [
			{ time: 0.0, value: [80] },
			{ time: 1.0, ease: 'expoOut', value: [26] },
		] },
		{ name: 'textchr', keyframes: [
			{ time: 0.0, value: [0] },
			{ time: 0.25, value: [1] },
		] },
		{ name: 'alpha', keyframes: [
			{ time: 2.8, value: [1] },
			{ time: 3.1, value: [0] },
		] },
		{ name: 'edge', keyframes: [
			{ time: 0.5, value: [8] },
			{ time: 1.5, ease: 'expoOut', value: [2] },
			{ time: 2, ease: 'expoOut', value: [2] },
			{ time: 4, ease: 'expoOut', value: [0] },
		] },
		{ name: 'fill', keyframes: [
			{ time: 0, value: [255, 255, 100] },
			{ time: 1, ease: 'expoOut', value: [180, 120, 190] },
			{ time: 2.0, ease: 'expoOut', value: [180, 120, 190] },
			{ time: 3, ease: 'expoOut', value: [200, 200, 200] }
		] },
		{ name: 'stroke', keyframes: [
			{ time: 0, value: [0, 0, 120] },
			{ time: 2, ease: 'expoOut', value: [0, 0, 0] },
		] },
		//this is a custom type, e.g. something that works with path-illustrator
		{ name: 'path', type: 'path', keyframes: [
			{ time: 0, value: {"points":[{"position":[156,212],"controls":[[233,183],[79,241]],"curve":false},{"position":[149,141],"controls":[[17,7],[17,7]],"curve":false},{"position":[293,145],"controls":[[0,9],[0,9]],"curve":false},{"position":[293,213],"controls":[[-2,-5],[-2,-5]],"curve":false},{"position":[270,215],"controls":[[3,-4],[3,-4]],"curve":false},{"position":[248,217],"controls":[[-13,-14],[-13,-14]],"curve":false},{"position":[229,217],"controls":[[-17,-5],[-17,-5]],"curve":false}],"closed":true}  },
			{ time: 0.5, ease: 'expoOut', value: {"points":[{"position":[138,221],"controls":[[215,192],[61,250]],"curve":false},{"position":[122,129],"controls":[[-10,-5],[-10,-5]],"curve":false},{"position":[297,137],"controls":[[4,1],[4,1]],"curve":false},{"position":[300,219],"controls":[[5,1],[5,1]],"curve":false},{"position":[266,226],"controls":[[-1,7],[-1,7]],"curve":false},{"position":[258,242],"controls":[[-3,11],[-3,11]],"curve":false},{"position":[239,227],"controls":[[-7,5],[-7,5]],"curve":false}],"closed":true} },
			{ time: 1.0, ease: 'expoOut', value: {"points":[{"position":[125,225],"controls":[[202,196],[48,254]],"curve":false},{"position":[106,125],"controls":[[-26,-9],[-26,-9]],"curve":false},{"position":[307,119],"controls":[[14,-17],[14,-17]],"curve":false},{"position":[303,228],"controls":[[8,10],[8,10]],"curve":false},{"position":[266,231],"controls":[[-1,12],[-1,12]],"curve":false},{"position":[262,253],"controls":[[1,22],[1,22]],"curve":false},{"position":[244,229],"controls":[[-2,7],[-2,7]],"curve":false}],"closed":true} },
			{ time: 2, ease: 'expoOut', value: {"points":[{"position":[125,225],"controls":[[202,196],[48,254]],"curve":false},{"position":[106,125],"controls":[[-26,-9],[-26,-9]],"curve":false},{"position":[307,119],"controls":[[14,-17],[14,-17]],"curve":false},{"position":[303,228],"controls":[[8,10],[8,10]],"curve":false},{"position":[266,231],"controls":[[-1,12],[-1,12]],"curve":false},{"position":[262,253],"controls":[[1,22],[1,22]],"curve":false},{"position":[244,229],"controls":[[-2,7],[-2,7]],"curve":false}],"closed":true} },
			{ time: 2.8, ease: 'expoOut', value: {"points":[{"position":[125,225],"controls":[[202,196],[48,254]],"curve":false},{"position":[124,225],"controls":[[-8,91],[-8,91]],"curve":false},{"position":[303,224],"controls":[[10,88],[10,88]],"curve":false},{"position":[303,225],"controls":[[8,7],[8,7]],"curve":false},{"position":[274,225],"controls":[[7,6],[7,6]],"curve":false},{"position":[260,224],"controls":[[-1,-7],[-1,-7]],"curve":false},{"position":[242,224],"controls":[[-4,2],[-4,2]],"curve":false}],"closed":true} },
			// { time: 3.5, ease: 'expoOut', value: {"points":[{"position":[242,225],"controls":[[319,196],[165,254]],"curve":false},{"position":[239,225],"controls":[[107,91],[107,91]],"curve":false},{"position":[278,225],"controls":[[-15,89],[-15,89]],"curve":false},{"position":[279,227],"controls":[[-16,9],[-16,9]],"curve":false},{"position":[274,225],"controls":[[7,6],[7,6]],"curve":false},{"position":[260,224],"controls":[[-1,-7],[-1,-7]],"curve":false},{"position":[254,225],"controls":[[8,3],[8,3]],"curve":false}],"closed":true}  }
		] }
		// { name: 'path', type: 'path', keyframes: [
		// 	{ time: 0, value: {"points":[{"position":[132,128],"controls":[[128,134],[136,122]],"curve":true},{"position":[258,125],"controls":[[254,117],[262,133]],"curve":true},{"position":[260,137],"controls":[[264,134],[256,140]],"curve":true},{"position":[236,138],"controls":[[0,0],[0,0]],"curve":false},{"position":[224,140],"controls":[[-1,-10],[-1,-10]],"curve":false},{"position":[213,140],"controls":[[0,0],[0,0]],"curve":false},{"position":[131,138],"controls":[[137,145],[125,131]],"curve":true}],"closed":true}   },
		// 	{ time: .5, ease: 'expoOut', value: {"points":[{"position":[132,87],"controls":[[128,93],[136,81]],"curve":true},{"position":[254,86],"controls":[[250,78],[258,94]],"curve":true},{"position":[260,137],"controls":[[264,134],[256,140]],"curve":true},{"position":[236,138],"controls":[[0,0],[0,0]],"curve":false},{"position":[234,160],"controls":[[9,10],[9,10]],"curve":false},{"position":[213,140],"controls":[[0,0],[0,0]],"curve":false},{"position":[131,138],"controls":[[137,145],[125,131]],"curve":true}],"closed":true} },
		// 	{ time: 1.5, ease: 'bounceOut', value: {"points":[{"position":[155,79],"controls":[[134,93],[176,65]],"curve":true},{"position":[261,77],"controls":[[231,50],[291,104]],"curve":true},{"position":[266,133],"controls":[[276,124],[256,142]],"curve":true},{"position":[236,138],"controls":[[0,0],[0,0]],"curve":false},{"position":[234,160],"controls":[[9,10],[9,10]],"curve":false},{"position":[213,140],"controls":[[0,0],[0,0]],"curve":false},{"position":[146,136],"controls":[[162,151],[130,121]],"curve":true}],"closed":true}  },
		// 	{ time: 2.5, ease: 'expoOut', value: {"points":[{"position":[189,98],"controls":[[176,110],[202,86]],"curve":true},{"position":[242,94],"controls":[[224,84],[260,104]],"curve":true},{"position":[250,128],"controls":[[252,123],[248,133]],"curve":true},{"position":[236,138],"controls":[[0,0],[0,0]],"curve":false},{"position":[220,142],"controls":[[-5,-8],[-5,-8]],"curve":false},{"position":[206,141],"controls":[[-7,1],[-7,1]],"curve":false},{"position":[183,131],"controls":[[190,141],[176,121]],"curve":true}],"closed":true}  },
		// 	{ time: 3, ease: 'expoOut', value: {"points":[{"position":[204,105],"controls":[[201,108],[207,102]],"curve":true},{"position":[242,104],"controls":[[238,102],[246,106]],"curve":true},{"position":[260,143],"controls":[[263,141],[257,145]],"curve":true},{"position":[235,155],"controls":[[-1,17],[-1,17]],"curve":false},{"position":[223,145],"controls":[[221,139],[225,151]],"curve":false},{"position":[212,157],"controls":[[-1,17],[-1,17]],"curve":false},{"position":[187,143],"controls":[[191,147],[183,139]],"curve":true}],"closed":true}   },
		// ] }
		// { name: 'path', type: 'path', keyframes: [
		// 	{ time: 0, value: {"points":[{"position":[191,140],"controls":[[183,140],[199,140]],"curve":true},{"position":[268,141],"controls":[[270,136],[266,146]],"curve":true},{"position":[118,144],"controls":[[125,149],[111,139]],"curve":true}],"closed":true}   },
		// 	{ time: 1, ease: 'expoOut', value: {"points":[{"position":[190,82],"controls":[[182,82],[198,82]],"curve":true},{"position":[268,141],"controls":[[270,136],[266,146]],"curve":true},{"position":[118,144],"controls":[[125,149],[111,139]],"curve":true}],"closed":true}   },
		// 	{ time: 2, ease: 'expoOut', value: {"points":[{"position":[190,82],"controls":[[181,63],[199,101]],"curve":true},{"position":[232,143],"controls":[[242,142],[222,144]],"curve":true},{"position":[118,144],"controls":[[116,154],[120,134]],"curve":true}],"closed":true}   },
		// 	{ time: 3, ease: 'bounceOut', value: {"points":[{"position":[190,82],"controls":[[163,60],[217,104]],"curve":true},{"position":[188,165],"controls":[[230,148],[146,182]],"curve":true},{"position":[124,110],"controls":[[118,153],[130,67]],"curve":true}],"closed":true}  },
		// ] }
	]
}








},{}],2:[function(require,module,exports){
var data = require('./data')
var group = require('./timeline-group')(data)
var arrayEase = require('./timeline-easing')
var rgba = require('color-style')
var lerp = require('lerp-array')
var drawPath = require('path-illustrator-client/draw-path')

require('canvas-testbed')(render)

var time = 0
var dur = group.duration()

var widget = { 
	path: null, 
	rgb: [ 0, 0, 0 ], 
	// shape: [50, 50] 
}


function lerpPath(path1, path2, t) {
	if (path1.points.length !== path2.points.length
		|| path1.closed !== path2.closed)
		throw new Error('paths must be parallel')

	var out = { closed: path1.closed, points: new Array(path1.points.length) }
	for (var i=0; i<path1.points.length; i++) {
		var p1 = path1.points[i]
		var p2 = path2.points[i]

		out.points[i] = { 
			curve: p1.curve, 
			position: lerp(p1.position, p2.position, t),
			controls: [
				lerp(p1.controls[0], p2.controls[0], t),
				lerp(p1.controls[1], p2.controls[1], t)
			]
		}
	}
	return out
}

var eases = {
	array: arrayEase,
	path: function path(frame1, frame2, t) {
		var easeFunc = frame2.ease
		if (easeFunc) { //ease the time
			t = arrayEase.easings[easeFunc](t)
		}
		
		return lerpPath(frame1.value, frame2.value, t)

		// return frame1.value
	}
}

require('dom-events').on(window, 'click', function(ev) {
	time = 0
})

function path(ctx, widget) {
	ctx.fillStyle = rgba(widget.fill)	
	ctx.lineWidth = widget.edge[0]
	ctx.strokeStyle = rgba(widget.stroke)	
	ctx.globalAlpha = widget.alpha[0]
	
	ctx.beginPath()
	if (widget.path)
		drawPath(ctx, widget.path)
	ctx.closePath()
}

function render(ctx, width, height, dt) {
	dt = Math.max(dt, 30)

	time += dt/1000
	if (time >= dur+1)
		time = 0
	ctx.clearRect(0,0, width, height)
	ctx.save()

	group.controls.forEach(function(control) {
		var ease = eases[control.type]
		var val = control.interpolate(time, ease)

		widget[control.name] = val
	})
	ctx.font = "16px 'Helvetica', sans-serif"
	ctx.fillText('click to animate', 10, 20)

	path(ctx, widget)
	ctx.fill()
	ctx.clip()

	var chrs = widget.textchr[0]
	var str = 'hello, world'
	str = str.substring(0, Math.min(str.length, ~~(chrs*str.length)))
		
	var size = widget.textSize[0]
	ctx.font = size+"px 'Helvetica', sans-serif"
	
	ctx.fillStyle = 'rgba(0,0,0,0.25)'
	ctx.globalAlpha = widget.textAlpha[0]
	ctx.fillText(str, widget.text2[0], widget.text2[1])

	ctx.fillStyle = 'white'
	ctx.fillText(str, widget.text[0], widget.text[1])
	ctx.restore()

	path(ctx, widget)
	ctx.stroke()
}




},{"./data":1,"./timeline-easing":4,"./timeline-group":5,"canvas-testbed":6,"color-style":10,"dom-events":11,"lerp-array":19,"path-illustrator-client/draw-path":21}],3:[function(require,module,exports){
//a "control" maintains a set of tweenable values
//for e.g.:
//  position [x, y]
//  color [r, g, b, a]
//  alpha [a]

var keyframes = require('keyframes')

var DEFAULT_TYPE = 'array'

//Changing the playhead will update this control's value.
function Control(data) {
	if (!(this instanceof Control)) 
		return new Control(data)

	this.keyframes = keyframes()
	this.value = null
	this.type = DEFAULT_TYPE
	this.name = ''
	if (data)
		this.load(data)
}

Control.prototype.dispose = function() {
	this.keyframes.clear()
}

//updates displayed value based on playhead position
Control.prototype.load = function(data) {
	this.dispose()

	if (!data)
		return
	
	this.name = data.name
	this.type = typeof data.type === 'string' ? data.type : DEFAULT_TYPE
	this.value = data.value
	if (data.keyframes)
		this.keyframes.frames = data.keyframes
}

Control.prototype.interpolate = function(time, ease) {
	if (this.keyframes.count === 0)
		return this.value
	return this.keyframes.value(time, ease)
}

module.exports = Control
},{"keyframes":16}],4:[function(require,module,exports){
var lerp = require('lerp-array')

var easings = {
	cubicIn: function(t) {
		return t * t * t
	},
	linear: function(t) {
		return t
	},
	expoOut: function(t) {
		return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
	},
	bounceOut: function(t) {
		var a = 4.0 / 11.0
		var b = 8.0 / 11.0
		var c = 9.0 / 10.0

		var ca = 4356.0 / 361.0
		var cb = 35442.0 / 1805.0
		var cc = 16061.0 / 1805.0

		var t2 = t * t

		return t < a
			? 7.5625 * t2
			: t < b 
			  ? 9.075 * t2 - 9.9 * t + 3.4
			  	: t < c
			  	  ? ca * t2 - cb * t + cc
				  : 10.8 * t * t - 20.52 * t + 10.72
	}
}

//For optimization:
//Keyframes easing functions could be cached

module.exports = function(frame1, frame2, t) {
	var easeFunc = frame2.ease
	if (easeFunc) { //ease the time
		t = easings[easeFunc](t)
	}

	return lerp(frame1.value, frame2.value, t)
}

module.exports.easings = easings
},{"lerp-array":19}],5:[function(require,module,exports){
var Control = require('./timeline-control')

function indexOfName(list, name) {
	for (var i=0; i<list.length; i++)
		if (list[i].name === name)
			return i
	return -1
}

//A Group contains multiple controls
function Group(data) {
	if (!(this instanceof Group)) 
		return new Group(data)

	this.name = undefined
	this.controls = []

	if (data)
		this.load(data)
}

Group.prototype.dispose = function() {
	this.controls.forEach(function(c) {
		c.dispose()
	})
	this.controls.length = 0 
}

Group.prototype.duration = function() {
	var maxTime = 0
	for (var j=0; j<this.controls.length; j++) {
		var control = this.controls[j]
		var frames = control.keyframes.frames
		for (var i=0; i<frames.length; i++) 
			maxTime = Math.max(frames[i].time, maxTime)
	}
	return maxTime
}

//Returns the first control by the specified name or index
Group.prototype.control = function(name) {
	var idx = typeof name === 'number' ? name : indexOfName(this.groups, name)
	return idx<0 ? undefined : this.controls[idx]
}

//updates displayed value based on playhead position
Group.prototype.load = function(data) {
	this.dispose()

	if (!data || !data.controls)
		return

	this.name = data.name
	this.controls = data.controls.map(function(c) {
		return new Control(c)
	})
}

module.exports = Group
},{"./timeline-control":3}],6:[function(require,module,exports){
var domready = require('domready');
require('raf.js');

var CanvasApp = require('canvas-app');

module.exports = function( render, start, options ) {
	domready(function() {
		//options were provided as the first argument, no render handler
		if (typeof render === "object" && render) {
			options = render;
			render = null;
			start = null;
		}
		//options were provided as the second argument
		else if (typeof start === "object" && start) {
			options = start;
			start = null;
		}
		//otherwise options were provided as the third argument...

		
		options = options||{};
		if (typeof options.onReady !== 'function')
			options.onReady = start;

		var runner = CanvasApp(render, options);

		runner.canvas.setAttribute("id", "canvas");
		document.body.appendChild(runner.canvas);
		document.body.style.margin = "0";
		document.body.style.overflow = "hidden";
		
		runner.start();
	});
};
},{"canvas-app":7,"domready":15,"raf.js":9}],7:[function(require,module,exports){
var getGL = require('webgl-context');

function CanvasApp(render, options) {
    if (!(this instanceof CanvasApp))
        return new CanvasApp(render, options);

    //allow options to be passed as first argument
    if (typeof render === 'object' && render) {
        options = render;
        render = null;
    }

    render = typeof render === 'function' ? render : options.onRender;

    options = options||{};
    options.retina = typeof options.retina === "boolean" ? options.retina : true;
    
    var hasWidth = typeof options.width === "number", 
        hasHeight = typeof options.height === "number";

    //if either width or height is specified, don't auto-resize to the window...
    if (hasWidth || hasHeight) 
        options.ignoreResize = true;

    options.width = hasWidth ? options.width : window.innerWidth;
    options.height = hasHeight ? options.height : window.innerHeight;

    var DPR = options.retina ? (window.devicePixelRatio||1) : 1; 

    //setup the canvas
    var canvas = options.canvas || document.createElement("canvas");
    canvas.width = options.width * DPR;
    canvas.height = options.height * DPR;

    if (options.retina) {
        canvas.style.width = options.width + 'px';
        canvas.style.height = options.height + 'px';
    }

    var context,
        attribs = options.contextAttributes||{};

    this.isWebGL = false;
    if (options.context === "webgl" || options.context === "experimental-webgl") {
        context = getGL({ canvas: canvas, attributes: attribs });
        if (!context) {
            throw "WebGL Context Not Supported -- try enabling it or using a different browser";
        }
        this.isWebGL = true;
    } else {
        context = canvas.getContext(options.context||"2d", attribs);
    }

    this.running = false;
    this.width = options.width;
    this.height = options.height;
    this.canvas = canvas;
    this.context = context;
    this.onResize = options.onResize;
    this._DPR = DPR;
    this._retina = options.retina;
    this._once = options.once;
    this._ignoreResize = options.ignoreResize;
    this._lastFrame = null;
    this._then = Date.now();

    //FPS counter
    this.fps = 60;
    this._frames = 0;
    this._prevTime = this._then;

    if (!this._ignoreResize) {
        window.addEventListener("resize", function() {
            this.resize(window.innerWidth, window.innerHeight);
        }.bind(this));

        window.addEventListener("orientationchange", function() {
            this.resize(window.innerWidth, window.innerHeight);
        }.bind(this));
    }

    if (typeof render === "function") {
        this.onRender = render.bind(this);   
    } else {
        //dummy render function
        this.onRender = function (context, width, height, dt) { };
    }

    this.renderOnce = function() {
        var now = Date.now();
        var dt = (now-this._then);

        this._frames++;
        if (now > this._prevTime + 1000) {
            this.fps = Math.round((this._frames * 1000) / (now - this._prevTime));

            this._prevTime = now;
            this._frames = 0;
        }

        if (!this.isWebGL) {
            this.context.save();
            this.context.scale(this._DPR, this._DPR);
        }
        
        this.onRender(this.context, this.width, this.height, dt);

        if (!this.isWebGL)
            this.context.restore();

        this._then = now;
    };

    this._renderHandler = function() {
        if (!this.running) 
            return;
        
        if (!this._once) {
            this._lastFrame = requestAnimationFrame(this._renderHandler);
        }

        this.renderOnce();
    }.bind(this);

    if (typeof options.onReady === "function") {
        options.onReady.call(this, context, this.width, this.height);
    }
}

Object.defineProperty(CanvasApp.prototype, 'retinaEnabled', {

    set: function(v) {
        this._retina = v;
        this._DPR = this._retina ? (window.devicePixelRatio||1) : 1;
        this.resize(this.width, this.height);
    },

    get: function() {
        return this._retina;
    }
});

CanvasApp.prototype.resetFPS = function() {
    this._frames = 0;
    this._prevTime = Date.now();
    this._then = this._prevTime;
    this.fps = 60;
};

CanvasApp.prototype.start = function() {
    if (this.running)
        return;
    
    if (this._lastFrame) 
        cancelAnimationFrame(this._lastFrame);

    //reset FPS counter
    this.resetFPS();

    this.running = true;
    this._lastFrame = requestAnimationFrame(this._renderHandler);
};

CanvasApp.prototype.stop = function() {
    if (this._lastFrame) {
        cancelAnimationFrame(this._lastFrame);
        this._lastFrame = null;
    }
    this.running = false;
};

CanvasApp.prototype.resize = function(width, height) {
    var canvas = this.canvas;

    this.width = width;
    this.height = height;
    canvas.width = this.width * this._DPR;
    canvas.height = this.height * this._DPR;

    if (this._retina) {
        canvas.style.width = this.width + 'px';
        canvas.style.height = this.height + 'px';
    }

    if (this._once)
        requestAnimationFrame(this._renderHandler);
    if (typeof this.onResize === "function")
        this.onResize(this.width, this.height);
};

module.exports = CanvasApp;
},{"webgl-context":8}],8:[function(require,module,exports){
module.exports = function(opts) {
    opts = opts||{};
    var canvas = opts.canvas || document.createElement("canvas");
    if (typeof opts.width === "number")
        canvas.width = opts.width;
    if (typeof opts.height === "number")
        canvas.height = opts.height;
    
    var attribs = (opts.attributes || opts.attribs || {});
    try {
        gl = (canvas.getContext('webgl', attribs) || canvas.getContext('experimental-webgl', attribs));
    } catch (e) {
        gl = null;
    }
    return gl;
};
},{}],9:[function(require,module,exports){
/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */

(function(window) {
	var lastTime = 0,
		vendors = ['webkit', 'moz'],
		requestAnimationFrame = window.requestAnimationFrame,
		cancelAnimationFrame = window.cancelAnimationFrame,
		i = vendors.length;

	// try to un-prefix existing raf
	while (--i >= 0 && !requestAnimationFrame) {
		requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
		cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'];
	}

	// polyfill with setTimeout fallback
	// heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
	if (!requestAnimationFrame || !cancelAnimationFrame) {
		requestAnimationFrame = function(callback) {
			var now = +new Date(), nextTime = Math.max(lastTime + 16, now);
			return setTimeout(function() {
				callback(lastTime = nextTime);
			}, nextTime - now);
		};

		cancelAnimationFrame = clearTimeout;
	}

	// export to window
	window.requestAnimationFrame = requestAnimationFrame;
	window.cancelAnimationFrame = cancelAnimationFrame;
}(window));

},{}],10:[function(require,module,exports){
module.exports = getString.bind(this, formatRGBA);

module.exports.rgba = getString.bind(this, formatRGBA);
module.exports.rgb = module.exports.rgba;

module.exports.hsla = getString.bind(this, formatHSLA);
module.exports.hsl = module.exports.hsla;

function getString(format, r, g, b, a) {
	//first argument is a string, return immediately
	if (typeof r === 'string') {
		return r;
	}
	//first argument is array, assume format:
	//	rgba([r, g, b], a)
	//	rgba([r, g, b, a])
	//	rgba([r, g, b])
	else if (Array.isArray(r)) {
		var array = r;
		var second = g;
		r = array[0];
		g = array[1];
		b = array[2];
		//if alpha is specified in the array, use it
		//otherwise assume it's the second parameter
		a = typeof array[3] === 'number' ? array[3] : second;
	}
	//first argument is a number or undefined, assume format:
	//	rgba(r, g, b, a)
	//	rgba(r, g, b)
	//	rgba()  --> black
	
	//default values
	a = typeof a === 'number' ? a : 1.0;
	return format(r||0, g||0, b||0, a);
}

function formatRGBA(a, b, c, d) {
	return 'rgba('+ ~~(a) + //0 - 255
			',' + ~~(b)  + 
			',' + ~~(c) + 
			',' + d + ')';  //0.0 - 1.0
}

function formatHSLA(a, b, c, d) {
	return 'hsla('+ a + ',' + b + '%,' + c + '%,' + d + ')';
}
},{}],11:[function(require,module,exports){

var synth = require('synthetic-dom-events');

var on = function(element, name, fn, capture) {
    return element.addEventListener(name, fn, capture || false);
};

var off = function(element, name, fn, capture) {
    return element.removeEventListener(name, fn, capture || false);
};

var once = function (element, name, fn, capture) {
    function tmp (ev) {
        off(element, name, tmp, capture);
        fn(ev);
    }
    on(element, name, tmp, capture);
};

var emit = function(element, name, opt) {
    var ev = synth(name, opt);
    element.dispatchEvent(ev);
};

if (!document.addEventListener) {
    on = function(element, name, fn) {
        return element.attachEvent('on' + name, fn);
    };
}

if (!document.removeEventListener) {
    off = function(element, name, fn) {
        return element.detachEvent('on' + name, fn);
    };
}

if (!document.dispatchEvent) {
    emit = function(element, name, opt) {
        var ev = synth(name, opt);
        return element.fireEvent('on' + ev.type, ev);
    };
}

module.exports = {
    on: on,
    off: off,
    once: once,
    emit: emit
};

},{"synthetic-dom-events":12}],12:[function(require,module,exports){

// for compression
var win = window;
var doc = document || {};
var root = doc.documentElement || {};

// detect if we need to use firefox KeyEvents vs KeyboardEvents
var use_key_event = true;
try {
    doc.createEvent('KeyEvents');
}
catch (err) {
    use_key_event = false;
}

// Workaround for https://bugs.webkit.org/show_bug.cgi?id=16735
function check_kb(ev, opts) {
    if (ev.ctrlKey != (opts.ctrlKey || false) ||
        ev.altKey != (opts.altKey || false) ||
        ev.shiftKey != (opts.shiftKey || false) ||
        ev.metaKey != (opts.metaKey || false) ||
        ev.keyCode != (opts.keyCode || 0) ||
        ev.charCode != (opts.charCode || 0)) {

        ev = document.createEvent('Event');
        ev.initEvent(opts.type, opts.bubbles, opts.cancelable);
        ev.ctrlKey  = opts.ctrlKey || false;
        ev.altKey   = opts.altKey || false;
        ev.shiftKey = opts.shiftKey || false;
        ev.metaKey  = opts.metaKey || false;
        ev.keyCode  = opts.keyCode || 0;
        ev.charCode = opts.charCode || 0;
    }

    return ev;
}

// modern browsers, do a proper dispatchEvent()
var modern = function(type, opts) {
    opts = opts || {};

    // which init fn do we use
    var family = typeOf(type);
    var init_fam = family;
    if (family === 'KeyboardEvent' && use_key_event) {
        family = 'KeyEvents';
        init_fam = 'KeyEvent';
    }

    var ev = doc.createEvent(family);
    var init_fn = 'init' + init_fam;
    var init = typeof ev[init_fn] === 'function' ? init_fn : 'initEvent';

    var sig = initSignatures[init];
    var args = [];
    var used = {};

    opts.type = type;
    for (var i = 0; i < sig.length; ++i) {
        var key = sig[i];
        var val = opts[key];
        // if no user specified value, then use event default
        if (val === undefined) {
            val = ev[key];
        }
        used[key] = true;
        args.push(val);
    }
    ev[init].apply(ev, args);

    // webkit key event issue workaround
    if (family === 'KeyboardEvent') {
        ev = check_kb(ev, opts);
    }

    // attach remaining unused options to the object
    for (var key in opts) {
        if (!used[key]) {
            ev[key] = opts[key];
        }
    }

    return ev;
};

var legacy = function (type, opts) {
    opts = opts || {};
    var ev = doc.createEventObject();

    ev.type = type;
    for (var key in opts) {
        if (opts[key] !== undefined) {
            ev[key] = opts[key];
        }
    }

    return ev;
};

// expose either the modern version of event generation or legacy
// depending on what we support
// avoids if statements in the code later
module.exports = doc.createEvent ? modern : legacy;

var initSignatures = require('./init.json');
var types = require('./types.json');
var typeOf = (function () {
    var typs = {};
    for (var key in types) {
        var ts = types[key];
        for (var i = 0; i < ts.length; i++) {
            typs[ts[i]] = key;
        }
    }

    return function (name) {
        return typs[name] || 'Event';
    };
})();

},{"./init.json":13,"./types.json":14}],13:[function(require,module,exports){
module.exports={
  "initEvent" : [
    "type",
    "bubbles",
    "cancelable"
  ],
  "initUIEvent" : [
    "type",
    "bubbles",
    "cancelable",
    "view",
    "detail"
  ],
  "initMouseEvent" : [
    "type",
    "bubbles",
    "cancelable",
    "view",
    "detail",
    "screenX",
    "screenY",
    "clientX",
    "clientY",
    "ctrlKey",
    "altKey",
    "shiftKey",
    "metaKey",
    "button",
    "relatedTarget"
  ],
  "initMutationEvent" : [
    "type",
    "bubbles",
    "cancelable",
    "relatedNode",
    "prevValue",
    "newValue",
    "attrName",
    "attrChange"
  ],
  "initKeyboardEvent" : [
    "type",
    "bubbles",
    "cancelable",
    "view",
    "ctrlKey",
    "altKey",
    "shiftKey",
    "metaKey",
    "keyCode",
    "charCode"
  ],
  "initKeyEvent" : [
    "type",
    "bubbles",
    "cancelable",
    "view",
    "ctrlKey",
    "altKey",
    "shiftKey",
    "metaKey",
    "keyCode",
    "charCode"
  ]
}

},{}],14:[function(require,module,exports){
module.exports={
  "MouseEvent" : [
    "click",
    "mousedown",
    "mouseup",
    "mouseover",
    "mousemove",
    "mouseout"
  ],
  "KeyboardEvent" : [
    "keydown",
    "keyup",
    "keypress"
  ],
  "MutationEvent" : [
    "DOMSubtreeModified",
    "DOMNodeInserted",
    "DOMNodeRemoved",
    "DOMNodeRemovedFromDocument",
    "DOMNodeInsertedIntoDocument",
    "DOMAttrModified",
    "DOMCharacterDataModified"
  ],
  "HTMLEvents" : [
    "load",
    "unload",
    "abort",
    "error",
    "select",
    "change",
    "submit",
    "reset",
    "focus",
    "blur",
    "resize",
    "scroll"
  ],
  "UIEvent" : [
    "DOMFocusIn",
    "DOMFocusOut",
    "DOMActivate"
  ]
}

},{}],15:[function(require,module,exports){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = /^loaded|^c/.test(doc.readyState)

  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? fn() : fns.push(fn)
  }

});

},{}],16:[function(require,module,exports){
//Generic list of keyframes with timestamps and values

var lerpNumbers = require('./lerp-numbers')
var range = require('unlerp')

function sort(a, b) {
    return a.time - b.time
}

function Keyframes(frames, sorted) {
    if (!(this instanceof Keyframes)) 
        return new Keyframes(frames)
    this.frames = frames||[]
    if (!sorted)
        this.sort()
}

//Finds the index of the nearest keyframe to the given time stamp.
//If radius is specified, it will return the nearest only within that radius
Keyframes.prototype.nearestIndex = function(time, radius) {
    radius = typeof radius === 'number' ? radius : Number.MAX_VALUE
    var minDist = Number.MAX_VALUE
    var nearest = -1
    for (var i=0; i<this.frames.length; i++) {
        var dist = Math.abs(this.frames[i].time - time)
        if (dist < minDist && dist <= radius) {
            minDist = dist
            nearest = i
        }
    }
    return nearest
}

//Gets the keyframe at the index
Keyframes.prototype.nearest = function(time, radius) {
    var idx = this.nearestIndex(time, radius)
    return idx === -1 ? null : this.frames[idx]
}

//Gets the keyframe at time
Keyframes.prototype.get = function(time) {
    return this.nearest(time, 0)
}

//Gets the keyframe index at time
Keyframes.prototype.getIndex = function(time) {
    return this.nearestIndex(time, 0)
}

//lerps the value at the specified time stamp
//returns null if no keyframes exist
Keyframes.prototype.value = function(time, ease) {
    if (this.frames.length === 0)
        return null

    var prev = -1
    //get last keyframe to time
    for (var i=this.frames.length-1; i>=0; i--) {
        if (time >= this.frames[i].time) {
            prev = i
            break
        }
    }
    
    //start or end keyframes
    if (prev === -1 || prev === this.frames.length-1) {
        if (prev < 0)
            prev = 0
        return this.frames[prev].value
    } 
    else {
        var startFrame = this.frames[prev]
        var endFrame = this.frames[prev+1]

        //clamp and get range
        time = Math.max(startFrame.time, Math.min(time, endFrame.time))
        var t = range(startFrame.time, endFrame.time, time)

        //We ease from left keyframe to right, with a custom easing
        //equation if specified
        if (typeof ease === 'function')
            return ease(startFrame, endFrame, t)

        //Otherwise we assume the values are simple numbers and lerp them
        return lerpNumbers(startFrame.value, endFrame.value, t)
    }
}

Keyframes.prototype.next = function(time) {
    if (this.frames.length <= 1)
        return null

    var cur = -1
    //get last keyframe to time
    for (var i=0; i<this.frames.length; i++) {
        if (time < this.frames[i].time) {
            cur = i
            break
        }
    }
    return cur===-1 ? null : this.frames[cur]
}

Keyframes.prototype.previous = function(time) {
    if (this.frames.length <= 1)
        return null

    var cur = -1
    //get last keyframe to time
    for (var i=this.frames.length-1; i>=0; i--) {
        if (time > this.frames[i].time) {
            cur = i
            break
        }
    }
    return cur===-1 ? null : this.frames[cur]
}

//Adds a frame at the given time stamp
Keyframes.prototype.add = function(frame) {
    this.frames.push(frame)
    this.sort()
}

//convenience for .frames.splice
//if items are inserted, a sort will be applied after insertion
Keyframes.prototype.splice = function(index, howmany, itemsN) {
    this.frames.splice.apply(this.frames, arguments)
    if (arguments.length > 2)
        this.sort()
}

//sorts the keyframes. you should do this after 
//adding new keyframes that are not in linear time
Keyframes.prototype.sort = function() {
    this.frames.sort(sort)
}

//Clears the keyframe list
Keyframes.prototype.clear = function() {
    this.frames.length = 0
}

Object.defineProperty(Keyframes.prototype, "count", {
    get: function() {
        return this.frames.length
    }
})

module.exports = Keyframes
},{"./lerp-numbers":17,"unlerp":18}],17:[function(require,module,exports){
var lerp = require('lerp')

module.exports = function lerpValues(value1, value2, t) {
    if (typeof value1 === 'number'
            && typeof value2 === 'number')
        return lerp(value1, value2, t)
    else { //assume array
        var out = new Array(value1.length)
        for (var i=0; i<value1.length; i++) 
            out[i] = lerp(value1[i], value2[i], t)
        return out
    }
}

},{"lerp":20}],18:[function(require,module,exports){
module.exports = function range(min, max, value) {
  return (value - min) / (max - min)
}
},{}],19:[function(require,module,exports){
var lerp = require('lerp')

module.exports = function lerpValues(value1, value2, t, out) {
    if (typeof value1 === 'number'
            && typeof value2 === 'number')
        return lerp(value1, value2, t)
    else { //assume array
        out = out||new Array(value1.length)
        for (var i=0; i<value1.length; i++) 
            out[i] = lerp(value1[i], value2[i], t)
        return out
    }
}
},{"lerp":20}],20:[function(require,module,exports){
function lerp(v0, v1, t) {
    return v0*(1-t)+v1*t
}
module.exports = lerp
},{}],21:[function(require,module,exports){
module.exports = function drawPath(ctx, path) {
    var points = path.points,
        closed = path.closed

    for (var i=0; i<points.length; i++) {
        var p = points[i]
        var pos = p.position
        
        if (i===0) 
            ctx.moveTo(pos[0], pos[1])

        var last = i>0 ? points[i-1] : null
        var lastCurve = last && last.curve
        var curve = p.curve

        if (i===0 && points.length>1 && closed) { //if we are closed and at start
            last = points[points.length-1]
            lastCurve = last.curve
            ctx.moveTo(last.position[0], last.position[1]) 
            if (!lastCurve && p.curve) {
                var c1 = p.controls[0]
                ctx.quadraticCurveTo(c1[0], c1[1], pos[0], pos[1])
            }
        }


        //if we need a bezier order curve
        if (last && lastCurve && curve) {
            var c1 = last.controls[1],
                c2 = p.controls[0]
            ctx.bezierCurveTo(c1[0], c1[1], c2[0], c2[1], pos[0], pos[1])
        }
        else if (last && lastCurve) {
            var c1 = last.controls[1]
            ctx.quadraticCurveTo(c1[0], c1[1], pos[0], pos[1])
        }
        else if (curve && i>0) {
            var c1 = p.controls[0]
            ctx.quadraticCurveTo(c1[0], c1[1], pos[0], pos[1])
        }
        else
            ctx.lineTo(pos[0], pos[1])
    }
}

},{}]},{},[2])