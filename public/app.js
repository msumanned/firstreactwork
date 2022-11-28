let popup = document.getElementById("popup");

function login() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;



    //........... for email
    if (email.length < 5 || email.length > 30) {
        document.getElementById('validationemail').innerHTML = "*Please write correct email address.";
    }
    if (email === "") {
        document.getElementById('validationemail').innerHTML = "*This field is empty";
    }

     //........... for password
     if (password.length < 7) {
        document.getElementById('validationpass').innerHTML = "*password should be 8 digits";
    }
    if (password === "") {
        document.getElementById('validationpass').innerHTML = "*This field is empty";
    }


    else {
        document.getElementById('Login').style.display = "flex";

    }
}

function details() {
    document.getElementById('popup_dropdown').style.display = 'flex';
}
