import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-search-articulo',
  templateUrl: './search-articulo.component.html',
  styleUrls: ['./search-articulo.component.css']
})
export class SearchArticuloComponent  {

  displayedColumns = ['codigo','descripcion'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor( public dialogRef: MatDialogRef<SearchArticuloComponent>) { }


}

export interface Element {
  codigo: string;
  descripcion: string;
}

const ELEMENT_DATA: Element[] = [
  {codigo: 'CDOC001460', descripcion: 'Garantia'},
  {codigo: 'CDOC001461', descripcion: 'Garantia'},
  {codigo: 'CDOC001462', descripcion: 'Garantia' }
];


