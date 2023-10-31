using Microsoft.AspNetCore.Mvc;
using NetlientHomework.Entities.Models;
using NetlientHomework.Entities.Models.DTOs;
using NetlientHomework.Services;

namespace NetlientHomework.Controllers;

[Route("/api/v1/users")]

public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService)
    {
        _userService = userService;
    }
    
    [HttpPost]
    public async Task<UserModel> PostNewUser([FromBody] SignUpDTO user)
    {
        return await _userService.AddNewUser(user);

    }
}