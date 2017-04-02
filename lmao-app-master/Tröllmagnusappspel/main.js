squares = []
sWidth = window.innerWidth;
sHeight = window.innerHeight;
function setup() {
	gamestate = "splashScreen"

	createCanvas(sWidth, sHeight)

}

function draw() {

	if (gamestate === "splashScreen") {
		splashScreen()
	}

	if (gamestate === "load-menu") {
		//visa menu 
		menu()
	}

	if (gamestate === "load-game") {
		//ladda alla värden för att spelet ska funka (setup)
		loadGame()
	}

	if (gamestate === "game") {
		//draw och update
		gameplay()	
	}

	if (gamestate === "load-lose") {
		loseScreen()
	}

	if (gamestate === "win") {
		background(255)
	}
}

function mouseClicked() {

	console.log("click")
	if (gamestate === "splashScreen") {
		splashScreenPressed()
	}

	if (gamestate === "menu") {
		//kolla om man trycker på knappen
		menupressed()
	}

	if (gamestate === "game") {
		//kolla när man trycker på en ruta
		for (i = 0; i < squares.length; i++) {
			squares[i].pressed()
		}
	}

	if (gamestate === "lose") {
		loseScreenPressed()
	}

	if(gamestate === "win") {
		
	}
}
