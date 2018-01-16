function playDrumKitAudio(keyCode){
    const drum = document.querySelector(`.key[data-key="${keyCode}"]`);
    const sound = document.querySelector(`audio[data-key="${keyCode}"]`);
    if(!drum || !sound) return;
    // Added Class to active the key
    drum.classList.add('playing');    
    // Rewind the audio in case is playing
    sound.currentTime = 0;
    sound.play();
}

function resetDrumkitKeyClass(drumkit, property){    
    if(property !== 'transform'){
        return;
    }
    drumkit.classList.remove("playing");
}

document.addEventListener("DOMContentLoaded", (event) => {
        window.addEventListener("keydown", (e) => playDrumKitAudio(e.keyCode));
        const keys = document.querySelectorAll('.key');
        keys.forEach((k) => {
            k.addEventListener("click", (e) => playDrumKitAudio(e.currentTarget.getAttribute("data-key")));
            k.addEventListener("transitionend", (e) => resetDrumkitKeyClass(e.target, e.propertyName));
        });

    }, false);