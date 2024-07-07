/* задание 1 */

for (let a = 0; a < 2; a++) {
    console.log('Привет');
}

/* задание 2 */

let b = 0;

while (b < 5) {
    b++;
    console.log(b);
}

/* задание 3 */

let c = 6;

while (c < 22) {
    c++;
    console.log(c);
}

/* задание 4 */

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}

for (let key in obj) {
console.log(`${key} - зарплата ${obj[key]} долларов`);
}

/* задание 5 */

let num = 0;

for (let n = 1000; n >= 50; n /= 2) {
    num++;
    console.log(n);
}

console.log('Всего итераций: ' + num);

/* задание 6 */

for (let friday = 4; friday <= 31; friday += 7) {
    console.log(`Сегодня пятница ${friday}-е число. Необходимо подготовить отчет.`);
}