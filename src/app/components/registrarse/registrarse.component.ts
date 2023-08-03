import { Component, OnInit } from '@angular/core';
import { RegistrarseService } from 'src/app/services/registrarse/registrarse.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
})
export class RegistrarseComponent implements OnInit {
  formulario: any = {};

  constructor(private registrarseService: RegistrarseService) {}

  ngOnInit(): void {}

  /*
   ************************************************
   *                  REGISTRARSE                 *
   ************************************************
   */
  registrase() {
    this.registrarseService.crearUsuarios(this.formulario).subscribe({
      next: (data) => {},
      error: (err) => {},
    });
  }
}
