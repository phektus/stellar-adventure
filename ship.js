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
    };

    Ship.prototype.tick = function() {
	this.y += 1;
    };

    Ship.prototype.reset = function() {
	this.y = 0;
    };
    
    window.Ship = Ship;
})(window);