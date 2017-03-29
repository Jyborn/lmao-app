squares = []
sWidth = window.innerWidth;
sHeight = window.innerHeight;
function setup() {
	gamestate = "menu"

	createCanvas(sWidth, sHeight)

}

function draw() {


	if (gamestate === "menu") {
		//visa menu 
		menu = new Menu()
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

	if (gamestate === "menu") {
		//kolla om man trycker på knappen
		menu.pressed()
	}
	if (gamestate === "game") {
		//kolla när man trycker på en ruta
		for(i = 0; i < squares.length; i++) {
			squares[i].clicked()
		}
	}
}

