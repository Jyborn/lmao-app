function loadGame() {
	//ladda allt som behövs för att spelet ska kunna köras (setup) körs innan spelet displayas
	for(i = 0; i < 4; i++) {
		for(j = 0; j < 4; j++) {
			squares.push(new Square(i, j, false))
		}
	}

	currentLevel = 1
	timer = 5
	timervalue = 1
	timerdelay = 0

	activeR = 200
	activeG = 0
	activeB = 100
	pickActiveSquare()	

	gamestate = "game"

}

function gameplay() {
	// displaya allt och uppdateras varje frame
	background(activeR, activeG, activeB)

	for(i = 0; i < squares.length; i++) {
		squares[i].draw()
	}

	rectMode(RIGHT)
	textAlign(CENTER)
	noFill()
	stroke(10)
	strokeWeight(10)
	rect(floor(sWidth * 0.1), floor(sHeight * 0.1), floor(sWidth * 0.80), floor(sWidth * 0.80))

	fill(255,0,255)
	textSize(80)
	noStroke()
	text("Level: " + currentLevel, sWidth * 0.5, (sHeight * 0.9))
	fill(0)
	textSize(50)
	text("" + timer, sWidth * 0.5, floor(sHeight * 0.08))

	timerdelay++
	if (timerdelay === 60) {
		timer--
		timerdelay = 0
	}	

	if (timer <= 0) {
		timer = 0
		squares.splice(0, 16)
		gamestate = "load-lose"
	}
}

function pickActiveSquare() {
	//väljer vilken ruta som ska vara rätt färg
	for(i = 0; i < 16; i++) {
		squares[i].active = false
	}
	activeSquare = floor(random(0 ,15))
	squares[activeSquare].active = true

}