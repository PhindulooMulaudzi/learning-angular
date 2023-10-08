import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Request Interceptor', request);

    const newRequest = request.clone({
      headers: new HttpHeaders({ token: '1234df4' }),
    });

    if (request.method === 'POST') {
      console.log("modify request based on 'POST'");
    }

    // return next.handle(request);
    return next.handle(newRequest);
  }
}
