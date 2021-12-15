import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IToastData } from '../models/toast.model';
import { CreateToast } from './createToast.util';
import { HandleError } from './handleError.util';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private readonly handleError: HandleError) {}

  public intercept = (
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> => {
    console.log("chegou no interceptor");
    
    return next.handle(httpRequest).pipe(catchError(this.handleError.handler));
  };
}
