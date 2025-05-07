// operators
// 1. arithemetic operator
// a. addition +
let a = 97
let b = 21
const add = a + b;
console.log(add)
//  b. subtraction -
// c. division /
// d. multiplication *
// e. modulus (to check remainder) %

//Subtraction
const sub = a-b;
console.log(sub);
//Division
const div = b/a;
console.log(div);
//Multiply
const mult = a*b;
console.log(mult);

const square = a**b
console.log(square);
//Modulus
const modul = b%a;
console.log(modul);

//Assignment Operators

let guy = 56;
//+=
//-+

//Comparism Operators
const d="pak";
const e="pak";
const f="kim";
const g=25;
const h=88;
const i=24;
const j="24";
//Equals to
console.log(d==e);

//Greater than 
console.log(g>h);
//less than
console.log(g<h);
//Greater than equal to
console.log(g>=i);

//Less than equals to
console.log(g <= i);

//Not Equals To
console.log(g != i);
//Strictly equals to
console.log(i===j);

//logical operator
//Logical OR ||
//Logical NOT !
//Logical AND &
//Admission Detail's

const fee = true;
 const uniform = true;
 const textbooks = true;
 const idCard = false;

 const checkOR=  fee || textbooks || uniform || idCards;
 console.log(checkOR);
 const checkAND= fee && textbooks && uniform && idCard;
 console.log(checkAND);
 const checkAyo= fee && textbooks;
 console.log(checkAyo);
 const checkAyoAgain = (fee && idCard) || (fee && uniform);
 console.log(checkAyoAgain);
 const checkPayment= uniform || textbooks && uniform || idCard;
 console.log(checkPayment);
 console.log("from idcard", !idCard);





 //Unary Operator
 // Increment ++
 // Decrement --
 
 let k = 3;
 k++;
 console.log(k);
 k--;
 console.log(k);
 k++;
 console.log(k);
 k++;
 console.log(k);
 
 //Tenary Operator
 // (contition) ? "" : ""
 
 const tenTest = 76 > 45 ? "Yes This is correct" : "No, That is wrong";
 
 console.log(tenTest);
