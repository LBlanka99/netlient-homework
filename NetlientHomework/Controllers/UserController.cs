using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using NetlientHomework.Entities.Models;
using NetlientHomework.Entities.Models.DTOs;
using NetlientHomework.Exceptions;
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
    
    [AllowAnonymous]
    [HttpPost]
    public async Task<UserModel> PostNewUser([FromBody] SignUpDTO user)
    {
        return await _userService.AddNewUser(user);

    }
    
    [AllowAnonymous]
    [HttpPost("log-in")]
    public async Task LogInUser([FromBody] SignUpDTO credentials)
    {
        var user = await _userService.LogInUser(credentials);
        if (user == null)
        {
            throw new UnsuccessfulLoginException("The provided user name or password is not appropriate.");
        }

        var claims = new List<Claim>()
        {
            new Claim(ClaimTypes.Name, user.UserName)
        };

        var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
        CookieOptions cookieOptions = new CookieOptions();
        cookieOptions.Secure = true;
        Response.Cookies.Append("id", user.Id.ToString(), cookieOptions);

        await HttpContext.SignInAsync(
            CookieAuthenticationDefaults.AuthenticationScheme,
            new ClaimsPrincipal(identity)
        );
    }
}