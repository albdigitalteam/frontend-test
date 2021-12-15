import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { IToastData } from '../models/toast.model';
import { CreateToast } from './createToast.util';

@Injectable({
  providedIn: 'root',
})
export class HandleError {
  constructor(private readonly createToast: CreateToast) {}

  public handler(input: HttpErrorResponse) {
    const errorMessage = input.error.message || 'Algo deu errado.';

    void this.emitError(errorMessage);

    console.error(input);

    return throwError(errorMessage);
  }

  private readonly emitError = async (errorMessage: string) => {
    const toastData: IToastData = {
      message: errorMessage,
      color: 'danger',
    };

    await this.createToast.create(toastData);
  };
}
