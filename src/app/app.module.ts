import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MaterialModule} from './material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalderaEtiquetasComponent} from './caldera-etiquetas/caldera-etiquetas.component'
import { EtiquetaCalderaComponent } from './components/etiqueta-caldera/etiqueta-caldera.component';
import { EditarCalderaComponent } from './components/editar-caldera/editar-caldera.component';
import { SearchArticuloComponent } from './components/search-articulo/search-articulo.component';




@NgModule({
  declarations: [
    AppComponent,
    CalderaEtiquetasComponent,
    EtiquetaCalderaComponent,
    EditarCalderaComponent,
    SearchArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    SearchArticuloComponent
  ]
})
export class AppModule { }
