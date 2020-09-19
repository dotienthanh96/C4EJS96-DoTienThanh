console.log("bài 9");
console.log("A");

let a = 6;
for (let i = 1; i <= a; i++) {
  if (i>(a/2)) {
    console.log("H");
  } else {
    console.log("L");
  }
}

console.log("B");

let b = prompt("Enter the total number L’s and H’s?");
for(let s = 1; s<= b;s++){
    if (s>Math.ceil(b/2)) {console.log("H")}
    else {console.log("L")}
}

console.log("C");

for (let x = 1; x <= 8; x++) {
  if (x % 2 == 0) {
    console.log("0");
  } else {
    console.log("1");
  }
}

console.log("D");

let d = prompt("Enter a number");
for (let y = 1; y <= d; y++) {
  if (y % 2 == 0) {
    console.log("0");
  } else {
    console.log("1");
  }
}
