// alert("lo mai aa gya");
var date = document.querySelector("#dob");




var rem = 0;
var reverse;
var number = date;
while(number!=0){

    rem = number % 10;
    reverse = rem*10 + rem;
    number = number /10;
}
console.log(number);

