//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
const currentDate = new Date();
console.log(currentDate);
//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
const currentYear = currentDate.getFullYear();
console.log(currentYear);
//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
const currentMonth = currentDate.getMonth();
console.log(currentMonth);
//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
const currentDay = currentDate.getDate();
console.log(currentDay);
//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
const birthday = new Date("2023-05-15");
console.log(birthday);
//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
const futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 40);
console.log(futureDate.toLocaleString());
//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
console.log(Math.round((futureDate - currentDate)/1000/3600/24));
//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
const pastDate = new Date();
pastDate.setDate(currentDate.getDate() - 5);
console.log(pastDate.toLocaleString());
//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
console.log(Math.round((pastDate - currentDate)/1000/3600/24));
//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
const nextWeek = new Date();
nextWeek.setDate(currentDate.getDate() + 7);
console.log(nextWeek.toLocaleString());
//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());
//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
const futureYear = currentYear + 5;
console.log(futureYear);
//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
const futureDateInFutureYear = new Date("2024-05-15");
console.log(futureDateInFutureYear);
//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log(futureYear - currentYear);
//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = '2023-06-15T08:30:00.000Z';
const date = Date.parse(strDate);

console.log(date);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
console.log(Date.parse(strDate));

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const wrongDate = '2023/06/15';
if(Date.parse(wrongDate) === NaN){ 
	alert("Неправильный формат даты");
} else {
	alert("Правильный формат даты");
};

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
if(number > 0){ 
	console.log(`${number} - положительное`);
} else {
	console.log(`${number} - не положительное`);
};

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 === 0) {	console.log(`${number} - четное`);
} else {
	console.log(`${number} - нечетное`);
};

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 === 0) {	console.log(`${number} - кратное 3`);
} else {
	console.log(`${number}  - не кратное 3`);
};

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number.toString().length === 0) {
	console.log(`${number}  - однозначное`);
} else {
	console.log(`${number}  - не однозначное`);
};

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number.toString().length === 1) {
	console.log(`${number}  - двузначное`);
} else {
	console.log(`${number}  - не двузначное`);
};

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if(number >= 0){ 
	console.log(`${number}  - положительное или ноль`);
} else {
	console.log(`${number}  - отрицательное`);
};

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5  === 0) {
	console.log(`${number}  - кратное 5`);
} else if (number % 7  === 0) {
	console.log(`${number}  - кратное 7`);
} else {
	console.log(`${number}  - не кратное 5 и/или не кратное 7`);
};

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if(number <= 0){ 
	console.log(`${number}  - отрицатеьное или ноль`);
} else {
	console.log(`${number}  - не отрицательное и не ноль`);
};

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number.toString().length === 3) {
	console.log(`${number}  - трехзначное`);
} else {
	console.log(`${number}  - не трехзначное`);
};

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
const randomNumber = Math.floor(Math.random() * 7 + 1); 
console.log(randomNumber);

let day = '';

switch(randomNumber) {
case 1:
    day = 'Понедельник';
    break;
case 2:
    day = 'Вторник';
    break;
case 3:
    day = 'Среда';
    break;
case 4:
    day = 'Четверг';
    break;
case 5:
    day = 'Пятница';
    break;
case 6:
    day = 'Суббота';
    break;
case 7:
	day = 'Воскресенье';
	break;
default:
    day = 'Неизвестный день недели';
}

console.log(day);  

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").

let direction = 'W';
let fullName = '';

switch (direction) {
	case 'N':
	fullName = 'Север';
    break;
case 'S':
fullName = 'Юг';
    break;
case 'E':
	fullName = 'Восток';
    break;
case 'W':
	fullName = 'Запад';
    break;
default:
    fullName = 'Неизвестное направление';
}

console.log(fullName);  
