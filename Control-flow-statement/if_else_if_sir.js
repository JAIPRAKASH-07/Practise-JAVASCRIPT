let b = 10 > 1;
let c = true;
let d = true;

//undefined, '', 0, null, false  ==> false

// if(b && c || false && true){
//  if(d && (b && c) || (false && true)){
//      console.log("Wlcome");
//  }

/*
b && c  = true
true || false => true
true && true ==> true

*/


if(d){
  //  console.log("test");
}

let gender = "FeMale"
if(gender == 'Male'){
 //   console.log("Male");
}else{
 //   console.log("FeMale");
}

let marks = 60;
if(marks < 35){
    console.log("Sorry");
}else if(marks => 35 && marks < 50) {
    console.log("Discount");
}else if(marks => 50 && marks < 75) {
    console.log("First class");
}else {
    console.log("Go to Hell");
}

//Scenrios
//HW -> seasons, Election commision conditions, marriege conditions 
//Movies with difrent jonear and language
//

let gender1 = "";
let age = 0;

if (age >= 18 && gender1 == 'female'){
    console.log("Welcome to Matrimorny");
}else if(age >= 21 && gender1 == 'male'){
    console.log("All The best");
}else{
    console.log("Better Luck next time");
}

