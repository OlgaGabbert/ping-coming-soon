let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let inputForm = document.getElementById('input');
let form = document.getElementById("form");
let button = document.getElementById("button");
let buttonText = document.getElementById('buttonText')

function myFunction() {
    let myInput = document.getElementById('input').value;
    console.log(myInput);
    if (myInput.match(validRegex)) {
        form.innerHTML = 'Thank you!';
    } else { 
        if (!document.getElementById("newDiv")) {
            let newDiv = document.createElement("div");
        newDiv.id = 'newDiv';
        newDiv.innerHTML = "Please provide a valid email address";
        button.prepend(newDiv);
        newDiv.classList.add('new');
        button.classList.add('newButton');
        buttonText.classList.add('newButtonText');
        inputForm.classList.add('newInput');
        } else {

        }
    }
  }