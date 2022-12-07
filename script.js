// console.log("Третий скрипт")
/* Блочный комментарий */
"use strict";


// let message; // let, const, var
// message = "Hello";
// console.log(message);

//  let a = 10; // инициализация
//  a = 3.5;
//  console.log(a);

//  let b, c;
//  b = "Строка";

// a = 5; 
// console.log(a);

// const week = 7;

// let a = 10;
// console.log(a);
// console.log(typeof a);
// console.log(typeof(a));
// a = 3.5;
// console.log(a);
// console.log(typeof a);

// let str1 = "Двойные кавычки";
// let str2 = 'Одинарные кавычки';
// let str3 = `Обратные кавычки ${str1} 
// 3 + 2 = ${3+2}`;
// console.log(str1);
// console.log(str2);
// console.log(str3);

// console.log(typeof(str1));

// let firstName = "Sergey";
// alert(`Hello, ${firstName}`);

// let a = 365;
// let b = "Земля";
// let c = "7 млрд.";
// let d = "Солнца";
// alert(`Мы живем на планете ${b}, она делает один оборот вокруг ${d} за ${a} дней. Население нашей планеты составляет примерно ${c} человек.`)

// boolean
// let a = true;
// console.log(a);
// let b = false;
// console.log(b);
// console.log(typeof(b));

// let res = confirm("Знаете HTML?");
// if(res){
//     alert("Пора учить JavaScript!")
// }
// else{
//     alert("Нужно выучить!")
// }

/*
Типы данных:
Number
String
Boolean
Underfined
Null
Object
*/

// let res;
// alert(res); Underfined

// let res = null;
// alert(res);
// alert(typeof(res))
// res = 5;
// alert(res);

// let firstName = prompt("Ваше имя:", "Ольга");
// alert(`Добро пожаловать на сайт, ${firstName}. На сайте много интересного`);


// let a = 12;
// let b = 2;

// console.log('+:', a + b);
// console.log('-:', a - b);
// console.log('*:', a * b);
// console.log('/:', a / b);
// console.log('%:', a % b); // остаток от деления
// console.log('**:', a ** b); //возведение в степень

// let st1 = "Hello";
// let st2 = "World";
// console.log(st1 + " " + st2); // Конкатенация строк

// let c = 23;
// let d = "6";
// console.log(c + d); //236

// let login = prompt("Login");
// let password = prompt("Password");
// alert("***Данные для входа***\nВаш логин: " + login + "\nВаш пароль: " + password);

// let st = "\tИнструкция:\nДокумент \"script.js\" файлы лежат \rв папке D:\\programs\\script.js";
// alert(st);

// alert("6" / "2"); 

// let a = parseInt(prompt("Введите первое число: ", "2.5"));
// let b = +prompt("Введите второе число:", "2.5");
// // console.log(typeof(a));
// alert("Сумма: " + (a + b));

// console.log(parseInt("21.84"));
// console.log(parseFloat("21.84"));
// console.log(parseFloat("21.84123").toFixed(2));
// console.log(Number("21.84"));
// console.log(+"21.84");
// console.log(+true);
// console.log(+false);

// let a = parseInt(prompt("Введите число: ", 2));
// alert("Квадрат числа: " + a ** 2 + "\nКуб числа: " + a ** 3 + "\n4я степень числа: " + a ** 4);

// let num = +prompt("Введите пятизначное число: ", "12345");
// let n = num;
// let a, b, c, d, e;
// a = num % 10; // 5
// console.log(a);
// num = parseInt(num / 10); // 1234
// // console.log(num);
// b = num % 10;
// console.log(b);
// num = parseInt(num / 10);
// // console.log(num);
// c = num % 10;
// console.log(c);
// num = parseInt(num / 10);
// // console.log(num);
// d = num % 10;
// console.log(d);
// num = parseInt(num / 10);
// // console.log(num);
// e = num % 10;
// console.log(e);
// let proizv = a*b*c*d*e;
// let averange = (a+b+c+d+e)/5;
// alert("Произведение цифр " + n + " : " + proizv + "\nСреднее арифметическое: " + averange);



// let a = 0, b = 0;
// ++a; // a = a + 1
// console.log(a); // 1
// b++;
// console.log(b); // 1

// let a = 0, b = 0;
// let c = a++ + 2;
// let d = ++b + 2;
// console.log(a); // 1
// console.log(b); // 1
// console.log(c); // 2
// console.log(d); // 3


// let a = 1;
// let b = ++a;
// let c = b + 5 + a;
// console.log(c);


// let sum = +prompt("Введите 1 число: ", 5);
// console.log(sum);
// sum += +prompt("Введите 2 число: ", 4);
// // sum = sum + +prompt("Введите 2 число: ", 4);
// console.log(sum);
// sum += +prompt("Введите 3 число: ", 6);
// console.log(sum);

// let st = "Строка";
// st += "Добавленная строка";
// console.log(st);

// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 3);
// console.log(5 <= 3);
// console.log(5 == 5);
// console.log(5 != 3);
// console.log(5 === '5');
// console.log(5 !== '5');


// (7 > 3)? alert("7") : alert("3");

// let ch = +prompt("Угадайте число от 1 до 10");
// // ch == 7 ? alert("Угадали!") : alert("Не угадали!");
// let num = 7;
// ch == num ? alert("Угадали!") : (ch < num ? alert("Загаданное число больше!") : alert("Загаданное число меньше!"));

// Операторы логического ветвлени
/*
if(условие){
    истина (true)
}
else{
    ложь (false)
}
*/

// if(3 > 7){
//     alert("7");
// }
// else{
//     alert("3");
// }

// alert(+false);

// let a = "строка";
// if(a){
//     alert(true);
// }

// let a = 12;
// let b = 6;
// if(b != 0){
//     let res = a/b;
//     alert("Результат: " + res);
// }
// else{
//      alert("Делить на 0 нельзя!");
// }

// let a = 12;
// let b = 12;
// if (a > b) {
//     alert(a + " > " + b);
// }
// if (a<b) {
//     alert(a + " < " + b);
// }
// if (a==b) {
//     alert(a + " = " + b);
// }


// let d = prompt("Введите день недели (цифрами): ");
// if (d == 1) {
//     alert("День недели - понедельник");
// }
// else if (d == 2) {
//     alert("День недели - вторник");
// }
// else if (d == 3) {
//     alert("День недели - среда");
// }
// else if (d == 4) {
//     alert("День недели - четверг");
// }
// else if (d == 5) {
//     alert("День недели - пятница");
// }
// else if (d == 6) {
//     alert("День недели - суббота");
// }
// else if (d == 7) {
//     alert("День недели - воскресенье");
// }
// else {
//     alert("Такого дня недели не существует!");
// }


// if (5 == 5 || 5 > 7){  // && - и, || - или, ! - логическое не(not)
//     console.log("True");
// }
// else{
//     console.log("False");
// }


// let age = prompt("Введите возраст: ");
// if(age > 17 && age < 70){
//     alert("Вы можете получать права");
// }
// else{
//     alert("Права не давать")
// }


// let age = prompt("Введите возраст: ");
// if(age < 18 || age > 69){
//     alert("Права не давать");
// }
// else{
//     alert("Вы можете получать права")
// }


// Конструкция выбора switch
/*
switch(условие){
    case значение_1:
        код;
        break;
    case значение_n:
        код;
        break;
    default:
        код;
}
 */

// let a = +prompt("Введите число:");
// switch(a){ // a===1
//     case 1:{
//         alert("Код 1");
//     }break;
//     case 2:{
//         alert("Код 2");
//     }break; 
//     case 3:{
//         alert("Код 3"); 
//     }break;
//     default:{
//         alert("Я таких значений не знаю");}
// }


// let a = +prompt("Введите результат '2 + 2'");
// switch(a){ // a===1
//     case 4:
//         alert("Верно");
//     break;
//     case 3:
//     case 5:
//         alert("Не верно"); 
//     break;
//     default:
//         alert("Я таких значений не знаю");
// }

