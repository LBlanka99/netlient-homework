using Microsoft.EntityFrameworkCore;
using NetlientHomework.Entities.Models;

namespace NetlientHomework.Entities;

public class NetlientHomeworkContext : DbContext
{
    public NetlientHomeworkContext(DbContextOptions options) : base(options)
    {
    }
    
    public DbSet<UserModel> UserModel { get; set; }
    public DbSet<DataModel> DataModel { get; set; }
    
}