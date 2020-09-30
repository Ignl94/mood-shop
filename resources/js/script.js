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
const all_items_button = Array.from(document.querySelectorAll("button"));
all_items_button.forEach((elt) =>
  elt.addEventListener("click", () => {
    addItem(elt.getAttribute("id"), elt.getAttribute("data-price"));
    showItem();
  })
);
// ---------------------------------------- Item Lists in Footer ----------------------------------------------- //

const itemList = document.getElementById("item-list");
const itemTotal = document.getElementById("item-total");
itemTotal.innerHTML = `<h2>You have 0 items in your cart.</h2>`;
const priceTotal = document.getElementById("price-total");

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
  itemTotal.innerHTML = `<h2>You have ${qtyCount()} items in your cart.</h2> \n`;
  let itemString = "";
  for (let i = 0; i < cart.length; i++) {
    let itemTotal = cart[i].price * cart[i].qty;
    itemString += `<li> -${cart[i].name} $${cart[i].price} x ${
      cart[i].qty
    } = $${itemTotal.toFixed(2)} </li>`;
  }
  itemList.innerHTML = itemString;
  priceTotal.innerHTML = `<h4>Total in cart: $${displayTotal()}</h4> \n`;
}

function displayTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].qty;
  }
  return total.toFixed(2);
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
console.log(all_items_button);
