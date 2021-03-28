import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
// import {
//   debounceTime,
//   distinctUntilChanged,
//   switchMap,
//   take,
// } from 'rxjs/operators';
import { DataService } from './../../shared/services/data.service';
import { Image } from '../../shared/models/flickr/image';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  // searchTerm = new FormControl();
  images = [];
  keyword: string;
  // @Output() onEmitSearchTerm: EventEmitter<string> = new EventEmitter();
  // @Input() initialValue$: Observable<string>;
  // subscription: Subscription;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  // ngOnInit(): void {
  //   this.subscription = this.initialValue$
  //     .pipe(
  //       take(1),
  //       switchMap(
  //         (result: string): Observable<string> => {
  //           this.searchTerm.patchValue(result);
  //           return this.throttle(this.searchTerm.valueChanges);
  //         }
  //       )
  //     )
  //     .subscribe((next) => this.onEmitSearchTerm.emit(next));
  // }

  // throttle(source$: Observable<string>): any {
  //   return source$.pipe(debounceTime(600), distinctUntilChanged());
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
