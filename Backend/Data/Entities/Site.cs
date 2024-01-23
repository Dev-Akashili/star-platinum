using System.ComponentModel.DataAnnotations.Schema;
using Backend.Data.Entities.User;

namespace Backend.Data.Entities;

public class Site
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Key { get; set; } = string.Empty;
    [ForeignKey("UserProfile")] 
    public string UserProfileId { get; set; } = string.Empty;
    public UserProfile UserProfile { get; set; } = null;
}