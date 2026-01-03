//ERROR HANDLING:-
// 1. Compile Time error     2. Runtime error
// console.log(1; // -> compile time error

// console.log(x); // -> runtime error (humne x define hi nhi kia to wo error dega when we run)

//-

// TRY-CATCH BLOCK:
try{
    console.log("try blocks starts")
    console.log(x); // isme error h to iske niche ki lines execute nhi hongi...
    console.log("try block ends")
    //a
    //b
    //c // agr upar likhe codes me error ni aaya to catch block ni chalega...
}
catch(err){
    //yaha ye define krte h ki error ke saath kya krna chahte h
    console.log("I AM IN CATCH BLOCK");
    console.log("Your error is: ", err);
}
finally{
    console.log("I will run everytime");
}


//THROW:- used for creating custom error-
// lets create custom error:
try{
    //Reference Error
    console.log(x);
}
catch(err){
    throw new Error("Bhai pehle x declare kro");
}


