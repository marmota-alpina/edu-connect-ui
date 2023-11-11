import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from "./course.component";
import { CourseDetailsComponent } from "./components/course-details/course-details.component";

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: CourseDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
