//function filterOutOdds() {
//    var nums = Array.prototype.slice.call(arguments);
//    return nums.filter(function(num) {
//      return num % 2 === 0
//    });
//  }

/* Write an ES2015 Version */

const filterOutOdds = (...args) => {
    let nums = [...args];
    return nums.filter(num => num % 2 === 0);
}

const findMin = (...args) => Math.min(...args);

console.log(findMin(1, 4, 12, -3)) // -3
console.log(findMin(1, -1)) // -1
console.log(findMin(3, 1)) // 1


const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })) // {a:1, b:2, c:3, d:4}

const doubleAndReturnArgs = (arr, ...args) => {
    argsArr = [...args];
    doubledArgs = argsArr.map(num => num * 2);
    return allArray = [...arr, ...doubledArgs];
}

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)) // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2], 10, 4)) // [2, 20, 8]

/*Slice and Dice!*/

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    indexToRemove = Math.floor(Math.random() * items.length)
    newArr = [...items];
    newArr.splice(indexToRemove, 1);
    return newArr;
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return extendedArray = [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    return combinedObj = { ...obj, [key]: val };
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    newObj = { ...obj };
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}


/** Return a new object with a modified key and value. */

const obj1 = { name: 'Bob', age: 42 }

const update = (obj, key, val) => {
    return newObj = { ...obj, [key]: val };
}
