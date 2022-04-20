// Create an array with car brands and loop for cars that are in even indexes
var carBrand = ["Audi", "BMW", "VolksWagen", "Mercedes-Benz", "Toyota"];
console.log(carBrand);

for (var i = 0; i < carBrand.length; i = i + 2) {
  console.log(carBrand[i]);
}
