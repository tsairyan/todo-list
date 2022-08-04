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

    name.style.outline = "1px solid rgb(179, 0, 255)";
    name.style.borderRight = "1px solid rgb(179, 0, 255)";

  
}
function hideErrorMsg(boolean) {
        name.style.outline = "0px";
        name.style.borderRight = "2px solid #121212";
        errorContainer.removeChild(errorContainer.lastChild);


}
export {errorMsg, hideErrorMsg};