function home() {
    document.location = "index.html";
}
function delay() {
    document.getElementById('wrong').style.display = "block";
    document.getElementById('wrong').innerHTML = "Wrong Credentials, Try again."
}
function pasuser(form) {
    if (input.user.value == "love") {
        if (input.pass.value == "7monthsaryhehe") {
            location = 'seven.html';
            document.getElementById('wrong').style.display = "none";
        }
    }
    if (input.user.value == "admin") {
        if (input.pass.value == "admin") {
            window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
            document.getElementById('wrong').style.display = "none";
        }
        else {
            setTimeout(delay, 2000);
        }
    }
    else {
        setTimeout(delay, 2000);
    }
}
function cnacct() {
    location = "account.html";
}