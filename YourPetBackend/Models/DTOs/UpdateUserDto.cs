using System.Data;

namespace YourPetAPI.Models
{
    public class UpdateUserDto
    {
        
        public string FirstName { get; set; }
        public string? LastName { get; set; }
        public string City { get; set; }
        public string? Description { get; set; }

    }
}
