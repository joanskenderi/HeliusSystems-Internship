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
    public class MagazinaController : BaseController
    {
        public ActionResult Index(string successMessage)
        {
            if (!String.IsNullOrWhiteSpace(successMessage))
                ViewData["Success"] = successMessage;

            return PartialView();
        }
        public ActionResult Edit(int Id = 0)
        {
            EmployeeTask task = new EmployeeTask();

            if (Id != 0)
            {
                task = TaskDataLayer.Get(Id);
            }

            return PartialView(task);
        }

        [HttpPost]
        public ActionResult Edit(Magazina magazina)
        {

            if (ModelState.IsValid)
            {
                if (magazina.ID == 0)
                {
                    var newMagazina = DataAccess.Task.MagazinaDAL.Insert(magazina);
                    if (newMagazina is object)
                    {
                        return RedirectToAction("Index", new { successMessage = "Magazina saved successfully" });
                    }
                }
                else
                {
                    DataAccess.Task.MagazinaDAL.Update(magazina);
                    return RedirectToAction("Index", new { successMessage = "Task modified successfully" });
                }
            }
            return PartialView();

        }

        public JsonResult GetQytet()
        {
            List<Qyteti> qytetet = .GetAll();
            return Json(qytetet, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Get([DataSourceRequest] DataSourceRequest request)
        {
            List<Magazina> magazina = DataAccess.Task.MagazinaDAL.GetAll();
            return Json(magazina.ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }
    }

}