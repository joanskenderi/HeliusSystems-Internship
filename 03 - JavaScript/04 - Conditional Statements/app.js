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
