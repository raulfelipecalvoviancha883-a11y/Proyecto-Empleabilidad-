const productos = [
    {
        id: 1,
        nombre: "Xiaomi Redmi Note 15 5G",
        pantalla: "6.67\" AMOLED 120Hz",
        ram: "8 GB RAM",
        almacenamiento: "256 GB",
        precio: 299,
        imagen: "https://via.placeholder.com/200x200/1e293b/38bdf8?text=Redmi+Note+15"
    },
    {
        id: 2,
        nombre: "CrackPhone Alpha 5G",
        pantalla: "6.5\" Full HD+",
        ram: "6 GB RAM",
        almacenamiento: "128 GB",
        precio: 249,
        imagen: "https://via.placeholder.com/200x200/1e293b/4ade80?text=CrackPhone+Alpha"
    },
    {
        id: 3,
        nombre: "BetaMobile Pro X",
        pantalla: "6.7\" OLED",
        ram: "12 GB RAM",
        almacenamiento: "512 GB",
        precio: 499,
        imagen: "https://via.placeholder.com/200x200/1e293b/f59e0b?text=BetaMobile+Pro"
    },
    {
        id: 4,
        nombre: "DevPhone Ultra",
        pantalla: "6.8\" Dynamic AMOLED",
        ram: "16 GB RAM",
        almacenamiento: "1 TB",
        precio: 799,
        imagen: "https://via.placeholder.com/200x200/1e293b/ec4899?text=DevPhone+Ultra"
    }
];

let carritoCount = 0;

document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById("product-grid");

    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
            <h3 class="product-title">${producto.nombre}</h3>
            <p class="product-spec">📱 ${producto.pantalla}</p>
            <p class="product-spec">💾 ${producto.ram} | ${producto.almacenamiento}</p>
            <div class="product-price">$${producto.precio} USD</div>
            <button class="btn-add" onclick="agregarAlCarrito(${producto.id})">Añadir al Carrito</button>
        `;

        productGrid.appendChild(card);
    });
});

function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    carritoCount++;
    document.getElementById("cart-count").innerText = carritoCount;
    alert(`¡${producto.nombre} añadido al carrito! 🚀`);
}