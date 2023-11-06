using Microsoft.EntityFrameworkCore;
using NetlientHomework.Entities;
using NetlientHomework.Entities.Models;

namespace NetlientHomework.Services;

public class ProductService
{
    private readonly NetlientHomeworkContext _context;

    public ProductService(NetlientHomeworkContext context)
    {
        _context = context;
    }

    public async Task<List<DataModel>> GetAllProducts()
    {
        return await _context.DataModel.ToListAsync();
    }
}