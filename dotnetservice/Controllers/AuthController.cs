
using Microsoft.AspNetCore.Mvc;

namespace dotnetservice.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthController : ControllerBase
{

    [HttpPost]
    bool AuthorizeUser(string username, string password)
    {
        // repo call
        return true;
    }
}