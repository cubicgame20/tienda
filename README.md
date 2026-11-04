# Tienda: guía del flujo de Angular

Tienda sencilla para entender cómo funciona Angular: componentes, rutas, servicios y signals.

## Cómo ejecutarla

```bash
npm install   # solo la primera vez
npm start     # inicia la app
```

Con `npm start` en marcha, abre <http://localhost:4200/> en el navegador.

## Mapa de archivos

| Archivo | Para qué sirve |
| --- | --- |
| `src/index.html` | Única página HTML real; contiene `<app-root>` |
| `src/main.ts` | Arranca Angular |
| `src/app/app.config.ts` | Configuración general; activa el router |
| `src/app/app.routes.ts` | Conecta cada URL con un componente |
| `src/app/app.ts` y `app.html` | Componente principal: menú y hueco para las páginas |
| `src/app/inicio/` | Página de inicio |
| `src/app/productos/` | Lista de productos |
| `src/app/carrito/` | Contenido del carrito y total |
| `src/app/productos.service.ts` | Datos compartidos: productos y carrito |
| `src/styles.css` | Estilos de toda la app |

Cada componente tiene un archivo `.ts` (lógica) y un `.html` (lo que se ve).

## El flujo, paso a paso

Busca `PASO 1`, `PASO 2`, etc. en el código para ver cada parte en su archivo.

```text
index.html → main.ts → App → rutas → página (Inicio, Productos o Carrito)
                                       ↕
                               ProductosService
```

### Parte 1: la app arranca

**Paso 1: el navegador abre `index.html`.** La página está casi vacía. Solo tiene la etiqueta `<app-root>`.

**Paso 2: se ejecuta `main.ts`.** La línea `bootstrapApplication(App, appConfig)` le dice a Angular: "arranca usando el componente `App` y esta configuración".

**Paso 3: Angular dibuja `App`.** Busca la etiqueta que coincide con su `selector: 'app-root'` y dibuja dentro el contenido de `app.html`: el menú y `<router-outlet />`.

**Paso 4: el router elige la página.** Lee la URL y la busca en `app.routes.ts`. Si la URL es `/`, redirige a `/inicio`, y `Inicio` aparece en el lugar de `<router-outlet />`.

Al pulsar un enlace con `routerLink`, el navegador no recarga la página. Angular solo cambia la URL y el componente que está dentro de `<router-outlet />`. El menú sigue igual porque está fuera de ese hueco.

### Parte 2: agregar un producto

**Paso 5: la página obtiene el servicio.** `Productos` llama a `inject(ProductosService)`. Como el servicio usa `providedIn: 'root'`, todas las páginas reciben la misma instancia y comparten el mismo carrito.

**Paso 6: el usuario pulsa "Agregar".** En `productos.html`, `(click)="servicio.agregar(p)"` llama al servicio y le pasa el producto de esa tarjeta.

**Paso 7: cambia el signal.** `agregar()` usa `carrito.update(...)` para guardar una lista nueva con ese producto.

**Paso 8: la pantalla se actualiza sola.** Angular sabe qué partes de la pantalla leen `carrito()` y las actualiza:

- El contador del menú sube, por ejemplo a `Carrito (1)`.
- `total` se recalcula porque es un `computed`.
- Al entrar en `/carrito`, la lista muestra el producto.

Nunca escribimos código para modificar el HTML. Cambiamos el dato y Angular actualiza la pantalla.

### Quitar un producto

Es el mismo camino en sentido contrario. El botón "Quitar" llama a `servicio.quitar($index)`, `filter` crea una lista sin ese elemento y la pantalla se actualiza sola.

## Conceptos clave

| Concepto | En esta app | Qué significa |
| --- | --- | --- |
| Componente | `Productos` | Una pieza de pantalla |
| Interpolación | `{{ p.nombre }}` | Muestra un valor en el HTML |
| Evento | `(click)="..."` | Ejecuta código cuando pasa algo |
| Ruta | `{ path: 'carrito', component: Carrito }` | Conecta una URL con un componente |
| Servicio | `ProductosService` | Guarda datos o lógica compartidos |
| Inyección | `inject(ProductosService)` | Pide un servicio a Angular |
| Signal | `carrito` | Valor que avisa cuando cambia |
| Computed | `total` | Valor calculado a partir de signals |
| Bloques de control | `@if`, `@for` | Muestran contenido según una condición o repiten contenido |

## Practica lo aprendido

1. Agrega un cuarto producto en `productos.service.ts`. ¿Cuántos archivos tuviste que cambiar?
2. Agrega un botón "Vaciar carrito" en `carrito.html`, con un método `vaciar()` en el servicio.
3. Crea una página "Contacto" con `ng generate component contacto`, agrégala a `app.routes.ts` y pon su enlace en `app.html`.
