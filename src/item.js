import {store} from './webstorage.js';
//if count exists, then we set count = to that, else we let count = 0;
let count = 0;


const taskFactory = (name, desc, date, priority) => {
    console.log(count);
    const editContainer = document.createElement('div');
    editContainer.classList.add('editContainer');
    const prioritySelect = document.getElementById('priority')
    const dateFocus = document.querySelector('input[name="date"]');
    const addToDom = () => {

   
        
        

        //clear input fields..
        const inputs = document.querySelectorAll('input');
        inputs.forEach(element => element.value = '');

        prioritySelect.value = 'hide';
        const content = document.querySelector("#content");
        prioritySelect.style.color = '#696c80';
        dateFocus.setAttribute('type', 'text');

        //When addButton is pressed
        //1. Check: If data fields are empty, give an error message
        //2. Gets data from the input
        //Create the categories
        const box = document.createElement('div');
        box.classList.add('box'); //.box1...n
        box.setAttribute('id', JSON.parse(localStorage.getItem("tracker")));

        content.appendChild(box);
        const checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkboxContainer');
        box.appendChild(checkboxContainer);
        //Subcategories el0 = checkbox, el1 = name, el2 = desc, el3 = date, el4 = priority, el5 = edit
        const el0 = document.createElement('div');
        el0.classList.add('cbContainer');
        el0.style.border = "1px solid rgb(179, 0, 255)";
        el0.style.borderRadius = "2rem";

        const el1SVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        el1SVG.setAttribute('height', '20');    
        el1SVG.setAttribute('width', '20');
        el0.appendChild(el1SVG);
        const path = document.createElementNS("http://www.w3.org/2000/svg","path"); 
        path.setAttribute('d', "M8.333 13.729 5 10.396l1.062-1.063 2.271 2.271L13.938 6 15 7.062Z");
        el1SVG.appendChild(path);
        el1SVG.style.opacity = "0";


        el0.addEventListener('mouseenter', function (){
            el1SVG.style.opacity = "100";
            el0.style.cursor = "pointer";
        })
        el0.addEventListener('mouseleave', function (){
            el0.style.cursor = "default";
            el1SVG.style.opacity = "0";
        })

        const el1 = document.createElement('div');
        el1.classList.add('el1');
        const el2 = document.createElement('div');
        el2.classList.add('el2');
        const el3 = document.createElement('div');
        el3.classList.add('el3');
        const el4 = document.createElement('div');
        el4.classList.add('el4');
  
        const el5 = document.createElement('button');
        el5.classList.add('el5');

        const editSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        editSVG.setAttribute('height', '24');    
        editSVG.setAttribute('width', '24');
        el5.appendChild(editSVG);
        const newPath2 = document.createElementNS("http://www.w3.org/2000/svg","path"); 
        newPath2.setAttribute('d', "M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM17.85 10.4 7.25 21H3v-4.25l10.6-10.6Zm-3.525-.725-.7-.7 1.4 1.4Z");
        editSVG.appendChild(newPath2);
     
        checkboxContainer.appendChild(el0);
        box.appendChild(el1);
        box.appendChild(el2);
        box.appendChild(el3);
        box.appendChild(el4);
        //Put each data field in its respective category
        el1.textContent = name;
        el2.textContent = desc;
        el3.textContent = date;
        if (priority === "priority") {
            el4.textContent = "";
        } else {
            el4.textContent = priority;
            
        }
    
        //reset forms, optimizze
        const editTask = () => { //Press Edit Button we turn the text content of the examples into input fields. 
            //-> Opens up submit/cancel buttons, Cancel => turn input -> original textContent; Submit => turn input -> new textContent
            //1. Create the UI, submit/cancel buttons
            //Hide edit button in the eventlistener below
    
            const submit = document.createElement('button');
            submit.classList.add('submit');
            const submitSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            submitSVG.setAttribute('height', '24');    
            submitSVG.setAttribute('width', '24');
            submit.appendChild(submitSVG);
            const newPath = document.createElementNS("http://www.w3.org/2000/svg","path"); 
            newPath.setAttribute('d', "m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z");
            submitSVG.appendChild(newPath);
            const cancel = document.createElement('button');
            cancel.classList.add('cancel');
            
            const cancelSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            cancelSVG.setAttribute('height', '24');    
            cancelSVG.setAttribute('width', '24');
            const newPath1 = document.createElementNS("http://www.w3.org/2000/svg","path"); 
            newPath1.setAttribute('d', "M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z");
            cancelSVG.appendChild(newPath1);
            cancel.appendChild(cancelSVG);

            editContainer.appendChild(cancel); //which ever one goes first
            editContainer.appendChild(submit);
        
            //2. Turn categories back into inputs... IDK if there's a more efficient way to do this...
            //creating the textboxes...
            const nameInput = document.createElement('input');
            nameInput.classList.add('nameInput');
            const descInput = document.createElement('input');
            descInput.classList.add('descInput');
            const dateInput = document.createElement('input');
            dateInput.classList.add('dateInput');
            dateInput.setAttribute('type', 'text');
            dateInput.setAttribute('placeholder', "");
            dateInput.setAttribute('onfocus', 'this.type="date"');

            //make them contain the same text as when before pressing edit
            nameInput.value = el1.textContent;
            descInput.value = el2.textContent;
            dateInput.value = date;


            const priorityInput = document.createElement('select');
            priorityInput.classList.add('priorityInput');

            const high = document.createElement('option');
            high.textContent = 'High';
            high.setAttribute('id', 'high');
            const medium = document.createElement('option');
            medium.textContent = 'Medium';
            medium.setAttribute('id', 'medium');

            const low = document.createElement('option');
            low.textContent = 'Low'; //whatever is selected, switch statement.. later
            low.setAttribute('id', 'low');

            const none = document.createElement('option');
            none.setAttribute('id', 'none');
            nameInput.textContent = name;
            descInput.textContent = desc;
            dateInput.value = date;

            priorityInput.appendChild(high);
            priorityInput.appendChild(medium);
            priorityInput.appendChild(low);
            priorityInput.appendChild(none);

            switch (el4.textContent) {
                case "High":
                high.setAttribute("selected", "true");
                break;
                case "Medium":
                medium.setAttribute("selected", "true");
                break;
                case "Low":
                low.setAttribute("selected", "true");
                break;
                case "":
                none.setAttribute("selected", "true");
                
            }
            priorityInput.style.color = 'white';
            //Save old inputs for cancel use..?
            
            //Remove old inputs..

            el0.style.display = 'none';
            el1.style.display = 'none';
            el2.style.display = 'none';
            el3.style.display = 'none';
            el4.style.display = 'none';
            checkboxContainer.style.display = "none";

            box.insertBefore(priorityInput, box.firstChild);
            box.insertBefore(dateInput, box.firstChild);
            box.insertBefore(descInput, box.firstChild);
            box.insertBefore(nameInput, box.firstChild);
  

            cancel.addEventListener('click', function() {
                priorityInput.remove();
                dateInput.remove();
                descInput.remove();
                nameInput.remove();
                console.log("cancel pressed");
                el0.style.display = 'block';
                el1.style.display = 'flex';
                el2.style.display = 'flex';
                el3.style.display = 'flex';
                el4.style.display = 'flex';
                checkboxContainer.style.display = "flex";
                submit.remove();
                cancel.remove();
                
                el5.style.display = "flex";

                
            })


            // 3. Submit Button function
            submit.addEventListener('click', function() { //We remove all el0-4 input elements, use the EXISTING HIDDEN el0-4 dlements and change values
                 el0.style.display = 'block';
                 el1.style.display = 'flex';
                 el2.style.display = 'flex';
                 el3.style.display = 'flex';
                 el4.style.display = 'flex';
                 checkboxContainer.style.display = "flex";
                 console.log(nameInput.textContent);
                 el1.textContent = nameInput.value;
                 el2.textContent = descInput.value;
                 el3.textContent = dateInput.value;
                date = dateInput.value;
                 
                 const priorityOptions = priorityInput.options[priorityInput.selectedIndex].text;
                 console.log(priorityOptions);
                el4.textContent = priorityOptions;

                priorityInput.remove();
                dateInput.remove();
                descInput.remove();
                nameInput.remove();


                submit.remove();
                cancel.remove();
                el5.style.display = "flex";

            })


        }
        box.appendChild(editContainer);
        editContainer.appendChild(el5);
    
        el5.addEventListener('click', function() {
            el5.style.display = "none";
            editTask();
        })


        el0.addEventListener('click', function() {
            // console.log(box.id);
            var x = JSON.parse(localStorage.getItem(localStorage.key(0)));
            x[box.id] = null; //if all null || empty, then we don't add in addToDom()
            localStorage.setItem("task", JSON.stringify(x));

            box.remove();
        });

        count++;
    
    }


    return {name, desc, date, priority, addToDom};
}

export default taskFactory;

//folders, if no date is specified...