// let m = +prompt("Введите номер месяца");
// let n = null;
// switch (m) {
//     case 1: n = "Январь"; break;
//     case 2: n = "Февраль"; break;
//     case 3: n = "Март"; break;
//     case 4: n = "Апрель"; break;
//     case 5: n = "Май"; break;
//     case 6: n = "Июнь"; break;
//     case 7: n = "Июль"; break;
//     case 8: n = "Август"; break;
//     case 9: n = "Сентябрь"; break;
//     case 10: n = "Октябрь"; break;
//     case 11: n = "Ноябрь"; break;
//     case 12: n = "Декабрь"; break;
//     default: n = "Неправильный номер месяца";
// }
// alert("Вы ввели: " + n);

/* + - * / % */
// let operator = prompt("Действие: +, -, *, /, %");
// let num1 = parseInt(prompt("Введите первое число: ", 5));
// let num2 = parseInt(prompt("Введите второе число: ", 2));

// switch (operator) {
//     case "+": {
//         alert("Сумма: " + (num1 + num2));
//     } break;
//     case "-": {
//         alert("Разнoсть: " + (num1 - num2));
//     } break;
//     case "*": {
//         alert("Произведение: " + (num1 * num2));
//     } break;
//     case "/": {
//         alert("Частное: " + (num1 / num2));
//     } break;
//     case "%": {
//         alert("Остаток от деления: " + (num1 % num2));
//     } break;
//     default: {
//         alert("Я такого действия не знаю");
//     }
// }


// document.write("<p>Текст выведен <u>в окно браузера</u></p>");
// document.write("<p><img src ='1.jpg'></p>");

// Циклы
// Цикл do ... while (с постусловием)
/*
do{
    тело цикла;
}while(условие);
 */

// let i = 0;   // счетчик
// do {
//     document.write("Это номер: " + i + "<br>");
//     i++;
// } while (i < 5);

// Итерация - шаг цикла

// let i = 1;
// do {
//     document.write("Квадрат " + i + " равен " + i**2 +"<br>");
//     i++;
// } while (i < 8);



// Цикл while (цикл с предусловием)
/*
while(условие){
    тело цикла;
}
*/
// let i = 0;   // счетчик
// while (i < 5) {
//     document.write("Это номер: " + i + "<br>");
//     i++;
// }

// Написать программу, выводящую четные числа в диапазоне от 1 до 20 (включительно)
// let i = 1; 
// while (i <= 20) {
//     if (i % 2){ //i % 2 != 0
//         document.write(i + " "); 
//     }
//     i++;
// }


// Написать программу, которая выводит числа от 1 до 30, за исключением чисел кратным 3

// let i = 1;
// while (i <= 30) {
//     if (i % 3 != 0){
//         document.write(i + " ");
//     }
//     i++;
// }

// или вариант ниже

// let i = 1;
// while (i <= 30) {
//     if (i % 3 == 0) {
//         i++;
//     } else {
//         document.write(i + " ");
//         i++;
//     }
// }

// Написать программу, вычисляющую сумму чисел в заданном диапазоне 
// (Например: 5 и 10. Результат: 5+6+7+8+9+10=45).

// let start = +prompt("Введите начало диапазона: ");
// let end = +prompt("Введите конец диапазона: ");
// let sum = 0;
// while(start <= end){
//     // document.write(i + " ");
//     sum += start; // sum = sum + start;
//     start++;
// }
// document.write("<br>" + sum);


// let i = 3;
// while(i){    // i > 0 | i != 0
//     document.write(i + "<br>");
//     i--;
// }


// let a, res = 1;
// do{
//     a = +prompt("Введите число ", 10);
//     if(a <= 0){
//         break;
//     }
//     res *= a;
// }while(true);
// alert("Произведение введенных чисел: " + res);


// let i = 0;
// do{
//     if(i ==3){
//         i++;
//         continue;
//     }
//     if(i==6){
//         break;
//     }
//     document.write(i + " ");
//     i++;
// }while(i<10);


// Написать программу, вычисляющую произведение нечетных чисел в диапазоне от 10 до 30

// Пользователь вводит с клавиатуры любое количество чисел (четные и нечетные) найти их среднее арифметическое значение
// Условие выхода 0

// for (инициализация переменной; проверка условия; изменение счетчика){
// тело цикла
// }

// for (let i =1; i < 6; i++){
//     document.write(i + " ");
// }


// for (let i = 1; i < 6; i++){
//     if(i==3){
//         continue;
//     }
//     if(i == 5){
//         break;
//     }
//     document.write(i + " ");
// }



// let start = 5;
// let end = 10;
// let sum = 0;
// let p = 1;
// for (let i = start; i <= end; i++) {
//     if (i % 2 == 0) {
//         sum += i;
//     }
//     else {
//         p *= i;
//     }
// }
// document.write("Сумма четных чисел в диапазоне от " + start + " до " + end + " = " + sum + "<br>");
// document.write("Произведение нечетных чисел в диапазоне от " + start + " до " + end + " = " + p + "<br>");


// особенность for
// let i =1
// for (; ;){
//     if(i == 6){
//         break;
//     }
//     document.write(i + " ");
//     i++;
// }


// Разбить введенное число на отдельные цифры и вывести в обратном порядке. 12345

// let ch = 123045789;
// for(let i = 1; ;i*=10){ //100 1000 10000
//     let res = parseInt(ch/i);  // ch = 12345 res = 1234 123 12 1
//     if(res == 0){
//         break;
//     }
//     document.write(res%10); // 5 4 3 2 1
// }



// let ch = 132078941;
// let num;
// let sum = 0;
// let p = 1;
// let count = 0;
// for(let i = 1; ;i*=10){ 
//     let res = parseInt(ch/i);  
//     if(res == 0){
//         break;
//     }
//     num = res%10
//     sum += num;
//     p *= num;
//     count ++;
// }
//  document.write("Сумма = " + sum + "<br>" + "Произведение = " + p + "<br>" + "Количество: " + count + "<br>");
//   document.write("Среднее арифметическое:" + (sum/count).toFixed(2) + "<br>");


// for(let i = 0; i < 4; i++){
//     document.write("+++ <br>");
//     for(let j = 0; j < 2; j++){
//         document.write("-- <br>");
//     }
// }

// for(let i = 0; i < 4; i++){
//     document.write(i + "<br>");
//     for(let j = 0; j < 4; j++){
//         document.write("&nbsp;&nbsp;&nbsp;&nbsp; =>" + j + "<br>");
//     }
// }

/* 
<table border = '1'>
    <tr>
        <td>*</td>
        <td>*</td>
        <td>*</td>
    </tr>
    <tr>
        <td>*</td>
        <td>*</td>
        <td>*</td>
    </tr>
</table>
*/
// let symbol = prompt("Введите символ: ");
// document.write("<table border = '1'>");
// for(let i = 0; i < 10; i++){
//     document.write("<tr>");
//     for(let j = 0; j < 23; j++){
//         document.write("<td>" + symbol + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");


// let tr = prompt("Введите количество строк:");
// let td = prompt("Введите количество столбцов:");
// let symbol = prompt("Введите символ: ");
// document.write("<table border = '1'>");
// for (let i = 0; i < tr; i++) {
//     document.write("<tr>");
//     for (let j = 0; j < td; j++) {
//         document.write("<td>" + symbol + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");


// document.write("<table border = '1' align='center' width = '300' height = '300'>");
// for (let i = 1; i < 11; i++) {
//     document.write("<tr align='center'>");
//     for (let j = 1; j < 11; j++) {
//         if(i%2==0){
//             document.write("<td bgcolor='red'>" + i*j + "</td>");
//         }
//         else {
//             document.write("<td bgcolor='yellow'>" + i*j + "</td>");
//         }
//     }
//     document.write("</tr>");
// }
// document.write("</table>");    ДЗ!!!!!!!!

//document.write("<table border = '1' align='center' width = '300' height = '300'>");
//     document.write("<tr><td>"+ 0 + "</td>");
//     for(i=1; i<=10; i++){
//         document.write("<td>"+ i + "</td>");
//     }
//     document.write("</tr>");
//     for(i=1; i<=10; i++){
//         document.write("<tr align='center'><td>"+ i + "</td>");
//         for (let j = 1; j < 11; j++) {
//             if (j % 2 == 0 && i % 2 || j % 2 && i % 2 == 0) {
//                 document.write("<td bgcolor='yellow'>" + i * j + "</td>");
//             }
//             else {
//                 document.write("<td bgcolor='red'>" + i * j + "</td>");
//             };
//         }
//         document.write("</tr>");
//     }

