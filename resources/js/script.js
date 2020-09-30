const itemsContainer = document.getElementById("items");
import data from "./data.js";

for (let i = 0; i < data.length; i++) {
  let newDiv = document.createElement("div");
  newDiv.className = "item";

  let img = document.createElement("img");
  img.src = data[i].image;
  img.width = 300;
  img.height = 300;

  let description = document.createElement("p");
  description.innerText = data[i].desc;

  let price = document.createElement("p");
  price.innerText = data[i].price;

  let button = document.createElement("button");
  button.id = data[i].name;

  button.dataset.price = data[i].price;
  button.innerHTML = "Add To Cart";

  newDiv.appendChild(img);
  newDiv.appendChild(description);
  newDiv.appendChild(price);
  newDiv.appendChild(button);
  itemsContainer.appendChild(newDiv);
}

// ----------------------------------------------- Shopping Cart Portion ------------------------------------------- //

const cart = [];

function addItem(name, price) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      cart[i].qty += 1;
      return;
    }
  }

  const item = { name: name, price: price, qty: 1 };
  cart.push(item);
}

function qtyCount() {
  let qty = 0;
  for (let i = 0; i < cart.length; i++) {
    qty += cart[i].qty;
  }
  return qty;
}

function showItem() {
  console.log(`You have ${qtyCount()} items in your cart.`);
  for (let i = 0; i < cart.length; i++) {
    console.log(` -${cart[i].name} $${cart[i].price} x ${cart[i].qty}`);
  }
  console.log(`Total in cart: $${displayTotal()}`);
}

function displayTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].qty;
  }
  return total;
}

// -------------------------------------- button function section ------------------------------------------- //

function removeItem(name, qty = 0) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      if (cart[i].qty > 0) {
        cart[i].qty -= qty;
      }

      if (cart[i].qty < 1 || qty === 0) {
        cart.splice(i, 1);
      }
    }
  }
}

addItem("apple", 0.99);
addItem("orange", 1.25);
addItem("carrot", 1.0);
addItem("carrot", 1.0);
addItem("carrot", 1.0);
addItem("juice", 5.0);
showItem();
removeItem("carrot", 2);
removeItem("juice");
showItem();
