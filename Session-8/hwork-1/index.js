console.log("Bài 1");
console.log("1.1");

// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => resolve("Promise is da best"), 5000)
// })
// promise.then(alert);

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Promise is da best")), 5000);
//   });
  
//   promise.catch(alert)

console.log("1.2");
// async function load() {
//     const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
//     const data = await conn.json();
  
//   console.log(data);
//   console.log(data.abilities[0].ability.url)}
//   load();

let promise = new Promise(function(resolve,reject){
    resolve("Promise is da best")
});
console.log(promise)