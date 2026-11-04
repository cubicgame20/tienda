import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductosService } from './productos.service';

// PASO 3: componente principal. Es el molde de toda la página.
// selector: 'app-root' indica que se dibuja dentro de <app-root> en index.html.
@Component({ /*lo que hace la clase app */
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html', /* esqueleto html lo que se  */
})
export class App {
  // Lo usa el menú para mostrar cuántos productos hay en el carrito.
  servicio = inject(ProductosService);
}
