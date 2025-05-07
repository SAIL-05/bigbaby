// prompt gives room for users to input infomation and assumes anything put in it as a string
// parseInt is used to convert from string to number
//  const age = prompt("enter your age")
// to convert it becomes const age = parseInt(prompt("enter your age"))
// console.log(age)

// let valueOne = parseInt(prompt("Enter your first Number"));
// let valueTwo = parseInt(prompt("Enter your second Number"));
// let ans = valueOne + valueTwo;
// alert(ans)

// const userNumber = parseInt(prompt("Enter a number"))

// if(userNumber > 0){
//     alert (`${userNumber} is a positive number`)
// }   else if(userNumber === 0){
//     alert (`${userNumber} is invalid`)
// }
// else if(isNaN(userNumber) ) {
//     alert(`${userNumber} is not a number`)
// }
// else(userNumber)

// const greaterNumber = parseInt(prompt("Enter a number"))
// const lesserNumber = parseInt(prompt("Enter a number"))

// if(greaterNumber > lesserNumber) {
//     alert(`${greaterNumber} is greater`)
// } else if(greaterNumber < lesserNumber){
//     alert(`${greaterNumber} is lesser`)
// }

// 


const weight = parseFloat(prompt('Enter your weight'))
const height = parseFloat(prompt('Enter your height'))

const BMI = weight/(height*height)

if (BMI <= 18.5){
    alert(`you are underweight ${BMI .toFixed(2)}`)
} else if (BMI <= 24.9){
    alert(`you are healthy`)
} else if(BMI <= 29.9){
    alert(`you are overweight`)
}
else{
    alert(`invalid`)
}


// 18.5 downward is underweight
// 24.9 to 18.5 is healthy
// 25 to 29.9  is overweight

// let number = 45;

// if( number < 0){
//     console.log('This is a positive number')
// }
// else{
//     console.log('This is a negative number')
// }

// const Number = prompt("Enter your number")
// if(Number % 2 == 0){
//     alert('This is an even number')
// }
    
// else{
//     alert('This is an odd number')
// }
