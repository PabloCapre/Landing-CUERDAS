document.addEventListener('DOMContentLoaded', () => {
    const preorderForm = document.getElementById('preorder-form');

    if (preorderForm) {
        preorderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Captura de campos
            const tipoArco = document.getElementById('tipo-arco').value;
            const largo = document.getElementById('largo').value;
            const hilos = document.getElementById('hilos').value || 'No especificado';
            const detalles = document.getElementById('detalles').value || 'Sin detalles adicionales';

            // Armado del mensaje para WhatsApp
            const mensaje = `Hola! Quiero hacer un pre-pedido de cuerda de arco:%0A%0A` +
                `*Tipo de Arco:* ${encodeURIComponent(tipoArco)}%0A` +
                `*Largo:* ${encodeURIComponent(largo)}%0A` +
                `*Hilos / Uso:* ${encodeURIComponent(hilos)}%0A` +
                `*Detalles / Colores:* ${encodeURIComponent(detalles)}`;

            // Número de teléfono de destino (reemplazar por el número real)
            const numeroTelefono = '5490000000000';

            // Redirección directa a WhatsApp
            window.open(`https://wa.me/${numeroTelefono}?text=${mensaje}`, '_blank');
        });
    }
});