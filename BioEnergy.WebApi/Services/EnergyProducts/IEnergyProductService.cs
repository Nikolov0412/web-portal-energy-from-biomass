using BioEnergy.WebApi.Models;

namespace BioEnergy.WebApi.Services.EnergyProducts
{
    public interface IEnergyProductService
    {
        public Task<IEnumerable<EnergyProduct>> GetEnergyProductsAsync();
        Task<EnergyProduct> GetEnergyProductByIdAsync(Guid id);
        Task<EnergyProduct> CreateEnergyProductAsync(EnergyProductDTO energyProductDTO);
        Task<EnergyProduct> UpdateEnergyProductAsync(Guid id, EnergyProductDTO energyProductDTO);
        Task<bool> DeleteEnergyProductAsync(Guid id);
    }
}
