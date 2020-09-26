console.log("Bài 8");

// "8.1"

let size = [5, 7, 300, 90, 24, 50, 75];
console.log("Hello, my name is Phuong Nam and here is my sheep size:");

for (let i = 0; i < size.length; i++) {
  console.log(size[i]);
}
// // "8.2"

let max = Math.max.apply(Math, size);
console.log(`Now my biggest sheep has size ${max}, let's have it`);
// "8.3"
size.splice(2, 1);
console.log("after shearing, here is my flock");
console.log(...size);

// "8.4"

console.log("MONTH 1");
console.log("One month has, passed, my sheeps have grown, here are their sizes");
for ( i = 0; i < size.length; i++) {console.log(size[i]+50)};

// "8.5"

let n = 50 ; // cân nặng cừu tăng 1 tháng 
let sum = 0;
for ( let j = 2 ; j <= 4 ; j++) {
    console.log(`MONTH ${j}`); 
    console.log("One month has, passed, my sheeps have grown, here are their sizes");
    for ( i = 0; i < size.length; i++) { 
        sum +=Number(size[i]+n*j);
        console.log(size[i] + n*j)};
    
}
// "8.6"
let t = sum*2;
console.log(`My flock has size in total: ${sum}`);
console.log(`I would get ${sum} * 2$ = ${t} `);


   
 


