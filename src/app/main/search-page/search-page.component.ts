import { Component, OnInit } from '@angular/core';
import { DataService } from './../../shared/services/data.service';
import { Image } from './../../shared/models/image';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  constructor(private _data: DataService) {}

  ngOnInit() {
    this._data.getAPIDate();
  }
}
