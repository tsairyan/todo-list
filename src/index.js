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
let pageTracker = 0;



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


let pageC = 0;
addButton.addEventListener('click', function() {
    const prioritySelect = document.getElementById('priority')
    const priorityOptions = prioritySelect.options[prioritySelect.selectedIndex].text;
    if (name.value === '' && !errorDisplayed) { //underneath add we create a popup stating what field is missing
        errorMsg();
        errorDisplayed = true;
    } else if (name.value === '' && errorDisplayed) {
        
    } else if (errorDisplayed){ //reset fields after
        const item = taskFactory(name.value, desc.value, date.value, priorityOptions);
        pageC = localStorage.getItem("pageC");

        if (taskArray[pageC] == null) {
            let innerArr = [];
          
            innerArr.push(item);
            taskArray[pageC] = innerArr;


        }
        else {
            let taskArray = JSON.parse(localStorage.getItem("task"));
            let innerArr = taskArray[pageC];
            innerArr.push(item);
            taskArray[pageC] = innerArr;


        }
        item.addToDom();



        hideErrorMsg();
        errorDisplayed = false;
        allInputs.forEach(element => {
            element.style.display = "none";
        });
        openTaskContainer.style.display = "flex";
    } else {
        const item = taskFactory(name.value, desc.value, date.value, priorityOptions);
        pageC = localStorage.getItem("pageC");

        if (taskArray[pageC] == null) {
            console.log('NO ARRAY' + pageC);
            let innerArr = [];
          
            innerArr.push(item);
            taskArray[pageC] = innerArr;


        }
        else {
            console.log('ARRAY' + pageC);

            taskArray = JSON.parse(localStorage.getItem("task"));
            let innerArr = taskArray[pageC];
            innerArr.push(item);
            taskArray[pageC] = innerArr;


        }


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
let projectTitle = [];
newPage.addEventListener('click', function() {
    const buttonSection = document.querySelector('.buttons')
    const newPageButton = document.querySelector('#newPage');
    
    const pageName = document.createElement('input');
    
    const submit = document.createElement('button');
    submit.classList.add('submitPage');
    const cancel = document.createElement('button');
    cancel.classList.add('cancelPage');


    const submitSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    submitSVG.setAttribute('height', '24');    
    submitSVG.setAttribute('width', '24');
    submit.appendChild(submitSVG);
    const newPath = document.createElementNS("http://www.w3.org/2000/svg","path"); 
    newPath.setAttribute('d', "m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z");
    submitSVG.appendChild(newPath);

    
    const cancelSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    cancelSVG.setAttribute('height', '24');    
    cancelSVG.setAttribute('width', '24');
    const newPath1 = document.createElementNS("http://www.w3.org/2000/svg","path"); 
    newPath1.setAttribute('d', "M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z");
    cancelSVG.appendChild(newPath1);
    cancel.appendChild(cancelSVG);


    
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('inputContainer');
    
    const elx = document.createElement('div');
    elx.style.display = 'flex';
    elx.style.justifyContent = 'center';
    elx.style.alignItems = 'center';
    inputContainer.appendChild(elx);
    const el5SVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    el5SVG.setAttribute('height', '20');    
    el5SVG.setAttribute('width', '20');
    elx.appendChild(el5SVG);
    const pathy = document.createElementNS("http://www.w3.org/2000/svg","path"); 
    pathy.setAttribute('d', "M8.333 13.729 5 10.396l1.062-1.063 2.271 2.271L13.938 6 15 7.062Z");
    el5SVG.appendChild(pathy);
    el5SVG.style.opacity = "0";



    buttonSection.appendChild(inputContainer);
    inputContainer.appendChild(pageName);
    pageName.focus();
    pageName.setAttribute('placeholder', 'enter page name');


    newPageButton.style.display = "none";
    

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('pageButtons');
    buttonSection.appendChild(buttonContainer);
    buttonContainer.appendChild(cancel);
    buttonContainer.appendChild(submit);

    
    //when pressing a new page, stores the previous .box and creates a blank sheet
    //when switching pages, we go to the array index that it corresponds to...
  

    //Cancel event listener
    cancel.addEventListener('click', function() {
        buttonContainer.remove();
        inputContainer.remove();
        newPageButton.style.display = "flex";
    })

    submit.addEventListener('click', function() {
        buttonContainer.remove();
        inputContainer.remove();
        newPageButton.style.display = "flex"; 
        
        const nPage = addPage(pageName.value);

        projectTitle.push(nPage);
        localStorage.setItem("uProject", JSON.stringify(projectTitle));
        localStorage.setItem("pageTracker", pageTracker);
        pageTracker++;

       

        nPage.createPage();
    });
});

    

/*
1. Click on it with no input, error message displayed, true
    Click on it again with no input, error message previously displayed, goes to else

*/
const home = document.querySelector('.home');
home.style.color = 'rgb(179, 0, 255)';
home.style.fontWeight = '700';



let taskArray = [];

window.onload = function() {
    if (localStorage.length == 0) {
        //reset tracker to 0
        tempTrack = 0;
        localStorage.setItem("tracker", tempTrack);
        pageC = 0;
        localStorage.setItem("pageC", pageC);
        // let innerArr = [];

        // taskArray[0] = innerArr;
        // localStorage.setItem("task", JSON.stringify(taskArray));



    } else {
     

        

        if(localStorage.getItem("uProject")) {
            let permProjects = JSON.parse(localStorage.getItem("uProject"));
            projectTitle = permProjects;
            
            for (let i = 0; i < projectTitle.length; i++) {
                if (projectTitle[i] !== null) {
                    pageTracker = i;
                    localStorage.setItem("pageTracker", pageTracker);
                    const proj = addPage(projectTitle[i].pageName);
                    proj.createPage();
                }

            }
            pageTracker++;
            

            
        } 


        pageC = localStorage.getItem("pageC");

        taskArray = JSON.parse(localStorage.getItem("task"));
        let inner = taskArray[pageC];

        
        for (let i = 0; i < inner.length; i++) {
            if (inner[i] !== null) {

                tempTrack = i;
                localStorage.setItem("tracker", tempTrack);

                const test = taskFactory(inner[i].name, inner[i].desc, inner[i].date, inner[i].priority);
                test.addToDom();
            }
            
        
           
        }
        tempTrack++;
        localStorage.setItem("tracker", tempTrack);


    }
  
  
};


//error when localstorage has no elements stored..
//iterating through trouble...
//error if creting a new page without adding an element to home screen first (uProject becomes second index)