
    let count = 0;
    
const taskFactory = (name, desc, date, priority) => {

    const editContainer = document.createElement('div');
    editContainer.classList.add('editContainer');

    


    const addToDom = () => {
     

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
    
            cancel.addEventListener('click', function() {
                submit.remove();
                cancel.remove();
                
                el5.style.display = "block";
            })
            //2. Turn categories back into inputs... IDK if there's a more efficient way to do this...
            //creating the textboxes...
            const nameInput = document.createElement('input');
            nameInput.classList.add('nameInput');
            const descInput = document.createElement('input');
            descInput.classList.add('descInput');
            const dateInput = document.createElement('input');
            dateInput.classList.add('dateInput');
            dateInput.setAttribute('for', 'date')

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

            nameInput.textContent = name;
            descInput.textContent = desc;
            dateInput.value = date;

            priorityInput.appendChild(high);
            priorityInput.appendChild(medium);
            priorityInput.appendChild(low);

            switch (priority) {
                case "High":
                high.setAttribute("selected", "true");
                break;
                case "Medium":
                medium.setAttribute("selected", "true");
                break;
                case "Low":
                low.setAttribute("selected", "true");
                break;
            }
            //Remove old inputs..
            el1.remove();
            el2.remove();
            el3.remove();
            el4.remove();

            box.insertBefore(priorityInput, box.firstChild);
            box.insertBefore(dateInput, box.firstChild);
            box.insertBefore(descInput, box.firstChild);
            box.insertBefore(nameInput, box.firstChild);
  




            //3. Submit Button function



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