// //Let us first see what will be the actual output with the bind method that is given by javascript

// let nameObj = {
//     name: "Tony"
// }

// let PrintName = {
//     name: "steve",
//     sayHi: function () {

//         // Here "this" points to nameObj
//         console.log(this.name); 
//     }
// }

// let HiFun = PrintName.sayHi.bind(nameObj);
// HiFun();


//of bind polyfill when parameters are passed to our MyBind method :

let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}

Object.prototype.MyBind = function (bindObj, ...args) {
    bindObj.myMethod = this;
    return function () {
        bindObj.myMethod(...args);
    }
}
let HiFun = PrintName.sayHi.MyBind(nameObj, 42);
HiFun();
