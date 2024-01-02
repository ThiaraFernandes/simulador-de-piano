const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");


const mepedKeys = [];
let audio = new Audio();

const playTune = (key) => {
    audio.src = `./src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mepedKeys.push(key.dataset.key);
})

document.addEventListener("keydown", (event) => {

    if (mepedKeys.includes(event.key)) {
        playTune(event.key);
    }
});

const handVolume = (e) =>{
    audio.volume = e.target.value;
}

const showHidekeys = () => {
    pianoKeys.forEach(key =>key.classList.toggle("hide"));
}

volumeSlider.addEventListener("input", handVolume);
keysCheck.addEventListener("click",showHidekeys)