// document.write("</table>");



// Массивы

// let arr = [2, 3, 6 , 7, 8, 9];
// console.log(arr);
// document.write(arr[1]);

// let arr = [2, 3, 6, 7, 8, 9]; //массив на 6 элементов со значениями
// let arr1 = [2]; // массив на 1 эелемент со значением 2

// let arr2 = new Array(2, 3, 6, 7, 8, 9);//массив на 6 элементов со значениями
// let arr3 = new Array(2); //массив на 2 элемента, но пустой

// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// let arr = [2, 3, 6 , 7, 8, 9];
// document.write(arr + "<br>");
// document.write(arr.length + "<br>");
// arr.length = 3;
// document.write(arr + "<br>");
// arr.length = 6;
// document.write(arr + "<br>");
// arr.length = 0;
// document.write("Пустой массив" + arr + "<br>");

// length = последний индекс массива + 1
// последний индекс массива = length - 1


// let arr = [5, 9, -3, -1, 4, -8, 7, 4, -6];
// for(let i=0; i<arr.length; i++){
//     document.write(arr[i] + "<br>");
// }

// console.table(arr);

// Заменить все отрацательные значения элементов массива их модулями
// let arr = [5, 9, -3, -1, 4, -8, 7, 4, -6];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         arr[i] = arr[i]*(-1);
//     }
//     document.write(arr[i] + "<br>");
// }

// Посчитать в массиве сумму всех отрицательных элементов
// let arr = [5, 9, -3, -1, 4, -8, 7, 4, -6];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         sum += arr[i];
//         // document.write( arr[i] + "<br>");
//     }
// }
// document.write( sum + "<br>");

// let mas = new Array();   // let mas = [];
// mas[0] = 15;
// mas[1] = 6;
// mas [2] = 9;
// mas [6] = 10;
// mas [5] = 2;


// document.write(mas); //+ "<br>"
// console.log(mas[5]);


//Написать программу для ввода с клавиатуры и вывод на экран
// let mas = new Array(5); //пустой массив на 5 элементов
// for(let i = 0; i < mas.length; i++){
//     mas[i] = prompt("Введите " + (i+1) + " элемент массива: ")
// }
// document.write(mas + "<br>");
// for(let i = mas.length-1; i >= 0; i--){
//     document.write(mas[i]+ " ");
// }

// let arr = [2, 6, 7, "Игорь", 1.5, true];
// console.log(arr);

// let mas = [[2,1,1,6],[6,3,7],[8,5,6,8,9]];
// document.write(mas[2][1]);
// console.log(mas);
// console.table(mas);

// let vopros = ["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой?", "2х2 будет 8", "Дельфины - это рыбы", "Мадонна - это настоящее имя певицы", "Первая мировая война началась 1 сентября 1939 года"];
// let prav_otvet = [false, true, false, false, false, false, false];
// let res = new Array();
// let sum = 0;
// for(let i=0; i < vopros.length; i++){
//     let otvet = confirm(vopros[i]);
//     if(otvet == prav_otvet[i]){
//         res[i] = 10;
//         sum += res[i];
//     }
//     else{
//         res[i] = 0;
//     }
// }
// document.write("<table border='1' width = '500'>");
// document.write("<tr>");
// document.write("<th>Вопрос</th>");
// document.write("<th>Баллы</th>");
// document.write("</tr>");

// for(let i=0; i<vopros.length; i++){
//     document.write("<tr>");
//     document.write("<td>" + vopros[i]+"</td>");
//     document.write("<td>" + res[i]+"</td>");
//     document.write("</tr>");
// }

// document.write("<tr>");
// document.write("<th>Итого</th>");
// document.write("<th>" + sum + "</th>");
// document.write("</tr>");
// document.write("</table>");

// let  text1 = document.getElementById("text_1");
// console.log(text1);
// console.log(text1.textContent);
// text1.textContent = "Новое <b>значение</b>";

// let  text2 = document.getElementById("text_2");
// console.log(text2);
// console.log(text2.innerHTML);
// text2.innerHTML = "Новое <b>содержимое</b>";

// let res = +prompt("Выберите изображение", "1 - собака, 2 - кот, 3 - птица, 4 - рыба");
// document.write("<div id='image'></div>");
// let img = document.getElementById("image");

// switch(res){
//     case 1:
//         img.innerHTML= "<img src='img/dog.jpg'>";
//         break;
//     case 2:
//         img.innerHTML= "<img src='img/cat.jpg'>";
//         break;
//     case 3:
//         img.innerHTML= "<img src='img/bird.jpeg'>";
//         break;
//     case 4:
//         img.innerHTML= "<img src='img/fish.jpeg'>";
//         break;
//         default:
//             alert("Такого изображения нет");
// }

// let tag = document.getElementsByTagName("p")[2];
// console.log(tag);
// tag.innerHTML = "Hello tag";
// tag.style.color = "blue";
// tag.style.fontWeight = 'bold';
// tag.style.backgroundColor = 'silver';
// tag.style.padding = "10px 20px";
// tag.id = 'test';
// tag.className = 'x';

// let q = document.getElementsByClassName('a');
// console.log(q);
// q[1].style.color = 'red';

// document.querySelector(css)
// document.querySelectorAll(css)

// let w = document.querySelector('#text_1');
// console.log(w);
// let r = document.querySelectorAll('#text_1')[0];
// console.log(r);

// let w = document.querySelector('p');
// console.log(w);
// let r = document.querySelectorAll('p')[1];
// console.log(r);

// let w = document.querySelector('.a');
// console.log(w);
// let r = document.querySelectorAll('.a')[1];
// console.log(r);
// r.style.color = "red";

// let el = document.querySelectorAll("li");
// // alert(el.length);
// for(let i = 0; i < el.length; i++){
//     el[i].innerHTML += " !!! фрукты";
// }

// let purple = document.querySelectorAll(".purple li");
// for(let i = 0; i < purple.length; i++){
//     purple[i].style.color = 'purple';
//     purple[i].innerHTML += "???";
// }
// let red = document.querySelectorAll(".red li");
//     red[1].style.color = 'red';

// Методы массивов
// let js = ['нужно', 'учить', 'JavaScript'];
// document.write(js + "<br>");

// js.reverse(); //меняет порядок следования элементов в массиве на обратный
// document.write(js + "<br>");

// let a = js.pop();
// document.write(a + "<br>"); //удаляет последний элемент из массива и возращает удаленный элемент
// document.write(js + "<br>");

// js.push("JavaScript", "!"); //добавляет один или несколько элементов в конец массива
// document.write(js + "<br>");

// document.write(js.shift() + "<br>");//удаляет первый элемент из массива и возращает удаленный элемент
// document.write(js + "<br>");

// js.unshift("Почему", "нужно"); //добавляет один или несколько элементов в начало массива
// document.write(js + "<br>");

// js.splice(0, 1); //удаляет элементы из массива с заданной позиции (индекс, кол-во элементов)
// document.write(js + "<br>");

// js.splice(0, 2, "Мы", "изучаем"); //вписывает новые значения вместо удаления
// document.write(js + "<br>");

// js.splice(2, 0, "сложный", "язык"); //добавляет новые элементы с указанной позиции без удаления
// document.write(js + "<br>");

// js.splice(-2, 0, "но", "очень", "интересный");
// document.write(js + "<br>");

// let st1 = js.join(" & ");
// document.write(st1 + "<br>");

// console.log(js);
// console.log(st1);

// let st = ["Фамилия","Имя","Отчество"];
// let fio = new Array(3);

// for(let i = 0; i < fio.length; i++){
//     fio[i] = prompt("Введите данные:", st[i]);
// }
// let st1 = fio.join(" ");
// document.write(st1);
// console.log(fio);


// Функции

// Function Declaration 

/*
function имя (аргументы){
    тело функции;
}    ;-не ставится
*/

// function hello(firstName){  //аргументы
//     alert("Hello, " + firstName + "!");
// }

