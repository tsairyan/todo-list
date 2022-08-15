import taskFactory from "./item";
//stores everything that is on the page??

//create a function that stores all the dom elements into an array as an object????
const pages = [];


let curr = 0;
const allItems = document.querySelector('.allItems');
//when we create a new page, we change curr to what the new index is
//when we click on a diff page to change to, we change curr to that, but before we do that we save the current elements into the pages[curr]
let tracker = 1;

//function that creates pages and assigns each page to an index...
const addPage = (pageName) => { //takes input field.
    // let projectList = JSON.parse(localStorage.getItem("projectList"));
// projectList[0] = document.querySelector('.home');
// localStorage.setItem("projectList", projectList);
    //submit event listener
 
    
        //Displays all the lists we have (left side)
    const createPage = () => {

   
     
        const pageNameToCreate = pageName;
   


        const lists = document.querySelector('.textContent');
        const page = document.createElement('p');
        page.textContent = pageNameToCreate;
        page.setAttribute('id', localStorage.getItem("tryAgain"));
        page.classList.add('a');


       


        //when submit, we store into array......... and then create blank doc,,,, 

        pages[curr] = document.querySelector('#content').outerHTML;
        while (allItems.firstChild) {
            allItems.removeChild(allItems.firstChild);
        }
        const temp = document.createElement('div');
        temp.setAttribute('id', 'content');
        allItems.appendChild(temp);

        // projectList[curr].style.fontWeight = 'normal';
        // projectList[curr].style.color = 'white';
        curr = pages.length; //curr value gets moved to new page index

       
            //After clicking on the element it doesnt work
            const deleteContainer = document.createElement('div');
            deleteContainer.setAttribute('id', localStorage.getItem("tryAgain"));

            const deletePage = document.createElement('button');
            deletePage.setAttribute('id', localStorage.getItem("tryAgain"));
            tracker++;
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
                // projectList[curr].style.fontWeight = '700';
                // projectList[curr].style.color = 'rgb(179, 0, 255)';


                let x = (localStorage.getItem("pageC"));


                let temparr = JSON.parse(localStorage.getItem("uProject"));

                temparr[x - 1] = null;

                localStorage.setItem("uProject", JSON.stringify(temparr));

                deleteContainer.nextElementSibling.remove();
                
                deleteContainer.remove();

                document.querySelector(".home").click();

                


                
                let pageC = curr;

                localStorage.setItem("pageC", pageC);
   
                //i want to remove the element from the dom, but not from the arraylist

                //once u switch tabs, the button event listener switches also, so you're deleting the wrong tab?? 
                //when delete, activate the 'click' on the previous element so it switches?, remove the left side


            }); 
            lists.appendChild(deleteContainer);
            deleteContainer.appendChild(deletePage);  
            lists.appendChild(page);
            // projectList.push(page);
            // projectList[curr].style.fontWeight = '700';
            // projectList[curr].style.color = 'rgb(179, 0, 255)';
            // localStorage.setItem("projectList", JSON.stringify(projectList));

            

            // const delBut = document.createElement('button');
            // lists.appendChild(delBut);


            //we remove everything in dom, then we call the taskFactory thing again with the saved stuff we have in localstorage
            const thePages = document.querySelectorAll('.textContent p');
            thePages.forEach(element => {

                element.addEventListener('click', function() {




                    
                    thePages.forEach(element => {
                        if (element.classList.contains('colorSelected')) {
                            element.classList.remove('colorSelected');
                        }
                    });

                    
                    // projectList[curr].style.color = 'white';
                    // projectList[curr].style.fontWeight = 'normal';

                    curr = element.id;
                    element.classList.add('colorSelected');

                    let p = curr;
                    console.log(p);
                    localStorage.setItem("pageC", p);

                    // projectList[curr].style.color = 'rgb(179, 0, 255)';
                    // projectList[curr].style.fontWeight = '700';

                    while (content.firstChild) {
                        content.removeChild(content.firstChild);
                    }

                    let outerArr = JSON.parse(localStorage.getItem("task"));
                    let innerArray = outerArr[p];

                    let tempTrack = 0;
                if (innerArray != null) {
                    for (let i = 0; i < innerArray.length; i++) {
                        if (innerArray[i] != null) {
                            tempTrack = i;
                            localStorage.setItem("tracker", tempTrack);
                            const test = taskFactory(innerArray[i].name, innerArray[i].desc, innerArray[i].date, innerArray[i].priority);
                            test.addToDom();
                        }
                    }
                    tempTrack++;
                    localStorage.setItem("tracker", tempTrack);
                }



                    
                });

              //deleting, curr -1 turns purple, adding, 
            

            })
           
        
            let p = localStorage.getItem("pageC");
            p++;
            localStorage.setItem("pageC", p);

            thePages.forEach(element => {
                if (element.classList.contains('colorSelected')) {
                    element.classList.remove('colorSelected');
                }
            });
            page.classList.add('colorSelected');

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