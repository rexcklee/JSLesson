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