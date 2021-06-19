/*
File: app.js
Name: Kateryna Khomenko
ID: 301091332
Date: 2-Jun-2021
*/

(function() {

    function Start() {
        console.log("App Started...");
        let deleteButtons = document.querySelectorAll('.btn-danger')

        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure you want to delete it?")) {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }



    }

    window.addEventListener("load", Start);

})();

//the variables for saving data from Contact me form
let contact_form = document.getElementById('contact_form');
let receiver_email = 'katerinakhomenko93@gmail.com';
let sender_first_name = $('#firstName').value;
let sender_last_name = $('#lastName').value;
let sender_email = $('#senderEmail').value;
let subject = $('#subject').value;
let body_message = $('#massage_text').value;

/*when the "Contact me" form is submitted a user receives a message confirming the submission,
 and then gets redirected to the Home page*/

/*
contact_form.addEventListener("submit", (e) => {
    e.preventDefault();

    window.alert("Thank you for getting in touch with me.\nI will respond to your message as soon as possible.");
    window.location.href = "/home";

})*/