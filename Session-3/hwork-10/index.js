console.log("Bài 10");

let a = prompt("Enter a sequence of names");
let b = a.split (","); console.log(a)

let b1 = b.map(y => "<"+y+">");
alert(b+"=>"+b1);


let a = ["tin","toan","ga","co"]
for ( let index in a) { console.log(a[index])}