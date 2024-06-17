using BioEnergy.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Services.FirmsData
{
    public interface IFirmDataService
    {
        Task<IEnumerable<FirmData>> GetFirmDataAsync();
        Task<FirmData> GetFirmDataByIdAsync(Guid id);
        Task<FirmData> CreateFirmDataAsync(FirmDataDTO firmDataDTO);
        Task<FirmData> UpdateFirmDataAsync(Guid id, FirmDataDTO firmDataDTO);
        Task<bool> DeleteFirmDataAsync(Guid id);
    }
}
