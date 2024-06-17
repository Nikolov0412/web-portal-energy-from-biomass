namespace BioEnergy.WebApi.Models
{
    public class FirmData
    {
        public Guid Id { get; set; }
        public Firm Firm { get; set; }
        public string FirmName { get; set; }
        public EnergyProduct Product { get; set; }
        public NKID NKID { get; set; }
        public Biomass Source { get; set; }
        public double Power { get; set; }
        public PowerMeasure Measure { get; set; }
        public int Quantity { get; set; }
        public HeatMeasure QuantityMeasurement { get; set; }
        public int HeatQuantity { get; set; }
        public string Certification { get; set; }
    }

    public class FirmDataDTO
    {
        public Firm Firm { get; set; }
        public string FirmName { get; set; }
        public EnergyProduct Product { get; set; }
        public NKID NKID { get; set; }
        public Biomass Source { get; set; }
        public double Power { get; set; }
        public PowerMeasure Measure { get; set; }
        public int Quantity { get; set; }
        public HeatMeasure QuantityMeasurement { get; set; }
        public int HeatQuantity { get; set; }
        public string Certification { get; set; }
    }
}
