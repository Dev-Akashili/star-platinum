using Backend.Data;
using Backend.Data.Entities.Identity;
using Backend.Data.Entities.User;
using Backend.Models.User;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services;

public class UserProfileService
{
    private readonly ApplicationDbContext _db;
    private readonly UserManager<ApplicationUser> _userManager;

    public UserProfileService(ApplicationDbContext db, UserManager<ApplicationUser> userManager)
    {
        _db = db;
        _userManager = userManager;
    }

    public async Task Create(UserProfileModel model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email)
                   ?? throw new KeyNotFoundException();

        var entity = new UserProfile
        {
            FirstName = model.FirstName,
            LastName = model.LastName,
            Email = model.Email,
            User = user
        };
        
        await _db.UserProfiles.AddAsync(entity);
        await _db.SaveChangesAsync();
    }
}