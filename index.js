var clck = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[clck.getMonth()];
document.getElementById("dtetm").innerHTML = "Date: " + month + " " + clck.getDate() + " ," + clck.getFullYear();