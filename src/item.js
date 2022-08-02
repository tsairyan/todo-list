
    let count = 0;
    
const taskFactory = (name, desc, date, priority) => {

    const editContainer = document.createElement('div');
    editContainer.classList.add('editContainer');
    const prioritySelect = document.getElementById('priority')
    const priorityOptions = prioritySelect.options[prioritySelect.selectedIndex].text;

    const addToDom = () => {
     
        //clear input fields..
        const inputs = document.querySelectorAll('input');
        inputs.forEach(element => element.value = '');

        prioritySelect.selectedIndex = 3;
        const content = document.querySelector("#content");

    
        //When addButton is pressed
        //1. Check: If data fields are empty, give an error message
        console.log(name);

      
        //2. Gets data from the input
    
    
        //Create the categories
        const box = document.createElement('div');
        box.classList.add('box'); //.box1...n
        box.setAttribute('id', count);

        content.appendChild(box);
    
        //Subcategories el0 = checkbox, el1 = name, el2 = desc, el3 = date, el4 = priority, el5 = edit
        const el0 = document.createElement('input');
        el0.setAttribute('type', 'checkbox');

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
        el5.textContent = "edit";

       


        box.appendChild(el0);
        box.appendChild(el1);
        box.appendChild(el2);
        box.appendChild(el3);
        box.appendChild(el4);
        //Put each data field in its respective category
        el1.textContent = name;
        el2.textContent = desc;
        el3.textContent = date;
        el4.textContent = priority;
    
        //reset forms, optimizze
    

    
        const editTask = () => { //Press Edit Button we turn the text content of the examples into input fields. 
            //-> Opens up submit/cancel buttons, Cancel => turn input -> original textContent; Submit => turn input -> new textContent
            console.log('test');
            //1. Create the UI, submit/cancel buttons
            //Hide edit button in the eventlistener below
    
            const submit = document.createElement('button');
            submit.classList.add('submit');
            submit.textContent = "submit";
            const cancel = document.createElement('button');
            cancel.classList.add('cancel');
            cancel.textContent = "cancel";
    
            editContainer.appendChild(submit);
            editContainer.appendChild(cancel); //which ever one goes first
    
        
            //2. Turn categories back into inputs... IDK if there's a more efficient way to do this...
            //creating the textboxes...
            const nameInput = document.createElement('input');
            nameInput.classList.add('nameInput');
            const descInput = document.createElement('input');
            descInput.classList.add('descInput');
            const dateInput = document.createElement('input');
            dateInput.classList.add('dateInput');
            dateInput.setAttribute('type', 'date')
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
            //Save old inputs for cancel use..?
            
            //Remove old inputs..
            el0.style.display = 'none';
            el1.style.display = 'none';
            el2.style.display = 'none';
            el3.style.display = 'none';
            el4.style.display = 'none';

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
                el1.style.display = 'block';
                el2.style.display = 'block';
                el3.style.display = 'block';
                el4.style.display = 'block';
                submit.remove();
                cancel.remove();
                
                el5.style.display = "block";
            })


            // 3. Submit Button function
            submit.addEventListener('click', function() { //We remove all el0-4 input elements, use the EXISTING HIDDEN el0-4 dlements and change values
                 el0.style.display = 'block';
                 el1.style.display = 'block';
                 el2.style.display = 'block';
                 el3.style.display = 'block';
                 el4.style.display = 'block';

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
                el5.style.display = "block";

            })


        }
        box.appendChild(editContainer);
        editContainer.appendChild(el5);
    
        el5.addEventListener('click', function() {
            el5.style.display = "none";
        
            editTask();


        })
        el0.addEventListener('click', function() {
            box.remove();
        
        });
    
    
    
    
        count++;
    
    }


    return {name, desc, date, priority, addToDom};
}

export default taskFactory;

//folders, if no date is specified...