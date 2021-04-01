import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { DataService } from './../../shared/services/data.service';
import { BookmarkService } from './../../shared/services/bookmark.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER } from '@angular/cdk/keycodes';

import { Photo } from './../../shared/models/flickr';
import { Tag } from './../../shared/models/tag';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnDestroy {
  photos;
  resultsLength = 500;
  per_page = 12;
  page = 1;
  searchPhoto: string = '';
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  // tags: Tag[] = [];
  readonly separatorKeysCodes: number[] = [ENTER];
  subscription: Subscription;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private dataService: DataService,
    private bookmarkService: BookmarkService
  ) {}

  searchTermChange(searchTerm: string, per_page: number, page: number): void {
    console.log(searchTerm, per_page, page);
    this.subscription = this.dataService
      .searchImages(searchTerm, per_page, page)
      .subscribe((photos) => {
        this.photos = photos;
        this.searchPhoto = searchTerm;
      });
  }
  addToBookmarks(photo: Photo): void {
    console.log(photo);
    this.bookmarkService.bookmarkPhoto(photo);
  }
  clickOnArrow(event): void {
    this.subscription.add(
      this.dataService
        .searchImages(this.searchPhoto, this.per_page, event.pageIndex)
        .subscribe((photos) => {
          this.photos = photos;
        })
    );
  }

  add(event: MatChipInputEvent, photo: Photo): void {
    const input = event.input;
    const value = event.value;
    console.log(photo);
    if ((value || '').trim()) {
      photo.tags.push({ name: value.trim() });
      console.log(photo.tags);
    }
    if (input) {
      input.value = '';
    }
  }

  remove(tag: Tag, photo: Photo): void {
    const index = photo.tags.indexOf(tag);

    if (index >= 0) {
      photo.tags.splice(index, 1);
    }
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
