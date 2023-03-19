API a usar: - https://www.omdbapi.com/ Consigue la API Key en la propia página web registrando tu email.
http://www.omdbapi.com/?apikey=85ef6c4f&s=avengers
Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

✅ Hacer el fetching de datos a la API

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas.

✅ Haz que la búsqueda se haga automáticamente al escribir.

✅ Evita que se haga la búsqueda continuamente al escribir (debounce)

respuesta:
1: se crea la estructura html con un header > form > input >button
2: sera controlado el formulario y se hace con un onSubmit en el form y en el input con un onChange y value
3: se crea un custon hook donde iria la peticion fetch (dentro de una funcion ()=>{}) y esta peticion estaria afuera en una constante
4: se crea un custon hook donde iria el tema de la busqueda ,el state y el setState que se le pasa al input y unas validaciones.
5: se crea un componenete donde iria la lista de peliculas. Aqui se revisaria que el array esta vacio o tiene resultados.