// hello("Игорь"); // параметры
// hello("Ирина");

// function test(a, b, c) {
//     alert(a + b + c);
// }
// let n1 = 10, n2 = 20, n3 = 30, m1 = 5, m2 = 2, m3 = 3;
// test(n1, n2, n3);
// test(m1, m2, m3);

// function test(a, b, c) {
//     let res = a + b + c;
//     return res;
// }
// let n1 = 10, n2 = 20, n3 = 30;
// let q = test(n1, n2, n3);
// alert("Возвращаемое значение: " + q);

// function test2(n, m) {
//     if (m == 0) {
//         // alert("Hello");  работает только до return
//         return "На 0 делить нельзя";
//     }
//     else {
//         return n / m;
//     }
// }
// let a1 = test2(10, 2);
// console.log(a1);
// let a2 = test2(10, 0);
// console.log(a2);

// function showArrayContent(arrayToShow) {
//     if(arrayToShow.length == 1){
//         return arrayToShow;
//     }
//     else{
//         let a = arrayToShow.pop();
//         let st = arrayToShow.join(", ");
//         let b = st + " и " + a;
//         arrayToShow.push(a);
//         return b;
//     }
// }
//     let a = new Array('Текст');
//     let b = new Array('день', 'ночь');
//     let c = new Array('зима', 'весна', 'лета', 'осень');
//     alert(showArrayContent(a));
//     alert(showArrayContent(b)); 
//     alert(showArrayContent(c));



// Function Expression
/*
let func = function(аргументы){
    тело функции;
}
*/


// function sum1(a, b) {
//     return a + b;
// }
// console.log(sum1(2,3));

// let sum2 = function (a, b) {
//     return a + b;
// }
// console.log(sum2(2,3));

// let kolKop = function (k) {
//     let kop = k;
//     if (k >= 0 && k <= 99) {
//         if (kop >= 11 && kop <= 14) {
//             alert(k + " копеек");
//         }
//         else {
//             kop = kop % 10;
//             if (kop == 1) {
//                 alert(k + " копейка");
//             }
//             else if (kop >= 2 && kop <= 4) {
//                 alert(k + " копейки");
//             }
//             else {
//                 alert(k + " копеек");
//             }
//         }
//     }
//     else {
//         alert("Вы ввели некорретное значение");
//     }
// }
// let a = +prompt("Введите число от 1 до 99");
// kolKop(a);

// Immediately Invoked Function Expression (IIFE) - анонимная (самовызывающаяся функция)

// (function(){
//     alert("Привет мир!");
// }());

// let a = (function(n){
//     return n*n;
// });
// alert(a(4));

// Arrow Function - стрелочные функции

// function test(a, b, c){
//     let res = a + b + c;
//     return res;
// }
// console.log(test(10, 20, 30));

// let test2 = (a, b, c) => a + b + c;
// console.log(test2(10, 20, 30));

// let test3 = (a, b, c) => {
//     let res = a + b + c;
//     return res;
// }
// console.log(test3(10, 20, 33));

// let hello = n => alert("Hello! " // один принимаемый аргумент можно писать без ()
// + n);
// hello("Irina");

// Math
// document.write(Math.round(7.5) + "<br>"); // по законам матем
// document.write(Math.floor(7.9) + "<br>"); // округляет в меньшую сторону
// document.write(Math.ceil(7.1) + "<br>"); // округляет в большую сторону

// (function(){
//     document.write(Math.random() + "<br>"); // от 0 до 1 (не вкл 1)
// }());


// (function(min, max){
//     document.write(Math.floor(Math.random() * (max-min) + min) + "<br>"); 
// }(2, 9));    // от 2 до 9 (не вкл 9)

// document.write(Math.floor(Math.random() * 15)+ "<br>");

// document.write(Math.floor(Math.random() * 7 + 2)+ "<br>"); // от 2 до 9

// document.write(Math.floor(Math.random() * 8 + 7)+ "<br>");// от 7 до 15

// let fn = function(words){
//     // let b = Math.floor(Math.random()* words.length);
//     // console.log(b);
//     return words[b];
// }
// let mas = ['Цикл', 'Массив', 'Условие', 'Функция'];
// let a = fn(mas);
// document.write(a);


// document.write("<div id='block'></div>");
// let id = document.getElementById("block");
// id.style.width = '100px';
// id.style.height = '100px';
// createColor()

// function createColor() {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     // id.style.background = 'rgb('+ r +', '+ g +', ' + b +')';
//     id.style.background = `rgb(${r}, ${g}, ${b})`;
// }


// document.write("<div id='block'></div>");

// let id = document.getElementById("block");
// id.style.width = '100px';
// id.style.height = '100px';
// id.style.background = 'rgb('+ createColor() +', '+ createColor() +', ' + createColor() +')';

// function createColor() {
//     return Math.floor(Math.random() * 256);;
// }

// function hello (name = "незнакомец"){
//     // name = name || "незнакомец";
//     document.write("Привет, " + name + "!<br>");
// }
// hello("Сергей");
// hello();

// function square(width = 120, height = 100, background = 'green'){
//     document.write("<div id='shape'></div>");
//     let sq = document.querySelector('#shape');
//     sq.style.width = width + "px";
//     sq.style.height = height + "px";
//     sq.style.background = background;
// }
// // square(200, 150, 'gold');
// // square(300, 50);
// square(400, 200, 'red');

// function hello(){  // вызывается сама функция
//     alert("Привет");
// }
// alert(hello);

// let st = "I\'m a JavaScript \"programmer\""; //строки неизменяемый тип данных
// document.write(st + "<br>");
// // document.write(st[2] + "<br>");
// // // st[2] = 'y';
// // st = st[2] + 'y'
// // document.write(st + "<br>");
// document.write(st.length + "<br>");

// //  Методы строк
// document.write(st.toUpperCase() + "<br>"); //верхний регистр
// document.write(st.toLowerCase() + "<br>"); //нижний регистр

// let n = prompt("Введите имя", "богдан");
// alert(first(n));
// function first(str){
//     let newStr = str[0].toUpperCase();
//     for(let i = 1; i<str.length; i++){
//         newStr += str[i].toLowerCase();
//     }
//     return newStr;
// }

// let st = "I\'m a JavaScript \"programmer\"";
// let st2 = "Я учу JavaScript. Мне нравится JavaScript.";
// st = st.concat(st2);
// document.write(st + "<br>");

// document.write(st.indexOf("JavaScript") + "<br>"); // возвращает индекс, на котором находится подстрока или "-1", если ничего не найдено
// document.write(st.indexOf("JavaScript", 7) + "<br>"); 
// document.write(st.lastIndexOf("JavaScript") + "<br>"); 


// let email;
// do{
//     email = prompt("Введите email");
//     if(email.indexOf("@")== -1){
//         alert("Некорректный email. Повторите операцию");
//     }
//     else{
//         break;
//     }
// }while(true);


// let st = "I\'m a JavaScript \"programmer\"";
// let st2 = "Я учу JavaScript. Мне нравится JavaScript.";
// st = st.concat(st2);
// document.write(st + "<br>");
// document.write(st.split(".") + "<br>");
// console.log(st);
// console.log(st.split("JavaScript"));

// let st = "I\'m a JavaScript \"programmer\"";
// let st2 = "Я учу JavaScript. Мне нравится JavaScript.";
// st = st.concat(st2);
// document.write(st + "<br>");
// document.write(st.slice(0, 3) + "<br>"); //возвращает подстроку, начиная с начальной позиции до конечной позиции (не вкл ее)
// document.write(st.slice(6) + "<br>"); 
// document.write(st.slice(-23) + "<br>"); //с левой стороны

// document.write(st.substring(0, 3) + "<br>");//возвращает подстроку, начиная с начальной позиции до конечной позиции (не вкл ее)
// document.write(st.substring(-23) + "<br>"); //отрицательный индекс будет браться, как значение 0

// let a = st.split("JavaScript");
// console.log(a);
// document.write(a.join("C++"));

// let style = prompt("Введите свойства CSS", "background-color");
// alert(def(style));
// function def (str){
//     let arr = str.split("-"); //arr = ['background', 'color']
//     for(let i = 1; i < arr.length; i++){
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join('');
// }

