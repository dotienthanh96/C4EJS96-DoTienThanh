console.log("Bài 5");

let a = [
  {
    name: "Xiaomi portable charger 20000mah",
    brand: "Xiaomi",
    price: 428,
    color: "White",
    category: "Charger",
  },
  {
    name: "VSmart active 1",
    brand: "VSmart",
    price: 5487,
    color: "Black",
    category: "Phone",
  },
  {
    name: "IphoneX",
    brand: "Apple",
    price: 21490,
    color: "Gray",
    category: "Phone",
  },
  {
    name: "Samsung Galaxy A9",
    brand: "Samsung",
    price: 8490,
    color: "Blue",
    category: "Phone",
  },
];

// //5.1
for (let i = 0; i < a.length; i++) {
  console.log("\n-----------------------");
  console.log("Name: " + a[i].name);
  console.log("Price: " + a[i].price);
}
// // 5.2
for (let i = 0; i < a.length; i++) {
console.log(`#${i+1}. ${a[i].name} \n ${a[i].price}`);
}
let b = Number(prompt("Enter product position:"));
console.log(`
    Name: ${a[b - 1].name}
    Brand: ${a[b - 1].brand}
    Price: ${a[b - 1].price}
    Color: ${a[b - 1].color}
    Category: ${a[b - 1].category}
  `);

//5.3

let x = prompt("Enter your category");
if (x == "charger") {
  console.log(`Name: ${a[0].name} \n Price: ${a[0].price}`);
} else if (x == "phone") {
  for (let i = 1; i < a.length; i++) {
    console.log(`Name: ${a[i].name} \n Price: ${a[i].price}`);
  }
}
//5.4

a[0].Providers = "Phukienzezo Dientuccc";
a[1].Providers = "Tgdd ddggb Vhstore";
a[2].Providers = "Tgdd";
a[3].Providers = "Tgdd";

for (let t = 0; t < a.length; t++) {
  console.log(`#${t + 1}.  ${a[t].name}\n${a[t].price}\n${a[t].Providers} `);
}

// 5.5

let d = prompt("Enter provider");
if (d == "phukienzezo" || d == "dientuccc") {
  console.log(
    `Name: ${a[0].name}\n
    Brand: ${a[0].brand}\n
    Price: ${a[0].price}\n
    Color: ${a[0].color}\n
    Category: ${a[0].category}\n
    Providers: ${a[0].Providers}`
  );
} else if (d == "tgdd") {
  for (let i = 1; i < a.length; i++) {
    console.log("\n------------------------");
    console.log(
      ` Name: ${a[i].name}\n
        Brand: ${a[i].brand}\n
        Price: ${a[i].price}\n
        Color: ${a[i].color}\n
        Category: ${a[i].category}\n
        Providers: ${a[i].Providers}`
    );
  }
} else if (d == "ddggb" || d == "vhstore") {
  console.log(
    `Name: ${a[1].name}\n
     Brand: ${a[1].brand}\n
     Price: ${a[1].price}\n
     Color: ${a[1].color}\n
     Category: ${a[1].category}\n
     Providers: ${a[1].Providers}`
  );
}
