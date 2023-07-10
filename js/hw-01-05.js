// const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr);

// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";

// // Змініть код лише під цим рядком
// const wordBlanks = "My " + myNoun + " was " + myAdjective + " and " + myVerb + " " + myAdverb; // Змініть цей рядок

// // Змініть код лише над цим рядком
// console.log(wordBlanks);

// const myList = [
// ["Chocolate Bar", 15],
// ["Chocolate Bar", 15],
// ["Chocolate Bar", 15],
// ["Chocolate Bar", 15],
// ["Chocolate Bar", 15]
// ]

// console.log(myList);

// let count = 0;
//
// function cc(card) {
//   // Змініть код лише під цим рядком
//         switch (card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6: count += 1;
//             break;
        
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A": count -= 1;
//             break;
//     }

//     return count > 0 ? `${count} Bet` : `${count} Hold`;
    
//   // Змініть код лише над цим рядком
// }

// console.log(cc(10), cc("J"), cc("Q"), cc("K"), cc("A"));

// const employees = 5;

// // 1 вари
// const max = 5;
// const min = 0;

// let total = 0;

// перебрати діапазон
// for (let i = min; i <= max; i += 1){
    
//     // вказати умову для вибору парних чисел
//     if (i % 2 === 0) {
//         console.log(i);
//         // додати до тотала парні числа
//         total += i;
//     }
// }
// // лог
// console.log("total:", total);


// for (let i = min; i <= max; i += 1){
    
//     // вказати умову для вибору непарних чисел (логіка від оберненого)
//     if (i % 2 !== 0) {
//         console.log("Odd:",i);
//         // йди далі на наступну ітерацію, якщо непарне
//         continue;
//     }
//         //парні числа
//         console.log("Even:", i);
//         // додати до тотала парні числа
//         total += i;
// }
// // лог
// console.log("total:", total);


// let balance = 10000;
// const payment = 12000;
// let message = "";

// // вивести повідомлення

// alert(`Сума замовлення ${payment}, виконуємо перевірку балансу`);

// if (payment <= balance) {
//     // сума не перевищує баланс - відняти суму покупки з балансу, виести повідомлення
//     balance -= payment;
//     message = `на рахунку залишилось ${balance}`;
//     console.log(message);
// } else {
//     // сума перевищує - недостатньо коштів
//     message = `на рахунку недостатньо коштів`;
//     console.log(message);
// }

// // операція завершена
// message = "операція завершена"
// console.log(message);


// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     discount = 0.1;
// }   else {
//     console.log("У вас нет партнерской скидки")
// }

// payment -= payment * discount;
// totalSpent += payment;


// console.log(`Сумма покупки  с учетом скидки - ${discount * 100}%  составит ${payment}, общая сумма покупок за все время: ${totalSpent}`);

// let weight = '88,3';
// console.log(weight.replace(',','.'))


// const userInputValue = '';

// const value = userInputValue ?? "Wrong input number";
// const value = userInputValue || "Wrong input number";

// console.log(value)

// let link = 'https://www.edu.goit.global/uk/learn/2901010/2294/2295/extras';
// if (!link.endsWith('/')){
//     link += '/'
// }

// console.log(link);



// const max = 100;
// const min = 20;

// for (let i = min; i >= min && i <= max; i += 1){
//     if (!(i % 5)) {
//         console.log(i)
//     }
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";

// let message = '';
// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = "Клієнт з таким ім'ям є в базі даних!";
//         break;
//     } else {
//          message = "Клієнт з таким ім'ям відсутній в базі даних!";
//     }
// }

// console.log(message);


// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < threshold) {
//     continue;
//     }
    
//     console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] > threshold) {
//         console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
//     }
// }

// let a = 5;
// // Присвоєння за значенням, в пам'яті буде створена ще
// // одна комірка, в яку буде скопійоване значення 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Змінимо значення a
// a = 10;
// console.log(a); // 10
// // Значення b не змінилося, оскільки це окрема копія
// console.log(b); // 5


// const name = "JavaScript - це цікаво";
// console.log(name.split(" "));

// const numbers = [1,2,3];

// numbers.push(4,5);
// console.log(numbers); // [1]
// console.log(numbers.length); // [1]


// count(1, 5); // countFrom = 1, countTo = 5, step = 1





// -------------------------- Functions -------------------------- //

// function multiply(x, y, z) {
//   console.log("Код до return виконується звичайним чином");

//   // Повертаємо результат виразу множення
//   return x * y * z;

//   console.log("Цей лог ніколи не виконається, він стоїть після return");
// }

// console.log(multiply(2, 5, 6));

// function multiply() {
//     let total = 1;

//     for (const argument of arguments) {
//         total *= argument;
//     }

//     console.log(arguments);
//     const args = Array.from(arguments);
//     console.log(args);
//     return args;
// }

// const result = multiply(2, 5, 8);
// console.log(result);

// console.log([1, 2, 3] === [1, 2, 3]);
// console.log([1,2,3] == [1,2,3]);

// const cart = [54, 28, 105, 70, 92, 17, 120]

// let total = 0;

// for (const item of cart) {
//     // console.log(item);
//     total += item;
// }

// console.log('total:', total);

// const numbers = [54, 28, 105, 70, 92, 17, 120]
// let total = 0;

// for (const number of numbers) {
//     if (number % 2) {
//         console.log("нечетное", number);
//         total += number;
//     }
// }

// console.log(total);

// const numbers = [54, 28, 105, 70, 92, 17, 120]

// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log(smallestNumber);

// const numbers = [54, 28, 105, 70, 92, 17, 120]

// let biggestNumber = numbers[0];

// for (const number of numbers) {
//     if (number > biggestNumber) {
//         biggestNumber = number;
//     }
// }

// console.log(biggestNumber);

// console.log([2,4,6].concat([1,3],[5]));

// const array = [1, 'hello', null, true, [3, 4, 5]];

// for (let i = 0; i < array.length; i += 1){
//     // console.log('first array', array[i])

//     if (Array.isArray(array[i])) {
//         for (let j = 0; j < array[i].length; j += 1) {
//             console.log('inner array', array[i][j])
//         }
//         continue;
//     }

//     console.log('first array', array[i]);
// }


// const array = [1, 'hello', null, true, [3, 4, 5]];

// for (const element of array) {
//     if (Array.isArray(element)) {
//         for (const innerElement of element) {
//             console.log(innerElement);
//         } continue;
//     }

//     console.log(element);
// }

// const array = [1, 'hello', null, true, [3, 4, 5]];

// let i = 0;

// while (i < array.length) {
//     console.log(array[i]);
//     i += 1;
// }

// const str = "HelLo wOrlD";
// let reverseStr = '';

// for (let i = 0; i < str.length; i += 1){
//     // console.log(str[i])

//     if (str[i] === str[i].toLowerCase()) {
//         reverseStr += str[i].toUpperCase();
//     } else reverseStr += str[i].toLowerCase();
// }

// for (const letter of str) {
//     if (letter === letter.toUpperCase()) {
//         reverseStr += letter.toLowerCase();
//     } else {
//         reverseStr += letter.toUpperCase();
//     }
// }


// for (const letter of str) {
//     reverseStr += letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
// }


// console.log(str);
// console.log(reverseStr);


// const str = "HelLo wOrlD";

// let reverseStr = str.split(" ").reverse().join(" ");
// console.log(reverseStr);

// let invertedReverseStr = ""

// for (const letter of reverseStr) {
//     invertedReverseStr += letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
// }

// console.log(invertedReverseStr);


// const str = "HelLo wOrlD";
// console.log(str.split("-"));


// const array = [1, 'hello', null, true];

// const elToFind = "helo";

// if (array.indexOf(elToFind) === -1) {
//     console.log("No");
// } else  console.log("Yes");

// if (array.includes(elToFind)) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// console.log(array.includes(elToFind) ? "Yes" : "No");

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// let newArr = [];

// for (let i = 0; i < langs.length; i += 1){

//     if (langs[i] < langs[0]) {
//         newArr.push(langs[i])
// }
// }

// console.log(newArr);



// var mas = [2, 3, 1];

// for (var i = 0, tmp; i < mas.length - 1; i += 1){
//     for (var j = 0; j < mas.length - 1; j += 1){
//         if (mas[j] > mas[j + 1]){
//             tmp = mas[j];
//             mas[j] = mas[j + 1];
//             mas[j + 1] = tmp;
//         }
//     }
// }

// console.log(mas);


// function calcBMI(weight, height) {
//      weight = Number(weight.replace(',', '.'));
//      height = Number(height.replace(',', '.'));

//     // return Number((weight / Math.pow(height, 2)).toFixed(1));
//     return Number((weight / height ** 2).toFixed(1));
// }


// const result = calcBMI('88,3', '1.75');
// console.log(result);


// function min(a, b) {
//     // let smallestNumber;
//     // if (a < b) {
//     //     smallestNumber = a;
//     // } else smallestNumber = b;

