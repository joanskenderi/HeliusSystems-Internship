using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Trekendesh
    {
        private int _brinjaA;
        private int _brinjaB;
        private int _brinjaC;
        public bool kontrolli()
        {
            bool k = true;
            if (_brinjaA + _brinjaB < _brinjaC)
                k = false;
            if (_brinjaB + _brinjaC < _brinjaA)
                k = false;
            if (_brinjaA + _brinjaC < _brinjaB)
                k = false;
            return k;
        }
        public double siperfaqja() { return (_brinjaA * _brinjaB) / 2; }

        public Trekendesh(int A, int B, int C)
        {
            _brinjaA = A;
            _brinjaB = B;
            _brinjaC = C;
        }
    }
   
}
