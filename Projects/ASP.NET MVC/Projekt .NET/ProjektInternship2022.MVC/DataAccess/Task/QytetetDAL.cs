using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using ProjektInternship2022.MVC.Models;
namespace ProjektInternship2022.MVC.DataAccess
{
    public static class QytetetDataLayer
    {
        public static Qyteti GetById(int Id)
        {
            Qyteti qt = new Qyteti();
            try
            {
                using (var connection = new SqlConnection(StaticConfig.ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand("[dbo].[usp_Qyteti_Select]", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@id", Id);
                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                                qt = Map(reader);
                            else
                                throw new System.Exception("The record was not found!");
                        }
                    }
                }
                return qt;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static List<Qyteti> GetAll()
        {
            List<Qyteti> qytetlist = new List<Qyteti>();
            try
            {
                int Id;
                using (var connection = new SqlConnection(StaticConfig.ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand("[dbo].[usp_Qyteti_Select]", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@id", Id = 0);
                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                do
                                {
                                    qytetlist.Add(Map(reader));
                                } while (reader.Read());
                            }
                        }
                    }
                }
                return qytetlist;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static Qyteti Map(SqlDataReader reader)
        {
            Qyteti qt = new Qyteti();
            qt.ID = Convert.ToInt32(reader["qyteti_id"]);
            qt.emri_qytetit = Convert.ToString(reader["qyteti"]);
            return qt;
        }
    }
}