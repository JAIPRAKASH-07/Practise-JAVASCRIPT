// //Creating a promise

// const promise = new Promise((resolve, reject) => {
//   // contain an operation
//   // ...

//   // return the state
//   if (success) {
//     resolve(value);
//   } else {
//     reject(error);
//   }
// });


function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      }, 10000);
    });
  }
  
  function onFulfilled(users) {
    console.log(users);
  }
  
  const promise = getUsers();
  promise.then(onFulfilled);