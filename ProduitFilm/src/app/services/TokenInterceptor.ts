import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'; // Adjust path as needed

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const toExclude = "/login";
    // Skip adding Authorization header if the request is for the login endpoint
    if (request.url.search(toExclude) === -1) {
      const jwt = this.authService.getToken();
      const reqWithToken = request.clone({ 
        setHeaders: { Authorization: `Bearer ${jwt}` }
      });
      return next.handle(reqWithToken);
    }
    return next.handle(request);
  }
}
