using ProjektInternship2022.MVC.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjektInternship2022.MVC.Models
{
    public class Status
    {
        public int StatusId { get; set; }
        public string StatusName { get; set; }
        public bool IsActive { get; set; }
    }
}