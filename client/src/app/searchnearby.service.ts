import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SearchnearbyService {
  url: string = "http://localhost:3000/api/search/";
  
  constructor(private _http: HttpClient) { }

  getData(search: string): Observable<any>{
    return this._http.get(this.url+search);
  }
}
