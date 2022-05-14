# C#

C # is an object-oriented high-level programming language (OOP). \
It is case sensitive and every statement ends with ;.

Comments in C # can be single line and multiline.

Unlike JavaScript, C# is a compiled language. \
The compiler turns it into machine language and everything has to be syntactically flawed.

Semantix error has to do with logic, while syntax error has to do with syntax.

A class is the model of an entity. \
An object is the instance of a class.

---

### Namespace

Everything inside a namespace is referred to by the namespace, so in the case of using System we import everything inside the System.
If we create a namespace we can import it into another file using using the namespaces name.

???Namespace is like a folder type.
???Namespace is like a container type to organize the folder.

The namespace keyword is used to declare a scope that contains a set of related objects.
You can use a namespace to organize code elements and to create globally unique types.

---

Differences between ConsoleWrite and ConsoleWriteLine
Console.Write writes the following text text in the same line while Console.WriteLine writes each given text in the new line.

To use console we should use the namespace System.

---

Variables

A variable is a reserved space in memory that is used to store certain information.
Names of the variables in C# are also known as identifiers.

Variables in C# are strongly typed and case sensitive. They have this syntax:
DataType variableName = value;

Rules for naming variables:
Variable names should be self descriptive.
Variable names should be written in camelCase.
Variable names can contain numbers or underscores but not spaces.
Variable names shouldn't contain keywords.

- The main types of variables are:
  int
  long
  double
  decimal
  char
  string
  bool

---

cdo gje qe do shkr supozojme qe eshte brenda metodes main

string name = "Joan";
Console.WriteLine("Hello " + name);
mbledhja e 2 strings (concatanation)

---

int a = 2
int b = 3
Console.WriteLine(a + b);

ose i bejme store ne variable
int c = a + b
Console.WriteLine(c);

---

bool isPaind = true

---

- casting
  2 forma: implicite(e nenkutpuar) ose ekspilicite (i themi gjuhes tani do besh casting!)

casting implicit:
int a = 9;
double b = a;

casting explicit:
int a = 9;
double b = (double)a;

---

double a = 3,57
int b = (int)a

ne kte rast int b do kishte vleren 3 -> humbje precizioni

menyre tj behet me ane te metodave qe suportohen nga namespace system

int a = 9;
double b = Convert.ToDouble(a);

double a = 3,57;
int b = Convert.ToInt32(a)

KETO DY ME SIPER NUK QUHEN CASTING POR KONVERTIM

---

string name = Console.PrintLine();

---

operatoret mat

- - - / % ^(fuqi)

++ -> increment
-- -> decrement

operatoret e tj jane ato te asenjimit (vleredhenies)

- kane efekt vetem pasi variabli eshte ekzistues (ka vlere)

+=
-=

int a = 2;
a += 3;

a do kete vleren 5.

operatoret e krahasimit:

==

int a = 2;
int b = 3;
b--;
bool eq = a == b;

operatoret logjike
perdoren per te bashkuiar disa porta logjike
&& || !

bool isBlack = true;
bool isWhite = !isBlack; // false

---

bool result = a == b && a > c;

namespace sh i perdorshem per manipulime matematikore eshte namespace math //
eshte klasa qe ndodhet ne namespacen System jo ajo me lart

Math.Max(x, y);
Math.Min(x, y);
Math.Sqrt(x, y); //rrenja katrore
Math.Abs(x);
Math.Round(0.88); //rrumbullakosje

---

- ushtrim 2 // te lexohet kostot dhe te ardhurat nga useri, te llogaritet fitimi ose humbja ku fitimi = te ardhura - kosto.
  te afishohet nqs kompania ne fjale eshte ne fitim ose humbje dhe te afishohet nqs ka dale ne humbje dhe me cfare vlere

namespace firstApp
{
class Program
{
static void Main(string[] args)
{
double kosto;
double teArdhura;
double fitimi;

            Console.WriteLine("Sa kosto keni?");
            kosto = Convert.ToDouble(Console.ReadLine());

            Console.WriteLine("Sa te ardhura keni?");
            teArdhura = Convert.ToDouble(Console.ReadLine());

            fitimi = teArdhura - kosto;

            Console.WriteLine("Fitimi eshte: " + fitimi);
            Console.Read();
        }
    }

}

formaton kodin: CTRL + K + D

---

- metoda mbi strings

string name = "Joan";

Console.WriteLine(name.length);
name.ToUpper();
name.ToLower();

name2 = string.Concat("Joan",name);

-string interpolation

string firstName = "joan";
string lastName = "skenderi";

string toPrint = $"Emri im eshte {firstName} dhe mbiemri {lastName}";
e vecanta e interpolation eshte $ e dollarit para string

