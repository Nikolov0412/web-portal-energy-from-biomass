using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BioEnergy.WebApi.Models;

namespace BioEnergy.WebApi.Services.Firms
{
    public class FirmService : IFirmService
    {
        private readonly BioEnergyDbContext _context;

        public FirmService(BioEnergyDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Firm>> GetFirmsAsync()
        {
            return await _context.Firms
                .Include(f => f.Town) // Ensure Town is included
                .ToListAsync();
        }

        public async Task<Firm> GetFirmByIdAsync(Guid id)
        {
            return await _context.Firms
                .Include(f => f.Town) // Ensure Town is included
                .FirstOrDefaultAsync(f => f.Id == id);
        }
        public async Task<Firm> CreateFirmAsync(FirmDTO firmDTO)
        {
            var firm = new Firm
            {
                Id = Guid.NewGuid(),
                EIK = firmDTO.EIK,
                Name = firmDTO.Name,
                Description = firmDTO.Description,
                Address = firmDTO.Address,
                Email = firmDTO.Email,
                StartYear = firmDTO.StartYear,
                EndYear = firmDTO.EndYear,
                Status = firmDTO.Status
            };

            var existingTown = await _context.Towns.FindAsync(firmDTO.Town.Id);
            if (existingTown != null)
            {
                // Attach the existing town to avoid duplicate key insertion
                _context.Entry(existingTown).State = EntityState.Unchanged;
                firm.Town = existingTown;
            }
            else
            {
                firm.Town = firmDTO.Town;
            }

            _context.Firms.Add(firm);
            await _context.SaveChangesAsync();

            return firm;
        }

        public async Task<Firm> UpdateFirmAsync(Guid id, FirmDTO firmDTO)
        {
            var firm = await _context.Firms.FindAsync(id);
            if (firm == null) throw new Exception("Firm not found");

            var existingTown = await _context.Towns.FindAsync(firmDTO.Town.Id);
            if (existingTown != null)
            {
                // Attach the existing town to avoid duplicate key insertion
                _context.Entry(existingTown).State = EntityState.Unchanged;
                firm.Town = existingTown;
            }
            else
            {
                firm.Town = firmDTO.Town;
            }

            firm.EIK = firmDTO.EIK;
            firm.Name = firmDTO.Name;
            firm.Description = firmDTO.Description;
            firm.Address = firmDTO.Address;
            firm.Email = firmDTO.Email;
            firm.StartYear = firmDTO.StartYear;
            firm.EndYear = firmDTO.EndYear;
            firm.Status = firmDTO.Status;

            await _context.SaveChangesAsync();

            return firm;
        }

        public async Task<bool> DeleteFirmAsync(Guid id)
        {
            var firm = await _context.Firms.FindAsync(id);
            if (firm == null) throw new Exception("Firm not found");

            _context.Firms.Remove(firm);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
