import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase/firebase.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  nuevoElemento: any = {};

  constructor(private fireService: FirebaseService) { }


  ngOnInit(): void {
  }

  crearElemento() {
    this.fireService.crearDato(this.nuevoElemento).then(() => {
    }).catch(error => {
    });
  }


}
