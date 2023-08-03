import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from '../configuration.service';

@Injectable({
  providedIn: 'root',
})
export class IniciarSesionService {
  private URL_BASE: string;

  constructor(
    private configuration: ConfigurationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.URL_BASE = this.configuration.getUrlBase();
  }

  obtenerSesion() {
    return this.http.get<any>(this.URL_BASE + 'sesion');
  }

  obtenerSesionId(id: any) {
    return this.http.get<any>(this.URL_BASE + 'sesion' + '/' + id);
  }

  crearIniciarSesion(data: any) {
    return this.http.post(this.URL_BASE + 'sesion', data);
  }

  editarSesion(data: any, id: number) {
    return this.http.put(this.URL_BASE + 'apus' + '/' + id, data);
  }

  eliminarSesion(id: number) {
    return this.http.delete(this.URL_BASE + 'sesion' + '/' + id);
  }
}
