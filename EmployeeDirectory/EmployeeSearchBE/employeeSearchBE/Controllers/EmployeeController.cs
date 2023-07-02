using employeeSearchBE.Models;
using Microsoft.AspNetCore.Mvc;

namespace employeeSearchBE.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : Controller
    {
        List<Employee> employees = new List<Employee>();
       public EmployeeController()
        {
            this.employees.Add(new Employee(1, "Developer", "Romin Irani", "408-1234567"));
            this.employees.Add(new Employee(2, "Developer", "Neil Irani", "408-1111111"));
            this.employees.Add(new Employee(3, "Program Directory", "Tom Hanks", "408-2222222"));

        }

        [HttpGet()]
        public List<Employee> GetEmployees()
        {
            return this.employees;
        }

        [HttpGet("name")]
        public List<Employee> searchEmployees(string name)
        {

            var result = this.employees.Where(employees => employees.Name.Contains(name)).ToList();
            return result;
        }



    }
}
