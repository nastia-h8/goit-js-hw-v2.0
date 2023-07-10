//--------------------------------------- задача на унікальні букви ---------------------------------------//
// function findUniq(arr) {
//   for (let i = 0; i < arr.length; i += 1){
//     const word = arr[i].split('').every(letter => {
//       for (let j = 0; j < arr.length; j += 1){
//         if (i !== j) {
//           if (arr[j].includes(letter)) {
//             return false;
//           } else {
//             return true;
//           }
//         }
//       }
//     })

//     if (word) {
//       return arr[i]
//     }
//   }
// }

// console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'cba']));
//--------------------------------------- мутований масив ---------------------------------------//
// const myProducts = [
//   { id: 'sku1', qty: 1, }, // 15
//   { id: 'sku2', qty: 2, }, // 21
//   { id: 'sku3', qty: 3, }, // 3
//   { id: 'sku1', qty: 6, },
//   { id: 'sku1', qty: 8, },
//   { id: 'sku2', qty: 19, },
//   { id: 'sku4', qty: 1, }, // 1
// ]

// function sortProducts(arr) {
//   for (let i = 0; i < arr.length; i += 1){
//     // console.log('поточний:', arr[i]);
//     for (let j = i + 1; j < arr.length; j += 1){
//       // console.log('наступний:', arr[j]);
//       if (arr[i].id === arr[j].id) {
//         arr[i].qty += arr[j].qty;
//         arr.splice(j, 1);
//         j -= 1;
//       }
//     }
//   }
// }

// sortProducts(myProducts);
// console.log(myProducts);

//--------------------------------------- throttle, debounce ---------------------------------------//
// const lodResult = _.add(2, 3);
// console.log(lodResult); // 5
const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const trailingOutput = document.querySelector(".output.trailing");
const leadingOutput = document.querySelector(".output.leading");
const eventCounter = {
  vanilla: 0,
  throttled: 0,
  trailing: 0,
  leading: 0
};

// document.addEventListener("scroll", () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener('scroll', _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
// }, 300))

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.trailing += 1;
//     trailingOutput.textContent = eventCounter.trailing;
//   }, 300)
// );

// document.addEventListener(
//   "scroll",
//   _.debounce(() => {
//     eventCounter.leading  += 1;
//     leadingOutput.textContent = eventCounter.leading ;
//   }, 300, {
//     leading:true,
//     trailing:false,
//   })
// );

//--------------------------------------- lightbox+cars ---------------------------------------//
// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `)

// console.log(instance);
// instance.show()

const newCars = [
    {
    id:1,
    model: 'Volvo XC90',
    type: 'SUV',
    price: 60000,
    img: 'https://archibalds.co.nz/wp-content/uploads/2021/08/volvo-xc90-1920x760-1.jpg'
  },
    {
    id:2,
    model: 'Audi A4',
    type: 'Sedan',
    price: 50000,
    img: 'https://avatars.mds.yandex.net/get-verba/1535139/2a0000017f5901ab3c6c4f2b477b5bdf118e/cattouchret'
  },
    {
    id:3,
    model: 'BMW X5',
    type: 'SUV',
    price: 70000,
    img: 'https://avatars.mds.yandex.net/get-verba/3587101/2a00000186371facfbe93727d461bd1c4381/cattouchret'
  },
    {
    id:4,
    model: 'Mercedes-Benz C-Class',
    type: 'Sedan',
    price: 55000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Mercedes-Benz_W206_IMG_6380.jpg'
  },
    {
    id:5,
    model: 'Toyota Camry',
    type: 'Sedan',
    price: 35000,
    img: 'https://toyota-ua.com/uploads/media/dc_car_gallery/0002/48/thumb_147812_dc_car_gallery_new_slider.png.webp'
  },
  {
    id:6,
    model: 'Ford Mustang',
    type: 'Coupe',
    price: 45000,
    img: 'https://auto.24tv.ua/resources/photos/news/202304/449522d50cf99-eda0-4982-bd7c-236cf3dbd20a.jpg?1682420674000&fit=cover&w=1200&h=675&q=65'
  }
];

const carsContainer = document.querySelector('.js-cars-list');
const carsMarkup = newCars.map(({ model, img, id }) =>
  `<li class="cars-item js-cars-item js-target" data-car-id="${id}">
        <img src="${img}" alt="${model}" class="js-target"/>
        <h2 class="js-target">${model}</h2>
      </li>`
).join('');

