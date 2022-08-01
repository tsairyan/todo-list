//stores everything that is on the page??

//create a function that stores all the dom elements into an array as an object????
const pages = [];
let curr = 0;
const allItems = document.querySelector('.allItems');
const content = document.querySelector('#content');
//when we create a new page, we change curr to what the new index is
//when we click on a diff page to change to, we change curr to that, but before we do that we save the current elements into the pages[curr]
let tracker = 1;

//function that creates pages and assigns each page to an index...
function addPage() { //takes input field.

    const buttonSection = document.querySelector('.buttons')
    const newPageButton = document.querySelector('#newPage');
    
    const pageName = document.createElement('input');
    const submit = document.createElement('button');
    submit.classList.add('submitPage');
    submit.textContent = "Add Page";
    const cancel = document.createElement('button');
    cancel.textContent = "Cancel";
    cancel.classList.add('cancelPage');

    
    newPageButton.style.display = "none";
    buttonSection.appendChild(pageName);
    buttonSection.appendChild(submit);
    buttonSection.appendChild(cancel);


    
    //when pressing a new page, stores the previous .box and creates a blank sheet
    //when switching pages, we go to the array index that it corresponds to...
  

    //Cancel event listener
    cancel.addEventListener('click', function() {
        submit.remove();
        cancel.remove();
        pageName.remove();
        newPageButton.style.display = "block";
    })


    //submit event listener
  let firstRun = true;

 
    submit.addEventListener('click', function() {


        //Displays all the lists we have (left side)
        const pageNameToCreate = pageName.value;
        submit.remove();
        cancel.remove();
        pageName.remove();
        newPageButton.style.display = "block"; 
        //add a section that shows the list of displays later... adds the pageNameToCreate to display.., clickable i guess


        const lists = document.querySelector('.textContent');
        const page = document.createElement('p');
        page.textContent = pageNameToCreate;
        page.setAttribute('id', tracker);
        tracker++;
        lists.appendChild(page);
    


        //when submit, we store into array......... and then create blank doc,,,, please work

        pages[curr] = document.querySelector('#content');

        
        while (allItems.firstChild) {
            allItems.removeChild(allItems.firstChild);
        }
        const temp = document.createElement('div');
        temp.setAttribute('id', 'content');
        allItems.appendChild(temp);
        curr++;

        
        
            // page.addEventListener('click', function() {
            //     pages.push(document.querySelector('#content'));
            //     curr = page.id;
            //     while (allItems.firstChild) {
            //         allItems.removeChild(allItems.firstChild);
            //     }
            //     allItems.appendChild(pages[curr]); 
            // })
        
            const thePages = document.querySelectorAll('p');
            thePages.forEach(element => {
                element.addEventListener('click', function() {
                    pages.push(document.querySelector('#content'));
                    curr = element.id;
                    while (allItems.firstChild) {
                        allItems.removeChild(allItems.firstChild);
                    }
                    allItems.appendChild(pages[curr]); 
                })
            })
    });


}






    


const homePage = document.querySelector('.home');
homePage.setAttribute('id', '0');
homePage.addEventListener('click', function() {
   console.log(homePage.id);


 
})

export {addPage};