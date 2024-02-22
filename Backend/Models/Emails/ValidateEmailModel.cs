namespace Backend.Models.Emails;

public class ValidateEmailModel
{
    public int CodeId { get; set; }
    public string Code { get; set; } = string.Empty;
    public DateTimeOffset CurrentTime { get; set; } = DateTime.UtcNow;
}