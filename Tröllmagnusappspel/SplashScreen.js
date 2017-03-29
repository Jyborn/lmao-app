function SplashScreen() {
	this.r = sWidth * 0.1
	this.x = sWidth*0.5
	this.y = sHeight*0.5
	background(0);
	fill(255);	
	text("Press to Play", 200, 400);
	fill(0, 255, 0);
	ellipse(this.x, this.y, this.r, this.r);

function mouseClicked() {
		if (dist(this.x, this.y, mouseX, mouseY) < this.r) {
			console.log("kaosiortenss")
			gameState = 1 
		}
	}
}