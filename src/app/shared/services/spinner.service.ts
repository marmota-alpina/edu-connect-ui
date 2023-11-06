import { Injectable } from '@angular/core';
import {Subject}      from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private loading = false;
  private totalRequests = 0;
  private loadingTimeout= 3000;
  private loading$: Subject<boolean> = new Subject<boolean>();
  loadingObservable = this.loading$.asObservable();
  constructor() { }

  startLoadingAnimation(finalize = false, timeout = -1){
    this.totalRequests++;
    this.loading = true;
    this.loading$.next(true);
    if(finalize) {
      setTimeout(() => this.stopLoadingAnimation(), timeout > 0 ? timeout : this.loadingTimeout);
    }
  }

  stopLoadingAnimation() {
    this.totalRequests--;
    if (this.totalRequests <= 0) {
      this.totalRequests = 0;
      this.loading = false;
      this.loading$.next(false)
    }
  }
  isLoading(): boolean {
    return this.loading;
  }
  getLoadingTimeout(): number {
    return this.loadingTimeout;
  }
  getLoadingTimeoutInSeconds(): number {
    return this.loadingTimeout / 1000;
  }
}
