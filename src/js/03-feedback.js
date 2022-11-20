const inputRef = document.querySelector('.feedback-form');

addEventListener('input', onWritingValue);
const obj = {};
function onWritingValue(e) {
   
   if (e.target.name === 'email') {
   obj.email = e.target.value;
    };
    if (e.target.name === 'message') {
        obj.message = e.target.value;
    }
   
    const storageValue = JSON.stringify(obj);
   
    return localStorage.setItem('feedback-form-state', storageValue );
};

const inputEmail = inputRef.children[0];
const inputMessage = inputRef.children[1];
function listenerForStorage() {
    const getValue = localStorage.getItem('feedback-form-state');
    if (getValue === null) {
        return console.log(getValue) ;
    }
    const itValue = JSON.parse(getValue);
    inputEmail.firstElementChild.textContent = itValue.email;
    inputMessage.firstElementChild.textContent = itValue.message;
};
listenerForStorage();
