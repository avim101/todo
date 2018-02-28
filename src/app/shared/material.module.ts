import { NgModule } from '@angular/core';

import {
  MatCheckboxModule,
  MatCardModule,
  MatDividerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialModule {}
