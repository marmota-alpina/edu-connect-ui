import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NbDialogService } from "@nebular/theme";
import { CourseInputModel } from "../../../shared/models/course-input.model";
import { StudentInputModel } from "../../../shared/models/student-input.model";
import {CourseOutputModel} from "../../../shared/models/course-output.model";

@Component({
  selector: 'app-enroll-dialog',
  templateUrl: './enroll-dialog.component.html',
  styleUrls: ['./enroll-dialog.component.scss']
})
export class EnrollDialogComponent implements OnInit{

  @Input()
  courseModel: CourseOutputModel | undefined;
  @Input()
  buttonTitle = 'Realizar minha matrícula agora';
  @Input()
  buttonStatus: "basic" | "primary" | "success" | "warning" | "danger" | "info" | "control" = 'primary';
  @Input()
  cardTitle = 'Realizar Matrícula';
  @Output()
  formData = new EventEmitter<StudentInputModel>();
  form: FormGroup;


  constructor(private dialogService: NbDialogService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      course_id: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.form.patchValue({ course_id: this.courseModel?.id });
  }
  open(dialog: TemplateRef<any>) {
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