carsContainer.insertAdjacentHTML('beforeend', carsMarkup);
carsContainer.addEventListener('click', onCardClick)

function onCardClick(evt) {
  const { target } = evt;

  if (!target.classList.contains('js-target')) {
    return;
  }

  const carId = Number(target.closest('.js-cars-item').dataset.carId);

  if (!carId) {
    showDefault();
  } else {
    const currentCar = getCarbyId(carId);
    showCarModal(currentCar);
  }
}

function getCarbyId(carId) {
  return newCars.find(({ id }) => id === carId);
}

/**
 * створює та відкриває модалку з інфо про авто за допомогою lightbox
 * @param {Object} carObject 
 */
function showCarModal(carObject) {
  const { img, model, type, price} = carObject;
  const carModalMarkup = basicLightbox.create(`
      <li class="cars-item--light">
        <img src="${img}" alt="${model}" width="300"/>
        <h2>${model}</h2>
        <p>Type: ${type}</p>
        <p>Price: ${price}</p>
      </li>
  `)
  carModalMarkup.show();  
}

function showDefault() {
  const defaultPhoto = basicLightbox.create(`
    <div>
      <p style="color:white; margin:0">Photo not available</p>
      <img src="https://www.willow-car-sales.co.uk/wp-content/uploads/2019/11/placeholder-image-1.jpg" alt="Photo not available" width="300"/>
    </div>
  `)
  defaultPhoto.show();
}


//--------------------------------------- event propagation/XO Game ---------------------------------------//
const box = document.querySelector('.js-xo-content');
const gameOutput = document.querySelector('.js-xo-output');

// resetBtn.addEventListener('click', onResetBtnClick)

let player = 'X';
let historyX = [];
let historyO = [];

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// function createMarkup() {
//   let markup = '';
//   for (let i = 1; i < 10; i += 1){
//     markup += `<div class="xo-item" data-id="${i}"></div>`
//   }
//   box.innerHTML = markup; 
// }
// createMarkup();

// box.addEventListener('click', onClick)

// function onClick(e) {
//   const { target } = e;

//   if (!target.classList.contains('xo-item')|| target.textContent) {
//     return;
//   }

//   let result = false;
//   const id = Number(target.dataset.id);

//   if (player === 'X') {
//     historyX.push(id)
//     result = isWinner(historyX);
//   } else {
//     historyO.push(id)
//     result = isWinner(historyO);
//   }

//   target.textContent = player;
  
//   const isGameEnd = historyX.length + historyO.length === 9;
//     if (result) {
//       gameOutput.textContent =`Winner is ${player} 😎`;
//       resetGame();
//       return;

//     } else if (isGameEnd) {
//       gameOutput.textContent ='Try again 💩';
//       resetGame();
//       return;
//   }

//   player = player === 'X' ? "O" : "X";
// }

// function isWinner(arr) {
//   return wins.some(item => item.every(id => arr.includes(id)));
// }

// function resetGame() {
//   createMarkup();

//   historyX = [];
//   historyO = [];
//   player = 'X';
// }

//--------------------------------------- event propagation/color palette ---------------------------------------//
const colors = [
  { hex: "#FF0000", rgb: "255, 0, 0" },
  { hex: "#00FF00", rgb: "0, 255, 0" },
  { hex: "#0000FF", rgb: "0, 0, 255" },
  { hex: "#FFFF00", rgb: "255, 255, 0" },
  { hex: "#FF00FF", rgb: "255, 0, 255" },
  { hex: "#00FFFF", rgb: "0, 255, 255" },
  { hex: "#000000", rgb: "0, 0, 0" },
  { hex: "#448aff", rgb: "68, 138, 255" },
  { hex: "#ff9800", rgb: "255, 152, 0" },
  { hex: "#C0C0C0", rgb: "192, 192, 192" }
];
/*
      <div class="color-card">
        <div
          class="color-swatch"
          data-hex="#1e6ba9"
          data-rgb="30,107,169"
          style="background-color: #1e6ba9"
        ></div>
        <div class="color-meta">
          <p>HEX: #1e6ba9</p>
          <p>RGB: 30,107,169</p>
        </div>
      </div>
*/

const palette = document.querySelector('.js-palette')
const cardsMarkup = createColorCardsMarkup(colors);

