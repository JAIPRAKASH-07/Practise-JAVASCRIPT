console.log("=================Welcome to if-else statement*********************");
//JavaScript if statement
let age = 18;
if (age >= 18) {
  console.log('You can sign up');
}
console.log("=========================================================");
//Nested if statement:It’s possible to use an if statement inside another if statement

let ageA = 16;
let state = 'USA';

if (state == 'USA') {
  if (ageA >= 16) {
    console.log('You can drive.');
  }
}
console.log("=========================================================");

//the && operator to combine the conditions and use an if statements as follows:

let age1 = 16;
let state1 = 'POK';

if (state1 == 'POK' && age1 == 16) {
  console.log('You can drive.');
}
console.log("=========================================================");

//JavaScript if…else statement examples: check if the age is greater than or equal to 18:

let age2 = 18;

if (age2 >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}
console.log("=========================================================");
//the same as above except that the age is 18 instead of 16:

let age3 = 16;

if (age3 >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}

console.log("=========================================================");
//logical operator AND (&&) as the condition in the if block:

let Age = 16;
let country = 'UK';

if (Age >= 16 && country === 'UK') {
  console.log('You can get a driving license.');
} else {
  console.log('You are not eligible to get a driving license.');
}

console.log("=========================================================");
//simple JavaScript if…else…if statement

let month = 6;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);

console.log("=========================================================");
//if…else…if statement to calculate the body mass index


let weight = 70; // kg
let height = 1.72; // meter

// calculate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = 'Overweight';
} else {
  weightStatus = 'Obesity';
}

console.log(weightStatus);
console.log("=========================================================");
//Election commision conditions
var AGE = 100;
if(AGE >= 18) {
 console.log('You can vote in the election');
} else if(AGE >= 15) {
 console.log('You are a teenager and cannot vote');
} else if(AGE >= 10) {
 console.log('You are too young to vote');
} else {
 console.log('You are still a baby');
}
// You are still a baby
console.log("=========================================================");
//marriege conditions 


let gender1 = "male";
let age9 = 21;
let Language = 'Telugu';

if ((age9 >= 18 && gender1 == 'female')||Language >'Telugu'){
    console.log("Welcome to Matrimorny and find the male ");
}else if(age9 >= 21 && gender1 == 'male'){
    console.log("All The best and find to female age ===18");
}else{
    console.log("sorry to find your gender");
}
console.log("=========================================================");
//Movies with difrent jonear and language
let Moviesname = "Atharintiki Daaredi";
let language = 'Telugu';

if (language >= "hindi" && Moviesname == 'RRR'){
    console.log("now RRR in coming in hindi");
}
else if(language >= "Tamil" && Moviesname == 'Jailer '){
    console.log("All The best");
}
else if(language >= "Tamil" && Moviesname == 'Vettaiyan '){
    console.log("All The good");
}else if(language >= "Tamil" && Moviesname =='Thuppakki' ){
    console.log("All The better");
}else if(language >= "Telugu" && Moviesname == 'Atharintiki Daaredi'){
    console.log("All The  most best");
}
else{
    console.log("sorry ");
}
