sWidth = window.innerWidth
sHeight = window.innerHeight

function loadGame() {

	for (i = 0; i < 4; i++) {
		for (j = 0; j < 4; j++) {
			squares.push(new Square(i, j, 0))
		}
	}

	createPattern()
	currPatternNum = 1
	gamestate = "game"
	

}

function gameplay() {
	pattern = 0
	background(50)

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
