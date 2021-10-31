

# Cinema

This project was generated using [Nx](https://nx.dev).

# Consideraciones

> State Management > Store reactivo con la opción de emitir una sola prop del almacén.

> State global para manejo de info global de la app (User session...)

> Se define un store/state para cada módulo con gestión de loading independiente.

> Notifier > Para probar las notificaciones basta con competar el formulario de nueva pelicula. 
  Este realiza un fake new.

> FakeJoins: Se realiza un fakejoin con los datos de la película en su profile para estudios y actores.

> db.json Se añade info extra para simular cargsa dinámica de info de entorno > Menús en este caso a través del 
  AppInitializer.

> Se realizan test e2e básicos para comprobación de enrutado y navegación.

> Se simula tokenización desde servidor y se comprueba la misma en el control de errores global
  con el AuthInterceptor.

> Se genera libreria de cliente para poder compartir elemnentos de front entre potenciales apps híbridas.

> Modelos de datos independientes para Api (_*) y Front.

> Se genera librería externa (lib-global) como ejemplo de integración de librerias externas.

Seguro se me olvidan mñas cosas...de todas formas todo está en el código :)

Un saludo!

PD: Se agradecría feedback independientemente de la valoración final.

Eloy Pérez
