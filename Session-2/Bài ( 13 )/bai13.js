console.log("Bài 13");
function draw() {
  let a = prompt("How many polygons?");
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= i + 2; j++) {
      fd(100);
      rt(360 / (i + 2));
    }
  }
}
draw();
