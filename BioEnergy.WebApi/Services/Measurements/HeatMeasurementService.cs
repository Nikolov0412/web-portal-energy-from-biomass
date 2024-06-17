using BioEnergy.WebApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Services.Measurements
{
    internal class HeatMeasurementService : IHeatMeasurementService
    {
        private readonly BioEnergyDbContext _context;

        public HeatMeasurementService(BioEnergyDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<HeatMeasure>> GetHeatMeasuresAsync()
        {
            return await _context.HeatMeasures.ToListAsync();
        }

        public async Task<HeatMeasure> GetHeatMeasureByIdAsync(Guid id)
        {
            return await _context.HeatMeasures.FindAsync(id);
        }

        public async Task<HeatMeasure> CreateHeatMeasureAsync(HeatMeasureDTO heatMeasureDTO)
        {
            var heatMeasure = new HeatMeasure
            {
                Id = Guid.NewGuid(),
                Unit = heatMeasureDTO.Unit,
                Description = heatMeasureDTO.Description
            };

            _context.HeatMeasures.Add(heatMeasure);
            await _context.SaveChangesAsync();

            return heatMeasure;
        }

        public async Task<HeatMeasure> UpdateHeatMeasureAsync(Guid id, HeatMeasureDTO heatMeasureDTO)
        {
            var heatMeasure = await _context.HeatMeasures.FindAsync(id);

            if (heatMeasure == null)
                return null;

            heatMeasure.Unit = heatMeasureDTO.Unit;
            heatMeasure.Description = heatMeasureDTO.Description;

            await _context.SaveChangesAsync();

            return heatMeasure;
        }

        public async Task<bool> DeleteHeatMeasureAsync(Guid id)
        {
            var heatMeasure = await _context.HeatMeasures.FindAsync(id);

            if (heatMeasure == null)
                return false;

            _context.HeatMeasures.Remove(heatMeasure);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
