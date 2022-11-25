let submit = document.querySelector("#inpSubmit");
let formsInput = document.querySelectorAll("#formsInput");
let myDiv = document.querySelector(".myDiv");
let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".confirmPassword");
let mail=document.querySelector(".mail");

submit.addEventListener("click", function (event) {
  for (let index = 0; index < formsInput.length; index++) {
    if (formsInput[index].value == "") {
      
      myDiv.innerHTML = "you must be fill all fileds";
      myDiv.style.color = "red"
      formsInput[index].style.borderColor = "red";
      event.preventDefault()
    } else {
      if (password.value == confirmPassword.value) {
        localStorage.setItem("email", mail.value);
      }else {
        myDiv.innerHTML = "Not Matching"
        myDiv.style.color = "red";
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
      }
    }

  }
})

function myFunction() {
  myDiv.innerHTML = formsInput[0].value + " " + formsInput[1].value

}