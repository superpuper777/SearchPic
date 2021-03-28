import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [NotFoundPageComponent, SearchComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [SearchComponent],
})
export class SharedModule {}
