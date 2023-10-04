//alert("Hello World");
//console.log("Hello World");
//console.error("This is an error");
//console.warn("This is a warning");

// var, let, const(let & const were added in ES6)

// let = can reassign values

// let age = 23;
// age = 24;

// console.log(age);

// const = can't reassign values

// const score = 10;
// score = 15;  // an error occured
// console.log(score);

// data types
// String, Numbers, Boolean, NULL, Undefined

const name = "john";
const age = 30;
const isCool = true;
const rating = 4.5; 
const x = null;
const y = undefined;
let z;// this is undefined also

console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof isCool) //boolean
console.log(typeof rating)// number
console.log(typeof x)// object //wrong
console.log(typeof y)//undefined
console.log(typeof z)//undefined

//concatenation
console.log("My name is " + name +" and I am " +age) 
//Template String
const hello = `My name is ${name} and I am ${age}.`
console.log(hello);


const s = "Hello World!";
console.log(s.length);
console.log(s.toUpperCase());//function to Upper case
console.log(s.substring(0,5).toLowerCase());// function to select substring and to lower case
console.log(s.split(''));// spliting the value

const s1 = "technology, computers, it, code";
console.log(s1.split(", ")) // create an array with 4 values


//Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5); // array constructor 
console.log(numbers)

const fruits = ["apples", "oranges", "pears"];//javascript can add different values to an array
console.log(fruits[1]);

fruits[3] ="grapes";// add to 3rd index
fruits.push("mangos");// add this as a new value
fruits.unshift("strawberries");// add this to the beggining of array
fruits.pop();// remove the last item

console.log(Array.isArray("hello")); // false
console.log(fruits.indexOf('oranges')); // 2
console.log(fruits)


// OBJECT Literals

    const person = {
        firstName: "john",
        lastName: "Doe",
        age: 30,
        hobbies: ["music", "movies", "sports"],
        address: {
            street: "50 main str",
            city: "Boston",
            state: "MA"
        }
    }
console.log(person);
console.log(person.firstName, person.lastName, person.hobbies[1])   

person.email = "john@gmail.com";
console.log(person);


// Array of OBJECTS 

const todos = [
    {
        id:1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id:2,
        text: "Meeting with boss",
        isCompleted: true
    },
    {
        id:3,
        text: "Dental appt",
        isCompleted: false
    }
];

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// FOR LOOPS 
for(let i = 0;i <=10; i++){

    console.log(`For Loop Number: ${i}`)

};

// while 
let i = 0;
while(i<10){
    console.log(`While loop Number: ${i}`)
    i++;
}

// forEach, map, filter

todos.forEach(function(todo){
    console.log(todo.text)
});

//map

const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted);

const num_1 = 0;

if(num_1 == 10){
    console.log("x is 10");
}