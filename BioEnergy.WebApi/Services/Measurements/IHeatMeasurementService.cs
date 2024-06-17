using BioEnergy.WebApi.Models;


namespace BioEnergy.WebApi.Services.Measurements
{
    public interface IHeatMeasurementService
    {
        public Task<IEnumerable<HeatMeasure>> GetHeatMeasuresAsync();
        Task<HeatMeasure> GetHeatMeasureByIdAsync(Guid id);
        Task<HeatMeasure> CreateHeatMeasureAsync(HeatMeasureDTO heatMeasureDTO);
        Task<HeatMeasure> UpdateHeatMeasureAsync(Guid id, HeatMeasureDTO heatMeasureDTO);
        Task<bool> DeleteHeatMeasureAsync(Guid id);
    }
}
