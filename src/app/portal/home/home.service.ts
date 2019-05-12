
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DistanceBetweenCitiesInitialData, DistanceBetweenCitiesRequest, CityTransfer } from './home-request-response';


@Injectable({
  providedIn: 'root'
})

export class HomeService {

  GET_INITIAL_DATA_URL = '/fis/city/findcitiesinitialdata';
  FIND_TIME_URL = '/fis/city/finddistancebetweencities';

  constructor(private http: HttpClient) {

  }

  findDistanceBetweenCities(request: DistanceBetweenCitiesRequest): Observable<number> {
    const body = JSON.stringify(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post(this.FIND_TIME_URL, body, httpOptions).pipe(map(
      (response: number) => {
        return response;
      }
    ));
  }

  findCitiesInitialData(): Observable<DistanceBetweenCitiesInitialData> {
    return this.http.get(this.GET_INITIAL_DATA_URL).pipe(map(
      (response: DistanceBetweenCitiesInitialData) => {
        return response;
      }
    ));
  }
}
