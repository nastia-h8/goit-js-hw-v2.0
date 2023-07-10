// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і 
// натискає кнопку Створити, після чого рендериться колекція. 
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const input = document.querySelector('#controls input')
const createBtn = document.querySelector('[data-create]')
const destroyBtn = document.querySelector('[data-destroy]')
const boxContainer = document.querySelector('#boxes')

// createBtn.addEventListener('click', onCreateBoxesBtnClick)
// destroyBtn.addEventListener('click', reset)

// function onCreateBoxesBtnClick() {
//   createBoxes(input.value)
// }

// function createBoxes(amount) {
//   reset();

//   let initialSize = 30;
//   const step = 10;
//   let boxes = [];

//   for (let i = 1; i <= amount; i += 1) {
//     const box = document.createElement('div');
//     box.style.width = initialSize + 'px';
//     box.style.height = initialSize + 'px';
//     box.style.backgroundColor = getRandomHexColor();

//     initialSize += step;
  
//     boxes.push(box)
//   }

//   boxContainer.append(...boxes)
// }

// function reset() {
//   boxContainer.innerHTML = '';
//   input.value = '';
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


input.addEventListener('input', onInputClick)
createBtn.addEventListener('click', () => createBoxes(onInputClick()))
destroyBtn.addEventListener('click', reset)

function onInputClick(e) {
  return Number(input.value);
}


function createBoxes(amount) {
  reset()
  console.log('amount', amount);

  let initialSize = 30;
  const step = 10;
  let boxes = [];

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = initialSize + 'px';
    box.style.height = initialSize + 'px';
    box.style.backgroundColor = getRandomHexColor();

    initialSize += step;
  
    boxes.push(box)
  }

  boxContainer.append(...boxes)
}

function reset() {
  boxContainer.innerHTML = '';
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
