import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HerramientasService } from 'src/app/services/herramientas/herramientas.service';
import { MetodologiasService } from 'src/app/services/metodologias/metodologias.service';
import { RecomendacionesService } from 'src/app/services/recomendaciones/recomendaciones.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  verificadorBool: boolean = false;
  listaGetRecomendaciones: any = [];
  listaGetDatosMetodologia: any = [];
  listaGetDatosHerramientas: any = [];



  constructor(private router: Router, private recomendacionesService: RecomendacionesService, private metodologiasService: MetodologiasService, private herramientasService: HerramientasService) {
    this.verifyLooged();
    this.getDatosRecomendaciones();
    this.getDatosMetodologias();
    this.getDatosHerramientas();
  }

  ngOnInit(): void { }

  // Método para obtener los datos de la categoria Recomendaciones
  getDatosRecomendaciones() {
    this.recomendacionesService.obtenerDatos().subscribe({
      next: (data: any) => {
        this.listaGetRecomendaciones = data;
      },
      error: (err) => {
      },
    });
  }

  
  // Método para obtener los datos de la categoria Metodologias
  getDatosMetodologias() {
    this.metodologiasService.obtenerDatos().subscribe({
      next: (data: any) => {
        this.listaGetDatosMetodologia = data;
      },
      error: (err) => {
      },
    });
  }

    // Método para obtener los datos de la categoria Herramoemtas
    getDatosHerramientas() {
      this.herramientasService.obtenerDatos().subscribe({
        next: (data: any) => {
          this.listaGetDatosHerramientas = data;
        },
        error: (err) => {
        },
      });
    }

  verifyLooged() {
    if (localStorage.getItem('contrasena')) {
      this.verificadorBool = true;
    } else {
      this.verificadorBool = false;
    }
  }

  borrarContra() {
    localStorage.removeItem('contrasena');
    this.verificadorBool = false;
    location.reload();
  }
}
