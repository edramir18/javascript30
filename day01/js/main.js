function keyDrumKitDown(e) {
    const key = e.keyCode;
    const drum = document.querySelector(`.key[data-key="${key}"]`);
    if(!drum) return;
    const sound = document.querySelector(`sound[data-key="${key}"]`);
    sound.play();
}

document.addEventListener("DOMContentLoaded", (event) => {
		window.addEventListener("keydown", keyDrumKitDown);
	}, false);