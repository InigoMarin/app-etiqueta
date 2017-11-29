import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatSelectModule,
  MatListModule,
  MatChipsModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatChipsModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatFormFieldModule

  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatChipsModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatFormFieldModule
  ]
})
export class MaterialModule {}