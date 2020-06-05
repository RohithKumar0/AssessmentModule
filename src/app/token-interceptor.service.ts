import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    // const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyQGdtaWwuY29tIiwiZXhwIjoxNTkxMTgxMTM5LCJpYXQiOjE1OTExNjMxMzl9.awz5o6NL74iKfE5bcszbGK6iaJPIIGms2NNONhD2ZKmAgA-cHiG4Cls7w_RiJ42UjiyhiXfGqEVYlTBnP9iphw";
    const token = localStorage.getItem("token");
    const modifiedReq = req.clone({
      headers:req.headers.set('Authorization', 'Bearer ${token}')
    });

    return next.handle(modifiedReq);
  }
}
