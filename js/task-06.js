// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// - Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// - Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const input = document.querySelector('#validation-input')
const VALID_LENGTH = Number(input.dataset.length);

input.addEventListener('blur', onInputBlur)

function onInputBlur(evt) {
    const inputValue = evt.currentTarget.value.length;

    if (inputValue !== VALID_LENGTH) {
        input.classList.add('invalid')
        input.classList.remove('valid')
    } else {
        input.classList.remove('invalid')
        input.classList.add('valid')
    }
}