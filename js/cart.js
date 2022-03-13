const cartForm = document.querySelector("#cart-form");
const cartFields = cartForm.querySelectorAll("input");

cartForm.addEventListener("change", (event) => {
    event.preventDefault();

    let selectedElement = event.target;
    let elementID = selectedElement.id;
    let checkingValue = selectedElement.value;

    if(elementID.includes("purchase_name")) {
        checkString(checkingValue, 3, selectedElement);
    }
    if (elementID.includes("card_information")) {
        checkNumbers(checkingValue, 16, selectedElement);
    }
    if (elementID.includes("expire")) {
        checkNumbers(checkingValue, 2, selectedElement);
    }
    if (elementID.includes("cvc")) {
        checkNumbers(checkingValue, 3, selectedElement);
    }
});

function checkString (string, length, element) {
    if (string.length <= length) {
        element.style.border = "2px solid red";
    } else {
        element.style.border = "none";
    };
};

function checkNumbers (value, number, element) {
    if (value.length !== number && !isNaN(value)) {
        element.style.border = "2px solid red";
    } else {
        element.style.border = "none";
    };
};