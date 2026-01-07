namespace Backend.Models;

public class Member
{
    public int Id { get; set; }
    public string Name { get; set; } = "";

    public int PodId { get; set; }
    public Pod Pod { get; set; } = null!;

    public int DomainId { get; set; }
    public Domain Domain { get; set; } = null!;
}
