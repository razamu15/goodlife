using goodlife.Model;
using Microsoft.AspNetCore.Mvc;

namespace goodlife.Controllers;

[ApiController]
[Route("[controller]/[action]")]
public class GoodlifeController : ControllerBase
{
    static readonly HttpClient client = new HttpClient();

    private readonly ILogger<GoodlifeController> _logger;

    public GoodlifeController(ILogger<GoodlifeController> logger) {
        _logger = logger;
    }

    [HttpGet]
    public async Task<IEnumerable<Category>?> Categories()
    {
        var uri = "https://gldev-practicalapi.azurewebsites.net/api/FitnessClass/GetCategories";

        using HttpResponseMessage response = await client.GetAsync(uri);
        response.EnsureSuccessStatusCode();
        var responseBody = await response.Content.ReadFromJsonAsync<IEnumerable<Category>>();
        return responseBody;
    }

    [HttpGet]
    public async Task<IEnumerable<Class>?> Classes()
    {
        var uri = "https://gldev-practicalapi.azurewebsites.net/api/FitnessClass/Get";

        using HttpResponseMessage response = await client.GetAsync(uri);
        response.EnsureSuccessStatusCode();
        var responseBody = await response.Content.ReadFromJsonAsync<IEnumerable<Class>>();
        return responseBody;
    }
}

