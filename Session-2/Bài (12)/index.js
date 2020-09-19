console.log("Bài 12");
function square() {
  let a = prompt("Enter a number of edges");
  for (var i = 1; i <= a; i++) {
    fd(50);
    rt(360 / a);
  }
}
square();
