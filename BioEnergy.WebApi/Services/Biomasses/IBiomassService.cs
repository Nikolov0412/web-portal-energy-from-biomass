using BioEnergy.WebApi.Models;

namespace BioEnergy.WebApi.Services.Biomasses
{
    public interface IBiomassService
    {
        public Task<IEnumerable<Biomass>> GetBiomassesAsync();
        public Task<Biomass> GetBiomassByIdAsync(Guid id);
        public Task<Biomass> CreateBiomassAsync(BiomassDTO biomassDTO);
        public Task<Biomass> UpdateBiomassAsync(Guid id, BiomassDTO biomassDTO);
        public Task<bool> DeleteBiomassAsync(Guid id);
    }
}
