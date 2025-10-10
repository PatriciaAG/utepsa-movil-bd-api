import { Injectable, inject, NgZone } from '@angular/core';
import { Firestore, addDoc, collection, serverTimestamp } from '@angular/fire/firestore';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class ServicePersona {
  //constructor(private db: Firestore) {}
  private db = inject(Firestore); // Inyección de dependencia
  private zone = inject(NgZone); // Inyección de NgZone


  async crearPersona(ci: string, nombre: string, correoelectronico: string, fechaNac: Date) {
    const personasCol = collection(this.db, 'personas');
    await addDoc(personasCol, {
      ci,
      nombre,
      correoelectronico,
      fechaNac,
      creadoEn: serverTimestamp(),
    } as Persona);
  }
}

