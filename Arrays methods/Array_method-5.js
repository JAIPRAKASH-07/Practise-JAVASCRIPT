// Program to check if the number is odd or even using switch case
const enteredNumber = 40;

switch (Number.isInteger(enteredNumber / 2)) {
    case true:
        console.log(enteredNumber.toString() + " is an even number.");
        break;
    case false:
        console.log(enteredNumber.toString() + " is an odd number.");
        break;
}