// События

// function loadStr(){
//     alert("Страница была загружена");
// }

// let m = document.getElementById("mes");
// function over(){
//     m.style.color = 'red'; 
// }
// function out(){
//     m.style.color = 'yellow'; 
// }

// function change(){
//     let id = document.getElementById('h');
//     id.style.color = 'blue';
// }

// function randomBg(){
//     let r = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     document.body.style.background = "rgb(" + r + "," + g + "," + b + ")";
// }

// let newImg = document.getElementById('newimg');
// function on(){
//     newImg.src = 'night.png';
// }
// function off(){
//     newImg.src = 'day.png';
// }

// function change(id){
//     id.innerHTML = "Новый текст";
// }

// function setColor(color){
//     document.body.style.background = color.className;
// }

// let q = document.getElementById('but');
// q.onclick = function(){
//     alert("Спасибо!");
// }

// but.onclick = function () {
//     alert("Спасибо!");
// }

// function hello() {
//     alert("Спасибо!");
// }
// but.onclick = hello; // если работаем в JS с событием не ставим ()

// let el = document.querySelector("#elem");
// el.addEventListener('click', function(){
//     el.innerHTML = "Новый текст";
// });
// el.addEventListener('contextmenu', function(){ //contextmenu - нажатие левой кнопки мыши
//     el.style.color = "green";
//     el.style.background = "yellow";
// });

// let c = document.querySelector("#ev");
// document.addEventListener("mousemove", function(event){
//     let x = event.clientX;
//     let y = event.clientY;
//     c.textContent = "X = " + x + ", Y = " + y;

//     c.addEventListener('dblclick', function(event){
//         // event.target.style.background = 'red';
//         c.style.background = 'red';
//     });
// });

// let input = document.querySelector("#but");
// input.addEventListener('click', handle);
// function handle(){
//     alert("Спасибо");
//     input.removeEventListener('click', handle);
// }

// //setTimeout(функция, задержка); задержка - в миллисекундах

// // setTimeout("alert('Текст')", 3000);
// setTimeout(hello, 3000);
// function hello(){
//     alert('Текст');
// }


// document.write("<div id='dt'>Создание анимированного текста</div>");
// let text = document.querySelector("#dt").innerHTML;
// // console.log(text);
// let i = 0;
// window.addEventListener('load', animText);

// function animText(){
//     let tag = document.querySelector("#dt");
//     // console.log(tag);
//     tag.innerHTML = text.substring(0, i);
//     i++;
//     if(i>text.length){
//         i = 0;
//     }
//     setTimeout(animText, 100);
// }

// Date()
//let d = new Date();
// document.write(d + "<br>");
// document.write(d.toDateString() + "<br>");
// document.write(d.getFullYear() + "<br>"); //2022
// document.write(d.getMonth() + 1 + "<br>"); //10 от 0 до 11
// document.write(d.getDate() + "<br>"); // число
// document.write(d.getDay() + "<br>"); // день недели 0 - воскресенье

//сегодня 7 ноября 2022, Понедельник
// let months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
// let days = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];

// let d = new Date();
// let fullDate = "Сегодня: " + d.getDate()+ ' ' + months[d.getUTCMonth()]+ ' ' + d.getFullYear() + ', ' + days[d.getDay()];
// document.write(fullDate);


// setInterval(функция, интервал)

// document.write("<input type='button' value='Start/Stop'>");
// document.querySelector('input').addEventListener('click', start);
// let act, flag = false;
// function start(){
//     if(!flag){
//         act = setInterval(setColor, 1000);
//     }
//     else{
//        clearInterval(act); 
//     }
//     flag = !flag; //true
// }
// function setColor(){
//     let x = document.body;
//     x.style.background = x.style.background == "yellow" ? "orange" : "yellow";
// }

// document.write("<div id='text'>Здесь будет отображаться текущее время</div>");
// window.addEventListener('load', () => setInterval(time, 1000));
// function time(){
//     let d = new Date();
//     let hour = d.getHours();
//     let min = d.getMinutes();
//     let sec = d.getSeconds();
//     if(sec<10){
//         sec = "0" + sec;
//     }
//     let tim = hour + ":" + min + ":" + sec;
//     document.querySelector('#text').innerHTML = tim;
// }

// let a = document.querySelector('#cl');
// a.addEventListener("click", myMove);

// function myMove() {
//     let elem = document.getElementById("animate");
//     let pos = 0;
//     let id = setInterval(frame, 50);
//     function frame() {
//         if (pos == 350) {
//             clearInterval(id);
//         }
//         else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// } // дз

// document.image.border = 1;

// document.image.width = 200;
// document.image.height = 50;
// document.write("<br>Ширина изображения: " + document.image.width + "px");
// document.write("<br>Ширина изображения: " + document.image.height + "px<br>");
// document.image.src = "blue_star.png";

// document.image.addEventListener("click", changeImage);
// let flag = 0;
// function changeImage(){
//     if(flag == 0){
//         document.image.src = "blue_star.png";
//         flag = 1;
//     }
//     else{
//         document.image.src = "golden_star.png";
//         flag = 0;
//     }
// }


// let array = new Array('2.jpg', '3.jpg', '4.jpg');
// document.write("<input type='button' name='left' value='<'>");
// document.write("<img src='" + array[0] + "' id='sl'>");
// document.write("<input type='button' name='right' value='>'>");

// document.getElementsByName('right')[0].addEventListener('click', fnRight);
// document.getElementsByName('left')[0].addEventListener('click', fnLeft);

// let image = document.getElementById("sl");
// let i = 0;

// function fnRight() {
//     i++;
//     if (i == array.length) {
//         i = 0;
//     }
//     image.src = array[i];
// }
// function fnLeft() {
//     i--;
//     if (i < 0) {
//         i = array.length - 1;
//     }
//     image.src = array[i];
// }


// let t = document.querySelectorAll("#clock img");
// let imgTime = ['c0.gif', 'c1.gif', 'c2.gif', 'c3.gif', 'c4.gif', 'c5.gif', 'c6.gif', 'c7.gif', 'c8.gif', 'c9.gif'];

// function clock(){
//     let d = new Date();
//     let hour = d.getHours();
//     let min = d.getMinutes();
//     let sec = d.getSeconds();
//     getImg(hour, min, sec);
//     setTimeout ('clock()', 1000);
// }
// function getImg(h, m, s){
//     t[0].src = imgTime[Math.floor(h/10)];
//     t[1].src = imgTime[h%10];

//     t[3].src = imgTime[Math.floor(m/10)];
//     t[4].src = imgTime[m%10];

//     t[6].src = imgTime[Math.floor(s/10)];
//     t[7].src = imgTime[s%10];
// }
// clock();


// DOM - Document Object Model - объектная модель документа

// alert(document.documentElement.innerHTML); - прямое обращение к текущим элементам
// alert(document.head.innerHTML);
// alert(document.body.innerHTML);

// let myTitle = document.querySelector("h1").innerHTML;
// console.log(myTitle);
// // let myTitle1 = document.querySelector("p").firstChild.nodeValue;
// let myTitle1 = document.querySelector("p").childNodes[0].nodeValue;
// console.log(myTitle1);

// let myTitle = document.querySelector("h1");
// alert(myTitle.nodeName); //H1 - в верхнем регистре, через нижний регистр не работает

// let d = document.querySelector("#one");
// if(d.nodeName == "DIV"){
//     d.innerHTML = "Hello new tag";
// }

// let myTitle = document.querySelector("h1");
// console.log(myTitle.firstChild); 
// console.log(myTitle.firstChild.nodeType);//папка JS7


// let elem = document.querySelector("#root");

// let tag = document.createElement("p"); // создали  тег <p></p>
// let node = document.createTextNode("Новый текст!!!"); // Создали новую текстовую ноду
// tag.append(node); //  <p></p> + Новый текст!!! = <p>Новый текст!!!</p>

// elem.append(tag); //добавляем новый элемент последним дочерним внутри родительского
// elem.prepend(tag); //добавляем новый элемент первым дочерним внутри родительского

