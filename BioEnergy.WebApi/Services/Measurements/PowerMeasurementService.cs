using BioEnergy.WebApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Services.Measurements
{
    internal class PowerMeasurementService : IPowerMeasurementService
    {
        private readonly BioEnergyDbContext _context;

        public PowerMeasurementService(BioEnergyDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<PowerMeasure>> GetPowerMeasuresAsync()
        {
            return await _context.PowerMeasures.ToListAsync();
        }

        public async Task<PowerMeasure> GetPowerMeasureByIdAsync(Guid id)
        {
            return await _context.PowerMeasures.FindAsync(id);
        }

        public async Task<PowerMeasure> CreatePowerMeasureAsync(PowerMeasureDTO powerMeasureDTO)
        {
            var powerMeasure = new PowerMeasure
            {
                Id = Guid.NewGuid(),
                Unit = powerMeasureDTO.Unit,
                Description = powerMeasureDTO.Description
            };

            _context.PowerMeasures.Add(powerMeasure);
            await _context.SaveChangesAsync();

            return powerMeasure;
        }

        public async Task<PowerMeasure> UpdatePowerMeasureAsync(Guid id, PowerMeasureDTO powerMeasureDTO)
        {
            var powerMeasure = await _context.PowerMeasures.FindAsync(id);

            if (powerMeasure == null)
                return null;

            powerMeasure.Unit = powerMeasureDTO.Unit;
            powerMeasure.Description = powerMeasureDTO.Description;

            await _context.SaveChangesAsync();

            return powerMeasure;
        }

        public async Task<bool> DeletePowerMeasureAsync(Guid id)
        {
            var powerMeasure = await _context.PowerMeasures.FindAsync(id);

            if (powerMeasure == null)
                return false;

            _context.PowerMeasures.Remove(powerMeasure);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
