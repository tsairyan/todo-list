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
        newPageButton.style.display = "flex";
    })


    //submit event listener
  let firstRun = true;

 
    submit.addEventListener('click', function() {
     

        //Displays all the lists we have (left side)
        const pageNameToCreate = pageName.value;
        buttonContainer.remove();

        inputContainer.remove();
        newPageButton.style.display = "flex"; 
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

            const cancelSVG1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            cancelSVG1.setAttribute('height', '20');    
            cancelSVG1.setAttribute('width', '20');
            const newPath3 = document.createElementNS("http://www.w3.org/2000/svg","path"); 
            newPath3.setAttribute('d', "M6.062 15 5 13.938 8.938 10 5 6.062 6.062 5 10 8.938 13.938 5 15 6.062 11.062 10 15 13.938 13.938 15 10 11.062Z");
            cancelSVG1.appendChild(newPath3);


            deletePage.appendChild(cancelSVG1);



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
const homeIcon = document.querySelector('span svg');
homeIcon.addEventListener('click', function() {
    homePage.click();

})
homePage.setAttribute('id', '0');
homePage.addEventListener('click', function() {
//    console.log(homePage.id);


 
})

export {addPage};