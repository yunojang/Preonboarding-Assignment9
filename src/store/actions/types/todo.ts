import Todo from "types/todo";

export enum TodoTypes {
  CREATE_TODO = "create_todo",
  SET_TODO = "set_todo",
  LOAD_TODO = "load_todo",
  CHECK_TODO = "check_todo",
  DELETE_TODO = "delete_todo",
}

export interface TodoAction {
  type: TodoTypes;
  newTodo?: Todo;
  newTodoList?: Todo[];
  id?: number;
}
