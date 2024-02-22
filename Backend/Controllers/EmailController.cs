using Backend.Models.Emails;
using Backend.Services.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class EmailController : ControllerBase
{
    private readonly IEmailService _emailService;

    public EmailController(IEmailService emailService)
    {
        _emailService = emailService;
    }

    [HttpGet("sendEmailVerificationCode/{to}")]
    public async Task<IActionResult> SendEmailVerificationCode(string to)
    {
        try
        {
            var codeId = await _emailService.SendEmailVerificationCode(to);
            return Ok(codeId);
        }
        catch (Exception e)
        {
            Console.WriteLine(e.Message);
            return BadRequest("Something went wrong! Please try again later or contact us.");
        }
    }
    
    [HttpPost("verifyEmail")]
    public async Task<IActionResult> VerifyEmail(ValidateEmailModel model)
    {
        try
        {
            var message = await _emailService.ValidateCode(model);
            return Ok(new { Message = message });
        }
        catch (KeyNotFoundException e)
        {
            return NotFound(e.Message);
        }
    }
}