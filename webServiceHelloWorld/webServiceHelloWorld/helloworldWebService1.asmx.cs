using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Script.Services;
using System.Web.Services;
using System.Xml.Linq;

namespace webServiceHelloWorld
{
    /// <summary>
    /// Summary description for helloworldWebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class helloworldWebService1 : System.Web.Services.WebService
    {

        [WebMethod(Description = "Get Employees"), ScriptMethod(UseHttpGet = true)]
        public void GetEmployees()
        {
            var file = Path.Combine(HttpRuntime.AppDomainAppPath, "Employees.xml");
            var doc = XDocument.Load(file);
            var elements = doc.Root.Elements();
            var employees= new List<Employees>();//The employees is empty at the start

            foreach (var e in elements)
            {
                var employee = new Employees()
                {
                    Id = int.Parse(e.Attribute("Id").Value),
                    Name = e.Element("Name").Value,
                    Phone = int.Parse(e.Attribute("Phone").Value),
                    Department = int.Parse(e.Attribute("Department").Value),
                    Street = e.Element("Street").Value,
                    City = e.Element("City").Value,
                    State = e.Element("State").Value,
                    ZIP= int.Parse(e.Attribute("ZIP").Value),
                    Country = e.Element("Country").Value,


                };
                employees.Add(employee);

            }

            Context.Response.Write(
              new JavaScriptSerializer().Serialize(employees));

        }

        [WebMethod(Description = "Add employees"), ScriptMethod(UseHttpGet = true)]
        public void AddEmployee(string name, int phone, string department, string street, string city, string state, int ZIP, string country )
        {
            var file = Path.Combine(HttpRuntime.AppDomainAppPath, "Employees.xml");
            var doc = XDocument.Load(file);
            var root = doc.Root;

            int id = 0;
            if (root.Elements("Employee").Any())
            {
                id = doc.Descendants("Employee").Max(p => (int)p.Attribute("Id")) + 1;
            }

            var employee = new XElement("Employee");
            employee.Add(new XAttribute("Id", id)); // add an attribute
            employee.Add(new XElement("Name", name));
            employee.Add(new XElement("Phone", phone));
            employee.Add(new XElement("Department", department));
            employee.Add(new XElement("Street", street));
            employee.Add(new XElement("City", city));
            employee.Add(new XElement("State", state));
            employee.Add(new XElement("ZIP", ZIP));
            employee.Add(new XElement("Country", country));



            root.Add(employee);
            doc.Save(file);
            Context.Response.StatusCode = 201;

        }

        [WebMethod(Description = "Delete an Employee"), ScriptMethod(UseHttpGet = true)]
        public void DeleteEmployee(int id)
        {
            var file = Path.Combine(HttpRuntime.AppDomainAppPath, "Employees.xml");
            var doc = XDocument.Load(file);
            var employee = 
                doc.Root.Elements().FirstOrDefault(b => int.Parse(b.Attribute("Id").Value) == id);

            if (employee != null)
            {
                employee.Remove();
                doc.Save(file);
                Context.Response.StatusCode = 202;
            }
        }


        [WebMethod(Description = "Get Employees"), ScriptMethod(UseHttpGet = true)]
        public void UpdateEmployee(int id, string name, int phone, string department, string street, string city, string state, int ZIP, string country)
        {
            var file = Path.Combine(HttpRuntime.AppDomainAppPath, "Employees.xml");
            var doc = XDocument.Load(file);
            var employee = 
                doc.Root.Elements().FirstOrDefault( b => int.Parse(b.Attribute("Id").Value) == id);
            if (employee != null)
            {
                employee.Element("Name").SetValue(name);
                employee.Element("Phone").SetValue(phone);
                employee.Element("Department").SetValue(department);
                employee.Element("street").SetValue(street);
                employee.Element("City").SetValue(city);
                employee.Element("State").SetValue(state);
                employee.Element("ZIP").SetValue(ZIP);
                employee.Element("Country").SetValue(country);
                doc.Save(file);
                Context.Response.StatusCode = 202;
            }
        }


        [WebMethod(Description = "Get Departments"), ScriptMethod(UseHttpGet = true)]
        public void GetDepartments()
        {
            Context.Response.Write(
                new JavaScriptSerializer().Serialize(Departments)
                );
               
        }

       
        public List<Department> Departments
        {
            get
            {
                var elements =
                    XDocument.Load(Path.Combine(HttpRuntime.AppDomainAppPath,
                    "Departments.xml")).Root.Elements();

                var departments = new List<Department>();
                foreach (XElement element in elements)
                {
                    Department departmentObj = 
                        new Department 
                        {
                            Id=int.Parse(element.Attribute("Id").Value), 
                            Name=element.Element("Name").Value
                        };
                    departments.Add(departmentObj);
                }

                return departments;

            }
        }

     

    }
}
