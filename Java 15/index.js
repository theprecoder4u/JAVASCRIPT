let mydiv = document.querySelector('#mydiv');

// let newElement = document.createElement('span');
// newElement.textContent = "The Preetam"

// mydiv.insertAdjacentElement('beforebegin', newElement);

let parent = document.querySelector('#mydiv');
let child = document.querySelector('#fpara');
parent.removeChild(child);