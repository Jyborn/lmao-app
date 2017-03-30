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

	if (gamestate === "menu") {
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

	if (gamestate === "lose") {
		loseScreen()
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
		for(i = 0; i < squares.length; i++) {
			squares[i].clicked()
		}
	}

	if (gamestate === "lose") {
		loseScreenPressed()
	}
}
