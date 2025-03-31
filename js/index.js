document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault();
    let submittedPass = document.getElementById("password1").value;
    let correctPass = "federico"
    let submittedUser = document.getElementById("username1").value;
    let correctUser = "federico"
    let submittedEmail = document.getElementById("email1").value;
    let correctEmail = "federico"

    if (submittedPass === correctPass && submittedUser === correctUser && submittedEmail === correctEmail){
        alert("Login riuscito!")
        window.location.href = "https://www.google.com"
    }
    else{
        alert("Login errato!")
        window.location.href = "https://parrot.live"
    }
});