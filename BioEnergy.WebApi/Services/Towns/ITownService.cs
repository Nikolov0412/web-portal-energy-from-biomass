using BioEnergy.WebApi.Models;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Services.Towns
{
    public interface ITownService
    {
        public Task<IEnumerable<Town>> GetTownsAsync();
        public Task<Town> GetTownByIdAsync(Guid id);
        public Task<Town> CreateTownAsync(TownDTO townDTO);
        public Task<Town> UpdateTownAsync(Guid id, TownDTO townDTO);
        public Task<bool> DeleteTownAsync(Guid id);
    }

}