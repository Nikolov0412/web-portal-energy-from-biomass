using BioEnergy.WebApi.Models;
using BioEnergy.WebApi.Services.EnergyProducts;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BioEnergy.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EnergyProductController : ControllerBase
    {
        private readonly IEnergyProductService _energyProductService;

        public EnergyProductController(IEnergyProductService energyProductService)
        {
            _energyProductService = energyProductService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<EnergyProduct>>> GetEnergyProducts()
        {
            var result = await _energyProductService.GetEnergyProductsAsync();
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<EnergyProduct>> GetEnergyProductById(Guid id)
        {
            var energyProduct = await _energyProductService.GetEnergyProductByIdAsync(id);

            if (energyProduct == null)
            {
                return NotFound();
            }

            return Ok(energyProduct);
        }

        [HttpPost]
        public async Task<ActionResult<EnergyProduct>> CreateEnergyProduct(EnergyProductDTO energyProductDTO)
        {
            var createdEnergyProduct = await _energyProductService.CreateEnergyProductAsync(energyProductDTO);
            return CreatedAtAction(nameof(GetEnergyProductById), new { id = createdEnergyProduct.Id }, createdEnergyProduct);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEnergyProduct(Guid id, EnergyProductDTO energyProductDTO)
        {
            var updatedEnergyProduct = await _energyProductService.UpdateEnergyProductAsync(id, energyProductDTO);

            if (updatedEnergyProduct == null)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEnergyProduct(Guid id)
        {
            var result = await _energyProductService.DeleteEnergyProductAsync(id);

            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
