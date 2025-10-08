import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Firebase {
  constructor(private firestore: Firestore) {}

  async agregarUsuario(usuario: any) {
    const usuariosRef = collection(this.firestore, 'usuarios');
    return await addDoc(usuariosRef, usuario);
  }

  async obtenerUsuarios() {
    const usuariosRef = collection(this.firestore, 'usuarios');
    const snapshot = await getDocs(usuariosRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}