nje string eshte bashkimi i disa karraktereve (nje array me characters / vektor 1 dimensional).
qe te kapim karaktere te stringut i referohemi si vektor.

char lala = firstName[2]; // kap elementin e 3 te string

kur nuk dime pozicionin por dime karakterin dhe te gjejme indexin perdorim.

firstName.IndexOf(a);

metoda substring kthen nje pjese stringu te nje stringu me te madh

---

string shkolla = "Une kam studiuar ne shkollen "Protagonistet". "

protagonistet jep error brenda "" dhe ne kete rast dubet te bejme escape special charactes ne kete rast ""
behet duke vendosur \ para characterit special
e njejta gje behet dhe per ''
ndersa per / ose \ behet me \.

si me poshte:

\"
\'
\\

disa karaktere speciale jane hapsira me shume se space, viewLine dhe tag perkatsisht: \n dhe \t. (perdoren ne string)

---

duhet te jene patjt nr qe te mblidhen ne menyre matematikore

---

- ushtrim 3 / kerkoji 2 nr perdoruesit dhe afisho nqs a esht nr i pare me i madh se i dyti dhe me pas afisho rezultatin

namespace firstApp
{
class Program
{
static void Main(string[] args)
{

            int firstNumber, secondNumber;
            bool result;

            Console.WriteLine("Vendos nr 1:");
            firstNumber = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Vendos nr 2");
            secondNumber = Convert.ToInt32(Console.ReadLine());

            result = (firstNumber > secondNumber);

            Console.WriteLine(result);
            Console.Read();

        }
    }

}

--- shenime A ---
Tenerary opertion

---

