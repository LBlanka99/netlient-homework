using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;
using NetlientHomework.Entities;
using NetlientHomework.Entities.Models;
using NetlientHomework.Exceptions;
using NetlientHomework.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

const string myAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowSpecificOrigins,
        policy  =>
        {
            policy.WithOrigins("https://localhost:44405")
                .AllowAnyHeader()
                .AllowCredentials()
                .AllowAnyMethod();
        });
});

var configuration = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddEnvironmentVariables()
    .Build();

builder.Services.AddDbContext<NetlientHomeworkContext>(options =>
    options.UseSqlite(configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddTransient<UserService>();
builder.Services.AddTransient<ProductService>();

builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie();


var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<NetlientHomeworkContext>();

    if (!context.DataModel.Any())
    {
        InitializeTestData(context);
    }
}

app.Use(async (context, next) =>
{
    try
    {
        Console.WriteLine(context.Response.Body);
        await next.Invoke();
    }
    catch (UserNameAlreadyInUseException e)
    {
        context.Response.StatusCode = 400;
        await context.Response.WriteAsync(e.Message);
    }
    catch (UnsuccessfulLoginException e)
    {
        context.Response.StatusCode = 401;
        await context.Response.WriteAsync(e.Message);
    }
});

app.UseCors(myAllowSpecificOrigins);

app.UseAuthentication();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();




void InitializeTestData(NetlientHomeworkContext context)
{
    
    Random random = new Random();
        
    List<string> possibleNames = new List<string>
    {
        "T-shirt",
        "pants",
        "jumper",
        "hat",
        "gloves",
        "skirt",
        "pyjamas",
            
    };
    List<string> possibleColors = new List<string>
    {
        "red",
        "dark-green",
        "sky-blue",
        "orange",
        "pink",
        "yellow",
        "pale-purple",
        "black",
        "white"


    };
        
    for (int i = 0; i < 100; i++)
    {
            
        string randomItemName = possibleColors[random.Next(possibleColors.Count)] + " " +
                                possibleNames[random.Next(possibleNames.Count)];
        int randomNetPrice = random.Next(1000, 10000);
        double randomTax = Math.Round(random.Next(20, 35)/100f, 2);
            
        context.DataModel.Add(new DataModel { ItemNumber = 25076 + i, ItemName = randomItemName, NetPrice = randomNetPrice, Tax = randomTax });
    }
        

    context.SaveChanges();
}