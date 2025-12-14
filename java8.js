//Variable Hoisting:---
// { (var) --> ye sirf "var" keyword me hi possible h... ki humne variable baad me banaya print pehle krwa rhe h
//     console.log(age); // undefined
//     var age = 25;  
// }
//example:- of let, const
console.log(n); // -> line 7 to 9 "temporal dead zone" kehlata h matlab iske bich kuch bhi code likha ho, access ni hoga wo...
--> console.log("Preeta"); //error
let n ="Preetam" //error


//Function Hoisting:---
// {
// sayMyName("Preetam"); 
// function sayMyName(finalName){
//     console.log(finalName);
// }
// }  --> ye sirf isi syntax me chalega, function create krne ke bohot type h na but ye isi me work krega only..


// -> Function Call Stack :-
// -> WHY FUNCTION IS CALLED FIRST CLASS CITIZEN?
