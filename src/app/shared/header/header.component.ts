import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaAService } from 'src/app/services/categoria-a/categoria-a.service';
import { CategoriaBService } from 'src/app/services/categoria-b/categoria-b.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  verificadorBool: boolean = false;
  listaGetDatosCategoriaA: any = [];
  listaGetDatosCategoriaB: any = [];

  constructor(private router: Router, private categoriaAService: CategoriaAService, private categoriaBService: CategoriaBService) {
    this.verifyLooged();
    this.getDatosCategoriaA();
    this.getDatosCategoriaB();
  }

  ngOnInit(): void { }

  // Método para obtener los datos de la Categiria A
  getDatosCategoriaA() {
    this.categoriaAService.obtenerDatos().subscribe({
      next: (data: any) => {
        this.listaGetDatosCategoriaA = data;
      },
      error: (err) => {
      },
    });
  }

  
  // Método para obtener los datos de la Categiria A
  getDatosCategoriaB() {
    this.categoriaBService.obtenerDatos().subscribe({
      next: (data: any) => {
        this.listaGetDatosCategoriaB = data;
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
