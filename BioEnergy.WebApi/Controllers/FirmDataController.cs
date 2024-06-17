using BioEnergy.WebApi.Models;
using BioEnergy.WebApi.Services.FirmsData;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FirmDataController : ControllerBase
    {
        private readonly IFirmDataService _firmDataService;

        public FirmDataController(IFirmDataService firmDataService)
        {
            _firmDataService = firmDataService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<FirmData>>> GetFirmData()
        {
            var result = await _firmDataService.GetFirmDataAsync();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<FirmData>> GetFirmDataById(Guid id)
        {
            var firmData = await _firmDataService.GetFirmDataByIdAsync(id);

            if (firmData == null)
            {
                return NotFound();
            }

            return Ok(firmData);
        }

        [HttpPost]
        public async Task<ActionResult<FirmData>> CreateFirmData(FirmDataDTO firmDataDTO)
        {
            var createdFirmData = await _firmDataService.CreateFirmDataAsync(firmDataDTO);
            return CreatedAtAction(nameof(GetFirmDataById), new { id = createdFirmData.Id }, createdFirmData);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFirmData(Guid id, FirmDataDTO firmDataDTO)
        {
            var updatedFirmData = await _firmDataService.UpdateFirmDataAsync(id, firmDataDTO);

            if (updatedFirmData == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFirmData(Guid id)
        {
            var result = await _firmDataService.DeleteFirmDataAsync(id);

            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
