using BioEnergy.WebApi.Models;
using BioEnergy.WebApi.Services.Towns;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TownController : ControllerBase
    {
        private readonly ITownService _townService;

        public TownController(ITownService townService)
        {
            _townService = townService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Town>>> GetTowns()
        {
            try
            {
                var towns = await _townService.GetTownsAsync();
                return Ok(towns);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Town>> GetTown(Guid id)
        {
            try
            {
                var town = await _townService.GetTownByIdAsync(id);
                if (town == null)
                {
                    return NotFound($"Town with id {id} not found");
                }
                return Ok(town);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Town>> CreateTown(TownDTO townDTO)
        {
            try
            {
                var createdTown = await _townService.CreateTownAsync(townDTO);
                return CreatedAtAction(nameof(GetTown), new { id = createdTown.Id }, createdTown);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTown(Guid id, TownDTO townDTO)
        {
            try
            {
                var updatedTown = await _townService.UpdateTownAsync(id, townDTO);
                if (updatedTown == null)
                {
                    return NotFound($"Town with id {id} not found");
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTown(Guid id)
        {
            try
            {
                var result = await _townService.DeleteTownAsync(id);
                if (!result)
                {
                    return NotFound($"Town with id {id} not found");
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
