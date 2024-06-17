using BioEnergy.WebApi.Models;

namespace BioEnergy.WebApi.Services.NKIDs
{
    public interface INKIDService
    {
        Task<IEnumerable<NKID>> GetNKIDsAsync();
        Task<NKID> GetNKIDByIdAsync(Guid id);
        Task<NKID> CreateNKIDAsync(NKIDDTO nkidDTO);
        Task<NKID> UpdateNKIDAsync(Guid id, NKIDDTO nkidDTO);
        Task<bool> DeleteNKIDAsync(Guid id);
    }
}
