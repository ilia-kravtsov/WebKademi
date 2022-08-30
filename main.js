/* multiple 
strings comment
*/

// Vyvod v console raskommentir - ctrl + / 

console.log("hello, from JS!")

// declaring a value
// Новый стандарт ES6 
// let - переменная
// const - константа

// Старый стандарт ES5
// var


//let - может менять значение во время работы программы
let userName = "ilia";
console.log(userName);


userName = "maksim";
console.log(userName);

// const - не могут менять своё значение во время работы программы
const yearOfBirth = 1999;
// yearOfBirth = 2000; - Ошибка!!!
// после ошибки консоль ничего не выводит, после ошибки программа не работает.
// проекты пишем на const, если понимаем что переменная будет меняться - меняем на let;
// c let мы можем просто объявить сразу несколько переменных не присваивая им значение;

/* 
let name, v, p;
а уже затем присвоить объявленным переменным значения
name = 1; 
v = 2;
p = 3;

c const мы так сделать не можем!
*/


