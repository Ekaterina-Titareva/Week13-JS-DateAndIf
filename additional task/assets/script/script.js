// ***** Задание под звездочкой**

// На прошлой неделе мы создали сервис комментариев. Давайте его улучшим:

// - напротив аватара и имени должна появляться дата когда и во сколько был написан комментарий;
// - под заголовком «Оставьте ваш комментарий» должен быть чекбокс, который даёт выбор показывать ваше имя в комментарии или нет;
// - если пользователь не указал имя, то вместо имени должно появляться `username` ;
// - если пользователь не ввел ссылку на аватар, то должна появляться стандартная аватарка. Стандартных аватаров должно быть больше пяти, они должны подставляться в рандомном порядке.

//создаем функцию, которая проверяет текст на спам
function checkSpam (str) {
    const a = str.replace(/viagra|ххх|xxx/gi, '***');
    return a;
}

const button = document.getElementById('button');
const name = document.getElementById('name');
const nameResult = document.getElementById('nameResult');
const link = document.getElementById('link');
const img = document.getElementById('linkResult');
const comment = document.getElementById('comment');
const commentResult = document.getElementById('commentResult');
const date = document.getElementById('date');


//сначала проверяем, хочет ли пользователь скрыть имя 
//если пользователь хочет скрыть имя, форма для ввода имени исчезает 

    function nameless () {
    const nameless = document.getElementById('nameless');    
    nameless.classList.toggle('nameless');
}

//если пользователь передумал, то поле для ввода имени появляется
    function nameReturn () {
    const nameless = document.getElementById('nameless');
    nameless.classList.remove('nameless');
    nameResult.textContent = "";
}

button.addEventListener('click', function () {
    let currentDate = new Date();

    const nameCheckLetter = name.value.toUpperCase().slice(0, 1) + name.value.toLowerCase().slice(1);
    const nameDelBlank = nameCheckLetter.replace(/ |[0-9!@#$%^&*()_+=?\.,/<>|`~"№;:]/g, '');
    nameResult.textContent = nameDelBlank;

//если радиокнопка скрыть имя не зажата, то пользователю автоматически присваевается имя "username"

if(document.getElementById('namelessYes').checked) {
    nameResult.textContent = "username";}

//проверяем ссылку на картинку на недопустимые символы

    const linkDelBlank = link.value.replace(/ |[!@#$^*()+\,<>`~"]/g, '');
    img.src = linkDelBlank;
    img.classList.remove('display-none');

//если пользователь не ввел ссылку на аватар, появится стандартная аватарка 
//стандартные аватары (6 шт) подставляются в рандомном порядке

//создаем функцию для рандомного вывода
function arrayRandElement(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

//определяем массив
let randomAvatar = [
'./assets/icons/avatar1.svg', 
'./assets/icons/avatar2.svg', 
'./assets/icons/avatar3.svg', 
'./assets/icons/avatar4.svg', 
'./assets/icons/avatar5.svg', 
'./assets/icons/avatar6.svg',
];

//при пустом поле ссылки рандомно выводим картинку с помощью ранее созданной функции с массивом в качестве параметра
if (link.value === "") {
img.src = arrayRandElement(randomAvatar);
}

//проверяем текст комментария на спам с помощью уже созданной ранее функции
    commentResult.textContent = checkSpam(comment.value);

//указываем дату и время отправки комментария

//устранение бага с минутами
let currentMinutes = currentDate.getMinutes();
if (currentMinutes.toString().length === 1) {
    currentMinutes = `0${currentMinutes}`
}

//выводим дату и время
date.textContent = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentMinutes}`;

//очищение полей ввода
    name.value = "";
    link.value = "";
    comment.value = "";
    currentDate= "";
})
