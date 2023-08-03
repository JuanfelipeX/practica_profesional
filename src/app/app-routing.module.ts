import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorNoEncontradoComponent } from './components/error-no-encontrado/error-no-encontrado.component';
import { HerramientaActualizarComponent } from './components/herramienta-actualizar/herramienta-actualizar.component';
import { HerramientaDetallesComponent } from './components/herramienta-detalles/herramienta-detalles.component';
import { HerramientaComponent } from './components/herramienta/herramienta.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

const routes: Routes = [
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'herramienta', component: HerramientaComponent },
  { path: 'herramienta-actualizar/:id', component: HerramientaActualizarComponent },
  { path: 'herramienta-detalles/:id', component: HerramientaDetallesComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: ErrorNoEncontradoComponent }, //Sitio Web No Encontrado 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