// elem.before(tag); //добавляет новый элемент до выбранного id
// elem.after(tag); //добавляет новый элемент после выбранного id

// elem.replaceWith(tag); //заменяет новым элементом выбранный id


// let list = document.querySelector("ul");

// let newItem = document.createElement("li");
// newItem.innerHTML = "Новый элемент списка";

// list.append(newItem);


// let i = 1;
// document.querySelector("#func2").addEventListener("click", add);
// document.querySelector("#func1").addEventListener("click", change);

// function add(){
//     let elem = document.createElement("li");
//     elem.innerHTML = "Water" + i;
//     i++;
//     document.querySelector("#list2").append(elem);
// }

// function change(){
//     let elem = document.querySelector("#list2").lastChild;
//     // console.log(elem);
//     document.querySelector("#list1").append(elem);
// }


// let div = document.querySelector("#root");
// div.insertAdjacentHTML('beforebegin','<p>До выбранного элемента</p>');
// div.insertAdjacentHTML('afterend','<p>После выбранного элемента</p>');
// div.insertAdjacentHTML('afterbegin','<p>Первым внутри выбранного элемента</p>');
// div.insertAdjacentHTML('beforeend','<p>Последним внутри выбранного элемента</p>');

// let child = document.querySelector("#p1");
// // child.remove();
// let second = document.querySelector("#p2");

// second.after(child);


// let list = document.querySelector("ul");
// let li = list.cloneNode(true); //клонирование элементов (без true не вкладывает содержимого тега)

// li.querySelector('li').innerHTML = "Начало клонируемых элементов";
// list.after(li);


// let list = document.querySelector(".list");
// list.insertAdjacentHTML("beforebegin","<h2>Список </h2><hr>");
// let list_inner = document.querySelector("h2");
// list_inner.insertAdjacentText('beforeend', "планет");
// list.insertAdjacentHTML("afterend", "<hr>");
// let hr = document.querySelectorAll("hr")[1];
// let h4 = document.createElement("h4");
// h4.innerHTML = "Конец списка";
// hr.insertAdjacentElement("afterend", h4);

// let idRemove = setInterval(function(){
//     let li = document.querySelector("li:last-child");
//     if(li== null){
//         clearInterval(idRemove);
//         // alert("Список удален");
//         list.insertAdjacentHTML("afterbegin","<li>Список удален</li>");
//     }
//     else{
//         li.remove();
//     }
// }, 1000);


// let div = document.querySelector("div");
// div.className = 'alert';

// let activeDiv = document.querySelector(".active");
// activeDiv.classList.add('hidden'); //добавляет class 
// // activeDiv.classList.remove('hidden'); //удаляет class 
// activeDiv.classList.toggle('hidden'); //добавляет либо удаляет class 
// activeDiv.classList.replace('active', 'alert'); //заменяет одно имя class на другое



// let greenFrog = document.querySelector("#greenFrog");
// console.log(greenFrog.id);
// console.log(greenFrog.className);
// console.log(greenFrog.src);
// console.log(greenFrog.alt);
// console.log(greenFrog.title);
// console.log(greenFrog.getAttribute('data-img'));
// console.log(greenFrog.getAttribute('src'));
// console.log(greenFrog.setAttribute('src', '4.jpg'));
// // greenFrog.removeAttribute('src');
// console.log(greenFrog.hasAttribute('src')); //наличие атрибута true false


// Формы

// document.form1.style.background = 'silver';

// document.forms[0].style.padding='16px';
// document.forms['form1'].style.margin='20px';
// document.forms.form1.style.border = '2px dotted gray';

// document.form1.name1.style.color = 'blue';
// document.form1['name1'].style.background = 'aqua';

// let txt = document.querySelector("#text1");
// let but = document.querySelector("button");

// but.addEventListener('click', content);
// function content(){
//     console.log(txt.value);
//     alert(txt.value);
// }


// let input = document.querySelectorAll("input[type='checkbox']");
// let form1 = document.forms.form1;
// console.log(input.length);
// console.log(form1.length); //console.log(form1[0]);
// for (let i = 0; i < input.length; i++){
//     input[i].addEventListener('click', checkAll);
// }
// function checkAll(){
//     let numChecked = 0;
//     for (let i = 0; i < input.length; i++){
//         if (input[i].checked){   //checked - атрибут отвечает, что элемент будет отмечен
//             numChecked++;
//         }
//     }
//     if(numChecked == 3){
//         for (let i = 0; i < input.length; i++){
//             if (!input[i].checked){
//                 input[i].disabled = true; //блокируется элемент
//             }
//         }
//     }
//     else{
//         for (let i = 0; i < input.length; i++){
//             input[i].disabled = false; 
//         }
//     }
//     console.log(numChecked);
// }


// let choose = document.querySelector("input[type='button']");
// choose.addEventListener('click', chooseColor);
// function chooseColor(){
//     let f = document.form3;
//     console.log(f.length); //7
//     for (let i=0; i<f.radio2.length; i++){ //только для радиокнопок
//         if(f.radio2[i].checked){
//             document.body.style.background = f.radio2[i].value;
//         }
//     }
// }


/*Свойства select:
options - коллекция из псевдоэлементов <option>
value - значение выбранного <option>
selectedIndex - номер (индекс) выбранного <option>
 */

// let city = document.querySelector("#city");

// city.addEventListener('change', setImage);
// function setImage() {
//     let cities = city.selectedIndex;
//     // console.log(cities);
//     let options = city.options;
//     // console.log(options);
//     let code = options[cities].value;
//     console.log(code);
//     let div = document.querySelector("#image");
//     div.innerHTML = "<img src='img/" + code + ".png'>";
// }


// let gas = document.querySelectorAll(".petrol"); //калькулятор
// for (let i = 0; i < gas.length; i++) {
//     gas[i].addEventListener('click', function(){
//         let gallons = document.querySelector(".gallons").value;
//         let amount = this.getAttribute('data');

//         let res = gallons * amount;
//         let sum = document.querySelector('.sum');
//         sum.innerHTML = res;
//     })
// }



// let reg = document.querySelector(".register");
// reg.addEventListener('submit', function(){
//     let log = reg.login.value;
//     let pass = reg.password.value;
//     let pass2 = reg.password2.value;
//     let error = "";

//     if(log == "" || pass == "" || pass2 == ""){
//         alert("Все поля должны быть заполнены");
//         return; //прерывает выполнение функции
//     }
//     if(pass.length < 6){
//         error += "Пароль слишком короткий";
//     }
//     if(pass != pass2){
//         error += "\nПароли не совпадают";
//     }
//     if(error == ""){
//         alert("Поздравляем! Вы успешно прошли регистрацию");
//     }
//     else{
//         alert(error);
//     }
// })



/* Методы регулярных выражений:

search - возвращает позицию (индекс) на которой регулярное выражение совпадает с вызывающей строкой, или значение "-1", если совпадений нет

match - возвращает все совпадения с регулярным выражением

replace - заменяет совпадения с регулярным выражением на новую подстроку

split - делит строку на массив, разбвивая ее по указанной подстроке

test - выполняет поиск совпадений регулярного выражения со строкой. Возвращает значение либо true либо false
*/

// let regexp = new RegExp("шаблон");
// let regexp = /шаблон/;

//let str = "Я ищу совпадения в 2023 году 425365ё hello";
// let regexp = /ищу/;
//document.write(str + "<br>");

// document.write(str.search(regexp) + "<br>");
// document.write(str.match(regexp) + "<br>");
// document.write(regexp.test(str) + "<br>");

// [...] - искать любой из заданных символов, но только один раз
// let regexp = /[203]/g;
// document.write(str.match(regexp) + "<br>");

/* Флаги:
g (global) - искать все совпадения с шаблоном поиска (глобальный поиск)
i (ignoreCase) - регистронезависимый поиск
m (multiLine) - многострочный поиск
*/

// let regexp = /я/gi;
// document.write(str.match(regexp) + "<br>");

/* Диапазоны:
[0-9] - любая цифра от 0 до 9, [3-6]
[A-Z] - заглавные буквы
[a-z] - строчные буквы
[А-Я]
[а-я] (буква Ёё указывается отдельно)
[А-яё] - весь алфавит в обоих регистрах
 */

