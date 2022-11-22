const formRef = document.querySelector('.feedback-form');
const inputEmailRef= document.querySelector('.feedback-form input');
const inputMessageRef = document.querySelector('.feedback-form textarea');

formRef.addEventListener('input', onWritingValue);
const objValuesForm = {email:"",message:"",};

function onWritingValue(e) {
   
    objValuesForm[e.target.name] = e.target.value;
    const string = JSON.stringify(objValuesForm);
    localStorage.setItem('feedback-form-state', string);

};

// formRef.addEventListener('beforeunload ', listenerForStorage);

function listenerForStorage() {
    const getValues = localStorage.getItem('feedback-form-state');
    const itValues = JSON.parse(getValues);
    if (getValues) {
        inputEmailRef.value = itValues.email;
        inputMessageRef.value = itValues.message;
    }
   };
listenerForStorage();

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
    e.preventDefault();
    alert(`email: ${objValuesForm.email}
    message: ${objValuesForm.message}`);
    e.currentTarget.reset();
}