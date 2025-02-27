function menudinamico() {
    const moduloDesplegableDinamico = (() => {
        const desplegableMarca = document.getElementById('dropdown');
      
        const actualizarOpcionesDesplegable = () => {
          // Ejemplo de agregar opciones dinámicamente
          const opciones = ['Ford', 'Toyota', 'BMW'];
          desplegableMarca.innerHTML = '<option value="">Selecciona una opción</option>';
          opciones.forEach(opcion => {
            const nuevaOpcion = document.createElement('option');
            nuevaOpcion.value = opcion;
            nuevaOpcion.textContent = opcion;
            desplegableMarca.appendChild(nuevaOpcion);
          });
        };
      
        desplegableMarca.addEventListener('focus', actualizarOpcionesDesplegable);
      })();
    
    
}
export default menudinamico;