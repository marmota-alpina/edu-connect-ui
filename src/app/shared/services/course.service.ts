import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {CourseOutputModel} from "../models/course-output.model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private _apiUrl = environment.apiUrl;
  constructor(private readonly _httpClient: HttpClient) { }

  saveCourse(course: any): Observable<CourseOutputModel> {
    return this._httpClient.post<CourseOutputModel>(`${this._apiUrl}/courses`, course);
  }
}
