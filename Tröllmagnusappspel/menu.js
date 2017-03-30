function Menu() {
	this.r = sWidth * 0.1
	this.x = sWidth*0.5
	this.y = sHeight*0.5
	background(0);
	textSize(30)
	textAlign(CENTER)
	fill(0, 255, 0);
	ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
	fill(255);	
	text("Press to Play", this.x, sHeight*0.3);
	
	this.pressed = function() {
		if (dist(this.x, this.y, mouseX, mouseY) < this.r) {
			gamestate = "load-game"
		}
	}
}