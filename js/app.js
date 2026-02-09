// ===== MODAL =====
const modal = document.getElementById('modal');

// Abrir modal con información del platillo
function abrirModal(nombre, desc, ingredientes, precio) {
  document.getElementById('modalTitle').textContent = nombre;
  document.getElementById('modalDesc').textContent = desc;
  document.getElementById('modalIng').textContent = ingredientes;
  document.getElementById('modalPrice').textContent = precio;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // bloquea scroll
}

// Cerrar modal
function cerrarModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto'; // restaura scroll
}

// Cerrar modal al hacer click fuera del cuadro
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    cerrarModal();
  }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    cerrarModal();
  }
});

// ===== RESERVAS WHATSAPP =====
function reservar() {
  const telefono = '5214611234567'; // 👈 CAMBIA POR TU NÚMERO REAL

  const mensaje = encodeURIComponent(
    'Hola 👋, me gustaría hacer una reservación.\n\n' +
    '📅 Fecha:\n' +
    '⏰ Hora:\n' +
    '👥 Personas:\n\n' +
    '¡Gracias!'
  );

  window.open(
    `https://wa.me/${telefono}?text=${mensaje}`,
    '_blank'
  );
}
