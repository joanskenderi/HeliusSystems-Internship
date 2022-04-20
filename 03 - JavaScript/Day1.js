



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

// Function that adds 2 numbers and returns the sum
function sum(firstNumber, secondNumber) {
  var s = firstNumber + secondNumber;
  return s;
}

// Mblidh numrat e plote
function sum(firstNumber, secondNumber) {
  var a = parseInt(firstNumber);
  var b = parseInt(secondNumber);
  var s = a + b;
  return s;
}

// Zbrit nga numri me i madh ate me te vogel
function difference(firstNumber, secondNumber) {
  var a = 0;
  if (firstNumber > secondNumber) {
    a = firstNumber - secondNumber;
  } else {
    a = secondNumber - firstNumber;
  }
  return a;
}

// Arrow functions
const difference = (firstNumber, secondNumber) => {
  var a = 0;
  if (firstNumber > secondNumber) {
    a = firstNumber - secondNumber;
  } else {
    a = secondNumber - firstNumber;
  }
  return a;
};

// Arrays (tipe te ndryshme te dhenash ne nje array)
const sum = (a, b) => {
  return a + b;
};

var arrayTest = [17, "Joan", sum];
console.log(arrayTest);

// Menyre tjeter per te krijuar array
var anotherArray = new Array(2002, "Skenderi", sum);
console.log(anotherArray);

//
var arrayTest = [
  { firstName: "Joan", secondName: "Skenderi", age: 20 },
  { firstName: "John", secondName: "Doe", age: 31 },
  { firstName: "Lorem", secondName: "Ipsum", age: 27 },
];

console.log(arrayTest.includes("o"));

//
var number = 5;
function sum(firstNumber, secondNumber) {
  var a = 0;
  number + a;
}
sum;
console.log(number); // variabel i deklaruar globalisht

// object
var objectPerson = {
  firstName: "Joan",
  secondName: "Skenderi",
  min: 5,
  max: 10,
};

function difference() {
  return max - min;
}
difference;
console.log(objectPerson);

var objectTest = new Object();
objectTest.firstName = "Joan"; // per te shtuar properties

/*
Te ndertohet nje klase me emrin Student, e cila permban info ne lidhje me emrin, mbiemrin, degen dhe vitin e studimit.
Kjo klase ruan gjithashtu info per te gjitha notat e studentit.
Emri, mbiemri, dega dhe viti i studimit mbushen duke perdorur nje konstruktor.
Per te shtuar nota klasa perdor nje metode me emrtimin @grade.
Klasa ka po ashtu nje metode(funx) qe kthen emrin e plote te studentit.
Ndertoni klasen dhe krijoni 4 instanca te ksaj klase.
Per te gjithe studentet e krijuar te dhenat kalojini ne nj vektor.
Afishoni emrin e plote dhe noten max te gjithe studenteve.
Me konstruktor mbushen vetem 4 props e para. notat i mbush me funx (shton notat te vektori notave duke perdorur komandat qe mesuam sot.)
*/

class Student {
  constructor(firstName, lastName, dega, viti) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dega = dega;
    this.viti = viti;
    this.notat = [];
  }

  set addGrade = (grade) => { //set do vendosesh nk ndikon ne result
    this.notat.push(grade)
    }
  get emriPlote = () => {
    return this.firstName + " " + this.secondName
  }

  var st1=new Student("Mel","Doko","IE",1)
    var st2=new Student("Fl","tt","fin",3)
    var st3=new Student("ab","yt","ekon",1)
    var st4=new Student("tr","zt","adm",2)
    st1.addGrade(10)
    st1.addGrade(8)
    st1.addGrade(6)
    st1.addGrade(9)
    st2.addGrade(10)
    st2.addGrade(8)
    st2.addGrade(6)
    st2.addGrade(9)
    st3.addGrade(7)
    st3.addGrade(9)
    st3.addGrade(5)
    st3.addGrade(9)
    st4.addGrade(4)
    st4.addGrade(8)
    st4.addGrade(6)
    st4.addGrade(7)
    var st=new Array(st1,st2,st3,st4)
    st.forEach ((el,idx) => {
    console.log(el.emriPlote())
    var max=el.notat[0]
    for(var i=1;i<notat.length;i++)
    {if(el.notat[i]>max)
    max=el.notat[i]
    }
    })
}
