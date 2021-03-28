import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  take,
} from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  searchTerm = new FormControl();
  subscription: Subscription;
  @Output() onEmitSearchTerm: EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
    this.subscription = this.searchTerm.valueChanges
      .pipe(debounceTime(600))
      .subscribe((next) => this.onEmitSearchTerm.emit(next));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