palette.insertAdjacentHTML('beforeend', cardsMarkup)

palette.addEventListener('click', onPaletteContainerClick)

/**
 * Обробляє клік 
 * @param {Object} e 
 */
function onPaletteContainerClick(e) {
  const isColorSwatchEl = e.target.classList.contains('color-swatch')
  if (!isColorSwatchEl) {
    return;
  }

  removeActiveColorCardClass()

  const colorSwatchEl = e.target;
  const parentColorCard = colorSwatchEl.closest('.color-card');

  addActiveColorCardClass(parentColorCard);

  setBodyBgcColor(colorSwatchEl.dataset.hex)
}


/**
 * створює розмітку карток кольорів
 * @param {Object} colors 
 * @returns {String}
 */
function createColorCardsMarkup(colors) {
  return colors.map(({hex, rgb}) =>
    `
        <div class="color-card">
          <div
            class="color-swatch"
            data-hex="${hex}"
            data-rgb="${rgb}"
            style="background-color: ${hex}"
          ></div>
          <div class="color-meta">
            <p>HEX: ${hex}</p>
            <p>RGB: ${rgb}</p>
          </div>
      </div>
    `
    ).join('')
}

/**
 * встановлю колір фону на body
 * @param {*} color 
 */
function setBodyBgcColor(color) {
  document.body.style.backgroundColor = color;
}

/**
 * Знімає клас is-active з картки 
 */
function removeActiveColorCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active')

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active')
  }
}

/**
 * Вішає клас is-active на картку 
 * @param {*} card 
 */
function addActiveColorCardClass(card) {
  card.classList.add('is-active');
}


//--------------------------------------- event propagation/tags/ декілька елементів, Set ---------------------------------------//
const tagsContainer = document.querySelector('.js-tags')
const selectedTags = new Set();

// tagsContainer.addEventListener('click', onTagsContainerClick)

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return
//   }

//   const btn = e.target;
//   const tag = btn.dataset.value;
//   const isBtnActive = btn.classList.contains('tags__btn--is-active');

//   if (isBtnActive) {
//     selectedTags.delete(tag)
//   } else {
//     selectedTags.add(tag)
//   }

//   btn.classList.toggle('tags__btn--is-active');

//   console.log(selectedTags);
// }

//--------------------------------------- event propagation/tags/?оператор? один з багатьох ---------------------------------------//
// const tagsContainer = document.querySelector('.js-tags')
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick)

// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--is-active')

//   // if (currentActiveBtn) {
//   //   currentActiveBtn.classList.remove('tags__btn--is-active')
//   // } 

//   currentActiveBtn?.classList.remove('tags__btn--is-active')

//   const nextActiveBtn = e.target;
//   nextActiveBtn.classList.add('tags__btn--is-active')

//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }


//--------------------------------------- event propagation/color palette ---------------------------------------//
const colorPaletteContainer = document.querySelector('.color-palette')
const textColorOutput = document.querySelector('.color-palette-output')

colorPaletteContainer.addEventListener('click', selectColor)

function selectColor(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    // console.log('not btn');
    return;
  }

  const selectedColor = evt.target.dataset.color;
  textColorOutput.style.color = selectedColor;
  textColorOutput.textContent = `Selected color: ${selectedColor}`;
}

function createPaletteItems() {
  const buttons = []

  for (let i = 1; i < 60; i += 1){
    const color = getRandomColor();
    const btn = document.createElement('button');

    btn.type = 'button';
    btn.style.backgroundColor = color;
    btn.classList.add('item');
    btn.dataset.color = color;
    buttons.push(btn)
  }

  colorPaletteContainer.append(...buttons)
}

createPaletteItems()

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}


//--------------------------------------- bubbling ---------------------------------------//
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

parent.addEventListener("click", () => {
  alert(
    "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
  );
});

child.addEventListener("click", () => {
  alert(
    "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
  );
});

descendant.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Descendant click handler");
});



const colorPickerOptions = [
    { label: "red", color: "#FF0000" },
    { label: "green", color: "#00FF00" },
    { label: "blue", color: "#0000FF" },
    { label: "yellow", color: "#FFFF00" },
    { label: "pink", color: "#FFC0CB" }
]

const colorPickerContainerEl = document.querySelector('.js-color-picker');

//--------------------------------------- через for, oldschool ---------------------------------------//

