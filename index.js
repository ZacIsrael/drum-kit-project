// array of all the elements (in this case, buttons) in the HTML file with class = "drum"
let drumButtons = document.querySelectorAll(".drum");

// when this button is clicked, the handleClick() function will be executed.
// drumButtons[0].addEventListener("click", handleClick);

for (let i = 0; i < drumButtons.length; i++) {

  drumButtons[i].addEventListener("click", function () {
    // this function is executed when one of the drum buttons have been clicked

    // access the button
    let btn = this;
    let btnLetter = btn.innerHTML;
    // console.log('this = ', btn.innerHTML)

    if (btnLetter === "w") {
      // play the sound
      let audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
    }
    if (btnLetter === "a") {
      // play the sound
      let audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
    }
    if (btnLetter === "s") {
      // play the sound
      let audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
    }
    if (btnLetter === "d") {
      // play the sound
      let audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
    }
    if (btnLetter === "j") {
      // play the sound
      let audio = new Audio("./sounds/snare.mp3");
      audio.play();
    }
    if (btnLetter === "k") {
      // play the sound
      let audio = new Audio("./sounds/crash.mp3");
      audio.play();
    }
    if (btnLetter === "l") {
      // play the sound
      let audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
    }
  });
}








// this function is called when a button is clicked
function handleClick() {
  // debugging purposes
  // alert("I got clicked!");

  // this is the button that was clicked
  let btn = this;
  let btnLetter = btn.innerHTML;
  // console.log('this = ', btn.innerHTML)

  if (btnLetter === "w") {
    // play the sound
    let audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
  }
  if (btnLetter === "a") {
    // play the sound
    let audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
  }
  if (btnLetter === "s") {
    // play the sound
    let audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
  }
  if (btnLetter === "d") {
    // play the sound
    let audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
  }
  if (btnLetter === "j") {
    // play the sound
    let audio = new Audio("./sounds/snare.mp3");
    audio.play();
  }
  if (btnLetter === "k") {
    // play the sound
    let audio = new Audio("./sounds/crash.mp3");
    audio.play();
  }
  if (btnLetter === "l") {
    // play the sound
    let audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
  }
}
