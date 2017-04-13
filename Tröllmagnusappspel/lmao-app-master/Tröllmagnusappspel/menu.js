
function menu() {

	background(0)
	textAlign(CENTER)
	textSize(sWidth*0.1)
	fill(100 , 55, 0)
	rect(sWidth*0.35, sHeight*0.15, sHeight *0.2, sHeight*0.2)
	text("Mode", sWidth*0.5, sHeight*0.45)
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
	}
}