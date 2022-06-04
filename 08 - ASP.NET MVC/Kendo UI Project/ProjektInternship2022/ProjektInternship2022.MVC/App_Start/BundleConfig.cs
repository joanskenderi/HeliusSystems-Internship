using System.Web;
using System.Web.Optimization;

namespace ProjektInternship2022.MVC
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/kendo/2019.3.917/styles").Include(
                            "~/Content/kendo/2019.3.917/kendo.common.min.css",
                            "~/Content/kendo/2019.3.917/kendo.mobile.all.min.css",
                            "~/Content/kendo/2019.3.917/kendo.dataviz.min.css",
                            "~/Content/kendo/2019.3.917/kendo.bootstrap.min.css",
                            "~/Content/kendo/2019.3.917/kendo.dataviz.bootstrap.min.css"
                     ));



            bundles.Add(new ScriptBundle("~/Scripts/ALL_JS").Include(
                                        "~/Scripts/jquery-1.10.2.js",
                                        "~/Scripts/jquery-migrate-1.2.1.js",
                                        "~/Scripts/jquery.ba-hashchange.js",
                                        "~/Scripts/jquery.numeric.js",
                                        "~/Scripts/jquery.blockUI.js",
                                        "~/Scripts/jquery.jgrowl.js",
                                        "~/Scripts/jquery.jgrowl.js",
                                        "~/Scripts/jquery-ui.js",
                                        "~/Scripts/kendo/2019.3.917/kendo.all.min.js",
                                        "~/Scripts/kendo/2019.3.917/kendo.aspnetmvc.min.js",
                                        "~/Scripts/jquery.unobtrusive-ajax.js",
                                        "~/Scripts/bootstrap.js",
                                        "~/Scripts/jquery.validate.min.js",
                                        "~/Scripts/jquery.validate.unobtrusive.min.js",
                                         "~/Scripts/jquery.signalR-2.2.1.min.js",
                                        "~/Scripts/kendo/2019.3.917/jszip.min.js"
                        ));



        }
    }
}
