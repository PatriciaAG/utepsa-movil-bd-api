import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto.model';

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

  eliminarProducto(id: string) {
    const ref = doc(this.firestore, `productos/${id}`);
    return deleteDoc(ref);
  }
}
