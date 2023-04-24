using AutoMapper;
using EatThisAPI.Models.DTOs.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YourPetAPI.Database;
using YourPetAPI.Exceptions;
using YourPetAPI.Models;
using YourPetAPI.Repositories;

namespace YourPetAPI.Services
{

    public interface IAccountService
    {
        Task RegisterUser(RegisterUserDto registerUserDto);
    }

    public class AccountService : IAccountService
    {
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;
       // private readonly ILogger _logger;
        private readonly IUserRepository _userRepository;
        private readonly IPasswordHasher<User> _passwordHasher;
        
        public AccountService(IMapper mapper, IUserRepository userRepository, IPasswordHasher<User> passwordHasher)
        {
            _mapper = mapper;
            _userRepository = userRepository;
            _passwordHasher = passwordHasher;
        }

        public async Task RegisterUser(RegisterUserDto registerUserDto)
        {
            var newUser = _mapper.Map<User>(registerUserDto);
            newUser.PasswordHash = registerUserDto.Password;
            newUser.RegisterDate = DateTime.UtcNow;
            newUser.IsActive = false;
            newUser.RoleId = 3;
            var hashedPassword = _passwordHasher.HashPassword(newUser, registerUserDto.Password);
            newUser.PasswordHash = hashedPassword;
            
            await _userRepository.RegisterUser(newUser);
        }
    }
}
