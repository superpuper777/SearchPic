import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

import { Photo } from './../models/flickr/photo';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  private photos: Photo[] = [];
  public photosSubject = new BehaviorSubject<Photo[]>([]);
  constructor(private localStorageService: LocalStorageService) {}

  bookmarkPhoto(photo: Photo): void {
    if (localStorage.getItem('photos') === null) {
      this.photos = this.onAddPhoto(photo);
    } else {
      this.photos = JSON.parse(localStorage.getItem('photos'));
      this.photos = this.onAddPhoto(photo);
    }
    this.updateBookmarks();
  }

  removePhoto(id: string): void {
    this.photos = JSON.parse(localStorage.getItem('photos'));
    this.photos = this.photos.filter((photo) => photo.id !== id);
    this.updateBookmarks();
    localStorage.setItem('photos', JSON.stringify(this.photos));
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
    localStorage.setItem('photos', JSON.stringify(this.photos));
  }
}
