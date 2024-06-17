namespace BioEnergy.WebApi.Models
{
    public class PowerMeasure
    {
        public Guid Id { get; set; }
        public string Unit { get; set; }
        public string Description { get; set; }
    }
   
    public class PowerMeasureDTO
    {
        public string Unit { get; set; }
        public string Description { get; set; }
    }
}
