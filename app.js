// Array para almacenar los productos en el carrito
let cart = [];

// Función para agregar un producto al carrito
function addItem() {
    const product = {
        id: Math.floor(Math.random() * 1000), // ID aleatorio para el producto
        name: "Producto " + cart.length,      // Nombre del producto
        price: Math.random() * 100            // Precio aleatorio entre 0 y 100
    };
    cart.push(product); // Agregar el producto al carrito
    renderCart();       // Renderizar el carrito
}

// Función para renderizar el carrito en el DOM
function renderCart() {
    const cartElement = document.getElementById("cart");
    cartElement.innerHTML = ""; // Limpiar el contenido anterior del carrito
    cart.forEach(product => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `<p>${product.name} - $${product.price.toFixed(2)}</p>`;
        cartElement.appendChild(productElement);
    });
}
