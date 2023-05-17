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
        [Required]
        public string Email { get; set; }
        [Required]
        [MinLength(6)]
        public string Password { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public int RoleId { get; set; }
        [Required]
        public string Phone { get; set; }
        public string? Description { get; set; }
       

        //public bool IsActive { get; set; }
        //public string Image { get; set; }

        //public int RoleId { get; set; }
        //public virtual Role Role { get; set; }


    }
}
