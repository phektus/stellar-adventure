var stage,
    canvas,
    ship,
    img;

function init() {
    var background;
    canvas = document.getElementById('myGame');
    stage = new createjs.Stage(canvas);

    background = new createjs.Shape();
    background.graphics.beginFill("#000").drawRect(0, 0, canvas.width, canvas.height);
    stage.addChild(background);

    img = new Image();
    img.onload = function() {
	console.log('Loaded image:', img);
	ship = new Ship(img);
	console.log('Created ship:', ship);
	stage.addChild(ship);
	ship.reset();
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(function() {
		ship.tick();
		stage.update();
	    });
    };
    img.src = 'assets/ship.png';
}

init();