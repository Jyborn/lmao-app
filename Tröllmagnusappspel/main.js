squares = []
function setup() {
	createCanvas(window.innerWidth, window.innerHeight)

	for(i = 0; i < 4; i++) {
		for(j = 0; j < 4; j++) {
			squares.push(new Square(i, j, false))
		}
	}

	currentLevel = 1
	timer = 5
	timervalue = 1
	timerdelay = 0
	console.log(window.innerWidth)
	console.log(window.innerHeight)

	pickActiveSquare()

	activeR = 200
	activeG = 0
	activeB = 100

}

function draw() {

	background(activeR, activeG, activeB)

	for(i = 0; i < squares.length; i++) {
		squares[i].draw()
	}

	noFill()
	stroke(10)
	strokeWeight(10)
	rect(floor(window.innerWidth * 0.1), floor(window.innerHeight * 0.1), floor(window.innerWidth * 0.80), floor(window.innerWidth * 0.80))

	fill(255,0,255)
	textSize(80)
	noStroke()
	text("Level: " + currentLevel, window.innerWidth * 0.5, (window.innerHeight * 0.9))
	fill(0)
	textSize(50)
	textAlign(CENTER)
	text("" + timer, window.innerWidth * 0.5, floor(window.innerHeight * 0.08))

	timerdelay++
	if (timerdelay === 60) {
		timer--
		timerdelay = 0
	}

	if (timer <= 0) {
		timer = 0
		lose()
	}
}

function mouseClicked() {

	console.log("click")
	for(i = 0; i < squares.length; i++) {
		squares[i].clicked()
	}
}

function pickActiveSquare() {

	for(i = 0; i < 16; i++) {
		squares[i].active = false
	}
	activeSquare = floor(random(0 ,15))
	squares[activeSquare].active = true

}

function lose() {
	currentLevel = 1
	
}