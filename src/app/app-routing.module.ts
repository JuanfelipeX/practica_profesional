import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizacionComponent } from './components/actualizacion/actualizacion.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ErrorNoEncontradoComponent } from './components/error-no-encontrado/error-no-encontrado.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

const routes: Routes = [
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'detalles/:id', component: DetallesComponent },
  { path: 'actualizar/:id', component: ActualizacionComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: ErrorNoEncontradoComponent }, //Sitio Web No Encontrado 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
