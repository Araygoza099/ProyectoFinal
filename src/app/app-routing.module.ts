import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalesComponent } from './animales/animales.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  { path: 'animales', component: AnimalesComponent },
  { path: 'reportes', component: ReportesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }