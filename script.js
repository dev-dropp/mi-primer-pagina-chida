// Esperar a que el documento cargue completamente
document.addEventListener('DOMContentLoaded', () => {

  // FUNCIONALIDAD 1: Cambiar el color de fondo de la tarjeta
  const btnColor = document.getElementById('btnCambiarColor');
  const tarjetaColor = btnColor.parentElement; // Selecciona la sección contenedora

  // Lista de colores pastel para alternar
  const colores = ['#fef3c7', '#dcfce7', '#e0e7ff', '#fae8ff', '#ffffff'];
  let indiceColor = 0;

  btnColor.addEventListener('click', () => {
    indiceColor = (indiceColor + 1) % colores.length;
    tarjetaColor.style.backgroundColor = colores[indiceColor];
  });

  // FUNCIONALIDAD 2: Procesar el formulario
  const formulario = document.getElementById('miFormulario');
  const inputNombre = document.getElementById('nombre');
  const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');

  formulario.addEventListener('submit', (evento) => {
    // Prevenir el recargo predeterminado de la página al enviar el formulario
    evento.preventDefault();

    const nombreUsuario = inputNombre.value.trim();

    if (nombreUsuario !== '') {
      mensajeConfirmacion.textContent = `¡Gracias, ${nombreUsuario}! Tu mensaje ha sido procesado.`;
      mensajeConfirmacion.classList.remove('oculto');
      mensajeConfirmacion.classList.add('exito');

      // Limpiar el campo de texto
      inputNombre.value = '';
    }
  });

});