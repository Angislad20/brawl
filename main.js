const daysSpan = document.querySelector('.days');
const hoursSpan = document.querySelector('.hours');
const minsSpan = document.querySelector('.min');
const secsSpan = document.querySelector('.sec');

const finDate = new Date('02/15/2023 00:00:00');

const angislad = function() {

    const restTime = finDate - new Date();

    const days = Math.floor(restTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((restTime / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((restTime / 1000 / 60) % 60);
    const secs = Math.floor((restTime / 1000) % 60);

    daysSpan.textContent = days;
    hoursSpan.textContent = hours;
    minsSpan.textContent = mins;
    secsSpan.textContent = secs;
};

setInterval(angislad, 1000);

