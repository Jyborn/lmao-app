

function winScreen() {

	background(255)
	textAlign(CENTER)
	fill(0)
	textSize(50)
	text("Time:" + timer, floor(sWidth * 0.5), floor(sHeight * 0.2))

	// text över mitten knapp
	fill(0, 255, 0)
	text("Play again??", sWidth * 0.5, sHeight * 0.4)

	//rect som är en knapp
	fill(0, 0, 255)
	playagainButton = new Button("rect", sWidth * 0.25, sHeight * 0.5, sWidth * 0.5, sHeight * 0.1)
	playagainButton.draw()

	fill(255)
	textSize(30)
	text("Press me!!", sWidth * 0.5, sHeight * 0.57)	

	gamestate = "win"
}

function winScreenPressed() {

	if (playagainButton.pressed()) {
		gamestate = "load-menu"
	}

}