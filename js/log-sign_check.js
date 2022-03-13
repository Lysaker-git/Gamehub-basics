const formElement = document.querySelector(".signlog-form");
const hidden = formElement.querySelectorAll(".hidden");
const inputFields = formElement.querySelectorAll("input");
console.log(inputFields)

// trying to keep the nested statements in functions

formElement.addEventListener("change", (event) => {
    let selectedElement = event.target
    let elementID = selectedElement.id
    let counter = 0;
    let checkingValue = selectedElement.value
    if (elementID.includes("name")) {
        passingData(checkingValue, 3, selectedElement);
    };

    if (elementID.includes("password_login")) {
        passingPass(checkingValue, 6, selectedElement);
    }
    if (elementID.includes("e_mail")) {
        passingMail(checkingValue, selectedElement);
    }
    if (elementID.includes("confirm_password") || elementID.includes("password_signup")) {
        const originPass = formElement.querySelector("#password_signup");
        const controlPass = formElement.querySelector("#confirm_password");
        const originValue = originPass.value;
        const controlValue = controlPass.value;

        passingPasswordValues(originValue, controlValue, originPass, controlPass, 10);
    }
})

function passingPasswordValues (pass1, pass2, element1, element2, number) {
    if (pass1 === pass2 && passwordCheck(pass1, number)) {
        hidden[1].style.display = "none";
        element1.style.border = "none";
        hidden[2].style.display = "none";
        element2.style.border = "none";
    } else {
        hidden[1].style.display = "block";
        element1.style.border = "solid red 2px";
        hidden[2].style.display = "block";
        element2.style.border = "solid red 2px";
    }
}

function passingData (value, number, element) {
    if (validateData(value, number)) {
        hidden[0].style.display = "block";
        element.style.border = "solid red 2px";
    }
    else {
        hidden[0].style.display = "none";
        element.style.border = "none";
    }
}

function passingPass (value, number, element) {
    if (passwordCheck(value, number)) {
        hidden[1].style.display = "none";
        element.style.border = "none";

    } else {
        hidden[1].style.display = "block";
        element.style.border = "solid red 2px";
    }
}
function passingMail (value, element) {
    if (validateMail(value)) {
        hidden[3].style.display = "none";
        element.style.border = "none";
    } else {
        hidden[3].style.display = "block";
        element.style.border = "solid red 2px";
    }
}

function validateData(value, chars) {
    if (value.trim().length < chars) {
        return true;
    }
    else {
        return false;
    };
};


function passwordCheck (value, int) {
    const passRegEx = /\S+\d+\S+/;
    const passMatch = passRegEx.test(value);
    if (value.length > int) {
        return passMatch;
    }
    else {
        return false;
    }
}

function validateMail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const match = regEx.test(email);
    return match;
};