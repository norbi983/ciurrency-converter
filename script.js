let formElement = document.querySelector(".js-form");
let inputValue = document.querySelector(".js-form__inputValue");
let exchange = document.querySelector(".js-form__exchange");
let exchangeWant = document.querySelector(".js-form__exchangeWant");
let currencyWant = document.querySelector(".js-form__currencyWant");
let value = document.querySelector(".js-form__value");
let currency = document.querySelector(".js-form__currency");

console.log(inputValue);

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

   let finalResult = inputValue.value / exchangeWant.value;

    currencyWant.innerText = exchangeWant.value;

    value.innerText = finalResult.toFixed(2);

    if (exchangeWant.value === "4.86") {
        currency.innerText = "EURO"
    }
    else if (exchangeWant.value === "4.97") {
        currency.innerText = "USD"
    }
    else {
        currency.innerText = "JPN";
    }

});
