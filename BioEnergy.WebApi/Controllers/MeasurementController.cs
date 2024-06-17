using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BioEnergy.WebApi;
using BioEnergy.WebApi.Models;
using BioEnergy.WebApi.Enums;
using BioEnergy.WebApi.Services.Measurements;

namespace BioEnergy.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeasurementController : ControllerBase
    {
        private readonly IPowerMeasurementService powerMeasurementService;
        private readonly IHeatMeasurementService heatMeasurementService;

        public MeasurementController(IPowerMeasurementService powerMeasurementService,
                                     IHeatMeasurementService heatMeasurementService)
        {
            this.heatMeasurementService = heatMeasurementService;
            this.powerMeasurementService = powerMeasurementService;
        }

        [HttpGet("Heat")]
        public async Task<ActionResult<IEnumerable<HeatMeasure>>> GetHeatMeasures()
        {
            var result = await this.heatMeasurementService.GetHeatMeasuresAsync();

            return Ok(result);
        }

        [HttpGet("Heat/{id}")]
        public async Task<ActionResult<HeatMeasure>> GetHeatMeasureById(Guid id)
        {
            var heatMeasure = await this.heatMeasurementService.GetHeatMeasureByIdAsync(id);

            if (heatMeasure == null)
            {
                return NotFound();
            }

            return Ok(heatMeasure);
        }

        [HttpPut("Heat/{id}")]
        public async Task<IActionResult> UpdateHeatMeasure(Guid id, HeatMeasureDTO heatMeasureDTO)
        {
            var updatedHeatMeasure = await this.heatMeasurementService.UpdateHeatMeasureAsync(id, heatMeasureDTO);

            if (updatedHeatMeasure == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("Heat/{id}")]
        public async Task<IActionResult> DeleteHeatMeasure(Guid id)
        {
            var result = await this.heatMeasurementService.DeleteHeatMeasureAsync(id);

            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpPost("Heat")]
        public async Task<ActionResult<HeatMeasure>> CreateHeatMeasure(HeatMeasureDTO heatMeasureDTO)
        {
            var createdHeatMeasure = await this.heatMeasurementService.CreateHeatMeasureAsync(heatMeasureDTO);
            return CreatedAtAction(nameof(GetHeatMeasureById), new { id = createdHeatMeasure.Id }, createdHeatMeasure);
        }

        [HttpGet("Power")]
        public async Task<ActionResult<IEnumerable<PowerMeasure>>> GetPowerMeasures()
        {
            var result = await this.powerMeasurementService.GetPowerMeasuresAsync();

            return Ok(result);
        }

        [HttpGet("Power/{id}")]
        public async Task<ActionResult<PowerMeasure>> GetPowerMeasureById(Guid id)
        {
            var powerMeasure = await this.powerMeasurementService.GetPowerMeasureByIdAsync(id);

            if (powerMeasure == null)
            {
                return NotFound();
            }

            return Ok(powerMeasure);
        }

        [HttpPut("Power/{id}")]
        public async Task<IActionResult> UpdatePowerMeasure(Guid id, PowerMeasureDTO powerMeasureDTO)
        {
            var updatedPowerMeasure = await this.powerMeasurementService.UpdatePowerMeasureAsync(id, powerMeasureDTO);

            if (updatedPowerMeasure == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("Power/{id}")]
        public async Task<IActionResult> DeletePowerMeasure(Guid id)
        {
            var result = await this.powerMeasurementService.DeletePowerMeasureAsync(id);

            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpPost("Power")]
        public async Task<ActionResult<PowerMeasure>> CreatePowerMeasure(PowerMeasureDTO powerMeasureDTO)
        {
            var createdPowerMeasure = await this.powerMeasurementService.CreatePowerMeasureAsync(powerMeasureDTO);
            return CreatedAtAction(nameof(GetPowerMeasureById), new { id = createdPowerMeasure.Id }, createdPowerMeasure);
        }

    }
}
