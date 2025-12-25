//OBJECT CLONING :-
// -> Spread Operator (...)
let src = {
    age: 12,
    wt: 68
};
let dest ={...src}; // (...) <- is spread operator

console.log("src: ", src);
console.log("dest: ", dest);


// -> 