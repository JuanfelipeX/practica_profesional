import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigurationService } from '../configuration.service';

@Injectable({
  providedIn: 'root',
})
export class HerramientasService {
  private URL_BASE: string;

  constructor(
    private configuration: ConfigurationService,
    private firestore: Firestore,
    private http: HttpClient,
    private router: Router
  ) {
    this.URL_BASE = this.configuration.getUrlBase();
  }

  obtenerDatos(): Observable<any> {
    const datosRef = collection(this.firestore, 'Herramientas');
    return collectionData(datosRef, { idField: 'id' }) as Observable<any>;
  }

  crearHerramienta(data: any) {
    return this.http.post(this.URL_BASE + 'herramientas', data);
  }

  obtenerHerramientas() {
    return this.http.get<any>(this.URL_BASE + 'herramientas');
  }

  obtenerHerramientaId(id: any) {
    return this.http.get<any>(this.URL_BASE + 'herramientas' + '/' + id);
  }

  editarHerramienta(data: any, id: number) {
    return this.http.put(this.URL_BASE + 'herramientas' + '/' + id, data);
  }

  eliminarHerramienta(id: number) {
    return this.http.delete(this.URL_BASE + 'herramientas' + '/' + id);
  }
}
