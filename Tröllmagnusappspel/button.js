function Button(shape, x, y, w, h, url) {

	this.shape = shape
	this.x = x
	this.y = y
	this.w = w
	this.h = h
	this.setup = false
	
	this.setup = function() {
		this.img = loadImage(url)
		this.setup = true
	}

	this.draw = function() {

		if (url === false) {
			if (this.shape === "rect") {
				rect(this.x, this.y, this.w, this.h)
			} else if (this.shape === "circ") {
				ellipse(this.x, this.y, this.w * 2, this.h * 2)
			}
		} else if (url !== false) {
			if (this.setup != true) {
				menuButton.setup()
			}
			image(this.img, this.x, this.y)
		}
	}

	this.pressed = function() {
		if (this.shape === "rect") {
			if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
				return(true)
			} else {
				return(false)
			}
		} else if (this.shape === "circ") {
			if (dist(this.x, this.y, mouseX, mouseY) < this.w) {
				return(true)
			} else {
				return(false)
			}
		}
	}	
}
