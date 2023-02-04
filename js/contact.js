function validateform() {

    var name = document.forms["formcheck"]["fullName"].value;
    var email = document.forms["formcheck"]["email"].value;
    var radio = document.forms["formcheck"]["gender"].value;
    var message = document.forms["formcheck"]["Comments"].value;


    if (name == "" || email == "" || message == "") {


        alert("Fill up all the fields!");
    }
    else {
        alert("Thanks for the feedback!");
    }
}