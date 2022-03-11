// CREATE AN ARRAY WITH CAR BRANDS AND LOOP FOR CARS THAT ARE IN EVEN INDEXES

var carBrand = ["Audi", "BMW", "VolksWagen", "Mercedes-Benz", "Toyota"];
console.log(carBrand);

for (var i = 0; i < carBrand.length; i = i + 2) {
  console.log(carBrand[i]);
}
