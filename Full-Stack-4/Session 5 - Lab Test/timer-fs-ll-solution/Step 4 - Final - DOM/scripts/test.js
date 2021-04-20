
// Global Variables 
var timer = null;
var txtStartTimer = null;
var txtEndTimer = null;
var btnStart = null;
var btnStop = null;
var btnReset = null;
var startTime = null;
var endTime = null;

const initControls = function () {
 
    timer = document.querySelector('#timer');
    txtStartTimer = document.querySelector('#txtStartTime');
    txtEndTimer = document.querySelector('#txtEndTime');
    btnStart = document.querySelector('#btnStart');
    btnStop = document.querySelector('#btnStop');
    btnReset = document.querySelector('#btnReset');
}

// Event Handlers
const setupHandlers = function () {

    btnStart.onclick = startTimer;
    btnStop.onclick = stopTimer;
    btnReset.onclick = resetTimerValues;
}

// Date & Time Logic
const getDisplayTime = function (date) {
    return date.toLocaleTimeString();
}
const startTimer = function () {
    resetTimerValues();

    startTime = new Date();
    const displayStart = getDisplayTime(startTime);
    console.log('start timer: ' + displayStart);
    txtStartTimer.value = displayStart;
}

const resetTimerValues = function(isResetTimer) {
    endTime = null;
    txtStartTimer.value = null;
    txtEndTimer.value = null;
    
    if(isResetTimer)
        clearTimerHistory();
}
const stopTimer = function () {

    endTime = new Date();
    const displayEndTime = getDisplayTime(endTime);
    console.log('end timer: ' + displayEndTime);
    txtEndTimer.value = displayEndTime;

    addTimerRow();
}

const clearTimerHistory = function () {
    while (timer.firstChild) {
        timer.removeChild(timer.lastChild);
      }
}

const calculateDuration = function(currentDate) {
    var millisec = Math.abs(currentDate - startTime);
    var seconds = Math.floor((millisec / 1000).toFixed(2));
    var minutes = Math.floor((millisec / (1000 * 60)).toFixed(1));

    if(minutes > 0) // calculate offset
        seconds = Math.abs(seconds - (minutes * 60));


    const duration = "Duration => minutes: " + minutes + " " + "seconds: " + seconds;
    console.log(duration);
    return duration;
}

// DOM Manipulation 
const createElement = function(name, element) {
    let elm = document.createElement(element);
    elm.textContent = name;
    elm.className = "container-item";
    return elm;
}


const addTimerRow = function () {
    var timeStamp = new Date();
    var duration = calculateDuration(timeStamp);
    timer.appendChild(createElement(duration, 'p'));
}

// Window Events

window.addEventListener('load', function () {
    console.log('window loaded..');
    initControls();
    setupHandlers();
})