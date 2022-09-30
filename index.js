
    const d = new Date();

    d.getDate();
    d.getFullYear();

    var clck = new Date();
    var months = ["January", "February", "March", "April", "May", "June",
                 "July", "August", "September", "October", "November", "December"];
    var hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
                "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
    var mins = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
                "10", "11", "12", "13","14", "15", "16", "17", "18", "19",
                "20", "21", "22", "23", "24","25", "26", "27", "28", "29",
                "30", "31", "32", "33", "34", "35","36", "37", "38", "39",
                "40", "41", "42", "43", "44", "45", "46","47", "48", "49",
                "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
    //KAKAPOYYYYY AAAAAAAA SIGEG TYPE
    var ampm;
    if (clck.getHours() <= 11) {
        var ampm = "AM";
    }
    if (clck.getHours() >= 12) {
        var ampm = "PM";
    }
    var time = hours[clck.getHours()] + ":" + mins[clck.getMinutes()] + " " + ampm;
    let month = months[clck.getMonth()];
    let times = time;

    document.getElementById('clndr').innerHTML = "Date: " + month + " " + d.getDate() + ", " + d.getFullYear() + " - Time: " + time;
    function ok() {
        alert("You have clicked the submit button!");
    }
    function res() {
        alert("You have clicked the cancel button!");
    }
