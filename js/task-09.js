// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль 
// по кліку на button.change - color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor

const widget = document.querySelector('.widget')
const text = widget.firstElementChild;
const btn = widget.lastElementChild;

btn.addEventListener('click', onBgcColorChange)

function onBgcColorChange() {
  const color = getRandomHexColor();
  
  document.body.style.backgroundColor = color;
  text.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}