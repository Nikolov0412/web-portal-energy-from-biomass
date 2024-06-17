using BioEnergy.WebApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Services.EnergyProducts
{
    internal class EnergyProductService : IEnergyProductService
    {
        private readonly BioEnergyDbContext _context;

        public EnergyProductService(BioEnergyDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<EnergyProduct>> GetEnergyProductsAsync()
        {
            return await _context.EnergyProducts.ToListAsync();
        }

        public async Task<EnergyProduct> GetEnergyProductByIdAsync(Guid id)
        {
            return await _context.EnergyProducts.FindAsync(id);
        }

        public async Task<EnergyProduct> CreateEnergyProductAsync(EnergyProductDTO energyProductDTO)
        {
            var energyProduct = new EnergyProduct
            {
                Id = Guid.NewGuid(),
                CNCode = energyProductDTO.CNCode,
                BulName = energyProductDTO.BulName,
                Name = energyProductDTO.Name,
                Biotech = energyProductDTO.Biotech,
                Description = energyProductDTO.Description
            };

            _context.EnergyProducts.Add(energyProduct);
            await _context.SaveChangesAsync();

            return energyProduct;
        }

        public async Task<EnergyProduct> UpdateEnergyProductAsync(Guid id, EnergyProductDTO energyProductDTO)
        {
            var energyProduct = await _context.EnergyProducts.FindAsync(id);

            if (energyProduct == null)
                return null;

            energyProduct.CNCode = energyProductDTO.CNCode;
            energyProduct.BulName = energyProductDTO.BulName;
            energyProduct.Name = energyProductDTO.Name;
            energyProduct.Biotech = energyProductDTO.Biotech;
            energyProduct.Description = energyProductDTO.Description;

            await _context.SaveChangesAsync();

            return energyProduct;
        }

        public async Task<bool> DeleteEnergyProductAsync(Guid id)
        {
            var energyProduct = await _context.EnergyProducts.FindAsync(id);

            if (energyProduct == null)
                return false;

            _context.EnergyProducts.Remove(energyProduct);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
