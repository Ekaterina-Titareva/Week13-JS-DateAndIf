1.  Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона — местная.
    const date = new Date(2021, 0, 24, 22, 51);
    console.log(date);

2.  Для чего предназначен метод getDay()?
    Метод getDay() — вернёт день недели от 0 (воскресенье) до 6 (суббота).

3.  Как посчитать, сколько секунд осталось до завтра?
    function getSecondsToTomorrow() {
    const now = new Date();
    // завтрашняя дата
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

        const diff = tomorrow - now; // разница в миллисекундах
        return Math.round(diff / 1000); // преобразуем в секунды

    }

console.log(getSecondsToTomorrow())

4. Для чего предназначен метод getDate()?
   Метод getDate() предназначен для получения дня месяца, от 1 до 31.

5. Что выведет console.log(d) ?
   let d = new Date(2016, 2, 9);

console.log(d);

Ответ: Wed Mar 09 2016 00:00:00 GMT+0300 (Москва, стандартное время)

<!-- часовой пояс может отличаться -->

​ 6. Что делает getTimezoneOffset() ?
Возвращает разницу между временем UTC и местным временем.

7. Что выведет консоль?
   let date = new Date();

console.log(date.getUTCHours());

Выведет час в часовом поясе UTC+0

​8. Для чего предназначен метод getHours() объекта Date?
Метод getHours() предназначен для получения часа в вашем текущем часовом поясе.

9. Что выведет консоль?
   let d = new Date();
   let y = d.getFullYear();
   console.log(y);

   ​Выведет текущий год, т.е. 2023

10. В чём ошибка в коде?
    let y = new Date();
    let d = y.getDate();
    console.log(d);

Нет ошибки в коде, консоль покажет текущий день месяца
