import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  private URL = 'askInfo';

  constructor(private httpClient: HttpClient) { }

  public askInfo(data: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json;charset=UTF-8"
      })
    }

    return this.httpClient.post(this.URL, JSON.stringify({ someNumber: data }), httpOptions);
  }
}
