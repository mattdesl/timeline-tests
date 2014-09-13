(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var lerp = require('lerp-array')
var Property = require('./property')

function indexOfName(list, name) {
	for (var i=0; i<list.length; i++)
		if (list[i].name === name)
			return i
	return -1
}

function TimelineBase(data) {
	if (!(this instanceof TimelineBase))
		return new TimelineBase(data)
	
	this.properties = []

	if (data)
		this.load(data)
}

TimelineBase.prototype.dispose = function() {
	this.properties.forEach(function(p) {
		p.dispose()
	})
	this.properties.length = 0 
}

TimelineBase.prototype.duration = function() {
	var maxTime = 0
	for (var j=0; j<this.properties.length; j++) {
		var prop = this.properties[j]
		var frames = prop.keyframes.frames
		for (var i=0; i<frames.length; i++) 
			maxTime = Math.max(frames[i].time, maxTime)
	}
	return maxTime
}

//Returns the first control by the specified name or index
TimelineBase.prototype.property = function(prop) {
	var idx = typeof prop === 'number' ? prop : indexOfName(this.properties, prop)
	return idx<0 ? undefined : this.properties[idx]
}

TimelineBase.prototype.load = function(data) {
	this.dispose()

	if (!data)
		return

	this.properties = data.map(function(d) {
		return new Property(d)
	})
}

TimelineBase.prototype.ease = function(name, t) {
	return t
}

TimelineBase.prototype.interpolate = function(type, frame1, frame2, t) {
	return lerp(frame1.value, frame2.value, t)
}

TimelineBase.prototype.value = function(time, property) {
	var keys = property.keyframes,
		v = keys.interpolation(time),
		v0 = v[0],
		v1 = v[1],
		t = v[2]

	//return default value of property
	if (v0 === -1 || v1 === -1)
		return property.value

	var start = keys.frames[v0],
		end = keys.frames[v1]

	//frames match, return the first
	if (v0 === v1)
		return start.value

	//ease and interpolate frames
	else {
		var easeName = end.ease
		if (easeName) //remap time with easing equation
			t = this.ease(easeName, t)
		return this.interpolate(property.type, start, end, t)
	}
}


module.exports = TimelineBase
},{"./property":65,"lerp-array":62}],2:[function(require,module,exports){
module.exports = [
	{ name: 'position', keyframes: [
		{ time: 0, value: [10, 5] },
		{ time: 2, value: [0, 0], ease: 'expoOut' },
	] },
	{ name: 'font-family', value: "'Open Sans Condensed', 'Geneva', sans-serif" },
	{ name: 'font-weight', value: 300 },
	// { name: 'text-decoration', value: 'underline' },
	{ name: 'font-variant', value: 'small-caps' },
	{ name: 'color', value: [100, 100, 100] },
	{ name: 'background-color', keyframes: [
		{ time: 0, value: [180, 255, 190] },
		{ time: 2, value: [255, 189, 120], ease: 'expoOut' },
	] },
	{ name: 'font-size', keyframes: [
		{ time: 0, value: 16 },
		{ time: 2, value: 28, ease: 'expoOut' },
	] },
	{ name: 'size', keyframes: [
		{ time: 0, value: [50, '20px'] },
		{ time: 3, value: [100, 40], ease: 'expoOut' },
	] },
	//there are other ways of vertical centering that don't involve more properties/keyframes
	{ name: 'line-height', keyframes: [
		{ time: 0, value: 13 },
		{ time: 3, value: 33, ease: 'expoOut' },
	] },
	//there are other ways of vertical centering that don't involve more properties/keyframes
	{ name: 'letter-spacing', keyframes: [
		{ time: 0, value: 10 },
		{ time: 2, value: 0, ease: 'quartOut' },
	] },
	{ name: 'rotation', keyframes: [
		{ time: 0, value: [0,0,20] },
		{ time: 3, value: [0,0,0], ease: 'elasticOut' },
	] },
	{ name: 'border-width', keyframes: [
		{ time: 0, value: 10 },
		{ time: 2, value: 2, ease: 'quartOut' },
	] },
	{ name: 'border-radius', keyframes: [
		{ time: 0, value: 10 },
		{ time: 3, value: 3, ease: 'expoOut' },
	] },
	{ name: 'border-color', keyframes: [
		{ time: 0, value: [100, 100, 100] },
		{ time: 1, value: [200, 200, 200], ease: 'quadOut' },
	] },
]
},{}],3:[function(require,module,exports){
module.exports = [
	{ name: 'background-color', keyframes: [
		{ time: 0, value: [180, 180, 180] },
		// { time: 2, value: [255, 189, 120], ease: 'expoOut' },
	] },
	{ name: 'font-size', keyframes: [
		{ time: 0, value: 12 },
		{ time: 2, value: 16, ease: 'quartOut' },
	] },
	{ name: 'color', value: [250, 250, 250] },
	{ name: 'font-weight', value: 'bold' },
	{ name: 'size', keyframes: [
		{ time: 0, value: [50, 30] },
		{ time: 2, value: [75, 30], ease: 'quartOut' },
	] },
	//there are other ways of vertical centering that don't involve more properties/keyframes
	{ name: 'line-height', keyframes: [
		{ time: 0, value: 30 },
		{ time: 2, value: 30, ease: 'quartOut' },
	] },
	{ name: 'border-width', keyframes: [
		{ time: 0, value: 2 },
		{ time: 2, value: 2, ease: 'expoOut' },
	] },
	{ name: 'border-radius', keyframes: [
		{ time: 1.0, value: 0 },
		{ time: 2.5, value: 5, ease: 'expoOut' },
	] },
	{ name: 'border-color', keyframes: [
		{ time: 0, value: [100, 100, 100] },
		{ time: 1, value: [170, 170, 170], ease: 'quadOut' },
	] },
	{ name: 'box-shadow', keyframes: [
		{ time: 1.0, value: [0, 0, 0, 40, 40, 40, 0.15] },
		{ time: 2.5, value: [6, 6, 0, 40, 40, 40, 0.15], ease: 'bounceOut' },
	] }
]
},{}],4:[function(require,module,exports){
//An example of dom styling

var loop = require('frame-loop')
var domready = require('domready')
var domify = require('domify')

var css = ".box {\n\tbackground-color: white;\n\t\n    position: absolute;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\t\n    color: white;\n\n    margin: auto;\n    cursor: pointer;\n    text-align: center;\n\t\n\tborder: 0px solid black;\n\tdisplay: inline-block;\n\n\toverflow: hidden;\n}\n\n.info {\n\tposition: absolute;\n\ttop: 20px;\n\tleft: 20px;\n\tmargin: 0;\n}\np {\n\tmargin: 2px;\n}\n\nbody {\n\tfont: 16px 'Helvetica', sans-serif;\n}"
require('insert-css')(css)

var mapStyle = require('./map-css')
var events = require('dom-events')
var Timeline = require('./timeline-css')

var anim1 = Timeline( require('./data/dom-1') )
var anim2 = Timeline( require('./data/dom-2') )
var curTimeline = anim1

function Widget(animation) {
	this.element = domify('<div class="box"><span>button</span></div>')
}

Widget.prototype.update = function(timeline, time) {
	//update all the named properties, mapping them to CSS values
	for (var i=0; i<timeline.properties.length; i++) {
		var prop = timeline.properties[i]
		var value = timeline.value(time, prop)

		//map our timeline property to CSS values
		mapStyle(this.element, prop.name, value)
	}
}

function start() {
	var time = 0

	var widget = new Widget()
	document.body.appendChild(widget.element)

	var duration = curTimeline.duration() 

	//render timeline
	loop(function(dt) {
		time += Math.max(30, dt) / 1000
		if (time <= (duration + 1)) {
			widget.update(curTimeline, time)
		}
	}).run()

	//toggle new timeline
	function click(ev) {
		ev.preventDefault()
		time = 0
		curTimeline = curTimeline === anim1 ? anim2 : anim1
		duration = curTimeline.duration()

		//clear style
		widget.element.style.cssText = ''
	}
	events.on(widget.element, 'click', click)
	events.on(widget.element, 'touchstart', click)


	var txt = '<p>click button to change timelines</p>'
			+ '<p>animation data <a href="https://github.com/mattdesl/timeline-tests/tree/master/demo2/data">here</a></p>'
	document.body.appendChild(domify('<div class="info">'+txt+'</div>'))
}

domready(start)
},{"./data/dom-1":2,"./data/dom-2":3,"./map-css":6,"./timeline-css":7,"dom-events":10,"domify":18,"domready":19,"frame-loop":52,"insert-css":57}],5:[function(require,module,exports){
var lerp = require('lerp')

var tmpA = [0, '']
var tmpB = [0, '']

function set(out, a, b) {
	out[0] = a
	out[1] = b
	return out
}

function chr(code) {
	return code >= 97 && code <= 122
}

//sets a px, em, pt, %, pc, ex, mm, cm, in, %
function unit(val, out) {
	if (!out)
		out = [ 0, '' ]

	if (typeof val === 'number')
		return set(out, val, '')
	var e0 = val.length-2,
		e1 = val.length-1
	var num = parseFloat(val, 10)

	var code1 = val.charCodeAt(e1)
	if (code1 === 37)
		return set(out, num, val.charAt(e1))
	else {
		var code2 = val.charCodeAt(e1)
		if (chr(code1) && chr(code2))
			return set(out, num, val.substring(e0))
		return set(out, num, '')
	}
}
module.exports.unit = unit

function lerpCSS(value1, value2, t) {
	var v1 = unit(value1, tmpA)
	var v2 = unit(value2, tmpB)

	var noStr = v1[1].length === 0 || v2[1].length === 0
	if (noStr || v1[1] === v2[1]) {
		var ret = lerp(v1[0], v2[0], t)
		return noStr ? ret : (ret + v1[1])
	} else
		throw 'units do not match'
}
module.exports.lerp = lerpCSS

//assume we have an array of CSS units
module.exports = function(value1, value2, t, out) {
	if (Array.isArray(value1)) {
		out = out||new Array(value1.length)
        for (var i=0; i<value1.length; i++) 
            out[i] = lerpCSS(value1[i], value2[i], t)
        return out
	} else
		return lerpCSS(value1, value2, t)
}
},{"lerp":64}],6:[function(require,module,exports){
//This is fairly application specific. Maybe 'position' isn't absolute? etc.

//It would be more robust to use jQuery or TweenLite to handle things like prefixing,
//browser bugs, etc.

var rgba = require('color-style')
var style = require('dom-style')

//numbers are assumed to be in pixel values.
function px(value) {
	return typeof value === 'number' ? (value+'px') : value
}

var css = {
	position: function(value) {
		return { left: px(value[0]), top: px(value[1]) }
	},
	size: function(value) {
		return { width: px(value[0]), height: px(value[1]) }
	},
	rotation: function(value) {
		var str = 'rotateX('+value[0]+'deg) rotateY('+value[1]+'deg) rotateZ('+value[2]+'deg)'
		return {
			'-o-transform': str,
			'-moz-transform': str,
			'-ms-transform': str,
			'-webkit-transform': str,
			'transform': str,
		}
	},
	'box-shadow': function(value) {
		var shadow = value.slice(0,3).map(px).join(' ') + ' ' + rgba(value.slice(3))
		return {
			'box-shadow': shadow
		}
	},
	'background-color': rgba,
	'border-color': rgba,
	color: rgba
}

function map(name, value) {
	if (typeof css[name] !== 'function')
		return px(value)
	return css[name](value)
}

module.exports = function(element, name, value) {
	var animStyle = map(name, value)
	if (typeof animStyle === 'string')
		style(element, name, animStyle)
	else
		style(element, animStyle)
}

module.exports.map = map	
},{"color-style":9,"dom-style":14}],7:[function(require,module,exports){
var Base = require('../')
var inherits = require('inherits')
var lerp = require('./lerp-css')

function TimelineCSS(data) {
	if (!(this instanceof TimelineCSS))
		return new TimelineCSS(data)
	Base.call(this, data)
}

inherits(TimelineCSS, Base)

TimelineCSS.prototype.interpolate = function(type, frame1, frame2, t) {
	return lerp(frame1.value, frame2.value, t)
}

module.exports = TimelineCSS
},{"../":8,"./lerp-css":5,"inherits":56}],8:[function(require,module,exports){
var eases = require('eases')
var inherits = require('inherits')
var Base = require('./base')

function BasicTimeline(data) {
	if (!(this instanceof BasicTimeline))
		return new BasicTimeline(data)
	Base.call(this, data)
}

inherits(BasicTimeline, Base)

BasicTimeline.prototype.ease = function(name, t) {
	return eases[name](t)
}

module.exports = BasicTimeline
},{"./base":1,"eases":38,"inherits":56}],9:[function(require,module,exports){
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
},{}],10:[function(require,module,exports){

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

},{"synthetic-dom-events":11}],11:[function(require,module,exports){

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

},{"./init.json":12,"./types.json":13}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
var toCamelCase = require('to-camel-case');

module.exports = style;
module.exports.hide = effect('display', 'none');
module.exports.show = effect('display', 'initial');

function all(element, css) {
  var name;
  for ( name in css ) {
    one(element, name, css[name]);
  }
}

function effect(name, value) {
  return function (element, override) {
    style(element, name, arguments.length > 1 ? override : value);
  };
}

function one(element, name, value) {
  element.style[toCamelCase((name == 'float') ? 'cssFloat' : name)] = value;
}

function style(element) {
  if (arguments.length == 3) {
    return one(element, arguments[1], arguments[2]);
  }

  return all(element, arguments[1]);
}

},{"to-camel-case":15}],15:[function(require,module,exports){

var toSpace = require('to-space-case');


/**
 * Expose `toCamelCase`.
 */

module.exports = toCamelCase;


/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */


function toCamelCase (string) {
  return toSpace(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase();
  });
}
},{"to-space-case":16}],16:[function(require,module,exports){

var clean = require('to-no-case');


/**
 * Expose `toSpaceCase`.
 */

module.exports = toSpaceCase;


/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */


function toSpaceCase (string) {
  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : '';
  });
}
},{"to-no-case":17}],17:[function(require,module,exports){

/**
 * Expose `toNoCase`.
 */

module.exports = toNoCase;


/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/;
var hasCamel = /[a-z][A-Z]/;
var hasSeparator = /[\W_]/;


/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase (string) {
  if (hasSpace.test(string)) return string.toLowerCase();

  if (hasSeparator.test(string)) string = unseparate(string);
  if (hasCamel.test(string)) string = uncamelize(string);
  return string.toLowerCase();
}


/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g;


/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate (string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : '';
  });
}


