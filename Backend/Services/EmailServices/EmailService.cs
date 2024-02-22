using Backend.Data;
using Backend.Data.Entities.Emails;
using Backend.Models.Emails;
using Backend.Services.Contracts;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.EntityFrameworkCore;
using MimeKit;
using MimeKit.Text;

namespace Backend.Services.EmailServices;

public class EmailService: IEmailService
{
    private readonly IConfiguration _config;
    private readonly ApplicationDbContext _db;

    public EmailService(IConfiguration config, ApplicationDbContext db)
    {
        _config = config;
        _db = db;
    }
    public async Task<int> SendEmailVerificationCode(string to)
    {
        var code = await GenerateVerificationCode();

        var emailRequest = new EmailModel
        {
            To = to,
            Subject = "Star Platinum Email Verification Code",
            Body = $"<p>Use the verification code:<h2>{code.Value}</h2>The code expires in 3 minutes.</p>"
        };
        
        var email = new MimeMessage();
        email.From.Add(MailboxAddress.Parse(_config.GetSection("EmailUsername").Value));
        email.To.Add(MailboxAddress.Parse(emailRequest.To));
        email.Subject = emailRequest.Subject;
        email.Body = new TextPart(TextFormat.Html) { Text = emailRequest.Body };

        using (var smtp = new SmtpClient())
        {
            await smtp.ConnectAsync(_config.GetSection("EmailHost").Value, 587, SecureSocketOptions.StartTls);
            await smtp.AuthenticateAsync(_config.GetSection("EmailUsername").Value, _config.GetSection("EmailPassword").Value);
            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);
        }

        return code.CodeId;
    }
    
    private async Task<VerificationCode> GenerateVerificationCode()
    {
        Random random = new Random();
        string[] code = new string[6];
        for (int i = 0; i < 6; i++)
        {
            code[i] = random.Next(0, 10).ToString();
        }
        var codeId = random.Next(0, 1001);
        var result = new VerificationCode
        {
            CodeId = codeId,
            Value = string.Join("", code)
        };

        _db.VerificationCodes.Add(result);
        await _db.SaveChangesAsync();
        
        return result;
    }

    public async Task<string> ValidateCode(ValidateEmailModel model)
    {
        var list = await _db.VerificationCodes.ToListAsync();
        var verificationCode = list.FirstOrDefault(x => x.CodeId == model.CodeId);
        
        if (verificationCode == null) throw new KeyNotFoundException("Something went wrong");

        // Check if code is valid
        if (model.Code != verificationCode.Value) return "This code is not valid!";

        // Check if code has expired
        if (model.CurrentTime >= verificationCode.TimeSent.AddMinutes(3)) 
            return "This code has expired. Generate a new one";

        // Clear all verification codes
        _db.VerificationCodes.RemoveRange(list);
        await _db.SaveChangesAsync();

        return "success";
    }
}