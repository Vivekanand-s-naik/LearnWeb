//countDown Part
let elem;
let startCountDownBtn = document.getElementById('start-stopwatch-btn');;
let countDownInterVal;

startCountDownBtn.addEventListener('click', ()=>{
    countDownInterVal = setInterval(updateTimer, 1000)
});

function getStartAndEndTime() {
    const startTime = new Date(document.getElementById('start-time').value).getTime();
    const endTime = new Date(document.getElementById('end-time').value).getTime();
    return [startTime, endTime]
}
function getData() {
    let startAndEndTime = getStartAndEndTime();
    let now = new Date().getTime();

    let coveredTime = now - startAndEndTime[0];
    let pendingTime = startAndEndTime[1] - now;

    //convert Millisec to time units
    let milliSecDay = 24 * 60 * 60 * 1000;
    let milliSecHr = 60 * 60 * 1000;
    let milliSecSec = 60 * 1000;

    let days = Math.floor(pendingTime / milliSecDay);
    let hrs = Math.floor((pendingTime % milliSecDay) / milliSecHr);
    let mins = Math.floor((pendingTime % milliSecHr) / milliSecSec);
    let sec = Math.floor((pendingTime % milliSecSec) / 1000);

    //get Percentage of covered
    let totalTime = startAndEndTime[1] - startAndEndTime[0];
    let per = (coveredTime / totalTime) * 100;
    return [days, hrs, mins, sec, per];
}

function updateTimer() {
    let res = getData();
    if (isNaN(res[0]))
        return
    if (res[0] === 0 && res[1] === 0 && res[2] === 0 && res[3] === 0){        
        console.log("In Text Case\n", res);
        document.getElementById('days').innerText = 0;
        document.getElementById('hours').innerText = 0;
        document.getElementById('minutes').innerText = 0;
        document.getElementById('seconds').innerText = 0;
        elem.style.width = '100%'
        clearInterval(countDownInterVal);
        return
    }
    document.getElementById('days').innerText = res[0];
    document.getElementById('hours').innerText = res[1];
    document.getElementById('minutes').innerText = res[2];
    document.getElementById('seconds').innerText = res[3];
    elem.style.width = `${res[4]}%`;

}

//Timer Logic
let timerInputElem = document.getElementById('timePart');;
let hrElem = document.getElementById('hrs');
let minElem = document.getElementById('mins');
let secElem = document.getElementById('secs');
let millisecElem = document.getElementById('msecs');
let controlBtn = document.getElementById('pause-timer-btn');
let resetBtn = document.getElementById('reset-timer-btn');
let timerProgressElem;

let Over = false;
let controlFlag = true;
let pauseTime;
let tempFlag = true;
let endTime;
let timerEvent;
let FixedstartTime;
let percentageOfProgress;

function startTimer(pauseTimer, endTime) {
    const st = Date.now();
    const end = endTime;
    console.log(`Over : ${Over} Control Flag : ${controlFlag} TempFlag : ${tempFlag}`);
    if (Over === true) {
        console.log("Timer Terminated...");
        clearInterval(timerEvent);
    }
    if (!controlFlag) {
        console.log("Timer Paused...");
        clearInterval(timerEvent);

    }
    if (tempFlag === false) {
        timerEvent = setInterval(setTimer, 500, pauseTime, end);
        return;
        // clearInterval(timerEvent);
    }
    timerEvent = setInterval(setTimer, 500, st, end);
}
function getCurrentTIme() {
    return Date.now()
}
function getPausedTime() {
    return pauseTime;
}
function setTimer(startTime, endTime) {
    if (!controlFlag) {
        console.log("Timer Paused...");
        clearInterval(timerEvent);

    }
    console.log('Running...');
    let pendingTime = endTime - Date.now();
    const milliSecInHr = (60 * 60 * 1000)
    const milliSecInMin = 60 * 1000;
    let hr = Math.floor(pendingTime / milliSecInHr);
    let min = Math.floor(pendingTime % milliSecInHr / milliSecInMin);
    let sec = Math.floor((pendingTime % milliSecInMin) / 1000);
    let msec = Math.floor(pendingTime % 1000);
    // console.log(hr, min, sec, msec);
    if (hr === 0 && min === 0 && sec === 0) {
        console.log("In Test Case ")
        Over = true;
        setTimeout(clearInterval, msec, timerEvent);
        millisecElem.innerHTML = 0;
        secElem.innerHTML = 0;
        timerProgressElem.style.width = '100%';
        return;
    }

    //Update the timer
    hrElem.innerHTML = hr;
    minElem.innerHTML = min;
    secElem.innerHTML = sec;
    millisecElem.innerHTML = msec;
    console.log('Update the progress bar');
    let totalTime = endTime - FixedstartTime;
    let coveredTime = totalTime - pendingTime;
    percentageOfProgress = (coveredTime/totalTime)*100;
    timerProgressElem.style.width = `${percentageOfProgress}%`;
    console.log("Percentage : ", percentageOfProgress, document.getElementById('timer-progress-bar'));

}

function resetTimer() {
    hrElem.innerHTML = 0;
    minElem.innerHTML = 0;
    secElem.innerHTML = 0;
    millisecElem.innerHTML = 0;
    timerProgressElem.style.width = '0%';
    clearInterval(timerEvent);
}

timerInputElem.addEventListener('change', (event) => {
    let value = event.target.value;
    endTime = Date.now() + Number(value * 60 * 1000);
    FixedstartTime = Date.now();
    Over = false;
    startTimer(pauseTime, endTime);
});


controlBtn.addEventListener('click', (event) => {
    if (controlFlag) {
        controlFlag = false;
        controlBtn.innerHTML = 'Resume';
        pauseTime = endTime - Date.now();
        tempFlag = false;
        clearInterval(timerEvent);
        console.log("Paused...Control", controlFlag, "temp : ", tempFlag);
    }
    else {
        if (!pauseTime) return;
        controlFlag = true;
        controlBtn.innerHTML = 'Pause';
        endTime = Date.now() + pauseTime;
        timerEvent = setInterval(setTimer, 50, Date.now(), endTime);
    }
});

resetBtn.addEventListener('click', resetTimer);

document.addEventListener('DOMContentLoaded', () => {
    elem = document.getElementById('progress-bar');
    console.log("Doc Loaded");
    timerProgressElem = document.getElementById('timer-progress-bar');
    timerInputElem = document.getElementById('timePart');
    hrElem = document.getElementById('hrs');
    minElem = document.getElementById('mins');
    secElem = document.getElementById('secs');
    millisecElem = document.getElementById('msecs');
    controlBtn = document.getElementById('pause-timer-btn');
    resetBtn = document.getElementById('reset-timer-btn');
    startCountDownBtn = document.getElementById('start-stopwatch-btn');
});