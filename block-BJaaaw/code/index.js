// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let num = Number(prompt("Enter any number: "));
if (num % 2 === 0) {
  alert("Even Number");
} else {
  alert("Odd Number");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.

// Using if-else

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
if (num1 > num2) {
  alert(`Max Value is ${num1}`);
} else {
  alert(`Max Value is ${num2}`);
}

// 3. Convert the above code using`?` terniary operator

// Using ternary-operator

let number = Number(prompt("Enter any number: "));
number % 2 === 0 ? alert("Even Number") : alert("Odd Number");

let num3 = Number(prompt("Enter first number: "));
let num4 = Number(prompt("Enter second number: "));
num3 > num4 ? alert(`Max Value is ${num3}`) : alert(`Max Value is ${num4}`);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/

// Using if-else

let houseName = prompt("Enter House Name: ");

if (houseName === `stark`) {
  alert(`Winter is coming!`);
} else if (houseName === `lannister`) {
  alert(`A Lannister always pays his debt.`);
} else {
  alert(`All men must die.`);
}

// 5. Convert the above code using`?` terniary operator

// Using ternary-operator

let house_name = prompt("Enter House Name: ");

house_name === `stark`
  ? alert(`winter is coming`)
  : house_name === `lannister`
  ? alert(`A Lannister always pay his debt.`)
  : alert(`All men must die.`);

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.

// Using switch-case

let month = Number(prompt(`Enter the month number: `));

switch (month) {
  case 1:
    alert(`January has 31 days`);
    break;

  case 2:
    alert(`February has 28-39 days`);
    break;

  case 3:
    alert(`March has 31 days`);
    break;

  case 4:
    alert(`April has 30 days`);
    break;

  case 5:
    alert(`May has 31 days`);
    break;

  case 6:
    alert(`June has 30 days`);
    break;

  case 7:
    alert(`July has 31 days`);
    break;

  case 8:
    alert(`August has 31 days`);
    break;

  case 9:
    alert(`September has 30 days`);
    break;

  case 10:
    alert(`October has 31 days`);
    break;

  case 11:
    alert(`November has 30 days`);
    break;

  case 12:
    alert(`December has 31 days`);
    break;

  default:
    alert(`Enter Valid Month Number`);
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %
*/

// Using switch-case

let salary = Number(prompt(`Enter Your Salary: `));

switch (true) {
  case salary <= 20000:
    alert(`Your in-hand amount is ${salary * 0.9} .`);
    break;

  case 20000 < salary <= 40000:
    alert(`Your in-hand amount is ${salary * 0.8} .`);
    break;

  case salary > 50000:
    alert(`Your in-hand amount is ${salary * 0.7} .`);
    break;
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

// Using if-else

let marks = Number(prompt(`Enter your marks: `));

if (0 <= marks && marks <= 30) {
  alert(`Grade D`);
} else if (30 < marks && marks <= 50) {
  alert(`Grade C`);
} else if (50 < marks && marks <= 80) {
  alert(`Grade B`);
} else if (80 < marks && marks <= 100) {
  alert(`Grade A`);
} else {
  alert(`Marks can't be greater than 100.`);
}

// Using switch-case

let mark = Number(prompt(`Enter your marks: `));

switch (true) {
  case 0 <= mark && mark <= 30:
    alert(`Grade D`);
    break;

  case 30 < mark && mark <= 50:
    alert(`Grade C`);
    break;

  case 50 < mark && mark <= 80:
    alert(`Grade B`);
    break;

  case 80 < mark && mark <= 100:
    alert(`Grade A`);
    break;

  default:
    alert(`Marks can't be greater than 100.`);
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

// Using if-else

let weather = prompt(`What is the weather like outside? `);

if (weather === `sunny`) {
  alert(`Wear a T-shirt`);
} else if (weather === `rainy`) {
  alert(`Don't forget to take your raincoat`);
} else if (weather === `hot`) {
  alert(`Get a hanky`);
} else if (weather === `freezing`) {
  alert(`Get your sweeter on`);
} else {
  alert(`Not a valid input`);
}

//Using switch-case

let weatherOut = prompt(`What is the weather like outside? `);

switch (true) {
  case weatherOut === `sunny`:
    alert(`Wear a T-shirt`);
    break;

  case weatherOut === `rainy`:
    alert(`Don't forget to take your raincoat`);
    break;

  case weatherOut === `hot`:
    alert(`Get a hanky`);
    break;

  case weatherOut === `freezing`:
    alert(`Get your sweeter on`);
    break;

  default:
    alert(`Not a valid input`);
}
