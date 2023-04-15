
const string IndexHtmlPath = "./chartist.html";

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
app.UseWebSockets().UseStaticFiles();
app.MapGet("/", () => Results.File(IndexHtmlPath, "text/html"));
await app.RunAsync();
