import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HerramientasService } from 'src/app/services/herramientas/herramientas.service';

@Component({
  selector: 'app-herramienta',
  templateUrl: './herramienta.component.html',
  styleUrls: ['./herramienta.component.css'],
})
export class HerramientaComponent implements OnInit {
  formulario: any = {};

  constructor(
    private HerramientaService: HerramientasService,
    private router: Router
  ) {
    this.verifyLooged();
  }

  ngOnInit(): void {}

  /*
   ************************************************
   *              REGISTRAR HERRAMIENTA           *
   ************************************************
   */
  registrarHerramientas() {
    this.HerramientaService.crearHerramienta(this.formulario).subscribe({
      next: (data) => {},
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
