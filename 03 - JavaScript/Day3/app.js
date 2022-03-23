// getElementById
// console.log(document.getElementById("test"));

// getElementsByClassName
// console.log(document.getElementsByClassName("main"));

// getElementsByTagName
// console.log(document.getElementsByTagName("p"));

// querySelector
// console.log(document.querySelector("p.main"));

// querySelectorAll
// console.log(document.querySelectorAll("p.main"));

// METODA / FUNX PER TE MANIPULUAR INFORMACIONIN

// createElement
// var el = document.createElement("span");
// var a = document.getElementById("some-id");
// a.appendChild(el);
// console.log(document);

// removeChild
// var el = document.getElementById("test");
// var b = document.getElementsByTagName("body")[0];
// b.removeChild(el);
// console.log(el);

// var a = document.getElementById("test");
// console.log(a.innerHTML);
// console.log(a.innerText);
// a.innerHTML = "<h1> PROVA </h1>";

// var a = document.getElementById("some-id");
// console.log(a.classList);
// a.classList.add("klasKot");
// console.log(a.classList);
// a.classList.remove("red");

// var fName = document.getElementById("fname");
// fName.value = "Test";

// shkr vlere ne lastname
// kalo vleren e lastname ne firstname
// merr vl e lastname dhe barazoje me tfname
// var test = document.getElementById("fname");
// fname.value = lname.value;

// bej fname gri
// var a = document.getElementById("fname");
// if (fname.value == "joan") {
//   var lname = document.getElementById("lname");
//   lname.setAttribute("readonly", "readonly");
// }

// bej funx at te mesipermen
// funxTest = () => {
//   var a = document.getElementById("fname");
//   if (fname.value == "joan") {
//     var lname = document.getElementById("lname");
//     lname.setAttribute("readonly", "readonly");
//   }
// };

// events
btnClicked = () => {
  alert("GJONA AMERIKONSH");
};

var el = document.getElementById("clickMe");
el.addEventListener("click", btnClicked);
