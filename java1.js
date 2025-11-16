//var :-
function solve(){
    var a = 50;
    console.log(a);
}
solve(); // output - 5

//but if 
function solve(){
    var a = 50;
    console.log(a);
}
console.log(a);
solve(); // output - error, because it is function scoped or global scoped but not block scoped.

//let:-
{
    let a = 10;
    console.log(a); // output - 10, it is block scoped
}

//but if:- 
{
    let a = 10;
    
}
console.log(a); // output - error, it runs only within a block of code.

//we can do this in var and let both:
// like let a = 20;
// then a = 30; <-- this is ookk  // don't do this --> let a = 30; this is not acceptable.
// like var a = 20;
// then a = 30; <-- this is ookk --> var a = 30; this is acceptable in var.


// const:-
const a =20;
console.log(a); //output - 20

//but we can't do this in const --> a = 30 or const a = 30 // error