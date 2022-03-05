var myTimerSecond = 10;
var myTimer = setInterval(function() {
    console.log(myTimerSecond);
    myTimerSecond--;
    if(myTimerSecond == -1){
        clearInterval(myTimer);
    }
}, 1000);