// const elements = [];
// for (let i = 0; i < colorPickerOptions.length; i += 1){
//     const option = colorPickerOptions[i];

//     const buttonEl = document.createElement('button')
//     buttonEl.type = 'button'
//     buttonEl.textContent = option.label;
//     buttonEl.classList.add('color-picker__option')
//     buttonEl.style.backgroundColor = option.color;

//     elements.push(buttonEl);
// }

// console.log(elements);
// colorPickerContainerEl.append(...elements)

//--------------------------------------- через map() ---------------------------------------//

// const elements = colorPickerOptions.map(option => {
//     // console.log(option);

//     const buttonEl = document.createElement('button')
//     buttonEl.type = 'button'
//     buttonEl.textContent = option.label;
//     buttonEl.classList.add('color-picker__option')
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
// })

// colorPickerContainerEl.append(...elements)

//--------------------------------------- функція ---------------------------------------//

// function makeColorPickerOptions(options) {
//     return options.map(option => {
//         const buttonEl = document.createElement('button');
        
//         buttonEl.type = 'button';
//         buttonEl.textContent = option.label;
//         buttonEl.classList.add('color-picker__option');
//         buttonEl.style.backgroundColor = option.color;

//         return buttonEl;
//     })
// }

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);


const product = {
    name:'product-1',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, inventore!',
    price:2000,
    available:true,
    onSale:true,
}

    /*
    <article class="product">
      <h2 class="product__name"></h2>
      <p class="product__description"></p>
      <p class="product__price"></p>
    </article>
    */


//--------------------------------------- для одного об'єкту ---------------------------------------//

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const productNameEl = document.createElement('h2');
// productNameEl.classList.add('product__name');
// productNameEl.textContent = product.name;

// const productDescrEl = document.createElement('p');
// productDescrEl.classList.add('product__description');
// productDescrEl.textContent = product.description;

// const productPriceEl = document.createElement('p');
// productPriceEl.classList.add('product__price');
// productPriceEl.textContent = `Price: ${product.price}`;


// productEl.append(productNameEl, productDescrEl, productPriceEl);

//--------------------------------------- для масива об'єктів ---------------------------------------//

const products = [
    {
    name:'product-1',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, inventore!',
    price:2000,
    available:true,
    onSale:true,
    },
    {
    name:'product-2',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, inventore!',
    price:500,
    available:false,
    onSale:true,
    },
    {
    name:'product-3',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, inventore!',
    price:2000,
    available:true,
    onSale:true,
},{
    name:'product-4',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, inventore!',
    price:1000,
    available:true,
    onSale:true,
    },
    {
    name:'product-5',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, inventore!',
    price:4500,
    available:true,
    onSale:false,
    }
]

//--------------------------------------- створення однієї карточки ---------------------------------------//

// function makeProductCard({name, description, price}) {
//     const productEl = document.createElement('article');
//     productEl.classList.add('product');

//     const productNameEl = document.createElement('h2');
//     productNameEl.classList.add('product__name');
//     productNameEl.textContent = name;

//     const productDescrEl = document.createElement('p');
//     productDescrEl.classList.add('product__description');
//     productDescrEl.textContent = description;

//     const productPriceEl = document.createElement('p');
//     productPriceEl.classList.add('product__price');
//     productPriceEl.textContent = `Price: ${price}`;

//     productEl.append(productNameEl, productDescrEl, productPriceEl);

//     return productEl;
// }

//--------------------------------------- створення колекції ---------------------------------------//

// const elements = products.map(makeProductCard);
// console.log(elements);

// const productsContainerEl = document.querySelector('.js-products');
// productsContainerEl.append(...elements);

//--------------------------------------- через парс рядків ---------------------------------------//
const titleEl = document.querySelector('.title');
// console.log("titleEl.textContent:", titleEl.textContent)
// console.log("titleEl.innerHTML:", titleEl.innerHTML);

