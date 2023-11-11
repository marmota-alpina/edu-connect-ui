import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { NbToastrService } from "@nebular/theme";
import { Observable, of, shareReplay } from "rxjs";
import { StudentService } from "../../../shared/services/student.service";
import { StudentOutputModel } from "../../../shared/models/student-output.model";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

  student$: Observable<StudentOutputModel | null> = of();
  private _studentId: number = 0;

  constructor(private readonly _activatedRoute: ActivatedRoute, private readonly _studentService: StudentService,
              private _router: Router, private _toastrService: NbToastrService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this._studentId = params['id'];
      this.student$ = this._studentService.getStudent(this._studentId).pipe(shareReplay());
    });
  }

  deleteStudent(studentId: number) {
    if(!confirm(`Tem certeza de que deseja excluir o estudante? Esta ação é irreversível.`)) {
      return;
    }

    this._studentService.deleteStudent(studentId).subscribe({
      next: () => this._toastrService.success('Estudante excluído com sucesso!', 'Sucesso!'),
      error: (err) => this._toastrService.danger(err.error.message, 'Erro!'),
      complete: () => this.navigateToStudents(),
    });
  }

  navigateToStudents() {
    this._router.navigate(['/student']);
  }
}
