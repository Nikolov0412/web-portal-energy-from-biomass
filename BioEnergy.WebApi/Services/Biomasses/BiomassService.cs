using BioEnergy.WebApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Services.Biomasses
{
    internal class BiomassService : IBiomassService
    {
        private readonly BioEnergyDbContext _context;

        public BiomassService(BioEnergyDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Biomass>> GetBiomassesAsync()
        {
            return await _context.Biomasses.ToListAsync();
        }

        public async Task<Biomass> GetBiomassByIdAsync(Guid id)
        {
            return await _context.Biomasses.FindAsync(id);
        }

        public async Task<Biomass> CreateBiomassAsync(BiomassDTO biomassDTO)
        {
            var biomass = new Biomass
            {
                Id = Guid.NewGuid(),
                CNCode = biomassDTO.CNCode,
                CPIDCode = biomassDTO.CPIDCode,
                Name = biomassDTO.Name,
                BulName = biomassDTO.BulName,
                Description = biomassDTO.Description
            };

            _context.Biomasses.Add(biomass);
            await _context.SaveChangesAsync();

            return biomass;
        }

        public async Task<Biomass> UpdateBiomassAsync(Guid id, BiomassDTO biomassDTO)
        {
            var biomass = await _context.Biomasses.FindAsync(id);

            if (biomass == null)
            {
                return null;
            }

            biomass.CNCode = biomassDTO.CNCode;
            biomass.CPIDCode = biomassDTO.CPIDCode;
            biomass.Name = biomassDTO.Name;
            biomass.BulName = biomassDTO.BulName;
            biomass.Description = biomassDTO.Description;

            await _context.SaveChangesAsync();

            return biomass;
        }

        public async Task<bool> DeleteBiomassAsync(Guid id)
        {
            var biomass = await _context.Biomasses.FindAsync(id);

            if (biomass == null)
            {
                return false;
            }

            _context.Biomasses.Remove(biomass);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
