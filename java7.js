//FOR-EACH, FOR-IN, FOR-OF:-

//for each ---
// let arr = [10,20,30,40,50];
// arr.forEach((value,index) => {
//     console.log("Number: ", value, "Index: ", index);
// })

//--> Traditional loop kaise kaam krti h ---
// let length = arr.length;
// console.log("Length: ", length);
// for(let index = 0; index<length; index++){
//     console.log(arr[index]);
// }

//for in ---
// let obj = {
//     name: "preetam",
//     age: 18,
//     weight: 52
// }
// for(let key in obj) {
//     console.log(key, ":", obj[key]);
// }

//for of---
// let arr = [10,20,30,40,50];
// for(let value of arr){
//     console.log(value);
// }

// let f = "preet"
// for(let val of f){
//     console.log(val); // see output


//ARRAY WITH FUNCTIONS:-
let arr = [10,20,30,40,50];
// function getSum(arr){
// let length = arr.length;
// let sum = 0;
// for(let index = 0; index<length; index++){
//     sum = sum+arr[index];
// }
// return sum;
// }
// let ans = getSum(arr);
// console.log(ans);
OUTPUT --- 150

//OR ---

// function getSum(arr){
//     let sum = 0;
//     arr.forEach((value) => {
//         sum = sum + value;
//     })
//     return sum;
// }
// let ans = getSum(arr);
// console.log(ans);
OUTPUT --- 150