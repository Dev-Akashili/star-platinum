using Backend.Data.Entities.User;
using Microsoft.AspNetCore.Identity;

namespace Backend.Data.Entities.Identity;

public class ApplicationUser : IdentityUser
{ 
    public UserProfile UserProfile { get; set; } = null;
}