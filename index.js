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
let alertbox = document.querySelector("#alertId");
let errorList = document.querySelector("#errorList");
let arrayInputs = [cardNumber, cvc, amount, firstName, lastName, city, postalCode, message];


myForm.addEventListener("submit", (e) =>{
  e.preventDefault();

  // Empty fields
  let flag = false;
  arrayInputs.forEach(elem =>{
    if(isEmpty(elem)){
      flag = true;
      elem.classList.add("alert-danger");
    }else{
      elem.classList.remove("alert-danger");
    }
  });

  if(flag){
    if(!(document.querySelector("#liEmpty"))){
      addErrorItem("liEmpty", "Some fields are missing");
    }
  }else{
    errorList.removeChild(document.querySelector("#liEmpty"));
  }

  // Minimun length
  if(cardNumber.value.length < 15){
    cardNumber.classList.add("alert-danger");
    if(!(document.querySelector("#liLengthCardNumber"))){
      flag = true;
      addErrorItem("liLengthCardNumber", "Minimun card number length is 15 digits.");
    }
  }else if(document.querySelector("#liLengthCardNumber")){
    errorList.removeChild(document.querySelector("#liLengthCardNumber"));
    cardNumber.classList.remove("alert-danger");
  }

  if(cvc.value.length < 3){
    cvc.classList.add("alert-danger");
    if(!(document.querySelector("#liLengthCVC"))){
      flag = true;
      addErrorItem("liLengthCVC", "Minimun CVC length is 3 digits.");
    }
  }else if(document.querySelector("#liLengthCVC")){
    errorList.removeChild(document.querySelector("#liLengthCVC"));
    cvc.classList.remove("alert-danger");
  }

  if(postalCode.value.length < 5){
    postalCode.classList.add("alert-danger");
    if(!(document.querySelector("#liPostalCode"))){
      flag = true;
      addErrorItem("liPostalCode", "Postal Code requires a minimun of 5 digits.");
    }
  }else if(document.querySelector("#liPostalCode")){
    errorList.removeChild(document.querySelector("#liPostalCode"));
    postalCode.classList.remove("alert-danger");
  }

  // Minimun amount aloud
  if(amount.value < 5){
    amount.classList.add("alert-danger");
    if(!(document.querySelector("#liMinAmount"))){
      flag = true;
      addErrorItem("liMinAmount", "Minimun amount is $5.");
    }
  }else if(document.querySelector("#liMinAmount")){
    errorList.removeChild(document.querySelector("#liMinAmount"));
    amount.classList.remove("alert-danger");
  }

  if(state.value === "0"){
    state.classList.add("alert-danger");
    if(!(document.querySelector("#liState"))){
      flag = true;
      addErrorItem("liState", "Must select a state.");
    }
  }else{
    errorList.removeChild(document.querySelector("#liState"));
    state.classList.remove("alert-danger");
  }

  // Text only
  let name= /^[a-zA-Z\s]{2,15}$/;
  if(!(name.test(firstName.value))){
    firstName.classList.add("alert-danger");
    if(!(document.querySelector("#liFirstName"))){
      flag = true;
      addErrorItem("liFirstName", "First name only allows letters.");
    }
  }else if(document.querySelector("#liFirstName")){
    errorList.removeChild(document.querySelector("#liFirstName"));
    firstName.classList.remove("alert-danger");
  }

  if(!(name.test(lastName.value))){
    lastName.classList.add("alert-danger");
    if(!(document.querySelector("#liLastName"))){
      flag = true;
      addErrorItem("liLastName", "Last name only allows letters.");
    }
  }else if(document.querySelector("#liLastName")){
    errorList.removeChild(document.querySelector("#liLastName"));
    lastName.classList.remove("alert-danger");
  }

  // Reseting form and sending values to server.
  if(!flag){
    alertbox.style.display = "none"
    myForm.reset();
    alert("Data sent succefully!");
  }

});

function addErrorItem(id, message){
  let child = document.createElement("li");
  child.id = id;
  child.innerHTML = message;
  errorList.appendChild(child);
  alertbox.style.display = "block";
}

function isEmpty(input){
  return (input.value === "")? true: false;
}

// Clearing the form, once aplied alert doesn't appear under send button, without reload.
document.querySelector("#cancelForm").addEventListener("click", () => {
  arrayInputs.forEach(elem =>{
      elem.classList.remove("alert-danger");
  });
  state.classList.remove("alert-danger");
  alertbox.style.display = "none"
  myForm.reset();
});
