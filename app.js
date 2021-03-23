// Timing Events Exercise

// 1
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
}, 1000);

// 2
setTimeout(() => {
    const nesting = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    nesting.append(p2);
    setTimeout(() => {
        const nesting = document.querySelector(`#timeout-nesting`);
        const p3 = document.createElement(`p`);
        p3.innerText = `Two`;
        nesting.append(p3);
    }, 1000);
}, 2000);

// 3a
let time = 1;
const timer = setInterval(() => {
    console.log(time);
    time++;
}, 1000);

// 3b
const stop = document.querySelector(`button`);

stop.addEventListener(`click`, () => {
    clearInterval(timer);
});

// BONUS

// 4
let i = 120;
const countdownTimer = setInterval(() => {
    if (i > 0) {
        const countdown = document.querySelector(`#countdown`);
        const clock = document.createElement(`p`);
        clock.innerText = i;
    } else {
        clearInterval(countdown);
    }
    i--;
}, 1000);