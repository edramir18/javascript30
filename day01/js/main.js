function keyDrumKitDown(e) {
    const key = e.keyCode;
    const drum = document.querySelector(`.key[data-key="${key}"]`);
    const sound = document.querySelector(`audio[data-key="${key}"]`);
    if(!drum || !sound) return;    
    sound.play();
}

document.addEventListener("DOMContentLoaded", (event) => {
		window.addEventListener("keydown", keyDrumKitDown);
	}, false);