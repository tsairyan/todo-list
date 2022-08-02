const errorMsgElement = document.createElement('div');
const addSection = document.querySelector('.add');
const errorContainer = document.querySelector(".errorMsg");
const name = document.querySelector('input[name="name"]');
function errorMsg() {
    errorMsgElement.textContent = 'Task Name Cannot Be Left Blank';
    errorContainer.appendChild(errorMsgElement);
  
}
function hideErrorMsg(boolean) {
    
        errorContainer.removeChild(errorContainer.lastChild);
    

}
export {errorMsg, hideErrorMsg};