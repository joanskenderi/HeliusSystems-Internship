using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            //klasa trekendesh info per 3 rinjet. llogaritet siperfaqja e trekendeshit, ku nese useri vendos 3 brinjet ju realzoni si fillim kontrollin nese eshte trekendesh dhe nese po afishoni siperfaqjen
            Console.WriteLine("Vendosni brinjet");
            Trekendesh tk = new Trekendesh(4, 3, 5);
            if (tk.kontrolli() == true)
            { Console.WriteLine($"Siperfaqja eshte {tk.siperfaqja()}"); }
            else { Console.WriteLine("Brinjet e trekendeshit nuk jane te sakta."); }
            Console.ReadLine();
        }
    }
}


/*
 * te krijohet klasa me emrin trekendesh
kjo klase duhet te kete info per 3 brinjet e 3kendeshit
ne kete klase duhet te llogaritet sip e 3kendeshit
krijoni console app ku nqs user vendos 3 brinjete e 3kendeshit ju realizoni si fillim kontrollin,
a mundet qe keto 3 brinje te perbejne nje 3kendesh dhe nqs po afisho sip e 3kendeshit
sup qe 3 kendeshi eshte kenddrejte
 */
