
using AutoMapper;
using EatThisAPI.Models.DTOs.User;
using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YourPetAPI.Database;
using YourPetAPI.Models;
using YourPetAPI.Services;


namespace YourPetAPI.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;
        private readonly IRoleService _roleService;
        public AccountController(IAccountService accountService, IRoleService roleService)
        {
            _accountService = accountService;
            _roleService = roleService;
        }

        [HttpPost]
        [Route("register")]
        public async Task<ActionResult> RegisterUser ([FromBody] RegisterUserDto registerUserDto)
        {
            await _accountService.RegisterUser(registerUserDto);
            return Ok();
        }
    }

}