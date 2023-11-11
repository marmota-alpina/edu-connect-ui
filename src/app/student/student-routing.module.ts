import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from "./student.component";
import { StudentDetailsComponent } from "./components/student-details/student-details.component";

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: StudentDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
