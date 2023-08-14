import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {


  detalle: any;

  constructor(
    private route: ActivatedRoute,
    private fireService: FirebaseService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; // Obtenemos el ID desde la URL
      this.obtenerDetalle(id);
    });
  }

  obtenerDetalle(id: string) {
    this.fireService.obtenerDatosId(id).then(detalle => {
      this.detalle = detalle;
    }).catch(error => {
    });
  }
}
