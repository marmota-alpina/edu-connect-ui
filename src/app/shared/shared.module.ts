import { NgModule } from '@angular/core';
import { CommonModule }                 from '@angular/common';
import {NbAlertModule, NbSpinnerModule} from '@nebular/theme';
import { LabelValueComponent } from './components/label-value/label-value.component';



@NgModule({
  declarations: [

  
    LabelValueComponent
  ],
  exports: [
    LabelValueComponent

  ],
  imports: [
    CommonModule,
    NbSpinnerModule,
    NbAlertModule
  ]
})
export class SharedModule { }
