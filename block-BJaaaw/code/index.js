// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = +prompt("enter any no")
if ( num % 2 === 0 ){
    console.log('number is even')
} else if ( num % 2 != 0){
}

let num = +prompt("enter any no")
if ( num % 2 === 0 ){
    console.log('number is even')
} else {
     console.log(`number is odd`)
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

let num1 = +prompt(`enter first number`)
let num2 = +prompt(`enter second number`)
if (num1 > num2){
  alert(`${num1} is max`)
}else {
  alert(`${num2} is max`)
}

let num1 = +prompt(`enter first number`)
let num2 = +prompt(`enter second  number`)
let num3 = +prompt(`enter thrird number`)
if (num1 > num2 && num1 > num3){
  alert(`${num1} is max`)
}else if (num2 > num1 && num2 > num3){
  alert(`${num2} is max`)
}else{
  alert(`${num3} is max`)
}

(num1 > num2 && num1> num3)? alert('num1 is max'):
(num2 > num1 && num2 > num3)? alert("num2 is max"): alert("num3 is max");
// 3. Convert the above code using`?` terniary operator
let num1 = 20
let num2 = 30
num1 > num2  ?
  alert(`${num1} is max`)
  :
  alert(`${num2} is max`)

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

let houseName = prompt(`enter house name`)
if(houseName === `stark`){
  alert(`winter is coming`)
}else if(houseName === `lannister`){
  alert(`A lannister always pays his debt`)
}else{
  alert(`all men must die`)
}

// let houseName = prompt('Enter the house name:');
// if(houseName === 'stark'){
//   alert('Winter is Coming');
// } else if(houseName === 'lannister'){
//   alert('A lannister always pays his debt');
// } else{
//   alert('All men must die');
// }

// let houseName = prompt('Enter the house name:');
// if(houseName === 'stark'){
//   alert('Winter is Coming');
// } else if(houseName === 'lannister'){
//   alert('A lannister always pays his debt');
// } else{
//   alert('All men must die');
// } 



// 5. Convert the above code using`?` terniary operator

let houseName = prompt(`enter house name`)
houseName === 'stark'? alert('Winter is Coming') :
houseName === 'lannister'?alert('A lannister always pays his debt') :
alert(`All men must die`)

// Switch9

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
 let month = +prompt('Enter a month');
  
 switch(month){
   case 1:
     alert("one");
     break;
 
  case 2:
    alert("two");
    break;

  case 3:
    alert("three");
    break;

  case 4:
    alert("four");
    break;

  case 5:
    alert("five");
    break;

  case 6:
    alert("six");
    break;

  case 7:
    alert("seven");
    break;

  case 8:
    alert("eight");
    break;

  case 9:
    alert("nine");
    break;

  case 10:
    alert("ten");
    break;

  case 11:
    alert("eleven");
    break;

  case 12:
    alert("twelve");
    break;
}





//  7.
// - Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amount from salery.Conditions are given below.
//   - `Salary <= 20000` tax is 10 %
//   - `Salary <= 40000` tax is 20 %
//   - `Salary > 40000` tax is 30 %

let salary = +propmt('Enter salary');

if(salary <= 20000){
  alert(`Inhand amount is ${salary- .1*salary}`);
}else if(salary > 20000 && salary <= 40000){
  alert(`Inhand amount is ${salary- .2*salary}`);
}else if(salary > 40000){
  alert(`Inhand amount is ${salary- .3*salary}`);
}

let salary = +prompt(`enter your salary`)

if(salary <= 20000){
alert(`In hand amount ${salary- 0.1*salary}`);
}else if(salary > 20000 && salary <= 40000){
alert(`In hand amount ${salary- 0.2*salary}`);
}else if(salary > 40000){
alert(`In hand amount ${salary- 0.3*salary}`);
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = +prompt(`enter your marks`)

if(marks > 100){
  alert(`Marks can't be greater than 100`)
}else if(marks > 80 && marks < 100){
  alert(`grade A`)
}else if(marks > 50 && marks < 80){
  alert(`grade B`)
}else if(marks > 30 && marks < 50){
  alert(`grade c`)
}else if(marks > 0){
  alert(`grade D`)
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt(`What is the weather like outside?`)

  if(weather === `sunny`){
    alert(`Wear a T-shirt`)
  }else if( weather === `rainy`){
    alert(`Don't forget to take your raincoat`)
  }else if( weather === `hot`){
    alert(`Get a hanky`)
  }else if(weather === `freezing`){
    alert(`Get your sweeter on`)
  }else{
    alert(`Not a valid input`)
  }
