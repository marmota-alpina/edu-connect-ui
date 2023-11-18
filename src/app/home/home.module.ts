import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbListModule,
  NbSelectModule
} from "@nebular/theme";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { EnrollDialogComponent } from "./components/enroll-dialog/enroll-dialog.component";


@NgModule({
  declarations: [
    HomeComponent,
    EnrollDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    ReactiveFormsModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
    NbListModule,
    SharedModule,
    NbAccordionModule,
  ]
})
export class HomeModule { }
