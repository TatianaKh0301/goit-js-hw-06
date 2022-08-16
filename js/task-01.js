// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і 
// кількість елементів в категорії (усіх <li>, вкладених в нього).

const categoriesList = document.querySelectorAll('li.item');
const numberOfCategories = categoriesList.length;
console.log("Number of categories:", numberOfCategories);

categoriesList.forEach(function (categoryList) {
    console.log(`Category: ${categoryList.querySelector('h2').textContent}`);
    console.log(`Elements: ${categoryList.querySelectorAll('ul li').length}`);
});