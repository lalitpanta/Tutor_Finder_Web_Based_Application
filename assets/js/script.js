// Sign in / Sign up form interaction

let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");

document.addEventListener("DOMContentLoaded", function () {
    let popupButton = document.getElementById("popupbotton");
    let popup = document.getElementById("popup");
    let closeButton = document.getElementById("closeButton");
    let loginForm = document.getElementById("loginForm");

    popupButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let tutor = document.getElementById("tutor");
    let poopup = document.getElementById("poopup");
    let closeButton = document.getElementById("clooseButton");
    let loginForm = document.getElementById("loginform");

    tutor.addEventListener("click", function () {
        poopup.style.display = "block";
    });
// close button ma click garda login/signin page gayab hunchha
 clooseButton.addEventListener("click", function () {
        poopup.style.display = "none";
    });
// window ma click garda pani login/signin page gayab hunchha
    window.addEventListener("click", function (event) {
        if (event.target === poopup) {
            poopup.style.display = "none";
        }
    });
});













   

