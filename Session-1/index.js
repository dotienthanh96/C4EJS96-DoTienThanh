console.log("Câu1");
console.log("Tên biến chứa các ký tự đặc biệt như space, # , $");
console.log("Tên biến chứa ký tự là số ở đầu");
console.log("Tên biến trùng với keyword");
console.log("Ví dụ: let 1athanh  , let thanh@123 , let char");
console.log("A");
console.log(
  "Trong Js muốn kiểm tra một kiểu dữ liệu biến chúng ta dựa vào dấu quotes"
);
console.log("- Nếu dữ liệu nằm trong dấu quotes thì đó là kiểu dữ liệu string");
console.log(
  "- Nếu dữ liệu là số và không nằm trong dấu quotes thì đó là kiểu dữ liệu number"
);
console.log("Câu2");
console.log("1-b, 2-a, 3-e, 4-c");
console.log("câu3");
{
  let message = "Coding is great";
  console.log(message);
}
console.log("B");
{
  let studentCount = 0;
  console.log(studentCount);
}
console.log("câu4");

console.log("A");

{
  let message;
  message = "Coding is great";
  message = "Coding might not be easy, but still great";
  console.log(message);
}
console.log("B");

{
  let studentCount = 0;
  studentCount = "0";
  studentCount = "16";
  console.log(studentCount);
}
console.log("C");

{
  let message;
  message = "coding might not be easy, but still great";
  console.log(message);
}
console.log("D");

{
  let studentCount = 0;
  studentCount = 16;
  studentCount++;
  console.log(studentCount);
}
console.log("câu5");

alert("have a nice day");
console.log("câu6");

let name = prompt("Hi there, your name please?");
alert(`Xin chào ${name}, chúc bạn may mắn`);
console.log("câu7");

let name1 = prompt("Enter your first name");
name2 = prompt("Enter your last name");
alert(`Xin chào ${name1} ${name2}`);
console.log("câu8");

let a = prompt("Chiều dài cạnh hình vuông");
let dientich = a * a;
alert(`Diện tích hình vuông là ${dientich}`);
console.log("câu9");

let b = prompt("Chiều dài đường kính");
let pi = 3.14;
let s = b * b * pi;
alert(`Diện tích hình tròn là ${s}`);
console.log("câu10");

let c = prompt("Độ (C)");
let f = (9 / 5) * c + 32;
alert(`(C) = ${f}(F)`);
