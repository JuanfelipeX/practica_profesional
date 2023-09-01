import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaBService {

  constructor(
    private firestore: Firestore,
    private router: Router
  ) { }

  obtenerDatos(): Observable<any> {
    const datosRef = collection(this.firestore, 'Categoria_B');
    return collectionData(datosRef, { idField: 'id' }) as Observable<any>;
  }
}
