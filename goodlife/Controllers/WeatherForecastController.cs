using goodlife.Model;
using Microsoft.AspNetCore.Mvc;

namespace goodlife.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    static readonly HttpClient client = new HttpClient();   
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public async Task<IEnumerable<Category>?>  Get()
    {
        var uri = "https://gldev-practicalapi.azurewebsites.net/api/FitnessClass/GetCategories";

        // { id: 1, name: '' }

        using HttpResponseMessage response = await client.GetAsync(uri);
        response.EnsureSuccessStatusCode();
        var responseBody = await response.Content.ReadFromJsonAsync<IEnumerable<Category>>();
        // Above three lines can be replaced with new helper method below
        // string responseBody = await client.GetStringAsync(uri);

        //Console.WriteLine(responseBody);
        return responseBody;
    }
}

