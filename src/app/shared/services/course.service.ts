import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CourseOutputModel } from "../models/course-output.model";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import {CourseInputModel} from "../models/course-input.model";

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

  deleteCourse(id: number) {
    return this._httpClient.delete(`${this._apiUrl}/courses/${id}`);
  }

  updateCourse(courseId: number | undefined, course: CourseInputModel) {
    return this._httpClient.put(`${this._apiUrl}/courses/${courseId}`, course);
  }
}
