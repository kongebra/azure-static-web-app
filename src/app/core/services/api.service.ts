import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endpoint = 'https://kind-desert-05e008403.azurestaticapps.net/api';

  constructor(private http: HttpClient) {}

  getMessage(): Observable<object> {
    return this.http
      .get(`${this.endpoint}/GetMessage`)
      .pipe(tap((x) => console.log(x)));
  }
}
