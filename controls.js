if('ontouchstart' in document.documentElement) {
    canvas.addEventListener('touchstart', function(e) {
	    handleKeyDown();
	}, false);
} else {
    document.onkeydown = handleKeyDown;
    document.onmousedown = handleKeyDown;
}

console.log('ship:', ship);
function handleKeyDown(e) {    
    ship.reset();
}

function handleKeyUp(e) {
    // execute things on key up
}