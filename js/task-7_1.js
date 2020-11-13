/*
Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4

const categories = document.querySelectorAll('li.item');
categories.forEach((category) => {
  const title = category.querySelector('h2');
  const elm = title.querySelector('li');

*/
const categories = document.querySelectorAll('h2');
// const categories1 = categories.querySelectorAll('li');
console.log( "Количество категорий:", categories.length);

categories.forEach((elm) => console.log("Категория:",elm.innerText));


// console.log( "Категория:", categories.forEach((elm, index) => elm)
// , "Категория:",categories[1].innerText,
// "Категория:",categories[2].innerText
// // categories1
// // categories1[1].innerText
// );
// categories.forEach((category) => {
//   const title = category.querySelector('h2');
//   const elm = elem.querySelector('li.item');
//   console.log( "количество категорий:", categories, title);
//   // return title ;
// });
// console.log( "количество категорий:", categories.length, "количество :" ,title);

//   const title = document.querySelectorAll("h2");
// const item = document.querySelectorAll("li.item");
// console.log("количество категорий:", title.length);
// console.log("количество :", item);

// const list = document.querySelectorAll("li");

// const names =title.map(name => name);
// console.log(list.lastElementChild);
// console.log(h2.querySelectorAll(elm));

// ========= querySelectorAll =========
// const list = document.querySelectorAll('li');

// list.forEach(item => console.log(item));

// ========= parentNode =========
// const firstLi = document.querySelector("li");

// console.log(firstLi.lastElementChild);
