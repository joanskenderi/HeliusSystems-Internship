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

// from string to number
var numerKot = "3.42";
console.log(parseInt(numerKot));
console.log(parseFloat(numerKot));
console.log(parseFloat(numerKot).toFixed());

// Number to string
var numerTest = 2.1;
console.log(numerKot.toString());

// rrumbullakim
var numerPlot = 4.44;
console.log(parseFloat(numerPlot).toFixed());
console.log(typeof parseFloat(numerPlot).toFixed());

// Convert the word to uppercase
var emri = "Joan";
emri = emri.toUpperCase();
console.log(emri);
// or we can use
console.log(emri.toUpperCase());

// Convert the word to lowercase
var emri = "Joan";
emri = emri.toLowerCase();
console.log(emri);
// or we can use
console.log(emri.toLowerCase());

// String concat
var firstName = "Joan";
firstName = firstName + " Skenderi";
console.log(firstName);

// add 2 strings as numbers
var numer = "44";
var Numer = "3";
console.log(typeof numer);
console.log(typeof parseInt(numer));
console.log(numer + Numer);
console.log(typeof (numer + Numer));

// krahaso 2 vlerat
var a = 2;
var b = "2";
// == krahason vleren
// krahason vleren dhe type
if (a === b) {
  alert("po");
} else {
  alert("jo");
}

// kot per test 🔥
// operatoret logjike && ||
// funx alert
// ciklet for / while / do while

// funx te string: concat / includes / indexof /split /slice

// if () {
// nqs ka nj rresht e shkr ne vije, nqs ka shume e shkr brenda {}
// } else

// if (pohim) {
// } else if {
// } else

// switch(expression) {
//     case x:
// code block
//       break;
//     case y:
// code block
//       break;
//     default:
// code block
//   }

// END OF DAY 1!!!!!!!!!!!!!!!!!!!!!!!