//     // return smallestNumber;

//     return a < b ? a : b;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1,1));


// function getRectArea(dismensions) {
//     const a = Number(dismensions.split(' ')[0]);
//     const b = Number(dismensions.split(' ')[1])
    
//     return a * b;
// }

// console.log(getRectArea('8 11'));


// function logItems(items) {
//     for (let i = 0, num=1; i < items.length; i += 1, num+=1){
//         console.log(`${num} - ${items[i]}`);
//     }
// }

// logItems(['poly', 'mango', 'ajax'])


// function printContactsInfo(names, phones) {
//     names = names.split(',');
//     phones = phones.split(',');

//     for (let i = 0; i < names.length, i < phones.length; i += 1){
//         console.log(`${names[i]} - ${(phones[i])}`);
//     }

// }

//  printContactsInfo('jacob,william,artemis', '1265, 4572, 5853')


// function findLargestNumber(numbers) {
//     let biggestNumber = numbers[0];
//     for (let i = 0; i < numbers.length; i+=1) {
//         biggestNumber = biggestNumber < numbers[i] ? numbers[i] : biggestNumber;
//     }

//     return biggestNumber;
// }

// console.log(findLargestNumber([1,47,36,1111,22]));


// function findLargestNumber() {
//     const numbersArr = [...arguments]
//     let biggestNumber = numbersArr[0];

//     for (let i = 0; i < numbersArr.length; i+=1) {
//         biggestNumber = biggestNumber < numbersArr[i] ? numbersArr[i] : biggestNumber;
//     }

//     return biggestNumber;
// }

// console.log(findLargestNumber(1, 47, 36, 1111, 22));
// console.log(findLargestNumber(-7, 25, 36, 212));



// function findLargestNumber(...numbers) {
//     // let biggestNumber = numbers[0];

//     // for (let i = 0; i < numbers.length; i+=1) {
//     //     biggestNumber = biggestNumber < numbers[i] ? numbers[i] : biggestNumber;
//     // }

//     let max = numbers[0];

//     for (const number of numbers) {
        
//         number > max ? max = number : max;
//     }

//     return max;
// }

// console.log(findLargestNumber(1, 47, 36, 1111, 22));
// console.log(findLargestNumber(-7, 25, 36, 212));


// function calAverage(...numbers) {
//     let sum = 0;

//     for (const num of numbers) {
//         sum += num;
//     }

//     return sum/numbers.length;
// }

// console.log(calAverage(1, 2, 3, 4));
// console.log(calAverage(14, 8, 2));
// console.log(calAverage(-3, 3));


// function formatTime(minutes) {
//     const hours = Math.floor((minutes/60));
//     minutes = minutes%60;
//     return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}`;
// }

// console.log(formatTime(70))
// console.log(formatTime(450))
// console.log(formatTime(1441))

// const courses = ['HTML', 'CSS', 'JS', 'React', 'Node'];

// function addCourse(course) {
//     if (courses.includes(course)) {
//        return "You already have this course";
//     }
    
//     courses.push(course);
// }

// addCourse('Express');
// console.log(courses);


// console.log(addCourse('CSS'));
// console.log(courses);


// function removeCourse(course) {
//     if (courses.includes(course)) {
//         const idx = courses.indexOf(course);
//         courses.splice(idx, 1);

//         return;
//     }

//     return "No course with this name was found";
// }

// function removeCourse(course) {

//     const idx = courses.indexOf(course);
//     if (!!~idx) {
//         courses.splice(idx, 1)

//         return;
//     }

//     return "No course with this name was found";
// }


// removeCourse('React');
// console.log(courses);

// console.log(removeCourse('Vue'));
// console.log(courses);




// function updateCourse(courseToRemove, courseToAdd) {
//     const idxToRemove = courses.indexOf(courseToRemove);
//     if (!!~idxToRemove) {
//         courses.splice(idxToRemove, 1, courseToAdd)

//         return;
//     }
    
//     return "No course with this name was found";
// }


// updateCourse('Express', 'NestJS');
// console.log(courses);


// console.log(false && true || true || false || true);

// const fruits = ['apples', 'bananas']
// const meat = ['fish', 'beef']

// const food = [...fruits, ...meat]
// console.log(food);


// function findLargestNumber() {
//     let max;

//     for (const num of arguments) {
//         if (typeof num === 'number') {
//             max = num;
            
//             break;
//         }
//     }

//     for (const num of arguments) {
//         if (typeof num === 'number') {
//             if (num > max) {
//                 max = num;
//             }
//         } else {
//             max = findLargestNumber(...num);
//         }
//     }

//     return max;
// }


// console.log(findLargestNumber([[143], 5], 6, 7));

    // function findLongestWord(string) {
    // // Change code below this line
    //     const arr = string.split(" ");
    //     let longestWord = arr[0];

    //     for (let i = 0; i < arr.length; i += 1){
    //         if (arr[0].length < arr[i]) {
    //             longestWord = arr[i];
    //         }
    //     }
    //     return longestWord;
    // // Change code above this line
    // }

// function findLongestWord(string) {
//   // Change code below this line
//     const arr = string.split(" ");
//     let longestWord = arr[0];

//     for (const el of arr){
//         if (longestWord.length < el.length) {
//             longestWord = arr[i];
//         }
//     }
//     return longestWord;
//   // Change code above this line
// }

// function includes(array, value) {
//   // Change code below this line
//     // console.log(array.indexOf(value));

//     // !!~array.indexOf(value)
//     // -(x+1) => -(-1+1) => 0

//     // return !!~array.indexOf(value)


//     for (const el of array) {
//         if (el === value) {
//             return true;
//         }
//     }

//     return false;

//   // Change code above this line
// }



// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));





// -------------------------- Objects -------------------------- //


// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks();


// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// console.log(bookShelf.addBook("The Mist"));
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//     if (book.hasOwnProperty(key)) {
//         console.log(`${key} - ${book[key]}`);
//     }
    
// }

// const keys = Object.keys(book)
// console.log(keys);
// for (const key of keys) {
//     console.log(`${key} - ${book[key]}`);

// }

// const values = Object.values(book)
// console.log(values);
// for (const value of values) {
//     console.log(value);
// }

// const entries = Object.entries(book)
// console.log(entries);

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name="bob"

// console.log(animal);
// console.log(dog.legs);

// console.log(dog.hasOwnProperty("name"));


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// let bookTitleList = [];
// let total = 0;

// for (const book of books) {
//     // console.log(book.title);
//     bookTitleList.push(book.title)

//     total += book.rating;
// }


// const averageRating = total/books.length
// console.log(averageRating.toFixed(2));

// console.log(bookTitleList);

// const temps = [14, -4, 25, 8, 11];
// console.log(temps);
// // console.log(Math.max(temps));

// // console.log(...temps);
// // console.log(Math.min(...temps));

// const copy = [...temps]
// console.log(copy);


// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 14];

// const all = [...currentWeekTemps,...lastWeekTemps]
// console.log(all);

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };
// const third = {  ...second, ...first}
// console.log(third);


// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const { title, author, genres, isPublic, rating:bookRating, coverImage="https://via.placeholder.com/640/480" } = book;

// console.log(coverImage);

// const accessType = isPublic ? "публічному" : "закритому";
// const message = `Книга ${title} автора ${author} з рейтингом ${bookRating} знаходиться в ${accessType} доступі.`;
// console.log(message);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//     const { title, author, rating } = book;
    
// //   console.log(title);
// //   console.log(book.author);
// //   console.log(book.rating);
// }

// for (const { title, author, rating }of books) {
    
    
// //   console.log(title);
// //   console.log(author);
// //   console.log(book.rating);
// }

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name, tag, stats: { followers, views:userV, likes=0 } } = user;

// console.log(likes);

// const rgb = [200, 255, 100];
// // const [red, green, blue] = rgb;
// // const [red, ...colors] = rgb;
// // const [, , blue] = rgb;
// // console.log(blue);


// const [,, blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"


// function doStuffWithBook(book){
//     const { title, numberOfPages, downloads, rating, isPublic } = book;
//     console.log(numberOfPages);
// }

// function doStuffWithBook({title, numberOfPages, downloads, rating, isPublic}){
    
//     console.log(numberOfPages);
// }

// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 748,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// const inputName = 'color';
// const inputValue = 'tomato';

// const colorPicker = {
//     [inputName]: inputValue,
// }

// console.log(colorPicker);

// const a = [1, 2, 3]
// const b = [...a];

// console.log(a===b);

// const cart = {
//     items: [],

//     getItems() {
//         return this.items;
//     },

//     add(product) {
//         const newProduct = {
//             ...product,
//             quantity: 1,
//         }

//         const { items } = this;
//         for (const item of items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;

//                 return;
//             }
//         }

//         items.push(newProduct);
//     },

//     remove(productName) {
//         // const { items } = this;

