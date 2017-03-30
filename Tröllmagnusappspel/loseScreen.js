function loseScreen() {

	background(0)

	textAlign(CENTER)
	rectMode(LEFT)

	noStroke()
	//övre text grej
	fill(255)
	textSize(40)
	text("Wp!", sWidth * 0.5, sHeight * 0.2)
	// text över mitten knapp
	fill(0, 255, 0)
	text("Play again??", sWidth * 0.5, sHeight * 0.4)

	//rect som är en knapp
	fill(0, 0, 255)
	rect(sWidth * 0.25, sHeight * 0.5, sWidth * 0.5, sHeight * 0.1)
	// text på rect
	fill(255)
	textSize(30)
	text("Press me!!", sWidth * 0.5, sHeight * 0.57)
	// text över cirkel
	fill(255, 0, 0)
	textSize(40)
	text("Exit game??", sWidth * 0.5, sHeight * 0.7)
	//cirkelknappen
	ellipse(sWidth * 0.5, sHeight * 0.85, sHeight * 0.15, sHeight * 0.15)
}

function loseScreenPressed() {
	
	//trycka på play again knappen
	rectX = sWidth * 0.25
	rectY = sHeight * 0.5
	if (mouseX > rectX && mouseX < rectX + (sWidth * 0.5) &&
	mouseY > rectY && mouseY < rectY + (sHeight * 0.1))	{
		gamestate = "splashScreen"
	}

}