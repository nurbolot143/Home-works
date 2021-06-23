/*1. Имеется строка "иВан" , нужно обработать эту строку 
и получить правильное написание в виде "Иван"*/
let userName;
userName = "иВан";
let newUserName = userName.toLowerCase();
let result = newUserName[0].toUpperCase() + newUserName.slice(1);
console.log(result);

/* 2. Есть стоимость в виде строки "$120". Сначала идёт знак
валюты, а затем – число. Необходимо извлечь стоимость без 
 знака $ т.е. из строки "$120" нужно получить "120"*/
let price;
price = "$120";
console.log(price.slice(1));

/*3. Имеется массив fruits = [ 'Яблоко', 'Абрикос', 'Апельсин']
нужно удалить "Апельсин" и показать сообщение в консоли: "Вы удалили 
Апельсин".Далее из массива удалить "Яблоко". После показать в консоли 
удаленные  элементы(Яблоко и Апельсин) в виде массива*/
let fruits = ["Яблоко", "Абрикос", "Апельсин"];
let fruitsDel3 = fruits.pop();
let message = "Вы удалили " + fruitsDel3;
console.log(message);
let fruitsDel1 = fruits.shift();
let message2 = "Вы удалили " + fruitsDel1;
console.log(message2);
let fruitsDel = [fruitsDel1, fruitsDel3];
console.log(fruitsDel);
