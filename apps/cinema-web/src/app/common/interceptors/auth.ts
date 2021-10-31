import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NotifierTypes } from '../notifier/notifier-config';
import { NotifierMsg } from '../notifier/notifier-msg';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  @BlockUI() blockUI: NgBlockUI;

  constructor(private router: Router, private notifierService: NotifierService) {}

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
        () => {
          return;
        },
        // Responses ko
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 400: {
                this.notifierService.show({ type: NotifierTypes.error, message: NotifierMsg.BAD_REQUEST });
                this.router.navigate(['/']);
                break;
              }
              case 401: {
                this.notifierService.show({ type: NotifierTypes.info, message: NotifierMsg.ACCESS_NOT_ALLOWED });
                this.blockUI.stop();
                this.router.navigate(['/']);

                break;
              }
              case 404: {
                this.notifierService.show({ type: NotifierTypes.error, message: NotifierMsg.ROUTE_MISSING });
                this.blockUI.stop();
                this.router.navigate(['/']);
                break;
              }
              case 403: {
                this.notifierService.show({
                  type: 'warn',
                  message: NotifierMsg.ACCESS_NOT_ALLOWED
                });
                this.blockUI.stop();
                this.router.navigate(['/']);
                break;
              }
              case 500: {
                this.notifierService.show({ type: NotifierTypes.error, message: NotifierMsg.SYSTEM_ERROR });
                this.blockUI.stop();
                this.router.navigate(['/']);
                break;
              }
              case 0: {
                this.notifierService.show({ type: NotifierTypes.error, message: NotifierMsg.SYSTEM_ERROR });
                this.blockUI.stop();
                this.router.navigate(['/']);
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