/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g;


/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize (string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ');
  });
}
},{}],18:[function(require,module,exports){

/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  _default: [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.text =
map.circle =
map.ellipse =
map.line =
map.path =
map.polygon =
map.polyline =
map.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
function backInOut(t) {
  var f = t < 0.5
    ? 2.0 * t
    : 1.0 - (2.0 * t - 1.0)

  var g = Math.pow(f, 3.0) - f * Math.sin(f * Math.PI)

  return t < 0.5
    ? 0.5 * g
    : 0.5 * (1.0 - g) + 0.5
}

module.exports = backInOut
},{}],21:[function(require,module,exports){
function backIn(t) {
  return Math.pow(t, 3.0) - t * Math.sin(t * Math.PI)
}

module.exports = backIn

},{}],22:[function(require,module,exports){
function backOut(t) {
  var f = 1.0 - t
  return 1.0 - (Math.pow(f, 3.0) - f * Math.sin(f * Math.PI))
}

module.exports = backOut
},{}],23:[function(require,module,exports){
var bounceOut = require('./bounce-out')

function bounceInOut(t) {
  return t < 0.5
    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))
    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5
}

module.exports = bounceInOut
},{"./bounce-out":25}],24:[function(require,module,exports){
var bounceOut = require('./bounce-out')

function bounceIn(t) {
  return 1.0 - bounceOut(1.0 - t)
}

module.exports = bounceIn
},{"./bounce-out":25}],25:[function(require,module,exports){
function bounceOut(t) {
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

module.exports = bounceOut
},{}],26:[function(require,module,exports){
function circInOut(t) {
  return t < 0.5
    ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
    : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0)
}

module.exports = circInOut
},{}],27:[function(require,module,exports){
function circIn(t) {
  return 1.0 - Math.sqrt(1.0 - t * t)
}

module.exports = circIn
},{}],28:[function(require,module,exports){
function circOut(t) {
  return Math.sqrt((2.0 - t) * t)
}

module.exports = circOut
},{}],29:[function(require,module,exports){
function cubicInOut(t) {
  return t < 0.5
    ? 4.0 * t * t * t
    : 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0
}

module.exports = cubicInOut
},{}],30:[function(require,module,exports){
function cubicIn(t) {
  return t * t * t
}

module.exports = cubicIn
},{}],31:[function(require,module,exports){
function cubicOut(t) {
  var f = t - 1.0
  return f * f * f + 1.0
}

module.exports = cubicOut
},{}],32:[function(require,module,exports){
function elasticInOut(t) {
  return t < 0.5
    ? 0.5 * Math.sin(+13.0 * Math.PI/2 * 2.0 * t) * Math.pow(2.0, 10.0 * (2.0 * t - 1.0))
    : 0.5 * Math.sin(-13.0 * Math.PI/2 * ((2.0 * t - 1.0) + 1.0)) * Math.pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0
}

module.exports = elasticInOut
},{}],33:[function(require,module,exports){
function elasticIn(t) {
  return Math.sin(13.0 * t * Math.PI/2) * Math.pow(2.0, 10.0 * (t - 1.0))
}

module.exports = elasticIn
},{}],34:[function(require,module,exports){
function elasticOut(t) {
  return Math.sin(-13.0 * (t + 1.0) * Math.PI/2) * Math.pow(2.0, -10.0 * t) + 1.0
}

module.exports = elasticOut
},{}],35:[function(require,module,exports){
function expoInOut(t) {
  return (t === 0.0 || t === 1.0)
    ? t
    : t < 0.5
      ? +0.5 * Math.pow(2.0, (20.0 * t) - 10.0)
      : -0.5 * Math.pow(2.0, 10.0 - (t * 20.0)) + 1.0
}

module.exports = expoInOut
},{}],36:[function(require,module,exports){
function expoIn(t) {
  return t === 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0))
}

