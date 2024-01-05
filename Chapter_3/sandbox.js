// for (let i=0; i<5; i++){
//     console.log("in loop:", i);
// }

// console.log('loop finished');

// for loop
// const names = ['shaun', 'mario', 'luigi'];

// for (let i=0; i< names.length; i++){
//     //console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

// while loop
const names = ['shaun', 'mario', 'luigi'];
let i = 0;

// while (i < 5){
//     console.log('in loop: ', i);
//     i++;
// }

while (i < names.length){
    console.log(names[i]);
    i++;
}

// else if & || &&
const password = 'passs';

if (password.length >= 12 && password.includes('@')){
    console.log('Password is mighty strong');
} else if (password.length >= 8 || (password.includes('@') && password.length >= 5)){
    console.log('Password is strong enough');
} else {
    console.log('Password is not strong enough');
}

// break and continue
// break - break the loop
// continue - stop one iteration and continue the loop

// switch (using strict equality)
const grade = 'F';

switch(grade){
    case 'A':
        console.log("You got A");
        break;
    case 'B':
        console.log("You got B");
        break;
    case 'C':
        console.log("You got C");
        break;
    case 'D':
        console.log("You got D");
        break;
    case 'E':
        console.log("You got E");
        break;
    default:
        console.log("Not a valid grade");    
}

// variable & block scope ("let" and "const" has block scope control, while "var" don't have)
let age = 30;

//let age = 50; cannot be re-define a variable

if(true){
    let age = 40;   // can be re-define inside a code block, it is local and only can be access inside the block
    console.log('inside 1st code block: ', age);

    if(true){
        let age = 50;
        console.log('inside 2nd code block: ', age);
    }
}

console.log('outside code block: ', age);
