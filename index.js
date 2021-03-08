const myForm = document.querySelector("#myForm");

let cardNumber = document.querySelector("#inputCard");
let cvc = document.querySelector("#inputCVC");
let amount = document.querySelector("#inputAmount");
let firstName = document.querySelector("#inputFirstName");
let lastName = document.querySelector("#inputLastName");
let city = document.querySelector("#inputCity");
let state = document.querySelector("#inputState");
let postalCode = document.querySelector("#inputPostalCode");
let message = document.querySelector("#inputMessage");
let alertbox = document.querySelector(".alert");

//let arrayInputs = [cardNumber, cvc, amount, firstName, lastName, city, state, postalCode];

myForm.addEventListener("submit", (e) =>{
  e.preventDefault();
  console.log("preventDefault Activado")

  if(isEmpty(cardNumber) || isEmpty(cvc) || isEmpty(amount) || isEmpty(firstName) || isEmpty(lastName) || isEmpty(city) || isEmpty(postalCode) || state.value === 0){
    alertbox.style.display = "block"

    if(isEmpty(cardNumber)){
      cardNumber.classList.add("alert-danger");
    }else{
      cardNumber.classList.remove("alert-danger");
    }

    if(isEmpty(cvc)){
      cvc.classList.add("alert-danger")
    }else{
      cvc.classList.remove("alert-danger");
    }

    if(isEmpty(amount)){
      amount.classList.add("alert-danger")
    }else{
      amount.classList.remove("alert-danger");
    }

    if(isEmpty(firstName)){
      firstName.classList.add("alert-danger")
    }else{
      firstName.classList.remove("alert-danger");
    }

    if(isEmpty(lastName)){
      lastName.classList.add("alert-danger")
    }else{
      lastName.classList.remove("alert-danger");
    }

    if(isEmpty(city)){
      city.classList.add("alert-danger")
    }else{
      city.classList.remove("alert-danger");
    }

    if(isEmpty(postalCode)){
      postalCode.classList.add("alert-danger")
    }else{
      postalCode.classList.remove("alert-danger");
    }

    if(state.value == 0){
      state.classList.add("alert-danger")
    }else{
      state.classList.remove("alert-danger");
    }

    if(isEmpty(message)){
      message.classList.add("alert-danger")
    }else{
      message.classList.remove("alert-danger");
    }

  }else{
    alertbox.style.display = "none"
    console.log("Form enviado con exito");
  }


});

function isEmpty(input){
  return (input.value === "")? true: false;
}
