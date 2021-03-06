import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Photo, Output } from '../../shared/models/flickr';

import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  searchImages(keyword: string, per_page: number, page: number) {
    const url =
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=${per_page}&page=${page}`;
    return this.http.get(url + params).pipe(
      map((res: Output) => {
        const urlArr = [];
        res.photos.photo.forEach((ph: Photo) => {
          const photoObj = {
            id: ph.id,
            url: `https://live.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
            title: ph.title,
            tags: [],
          };
          urlArr.push(photoObj);
        });
        return urlArr;
      })
    );
  }
}
