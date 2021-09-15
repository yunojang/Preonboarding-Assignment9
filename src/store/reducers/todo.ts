import { TodoAction, TodoTypes } from "store/actions/types/todo";
import Todo from "types/todo";

export interface TodoState {
  todoList: Todo[];
}

const INITIAL_STATE: TodoState = {
  todoList: [],
};

export default function todoReducer(
  state = INITIAL_STATE,
  action: TodoAction
): TodoState {
  switch (action.type) {
    case TodoTypes.LOAD_TODO:
      return state;

    case TodoTypes.SET_TODO:
      if (!action.newTodoList) {
        return state;
      }

      return {
        ...state,
        todoList: action.newTodoList,
      };

    case TodoTypes.CREATE_TODO:
      let newTodo = Array.from(state.todoList);

      if (action.newTodo) {
        newTodo.push(action.newTodo);
      }

      return {
        ...state,
        todoList: newTodo,
      };

    case TodoTypes.CHECK_TODO:
      const toggleCheck = (todo: Todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo;

      return {
        ...state,
        todoList: state.todoList.map(toggleCheck),
      };

    case TodoTypes.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };

    default:
      return state;
  }
}
