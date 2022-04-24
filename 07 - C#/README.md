# C#

C# eshte gjuhe programimi e nivelit te larte e orientuar nga objektet (OOP). Ajo eshte case sensitive dhe cdo statement perfundon me ; .
Komentet ne C# mund te jene single line dhe multiline.

Klasa eshte model i nje entiteti dhe objekti eshte instanca e nje klase.

using System; //system eshte emri i nje namespace ekzistues, ekziston sepse eshte e suportuar nga c# ose e krijuar nga ne
namespace HelloWorld

Ne nje kod ne C# ne rastin e using System, System eshte nje namespace ekzistues e cila eshte e krijuar dhe e suportuar nga gjuha.
Cdo gje qe ndodhet brenda nje namespace referohet nga namespace, pra ne rastin e using System ne importojme cdo gje qe ndodhet brenda System.
Nqs krijojme nje namespace tonen mund ta importojme ne nje file tjeter duke perdorur using dhe emrin e namespaces.
Namespace eshte si tip folderi. Namespace eshte si tip containeri per te organizuar folderin.

The namespace keyword is used to declare a scope that contains a set of related objects. You can use a namespace to organize code elements and to create globally unique types.

class eshte keyword e cila deklaron nje klase te re.

---

using System; //system eshte emri i nje namespace ekzistues, ekziston sepse eshte e suportuar nga c# ose e krijuar nga ne
namespace HelloWorld
{
class Hello {  
 static void Main(string[] args) // metode
{
System.Console.WriteLine("Hello World!");
}
}
}

:: analizo komponentet e hello world, psh metoda main qe merr string si argumente
per te printuar dicka ne console perdoret metoda writeline
write shkr textin ne vijim(njera pas tj) ndersa writeline i shkruan ne rresht te ri

console eshte objekt si nje instance e klases system
pra bejme using system qe te perdorim console.

variablat ne CS
tipet krysore te vatiablave jane:
int -> integer -> nr i plote positive
double -> nr me shifra pas presjes
char - character -> karakter
string -> grup karakteresh
bool -> boolean -> true / false

variablaat ne CS jane strongly typed:
data type variableName = value;
variabla eshete vend i rezervuar ne kujtese qe perdoret ber te bere store nje informacion te caktuar.

mund te deklarosh edhe duke i dhene vetem tipin e te dhenes pa percaktuar vlere si psh:
int mosha;
deklaron val mosha dhe si jep vlere dhe eshste i tipit integer
int mosha = 20;
ketu eshte deklaruar dhe incializuar variabli
deklarim eshte si me lart ndersa inicializim eshte dhenia e vleres "= 20".

int mosha;
mosha = 20;

int mosha = 20;
jane e njeetja gje
te e para kemi deklarim pastaj inicializim, ndersta tek e dyta kemi deklarim dhe inicializim ne te njejten kohe

mund ti ndryshojme dhe vlere variablit

int mosha;
mosha = 20;
mosha = 30;

vlera mbishkruhet dhe eshte 30.

per te deklaruar vl konstante ne perdorim

const int tvsh = 20;
nk e modifikojme dot, nk na lejeon CS na jep error.eshte i tipit read only dhe nuk deklarohet dot pa i dhene vlere

double cmimi = 12.51;
char kot = 'D';
string firstName = "Joan";

ndryshim tj karakter string jane thonjezat ' ".

---cdo gje qe do shkr supozojme qe eshte brenda metodes main

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

si te deklarojme njekohesisht disa variabla.

int a, b, c;

ose me vlera

int a=2;b=3;c;

duhet ti perkasin te njejtit tip qe ti deklaorsh ne nje rresht

---

emrat e variavlabe ne cs njihen si identifiers

-emrat e variablave duhet te jene kuptim plote, jo a, b, test, etj

disa rreg per emrat e variablave jane:
emri fillon me shkronje te vogel
permban shkronja dhe numra
nuk permban hapsier
eshte kuptimplote (perdoret camelCase) psh:
const int kostoMeTvsh = 20;

emrat jane case sensitive.
nuk mund te perdoresh keywords si emra. si psh int int = 1;

shikojme me shume datatypes
int
long
float
double
decimal

int perdor 4 bytes ndersa long 8 bytes
decimal eshte si float (nr me , qofshin ata pozitive ose negative)

---

casting
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

C# eshte gjihe e kompilushme ndryshe nga js. pra kompilatori e kthen ne gjuhe makine dhe cdo gje duhet te jete e sakate nga ana sintaksore
problemet logjike -> semantix error

// deklaro nje var int dhe nje name dhe afisho qe kerkon dhe lexon emer & mosh dhe afisoh emer mosh
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

// te lexohet kostot dhe te ardhurat nga useri, te llogaritet fitimi ose humbja ku fitimi = te ardhura - kosto.
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

metoda mbi strings

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

kerkoji 2 nr perdoruesit dhe afisho nqs a esht nr i pare me i madh se i dyti dhe me pas afisho rezultatin

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
