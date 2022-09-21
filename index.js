// SELECTOR QUERY
const drum = document.querySelectorAll(".drum")

// CHECKING FOR CLICKS
for (var i = 0; i < drum.length; i++) {
drum[i].addEventListener("click", function () {

   let buttonInnerHTML = this.innerHTML;
    sounds(buttonInnerHTML);
    addingAnimation(buttonInnerHTML);
});
}

// CHECKING FOR KEYBOARD CHECKS 
document.addEventListener("keydown", function (event) {
    sounds(event.key);
    addingAnimation(event.key);
})

// ADDING ANIMATION
function addingAnimation(key) {
    var activeKey = document.querySelector("." + key);
    activeKey.classList.add("pressed");
    setTimeout(function () {
        activeKey.classList.remove("pressed");},
        100) 
}

//OBJECT INSTRUMENT
function Instrument(location) {
    this.location = location;
    this.play = function () {
        var audio = new Audio(location);
        audio.play();
    }
  }

  // INSTANCES OF INSTRUMENTS
let tom1 = new Instrument('sounds/tom-1.mp3')
let tom2 = new Instrument('sounds/tom-2.mp3')
let tom3 = new Instrument('sounds/tom-3.mp3')
let tom4 = new Instrument('sounds/tom-4.mp3')
let snare = new Instrument('sounds/snare.mp3')
let crash = new Instrument('sounds/crash.mp3')
let kick = new Instrument('sounds/kick-bass.mp3')


// MAIN LOGIC
function sounds(event) {
    switch(event) {
        case "w":
            tom1.play();
        break;
        case "a":
            tom2.play();
        break;
        case "s":
            tom3.play();
        break;
        case "d":
            tom4.play();
        break;
        case "j":
            snare.play();
        break;
        case "k":
            crash.play();
        break;
        case "l":
            kick.play();
        break;
    
        default:
            console.log(buttonInnerHTML);
        break;
       }
}