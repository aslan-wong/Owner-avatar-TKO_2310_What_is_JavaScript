const person = {
    firstName: "Stacy",
    lastName: "Student",
    age: 30,

    introduction: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old!`
    }

}// Both of the notations below return "Stacy"
person.firstName;
person['firstName'];

person.introduction();
// "Hello, my name is Stacy Student and I am 30 years old!"

/*
let person1 = {name: "Stacy", age: 30} // Create a new object
let person2 = person1 // person2 references to person1 now
person2.name = "Teppo" // Mutate object via person2
console.log(person1.name) // Teppo

*/

//In order to create a shallow copy of an object, object spread syntax can be used.

let person1 = {name: "Stacy", age: 30} // Create a new object
let person2 = {...person1} // Create a second object with the contents from person1
person2.name = "Teppo" // Mutate person2
console.log(person1.name) // Stacy

//An empty array:
let emptyArray = [];

//An array with contents:
let arrayWithContents = ["Strings", "inside", "an", "array"];

//The array contents can be accessed using the bracket notation (indices start from 0):
arrayWithContents[1]; // "inside"

// create a copy of an array using the same spread syntax as for objects: 
// let newArray = [...oldArray]. Remember that this will again create a shallow copy of the array
/*
//The traditional method of iterating over an array is to use a for loop:
for (let i=0; i<arrayWithContents.length; i++) {
    console.log(arrayWithContents[i]);
}
*/
// Will print the array values
for (let val of arrayWithContents) {
    console.log(val);
}

arrayWithContents.forEach(val => console.log(val))
arrayWithContents.forEach((val, idx) => console.log(String(idx) + val));

//The functionality of the forEach is equivalent to the myForEach defined below:

function myForEach(arr, func) {
    for (let i in arr) {
        func(arr[i], i)
    }
}

myForEach(arrayWithContents, (val, idx) => console.log(String(idx) + val));

/*
While forEach itself does not provide us with too much functionality, there are other, more specialized higher order functions provided in array prototype that create new arrays based on old ones. It is to be noted that these functions do not mutate the original array but create a new array with the operation applied:

filter

    Create a new array by filtering members
map

    Create a new array by mapping values from the source array members
reduce

    Reduce the array into a scalar value by using a reducer

*/
/*

let item  = "an";
let filteredArray = arrayWithContents.filter(val => val !== item);

let contacts = [
    {
        name: "Teppo",
        number: "040012345678"
    },
    {
        name: "Pirkko",
        number: "055987654321"
    },
    {
        name: "Stacy",
        number: "0446543210987"
    }
]

let numbers = contacts.map(contact => contact.number);

let grades = [5,5,2,4,5,3]
let sum = grades.reduce((acc, val) => acc+val);

*/
// Define numbers to be an array that 
// contains positive even integers up to (and including) ten.

let numbers;
numbers = [2,4,6,8,10];

// Define notes to be an array that contains 7 "note arrays" 
// that are pairs of note pitch and it's length, e.g. ["C5","8n"]. 
// The array must first have four sixteenth (16n) notes A4, B4, C#4, A4. 
// Then, TWICE the eighth (8n) note E5. And finally, the half (2n) note C#4.
let notes;
notes = [["A4","16n"],["B4","16n"],["C#4","16n"],["A4","16n"],["E5","8n"],["E5","8n"],["C#4","2n"]];

// Your task is to define an object to the variable myStuff. 
// It should have the following keys fruit, amount, and pinCode. 
// The keys should have the following values (in corresponding order):
// 'apple', 3, and [1,2,3,4]
let myStuff = {
    fruit: 'apple',
    amount: 3,
    pinCode: [1,2,3,5]
};

//  The following JavaScript-function should calculate the sum of all integers given as an array. 
// There seems to be an error and your task is to fix the function.
function arraySum(arr) {
    var s = 0;
    for (var i = 1; i <= arr.length; i++) {
      s += i;
    }
    return s;
  }
  
  console.log(arraySum(myStuff.pinCode))