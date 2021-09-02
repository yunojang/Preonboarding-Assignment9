import React, { FC, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/reducers";

import { createTodo } from "store/actions/todo";
import Todo from "types/todo";
import Form from "./template/Form";

interface Props {}

const TodoCreate: FC<Props> = (props) => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todo);

  const getNextId = (): number => {
    return (
      todo.todoList.reduce(
        (maxId, todo) => (todo.id > maxId ? todo.id : maxId),
        0
      ) + 1
    );
  };

  const onCreate = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo: Todo = {
      id: getNextId(),
      content: input,
      checked: false,
    };

    setInput("");
    dispatch(createTodo(newTodo));
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <TodoForm onSubmit={onCreate}>
      <input
        type="text"
        placeholder="해야할 일을 입력하세요"
        value={input}
        onChange={onChangeInput}
      />
      <input type="submit" value="+" />
    </TodoForm>
  );
};

const TodoForm = styled(Form)`
  margin-bottom: 20px;
`;

export default TodoCreate;
