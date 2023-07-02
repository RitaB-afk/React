namespace employeeSearchBE.Models
{
    public class Employee
    {
        public Employee(int id, string jobTitleName, string name, string phoneNumber)
        {
            Id = id;
            JobTitleName = jobTitleName;
            Name = name;
            PhoneNumber = phoneNumber;
        }

        public int Id { get; set; }
        public string JobTitleName { get; set; }
        public string Name { get; set; }
       
        public string PhoneNumber { get; set; }

    }
}
