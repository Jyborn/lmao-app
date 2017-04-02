

function Square(x, y, active) {
	this.x = x * floor(sWidth * 0.20) + floor(sWidth * 0.1)
	this.y = y *  floor(sWidth * 0.20) +  floor(sHeight * 0.2)
	this.w = this.h = floor(sWidth * 0.2)
	this.r = floor(random(255))
	this.g = floor(random(255))
	this.b = floor(random(255))
	this.active = active

	this.show = function() {
		noStroke()
		fill(this.r, this.g, this.b)
		rect(this.x, this.y, this.w, this.h)
	}

	this.getColors = function() {
		colors = [this.r, this.g, this.b]
		return(colors)
	}

	this.setPattern = function(num) {
		this.active = num
	}

	this.pressed = function() {

		if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
			if (this.active === currPatternNum) {
				if (currPatternNum === pattern) {
					gamestate = "load-win"
					squares.splice(0, 16)
				}
				currPatternNum++
			} else {
				gamestate = "load-lose"
				squares.splice(0, 16)
			}
		}

	}
}