//         // for (const item of items) {
//         //     const { name } = item;

//         //     if (name === productName) {
//         //         const idx = items.indexOf(item);
//         //         items.splice(idx, 1);
//         //     }
//         // }


//         const { items } = this;

//         for (let i = 0; i < items.length; i += 1){
//             const {name} = items[i];
//             if (name === productName) {
//                 items.splice(i, 1);
//             }
//         }
        
//     },

//     clear() {
//         this.items = [];
//     },

//     countTotalPrice() {
//         const { items } = this;
//         let total = 0;

//         for (const { price, quantity } of items) {
//             total += price*quantity;
//         }

//         return total;
//     },

//     increaseQuantity(productName) {
//         const { items } = this;

//         for (const item of items) {
//             if (item.name === productName) {
//                 item.quantity += 1;
//             }
//         }
//     },
//     decreaseQuantity(productName) {
//         const { items } = this;

//         for (const item of items) {
//             if (item.name === productName) {
//                 item.quantity -= 1;
//             }
//         }
//     },
// }

// console.log(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'cherry', price: 70 });
// cart.add({ name: 'kiwi', price: 80 });
// cart.add({ name: 'kiwi', price: 80 });
// cart.add({ name: 'kiwi', price: 80 });

// console.table(cart.items);
// console.log('Total: ', cart.countTotalPrice());

// cart.remove('lemon');
// console.table(cart.items);

// cart.clear();
// console.log(cart.items);
// console.log('Total: ', cart.countTotalPrice());



// cart.increaseQuantity('cherry');
// cart.decreaseQuantity('kiwi');
// cart.decreaseQuantity('kiwi');
// console.table(cart.items);
// console.log('Total: ', cart.countTotalPrice());


// const profile = {
//     name: 'jack',
//     tag: 'jgluk',
//     location: 'jamaica',
//     avatar: 'https://github.com/nastia-h8/goit-js-hw-v2',
//     stats: {
//         followers: 3345,
//         likes: 3245,
//         views: 6578,
//     }
// }

// const { name, tag,stats:{followers, likes}} = profile;
// console.log(followers);

// const keys = Object.keys(profile.stats)
// console.log(profile.stats);
// for (const key of keys) {
//     console.log(profile.stats[key]);
// }


// function showUserProfileInfo({ name, tag, location, avatar, stats: { followers, likes, views } }) {
//     // const { name, tag, location, avatar, stats: { followers, likes, views } } = userProfile;
//     console.log(name, tag, location, avatar, followers, likes, views);
// }

// showUserProfileInfo(profile);


// const salaries = {
//     john: 0,
//     peter: 0,
//     anna:0,
// }

// let sum = 0;
// const values = Object.values(salaries);
// console.log(values);
// for (const value of values) {
//     sum += value;
// }

// console.log(sum);

// const stones = [{
//     name: 'Opal',
//     price: 150,
//     quantity: 4,
// },
//     {
//     name: 'Diamond',
//     price: 270,
//     quantity: 2,
// },
//     {
//     name: 'Saphir',
//     price: 125,
//     quantity: 1,
//     }
// ]

// function calcTotalPrice(stonesList, stoneName) {
//     for (const {name, price, quantity} of stonesList) {
//         if (name === stoneName) {
//             return price * quantity;
//             // раннє повернення або через let sum=0 і break після співпадіння
//         }
//     }

//     return 'Sorry, no stones were found'
// }


// console.log(calcTotalPrice(stones, 'Opal'));

// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// }
// Object.freeze(Transaction);

// const account = {
//     balance: 0,
//     transactions: [{id: 16, type: 'deposit', amount: 1000}],
    
    
//     createTransaction(amount, type) {
//         return {
//             id: Date.now(),
//             type,
//             amount,
//         }
//     },

//     deposit(amount) {

//         if (amount <= 0) {
//             return 'Error'
//         }

//         const item = this.createTransaction(amount, Transaction.DEPOSIT);
//         this.transactions.push(item);
//         this.balance += amount;
//     },
    
//     withdraw(amount) {
//         if (amount > this.balance || amount <= 0) {
//             return 'Error'
//         }

//         const item = this.createTransaction(amount, Transaction.WITHDRAW);
//         this.transactions.push(item);
//         this.balance -= amount;
//     },

//     getBalance() {
//         return this.balance;

//         // пошук ключів за типом
//         // const keys = Object.keys(this)

//         // for (const key of keys) {
//         //     if (typeof this[key] === 'function') {
//         //         continue;
//         //     } else{ console.log(key);}
//         // }
//     },

//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 return transaction;
//             }
//         }
//         return 'Empty';
//     },

//     getTransactionTotal(type) {
//         let sum = 0;


//         for (const transaction of this.transactions) {
//             if (transaction.type !== type) {
//                 console.log('no transactions yet');
//                 break;
//             } else {
//                 sum += transaction.amount;
//             }
            
//             // if (transaction.type === type) {
//             //     sum += transaction.amount;
//             // }
//         }
//         return sum;
//     },
// }



// console.log(account.createTransaction(1000, 'deposit'));
// console.log(account.deposit(1000));

// account.deposit(1000)
// account.deposit(500)
// account.deposit(1000)
// console.log(account.transactions);

// account.withdraw(500);
// console.log(account.transactions);

// console.log(account.getBalance());

// console.log(account.getTransactionDetails(16));


// console.log(account.getTransactionTotal(Transaction.DEPOSIT));



// function countup(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         const countArray = countup(n - 1);
//         countArray.push(n);
//         return countArray;
//     }
// }

// console.log(countup(5));

// const user = {
//     email: 'mail.com'
// }

// const { email: userEmail  } = user;

// console.log(email);

// function foo({username}={}) {
//     console.log(username);
// }

// foo({username:'john'})

// const arr = [1, 2, 3];
// const [ , _, third] = arr;
// console.log(third);

// function foo({name='no name', car:{audi='audi', bmw='bmw'}={}}={}) {
//     console.log(name);
//     console.log(audi);
//     console.log(bmw);
// }

// foo({
//     name: 'user1',
//     car: {
//         audi: 'a6',
//         bmw: 'x5',
//     }
// })


// foo({
//     name: 'user2',
//     car: {
//         audi: 'a6',
//     }
// })

// foo({
//     name: 'user3',
// })

// foo()


// const arr = [2, 54, 85, 47];

// function foo(first, second, ...rest) {
//     console.log(first, second);
//     console.log(rest);
//     console.log(arguments);
//     console.log(...arguments);
//     const args = Array.from(arguments);
//     console.log(args);
// }

// foo(...arr)

// /**
//  * Розраховує індекс маси тіла людини
//  * @param {Object} obj
//  * @returns {Number} BMI
//  */

// function calcBMI({ weight, height }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));

//     // return Number((weight / Math.pow(height, 2)).toFixed(1));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(calcBMI({ weight:'88,3', height:'1.75'}));

// /**
//  * Виводить ім'я та номер користувача
//  * @param {Object} obj
//  */

// function printContactsInfo({ names, phones }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');

//     for (let i = 0; i < nameList.length, i < phoneList.length; i += 1){
//         console.log(`${nameList[i]} - ${(phoneList[i])}`);
//     }

// }

// printContactsInfo({
//     names:'jacob,william,artemis',
//     phones:'1265, 4572, 5853',
// })

// /**
//  * Виводить рядок про загальну кількість ботів у компанії
//  * @param {Object} obj
//  * @returns {String}
//  */
// function getBotReport({ companyName, repairBots, defenceBots }) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`
// }

// console.log(getBotReport({ companyName: 'CyberDane Sys', repairBots: 150, defenceBots: 50, }));


// function getStockReport({bots:{repairBots, defenceBots}, companyName}) {
//     return `${companyName} has ${repairBots + defenceBots} bots in stock`
// }

// console.log(getStockReport({
//     companyName: 'CyberDane Sys',
//     bots: {
//         repairBots: 150,
//         defenceBots: 50
//     }
// }));


// function createContact(partialContact) {
    
//     return { id: createId(), createdAt: new Date(), list:'default', ...partialContact}
// }

// console.log(createContact({
//     name: 'mango',
//     email: 'mango@m.com',
//     list: 'friends',
// }));

// console.log(createContact({
//     name: 'poly',
//     email: 'poly@m.com',
// }));

// function createId() {
//     return '_' + Math.random().toString(36).substring(2, 9);
// }

// console.log(createId());

// function transformUserName({firstName, lastName, ...props }) {
//     return { fullName: `${firstName} ${lastName}`, ...props };
// }



// console.log(transformUserName({
//     id: 1,
//     firstName: 'lenni',
//     lastName: 'mercer',
//     email: 'mercer@mail.com',
//     tel:'55555'
// }));


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     // for (const key in object) {
//     //     if (object.hasOwnProperty(key)) {
//     //         console.log(key);
//     //     }
//     // }

