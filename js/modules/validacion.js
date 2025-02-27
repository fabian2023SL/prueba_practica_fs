function validacion() {
    const moduloValidacion = (() => {
        const validarNombre = () => {
          const nombre = document.getElementById('name').value;
          if (nombre.trim() === '') {
            alert('El nombre es obligatorio');
            return false;
          }
          return true;
        };
      
        const validarEmail = () => {
          const email = document.getElementById('email').value;
          const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
          if (!patronEmail.test(email)) {
            alert('Por favor, introduce un email válido');
            return false;
          }
          return true;
        };
      
        const validarEdad = () => {
          const edad = document.getElementById('number').value;
          if (edad < 15 || edad > 80) {
            alert('La edad debe estar entre 15 y 80 años');
            return false;
          }
          return true;
        };
      
        const validarFormulario = () => {
          return validarNombre() && validarEmail() && validarEdad();
        };
      
        return {
          validarFormulario,
        };
      })();    
}
  export default validacion; 