'use strict';

//Объекты, деструктуризация объектов

const options = {
    name: 'test',
    width: 1024,
    height: 1010,
    colors: {
        border: 'black', 
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);


// Object.keys (options) Записывает в массив все ключи в объекте "options".
// Свойство .length считает количество элементов в массиве.
//console.log(Object.keys(options).length);


//console.log(options.name);

//delete options.name;

//console.log(options);


/*
let counter = 0;


for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
   
}

console.log(counter);

*/

