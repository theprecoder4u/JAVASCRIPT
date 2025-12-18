//CLASS
class Human {
    //properties
    age = 13; //public
    #wt = 80; //private
    ht = 180; 

    constructor(a, w, h){
        this.age = a;
        this.wt = w;
        this.ht = h;
    }

    //behaviour
    walking(){
        console.log("I am Walking", this.#wt); //using private varible inside class
    }
    running(){
        console.log("I am running");
    }

    get fetchweight(){
        return this.wt;
    }
    set update(val){
        this.wt = val;

    }
}
//class ke bahar private varible access ni ho sakta, agr krna h to getter and setter banana padega...
let obj = new Human(13,14,15);
console.log(obj.age);
obj.walking();
console.log(obj.fetchweight);

//DEFAULT PARAMETERS:---
function sayName(fname = "Preetam", lname = "Patel"){
    console.log("My Name is:", fname,lname);
}
sayName("Neelam", "Singh"); // agr yaha kuch ni likhoge to default value print hogi, and likh doge to as it is value print hogi...
// --- //
function sayNam(fname = "Preetam", lname = fname.toUpperCase()){
    console.log("My Name is:", fname,lname);
}
sayNam();

// --- //
function sayNa(value = "Preetam"){
    console.log("My Name is -> ", value);
}
sayNa(null); // prints -> null
sayNa(undefined); // prints -> the default value given i.e, Preetam
