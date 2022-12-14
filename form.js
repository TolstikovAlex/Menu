const form = document.querySelector(".menu__form");
const ingredientName = document.querySelector(".ingredient__name");
const menuInput = document.querySelector(".menu__input");
const nameInput = document.querySelector("#name");
const priceInput = document.querySelector("#price");
const countInput = document.querySelector("#count");
const ingredient = document.querySelector(".ingredient");
const btn = document.querySelector(".btn");

// function onFormSubmit(e) {
//   alert("jkh");
//   const isValidValue = !isNaN(e.target.value) && e.target.value;
//   if (isValidValue) {
//     createNewItem();
//     nameInput.focus();
//     nameInput.value = "";
//     priceInput.value = "0";
//     countInput.value = "0";
//   } else {
//     alert("Введіть, будь ласка, кількість.");
//     countInput.focus();
//   }
// }

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
  if (menuInput.value) {
    createNewDish();
    nameInput.focus();
    nameInput.value = "";
  } else {
    alert("Введіть, будь ласка, назву.");
    menuInput.focus();
  }
}

function onFocusMenuInput(e) {
  menuInput.value = "";
}

function onNameInput(e) {
  if (nameInput.value) {
    priceInput.value = "";
  } else {
    alert("Введіть, будь ласка, інгредієнт.");
    nameInput.focus();
  }
}

function onPriceInput(e) {
  const isValidValue = !isNaN(e.target.value) && e.target.value;
  if (isValidValue) {
    countInput.focus();
    countInput.value = "";
  } else {
    alert("Введіть, будь ласка, вартість.");
    priceInput.focus();
  }
}

function onCountInput(e) {
  const isValidValue = !isNaN(e.target.value) && e.target.value;
  if (!isValidValue) {
    alert("Введіть, будь ласка, кількість.");
    countInput.focus();
    // createNewItem();
    // nameInput.focus();
    // nameInput.value = "";
    // priceInput.value = "0";
    // countInput.value = "0";
  } 
//   else {
//     alert("Введіть, будь ласка, кількість.");
//     countInput.focus();
//   }
  //   if (countInput.value) {
  //   }
}
function onBtnClick(e) {
  e.preventDefault();
  createNewItem();
  nameInput.focus();
  nameInput.value = "";
  priceInput.value = "0";
  countInput.value = "0";
}

btn.addEventListener("click", onBtnClick);
menuInput.addEventListener("blur", onMenuInput);
menuInput.addEventListener("focus", onFocusMenuInput);
nameInput.addEventListener("blur", onNameInput);
priceInput.addEventListener("blur", onPriceInput);
countInput.addEventListener("blur", onCountInput);
