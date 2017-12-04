import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalderaEtiquetasComponent } from './caldera-etiquetas/caldera-etiquetas.component';
import { EtiquetaCalderaComponent } from './components/etiqueta-caldera/etiqueta-caldera.component';
import { EditarCalderaComponent } from './components/editar-caldera/editar-caldera.component';

const routes: Routes = [
  { path: 'caldera', component: CalderaEtiquetasComponent },  
  { path: 'etiqueta', component: EtiquetaCalderaComponent },  
  { path: 'editar', component: EditarCalderaComponent },  
  { path: '**', component: CalderaEtiquetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
