// CREATE AN ARRAY OF OBJECTS AND PRINT THE SAME PROPERTY OF EACH OBJECT

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
