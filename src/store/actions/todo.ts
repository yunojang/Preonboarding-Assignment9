import { TodoTypes, TodoAction } from "./types/todo";
import Todo from "types/todo";

export const loadTodo = (): TodoAction => {
  return {
    type: TodoTypes.LOAD_TODO,
  };
};

export const createTodo = (newTodo: Todo): TodoAction => {
  return {
    type: TodoTypes.CREATE_TODO,
    newTodo,
  };
};

export const checkTodo = (id: number): TodoAction => {
  return {
    type: TodoTypes.CHECK_TODO,
    id,
  };
};

export const deleteTodo = (id: number): TodoAction => {
  return {
    type: TodoTypes.DELETE_TODO,
    id,
  };
};

export const setTodo = (todoList: Todo[]): TodoAction => {
  return {
    type: TodoTypes.SET_TODO,
    newTodoList: todoList,
  };
};
