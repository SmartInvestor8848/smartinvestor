//import { pass } from "./server";
let user = "admin"
let pass = "admin"

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("uerror");

    if (username == user && password == pass) {
        window.location = "search.html"; // Redirecting to other page.
        return false;
    } else {
        error.style.display = "block";
        return false;
        // var attempt = 5;
        // attempt--; // Decrementing by one.
        // error.value("You have left " + attempt + " attempt;");


        // // Disabling fields after 5 attempts.
        // if (attempt == 0) {
        //     document.getElementById("username").disabled = true;
        //     document.getElementById("password").disabled = true;
        //     document.getElementById("submit").disabled = true;
        //     return false;
        // }
    }
}