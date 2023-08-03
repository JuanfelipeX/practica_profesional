import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  verificadorBool: boolean = false;

  constructor(private router: Router) {
    this.verifyLooged();
  }

  ngOnInit(): void {}

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
