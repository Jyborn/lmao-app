
function menu() {

	background(0)
	textSize(sWidth*0.1)
	fill(100 , 55, 0)
	text("Mode", sWidth*0.5, sHeight*0.45)
	modeButton = new Button("rect", sWidth * (1/3), sHeight * 0.15, sWidth * (1/3), sHeight * 0.2)
	modeButton.draw()
	fill(128, 0, 128)
	text("Press cirkeln to play", sWidth * 0.5, sHeight * 0.9)
	menuButton = new Button("circ", sWidth * 0.5, sHeight * 0.7, sWidth * 0.2, sWidth * 0.2)
	menuButton.draw()
	gamestate = "menu"
}

function menupressed() {
	if (gamestate === "menu") {
		if (menuButton.pressed()) {
			gamestate = "load-game"
		}
		if (modeButton.pressed()) {
			gamestate = "load-mode"
		}
	}
}