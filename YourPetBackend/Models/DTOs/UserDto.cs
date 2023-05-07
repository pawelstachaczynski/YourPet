using System.Data;

namespace YourPetAPI.Models
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public DateTime? RegisterDate { get; set; }
        // public string PasswordHash { get; set; }
        // public bool IsActive { get; set; }
        //public string Image { get; set; }
        public string? Description { get; set; }
        public int RoleId { get; set; }
        public virtual Role Role { get; set; }

    }
}