const transactions = [
    {
        'id': 1,
        'amount': 10.5,
        'date': '2023-06-26',
        'owner': 'John Doe',
        'name': 'Object 1',
        'type': 'Type A',
        'number': 12345
    },
    {
        'id': 2,
        'amount': 20.0,
        'date': '2023-06-27',
        'owner': 'Jane Smith',
        'name': 'Object 2',
        'type': 'Type B',
        'number': 67890
    },
    {
        'id': 3,
        'amount': 15.75,
        'date': '2023-06-28',
        'owner': 'Robert Johnson',
        'name': 'Object 3',
        'type': 'Type A',
        'number': 54321
    },
    {
        'id': 4,
        'amount': 5.99,
        'date': '2023-06-29',
        'owner': 'Emily Davis',
        'name': 'Object 4',
        'type': 'Type C',
        'number': 98765
    },
    {
        'id': 5,
        'amount': 8.25,
        'date': '2023-06-30',
        'owner': 'Michael Brown',
        'name': 'Object 5',
        'type': 'Type B',
        'number': 24680
    },
    {
        'id': 6,
        'amount': 12.0,
        'date': '2023-07-01',
        'owner': 'Sarah Wilson',
        'name': 'Object 6',
        'type': 'Type A',
        'number': 13579
    }
]

const transactionTableEl = document.querySelector('.js-transaction-table');

    /*
      <tr>
        <td>Transaction ID</td>
        <td>Sum</td>
        <td>Date</td>
        <td>Account owner</td>
        <td>Account type</td>
        <td>Account name</td>
        <td>Account number</td>
      </tr>
      */

// const makeTransactionTableRowMarkUp = ({id,amount, date, owner, name, type, number}) => {
//     return `
//         <tr>
//             <td>${id}</td>
//             <td>${amount}</td>
//             <td>${date}</td>
//             <td>${owner}</td>
//             <td>${type}</td>
//             <td>${name}</td>
//             <td>${number}</td>
//         </tr>
//     `
// }

// const makeTransactionTableRows = transactions.map(makeTransactionTableRowMarkUp).join('');
// console.log(makeTransactionTableRows);


// transactionTableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows)

//--------------------------------------- reflow, repaint ---------------------------------------//
/*
не поміщати елемент в DOM на кожній ітерації циклуб подія reflow повторюється щоразу
*/

const cars = [
    {
    id:1,
    model: 'Volvo XC90',
    type: 'SUV',
    price: 60000,
    img: 'https://archibalds.co.nz/wp-content/uploads/2021/08/volvo-xc90-1920x760-1.jpg'
  },
    {
    id:2,
    model: 'Audi A4',
    type: 'Sedan',
    price: 50000,
    img: 'https://avatars.mds.yandex.net/get-verba/1535139/2a0000017f5901ab3c6c4f2b477b5bdf118e/cattouchret'
  },
    {
    id:3,
    model: 'BMW X5',
    type: 'SUV',
    price: 70000,
    img: 'https://avatars.mds.yandex.net/get-verba/3587101/2a00000186371facfbe93727d461bd1c4381/cattouchret'
  },
    {
    id:4,
    model: 'Mercedes-Benz C-Class',
    type: 'Sedan',
    price: 55000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Mercedes-Benz_W206_IMG_6380.jpg'
  },
    {
    id:5,
    model: 'Toyota Camry',
    type: 'Sedan',
    price: 35000,
    img: 'https://toyota-ua.com/uploads/media/dc_car_gallery/0002/48/thumb_147812_dc_car_gallery_new_slider.png.webp'
  },
    {
    model: 'Ford Mustang',
    type: 'Coupe',
    price: 45000,
    img: 'https://auto.24tv.ua/resources/photos/news/202304/449522d50cf99-eda0-4982-bd7c-236cf3dbd20a.jpg?1682420674000&fit=cover&w=1200&h=675&q=65'
  }
];
/*
      <li>
        <img src="" alt="">
        <h2></h2>
        <p></p>
        <p></p>
      </li>
*/

const carsContainerEl = document.querySelector('.js-cars-container')

// const carsMarkup = cars.map(({ id = 'none', model, type, price, img }) =>
//     `
//         <li data-id="${id}">
//             <img src="${img}" alt="${model}" class="car">
//             <h2>${model}</h2>
//             <p>${type}</p>
//             <p>Price: ${price}</p>
//         </li>
//     `
// ).join('');

// carsContainerEl.insertAdjacentHTML('beforeend', carsMarkup)

//--------------------------------------- видалення елемента ---------------------------------------//

const result = [...carsContainerEl.children].forEach(item => {
    if (item.dataset.id === 'none') {
        item.remove();
    }
})

//--------------------------------------- події ---------------------------------------//
const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

