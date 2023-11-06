import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then(module => module.CourseModule),
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(module => module.StudentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
