using System.ComponentModel.DataAnnotations.Schema;
using Backend.Data.Entities.Identity;

namespace Backend.Data.Entities.User;

public class UserProfile
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    
    [ForeignKey("User")] 
    public string UserId { get; set; } = string.Empty;
    public ApplicationUser User { get; set; } = null;
    public List<Site> Sites { get; set; } = new();
}