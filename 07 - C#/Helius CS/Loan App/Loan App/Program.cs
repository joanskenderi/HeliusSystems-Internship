using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Loan_App
{
    // KLASA LOAN
    class Loan
    {
        public string _reference;
        public double _amount;
        public string _currency;
        public double _interest;
        public string _name;
        bool isPaid = false;
        public double _outstanding;

        public List<Installment> installmentData = new List<Installment>();

        public Loan(string aRef, double amount, string ccy, double interest, string customer)
        {
            _reference = aRef;
            _amount = amount;
            _currency = ccy;
            _interest = interest;
            _name = customer;
            _outstanding = amount;


        }

        public void AddLoanInstallment(int installmentNr, double principal, double interestVal, double installmentAmount, DateTime paymentDate)
        {
            installmentData.Add(new Installment());
            installmentData.Last()._installmentNr = installmentNr;
            installmentData.Last()._principal = principal;
            installmentData.Last()._interestVal = interestVal;
            installmentData.Last()._instAmount = installmentAmount;
            installmentData.Last()._paymentDate = paymentDate;

            installmentData = installmentData.OrderBy(x => x._paymentDate).ToList(); // Update the list convert it to list before

        }

        public void PrintLoanData()
        {
            string paymentStatus;

            if (isPaid)
                paymentStatus = "Paid";
            else
                paymentStatus = "Not Paid";

            Console.WriteLine($"{_reference}----{_amount}----{_currency}----{paymentStatus}----{_outstanding}");
        }

        public void PrintLoanSchedule()
        {
            string paymentStatus;
            Console.WriteLine("Nr i kestit----Vlera----Principali----Interesi----I Paguar----Dt e pageses");
            foreach (Installment x in installmentData)
            {

                if (x.isPaid)
                    paymentStatus = "Yes";
                else
                    paymentStatus = "No";

                Console.WriteLine($"----{x._installmentNr}----------{x._instAmount}---------{x._principal}----------{x._interestVal}-" +
                    $"------{paymentStatus}----------{x._paymentDate.ToString("MM/dd/yyyy")}");
            }

        }

        public void payLoanInstallment(int installmentNr)
        {
            Installment holder = installmentData.Where(x => x._installmentNr == installmentNr).FirstOrDefault();
            _outstanding -= holder.PayInstallment();

            if (_outstanding <= 0)
            {
                isPaid = true;
                _outstanding = 0;
            }
        }

    }



    // KLASA INSTALLMENT
    class Installment
    {
        public int _installmentNr;
        public double _principal;
        public double _interestVal;
        public double _instAmount;
        public DateTime _paymentDate;
        public bool isPaid = false;

        public Installment()
        {

        }

        public double PayInstallment()
        {
            isPaid = true;
            return _instAmount;
        }

    }

    class Program
    {
        static void Main(string[] args)
        {
            Loan mainLoan = new Loan("7654321", 1490, "Euro", 9, "Joan");

            mainLoan.PrintLoanData();

            mainLoan.AddLoanInstallment(3, 1400, 100, 1500, DateTime.Parse("10/03/2022"));
            mainLoan.AddLoanInstallment(1, 1200, 300, 1500, DateTime.Parse("10/01/2022"));
            mainLoan.AddLoanInstallment(4, 1450, 50, 1500, DateTime.Parse("10/04/2022"));
            mainLoan.AddLoanInstallment(2, 1300, 200, 1500, DateTime.Parse("10/02/2022"));

            mainLoan.PrintLoanSchedule();

            Console.WriteLine();

            mainLoan.payLoanInstallment(1);
            mainLoan.payLoanInstallment(2);
            mainLoan.payLoanInstallment(3);
            mainLoan.payLoanInstallment(4);

            Console.WriteLine();

            mainLoan.PrintLoanSchedule();
            mainLoan.PrintLoanData();

            Console.ReadKey(); //Qe mos mbyllet CMD

        }
    }
}
