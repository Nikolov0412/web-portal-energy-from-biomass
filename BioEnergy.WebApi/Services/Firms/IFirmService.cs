using BioEnergy.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Services.Firms
{
    public interface IFirmService
    {
        Task<IEnumerable<Firm>> GetFirmsAsync();
        Task<Firm> GetFirmByIdAsync(Guid id);
        Task<Firm> CreateFirmAsync(FirmDTO firmDTO);
        Task<Firm> UpdateFirmAsync(Guid id, FirmDTO firmDTO);
        Task<bool> DeleteFirmAsync(Guid id);
    }
}
