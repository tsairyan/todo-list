const errorMsgElement = document.createElement('div');
const addSection = document.querySelector('.add');
const errorContainer = document.querySelector(".errorMsg");
const name = document.querySelector('input[name="name"]');
function errorMsg() {
    errorMsgElement.textContent = 'Task Name Cannot Be Left Blank';
    errorMsgElement.style.color = "rgb(179, 0, 255)";
    errorMsgElement.style.marginLeft = "0.5rem";
    errorMsgElement.style.marginTop = "0.5rem";
    errorContainer.appendChild(errorMsgElement);
    name.style.border = "solid 1px rgb(179, 0, 255)";

  
}
function hideErrorMsg(boolean) {
        name.style.border = "0px";
        name.style.borderRight = "2px solid #121212"
        errorContainer.removeChild(errorContainer.lastChild);
    

}
export {errorMsg, hideErrorMsg};