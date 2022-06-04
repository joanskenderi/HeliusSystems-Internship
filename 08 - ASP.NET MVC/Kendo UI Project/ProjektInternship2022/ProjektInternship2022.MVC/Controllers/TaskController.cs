using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using ProjektInternship2022.MVC.DataAccess;
using ProjektInternship2022.MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjektInternship2022.MVC.Controllers
{
    public class TaskController: BaseController
    {
        public ActionResult Index(string successMessage)
        {
            if (!String.IsNullOrWhiteSpace(successMessage))
                ViewData["Success"] = successMessage;

            return PartialView();
        }
        public ActionResult Edit(int TaskId = 0)
        {
            EmployeeTask task = new EmployeeTask();
            
            if (TaskId != 0)
            {
                task = TaskDataLayer.Get(TaskId);
            }

            return PartialView(task);
        }

        [HttpPost]
        public ActionResult Edit(EmployeeTask task)
        {

            if (ModelState.IsValid)
            {
                if (task.TaskId == 0)
                {
                    var newTask = TaskDataLayer.Insert(task);
                    if (newTask is object)
                    {
                        return RedirectToAction("Index", new { successMessage = "Task saved successfully" });
                    }
                }
                else
                {
                    TaskDataLayer.Update(task);
                    return RedirectToAction("Index", new { successMessage = "Task modified successfully" });
                }
            }
            return PartialView();

        }

        public JsonResult GetStatus()
        {
            List<Status> statuses = StatusDataLayer.GetAll();
            return Json(statuses, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetTasks([DataSourceRequest] DataSourceRequest request)
        {
            List<EmployeeTask> tasks = TaskDataLayer.GetAll();
            return Json(tasks.ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }
    }

}