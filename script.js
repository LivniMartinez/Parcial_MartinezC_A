document.addEventListener("DOMContentLoaded", function() {

    //Boton de busqueda de personajes 
    document.getElementById("boton-busqueda-personajes").addEventListener("click", function() {
      var terminoBusquedaPersonajes = document.getElementById("input-busqueda-personajes").value;
      obtenerPersonajes(terminoBusquedaPersonajes);
    });
    //Boton de busqueda por episodios
    document.getElementById("boton-busqueda-episodios").addEventListener("click", function() {
      var terminoBusquedaEpisodios = document.getElementById("input-busqueda-episodios").value;
      obtenerEpisodios(terminoBusquedaEpisodios);
    });
    //Boton de busqueda por ubicaciones
    document.getElementById("boton-busqueda-ubicaciones").addEventListener("click", function() {
      var terminoBusquedaUbicaciones = document.getElementById("input-busqueda-ubicaciones").value;
      obtenerUbicaciones(terminoBusquedaUbicaciones);
    });
    //Boton de para limpiar personajes 
    document.getElementById("boton-limpiar-personajes").addEventListener("click", function() {
      limpiarTabla("tabla-personajes");
    });
    //Boton de para limpiar espisodios
    document.getElementById("boton-limpiar-episodios").addEventListener("click", function() {
      limpiarTabla("tabla-episodios");
    });
    //Boton de para limpiar ubicaciones
    document.getElementById("boton-limpiar-ubicaciones").addEventListener("click", function() {
      limpiarTabla("tabla-ubicaciones");
    });

});