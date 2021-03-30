import { SharedModule } from './../../shared/shared.module';
// import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule,

    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FormsModule, ReactiveFormsModule],
})
export class SearchPageModule {}
