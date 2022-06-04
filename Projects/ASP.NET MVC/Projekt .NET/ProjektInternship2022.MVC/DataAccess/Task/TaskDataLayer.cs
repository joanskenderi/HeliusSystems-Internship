using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using ProjektInternship2022.MVC.Models;

namespace ProjektInternship2022.MVC.DataAccess
{
    public static class TaskDataLayer
    {
        public static EmployeeTask Insert(EmployeeTask Task)
        {
            try
            {
                using (var connection = new SqlConnection(StaticConfig.ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand("[dbo].[usp_Task_Insert]", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@p_id", Task.TaskId);
                        command.Parameters["@p_id"].Direction = ParameterDirection.Output;

                        command.Parameters.AddWithValue("@p_summary", Task.Summary);
                        command.Parameters.AddWithValue("@p_description", Task.Description);
                        command.Parameters.AddWithValue("@p_code", Task.Code);
                        command.Parameters.AddWithValue("@p_due_date", Task.DueDate);
                        command.Parameters.AddWithValue("@p_status_id", Task.StatusId);

                        command.ExecuteNonQuery();

                        Task.TaskId = (System.Int32)command.Parameters["@p_id"].Value;
                    }
                }
                return Task;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static void Update(EmployeeTask Task)
        {
            try
            {
                using (var connection = new SqlConnection(StaticConfig.ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand("[dbo].[usp_Task_Update]", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@p_id", Task.TaskId);
                        command.Parameters.AddWithValue("@p_summary", Task.Summary);
                        command.Parameters.AddWithValue("@p_description", Task.Description);
                        command.Parameters.AddWithValue("@p_code", Task.Code);
                        command.Parameters.AddWithValue("@p_due_date", Task.DueDate);
                        command.Parameters.AddWithValue("@p_status_id", Task.StatusId);

                        command.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static EmployeeTask Get(int Id)
        {
            EmployeeTask task = new EmployeeTask();
            try
            {
                using (var connection = new SqlConnection(StaticConfig.ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand("[dbo].[usp_Task_Select]", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@p_id", Id);

                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                task = Map(reader);
                            }
                        }
                    }
                }
                return task;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static List<EmployeeTask> GetAll()
        {
            List<EmployeeTask> taskList = new List<EmployeeTask>();
            try
            {
                using (var connection = new SqlConnection(StaticConfig.ConnectionString))
                {
                    connection.Open();
                    using (var command = new SqlCommand("[dbo].[usp_Task_Select]", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        using (var reader = command.ExecuteReader())
                        {
                            if (reader.Read())
                            {
                                do
                                {
                                    taskList.Add(Map(reader));
                                } while (reader.Read());
                            }
                        }
                    }
                }
                return taskList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static EmployeeTask Map(SqlDataReader reader)
        {
            EmployeeTask task = new EmployeeTask();

            task.TaskId = Convert.ToInt32(reader["id"]);
            task.Summary = Convert.ToString(reader["summary"]);
            task.Description = Convert.ToString(reader["description"]);
            task.Code = Convert.ToString(reader["code"]);
            task.StatusId = Convert.ToInt32(reader["status_id"]);
            task.DueDate = Convert.ToDateTime(reader["due_date"]);
            return task;
        }
    }
}