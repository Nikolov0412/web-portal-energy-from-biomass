using BioEnergy.WebApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Services.FirmsData
{
    internal class FirmDataService : IFirmDataService
    {
        private readonly BioEnergyDbContext _context;

        public FirmDataService(BioEnergyDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FirmData>> GetFirmDataAsync()
        {
            return await _context.FirmDatas
                .Include(fd => fd.Firm)
                .Include(fd => fd.Product)
                .Include(fd => fd.NKID)
                .Include(fd => fd.Source)
                .Include(fd => fd.Measure)
                .Include(fd => fd.QuantityMeasurement)
                .ToListAsync();
        }



        public async Task<FirmData> GetFirmDataByIdAsync(Guid id)
        {
            return await _context.FirmDatas
                .Include(fd => fd.Firm)
                .Include(fd => fd.Product)
                .Include(fd => fd.NKID)
                .Include(fd => fd.Source)
                .Include(fd => fd.Measure)
                .Include(fd => fd.QuantityMeasurement)
                .FirstOrDefaultAsync(fd => fd.Id == id);
        }


        public async Task<FirmData> CreateFirmDataAsync(FirmDataDTO firmDataDTO)
        {
            var firmData = new FirmData
            {
                Id = Guid.NewGuid(),
                Firm = await AttachEntityAsync<Firm>(firmDataDTO.Firm.Id),
                FirmName = firmDataDTO.FirmName,
                Product = await AttachEntityAsync<EnergyProduct>(firmDataDTO.Product.Id),
                NKID = await AttachEntityAsync<NKID>(firmDataDTO.NKID.Id),
                Source = await AttachEntityAsync<Biomass>(firmDataDTO.Source.Id),
                Power = firmDataDTO.Power,
                Measure = await AttachEntityAsync<PowerMeasure>(firmDataDTO.Measure.Id),
                Quantity = firmDataDTO.Quantity,
                QuantityMeasurement = await AttachEntityAsync<HeatMeasure>(firmDataDTO.QuantityMeasurement.Id),
                HeatQuantity = firmDataDTO.HeatQuantity,
                Certification = firmDataDTO.Certification
            };

            _context.FirmDatas.Add(firmData);
            await _context.SaveChangesAsync();

            return firmData;
        }

        private async Task<T> AttachEntityAsync<T>(Guid id) where T : class
        {
            var entity = await _context.Set<T>().FindAsync(id);
            if (entity != null)
            {
                _context.Entry(entity).State = EntityState.Unchanged;
            }
            return entity;
        }


        public async Task<FirmData> UpdateFirmDataAsync(Guid id, FirmDataDTO firmDataDTO)
        {
            var firmData = await _context.FirmDatas.FindAsync(id);
            if (firmData == null) throw new Exception("Firm data not found");

            firmData.Firm = await AttachEntityAsync<Firm>(firmDataDTO.Firm.Id);
            firmData.FirmName = firmDataDTO.FirmName;
            firmData.Product = await AttachEntityAsync<EnergyProduct>(firmDataDTO.Product.Id);
            firmData.NKID = await AttachEntityAsync<NKID>(firmDataDTO.NKID.Id);
            firmData.Source = await AttachEntityAsync<Biomass>(firmDataDTO.Source.Id);
            firmData.Power = firmDataDTO.Power;
            firmData.Measure = await AttachEntityAsync<PowerMeasure>(firmDataDTO.Measure.Id);
            firmData.Quantity = firmDataDTO.Quantity;
            firmData.QuantityMeasurement = await AttachEntityAsync<HeatMeasure>(firmDataDTO.QuantityMeasurement.Id);
            firmData.HeatQuantity = firmDataDTO.HeatQuantity;
            firmData.Certification = firmDataDTO.Certification;

            await _context.SaveChangesAsync();


            return firmData;
        }

        public async Task<bool> DeleteFirmDataAsync(Guid id)
        {
            var firmData = await _context.FirmDatas.FindAsync(id);

            if (firmData == null)
                return false;

            _context.FirmDatas.Remove(firmData);
            await _context.SaveChangesAsync();

            return true;
        }
    }
}
