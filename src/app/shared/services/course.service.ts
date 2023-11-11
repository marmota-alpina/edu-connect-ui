import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CourseOutputModel } from "../models/course-output.model";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { CourseInputModel } from "../models/course-input.model";
import { StudentInputModel } from "../models/student-input.model";
import {StudentOutputModel} from "../models/student-output.model";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _apiUrl = environment.apiUrl;
  constructor(private readonly _httpClient: HttpClient) { }

  saveCourse(course: any): Observable<CourseOutputModel> {
    return this._httpClient.post<CourseOutputModel>(`${this._apiUrl}/courses/`, course);
  }

  getCourses(): Observable<CourseOutputModel[]> {
    return this._httpClient.get<CourseOutputModel[]>(`${this._apiUrl}/courses/`);
  }
  getCourse(curseId: number | null): Observable<CourseOutputModel> {
    return this._httpClient.get<CourseOutputModel>(`${this._apiUrl}/courses/${curseId}`);
  }

  deleteCourse(id: number) {
    return this._httpClient.delete(`${this._apiUrl}/courses/${id}`);
  }

  updateCourse(courseId: number | undefined, course: CourseInputModel) {
    return this._httpClient.put(`${this._apiUrl}/courses/${courseId}`, course);
  }

  enroll(model: StudentInputModel) {
    return this._httpClient.post(`${this._apiUrl}/courses/${model.course_id}/enroll`, model);
  }
  getStudents(courseId: number | null): Observable<StudentOutputModel[]> {
    return this._httpClient.get<StudentOutputModel[]>(`${this._apiUrl}/courses/${courseId}/students`);
  }
}
