import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { StudentOutputModel } from "../models/student-output.model";
import { StudentInputModel } from "../models/student-input.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _apiUrl = environment.apiUrl;
  constructor(private readonly _httpClient: HttpClient) { }

  getStudents(): Observable<StudentOutputModel[]> {
    return this._httpClient.get<StudentOutputModel[]>(`${this._apiUrl}/students/`);
  }
  getStudent(studentId: number): Observable<StudentOutputModel> {
    return this._httpClient.get<StudentOutputModel>(`${this._apiUrl}/students/${studentId}`);
  }

  deleteStudent(id: number) {
    return this._httpClient.delete(`${this._apiUrl}/students/${id}`);
  }

  updateStudent(studentId: number | undefined, course: StudentInputModel) {
    return this._httpClient.put(`${this._apiUrl}/students/${studentId}`, course);
  }
}
