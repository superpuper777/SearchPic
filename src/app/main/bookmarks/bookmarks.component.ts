import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Photo } from './../../shared/models/flickr/photo';

import { BookmarkService } from './../../shared/services/bookmark.service';
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent {
  photos$: Observable<Photo[]>;
  constructor(private bookmarkService: BookmarkService) {}
  ngOnInit(): void {
    this.photos$ = this.bookmarkService.photosSubject;
    console.log(this.photos$);
  }

  deletePhoto(photo) {
    console.log('delete photo');
  }
}