const addListenerBtn = document.querySelector('[data-action="add"]');
const removeListenerBtn = document.querySelector('[data-action="remove"]');
const btn = document.querySelector("#btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });

const handleClick = event => {
  console.log(event);
};

// btn.addEventListener("click", handleClick);

const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     console.log('event.username', event.currentTarget.username);
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//     console.log(username.value, password.value);
// });


// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
//   console.log("Keyup: ", event);
// });

// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });


const clearLogBtn = document.querySelector('[data-action="clear"]');
const logList = document.querySelector('.log-list');
let keypressCounter = 1;

// document.addEventListener('keydown', logMessage);
// document.addEventListener('keyup', logMessage);
// clearLogBtn.addEventListener('click', reset);
/*
    <div class="log-item">
    <span class="chip"></span>
    <ul>
        <li>Event:</li>
        <li>Type:</li>
        <li>Code:</li>
    </ul>
    </div>
*/

// function logMessage({type, key, code}) {
//     const markup = `
//         <div class="log-item">
//             <span class="chip"></span>
//             <ul>
//                 <li>Event:${type}</li>
//                 <li>Key:${key}</li>
//                 <li>Code:${code}</li>
//             </ul>
//         </div>
//     `;

//     logList.insertAdjacentHTML('beforeend', markup);

//     if (type === 'keyup') {
//         incrementKeypressCounter();
//     }
// }

// function reset() {
//     let keypressCounter = 1;
//     logList.innerHTML = '';
// }

// function incrementKeypressCounter() {
//     keypressCounter += 1;
// }

// document.addEventListener("keydown", event => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//     console.log("«Ctrl + s» or «Command + s» combo");
//   }
// });

const formEl = document.querySelector(".form");

// formEl.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     console.log('event', event);
//     console.log('event.currentTarget', event.currentTarget);
//     // console.log('elements-login', event.currentTarget.elements.login.value);

//     const { elements: { login, password } } = event.currentTarget;
    
//     if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//     }
    
//     console.log(`Login: ${login.value}, Password: ${password.value}`);

//     event.currentTarget.reset();
// }

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
// console.log(select);
//     const selectedOptionValue = select.value;
//     console.log('selectedOptionValue', selectedOptionValue);

//     const selectedOptionIndex = select.selectedIndex;
//     console.log("setOutput ~ selectedOptionIndex:", selectedOptionIndex)
    
//     const selectedOptionText = select.options[selectedOptionIndex].text;
//     console.log("setOutput ~ selectedOptionText:", selectedOptionText)


//     textOutput.textContent = selectedOptionText;
//     valueOutput.textContent = selectedOptionValue;
// }

const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });


const refs = {
  openModalBtn:document.querySelector('[data-action="open-modal"]'),
  closeModalBtn:document.querySelector('[data-action="close-modal"]'),
  backdrop:document.querySelector('.js-backdrop'),
}

// refs.openModalBtn.addEventListener('click', onOpenModal)
// refs.closeModalBtn.addEventListener('click', onCloseModal)
// refs.backdrop.addEventListener('click', onBackdropClick)


// function onOpenModal() {
//   document.body.classList.add('show-modal')
//   document.addEventListener('keydown', onEscKeyDown)
// }

// function onCloseModal() {
//   document.body.classList.remove('show-modal')
//   document.removeEventListener('keydown', onEscKeyDown)
// }

// function onBackdropClick(event) {
//   // console.log('Backdrop click');
//   // console.log('event.target', event.target);
//   // console.log('event.currentTarget', event.currentTarget);

//   if (event.target === event.currentTarget) {
//     onCloseModal()
//   }
// }


// function onEscKeyDown(event) {
//   // console.log(event);
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = event.code === ESC_KEY_CODE

//   if (isEscKey) {
//     onCloseModal()
//   }
// }

const btnMove = document.querySelector('.btn-move')
const containerMove = document.querySelector('.js-move-container')

// btnMove.addEventListener('click', onBtnMoveClick)

// let step = 0;

// function onBtnMoveClick() {
//   step += 10;
//   containerMove.style.transform = `rotate(${step}deg)`;
//   containerMove.style.marginLeft = `${step}px`
// }

const title = document.querySelector('.js-title-to-hide')
const title1 = document.querySelector('.js-title-to-hide1')
const title2 = document.querySelector('.js-title-to-hide2')
const maxLength = 13;
const totalLength = maxLength + 3;

