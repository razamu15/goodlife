using goodlife.Model;
using Microsoft.AspNetCore.Mvc;

namespace goodlife.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    static readonly HttpClient client = new HttpClient();

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger) {
        _logger = logger;
    }

    [HttpGet]
    public async Task<IEnumerable<Category>?> Get() {
        var uri = "https://gldev-practicalapi.azurewebsites.net/api/FitnessClass/GetCategories";

        using HttpResponseMessage response = await client.GetAsync(uri);
        response.EnsureSuccessStatusCode();
        var responseBody = await response.Content.ReadFromJsonAsync<IEnumerable<Category>>();
        return responseBody;
    }
}

