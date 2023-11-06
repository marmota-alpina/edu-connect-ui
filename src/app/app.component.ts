import { Component, inject, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  private cd = inject(ChangeDetectorRef);
  protected spinnerService = inject(SpinnerService);
  protected isLoading = false;
  protected now = new Date();

  ngAfterViewInit(): void {
    this.spinnerService.loadingObservable.subscribe((v) => {
      this.isLoading = v;
      this.cd.detectChanges();
    });
  }
}
