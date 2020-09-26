// console.log("bài 1");
let movies = ["Charlotte", "Người nhện", "Người sắt"];
console.log(movies);

// console.log("Bài 2");
let movies = ["Charlotte", "Người nhện", "Người sắt"];
let a = prompt("Enter a movies");
movies.push(a);

// console.log("Bài 3");
let movies = ["Charlotte", "Người nhện", "Người sắt"];
let b = prompt("Enter the movie number");
console.log(movies[b]);

// console.log("bài 4");

// console.log("A");
let movies = ["Charlotte", "Người nhện", "Người sắt"];
let c = prompt("Enter a moviesTitle");
movies[0] = c;
console.log(movies);

// console.log("B");
let movies = ["Charlotte", "Người nhện", "Người sắt"];
let c = prompt("Enter a moviesTitle");
let d = prompt("Enter the movies number");
movies[d] = c;
console.log(movies);

// console.log("Bài 5");
// console.log("A");

let movies = ["Charlotte", "Người nhện", "Người sắt"];
let e = prompt("Enter a movies number");
movies.splice(e, 1);
console.log(movies);
// console.log("B");

let movies = ["Charlotte", "Người nhện", "Người sắt"];
let i = prompt("Enter a movies number");
let n = prompt("Enter a movies number");
movies.splice(i, n);
console.log(movies);

// console.log("Bài 6");
// console.log("A");

let movies = ["Charlotte", "Người nhện", "Người sắt", "Doremon"];
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}

// console.log("B");
let movies = ["Charlotte", "Người nhện", "Người sắt", "Doremon"];
for (let i = 0; i < movies.length / 2; i++) {
  console.log(movies[i]);
}

// console.log("C");

let movies = ["Charlotte", "Người nhện", "Người sắt", "Doremon"];

for (let i = 0; i < movies.length; i++) {
  console.log(i + 1 + "." + movies[i]);
}

// console.log("Bài 7");
let movies = ["Charlotte", "Người nhện", "Người sắt", "Doremon"];
for (let i = 0; i < movies.length; i++) {
  movies[i] = movies[i].toLowerCase();
}
console.log(movies);

// console.log("Bài 8");
// console.log("A");

let a = prompt("Register an username");
while (a) {
  if (a.length < 15) {
    alert("Good username");
    break;
  } else {
    alert("Your user name is too long");
    a = prompt("Register an username");
  }
}

// console.log("B");
console.log("Một tuần có bao nhiêu ngày?");
let day = ["1 ngày", "3 ngày", "5 ngày", "7 ngày"];
for (let i = 0; i < day.length; i++) {
  console.log(i + 1 + "." + day[i]);
};

while (true) {
  let b = (prompt("Chọn câu trả lời của bạn"));

  if (b == 4) {
    alert("Hoan hô, bạn đã đúng");
    break;
  } else if (b == 1) {
    alert("Chúc bạn may mắn lần sau");
  } else if (b == 2) {
    alert("Chúc bạn may mắn lần sau");
  } else if (b == 3) {
    alert("Chúc bạn may mắn lần sau");
  }
  else if (b === null) {alert("good bye"); break}
   else {
    alert("Lựa chọn không hợp lệ, câu trả lời phải là 1,2,3,4");
  }
}
