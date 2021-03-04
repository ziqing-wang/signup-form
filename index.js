function signUp(e) {
    e.preventDefault();
    isValid();
}

function isValid() {
    const firstName = $("#first-name");
    const lastName = $("#last-name");
    const email = $("#email");
    const pwd = $("#pwd");

    const user = {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    }

    //check if the first name is empty
    if (firstName.val() === "") {
        firstName.css("border-color", "hsl(0, 100%, 74%)");
        $(".first-name .error-icon").show();
        $(".first-name .error-text").show();
    } else {
        firstName.css("border-color", "hsl(246, 25%, 77%)");
        $(".first-name .error-icon").hide();
        $(".first-name .error-text").hide();
        user.firstname = firstName.val();
    }
    //check if the last name is empty
    if (lastName.val() === "") {
        lastName.css("border-color", "hsl(0, 100%, 74%)");
        $(".last-name .error-icon").show();
        $(".last-name .error-text").show();
    } else {
        lastName.css("border-color", "hsl(246, 25%, 77%)");
        $(".last-name .error-icon").hide();
        $(".last-name .error-text").hide();

        user.lastname = lastName.val();
    }
    //check the email address
    if (email.val() === "") {
        email.css("border-color", "hsl(0, 100%, 74%)");
        $(".email .error-icon").show();
        $(".empty-email").show();
        $(".error-text.invalid-email").hide();

    } else if (!validateEmail(email.val())) {
        email.css("border-color", "hsl(0, 100%, 74%)");
        $(".email .error-icon").show();
        $(".empty-email").hide();
        $(".error-text.invalid-email").show();
    } else {
        email.css("border-color", "hsl(246, 25%, 77%)");
        $(".email .error-icon").hide();
        $(".empty-email").hide();
        $(".error-text.invalid-email").hide();

        user.email = email.val();
    }
    //check if the password is empty
    if (pwd.val() === "") {
        pwd.css("border-color", "hsl(0, 100%, 74%)");
        $(".pwd .error-icon").show();
        $(".pwd .error-text").show();
    } else {
        pwd.css("border-color", "hsl(246, 25%, 77%)");
        $(".pwd .error-icon").hide();
        $(".pwd .error-text").hide();

        user.password = pwd.val();
    }
    console.log(user);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$("#sign-btn").click(signUp);