function home() {
    document.location = "index.html";
}
function wrong() {
    document.getElementById('wrong').style.display = "block";
    document.getElementById('wrong').innerHTML = "Wrong Credentials, Try again."
}
function pasuser(form) {
    switch(input.user.value){
        case "love":
            if(input.pass.value == "7monthsaryhehe"){
                document.getElementById('wrong').style.display = "none";
                location = '/motmotsurprises/seven.html';
            }
            else if(input.pass.value == "8thmonthlabyu"){
                document.getElementById('wrong').style.display = "none";
                location = '/motmotsurprises/eight.html';
            }
            else{
                setTimeout(wrong, 2000);
            }
            break;
        case "admin":
            if(input.pass.value == "admin"){
                document.getElementById('wrong').style.display = "none";
                window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'
            }
            else{
                setTimeout(wrong, 2000);
            }
            break;
        default:
            setTimeout(wrong, 2000);
    }
}

function cnacct() {
    location = "account.html";
}