import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';

@NgModule({
  declarations: [BookmarksComponent],
  imports: [CommonModule, BookmarksRoutingModule, SharedModule],
})
export class BookmarksModule {}
