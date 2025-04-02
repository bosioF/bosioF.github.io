document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();
    let submittedPass = document.getElementById("password1").value;
    let submittedUser = document.getElementById("username1").value;
    let submittedEmail = document.getElementById("email1").value;

    if (submittedUser&&submittedEmail&&submittedPass === "federico"){
        alert("Login riuscito!")
        window.location.href = "https://www.google.com"
    }
    else{
        alert("Login errato!")
    }
});