// title.addEventListener('click', onTitleClick)
// title1.addEventListener('click', onTitleClick)
// title2.addEventListener('click', onTitleClick)

// function onTitleClick(e) {
//   const title = e.currentTarget;
//   const str = title.textContent.slice(0, maxLength)

//   if (title.textContent.length > totalLength) {
//     const remainStr = title.textContent.slice(maxLength)

//     title.setAttribute('data-title', remainStr)
//     title.textContent = str + '...'
//   } else {
//     const remainStr = title.dataset.title;
//     if (remainStr) {
//       title.textContent = str + remainStr;
//     }
//   }
// }

// document.addEventListener('keydown', notToCopyText)

// function notToCopyText(evt) {
//   if (evt.ctrlKey && evt.code === 'KeyC') {
//     console.log('trying to copy');
//     evt.preventDefault();
//     return;
//   }
// }


const myCars = [
    {
    id: 1,
    name:'Volvo',
    model: 'XC90',
    type: 'SUV',
    price: 60000,
    img: 'https://archibalds.co.nz/wp-content/uploads/2021/08/volvo-xc90-1920x760-1.jpg'
  },
    {
      id: 2,
      name:'Audi',
    model: 'A4',
    type: 'Sedan',
    price: 50000,
    img: 'https://avatars.mds.yandex.net/get-verba/1535139/2a0000017f5901ab3c6c4f2b477b5bdf118e/cattouchret'
  },
    {
      id: 3,
      name:'BMW',
    model: 'X5',
    type: 'SUV',
    price: 70000,
    img: 'https://avatars.mds.yandex.net/get-verba/3587101/2a00000186371facfbe93727d461bd1c4381/cattouchret'
  },
    {
      id: 4,
      name:'Mercedes-Benz',
    model: 'C-Class',
    type: 'Sedan',
    price: 55000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Mercedes-Benz_W206_IMG_6380.jpg'
  },
    {
      id: 5,
      name:'Toyota',
    model: 'Camry',
    type: 'Sedan',
    price: 35000,
    img: 'https://toyota-ua.com/uploads/media/dc_car_gallery/0002/48/thumb_147812_dc_car_gallery_new_slider.png.webp'
  },
  {
    id: 6,
    name:'Ford',
    model: 'Mustang',
    type: 'Coupe',
    price: 45000,
    img: 'https://auto.24tv.ua/resources/photos/news/202304/449522d50cf99-eda0-4982-bd7c-236cf3dbd20a.jpg?1682420674000&fit=cover&w=1200&h=675&q=65'
  }
];

/*
    <ul class="js-cars-list">
      <li>
        <h2></h2>
        <h3></h3>
        <p></p>
      </li>
    </ul>
*/

const carsList = document.querySelector('.js-cars-list')
const searchForm = document.querySelector('.js-search-form')
const favouriteCarsList = document.querySelector('.js-favourite-list')

// searchForm.addEventListener('submit', onSearch)
// carsList.addEventListener('click', onClick)


// function createMarkup(arr) {
//   return arr.map(({ name,id, model, type, img, price }) =>
//     ` <li data-id="${id}">
//         <img src="${img}" alt="${name}" class='car'>
//         <div class="favourite"></div>
//         <h2>${name} ${model}</h2>
//         <p>Type: ${type}</p>
//         <p>Price: ${price}</p>
//     </li>`
// ).join('')
// }

// carsList.insertAdjacentHTML('beforeend', createMarkup(myCars))



// function onSearch(evt) {
//   evt.preventDefault();

//   const form = evt.currentTarget;
//   const { query, select } = form.children;

//   const searchCars = myCars.filter(item => item[select.value].toLowerCase() === query.value.trim().toLowerCase())

//   carsList.innerHTML = createMarkup(searchCars);

//   // console.dir(query.value);
//   // console.dir(select.value);//name, model
// }

// function onClick(evt) {
//   if (evt.target.classList.contains('favourite')) {

//     evt.target.classList.add('favourite-active')
//     const id = evt.target.closest('li').dataset.id
//     // const {id} = evt.target.closest('li').dataset

//     const {name, model} = myCars.find((item) => item.id === Number(id))
//     addFavourite(`${name} ${model}`);
//   }
// }

// function addFavourite(currentCar) {
//   favouriteCarsList.insertAdjacentHTML('beforeend', `<li>${currentCar}</li>`)
// }