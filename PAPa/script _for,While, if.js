"use strict";
/*
if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("Not Ok!");
}

//const num = 51;

if (num < 50) {
    console.log("Много");
} if (num > 100) {
    console.log("Мало");
} else {
    console.log("Ты не попал в диапазон!");
}

const numnn = 51;
(numnn == 50) ? console.log("OK!") : console.log("Error");


const nun = 50;
switch (nun) {
    case 49: console.log("Не верно!");
    break;
    case 100: console.log("Не верно!");
    break;
    case 50: console.log("верно!");
    break;
    default: console.log("Не в єтот раз!");
}

//let numn = 50;
//while (numn <= 55) {
//   console.log(numn++);
//}

//let numn = 50;
//do {
//    console.log(numn++);
//}
//while (numn <= 55);

let numn = 50;
for (let i = 1; i < numn; i++) {
    if (i === 2) {
        //break;
        continue;
    }
    console.log(i);
}
*/


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания


const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 1; i++) {
  const q1 = prompt("Один из последних просмотренных фильмов?", ""),
        q2 = prompt("На сколько оцените его?", "");

    if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length <50) {
        personalMovieDB.movies[q1] = q2;
        console.log("Done");
    } else {
        console.log("Error");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);