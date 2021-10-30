import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NotifierTypes } from '../notifier/notifier-config';
import { NotifierMsg } from '../notifier/notifier-msg';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private notifierService: NotifierService, private route: ActivatedRoute) {}

  /**
   * Intercepts all request and responses.
   * If there´s no token, navigate to home.
   * If response throws an HttpError
   * unauthorized (401 - token expired) user is logged out.
   * @param req
   * @param next
   * @returns intercept
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | null = sessionStorage.getItem('fakeToken');

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      tap(
        // Responses ko
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 400: {
                this.notifierService.show({ type: NotifierTypes.error, message: NotifierMsg.BAD_REQUEST });
                break;
              }
              case 401: {
                this.notifierService.show({ type: NotifierTypes.info, message: NotifierMsg.ACCESS_NOT_ALLOWED });
                this.router.navigate(['/']);

                break;
              }
              case 404: {
                this.notifierService.show({ type: NotifierTypes.error, message: NotifierMsg.ROUTE_MISSING });
                break;
              }
              case 403: {
                this.notifierService.show({
                  type: 'warn',
                  message: NotifierMsg.ACCESS_NOT_ALLOWED
                });
                break;
              }
              case 500: {
                this.notifierService.show({ type: NotifierTypes.error, message: NotifierMsg.SYSTEM_ERROR });

                break;
              }
              case 0: {
                this.notifierService.show({ type: NotifierTypes.error, message: NotifierMsg.SYSTEM_ERROR });
                break;
              }
              default: {
                return;
              }
            }
          }
        }
      )
    );
  }
}
