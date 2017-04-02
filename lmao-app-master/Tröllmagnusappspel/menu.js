
function menu() {

	background(0)
	fill(0, 255, 0)
	menuButton = new Button("circ", sWidth * 0.5, sHeight * 0.5, sWidth * 0.2, sWidth * 0.2)
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