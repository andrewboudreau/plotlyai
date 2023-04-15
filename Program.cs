
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => Results.File("./index.html", "text/html"));
await app.RunAsync();
