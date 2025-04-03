// array of all the elements (in this case, buttons) in the HTML file with class = "drum"
let drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    // this function is executed when one of the drum buttons have been clicked

    // access the button
    let btn = this;
    let btnLetter = btn.innerHTML;
    //plays the sound 
    playSound(btnLetter);
  });
}

addEventListener("keydown", function (event) {
  // this function executes when a key is pressed
  console.log("key pressed. event = ", event);

  // retrieve the key that was pressed
  let keyPressed = event.key;
  playSound(keyPressed);
});

// plays sound based on the letter
function playSound(key) {
  let audio = new Audio();
  switch (key) {
    case "w":
      audio.src = "./sounds/tom-1.mp3";
      audio.play();
      break;
    case "a":
      audio.src = "./sounds/tom-2.mp3";
      audio.play();
      break;

    case "s":
      audio.src = "./sounds/tom-3.mp3";
      audio.play();
      break;

    case "d":
      audio.src = "./sounds/tom-4.mp3";
      audio.play();
      break;

    case "j":
      audio.src = "./sounds/snare.mp3";
      audio.play();
      break;

    case "k":
      audio.src = "./sounds/crash.mp3";
      audio.play();
      break;

    case "l":
      audio.src = "./sounds/kick-bass.mp3";
      audio.play();
      break;
    default:
      console.log("A different key was pressed. key = ", key);
  }
}
