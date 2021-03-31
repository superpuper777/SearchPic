import {
  Component,
  OnInit,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

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
