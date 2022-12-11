const menuInput = document.querySelector(".menu__input");
const menuTitle = document.querySelector(".menu__title");
const dishTitle = document.querySelector(".dish__title");
const addBtn = document.querySelector(".ingredient__btn");
const ingredientName = document.querySelector("#name");
const price = document.querySelector("#price");
const count = document.querySelector("#count");
const totalPrice = document.querySelector("#total-price");
const ingredientList = document.querySelector(".ingredients");
const ingredients = document.querySelector(".ingredients__list");

//блюдо
function onMenuInput(e) {
  const recipe = document.querySelector(".recipe");
  const recipeTitle = document.querySelector(".recipe__title");
  const wrapper = document.querySelector(".recipe__wrapper");
  const newEl = ` <div class="recipe__wrapper">
  <h3 class="recipe__title"></h3>
            </div>`;
  recipe.insertAdjacentHTML("beforeend", newEl);
  if (menuInput.value && e.key === "Enter") {
    // dishTitle.textContent = `${menuInput.value}:`;
    recipeTitle.textContent = `${menuInput.value}:`;
    // menuInput.value = "";
    ingredientName.focus();
  } else if (!menuInput.value && e.key === "Enter") {
    alert("Введіть, будь ласка, назву страви.");
  }
}

//ингредиент
function onIngredientName(e) {
  if (ingredientName.value && e.key === "Enter") {
    price.focus();
    price.value = "";
  } else if (!ingredientName.value && e.key === "Enter") {
    alert("Введіть, будь ласка, інгредієнт.");
  }
}

//цена
function onPriceInput(e) {
  const isValidPrice = !isNaN(price.value) && price.value;
  if (isValidPrice && e.key === "Enter") {
    count.focus();
    count.value = "";
  } else if (!isValidPrice && e.key === "Enter") {
    alert("Введіть, будь ласка, вартість.");
  }
}

//количество
function onCountInput(e) {
  const newItem = `<div class="recipe__item">
  <p class="recipe__name"></p>
  <span class="recipe__count"></span>
  <span class="recipe__price"></span>
  </div>`;
  const wrapper = document.querySelector(".recipe__wrapper");
  const recipeItem = document.querySelector(".recipe__name");
  const recipeCount = document.querySelector(".recipe__count");
  const recipePrice = document.querySelector(".recipe__price");
  const isValidCount = !isNaN(count.value) && count.value;
  if (isValidCount && e.key === "Enter") {
    if (+parseFloat(count.value) >= 50) {
      totalPrice.value =
        +parseFloat(price.value) * (+parseFloat(count.value) / 1000) + "₴";
    } else {
      totalPrice.value =
        +parseFloat(price.value) * +parseFloat(count.value) + "₴";
    }
    wrapper.insertAdjacentHTML("afterend", newItem);
    recipeItem.textContent = `${ingredientName.value}:`;
    recipeCount.textContent = `${count.value}(гр./шт.)`;
    recipePrice.textContent = totalPrice.value;
    console.log(recipeItem.textContent);
    count.blur();
    ingredientName.value = "";
    price.value = "";
    count.value = "";
    totalPrice.value = "";
    // menuInput.value = "";
    // addBtn.focus();
    ingredientList.classList.add("invisible");
    addBtn.classList.remove("invisible");
  } else if (!isValidCount && e.key === "Enter") {
    alert("Введіть, будь ласка, кількість.");
  }
}

//сабмит
function onBtnClick(e) {
  ingredientList.classList.remove("invisible");
  addBtn.classList.add("invisible");
  ingredientName.focus();
}

//слушатели

count.addEventListener("keydown", onCountInput);
price.addEventListener("keydown", onPriceInput);
ingredientName.addEventListener("keydown", onIngredientName);
menuInput.addEventListener("keydown", onMenuInput);
addBtn.addEventListener("click", onBtnClick);
