using ProjektInternship2022.MVC.DataAccess;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ProjektInternship2022.MVC.Models
{
    public class EmployeeTask
    {
        public int TaskId { get; set; }

        [Required]
        public string Summary { get; set; }

        [Required]
        public string Code { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public DateTime DueDate { get; set; }

        [Required]
        public int StatusId { get; set; }

        public List<TaskClient> Clients { get; set; }

        public EmployeeTask()
        {
            Clients = new List<TaskClient>();
        }
    }  
}