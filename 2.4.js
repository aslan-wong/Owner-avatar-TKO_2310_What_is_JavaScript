Math.sqrt(2);
console.log(Math.sqrt(2))

let square = Math.sqrt(2);
console.log(square); // 1.4142135623730951

let randomValue = Math.random();
let randomFunction = Math.random;
randomFunction(); // Returns a random value
console.log(Math.random);

/*
function theNameOfFunction(parameter1, parameter2, ...) {
    return theReturnValue;
}
    */

let value = 12;

function multiplyWithTwo(x) {
    x = x * 2;
}

multiplyWithTwo(value);
console.log(value); // still 12

let numberArray = [12];

function multiplyWithTwo(arr) {
    arr[0] = arr[0] * 2;
}

multiplyWithTwo(numberArray);
console.log(numberArray); // [24]

/*
const theNameOfVariable = function(parameter1, parameter2, ...) {
    // Statements here
    return theReturnValue;
}
*/

/*
const theNameOfVariable = function theNameOfFunction(parameter1, parameter2, ...) {
    // Statements here
    return theReturnValue;
}
*/

/*
anonymous lambda function
console.log(function(parameter1, parameter2) {
    // Statements here
});

console.log(function(a, b) {
    return a+b;
});
*/

/* Arrow functions
const theNameOfVariable = (parameter1, parameter2) => {
    // Statements here
    return theReturnValue;
}

const addTogether = (a, b) => {
    return a+b;
}
    
// The following function will still return the result of a+b
const addTogether = (a, b) => a+b;

const addToHundred = a => a+100;

//With zero parameters, we still need to put an empty parenthesis though:
const sayHello = () => console.log("Hello");

//an arrow function looks like when given as an argument to another function:
console.log((a, b) => a+b);

*/
let globalVariable = "Hello world";

function sayHello() {
    console.log(globalVariable);
}

sayHello();

/* if we declare a variable in local function scope, 
we cannot access it from the outer scope:

function saveVariable() {
    let fLocalVar = "Hello world";
}
saveVariable();
console.log(fLocalVar); // ReferenceError


the block scope 
function blockExample() {
    let fLocalVar = "Hello from function scope";
    // Create a block. This could be an if block or a loop block as well
    {
        let bLocalVar = "Hello from the block";
        console.log(bLocalVar); // Prints "Hello from the block"
        console.log(fLocalVar) // Prints "Hello from function scope"
    }

    console.log(bLocalVar); // ReferenceError
}

blockExample();


//accessing a block-local variable outside the block will not work. 
//But this was/is not always the case: before let there was only var
function blockExample() {
    let fLocalVar = "Hello from function scope";
    // Create a block. This could be an if block or a loop block as well
    {
        var bLocalVar = "Hello from the block";
        console.log(bLocalVar); // Prints "Hello from the block"
        console.log(fLocalVar) // Prints "Hello from function scope"
    }

    console.log(bLocalVar); // Prints "Hello from the block"
}

blockExample();
*/
/*
The variables defined with var were local to the function scope, 
but not local to the block scope. This is the main difference between let and var. 
Declaring a variable with var inside a function would still not give access to the outer scopes though:

function saveVariable() {
    var fLocalVar = "Hello world";
}

console.log(fLocalVar); // ReferenceError

*/
/* If there are conflicts with overlapping variable names, 
the “more nested” scopes take precedence. 
In other words, the innermost scope takes the highest precedence, 
while the outer-most scope takes the lowest.*/
function outerFunction() {
    let outerVariable = "Hello from outer";
    return function() {
        return "Hello from inner" + outerVariable;
    }
}

// The outerFunction returns a function that will be assigned to innerFunction
let innerFunction = outerFunction();

// Inner function references to "outerVariable"
// but does outerVariable still exist at the time
// innerFunction is called?
innerFunction();





/*Define a function called doubleNumber, 
that takes a number as parameter and returns the given number multiplied by 2*/
function doubleNumber(number) {
    return number * 2;
}

/*Define a function called halveNumber, 
that takes a number as parameter and returns the given number divided by 2
*/
function halveNumber(number) {
    return number / 2;
} 

/*Create a function called repeatNote, 
that takes as parameters a note as string and a number n.
The function returns a string where the given note is repeated n numbers of times, 
each time separated by a white space, without white space at the end.
For example calling repeatNote("C#", 3) should return "C# C# C#".
There are a number of ways to achieve this, 
for example by using the following methods: MDN string.repeat() and MDN string.trim()*/

function repeatNote(note, n) {
    return console.log((note + ' ').repeat(n).trim());
}

repeatNote("D#", 21)


/*
Write a function called readTemperature 
that takes a temperature value (number) as parameter, 
and returns 'Cold', when the temperature is 15 degrees celcius or below, 
'Moderate' when it is over 15 degrees but less or equal to 25 degrees, 
and 'Hot' when the temperature is over 25 degrees*/

function readTemperature(temperature) {

    if (temperature <= 15){
        return "Cold";
    }
       
    else if (temperature > 15 && temperature <= 25) {
        return "Moderate";
    }
        
     else if (temperature > 25){
        return "Hot";
     }
        

}
console.log(readTemperature(16))

function doExample(value) {
    console.log(value);
}

function doExample(value) {
    return(value);
}

console.log(doExample);

function doExample(value) {
    return(value);
}

console.log(doExample());

function doExample(value) {
    return(value);
}

console.log(doExample("hello"));

function area(r) {
    return Math.pow(Math.PI * r, 2)
}

function getCircleValues(r) {
    let a = area(r);
    let c = circumference(r);
    return `Radus is ${r}, circumference is ${c} and area is ${a}`;
}

function circumference(r) {
    return 2 * Math.PI * r
}

console.log(getCircleValues(5)); 

function area(r) {
    return Math.pow(Math.PI * r, 2)
}

function getCircleValues(r) {
    let a = area(r);
    let c = circumference(r);
    return `Radus is ${r}, circumference is ${c} and area is ${a}`;
}

function circumference(r) {
    return 2 * Math.PI * r
}

console.log(getCircleValues(5));
/*
let y;
for (let i = 0; i<=10; i++) {
    let y = i;
    console.log(y);
}
*/

for (let i = 0; i<=10; i++) {
    var y = i;
    console.log(y);
}

(x,y) => x+y;