//     propCount = Object.keys(object).length

//   // Change code above this line
//   return propCount;
// }


// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key])
// }

// console.log(values);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     for (const value of Object.values(salaries)) {
//         totalSalary += value;
//     }
    
//   // Change code above this line
//   return totalSalary;
// }


// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(rgbColors);
// console.log(hexColors);


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     for (const prod of products) {
//         if (prod.name === productName) {
//             return prod.price;
//         }
//     }
//     return null;

//   // Change code above this line
// }


// console.log(getProductPrice("Radr"));


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     let propValues = [];
//     for (const prod of products) {
//         prod[propName] ? propValues.push(prod[propName]) : propValues;
//     }
//     return propValues;

//   // Change code above this line
// }


// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("category"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let sum = 0;
//     for (const {name, price, quantity} of products) {
//         if (productName === name) {
//             sum += price * quantity;
//        }
//     }
//     return sum;

//   // Change code above this line
// }

// console.log(calculateTotalPrice("Droid"));

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {yesterday, today, tomorrow, icon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}= highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);
// console.log(icon);


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//     return { completed, category, priority, ...data }
//   // Change code above this line
// }

// console.log(makeTask({}));

//     console.log(makeTask({
//         category: "Homemade",
//         priority: "Low",
//         text: "Take out the trash"
//     }));

//     console.log(makeTask({ text: "Buy bread" }));

// Change code below this line
// function add(...args) {
//     let sum = 0;
//     for (const el of args) {
//         sum += el;
//     }
//     return sum;
//   // Change code above this line
// }

// console.log(add(15, 27));

// function addOverNum(element, ...args) {
//   let total = 0;

//   for (const arg of args) {
//         if( arg > element) {

//             total+=arg
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// Change code below this line
// function findMatches(firstEl, ...array) {
//     const matches = []; // Don't change this line

//     for (const el of firstEl) {
//         if (array.includes(el)) {
//             matches.push(el)
//         }
//     }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const { books } = this;
//     const idx = books.indexOf(oldName);
//     books.splice(idx,1, newName)
    
//     return books;
//     // Change code above this line
//   },
// };


// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//         },
    
//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (potion.name === newPotion.name) {
//             return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }
//         this.potions.push(newPotion);
//     },

