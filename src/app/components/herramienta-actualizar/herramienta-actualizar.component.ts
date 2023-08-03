import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HerramientasService } from 'src/app/services/herramientas/herramientas.service';

@Component({
  selector: 'app-herramienta-actualizar',
  templateUrl: './herramienta-actualizar.component.html',
  styleUrls: ['./herramienta-actualizar.component.css'],
})
export class HerramientaActualizarComponent implements OnInit {
  // Formulario de datos obtenidos
  formulario: any = {};

  /************ Rutas para obtener el Id ************/
  public loc = window.location;
  public pathName = this.loc.pathname.substring(
    24,
    this.loc.pathname.lastIndexOf('/') + 50
  );

  post_id: any = this.pathName;

  constructor(
    private HerramientaService: HerramientasService,
    private router: Router
  ) {
    this.verifyLooged();
  }

  ngOnInit(): void {
    this.getHerramientas();
  }

  /*
   ************************************************
   *              TRAER HERRAMIENTAS              *
   ************************************************
   */
  getHerramientas() {
    this.HerramientaService.obtenerHerramientaId(this.post_id).subscribe({
      next: (data) => {
        this.formulario = data;
      },
      error: (err) => {},
    });
  }

  /*
   ************************************************
   *              ACTUALIZAR HERRAMIENTA          *
   ************************************************
   */
  actualizarHerramientas() {
    this.HerramientaService.editarHerramienta(
      this.formulario,
      this.post_id
    ).subscribe({
      next: (data) => {
        this.router.navigateByUrl('inicio');
      },
      error: (err) => {},
    });
  }

  verifyLooged() {
    if (localStorage.getItem('contrasena')) {
    } else {
      this.router.navigateByUrl('iniciar-sesion');
    }
  }
}
