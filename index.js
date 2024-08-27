var popUp = document.querySelector(".subscription-card");
var signUp = document.querySelector(".container");

var inputElement = document.querySelector("input");
var warnLabel = document.querySelector(".warn-label");
var disMissBtn = document.querySelector(".dismiss-btn");

function handleSubmitBtn() {
  var email = inputElement.value;

  if (isValidEmail(email)) {
    if (signUp.classList.contains("display-grid")) {
      signUp.classList.remove("display-grid");
      signUp.classList.add("display-none");
    }

    if (popUp.classList.contains("display-none")) {
      popUp.classList.remove("display-none");
      popUp.classList.add("display-flex");
    }

    inputElement.classList.remove("warn-input");
    warnLabel.classList.remove("display-block");
    warnLabel.classList.add("display-none");
  } else {
    inputElement.classList.add("warn-input");
    warnLabel.classList.remove("display-none");
    warnLabel.classList.add("display-block");
  }
}

function handleDismissBtn() {
  if (popUp.classList.contains("display-flex")) {
    popUp.classList.remove("display-flex");
    popUp.classList.add("display-none");
  }

  if (signUp.classList.contains("display-none")) {
    signUp.classList.remove("display-none");
    signUp.classList.add("display-grid");
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.querySelector("button").addEventListener("click", handleSubmitBtn);
disMissBtn.addEventListener("click", handleDismissBtn);
