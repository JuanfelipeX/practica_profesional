import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HerramientasService } from 'src/app/services/herramientas/herramientas.service';

@Component({
  selector: 'app-herramienta-detalles',
  templateUrl: './herramienta-detalles.component.html',
  styleUrls: ['./herramienta-detalles.component.css'],
})
export class HerramientaDetallesComponent implements OnInit {
  // Formulario de datos obtenidos
  formulario: any = {};

  /************ Rutas para obtener el Id ************/
  public loc = window.location;
  public pathName = this.loc.pathname.substring(
    22,
    this.loc.pathname.lastIndexOf('/') + 50
  );

  post_id: any = this.pathName;

  constructor(
    private HerramientaService: HerramientasService,
    private router: Router
  ) {}

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
}
