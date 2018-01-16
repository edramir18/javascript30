function updateClock(clock){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDegrees = (second / 12) * 360 + 90;
    const minuteDegrees = ((second+30) / 60) * 360 + 90;
    const secondDegrees = (second / 60) * 360 + 90;

    clock.hour.style.transform = `rotate(${hourDegrees}deg)`;
    clock.minute.style.transform = `rotate(${minuteDegrees}deg)`;
    clock.second.style.transform = `rotate(${secondDegrees}deg)`;
}

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM Loaded");
    const clock = {
        "hour": document.querySelector('.hand--hour'),
        "minute": document.querySelector('.hand--minute'),
        "second": document.querySelector('.hand--second')
    };
    //setInterval(updateClock, 1000, clock);
    //updateClock(clock);
}, false);