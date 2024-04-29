// ProductController.cs
using Microsoft.AspNetCore.Mvc;
using ShoppingCart.Models;

namespace ShoppingCart.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            var products = new[]
            {
                new Product { Id = 1, Name = "Producto 1", Price = 10.00m },
                new Product { Id = 2, Name = "Producto 2", Price = 20.00m },
                new Product { Id = 3, Name = "Producto 3", Price = 30.00m }
            };

            return View(products);
        }
    }
}
