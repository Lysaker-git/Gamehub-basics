const cartForm = document.querySelector("#cart-form");
const cartFields = cartForm.querySelectorAll("input");
const hidden = cartForm.querySelectorAll(".hidden");

cartForm.addEventListener("change", (event) => {
    event.preventDefault();

    let selectedElement = event.target;
    let elementID = selectedElement.id;
    let checkingValue = selectedElement.value;

    if(elementID.includes("purchase_name")) {
        checkString(checkingValue, 3, selectedElement, 0);
    }
    if (elementID.includes("card_information")) {
        checkNumbers(checkingValue, 16, selectedElement, 1);
    }
    if (elementID.includes("expire")) {
        checkNumbers(checkingValue, 2, selectedElement, 2);
    }
    if (elementID.includes("cvc")) {
        checkNumbers(checkingValue, 3, selectedElement, 3);
    }
});

function checkString (string, length, element, int) {
    if (string.length <= length) {
        element.style.border = "2px solid red";
        hidden[int].style.display = "block"
    } else {
        element.style.border = "none";
        hidden[int].style.display = "none"
    };
};

function checkNumbers (value, number, element, int) {
    if (value.length !== number && !isNaN(value)) {
        element.style.border = "2px solid red";
        hidden[int].style.display = "block"
    } else {
        element.style.border = "none";
        hidden[int].style.display = "none"
    };
};