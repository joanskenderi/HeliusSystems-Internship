// funx ne js jane methods ne gjuhe te tj (methods ne java,c# etj)

// funx qe mbledh 2 nr dhe kthen rez e ktyre
function sum(nr1, nr2) {
  var s = nr1 + nr2;
  return s;
}

// mblidh nr te plot
function sum(nr1, nr2) {
  var a = parseInt(nr1);
  var b = parseInt(nr2);
  var s = a + b;
  return s;
}

// funx qe ben diff e 2 nr duke zbrit nga nr me i madh ate me te vogel
function diff(nr1, nr2) {
  var d = 0;
  if (nr1 > nr2) {
    d = nr1 - nr2;
  } else {
    d = nr2 - nr1;
  }
  return d;
}
var r = diff(2, 3);
console.log(r);

// Arrow functions
const diff = (nr1, nr2) => {
  var d = 0;
  if (nr1 > nr2) {
    d = nr1 - nr2;
  } else {
    d = nr2 - nr1;
  }
  return d;
};

// Arrays (tipe t ndryshme te hdenash ne nj array)
const sh = (a, b) => {
  return a + b;
};
var arrayTest = [100, "Joan", sh];

// menyre tj per te krijuar array
const sh = (a, b) => {
  return a + b;
};
var array2 = new Array(100, "Joan", sh);
console.log(array2.length);

// funx qe perdoren mbi arrays (qe ti kuptosh mire dueht te dish nese funx i kthen apo i modifikon arrays)
// .push() -> shton element ne fund te array
// .pop() -> heq elem e fundit nga array
// .shift() -> largon elementin e pare te array
// .join() -> bashkon rendimentet e nje array ne nje string
// .reverse() -> ben reverse e array
// .forEach() -> property e arrays por nk eshte funx tipik por ka menyr tj te te shkr te tij. prek funx.
//  emriArrayt.forEach((el, idX) => {}) ku el stands per elementin dhe idX per index
// .includes() -> merr nje parameter dhe shef a e perfshin ky array kte vlere dhe kthen rezultat nje boolean

var arrayKot = [
  { firstName: "Joan", secondName: "Skenderi", age: 20 },
  { firstName: "John", secondName: "Doe", age: 17 },
  { firstName: "Lorem", secondName: "Ipsum", age: 22 },
];

// console.log(arrayKot.includes("o"));

//  TESTTT!!!!!!
var a = 5;
function shuma(a, b) {
  var b = 0;
  a + b;
}
shuma;
console.log(a); // var i deklaruar globalisht

// nqs ndryhojme vleren e var brenda funx ajo do jete e ndryshme dhe jashtee funx
// nqs nuk perdorim var let ose const brenda nje funx ath ai variabel do te deklarohet si global

// TEST
var obj = {
  emer: "emer",
  mbiemer: "mbiemer",
  min: 5,
  max: 10,
};
function diff() {
  return max - min;
}
diff;
console.log(obj);

// TODO: this. Keyword

// emriObj ["mbiemri"] eshte njesoj si emriObj.mbiemri
// menyra me kriju obj
var obj = new Object();
// per te shtuar props
obj.emri = "Joan";

// functon to create object

// Te ndertohet nje klase me emertimin Student, e cila permban info ne lidhje me emrin, mbiemrin, degen dhe vitin e studimit.
// Kjo klase ruan gjithashtu info per te gjitha notat e studentit.
// Emri mbiemri dega dhe viti studimit mbushen duke perdorur nje konstruktor.
// Per te shtuar nota klasa perdor nje metode me emrtimin @grade.
// Klasa ka po ashtu nje metode(funx) qe kthen emrin e plote te studentit.
// Ndertoni klasen dhe krijoni 4 instanca te ksaj klase.
// Per te gjithe studentet e krijuar te dhenat kalojini ne nj vektor.
// Afishoni emrin e plote dhe noten max te gjithe studenteve.
// Me konstruktor mbushen vetem 4 props e para. notat i mbush me funx (shton notat te vektori notave duke perdorur komandat qe mesuam sot.)
class Student{
    constructor(emri,mbiemri,dega,viti)
    {this.emer=emri;
    this.mbiemer=mbiemri;
    this.dega=dega;
    this.vit=viti;
    this.notat=[]}
    set addGrade = (grade) => { //set do vendosesh nk ndikon ne result
    this.notat.push(grade)
    }
    get emriPlote = () => {return this.emer+" "+this.mbiemer} //get do marresh nk ndikon ne result
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

// DOM (16mars)
