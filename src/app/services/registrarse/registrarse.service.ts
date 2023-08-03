import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigurationService } from '../configuration.service';

@Injectable({
  providedIn: 'root',
})
export class RegistrarseService {
  private URL_BASE: string;

  constructor(
    private configuration: ConfigurationService,
    private http: HttpClient,
    private router: Router
  ) {
    this.URL_BASE = this.configuration.getUrlBase();
  }

  crearUsuarios(data: any) {
    return this.http.post(this.URL_BASE + 'usuarios', data);
  }

  obtenerUsuarios() {
    return this.http.get<any>(this.URL_BASE + 'usuarios');
  }

  obtenerUsuariosId(id: any) {
    return this.http.get<any>(this.URL_BASE + 'usuarios' + '/' + id);
  }

  obtenerUsuariosCorreo(email: any) {
    return this.http.get<any>(this.URL_BASE + 'usuarios/correo' + '/' + email);
  }

  editarUsuarios(data: any, id: number) {
    return this.http.put(this.URL_BASE + 'usuarios' + '/' + id, data);
  }

  eliminarUsuarios(id: number) {
    return this.http.delete(this.URL_BASE + 'usuarios' + '/' + id);
  }
}
