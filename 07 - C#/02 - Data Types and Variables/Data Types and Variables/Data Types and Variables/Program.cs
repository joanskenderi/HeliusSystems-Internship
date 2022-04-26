using System;

namespace Data_Types_and_Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            int myInt = 20;
            long myLong = 27437472;
            double myDouble = 4.7d;
            float myFloat = 6.2f;
            decimal myDecimal = 2.6m;
            char myChar = 'J';
            string myString = "This is a string";
            bool myBool = true;

            Console.WriteLine(myInt);
            Console.WriteLine(myLong);
            Console.WriteLine(myDouble);
            Console.WriteLine(myFloat);
            Console.WriteLine(myDecimal);
            Console.WriteLine(myChar);
            Console.WriteLine(myString);
            Console.WriteLine(myBool);

            // Ways how variables are declared

            // Declaration and initialization
            string myName = "Joan";

            // Declaration and then initialization
            string mySecondName;
            mySecondName = "Skenderi";

            // Declaring several variables in a row (must belong to the same type)
            int firstNumber, secondNumber, thirdNumber;
            firstNumber = 1;
            secondNumber = 2;
            thirdNumber = 3;

            // Or we can declare and initialize them
            int fourthNumber = 4, fifthNumber = 5, sixthNumber = 6;

            // Overwriting the value of a variable
            int myAge = 19;
            Console.WriteLine(myAge); // The value 19 will be displayed
            myAge = 20;
            Console.WriteLine(myAge); // The value 20 will be displayed

            // Constants
            const int vat = 20; // The value of tax is fixed so this is a sample where we use a constant
            vat = 22; // This will throw an error because constants can't be changed

            Console.ReadLine();
        }
    }
}
