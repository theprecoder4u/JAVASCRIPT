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

let FirstPromise = new Promise((resolve,reject) =>{
    setTimeout(function sayMyName(){
    console.log("Preetammmm");
    },10000);
});
