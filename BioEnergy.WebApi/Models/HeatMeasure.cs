namespace BioEnergy.WebApi.Models
{
    public class HeatMeasure
    {
        public Guid Id { get; set; }
        public string Unit { get; set; }
        public string Description { get; set; }
    }
    public class  HeatMeasureDTO
    {
        public string Unit { get; set; }
        public string Description { get; set; }
    }
}