let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let inputForm = document.getElementById('input');
let form = document.getElementById("form");
let button = document.getElementById("button");
let buttonText = document.getElementById('buttonText')
let illustration = document.getElementById('illustration');

function myFunction() {
    let myInput = document.getElementById('input').value;
    if(myInput == "") {
        if(!document.getElementById('newDiv')) {
            if (!document.getElementById('newDivError')) {
                let newDiv = document.createElement("div");
                newDiv.id = 'newDiv';
                newDiv.innerHTML = "Whoops! It looks like you forgot to add your email";
                form.append(newDiv);
                newDiv.classList.add('new');
                button.classList.add('newButton');
                buttonText.classList.add('newButtonText');
                inputForm.classList.add('newInput');
                illustration.classList.add('newIllustration');
            }
        }
    } else if (myInput.match(validRegex)) {
        form.innerHTML = 'Thank you!';
    } else if (!document.getElementById("newDivError")) {
        let newDivError = document.createElement("div");
        newDivError.id = 'newDivError';
        newDivError.innerHTML = "Please provide a valid email address";
        form.append(newDivError);
        newDivError.classList.add('new');
        button.classList.add('newButton');
        buttonText.classList.add('newButtonText');
        inputForm.classList.add('newInput');
        illustration.classList.add('newIllustration');
    }
}
 