import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalderaEtiquetasComponent } from './caldera-etiquetas/caldera-etiquetas.component';
import { EtiquetaCalderaComponent } from './components/etiqueta-caldera/etiqueta-caldera.component';

const routes: Routes = [
  { path: 'caldera', component: CalderaEtiquetasComponent },  
  { path: 'etiqueta', component: EtiquetaCalderaComponent },  
  { path: '**', component: CalderaEtiquetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
