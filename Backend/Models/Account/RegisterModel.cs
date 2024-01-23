using System.ComponentModel.DataAnnotations;

namespace Backend.Models.Account;

public class RegisterModel
{
    [Required]
    [DataType(DataType.Text)]
    public string Email { get; set; }
    
    [Required]
    [DataType(DataType.Text)]
    public string Password { get; set; }
}