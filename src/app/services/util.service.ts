import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { IRandomImage } from '../models/images.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private http: HttpClient) { }

  public getRandomImages(): Observable<IRandomImage[]> {
    return this.http.get<IRandomImage[]>('https://picsum.photos/v2/list?limit=10')
    .pipe(
      catchError(this.handleError)
    );
  }

  // resposta de erro para a chamada
  public handleError(error: HttpErrorResponse) {
    console.error(`Backend retornou o código: ${error.status}, e no corpo: ${error.error}`);

    return throwError(`Ocorreu um erro inesperado`);
  }

  public getRandomIndex = () => Math.floor((Math.random() * (9 - 0 + 1)) + 0);
}
