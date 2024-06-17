namespace BioEnergy.WebApi.Models
{
    public class NKID
    {
        public Guid Id { get; set; }
        public string Category { get; set; }
        public string GroupKID { get; set; }
        public string Sector { get; set; }
    }

    public class NKIDDTO
    {
        public string Category { get; set; }
        public string GroupKID { get; set; }
        public string Sector { get; set; }
    }
}