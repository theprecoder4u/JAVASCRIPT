//CLOSURE:-

function outer(){
    let name = "Preetam";
    function inner(){
        let name = "Love"; //ye paas h isiliye ye print hoga
        console.log(name); //Love
    }
    inner();
}
outer(); 