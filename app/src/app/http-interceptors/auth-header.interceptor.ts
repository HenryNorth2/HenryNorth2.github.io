import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = '3B990EFF-921D-49B0-86BA-C497F82AF05F';
    const modifiedReq = req.clone({
      headers: req.headers.set('x-api-key', apiKey)
    });
    return next.handle(modifiedReq);
  }
}
