import React from "react";

const SignUp = () => {

    return (
        <div>
            <div>
                <h1>Sign Up</h1>
                <label>ID</label>
                <input type="text" id="username"/>
                <div class="failure-message hide">ID should be longer than 4 characters</div>
                <div class="success-message hide">You can use this ID</div>

                <label>Password</label>
                <input type="password" id="password"/>

                <label>Confirm Password</label>
                <input type="password" id="password-retype"/>
                <div class="mismatch-message hide"></div>

                <button>Sign Up</button>
            </div>
        </div>
    );
};

let elInputUsername = document.querySelector('#username')
let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')

let elInputPassword = document.querySelector("#password")
let elInputPasswordRetype = document.querySelector("#password-retype")
let mismatchMessage = document.querySelector(".mismatch-message")

elInputPasswordRetype.onkeyup = function () {
  if (isMatch(elInputPassword.value, elInputPasswordRetype.value)) {
    mismatchMessage.classList.add('hide');
  } else {
    mismatchMessage.classList.remove('hide')
  }
}

elInputUsername.onkeyup = function () {
  console.log(elInputUsername.value)

if (isMoreThan4Length(elInputUsername.value)) {
  elSuccessMessage.classList.remove('hide')
  elFailureMessage.classList.add('hide')
}
else {
  elSuccessMessage.classList.add('hide')
  elFailureMessage.classList.remove('hide')
}
}

function isMoreThan4Length(value) {
  return value.length >= 4
}

function isMatch (password1, password2) {
  if (password1 === password2) {
    return true;
  } else {
    return false;
  }
}



export default SignUp;