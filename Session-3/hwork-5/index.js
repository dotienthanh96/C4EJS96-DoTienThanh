console.log("Bài 5");

let a = prompt("Enter a squance of Number,separated by commas(,)");
a = a.split(","); 
let sum = 0;
for (i = 0; i < a.length; i++) {
    sum +=Number(a[i])
} 
alert(`The sum of them is ${sum}`)
console.log(sum);

// tham khảo bài của anh 