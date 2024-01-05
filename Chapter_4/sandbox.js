// function expression
const goodday = function(){    // use const to declare function because don't want it to be change later
    console.log('good day');
}

greet();
goodday();

// function declaration (JavaScript hoist "function declaration" but not "function expression")
// function declaration can be put somewhere "after" calling the function (function expression not like this)
function greet(){
    console.log('hello');
}

// function expression preferred

// arguments and parameters
const speak = function(name = 'luigi', time = 'night'){   //name is argument  //'luigi'and'night' is default value
    console.log(`good ${time} ${name}`);
}

speak('mario', 'morning');     // "mario" is parameter
speak();

// returning value
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// const area = calcArea(5);
// console.log(area);

// arrow function
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// }

const calcArea = radius => 3.14 * radius**2;  //it also work if function is simple

const area = calcArea(5);
console.log(area);

// callbacks function
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
}

myFunc(value => {console.log(value)});

// foreach method (take a callback function)
let people = ['mario','luigi','ryu','shaun','chun'];

people.forEach((person)=>{console.log(`We have ${person}`)});  // pass a callback function

people.forEach((person, index)=>{console.log(`${index+1}. We have ${person}`)});    // can have second parameter

const logPerson = (person, index) => {
    console.log(`${index+1}. We have ${person}`);
};

people.forEach(logPerson);

// get a reference to the "ul"
const ul = document.querySelector('.people');

const people2 = ['mario','luigi','ryu','shaun','chun'];

let html = ``;

people2.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
})

console.log(html);
ul.innerHTML += html;
