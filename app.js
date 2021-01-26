var dob = document.querySelector("#birthday");
var btn = document.querySelector(".check-btn");
var output = document.querySelector(".outputArea");

//Splitting entered date, and generating the date in different formats and putting them into an array.
function generateDate(date) {
    var datearr = date.split("-");
    var year = datearr[0];
    var month = ("00" + datearr[1]).slice(-2);
    var date = ("00" + datearr[2]).slice(-2);
    console.log("Date = " + date);
    console.log("Month = " + month);
    var ymd = year + month + date;
    var dmy = date + month + year;
    var mdy = month + date + year;
    //year in 2 digits
    var yymmdd = year.slice(-2) + month + date;
    var ddmmyy = date + month + year.slice(-2);
    var mmddyy = month + date + year.slice(-2);
    datearr[0] = ymd;
    datearr[1] = dmy;
    datearr[2] = mdy;
    datearr[3] = yymmdd;
    datearr[4] = ddmmyy;
    datearr[5] = mmddyy;
    return datearr;
}
var format = ["YYYY-MM-DD", "DD-MM-YYYY", "MM-DD-YYYY", "YY-MM-DD", "DD-MM-YY", "MM-DD-YY"];

//Checking if the date is palindrome
function checkPalindrome(date) {
    var flag = 0;
    var dateCheck = parseInt(date);
    var d = dateCheck;
    console.log("date - " + date);
    var reverse = "";
    while (dateCheck > 0) {
        var rem = dateCheck % 10
        reverse = reverse * 10 + rem;
        dateCheck = parseInt(dateCheck / 10);
    }
    console.log(reverse);
    if (reverse === d) {
        flag = 1;
        output.innerHTML =
            "Congratulations 🥳, Your birthdate is a Palindrome Birthdate!!";
    } else {
        flag = 0;
    }
    return flag;
}

function clickHandler() {
    var date = dob.value;
    if (dob.value === "") {
        output.innerHTML = "Please enter a date";
    } else {
        var flag = 0;
        // date = dob.toString();
        var dateformats = generateDate(date);

        //loop to check if any one format of date is palindrome using the checkPalindrome function
        for (var i = 0; i < dateformats.length; i++) {
            flag = checkPalindrome(dateformats[i]);
            console.log(flag);
            if (flag === 1) {
                break;
            }
        }

        //Displaying appropiate result depending on the flag value. 1 is date is palindrome, 0 is it isn't
        if (flag === 1) {
            output.innerHTML = "<img src = '/congrats.gif' style='display' >";

            setTimeout(() => output.innerHTML =
                "Congratulations 🥳, Your birthdate is a Palindrome Birthdate!! according to " + format[i] + " format", 1000);


        } else if (flag === 0) {
            output.innerHTML =
                "Oops 😔, Your birthdate is not a Palidrome Birthdate!!";
        }
    }
}
btn.addEventListener('click', clickHandler);