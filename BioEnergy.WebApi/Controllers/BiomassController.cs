using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BioEnergy.WebApi.Models;
using BioEnergy.WebApi.Services.Biomasses;

namespace BioEnergy.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BiomassController : ControllerBase
    {
        private readonly IBiomassService _biomassService;

        public BiomassController(IBiomassService biomassService)
        {
            _biomassService = biomassService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Biomass>>> GetBiomasses()
        {
            try
            {
                var biomasses = await _biomassService.GetBiomassesAsync();
                return Ok(biomasses);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Biomass>> GetBiomass(Guid id)
        {
            try
            {
                var biomass = await _biomassService.GetBiomassByIdAsync(id);
                if (biomass == null)
                {
                    return NotFound($"Biomass with id {id} not found");
                }
                return Ok(biomass);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Biomass>> CreateBiomass(BiomassDTO biomassDTO)
        {
            try
            {
                var createdBiomass = await _biomassService.CreateBiomassAsync(biomassDTO);
                return CreatedAtAction(nameof(GetBiomass), new { id = createdBiomass.Id }, createdBiomass);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateBiomass(Guid id, BiomassDTO biomassDTO)
        {
            try
            {
                var updatedBiomass = await _biomassService.UpdateBiomassAsync(id, biomassDTO);
                if (updatedBiomass == null)
                {
                    return NotFound($"Biomass with id {id} not found");
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBiomass(Guid id)
        {
            try
            {
                var result = await _biomassService.DeleteBiomassAsync(id);
                if (!result)
                {
                    return NotFound($"Biomass with id {id} not found");
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
