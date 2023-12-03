// 2. Напишем программу, которая будет считать количество дней до дня рождения пользователя и отображать это значение на странице.
//     - Создайте HTML-страницу с заголовком "Дни до дня рождения"
//     - Добавьте на страницу инпут, который позволит пользователю выбрать дату рождения в текущем году, и кнопку, при нажатии на которую, на страницу будет выводиться значение количества дней до дня рождения.
//     - Если пользователь не ввёл дату рождения, под полем ввода будет появляться красное сообщение с просьбой ввести дату. Если пользователь введёт дату или изменит её, сообщение об ошибке будет скрыто.
    
//     *** Добавьте условия, которые будут правильно определять склонение слова "день" в соответствии с грамматикой русского языка

const calculateButton = document.getElementById('calculateButton');
const date = document.getElementById('daysToBirthday')
const result = document.getElementById('result')
const currentDate = new Date();

calculateButton.addEventListener('click', function () {
    result.style.color = '';
    result.style.fontWeight = '';
    result.style.fontSize = '';
let dateValue = date.value;
const birthday = new Date(dateValue);
let numberOfDays = Math.floor((birthday - currentDate) / 1000 / 3600 / 24);

if (numberOfDays >= 1) {
result.textContent = `Your Birthday will be in ${++numberOfDays} days`
} else if (numberOfDays === 0) {
result.textContent = `Your Birthday will be tomorrow! Just a little`
} else if (numberOfDays === -1) {
        result.textContent = `Today is your Birthday! Congratulations!`
        result.style.color = '#ff0081';
        result.style.fontWeight = '700';
        result.style.fontSize = '32px';
} else if (numberOfDays === -2) {
    result.textContent = `Your birthday was yesterday! Congratulations!`
} else if (numberOfDays < 0 && numberOfDays !== -1 && numberOfDays !== -2) {
result.textContent = `Ooops, your birthday was ${Math.abs(++numberOfDays)} days ago`
} else {
    result.textContent = `Enter your date of birth`
    result.style.color = 'red';

}
})