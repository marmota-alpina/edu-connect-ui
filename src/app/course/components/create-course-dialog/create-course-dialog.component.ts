import { Component, EventEmitter, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NbDialogService } from "@nebular/theme";
import { CourseInputModel } from "../../../shared/models/course-input.model";

@Component({
  selector: 'app-create-course-dialog',
  templateUrl: './create-course-dialog.component.html',
  styleUrls: ['./create-course-dialog.component.scss']
})
export class CreateCourseDialogComponent {
  @Output()
  formData = new EventEmitter<CourseInputModel>();
  form: FormGroup;
  constructor(private dialogService: NbDialogService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      course_load: ['', [Validators.required, Validators.min(1), Validators.max(500)]],
    });
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
      ref.close();
    }
  }
}
