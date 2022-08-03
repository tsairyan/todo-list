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
    submit.textContent = "Add";
    const cancel = document.createElement('button');
    cancel.textContent = "Cancel";
    cancel.classList.add('cancelPage');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('inputContainer');
    buttonSection.appendChild(inputContainer);
    inputContainer.appendChild(pageName);


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
        newPageButton.style.display = "block";
    })


    //submit event listener
  let firstRun = true;

 
    submit.addEventListener('click', function() {
     

        //Displays all the lists we have (left side)
        const pageNameToCreate = pageName.value;
        buttonContainer.remove();

        inputContainer.remove();
        newPageButton.style.display = "block"; 
        //add a section that shows the list of displays later... adds the pageNameToCreate to display.., clickable i guess


        const lists = document.querySelector('.textContent');
        const page = document.createElement('p');
        page.textContent = pageNameToCreate;
        page.setAttribute('id', tracker);
        page.classList.add('a' + tracker);
        tracker++;

        // page.addEventListener('click', function() {
        //     if (!pages.includes(document.querySelector('#content'))) {
        //         pages.push(document.querySelector('#content'));
        //     }
                
        //         curr = page.id;
        //         while (allItems.firstChild) {
        //             allItems.removeChild(allItems.firstChild);
        //         }
        //         allItems.appendChild(pages[curr]); 
        // });

       


        //when submit, we store into array......... and then create blank doc,,,, 

        pages[curr] = document.querySelector('#content');
        while (allItems.firstChild) {
            allItems.removeChild(allItems.firstChild);
        }
        const temp = document.createElement('div');
        temp.setAttribute('id', 'content');
        allItems.appendChild(temp);
        curr = pages.length;

        
        
            // page.addEventListener('click', function() {
            //     pages.push(document.querySelector('#content'));
            //     curr = page.id;
            //     while (allItems.firstChild) {
            //         allItems.removeChild(allItems.firstChild);
            //     }
            //     allItems.appendChild(pages[curr]); 
            // })

            //After clicking on the element it doesnt work
            const deletePage = document.createElement('button');
            deletePage.setAttribute('id', page.id);
            deletePage.classList.add('delBut');
            deletePage.textContent = "x";

            deletePage.addEventListener('click', function() {
                if (curr !== deletePage.id) {
                    deletePage.nextElementSibling.click();
                } 

                    curr = deletePage.previousElementSibling.id;
                    // console.log(curr);
                    deletePage.nextElementSibling.remove();
                    deletePage.remove();
                        while (allItems.firstChild) {
                            allItems.removeChild(allItems.firstChild);
                        }
                        console.log(pages[curr]);
                        allItems.appendChild(pages[curr]); 
                        
                


             
                

                
                


                //once u switch tabs, the button event listener switches also, so you're deleting the wrong tab?? 
                //when delete, activate the 'click' on the previous element so it switches?, remove the left side
            
            }); 
            lists.appendChild(deletePage);  
            lists.appendChild(page);
            const thePages = document.querySelectorAll('.textContent p');

            // const delBut = document.createElement('button');
            // lists.appendChild(delBut);


            thePages.forEach(element => {
                element.addEventListener('click', function() {
                    if (!pages.includes(document.querySelector('#content'))) {
                        pages.push(document.querySelector('#content'));
                    }
                    
                    curr = element.id;
                    while (allItems.firstChild) {
                        allItems.removeChild(allItems.firstChild);
                    }
                    allItems.appendChild(pages[curr]); 



                    
                })

              
                
            

            })
           
        
            // const all = document.querySelectorAll('.textContent button');
            // all.forEach(element => {
            //     element.addEventListener('click', function() {
            //         element.previousElementSibling.remove();
            //         element.remove();
        
            //         pages[curr - 1].click();
            //         curr -= 1;
        
                    
            //     });
            // })
         
    });

    // var arr = Array.prototype.slice.call(thePages);

}






    


const homePage = document.querySelector('.home');

homePage.setAttribute('id', '0');
homePage.addEventListener('click', function() {
//    console.log(homePage.id);


 
})

export {addPage};