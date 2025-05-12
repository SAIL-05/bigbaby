// / Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
let age = parseInt(prompt('Enter your age'))
let discount;

if (age >= 60){
    discount = 15
alert (`you are paying a discount of ${discount}`)
}
else if ( age >= 18 && age < 60){
    discount = 20
    alert(`you are paying a discount of ${discount}`)
}
else if ( age >= 12 && age < 18){
    discount = 10
    alert(`you are paying a discount of ${discount}`)
}
else if ( age <= 0){
    alert(`Invalid Number`)
}
else {
    discount = 5
    alert(`you are paying discount of ${discount}`)
}


// Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.

let date = new Date()
let hours = date . getHours()

if (hours >= 1 && hours < 12){
    alert(`Good Morning`)
}
else if (hours === 12){
    alert(`Good Morning`)
}
else if(hours > 12 && hours < 16){
    alert(`Good Afternoon`)
}
else {
    alert (`Good Evening`)
}


// Write a program that determines if a year is a leap year.
let leapYear = parseInt(prompt('Enter leapyear'))
if(leapYear === 366){
    alert(`this is a leap year`)
}
else if (leapYear === 365){
    alert(` this is not a leap year`)
}
else if (leapYear < 365){
    alert(`invalid year`)
}
else{
    alert(`This an incomplete year`)
}

// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0
let money = parseFloat(prompt('How much purchase did you make?'))
let discunt;
let total;

if(money >= 100 ){
    discunt = 20
    total = money - discunt
    alert (`Your total payment is ${total} with a discount of ${discunt}`)
}
else if(money >= 50 ){
    discunt = 10
    total = money - discunt
    alert (`Your total payment is ${total} with a discount of ${discunt}`)
}
else if(money < 0 ){
    discunt = 0
    alert (`Your total payment is ${total} with a discount of ${discunt}`)
}
else{
    alert( `Your total paymment is ${money}`)
}

// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

let magicNum = 97 
let userGuess = parseInt(prompt('Guess the magic Number'))

if (userGuess > magicNum){
    alert(`number is too high, you can do better`)
}
else if(userGuess < magicNum){
    alert(`Try Again, Number is too low`)
}
    else{
        alert(`Congratulations! you got it right`)
    }