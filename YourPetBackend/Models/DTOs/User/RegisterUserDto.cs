using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using YourPetAPI.Models;

namespace YourPetAPI.Models.DTOs.User
{
    public class RegisterUserDto
    {

        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }

        public string Password { get; set; }
        //public bool IsActive { get; set; }
        //public string Image { get; set; }

        //public int RoleId { get; set; }
        //public virtual Role Role { get; set; }
    }
}
