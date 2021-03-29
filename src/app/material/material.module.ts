import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
  ],

  exports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
  ],
})
export class MaterialModule {}
