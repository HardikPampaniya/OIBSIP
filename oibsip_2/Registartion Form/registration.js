var ck_fn = /^[A-Z,a-z,0-9]{3,20}$/;
var ck_ln = /^[A-Z,a-z,0-9]{3,20}$/;
var ck_email = /^[A-Z,a-z,0-9]+@[A-Z,a-z,0-9]+\.[A-Z,a-z,0-9]$/;
var ck_pass = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
var ck_cpass = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
var ck_dob = /^[A-Z,a-z,0-9]{3,20}$/;
var ck_age = /^[A-Z,a-z,0-9]{3,20}$/;


function validate(form) {
    var fn = form.fn.value;
    var ln = form.ln.value;
    var email = form.email.value;
    var pass = form.pass.value;
    var cpass = form.cpass.value;
    var dob = form.dob.value;
    var age = form.age.value;

    var errors = [];

    if (!ck_fn.test(fn)) {
        document.getElementById("msg1").innerHTML = "Please enter proper name";
    }
    if (!ck_ln.test(ln)) {
        document.getElementById("msg2").innerHTML = "Please enter proper name";
    }
    if (!ck_email.test(email)) {
        document.getElementById("msg3").innerHTML = "Please enter valid email";
    }
    if (!ck_pass.test(pass)) {
        document.getElementById("msg4").innerHTML = "Please enter the password of min 6 char";
    }
    if (!ck_cpass.test(cpass)) {
        document.getElementById("msg5").innerHTML = "Please enter same password";
    }
    if (!ck_cpass.test(dob)) {
        document.getElementById("msg6").innerHTML = "Please enter dob";
    }
    if (!ck_cpass.test(age)) {
        document.getElementById("msg7").innerHTML = "Please enter age";
    }

    return false;

}