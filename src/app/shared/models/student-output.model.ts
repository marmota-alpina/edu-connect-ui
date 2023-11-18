import { CourseOutputModel } from "./course-output.model";

export interface StudentOutputModel{
  id: number,
  name: string,
  email: string,
  registration: string,
  course: CourseOutputModel
}
