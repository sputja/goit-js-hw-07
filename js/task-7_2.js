/*
В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>
В JS есть массив строк.


Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li
за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
*/
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.createElement("ul");
const itemIngredients = document.createElement("li");
itemIngredients.textContent = ingredients[0];
const itemIngredients1 = document.createElement("li");
itemIngredients1.textContent = ingredients[1];
const itemIngredients2 = document.createElement("li");
itemIngredients2.textContent = ingredients[2];
const itemIngredients3 = document.createElement("li");
itemIngredients3.textContent = ingredients[3];
const itemIngredients4 = document.createElement("li");
itemIngredients4.textContent = ingredients[4];
const itemIngredients5 = document.createElement("li");
itemIngredients5.textContent = ingredients[5];

const ul_ingredients =  document.querySelector('#ingredients');
// console.log(ul_ingredients);
ul_ingredients.append(
  itemIngredients,
  itemIngredients1,
  itemIngredients2,
  itemIngredients3,
  itemIngredients4,
  itemIngredients5
);
