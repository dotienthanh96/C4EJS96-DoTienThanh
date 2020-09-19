console.log("A");

for (let a = 0; a < 7; a++) {
  console.log(a);
}

console.log("B");

let b = prompt("Enter a number");
for (let x = 0; x < b; x++) {
  console.log(x);
}

console.log("C");

let c = prompt("Enter a number");
for (let y = 3; y < c; y++) {
  console.log(y);
}

console.log("D");

let d = prompt("Enter n");
let e = prompt("Enter c");
for (let z = e; z < d; z++) {
  console.log(z);
}

console.log("E");

let a1 = parseInt(prompt("Enter n"));
let a2 = parseInt(prompt("Enter c"));
for (let x1 = a2; x1<a1; x1+=3 ) {
  console.log(x1);
}

console.log("F");

let b1 = parseInt(prompt("Enter n"));
let b2 = parseInt(prompt("Enter c"));
let b3 = parseInt(prompt("Enter s"));
for (let t = b2; t < b1; t+=b3) {
  console.log(t);
}
