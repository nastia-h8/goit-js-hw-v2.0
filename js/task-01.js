// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5



const categoriesList = document.querySelector('#categories');
const categoriesItems = [...categoriesList.children];
console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(item => { 
    console.log('Category:', item.firstElementChild.textContent);
    console.log('Elements:', item.lastElementChild.children.length);
})



// const categories = document.querySelectorAll('.item');
// console.log("Number of categories:", categories.length);

// const categoriesArr = [...categories]

// categoriesArr.map(element => {
//     console.log(`Category: ${element.querySelector('h2').textContent}`); // додаткове звернення в DOM:(
//     console.log(`Elements: ${element.querySelectorAll('li').length}`);
// })