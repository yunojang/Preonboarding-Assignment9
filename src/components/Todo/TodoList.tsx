import { FC } from "react";
import styled from "styled-components";

import TodoItem from "./TodoItem";

interface Props {}

// temp mack data
interface Todo {
  id: number;
  content: string;
  checked: boolean;
}

const todoItems: Todo[] = [
  {
    id: 1,
    content: "typescript 뽀개기",
    checked: true,
  },
  {
    id: 2,
    content: "redux 뽀개기",
    checked: false,
  },
  {
    id: 3,
    content: "redux-saga 모르겠다",
    checked: false,
  },
  {
    id: 4,
    content: "기업 과제 제출",
    checked: false,
  },
];

const TodoList: FC<Props> = (props) => {
  return (
    <List>
      {todoItems &&
        todoItems.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
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
