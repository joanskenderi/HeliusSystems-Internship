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
