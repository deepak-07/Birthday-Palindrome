alert("lo mai aa gya");
var date = document.querySelector("#birthday").value;
var btn = document.querySelector(".check-btn");
var output = document.querySelector(".outputArea");


var rem = 0;
var reverse = 0;
var number = date;
console.log(date);

function clickHandler() {
    while (number != 0) {

        rem = number % 10;
        reverse = rem * 10 + rem;
        number = number / 10;
    }
    console.log(number);
    output.innerHTML = date;
}
console.log(number);
btn.addEventListener("click", clickHandler);