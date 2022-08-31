//                                    Виды комментариев:

/* Многострочный
   Комментарий */

// Однострочный комментарий       Комбинация клавиш для раскомментирования - ctrl + / 

//                                    Hello World JS!

console.log("Hello, World JS!")

//                                    Типы переменных:

//                                var       let      const

// переменную можно - 1. Объявлять! 
//                    var tin;
//                    2. Присваивать ей значение, после объявления:
//                    var tin;       
//                    tin = "der";
//                    3. Присваивать ей значение во время объявления: 
//                    var tin = "der";
//                    4. Обновлять! 
//                    var tin = "der";
//                        tin = "red"; 
//                    5. Повторно объявлять (переопределять) (так можно только с var):
//                    var tin = "der";
//                    var tin = "red";             

// Новый стандарт ES6 был утвержден в июне 2015 года.
// let - переменная
// const - константа

// Старый стандарт ES5
// var - переменная

//let - может менять значение во время работы программы

let userName = "ilia";
console.log(userName);

userName = "maksim";
console.log(userName);

// const - не может менять своё значение во время работы программы
const yearOfBirth = 1999;

//                    const yearOfBirth = 1999;
//                    yearOfBirth = 2000;------ Ошибка!!!
// после ошибки консоль ничего не выводит, после ошибки программа не работает.
// проекты пишем на const, если понимаем что переменная будет меняться - меняем на let;
// c let мы можем просто объявить сразу несколько переменных не присваивая им значение;

// let name, v, p;
// а уже затем присвоить объявленным переменным значения:
// name = 1; 
// v = 2;
// p = 3;
// но можем и объявить и присвоить значение одной переменной сразу
// let tin = "der";
// c "const" мы не можем делать - строка вниз.
// const profession; - ошибка! так как при const нужно сразу присваивать значение.
// при объявлении сonst сразу нужно писать то значение, которое она должна содержать!

// верная запись - let userName = "ilia"; const userName = "oleg"; и никак иначе!

//                                        var
// в отличие от let и const, var имеет функциональную область видимости, а не блочную
// блок может быть функцией и не только!
// не рекомендуется к использованию
// var - может менять своё значение на протяжении работы программы!
// var - устаревший аналог let - но более гибкий.


//                                    Отличия var let const
//                Отличие I
//
// область видимости var - ограничена функцией, (границы функции {...}) либо 
// глобальной областью видимости, если var находится вне функции.
// если речь идёт о
//
// var weight = 10;
// if (weight > 8) {
//    var kg = `Вес ${weight} кг`;  
//    console.log(kg)
// }
//
// если при этом вызвать переменную kg в браузере (в глобальной области видимости)
// то мы увидим значение переменной, потому что в данном случае var находится  
// не в функции а в блоке, а это значит что область ее видимости является глобальной.
//
// Ключевое отличие var от let и const - область видимости
// у let и const область видимости ограничена - не функцией (как у var), а Блоком!
// Блок - любой элемент с фигурными скобками, в том числе и Функция!
// поэтому если мы поменяем var на let:
//
// let weight = 10;
// if (weight > 8) {
//    let kg = `Вес ${weight} кг`;  
//    console.log(kg)
// }
//
// и попытаемся вызвать переменную kg из глобальной области видимости
// то такой переменной в ней не будет! потому что область видимости ограничена Блоком!
// то же самое относится к const!
// 
// итого Область видимости var - Функция
// Область видимости let and const - Блок
//
//                Отличие II
//
// с помощью let и const (в отличие от var) в пределах одной области видимости
// переменная может быть объявлена - только один раз!
//
// c var можно вот так:
// var user = "ilia";
// var user = "ilai";  --- oк ---
//
// c let так нельзя!
//
// let user = "ilia";
// let user = "ilai";  --- Ошибка! ---
//
// Если мы используем let и хотим Обновить значение переменной, то:
//
// let user = "ilia";
//     user = "ilai";  --- oк ---
//
// Далее:
//
// let speed = 60;
// let shtraf = false;

// if (speed > 50) {
// let shtraf = true;  
// }
//
// в этом случае при вызове переменной shtraf в глобальной области видимости 
// значение будет - false, потому что область видимости переменной let - блок,
// в данном случае Блок if {...}
// let shtraf = false; и let shtraf = true; - это две разные переменные 
// в двух разных областях видимости
// если сделать тоже самое с помощью var - значение переменной shtraf - true.
//
//                 Отличие III
//
// чем отличается let от const?
// 
// переменные объявленные с помощью let - можно обновлять!
//
// let speed = 60;
//     speed = 50;    --- oк ----
//
// переменные объявленные с помощью const - нельзя обновлять! 
// (Условие не относится к свойствам объекта) 
//
// const car = "tesla";
//       car = "BMW";   --- Ошибка! ---
//
// Условие не относится к свойствам объекта:
//
// const car {
//       name: "tesla",
//       color: "red"  
// };
//
// если я хочу обновить свойство name:
//
// const car {
//       name: "BMV",
//       color: "red"  
// };                   --- Ошибка! ---
// потому что таким образом мы переопределяем переменную созданную с помощью const!
//
// Но мы можем обновлять отдельные свойства переменной const:
//
// const car {
//       name: "tesla",
//       color: "red"  
// }; 
//
// car.name = "BMW";   --- ок ---
// 
// если мы хотим запретить обновлять свойства объекта, то:
// используем метод: 
//
// const car {
//       name: "tesla",
//       color: "red"  
// }; 
//
// Object.freeze(car)
//
// car.name = "BMW";  --- car = "tesla" ---
//
// Итог:
//
// var - не используем, но понимаем как работает, для дальнейшей работы с legacy
//
// const - используем всегда
//
// let - используем когда понимаем что переменную в будущем потребуется обновить.