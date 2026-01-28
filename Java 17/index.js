//CODE 1
const t1 = performance.now();
for(let i = 0; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This a Para " + i;
    document.body.appendChild(para);

}
const t2 = performance.now();
console.log("Time taken to run by code 1:", t2-t1);

//CODE 2
const t3 = performance.now();
let mydiv = document.createElement('div');
for(let i = 0; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This a Para " + i;
    mydiv.appendChild(para);

}
document.body.appendChild(mydiv);
const t4 = performance.now();
console.log("Time taken to run by code 2:", t4-t3);

//BEST CODE

let t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i = 0; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This a Para " + i;
    fragment.appendChild(para);

}
document.body.appendChild(fragment);
let t6 = performance.now();

console.log("Time taken to run by best code:", t6-t5);





