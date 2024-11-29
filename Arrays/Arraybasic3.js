// //the elements of the mountains array:

// let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];

// console.log(mountains[0]); // 'Everest'
// console.log(mountains[1]); // 'Fuji'
// console.log(mountains[2]); // 'Nanga Parbat'

// //you assign that value to the element like this:

// let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
// mountains[2] = 'K2';

// console.log(mountains);

// //the length property:

// let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
// console.log(mountains.length); // 3

// //the end of an array, you use the push() method:

// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// seas.push('Red Sea');

// console.log(seas); 

// //the beginning of an array, you use the unshift() method:

// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// seas.unshift('Red Sea');

// console.log(seas);

// //the end of an array, you use the pop() method:

// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// const lastElement = seas.pop();
// console.log(lastElement); 

// //the shift() method:

// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// const firstElement = seas.shift();

// console.log(firstElement);

// you use the indexOf() method:

// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// let index = seas.indexOf('North Sea');

// console.log(index); // 2

// //you use Array.isArray() method:

// console.log(Array.isArray(seas)); // true