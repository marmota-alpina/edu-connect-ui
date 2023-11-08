import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {SpinnerService} from '../services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  protected spinnerService = inject(SpinnerService);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.startLoadingAnimation();
    return next.handle(request).pipe(
            finalize(() => {
              this.spinnerService.stopLoadingAnimation();
            })
    );
  }
}
