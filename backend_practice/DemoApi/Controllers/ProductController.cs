using DemoApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace DemoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        private static List<Product> Products = new()
        {
            new Product { Id = 1, Name = "Laptop" },
            new Product { Id = 2, Name = "Mobile" }
        };

        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok(Products);
        }

        [HttpGet("{id}")]
        public IActionResult GetProductById(int id)
        {
            var product = Products.FirstOrDefault(x => x.Id == id);

            if (product == null)
            {
                return NotFound($"Product with ID {id} not found");
            }

            return Ok(product);
        }

        [HttpPost]
        public IActionResult PostProduct(Product product)
        {
            product.Id = Products.Max(x => x.Id) + 1;
            Products.Add(product);

            return CreatedAtAction(nameof(GetProductById), new { id = product.Id }, product);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Product updatedProduct)
        {
            var product = Products.FirstOrDefault(x => x.Id == id);

            if (product == null)
                return NotFound($"Product with ID {id} not found");

            product.Name = updatedProduct.Name;

            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var product = Products.FirstOrDefault(x => x.Id == id);

            if (product == null)
                return NotFound($"Product with ID {id} not found");

            Products.Remove(product);

            return Ok($"Product with ID {id} deleted");
        }
    }
}
