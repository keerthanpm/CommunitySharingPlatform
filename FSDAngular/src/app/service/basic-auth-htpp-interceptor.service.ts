import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    console.log("Hello Im Inside Interceptor")
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      console.log('Inside HTTP Interceptor')
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      })
    }

    return next.handle(req);

  }

  constructor() { }
}
