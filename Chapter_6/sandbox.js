// "document" object (Create by browser)
let para = document.querySelector('p');  // grab the first <p> tab
console.log(para);

para = document.querySelector('.error');
console.log(para);

para = document.querySelector('div.error');
console.log(para);

const paras = document.querySelectorAll('p');  // select ALL
// console.log(paras);
// console.log(paras[0]);
// console.log(paras[1]);
// console.log(paras[2]);

paras.forEach(para => {
    console.log(para);
})