import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material/material.module';
import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';

@NgModule({
  declarations: [BookmarksComponent],
  imports: [CommonModule, BookmarksRoutingModule, MaterialModule],
})
export class BookmarksModule {}
