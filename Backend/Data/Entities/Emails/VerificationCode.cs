namespace Backend.Data.Entities.Emails;

public class VerificationCode
{
    public int Id { get; set; }
    public int CodeId { get; set; }
    public string Value { get; set; } = string.Empty;
    public DateTimeOffset TimeSent { get; set; } = DateTime.UtcNow;
}