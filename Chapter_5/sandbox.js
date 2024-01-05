// object literals

let user = {
    name: 'crytsal',
    age: 30,
    email: 'crystal@theninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things'],
    login: function(){
        console.log('The user logged in');
    }
}

console.log(user);
console.log(user.name);
console.log(user['name']); //work the same, good for passing variable

console.log(user.age);
user.age = 35;
console.log(user.age);

user.login();