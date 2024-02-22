using Backend.Models.Emails;

namespace Backend.Services.Contracts;

public interface IEmailService
{
    Task<int> SendEmailVerificationCode(string to);
    Task<string> ValidateCode(ValidateEmailModel model);
}