import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {


  listaGetDatos: any = [];

  constructor(
    private fireService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDatos();
  }

  // Método para crear datos
  async crearDatos(data: any) {
    try {
      await this.fireService.crearDato(data);
      this.getDatos();
    } catch (error) {
    }
  }
  // Método para obtener los datos
  getDatos() {
    this.fireService.obtenerDatos().subscribe({
      next: (data: any) => {
        this.listaGetDatos = data;
      },
      error: (err) => {
      },
    });
  }

  // Método para obtener datos por ID
  async obtenerDatosPorId(id: string) {
    try {
      const datos = await this.fireService.obtenerDatosId(id);
      if (datos) {
      } else {
        console.log("Documento no encontrado");
      }
    } catch (error) {
    }
  }

  // Método para editar datos
  async editarDatos(data: any, id: string) {
    try {
      await this.fireService.editarDato(data, id);
      this.getDatos();
    } catch (error) {
    }
  }

  // Método para borrar datos
  async borrarDatos(id: any) {
    try {
      await this.fireService.eliminarDato(id);
      this.getDatos();
    } catch (error) {
    }
  }

  redirigirALosDetalles(id: string) {
    this.router.navigate(['/detalles', id]);
  }

  redirigirActualizacion(id: string) {
    this.router.navigate(['/actualizar', id]);
  }

}
