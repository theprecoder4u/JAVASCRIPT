//Event and Event Listener:

// function changeText(){
// let fpara = document.getElementById('fpara');
// fpara.textContent = "Hello Preetam"
// }

// let fpara = document.getElementById('fpara');

// fpara.addEventListener('click', changeText);
// fpara.removeEventListener('click', changeText);


// let anchorElement = document.getElementById('fanchor');
// function anchor(event){
//     event.preventDefault();
//     anchorElement.textContent = "Click Done Bhai"
// }
// anchorElement.addEventListener('click', anchor);

// function alertPara(event){
//         alert("You have Cliked on Para: " + event.target.textContent);
// }
function alertPara(event){
        if(event.target.nodeName === 'SPAN'){
        alert("You have Cliked on Para: " + event.target.textContent);
}
}
// let paras = document.querySelectorAll('p');
// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertPara)
// }

let myDiv = document.getElementById('wrapper');
document.addEventListener('click', alertPara);



