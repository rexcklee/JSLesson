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