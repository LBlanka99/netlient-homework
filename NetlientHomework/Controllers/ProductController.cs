using Microsoft.AspNetCore.Mvc;
using NetlientHomework.Entities.Models;
using NetlientHomework.Services;

namespace NetlientHomework.Controllers;

[Route("/api/v1/products")]

public class ProductController : ControllerBase
{
    private readonly ProductService _productService;

    public ProductController(ProductService productService)
    {
        _productService = productService;
    }

    [HttpGet]
    public async Task<List<DataModel>> GetAllProducts()
    {
        return await _productService.GetAllProducts();
    }
}