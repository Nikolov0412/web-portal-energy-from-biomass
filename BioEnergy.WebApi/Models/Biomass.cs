
namespace BioEnergy.WebApi.Models
{
    public class Biomass
    {
        public Guid Id { get; set; }
        public string CNCode { get; set; }
        public string CPIDCode { get; set; }
        public string Name { get; set; }
        public string BulName { get; set; }
        public string Description { get; set; }
    }

    public class BiomassDTO
    {
        public string CNCode { get; set; }
        public string CPIDCode { get; set; }
        public string Name { get; set; }
        public string BulName { get; set; }
        public string Description { get; set; }
    }
}
