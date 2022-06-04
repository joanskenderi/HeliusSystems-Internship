using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using ProjektInternship2022.MVC.Models;

namespace ProjektInternship2022.MVC.DataAccess
{
    public static class StatusDataLayer
    {
        public static Status GetById(int Id)
        {
            Status st = new Status();
            try
            {
                using (var connection = new SqlConnection(StaticConfig.ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand("[dbo].[usp_Status_Select]", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@p_id", Id);

                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                                st = Map(reader);
                            else
                                throw new System.Exception("The record was not found!");
                        }
                    }
                }
                return st;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static List<Status> GetAll()
        {
            List<Status> statuslist = new List<Status>();
            try
            {
                using (var connection = new SqlConnection(StaticConfig.ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand("[dbo].[usp_Status_Select]", connection))
                    {
                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                do
                                {
                                    statuslist.Add(Map(reader));
                                } while (reader.Read());

                            }

                        }
                    }
                }
                return statuslist;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static Status Map(SqlDataReader reader)
        {
            Status st = new Status();

            st.StatusId = Convert.ToInt32(reader["status_id"]);
            st.StatusName = Convert.ToString(reader["status_name"]);
            st.IsActive = Convert.ToBoolean(reader["is_active"]);
            return st;
        }
    }
}