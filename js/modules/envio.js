function envio() {
    const moduloEnvio = (() => {
        const formulario = document.getElementById('survey-form');
      
        const manejarEnvio = (event) => {
          event.preventDefault();
          if (moduloValidacion.validarFormulario()) {
            alert('¡Formulario enviado con éxito!');
            formulario.submit();
          } else {
            alert('Por favor, completa correctamente el formulario antes de enviarlo');
          }
        };
      
        formulario.addEventListener('submit', manejarEnvio);
      })();
      
    
}
export default envio;