import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from './models/answer.model';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  private apiUrl = 'URL_DE_TU_API'; // URL

  constructor(private _http: HttpClient) {}

  obtenerRespuesta(): Observable<Answer> {
    return this._http.get<Answer>(this.apiUrl);
  }
}
