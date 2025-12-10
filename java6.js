//OBJECTS:-
// let obj = {
//     name: "Preetam",
//     age: 25,
//     weight: 52,
//     greet: function(){
//         console.log("HELLOOOO");
//     }
// };
// console.log(obj)
// obj.greet();
// console.log(typeof(obj));



//ARRAYS:---
//creation of array ---
// let arr = [1,2,3,4,5];
// console.log(arr);


// creation using array constructor ---
// let brr = new Array('preetam', 1, true)
// console.log(brr);


// type of arr and brr;
// console.log(typeof(arr));
// console.log(typeof(brr));

//built-in methods in array:-
//push,pop,shift,unshift,slice,splice,map,filter

//push, pop, shift, unshift:-
// let arr = [1,2,3]
// arr.push(4);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift(); // removes element from left most side(starting side)
// console.log(arr);
// arr.unshift(4); // adds element from left most side(starting side)
// console.log(arr);

//slice:-
// arr.push(10);
// arr.push(20);
// arr.push(30);
// arr.push(40);
// console.log(arr);
// console.log(arr.slice(2,5)); // (itna) part alag krke print kr deta h, excluding the last index element that you gave. -> (1,4) -> so, 1 -> 2 -> 3 print...

//splice:-
// console.log(arr);
// arr.splice(1,2,5); // iska matlab (1,2,5) -> 1th index se do value remove kro and insert kro 5. -> so [1,2,3,10,20,30,40] isme se 2,3 remove hua and 5 add ho gya...
// andar ke brackets ka matlab samjho -> (index, kitni value remove krni h, kya value add krni h)
// console.log(arr);

// arr.splice(1,0,5); // iska matlab (1,0,5) -> 1th index se koi value remove mt kro(means zero) and insert kro 5. -> so [1,5,10,20,30,40] isme se kuch remove nhi hua and 5 add ho gya...
// console.log(arr);

//map:-
// let arr = [10,20,30]
// let ans = arr.map((number) => {
//     return number*number;
// })
// console.log(ans);

//filter:-
//  let arr = [10, 11, 40, 85, 90, 101]
//  let brr = arr.filter((number) => {
//     if(number % 2 ===0)
//         return true;
//     else
//         return false;
//  })
//  console.log(brr); //o/p -> [ 10, 40, 90 ]

//reduce:-
