using AppUsers.Domain.Infra;
using AppUsers.Domain.Infra.Context;
using AppUsers.Domain.Interfaces.Services;
using AppUsers.Domain.Interfaces.UnitOfWork;
using AppUsers.Domain.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddSqlServer<AppUsersContext>(builder.Configuration["ConnectionString:AppUsersBD"]);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