string key= vlera=="key"?"Po":"Jo";
?=if
:=else
foreach (int el in V)
console.WriteLine();
--------------kjo eshte e njejte me kete por do te jete me e perdorshme
for(int i=0; i<V.count;i++)
console.WriteLine(V[i]);
continue ben skip
break ben daljen totale nga cikli
VEKTORET(C# ARRAYS)

---

string[] Makina;
Makina={"Benz","Opel","Toyota"};
console.WriteLine(Makina[1]);
Makina[0]="Hondo";//pra ketu kemi zv vleren e mkins ne poicionn 0 me emr Hondo
per te afishuar te gjithe vetorin:
foreach (string makina in Makina)//makina eshte nje el qe merr vleren e Makina sa here qe kalonne cikel
console.WriteLine(makina);

---

Array.sort(Makina);//e rendit vektorin Mkina, pra thjesht modifikon vlerat brnd vektorit

---

LINQ//nje namespace qe ofron nje gr metodash qe ekzek mbi vektor
using system Linq;
Menyra 1 e deklarimit te vekt:
int[] nums;
nums=new{1,2,3};
Menyra 2:
int[] nums=new int[4];
nums={1,2,3};
Menyra 3:
int[] nums={3,12,15,14,17,6}
int max=nums.Max();
int min=nums.Min();
int sum=nums.Sum();
var a=nums.ElementAt(1);//kthen elementin qe ndodhet ne poz 1 ne vektor
=nums.First();//nese first eshte null, kthen error
=nums.Last();

int? a=2;//kjo nenkupton qe var a mund te marri dhe vleren NULL
ose psh
int? a=null;
a=2;
=nums.FirstOrDefault();//kur first eshte boshh jep qe var eshte null. ndryshe na first qe jep error
=nums.LastOrDefault();

---

## LISTA

List<int> nums=new List();
nums.Add(1);
nums.Add(12);
per konvertim:

---

nums.ToList();
nums.ToArray();//mos harro qe nums eshte thjesht emri i listes apo vektorit qe eshte marr per shembull nga siper

---

## Lambda Expression:

List<int> nums2=nums.where(=> x>2);//x eshte si emer var qe mund ta quash edhe el psh; i selekton nr nga lista jone,ata qe jane me te medha se 2 dhe i vendos ne nje liste imagjinare
.StartsWith("A");//psh kur duam te gjejme ato stringe qe fillojne me A
vendoset ne fund gjithmone .ToList();

--- shenime XH ---
C#

- struktura e kontrollit

1. RASTI 1
   if (kusht logjik) {
   // kodi
   }
   else if {
   // kodi
   }
   else {
   // kodi
   }
2. RASTI 2
   switch (variabel)
   { case "alfa":
   //kod;
   break;
   case "beta":
   //kod;
   break;
   default:
   //kod;
   break;
   }

- kusht logjik:
  && and
  || or
- Teneray operation
  string vlera=console.ReadLine();
  string key= vlera=="key" ? "Po" : "Jo";
  ose
  string key = string.empty;
  if (vlera=="key")
  key="Po";
  else
  key=Jo";
  -Ushtrim, perdoruesi vendos nje nr nga 1 ne 7 dhe ne ekran afishohet nje emer i dites,
  te kontrollohet nese n eshte nga 1-7, dhe te afishoje emrin
  int nr;
  Console.WriteLine("Vendosni nje nr nga 1-7");
  nr = Convert.ToInt32(Console.WriteLine());
  switch (nr)
  {
  case 1:
  Console.WriteLine("E hene");
  break;
  case 2:
  Console.WriteLine("E marte");
  break;
  case 3:
  Console.WriteLine("E merkure");
  break;
  case 4:
  Console.WriteLine("E enjte");
  break;
  case 5:
  Console.WriteLine("E premte");
  break;
  case 6:
  Console.WriteLine("E shtune");
  break;
  case 7:
  Console.WriteLine("E diele");
  break;
  default:
  Console.WriteLine("Ju lutem, vendosni nje numer nga 1 ne 7");
  break;
  }
- Ciklet

1. Cikli 1 - while
   while (kushti)
   {
   // kodi
   }
   psh:
   int nr=0;
   while (nr<5)
   { console.WriteLine(nr);
   nr=nr+1;
   }
2. Cikli 2 - do while
   do {
   //kodi
   }
   while (kushti)
3. Cikli 3 - for
   for (statement 1; statement 2; statement 3)
   // statement 1 inicializimi
   // statement 2 kushti i ndalimit
   // statement 3 menyra si ndryshon var i kontrollit
   {
   // kodi
   }
   psh:
   for (int nr=0; nr<5; nr++)
   { console.WriteLine (nr);
   }
4. Cikli 4 - foreach (kap secilin element pa patur nevoje per indekse)
   for (int=0; i<V.count; i++)
   console.WriteLine(V[i]);
   foreach (int el in V)
   console.WriteLine(el);

- Statements
  for (int=0; i<10; i++)
  {
  if (i==7)
  continue; //ben skip
  ose
  break; //ben daljen nga cikli
  console.WriteLine(i);
- Vektoret (C# arrays)
  percaktojme tipin e te dhenave qe mban vektori dhe me pas emrin:
  string[] Makina;
  Makina = new {"Benz", "Opel", "Toyota"};
  ose
  string[] Makina = {"Benz", "Opel", "Toyota"};
  console.WriteLine(Makina[1]);
  Makina[0]="Audi";
  foreach (string makina in Makina)
  console.WriteLine(makina);
  ose
  string [] Makina = new string [4]
  Makina = {"Benz", "Opel", "Toyota"}
  // Renditja e array ne rendin rrites pa kthyer rezultat
  Array.Sort(Makina);
- LINQ
  nje namespace qe ofron nje grup metodash qe ekzekutohen mbi nje vektor
  using System.Linq;
  int [] nums={3, 12, 5, 6, 23, 1};
  int max = nums.Max ();
  int min= nums.Min ();
  int sum= nums.Sum ();
  // Metoda 1
  var a = nums.ElementAt(1); //kthen vleren qe ndodhet ne pozicionin 1
  // metoda 2
  .First (); // kthen elementin e pare te vektorit
  .Last(); // kthen elementin e fundit te vektorit
  .FirstOrDefault(); //kur elementi i pare eshte bosh jep null jo error
  psh:
  int? a=null;
  a=2;
  //pra a mund te marri cdo lloj vlere dhe ate null
  //metoda 3
  .ToList //kur duam ta kthejme nga array ne list
  .ToArray //kur duam ta kthejme nga list ne array
  psh:
  List<int> nums = new List<int>();
  nums.Add(1);
  nums.Add(12);
  ose
  List<int> nums = new List(1, 12, ..);
  // metoda 4  
  nums.where (Lambda expression)
  nums.where (x => x>2); //filtron vlerat, vlerat me te medha se 2 ne nje list i kalon ne nje list imagjinare qe mund ta perdorim si nje list te re. x eshte emer variabli
  List<string> m2 = Makina.where (p => p.StartsWith("A")); //gjen makinat qe i fillon emri me shkronjen A
- Ushtrim
  Jepen dy lista, mbushni listat me emra qytetesh nga perdoruesi, lista 1 ka 4 el dhe lista 2 ka 5 el. Afishoni qytetet ne te dyja listat.
  static void Main(string[] args)
  {
  List<string> lista1 = new List<string>();
  List<string> lista2 = new List<string>();
  Console.WriteLine("Shkruaj emrat e qyteteve ne listen 1");
  for (int i = 0; i < 4; i++)
  lista1.Add(Console.ReadLine());
  Console.WriteLine("Shkruaj emrat e qyteteve ne listen 2");
  for (int i = 0; i < 5; i++)
  lista2.Add(Console.ReadLine());
  Console.WriteLine("Qytetet qe ndodhen ne te dyja listat jane:");
  for (int i = 0; i < 4; i++)
  {
  for (int j = 0; j < 5; j++)
  {
  if (lista1.ElementAt(i) == lista2.ElementAt(j))
  Console.WriteLine(lista1.ElementAt(i));
  }
  }
  Console.ReadLine();
  }
- Ushtrim
  Lexoni nga perdoruesi nje liste me emra. Afishoni te gjithe emrat qe filljne me A dhe kane me teper se 4 chars.
  Te realizohet me dy menyra. menyra 1 me for dhe menyra 2 me linq.
  {
  List<string> emra = new List<string>();
  Console.WriteLine("Shkruaj disa emra");
  for (int i = 0; i < 4; i++)
  emra.Add(Console.ReadLine());
  List<string> emra2 = emra.Where(p => p.StartsWith("A") && p.Length >4).ToList();
  for (int i = 0; i < 3; i++)
  {
  if (emra.ElementAt(i).StartsWith("A") && emra.ElementAt(i).Length > 4)
  Console.WriteLine(emra.ElementAt(i));
  }
  }

---- DITA 2 -----------

- Metodat/Funksionet ne C#
  Sintaksa:
  static void MyMethod ()
  { // deklarimi i metodes
  Console.WriteLine("Afishim");
  }
  { //thirrja e metodes
  MyMethod();
  }
  // () vendosen parametrat.
  // static nenkupton qe metoda do te ekzekutohet nga klasa.
  static void MyMethod2 (string fname) // (string fname) = parametri
  {
  Console.WriteLine("Emri: " + fname);
  }
  static void Main(string [] args)
  { MyMethod2 ("Xhenis"); // ("Xhenis") = argumenti
  string name=Console.ReadLine();
  MyMethod2(name);
  Console.ReadLine();
  }
- Parametrat me vleren default/opsionale. Parametrat opsional vendosen gjithmone ne fund, dhe ne fillim vendosen parametrat e tjere)
  static void MyMethod2 (string fname="Xhenis")
  nje metode e shkruar keshtu, sjell emrin e shkruar si argument, nese lihet () atehere do te merret vlera default ne parameter
  static void MyMethod2 (string fname, string lname) //ndan parametrat me presje duke shkruar tipin e te dhenes dhe emrin.
  {
  Console.WriteLine("Emri: " + fname + " " + lname);
  }
  static void Main(string [] args)
  { MyMethod2 ("Xhenis", "Zhara");  
  string name=Console.ReadLine();
  MyMethod2(name);
  Console.ReadLine();
  }
  static void MyMethod2 (string fname, string lname, mosha=18, string vendlindja=" ")
  {
  Console.WriteLine("Emri: " + fname + " " + lname);
  }
  static void Main ()
  { MyMethod2 ("Xhenis", "Zhara", 21);  
  MyMethod2("Xhenis", "Zhara");
  Console.ReadLine();
  }

---

- Metodat qe kthejne rezultat.
  static int Add5(int nr)
  {
  return nr+5;
  }
  static void Main (string [] args)
  {
  int rez = Add5(3);
  }
  ose
  static int Add5(int nr)
  {
  int rez= nr+5;
  return rez;
  }

---

- Named arguments
  argumentat qe e kane te caktuar emrat qe do te kene
  {
  string namee = Console.ReadLine();
  MyMethod2 (lname: "Zhara",
  mosha:20, fname: name);

---

- Method overloading. //diferencen e ben sasia e parametrave ose tipi i tyre
  .. main (){
  }
  static void MyMethod ()
  {
  Console.WriteLine ("Hello World");
  static void MyMethod (string fname)
  {
  Console.WriteLine (fname);
  }

---

- Try Catch
  static void MyMethod()
  {
  try
  {
  Console.WriteLine("Vendosni numrin e pare:");
  int nr1 = Convert.ToInt32(Console.ReadLine());
  Console.WriteLine("Vendosni numrin e dyte");
  int nr2 = Convert.ToInt32(Console.ReadLine());
  Console.WriteLine(nr1/nr2);
  }
  catch (Exception e)
  {
  Console.WriteLine("Error: " + e.Message);
  }
  }
  static void Main(string[] args)
  {
  MyMethod();
  Console.ReadLine();
  }

---

- By reference
  static void MyMethod ( ref string fname)
  {
  fname="Beni";
  Console.WriteLine(fname);
  }
  static void Main (string[] args)
  {
  string name="Ana";
  MyMethod (ref name);
  Console.WriteLine(name);
  }

---

- Ushtrim:
  Lexoni nga perdoruesi dy numra, afishoni numrat me radhe qe u vendosen nga perdoruesi, shkembeni vlerat e ketyre numrave duke perdorur metode,
  dhe afishoni variablat e ndryshuar.
  static void MyMethod(ref int a, ref int b)
  {
  int c = a;
  a = b;
  b = c;
  }
  static void Main(string[] args)
  {
  Console.WriteLine("Vendosni numrin e pare: ");
  int nr1 = Convert.ToInt32(Console.ReadLine());
  Console.WriteLine("Vendosni numrin e dyte: ");
  int nr2 = Convert.ToInt32(Console.ReadLine());
  Console.WriteLine("Numri i pare: " + nr1 + "Numri i dyte: " + nr2);
  MyMethod(ref nr1, ref nr2);
  Console.WriteLine("Numri i pare: " + nr1 + "Numri i dyte: " + nr2);
  }

---

- Ushtrim:
  Shkruani dy vektore, emrat dhe nr e tyre, te ndertohet metoda qe merr si parametra dy vektore dhe nje nr te caktuar nr tel, metoda kthen emrin e personit qe ka
  kete nr tel dhe nese nuk ka asnje me ate nr, atehere te dali nje mesazh qe nuk ka asnje person me kete numer.
  static string MyMethod(string[] emrat, string[] numrat, string nr)
  {
  for (int i = 0; i < emrat.Length; i++)
  {
  if (numrat[i].StartsWith(nr))
  return emrat[i];
  }
  return "Numri nuk i perket dikujt";
  }
  static void Main(string[] args)
  {
  string[] emrat = new string[2] { "Xhenis", "Anais" };
  string[] numrat = new string[2] { "067", "0658" };
  }
  **ose**
  static string emraNumra(string nr ,string[] emrat, string[] numrat)
  {
  for(int i = 0; i < emrat.Length; i++)
  {
  if (numrat[i].StartsWith(nr))
  {
  return emrat[i];
  }
  }
  return "Nuk u gjet";
  }
  static void Main(string[] args)
  {
  string[] emrat = { "xhenis", "anais", "beni" };
  string[] numrat = { "068571765", "0695124657", "0673244569" };
  string nr = "068";
  Console.WriteLine(emraNumra(nr , emrat , numrat));
  Console.ReadLine();
  }

--- oop c# ---
oop ne c#

oop nenektupon qe menyra sesi programojme eshte qe fokusi kryesor eshte tek klasa dhe objekti.
klasa eshte objekt i jetes reale pra nenkupton entitet te caktuar qe ka disa cilesi
objekti eshte insnanca e nje klase
instanca eshte shembull

class Student {
string name
string ditelindja = "17.03.1996";
string delta = "I E"
decimal notaMesatare = 7.73;

public void PrintData() { //kjo eshte metode jo field
Console.WriteLine("Emri:" + emri + "Dega:" + dega);
}
}
//atributet e klases me siper: name,ditelindja... quhen fields.

static void Main(string[] args) {

Student st = new Student();
Console.WriteLine(st.name); // object.property

Student st2 = new Student();
Console.WriteLine(st2.name);
}

konstruktori eshte metode qe ska tip te dhene dhe perdoret per te inicializuar nje objekt

nje objekt i ri bosh eshte konstruktor ne menyre explicite si psh:
public Student() {
}
emri duhet te jete si emri klases

konstruktori: public emriKlases() {}

konstruktori eshte si nej metode qe ska parametra

per te krijuar nje konstruktor me parametra duhet ti kalojme disa parametra
parametrat kalohen per te mbushur property te brendshme te klases

public Student(string dt, string emri, decimal nota, string dega) {
emri = em;
}

fieldet per klasen jane si variabla

public -> askeson kudo
private -> akseson brenda klases
protected -> brenda klases dhe atyre qe trashegon
internal -> sdo e trajtojm

mund te kemi disa konstruktore brenda nje klase

Ushtrim:
te krijohet klasa me emrin trekendesh
kjo klase duhet te kete info per 3 brinjet e 3kendeshit
ne kete klase duhet te llogaritet sip e 3kendeshit
krijoni console app ku nqs user vendos 3 brinjete e 3kendeshit ju realizoni si fillim kontrollin, a mundet qe keto 3 brinje te perbejne
nje 3kendesh dhe nqs po afisho sip e 3kendeshit
sup qe 3 kendeshi eshte kenddrejte
