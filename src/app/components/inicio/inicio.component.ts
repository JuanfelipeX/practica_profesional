import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HerramientasService } from 'src/app/services/herramientas/herramientas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  //lista de herramientas
  listaHerrmientas: any = {};

  // Verificar Logeo
  verificadorBool: boolean = false;

  // variable para almacenar la consulta de búsqueda
  query: string = '';

  constructor(
    private HerramientaService: HerramientasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.verifyLooged();
    this.getHerramientas();
  }

  verifyLooged() {
    if (localStorage.getItem('contrasena')) {
      this.verificadorBool = true;
    } else {
      this.verificadorBool = false;
    }
  }

  /*
   ************************************************
   *              TRAER HERRAMIENTAS              *
   ************************************************
   */
  getHerramientas() {
    this.HerramientaService.obtenerHerramientas().subscribe({
      next: (data) => {
        if (this.query) {
          // filtra los elementos de la lista según la consulta de búsqueda
          this.listaHerrmientas = data.filter((element: any) =>
            element.nombre.toLowerCase().includes(this.query.toLowerCase())
          );
        } else {
          this.listaHerrmientas = data;
        }
      },
      error: (err) => { },
    });
  }

  borrarHerramienta(id: any) {
    this.HerramientaService.eliminarHerramienta(id).subscribe({
      next: (data) => {
        window.location.reload();
      },
      error: (err) => { },
    });
  }

  /*
  ************************************************
  *                    BUSQUEDA                  *
  ************************************************
  */
  onSearch(value: string) {
    if (value && value.length > 3) {
      this.query = value; // actualiza la variable de consulta
      this.getHerramientas(); // filtra la lista de herramientas
    } else {
      this.query = '';
      this.getHerramientas();
    }
  }
}
