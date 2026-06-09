function updateClock() {
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var period = "AM";

    if (hours > 12) {
        hours = hours - 12;
        period = "PM";
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var currentTime = hours + ":" + minutes + ":" + seconds + " " + period;

    document.getElementById("MyClockDisplay").innerText = currentTime;

    setTimeout(updateClock, 1000);
}

updateClock();