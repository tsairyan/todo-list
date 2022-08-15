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
const addPage = (pageName) => { //takes input field.
    
    //submit event listener
 
    
        //Displays all the lists we have (left side)
    const createPage = () => {

     
        const pageNameToCreate = pageName;
   


        const lists = document.querySelector('.textContent');
        const page = document.createElement('p');
        page.textContent = pageNameToCreate;
        page.setAttribute('id', tracker);
        page.classList.add('a');
        tracker++;

       


        //when submit, we store into array......... and then create blank doc,,,, 

        pages[curr] = document.querySelector('#content').outerHTML;
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
            deleteContainer.setAttribute('id', JSON.parse(localStorage.getItem("pageTracker")));

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


                let x = (deleteContainer.id);
                
                let temparr = JSON.parse(localStorage.getItem("uProject"));

                temparr[x] = null;

                localStorage.setItem("uProject", JSON.stringify(temparr));

                deleteContainer.nextElementSibling.remove();
                deleteContainer.remove();
                while (allItems.firstChild) {
                    allItems.removeChild(allItems.firstChild);
                }

                allItems.innerHTML = pages[curr]; 
                
   
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



                    if (!pages.includes(document.querySelector('#content').outerHTML)) {
                        pages.push(document.querySelector('#content').outerHTML);
                    }

                    
                    projectList[curr].style.color = 'white';
                    projectList[curr].style.fontWeight = 'normal';

                    curr = element.id;

                    let p = curr;
                    localStorage.setItem("pageC", p);

                    projectList[curr].style.color = 'rgb(179, 0, 255)';
                    projectList[curr].style.fontWeight = '700';

                    while (allItems.firstChild) {
                        allItems.removeChild(allItems.firstChild);
                    }
                    allItems.innerHTML = pages[curr];




                    
                });

              //deleting, curr -1 turns purple, adding, 
            

            })
           
        
            let p = localStorage.getItem("pageC");
            p++;
            localStorage.setItem("pageC", p);

    }
    return {pageName, createPage};
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