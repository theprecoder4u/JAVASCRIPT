// let FirstPromise = new Promise((resolve,reject) =>{
//     console.log("Preetam Patel");
//     resolve(1010);
// });


// let FirstPromise = new Promise((resolve,reject) =>{
//     console.log("Preetam Patel");
//     reject(new Error("Internal Error"));
// });


// setTimeout(function sayMyName(){
//     console.log("Preetammmm");
// },10000);

// let FirstPromise = new Promise((resolve,reject) =>{
//     setTimeout(function sayMyName(){
//     console.log("Preetammmm");
//     },10000);
// });

// let promise1 = new Promise((resolve, reject) =>{
//     let success = true;
//     if(success){
//         resolve(10);
//     }
//     else{
//         reject("Promise Not Fulfilled")
//     }
// })

// //if error aayega to "catch" me jayega

// promise1.then((message) =>{
//     console.log("first msg:- "+ message);
//     return 20;
// }).then((message) =>{
//     console.log("second msg:- "+ message);
//     return 30;
// }).catch((error) =>{
//     console.log(error);
// }).finally((message) =>{
//     console.log("Mai to hamesha chalunga hi chahe error aaye ya na aaye");
// });

let promise1 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, "First");
});
let promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 2000, "second");
});
let promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 5000, "third");
});

Promise.all([promise1, promise2, promise3]).then((values) =>{
    console.log(values);
});