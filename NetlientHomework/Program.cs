using Microsoft.EntityFrameworkCore;
using NetlientHomework.Entities;
using NetlientHomework.Entities.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

const string myAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowSpecificOrigins,
        policy  =>
        {
            policy.WithOrigins("http://localhost:44405", "http://localhost:57324")
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
        int randomTax = random.Next(20, 30);
            
        context.DataModel.Add(new DataModel { ItemNumber = 25076 + i, ItemName = randomItemName, NetPrice = randomNetPrice, Tax = randomTax });
    }
        

    context.SaveChanges();
}