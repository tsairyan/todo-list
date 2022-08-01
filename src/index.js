import './styles.css';
import taskFactory from './item';
import {errorMsg, hideErrorMsg} from './error';
import {addPage} from './projects.js';
const addSection = document.querySelector('.add');
const addButton = document.querySelector('#addButton');

const name = document.querySelector('input[name="name"]');
name.style.border = "1px solid red";
const desc = document.querySelector('input[name="desc"]');
const date = document.querySelector('input[name="date"]');



let errorDisplayed = false;
addButton.addEventListener('click', function() {
    const prioritySelect = document.getElementById('priority')
    const priorityOptions = prioritySelect.options[prioritySelect.selectedIndex].text;
    if (name.value === '' && !errorDisplayed) { //underneath add we create a popup stating what field is missing
        errorMsg();
        errorDisplayed = true;
    } else if (name.value === '' && errorDisplayed) {
        
    } else if (errorDisplayed){ //reset fields after
        const item = taskFactory(name.value, desc.value, date.value, priorityOptions);
        item.addToDom();
        hideErrorMsg();
        errorDisplayed = false;
    } else {
        const item = taskFactory(name.value, desc.value, date.value, priorityOptions);
        item.addToDom();
        errorDisplayed = false;
    }


});

//reset priority field when submitting

const newPage = document.querySelector('#newPage');
const content = document.querySelector('#content');
const allItems = document.querySelector('.allItems');
newPage.addEventListener('click', function() {
    addPage(); 

});

    

/*
1. Click on it with no input, error message displayed, true
    Click on it again with no input, error message previously displayed, goes to else

*/