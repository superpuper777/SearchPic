import { Component } from '@angular/core';
import { Observable} from 'rxjs';

import { Photo } from './../../shared/models/flickr/photo';

import { BookmarkService } from './../../shared/services/bookmark.service';
import { LocalStorageService } from './../../shared/services/local-storage.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent {
  photos$: Observable<Photo[]>;
  photos: Photo[] = [];
  constructor(
    private bookmarkService: BookmarkService,
    private localStorageService: LocalStorageService
  ) {}
  ngOnInit(): void {
    this.photos$ = this.bookmarkService.photosSubject;
    this.photos = JSON.parse(this.localStorageService.getItem('photos'));
  }

  deletePhoto(photo): void {
    this.bookmarkService.removePhoto(photo.id);
    this.photos = JSON.parse(this.localStorageService.getItem('photos'));
  }
}
