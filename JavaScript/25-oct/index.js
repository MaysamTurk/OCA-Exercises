
  
  var Email = document.getElementById("email");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  
  
  //  show the message box
  getMessage = (ID) => {
    document.getElementById("message").style.display = "block";
  }
  
  
  GoOut = (ID) => {
    document.getElementById("message").style.display = "none";
  }
  
  

  
  function myFunction() {
    var checkBox = document.getElementById("checkBox");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  
  // User Name Validation
  
  var userName = document.getElementById("name");
  
  
  
  // When the user starts to type something inside the user Name field
  userName.onkeyup = function () {
  
    var Name = /^[A-Za-z\s]+$/;
    if (Email.value.match(Name)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
  }
  
  
  // Email Validation
  
  var Email = document.getElementById("email");
  
  
  // When the user starts to type something inside the email field
  Email.onkeyup = function () {
  
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (Email.value.match(mailformat)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
  }
  
  
  
 
  
  // Agreement the check box // create account
  function Checked(termsCheckBox) {
    if (termsCheckBox.checked) {
      document.getElementById("creat-account").disabled = false;
      document.getElementById("save-information").disabled = false;
  
    } else {
      document.getElementById("creat-account").disabled = true;
      document.getElementById("save-information").disabled = true;
  
    }
  }
  
  
  // call Clear All function
  function clearLocal() {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.location.reload();
  
  }
  
  
  
  
  // Local storage (user name)
  function LocalStorage() {
    var inputName = document.getElementById("name");
    localStorage.setItem("name", inputName.value);
  
    var inputEmail = document.getElementById("email");
    window.localStorage.setItem("email", inputEmail.value);
  
  
  }
  
  
  
  function SessionStorage() {
    var inputName = document.getElementById("name");
    sessionStorage.setItem("name", inputName.value);
  
    var inputEmail = document.getElementById("email");
    window.sessionStorage.setItem("email", inputEmail.value);
  
  }