module.exports = expoIn
},{}],37:[function(require,module,exports){
function expoOut(t) {
  return t === 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t)
}

module.exports = expoOut
},{}],38:[function(require,module,exports){
module.exports = {
	'backInOut': require('./back-in-out'),
	'backIn': require('./back-in'),
	'backOut': require('./back-out'),
	'bounceInOut': require('./bounce-in-out'),
	'bounceIn': require('./bounce-in'),
	'bounceOut': require('./bounce-out'),
	'circInOut': require('./circ-in-out'),
	'circIn': require('./circ-in'),
	'circOut': require('./circ-out'),
	'cubicInOut': require('./cubic-in-out'),
	'cubicIn': require('./cubic-in'),
	'cubicOut': require('./cubic-out'),
	'elasticInOut': require('./elastic-in-out'),
	'elasticIn': require('./elastic-in'),
	'elasticOut': require('./elastic-out'),
	'expoInOut': require('./expo-in-out'),
	'expoIn': require('./expo-in'),
	'expoOut': require('./expo-out'),
	'linear': require('./linear'),
	'quadInOut': require('./quad-in-out'),
	'quadIn': require('./quad-in'),
	'quadOut': require('./quad-out'),
	'quartInOut': require('./quart-in-out'),
	'quartIn': require('./quart-in'),
	'quartOut': require('./quart-out'),
	'quintInOut': require('./quint-in-out'),
	'quintIn': require('./quint-in'),
	'quintOut': require('./quint-out'),
	'sineInOut': require('./sine-in-out'),
	'sineIn': require('./sine-in'),
	'sineOut': require('./sine-out')
}
},{"./back-in":21,"./back-in-out":20,"./back-out":22,"./bounce-in":24,"./bounce-in-out":23,"./bounce-out":25,"./circ-in":27,"./circ-in-out":26,"./circ-out":28,"./cubic-in":30,"./cubic-in-out":29,"./cubic-out":31,"./elastic-in":33,"./elastic-in-out":32,"./elastic-out":34,"./expo-in":36,"./expo-in-out":35,"./expo-out":37,"./linear":39,"./quad-in":41,"./quad-in-out":40,"./quad-out":42,"./quart-in":44,"./quart-in-out":43,"./quart-out":45,"./quint-in":47,"./quint-in-out":46,"./quint-out":48,"./sine-in":50,"./sine-in-out":49,"./sine-out":51}],39:[function(require,module,exports){
function linear(t) {
  return t
}

module.exports = linear
},{}],40:[function(require,module,exports){
function quadInOut(t) {
  return t > 0.5
    ? +2.0 * t * t
    : -2.0 * t * t + (4.0 * t) - 1.0
}

module.exports = quadInOut
},{}],41:[function(require,module,exports){
function quadIn(t) {
  return t * t
}

module.exports = quadIn
},{}],42:[function(require,module,exports){
function quadOut(t) {
  return -t * (t - 2.0)
}

module.exports = quadOut
},{}],43:[function(require,module,exports){
function quarticInOut(t) {
  return t < 0.5
    ? +8.0 * Math.pow(t, 4.0)
    : -8.0 * Math.pow(t - 1.0, 4.0) + 1.0
}

module.exports = quarticInOut
},{}],44:[function(require,module,exports){
function quarticIn(t) {
  return Math.pow(t, 4.0)
}

module.exports = quarticIn
},{}],45:[function(require,module,exports){
function quarticOut(t) {
  return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0
}

module.exports = quarticOut
},{}],46:[function(require,module,exports){
function qinticInOut(t) {
  return t < 0.5
    ? +16.0 * Math.pow(t, 5.0)
    : -0.5 * Math.pow(2.0 * t - 2.0, 5.0) + 1.0
}

module.exports = qinticInOut
},{}],47:[function(require,module,exports){
function qinticIn(t) {
  return Math.pow(t, 5.0)
}

module.exports = qinticIn
},{}],48:[function(require,module,exports){
function qinticOut(t) {
  return Math.pow(t - 1.0, 5.0) + 1.0
}

module.exports = qinticOut
},{}],49:[function(require,module,exports){
function sineInOut(t) {
  return 0.5 * 1.0 - Math.cos(t * Math.PI)
}

module.exports = sineInOut
},{}],50:[function(require,module,exports){
function sineIn(t) {
  return Math.sin((t - 1.0) * Math.PI/2) + 1.0
}

module.exports = sineIn
},{}],51:[function(require,module,exports){
function sineOut(t) {
  return Math.sin(t * Math.PI/2)
}

module.exports = sineOut
},{}],52:[function(require,module,exports){
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;
var defined = require('defined');
var raf = require('raf');

module.exports = Engine;
inherits(Engine, EventEmitter);

function Engine (opts, fn) {
    if (!(this instanceof Engine)) return new Engine(opts, fn);
    EventEmitter.call(this);
    
    if (typeof opts === 'function') {
        fn = opts;
        opts = {};
    }
    if (!opts) opts = {};
    
    this.running = false;
    this.last = Date.now();
    this.time = 0;
    this._timers = [];
    this._timerId = 1;
    this._fpsTarget = defined(opts.fps, 60);
    this._fpsWindow = defined(opts.fpsWindow, 1000);
    this._info = null;
    this.fps = 0;
    this._requestFrame = opts.requestFrame || raf;
    
    if (fn) this.on('tick', fn);
}

Engine.prototype.run = function () {
    var self = this;
    if (this.running) return;
    this.running = true;
    this.last = Date.now();
    this._info = { frames: 0, start: this.last };
    
    (function tick () {
        if (!self.running) return;
        self.tick();
        var elapsed = (Date.now() - self.last) / 1000;
        var delay = Math.max(0, (1 / self._fpsTarget) - elapsed);
        var dms = Math.floor(delay * 1000);
        if (dms <= 4) self._requestFrame(tick)
        else setTimeout(function () { self._requestFrame(tick) }, dms)
    })();
};

Engine.prototype.pause = function () {
    this.running = false;
};

Engine.prototype.toggle = function () {
    if (this.running) this.pause()
    else this.run()
};

Engine.prototype.tick = function () {
    if (!this.running) return;
    
    var now = Date.now();
    var dt = now - this.last;
    this.last = now;
    this.time += dt;
    this.emit('tick', dt);
    
    if (this._info && this._fpsWindow
    && now - this._info.start > this._fpsWindow) {
        this.fps = this._info.frames / this._fpsWindow * 1000;
        this._info = { frames: 0, start: now };
        this.emit('fps', this.fps);
    }
    if (this._info) { this._info.frames ++ }
    
    do {
        var called = false;
        for (var i = 0; i < this._timers.length; i++) {
            var t = this._timers[i];
            if (t.time <= this.time) {
                var c = this._cleared && this._cleared[t.id];
                if (!c) {
                    called = true;
                    t.fn();
                }
                this._timers.splice(i, 1);
                i --;
            }
            else break;
        }
    } while (called);
    this._cleared = null;
};

Engine.prototype.setTimeout = function (fn, ts) {
    var id = this._timerId ++;
    this._pushTimer({ fn: fn, time: this.time + ts, id: id });
    return id;
};

Engine.prototype._pushTimer = function (rec) {
    for (var i = 0; i < this._timers.length; i++) {
        var t = this._timers[i];
        if (rec.time < t.time) {
            this._timers.splice(i, 0, rec);
            return;
        }
    }
    this._timers.push(rec);
};

Engine.prototype.setInterval = function (fn, ts) {
    var self = this;
    var first = self.time, times = 1;
    var f = function () {
        fn();
        self._pushTimer({ fn: f, time: first + (++ times) * ts, id: id });
    };
    var id = this._timerId ++;
    this._pushTimer({ fn: f, time: first + ts, id: id });
    return id;
};

Engine.prototype.clearTimeout =
Engine.prototype.clearInterval = function (id) {
    for (var i = 0; i < this._timers.length; i++) {
        var t = this._timers[i];
        if (t.id === id) {
            if (!this._cleared) this._cleared = {};
            this._cleared[id] = true;
            this._timers.splice(i, 1);
            break;
        }
    }
};

},{"defined":53,"events":66,"inherits":56,"raf":54}],53:[function(require,module,exports){
module.exports = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] !== undefined) return arguments[i];
    }
};

},{}],54:[function(require,module,exports){
var now = require('performance-now')
  , global = typeof window === 'undefined' ? {} : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = global['request' + suffix]
  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]
  , native = true

for(var i = 0; i < vendors.length && !raf; i++) {
  raf = global[vendors[i] + 'Request' + suffix]
  caf = global[vendors[i] + 'Cancel' + suffix]
      || global[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  native = false

  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  if(!native) {
    return raf.call(global, fn)
  }
  return raf.call(global, function() {
    try{
      fn.apply(this, arguments)
    } catch(e) {
      setTimeout(function() { throw e }, 0)
    }
  })
}
module.exports.cancel = function() {
  caf.apply(global, arguments)
}

},{"performance-now":55}],55:[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.6.3
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

/*
//@ sourceMappingURL=performance-now.map
*/

}).call(this,require("q+64fw"))
},{"q+64fw":67}],56:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],57:[function(require,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}],58:[function(require,module,exports){
//Generic list of keyframes with timestamps and values

var lerp = require('lerp-array')
var range = require('unlerp')

var temp = [0, 0, 0]

function vec3(out, x, y, z) {
    out[0] = x
    out[1] = y
    out[2] = z
    return out
}

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
    var v = this.interpolation(time)
    if (v[0] === -1 || v[1] === -1)
        return null

    var startFrame = this.frames[ v[0] ]
    var endFrame = this.frames[ v[1] ]
    var t = v[2]
    
    //frames are the same, don't bother easing
    if (startFrame === endFrame)
        return startFrame.value

    //We ease from left keyframe to right, with a custom easing
    //equation if specified
    if (typeof ease === 'function')
        return ease(startFrame, endFrame, t)

    //Otherwise we assume the values are simple numbers and lerp them
    return lerp(startFrame.value, endFrame.value, t)
}

Keyframes.prototype.interpolation = function(time) {
    if (this.frames.length === 0)
        return vec3(temp, -1, -1, 0)

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
        return vec3(temp, prev, prev, 0)
    } 
    else {
        var startFrame = this.frames[prev]
        var endFrame = this.frames[prev+1]

        //clamp and get range
        time = Math.max(startFrame.time, Math.min(time, endFrame.time))
        var t = range(startFrame.time, endFrame.time, time)

        //provide interpolation factor
        return vec3(temp, prev, prev+1, t)
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
},{"lerp-array":59,"unlerp":61}],59:[function(require,module,exports){
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
},{"lerp":60}],60:[function(require,module,exports){
function lerp(v0, v1, t) {
    return v0*(1-t)+v1*t
}
module.exports = lerp
},{}],61:[function(require,module,exports){
module.exports = function range(min, max, value) {
  return (value - min) / (max - min)
}
},{}],62:[function(require,module,exports){
module.exports=require(59)
},{"lerp":63}],63:[function(require,module,exports){
module.exports=require(60)
},{}],64:[function(require,module,exports){
module.exports=require(60)
},{}],65:[function(require,module,exports){
//a "Property" maintains a set of tweenable values
//for e.g.:
//  position [x, y]
//  color [r, g, b, a]
//  alpha [a]

var keyframes = require('keyframes')

var DEFAULT_TYPE = 'array'

function Property(data) {
	if (!(this instanceof Property)) 
		return new Property(data)

	this.keyframes = keyframes()
	this.value = null
	this.type = DEFAULT_TYPE
	this.name = ''
	if (data)
		this.load(data)
}

Property.prototype.dispose = function() {
	this.keyframes.clear()
}

//updates displayed value based on playhead position
Property.prototype.load = function(data) {
	this.dispose()

	if (!data)
		return
	
	this.name = data.name
	this.type = typeof data.type === 'string' ? data.type : DEFAULT_TYPE
	this.value = data.value
	if (data.keyframes)
		this.keyframes.frames = data.keyframes
}

module.exports = Property
},{"keyframes":58}],66:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        throw TypeError('Uncaught, unspecified "error" event.');
      }
      return false;
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],67:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[4])