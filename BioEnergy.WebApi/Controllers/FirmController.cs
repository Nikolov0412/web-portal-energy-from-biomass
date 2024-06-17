using BioEnergy.WebApi.Models;
using BioEnergy.WebApi.Services.Firms;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FirmController : ControllerBase
    {
        private readonly IFirmService _firmService;

        public FirmController(IFirmService firmService)
        {
            _firmService = firmService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Firm>>> GetFirms()
        {
            var result = await _firmService.GetFirmsAsync();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Firm>> GetFirmById(Guid id)
        {
            var firm = await _firmService.GetFirmByIdAsync(id);

            if (firm == null)
            {
                return NotFound();
            }

            return Ok(firm);
        }

        [HttpPost]
        public async Task<ActionResult<Firm>> CreateFirm(FirmDTO firmDTO)
        {
            var createdFirm = await _firmService.CreateFirmAsync(firmDTO);
            return CreatedAtAction(nameof(GetFirmById), new { id = createdFirm.Id }, createdFirm);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFirm(Guid id, FirmDTO firmDTO)
        {
            var updatedFirm = await _firmService.UpdateFirmAsync(id, firmDTO);

            if (updatedFirm == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFirm(Guid id)
        {
            var result = await _firmService.DeleteFirmAsync(id);

            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
