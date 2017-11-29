import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-caldera-etiquetas',
  templateUrl: './caldera-etiquetas.component.html',
  styleUrls: ['./caldera-etiquetas.component.css']
})
export class CalderaEtiquetasComponent implements OnInit {
  title = 'app';
  displayedColumns = ['codigo','descripcion','tipo','accion'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
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

