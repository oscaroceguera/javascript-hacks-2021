const array = [1, 2, 3];
const object = { message: 'Hello!' };
const string = 'Hello!';
const empty = null;

console.log(Array.isArray(array));  // => true
console.log(Array.isArray(object)); // => false
console.log(Array.isArray(string)); // => false
console.log(Array.isArray(empty));  // => false
console.log('---')
console.log(array instanceof Array);  // => true
console.log(object instanceof Array); // => false
console.log(string instanceof Array); // => false
console.log(empty instanceof Array);  // => false
console.log('---')
console.log(({}).toString.call(array) === '[object Array]'); // => true