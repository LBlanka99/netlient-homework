using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using NetlientHomework.Entities;
using NetlientHomework.Entities.Models;
using NetlientHomework.Entities.Models.DTOs;
using NetlientHomework.Exceptions;

namespace NetlientHomework.Services;

public class UserService
{
    private readonly NetlientHomeworkContext _context;

    public UserService(NetlientHomeworkContext context)
    {
        _context = context;
    }

    public async Task<UserModel?> GetUserByName(string name)
    {
        return await _context.UserModel.FirstOrDefaultAsync(user => user.UserName == name);
    }

    public async Task<UserModel> AddNewUser(SignUpDTO user)
    {
        UserModel? foundUser = await GetUserByName(user.UserName);
        if (foundUser != null)
        {
            throw new UserNameAlreadyInUseException("This user name is already in taken!");
        }

        var userToAdd = new UserModel
        {
            UserName = user.UserName,
            Password = user.Password
        };

        _context.UserModel.Add(userToAdd);
        await _context.SaveChangesAsync();
        return userToAdd;
    }
    
    public async Task<UserModel?> LogInUser(SignUpDTO user)
    {
        UserModel? foundUser = await GetUserByName(user.UserName);
        if (foundUser == null)
        {
            return null;
        }

        return user.Password == foundUser.Password ? foundUser : null;
    }
}