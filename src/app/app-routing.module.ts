import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ErrorNoEncontradoComponent } from './components/error-no-encontrado/error-no-encontrado.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FrameworkComponent } from './components/framework/framework.component';

const routes: Routes = [
  // { path: 'iniciar-sesion', component: IniciarSesionComponent }, 
  // { path: 'registrarse', component: RegistrarseComponent },
  // { path: 'crear', component: CrearComponent },
  // { path: 'actualizar/:id', component: ActualizacionComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: 'framework', component: FrameworkComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: ErrorNoEncontradoComponent }, //Sitio Web No Encontrado 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
