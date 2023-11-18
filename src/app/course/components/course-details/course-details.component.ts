import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of, shareReplay } from "rxjs";
import { CourseOutputModel } from "../../../shared/models/course-output.model";
import { CourseService } from "../../../shared/services/course.service";
import { StudentOutputModel } from "../../../shared/models/student-output.model";
import { NbToastrService } from "@nebular/theme";

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  course$: Observable<CourseOutputModel|null> = of(null);
  students$: Observable<StudentOutputModel[]> = of([]);
  private _courseId: number  = 0;
  constructor(private readonly _activatedRoute: ActivatedRoute, private readonly _courseService: CourseService,
              private _router: Router, private _toastrService: NbToastrService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this._courseId = params['id'];
      this.course$ = this._courseService.getCourse(this._courseId).pipe(shareReplay());
      this.students$ = this._courseService.getStudents(this._courseId).pipe(shareReplay());
    });
  }
  deleteCourse() {
    const confirmation = confirm(`Tem certeza de que deseja excluir o curso? Esta ação é irreversível.`);
    if (confirmation) {
      this._courseService.deleteCourse(this._courseId).subscribe({
        next: () => this._toastrService.success('Curso excluído com sucesso!', 'Sucesso!'),
        error: (err) => this._toastrService.danger(err.error.message, 'Erro!'),
        complete: () => this.navigateToCourses(),
      });
    }
  }

  navigateToCourses() {
    this._router.navigate(['/course']);
  }
}
