document.addEventListener("DOMContentLoaded", function() {

    // Botón de búsqueda de personajes
    document.getElementById("boton-busqueda-personajes").addEventListener("click", function() {
        // Obtener el término de búsqueda de personajes desde el campo de entrada
        let terminoBusquedaPersonajes = document.getElementById("input-busqueda-personajes").value;
        // Llamar a la función obtenerPersonajes pasando el término de búsqueda
        obtenerPersonajes(terminoBusquedaPersonajes);
    });

    // Botón de búsqueda por episodios
    document.getElementById("boton-busqueda-episodios").addEventListener("click", function() {
        // Obtener el término de búsqueda de episodios desde el campo de entrada
        let terminoBusquedaEpisodios = document.getElementById("input-busqueda-episodios").value;
        // Llamar a la función obtenerEpisodios pasando el término de búsqueda
        obtenerEpisodios(terminoBusquedaEpisodios);
    });

    // Botón de búsqueda por ubicaciones
    document.getElementById("boton-busqueda-ubicaciones").addEventListener("click", function() {
        // Obtener el término de búsqueda de ubicaciones desde el campo de entrada
        let terminoBusquedaUbicaciones = document.getElementById("input-busqueda-ubicaciones").value;
        // Llamar a la función obtenerUbicaciones pasando el término de búsqueda
        obtenerUbicaciones(terminoBusquedaUbicaciones);
    });

    // Botón para limpiar la tabla de personajes
    document.getElementById("boton-limpiar-personajes").addEventListener("click", function() {
        // Llamar a la función limpiarTabla pasando el ID de la tabla de personajes
        limpiarTabla("tabla-personajes");
    });

    // Botón para limpiar la tabla de episodios
    document.getElementById("boton-limpiar-episodios").addEventListener("click", function() {
        // Llamar a la función limpiarTabla pasando el ID de la tabla de episodios
        limpiarTabla("tabla-episodios");
    });

    // Botón para limpiar la tabla de ubicaciones
    document.getElementById("boton-limpiar-ubicaciones").addEventListener("click", function() {
        // Llamar a la función limpiarTabla pasando el ID de la tabla de ubicaciones
        limpiarTabla("tabla-ubicaciones");
    });


    // Función para obtener personajes mediante la API
    function obtenerPersonajes(terminoBusquedaPersonajes) {
        // Construir la URL de la API con el término de búsqueda de personajes
        let url = "https://rickandmortyapi.com/api/character/?name=" + terminoBusquedaPersonajes;

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

    // Función para mostrar los personajes en una tabla
    function mostrarPersonajes(personajes) {
        // Obtener la tabla de personajes por su ID
        let tabla = document.getElementById("tabla-personajes").getElementsByTagName("tbody")[0];
        tabla.innerHTML = "";

        // Comprobar si se encontraron personajes
        if (personajes && personajes.length > 0) {
            personajes.forEach(function(personaje) {
                let fila = "<tr>";
                fila += "<td><img src='" + personaje.image + "' alt='" + personaje.name + "'></td>";
                fila += "<td>" + personaje.name + "</td>";
                fila += "<td>" + personaje.species + "</td>";
                fila += "<td>" + personaje.gender + "</td>";
                fila += "<td>" + personaje.location.name + "</td>";
                fila += "</tr>";
                tabla.innerHTML += fila;
            });
            console.log("Tabla de personajes actualizada:", tabla.innerHTML);
        } else {
            let fila = "<tr><td colspan='5'>No se encontraron resultados.</td></tr>";
            tabla.innerHTML += fila;
            console.log("Tabla de personajes actualizada:", tabla.innerHTML);
        }
    }


    // Función para obtener episodios mediante la API
    function obtenerEpisodios(terminoBusquedaEpisodios) {
        // Construir la URL de la API con el término de búsqueda de episodios
        let url = "https://rickandmortyapi.com/api/episode/?name=" + terminoBusquedaEpisodios;

        // Realizar una solicitud GET a la URL de la API
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // Llamar a la función mostrarEpisodios con los resultados obtenidos
                mostrarEpisodios(data.results);
            })
            .catch(function(error) {
                console.log("Error al obtener los episodios:", error);
            });
    }

    // Función para mostrar los episodios en una tabla
    function mostrarEpisodios(episodios) {
        // Obtener la tabla de episodios por su ID
        let tabla = document.getElementById("tabla-episodios").getElementsByTagName("tbody")[0];
        tabla.innerHTML = "";

        // Comprobar si se encontraron episodios
        if (episodios && episodios.length > 0) {
            episodios.forEach(function(episodio) {
                let fila = "<tr>";
                fila += "<td>" + episodio.name + "</td>";
                fila += "<td>" + episodio.air_date + "</td>";
                fila += "<td>" + episodio.episode + "</td>";
                fila += "</tr>";
                tabla.innerHTML += fila;
            });
            console.log("Tabla de episodios actualizada:", tabla.innerHTML);
        } else {
            let fila = "<tr><td colspan='3'>No se encontraron resultados.</td></tr>";
            tabla.innerHTML += fila;
            console.log("Tabla de episodios actualizada:", tabla.innerHTML);
        }
    }

    // Función para obtener ubicaciones mediante la API
    function obtenerUbicaciones(terminoBusquedaUbicaciones) {
        // Construir la URL de la API con el término de búsqueda de ubicaciones
        let url = "https://rickandmortyapi.com/api/location/?name=" + terminoBusquedaUbicaciones;

        // Realizar una solicitud GET a la URL de la API
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // Llamar a la función mostrarUbicaciones con los resultados obtenidos
                mostrarUbicaciones(data.results);
            })
            .catch(function(error) {
                console.log("Error al obtener las ubicaciones:", error);
            });
    }

    
    // Función para mostrar las ubicaciones en la tabla
    function mostrarUbicaciones(ubicaciones) {
        // Obtener la tabla de ubicaciones por su ID
        let tabla = document.getElementById("tabla-ubicaciones").getElementsByTagName("tbody")[0];
        tabla.innerHTML = "";

        // Comprobar si se encontraron ubicaciones
        if (ubicaciones && ubicaciones.length > 0) {
            ubicaciones.forEach(function(ubicacion) {
                let fila = "<tr>";
                fila += "<td>" + ubicacion.name + "</td>";
                fila += "<td>" + ubicacion.type + "</td>";
                fila += "<td>" + ubicacion.dimension + "</td>";
                fila += "</tr>";
                tabla.innerHTML += fila;
            });
            console.log("Tabla de ubicaciones actualizada:", tabla.innerHTML);
        } else {
            let fila = "<tr><td colspan='3'>No se encontraron resultados.</td></tr>";
            tabla.innerHTML += fila;
            console.log("Tabla de ubicaciones actualizada:", tabla.innerHTML);
        }
    }
    // Función para limpiar el contenido de una tabla
    function limpiarTabla(idTabla) {
        let tabla = document.getElementById(idTabla).getElementsByTagName("tbody")[0];
        tabla.innerHTML = "";
    }

});