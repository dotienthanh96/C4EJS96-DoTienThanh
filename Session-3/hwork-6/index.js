console.log("Bài 6");

let a = prompt("Enter a squance of Number,separated by commas(,)");
a = a.split(",");
min = Number(a[0]);
for (let i = 0; i < a.length; i++) {
  if (Number(min) > Number(a[i])) {
    min = a[i];
  }
}
alert(`The smallest number is ${Number(min)}`);
