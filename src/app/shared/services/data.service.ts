import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Image, Output } from '../../shared/models/flickr';

import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  searchImages(keyword: string) {
    const url =
      'https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value';
    const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=12`;
    return this.http.get(url + params).pipe(
      map((res: Output) => {
        const urlArr = [];
        res.images.image.forEach((im: Image) => {
          const imgObj = {
            url: `https://live.staticflickr.com/${im.server}/${im.id}_${im.secret}`,
            title: im.title,
          };
          urlArr.push(imgObj);
        });
        return urlArr;
      })
    );
  }
}
