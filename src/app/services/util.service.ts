import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  // resposta de erro para a chamada
  public handleError(error: HttpErrorResponse) {
    console.error(`Backend retornou o código: ${error.status}, e no corpo: ${error.error}`);

    return throwError(`Ocorreu um erro na requisição`);
  }
}
