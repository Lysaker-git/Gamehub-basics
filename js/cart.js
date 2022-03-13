const cartForm = document.querySelector("#cart-form");

const cartFields = cartForm.querySelectorAll("input");

cartForm.addEventListener("change", (event) => {
    event.preventDefault();
    let selectedElement = event.target
    let elementID = selectedElement.id
    let counter = 0;
    let checkingValue = selectedElement.value

    if(elementID.includes("purchase_name")) {
        console.log(selectedElement)
        if (checkingValue.length <= 3) {
            selectedElement.style.border = "2px solid red"
        } else {
            selectedElement.style.border = "none"
        }
    }
    if (elementID.includes("card_information")) {
        if (checkingValue.length !== 16) {
            selectedElement.style.border = "2px solid red"
        } else {
            selectedElement.style.border = "none"
        }
    }

    if (elementID.includes("expire")) {
        if (checkingValue.length !== 2 && !isNaN(checkingValue)) {
            selectedElement.style.border = "2px solid red"
        } else {
            selectedElement.style.border = "none"
        }
    }
    if (elementID.includes("cvc")) {
        if (checkingValue.length !== 3 && !isNaN(checkingValue)) {
            selectedElement.style.border = "2px solid red"
        } else {
            selectedElement.style.border = "none"
        }
    }
})