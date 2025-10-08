import { Component, OnInit } from '@angular/core';
import { ProductoService } from './services/producto';
import { Producto } from './model/producto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Productos</h2>
    <button (click)="agregar()">Agregar producto</button>
    <ul>
      <li *ngFor="let p of productos">
        {{ p.nombre }} - {{ p.precio }} Bs
        <button (click)="eliminar(p.id!)">❌</button>
      </li>
    </ul>
  `
})
export class AppComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }

  agregar() {
    const nuevo: Producto = {
      nombre: 'Taladro',
      precio: 350,
      descripcion: 'Taladro eléctrico profesional'
    };
    this.productoService.agregarProducto(nuevo);
  }

 
}
