document.addEventListener("DOMContentLoaded", function() {

    //Boton de busqueda de personajes 
    document.getElementById("boton-busqueda-personajes").addEventListener("click", function() {
     // Obtener el término de búsqueda de personajes desde el campo de entrada  
        var terminoBusquedaPersonajes = document.getElementById("input-busqueda-personajes").value;
      // Llamar a la función obtenerPersonajes pasando el término de búsqueda 
        obtenerPersonajes(terminoBusquedaPersonajes);
    });
    //Boton de busqueda por episodios
    document.getElementById("boton-busqueda-episodios").addEventListener("click", function() {
     // Obtener el término de búsqueda de episodios desde el campo de entrada  
        var terminoBusquedaEpisodios = document.getElementById("input-busqueda-episodios").value;
    // Llamar a la función obtenerEpisodios pasando el término de búsqueda 
        obtenerEpisodios(terminoBusquedaEpisodios);
    });
    //Boton de busqueda por ubicaciones
    document.getElementById("boton-busqueda-ubicaciones").addEventListener("click", function() {
    // Obtener el término de búsqueda de ubicaciones desde el campo de entrada
        var terminoBusquedaUbicaciones = document.getElementById("input-busqueda-ubicaciones").value;
    // Llamar a la función obtenerUbicaciones pasando el término de búsqueda  
        obtenerUbicaciones(terminoBusquedaUbicaciones);
    });
    //Boton de para limpiar personajes 
    document.getElementById("boton-limpiar-personajes").addEventListener("click", function() {
    // Llamar a la función limpiarTabla pasando el ID de la tabla de personajes  
      limpiarTabla("tabla-personajes");
    });
    //Boton de para limpiar espisodios
    document.getElementById("boton-limpiar-episodios").addEventListener("click", function() {
    // Llamar a la función limpiarTabla pasando el ID de la tabla de episodios 
        limpiarTabla("tabla-episodios");
    });
    //Boton de para limpiar ubicaciones
    document.getElementById("boton-limpiar-ubicaciones").addEventListener("click", function() {
    // Llamar a la función limpiarTabla pasando el ID de la tabla de ubicaciones
        limpiarTabla("tabla-ubicaciones");
    });


    // Función para obtener personajes mediante la API
    function obtenerPersonajes(terminoBusquedaPersonajes) {
    // Construir la URL de la API con el término de búsqueda de personajes
        var url = "https://rickandmortyapi.com/api/character/?name=" + terminoBusquedaPersonajes;
    // Realizar una solicitud GET a la URL de la API
        fetch(url)
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
         // Llamar a la función mostrarPersonajes con los resultados obtenidos
            mostrarPersonajes(data.results);
          })
          .catch(function(error) {
            console.log("Error al obtener los personajes:", error);
          });
      }
});