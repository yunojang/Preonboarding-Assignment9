import { FC } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "store/reducers";

import TodoItem from "./TodoItem";

interface Props {}

const TodoList: FC<Props> = () => {
  const { todoList } = useSelector((state: RootState) => state.todo);

  return (
    <List>
      {todoList &&
        todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </List>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: column;

  li + li {
    margin-top: 10px;
  }
`;

export default TodoList;
