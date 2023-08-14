import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-actualizacion',
  templateUrl: './actualizacion.component.html',
  styleUrls: ['./actualizacion.component.css']
})
export class ActualizacionComponent implements OnInit {

  detalle: any;
  nuevoNombre: string = '';
  modoEdicion: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fireService: FirebaseService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; // Obtén el ID desde la URL
      this.obtenerDetalle(id);
    });
  }

  obtenerDetalle(id: string) {
    this.fireService.obtenerDatosId(id).then(detalle => {
      this.detalle = detalle;
      this.nuevoNombre = detalle.nombre; // Mostrar el valor actual en el campo de edición
    }).catch(error => {
      // Manejar errores aquí
    });
  }

  habilitarModoEdicion() {
    this.modoEdicion = true;
  }

  guardarCambios() {
    const id = this.detalle.id;
    const nuevoDato = { nombre: this.nuevoNombre }; // Actualiza otros campos según necesites
    this.fireService.editarDatos(nuevoDato, id).then(() => {
      // Actualización exitosa, realizar acciones adicionales si es necesario
      this.modoEdicion = false;
      this.detalle.nombre = this.nuevoNombre; // Actualizar el valor en la vista
    }).catch(error => {
      // Manejar errores aquí
    });
  }

  cancelarEdicion() {
    this.modoEdicion = false;
    // Restaurar los valores originales si es necesario
    this.nuevoNombre = this.detalle.nombre; // Restaurar el valor en la vista
  }
}
