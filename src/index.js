/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(fn(array[i], i, array));
    }
    return result;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    var i = 0;
    if (typeof initial === 'undefined') {
        initial = array[0];
        i = 1
    }
    for (i; i < array.length; i++) {
        initial = fn(initial, array[i], i, array);
    }
    return initial;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    return (prop in obj);
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    var result = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result.push(prop);
        }
    }
    return result;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var result = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            result.push(prop.toUpperCase());
        }
    }
    return result;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
    var myArray = [],
        iStart = from,
        iEnd = to;
    if (from === undefined) {
        iStart = 0;
    } else {
        if (from < 0) {
            iStart = array.length + from;
        }
        if (from < 0) {
            iStart = 0;
        }
    }
    if (to === undefined) {
        iEnd = array.length;
    } else {
        if (to < 0) {
            iEnd = array.length + to;
        }
        if (to > array.length) {
            iEnd = array.length;
        }
    }
    for (var i = iStart, indexRez = 0; i < iEnd; i++) {
        myArray[indexRez] = array[i];
        indexRez++;
    }
    return myArray;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    var p = new Proxy(obj, {
        set: function(obj, prop, value) {
            obj[prop] = value*value;
            return obj[prop];
        }
    });
    return p;
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};