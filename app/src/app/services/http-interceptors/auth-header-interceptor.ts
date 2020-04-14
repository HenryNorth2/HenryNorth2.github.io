import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    console.log(request.url);

    const authReq = request.clone({
      setHeaders: { Authorization: '3B990EFF-921D-49B0-86BA-C497F82AF05F' },
      url: request.url.replace('http://', 'https://')
    })

    return next.handle(authReq);
  }
}
