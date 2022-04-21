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
