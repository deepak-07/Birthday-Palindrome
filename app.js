
var dob = document.querySelector("#birthday");
var btn = document.querySelector(".check-btn");
var output = document.querySelector(".outputArea");

//Splitting entered date, and generating the date in different formats and putting them into an array.
function generateDate(date) {
    var datearr = date.split("-");
    var ymd = datearr[0] + datearr[1] + datearr[2];
    var dmy = datearr[2] + datearr[1] + datearr[0];
    var mdy = datearr[1] + datearr[2] + datearr[0];
    datearr[0] = ymd;
    datearr[1] = dmy;
    datearr[2] = mdy;
    return datearr;
}

//Checking if the date is palindrome
function checkPalindrome(date) {
    var flag = 0;
    var dateCheck = parseInt(date);
    var d= dateCheck;
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
            "Congratulations, Your birthdate is a palindrome birthdate!!";
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
            output.innerHTML =
                "Congratulations, Your birthdate is a palindrome birthdate!!";
        } else if (flag === 0) {
            output.innerHTML =
                "Oops :( your birthdate is not a palidrome birthdate.";
        }
    }
}
btn.addEventListener('click', clickHandler);