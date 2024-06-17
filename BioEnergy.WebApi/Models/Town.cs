namespace BioEnergy.WebApi.Models
{
    public class Town
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Municipality { get; set; }
        public float Latitude { get; set; }
        public float Longtitude { get; set; }
        public int EKATTE { get; set; }

    }

    public class TownDTO
    {
        public string Name { get; set; }
        public string Municipality { get; set; }
        public float Latitude { get; set; }
        public float Longtitude { get; set; }
        public int EKATTE { get; set; }
    }

}