//     removePotion(potionName) {
//         for (const potion of this.potions) {
//             if (potion.name === potionName) {
//                 const idx = this.potions.indexOf(potion);
//                 this.potions.splice(idx, 1);
//                 return;
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`
//     },
//     updatePotionName(oldName, newName) {
//             for (const potion of this.potions) {
//                 if (potion.name === oldName) {
//                     potion.name = newName;
//                     return;
//                 }
//             }
//             return `Potion ${oldName} is not in inventory!`

//     },
//     // Change code above this line
// };


// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// function updateRecords(records, id, prop, value) {
//     if (!value) {
//         delete records[id][prop];
//     } else if (prop==="tracks" && records[id]["tracks"])
//     {
//         records[id][prop].push(value);
//     } else if (prop === "tracks" && !records[id]["tracks"]) {
//         records[id][prop] = [];
//         records[id][prop].push(value);
//     }
//     else {
//         records[id][prop] = value;
//     }
     
//     return records;
// }

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
// console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));

// // Налаштування
// const myArray = [];

// // Змініть код лише під цим рядком
// let i=5;

// while(i>=0){
//   myArray.push(i);
//   i-=1;
// }
// // myArray.reverse()
// console.log(myArray);

// // Налаштування
// const myArray = [];

// // Змініть код лише під цим рядком
// for (let i = 9; i >0; i-=2){
//     console.log(i);
// //   myArray.push(i)
// }

// // console.log(myArray);

// function multiplyAll(arr) {
//   let product = 1;
//   // Змініть код лише під цим рядком
//     for (let i = 0; i < arr.length; i += 1){

//         for (let j = 0; j < arr[i].length; j += 1){
//             product *= arr[i][j];
//         }
//     }
//   // Змініть код лише над цим рядком
//   return product;
// }

// console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

//   function multiply(arr, n) {
//     let product = 1;
//       for (let i = 0; i < n; i++) {
//       product *= arr[i];
//     }
//     return product;
// }
  

// console.log(multiply([2, 3, 4], 3));

// multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]
//       [2, 3, 4], 3           [2, 3, 4], 2 * [4], 2

//   function multiply2(arr, n) {
//     if (n <= 0) {
//       return 1;
//     } else {
//       return multiply2(arr, n - 1) * arr[n - 1];
//     }
// }
  
// console.log(multiply2([2, 3, 4], 3));

// function sum(arr, n) {
//   // Змініть код лише під цим рядком
//     let sum = 0;
//     for (let i = 0; i < n; i+=1) {
//         sum += arr[i];
//     }
//     return sum;
//   // Змініть код лише над цим рядком
// }

// console.log(sum([2, 3, 4], 2));

// function recSum(arr, n) {
//     if (n <= 0) {
//         return 0;
//     } else {
//         return recSum(arr, n - 1) + arr[n - 1];

//     }
// }

// console.log(recSum([2, 3, 4], 3));

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
  // Змініть код лише під цим рядком

    // for (const person of contacts) {
    // Or: if (person.firstName === name && person.hasOwnProperty(prop))
    //     if (person.firstName === name && person[prop]) {
    //         return person[prop];
    //     } else if (person.firstName === name && !person[prop]) {
    //         return 'No such property';
    //     }
    // }

    // return 'No such contact';

//     for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         return contacts[i][prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }

  // Змініть код лише над цим рядком

// console.log(lookUpProfile("Sherlock", "likes"));
// console.log(lookUpProfile("Kristian", "lastName"));
// console.log(lookUpProfile("Bob", "potato"));
// console.log(lookUpProfile("Akira", "address"));

// function countdown(n){
//    if (n<1) {
//     return [];
//   } else {
//     const countArray = countdown(n-1);
//     countArray.unshift(n)

//     return countArray;
//   }
// }

// console.log(countdown(5));

// function friend(friends) {
//     let friendsArr = [];
//     for (const fr of friends) {
//         if (fr.length === 4) {
//             friendsArr.push(fr);
//       }
//     }
//     return friendsArr;
// }

// console.log(friend(["Ryan", "Kieran", "Mark"]));



// -------------------------- Callback, arrow functions -------------------------- //


// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// console.log(registerGuest('mango', greet));

// const isRecipientAvailable = Math.random() > 0.5;

// console.log(isRecipientAvailable);

// const arr = [1, 2, 3, 4, 5]

// for (const el of arr) {
//     console.log(`el: ${el}`);
// }

// arr.forEach(function callback(el, idx, array){
// console.log(`Індекс ${idx}, значення ${el}, масив ${array}`);
// })


// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// console.log('classicAdd', classicAdd(0, 1, 2));


// const arrAdd = (a, b, c) => {
//     return a + b + c;
// }

// console.log('arrAdd', arrAdd(0, 1, 2));

// const arrAdd = (a, b, c) => a + b + c;
// console.log('arrAdd', arrAdd(0, 1, 2));

// const arrAdd = (...rest) => {
//     console.log(rest);
// };

// console.log(arrAdd(1, 2));
// console.log(arrAdd(1, 2, 3));
// console.log(arrAdd(1, 2, 3, 4));


// const numbers = [5, 10, 15, 20, 25];

// Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

//  numbers.forEach((number, index) => { console.log(`Індекс ${index}, значення ${number}`) })

// const logMsg = (number, index) => { console.log(`Індекс ${index}, значення ${number}`) }

// numbers.forEach(logMsg);

// const planets = ["Земля", "Марс", "Венера", "Юпітер"];
// const planetsInUpperCase = planets.map((el, idx, arr) => el.toUpperCase())

// console.log(planetsInUpperCase);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];


// const name = students.map(student => student.name)
// console.log(name);

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const courses = students.map((student) => student.courses)
// const courses2 = students.flatMap((student) => student.courses)

// console.log(courses2);

// const uniqueCourses = courses2.filter((course, idx, array) => array.indexOf(course) === idx);

// console.log(uniqueCourses);

// const values = [51, -3, 27, 21, -68, 42, -37];

// const newValues = values.filter(el => el >= 0)
// console.log(newValues);


// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best);

// const worst = students.filter((student) => student.score <= LOW_SCORE);
// console.log(worst);

// const average = students.filter(({score}) => score>LOW_SCORE && score<HIGH_SCORE);
// console.log(average);


    // const colorPickerOptions = [
    //   { label: "red", color: "#F44336" },
    //   { label: "green", color: "#4CAF50" },
    //   { label: "blue", color: "#2196F3" },
    //   { label: "pink", color: "#E91E63" },
    //   { label: "indigo", color: "#3F51B5" },
    // ];

    // const pinkLabel = colorPickerOptions.find(el => el.label === 'pink')
    // console.log(pinkLabel);

// const pinkIndex = colorPickerOptions.findIndex(({label}) => label === 'pink');
// console.log(pinkIndex);

// console.log([1, 2, -1, 4, 5].every((el) => el >= 0));

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];


// console.log(fruits.every(({amount})=>amount>0));
// console.log(fruits.some(({amount})=>amount>0));

    // const scores = [61, 19, 74, 35, 92, 56];
    // const sortedScores = [...scores].sort()

    // console.log(scores);
    // console.log(sortedScores);

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// const descendingScores = [...scores].sort((a, b) => b - a);
//     console.log(scores);
//     console.log(ascendingScores);
//     console.log(descendingScores);


// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder);

// const inReverseAlphabetOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReverseAlphabetOrder);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
// ];

// const inAscendingScoreOrder = [...students].sort((firstSt, secondSt) => firstSt.score - secondSt.score);
// console.log(inAscendingScoreOrder);
// console.log(students);

// const inDescendingScoreOrder = [...students].sort((firstSt, secondSt) => secondSt.score - firstSt.score);
// console.log(inDescendingScoreOrder);

// const inAlphabeticalOrder = [...students].sort((firstSt, secondSt) => firstSt.name.localeCompare(secondSt.name));
// console.log(inAlphabeticalOrder);

// const inReversedAlphabeticalOrder = [...students].sort((firstSt, secondSt) => secondSt.name.localeCompare(firstSt.name));
// console.log(inReversedAlphabeticalOrder);

// const arr = [2, 7, 3, 14, 6];
// const sum = arr.reduce((previousValue, number) => {
//     return previousValue + number;
// }, 0)

// console.log(sum);

// const students = [
//   { name: "Манго", score: 83, courses: ["математика", "фізика"] },
//   { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
//   { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
//   { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
// ];


// const names  = [...students].sort((firstSt, secondSt) => firstSt.score - secondSt.score).map(({name})=>name);
// console.log(names);

// const uniqueSortedCourses = [...students].flatMap((student) => student.courses).filter((course, idx, arr) => arr.indexOf(course) === idx).sort((a, b) => a.localeCompare(b))
// console.log(uniqueSortedCourses);

    // function filter(array, fnToDo) {
    //     const filteredArr = [];

    //     for (const el of array) {
    //         console.log(el);
    //         console.log(fnToDo(el));
    //         const passed = fnToDo(el);
    //         if (passed) {
    //             filteredArr.push(el);
    //         }
    //     }

    //     return filteredArr;
    // }

    // const callback1 = function (value) {
    //     return value >= 3;
    // }

    // const callback2 = function (value) {
    //     return value <= 2;
    // }

    // const result1 = filter([1, 2, 3, 4, 5, 6], callback1)
    // console.log(result1);

    // const result2 = filter([1, 2, 3, 4, 5, 6], callback2)
    // console.log(result2);


// function fnA(param) {
//     const innerVal = 'innerVal';

//     function innerFn () {
//         console.log(param);
//         console.log(innerVal);
//     }

//     return innerFn;
// }

// const fnB = fnA(555);
// fnB()

// console.log(fnB);


// function makeSheff(name) {
//     const sheffName = name;

//     function makeDish(dish) {
//         console.log(`шеф ${sheffName} готує ${dish}`);
//     }

//     return makeDish;
// }

// // makeDish('котлєтку')

// const sergio = makeSheff('сергій');

// sergio('котлєтку')
// console.dir(sergio);


// function rounder(places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     }
// }

// const rounderTo2 = rounder(2);
// const rounderTo5 = rounder(5);

// console.log(rounderTo2(7.26589));

// console.log(rounderTo5(7.265664489));

// function salaryManagerFactory(employeeName, baseSalary=0) {
//     let salary = baseSalary;

//     return {
//         raise(amount) {
//            return salary += amount;
//         },

//         lower(amount) {
//             return salary -= amount;
//         },

//         current() {
//             return `current salary ${employeeName} - ${salary}`
//         }
//     }
// }

// const salaryManager = salaryManagerFactory('mango', 5000)

// console.log(salaryManager.lower(1000));
// console.log(salaryManager.current());


// const players = [
//     { id: 'player-1', name: 'kiwi', points: 99, online: true },
//     { id: 'player-2', name: 'mango', points: 22, online: false },
//     { id: 'player-3', name: 'poly', points: 47, online: true },
// ]

// const playersName = players.map(player => player.name);
// console.log(playersName);

// const updPoints = players.map(player => {
//     // return Number((player.points * 1.1).toFixed(2));

//     return {
//         ...player,
//         points: Number((player.points * 1.1).toFixed(2)),
//     }
// })

// console.log(updPoints);
// console.log(players);

// const playerIdToUpd = 'player-2';

// const updPlayerbyId = players.map(player => {
//     if (player.id === playerIdToUpd) {
//         return {
//             ...player,
//             points: player.points +300,
//         };
//     }

//     return player;
// })


// const updPlayerbyId = players.map(player =>
//      player.id === playerIdToUpd ? {
//         ...player,
//         points: player.points + 300,
//     } : player
// )

// console.log(updPlayerbyId);

// const tweets = [
//     {id:'001', likes:5, tags:['js', 'nodejs', 'css']},
//     {id:'002', likes:33, tags:['js', 'nodejs','css', 'html']},
//     {id:'003', likes:13, tags:['react', 'nodejs', 'css']},
// ]

// const allTags = tweets.reduce((tags, tweet) => {
//     // tags.push(...tweet.tags)
//     // return tags;
//     // щоб лінтери не ругались

//     return [...tags, ...tweet.tags]

// }, []);

// console.log('allTags:', allTags);
// console.log(tweets);


// const allTagsFlatMap = tweets.flatMap((tweet) => tweet.tags)
// console.log('allTagsFlatMap:', allTagsFlatMap);


// const tagsStat = allTags.reduce((acc, tag) => {
//     // console.log(acc);

//     if (acc[tag]) {
//         acc[tag] += 1;
//         return acc;
//     }
//     acc[tag] = 1;
//     return acc;

// }, {})

// const tagsStat = allTags.reduce((acc, tag) => {

//     if (acc[tag]) {
//         return{
//             ...acc,
//             [tag]: acc[tag] += 1
//         }
//     }

//     return {
//         ...acc,
//         [tag]: 1
//     }

// }, {})

// const tagsStat = allTags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] += 1 : 1
//     }
// }, {})

// console.log(tagsStat);

// const arr = [2, 4, 7, 9, 20]

// arr.forEach(function (item, idx, arr) {
//     arr[idx] = item * 2;
// })

// console.log(arr);

// function createProduct(obj, callback) {
//     const product = {
//         id: Date.now(),
//         ...obj
//     }
//     callback(product);
// }

// function logProduct(product) {
//     console.log('product:', product);
// }

// function logTotalPrice({price, quantity}) {
//     const total = price * quantity;
//     console.log('total:', total);
// }

// createProduct({ name: 'apple', price: 30, quantity: 3 }, logProduct)
// createProduct({ name: 'lemon', price: 10, quantity: 5 }, logTotalPrice)

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,

//     withdraw(amount, onSucces, onError) {
//         if (amount > TRANSACTION_LIMIT){
//             onError(`Transaction limit: ${TRANSACTION_LIMIT}`);
//             return;
//         } else if (amount > this.balance) {
//             onError('Insufficient funds');
//             return;
//         }

//         this.balance -= amount;
//         onSucces(`Transaction completed, current balance: ${this.balance}`)
//     },

//     deposit(amount, onSucces, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Transaction limit: ${TRANSACTION_LIMIT}`);
//             return;
//         } else if (amount <= 0){
//             onError('Invalid amount ⛔');
//             return;
//         }

//         this.balance += amount;
//         onSucces(`Transaction completed, current balance: ${this.balance}`)
//     }
// }

// function handleSuccess(message) {
//     console.log(`Success! ✅ ${message}`);
// }

// function handleError(message) {
//     console.log(`Error! ❌ ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError)
// account.withdraw(600, handleSuccess, handleError)
// account.withdraw(300, handleSuccess, handleError)

// account.deposit(1700, handleSuccess, handleError)
// account.deposit(0, handleSuccess, handleError)
// account.deposit(-600, handleSuccess, handleError)
// account.deposit(600, handleSuccess, handleError)

// function each(array, callback) {
//     array.map((el, idx) => {
//         array[idx] = callback(el);
//     })
//     return array;
// }

// function multiply(value) {
//     return value * 2;
// }

// console.log(each([64, 39, 44, 75, 25], multiply));
// console.log(each([64, 39, 44, 75, 25], function (value) { return value -10;}));
// console.log(each([64, 39, 44, 75, 25], value=>value+40));

// function createProduct(obj, callback) {
//         const product = {
//             id: Date.now(),
//             ...obj
//         }
//         callback(product);
// }
    
