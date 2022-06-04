using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjektInternship2022.MVC.Models
{
    public class Magazina
    {
        public int ID { get; set; }
        public string Emri { get; set; }
        public int Qyteti { get; set; }
         
        public DateTime Data { get; set; }
    }
}