using ProjektInternship2022.MVC.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace ProjektInternship2022.MVC.DataAccess.Task
{
    public class MagazinaDAL
    {
        private static object magazina;

        public static Magazina Insert(Magazina magazina)
        {
            try
            {
                using (var connection = new SqlConnection(StaticConfig.ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand("[dbo].[Magazina]", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;

                        command.Parameters.AddWithValue("@p_emri", magazina.Emri);
                        command.Parameters.AddWithValue("@p_qyteti", magazina.Qyteti);
                        command.Parameters.AddWithValue("@p_data", magazina.Data);

                        command.ExecuteNonQuery();
                    }
                }
                return magazina;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static void Update(Magazina magazina)
        {
            try
            {
                using (var connection = new SqlConnection(StaticConfig.ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand("[dbo].[Magazina]", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@p_emri", magazina.Emri);
                        command.Parameters.AddWithValue("@p_qyteti", magazina.Qyteti);
                        command.Parameters.AddWithValue("@p_data", magazina.Data);

                        command.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static Magazina Get(int Id)
        {
            Magazina magazina = new Magazina();
            try
            {
                using (var connection = new SqlConnection(StaticConfig.ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand("[dbo].[Magazina]", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@p_id", Id);

                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                magazina = Map(reader);
                            }
                        }
                    }
                }
                return magazina;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static List<Magazina> GetAll()
        {
            List<Magazina> magazinList = new List<Magazina>();
            try
            {
                using (var connection = new SqlConnection(StaticConfig.ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand("[dbo].[Magazina]", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                do
                                {
                                    magazinList.Add(Map(reader));
                                } while (reader.Read());
                            }
                        }
                    }
                }
                return magazinList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static Magazina Map(SqlDataReader reader)
        {
            Magazina magazina = new Magazina();

            magazina.ID = Convert.ToInt32(reader["id"]);
            magazina.Emri = Convert.ToString(reader["emri"]);
            magazina.Qyteti = Convert.ToInt32(reader["qyteti"]);
            magazina.Data = Convert.ToDateTime(reader["data"]);
            return magazina;
        }
    }
}