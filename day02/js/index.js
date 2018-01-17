function resetTransition(hand, time){
    if(time == 0){
        hand.classList.add("hand--animation-off");
    }else if(hand.classList.contains("hand--animation-off")){
        hand.classList.remove("hand--animation-off");
    }
}

function updateClock(clock){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    resetTransition(clock.hour, hour);
    resetTransition(clock.minute, minute);
    resetTransition(clock.second, second);

    const hourDegrees = ( hour / 12 ) * 360 + 90;
    const minuteDegrees = ( minute / 60 ) * 360 + 90;
    const secondDegrees = (second / 60) * 360 + 90;    
    
    clock.hour.style.transform = `rotate(${hourDegrees}deg)`;
    clock.minute.style.transform = `rotate(${minuteDegrees}deg)`;
    clock.second.style.transform = `rotate(${secondDegrees}deg)`;
}

document.addEventListener("DOMContentLoaded", (e) => {
    console.log("DOM Loaded");
    const clock = {
        "hour": document.querySelector('.hand__hour'),
        "minute": document.querySelector('.hand__minute'),
        "second": document.querySelector('.hand__second')
    };
    setInterval(updateClock, 1000, clock);
    updateClock(clock);
}, false);