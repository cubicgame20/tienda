import { Injectable, computed, signal } from '@angular/core';

// interface: describe la forma que debe tener un producto.
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

// PASO 5: el servicio guarda los datos que comparten varias páginas.
// providedIn: 'root' significa que Angular crea UNA sola instancia para toda la app.
@Injectable({ providedIn: 'root' })
export class ProductosService {
  public productos: Producto[] = [
    { id: 1, nombre: 'Teclado', precio: 80000 },
    { id: 2, nombre: 'Mouse', precio: 45000 },
    { id: 3, nombre: 'Audífonos', precio: 120000 },
    { id: 4, nombre: 'Monitor', precio: 400000 },
  ];

  // signal: un valor que avisa a la pantalla cuando cambia.
  carrito = signal<Producto[]>([]); 
  // el carrito es un signal que guarda un array(lista) de productos.


  // computed: un valor calculado a partir de signals.
  // Angular lo recalcula solo cuando cambia el carrito.
  total = computed(() => this.carrito().reduce((suma, p) => suma + p.precio, 0));

  obtenerProductos() {
    return this.productos;
  }

  // PASO 7: crea una lista nueva con el producto al final.
  // Al cambiar el signal, se actualiza todo lo que lo muestra en pantalla.
  agregar(producto: Producto) {
    this.carrito.update((lista) => [...lista, producto]);
  }

  // Usamos la posición en la lista porque un mismo producto puede estar repetido.
  // filter crea una lista nueva sin el elemento de esa posición.
  quitar(indice: number) {
    this.carrito.update((lista) => lista.filter((_, i) => i !== indice));
  }
}
