const menuInput = document.querySelector(".menu__input");
const menuTitle = document.querySelector(".menu__title");
const dishTitle = document.querySelector(".dish__title");
const recipeItem = document.querySelector(".recipe__name");
const recipeTitle = document.querySelector(".recipe__title");
const ingredientName = document.querySelector("#name");
const price = document.querySelector("#price");
const count = document.querySelector("#count");
const totalPrice = document.querySelector("#total-price");
const recipeCount = document.querySelector(".recipe__count");
const ingredientList = document.querySelector(".ingredients");

function onMenuInput(e) {
  if (e.key === "Enter") {
    dishTitle.textContent = menuInput.value + ":";
    recipeTitle.textContent = menuInput.value + ":";
    menuInput.value = "";
  }
}

function onIngredientName(e) {
  if (e.key === "Enter") {
    recipeItem.textContent = `${ingredientName.value}:`;
    price.focus();
  }
}

function onPriceInput(e) {
  if (e.key === "Enter") {
    if (+parseFloat(count.value) >= 50) {
      totalPrice.value =
        +parseFloat(price.value) * (+parseFloat(count.value) / 1000) + "₴";
    } else {
      totalPrice.value =
        +parseFloat(price.value) * +parseFloat(count.value) + "₴";
    }
    count.focus();
  }
}

function onCountInput(e) {
  if (e.key === "Enter") {
    if (+parseFloat(count.value) >= 50) {
      totalPrice.value =
        +parseFloat(price.value) * (+parseFloat(count.value) / 1000) + "₴";
    } else {
      totalPrice.value =
        +parseFloat(price.value) * +parseFloat(count.value) + "₴";
    }
    recipeCount.textContent = count.value;
  }
}

ingredientName.addEventListener("keydown", onIngredientName);
count.addEventListener("keydown", onCountInput);
price.addEventListener("keydown", onPriceInput);
menuInput.addEventListener("keydown", onMenuInput);