// [^abc] - исключающий диапазон, ни один из указанных символов
// let regexp = /[^0-9]/g;
// document.write(str.match(regexp) + "<br>");

/* Количество повторений:
{3} - количество символов, идущих подряд
{1,} - от 1 до бесконечного количества повторений
{2,5} - от 2 до 5 повторений
 */
// let regexp = /[0-9]{2,5}/g;
// document.write(str.match(regexp) + "<br>");

// let html = 
// `<table>
//     <tr>
//         <td bgcolor="#CCC">
//             <img src="1f3.png">
//         </td>
//         <td bgcolor="#003399">
//             <img src="222.png">
//         </td>
//         <td bgcolor="#00ccdd">
//             <img src="fff.png">
//         </td>
//     </tr>
// </table>`
// ;
// let exp = /#([0-9a-f]{3}){1,2}/gi;
// document.write(html.match(exp) + "<br>");

/*Символьные классы
\d (digit) - любая цифра
\s (space) - пробельный символ, включая табуляцию и перенос на другую строку
\w (word) - любая цифра, буква (только английский алфавит) или символ подчеркивания
 */

/*Обратные символьные классы
\D - все кроме цифры
\S - все кроме пробельных символов, включая табуляцию и перевод строки
\W - все кроме цифр, букв (англ.) или символов подчеркивания
 */
// точка (.) - это любой символ

// let regexp = /\d./g;
// document.write(str.match(regexp) + "<br>");

/* ^ - обозначает начало строки (перед последовательностью ничего не должно быть)
$ - конец строки (после последовательности ничего не должно быть)
*/
// let html = '909';
// let reg = /^\d{3}$/g;
// document.write(html.match(reg) + "<br>");


/* Количество повторений
+ - от 1 до бесконечности {1,}
? - от 0 до 1 {0,1}
* - от 0 до бесконечности {0,}
 */

// let html = `
// <b>my text</b>
// <img src='222.jpg'>
// <span>else.if</span>
// <img src='fgt222.png'>
// <img src='rdfgb2.png'>
// <img src='ewr.gif'>
// `;
// let exp = /\w+\.(jpg|png|gif|jpeg|bmp)/ig;
// document.write(html.match(exp) + "<br>");


// let html = 'Дмитрий Васильев';
// let exp = /(Дмитрий) Васильев/;
// document.write(html.match(exp) + "<br>");


// document.write("aaa".replace('a', 'b') + "<br>");
// document.write("aaa".replace(/a/g, 'b') + "<br>");

// let text = "I kill you black dog";
// document.write(text + "<br>");
// let exp = /(book|kill|black)/ig;
// text = text.replace(exp, "***");
// document.write("<p>" + text + "</p>");

// let str = "John Smith";
// let re = /(\w+)\s(\w+)/;
// document.write(str.replace(re, "$2 && $1 $2"));

// let text = "red color: #F00 and green: #090";
// let exp = /(#[a-f0-9]{3})/ig;
// text = text.replace(exp, "<span style='color:$1'>$1</span>");
// document.write("<p>" + text + "</p>");

// let text = "I love yandex.ru";
// let exp = /(([a-z0-9-]{2,}\.)+[a-z]{2,4})/i;
// text = text.replace(exp, "<a href='http://$1'>$1</a>");
// document.write("<p>" + text + "</p>");


// let but = document.querySelector("#but");
// but.addEventListener("click", smsUser);
// function smsUser() {
//     let name = document.getElementsByName('your_name')[0].value;
//     let sms = document.getElementsByName('your_message')[0].value;
//     let regExpBBMail = /([0-9a-z._]+@[0-9a-z_^\.]+\.[a-z]{2,3})/ig;
//     sms = sms.replace(regExpBBMail, "<span style='color:red'>$1</span>");
//     document.write(  //перезаписывает все данные
//         `<fieldset>
//             <legend>${name}</legend>
//             <div>${sms}</div>
//         </fieldset>`
//     );
// }


// let str = "   текст   ";
// str = str.replace(/^\s+|\s+$/g, "");
// alert(">" + str + "<");



// let str = "Новая строка символов";
// let re = str.split(" ", 2);
// console.log(re);

// let str = "25-10-2022, 12.03.2023, 30/12/2020";
// let re = str.split(/[-./,]/);
// console.log(re);

// let num = 123456;
// console.log(num);
// let str = String(num);
// console.log(str);
// let arr = str.split('');
// console.log(arr);


// Объекты

// let car = new Object();  // конструктор объекта (объектно-ориентированный подход)
// let car1 = {};  // литерал объекта

// let car = new Object();
// car["type"] = "BMW";
// car['color'] = 'white';
// console.log(car);//выводится корректно только в console.log
// document.write(car["type"] + " " + car["color"] + '<br>'); // только через обращение к ключу

// let car1 = new Object();
// car1.type = "BMW";
// car1.color = "white";
// document.write(car1.type + " " + car1.color + '<br>');


// let menu1 = {};
// menu1.width = 300;
// menu1.height = 200;
// menu1.title = "Menu";
// console.log(menu1);
// document.write(menu1.title + ": " + menu1.width + " x " + menu1.height + "<br>");

// let menu = {
//     width: 300,
//     height: 200,
//     title: "Menu"
// };
// delete menu.width;
// menu.age = 25;
// console.log(menu);
// // document.write(menu.title + ": " + menu.width + " x " + menu.height + "<br>");

// for (let i in menu){
//     document.write("<br>Ключ: " + i + ", значение: " + menu[i]);
// }



// let menu = {
//     width: 300,
//     height: 200,
//     title: "Menu"
// };
// let counter = 0;
// for (let key in menu) {
//     document.write("<br>Ключ: " + key + ", значение: " + menu[key]);
//     counter++;
// }
// document.write("<br>Всего свойств: " + counter + "<br>");
// document.write("<br>Имена ключей: " + Object.keys(menu) + "<br>");
// document.write("<br>Всего ключей: " + Object.keys(menu).length + "<br>");
// Object.keys(menu).forEach(function(key){
//     document.write("<br>" + key + ":" + menu[key]);
// })



// let car = {
//     name: "Volvo",
//     year: 2013
// };
// console.log(car);


// let obj = {
//     name: "Гомер",
//     colors: {
//         first: "yellow",
//         second: "blue",
//     },
//     color: [
//         "black",
//         "white",
//         'red',
//         'blue'
//     ],
//     hello: function(){
//         document.write("Привет");
//     }
// }
// document.write(obj.name + " " + obj.color[1] + " " +  obj.colors.first + "<br>");
// obj.hello();

// let fil = obj.color.filter(function(elem){   //filter возвращает только true по условию
//     return elem.length < 5;
// })
// document.write("<br>" + fil + "<br>");
// console.log(fil);

// let mas = obj.color.map(function(elem){ //map возвращает каждый элемент в новый массив
//     return "color: " + elem + "<br>";
// })
// document.write("<br>" + mas + "<br>");

// let mas1 = obj.color.map(elem => elem.toUpperCase());
// document.write("<br>" + mas1 + "<br>");

// let mas = obj.color.map(function(elem, index, all){ 
//     return elem + " " + index + " массив: " + all +"<br>";
// })
// document.write("<br>" + mas + "<br>");

// let mas = Object.keys(obj.colors).map(function(elem){ 
//     return elem + ": " + obj.colors[elem] +"<br>";
// })
// document.write("<br>" + mas + "<br>");


// let calc = {
//     num1: 5,
//     num2: 5,
//     computer: function(){
//         this.result = this.num1 * this.num2;
//         //calc.result = calc.num1 * calc.num2;
//     }
// }
// calc.computer();
// document.write(calc.result);


// let x = 15, y = 10;
// let coords = {
//     x: x, // свойство (ключ)
//     y: y, // свойство (ключ)
//     calc: function(){  // создан метод
//         document.write(this.x * this.y);
//     }
// }
// coords.calc();  // вызов метода


// let x = 15, y = 10;
// let coords = { x, y, 
//     calc(){document.write(this.x * this.y);}
// }
// coords.calc(); 


// Деструктуризация

