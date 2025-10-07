import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, serverTimestamp } from "@angular/fire/firestore";
import { Producto } from "../models/producto.model";

@Injectable({
  providedIn: 'root'
})
export class ServiceProducto {
    constructor(private db: Firestore) {}

    async CrearProducto(nombre: string, precio: number){
        const productosCol = collection(this.db, 'productos'); 
        await addDoc(productosCol, {
            nombre,
            precio,
            createdAt: serverTimestamp(),
        } as Producto);
    }
}