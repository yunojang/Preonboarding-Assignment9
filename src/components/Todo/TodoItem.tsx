import { FC } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import { checkTodo, deleteTodo } from "store/actions/todo";
import MAIN_COLOR, { DARK_COLOR } from "constant/color";

interface Todo {
  id: number;
  content: string;
  checked: boolean;
}

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  const toggleCheck = (id: number) => {
    dispatch(checkTodo(id));
  };

  const onDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Item>
      <LeftBox>
        <CheckSquare
          checked={todo.checked}
          onClick={() => toggleCheck(todo.id)}
        >
          {todo.checked && <CheckOutlined />}
        </CheckSquare>

        <Content checked={todo.checked}>{todo.content}</Content>
      </LeftBox>

      <DelButton onClick={() => onDelete(todo.id)}>
        <CloseOutlined />
      </DelButton>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  background: #f6f6f6;
  border-radius: 5px;
  font-size: 15px;
`;

const LeftBox = styled.div`
  display: flex;
  align-items: center;
`;

const CheckSquare = styled.button<{ checked: boolean }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  ${(props) => !props.checked && `border:1px solid ${MAIN_COLOR};`}
  font-size: 17px;
  color: ${DARK_COLOR};
`;

const Content = styled.span<{ checked: boolean }>`
  ${(props) =>
    props.checked &&
    css`
      color: #aaa;
      text-decoration: line-through;
    `}
`;

const DelButton = styled.button`
  color: ${DARK_COLOR};
  font-size: 16px;
`;

export default TodoItem;