// const createProduct = (partialProduct, callback) => callback({
//     ...partialProduct,
//     id: Date.now(),
// });

// const logProduct = product => console.log('product:', product);
// const logTotalPrice = ({price, quantity}) => console.log(`'total:', ${price * quantity}`);

//     createProduct({ name: 'apple', price: 30, quantity: 3 }, logProduct)
//     createProduct({ name: 'lemon', price: 10, quantity: 5 }, logTotalPrice)


// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: 'Jacob',
//     balance: 400,

//     withdraw(amount, onSucces, onError) {
//         if (amount > TRANSACTION_LIMIT){
//             onError(`Transaction limit: ${TRANSACTION_LIMIT}`);
//             return;
//         } else if (amount > this.balance) {
//             onError('Insufficient funds');
//             return;
//         }

//         this.balance -= amount;
//         onSucces(`Transaction completed, current balance: ${this.balance}`)
//     },

//     deposit(amount, onSucces, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`Transaction limit: ${TRANSACTION_LIMIT}`);
//             return;
//         } else if (amount <= 0){
//             onError('Invalid amount ⛔');
//             return;
//         }

//         this.balance += amount;
//         onSucces(`Transaction completed, current balance: ${this.balance}`)
//     }
// }

// const handleSuccess = message => console.log(`Success! ✅ ${message}`);

// const handleError = message => console.log(`Error! ❌ ${message}`);


// account.withdraw(2000, handleSuccess, handleError)
// account.withdraw(600, handleSuccess, handleError)
// account.withdraw(300, handleSuccess, handleError)

// account.deposit(1700, handleSuccess, handleError)
// account.deposit(0, handleSuccess, handleError)
// account.deposit(-600, handleSuccess, handleError)
// account.deposit(600, handleSuccess, handleError)

// const calculateAverage = (...args) => {
//     let total = 0;

//     args.forEach(el => total += el);

//     return total / args.length;
// }


// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(14, 8, 2));


// пояснення незрозумілого
// рефакторинг
// генерація даних
// підготовка до співбесіди

// const numbers = [1, 2, 3, 4, 5, 6];

// function customMap(arr, callback) {
//     const result = [];
//     for (let i = 0; i < arr.length; i += 1){
//         const item = arr[i];
        
//         result.push(callback(item));
//     }
//     return result;
// }


// // function evenNumDouble(num) {
// //     if (!(num % 2)) {
// //         return num*2;
// //     }

// //     return num;
// // }

// const evenNumDouble = num => !(num % 2) ? num * 2 : num;

// console.log(customMap(numbers, evenNumDouble));


const cars = [
    { name: "Audi", model: "A4", type: "Sedan", year: 2019, price: 35000, quantity: 5, onSale: false, },
    { name: "BMW", model: "X5", type: "SUV", year: 2022, price: 55000, quantity: 3, onSale: true, },
    { name: "Audi", model: "Q5", type: "SUV", year: 2020, price: 39000, quantity: 5, onSale: true, },
    { name: "Mercedes-Benz", model: "C-Class", type: "Coupe", year: 2020, price: 45000, quantity: 2, onSale: false, },
    { name: "BMW", model: "X5", type: "SUV", year: 2021, price: 55800, quantity: 3, onSale: true, },
    { name: "Mercedes-Benz", model: "C-Class", type: "SUV ", year: 2023, price: 85000, quantity: 1, onSale: false, },
];


// function getModels(carsList) {
//     return carsList.map(car => car.model);
// }
// console.log(getModels(cars));


// function makeCarsWithDiscount(carsList, discount) {
        // return carsList.map((car) => ({...car, price: car.price * (1 - discount)}));
// }

// console.log(makeCarsWithDiscount(cars, 0.5));
// console.log(cars);


// function filterByPrice(cars, threshold) {
//     return cars.filter(car => car.price >= threshold);
// }
// console.log(filterByPrice(cars, 50000));
// console.log(filterByPrice(cars, 80000));
// console.log(cars);


// function getCarsWithDiscount(cars) {
//     return cars.filter(({onSale}) => onSale);
// }

// const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);
// console.table(getCarsWithDiscount(cars));

// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);
// const getCarsWithType = (cars, type) => cars.filter(({type: carType}) => carType === type);
// const getCarsWithType = (cars, typeTofind) => cars.filter(({type}) => type === typeTofind);
// console.table(getCarsWithType(cars, 'SUV'));
// console.table(getCarsWithType(cars, 'Sedan'));

// function getCarByModel(cars, carName, carModel) {
//     return cars.filter(({name, model}) => name === carName && model === carModel);
// }

// console.log(getCarByModel(cars, 'Audi','Q5'));
// console.log(getCarByModel(cars, 'BMW','X5'));


// function sortByAscendingQuantity(cars) {
//     return [...cars].sort((a, b) => a.quantity - b.quantity);
// }
// console.table(sortByAscendingQuantity(cars));

// function sortByDescendingPrice(cars) {
//     return [...cars].sort(({price:a}, {price:b}) => b - a);
// }
// console.table(sortByDescendingPrice(cars));
// console.log(cars);

// function sortByModel(cars, order){
//     if (order === 'asc') {
//         return [...cars].sort((a, b) => a.name.localeCompare(b.name));
//     }
//     return [...cars].sort((a, b) => b.name.localeCompare(a.name));
// }


// function sortByModel(cars, order) {
//     return [...cars].sort(({name:a}, {name:b}) => order === 'asc'
//         ? a.localeCompare(b)
//         : b.localeCompare(a)
//     );
// }

// console.log(sortByModel(cars, 'asc'));
// console.log(sortByModel(cars, 'desc'));
// console.log(cars);

// function getTotalAmount(cars) {
//     const result = cars.reduce((acc, car) => {
//         return acc + car.quantity;
//     }, 0)

//     return result;
// }

// const getTotalAmount = cars => cars.reduce((total, {quantity}) => total + quantity, 0)
// console.log(getTotalAmount(cars));


// const getCarsOnSale = (cars) => cars.reduce((acc, item) => {
//     if (item.onSale) {
//         acc.push(item);
//         return acc;
//     }
//     return acc;
// }, [])

// const getModelsOnSale = cars => cars.filter(({ onSale }) => onSale).map(({ model }) => model);
// console.log(getModelsOnSale(cars));

// /**
//  * get cars on sale and sort them in asc order
//  * @param {Array} cars - array with object
//  * @returns {Array} - sorted array on sale
//  */
// const getSortedCarsOnSale = cars => cars.filter(({ onSale }) => onSale).sort(({ price: a }, { price: b }) => a - b);
// console.log(getSortedCarsOnSale(cars));
// console.log(cars);


// function foo(string) {
//         return string.split('').reduce((acc, el) => {
//     if (acc[el]) {
//         acc[el] += 1;
//         return acc;
//     } else {
//         acc[el] = 1;
//         return acc;
//     }
//     }, {})
// }

// function foo(string) {
//     return string.split('').reduce((acc, el) => {
//         acc.hasOwnProperty(el) ? acc[el] += 1 : acc[el] = 1;
//         // el in acc ? acc[el] += 1 : acc[el] = 1;
//         return acc;
//     }, {})
// }

// console.log(foo('abcabcdef'));

// const arr = ['honda', 'audi', 'suzuki', 'bmw', 'ford', 'renault', 'skoda']


// function logFoo(arr) {
//         return arr.reduce((acc, car, idx) => {
//             return acc + `${idx+1} - ${car}\n`
//         }, arr.length ? `Загальна кількість авто: ${arr.length}\n` : 'Вибачте, авто не знайдено 😥')
    
//         // console.log(result);
// }

// console.log(logFoo(arr));
// console.log(logFoo([]));


// console.log(Math.random()>0.5);

// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
    
//     order(pizzaName, onSuccess, onError) {
//       return this.pizzas.includes(pizzaName)
//         ? onSuccess(pizzaName)
//         : onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

// //   for (let i = 0; i < orderedItems.length; i += 1) {
// //     totalPrice += orderedItems[i];
// //     }
    
//     orderedItems.forEach(el => totalPrice += el)

//   // Change code above this line
//   return totalPrice;
// }


// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//     numbers.forEach(el => el>value? filteredNumbers.push(el): [])

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

// //   for (let i = 0; i < firstArray.length; i += 1) {
// //     if (secondArray.includes(firstArray[i])) {
// //       commonElements.push(firstArray[i]);
// //     }
// //     }
    
//     firstArray.forEach(el => secondArray.includes(el) ? commonElements.push(el) : [])

//   return commonElements;
//   // Change code above this line
// }


// console.log(getCommonElements([7, 7, 3], [2, 1, 17, 19]));

// function changeEven(numbers, value) {
//   // Change code below this line
//     const newArr = [];
//     numbers.forEach(number => number % 2 ? newArr.push(number) : newArr.push(number + value));
//     return newArr;
//   // Change code above this line
// }


