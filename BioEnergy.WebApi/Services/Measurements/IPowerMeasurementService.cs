using BioEnergy.WebApi.Models;


namespace BioEnergy.WebApi.Services.Measurements
{
    public interface IPowerMeasurementService
    {
        Task<IEnumerable<PowerMeasure>> GetPowerMeasuresAsync();
        Task<PowerMeasure> GetPowerMeasureByIdAsync(Guid id);
        Task<PowerMeasure> CreatePowerMeasureAsync(PowerMeasureDTO powerMeasureDTO);
        Task<PowerMeasure> UpdatePowerMeasureAsync(Guid id, PowerMeasureDTO powerMeasureDTO);
        Task<bool> DeletePowerMeasureAsync(Guid id);
    }
}
