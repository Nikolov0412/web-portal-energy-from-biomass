using BioEnergy.WebApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Services.NKIDs
{
    internal class NKIDService : INKIDService
    {
        private readonly BioEnergyDbContext _context;

        public NKIDService(BioEnergyDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<NKID>> GetNKIDsAsync()
        {
            return await _context.NKIDs.ToListAsync();
        }

        public async Task<NKID> GetNKIDByIdAsync(Guid id)
        {
            return await _context.NKIDs.FindAsync(id);
        }

        public async Task<NKID> CreateNKIDAsync(NKIDDTO nkidDTO)
        {
            var nkid = new NKID
            {
                Id = Guid.NewGuid(),
                Category = nkidDTO.Category,
                GroupKID = nkidDTO.GroupKID,
                Sector = nkidDTO.Sector
            };

            _context.NKIDs.Add(nkid);
            await _context.SaveChangesAsync();

            return nkid;
        }

        public async Task<NKID> UpdateNKIDAsync(Guid id, NKIDDTO nkidDTO)
        {
            var nkid = await _context.NKIDs.FindAsync(id);

            if (nkid == null)
            {
                return null; 
            }

            nkid.Category = nkidDTO.Category;
            nkid.GroupKID = nkidDTO.GroupKID;
            nkid.Sector = nkidDTO.Sector;

            await _context.SaveChangesAsync();

            return nkid;
        }

        public async Task<bool> DeleteNKIDAsync(Guid id)
        {
            var nkid = await _context.NKIDs.FindAsync(id);

            if (nkid == null)
            {
                return false; 
            }

            _context.NKIDs.Remove(nkid);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
