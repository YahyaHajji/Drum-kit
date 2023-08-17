//Detecting Button Press

const NumberOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < NumberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const bouttonInnerHTML = this.innerHTML;
    makeSound(bouttonInnerHTML);
    buttonAnimation(bouttonInnerHTML);
    
  });
}
//Detecting Keyboard Press

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key){
  switch (key) {
    case "w":
      const crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      const kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      const snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      const tom_1 = new Audio("./sounds/tom-1.mp3");
      tom_1.play();
      break;
    case "j":
      const tom_2 = new Audio("./sounds/tom-2.mp3");
      tom_2.play();
      break;
    case "k":
      const tom_3 = new Audio("./sounds/tom-3.mp3");
      tom_3.play();
      break;
    case "l":
      const tom_4 = new Audio("./sounds/tom-4.mp3");
      tom_4.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(currentKey){

  const activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}

// Test event :
/*
function anotherAddEventListener(typeOfEvent, callback){
  const eventThatHappened = {
      eventType:"keypress",
      key:"r",
      durationOfKeypress:2
  }

  if (eventThatHappened.eventType === typeOfEvent ){
      callback(eventThatHappened);
  }
}


anotherAddEventListener("keypress",function(event){
  console.log(event);
})
*/