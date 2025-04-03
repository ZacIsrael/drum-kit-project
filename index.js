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

    console.log("btnLetter = ", btnLetter);
    // animate the button once it has been clicked
    animateButton(btnLetter);
  });
}

addEventListener("keydown", function (event) {
  // this function executes when a key is pressed
  console.log("key pressed. event = ", event);

  // retrieve the key that was pressed
  let keyPressed = event.key;
  // play the sound
  let soundPlayed = playSound(keyPressed);

  // no need to animate the button if a key that's not on one of the drum buttons was clicked
  if (soundPlayed !== false) {
    // animate the respective button after the key has been clicked
    animateButton(keyPressed);
  }
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
      return false;
  }
  return true;
}

// animates a button
function animateButton(key) {
  // each of the drum buttons have a class with its respective key; pass that key as a class
  let btnClicked = document.querySelector(`.${key}`);
  console.log("btnClicked = ", btnClicked);
  if (btnClicked === null) {
    // a key that's not a part of the game was clicked.
    console.log(`There is no HTML element with the class \'${key}\'`);
    alert(
      `There is no HTML element with the class \'${key}.\'\nPlease select another key.`
    );
  } else {
    // add class (in styles.css) to the button
    btnClicked.classList.add("pressed");

    // wait 0.25 seconds
    setTimeout(function () {
      // then removed the "pressed" class so that the button goes back to its original state
      btnClicked.classList.remove("pressed");
    }, 25);
  }
}
