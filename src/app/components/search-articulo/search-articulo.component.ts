import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-search-articulo',
  templateUrl: './search-articulo.component.html',
  styleUrls: ['./search-articulo.component.css']
})
export class SearchArticuloComponent  {

  constructor( public dialogRef: MatDialogRef<SearchArticuloComponent>) { }


}

