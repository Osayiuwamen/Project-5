//get the 3 json files
let lowEnegeryFile = "json/lowenergy.json";
let anxietyFile = "json/anxiety.json";
let uninspiredFile = "json/uninspired.json";

const assignedTask = document.querySelector(".assigned-task");
const lowEnergyButton = document.querySelector(".low-energy-button");
const anxietyButton = document.querySelector(".anxiety-button");
const uninspiredButton = document.querySelector(".uninspired-button");

var lowEnergy1 = document.querySelector("#lowEnergy1");
var lowEnergy2 = document.querySelector("#lowEnergy2");

var startButton = document.querySelector("#start");
var stopButton = document.querySelector("#stop");

var anxiety1 = document.querySelector("#anxiety1");
var anxiety2 = document.querySelector("#anxiety2");

var uninspired1 = document.querySelector("#uninspired1");
var uninspired2 = document.querySelector("#uninspired2");

var welcome = document.querySelector("#welcome");

var x;

// Set up the hover event
lowEnergy1.addEventListener("mouseover", function () {
  lowEnergy1.style.display = "none";
  lowEnergy2.style.display = "block";
});

lowEnergy2.addEventListener("mouseout", function () {
  lowEnergy2.style.display = "none";
  lowEnergy1.style.display = "block";
});

anxiety1.addEventListener("mouseover", function () {
  anxiety1.style.display = "none";
  anxiety2.style.display = "block";
});

anxiety2.addEventListener("mouseout", function () {
  anxiety2.style.display = "none";
  anxiety1.style.display = "block";
});

uninspired1.addEventListener("mouseover", function () {
  uninspired1.style.display = "none";
  uninspired2.style.display = "block";
});

uninspired2.addEventListener("mouseout", function () {
  uninspired2.style.display = "none";
  uninspired1.style.display = "block";
});

function handleStates() {
  startButton.style.display = "block";
  stopButton.style.display = "none";
  welcome.style.display = "none";
  assignedTask.innerHTML = "";
  document.querySelector("#emotions").style.display = "block";
  document.querySelector("#completed").style.display = "none";
  clearInterval(x);
}

function stopTimer() {
  startButton.style.display = "block";
  stopButton.style.display = "none";
  assignedTask.innerHTML = "";
  document.querySelector("#emotions").style.display = "none";
  document.querySelector("#completed").style.display = "block";
  clearInterval(x);
}

function startTimer() {
  startButton.style.display = "none";
  welcome.style.display = "none";
  stopButton.style.display = "block";
  document.querySelector("#emotions").style.display = "block";
  assignedTask.innerHTML = "Enjoy this window view for 15 minutes";
  document.querySelector("#completed").style.display = "none";

  // Set the date we're counting down to
  var countDownDate = new Date().getTime() + 15 * 60 * 1000;
  // Update the count down every 1 second
  x = setInterval(function () {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the distance between now and the count down date
    var distance = countDownDate - now;

    // Calculate minutes and seconds left
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.querySelector("#timer").innerHTML = minutes + ":" + seconds + "s";

    // If the countdown is over, display a message
    if (distance < 0) {
      stopTimer();
      document.querySelector("#completed").style.display = "block";
    }
  }, 1000);
}

$(function () {
  //low energy
  $.getJSON(lowEnegeryFile, function (data) {
    //this function picks a low energy task
    function setLowEnergyTask() {
      //get a random number
      let randomLowEnergyTask = Math.floor(Math.random() * data.length);
      //get a random task from the json file
      assignedTask.innerHTML = data[randomLowEnergyTask].task;
    }

    //when the low energy button is clicked, run the set low energy task function
    lowEnergyButton.onclick = () => {
      handleStates();
      document.querySelector("#mood").innerHTML = "Are you having a bad day?";
      console.log("low-energy");
      setLowEnergyTask();
    };
  });

  //anxiety
  $.getJSON(anxietyFile, function (data) {
    //this function picks a random anxiety task
    function setAnxietyTask() {
      //get a random number
      let randomAnxietyTask = Math.floor(Math.random() * data.length);
      //get a random task from the json file
      assignedTask.innerHTML = data[randomAnxietyTask].task;
    }

    //when the anxiety button is clicked, run the set anxiety task function
    anxietyButton.onclick = () => {
      handleStates();
      document.querySelector("#mood").innerHTML = "Are you anxious?";
      console.log("anxiety");
      setAnxietyTask();
    };
  });

  //uninspired
  $.getJSON(uninspiredFile, function (data) {
    //this function picks a random uninspired task
    function setUninspiredTask() {
      //get a random number
      let randomUninspiredTask = Math.floor(Math.random() * data.length);
      //get a random task from the json file
      assignedTask.innerHTML = data[randomUninspiredTask].task;
    }

    //when the uninspired button is clicked, run the set uninspired task function
    uninspiredButton.onclick = () => {
      handleStates();
      document.querySelector("#mood").innerHTML = "Are you uninspired?";
      console.log("uninspired");
      setUninspiredTask();
    };
  });
});
