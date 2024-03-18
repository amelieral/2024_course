/* задание 1 */
let password = 'пароль';
let inputPassword = prompt('Введите пароль');
password === inputPassword ? console.log('Пароль введен верно') : console.log("Пароль введен неправильно");

/* задание 2 */
let c = 9;
let result = c > 0 && c < 10 ? 'Верно' : 'Неверно';
console.log(result);

/* задание 3 */
let d = 110;
let e = 80;
let result2 = d > 100 || e > 100 ? 'Верно' : 'Неверно';
console.log(result);

/* задание 4 */
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

/* задание 5 */
let monthNumber = 5;
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('осень');
        break;
    default:
        console.log('Нет такого месяца');
        break;
}

/* задание 7 */
let anyNumber = prompt('Пожалуйста, введите любое число');

if (anyNumber.trim() === '' || isNaN(anyNumber)) {
    alert('Это не число');
} else {
    if (anyNumber % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
}

/* задание 8 */
let clientOS = 1;

if (clientOS === 0)
    console.log('Установите версию приложения для iOS по ссылке');
else
    console.log('Установите версию приложения для Android по ссылке');

/* задание 9 */
let clientOS2 = 1;
let deviceYear = 2010;

if (clientOS2 === 0) {
    if (deviceYear < 2015) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    } else {
        console.log('Установите версию приложения для iOS по ссылке');
    }
} else {
    if (deviceYear < 2015) {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    } else {
        console.log('Установите версию приложения для Android по ссылке');
    }
}
