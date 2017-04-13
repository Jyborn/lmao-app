

function loadGame() {

	for (i = 0; i < 4; i++) {
		for (j = 0; j < 4; j++) {
			squares.push(new Square(i, j, 0))
		}
	}

	createPattern()
	currPatternNum = 1

	timerdelay = 0
	timer = 0

	gamestate = "game"
}

function gameplay() {
	pattern = 0
	background(50)

	for (j = 0; j < 4; j++) {
		for (i = 0; i < squares.length; i++) {
			squares[i].show()
			if (squares[i].active === pattern + 1) {
				stroke(0)
				strokeWeight(5)
				fill(squares[i].getColors())
				rect(pattern * floor(sWidth * 0.2) + floor(sWidth * 0.1), floor(sHeight * 0.05), floor(sWidth * 0.2), floor(sWidth * 0.2))
				pattern++
			}
		}
	}

	timerdelay++
	if (timerdelay === 60) {
		timer++
		timerdelay = 0
	}	

	textAlign(CENTER)
	fill(0)
	textSize(50)
	text("TIME: " + timer, floor(window.innerWidth * 0.5), floor(window.innerHeight * 0.85))

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
