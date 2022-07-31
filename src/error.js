const errorMsgElement = document.createElement('div');
const addSection = document.querySelector('.add');

const name = document.querySelector('input[name="name"]');
function errorMsg() {
    errorMsgElement.textContent = 'Task Name Cannot Be Left Blank';
    addSection.appendChild(errorMsgElement);
  
}
function hideErrorMsg(boolean) {
    
        addSection.removeChild(addSection.lastChild);
    

}
export {errorMsg, hideErrorMsg};