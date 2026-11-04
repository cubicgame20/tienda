import { Component, inject } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.html',
})
export class Productos {
  // inject: le pide a Angular la instancia única del servicio.
  servicio = inject(ProductosService);
  productos = this.servicio.obtenerProductos();
}
