using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using ProjektInternship2022.MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjektInternship2022.MVC.Controllers
{
    public class HomeController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Select([DataSourceRequest] DataSourceRequest request)
        {
            var data = Enumerable.Range(1, 10)
                .Select(index => new Product
                {
                    ProductID = index,
                    ProductName = "Product #" + index,
                    UnitPrice = index * 10,
                    Discontinued = false
                });

            return Json(data.ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }


        public JsonResult GetStatus([DataSourceRequest] DataSourceRequest request, bool? isActive)
        {
            List<Status> statuses = new List<Status>();
            statuses.Add(new Status { StatusId = 1, StatusName = "Ne pritje", IsActive = true });
            statuses.Add(new Status { StatusId = 2, StatusName = "Ne progres", IsActive = true });
            statuses.Add(new Status { StatusId = 3, StatusName = "Derguar per aprovim", IsActive = true });
            statuses.Add(new Status { StatusId = 4, StatusName = "Aprovuar", IsActive = false });
            statuses.Add(new Status { StatusId = 5, StatusName = "Perfunduar", IsActive = true });

            List<Status> statusToReturn = new List<Status>();

            if (isActive == null)
                statusToReturn = statuses;
            else if (isActive == true)
                statusToReturn = statuses.Where(p => p.IsActive == true).ToList();
            else
                statusToReturn = statuses.Where(p => p.IsActive == false).ToList();

            return Json(statusToReturn.ToDataSourceResult(request), JsonRequestBehavior.AllowGet);
        }
    }


}



