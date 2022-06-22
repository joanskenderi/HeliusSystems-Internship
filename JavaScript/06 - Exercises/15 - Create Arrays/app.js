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
