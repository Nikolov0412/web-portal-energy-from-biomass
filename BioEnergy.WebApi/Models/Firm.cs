namespace BioEnergy.WebApi.Models
{
    public class Firm
    {
        public Guid Id { get; set; }
        public int EIK { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public Town Town { get; set; }
        public string Email { get; set; }
        public DateTime StartYear { get; set; }
        public DateTime? EndYear { get; set; }
        public string Status { get; set; }
    }

    public class FirmDTO
    {
        public int EIK { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public Town Town { get; set; }
        public string Email { get; set; }
        public DateTime StartYear { get; set; }
        public DateTime? EndYear { get; set; }
        public string Status { get; set; }
    }
}
