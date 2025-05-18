// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Menú hamburguesa
    const toggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('menu'); // Usa el ID correcto

    toggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Validación simple del formulario de contacto
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function (e) {
        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (!nombre || !correo || !mensaje) {
            e.preventDefault();
            alert('Por favor completa todos los campos antes de enviar. 🙏');
        }
    });
});
