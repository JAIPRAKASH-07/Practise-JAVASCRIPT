//Object.assign()
 // Assign Source to Target
            //target <-- src
let person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  let person2 = {
    firstName: "Aravind",
    lastName: "Smith",
    email: "john@gmail.com"
};
 
 Object.assign(person1, person2);
 console.log(person1);

//Object.entries()
const personenty = {
    firstName : "John",
    lastName : "Doe",
    age : 50
  };

//[ [firstName, "John"], [], [] ]
let entrieslist = Object.entries(personenty);
//console.log(entrieslist);

// for (let entry of entrieslist) {
//     console.log(entry);    
//   }

for (let [key, value] of entrieslist) {
   // console.log(key, value);    
}


