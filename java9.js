//Variable Scoping:-

// -> Global Scope - used in anything and anywhere
var age = 15; //  also let, const...


// -> Function Scope - 
function H(){
    var name = "PREET"; // let, const me bhi yhi same hoga
    console.log("HELLO", name);
}
H();
// if we do this - it will show error ||
// console.log(name); //error -> because name is defined under function so it can be used only within function...


// -> Block Scope - var block scope nhi hota means agr maine ek block ke andar var me kuch likha to mai use block ke bahar bhi use kr sakta hu..

{
    var height = 100; // yaha agr let, const hota to error aata
}
console.log(height); 


//