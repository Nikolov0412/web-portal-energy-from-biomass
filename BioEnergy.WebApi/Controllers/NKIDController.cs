using BioEnergy.WebApi.Models;
using BioEnergy.WebApi.Services.NKIDs;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NKIDController : ControllerBase
    {
        private readonly INKIDService _nkidService;

        public NKIDController(INKIDService nkidService)
        {
            _nkidService = nkidService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<NKID>>> GetNKIDs()
        {
            try
            {
                var nkids = await _nkidService.GetNKIDsAsync();
                return Ok(nkids);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<NKID>> GetNKID(Guid id)
        {
            try
            {
                var nkid = await _nkidService.GetNKIDByIdAsync(id);
                if (nkid == null)
                {
                    return NotFound($"NKID with id {id} not found");
                }
                return Ok(nkid);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<ActionResult<NKID>> CreateNKID(NKIDDTO nkidDTO)
        {
            try
            {
                var createdNKID = await _nkidService.CreateNKIDAsync(nkidDTO);
                return CreatedAtAction(nameof(GetNKID), new { id = createdNKID.Id }, createdNKID);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateNKID(Guid id, NKIDDTO nkidDTO)
        {
            try
            {
                var updatedNKID = await _nkidService.UpdateNKIDAsync(id, nkidDTO);
                if (updatedNKID == null)
                {
                    return NotFound($"NKID with id {id} not found");
                }
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNKID(Guid id)
        {
            try
            {
                var result = await _nkidService.DeleteNKIDAsync(id);
                if (!result)
                {
                    return NotFound($"NKID with id {id} not found");
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
