
"use strict";

/*
let a=15;
console.log(a);


let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    a: 50
};

obj.a =10;

console.log(obj);

console.log(name);
var name = `Ivan`;

{
    let result = 50;
}

console.log(`strisd` * 9);

const bool = true;

// console.log(something);

const object = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(object.name);

let arrImg = ["aple.jpg", "orange.bmp", 6, {}, []];
console.log(arrImg[1]);

//const answers = [];
//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Сколько вам лет?', '');
//answers[2] = prompt('Как ваша фамилия?', '');
//document.write(answers);
//console.log(answers);
//console.log(typeof(answers));
//console.log(typeof(null));

//alert('ASDASD');

//const res = confirm('Are you here?');
//console.log(res);

//const ans = +prompt('Тебе есть 18?', "18");
//console.log(ans + 5);

const category = 'Toy';
console.log(`https://someurl.com/${category}/5`);

//const user = "Ivan";
//alert(`Привет, ${user}`);

console.log('arr' + "-obsss");
//console.log(4 + +"asasdasd"); //второй + наз. унарный плюс

let incr = 10,
    decr = 10;
//incr++;
//decr--;
console.log(++incr);
console.log(--decr);

//console.log(2*4 === 8);


const isChecked = true,
      isClosed = true;

      console.log(isChecked && !isClosed);
*/

let numberOfFilms;

function start() {
    const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNan(numberOfFilms)) {
        const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i < 2; i++) {
  const q1 = prompt("Один из последних просмотренных фильмов?", ""),
        q2 = prompt("На сколько оцените его?", ""),
        q3 = prompt("Один из последних просмотренных фильмов?", ""),
        q4 = prompt("На сколько оцените его?", "");

    personalMovieDB.movies[q1] = q2;
    personalMovieDB.movies[q3] = q4;
}

console.log(personalMovieDB);

