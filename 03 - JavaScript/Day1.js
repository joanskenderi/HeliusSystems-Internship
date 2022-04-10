// PRIMITIVE DATA TYPES
// Number
var number = 20;
console.log(number);
console.log(typeof number);

// String
var string = "Name";
console.log(string);
console.log(typeof string);

// Boolean (only TWO values: True or False)
var bool = true;
console.log(bool);
console.log(typeof bool);

// Undefined
var undefined;
console.log(undefined);
console.log(typeof undefined);

// BigInt
// Symbol

// REFERENCE TYPES
// Array
const array = ["firstElement", "secondElement", "thirdElement"];
console.log(array);
console.log(typeof array);
console.log(array instanceof Array);

// Object
const object = {
  username: "randomUsername",
  age: 20,
  education: "School Name",
};

console.log(object);
console.log(typeof object);

console.log(username);
console.log(typeof username);
console.log(age);
console.log(typeof age);
console.log(education);
console.log(typeof education);

// Function
function functionName() {
  return;
}
console.log(typeof functionName);

// Logical AND, OR, !
const logicalA = true;
const logicalB = false;
console.log(a && a);
console.log(a || b);
console.log(a);
console.log(b);

// for loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// while loop
while (i < 10) {
  text += "The number is " + i;
  i++;
}
// do while loop
do {
  text += "The number is " + i;
  i++;
} while (i < 10);

// Control Statement
if (i < 1) {
  console.log("The number is less than 1.");
} else if (i > 2) {
  console.log("The number is more than 1.");
} else {
  console.log("The number is 1.");
}

// Switch
var number = 1;
switch (number) {
  case 1:
    console.log("The number is 1.");
    break;
  case 2:
    console.log("The number is 2.");
    break;
  case 3:
    console.log("The number is 3.");
    break;
  case 4:
    console.log("The number is 4.");
    break;
  case 4:
  case 5:
    console.log("The number is either 4 or 6.");
    break;
  default:
    console.log("The number is not on the range from 1 to 6.");
}

/* EXERCISES */
// Log to the console all numbers from 1 to 20
for (var i = 0; i <= 20; i++) {
  console.log(i);
}

// Create an array with car brands and loop for cars that are in even indexes
var carBrand = ["Audi", "BMW", "VolksWagen", "Mercedes-Benz", "Toyota"];
console.log(carBrand);

for (var i = 0; i < carBrand.length; i = i + 2) {
  console.log(carBrand[i]);
}

// Create an array of objects and print the same property of each object
var arrayOfObjects = [
  { firstName: "John", age: 20 },
  { firstName: "Ben", age: 21 },
  { firstName: "Tom", age: 18 },
  { firstName: "Charlie", age: 23 },
];

console.log(arrayOfObjects);

for (var i = 0; i < arrayOfObjects.length; i++) {
  console.log(arrayOfObjects[i].firstName);
}

// Convert the string to number
var dummyNumber = "3.42";
console.log(parseInt(dummyNumber));
console.log(parseFloat(dummyNumber));
console.log(parseFloat(dummyNumber).toFixed());

// Convert the number to string
var testNumber = 2.1;
console.log(dummyNumber.toString());

// Rounding
var dummyNumber = 4.44;
console.log(parseFloat(dummyNumber).toFixed());
console.log(typeof parseFloat(dummyNumber).toFixed());

// Convert the string to uppercase
var firstName = "Joan";
firstName = firstName.toUpperCase();
console.log(firstName);
// or we can use
console.log(firstName.toUpperCase());

// Convert the string to lowercase
var firstName = "Joan";
firstName = firstName.toLowerCase();
console.log(firstName.toLowerCase());

// String concatenation
var firstName = "Joan";
firstName = firstName + " Skenderi";
console.log(firstName);

// Convert the strings to numbers and then add them to each other
var firstNumber = "44";
var secondNumber = "3";
console.log(typeof firstNumber);
console.log(typeof parseInt(firstNumber));
console.log(firstNumber + secondNumber);
console.log(typeof (firstNumber + secondNumber));

// Compare the values
var a = 2;
var b = "2";

if (a === b) {
  alert("po");
} else {
  alert("jo");
}

// funx te string: concat / includes / indexof /split /slice

// kot per test 🔥
