import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleError } from './handleError.util';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private readonly handleError: HandleError) {}

  public intercept = (
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> => {
    return next.handle(httpRequest).pipe(catchError(this.handleError.handler));
  };
}
