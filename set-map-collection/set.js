let set11 = new Set();

set11.add(10);
set11.add(20);

// As this method returns
// the set object hence chaining 
// of add method can be done.
set11.add(30).add(40).add(50);

console.log(set11);


let set1 = new Set("foooodiiiieee");

// deleting e from the set
// it prints true
console.log(set1.delete('e'));

console.log(set1);

// deleting an element which is 
// not in the set
// prints false
console.log(set1.delete('g'));
