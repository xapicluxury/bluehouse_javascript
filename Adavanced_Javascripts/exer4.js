// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = test;
/* answer is const b = true;
const c = 789;
let a = 'test';
a = 'test'; */

// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

/*  answer is const { firstName, lastName, age, eyeColor } = person;*/


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = { 
  a: a,
  b: b,
  c: c
};
/*  answer is const a = 'test';
const b = true;
const c = 789;

const okObj = { a, b, c };
*/


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
//const message = Hello ${firstName}, have I met you before? I think we met in ${city} last summer, no???;


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}
/* answer is const isValidAge = (age = 10) => {
  return age;
};
*/

// Symbol
// Create a symbol: "This is my first Symbol"
// answer is const mySymbol = Symbol("This is my first Symbol");


// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
/*  answer is const whereAmI = (username, location) => {
  return (username && location) ? "I am not lost" : "I am totally lost!";
};
*/
