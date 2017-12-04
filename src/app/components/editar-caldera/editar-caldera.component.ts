import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-editar-caldera',
  templateUrl: './editar-caldera.component.html',
  styleUrls: ['./editar-caldera.component.css']
})
export class EditarCalderaComponent implements OnInit {
  title = 'app';
  displayedColumns = ['orden','parametro','valor','medida','accion'];
  dataSource = new MatTableDataSource<Parametro>(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

  guardarParametro(parametro){
    console.log('Guardar parametro');
    console.log(parametro);
  };

}

export interface Parametro {
  articulo:string;
  etiqueta:string

  orden:number;
  parametro: string;
  valor: string;
  medida : string;
  seleccionado: boolean;
}

const ELEMENT_DATA: Parametro[] = [
  {orden: 1, articulo:'TAVA000161', etiqueta:'CDOC000762',parametro:'CATÈGORIE',valor:'II2H3P',medida:'', seleccionado:true},
  {orden: 2, articulo:'TAVA000161', etiqueta:'CDOC000762',parametro:'CATÈGORIE',valor:'II2H3P',medida:'', seleccionado:true}
];