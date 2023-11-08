import { Component } from '@angular/core';
import { CourseService } from "../shared/services/course.service";
import { CourseInputModel } from "../shared/models/course-input.model";
import {CourseOutputModel} from "../shared/models/course-output.model";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent{

    courses$ = this._courseService.getCourses();
    constructor(private readonly _courseService: CourseService) { }

    saveCourse(course: CourseInputModel) {
      this._courseService.saveCourse(course).subscribe({
        next: (course) => this.courses$ = this._courseService.getCourses(),
      });
    }

  updateCourse(course: CourseOutputModel) {
    console.log(course);
  }

  deleteCourse(course: CourseOutputModel) {
    console.log(course)
  }
}
