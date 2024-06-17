
namespace BioEnergy.WebApi.Models
{
    public class EnergyProduct
    {
        public Guid Id { get; set; }
        public string CNCode { get; set; }
        public string BulName { get; set; }
        public string Name { get; set; }
        public bool Biotech { get; set; }
        public string Description { get; set; }

    }
    
    public class EnergyProductDTO
    {
        public string CNCode { get; set; }
        public string BulName { get; set; }
        public string Name { get; set; }
        public bool Biotech { get; set; }
        public string Description { get; set; }
    }
}