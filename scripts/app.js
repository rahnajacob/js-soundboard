//on button mouseover display the head.gif
//on click play linked audio

//Cached HTML Elements
//const audios = document.querySelectorAll(".audio");
const buttons = document.querySelectorAll(".grid-button"); 

//Functions

// buttons.setAttribute("a href", "images/head.gif");

//Event Listeners

buttons.forEach((button) => {
button.addEventListener("click", () => {
    const audioFile = button.getAttribute("src")
    const audio = new Audio(audioFile);
    audio.volume = 0.3;
    audio.play();
})
})
