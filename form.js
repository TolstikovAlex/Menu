const form = document.querySelector(".menu__form");
const ingredientName = document.querySelector(".ingredient__name");
const menuInput = document.querySelector(".menu__input");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const countInput = document.querySelector("#count");
const ingredient = document.querySelector(".ingredient");

function createNewItem() {
  const dish = document.querySelector(".dish");
  const newEl = `
  <div class="ingredient">
  <p class="ingredient__name">${nameInput.value}:</p>
  <span class="ingredient__count">${countInput.value}(гр./шт.)</span>
  <span class="ingredient__price">${
    countInput.value > 50
      ? priceInput.value * (countInput.value / 1000)
      : priceInput.value * countInput.value
  }₴</span>
  </div>
  `;
  const newItem = dish.insertAdjacentHTML("beforeend", newEl);
  return newItem;
}

function createNewDish() {
  const dishes = document.querySelector(".dishes");
  const newEl = `
  <div class="dish">
  <h2 class="dish__title">${menuInput.value}:</h2>
  </div>`;
  const newItem = dishes.insertAdjacentHTML("afterbegin", newEl);
  return newItem;
}

function onMenuInput(e) {
  if (menuInput.value && e.key === 13) {
    alert('ghkjjghkjgkh')
//     createNewDish();
//     nameInput.focus();
//     nameInput.value = "";
  }
}

function onFocusMenuInput(e) {
  menuInput.value = "";
}

function onNameInput(e) {
  if (nameInput.value && e.key === 13) {
    priceInput.focus();
    priceInput.value = "";
  } else if (!nameInput.value && e.key === "Enter") {
    alert("Введіть, будь ласка, інгредієнт.");
  }
}

function onPriceInput(e) {
  const isValidValue = !isNaN(e.target.value) && e.target.value;
  if (isValidValue && e.key === "Enter") {
    countInput.focus();
    countInput.value = "";
  } else if (!isValidValue && e.key === "Enter") {
    alert("Введіть, будь ласка, вартість.");
  }
}

function onCountInput(e) {
  const isValidValue = !isNaN(e.target.value) && e.target.value;
  if (isValidValue && e.key === "Enter") {
    createNewItem();
    nameInput.focus();
    nameInput.value = "";
    priceInput.value = "0";
    countInput.value = "0";
  } else if (!isValidValue && e.key === "Enter") {
    alert("Введіть, будь ласка, кількість.");
  }
  if (countInput.value && e.key == "Enter") {
  }
}

menuInput.addEventListener("blur", onMenuInput);
menuInput.addEventListener("focus", onFocusMenuInput);
nameInput.addEventListener("keydown", onNameInput);
priceInput.addEventListener("keydown", onPriceInput);
countInput.addEventListener("keydown", onCountInput);
