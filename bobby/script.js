//get the 3 json files
let lowEnegeryFile = "json/lowenergy.json";
let anxietyFile = "json/anxiety.json";
let uninspiredFile = "json/uninspired.json";

const assignedTask = document.querySelector('.assigned-task');
const lowEnergyButton  = document.querySelector('.low-energy-button');
const anxietyButton  = document.querySelector('.anxiety-button');
const uninspiredButton  = document.querySelector('.uninspired-button');


$(function() { 

    //low energy
    $.getJSON(lowEnegeryFile, function(data) {

        //this function picks a low energy task
        function setLowEnergyTask() {
            //get a random number
            let randomLowEnergyTask = Math.floor(Math.random() * data.length);
            //get a random task from the json file
            assignedTask.innerHTML = data[randomLowEnergyTask].task;     
        }
    
        //when the low energy button is clicked, run the set low energy task function
        lowEnergyButton.onclick = () =>{
            console.log('low-energy')
            setLowEnergyTask()
        }    
    });


    //anxiety
    $.getJSON(anxietyFile, function(data) {

        //this function picks a random anxiety task
        function setAnxietyTask() {
            //get a random number
            let randomAnxietyTask = Math.floor(Math.random() * data.length);
            //get a random task from the json file
            assignedTask.innerHTML = data[randomAnxietyTask].task;     
        }
    
        //when the anxiety button is clicked, run the set anxiety task function
        anxietyButton.onclick = () =>{
            console.log('anxiety')
            setAnxietyTask()
        }    
    });

    //uninspired
    $.getJSON(uninspiredFile, function(data) {

        //this function picks a random uninspired task
        function setUninspiredTask() {
            //get a random number
            let randomUninspiredTask = Math.floor(Math.random() * data.length);
            //get a random task from the json file
            assignedTask.innerHTML = data[randomUninspiredTask].task;     
        }
    
        //when the uninspired button is clicked, run the set uninspired task function
        uninspiredButton.onclick = () =>{
            console.log('uninspired')
            setUninspiredTask()
        }    
    });


    
});

