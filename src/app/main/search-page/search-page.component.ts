import { map } from 'rxjs/operators';
import { Component, ViewChild, OnDestroy, HostListener, OnInit } from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';
import { ENTER } from '@angular/cdk/keycodes';

import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DataService } from './../../shared/services/data.service';
import { BookmarkService } from './../../shared/services/bookmark.service';
import { LocalStorageService } from './../../shared/services/local-storage.service';

import { DialogComponent } from './../../shared/components/dialog/dialog.component';

import { Photo } from './../../shared/models/flickr';
import { Tag } from './../../shared/models/tag';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit, OnDestroy {
  public qwerty$: Observable<any>;
  photos;
  photos$: Observable<Photo[]>;
  searchPhoto$: Observable<string>;
  resultsLength = 500;
  per_page = 12;
  page = 1;
  searchPhoto: string = '';
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  userActivity;
  userInactive: Subject<any> = new Subject();
  readonly separatorKeysCodes: number[] = [ENTER];
  subscription: Subscription;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private dataService: DataService,
    private bookmarkService: BookmarkService,
    private localStorageService: LocalStorageService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.setTimeout();
  }
  ngOnInit() {
    this.qwerty$ = this.dataService.test$
  }

  searchTermChange(searchTerm: string, per_page: number, page: number): void {
    // this.subscription = this.dataService
    //   .searchImages(searchTerm, per_page, page)
    //   .subscribe((photos) => {
    //     this.photos = photos;
    //     this.searchPhoto = searchTerm;
    //   }); 
    // this.photos$ = this.dataService.searchImages(searchTerm, per_page, page)
    //   .pipe(
    //     map(photos => photos)
    // );
    this.dataService.searchImages(searchTerm, per_page, page);
  //   this.searchPhoto$ =  this.dataService.searchImages(searchTerm, per_page, page)
  //   .pipe(
  //     map(photo => searchTerm)
  // );
  }
  addToBookmarks(photo: Photo): void {
    this.bookmarkService.bookmarkPhoto(photo);
  }
  clickOnArrow(event): void {
    // this.dataService
    //   .searchImages(this.searchPhoto, this.per_page, event.pageIndex + 1)
    //   .subscribe((photos) => {
    //     this.photos = photos;
    //   });
    
    // this.photos$ = this.dataService
    //   .searchImages(this.searchPhoto$, this.per_page, event.pageIndex + 1)
    //   .pipe(
    //     map(photos => photos)
    //   );
  }

  add(event: MatChipInputEvent, photo: Photo): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      photo.tags.push({ name: value.trim() });
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
  setTimeout() {
    this.userActivity = setTimeout(() => {
      this.userInactive.next(undefined);
      this.openDialog();
      this.localStorageService.clear();
    }, 60000);
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }

  ngOnDestroy(): void {
    if (this.subscription == undefined) {
      this.snackBar.open(
        'Your storage is empty! You may to add some photos to bookmarks :)',
        '',
        {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        }
      );
    } else this.subscription.unsubscribe();
  }
}
