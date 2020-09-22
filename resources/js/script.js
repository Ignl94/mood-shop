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
