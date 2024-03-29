using AutoMapper;
using YourPetAPI.Database;
using YourPetAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using YourPetAPI.Models.DTOs.User;
using YourPetAPI.Models.DTOs;

namespace YourPetAPI.Helpers
{
    public class AutoMapperHelper : Profile
    {
        public AutoMapperHelper()
        {
            CreateMap<User, UserDto>()
                .ForMember(x => x.Id, y => y.MapFrom(z => z.Id))
                .ForMember(x => x.Email, y => y.MapFrom(z => z.Email))
                .ForMember(x => x.FirstName, y => y.MapFrom(z => z.FirstName))
                .ForMember(x => x.LastName, y => y.MapFrom(z => z.LastName))
                .ForMember(x => x.City, y => y.MapFrom(z => z.City))
                .ForMember(x => x.RegisterDate, y => y.MapFrom(z => z.RegisterDate))
                .ForMember(x => x.Phone, y => y.MapFrom(z => z.Phone))
                .ForMember(x => x.Description, y => y.MapFrom(z => z.Description))
                .ForMember(x => x.RoleId, y => y.MapFrom(z => z.RoleId))
                .ForMember(x => x.Role, y => y.MapFrom(z => z.Role));

            CreateMap<UserDto, User>()
                .ForMember(x => x.Id, y => y.MapFrom(z => z.Id))
                .ForMember(x => x.Email, y => y.MapFrom(z => z.Email))
                .ForMember(x => x.FirstName, y => y.MapFrom(z => z.FirstName))
                .ForMember(x => x.LastName, y => y.MapFrom(z => z.LastName))
                .ForMember(x => x.City, y => y.MapFrom(z => z.City))
                .ForMember(x => x.RegisterDate, y => y.MapFrom(z => z.RegisterDate))
                .ForMember(x => x.Phone, y => y.MapFrom(z => z.Phone))
                .ForMember(x => x.Description, y => y.MapFrom(z => z.Description))
                .ForMember(x => x.RoleId, y => y.MapFrom(z => z.RoleId))
                .ForMember(x => x.Role, y => y.MapFrom(z => z.Role));

            CreateMap<RegisterUserDto, User>()
                .ForMember(x => x.Email, y => y.MapFrom(z => z.Email))
                .ForMember(x => x.FirstName, y => y.MapFrom(z => z.FirstName))
                .ForMember(x => x.LastName, y => y.MapFrom(z => z.LastName))
                .ForMember(x => x.City, y => y.MapFrom(z => z.City))
                .ForMember(x => x.RoleId, y => y.MapFrom(z => z.RoleId))
                .ForMember(x => x.Phone, y => y.MapFrom(z => z.Phone));

            CreateMap<User, RegisterUserDto>()
                .ForMember(x => x.Email, y => y.MapFrom(z => z.Email))
                .ForMember(x => x.FirstName, y => y.MapFrom(z => z.FirstName))
                .ForMember(x => x.LastName, y => y.MapFrom(z => z.LastName))
                .ForMember(x => x.City, y => y.MapFrom(z => z.City))
                .ForMember(x => x.RoleId, y => y.MapFrom(z => z.Role))
                .ForMember(x => x.Phone, y => y.MapFrom(z => z.Phone));


            CreateMap<LoginDto, User>()
                .ForMember(x => x.Email, y => y.MapFrom(z => z.Email))
                .ForMember(x => x.PasswordHash, y => y.MapFrom(z => z.Password));

            CreateMap<User, LoginDto>()
               .ForMember(x => x.Email, y => y.MapFrom(z => z.Email))
               .ForMember(x => x.Password, y => y.MapFrom(z => z.PasswordHash));




        }
    }
}