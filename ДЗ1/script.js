let firstName = prompt("Имя");
let surName = prompt("Фамилия");
let city = prompt("Город проживания");
let age = prompt("Возраст");

let res = confirm ("***Проверка данных*** \nИмя: " + firstName + "\nФамилия: " + surName + "\nГород проживания: " + city + "\nВозраст: " + age + "\nВсе верно?");
if (res){
    alert("Спасибо, что выбрали наш сервис!")
}
else{
    alert("Введите данные еще раз")
}