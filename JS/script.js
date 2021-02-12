"use strict";

if (4 == 9) {
    console.log("Ok!");
} else {
    console.log("Not Ok!");
}

const num = 51;

if (num < 50) {
    console.log("Много");
} if (num > 100) {
    console.log("Мало");
} else {
    console.log("Ты не попал в диапазон!");
}

(num == 50) ? console.log("OK!") : console.log("Error");


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