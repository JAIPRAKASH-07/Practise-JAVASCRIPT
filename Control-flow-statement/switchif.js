// Using switch case inside if statement

let dayName;
var day=7;

switch (day) {
  case 0:
    if (day === 0) {
      dayName = "Sunday";
  }
    break;
  case 1:
     if (day === 1) {
        dayName = "Monday";
      }
    break;
  case 2:
     if (day === 2) {
        dayName = "Tuesday";
      } 
    break;
  case 3:
    if (day === 3) {
        dayName = "Wednesday";
      }
    break;
  case 4:
     if (day === 4) {
        dayName = "Thursday";
      }
    break;
  case 5:
    if (day === 5) {
        dayName = "Friday";
      }
    break;
  case 6:
    if (day === 6) {
        dayName = "Saturday";
      } 
    break;

  default:
    dayName = "Invalid day";
}

console.log("Today is " + dayName );



// function calling inside switch as if statement 

function checkNumber(num) {
  switch (true) {
    case num > 0:
      if (num % 2 === 0) {
        console.log("Positive even number");
      } else {
        console.log("Positive odd number");
      }
      break;
    case num < 0:
      console.log("Negative number");
      break;
    default:
      console.log("Zero");
  }
}

checkNumber(33); // Output: Positive odd number
checkNumber(-12); // Output: Negative number
checkNumber(0); // Output: Zero


// if else statement inside switch case 
var Day=4; 
let message = "";

if ( Day>= 1 && Day <= 5) {
  // Weekday logic
  switch (Day) {
    case 1:
      message = "It's Monday. Get back to work!";
      break;
    case 2:
      message = "It's Tuesday. Keep working!";
      break;
    case 5:
      message = "It's Friday. Weekend is almost here!";
      break;
    default:
      message = "It's a weekday. Keep working!";
  }
} else {
  // Weekend logic
  switch(Day) {
    case 0:
      message = "It's Sunday. Enjoy your day!";
      break;
    case 6:
      message = "It's Saturday. Time to relax!";
      break;
  }
}

console.log(message);


let trafficLight = "green";
let message1 = ""
 
switch (trafficLight) {
    case "red":
        message1 = "Stop immediately.";
        break;
    case "yellow":
        message1 = "Prepare to stop.";
        break;
    case "green":
        message1 = "Proceed or continue driving.";
        break;
    default:
        message1 = "Invalid traffic light color.";
}
 
console.log(message1)
 
// Output: Proceed or continue driving.


// take user input for two numbers
let number1 = 30;
let number2 = 20;
operator="*";
// take user input to select an operator 


switch(operator) {

    case "+":
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case "-":
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case "*":
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case "/":
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log("Invalid operator");
}