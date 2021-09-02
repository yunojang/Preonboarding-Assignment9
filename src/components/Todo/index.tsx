import { FC } from "react";
import styled from "styled-components";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Remain from "./Remain";

import { DARK_COLOR } from "constant/color";

interface Props {}

const Todo: FC<Props> = () => {
  return (
    <TodoContainer>
      <Title>TODO LIST</Title>
      <TodoForm />
      <Remain />
      <TodoList />
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  max-width: 650px;
  margin: auto;
  padding: 30px 40px;
  border-radius: 10px;
  background: #fff;
  color: ${DARK_COLOR};
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
  user-select: none;
`;

export default Todo;
