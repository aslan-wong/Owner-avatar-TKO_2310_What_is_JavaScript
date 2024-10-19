Boolean(false) // false
Boolean(true) // true
Boolean(1) // true
Boolean(0) // false
Boolean(NaN) // false
Boolean(undefined) // false
Boolean(null) // false
Boolean(new Object) // true
Boolean("Hello") // true
Boolean("") // false

Boolean(true == true) // true
Boolean(false == false) // true
Boolean(1 == true) // true
Boolean(0 == false) // true

Boolean("Hello" == true); // false
Boolean("Hello"); // true

Boolean(NaN == false) // false
Boolean(undefined == false) // false
Boolean(null == false) // false

Boolean("Hello" == true) // Original claim, false
// Now let's see what happens when we follow the rules
Boolean("Hello" == Number(true)) // Apply rule 9
Boolean(Number("Hello") == 1) // Apply rule 5
Boolean(NaN === 1) // Apply rule 1
// NaN is not 1 -> false

Boolean(NaN == false) // Original claim, false
// Now, applying rules
Boolean(NaN == Number(false)) // Rule 9
Boolean(NaN === 0) // Rule 1
// NaN is not zero

Boolean(0 === false) // false as with ==
Boolean(1 === true)  // false because 1 and true are different types (number and a boolean)

/*
if (condition) {
    // then do this
    // multiline
} else if (condition2) {
    // if the first condition did not match,
    // but the second did, do this
} else {
    // if no condition matched
    // do this
}
*/
let studentAmount = 2;
let unit;
if (studentAmount === 1) {
    unit = "student";
} else {
    unit = "students";
}

console.log(`${studentAmount} ${unit}`);
/*
switch (expression) {
  case value1:
    //Statements executed when the
    //result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the
    //result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the
    //result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of
    //the values match the value of the expression
    [break;]]
}
*/

/* while (condition) {
    // Code to-be-repeated here
    // This is called "loop body"
  }

do {
  // loop body
} while (condition);


*/

for (let i = 0; i < 5; i++) {
    console.log(i);
}
/*
for (initialization; condition; advancement) {
    // loop body
}
*/

// Create a while loop, that counts down from 5 to 0 
//(print the numbers using console.log), 
// and after the loop it prints "Lift off!" (without quotemarks) to the console
/*let i =5;
while (i > -1){
    console.log(i);
    i--;
}
*/
console.log("Lift off!");

console.log(Boolean(false));
let truth = false === true;
console.log(truth);
/*
let val = 1;
if (val == true) {
    console.log("Hello");
} else {
    console.log("World");
}

let val = "1";
if (val == true) {
    console.log("Hello");
} else {
    console.log("World");
}


let val = 1;
if (val) {
    console.log("Hello");
} else {
    console.log("World");
}


let val = 1;
if (val === true) {
    console.log("Hello");
} else {
    console.log("World");
}


let val = 5;
if (val >= 1) {
    console.log("Hello");
}
else if (val >= 2) {
    console.log("World");
}
else {
    console.log("!");
}

let i = 0;
while (i<5) {
    console.log(i);
    i++;
}

let age = 19;
let v = age >= 18 ? "Adult" : "Child";
console.log(v)
*/
let i = 1;
let y = i;
for (; i<=10; i++) {
    y = i * y;
    console.log(y)
}