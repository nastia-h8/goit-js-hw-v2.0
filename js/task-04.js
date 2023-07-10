// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// - Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// - Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// - Оновлюй інтерфейс новим значенням змінної counterValue.

const counterText = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

let counterValue = 0;

decrementBtn.addEventListener('click', clickOnDecrementBtn)
incrementBtn.addEventListener('click', clickOnIncrementBtn)

function clickOnDecrementBtn() {
    counterValue -= 1;
    counterText.textContent = counterValue;

}

function clickOnIncrementBtn() {
    counterValue += 1;
    counterText.textContent = counterValue;
}

