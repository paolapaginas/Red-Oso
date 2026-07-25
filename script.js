let carrito = [];

// Agregar al carrito
document.querySelectorAll('.btn-agregar').forEach((boton) => {
    boton.addEventListener('click', (e) => {
        const producto = e.target.closest('.producto');
        const id = producto.dataset.id;
        const nombre = producto.querySelector('h2').textContent;
        const precio = producto.dataset.precio;

        carrito.push({ id, nombre, precio });
        alert(`${nombre} añadido al carrito.`);
    });
});

// Finalizar compra
document.getElementById('finalizar-compra').addEventListener('click', () => {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    let mensaje = 'Hola, quiero realizar el siguiente pedido:\n\n';
    carrito.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
    });

    const total = carrito.reduce((sum, prod) => sum + parseFloat(prod.precio), 0);
    mensaje += `\nTotal: $${total}`;

    const url = `https://wa.me/1234567890?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});
