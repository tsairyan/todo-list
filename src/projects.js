//stores everything that is on the page??

//create a function that stores all the dom elements into an array as an object????
const pages = [];
const projectList = [];
projectList[0] = document.querySelector('.home');
let curr = 0;
const allItems = document.querySelector('.allItems');
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


    //submit event listener
 
    submit.addEventListener('click', function() {
        //Displays all the lists we have (left side)
        const pageNameToCreate = pageName.value;
        buttonContainer.remove();

        inputContainer.remove();
        newPageButton.style.display = "flex"; 


        const lists = document.querySelector('.textContent');
        const page = document.createElement('p');
        page.textContent = pageNameToCreate;
        page.setAttribute('id', tracker);
        page.classList.add('a');
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

        projectList[curr].style.fontWeight = 'normal';
        projectList[curr].style.color = 'white';
        curr = pages.length; //curr value gets moved to new page index

       

        
        
            // page.addEventListener('click', function() {
            //     pages.push(document.querySelector('#content'));
            //     curr = page.id;
            //     while (allItems.firstChild) {
            //         allItems.removeChild(allItems.firstChild);
            //     }
            //     allItems.appendChild(pages[curr]); 
            // })

            //After clicking on the element it doesnt work
            const deleteContainer = document.createElement('div');
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


            deleteContainer.addEventListener('click', function() {

                if (curr !== deleteContainer.id) {
                    deleteContainer.nextElementSibling.click();
                } 

                curr = deleteContainer.previousElementSibling.id;
                projectList[curr].style.fontWeight = '700';
                projectList[curr].style.color = 'rgb(179, 0, 255)';


                deleteContainer.nextElementSibling.remove();
                deleteContainer.remove();
                while (allItems.firstChild) {
                    allItems.removeChild(allItems.firstChild);
                }
                console.log(pages[curr]);
                allItems.appendChild(pages[curr]); 
                
                
                //i want to remove the element from the dom, but not from the arraylist

                //once u switch tabs, the button event listener switches also, so you're deleting the wrong tab?? 
                //when delete, activate the 'click' on the previous element so it switches?, remove the left side


            }); 
            lists.appendChild(deleteContainer);
            deleteContainer.appendChild(deletePage);  
            lists.appendChild(page);
            projectList.push(page);
            projectList[curr].style.fontWeight = '700';
            projectList[curr].style.color = 'rgb(179, 0, 255)';


            

            // const delBut = document.createElement('button');
            // lists.appendChild(delBut);

            const thePages = document.querySelectorAll('.textContent p');
            thePages.forEach(element => {

                element.addEventListener('click', function() {
                    console.log(thePages);
                    console.log(curr);


                    if (!pages.includes(document.querySelector('#content'))) {
                        pages.push(document.querySelector('#content'));
                    }

                    
                    projectList[curr].style.color = 'white';
                    projectList[curr].style.fontWeight = 'normal';

                    curr = element.id;
                    console.log(curr);

                    projectList[curr].style.color = 'rgb(179, 0, 255)';
                    projectList[curr].style.fontWeight = '700';

                    while (allItems.firstChild) {
                        allItems.removeChild(allItems.firstChild);
                    }
                    allItems.appendChild(pages[curr]); 




                    
                });

              //deleting, curr -1 turns purple, adding, 
            

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

//Create a custom page array containing the 'p' dom elements. adding projects adds to this list, but removing doesn't..