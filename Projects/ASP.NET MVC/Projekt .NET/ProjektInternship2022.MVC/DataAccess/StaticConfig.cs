using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjektInternship2022.MVC.Models
{
    public class StaticConfig
    {
        private static string _connectionString = String.Empty;
        public static string ConnectionString
        {
            get
            {
                if (String.IsNullOrEmpty(_connectionString))
                {
                    _connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["InternshipDbCnn"].ConnectionString;
                }

                return _connectionString;
            }
        }
    }
}