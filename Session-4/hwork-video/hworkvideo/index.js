// console.log("Bài 1");
// init
let movies = {
  title: "Spider man",
  year: 2016,
  rate: 6.5,
};

// console.log("Bài 2");
// read 2.1
let movies = {
  title: "Spider man",
  year: 2016,
  rate: 6.5,
};
console.log(movies);
console.log(movies.rate + movies.title + movies.year);
console.log(movies["director"]);

// read 2.2
let a = {
    interests: ["LOL","Play game","Sport"]
}
a.interests.push("Eat")
let b = a.interests
console.log(b[0].toUpperCase());
console.log(b[1].toUpperCase());
console.log(b[3].toUpperCase())

// read 2.3
let movies = {
    title: "Spider man",
    year: 2016,
    rate: 6.5,
  }; 
let a = prompt("What you want to know?");
if (a=="title") {alert(movies.title)}
else if (a=="year") {alert(movies.year)}
else if (a=="rate") {alert(movies.rate)}
else {alert(`${a} does not exist in our data`)}


// console.log("Bài 3");
// update 3.1
let movies = {
  title: "Spider man",
  year: 2016,
  rate: 6.5,
};
movies.rate = 8.7;
movies.rate = movies.rate + 0.5;
console.log(movies.rate);

//update 3.2

let movies = {
  title: "Spider man",
  year: 2016,
  rate: 6.5,
};
let a = prompt("What you want to update?");
let b = prompt("What is the update?");
movies[a] = b;
console.log(movies);

// console.log("Bài 4");
// Creat 4.1

let movies = {
  title: "Spider man",
  year: 2016,
  rate: 6.5,
};
let c = prompt("What you want to update?");
if (c=="title") {let d = prompt("Enter the new data"); movies.title = d}
else if (c==null) {alert("Good Bye!")}
else if (c=="year") { let e = prompt("Enter the new data"); movies.year = e}
else if (c=="rate") { let g = prompt("Enter the new data"); movies.rate = g}
else {alert(`'${c}' does not exist in our data, we will add new`);
let f = prompt("Enter the new data"); movies.c=f
} console.log(movies);

// console.log("Bài 5");
// Array and Object
// 5.1
let movies = [
  {
    title: "Người nhện",
    year: 2016,
    rate: 6.5,
  },
  {
    title: "Người sắt",
    year: 2019,
    rate: 7.5,
  },
  {
    title: "Naruto",
    year: 2012,
    rate: 8.5,
  },
];
// 5.2
console.log(movies[0]);
// // 5.3
console.log(movies[2].title);
// 5.4 , 5.5 , 5.6
for (let i = 0; i < movies.length; i++) {
  console.log("\n"+"------------------------");
  console.log(movies[i].title);
  console.log("Rate:" + movies[i].rate);
  console.log("Year:" + movies[i].year);
  movies[i].rate = movies[i].rate + 0.7;
  console.log(movies[i].rate);
}

// Bài 6 . Array of object
//6.1 , 6.2 , 6.3
let movies = {
  title: "Naruto",
  year: 2012,
  rate: 8.5,
  casts: ["Naruto", "Sasuke", "Sakura"],
};
let casts = movies.casts;
casts.push("Minato","Kakashi")
console.log(movies.title);
console.log("Rate: " + movies.rate);
console.log("Year: " + movies.year);
console.log("Casts: " + movies.casts);

// Bài 7 

let a = [
    {
        title: "Naruto",
        year : 2012,
        rate : 8.5,
        casts: ["Naruto", "Sasuke", "Sakura"], 
    },
    {
        title: "Doreamon",
        year : 2010,
        rate : 7.5,
        casts: ["Doremon","Nobita","Xuka"]
    },
    {
        title: "One piece",
        year : 1997,
        rate : 9.0,
        casts: ["Luffy","Zoro","Nami"]
    }
]
for ( let i = 0 ; i < a.length ; i++) {
    console.log("\n"+"---------------------------")
    console.log(a[i].title)
    console.log("Year: "+a[i].year)
    console.log("Rate: "+a[i].rate)
    console.log("Casts: "+a[i].casts)
}

// Bài 8