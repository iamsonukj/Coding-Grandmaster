window.onload = function () {
    var seconds = 0;
    var milliseconds = 0;

    var msDisplay = document.getElementById("milliseconds");
    var secDisplay = document.getElementById("seconds");

    var startBtn = document.getElementById("button-start");
    var stopBtn = document.getElementById("button-stop");
    var resetBtn = document.getElementById("button-reset");

    var timerInterval;

    startBtn.onclick = function () {
        clearInterval(timerInterval);
        timerInterval = setInterval(runTimer, 10);
    };

    stopBtn.onclick = function () {
        clearInterval(timerInterval);
    };

    resetBtn.onclick = function () {
        clearInterval(timerInterval);
        milliseconds = 0;
        seconds = 0;
        msDisplay.innerHTML = "00";
        secDisplay.innerHTML = "00";
    };

    function runTimer() {
        milliseconds++;

        if (milliseconds <= 9) {
            msDisplay.innerHTML = "0" + milliseconds;
        } else {
            msDisplay.innerHTML = milliseconds;
        }

        if (milliseconds > 99) {
            seconds++;
            secDisplay.innerHTML = seconds;
            milliseconds = 0;
            msDisplay.innerHTML = "00";
        }

        if (seconds > 9) {
            secDisplay.innerHTML = seconds;
        }
    }
};