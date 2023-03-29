import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalComponent } from './pages/final/final.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Parte1Component } from './pages/parte1/parte1.component';
import { Parte2Component } from './pages/parte2/parte2.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'parte1', component: Parte1Component },
  { path: 'parte2', component: Parte2Component },
  { path: 'final', component: FinalComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
