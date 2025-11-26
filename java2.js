//data types: 1. Primitive D.T :- Number, String, Boolean, Undefined, Bigint, Null, Symbol

//Number --> stores values from -(2^(53) - 1) to (2^(53) - 1)


let marks = 23.45; // 23.45
marks = " preetam"; // preetam
marks = true; // true
console.log(marks);

undefined
// let marks;
// console.log(marks);
// output - undefined


null
// let marks = null;
//console.log(marks); --> NULL

BigInt
//BigInt > (2^(53) - 1) to store bigger values than this bigint is used.


let mark = 23;
console.log(typeof(mark)); // number

let mark1 = "preetam";
console.log(typeof(mark1)); // string

let mark2 = true;
console.log(typeof(mark2)); // boolean

let mark3 = null;
console.log(typeof(mark3)); // object

let mark4;
console.log(typeof(mark4)); // undefined


// symbol --> It represents a unique and immutable value.
//example:-
//const s1 = Symbol("pree"); 

// how to use :-

const id = Symbol("id");
const user = {
  name: "John",
  [id]: 101
};
console.log(user[id]); // 101

