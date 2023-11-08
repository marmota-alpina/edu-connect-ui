import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NbDialogService } from "@nebular/theme";
import { CourseInputModel } from "../../../shared/models/course-input.model";

@Component({
  selector: 'app-create-course-dialog',
  templateUrl: './create-course-dialog.component.html',
  styleUrls: ['./create-course-dialog.component.scss']
})
export class CreateCourseDialogComponent implements OnInit{

  @Input()
  courseModel: CourseInputModel | undefined;
  @Input()
  buttonTitle = 'Novo Curso';
  @Input()
  buttonStatus: "basic" | "primary" | "success" | "warning" | "danger" | "info" | "control" = 'primary';
  @Input()
  cardTitle = 'Novo Curso';
  @Output()
  formData = new EventEmitter<CourseInputModel>();
  form: FormGroup;


  constructor(private dialogService: NbDialogService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: [''],
      course_load: ['', [Validators.required, Validators.min(1), Validators.max(500)]],
    });
  }
  ngOnInit(): void {
    this.form.patchValue({...this.courseModel});
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
