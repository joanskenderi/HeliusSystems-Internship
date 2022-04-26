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

- U1
  string name = "Joan";
  Console.WriteLine("Hello " + name);
  mbledhja e 2 strings (concatanation)

---

- U2
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
double b = Cpmvert.ToDouble(a);

double a = 3,57;
int b = Convert.ToInt32(a)

KETO DY ME SIPER NUK QUHEN CASTING POR KONVERTIM

---

string name = Console.PrintLine();

- ushtrim deklaro nje var int dhe nje name dhe afisho qe kerkon dhe lexon emer & mosh dhe afisoh emer mosh
  namespace firstApp
  {
  class Program
  {
  static void Main(string[] args)
  {
  int age;
  string name;

              Console.WriteLine("Vendosni emrin");
              name = Console.ReadLine();

              Console.WriteLine("Vendosni moshen");
              age = Convert.ToInt32(Console.ReadLine());

              Console.WriteLine("Ti je " + name + " dhe je " + age + " vjec.");
              Console.Read();
          }
      }

}

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
