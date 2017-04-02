sWidth = window.innerWidth
sHeight = window.innerHeight

squares = []
function setup() {

	createCanvas(sWidth, sHeight)	

	for (i = 0; i < 4; i++) {
		for (j = 0; j < 4; j++) {
			squares.push(new Square(i, j, 0))
		}
	}

	createPattern()
	currPatternNum = 1
	gamestate = "game"

}

function draw() {
	pattern = 0
	if (gamestate === "game") {
		background(50)
	} else if (gamestate === "win") {
		background(255)
	}
	
	for (j = 0; j < 4; j++) {
		for (i = 0; i < squares.length; i++) {
			squares[i].show()
			if (squares[i].active === pattern + 1) {
				fill(squares[i].getColors())
				rect(pattern * floor(sWidth * 0.2) + floor(sWidth * 0.1), floor(sHeight * 0.05), floor(sWidth * 0.2), floor(sWidth * 0.2))
				pattern++
			}
		}
	}

}

function mouseClicked() {

	for (i = 0; i < 16; i++) {
		squares[i].pressed()
	}

}

function createPattern() {
	
	for (i = 1; i < 5; i++) {
		rSquare = floor(random(15))
		if (squares[rSquare].active === 0) {
			squares[rSquare].setPattern(i)
		} else if (squares[rSquare].active !== 0) {
			i--
		}
	}
}

function Square(x, y, active) {
	this.x = x * floor(sWidth * 0.20) + floor(sWidth * 0.1)
	this.y = y *  floor(sWidth * 0.20) +  floor(sHeight * 0.2)
	this.w = this.h = floor(sWidth * 0.2)
	this.r = floor(random(255))
	this.g = floor(random(255))
	this.b = floor(random(255))
	this.active = active

	this.show = function() {
		noStroke()
		fill(this.r, this.g, this.b)
		rect(this.x, this.y, this.w, this.h)
		fill(0)
		textSize(50)
		text("" + this.active, this.x + 20, this.y + 40)
	}

	this.getColors = function() {
		colors = [this.r, this.g, this.b]
		return(colors)
	}

	this.setPattern = function(num) {
		this.active = num
	}

	this.pressed = function() {

		if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
			if (this.active === currPatternNum) {
				if (currPatternNum === pattern) {
					gamestate = "win"
				}
				currPatternNum++
			} else {
				gamestate = "lose"
			}
		}

	}
}