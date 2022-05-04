using System;

namespace NameAge
{
    class Program
    {
        static void Main(string[] args)
        {   
            string name;
            int age;

            Console.WriteLine("Enter your name: ");
            name = Console.ReadLine();

            Console.WriteLine("Enter your age: ");
            age = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Your name is " + name + " and you are " + age + " years old.");
        }
    }
}
