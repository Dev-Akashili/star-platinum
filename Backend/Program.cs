using Backend.Data;
using Backend.Services.Contracts;
using Backend.Services.EmailServices;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// MVC
builder.Services
    .AddControllersWithViews();

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure the EF Core context
builder.Services
    .AddDbContext<ApplicationDbContext>(options =>
    {
        var connectionString = builder.Configuration.GetConnectionString("Default");
        if (string.IsNullOrWhiteSpace(connectionString))
            options.UseNpgsql();
        else
            options.UseNpgsql(connectionString,
                o => o.EnableRetryOnFailure());
    });

// Add Identity services to the container
builder.Services.AddAuthorization();

// Add services
builder.Services.AddTransient<IEmailService, EmailService>();

// Configure Cors
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

// Add Cors
app.UseCors();

app.UseRouting();

app.MapSwagger();

app.MapFallbackToFile("index.html");

// Endpoints
app.MapControllers();

app.Run();