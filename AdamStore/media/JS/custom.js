let mainPro = document.getElementById("showList");
function soProduct(pic, name, des, price) {
  mainPro.insertAdjacentHTML(
    "beforeEnd",
    `
    <div class="productItem">
      <div class="productPic"><img src="./media/img/${pic}" alt=""></div>
      <div class="productTit">
        <b>${name}</b> <br>
      </div>
      <div class="productPrice">Giá: ${price}</div>
      <button class="addPro" onclick="duavaogiohang()">Add to cart</button>
     </div>
    `
  );
}
mainPro.innerHTML = "";
for (let i = 0; i < product.length; i++) {
  soProduct(product[i].pic, product[i].name, product[i].des, product[i].price);
}

let itemNew = document.getElementById("new");

function soProductNew(pic, name, des, price) {
  itemNew.insertAdjacentHTML(
    "beforeEnd",
    `
    <div class="productItem">
      <div class="productPic"><img src="./media/img/${pic}" alt=""></div>
      <div class="productTit">
        <b>${name}</b> <br>
        <span>Giới thiệu: ${des}</span>
      </div>
      <div class="productPrice">Giá: ${price}</div>
      <button class="addPro" onclick="duavaogiohang()">Add to cart</button>
     </div>
    `
  );
}
itemNew.innerHTML = "";

soProductNew(product[0].pic, product[0].name, product[0].des, product[0].price);
soProductNew(product[3].pic, product[3].name, product[3].des, product[3].price);
soProductNew(product[5].pic, product[5].name, product[5].des, product[5].price);

let itemTrend = document.getElementById("trend");

function soProductTrend(pic, name, des, price) {
  itemTrend.insertAdjacentHTML(
    "beforeEnd",
    `
        <div class="productItem">
          <div class="productPic"><img src="./media/img/${pic}" alt=""></div>
          <div class="productTit">
            <b>${name}</b> <br>
            <span>Giới thiệu: ${des}</span>
          </div>
          <div class="productPrice">Giá: ${price}</div>
          <button class="addPro" onclick="duavaogiohang()">Add to cart</button>
         </div>
        `
  );
}
itemTrend.innerHTML = "";
soProductTrend(
  product[2].pic,
  product[2].name,
  product[2].des,
  product[2].price
);
soProductTrend(
  product[3].pic,
  product[3].name,
  product[3].des,
  product[3].price
);
soProductTrend(
  product[4].pic,
  product[4].name,
  product[4].des,
  product[4].price
);

let itemCaretory = document.getElementById("caretory");

function soProductCaretory(pic, name, des, price) {
  itemCaretory.insertAdjacentHTML(
    "beforeEnd",
    `
        <div class="productItem">
          <div class="productPic"><img src="./media/img/${pic}" alt=""></div>
          <div class="productTit">
            <b>${name}</b> <br>
            <span>Giới thiệu: ${des}</span>
          </div>
          <div class="productPrice">Giá: ${price}</div>
          <button class="addPro" onclick="duavaogiohang()">Add to cart</button>
         </div>
        `
  );
}
itemCaretory.innerHTML = " ";
soProductCaretory(
  product[1].pic,
  product[1].name,
  product[1].des,
  product[1].price
);
soProductCaretory(
  product[3].pic,
  product[3].name,
  product[3].des,
  product[3].price
);

function changeProductList(type, element) {
  let tabs = document.getElementsByClassName("tab-item");
  for (let x = 0; x < tabs.length; x++) {
    tabs[x].style.background = "orangered";
  }
  element.style.background = "navy";
  document.getElementById(type).style.display = "flex";
  switch (type) {
    case "showList":
      document.getElementById("new").style.display = "none";
      document.getElementById("trend").style.display = "none";
      document.getElementById("caretory").style.display = "none";
      break;
    case "new":
      document.getElementById("trend").style.display = "none";
      document.getElementById("showList").style.display = "none";
      document.getElementById("caretory").style.display = "none";
      break;
    case "trend":
      document.getElementById("new").style.display = "none";
      document.getElementById("showList").style.display = "none";
      document.getElementById("caretory").style.display = "none";
      break;
    case "caretory":
      document.getElementById("new").style.display = "none";
      document.getElementById("showList").style.display = "none";
      document.getElementById("trend").style.display = "none";
      break;
  }
}

function duavaogiohang() {
  alert(`Đưa vào giỏ hàng thành công`)
}