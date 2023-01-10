let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let imputForm = document.getElementById('input');
let myInput = document.getElementById('input').value;
let form = document.getElementById("form");

function myFunction() {
    console.log(myInput);
    if (myInput.match(validRegex)) {
        form.innerHTML = 'Thank you!';
    } else { 
        if (!document.getElementById("newDiv")) {
            let newDiv = document.createElement("div");
        newDiv.id = 'newDiv';
        newDiv.innerHTML = "Please provide a valid email address";
        form.appendChild(newDiv);
        newDiv.classList.add('new');
        imputForm.classList.add('newInput');
        } else {

        }
    }
  }