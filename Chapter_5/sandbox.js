// object literals

let user = {
    name: 'crytsal',
    age: 30,
    email: 'crystal@theninja.co.uk',
    location: 'berlin',
    blogs: [
        {title: 'why mac & cheese rules', like: 30}, 
        {title: '10 things', like: 50}
    ],
    login(){                   // function define in object is call method
        console.log('The user logged in');
    },
    logout(){                   // function define in object is call method
        console.log('The user logged out');
    },
    logBlogs(){       // if using arrow function, "this" inside will be refer to "window" object
        //console.log(this.blogs);
        console.log('This user has the following blogs:');
        this.blogs.forEach((blog) => {console.log(blog.title, blog.like);});
    }
}

console.log(user);
console.log(user.name);
console.log(user['name']); //work the same, good for passing variable

console.log(user.age);
user.age = 35;
console.log(user.age);

user.login();
user.logout();
user.logBlogs();

// reference values

const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;  // It change age for two user
console.log(userOne, userTwo);
// This is not the correct way to copy array(or any other reference type)