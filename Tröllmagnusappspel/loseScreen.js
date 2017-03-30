function loseScreen() {
	background(0)
	fill(255)	
	textAlign(CENTER)
	textSize(40);
	text("Wp!", sWidth/2, sHeight*0.2)
	fill(0, 255, 0)
	text("Play again??", sWidth/2, sHeight*0.4)
	rectMode(CENTER)
	stroke(0);
	strokeWeight(5);
	fill(0, 0, 255)
	rect(sWidth/2, sHeight*0.55, sWidth*0.5, sHeight*0.1)
	fill(255);
	noStroke(0);
	textSize(30);
	text("Press me!!", sWidth*0.5, sHeight*0.57);
	fill(255, 0, 0)
	textSize(40)
	text("Exit game??", sWidth/2, sHeight*0.7);
	ellipse(sWidth/2, sHeight*0.85, sHeight*0.15, sHeight*0.15)
}

function loseScreenPressed() {
	if (mouseX >= sWidth*0.25 && mouseX <= sWidth*0.75 
		&& mouseY >= sHeight*5 && mouseY <= sHeight*0.6){
		gamestate = "load-game"

	}
	if (mouseX > (sWidth*0.5 - (sHeight*0.15/2)) && mouseX < (sWidth*0.5+(sHeight*0.15/2)) &&
		mouseY < (sHeight*0.85 - (sHeight*0.15/2)) && mouseY < (sHeight*0.85 + sHeight*0.15/2)) {
		gamestate = "menu"
	}
}