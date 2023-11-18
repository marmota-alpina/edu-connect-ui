import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NbDialogService } from "@nebular/theme";
import { StudentOutputModel } from "../../../shared/models/student-output.model";
import { StudentInputModel } from "../../../shared/models/student-input.model";
import { CourseOutputModel } from "../../../shared/models/course-output.model";

@Component({
  selector: 'app-update-student-dialog',
  templateUrl: './update-student-dialog.component.html',
  styleUrls: ['./update-student-dialog.component.scss']
})
export class UpdateStudentDialogComponent {

  @Input()
  studentModel: StudentOutputModel | undefined;
  @Input()
  buttonTitle = 'Alterar';
  @Input()
  buttonStatus: "basic" | "primary" | "success" | "warning" | "danger" | "info" | "control" = 'primary';
  @Input()
  cardTitle = 'Alterar Aluno';
  @Input()
  courseList: CourseOutputModel[] = [];
  @Output()
  formData = new EventEmitter<StudentInputModel>();
  form: FormGroup;


  constructor(private dialogService: NbDialogService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      course_id: ['', Validators.required],
    });
  }
  open(dialog: TemplateRef<any>) {
    this.form.patchValue({...this.studentModel, course_id: this.studentModel?.course.id});
    this.dialogService.open(dialog, {
      hasBackdrop: true,
      closeOnBackdropClick: false,
      autoFocus: false,
    });
  }

  save(ref: any) {
    if (this.form.valid) {
      this.formData.emit(this.form.value);
      this.form.reset();
      ref.close();
    }
  }
}
