import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SearchArticuloComponent } from '../search-articulo/search-articulo.component';


@Component({
  selector: 'app-etiqueta-caldera',
  templateUrl: './etiqueta-caldera.component.html',
  styleUrls: ['./etiqueta-caldera.component.css']
})
export class EtiquetaCalderaComponent implements OnInit {
  title = 'app';
  displayedColumns = ['codigo','descripcion','tipo','accion'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  abrirDialogoBuscar(){
    console.log('Abriendo Dialogo Buscar.');
    let dialogRef = this.dialog.open(SearchArticuloComponent, {
      height: '400px',
      width: '600px',
    });
  }

}

export interface Element {
  id:number;
  codigo: string;
  descripcion: string;
  tipo: string;
  seleccionado: boolean;
}

const ELEMENT_DATA: Element[] = [
  {id: 1, codigo: 'CDOC001460', descripcion: 'Garantia', tipo: 'PDF', seleccionado:true},
  {id: 2, codigo: 'CDOC001461', descripcion: 'Garantia', tipo: 'PDF', seleccionado:false},
  {id: 3, codigo: 'CDOC001462', descripcion: 'Garantia', tipo: 'PDF', seleccionado:true}
];
