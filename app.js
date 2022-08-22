//RELOJ SPAN
const clock = document.querySelector('#clock');

setInterval(() => {
    const now = moment();
    const clockTime = now.format('h:mm:ssA');
    clock.textContent = clockTime;
}, 1000);
