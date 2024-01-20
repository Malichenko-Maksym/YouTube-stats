import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type Observable } from 'rxjs';

@Injectable()
export class HttpclientService {
  private readonly URL = 'askInfo';

  constructor(private httpClient: HttpClient) {}

  public askInfo(data: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
      }),
    };

    return this.httpClient.post(
      this.URL,
      JSON.stringify({ someNumber: data }),
      httpOptions,
    );
  }
}
