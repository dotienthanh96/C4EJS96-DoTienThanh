async function load() {
  const conn = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
  const data = await conn.json();

console.log(data);
console.log(data.abilities[0].ability.url)}
load();

