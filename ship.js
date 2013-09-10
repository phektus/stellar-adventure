(function(window) {
    function Ship(image) {
	this.initialize(image);
    }
    Ship.prototype = new createjs.Bitmap();

    // save the orig initialize method
    Ship.prototype.Bitmap_initialize = Ship.prototype.initialize;

    // init the object
    Ship.prototype.initialize = function(image) {
	this.Bitmap_initialize(image);
	this.name = 'Ship';
	this.snapToPixel = true;
	// add some velocity
	this.velocity = {
	    x: 0,
	    y: 12
	};
    };

    Ship.prototype.tick = function() {
	this.y += 1;
	// apply velocity on movement
	this.velocity.y += 1;
	this.y += this.velocity.y;
    };

    Ship.prototype.reset = function() {
	this.y = canvas.height / 1.25;
	this.velocity.y = -15;
    };
    
    window.Ship = Ship;
})(window);