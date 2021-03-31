import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Photo } from './../models/flickr/photo';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  private photos: Photo[] = [];
  public photosSubject = new BehaviorSubject<Photo[]>([]);
  constructor() {}

  bookmarkPhoto(photo: Photo) {
    this.photos = this.onAddPhoto(photo);
    console.log(this.photos);
    this.updateBookmarks();
  }

  removePhoto(id: string): void {
    this.photos = this.photos.filter((photo) => photo.id !== id);
    this.updateBookmarks();
  }
  private onAddPhoto(photo: Photo): Photo[] {
    return !this.isPhotoInBookmarks(photo.id)
      ? [...this.photos, photo]
      : this.photos;
  }
  private isPhotoInBookmarks(id: string): boolean {
    return this.photos.some((p) => p.id === id);
  }
  private updateBookmarks(): void {
    this.photosSubject.next(this.photos);
  }
}
