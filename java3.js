//OPERATORS
// -> arithematic opt
let a = 2;
let b = 3;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a%b);
console.log(a*b);
console.log(a**b);

// -> unary opt
// ++a -> pehle increment then use, or a++ -> pehle use then increment

//Assignment opt
// let a = 5; //so here "=" is assign. opt
// a = a+10; or a+=10;

//COMPARISON OPT(>,<,>=,<=,==,===,!==,==!= and so on...)
console.log(10>50); // false

console.log('5' == 5); //loose equality -> it only checks the number. o/p -> true
console.log('5' === 5); //strict equality -> it also checks the type of number. o/p -> false


//Ternary Opt
// (condition) ? val1 : val2
let age = 23;
let status = (age>18)? 'I can Vote' : 'I cannot Vote'
console.log(status);

//Logical Opt -> AND(&&), OR(||), NOT(!)
// AND -> sab true to true , if ek false to false aayega
// OR -> koi bhi ek true h to return krega true, aur agr sab false to false
// NOT -> !(TRUE) -> FALSE ,, !(FALSE) -> TRUE (true ko false and false ko true banata h)

let ans = (true && true && true);
console.log(ans); // true, like this try all...

//WORKING WITH NON-BOOLEANS IN LOGICAL OPT
// falsey -> undefined, null, 0, false, NaN, ' '
// truthy -> anything which is not falsey

// (false && 'preetam') -> false print hoga
// (false || 5 ) -> truth value print hogi
// (true || 'hello') -> true value print

//BITWISE OPT
