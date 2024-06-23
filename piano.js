const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider");
const keysCheckbox = document.querySelector(".keys-checkbox");

let audio = new Audio();

const playTune = (key) => {
    audio.src = `tunes/${key}.mp3`;
    audio.volume = volumeSlider.value;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});

keysCheckbox.addEventListener("click", () => {
    pianoKeys.forEach(key => {
        const keySpan = key.querySelector("span");
        keySpan.style.display = keysCheckbox.checked ? "none" : "block";
    });
});

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});

document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    if (clickedKey) {
        playTune(key);
    }
});
