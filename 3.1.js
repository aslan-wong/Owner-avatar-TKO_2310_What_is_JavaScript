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

