let inputs = document.querySelectorAll("input"),
  submitBtn = document.querySelector("button"),
  label;

inputs.forEach(input => {
  input.onfocus = handleFocus;
  input.onblur = handleBlur;
});

submitBtn.onclick = validation;

function handleFocus() {
  label = this.previousElementSibling;
  label.classList.add("labelUp");
}

function handleBlur() {
  if (!this.value) label.classList.remove("labelUp");
}

function validation() {
  inputs.forEach(input => {
    let validationPara = input.parentElement.nextElementSibling;
    if (input.value === "") {
      validationPara.classList.add("showBlock");
      validationPara.children[0].classList.add("showInline");
    } else {
      validationPara.classList.remove("showBlock");
      validationPara.children[0].classList.remove("showInline");
    }
  });

  //-----Check email-----
  let email = document.querySelector("#email");
  if (email.value !== "") {
    let pattern = String.raw`^[a-zA-z]+([\w-.]*[a-zA-Z0-9]+)*@([a-z]+\.)+[a-z]+$`,
      re = new RegExp(pattern),
      validationPara = email.parentElement.nextElementSibling;

    if (!re.test(email.value)) {
      validationPara.classList.add("showBlock");
      validationPara.children[1].classList.add("showInline");
    } else {
      validationPara.classList.remove("showBlock");
      validationPara.children[1].classList.remove("showInline");
    }
  }

  //-----Check password-----
  let password = document.querySelector("#password");
  if (password.value !== "") {
    let pattern = String.raw`(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$%&!^._-])^[\w#@$%&!^.-]{8,}$`,
      re = new RegExp(pattern),
      validationPara = password.parentElement.nextElementSibling;

    if (!re.test(password.value)) {
      validationPara.classList.add("showBlock");
      validationPara.children[1].classList.add("showInline");
    } else {
      validationPara.classList.remove("showBlock");
      validationPara.children[1].classList.remove("showInline");

      //-----Check password and confirm are matching-----
      let confirmPassword = document.querySelector("#confirm");
      validationPara = confirmPassword.parentElement.nextElementSibling;
      if (confirmPassword.value !== "")
        if (confirmPassword.value !== password.value) {
          validationPara.classList.add("showBlock");
          validationPara.children[1].classList.add("showInline");
        } else {
          validationPara.classList.remove("showBlock");
          validationPara.children[1].classList.remove("showInline");
        }
    }
  }
}
