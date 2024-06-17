using BioEnergy.WebApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Services.Towns
{
    internal class TownService : ITownService
    {
        private readonly BioEnergyDbContext _context;

        public TownService(BioEnergyDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Town>> GetTownsAsync()
        {
            return await _context.Towns.ToListAsync();
        }

        public async Task<Town> GetTownByIdAsync(Guid id)
        {
            return await _context.Towns.FindAsync(id);
        }

        public async Task<Town> CreateTownAsync(TownDTO townDTO)
        {
            var town = new Town
            {
                Id = Guid.NewGuid(),
                Name = townDTO.Name,
                Municipality = townDTO.Municipality,
                Latitude = townDTO.Latitude,
                Longtitude = townDTO.Longtitude,
                EKATTE = townDTO.EKATTE
            };

            _context.Towns.Add(town);
            await _context.SaveChangesAsync();

            return town;
        }

        public async Task<Town> UpdateTownAsync(Guid id, TownDTO townDTO)
        {
            var town = await _context.Towns.FindAsync(id);

            if (town == null)
            {
                return null; 
            }

            town.Name = townDTO.Name;
            town.Municipality = townDTO.Municipality;
            town.Latitude = townDTO.Latitude;
            town.Longtitude = townDTO.Longtitude;
            town.EKATTE = townDTO.EKATTE;

            await _context.SaveChangesAsync();

            return town;
        }

        public async Task<bool> DeleteTownAsync(Guid id)
        {
            var town = await _context.Towns.FindAsync(id);

            if (town == null)
            {
                return false;
            }

            _context.Towns.Remove(town);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
