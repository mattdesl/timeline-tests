module.exports = [
	{ name: 'position', keyframes: [
		{ time: 0, value: [10, 5] },
		{ time: 2, value: [0, 0], ease: 'expoOut' },
	] },
	{ name: 'font-family', value: "'Lucida Console', monospace" },
	{ name: 'text-decoration', value: 'underline' },
	{ name: 'font-variant', value: 'small-caps' },
	{ name: 'color', value: [100, 100, 100] },
	{ name: 'background-color', keyframes: [
		{ time: 0, value: [180, 255, 190] },
		{ time: 2, value: [255, 189, 120], ease: 'expoOut' },
	] },
	{ name: 'font-size', keyframes: [
		{ time: 0, value: 12 },
		{ time: 2, value: 24, ease: 'expoOut' },
	] },
	{ name: 'size', keyframes: [
		{ time: 0, value: [50, '20px'] },
		{ time: 3, value: [100, '55px'], ease: 'expoOut' },
	] },
	//there are other ways of vertical centering that don't involve more properties/keyframes
	{ name: 'line-height', keyframes: [
		{ time: 0, value: 15 },
		{ time: 3, value: 50, ease: 'expoOut' },
	] },
	{ name: 'rotation', keyframes: [
		{ time: 0, value: [0,0,20] },
		{ time: 3, value: [0,0,0], ease: 'elasticOut' },
	] },
	{ name: 'border-width', keyframes: [
		{ time: 0, value: 15 },
		{ time: 2, value: 2, ease: 'expoOut' },
	] },
	{ name: 'border-radius', keyframes: [
		{ time: 0, value: 10 },
		{ time: 3, value: 3, ease: 'expoOut' },
	] },
	{ name: 'border-color', keyframes: [
		{ time: 0, value: [100, 100, 100] },
		{ time: 1, value: [170, 170, 170], ease: 'quadOut' },
	] },
]