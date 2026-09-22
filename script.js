document.addEventListener('DOMContentLoaded', () => {

    // 1. Manejo del Formulario de Pre-Pedido a WhatsApp
    const preorderForm = document.getElementById('preorder-form');

    if (preorderForm) {
        preorderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Captura de campos
            const tipoArco = document.getElementById('tipo-arco').value;
            const largo = document.getElementById('largo').value;
            const hilos = document.getElementById('hilos').value || 'No especificado';
            const detalles = document.getElementById('detalles').value || 'Sin detalles adicionales';

            // Armado del mensaje para WhatsApp de Piero
            const mensaje = `Hola Piero! Quiero hacer un pre-pedido de cuerda a medida:%0A%0A` +
                `*Tipo de Arco:* ${encodeURIComponent(tipoArco)}%0A` +
                `*Largo:* ${encodeURIComponent(largo)}%0A` +
                `*Hilos / Libraje:* ${encodeURIComponent(hilos)}%0A` +
                `*Detalles / Colores:* ${encodeURIComponent(detalles)}`;

            const numeroPiero = '5492616550827';

            // Redirección directa a WhatsApp
            window.open(`https://wa.me/${numeroPiero}?text=${mensaje}`, '_blank');
        });
    }

    // 2. Modales Interactivos para Cuerdas Populares
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const modals = document.querySelectorAll('.modal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const targetModal = document.getElementById(modalId);
            if (targetModal) {
                targetModal.style.display = 'flex';
            }
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // 3. Acordeón para FAQs
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isOpen = faqItem.classList.contains('active');

            // Cierra todos los demás
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const icon = item.querySelector('.faq-icon');
                if (icon) icon.textContent = '+';
            });

            // Si no estaba abierto, abre este
            if (!isOpen) {
                faqItem.classList.add('active');
                const icon = faqItem.querySelector('.faq-icon');
                if (icon) icon.textContent = '−';
            }
        });
    });
});