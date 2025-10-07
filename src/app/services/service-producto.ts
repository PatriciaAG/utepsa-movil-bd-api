import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, serverTimestamp } from '@angular/fire/firestore';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceProducto {
  constructor(private db: Firestore) {}

  async crearProducto(nombre: string, precio: number) {
    const productosCol = collection(this.db, 'productos');
    await addDoc(productosCol, {
      nombre,
      precio,
      creadoEn: serverTimestamp(),
    } as Producto);
  }
}
