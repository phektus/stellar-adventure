var stage,
    canvas,
    ship,
    img;

function init() {
    canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 250;
    document.body.appendChild(canvas);   

    stage = new createjs.Stage(canvas);

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