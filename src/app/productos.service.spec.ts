import { TestBed } from '@angular/core/testing';
import { ProductosService } from './productos.service';

// Pruebas automáticas del servicio: se ejecutan con "ng test".
describe('ProductosService', () => {
  let servicio: ProductosService;

  beforeEach(() => {
    // Angular crea el servicio, igual que con inject().
    servicio = TestBed.inject(ProductosService);
  });

  it('empieza con el carrito vacío', () => {
    expect(servicio.carrito().length).toBe(0);
    expect(servicio.total()).toBe(0);
  });

  it('agrega productos y calcula el total', () => {
    const [teclado, mouse] = servicio.obtenerProductos();
    servicio.agregar(teclado);
    servicio.agregar(mouse);
    expect(servicio.carrito().length).toBe(2);
    expect(servicio.total()).toBe(125000);
  });

  it('quita un producto del carrito', () => {
    const [teclado, mouse] = servicio.obtenerProductos();
    servicio.agregar(teclado);
    servicio.agregar(mouse);
    servicio.quitar(0);
    expect(servicio.carrito().length).toBe(1);
    expect(servicio.total()).toBe(45000);
  });
});
