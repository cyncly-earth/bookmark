namespace Backend.Models;

public class Domain
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public ICollection<Member>? Members { get; set; }
}
