sWidth = window.innerWidth
sHeight = window.innerHeight

function setup() {
	createCanvas(sWidth, sHeight);
	background(0);
}
function draw() {
	fill(255)
	textSize(sWidth*0.2)
	text("M", sWidth*0.25, sHeight/7);
	text("M", sWidth*0.75 - sWidth*0.17, sHeight/7);
	textSize(sWidth *0.15)
	text("&", sWidth*0.25 + sWidth*0.195, sHeight/7);
	fill(255);
	rect(sWidth*0.25, sHeight/7, sWidth*0.5, sHeight*0.005);
	textSize(sWidth*0.05)
	text("Press to play", sWidth*0.35, sHeight/1.1)
}