using BioEnergy.WebApi;
using BioEnergy.WebApi.Services.Biomasses;
using BioEnergy.WebApi.Services.EnergyProducts;
using BioEnergy.WebApi.Services.Firms;
using BioEnergy.WebApi.Services.FirmsData;
using BioEnergy.WebApi.Services.Measurements;
using BioEnergy.WebApi.Services.NKIDs;
using BioEnergy.WebApi.Services.Towns;


var builder = WebApplication.CreateBuilder(args);
var myAllowSpecificOrigins = "_myAllowSpecificOrigins";
// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<BioEnergyDbContext>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowSpecificOrigins, policy =>
    {
        policy.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyMethod()
        .WithHeaders("Content-Type"); 
    });
});

builder.Services.AddScoped<IHeatMeasurementService, HeatMeasurementService>();
builder.Services.AddScoped<IPowerMeasurementService, PowerMeasurementService>();
builder.Services.AddScoped<INKIDService, NKIDService>();
builder.Services.AddScoped<ITownService, TownService>();
builder.Services.AddScoped<IBiomassService, BiomassService>();
builder.Services.AddScoped<IEnergyProductService, EnergyProductService>();
builder.Services.AddScoped<IFirmService, FirmService>();
builder.Services.AddScoped<IFirmDataService, FirmDataService>();

builder.Services.AddControllers();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(myAllowSpecificOrigins);
app.UseHttpsRedirection();
app.MapControllers();
app.Run();
