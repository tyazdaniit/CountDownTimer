var timerHours = 0;
var timerMinutes = 1;
var timerSecond = 60;

var myTimer = setInterval(function() {
    console.log(timerHours + " : " + timerMinutes + " : " + timerSecond);
    if(timerSecond == 0){
        timerSecond = 60;
        timerMinutes--;
    }
    if(timerMinutes < 0){
        timerMinutes = 59;
        timerHours--;
    }
    timerSecond--;
    if(timerHours == 0 && timerMinutes == 0 && timerSecond == 0){
        clearInterval(myTimer);
    }
}, 100);