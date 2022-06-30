'use strict';

const clock = document.querySelector('.clock');

const autoClock = ()=>{
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}; 

autoClock();
setInterval(autoClock, 1000);