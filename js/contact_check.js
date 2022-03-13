const form = document.querySelector("#form");

const inputs = form.querySelectorAll("input");
const hidden = form.querySelectorAll(".hidden");


form.addEventListener("change", (event) => {
    event.preventDefault();

    let selectedElement = event.target;
    let elementID = selectedElement.id;
    let checkingValue = selectedElement.value;

    if (elementID.includes("name_contact")) {
        passingData(checkingValue, 3, selectedElement);
    };
    if (elementID.includes("your_question")) {
        passingData(checkingValue, 10, selectedElement);
    };
    if (elementID.includes("e_mail_contact")) {
        passingMail(checkingValue, selectedElement);
    };
});

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
function passingMail (value, element) {
    if (validateMail(value)) {
        hidden[1].style.display = "none";
        element.style.border = "none";
    } else {
        hidden[1].style.display = "block";
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
function validateMail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const match = regEx.test(email);
    return match;
};