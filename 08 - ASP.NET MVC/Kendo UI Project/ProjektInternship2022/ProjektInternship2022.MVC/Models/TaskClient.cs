using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjektInternship2022.MVC.Models
{
    public class TaskClient
    {
        public int Id { get; set; }

        public int TaskId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public bool IsNotified { get; set; }
    }
}