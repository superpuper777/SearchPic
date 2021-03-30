import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './../../shared/services/data.service';
import { BookmarkService } from './../../shared/services/bookmark.service';

import { Photo } from './../../shared/models/flickr';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  // dataSource$: Observable<Image[]>;
  photos;
  constructor(
    private dataService: DataService,
    private bookmarkService: BookmarkService
  ) {}

  ngOnInit(): void {}

  searchTermChange(searchTerm: string): void {
    this.dataService
      .searchImages(searchTerm)
      .subscribe((photos) => (this.photos = photos));
  }
  addToBookmarks(photo: Photo) {
    console.log('add to bookmarks');
    console.log(photo);
    this.bookmarkService.bookmarkPhoto(photo);
  }
}
