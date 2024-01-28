/*Задание 1*/
let a = 10;
alert(a);
a = 20;
alert(a);

/*Задание 2*/
let yearIphone = 2007;
alert(`Год выпуска первого iPhone ${yearIphone}`);

/*Задание 3*/
let JavaScriptAuthor = "Брендан Эйх";
alert(`Создатель языка JavaScript ${JavaScriptAuthor}`);

/*Задание 4*/
let b = 10;
let c = 2;
alert( `Сумма ${b + c}; Разность ${b - c}; Произведение ${b * c}; Частное ${b / c}`);

/*Задание 5*/
let d = 2;
let result = d ** 5;
alert(result);

/*Задание 6*/
a = 9;
b = 2;
alert (a % b);

/*Задание 7*/
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

/*Задание 8*/
let age = prompt('Сколько вам лет?');
alert(age);

/*Задание 9.0-9.4*/
let user = {
	name: 'Mary',
	age: 30,
	isAdmin: true
};
user.cityOfResidence = 'Berlin';
user.age = 32;
delete user.cityOfResidence;
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

/*Задание 10*/
let userName = (prompt("Привет, как тебя зовут?"));
let greeting= `Привет, ${userName}!`;
alert (greeting);