import { Priority } from "./priority.type";

export interface Todo {
  description:string;
  dueDate:Date;
  priority:Priority;
}
