import { Injectable } from '@angular/core';
import { addDoc, collectionData, deleteDoc, doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private firestore: Firestore,
    private router: Router
  ) {
  }

  crearDatos(data: any) {
    const datosRef = collection(this.firestore, 'Cliente');
    return addDoc(datosRef, data);
  }

  obtenerDatos(): Observable<any> {
    const datosRef = collection(this.firestore, 'Cliente');
    return collectionData(datosRef, { idField: 'id' }) as Observable<any>;
  }

  async obtenerDatosId(id: string): Promise<any> {
    const datosRef = doc(this.firestore, `Cliente/${id}`);
    const datosSnap = await getDoc(datosRef);
    if (datosSnap.exists()) {
      return { id: datosSnap.id, ...datosSnap.data() };
    }
    return null;
  }

  async editarDatos(data: any, id: string): Promise<void> {
    const datosRef = doc(this.firestore, `Cliente/${id}`);
    await setDoc(datosRef, data, { merge: true });
  }

  eliminarDatos(id: number) {
    const datosRef = doc(this.firestore, `Cliente/${id}`);
    return deleteDoc(datosRef);
  }
}
