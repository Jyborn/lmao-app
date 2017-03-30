function Square(x, y, active) {

	this.x = x * floor(sWidth * 0.20) + floor(sWidth * 0.1)
	this.y = y *  floor(sWidth * 0.20) +  floor(sHeight * 0.1)
	this.w =  floor(sWidth * 0.20)
	this.h =  floor(sWidth * 0.20)

	this.active = active
	this.colR = random(255)
	this.colG = random(255)
	this.colB = random(255)

	this.draw = function() {
		//används i gameplay() i gameplay 
		diffcolR = abs(this.colR - activeR)
		if (diffcolR < 20) {
			this.colR = random(255)
		}
		noStroke()
		rectMode(RIGHT)
		if (this.active === true) {
			fill(activeR, activeG, activeB)
		} else {
			fill(this.colR, this.colG, this.colB)
		}
		rect(this.x, this.y, this.w, this.h)
	}

	this.clicked = function() {
		//används i mouse.clicked i main
		if (mouseX > this.x && mouseX < (this.x + this.w) &&
		 mouseY > this.y && mouseY < this.y + this.h) {
		 	if (this.active === true) {
				console.log("pressed activesquare")
				pickActiveSquare()
				currentLevel++
				for(i = 0; i < 15; i++) {
					squares[i].colR = random(255)
					squares[i].colG = random(255)
					squares[i].colB = random(255)
				}
				timer+= timervalue
			} else if (this.active !== true) {
				console.log("lose")
				gamestate = "lose"
			}
		}
	}

}