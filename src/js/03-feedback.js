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