document.addEventListener('DOMContentLoaded', () => {

    // 1. Menú Hamburguesa Móvil
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cierra el menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Lógica Dinámica del Formulario de Pre-Pedido
    const tipoArcoSelect = document.getElementById('tipo-arco');
    const dynamicFields = document.getElementById('dynamic-fields');
    const preorderForm = document.getElementById('preorder-form');

    if (tipoArcoSelect && dynamicFields) {
        tipoArcoSelect.addEventListener('change', (e) => {
            const valor = e.target.value;
            if (valor.includes('Compuesto') || valor.includes('Ballesta')) {
                dynamicFields.style.display = 'block';
            } else {
                dynamicFields.style.display = 'none';
            }
        });
    }

    // Envío del Formulario a WhatsApp de Piero
    if (preorderForm) {
        preorderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const tipoArco = document.getElementById('tipo-arco').value;
            const unidadLargo = document.getElementById('unidad-largo').value;
            const largoValor = document.getElementById('largo-valor').value;
            const opcionHilos = document.getElementById('opcion-hilos').value;
            const libraje = document.getElementById('libraje').value;
            const colorPrimario = document.getElementById('color-primario').value;
            const colorSecundario = document.getElementById('color-secundario').value;
            const detalles = document.getElementById('detalles').value || 'Sin detalles adicionales';

            let camposExtra = '';
            if (tipoArco.includes('Compuesto') || tipoArco.includes('Ballesta')) {
                const marca = document.getElementById('marca-arco').value || 'No especificada';
                const modelo = document.getElementById('modelo-arco').value || 'No especificado';
                camposExtra = `*Marca:* ${encodeURIComponent(marca)}%0A*Modelo/Año:* ${encodeURIComponent(modelo)}%0A`;
            }

            const mensaje = `Hola Piero! Quiero solicitar un Pre-Pedido de Cuerda a Medida:%0A%0A` +
                `*Tipo de Arco:* ${encodeURIComponent(tipoArco)}%0A` +
                camposExtra +
                `*Largo de Cuerda:* ${encodeURIComponent(largoValor)} (${encodeURIComponent(unidadLargo)})%0A` +
                `*Cantidad de Hilos:* ${encodeURIComponent(opcionHilos)}%0A` +
                `*Libraje:* ${encodeURIComponent(libraje)} lbs%0A` +
                `*Colores:* ${encodeURIComponent(colorPrimario)} / ${encodeURIComponent(colorSecundario)}%0A` +
                `*Comentarios:* ${encodeURIComponent(detalles)}`;

            const numeroPiero = '5492616550827';
            window.open(`https://wa.me/${numeroPiero}?text=${mensaje}`, '_blank');
        });
    }

    // 3. Modales Interactivos para Especificaciones
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

    // 4. Acordeón para FAQs
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const isOpen = faqItem.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const icon = item.querySelector('.faq-icon');
                if (icon) icon.textContent = '+';
            });

            if (!isOpen) {
                faqItem.classList.add('active');
                const icon = faqItem.querySelector('.faq-icon');
                if (icon) icon.textContent = '−';
            }
        });
    });
});