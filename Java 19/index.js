// async function getData() {
//     setTimeout(function() {
//         console.log("I am inside set timeout block")
//     },3000);
// }
// getData();

async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments');
    let data = await response.json();
    console.log(data);
}
getData();
