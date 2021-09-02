import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadTodo } from "store/actions/todo";
import { RootState } from "store/reducers";
import Todo from "types/todo";

const useTodo = () => {
  const dispatch = useDispatch();
  dispatch(loadTodo());
  const todo = useSelector((state: RootState) => state.todo);

  const [todoList, setTodoList] = useState<Todo[]>(todo.todoList);

  const changeInput = () => {};

  const onCreate = () => {};

  const toggleCheck = () => {};

  const onDelete = () => {};

  return {
    todoList,
    changeInput,
    onCreate,
    toggleCheck,
    onDelete,
  };
};

export default useTodo;
