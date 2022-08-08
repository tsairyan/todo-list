import './styles.css';
import taskFactory from './item';
import {errorMsg, hideErrorMsg} from './error';
import {addPage} from './projects.js';

const addButton = document.querySelector('#addButton');
const name = document.querySelector('input[name="name"]');
const desc = document.querySelector('input[name="desc"]');
const date = document.querySelector('input[name="date"]');
const allInputs = document.querySelectorAll('form > *');
let errorDisplayed = false;

let tempTrack = 0;



allInputs.forEach(element => {
    element.style.display = "none";
});
const center = document.querySelector('.center');
const openTaskContainer = document.querySelector('.openTaskContainer');
const openTask = document.createElement('div');
openTask.textContent = "+ Add Task";
openTask.classList.add('openTask');
openTaskContainer.appendChild(openTask);
openTaskContainer.addEventListener('click', function() {
    openTaskContainer.style.display = "none";
    allInputs.forEach(element => {
        element.style.display = "block";
    });
    center.style.display = "flex";
});

const prioritySelect = document.getElementById('priority');
prioritySelect.addEventListener("change", function () {
    prioritySelect.style.color = "white";
    });
//Cancel Button
const cancelAdd = document.querySelector("#cancelButton");
cancelAdd.addEventListener('click', function() {
    allInputs.forEach(element => {
        element.style.display = "none";
        
    });
    openTaskContainer.style.display = "flex";
    const inputs = document.querySelectorAll('input');
    inputs.forEach(element => element.value = '');

    prioritySelect.value = 'hide'; 
    prioritySelect.style.color = "#696c80";


    date.setAttribute('type', 'text');
    
    if (errorDisplayed == true) {
        hideErrorMsg();
    }
    errorDisplayed = false;
});

//Add Button
let taskArray = [];
addButton.addEventListener('click', function() {
    const prioritySelect = document.getElementById('priority')
    const priorityOptions = prioritySelect.options[prioritySelect.selectedIndex].text;
    if (name.value === '' && !errorDisplayed) { //underneath add we create a popup stating what field is missing
        errorMsg();
        errorDisplayed = true;
    } else if (name.value === '' && errorDisplayed) {
        
    } else if (errorDisplayed){ //reset fields after
        const item = taskFactory(name.value, desc.value, date.value, priorityOptions);
        taskArray.push(item);

        item.addToDom();


        hideErrorMsg();
        errorDisplayed = false;
        allInputs.forEach(element => {
            element.style.display = "none";
        });
        openTaskContainer.style.display = "flex";
    } else {
        const item = taskFactory(name.value, desc.value, date.value, priorityOptions);
        taskArray.push(item);

        item.addToDom();



        errorDisplayed = false;
        allInputs.forEach(element => {
            element.style.display = "none";
        });
        openTaskContainer.style.display = "flex";   
    }

    localStorage.setItem("task", JSON.stringify(taskArray));
    tempTrack++;
    localStorage.setItem("tracker", tempTrack);



});

//reset priority field when submitting

const newPage = document.querySelector('#newPage');

newPage.addEventListener('click', function() {
    addPage(); 
});

    

/*
1. Click on it with no input, error message displayed, true
    Click on it again with no input, error message previously displayed, goes to else

*/
const home = document.querySelector('.home');
home.style.color = 'rgb(179, 0, 255)';
home.style.fontWeight = '700';


const allItems = document.querySelector('.allItems');


window.onload = function() {
    if (localStorage.length == 0) {
        //reset tracker to 0
        tempTrack = 0;
        localStorage.setItem("tracker", tempTrack);
    } else {
        var x = JSON.parse(localStorage.getItem(localStorage.key(0)));
        taskArray = x;
        console.log(typeof x);
        
        for (let i = 0; i < taskArray.length; i++) {
            if (x[i] !== null) {
                tempTrack = i;
                localStorage.setItem("tracker", tempTrack);

                const test = taskFactory(taskArray[i].name, taskArray[i].desc, taskArray[i].date, taskArray[i].priority);
                test.addToDom();
            }
            
        
           
        }
        tempTrack++;
        localStorage.setItem("tracker", tempTrack);
    }
  
  
};


//error when localstorage has no elements stored..
//iterating through trouble...