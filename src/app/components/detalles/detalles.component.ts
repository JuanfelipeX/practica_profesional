import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';
import { FrameworkComponent } from '../framework/framework.component';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  detalle: any;

  constructor(
    private route: ActivatedRoute,
    private fireService: FirebaseService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; // Obtenemos el ID desde la URL
      this.obtenerDetalle(id);
    });
  }

  obtenerDetalle(id: string) {
    this.fireService.obtenerDatosPorIdEnColecciones(id).then(detalle => {
      this.detalle = detalle[0];
      // console.log(detalle);
    }).catch(error => {
    });
  }


  abrirModal() {
    const modalRef = this.modalService.open(FrameworkComponent, { size: 'xl', windowClass: 'modal-xxl' });
  }
}
