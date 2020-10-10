async function load() {
    const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
    const data = await conn.json();
  }
 fetchPromise = conn;
fetchPromise.then(connection => {
console.log(data);
const jsonPromise = fetchPromise.json()
console.log(jsonPromise)
})