// console.log(changeEven([1, 2, 3, 4, 5], 10));


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(el => el.length);

// console.log(planetsLengths);

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => !(number % 2));
// const oddNumbers = numbers.filter(number => number % 2);

// console.log('evenNumbers', evenNumbers);
// console.log('oddNumbers', oddNumbers);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book=>book.genres);
// const uniqueGenres = allGenres.filter((genre, idx)=>allGenres.indexOf(genre)===idx);

// console.log(allGenres);
// console.log(uniqueGenres);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book=>book.rating>=MIN_RATING);
// const booksByAuthor = books.filter(book=>book.author===AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "green",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 27
//     },
//    {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
// ]

// const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
// console.log(getUsersWithEyeColor(users, "red"));

// const getUsersWithAge = (users, minAge, maxAge) => users.filter(({ age }) => age > minAge && age < maxAge);
// console.log(getUsersWithAge(users, 20, 30));

// const getUsersWithFriend = (users, friendName) => users.filter(user => {
//     if (user.friends.includes(friendName)) {
//         return user;
//     }
// });

// const getUsersWithFriend = (users, friendName) => users.filter(user => {
//     if (user.friends.includes(friendName)) {
//         return user;
//     }
// });

// console.log(getUsersWithFriend(users, ""));

// const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName) ? user : null);
// console.log(getUsersWithFriend(users, ""));

// const getFriends = users => users.flatMap(user=>user.friends).filter((friend, idx, arr)=> arr.indexOf(friend)===idx)
// console.log(getFriends(users));

// const getActiveUsers = users => users.filter(user=>!user.isActive);
// console.log(getActiveUsers(users));

// const getUserWithEmail = (users, email) => users.find(user=>user.email===email);
// console.log(getUserWithEmail(users, "moorehensley@indexia.com"));

// const isAnyUserActive = users => users.some(user => user.isActive);
// console.log(isAnyUserActive(users));

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, { playtime, gamesPlayed }) => acc += playtime / gamesPlayed, 0);
// console.log(totalAveragePlaytimePerGame);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "green",
//     friends: ["Briana Decker", "Sharron Pace", 'matthew'],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 27
//     },
//    {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
// ]

// const getTotalBalanceByGender = (users, gender) => users.filter(user => user.gender === gender).reduce((acc, user) => acc += user.balance, 0);

// console.log(getTotalBalanceByGender(users, "female"));

// const getSortedFriends = users => [...users].flatMap(users => users.friends).filter((friend, idx, arr) => arr.indexOf(friend) === idx).sort((a, b) => a.localeCompare(b));

// const getNamesSortedByFriendCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
    
// // const sortByAscendingBalance = users => users.sort((a,b)=>a.balance-b.balance);

// const sortByDescendingFriendCount = users => users.sort((a,b)=>b.friends.length-a.friends.length);
// console.log(sortByDescendingFriendCount(users));


// // const calculateTotalBalance = users => users.reduce((acc, user) => acc += user.balance, 0)
// // console.log(calculateTotalBalance(users));

// const getTotalFriendCount = users => users.reduce((acc, user) => acc += user.friends.length,0)
// console.log(getTotalFriendCount(users));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// {
//     title: "Redder Than Blood",
//     author: "Tanith Lee", rating: 7.94
// },
// {
//     title: "Enemy of God",
//     author: "Bernard Cornwell", rating: 8.67
// },
// ];
// Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));
// console.log('sortedByAuthorName', sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort(({ author: a }, { author: b }) => b.localeCompare(a));
// console.log('sortedByReversedAuthorName', sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.log('sortedByAscendingRating', sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log('sortedByDescentingRating', sortedByDescentingRating);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a, b) => a.localeCompare(b));
// console.log(names);

// ---------------------------------------------------------THIS----------------------------------------------------------------//

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// showThis();

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;
// user.showContext()

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName);

// function greetGuest(greeting, y) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// // greetGuest.call(mango, 'hello')

// greetGuest.apply(mango, ["Ласкаво просимо", 'hello']);


// function greet(clientName) {
//   return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };


// const steamGreeter = greet.bind(steam);
// console.log(steamGreeter('mango'));


// const gmail = {
//   service: "Gmail",
// };


// const gmailGreeter = greet.bind(steam)
// console.log(gmailGreeter('poly'));


// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer));


// const objA = {
//     x: 5,
//     showX: () => {
//         console.log('💩 showThis in objA: ', this);

//         const objB = {
//             y: 10,

//             showY: () => {
//                 console.log('💩 showThis in objB: ', this);
//             }


//         }

//         objB.showY()
//     },

// }

// objA.showX()

// const objA = {
//     name: 'A',
//     myAge(...args) {
//         console.log(this, args);
//     }
// }

// objA.myAge(22, 14)

// const objB = {
//     name: 'B',
// }

// objA.myAge.apply(objB, [1,2,4,5,6])

// const chopShop = {
//     stones: [
//         { name: 'emerald', price: 1300, quantity: 4 },
//         { name: 'diamond', price: 2700, quantity: 3 },
//         { name: 'saphire', price: 1400, quantity: 7 },
//         { name: 'ruby', price: 800, quantity: 2 },
//     ],
//     // calcTotalPrice(stoneName) {
//     //     return this.stones.reduce((total, {name, price, quantity}) => name === stoneName? total += price * quantity: total, 0)
//     // }

//         calcTotalPrice(stoneName) {
//             const {price, quantity} = this.stones.find(({ name }) =>  name === stoneName );
//             return price * quantity;
//     }
// }

// const chopShop2 = {
//     stones: [
//         { name: 'пісок', price: 1300, quantity: 1 },
//         { name: 'щебінь', price: 2700, quantity: 1 },
//     ]
// }


// console.log(chopShop.calcTotalPrice('emerald'));
// console.log(chopShop.calcTotalPrice.call(chopShop2, 'пісок'));

// const stonesToCalculate = chopShop.calcTotalPrice.bind(chopShop2, 'пісок');
// console.log(stonesToCalculate());

// const phonebook = {
//     contacts: [],

//     add(contact) {
//         const newContact = {
//             list: 'default',
//             ...contact,
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         };
//         this.contacts.push(newContact);
//     },

//     generateId() {
//         return '_' + Math.random().toString(36).substring(2, 9);
//     },

//     getDate() {
//         return Date.now();
//     }
// }

// console.log(phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
// }));

// console.log(phonebook.add({
//     name: 'Poly',
//     email: 'poly@mail.com',
// }));

// console.log(phonebook);


// const calculator = {
//     read(a,b) {
//         this.a = a;
//         this.b = b;
//     },

//     add() {
//         const { a,b } = this;
//         return (a ?? 0) + (b ?? 0); //?? null, undefined, || 0 - false
//     },

//     mult() {
//         const { a,b } = this;
//         return (a ?? 1) * (b ?? 1);
//     }
// }


// calculator.read(5);
// console.log(calculator);

// console.log(calculator.add());
// console.log(calculator.mult());

// ---------------------------------------------------------Prototypes and Classes----------------------------------------------------------------//

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'mango'
// console.log(dog);

// console.log(animal.isPrototypeOf(dog));

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
// }

// console.log(typeof User);

// const mango = new User('Mango', 'mango@mail.com')
// console.log("mango", mango);
// console.log(mango.email);


// class User {
//   // Деструктуризуємо об'єкт
//   constructor({name, email}) {
//     this.name = name;
//     this.email = email;
//     }
    
//     getEmail() {
//     return this.email;
//   }
// }


// const poly = new User({
//   name: "Поли",
//   email: "poly@mail.com",
// });

// console.log(poly);

// console.log(poly.getEmail());

// class User{
//     name;
//     #email;

//     constructor({ name, email }) {
//         this.name = name;
//         this.#email = email;
//     };

//     #getEmail() {
//     return this.#email;
//     };

//     changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }



// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });

// console.log(mango.#getEmail);
// console.log(mango.getEmail());
// console.log(mango.email);


// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//     get email() {
//         return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: "Манго", email: "mango@mail.com" });

// mango.email = "mango@supermail.com";
// console.log(mango.email);

// class User{
//     static Roles = {
//         ADMIN: "admin",
//         EDITOR: "editor",
//     };

//     #role;
//     #email;

//     constructor({ email, role }) {
//         this.#email = email;
//         this.#role = role;
//     };

//     get role(){
//         return this.#role;
//     };

//     set role(newRole) {
//         this.#role = newRole;
//     }
// }


// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// mango.role = User.Roles.EDITOR

// console.log(mango.role);

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));



// class User{
//     static counter = 0;
//     static addUser() {
//         // User.counter += 1;
//         this.counter += 1;
//         console.log(`Number of users: ${this.counter}`);
//     }

//     #location;

//     constructor({ name, email, age = 18, location = 'World', password} = {}){
//         this.name = name;
//         this.email = email;
//         this.age = age;
//         this.#location = location;
//         this.password = password;

