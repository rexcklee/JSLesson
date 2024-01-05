// "document" object (Create by browser)
// let para = document.querySelector('p');  // grab the first <p> tag
// console.log(para);

// para = document.querySelector('.error');
// console.log(para);

// para = document.querySelector('div.error');
// console.log(para);

// const paras = document.querySelectorAll('p');  // select ALL
// // console.log(paras);
// // console.log(paras[0]);
// // console.log(paras[1]);
// // console.log(paras[2]);

// paras.forEach(para => {
//     console.log(para);
// })

// get an element by ID
// let title = document.getElementById('page-title');
// console.log(title);

// // get elements by class
// let errors = document.getElementsByClassName('error');  // forEach cannot be used, as it is a HTMLCollection
// console.log(errors);

// get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);

// querySelectorAll can then use forEach

// const para = document.querySelector('p');
// para.innerText = 'ninjas good';

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new Text';
// })

const content = document.querySelector('.content');

// console.log(content.innerHTML);    // innerHTML, different from innerText
// content.innerHTML = `<h2>This is H2</h2>`;  // use "+="" to append

const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
})

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.ninja.com');
link.innerText = 'Ninga website';

// const mssg = document.querySelector('div');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('style', 'color: red');

// console.log(mssg.style);
// mssg.style.margin = '50px';
// mssg.style.color = 'blue';
// mssg.style.fontSize = '30px';
// mssg.style.margin = ''; // to clear a style

const error = document.querySelector('.error');
console.log(error.classList);
error.classList.add('success');
console.log(error.classList);
error.classList.remove('success');

const plist = document.querySelectorAll('p');
plist.forEach(p => {
    if(p.innerText.includes('success') === true){  // can use innerContent instead to check even text is hidden
        p.classList.add('success');
    } else if (p.innerText.includes('error') === true){
        p.classList.add('error')
    }
})