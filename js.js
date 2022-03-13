let formElement = document.querySelector(".signlog-form");



// const hidden = document.querySelectorAll(".hidden");


// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let counter = 0;
//     console.log("hi")
//     if (validateData(contactName.value, 2)) {
//         hidden[0].style.display = "block";
//         contactName.style.border = "solid red 2px";
//     }
//     else {
//         hidden[0].style.display = "none";
//         contactName.style.border = "none";
//         counter += 1
//     };

//     if (validateMail(contactEmail.value)) {
//         hidden[1].style.display = "none";
//         contactEmail.style.border = "none";
//         counter += 1
//     }
//     else {
//         hidden[1].style.display = "block";
//         contactEmail.style.border = "solid red 2px";
//     };

//     if (validateData(contactQuestion.value, 10)) {
//         hidden[2].style.display = "block";
//         contactQuestion.style.border = "solid red 2px";
//     }
//     else {
//         hidden[2].style.display = "none";
//         contactQuestion.style.border = "none";
//         counter += 1
//     };
//     if (counter === 3) {
//         form.reset();
//         alert("Thank you for your questions");
//     }
// });

// function validateData(value, chars) {
//     if (value.trim().length < chars) {
//         return true;
//     }
//     else {
//         return false;
//     };
// };
// function validateMail(email) {
//     const regEx = /\S+@\S+\.\S+/;
//     const match = regEx.test(email);
//     return match;
// };