// let user = {
//     login: {
//         firstName: "Kate",
//         lastName: "Petrova"
//     },
//     passw: 'qwerty',
//     role: "guest"
// }

// // let {login:{firstName: f, lastName}, passw: p, role} = user;
// let {login:{firstName: f, lastName}, ...rest} = user;

// document.write(f + " " + lastName + " " + rest.role + "<br>");
// let a = user.login.firstName;
// document.write(a + "<br>");


// let number = [3,5,6];
// let [,,c] = number;
// document.write(c);


// let pers = {
//     name: "Игорь",
//     colors: [
//         'красный',
//         "белый",
//         "синий",
//         "черный"
//     ],
//     brand: "Bentley",
//     start() {
//         let {name, colors, brand} = this;
//         let color = Math.floor(Math.random() * 4);
//         document.write(name + " имеет " + colors[color] + " " + brand);
//     }
// }
// pers.start();


//Функция-конструктор

// function Car(name, year){ //имя функции с большой буквы
//     this.name = name;
//     this.year = year;
// }

// Car.prototype.getAge = function(){
//     return new Date().getFullYear() - this.year;
// }

// Car.prototype.color = 'black';

// let ford = new Car("Ford", 2019);
// console.log(ford);
// console.log(ford.color);
// console.log(ford.getAge());

// let bmw = new Car("BMW", 2017);
// bmw.color = 'red';
// console.log(bmw);
// console.log(bmw.color);
// console.log(bmw.getAge());


// function User(pName, pAge){
//     this.name = pName;
//     this.age = pAge;
//     this.displayInfo = function(){
//         document.write(" Имя: " + this.name + ", возраст: " + this.age + "<br>");
//     }
// }

// let tom = new User("Tom", 26);
// document.write(tom.name + "<br>");
// tom.displayInfo();

// let kate = new User("Kate", 24);
// kate.displayInfo();



// let form = document.form1;
// form.addEventListener("submit", event => {
//     event.preventDefault();

//     let title = form.title.value;
//     let text = form.text.value;
//     let description = form.description.value;
//     saveForm({ title, text, description }); // {title: title, text: text}

// });

// // Rest - для сбора определенных параметров
// function saveForm(...obj) {
//     console.log("Аргументы: ", obj);
//     let [{title, text, description}] = obj;
//     let formData = {
//         date: new Date().toDateString(),
//         title, text, description
//     }
//     console.log("Form data", formData);
// }

// function saveForm(obj) { //{title, text, description}
//     // let {title, text, description} = obj;

//     let formData = {
//         date: new Date().toDateString(),
//         ...obj // - оператор Spred - используется чтобы развернуть параметры
//         //title, text, description
//     }
//     console.log("Form data", formData);
// }



// class User{
//     constructor(name){
//         this.n = name;   // свойство (ключ)
//     }

//     sayHi(){              // метод
//         document.write("Hello, " + this.n + "!"); 
//     }
// }
// let user = new User("Иван");
// console.log(user);

// document.write(user.n + "<br>");
// user.n = "Мария";
// document.write(user.n + "<br>");
// console.log(user);
// user.sayHi();
// console.log(typeof(User));
// console.log(typeof(user));


// class User{
//     constructor(login){
//         this.login = login;
//     }
//     get login (){  //получаем логин
//         return this._login;
//     }
//     set login(value){   //установливаем новый логин
//         if (value.length<6){
//             alert("Логин слишком короткий");
//             return;
//         }
//         this._login = value;
//     }
// }
// let user = new User("administrator");
// console.log(user.login);
// user.login = "admin-admin";
// console.log(user.login);


// class Person{
//     constructor(firstName, lastName){
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }
//     get fullName() {
//         return this._firstName + " " + this._lastName;
//     }
//     set fullName(value){
//        [this._firstName, this._lastName] = value.split(/\s+/g);
//     }
// }
// let people = new Person ("John", "Dou");
// document.write(people._firstName + "<br>");
// document.write(people.fullName + "<br>");
// people.fullName = "Anna Petrova";
// document.write(people.fullName + "<br>");


// class Animal {  //родительский класс
//     constructor(name) {
//         this.name = name;
//         this.speed = 0;
//     }
//     run(speed) {
//         this.speed = speed;
//         document.write(`${this.name} бежит со скоростью ${this.speed} км/час. <br>`);
//     }
//     stop() {
//         this.speed = 0;
//         document.write(`${this.name} стоит. <br>`);
//     }
// }

// class Rabbit extends Animal{ //дочерний класс
//     constructor(name, earLength){
//         super(name);
//         this.earLength = earLength;
//     }
//     hide(){
//         document.write(`${this.name} прячется!<br>`);
//     }
//     stop(){
//         super.stop();
//         this.hide();
//     }
// }

// let animal = new Animal("Мой питомец");
// animal.run(80);
// animal.stop();
// let rabbit = new Rabbit("Белый кролик", 10);
// console.log(rabbit);
// rabbit.run(5);
// rabbit.hide();
// rabbit.stop();
// document.write(rabbit.name + "<br>");
// document.write("Длина уха: " + rabbit.earLength + "<br>");


// class Header {
//     constructor(img, h1, h2){
//         this.src = img;
//         this.h1 = h1;
//         this.h2 = h2;
//         this.out = "";
//     }
//     render(id){
//         this.out = `
//         <img src="${this.src}" alt="">
//         <h1>${this.h1}</h1>
//         <h2>${this.h2}</h2>
//         `;
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

// class HeaderExt extends Header{
//     constructor(img, h1, h2, tel){
//         super(img, h1, h2);
//         this.tel = tel;
//     }
//     get tel(){
//         return this._tel;
//     }
//     set tel(t){
//         let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
//         if(reg.test(t)){
//             this._tel = t;
//         }
//         else{
//             alert("Некорректный номер телефона");
//         }
//     }
//     renderExt(id){
//         super.render(id);
//         this.out += `
//         <p>${this.tel}</p>
//         `;
//         document.querySelector(`#${id}`).innerHTML = this.out;
//     }
// }

// let img = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-64.png";
// let header = new Header(img, "Заголовок", "Описание");
// header.render("header");

// let img2 = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-64.png";
// let header2 = new Header(img2, "Второй заголовок", "Другое описание");
// header2.render("header2");

// let img3 = "https://cdn1.iconfinder.com/data/icons/logos-3/304/codeigniter-64.png";
// let header3 = new HeaderExt(img3, "Дочерний класс", "Дочерний класс наследует все свойства и методы родительского класса", "+7 901 456-78-56");

// header3.tel = "+7 999 555-55-55";
// //header3.tel = "Hello";
// header3.renderExt("ext");


// JSON
// *.json
// let info = '{"first_name":"Ivan","age":36,"mother":{"name":"Olga","age":58},"children":["Kate","Igor","Misha"],"marrid":true,"dog":null}'
// document.write(info + "<br>");
// console.log(info);

/*
JSON.parse() - преобразовывает объект JSON в объект JavaScript (десериализация)
JSON.stringify() - преобразовывает объект JavaScript в объект JSON (сериализация)
*/

// let person = JSON.parse(info);
// console.log(person);

// person.first_name = "Petr";
// document.write(person.first_name + "<br>");

// delete (person.age);

// for (let i in person){
//     document.write(i + ": " + person[i] + "<br>");
// }

// person.work = "programmer";
// for (let i in person){
//     document.write(i + ": " + person[i] + "<br>");
// }

// delete(person.children[1]);
// document.write(person.children + "<br>");

// person.children.splice(1, 1);
// document.write(person.children + "<br>");

// person.children.push("Ira");
// document.write(person.children + "<br>");

// let personString = JSON.stringify(person);
// console.log(personString);



// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(js => console.log(js))



// document.querySelector("#load").addEventListener("click", load);

// function load(){
//     let url = "https://jsonplaceholder.typicode.com/users";
//     fetch(url)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function(data){
//         let ul = document.querySelector("#list");
//         let html = data.map(function(item){
//             return "<li>" + item.id + "-" + item.name + " (" + item.email +")</li>"
//         })
//         ul.insertAdjacentHTML("afterbegin", html.join(" "));
//     });

// }


let box = document.querySelector("div");
console.log(box.getBoundingClientRect());