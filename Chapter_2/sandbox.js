//alert('hello, world');
// console.log(1);
// console.log(2);

// let age = 25;
// let year = 2019;

// console.log(age, year);
// age = 30;
// console.log(age, year);

// const points = 100;
// points = 50;
// console.log(points);

// strings
console.log('hello');
let email = 'abc@abcdefgh.com';
console.log(email);

// string concatenation
let firstName = 'Rex';
let lastName = 'Lee';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters
console.log(fullName[0]);
console.log(fullName[1]);

// string length
console.log(fullName.length);

// string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result);

// let index = email.indexOf('@');
// console.log(index);

// let result = email.lastIndexOf('b');
// let result = email.slice(2,5);
// console.log(result);
// let result = email.substr(2, 5);
// console.log(result);

// let result = email.replace('b','z');
// console.log(result);
let radius = 10;
const pi = 3.14;

console.log(pi*radius**2);

// order of oeration - B I D M A S

// let likes = 10;
// // likes = likes + 1;
// // likes++;
// // likes--;
// likes += 10;
// console.log(likes);

// NaN - not a number
console.log(5 / 'hello'); //Result is NaN

// template strings
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// // concatenation way
// // let result = 'The blog called ' + title + ' by ' + author + ' has ';

// // template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// // html templates
// let html = `
// <h2>${title}</h1>
// <p>By ${author}</p>
// `;
// console.log(html);

let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);
console.log(ninjas[0]);
console.log(ninjas[1]);
console.log(ninjas[2]);
console.log(ninjas.length);

// array methods

//let result = ninjas.join(',');
//let result = ninjas.indexOf('chun-li');
//let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken');  // push into the array, and return the array length
// console.log(ninjas);
// result = ninjas.pop(); // take out the last input
// console.log(result);
// console.log(ninjas);

// strict comparision (difference types cannot be equal)

// type conversion
let score = '100';

score = Number(score);
console.log(score + 1);
console.log(typeof score);

let result = String(50);
console.log(result);
console.log(typeof result);