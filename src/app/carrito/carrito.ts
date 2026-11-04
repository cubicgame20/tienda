import { Component, inject } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.html',
})
export class Carrito {
  // Es el MISMO servicio que usa Productos, por eso ve los mismos datos.
  servicio = inject(ProductosService);
}
