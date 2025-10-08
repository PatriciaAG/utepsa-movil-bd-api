import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Producto {
  id?: string;
  nombre: string;
  precio: number;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private firestore: Firestore) {}

  agregarProducto(producto: Producto) {
    const ref = collection(this.firestore, 'productos');
    return addDoc(ref, producto);
  }

  obtenerProductos(): Observable<Producto[]> {
    const ref = collection(this.firestore, 'productos');
    return collectionData(ref, { idField: 'id' }) as Observable<Producto[]>;
  }
}
