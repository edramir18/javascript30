function playDrumkit(keyCode){
    const drum = document.querySelector(`.key[data-key="${keyCode}"]`);
    const sound = document.querySelector(`audio[data-key="${keyCode}"]`);
    if(!drum || !sound) return;
    sound.currentTime = 0;
    sound.play();
}

document.addEventListener("DOMContentLoaded", (event) => {
        window.addEventListener("keydown", (e) => playDrumkit(e.keyCode));
        const keys = document.querySelectorAll('.key');
        keys.forEach((k) => {
            k.addEventListener("click", (e) => playDrumkit(e.currentTarget.getAttribute("data-key")));
        });

    }, false);