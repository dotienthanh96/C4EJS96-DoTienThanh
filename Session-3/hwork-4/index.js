console.log("Bài 4");

let shop = ["Jeans", "T-Shit", "socks"];

while (true) {
  let b = prompt(
    "Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?"
  );

  if (b == "r") {
    console.log("The current item are :");
    for (let i = 0; i < shop.length; i++) {
      console.log(i + 1 + "." + shop[i]);
    }
  } else if (b == "c") {
    let c = prompt("Enter the name of the new item");
    shop.push(c);
    alert("Done");
  } else if (b == "u") {
    let d = prompt("Enter the position you want to update");
    let e = prompt("Enter the new name");
    shop[d] = e;
    alert("Done");
  } else if (b == "d") {
    let f = prompt("Enter the position you want to delete");
    shop.splice(f, 1);
    alert("Done");
  } else if (b === null) {
    alert("Good bye");
    break;
  } else {
    alert("This command is not  supported");
  }
}
