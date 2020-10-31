let seconds= 0;
let minutes = 0;
let hours = 0;

let interval = null;

let status = 'stopped';

let displaySec;
let displayMin;
let displayHr;

function stopWatch(){
    seconds++;

    if (seconds/60 === 1){
        seconds = 0;
        minutes++;
    }
    if (minutes/60 === 1){
        minutes = 0;
        hours++;
    }

    if (seconds < 10){
        displaySec = `0${seconds}`;
    }
    else {
        displaySec = seconds;
    }

    if(minutes < 10){
        displayMin = `0${minutes}`;
    }
    else{
        displayMin = minutes;
    }
    if(hours < 10){
        displayHr = `0${hours}`;
    }
    else{
        displayHr = hours;
    }

    let display = document.getElementById("display"); 
    display.textContent = `${displayHr}:${displayMin}:${displaySec}`;
}

function startStop(){
    if (status === 'stopped'){
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("start-stop").textContent = 'Stop';
        status = 'started';
    }
    else {
        window.clearInterval(interval);
        document.getElementById("start-stop").textContent = 'Start';
        status = 'stopped';      
    }
}

function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").textContent = '00:00:00';
    document.getElementById("start-stop").textContent = 'Start';

}