//         User.addUser();
//     }

//     #getEmail() {
//         console.log('Your email', this.email);
//     }

//     sayHello() {
//         // console.log(this.#getEmail());
//         console.log(`Hello, ${this.name}!`);
//     }

//     get userLocation() {
//         return this.#location;
//     };
    
//     set userLocation(newLocation) {
//         const value = prompt('Enter password');
//         if (value === this.password) {
//             this.#location = newLocation;
//             console.log('New location:', this.#location);
//         } else {
//             console.log('Wrong password 💩');
//         }
//     };

//     get userName() {
//         return this.name;
//     };

//     set userName(newName) {
//         this.name = newName;
//         console.log('New name:', this.name);
//     }
// }


// const mango = new User({name:'mango', email:'mango@mail.com', location:'Lviv', password:'qwerty111'});
// console.log(mango);

// const kiwi = new User({name:'kiwi', email:'kiwi@mail.com', age:25, password:'12345fgh'});
// console.log(kiwi);

// const apple = new User({name:'apple', email:'apple@mail.com', age:30, password:'apple5263', location:'Kyiv'});
// console.log(apple);

// const lemon = new User();
// console.log(lemon);

// mango.sayHello();

// console.log(mango.userLocation);
// mango.userLocation = 'Dnipro';

// console.log(kiwi.name);
// kiwi.name = 'kiwwwii'; // gettter, setter мають однакову назву, але відмінну від назви ключа
// console.log(kiwi.userName);
// kiwi.userName = 'kiwwwii';

// console.log(mango.constructor.counter); документація каже, що не можна


// class User{
//     static counter = 0;
//     static addUser() {
//         // User.counter += 1;
//         this.counter += 1;
//         console.log(`Number of users: ${this.counter}`);
//     }

//     #location;

//     constructor({ name, email, age = 18, location = 'World', password} = {}){
//         this.name = name;
//         this.email = email;
//         this.age = age;
//         this.#location = location;
//         this.password = password;

//         User.addUser();
//     }

//     #getEmail() {
//         console.log('Your email', this.email);
//     }

//     sayHello() {
//         // console.log(this.#getEmail());
//         console.log(`Hello, ${this.name}!`);
//     }

//     get userLocation() {
//         return this.#location;
//     };
    
//     set userLocation(newLocation) {
//         const value = prompt('Enter password');
//         if (value === this.password) {
//             this.#location = newLocation;
//             console.log('New location:', this.#location);
//         } else {
//             console.log('Wrong password 💩');
//         }
//     };

//     get userName() {
//         return this.name;
//     };

//     set userName(newName) {
//         this.name = newName;
//         console.log('New name:', this.name);
//     }
// }

// class Fruit extends User{
//     // constructor({name, email, age, password, sweetness}) {
//     //     super({ name, email, age, password }) //комунікація між конструктором юзера і конструктором фрукта
        
//     //     this.sweetness = sweetness;
//     // }

//     //за допомогою операції rest
//     constructor({sweetness, ...args}) {
//         super(args) //комунікація між конструктором юзера і конструктором фрукта
        
//         this.sweetness = sweetness;
//     }

//     makeMarmalades() {
//         console.log(`marmelads are sweet? ${this.sweetness}`);
//     }
// }

// class Vegetable extends User{
//     constructor({name, email, age, password, readyToEat}) {
//         super({ name, email, age, password })

//         this.readyToEat = readyToEat;
//     }

// }

// const cherry = new Fruit({ name: 'cherry', email: 'cherry@mail.com', age: 19, password: 'cherryBOOM', sweetness:true});
// console.log(cherry);

// const potato = new Vegetable({ name: 'potato', email: 'potato@mail.com', age: 27, password: 'potato857', readyToEat:false});
// console.log(potato);


// class Blogger{
//     constructor({email, age, numberOfPosts,topics}) {
//         this.email = email;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }

//     getInfo() {
//         return `User "${this.email}" is ${this.age} years old and has ${this.numberOfPosts} posts`
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//         console.log('upd number of posts', this.numberOfPosts);
//     }
// }

// const mango = new Blogger({ email: 'mango@mail.com', age: 40, numberOfPosts: 20, topics: ['sport', 'weather'] })
// console.log(mango);

// console.log(mango.getInfo());
// console.log(mango.updatePostCount(5));


// class Storage{
//     constructor(items) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(item) {
//         if (!this.items.includes(item)) {
//             this.items.push(item);
//             console.log('upd items:', this.items);
//             return;
//         }
//          return 'Такий товар вже є'
//     }

//     removeItem(item) {
//         const idx = this.items.indexOf(item)
        
//         if (!!~idx) {
//             this.items.splice(idx, 1);
//             console.log('upd items:', this.items);
//             return;
//         }
//         return 'Такого товару немає'
//     }
// }

// const storage = new Storage(['🥣', '🍕', '🍣', '🍟', '🍔'])
// console.log(storage);

// // console.log(storage.getItems());
// storage.addItem('🥗');
// // console.log(storage.addItem('🥣'));

// storage.removeItem('🥗');
// console.log(storage.removeItem('🥖'));

// class User{
//     #login;
//     #email;

//     constructor({login, email}) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get userLogin() {
//         return this.#login;
//     }

//     set userLogin(newLogin) {
//         if (this.#login !== newLogin) {
//             this.#login = newLogin;
//         }
//     }

//     get userEmail() {
//         return this.#email;
//     }

//     set userEmail(newEmail) {
//         if (this.#email !== newEmail) {
//             this.#email = newEmail;
//         }
//     }
// }

// const mango = new User({ login: 'mango', email: 'mango@mail.com' })

// mango.userLogin = 'new login of mango';
// console.log(mango.userLogin);

// console.log(mango.userEmail);

// mango.userEmail = 'new email for mango user'
// console.log(mango.userEmail);


// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH:'high'
//     }

//     constructor(note) {
//         this.items = note;
//     }

//     addNote(note) {
//         const inArr = this.items.some(({ text }) => text === note.text);
//         if (!inArr) {
//             this.items.push(note);
//         }
//     }

//     removeNote(text) {
//         const idx = this.items.findIndex(({text:textNote}) => textNote === text);

//         if (!!~idx) {
//             this.items.splice(idx, 1);
//         }
//     }

//     updateNote(text, newPriority) {
//         const idx = this.items.findIndex(({ text: textNote }) => textNote === text);
        
//         if (!!~idx) {
//             this.items[idx].priority = newPriority;
//         }
//     }
    
// }
// console.log(Notes.prototype);

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'First note', priority: Notes.Priority.LOW })
// // console.log(myNotes.items);

// myNotes.addNote({ text: 'Second note', priority: Notes.Priority.LOW })
// // console.log(myNotes.items);

// myNotes.addNote({ text: 'Third note', priority: Notes.Priority.LOW })
// // console.log(myNotes.items);

// // myNotes.removeNote('First note');
// // console.log(myNotes.items);

// myNotes.updateNote('Second note', Notes.Priority.HIGH)
// console.log(myNotes.items);

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };


// console.log(pizzaPalace.order('Smoked'));


// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     //   return [...uniqueEmails];
//       return uniqueEmails
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };
// // console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// // console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());

// class Storage{
//   constructor(items){
//     this.items = items;
//   }

//   getItems(){
//     return this.items;
//   }

//   addItem(newItem){
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove){
//       const idx = this.items.indexOf(itemToRemove);
//       if (!!~idx) {
//           this.items.splice(idx, 1);
//       }
//       return 'no item found'
      
//   }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prlonger");
// console.log(storage.removeItem("Prlonger"));
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// class StringBuilder{
//   constructor(initialValue){
//       this.value = initialValue;
//   }

//   getValue(){
//     return this.value;
//   }

//   padEnd(str){
//     //   this.value = this.value + str;
//     //   this.value = this.value.concat(str);
//     //   this.value = `${this.value}${str}`
//       this.value = [this.value, str].join('');
//   }

//   padStart(str){
//     //   this.value = str + this.value;
//     //   this.value = str.concat(this.value);
//     //    this.value =`${str}${this.value}`
//       this.value = [str,this.value].join('')
//   }

//   padBoth(str){
//     //   this.value = str + this.value + str;
//     //   this.value = str.concat(this.value, str);
//     //    this.value =`${str}${this.value}${str}`
//     //   this.value = [str,this.value,str].join('')
//   }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class StringBuilder {
//   // Change code below this line
//   #value;
  
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//     padBoth(str) {
//       console.log('this.#value', this.#value);
//     this.#value.padStart(str);
//     this.#value.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice (price){
//     if(price>Car.#MAX_PRICE){
//       return "Error! Price exceeds the maximum";
//     } else{
//       return "Success! Price is within acceptable limits"
//     }

    
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel, blacklistedEmails=[] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }

//   blacklist(email){
//     this.blacklistedEmails.push(email);
//   }

//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true