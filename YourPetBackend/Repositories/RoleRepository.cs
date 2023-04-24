using YourPetAPI.Database;
using YourPetAPI.Models;
//using YourPetAPI.Models.DTOs.User;
//using YourPetAPI.Models.ViewModels;
//using Microsoft.AspNetCore.JsonPatch;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourPetAPI.Repositories
{
    public interface IRoleRepository
    {
        Task<Role> GetRoleById(int id);

        Task<List<Role>> GetRoles();
    }

    public class RoleRepository : IRoleRepository
    {
        private readonly AppDbContext _context;
        public RoleRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Role> GetRoleById(int id)
        {
            return await _context.Roles.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<Role>> GetRoles()
        {
            return await _context.Roles.ToListAsync();
        }
    }
}