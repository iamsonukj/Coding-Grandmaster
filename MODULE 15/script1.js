var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
var stopped = true;
var t;
var dice;

// Change dice emoji randomly
function change() {
    var random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];
}

// Start/Stop toggle function
function stopStart() {
    if (stopped) {
        stopped = false;
        t = setInterval(change, 100);
    } else {
        clearInterval(t);
        stopped = true;
    }
}

// Initialize on page load
window.onload = function () {
    dice = document.getElementById("dice");
    stopStart();
};