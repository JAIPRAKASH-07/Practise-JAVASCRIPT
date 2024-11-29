
const person2 = {
  firstName: "John",
  lastName: "Doe"
};


Object.freeze(person2)


person2.age = 51;

console.log(person2);
console.log(Object.isFrozen(person2));

