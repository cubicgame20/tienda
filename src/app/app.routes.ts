import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';
import { Carrito } from './carrito/carrito';

// PASO 4: las rutas conectan cada URL con un componente.
export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // sin ruta → inicio
  { path: 'inicio', component: Inicio },
  { path: 'productos', component: Productos },
  { path: 'carrito', component: Carrito },
  { path: '**', redirectTo: 'inicio' }, // ruta que no existe → inicio
];
